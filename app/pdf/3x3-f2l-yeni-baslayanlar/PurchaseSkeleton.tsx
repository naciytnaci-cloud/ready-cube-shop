import { STRIPE_PDF_PAYMENT_LINK } from '@/lib/publicConfig'

export default function PurchaseSkeleton() {
  return (
    <>
      <a
        href={STRIPE_PDF_PAYMENT_LINK}
        className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-brand hover:bg-brand-hover active:bg-brand-hover text-white font-semibold rounded-md transition-colors duration-200 ease-out min-h-[48px] touch-manipulation btn-active-feedback"
        rel="noopener noreferrer"
      >
        Satın Al – 0.50$
      </a>
    </>
  )
}

