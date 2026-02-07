# Component Tree Visualization

## 📊 Page Structure

```
index-new.astro
│
├─── BaseLayout
│    │
│    └─── <head> + global styles
│
├─── Navigation
│    │
│    └─── Logo
│
├─── Hero
│    │
│    ├─── MatrixBackground
│    └─── CodeWindow (rotating=true)
│
├─── Courses
│    │
│    ├─── CourseCard (Python)
│    │    └─── TerminalWindow
│    │
│    ├─── CourseCard (Web Dev)
│    │    └─── BrowserWindow
│    │
│    └─── CourseCard (CS)
│         └─── SortVisualization
│
├─── Features
│    │
│    ├─── FeatureCard × 6
│    ├─── FeatureCard
│    ├─── FeatureCard
│    ├─── FeatureCard
│    ├─── FeatureCard
│    └─── FeatureCard
│
├─── Testimonials
│    │
│    ├─── TestimonialCard
│    ├─── TestimonialCard
│    └─── TestimonialCard
│
├─── FAQ
│    │
│    ├─── FAQItem × 5
│    ├─── FAQItem
│    ├─── FAQItem
│    ├─── FAQItem
│    └─── FAQItem
│
├─── CTA
│    │
│    └─── (no child components)
│
└─── Footer
     │
     └─── Logo
```

## 🎨 Component Hierarchy by Type

### Layout Components
```
BaseLayout (root layout)
└── Provides global styles & HTML structure
```

### Navigation Components
```
Navigation
└── Logo
```

### Hero Components
```
Hero
├── MatrixBackground (canvas animation)
└── CodeWindow (with rotation)
```

### Visualization Components
```
TerminalWindow (typing animation)
BrowserWindow (preview mockup)
SortVisualization (sorting bars)
```

### Content Components
```
CourseCard (accepts visualType prop)
├── Can contain: TerminalWindow
├── Can contain: BrowserWindow
└── Can contain: SortVisualization

FeatureCard (simple icon + text)
TestimonialCard (quote + author)
FAQItem (accordion item)
```

### Section Components
```
Courses (contains 3 × CourseCard)
Features (contains 6 × FeatureCard)
Testimonials (contains 3 × TestimonialCard)
FAQ (contains 5 × FAQItem)
CTA (standalone section)
```

### Footer Components
```
Footer
└── Logo
```

## 🔄 Data Flow

### Props Flow (Top-Down)
```
Parent Component
    │
    ├─── passes props ───→ Child Component
    │                           │
    │                           └─── uses props for rendering
    │
    └─── passes different props ───→ Another Child Component
```

Example:
```
Courses.astro
    │
    ├─── { icon, title, tags, visualType: "terminal" } ───→ CourseCard
    │                                                            │
    │                                                            └─── TerminalWindow
    │
    └─── { icon, title, tags, visualType: "browser" } ────→ CourseCard
                                                                 │
                                                                 └─── BrowserWindow
```

## 🎯 Reusable Components

### Used Once
- Hero
- Navigation
- CTA
- Footer
- MatrixBackground

### Used Multiple Times
- Logo (2×): Navigation, Footer
- CourseCard (3×): One per course
- FeatureCard (6×): One per feature
- TestimonialCard (3×): One per testimonial
- FAQItem (5×): One per question

### Conditionally Rendered
- TerminalWindow (only in Python CourseCard)
- BrowserWindow (only in Web Dev CourseCard)
- SortVisualization (only in CS CourseCard)

## 🎬 Interactive Components

### With JavaScript
```
MatrixBackground
└── Canvas animation loop

TerminalWindow
└── Typing animation sequence

SortVisualization
└── Bubble sort visualization

CodeWindow (when rotating=true)
└── Text rotation animation

FAQItem
└── Click handler for accordion

Navigation
└── Scroll listener + smooth scroll
```

### Static (No JS)
```
Logo
FeatureCard
TestimonialCard
BrowserWindow (static preview)
CTA
```

## 📦 Import Chain

```
index-new.astro
│
├── import BaseLayout from '../layouts/BaseLayout.astro'
│
├── import Navigation from '../components/Navigation.astro'
│   └── imports Logo
│
├── import Hero from '../components/Hero.astro'
│   ├── imports MatrixBackground
│   └── imports CodeWindow
│
├── import Courses from '../components/Courses.astro'
│   ├── imports CourseCard
│   │   ├── imports TerminalWindow
│   │   ├── imports BrowserWindow
│   │   └── imports SortVisualization
│
├── import Features from '../components/Features.astro'
│   └── imports FeatureCard
│
├── import Testimonials from '../components/Testimonials.astro'
│   └── imports TestimonialCard
│
├── import FAQ from '../components/FAQ.astro'
│   └── imports FAQItem
│
├── import CTA from '../components/CTA.astro'
│
└── import Footer from '../components/Footer.astro'
    └── imports Logo
```

## 🎨 Style Inheritance

```
BaseLayout (global styles)
    │
    ├── CSS Variables (colors, spacing)
    ├── Reset styles
    ├── Typography
    └── Utility classes (.btn-primary, .container, etc.)
          │
          └── Inherited by all components
                │
                ├── Component-specific styles (scoped)
                ├── Component-specific styles (scoped)
                └── Component-specific styles (scoped)
```

## 🔀 Conditional Rendering

In **CourseCard.astro**:
```astro
{visualType === "terminal" && <TerminalWindow />}
{visualType === "browser" && <BrowserWindow />}
{visualType === "sort" && <SortVisualization />}
```

In **CodeWindow.astro**:
```astro
{rotating && <script>/* rotation logic */</script>}
```

In **Logo.astro**:
```astro
{showText && <span class="logo-text">Accept</span>}
```

## 📐 Sizing & Layout

### Full-Width Sections
```
Hero (100vh min-height)
Courses (auto height)
Features (auto height)
Testimonials (auto height)
FAQ (auto height)
CTA (auto height)
Footer (auto height)
```

### Contained Content
```
.container (max-width: 1400px)
└── Centers content on larger screens
```

### Grid Layouts
```
Hero → 2 columns (1 on mobile)
Courses → auto-fit, min 350px
Features → auto-fit, min 300px
Testimonials → auto-fit, min 350px
Footer → 4 columns (responsive)
```

## 🎭 Animation Triggers

### On Page Load
- MatrixBackground starts
- TerminalWindow starts typing
- SortVisualization starts sorting
- CodeWindow starts rotating (if rotating=true)

### On Scroll
- Navigation background blur increases

### On Click
- FAQ items expand/collapse
- Nav links smooth scroll

### On Hover
- Logo tilts and lifts
- Cards lift up
- Buttons grow shadow
- Nav links underline

## 📱 Responsive Breakpoints

```
Desktop (>1024px)
├── Hero: 2 columns
├── Courses: 3 columns (if space)
├── Features: 3 columns (if space)
└── Footer: 4 columns

Tablet (768-1024px)
├── Hero: 1 column
├── Courses: 2 columns
├── Features: 2 columns
└── Footer: 2 columns

Mobile (<768px)
├── All: 1 column
└── Navigation: Hidden (add mobile menu in future)
```

---

This tree structure helps you understand:
1. **What components exist**
2. **How they're nested**
3. **Which ones are reusable**
4. **How data flows**
5. **Where to make changes**