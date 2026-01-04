# Ready Cube - Deployment Guide

## Quick Start

### Option 1: Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Connect your GitHub repository
   - Vercel will auto-detect Next.js
   - Click "Deploy"
   - Your site will be live in ~2 minutes!

### Option 2: Deploy to Netlify

1. **Push to GitHub** (same as above)

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Netlify will use `netlify.toml` automatically
   - Click "Deploy site"
   - Your site will be live in ~3 minutes!

## Build Commands

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Environment Variables

No environment variables required for basic deployment.

## Post-Deployment Checklist

- [ ] Verify homepage loads
- [ ] Test navigation links
- [ ] Test cart functionality
- [ ] Check mobile responsiveness
- [ ] Verify product pages load
- [ ] Test "Add to Cart" buttons
- [ ] Check footer links
- [ ] Verify SEO metadata (view page source)

## Custom Domain Setup

### Vercel
1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

### Netlify
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Configure DNS records

## Performance Tips

- Images are automatically optimized by Next.js
- Static pages are pre-rendered
- Code is automatically split
- No additional optimization needed

## Support

For issues or questions, refer to:
- Next.js Documentation: https://nextjs.org/docs
- Vercel Documentation: https://vercel.com/docs
- Netlify Documentation: https://docs.netlify.com

