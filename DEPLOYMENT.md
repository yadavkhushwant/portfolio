# Portfolio - Dual Deployment Setup

This portfolio is configured to deploy to both **GitHub Pages** and **Nginx server** with automatic environment detection.

## 🚀 Deployment Commands

### GitHub Pages Deployment
```bash
# Build and deploy to GitHub Pages
npm run deploy:github

# Or use the original method
npm run deploy
```
**Live URL:** https://yadavkhushwant.github.io/portfolio/

### Nginx Server Deployment
```bash
# Build for Nginx
npm run deploy:nginx

# This creates portfolio-nginx.tar.gz archive
```
**Live URL:** https://khushwantyadav.me

## 🔧 Manual Nginx Deployment Steps

1. **Build the project:**
   ```bash
   npm run deploy:nginx
   ```

2. **Upload to server:**
   ```bash
   scp portfolio-nginx.tar.gz user@khushwantyadav.me:/tmp/
   ```

3. **Deploy on server:**
   ```bash
   ssh user@khushwantyadav.me
   sudo rm -rf /var/www/html/portfolio/*
   sudo tar -xzf /tmp/portfolio-nginx.tar.gz -C /var/www/html/portfolio/
   sudo chown -R www-data:www-data /var/www/html/portfolio/
   sudo systemctl reload nginx
   ```

## 🔄 How It Works

### Automatic Environment Detection
The application automatically detects the deployment environment:

- **GitHub Pages**: When `window.location.hostname.includes('github.io')`
  - Base path: `/portfolio/`
  - GitHub Pages SPA routing enabled

- **Nginx Server**: When on custom domain
  - Base path: `/`
  - Standard SPA routing

### Build Configurations

#### GitHub Pages Build (`npm run build:github`)
- Mode: `github`
- Base path: `/portfolio/`
- Output: `dist/` with GitHub Pages-specific configurations

#### Nginx Build (`npm run build:nginx`)
- Mode: `production`
- Base path: `/`
- Output: `dist/` with standard configurations

## 📁 Key Files

- `vite.config.ts` - Environment-specific build configurations
- `src/App.tsx` - Dynamic base path detection
- `index.html` - Conditional GitHub Pages routing script
- `nginx.conf` - Nginx server configuration
- `deploy-github.sh` - GitHub Pages deployment script
- `deploy-nginx.sh` - Nginx deployment script

## 🌐 SEO & Meta Tags

Meta tags and URLs are dynamically set based on the deployment environment:
- **GitHub Pages**: Uses `https://yadavkhushwant.github.io/portfolio`
- **Nginx**: Uses `https://khushwantyadav.me`

## 🛠️ Development

```bash
# Start development server
npm run dev

# Build for testing
npm run build

# Preview build locally
npm run preview
```

## ✅ Features

- ✅ **Dual Deployment Support** - Works on both GitHub Pages and Nginx
- ✅ **Automatic Environment Detection** - No manual configuration needed
- ✅ **SPA Routing** - Proper client-side routing on both platforms
- ✅ **SEO Optimized** - Dynamic meta tags based on environment
- ✅ **Dark Mode** - Theme toggle with persistence
- ✅ **Responsive Design** - Mobile-first design approach
- ✅ **Performance Optimized** - Code splitting and lazy loading

## 🔒 Security

The Nginx configuration includes:
- HTTPS redirect
- Security headers (XSS, CSRF protection)
- Gzip compression
- Static asset caching
- Hidden file protection

## 📋 Nginx Setup

Copy the `nginx.conf` to your server:
```bash
sudo cp nginx.conf /etc/nginx/sites-available/portfolio
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

Make sure to update SSL certificate paths in the configuration.