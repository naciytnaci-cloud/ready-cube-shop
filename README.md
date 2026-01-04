# Ready Cube - Premium Speedcubing E-Commerce Site

A modern, professional e-commerce website for speedcubing products, built with Next.js 14 (App Router) and Tailwind CSS.

## 🚀 Features

- **Premium Design:** Clean, minimalist design inspired by TheCubicle / SpeedCubeShop
- **Fully Responsive:** Mobile-first design, optimized for all devices (320px - 1440px+)
- **Bilingual:** Turkish & English language support
- **Performance Optimized:** Fast load times, lazy loading, image optimization
- **SEO Ready:** Proper metadata, Open Graph, Twitter Cards
- **Production Ready:** Fully polished, tested, and ready for deployment

## 📦 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **State Management:** React Context (Cart, Language)
- **Deployment:** Vercel (recommended)

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── cantalar/          # Bags listing & detail
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   └── layout.tsx         # Root layout
├── components/             # React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   └── ...
├── contexts/              # React Context providers
│   ├── CartContext.tsx    # Cart state management
│   └── LanguageContext.tsx # Language state
├── lib/                   # Utilities
│   ├── translations/      # i18n translation files
│   ├── shop/             # Shop logic (placeholders)
│   └── payments/         # Payment logic (placeholders)
└── public/               # Static assets
```

## 🌐 Pages

- **Home (`/`):** Hero section, featured product, coming soon products, trust badges
- **Bags (`/cantalar`):** Product listing page
- **Product Detail (`/cantalar/ready-cube-backpack`):** Full product information
- **About (`/about`):** Brand story and values
- **Contact (`/contact`):** Contact information

## 🎨 Design System

- **Colors:**
  - Primary: `#E10600` (Red accent)
  - Background: `#0B0B0B` (Dark) / White
  - Text: Gray scale (900, 600, 400)
- **Typography:** Inter font family
- **Spacing:** Consistent responsive spacing system
- **Animations:** Subtle, smooth Tailwind transitions

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy (auto-detects Next.js)

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

### Build Output

- **Static Pages:** 15 pages pre-rendered
- **Dynamic Pages:** 1 page (`/shop/[slug]`)
- **Bundle Size:** ~87.3 kB shared JS
- **First Load:** Optimized for fast performance

## 📝 Current Status

- ✅ All pages implemented
- ✅ Responsive design complete
- ✅ Language switching functional
- ✅ Hover effects & animations
- ✅ Mobile optimization
- ✅ SEO metadata
- ✅ Production build successful
- ⏳ Payment integration (coming soon)
- ⏳ Cart functionality (coming soon)

## 🔒 Security

- No backend API calls
- No sensitive data stored
- Client-side state only
- Secure headers configured (via vercel.json)

## 📄 License

Private project - Ready Cube

## 📞 Support

For deployment issues, see [DEPLOYMENT.md](./DEPLOYMENT.md) troubleshooting section.
