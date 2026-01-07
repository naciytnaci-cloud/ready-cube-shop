# Ready Cube - Production Deployment Checklist

## Pre-Deployment Verification ✅

### Build Status
- ✅ Build successful: `npm run build` completes without errors
- ✅ All 16 pages generated successfully
- ✅ Static pages: 15 pages pre-rendered
- ✅ Dynamic pages: 1 page (`/shop/[slug]`)
- ✅ Total bundle size: ~87.3 kB shared JS
- ✅ No TypeScript errors
- ✅ No linting errors

### Pages Verified
- ✅ `/` - Ana sayfa
- ✅ `/shop` - Tek ürün mağaza sayfası
- ✅ `/product` - Ürün detay
- ✅ `/cart` - Sepet
- ✅ `/checkout` - Checkout
- ✅ `/checkout/pay` - iyzico form sayfası
- ✅ `/order/success` - Sipariş başarılı
- ✅ `/order/failed` - Sipariş başarısız
- ✅ `/about` - Hakkımızda
- ✅ `/contact` - İletişim
- ✅ Footer - Linkler ve yerleşim

### Configuration Files
- ✅ `vercel.json` - Deployment config created
- ✅ `next.config.js` - Optimized for production
- ✅ `tailwind.config.js` - Properly configured
- ✅ `package.json` - All dependencies listed
- ✅ `.gitignore` - Proper exclusions

## Deployment Steps

### 1. GitHub Repository Setup

```bash
# Ensure all changes are committed
git add .
git commit -m "Production ready: Final polish and optimizations"
git push origin main
```

### 2. Vercel Deployment

#### Via Dashboard (Recommended):
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New..." → "Project"
4. Select your repository
5. Vercel auto-detects Next.js 14
6. Click "Deploy" (no configuration needed)

#### Settings (Auto-detected):
- Framework: Next.js
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`
- Node Version: 18.x (auto)

### 3. Post-Deployment Verification

#### Home Page (`/`)
- [ ] Hero section displays correctly
- [ ] Featured product card visible
- [ ] Coming soon section visible
- [ ] Trust badges section visible
- [ ] Footer visible

#### Navigation
- [ ] Header linkleri çalışıyor (Ana Sayfa, Çanta, Hakkımızda)
- [ ] Mobile menu opens/closes smoothly
- [ ] Language switcher functional (TR/EN)
- [ ] Sticky header works correctly

#### Shop / Product
- [ ] `/shop` sayfası yükleniyor
- [ ] `/product` sayfası yükleniyor
- [ ] Badge doğru: Satışta / Yakında
- [ ] Fiyat doğru görünüyor

#### Checkout / Payment
- [ ] `/checkout` form alanları doğru (Ad, Soyad, Telefon, E‑posta, T.C. Kimlik No, Adres, Şehir, Posta Kodu)
- [ ] Kargo ücreti doğru hesaplanıyor
- [ ] Ödemeye Geç → iyzico formu açılıyor (`/checkout/pay`)
- [ ] Callback sonrası success/failed sayfaları çalışıyor
- [ ] Başarılı sayfada sipariş no görünüyor

#### About Page
- [ ] All sections display correctly
- [ ] Typography and spacing consistent
- [ ] Links functional

#### Footer
- [ ] All links functional
- [ ] Copyright text visible
- [ ] Proper spacing and layout

#### Responsive Design
- [ ] Mobile (320px-768px):
  - [ ] Stacked layout
  - [ ] Touch-friendly targets (44px min)
  - [ ] Mobile menu functional
  - [ ] No horizontal scroll
- [ ] Tablet (768px-1024px):
  - [ ] 2-column grids
  - [ ] Proper spacing
- [ ] Desktop (1024px+):
  - [ ] Full layout
  - [ ] Hover effects work
  - [ ] Smooth transitions

#### Performance
- [ ] Images lazy-loaded
- [ ] Smooth scroll works
- [ ] Sticky header doesn't overlap content
- [ ] No layout shift
- [ ] Fast page load (< 3s)

#### Visual Quality
- [ ] ≥50% white background visible on all pages
- [ ] Status badges clearly visible
- [ ] "Yakında" labels readable
- [ ] No overlapping elements
- [ ] Consistent typography
- [ ] Proper spacing throughout

## Production URLs

After deployment:
- **Preview URL:** `https://your-project-name.vercel.app`
- **Production URL:** `https://your-project-name.vercel.app` (or custom domain)

## Custom Domain Setup (Optional)

1. In Vercel Dashboard → Project Settings → Domains
2. Add your custom domain
3. Configure DNS:
   - Add CNAME record: `www` → `cname.vercel-dns.com`
   - Or A record: `@` → Vercel IP addresses
4. Wait for DNS propagation (up to 24 hours)

## Monitoring

- **Vercel Analytics:** Enable in dashboard
- **Error Tracking:** Check Vercel logs
- **Performance:** Use Lighthouse audit

## Troubleshooting

### Build Fails
- Check Node.js version (18+)
- Verify all dependencies installed
- Check for TypeScript errors

### Images Not Loading
- Verify image paths in `public/` directory
- Check Next.js Image component usage

### Styling Issues
- Verify Tailwind CSS configuration
- Check `globals.css` is imported

### 404 Errors
- Verify all routes exist in `app/` directory
- Check `next.config.js` for redirects

## Production Launch Checklist (Ödeme Açmadan Önce)

### Payment Live Mode
- [ ] `IYZICO_MODE=live`
- [ ] `IYZICO_API_KEY` ve `IYZICO_SECRET_KEY` canlı anahtarlar
- [ ] `NEXT_PUBLIC_SITE_URL` production domain

### Correct Price
- [ ] `NEXT_PUBLIC_PRODUCT_PRICE_TRY` gerçek fiyat
- [ ] `/shop` + `/product` fiyat eşleşiyor

### Correct Shipping
- [ ] `NEXT_PUBLIC_SHIPPING_FLAT_TRY` doğru
- [ ] `NEXT_PUBLIC_SHIPPING_FREE_OVER_TRY` doğru (kullanılmıyorsa 0)
- [ ] `/cart` + `/checkout` toplam hesapları doğru

### Sales Switch
- [ ] `NEXT_PUBLIC_SALES_ENABLED=true`
- [ ] Navbar “Satışta” gösteriyor
- [ ] Butonlar aktif (Satın Al / Ödemeye Geç)

### No Test Data
- [ ] iyzico initialize içinde hardcoded IP / TCKN yok
- [ ] Checkout’ta **T.C. Kimlik No** alanı mevcut ve 11 haneli doğrulanıyor
- [ ] UI’da “sandbox” metni yok

### Email (Opsiyonel ama önerilir)
- [ ] SMTP env’leri set (`SMTP_HOST/PORT/...`)
- [ ] 1 başarılı ödeme sonrası sipariş onayı e-postası geliyor

## Final Test (1 gerçek sipariş)

1. Production ortamında (veya canlıya çok yakın staging’de) `IYZICO_MODE=live` + gerçek domain ile checkout’u açın.
2. Kendi kartınızla **1 adet gerçek sipariş** geçin (gerekirse hemen iade/iptal planlayın).
3. Success sayfasında sipariş no kontrol edin.
4. E‑posta geldiyse içerik: ürün + tutar + kargo bilgisi + destek adresi.
5. **Mobil + desktop**: Home → Shop/Product → Cart → Checkout → Pay → Success akışı test edin.

