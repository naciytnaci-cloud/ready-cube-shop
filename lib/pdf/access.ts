import fs from 'fs/promises'
import path from 'path'
import { verifyPdfViewToken } from '@/lib/pdf/token'

export type PdfAccessRecord = {
  token: string
  product: 'f2l'
  name: string
  email: string
  createdAt: string
  openedCount: number
  firstOpenedAt?: string | null
  lastAccessAt?: string | null
}

const ACCESS_DIR = path.join(process.cwd(), 'private', 'pdf-access')
const ACCESS_FILE = path.join(ACCESS_DIR, 'tokens.json')
const MAX_OPENS = 3
const FIRST_OPEN_TTL_MS = 24 * 60 * 60 * 1000

async function readStore() {
  try {
    const raw = await fs.readFile(ACCESS_FILE, 'utf8')
    return JSON.parse(raw) as Record<string, PdfAccessRecord>
  } catch {
    return {}
  }
}

async function writeStore(store: Record<string, PdfAccessRecord>) {
  await fs.mkdir(ACCESS_DIR, { recursive: true })
  await fs.writeFile(ACCESS_FILE, JSON.stringify(store, null, 2), 'utf8')
}

export async function createPdfAccessRecord(args: {
  token: string
  product: PdfAccessRecord['product']
  name: string
  email: string
}) {
  const store = await readStore()
  const record: PdfAccessRecord = {
    token: args.token,
    product: args.product,
    name: args.name,
    email: args.email,
    createdAt: new Date().toISOString(),
    openedCount: 0,
    firstOpenedAt: null,
    lastAccessAt: null,
  }
  store[args.token] = record
  await writeStore(store)
  return record
}

export async function checkPdfAccess(args: { token: string; touch?: boolean }) {
  const verified = verifyPdfViewToken(args.token)
  if (!verified.ok) {
    return { ok: false as const, reason: verified.reason }
  }

  const store = await readStore()
  const record = store[args.token]
  if (!record) {
    return { ok: false as const, reason: 'not_found' }
  }
  if (record.product !== verified.payload.product) {
    return { ok: false as const, reason: 'product_mismatch' }
  }

  const now = Date.now()
  const firstOpenedAt = record.firstOpenedAt ? Date.parse(record.firstOpenedAt) : null
  if (firstOpenedAt && now - firstOpenedAt > FIRST_OPEN_TTL_MS) {
    return { ok: false as const, reason: 'expired' }
  }
  if (record.openedCount >= MAX_OPENS) {
    return { ok: false as const, reason: 'maxed' }
  }

  if (args.touch) {
    record.firstOpenedAt = record.firstOpenedAt ?? new Date().toISOString()
    record.openedCount = (record.openedCount || 0) + 1
    record.lastAccessAt = new Date().toISOString()
    store[args.token] = record
    await writeStore(store)
  }

  return { ok: true as const, payload: verified.payload, record }
}

