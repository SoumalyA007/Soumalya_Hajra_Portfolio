# Design Brief — QA Engineer Portfolio

## Direction
Premium tech minimalist—deep indigo + electric cyan. Meticulous, professional, recruiter-focused. Hero-led hero, impact-driven metrics, smooth animations.

## Tone
Professional yet approachable. Bold in accent placement, restrained in primary. Not flashy; precision-engineered.

## Palette (Light)

| Token | OKLCH | RGB | Usage |
|-------|-------|-----|-------|
| **Primary** | `0.25 0.08 275` | #2D1B47 | Headings, primary CTA, brand depth |
| **Accent** | `0.65 0.14 200` | #66CCFF | Buttons glow, highlights, underlines |
| **Background** | `0.98 0 0` | #FAFAFA | Page bg, spacious clarity |
| **Foreground** | `0.12 0 0` | #1F1F1F | Body text, high contrast |
| **Card** | `1.0 0 0` | #FFFFFF | Elevated surfaces |
| **Muted** | `0.92 0 0` | #EBEBEB | Secondary info, subtle contrast |
| **Border** | `0.88 0 0` | #E0E0E0 | Dividers, card edges |

## Palette (Dark)

| Token | OKLCH | RGB | Usage |
|-------|-------|-----|-------|
| **Primary** | `0.65 0.14 200` | #66CCFF | Accent primary in dark (flipped) |
| **Background** | `0.08 0 0` | #151515 | Deep black, premium feel |
| **Foreground** | `0.96 0 0` | #F5F5F5 | Text, pure white contrast |
| **Card** | `0.12 0 0` | #1F1F1F | Card bg, slight lift |
| **Muted** | `0.16 0 0` | #292929 | Secondary accent, grid lines |
| **Border** | `0.2 0 0` | #333333 | Dividers, soft structure |

## Typography

| Role | Font | Styles |
|------|------|--------|
| **Display** | General Sans | Headings (700), h1–h3 |
| **Body** | DM Sans | Paragraph, nav, labels (400–500) |
| **Mono** | JetBrains Mono | Code, metrics display, tech callouts |

## Structural Zones

| Zone | Treatment | Rationale |
|------|-----------|-----------|
| **Header** | `bg-card border-b`, sticky, nav links + dark/light toggle | Clear hierarchy, persistent nav |
| **Hero** | `bg-background` gradient accent overlay, profile image, headline + subhead, two CTAs with glow | Impact within 3 seconds |
| **About** | `bg-background` card-list layout, body copy + impact stats | Context, proof |
| **Skills** | `bg-muted/20` section, animated bars with cyan underlines | Visual engagement, scannable |
| **Projects** | `bg-background` cards grid, `bg-card` elevated surfaces, hover lift | Modularity, showcase |
| **Contact** | `bg-background` form + social icons, footer with soft border-t | CTA funnel, accessibility |

## Spacing & Rhythm
Grid-based: 4px, 8px, 12px, 16px, 24px, 32px, 48px. Dense on mobile, breathed on desktop. Card padding: 24px. Section margin: 48px vertical.

## Component Patterns

- **Buttons**: Primary = `bg-primary text-primary-foreground` solid. CTA = `bg-accent text-accent-foreground btn-glow` hover effect.
- **Cards**: `bg-card shadow-elevated rounded-lg` with `border border-border`.
- **Inputs**: `bg-input border-border focus:ring-accent` smooth transition.
- **Badge**: `bg-muted text-muted-foreground px-3 py-1 rounded-sm` compact.
- **Skill Bar**: Container `bg-muted/30`, fill `bg-accent accent-underline`, animated on scroll.

## Motion
- **Fade-in**: 0.6s ease-out, staggered entry on sections
- **Slide-up**: 0.6s ease-out, 12px offset, hero content
- **Pulse-glow**: 2s infinite, metrics badges
- **Transition smooth**: 0.3s cubic-bezier(0.4, 0, 0.2, 1) on all interactive elements

## Signature Detail
Cyan glow on CTA buttons and accent underlines—unmistakable, neon-inspired but restrained. Not overdone; precision placement.

## Constraints
- No generic blue (#3B82F6). Only OKLCH palette.
- Radius: 0–8px (8px max on cards, 4px on buttons).
- Shadows: minimal, elevated only on cards/modals, glow only on accent CTAs.
- Dark mode: true black background (L: 0.08), high contrast cyan accents.
- Animations: meaningful, never gratuitous. Entrance only, no bouncy effects.
- No gradients on text; only button overlays and subtle section dividers.

## Differentiation
Cyan glow + high-contrast dark mode + meticulous spacing + impact metrics = memorable first impression designed for recruiter scanning.

