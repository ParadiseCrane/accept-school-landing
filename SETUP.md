# Accept School - Astro Setup Guide

## 📦 What You Have

Your HTML landing page has been successfully converted to an Astro project with the following structure:

```
accept-school-astro/
├── src/
│   └── pages/
│       └── index.astro          # Main landing page
├── .gitignore                    # Git ignore rules
├── astro.config.mjs              # Astro configuration
├── biome.json                    # Biome formatter config
├── package.json                  # Dependencies & scripts
├── tailwind.config.mjs           # Tailwind CSS config
├── tsconfig.json                 # TypeScript config
└── README.md                     # Documentation
```

## 🚀 Getting Started

### 1. Install Dependencies

```bash
cd accept-school-astro
yarn install
```

This will install:
- Astro (v5.1.3)
- Tailwind CSS (v3.4.18)
- Biome formatter (v1.9.4)

### 2. Start Development Server

```bash
yarn dev
```

The site will be available at: **http://localhost:4321**

### 3. Build for Production

```bash
yarn build
```

This creates an optimized production build in the `dist/` folder.

### 4. Preview Production Build

```bash
yarn preview
```

## 🎨 Features Preserved

All features from your original HTML have been maintained:

✅ **Animations**
- Matrix rain background effect
- Animated crane logo (wing flap + head bob)
- Rotating code snippets
- Terminal typing animation
- Bubble sort visualization
- Smooth scroll behavior

✅ **Interactivity**
- FAQ accordion
- Sticky navigation with scroll effect
- Hover effects on cards and buttons
- Animated transitions

✅ **Responsive Design**
- Mobile-first approach
- Breakpoints for tablet and desktop

## 🛠️ Code Quality Tools

### Format Code

```bash
yarn format
```

This will format all files using Biome with your configured style:
- Tabs for indentation
- Double quotes
- Semicolons
- Trailing commas

### Lint Code

```bash
yarn lint
```

### Check & Fix

```bash
yarn check
```

Runs both formatting and linting, applying fixes automatically.

## 📝 Next Steps

### Option 1: Keep Custom CSS (Current Approach)
The landing page currently uses custom CSS in a `<style>` tag. This preserves all the intricate animations and ensures everything works exactly as designed.

### Option 2: Migrate to Tailwind
If you want to use Tailwind CSS more extensively:

1. Extract the CSS variables to Tailwind config:
```js
// tailwind.config.mjs
export default {
  theme: {
    extend: {
      colors: {
        primary: '#6366f1',
        'primary-dark': '#4f46e5',
        // ... etc
      }
    }
  }
}
```

2. Replace CSS classes with Tailwind utilities gradually
3. Keep complex animations in custom CSS

### Option 3: Create Components
Break down the page into Astro components:

```
src/
├── components/
│   ├── Hero.astro
│   ├── Navigation.astro
│   ├── CourseCard.astro
│   ├── FeatureCard.astro
│   ├── Testimonial.astro
│   └── FAQ.astro
└── pages/
    └── index.astro
```

Example component:
```astro
---
// src/components/CourseCard.astro
interface Props {
  title: string;
  description: string;
  icon: string;
  tags: string[];
}

const { title, description, icon, tags } = Astro.props;
---

<div class="course-card">
  <div class="course-icon">{icon}</div>
  <h3>{title}</h3>
  <p class="course-description">{description}</p>
  <!-- ... -->
</div>
```

## 🎯 Development Tips

1. **Hot Reload**: Changes to `.astro` files trigger instant browser refresh
2. **JavaScript**: All scripts work as before - they run client-side
3. **TypeScript**: You can add TypeScript to scripts if needed
4. **CSS**: Scoped by default in Astro components
5. **SEO**: Add meta tags in the `<head>` section

## 🔧 Configuration Notes

### Biome
- Configured for consistent code style
- Tabs with 2-space width
- 100 character line width
- Trailing commas enabled

### Astro
- Static site generation (SSG) by default
- No React/Vue needed for this project
- Lightning-fast build times

### Tailwind
- Installed but not actively used yet
- Ready for utility classes when needed
- Can coexist with custom CSS

## 📚 Resources

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS](https://tailwindcss.com)
- [Biome](https://biomejs.dev)

## 🐛 Troubleshooting

### Port already in use
```bash
yarn dev --port 3000
```

### Clear cache
```bash
rm -rf node_modules .astro dist
yarn install
```

### Formatting issues
```bash
yarn check --write
```

## ✨ Enjoy Building!

Your modern coding school landing page is now running on Astro with all animations and features intact. Happy coding! 🚀