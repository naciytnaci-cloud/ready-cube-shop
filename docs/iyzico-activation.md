# iyzico Activation Guide

**⚠️ IMPORTANT: This document is for future use only. Do not activate payments until legal entity is established and all requirements are met.**

This guide outlines the steps required to activate iyzico payment processing for Ready Cube after the company setup is complete.

---

## Prerequisites

Before starting the iyzico activation process, ensure the following are completed:

- ✅ Legal company entity established (Ltd. Şti. or A.Ş.)
- ✅ Tax identification number (Vergi Kimlik Numarası) obtained
- ✅ Business bank account opened
- ✅ Company registration documents ready
- ✅ Tax office registration completed
- ✅ KVKK (GDPR) compliance measures in place

---

## Step 1: iyzico Merchant Account Application

### 1.1 Create iyzico Account

1. Visit [iyzico Merchant Portal](https://merchant.iyzipay.com/)
2. Click "Hemen Başvur" (Apply Now)
3. Select "E-ticaret" (E-commerce) as business type
4. Fill out the merchant application form

### 1.2 Required Information

You will need to provide:

- **Company Information:**
  - Company name (Unvan)
  - Tax ID (Vergi Kimlik Numarası)
  - Trade Registry number (Ticaret Sicil Numarası)
  - Company address
  - Phone number
  - Email address

- **Business Information:**
  - Business type (E-commerce)
  - Website URL
  - Expected monthly transaction volume
  - Product/service description

- **Bank Account:**
  - Bank name
  - Account holder name (must match company name)
  - IBAN
  - Account number

- **Contact Person:**
  - Full name
  - Title/Position
  - Email
  - Phone number

---

## Step 2: Required Documents

Prepare and upload the following documents:

### 2.1 Company Documents

- ✅ **Company Registration Certificate** (Ticaret Sicil Gazetesi)
- ✅ **Tax Office Certificate** (Vergi Levhası)
- ✅ **Company Articles of Association** (Şirket Sözleşmesi)
- ✅ **Signature Circular** (İmza Sirküleri)
- ✅ **Activity Certificate** (Faaliyet Belgesi)

### 2.2 Financial Documents

- ✅ **Bank Account Statement** (Son 3 ay)
- ✅ **Bank Account Opening Document** (Hesap Açılış Belgesi)
- ✅ **IBAN Certificate** (IBAN Belgesi)

### 2.3 Identity Documents

- ✅ **Authorized Person ID** (Yetkili Kişi Kimlik Fotokopisi)
- ✅ **Power of Attorney** (if applicable) (Vekaletname)

### 2.4 Additional Documents

- ✅ **Website Screenshot** (showing company information)
- ✅ **Domain Ownership Certificate** (if applicable)
- ✅ **Privacy Policy** (KVKK/GDPR compliant)
- ✅ **Terms of Service** (Kullanım Şartları)
- ✅ **Return/Refund Policy** (İade/İptal Politikası)

---

## Step 3: Account Verification Process

### 3.1 Document Review

- iyzico will review all submitted documents
- Review process typically takes **3-7 business days**
- You may receive requests for additional documents

### 3.2 Account Approval

- Once approved, you'll receive:
  - Merchant account credentials
  - API keys (Test and Production)
  - Merchant portal access

### 3.3 Test Environment

- Use test API keys to verify integration
- Test all payment scenarios:
  - Successful payments
  - Failed payments
  - Refunds
  - Installment options

---

## Step 4: API Key Integration

### 4.1 Locate API Keys

After account approval, you'll receive:

- **API Key** (Public key)
- **Secret Key** (Private key - keep secure!)
- **Base URL** (Test: `https://sandbox-api.iyzipay.com`, Production: `https://api.iyzipay.com`)

### 4.2 Environment Variables Setup

Create/update `.env.local` file:

```env
# iyzico Configuration
IYZICO_API_KEY=your_api_key_here
IYZICO_SECRET_KEY=your_secret_key_here
IYZICO_BASE_URL=https://sandbox-api.iyzipay.com  # Test environment
# IYZICO_BASE_URL=https://api.iyzipay.com  # Production (uncomment when ready)
```

### 4.3 Code Integration Points

#### 4.3.1 Update Payment Configuration

File: `/lib/payments/iyzico-config.ts` (create if doesn't exist)

```typescript
export const iyzicoConfig = {
  apiKey: process.env.IYZICO_API_KEY!,
  secretKey: process.env.IYZICO_SECRET_KEY!,
  baseUrl: process.env.IYZICO_BASE_URL || 'https://api.iyzipay.com',
}
```

#### 4.3.2 Replace Mock Implementation

File: `/lib/payments/iyzico-mock.ts`

- Replace `simulateIyzicoPayment()` with real iyzico API calls
- Use iyzico Node.js SDK: `npm install iyzipay`
- Implement actual payment processing logic

#### 4.3.3 Update Checkout Flow

File: `/app/checkout/page.tsx` (create when ready)

- Integrate iyzico payment form
- Handle payment callbacks
- Update order status based on payment result

### 4.4 Security Best Practices

- ✅ **Never commit API keys to Git**
- ✅ Use environment variables only
- ✅ Add `.env.local` to `.gitignore`
- ✅ Rotate keys if exposed
- ✅ Use different keys for test/production
- ✅ Enable IP whitelisting in iyzico dashboard (if available)

---

## Step 5: Safety Checklist Before Enabling Payments

Complete this checklist before going live with payments:

### 5.1 Legal & Compliance

- [ ] Company legally registered and active
- [ ] Tax obligations understood and planned
- [ ] KVKK/GDPR compliance verified
- [ ] Privacy Policy published and accessible
- [ ] Terms of Service published and accessible
- [ ] Return/Refund Policy clearly stated
- [ ] Consumer protection laws compliance checked

### 5.2 Technical

- [ ] Test environment fully tested
- [ ] All payment scenarios tested (success, failure, refund)
- [ ] Error handling implemented
- [ ] Payment webhooks configured
- [ ] Order management system ready
- [ ] Database backup strategy in place
- [ ] SSL certificate installed and valid
- [ ] HTTPS enforced site-wide

### 5.3 Security

- [ ] API keys stored in environment variables
- [ ] `.env.local` in `.gitignore`
- [ ] No sensitive data in code repository
- [ ] Payment data encrypted in transit
- [ ] PCI DSS compliance understood (if storing card data)
- [ ] Security headers configured
- [ ] Rate limiting implemented

### 5.4 Business Operations

- [ ] Inventory management system ready
- [ ] Shipping logistics planned
- [ ] Customer service process defined
- [ ] Refund process documented
- [ ] Order fulfillment workflow ready
- [ ] Accounting system integration planned

### 5.5 Testing

- [ ] Test payments successful
- [ ] Test refunds successful
- [ ] Test error scenarios handled
- [ ] Mobile payment flow tested
- [ ] Different payment methods tested
- [ ] Installment options tested (if applicable)

### 5.6 Documentation

- [ ] Payment flow documented
- [ ] Error handling documented
- [ ] Refund process documented
- [ ] Customer support team trained
- [ ] Emergency contact list ready

---

## Step 6: Going Live

### 6.1 Final Checks

1. Switch to production API keys
2. Update `IYZICO_BASE_URL` to production
3. Verify SSL certificate
4. Test one real transaction (small amount)
5. Verify funds received in bank account

### 6.2 Monitoring

- Monitor payment success rates
- Track failed transactions
- Review customer complaints
- Monitor iyzico dashboard regularly
- Set up alerts for payment issues

### 6.3 Support

- Keep iyzico support contact information
- Document common issues and solutions
- Train customer service team
- Prepare escalation process

---

## Step 7: Post-Activation

### 7.1 Regular Tasks

- Monthly reconciliation with bank statements
- Review payment analytics
- Update documentation as needed
- Security audits
- Compliance reviews

### 7.2 Maintenance

- Keep iyzico SDK updated
- Monitor for security updates
- Review and update policies
- Regular backup verification

---

## Important Contacts

- **iyzico Support:** [support@iyzipay.com](mailto:support@iyzipay.com)
- **iyzico Documentation:** [https://dev.iyzipay.com/](https://dev.iyzipay.com/)
- **iyzico Merchant Portal:** [https://merchant.iyzipay.com/](https://merchant.iyzipay.com/)

---

## Notes

- This document is for internal planning and future reference only
- Do not activate payments until all prerequisites are met
- Consult with legal and financial advisors before enabling payments
- Keep this document updated as requirements change
- Review iyzico's latest documentation before activation

---

**Last Updated:** [Date to be filled when activation begins]  
**Status:** Planning Phase - Not Yet Activated

