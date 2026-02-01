'use client'

import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

interface CheckoutComingSoonModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function CheckoutComingSoonModal({
  isOpen,
  onClose,
}: CheckoutComingSoonModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          onClose()
        }
      }
      document.addEventListener('keydown', handleEscape)
      return () => {
        document.removeEventListener('keydown', handleEscape)
        document.body.style.overflow = ''
      }
    } else {
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const title = 'Ödeme Yakında Açılıyor'
  const message1 = 'Ödemeler resmi lansman sonrası açılacaktır.'
  const message2 = "Şu anda sadece Türkiye'de mevcut."
  const closeButton = 'Kapat'

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="relative bg-white rounded-lg shadow-xl max-w-md w-full p-6 sm:p-8 transform transition-all duration-300 ease-out scale-100 opacity-100"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
          onClick={onClose}
          aria-label={closeButton}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="text-center py-4">
          {/* Icon */}
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-gray-50 mb-6">
            <svg
              className="h-8 w-8 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          {/* Title */}
          <h3
            className="text-2xl font-bold text-gray-900 mb-4"
            id="modal-title"
          >
            {title}
          </h3>

          {/* Messages */}
          <div className="space-y-3 mb-8">
            <p className="text-base text-gray-700 leading-relaxed font-normal">
              {message1}
            </p>
            <p className="text-base text-gray-700 leading-relaxed font-normal">
              {message2}
            </p>
          </div>

          {/* Close Button */}
          <button
            type="button"
            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-6 py-3 bg-gray-900 text-base font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200"
            onClick={onClose}
          >
            {closeButton}
          </button>
        </div>
      </div>
    </div>,
    document.body
  )
}

