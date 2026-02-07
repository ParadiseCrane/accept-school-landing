# Component Architecture Documentation

## 📁 Project Structure

```
src/
├── layouts/
│   └── BaseLayout.astro          # Base HTML layout with global styles
├── components/
│   ├── Logo.astro                # Animated crane logo
│   ├── Navigation.astro          # Sticky navigation bar
│   ├── MatrixBackground.astro    # Matrix rain animation
│   ├── CodeWindow.astro          # Code snippet display window
│   ├── Hero.astro                # Hero section with stats
│   ├── TerminalWindow.astro      # Animated terminal
│   ├── BrowserWindow.astro       # Browser preview mockup
│   ├── SortVisualization.astro   # Bubble sort animation
│   ├── CourseCard.astro          # Individual course card
│   ├── Courses.astro             # Courses section
│   ├── FeatureCard.astro         # Individual feature card
│   ├── Features.astro            # Features section
│   ├── TestimonialCard.astro     # Individual testimonial
│   ├── Testimonials.astro        # Testimonials section
│   ├── FAQItem.astro             # Individual FAQ accordion
│   ├── FAQ.astro                 # FAQ section
│   ├── CTA.astro                 # Call-to-action section
│   └── Footer.astro              # Footer with links
└── pages/
    ├── index.astro               # Original monolithic version
    └── index-new.astro           # New componentized version
```

## 🧩 Component Breakdown

### Layout Components

#### **BaseLayout.astro**
Base HTML structure with:
- Font imports (Manrope, JetBrains Mono)
- Global CSS variables (colors, spacing)
- Global styles (reset, typography)
- Responsive utility classes

**Usage:**
```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout title="Custom Title">
  <!-- Your content -->
</BaseLayout>
```

**Props:**
- `title?: string` - Page title (default: "Accept School — ...")
- `description?: string` - Meta description

---

### Atomic Components

#### **Logo.astro**
Animated crane logo with optional text.

**Props:**
- `showText?: boolean` - Display "Accept" text (default: true)
- `className?: string` - Additional CSS classes

**Features:**
- Wing flapping animation
- Head bobbing animation
- Hover rotation effect

**Usage:**
```astro
<Logo />
<Logo showText={false} />
```

---

#### **MatrixBackground.astro**
Canvas-based matrix rain effect.

**Features:**
- Auto-resizes on window resize
- Japanese characters + binary
- Configurable opacity

**Usage:**
```astro
<MatrixBackground />
```

---

#### **CodeWindow.astro**
macOS-style code window with syntax highlighting.

**Props:**
- `title?: string` - Window title (default: "modern_python.py")
- `rotating?: boolean` - Enable code rotation animation

**Features:**
- Traffic light dots (red, yellow, green)
- Rotating code snippets (if enabled)
- Monospace font display

**Usage:**
```astro
<CodeWindow title="app.py">
  def hello(): return "world"
</CodeWindow>

<CodeWindow rotating={true}>
  Initial code text
</CodeWindow>
```

---

#### **TerminalWindow.astro**
Animated terminal with typing effect.

**Features:**
- Two command sequences (uv, ruff/mypy)
- Typing animation
- Colored output (prompt, command, success)
- Auto-loops between sequences

**Usage:**
```astro
<TerminalWindow />
```

---

#### **BrowserWindow.astro**
Browser mockup with component preview.

**Features:**
- Browser chrome (dots + address bar)
- React component card preview
- Gradient styling

**Usage:**
```astro
<BrowserWindow />
```

---

#### **SortVisualization.astro**
Bubble sort visualization with bars.

**Features:**
- Animates sorting algorithm
- Color-coded states (comparing, sorted)
- Auto-loops continuously

**Usage:**
```astro
<SortVisualization />
```

---

### Card Components

#### **CourseCard.astro**
Course information card with visual demo.

**Props:**
- `icon: string` - Emoji icon
- `title: string` - Course name
- `description: string` - Course description
- `tags: string[]` - Feature tags
- `visualType?: "terminal" | "browser" | "sort"` - Which visual to show

**Usage:**
```astro
<CourseCard
  icon="🐍"
  title="Modern Python"
  description="Learn Python 3.12+"
  tags={["Python", "Type Safety", "Async"]}
  visualType="terminal"
/>
```

---

#### **FeatureCard.astro**
Simple feature card with icon and text.

**Props:**
- `icon: string` - Emoji icon
- `title: string` - Feature title
- `description: string` - Feature description

**Usage:**
```astro
<FeatureCard
  icon="🚀"
  title="Modern Tools"
  description="Latest tech stack"
/>
```

---

#### **TestimonialCard.astro**
Student testimonial with avatar.

**Props:**
- `quote: string` - Testimonial text
- `name: string` - Student name
- `role: string` - Job title and company
- `avatar: string` - Initials for avatar

**Usage:**
```astro
<TestimonialCard
  quote="Amazing school!"
  name="John Doe"
  role="Developer @ Company"
  avatar="JD"
/>
```

---

#### **FAQItem.astro**
Accordion FAQ item.

**Props:**
- `question: string` - Question text
- `answer: string` - Answer text

**Features:**
- Click to expand/collapse
- Smooth height animation
- Rotating + icon

**Usage:**
```astro
<FAQItem
  question="How long is the course?"
  answer="3-6 months depending on pace."
/>
```

---

### Section Components

#### **Navigation.astro**
Fixed navigation bar.

**Features:**
- Sticky positioning
- Scroll effect (background blur increase)
- Smooth scroll on anchor clicks
- Hover underline animations

