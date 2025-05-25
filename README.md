# وێبگەی کوردی - Kurdish Portfolio Website

A modern, RTL-optimized portfolio website built with **Nuxt 3** and **Tailwind CSS**, specifically designed for Kurdish content creators, designers, and developers. This project demonstrates advanced web development techniques while maintaining cultural authenticity and linguistic accuracy.

![Kurdish Website Preview](./public/images/preview.jpg)

## ✨ Features

### 🌍 **Kurdish Language Support**
- **Full RTL (Right-to-Left) layout** optimized for Kurdish Sorani
- **Kurdish typography** with proper font rendering
- **Cultural color palette** respecting Kurdish heritage
- **Localized date formatting** and number systems

### 🎨 **Modern Design System**
- **Clean, minimalist aesthetic** inspired by contemporary portfolio designs
- **Responsive design** that works perfectly on all devices
- **Dark/Light mode** support (ready for implementation)
- **Smooth animations** and micro-interactions

### 🚀 **Performance Optimized**
- **Nuxt 3** for optimal performance and SEO
- **Static site generation** capabilities
- **Image optimization** and lazy loading
- **Minimal JavaScript** for fast loading times

### 📝 **Content Management**
- **Nuxt Content** for blog posts and dynamic content
- **Markdown-based** blog system
- **SEO-optimized** meta tags and structured data
- **RSS feeds** and sitemap generation

### 🛠 **Developer Experience**
- **TypeScript** support throughout
- **Tailwind CSS** with custom RTL utilities
- **Component-based architecture**
- **Hot module replacement** for rapid development

## 📁 Project Structure

```
kurdish-web-portfolio/
├── assets/
│   └── css/
│       └── main.css              # Global styles and RTL utilities
├── components/
│   ├── AppHeader.vue             # Navigation header
│   ├── AppFooter.vue             # Site footer
│   └── ScrollToTop.vue           # Scroll-to-top functionality
├── content/
│   └── blog/                     # Markdown blog posts
│       ├── how-designers-prepare-future.md
│       └── create-effective-landing-page.md
├── layouts/
│   └── default.vue               # Main layout template
├── pages/
│   ├── index.vue                 # Homepage
│   ├── about.vue                 # About page
│   ├── works.vue                 # Portfolio/works page
│   ├── blog.vue                  # Blog listing page
│   ├── contact.vue               # Contact page
│   ├── works/
│   │   └── [slug].vue           # Dynamic project pages
│   └── blog/
│       └── [slug].vue           # Dynamic blog post pages
├── public/
│   └── images/                   # Static images and assets
├── nuxt.config.ts               # Nuxt configuration
├── tailwind.config.js           # Tailwind CSS configuration
├── package.json                 # Dependencies and scripts
└── error.vue                    # Custom error page
```

## 🚀 Quick Start

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/your-username/kurdish-web-portfolio.git
cd kurdish-web-portfolio
```

2. **Install dependencies:**
```bash
npm install
# or
yarn install
```

3. **Start the development server:**
```bash
npm run dev
# or
yarn dev
```

4. **Open your browser:**
Navigate to `http://localhost:3000` to see your Kurdish website in action!

### Build for Production

```bash
# Generate static files
npm run generate

# Or build for server deployment
npm run build
```

## 🎨 Customization Guide

### Changing Colors and Branding

Edit `tailwind.config.js` to customize your color palette:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your brand colors here
        500: '#your-brand-color',
      },
      kurdish: {
        red: '#dc2626',     // Traditional Kurdish red
        yellow: '#fbbf24',  // Traditional Kurdish yellow  
        green: '#16a34a'    // Traditional Kurdish green
      }
    }
  }
}
```

### Adding Your Content

#### Portfolio Projects
Edit the projects data in `pages/works.vue` and create corresponding project detail files in `pages/works/[slug].vue`.

#### Blog Posts
Create new Markdown files in the `content/blog/` directory:

```markdown
---
title: 'ناونیشانی بابەتەکەت'
description: 'کورتەیەک لە بابەتەکە'
date: '2023-12-01'
image: '/images/blog/your-image.jpg'
category: 'جۆری بابەت'
tags: ['تاگ١', 'تاگ٢']
---

