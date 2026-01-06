export type ShippingCarrier = 'Yurtiçi Kargo' | 'MNG Kargo' | 'Aras Kargo'

export const SHIPPING_CARRIERS: ShippingCarrier[] = ['Yurtiçi Kargo', 'MNG Kargo', 'Aras Kargo']

type ShippingResult =
  | { status: 'unknown' }
  | { status: 'free'; cost: 0; label: string }
  | { status: 'paid'; cost: number; label: string }

/**
 * Turkey-only shipping pricing (no carrier API).
 * - If subtotal is not known (0/NaN), return unknown.
 * - Optional free shipping threshold. Otherwise fixed fee.
 */
export function getShipping(subtotalTry: number): ShippingResult {
  if (!Number.isFinite(subtotalTry) || subtotalTry <= 0) return { status: 'unknown' }

  const fixed = Number(process.env.NEXT_PUBLIC_SHIPPING_FLAT_TRY || '79')
  const freeThreshold = Number(process.env.NEXT_PUBLIC_SHIPPING_FREE_OVER_TRY || '0')

  if (Number.isFinite(freeThreshold) && freeThreshold > 0 && subtotalTry >= freeThreshold) {
    return { status: 'free', cost: 0, label: 'Ücretsiz kargo' }
  }

  if (!Number.isFinite(fixed) || fixed < 0) return { status: 'unknown' }
  return { status: 'paid', cost: fixed, label: `Kargo: ₺${fixed.toFixed(2)}` }
}

export function formatTry(amount: number): string {
  if (!Number.isFinite(amount) || amount <= 0) return 'Yakında'
  return `₺${amount.toFixed(2)}`
}


