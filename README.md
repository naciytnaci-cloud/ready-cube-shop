# Ready Cube - E-commerce Website

Modern, profesyonel speedcubing ekipmanları e-ticaret sitesi.

## 🚀 Özellikler

- ✅ **Modern UI/UX** - Minimal, premium tasarım
- ✅ **Tam Responsive** - Mobil, tablet, desktop uyumlu
- ✅ **E-ticaret** - Sepet sistemi, ürün detayları
- ✅ **SEO Optimized** - Arama motoru dostu
- ✅ **Hızlı Performans** - Next.js 14 optimizasyonları
- ✅ **Animasyonlar** - Smooth hover ve transition efektleri

## 🛠️ Teknolojiler

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **State Management:** React Context API
- **Image Optimization:** Next.js Image

## 📦 Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Development server başlat
npm run dev

# Production build
npm run build

# Production server başlat
npm start
```

## 📁 Proje Yapısı

```
├── app/                    # Next.js App Router sayfaları
│   ├── page.tsx           # Ana sayfa
│   ├── products/          # Ürün sayfaları
│   ├── about/             # Hakkımızda
│   ├── contact/           # İletişim
│   └── layout.tsx         # Root layout
├── components/            # React bileşenleri
│   ├── Header.tsx         # Header/Navigation
│   ├── Footer.tsx         # Footer
│   ├── Cart.tsx          # Sepet sidebar
│   ├── ProductCard.tsx    # Ürün kartı
│   └── Button.tsx         # Buton bileşeni
├── contexts/              # React Context
│   └── CartContext.tsx    # Sepet state yönetimi
├── public/                # Statik dosyalar
│   ├── hero/             # Hero görselleri
│   └── products/         # Ürün görselleri
└── tailwind.config.js     # Tailwind yapılandırması
```

## 🎨 Renk Paleti

- **Arka Plan:** `#0B0B0B` (Dark)
- **Metin:** `#FFFFFF` (White)
- **Vurgu:** `#E10600` (Primary Red)
- **Koyu Kırmızı:** `#B80500` (Primary Dark)

## 📱 Responsive Breakpoints

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

## 🚢 Deployment

### Vercel (Önerilen)
1. GitHub'a push edin
2. Vercel'e import edin
3. Otomatik deploy!

Detaylar için: [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

### Netlify
1. GitHub'a push edin
2. Netlify'e import edin
3. Otomatik deploy!

## ✅ Test Raporu

Detaylı test raporu için: [DEPLOYMENT_TEST_REPORT.md](./DEPLOYMENT_TEST_REPORT.md)

## 📝 Notlar

- Tüm görseller `public/` klasörüne eklenmelidir
- Favicon dosyaları eklenebilir (opsiyonel)
- Ürün görselleri: `public/products/{id}.jpg`
- Hero görseli: `public/hero/ready-cube-hero.jpg`

## 📄 Lisans

Private - Ready Cube

---

**Hazırlayan:** Ready Cube Development Team  
**Versiyon:** 1.0.0  
**Durum:** ✅ Production Ready
