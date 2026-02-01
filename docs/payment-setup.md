# Ödeme Kurulumu (iyzico)

Bu proje **iyzico Checkout Form** yaklaşımıyla (3D Secure dahil) hazırlanmıştır.

## Gerekli Environment Variable’lar

Uygulamayı çalıştırmadan önce aşağıdaki değişkenleri `.env.local` dosyanıza ekleyin:

```bash
# Public (client tarafında da kullanılır)
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_PRODUCT_PRICE_TRY=199.99
NEXT_PUBLIC_SALES_ENABLED=true

# iyzico
# - sandbox: test ödemeleri
# - live: gerçek ödemeler
IYZICO_MODE=sandbox
IYZICO_API_KEY=YOUR_API_KEY
IYZICO_SECRET_KEY=YOUR_SECRET_KEY

# Shipping (Türkiye içi)
NEXT_PUBLIC_SHIPPING_FLAT_TRY=79
NEXT_PUBLIC_SHIPPING_FREE_OVER_TRY=0

# Email (SMTP) - opsiyonel, sipariş onayı e-postası için
SMTP_HOST=smtp.example.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=YOUR_SMTP_USER
SMTP_PASS=YOUR_SMTP_PASS
SMTP_FROM=Ready Cube <no-reply@readycube.shop>
```

## Akış

- `/shop` veya `/product` → **Satın Al** → ürünü sepete ekler → `/cart`
- `/cart` → **Checkout’a Devam Et** → `/checkout`
- `/checkout` → **Ödemeye Geç** → `/api/payments/iyzico/initialize` çağrılır
- Dönüş: `/checkout/pay` sayfası iyzico form HTML içeriğini render eder
- Callback: iyzico `callbackUrl` → `/api/payments/iyzico/callback`
- Başarılı ödeme sonrası: `/order/success?order=...` (sipariş no gösterilir)
- Başarısız ödeme sonrası: `/order/failed`

## Notlar

- `NEXT_PUBLIC_PRODUCT_PRICE_TRY` değeri **0** ise ödeme başlatma butonu pasif kalır.
- Production’da **gerçek ödeme** için: `IYZICO_MODE=live` + canlı anahtarlar.
- Production build’de `IYZICO_MODE` live değilse API hata verir (yanlışlıkla sandbox ile canlıya çıkmayı engellemek için).
- SMTP env’leri tanımlıysa sipariş onayı e-postası gönderilir; değilse sistem sessizce pas geçer.

## Stripe Payment Link (PDF dijital ürün)

F2L PDF için backend kullanmadan Stripe Payment Link akışı kullanılır.

### Stripe tarafı (test modu)

- Ürün adı: **3x3 F2L Yeni Başlayanlar Rehberi (PDF)**
- Fiyat: **0.50 USD**
- Product type: **Digital product** (kargo/adres istemez)
- Checkout: **Collect customer email** açık olmalı
- Success URL: `https://readycube.site/pdf/success` (lokalde `http://localhost:3000/pdf/success`)
- Cancel URL: `https://readycube.site/pdf/3x3-f2l-yeni-baslayanlar`

Oluşturduğunuz Payment Link'i `.env.local` dosyasına ekleyin:

```bash
NEXT_PUBLIC_STRIPE_PDF_PAYMENT_LINK=https://buy.stripe.com/test_XXXXXXXXXXXXXXXXXXXX
```

Not: Canlıya çıkarken Stripe dashboard'da canlı moda geçip yeni bir Payment Link üretin.


