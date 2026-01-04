# Custom Domain Setup Guide - Ready Cube

## Quick Setup Overview

This guide will help you connect your custom domain (e.g., `readycube.com`) to your deployed Ready Cube website on Vercel or Netlify.

---

## Option 1: Vercel (Recommended)

### Step 1: Add Domain in Vercel

1. Go to your project on [Vercel Dashboard](https://vercel.com/dashboard)
2. Click on your project
3. Go to **Settings** → **Domains**
4. Click **Add Domain**
5. Enter your domain (e.g., `readycube.com` or `www.readycube.com`)

### Step 2: Configure DNS Records

Vercel will show you the DNS records you need to add. Choose one of the following:

#### Option A: Root Domain (readycube.com)

**For Root Domain:**
```
Type: A
Name: @
Value: 76.76.21.21
TTL: Auto (or 3600)
```

**For www Subdomain:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: Auto (or 3600)
```

#### Option B: Subdomain Only (www.readycube.com)

```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: Auto (or 3600)
```

### Step 3: Add DNS Records in Your Domain Registrar

**Common Domain Registrars:**

#### GoDaddy
1. Log in to GoDaddy
2. Go to **My Products** → **DNS**
3. Click **Add** to add new record
4. Enter the values from Step 2
5. Click **Save**

#### Namecheap
1. Log in to Namecheap
2. Go to **Domain List**
3. Click **Manage** next to your domain
4. Go to **Advanced DNS** tab
5. Click **Add New Record**
6. Enter the values from Step 2
7. Click **Save**

#### Cloudflare
1. Log in to Cloudflare
2. Select your domain
3. Go to **DNS** → **Records**
4. Click **Add record**
5. Enter the values from Step 2
6. Click **Save**

### Step 4: Verify Domain

1. Return to Vercel Dashboard
2. Vercel will automatically verify your DNS records
3. Status will show:
   - ⏳ **Pending** - DNS propagation in progress
   - ✅ **Valid Configuration** - Domain is ready
   - ❌ **Invalid Configuration** - Check DNS records

### Step 5: SSL Certificate

- Vercel automatically provisions SSL certificates
- HTTPS will be enabled automatically
- Wait 24-48 hours for full SSL activation
- You'll see a green lock icon when ready

### Step 6: Redirect Configuration (Optional)

To redirect `readycube.com` → `www.readycube.com`:

1. Go to **Settings** → **Domains**
2. Click on your root domain
3. Enable **Redirect** to `www.readycube.com`

---

## Option 2: Netlify

### Step 1: Add Domain in Netlify

1. Go to your site on [Netlify Dashboard](https://app.netlify.com)
2. Go to **Site Settings** → **Domain Management**
3. Click **Add custom domain**
4. Enter your domain (e.g., `readycube.com`)

### Step 2: Configure DNS Records

Netlify will show you the DNS records. Choose one:

#### Option A: Root Domain (readycube.com)

```
Type: A
Name: @
Value: [Netlify IP - shown in dashboard, usually 75.2.60.5]
TTL: 3600
```

**For www:**
```
Type: CNAME
Name: www
Value: [your-site-name].netlify.app
TTL: 3600
```

#### Option B: Subdomain Only

```
Type: CNAME
Name: www
Value: [your-site-name].netlify.app
TTL: 3600
```

### Step 3: Add DNS Records

Follow the same steps as Vercel (Step 3 above) for your domain registrar.

### Step 4: Verify Domain

1. Return to Netlify Dashboard
2. Netlify will verify DNS automatically
3. Status will show:
   - ⏳ **DNS configured correctly** - Waiting for propagation
   - ✅ **Site is live** - Domain is active

### Step 5: SSL Certificate

- Netlify uses Let's Encrypt
- SSL is automatically provisioned
- HTTPS redirect is enabled by default
- Wait 24-48 hours for full activation

---

## DNS Propagation

### What is DNS Propagation?

DNS propagation is the time it takes for DNS changes to spread across all DNS servers worldwide. This typically takes **24-48 hours**, but can be faster.

### How to Check DNS Propagation

Use these tools to check if your DNS has propagated:

1. **DNS Checker:** [dnschecker.org](https://dnschecker.org)
2. **What's My DNS:** [whatsmydns.net](https://whatsmydns.net)
3. **MXToolbox:** [mxtoolbox.com](https://mxtoolbox.com)

Enter your domain and check if the DNS records match what you configured.

### Common Issues

**Issue:** Domain shows "Invalid Configuration"
- **Solution:** Wait 24-48 hours for DNS propagation
- **Solution:** Double-check DNS records are correct
- **Solution:** Clear your browser cache

**Issue:** SSL certificate not active
- **Solution:** Wait 24-48 hours after DNS propagation
- **Solution:** Ensure DNS records are correct
- **Solution:** Contact support if still not working after 48 hours

**Issue:** Site not loading on custom domain
- **Solution:** Check DNS propagation status
- **Solution:** Verify DNS records are correct
- **Solution:** Try accessing via `www.` subdomain

---

## Testing Your Domain

### Before Going Live

1. **Test DNS Records:**
   ```bash
   # Check A record
   dig readycube.com A
   
   # Check CNAME record
   dig www.readycube.com CNAME
   ```

2. **Test SSL Certificate:**
   - Visit `https://readycube.com`
   - Check for green lock icon
   - Verify certificate is valid

3. **Test Site Functionality:**
   - Visit your custom domain
   - Test all pages
   - Verify navigation
   - Test cart functionality

### Post-Deployment Checklist

- [ ] Domain resolves correctly
- [ ] HTTPS is enabled
- [ ] SSL certificate is valid
- [ ] All pages load correctly
- [ ] No mixed content warnings
- [ ] Redirects work (if configured)

---

## Troubleshooting

### DNS Not Propagating

1. **Wait 24-48 hours** - This is normal
2. **Check DNS records** - Ensure they're correct
3. **Clear DNS cache:**
   ```bash
   # macOS/Linux
   sudo dscacheutil -flushcache
   
   # Windows
   ipconfig /flushdns
   ```

### SSL Certificate Issues

1. **Wait 24-48 hours** after DNS propagation
2. **Check DNS records** are correct
3. **Contact support** if still not working

### Site Not Loading

1. **Check DNS propagation** status
2. **Verify DNS records** are correct
3. **Clear browser cache**
4. **Try incognito/private mode**
5. **Check Vercel/Netlify status page**

---

## Support

### Vercel Support
- Documentation: [vercel.com/docs](https://vercel.com/docs)
- Support: [vercel.com/support](https://vercel.com/support)

### Netlify Support
- Documentation: [docs.netlify.com](https://docs.netlify.com)
- Support: [netlify.com/support](https://www.netlify.com/support)

### Domain Registrar Support
- Contact your domain registrar's support
- They can help with DNS configuration

---

## Quick Reference

### Vercel DNS Records
```
Root Domain:
Type: A
Value: 76.76.21.21

www Subdomain:
Type: CNAME
Value: cname.vercel-dns.com
```

### Netlify DNS Records
```
Root Domain:
Type: A
Value: [Check Netlify dashboard]

www Subdomain:
Type: CNAME
Value: [your-site].netlify.app
```

---

**Last Updated:** $(date)  
**Status:** Ready for Custom Domain Setup