**Data:**
Links are defined in the component (can be moved to props if needed).

---

#### **Hero.astro**
Hero section with stats and code window.

**Features:**
- Matrix background
- Gradient overlays
- Stats display (500+, 98%, 24/7)
- Rotating code window
- Responsive grid layout

---

#### **Courses.astro**
Courses section with 3 course cards.

**Data:**
Course information is defined in the component.

**Features:**
- Responsive grid (auto-fit)
- Each card has unique visualization

---

#### **Features.astro**
Features section with 6 feature cards.

**Data:**
Feature information is defined in the component.

**Features:**
- Dark background section
- Responsive grid
- Hover effects on cards

---

#### **Testimonials.astro**
Testimonials section with 3 reviews.

**Data:**
Testimonial information is defined in the component.

**Features:**
- Responsive grid
- Avatar gradients

---

#### **FAQ.astro**
FAQ section with accordion.

**Data:**
FAQ items are defined in the component.

**Features:**
- Centered layout (max-width: 800px)
- JavaScript-powered accordion
- Only one item open at a time

---

#### **CTA.astro**
Call-to-action banner.

**Features:**
- Full-width gradient background
- Centered content
- White buttons on gradient

---

#### **Footer.astro**
Footer with links and logo.

**Data:**
Footer sections are defined in the component.

**Features:**
- 4-column responsive grid
- Legal links
- Copyright notice

---

## 🎯 Page Assembly

### **index-new.astro**
Main page using all components.

```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
import Navigation from "../components/Navigation.astro";
import Hero from "../components/Hero.astro";
// ... other imports
---

<BaseLayout>
  <Navigation />
  <Hero />
  <Courses />
  <Features />
  <Testimonials />
  <FAQ />
  <CTA />
  <Footer />
</BaseLayout>
```

---

## 🎨 Styling Strategy

### Global Styles (BaseLayout.astro)
- CSS variables for colors
- Reset styles
- Typography defaults
- Utility classes (.container, .section, .btn-*)

### Component Styles
- Scoped by default
- Use `:global()` for dynamic classes
- Animations defined in component

### Style Organization
1. **Layout styles** → BaseLayout
2. **Component-specific styles** → Each component
3. **Animation keyframes** → Component where used
4. **Responsive breakpoints** → Component level

---

## 🔧 Customization Guide

### Adding a New Course

Edit `src/components/Courses.astro`:

```astro
const courses = [
  // ... existing courses
  {
    icon: "🎨",
    title: "UI/UX Design",
    description: "Design beautiful interfaces",
    tags: ["Figma", "Design Systems", "UX Research"],
    visualType: "browser",
  },
];
```

### Adding a New Feature

Edit `src/components/Features.astro`:

```astro
const features = [
  // ... existing features
  {
    icon: "🌍",
    title: "Global Community",
    description: "Connect with students worldwide.",
  },
];
```

### Adding a New FAQ

Edit `src/components/FAQ.astro`:

```astro
const faqs = [
  // ... existing FAQs
  {
    question: "Do you offer refunds?",
    answer: "Yes, within 14 days of purchase.",
  },
];
```

### Changing Colors

Edit CSS variables in `src/layouts/BaseLayout.astro`:

```css
:root {
  --primary: #6366f1;        /* Change main color */
  --primary-dark: #4f46e5;
  --primary-light: #818cf8;
  /* ... */
}
```

---

## 🚀 Performance Tips

1. **Images**: If adding images, use Astro's Image component:
   ```astro
   import { Image } from 'astro:assets';
   ```

2. **Scripts**: Keep scripts in components where needed
   - They'll be bundled and optimized by Astro

3. **CSS**: Styles are automatically scoped and optimized
   - No CSS-in-JS runtime needed

4. **Animations**: Canvas animations run in `<script>` tags
   - Consider using `IntersectionObserver` to pause when off-screen

---

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px (default)
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

Example media query usage:
```css
@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
  }
}
```

---

## 🧪 Testing Your Components

### Run Development Server
```bash
yarn dev
```

### Build for Production
```bash
yarn build
```

### Format Code
```bash
yarn format
```

### Check Code Quality
```bash
yarn check
```

---

## 🔄 Migration Path

Two versions exist:

1. **index.astro** - Original monolithic version
   - Single file with all HTML
   - Embedded styles and scripts
   - Good for understanding structure

2. **index-new.astro** - Componentized version
   - Modular components
   - Reusable pieces
   - Easier to maintain

To use the new version, rename:
```bash
mv src/pages/index.astro src/pages/index-old.astro
mv src/pages/index-new.astro src/pages/index.astro
```

---

## 💡 Best Practices

1. **Props over Hardcoding**: Use component props for flexibility
2. **Data Separation**: Move data arrays to separate files if they grow
3. **Composition**: Prefer small, focused components
4. **TypeScript**: Add type annotations for better DX
5. **Accessibility**: Add ARIA labels where needed

---

## 🎓 Learning Resources

- [Astro Docs](https://docs.astro.build)
- [Component Props](https://docs.astro.build/en/core-concepts/astro-components/#component-props)
- [Styling](https://docs.astro.build/en/guides/styling/)
- [Client-side Scripts](https://docs.astro.build/en/guides/client-side-scripts/)

---

## 📝 Next Steps

1. ✅ Review component structure
2. ✅ Understand data flow
3. ⬜ Add new sections/components
4. ⬜ Customize colors and content
5. ⬜ Add analytics
6. ⬜ Deploy to production

Enjoy building with Astro! 🚀