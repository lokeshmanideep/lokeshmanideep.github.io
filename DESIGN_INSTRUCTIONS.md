# Portfolio Design Instructions

This document defines the UI and UX principles used to shape this portfolio website. It is the single source of truth for future design changes.

The portfolio is intentionally not a generic developer portfolio. Its visual language is derived from:

- `LUMA.pdf`
- `thread1.pdf` (`Design is hard.` by Dan Liu, focused on text layout)
- `thread2.pdf` (`Design is hard (II).` by Dan Liu, focused on color)

The goal is a portfolio that feels:

- mostly light
- softly tinted
- editorial
- product-grade
- calm
- intentional
- modern but not trendy
- polished without becoming loud

This document covers both the abstract design rules and the concrete implementation details already present in the codebase.

## 1. Core Design Intent

The portfolio should feel closer to a refined product landing page than a resume dump.

It should communicate:

- clarity over spectacle
- craft over decoration
- hierarchy over density
- calm confidence over flashy self-promotion

The site should not feel:

- pure black and white
- harsh
- overloaded with gradients
- over-illustrated
- cluttered with badges, bullets, and repeated metadata
- visually flat

The user should get the sense that:

- this person can build complex systems
- this person also understands taste and product polish
- the content has been curated, not just listed

## 2. Source Principles

### 2.1 From `thread1.pdf` — Text Layout Principles

The portfolio follows these text-layout rules:

- Titles and body text should use different line heights.
- Larger text should use tighter line height.
- Body text should use comfortable reading line height.
- Left alignment is the default.
- Text blocks should not stretch too wide.
- Spacing between text blocks should reflect relationship.
- Section titles should have more top breathing room than bottom crowding.
- Marketing-style pages benefit from larger text and more whitespace.

Operationally, that means:

- Headings are large and tight.
- Paragraphs are wide enough to breathe but not full-bleed.
- Text sits in controlled columns.
- Small labels use uppercase tracking to create structure.
- Supporting copy is visually quieter than headings.

### 2.2 From `thread2.pdf` — Color Principles

The portfolio follows these color rules:

- Use slightly blue-shifted grays instead of “perfect” gray.
- Avoid harsh black-on-tinted-background combinations.
- Use as few colors as possible.
- Use saturated colors sparingly.
- Use opacity heavily for borders, shadows, and soft fills.
- Prefer realistic, soft lighting behavior over loud gradients.
- Keep contrast high enough for usability, but not by making everything black.

Operationally, that means:

- The site uses cool neutrals, not default Tailwind gray stacks alone.
- Borders are subtle and semi-transparent.
- Backgrounds are lightly tinted, not flat white.
- Accent colors are soft and sparse.
- Gradients are atmospheric and localized, not broad rainbow backgrounds.

### 2.3 From `LUMA.pdf` — Product UI Direction

The LUMA reference contributes these practical qualities:

- light surfaces with subtle tinting
- layered cards and shells instead of flat page sections
- restrained but emotionally warm accent colors
- generous spacing
- strong visual grouping
- one focal visual element per region
- soft glass-like depth without heavy skeuomorphism
- elevated but quiet navigation chrome

The portfolio adapts those qualities while staying appropriate for a personal site.

## 3. Visual Personality

The design language should be described as:

- light editorial system
- soft SaaS polish
- premium but approachable
- technical but warm
- precise but not sterile

If a future change makes the site feel:

- monochrome and flat
- dark and heavy
- playful and startup-gimmicky
- generic Tailwind boilerplate
- over-colored

then it is likely moving away from the intended system.

## 4. Color System

The implemented base color system lives in `src/index.css`.

Current root tokens:

- `--bg: #f6f8fc`
- `--bg-soft: #edf3ff`
- `--page-bg: #f6f8fc`
- `--surface: rgba(255, 255, 255, 0.78)`
- `--surface-strong: rgba(255, 255, 255, 0.94)`
- `--surface-stronger: rgba(226, 232, 240, 0.96)`
- `--line: rgba(148, 163, 184, 0.24)`
- `--line-strong: rgba(148, 163, 184, 0.36)`
- `--border-soft: rgba(148, 163, 184, 0.24)`
- `--text: #111827`
- `--text-strong: #111827`
- `--text-soft: #5f6b7f`
- `--text-muted: #5f6b7f`
- `--accent: #5c78ff`
- `--accent-primary: #5c78ff`
- `--accent-soft: rgba(92, 120, 255, 0.12)`
- `--accent-rose: #f2a7b8`
- `--accent-secondary: #f2a7b8`
- `--accent-mint: #b7e2d3`
- `--shadow: 0 24px 80px rgba(15, 23, 42, 0.06)`

