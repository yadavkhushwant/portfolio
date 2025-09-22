#!/bin/bash

echo "🚀 Deploying to GitHub Pages..."
echo "Building for GitHub Pages environment..."

# Build for GitHub Pages
npm run build:github

# Deploy using gh-pages
npm run deploy

echo "✅ Successfully deployed to GitHub Pages!"
echo "🌐 Visit: https://yadavkhushwant.github.io/portfolio/"
echo ""