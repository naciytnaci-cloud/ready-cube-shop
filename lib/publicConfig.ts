export const SALES_ENABLED = process.env.NEXT_PUBLIC_SALES_ENABLED === 'true'

export const PRODUCT_PRICE_TRY = Number(process.env.NEXT_PUBLIC_PRODUCT_PRICE_TRY || '0')

export function formatTryAmount(amount: number): string {
  if (!Number.isFinite(amount) || amount <= 0) return 'Yakında'
  return `₺${amount.toFixed(2)}`
}