### 4.1 Approved Color Roles

Use color in these roles:

- page atmosphere
- soft radial glows
- section dividers
- pills and labels
- chip accents
- CTA emphasis
- media placeholders

Do not use color for:

- large solid blocks of saturated text
- random decorative stripes
- multiple competing CTA colors
- inconsistent card backgrounds

### 4.2 Accent Policy

There are three accent families:

- cool blue for primary emphasis
- soft rose for warmth
- pale mint for balance and freshness

These accents should appear:

- in gradients
- as soft glows
- in small bars
- in badge highlights
- in subtle overlays

They should not dominate entire sections.

## 5. Background Strategy

The page background is never flat white.

The body uses:

- multiple radial gradients
- very low-opacity colored atmosphere
- a soft vertical base gradient
- fixed attachment for depth stability

This creates a premium, lightly luminous canvas.

Rules:

- Keep backgrounds calm.
- Use diffuse gradients, not hard color transitions.
- Background effects should feel like ambient light, not visual content.

## 6. Surface Model

The site is built from layered surfaces.

### 6.1 Primary Surface

Used for major section shells:

- translucent white
- soft border
- large radius
- subtle shadow
- backdrop blur

This is implemented in `SectionContainer`.

### 6.2 Secondary Surface

Used for cards inside sections:

- white or near-white
- lighter shadow than section shells
- softer border than outer containers
- sometimes local tinting tied to category

### 6.3 Tertiary Surface

Used for pills, chips, and compact metadata:

- very soft neutral fill
- rounded full or rounded large
- high legibility
- minimal shadow

The hierarchy should always read:

- page atmosphere
- section shell
- card
- chip/button

not a flat stack of equally weighted rectangles.

## 7. Border and Radius System

Rounded geometry is a major part of the visual identity.

### 7.1 Radius Language

Use generous radii:

- section shells: around `2rem`
- large cards: `28px` to `32px`
- smaller cards: `20px` to `24px`
- pills: full rounded

Avoid:

- sharp-cornered cards
- inconsistent radii between neighboring elements
- tiny 4px or 6px rounding on major components

### 7.2 Border Style

Borders should:

- be soft
- slightly cool
- semi-transparent
- lower contrast than text

They are structural, not decorative.

### 7.3 Clipping Rule

Any container with a large radius and internal decorative layers must use `overflow-hidden`.

This avoids square-corner bleed from inner gradients or media.

## 8. Typography System

Typography is the main design engine.

### 8.1 General Philosophy

The site wins through hierarchy, spacing, and rhythm more than through illustration.

Text should feel:

- intentional
- controlled
- editorial
- readable

### 8.2 Heading Rules

Headings should:

- use tight line height
- use negative tracking
- stay visually dense and confident
- avoid excessive boldness everywhere

### 8.3 Body Rules

Body text should:

- use comfortable line height
- stay in muted slate tones
- avoid overly long line length
- preserve scannability through chunking

### 8.4 Small Labels

Use uppercase tracked labels for:

- section metadata
- category tags
- tiny supporting descriptors

These labels create rhythm and a product-grade information hierarchy.

### 8.5 Text Width

Long text should sit inside constrained columns.

Do not let paragraph blocks span the full container width unless the content is intentionally short.

## 9. Layout Principles

### 9.1 Horizontal Rhythm

The layout is based on a centered `max-w-7xl` shell with generous horizontal padding.

Major sections should feel framed and deliberate.

### 9.2 Vertical Rhythm

Spacing is generous and asymmetric in a thoughtful way.

Rules:

- top-level sections get large vertical spacing
- section titles sit with a comfortable buffer from cards
- tightly related items are grouped closer together
- unrelated groups have stronger separation

### 9.3 White Space

Whitespace is not empty; it is a key design tool.

Use whitespace to:

- create calm
- separate concepts
- increase readability
- make the site feel premium

Do not collapse sections into dense stacks.

## 10. Navigation Design

The navigation is treated like floating product chrome, not a plain website header.

