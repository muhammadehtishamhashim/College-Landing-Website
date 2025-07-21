# Design Document

## Overview

The FG Science Degree College homepage enhancement focuses exclusively on creating a structured, visually appealing dark-themed homepage with beautiful animations. The design will showcase the college's key information through five main sections in a specific order: Hero Section, Introduction Preview, Achievements, Programs Preview, and Facilities Preview. The implementation uses Next.js 15.4 with JavaScript, emphasizing smooth GSAP scroll-triggered animations and responsive design.

**Visual Theme**: The homepage will feature a dark background theme throughout while preserving the existing DarkVeil background in the hero section.

## Homepage Structure and Flow

The homepage will be restructured to display sections in this specific order:
1. Hero Section (existing, preserved with DarkVeil background, don't touch it)
2. Introduction Preview (new section with college overview)
3. Achievements (new section highlighting accomplishments)
4. Programs Preview (enhanced to show only BS Physics and BS Computer Science with animations)
5. Facilities Preview (modified with dark theme styling to match other sections)

## Components and Interfaces

### Homepage Content Components

#### HeroSection (Existing)
- Preserve existing component with DarkVeil background
- No modifications to maintain current functionality
- Serves as the entry point to the homepage

#### IntroPreview (New)
- College introduction section with key information
- Dark theme styling with light text
- Professional typography and layout
- Responsive design for all screen sizes

#### Achievements (New)
- Section showcasing college achievements and awards
- Grid or card-based layout for accomplishments
- Dark theme with appropriate contrast
- Icons or visual elements to highlight achievements

#### ProgramsPreview (Enhanced)
- Display only BS Physics and BS Computer Science programs
- GSAP scroll-triggered animations:
  - BS Physics card animates from left (translateX: -100px to 0)
  - BS Computer Science card animates from right (translateX: 100px to 0)
  - Both cards fade in (opacity: 0 to 1)
  - Animation triggers when section enters viewport
- Same animation behavior on both desktop and mobile
- Dark theme styling with beautiful containers

#### FacilitiesPreview (Enhanced)
- Modify existing FacilitiesPreview component with dark theme styling
- Maintain existing card-based layout for facility information
- Update colors and styling to match dark theme
- Ensure consistent appearance with other sections

### Reusable Components

#### ProgramCard
- Individual program display component
- Dark theme styling with proper contrast
- Animation-ready for GSAP integration
- Responsive design

#### AnimatedContainer
- GSAP-powered wrapper for scroll animations
- Configurable animation properties
- Performance optimized with hardware acceleration

## Animation Specifications

### GSAP ScrollTrigger Implementation

#### Programs Preview Animations
- **Library**: GSAP ScrollTrigger plugin
- **Trigger**: Animation starts when Programs Preview section enters viewport
- **Desktop & Mobile Animation**:
  - BS Physics program: slides in from left (translateX: -100px → 0)
  - BS Computer Science program: slides in from right (translateX: 100px → 0)
  - Both cards: fade in simultaneously (opacity: 0 → 1)
- **Timing**: 0.8s duration with ease-out easing
- **Stagger**: 0.2s delay between animations
- **Performance**: Use transform3d for hardware acceleration

#### Animation Principles
- Respect user motion preferences (prefers-reduced-motion)
- Smooth 60fps animations
- Consistent behavior across all devices
- Trigger animations only when elements are in viewport

## Dark Theme Design

### Color Scheme
- **Background**: Dark colors (bg-gray-900, bg-slate-900)
- **Text**: Light colors (text-white, text-gray-100)
- **Cards**: Dark containers with subtle borders (bg-gray-800)
- **Accents**: Appropriate accent colors for highlights
- **Hero Section**: Preserve existing DarkVeil background (no changes)

### Accessibility
- Maintain WCAG 2.1 AA contrast ratios
- Ensure readability with light text on dark backgrounds
- Proper focus indicators for keyboard navigation

## Data Requirements

### Programs Data
Filter existing programs.json to show only:
- BS Physics (id: "bsc-physics")
- BS Computer Science (id: "bsc-computer-science")

### New Data Structures Needed

#### Achievements Data
```javascript
const achievements = [
  {
    id: "string",
    title: "string",
    description: "string",
    year: "string",
    icon: "string"
  }
]
```

#### Faculty Data
```javascript
const faculty = [
  {
    id: "string",
    name: "string",
    designation: "string",
    department: "string",
    qualifications: "string",
    image: "string"
  }
]
```

## Responsive Design

### Breakpoints
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

### Mobile Considerations
- Programs Preview animations work on mobile (same left/right pattern)
- Touch-friendly interface
- Optimized spacing and typography
- Proper image sizing and loading

## Performance Considerations

### Animation Performance
- Use CSS transforms for animations (not layout properties)
- Hardware acceleration with transform3d
- Efficient ScrollTrigger setup to avoid performance issues
- Lazy load animations only when needed

### Loading Strategy
- Preserve existing fast loading of Hero section
- Progressive enhancement for animations
- Optimize images for dark theme display