---
name: Synthetic Intelligence
colors:
  surface: '#13131b'
  surface-dim: '#13131b'
  surface-bright: '#393841'
  surface-container-lowest: '#0d0d15'
  surface-container-low: '#1b1b23'
  surface-container: '#1f1f27'
  surface-container-high: '#292932'
  surface-container-highest: '#34343d'
  on-surface: '#e4e1ed'
  on-surface-variant: '#c7c4d7'
  inverse-surface: '#e4e1ed'
  inverse-on-surface: '#303038'
  outline: '#908fa0'
  outline-variant: '#464554'
  surface-tint: '#c0c1ff'
  primary: '#c0c1ff'
  on-primary: '#1000a9'
  primary-container: '#8083ff'
  on-primary-container: '#0d0096'
  inverse-primary: '#494bd6'
  secondary: '#4cd7f6'
  on-secondary: '#003640'
  secondary-container: '#03b5d3'
  on-secondary-container: '#00424e'
  tertiary: '#d0bcff'
  on-tertiary: '#3c0091'
  tertiary-container: '#a078ff'
  on-tertiary-container: '#340080'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#acedff'
  secondary-fixed-dim: '#4cd7f6'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5c'
  tertiary-fixed: '#e9ddff'
  tertiary-fixed-dim: '#d0bcff'
  on-tertiary-fixed: '#23005c'
  on-tertiary-fixed-variant: '#5516be'
  background: '#13131b'
  on-background: '#e4e1ed'
  surface-variant: '#34343d'
typography:
  display-lg:
    fontFamily: JetBrains Mono
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: JetBrains Mono
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: JetBrains Mono
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: JetBrains Mono
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.05em
  code:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 64px
  section-padding: 120px
---

## Brand & Style
The design system is engineered for a high-performance, enterprise-grade AI Data platform. It evokes a sense of technical precision, "developer-first" sophistication, and futuristic reliability. The aesthetic is a hybrid of **Minimalism** and **Glassmorphism**, drawing inspiration from the technical clarity of Vercel and the atmospheric depth of OpenAI.

Key brand pillars:
- **Precision:** Perfect alignment and monospaced accents reflect data accuracy.
- **Atmospheric Depth:** Multi-layered surfaces with background blurs and subtle glows to imply a powerful "engine" beneath the UI.
- **Modern Authority:** A dark-first approach that prioritizes content legibility and high-contrast focus areas.

## Colors
The palette is built on a "Deep Space" foundation. The background is nearly black (#09090B), allowing primary gradients to appear as if they are emitting light. 

- **Primary & Secondary:** Used for high-action items and data visualization. Use the Indigo-to-Cyan gradient to represent "data flow."
- **Tertiary & Accent:** Reserved for AI-specific features or "magic" moments, typically applied as soft glows or subtle border highlights.
- **Neutral/Surface:** Tiered grays (#18181B) create separation without breaking the dark aesthetic. 
- **Interactive States:** Use a 10% brightness increase on hover for all primary colors.

## Typography
The system uses a functional contrast between **JetBrains Mono** for structural/technical elements and **Inter** for reading-heavy content.

- **Headlines:** Always JetBrains Mono. Use tight tracking for large display sizes to maintain a "blocky," engineered feel.
- **Body:** Inter provides a clean, neutral balance. Use generous line heights (1.6) to ensure clarity against dark backgrounds.
- **Technical Accents:** Small labels, buttons, and data readouts should use JetBrains Mono in uppercase to emphasize the platform's automation/code DNA.

## Layout & Spacing
This design system utilizes a **Fixed Grid** for marketing content and a **Fluid Layout** for the dashboard components. 

- **Grid:** 12-column system with 24px gutters. 
- **Whitespace:** Emphasize "luxury whitespace." Sections should be separated by a minimum of 120px on desktop to allow the glassmorphic elements to breathe.
- **Background Grid:** Implement a subtle 32px or 64px background grid pattern using a 2% opacity white stroke to reinforce the "Data Platform" theme.
- **Alignment:** Consistent left-alignment for copy; center-alignment only for high-impact hero statements.

## Elevation & Depth
Depth is created through **Luminous Layers** rather than traditional shadows.

- **Level 1 (Base):** #09090B (Pure background).
- **Level 2 (Cards):** #18181B with a 1px border (#FFFFFF, 8% opacity).
- **Level 3 (Floating):** Backdrop blur (20px) with a subtle "Outer Glow" using the primary indigo color at 10% opacity.
- **Interaction:** On hover, cards should increase their border opacity to 20% and slightly translate Y-axis (-4px) to simulate physical lifting.
- **Glows:** Use large, blurred radial gradients (400px-600px radius) in the background at 5% opacity to create "pools of light."

## Shapes
The design system uses a generous **24px (1.5rem)** radius for primary containers and cards to soften the technical edge of the monospaced type.

- **Standard Radius:** 8px for small components (buttons, inputs).
- **Large Radius:** 24px for feature cards and main modal containers.
- **Pill:** Used exclusively for status indicators (tags/chips).
- **Borders:** All borders should be 1px wide. Avoid thick borders; use color and glow to define prominence instead.

## Components

### Buttons
- **Primary:** Gradient background (Indigo to Violet), white text (Inter, Bold). 1px inner highlight on the top edge.
- **Secondary:** Transparent background, 1px white border (15% opacity), hover state fills the background with white at 5% opacity.
- **Ghost:** No border, JetBrains Mono text. Hover triggers a subtle underline animation.

### Cards
- **Glass Card:** Background: #18181B at 80% opacity. Backdrop-filter: blur(12px). Border: 1px solid rgba(255,255,255,0.1).
- **Interactive Card:** Transitions to a 1px Primary-color border on hover with a soft outer glow.

### Inputs
- Dark fill (#0C0C0E), 1px border. Focus state: Border changes to Cyan (#06B6D4) with a 2px outer "neon" glow.

### Chips/Tags
- JetBrains Mono, 12px, Uppercase. Background: Primary color at 10% opacity, Text: Primary color.

### Additional Components
- **Data Visualizers:** Use thin 1px lines for charts.
- **AI Sparkle:** A custom icon/animation used near "automated" fields using the Accent (#A855F7) color.
- **Code Snippets:** Syntax highlighting using the cyan and violet brand colors on a #121214 background.