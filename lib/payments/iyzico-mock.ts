/**
 * MOCK IYZICO PAYMENT SIMULATION
 * 
 * ⚠️ WARNING: THIS IS A MOCK/TEST ONLY IMPLEMENTATION ⚠️
 * 
 * This file contains simulated payment logic for development and testing purposes.
 * NO REAL PAYMENTS ARE PROCESSED.
 * NO REAL API CALLS ARE MADE.
 * NO FINANCIAL TRANSACTIONS OCCUR.
 * 
 * This mock implementation:
 * - Simulates iyzico payment processing
 * - Returns success after 1 second delay
 * - Used for testing checkout flow without legal/financial risk
 * 
 * DO NOT USE IN PRODUCTION.
 * Replace with real iyzico integration when ready for live payments.
 */

export type PaymentStatus = 'pending' | 'succeeded' | 'failed' | 'cancelled'

export interface MockIyzicoPaymentRequest {
  amount: number
  currency: string
  orderId: string
  customerEmail: string
  customerName: string
  customerPhone?: string
  billingAddress?: {
    city: string
    country: string
    address: string
    zipCode: string
  }
}

export interface MockIyzicoPaymentResponse {
  success: boolean
  status: PaymentStatus
  transactionId: string
  orderId: string
  amount: number
  currency: string
  message: string
  timestamp: string
  // Mock specific fields
  isMock: true
  warning: string
}

/**
 * Simulates an iyzico payment processing
 * 
 * ⚠️ MOCK/TEST ONLY - NO REAL PAYMENT PROCESSING ⚠️
 * 
 * @param request - Payment request data
 * @returns Promise that resolves to a mock payment response after 1 second
 * 
 * @example
 * ```typescript
 * const result = await simulateIyzicoPayment({
 *   amount: 1500.00,
 *   currency: 'TRY',
 *   orderId: 'order-123',
 *   customerEmail: 'customer@example.com',
 *   customerName: 'John Doe'
 * })
 * ```
 */
export async function simulateIyzicoPayment(
  request: MockIyzicoPaymentRequest
): Promise<MockIyzicoPaymentResponse> {
  // Log mock usage in development only (removed in production)
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.warn('⚠️ MOCK PAYMENT: Using simulated iyzico payment. No real transaction will occur.')
  }

  // Simulate network delay (1 second)
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Generate mock transaction ID
  const transactionId = `mock_iyzico_${Date.now()}_${Math.random().toString(36).substring(7)}`

  // Simulate payment success (always succeeds in mock)
  const response: MockIyzicoPaymentResponse = {
    success: true,
    status: 'succeeded',
    transactionId,
    orderId: request.orderId,
    amount: request.amount,
    currency: request.currency,
    message: 'Payment processed successfully (MOCK)',
    timestamp: new Date().toISOString(),
    isMock: true,
    warning: 'This is a MOCK payment. No real transaction occurred. DO NOT USE IN PRODUCTION.',
  }

  return response
}

/**
 * Simulates payment failure (for testing error handling)
 * 
 * ⚠️ MOCK/TEST ONLY ⚠️
 */
export async function simulateIyzicoPaymentFailure(
  request: MockIyzicoPaymentRequest,
  errorMessage?: string
): Promise<MockIyzicoPaymentResponse> {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const transactionId = `mock_iyzico_failed_${Date.now()}_${Math.random().toString(36).substring(7)}`

  return {
    success: false,
    status: 'failed',
    transactionId,
    orderId: request.orderId,
    amount: request.amount,
    currency: request.currency,
    message: errorMessage || 'Payment failed (MOCK)',
    timestamp: new Date().toISOString(),
    isMock: true,
    warning: 'This is a MOCK payment failure. No real transaction occurred.',
  }
}

/**
 * Validates payment request data
 * 
 * @param request - Payment request to validate
 * @returns Validation result with errors if any
 */
export function validatePaymentRequest(
  request: MockIyzicoPaymentRequest
): { valid: boolean; errors: string[] } {
  const errors: string[] = []

  if (!request.amount || request.amount <= 0) {
    errors.push('Amount must be greater than 0')
  }

  if (!request.currency || request.currency.length !== 3) {
    errors.push('Currency must be a valid 3-letter code (e.g., TRY, USD)')
  }

  if (!request.orderId || request.orderId.trim().length === 0) {
    errors.push('Order ID is required')
  }

  if (!request.customerEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(request.customerEmail)) {
    errors.push('Valid customer email is required')
  }

  if (!request.customerName || request.customerName.trim().length === 0) {
    errors.push('Customer name is required')
  }

  return {
    valid: errors.length === 0,
    errors,
  }
}

