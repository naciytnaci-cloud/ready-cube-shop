'use client'

import { useId, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'

function isValidEmail(input: string) {
  // Basit, pratik doğrulama (ödeme entegrasyonu gelince server-side doğrulama da eklenebilir)
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input)
}

export default function PurchaseForm() {
  const router = useRouter()
  const emailId = useId()
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const trimmedEmail = useMemo(() => email.trim(), [email])

  return (
    <div className="rounded-xl border border-[#111111]/10 bg-white p-5 sm:p-6">
      <form
        className="space-y-4"
        noValidate
        onSubmit={async (e) => {
          e.preventDefault()
          setError(null)

          if (!trimmedEmail) {
            setError('Lütfen e-posta adresinizi girin.')
            return
          }
          if (!isValidEmail(trimmedEmail)) {
            setError('Lütfen geçerli bir e-posta adresi girin.')
            return
          }

          try {
            setIsSubmitting(true)
            const res = await fetch('/api/pdf/purchase', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ email: trimmedEmail }),
            })

            if (!res.ok) {
              const data = (await res.json().catch(() => null)) as any
              setError(String(data?.message || 'Bir hata oluştu. Lütfen tekrar deneyin.'))
              return
            }

            router.push('/pdf/success')
          } catch {
            setError('Bir hata oluştu. Lütfen tekrar deneyin.')
          } finally {
            setIsSubmitting(false)
          }
        }}
      >
        <div>
          <label htmlFor={emailId} className="block text-sm font-medium text-dark">
            E-posta
          </label>
          <input
            id={emailId}
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ornek@eposta.com"
            className="mt-2 w-full rounded-md border border-[#111111]/15 bg-white px-4 py-3 text-dark placeholder:text-gray-400 outline-none focus:border-[#111111]/30 focus:ring-2 focus:ring-[#111111]/10"
            autoComplete="email"
            inputMode="email"
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? `${emailId}-error` : undefined}
          />
          <p className="mt-2 text-xs text-gray-500">
            PDF teslimi için zorunludur.
          </p>
          {error && (
            <p id={`${emailId}-error`} className="mt-2 text-sm text-red-600">
              {error}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center px-8 py-4 bg-brand hover:bg-brand-hover active:bg-brand-hover disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-md transition-colors duration-200 ease-out min-h-[48px] touch-manipulation btn-active-feedback"
        >
          {isSubmitting ? 'Gönderiliyor…' : 'Satın Al'}
        </button>

        <p className="text-xs text-gray-500">
          PDF, ödeme sonrası e-posta ile gönderilir.
        </p>
      </form>
    </div>
  )
}


