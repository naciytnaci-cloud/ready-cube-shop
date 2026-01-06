import net from 'net'
import tls from 'tls'

type SMTPConfig = {
  host: string
  port: number
  secure: boolean // true for 465
  user?: string
  pass?: string
  from: string
}

function b64(s: string) {
  return Buffer.from(s, 'utf8').toString('base64')
}

function readEnv(name: string) {
  return process.env[name]
}

function getSmtpConfig(): SMTPConfig | null {
  const host = readEnv('SMTP_HOST')
  const port = Number(readEnv('SMTP_PORT') || '0')
  const from = readEnv('SMTP_FROM')

  if (!host || !port || !from) return null
  return {
    host,
    port,
    secure: String(readEnv('SMTP_SECURE') || '').toLowerCase() === 'true' || port === 465,
    user: readEnv('SMTP_USER'),
    pass: readEnv('SMTP_PASS'),
    from,
  }
}

async function smtpSend(config: SMTPConfig, to: string, rawMessage: string) {
  const socket = config.secure
    ? tls.connect({ host: config.host, port: config.port })
    : net.connect({ host: config.host, port: config.port })

  socket.setEncoding('utf8')

  let buffer = ''
  const waitFor = (code: string) =>
    new Promise<void>((resolve, reject) => {
      const onData = (chunk: string) => {
        buffer += chunk
        // handle multi-line responses; check last line starts with code + space
        const lines = buffer.split('\n')
        const last = lines[lines.length - 2] || ''
        if (last.startsWith(code + ' ')) {
          socket.off('data', onData)
          resolve()
        } else if (last.startsWith('5') || last.startsWith('4')) {
          socket.off('data', onData)
          reject(new Error(`SMTP error: ${last.trim()}`))
        }
      }
      socket.on('data', onData)
      socket.once('error', reject)
    })

  const send = (cmd: string) => socket.write(cmd + '\r\n')

  await waitFor('220')
  send('EHLO readycube')
  await waitFor('250')

  if (config.user && config.pass) {
    send('AUTH LOGIN')
    await waitFor('334')
    send(b64(config.user))
    await waitFor('334')
    send(b64(config.pass))
    await waitFor('235')
  }

  send(`MAIL FROM:<${config.from}>`)
  await waitFor('250')
  send(`RCPT TO:<${to}>`)
  await waitFor('250')
  send('DATA')
  await waitFor('354')
  socket.write(rawMessage.replace(/\n/g, '\r\n') + '\r\n.\r\n')
  await waitFor('250')
  send('QUIT')
  socket.end()
}

export async function sendEmail(args: { to: string; subject: string; text: string }) {
  const config = getSmtpConfig()
  if (!config) {
    // no-op if not configured
    return { sent: false, reason: 'SMTP_NOT_CONFIGURED' as const }
  }

  const message =
    `From: ${config.from}\n` +
    `To: ${args.to}\n` +
    `Subject: ${args.subject}\n` +
    `MIME-Version: 1.0\n` +
    `Content-Type: text/plain; charset=UTF-8\n` +
    `\n` +
    `${args.text}\n`

  await smtpSend(config, args.to, message)
  return { sent: true, reason: 'SENT' as const }
}


