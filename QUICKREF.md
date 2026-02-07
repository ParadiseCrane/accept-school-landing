# Quick Reference Guide

## 🚀 Quick Start

```bash
# Install dependencies
yarn install

# Start dev server
yarn dev

# Build for production
yarn build

# Format code
yarn format
```

## 📂 Component Overview

### Import Components

```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
import Navigation from "../components/Navigation.astro";
import Hero from "../components/Hero.astro";
import CourseCard from "../components/CourseCard.astro";
---
```

### Use Components

```astro
<BaseLayout title="My Page">
  <Navigation />
  <Hero />

  <CourseCard
    icon="🐍"
    title="Python Course"
    description="Learn Python"
    tags={["Python", "Async"]}
    visualType="terminal"
  />
</BaseLayout>
```

## 🎨 Common Customizations

### Change Colors

File: `src/layouts/BaseLayout.astro`

```css
:root {
  --primary: #6366f1;
  --bg-dark: #0f172a;
  /* ... */
}
```

### Add Course

File: `src/components/Courses.astro`

```astro
const courses = [
  {
    icon: "🎨",
    title: "New Course",
    description: "Description here",
    tags: ["Tag1", "Tag2"],
    visualType: "terminal",
  },
];
```

### Add Feature

File: `src/components/Features.astro`

```astro
const features = [
  {
    icon: "⚡",
    title: "Feature Name",
    description: "Feature description",
  },
];
```

### Add FAQ

File: `src/components/FAQ.astro`

```astro
const faqs = [
  {
    question: "Your question?",
    answer: "Your answer.",
  },
];
```

### Add Testimonial

File: `src/components/Testimonials.astro`

```astro
const testimonials = [
  {
    quote: "Amazing experience!",
    name: "Jane Doe",
    role: "Developer @ Company",
    avatar: "JD",
  },
];
```

## 🧩 Component Props Reference

### CourseCard
```typescript
{
  icon: string;        // "🐍"
  title: string;       // "Modern Python"
  description: string;
  tags: string[];      // ["Python", "Async"]
  visualType?: "terminal" | "browser" | "sort";
}
```

### FeatureCard
```typescript
{
  icon: string;
  title: string;
  description: string;
}
```

### TestimonialCard
```typescript
{
  quote: string;
  name: string;
  role: string;
  avatar: string;      // "AB" (initials)
}
```

### FAQItem
```typescript
{
  question: string;
  answer: string;
}
```

### Logo
```typescript
{
  showText?: boolean;  // default: true
  className?: string;
}
```

### CodeWindow
```typescript
{
  title?: string;      // default: "modern_python.py"
  rotating?: boolean;  // default: false
}
```

## 📁 File Structure

```
src/
├── layouts/
│   └── BaseLayout.astro       # Base HTML + global styles
├── components/
│   ├── Logo.astro             # Animated logo
│   ├── Navigation.astro       # Nav bar
│   ├── Hero.astro             # Hero section
│   ├── Courses.astro          # Courses section
│   ├── Features.astro         # Features section
│   ├── Testimonials.astro     # Testimonials section
│   ├── FAQ.astro              # FAQ section
│   ├── CTA.astro              # Call-to-action
│   └── Footer.astro           # Footer
└── pages/
    ├── index.astro            # Original version
    └── index-new.astro        # Componentized version
```

## 🎯 Switch to Component Version

```bash
# Backup original
mv src/pages/index.astro src/pages/index-old.astro

# Use new version
mv src/pages/index-new.astro src/pages/index.astro

# Restart dev server
yarn dev
```

## 🎨 Styling Tips

### Global Styles
Go to: `src/layouts/BaseLayout.astro`
- CSS variables
- Typography
- Utility classes

### Component Styles
Each component has `<style>` section
- Automatically scoped
- No conflicts

### Responsive Design
Use media queries in components:
```css
@media (max-width: 768px) {
  .grid { grid-template-columns: 1fr; }
}
```

## 🔧 Common Tasks

### Add Navigation Link
File: `src/components/Navigation.astro`

```astro
const navLinks = [
  { href: "#courses", label: "Курсы" },
  { href: "#new", label: "New Link" },
];
```

### Change Hero Text
File: `src/components/Hero.astro`

```astro
<h1>
  Your New Title<br />
  <span class="gradient-text">Subtitle</span>
</h1>
```

### Update Footer Links
File: `src/components/Footer.astro`

```astro
const footerSections = [
  {
    title: "Section",
    links: [
      { label: "Link", href: "#" },
    ],
  },
];
```

### Modify Stats
File: `src/components/Hero.astro`

```astro
<div class="stat">
  <div class="stat-number">1000+</div>
  <div class="stat-label">New Label</div>
</div>
```

## 📱 Breakpoints

```css
/* Mobile */
@media (max-width: 768px) { }

/* Tablet */
@media (max-width: 1024px) { }

/* Desktop (default) */
```

## 🎭 Animations

All animations are built-in:
- ✅ Matrix rain (automatic)
- ✅ Logo animations (automatic)
- ✅ Terminal typing (automatic)
- ✅ Sort visualization (automatic)
- ✅ Code rotation (automatic)
- ✅ FAQ accordion (click to toggle)

## 📝 Data Management

### Keep in Component (Current)
```astro
const courses = [/* data */];
```

### Move to Separate File (Recommended for scale)
```typescript
// src/data/courses.ts
export const courses = [/* data */];

// In component
import { courses } from '../data/courses';
```

## 🌐 Deploy

```bash
# Build
yarn build

# Output in: dist/

# Deploy to:
# - Vercel
# - Netlify
# - Cloudflare Pages
# - Any static host
```

## 🐛 Troubleshooting

### Animations not working
- Check browser console for errors
- Ensure scripts are loaded
- Verify element IDs match

### Styles not applied
- Check for typos in class names
- Verify CSS variables are defined
- Clear browser cache

### Build fails
```bash
rm -rf node_modules .astro dist
yarn install
yarn build
```

## 📚 Learn More

- [COMPONENTS.md](./COMPONENTS.md) - Detailed component docs
- [SETUP.md](./SETUP.md) - Setup guide
- [README.md](./README.md) - Project overview

---

**Happy coding! 🚀**