Characteristics:

- fixed positioning
- pill-like shell
- translucent background
- blur
- subtle border
- stronger background once scrolled

Rules:

- navigation should feel light and elevated
- active states should be quiet but clear
- hover should rely on subtle fill and text contrast, not flashy animation
- brand mark should feel compact and intentional

## 11. Hero Design

The hero is not a resume block. It is the product-style introduction to the person.

### 11.1 Composition

The hero uses a two-column layout:

- left side for narrative and credibility
- right side for structured summary cards

This prevents the opening screen from becoming one long wall of text.

### 11.2 Content Hierarchy

Order:

- compact role label
- name
- role/title
- subtitle
- short bio paragraphs
- contact pills
- social pills
- structured summary panel

### 11.3 Hero Summary Panel

The right-side panel should feel like a quiet dashboard:

- location
- years of experience
- focus areas
- expertise framing

It provides density without visual heaviness.

### 11.4 Hero Interaction

Hero interactions should:

- be soft
- use pill-like buttons
- feel consistent with nav and footer

## 12. Section Shell Pattern

All major home sections use a common shell.

Each shell includes:

- atmospheric radial overlays
- a subtle top line
- rounded outer container
- translucent main surface

This creates consistency across:

- experience
- skills
- featured projects
- education

The shell should never feel like a generic white box dropped on a page.

## 13. Section Header Pattern

Each section heading should contain:

- a short accent bar
- a strong title
- optional subtitle

The subtitle should explain the section in a calm, human tone.

Avoid:

- overly formal corporate labels
- long explanatory paragraphs at the section header level

## 14. Card Design Principles

Cards should feel like curated objects.

Each card should have:

- clear hierarchy
- enough padding
- a comfortable radius
- a quiet border
- controlled shadow

Cards should not feel:

- like spreadsheet cells
- like default Tailwind demos
- overfilled with bullets

## 15. Projects Design Principles

Projects are one of the most important sections, so they follow stricter rules.

### 15.1 Project Card Philosophy

Project cards should read like previews, not full case studies.

The job of a project card is to:

- attract attention
- communicate the project at a glance
- hint at technical depth
- invite a deeper click

It is not meant to reproduce the entire project story.

### 15.2 Media-First Principle

Project cards should prioritize media before bullets.

Supported media hierarchy:

1. explicit image
2. YouTube embed
3. OG/link preview
4. detail image fallback
5. placeholder asset

This is implemented through:

- `src/utils/projectMedia.ts`
- `src/components/ProjectMedia.tsx`

### 15.3 Featured Projects

The featured projects layout uses:

- first project spanning both columns
- additional cards filling the second row

This creates editorial pacing:

- one anchor project
- supporting projects below

### 15.4 Project Copy Density

Project cards should include:

- category
- date
- title
- concise description
- technology chips
- links

Project cards should avoid:

- redundant bullet lists if description already carries meaning
- full implementation details
- repeated claims in multiple visual forms

### 15.5 CTAs

CTA hierarchy:

- `Live Demo` should carry stronger emphasis
- `Read More` is the path to depth
- `View Code` is secondary unless code is the main artifact

On the detail page, `Live Demo` is styled like a more primary button.

## 16. Project Detail Page Principles

Project detail pages should feel like calm case studies.

### 16.1 Structure

The detail page uses:

- a fixed soft nav
- a hero-style title region
- supporting metadata sidebar
- a large rounded content container

### 16.2 Content Tone

Long-form project content should feel:

- readable
- narrative
- restrained
- documented

It should not feel like:

- an academic dump
- a wall of markdown
- a blog theme pasted into the portfolio

### 16.3 What Was Removed on Purpose

Generic helper text like:

- “Project narrative”
- “Detailed documentation, architecture, and implementation notes.”

was removed because it repeated what the page already visually communicated.

The content should begin directly.

## 17. Experience Section Principles

Experience is designed as structured productized storytelling, not a plain resume timeline.

Characteristics:

- large rounded role cards
- left accent edge
- restrained metadata pills
- readable bullet alternatives

Experience should feel like:

- systems shipped
- roles earned
- impact framed clearly

not:

- narrow timeline bullets on white

## 18. Skills Section Principles

Skills are grouped by category into tinted panels.

This serves two purposes:

- reduce visual monotony
- create information grouping without using dense tables

Each category card should have:

- subtle gradient shell
- category marker dot
- count chip
- rounded skill pills

Avoid:

- giant tag clouds with no grouping
- over-compressed technical keyword walls

## 19. Education Section Principles

Education should feel structured and dignified, not like an afterthought.

Rules:

- use larger cards
- show institution identity clearly
- preserve academic seriousness
- avoid over-decoration

The dedicated education page can be richer than the compact home section, but both should share the same visual language.

## 20. Footer Principles

The footer is treated as a final soft surface, not a harsh dark block.

It should:

- continue the same shell language
- preserve contact usefulness
- feel like a graceful close to the page

Avoid:

- heavy black footer bars unless deliberately redesigning the whole system
- throwing all links into low-contrast text rows

## 21. Motion and Interaction

Motion should be minimal and meaningful.

Approved motion styles:

- slight lift on hover
- soft shadow increase
- subtle scale on media
- mild background emphasis

Avoid:

- bouncy interactions
- exaggerated spring animations
- unrelated motion on every component

The site should feel composed, not animated for its own sake.

## 22. Shadows and Depth

Shadows should:

- be dark with opacity
- be soft and diffuse
- support layering
- never become muddy

Do not use:

- hard shadows
- bright shadows pretending to be shadows
- multiple stacked shadow styles with no system

If a glow is used, it should read as atmospheric light, not as a drop shadow.

## 23. Iconography and Small UI Elements

Icons should:

- stay compact
- align cleanly with text
- avoid visual heaviness

Badges and pills should:

- feel refined
- keep enough padding
- use more horizontal than vertical space

This mirrors the text-layout guidance from `thread1.pdf`.

## 24. Media Handling Rules

### 24.1 Project Media Fallback Order

Project cards currently follow this order:

1. `coverImage`
2. YouTube embed from primary link
3. link preview
4. detail page image
5. placeholder asset

### 24.2 Media Styling

Media should:

- fill the card cleanly
- be clipped by card radius
- maintain strong composition
- never break outer rounding

### 24.3 Placeholder Media

Fallback imagery should still respect the design language:

- soft gradient
- editorial composition
- no loud illustration style

## 25. Accessibility and Readability

The design must stay usable.

Rules:

- maintain strong contrast on text
- avoid low-contrast decorative copy
- use meaningful hover states
- preserve readable line lengths
- keep touch targets comfortable

Decorative softness should never compromise clarity.

## 26. Analytics-Aware UX Consideration

Route-level titles are important for analytics clarity.

The site should maintain meaningful document titles per route so page reports are legible.

Examples:

- home
- projects
- education
- project detail pages with project-specific title

This is part of product polish, not just tracking.

## 27. Anti-Patterns

Do not introduce:

- flat white sections with no shell treatment
- pure black-heavy contrast blocks unless clearly justified
- center-aligned long paragraphs
- overloaded gradients
- repeated bullet lists that restate the paragraph
- chips on chips on chips
- generic dashboard aesthetics
- default Tailwind “rounded-xl border bg-white shadow-sm” everywhere
- loud accent colors spread across full sections
- large unexplained labels above already obvious content

## 28. Future Change Checklist

Before approving any design change, ask:

1. Does this preserve the light, softly tinted, editorial feel?
2. Does this make hierarchy clearer or noisier?
3. Is the spacing relationship better or flatter?
4. Does the color use feel restrained and intentional?
5. Is this more like a polished product, or more like a generic template?
6. Does the change reduce artificial density?
7. Does it respect the established shell / card / pill system?
8. If media is involved, does it add focus instead of clutter?

If the answer to several of these is no, revise the design.

## 29. Practical Implementation Notes

If building new UI in this portfolio, prefer:

- large radii
- layered translucent shells
- subtle radial atmospheres
- slate-first typography
- sparse accent usage
- left-aligned content
- media-first project previews
- stronger CTA hierarchy for demos

When in doubt:

- remove clutter
- increase spacing
- soften the surface
- reduce text redundancy
- let one focal element lead

## 30. Short Design Summary

This portfolio should feel like:

- a carefully art-directed technical portfolio
- a calm product experience
- a premium light UI with soft tints and restrained depth

It should not feel like:

- a default React portfolio template
- a monochrome resume page
- a flashy gradient-heavy personal brand site

The north star is:

build trust through clarity, spacing, softness, and structure.
