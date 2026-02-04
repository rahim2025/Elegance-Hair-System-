# Elegance Hair System 💎

A stunning, modern single-page React website for **Elegance Hair System** - a premium hair patch and hair replacement system manufacturer. Built with cutting-edge 3D technologies and smooth animations.

![React](https://img.shields.io/badge/React-19.2.0-blue)
![Three.js](https://img.shields.io/badge/Three.js-0.160.0-black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.0-38bdf8)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-10.18.0-ff0055)

## ✨ Features

### 🎨 Modern Design
- **Glass Morphism** navigation and UI elements
- **Gradient Backgrounds** with animated meshes
- **Responsive Design** - mobile-first approach
- **Dark Theme** with burgundy and gold accents
- **Custom Scrollbar** with brand colors

### 🌟 3D Elements
- **3D Animated Background** with floating particles and geometric shapes
- **Interactive Product Viewer** with rotation and 3D depth
- **Parallax Scrolling** effects throughout
- **3D Hover Effects** on cards and buttons
- **Smooth Camera Movements** and transitions

### 🚀 Sections

1. **Hero Section**
   - 3D particle background with floating shapes
   - Animated headline and CTA buttons
   - Smooth scroll indicator

2. **About Section**
   - Animated counter statistics
   - 3D floating icons
   - Company mission, vision, and promise

3. **Products Showcase** ⭐ (Main Focus)
   - 3D carousel with 10 premium products
   - Interactive product cards with rotation
   - Auto-play with pause on hover
   - Navigation arrows and dot indicators
   - Detailed product features

4. **Why Choose Us**
   - 4 feature cards with 3D tilt effects
   - Animated icons and badges
   - Additional benefits section

5. **Testimonials**
   - 3D rotating carousel
   - Star ratings and customer reviews
   - Trust badges

6. **Contact Section**
   - Modern contact form with floating labels
   - 3D input field animations
   - Contact information cards
   - Social media links

7. **Footer**
   - Quick links and product navigation
   - Newsletter subscription
   - Social media icons with 3D effects

### ⚡ Performance
- **60fps Animations** - optimized for smooth performance
- **Lazy Loading** for images
- **Code Splitting** with Vite
- **Mobile Optimized** - reduced 3D complexity on mobile

## 🛠️ Tech Stack

- **React 19.2.0** - UI framework
- **Vite 7.2.4** - Build tool and dev server
- **Three.js & React Three Fiber** - 3D graphics
- **@react-three/drei** - Three.js helpers
- **Framer Motion** - Animation library
- **Tailwind CSS** - Utility-first CSS
- **React Scroll** - Smooth scrolling navigation
- **React Icons** - Icon library
- **React Intersection Observer** - Scroll animations

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Development Server
```bash
npm run dev
```

The application will start at `http://localhost:5173`

### Step 3: Build for Production
```bash
npm run build
```

### Step 4: Preview Production Build
```bash
npm run preview
```

## 📁 Project Structure

```
Elegance Hair System/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx      # Sticky nav with glass morphism
│   │   ├── Hero.jsx            # Hero with 3D background
│   │   ├── About.jsx           # About with stats
│   │   ├── Products.jsx        # 3D product carousel
│   │   ├── WhyUs.jsx           # Feature cards
│   │   ├── Testimonials.jsx    # Customer reviews
│   │   ├── Contact.jsx         # Contact form
│   │   ├── Footer.jsx          # Footer section
│   │   └── LoadingScreen.jsx   # 3D loading animation
│   ├── assets/
│   │   ├── logo.PNG            # Company logo
│   │   ├── product1.jpeg       # Product images (1-10)
│   │   └── promo video.mp4     # Promotional video
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point
│   ├── index.css               # Global styles
│   └── App.css                 # App-specific styles
├── public/
├── index.html
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
├── vite.config.js              # Vite configuration
└── package.json
```

## 🎨 Color Scheme

**Primary Palette:**
- Deep Burgundy: `#8B0000`
- Gold: `#D4AF37`
- White: `#FFFFFF`
- Black: `#000000`

**Secondary Colors:**
- Burgundy (Dark): `#6B0000`
- Light Gold: `#E5C158`

## 🌐 Products Featured

1. Premium Silk Base Hair Patch
2. Lace Front Hair System
3. Mono Filament Hair Piece
4. Skin Base Toupee
5. Custom Hair Replacement System
6. Natural Wave Hair Patch
7. Ultra Thin Skin Hair System
8. Hybrid Lace & Skin System
9. Crown Topper Hair Piece
10. Full Cap Hair System

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔧 Customization

### Update Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: {
    dark: '#8B0000',
    gold: '#D4AF37',
    // ... your colors
  }
}
```

### Update Fonts
Edit `index.css` to change Google Fonts import

### Add More Products
Edit `src/components/Products.jsx` and add product images to `src/assets/`

## 🚀 Deployment

### Vercel
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
# Deploy the 'dist' folder
```

### GitHub Pages
```bash
npm run build
# Deploy the 'dist' folder to gh-pages branch
```

## 📄 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📞 Contact

For inquiries about this project:
- Email: info@elegancehair.com
- Phone: +1 (555) 123-4567

## 📝 License

This project is proprietary and confidential.

## 🙏 Acknowledgments

- Three.js team for the amazing 3D library
- Framer Motion for smooth animations
- Tailwind CSS for the utility-first framework
- React team for the excellent framework

---

**Made with ❤️ for Elegance Hair System**
