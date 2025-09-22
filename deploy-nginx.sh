#!/bin/bash

echo "🚀 Building for Nginx deployment..."
echo "Building for production environment..."

# Build for Nginx
npm run build:nginx

# Create deployment archive
echo "📦 Creating deployment archive..."
tar -czf portfolio-nginx.tar.gz -C dist .

echo "✅ Build completed successfully!"
echo "📦 Deployment archive created: portfolio-nginx.tar.gz"
echo ""
echo "🔧 To deploy to your Nginx server:"
echo "1. Upload the archive:"
echo "   scp portfolio-nginx.tar.gz user@khushwantyadav.me:/tmp/"
echo ""
echo "2. SSH to your server and extract:"
echo "   ssh user@khushwantyadav.me"
echo "   sudo rm -rf /var/www/html/portfolio/*"
echo "   sudo tar -xzf /tmp/portfolio-nginx.tar.gz -C /var/www/html/portfolio/"
echo "   sudo chown -R www-data:www-data /var/www/html/portfolio/"
echo "   sudo systemctl reload nginx"
echo ""
echo "🌐 Your site will be live at: https://khushwantyadav.me"
echo ""

# Optional: Test locally before deployment
read -p "🔍 Would you like to test locally first? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "🔧 Starting local test server..."
    npx serve dist -s -l 8080
fi