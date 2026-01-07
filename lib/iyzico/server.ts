export type IyzicoMode = 'sandbox' | 'live'

export function getIyzicoMode(): IyzicoMode {
  const raw = String(process.env.IYZICO_MODE || '').toLowerCase()
  if (raw === 'live' || raw === 'production') return 'live'
  if (raw === 'sandbox' || raw === 'test') return 'sandbox'

  // Safe default: sandbox unless explicitly live
  return 'sandbox'
}

export function getIyzicoBaseUrl(): string {
  const mode = getIyzicoMode()
  return mode === 'live' ? 'https://api.iyzipay.com' : 'https://sandbox-api.iyzipay.com'
}

export function assertProductionSafe() {
  // If you ship a production build, we don't want sandbox payments by mistake.
  if (process.env.NODE_ENV === 'production' && getIyzicoMode() !== 'live') {
    throw new Error('IYZICO_MODE must be "live" in production.')
  }
}


