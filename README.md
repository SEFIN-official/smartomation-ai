# Smartomation.ai - Enterprise AI Automation Platform

A full-featured Next.js website clone of Yellow.ai, branded as Smartomation.ai. Built with React, Next.js, TypeScript, TailwindCSS, Framer Motion, and Headless UI.

## Features

- 🚀 **Modern Stack**: Next.js 14, React 18, TypeScript
- 🎨 **Beautiful UI**: TailwindCSS with custom design system
- ✨ **Smooth Animations**: Framer Motion for delightful interactions
- 📱 **Fully Responsive**: Mobile-first design
- 🔍 **SEO Optimized**: Dynamic meta tags and semantic HTML
- 🤖 **Chatbot Widget**: Interactive AI assistant widget
- 🎯 **Multiple Pages**: Home, Solutions, Integrations, Case Studies, Resources, Pricing, About, Contact

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with Navbar & Footer
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── solutions/         # Solutions page
│   ├── integrations/     # Integrations page
│   ├── case-studies/      # Case studies page
│   ├── resources/         # Resources page
│   ├── pricing/           # Pricing page
│   ├── about/             # About page
│   ├── careers/           # Careers page
│   └── contact/           # Contact page
├── components/            # React components
│   ├── Navbar.tsx         # Navigation bar
│   ├── Hero.tsx           # Hero section
│   ├── Features.tsx       # Features grid
│   ├── BrandsCarousel.tsx # Brand carousel
│   ├── Testimonials.tsx   # Testimonials section
│   ├── Footer.tsx         # Footer component
│   ├── ChatbotWidget.tsx  # Chatbot widget
│   └── ...                # Other components
├── tailwind.config.js     # TailwindCSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies
```

## Key Components

### Navigation
- Sticky navbar with smooth scroll
- Mobile-responsive menu
- Active link highlighting

### Hero Section
- Animated background gradients
- Call-to-action buttons
- Feature icons with animations

### Features Grid
- 6 main features with icons
- Integration showcase
- Security badges

### Solutions
- Industry-specific solutions
- Use case pages
- Detailed feature lists

### Integrations
- 100+ integration cards
- Category filtering
- Search functionality

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```js
colors: {
  primary: { ... },
  accent: { ... }
}
```

### Content

All content is stored in component files. Edit the respective component to update text, images, or links.

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **TailwindCSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **Headless UI** - Accessible UI components
- **Heroicons** - Icon library

## License

This project is created for demonstration purposes.

## Support

For questions or support, please contact hello@smartomation.ai




