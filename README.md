# Backend Developer Portfolio

A clean, modern, and professional developer portfolio built with React, TypeScript, Vite, and TailwindCSS v4. This portfolio showcases a backend-focused full-stack developer's experience, projects, skills, and education.

## 🎨 Design Philosophy

This portfolio follows design principles inspired by Luma's CEO design guidelines:

- **Blue-shifted grays** for a more natural, professional look
- **High contrast** for clean, readable design
- **Generous whitespace** for elegant, uncluttered layouts
- **Subtle shadows** and hover effects for depth
- **Solid colors** over gradients for a clean aesthetic
- **Minimal, purposeful use of color** - treating saturated colors like spices

## 🏗️ Architecture

### Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx      # Fixed navigation with smooth scroll
│   │   ├── Footer.tsx          # Footer with social links
│   │   ├── SectionContainer.tsx # Reusable section wrapper
│   │   └── SectionTitle.tsx    # Consistent section headings
│   └── sections/
│       ├── Hero.tsx            # Landing section with bio
│       ├── Experience.tsx      # Work experience timeline
│       ├── Projects.tsx        # Featured projects grid
│       ├── Skills.tsx          # Technical skills by category
│       └── Education.tsx       # Educational background
├── data/
│   └── portfolio.ts            # Single source of truth for all content
├── App.tsx                     # Main app component
├── main.tsx                    # React entry point
└── index.css                   # Global styles & Tailwind import
```

### Key Features

- **Single Source of Truth**: All portfolio content is centralized in `portfolio.ts`
- **TypeScript Types**: Comprehensive type definitions for all data structures
- **Component Composition**: Reusable layout components for consistency
- **No Hardcoded Content**: Components are pure presentation layers
- **Responsive Design**: Mobile-first approach with Tailwind utilities
- **Smooth Navigation**: Scroll-to-section functionality
- **Accessibility**: Semantic HTML and ARIA labels

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Navigate to the project directory:

   ```bash
   cd VibeLumaPortfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser to `http://localhost:5173` (or the port shown in terminal)

### Building for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 📝 Customizing Content

All portfolio content is located in a single file: `src/data/portfolio.ts`

### Update Personal Information

```typescript
personal: {
  name: "Your Name",
  title: "Your Title",
  subtitle: "Your Subtitle",
  email: "your.email@example.com",
  location: "Your Location",
  bio: [
    "First paragraph of your bio",
    "Second paragraph of your bio",
  ]
}
```

### Add/Edit Experience

```typescript
experience: [
  {
    id: "unique-id",
    company: "Company Name",
    position: "Your Position",
    duration: "2022 - Present",
    location: "City, State",
    description: [
      "Achievement or responsibility 1",
      "Achievement or responsibility 2",
    ],
    technologies: ["Tech1", "Tech2", "Tech3"],
  },
];
```

### Add/Edit Projects

```typescript
projects: [
  {
    id: "unique-id",
    title: "Project Name",
    description: "Project description...",
    technologies: ["Tech1", "Tech2"],
    githubUrl: "https://github.com/...",
    liveUrl: "https://...",
    highlights: ["Key feature 1", "Key feature 2"],
  },
];
```

### Update Skills

```typescript
skills: [
  {
    name: "Skill Name",
    category: "backend" | "frontend" | "database" | "devops" | "tools",
  },
];
```

### Update Social Links

```typescript
socials: [
  { platform: "GitHub", url: "https://github.com/..." },
  { platform: "LinkedIn", url: "https://linkedin.com/in/..." },
];
```

## 🎨 Design System

### Color Palette

- **Gray Scale**: Natural blue-shifted grays for text and backgrounds
- **White**: Primary background color
- **Gray-50**: Subtle background variation
- **Gray-900**: Primary text color

### Typography

- **Font Family**: Inter (via Google Fonts)
- **Heading Weights**: 600-700 (semibold to bold)
- **Body Weights**: 400-500 (normal to medium)

### Spacing

- Sections: `py-20` (5rem vertical padding)
- Content containers: `max-w-5xl` for comfortable reading width
- Generous gaps between elements for breathing room

## 🛠️ Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **TailwindCSS v4** - Utility-first CSS framework
- **PostCSS** - CSS processing

## 📦 Deployment

This portfolio can be deployed to:

- **Vercel**: `vercel --prod`
- **Netlify**: Connect your repo and it auto-deploys
- **GitHub Pages**: Use `gh-pages` package
- **Any static hosting**: Build and upload the `dist/` folder

## 📄 License

This project is open source and available under the MIT License.

---

Built with ❤️ using React, TypeScript, and TailwindCSS
