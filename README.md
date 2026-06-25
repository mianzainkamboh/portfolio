# ZAIN.AI - Premium 3D AI Portfolio

A modern, high-performance portfolio website for Zain Ul Abideen - AI Automation Engineer. Built with Next.js 14, Framer Motion, Three.js, and Tailwind CSS for premium animations and transitions.

## Features

✨ **Advanced Animations**
- Smooth page transitions with Framer Motion
- Staggered element animations
- Scroll-triggered reveal animations
- 3D canvas hero section with Three.js
- Glass morphism effects with backdrop blur

🎨 **Design System**
- Dark cyber-minimalist aesthetic (Obsidian Nexus theme)
- Electric cyan (#00F2FF) and cyber purple (#BC13FE) accents
- Bento grid layout system
- Responsive typography
- Custom scrollbar styling

📱 **Responsive Design**
- Mobile-first approach
- Tablet and desktop optimizations
- Adaptive grid layouts
- Touch-friendly interactions

🚀 **Performance**
- Next.js 14 App Router
- TypeScript for type safety
- Optimized image loading
- Minimal JavaScript footprint
- Production-ready build

## Tech Stack

- **Framework**: Next.js 14.2.3
- **Styling**: Tailwind CSS 3.4.1
- **Animations**: Framer Motion 10.16.16
- **3D Graphics**: Three.js 0.160.0
- **Language**: TypeScript 5.3.3
- **Build**: Webpack (Next.js)

## Project Structure

```
zain-ai-portfolio/
├── app/
│   ├── components/              # React components
│   │   ├── Header.tsx          # Navigation header
│   │   ├── Hero.tsx            # Hero section with 3D canvas
│   │   ├── About.tsx           # Identity matrix section
│   │   ├── Skills.tsx          # Tech specifications
│   │   ├── Experience.tsx      # Chronology timeline
│   │   ├── Projects.tsx        # Project archive grid
│   │   └── Footer.tsx          # Contact section
│   ├── hooks/
│   │   └── useInView.ts        # Custom intersection observer hook
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Main page
│   └── globals.css             # Global styles
├── public/                      # Static assets
├── next.config.js              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS config
├── tsconfig.json               # TypeScript config
├── postcss.config.js           # PostCSS config
├── package.json                # Dependencies
└── README.md                   # This file
```

## Getting Started

### Prerequisites
- Node.js 18+ (recommended 20+)
- npm or yarn package manager

### Installation

```bash
# Clone or navigate to the project directory
cd zain-ai-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:3000`

### Development Commands

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Animations & Transitions

### Hero Section
- Rotating 3D icosphere with neon glow
- Typewriter-style text reveal
- Floating scroll indicator
- Staggered button animations

### About Section
- Image hover scale effects
- Card elevation on scroll
- Stat counter animations
- Parallax text effects

### Skills Section
- Animated progress bars
- Terminal-style header with blinking lights
- Staggered skill category reveal
- Glowing percentage counters

### Experience Section
- Timeline line animation
- Pulsing timeline dots
- Card slide-in animations
- Hover elevation effects

### Projects Section
- Image zoom on hover
- Overlay fade animations
- Tag scale effects
- Link hover animations

### Page Transitions
- Smooth fade-in animations on scroll
- Staggered element reveals
- Intersection observer for trigger points
- GPU-optimized transforms

## Customization

### Modify Colors
Edit `tailwind.config.ts` to change the design system colors:

```typescript
colors: {
  'electric-cyan': '#00F2FF',
  'cyber-purple': '#BC13FE',
  // ... more colors
}
```

### Adjust Animation Timing
Modify framer-motion transition durations in components:

```typescript
transition={{ duration: 0.6, ease: 'easeOut' }}
```

### Update Content
- Hero section: Edit `app/components/Hero.tsx`
- About section: Edit `app/components/About.tsx`
- Skills: Edit `app/components/Skills.tsx`
- Experience: Edit `app/components/Experience.tsx`
- Projects: Edit `app/components/Projects.tsx`

### Add New Sections
1. Create new component in `app/components/`
2. Export from the component file
3. Import and add to `app/page.tsx`
4. Add scroll anchor ID for navigation

## Performance Optimization

The site includes several optimizations:

- **Image Lazy Loading**: Images load on scroll
- **Code Splitting**: Next.js automatically splits code
- **CSS Optimization**: Tailwind CSS purges unused styles
- **3D Canvas Optimization**: Three.js renderer only renders on visibility
- **Smooth Scroll**: GPU-accelerated scroll behavior

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS 12+, Android Chrome 90+)

## Remote Images

The portfolio displays images from Google's image hosting:

```
https://lh3.googleusercontent.com/...
https://lh6.googleusercontent.com/...
```

These are configured in `next.config.js` for Next.js Image Optimization.

## Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Other Platforms

**Build the application:**
```bash
npm run build
```

**Start the production server:**
```bash
npm start
```

Deploy the `.next` folder and ensure Node.js 18+ is available.

## SEO

The site includes:
- Meta tags in `app/layout.tsx`
- Open Graph meta tags
- Structured data ready
- Mobile-friendly viewport configuration

## Accessibility

Features include:
- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance
- Focus indicators on interactive elements

## Performance Metrics

Target metrics:
- Lighthouse Score: 90+
- First Contentful Paint: < 1.2s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

## License

© 2026 Zain Ul Abideen. All rights reserved.

## Support

For questions or issues, reach out to:
- Email: zain@example.com
- Location: Global / Remote

---

Built with ❤️ using Next.js, Framer Motion, and Tailwind CSS.