# ناوەڕۆکی بابەتەکەت لێرە بنووسە
```

#### Personal Information
Update your personal information in:
- `pages/about.vue` - About page content
- `pages/contact.vue` - Contact information
- `components/AppFooter.vue` - Footer details

### Styling Customization

#### RTL (Right-to-Left) Layout
The website automatically handles RTL layout for Kurdish text. Key RTL utilities include:

```css
.text-start-rtl    /* Right-aligned text in RTL */
.mr-rtl           /* Left margin in RTL context */
.flex-row-reverse-rtl  /* Reversed flex direction */
```

#### Typography
Kurdish fonts are configured in `assets/css/main.css`:

```css
body {
  font-family: 'Noto Sans Arabic', 'Segoe UI', Tahoma, Arial, sans-serif;
  direction: rtl;
  text-align: right;
}
```

## 🌐 Deployment

### Static Site Generation

This website can be deployed as a static site on platforms like:

- **Netlify**: Connect your GitHub repo for automatic deployments
- **Vercel**: Zero-config deployment with Git integration
- **GitHub Pages**: Free hosting for static sites
- **Firebase Hosting**: Google's hosting platform

### Build Commands

```bash
# For static hosting
npm run generate

# For server-side rendering
npm run build
npm run preview
```

### Environment Variables

Create a `.env` file for production settings:

```env
NUXT_PUBLIC_SITE_URL=https://your-domain.com
NUXT_PUBLIC_GTM_ID=your-google-tag-manager-id
```

## 🔧 Technical Details

### Performance Features

- **Image Optimization**: Automatic image optimization and lazy loading
- **Code Splitting**: Automatic code splitting for optimal loading
- **CSS Purging**: Unused CSS automatically removed in production
- **Compression**: Gzip compression for all assets

### SEO Features

- **Meta Tags**: Automatic meta tag generation for all pages
- **Structured Data**: JSON-LD structured data for better search visibility
- **Sitemap**: Automatic sitemap generation
- **RSS Feed**: Blog RSS feed generation

### Accessibility Features

- **Keyboard Navigation**: Full keyboard navigation support
- **Screen Reader**: Proper ARIA labels and semantic HTML
- **Color Contrast**: WCAG compliant color contrasts
- **Focus Management**: Visible focus indicators

## 🤝 Contributing

We welcome contributions to improve this Kurdish web template! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines

- Follow **Vue 3 Composition API** patterns
- Use **TypeScript** for new components
- Maintain **RTL layout** compatibility
- Test on **multiple devices** and browsers
- Follow Kurdish **language conventions**

## 📚 Resources

### Learning Resources
- [Nuxt 3 Documentation](https://nuxt.com/)
- [Vue 3 Guide](https://vuejs.org/guide/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Kurdish Typography Guide](https://github.com/kurdi-dev/kurdish-fonts)

### Design Inspiration
- [Kurdish Design Patterns](https://kurdish-design.com)
- [RTL Web Design Best Practices](https://rtlstyling.com)
- [Middle Eastern Web Design](https://mideast-design-trends.com)

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Kurdish Language Community** for cultural guidance
- **Noto Fonts** for excellent Arabic/Kurdish font support
- **Tailwind CSS** for the utility-first approach
- **Nuxt Team** for the amazing framework
- **Vue.js Community** for the incredible ecosystem

---

**Made with ❤️ for the Kurdish developer community**

*وەک بەشێک لە کۆمەڵگەی گەشەپێدەرانی کورد، ئەم پڕۆژەیە بۆ پشتگیری و پەرەپێدانی تەکنەلۆژی بە زمانی کوردی دروست کراوە.*

## 📞 Support

If you have questions or need help:

- **Create an Issue**: [GitHub Issues](https://github.com/your-username/kurdish-web-portfolio/issues)
- **Email**: info@kurdishweb.com
- **Twitter**: [@KurdishWeb](https://twitter.com/kurdishweb)

---

**Happy coding! کۆدنەویسینی خۆش!** 🚀