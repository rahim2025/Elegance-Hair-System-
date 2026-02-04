# 🚀 Quick Start Guide - Elegance Hair System

## Installation Steps

### 1. Install Dependencies
```bash
cd "Elegance Hair System"
npm install --legacy-peer-deps
```

**Note:** We use `--legacy-peer-deps` due to React Three Fiber compatibility with React 19.

### 2. Start Development Server
```bash
npm run dev
```

The website will be available at: **http://localhost:5173**

### 3. Build for Production
```bash
npm run build
```

Build output will be in the `dist` folder.

### 4. Preview Production Build
```bash
npm run preview
```

## 🎯 What You Get

✅ **Fully Responsive Website** with mobile-first design
✅ **3D Animated Hero Section** with particles and floating shapes
✅ **Interactive Product Carousel** featuring all 10 products with 3D effects
✅ **Smooth Scroll Navigation** with glass morphism
✅ **Animated Counter Stats** in About section
✅ **3D Feature Cards** with tilt effects
✅ **Customer Testimonials Carousel** with 3D animations
✅ **Modern Contact Form** with floating labels
✅ **3D Loading Screen** with progress bar
✅ **Optimized Performance** - 60fps animations

## 📁 Your Product Images

All your product images are loaded from:
- `src/assets/product1.jpeg` through `product10.jpeg`
- `src/assets/logo.PNG`
- `src/assets/promo video.mp4`

## 🎨 Customization

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: {
    dark: '#8B0000',    // Deep burgundy
    gold: '#D4AF37',    // Gold
  }
}
```

### Update Products
Edit `src/components/Products.jsx` - product array starting at line 14

### Modify Contact Info
Edit `src/components/Contact.jsx` - contactInfo array starting at line 23

## 🐛 Troubleshooting

### Error: "Cannot resolve dependency"
Run with legacy peer deps:
```bash
npm install --legacy-peer-deps
```

### Port Already in Use
Change port in `vite.config.js` or kill the process using port 5173

### 3D Elements Not Showing
Check browser console for WebGL support errors. Three.js requires WebGL.

## 📱 Mobile Testing

The site is optimized for mobile. Test responsiveness:
- Open browser DevTools (F12)
- Toggle device toolbar
- Test on various screen sizes

## 🌐 Deployment Ready

The site is production-ready and can be deployed to:
- **Vercel** (recommended for Vite projects)
- **Netlify**
- **GitHub Pages**
- Any static hosting service

## 💡 Features Highlight

1. **Navigation**: Sticky glass morphism navbar with smooth scroll
2. **Hero**: 3D particle background with rotating shapes
3. **About**: Animated counters (15+ years, 10,000+ customers)
4. **Products**: Main showcase with 3D carousel and 10 products
5. **Why Us**: 4 feature cards with premium materials, custom solutions
6. **Testimonials**: 6 customer reviews with 5-star ratings
7. **Contact**: Working form with floating labels
8. **Footer**: Complete with social media and newsletter

## 🎉 You're All Set!

Your modern 3D website is ready. Open http://localhost:5173 to see it in action!

For detailed documentation, see SETUP.md

---
**Need help?** Check the React Three Fiber docs: https://docs.pmnd.rs/react-three-fiber
