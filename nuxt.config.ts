// This configuration file is the heart of our Nuxt 3 application
// It sets up RTL support, content management, and styling for our Kurdish website

export default defineNuxtConfig({
  // Enable development tools for better debugging experience
  devtools: { enabled: true },

  // Configure modules that extend Nuxt's functionality
  modules: [
    "@nuxt/content", // For blog posts and markdown content management
    "@nuxtjs/tailwindcss", // For utility-first CSS styling
  ],

  // Global CSS files - this is where we'll define our RTL styles
  css: ["~/assets/css/main.css"],

  // Configure Nuxt Content module for our blog and portfolio content
  content: {
    // Enable syntax highlighting for code blocks in blog posts
    highlight: {
      theme: "github-dark",
    },
    // Configure markdown parsing for Kurdish content
    markdown: {
      // Enable line numbers in code blocks
      anchorLinks: false,
    },
  },

  // App configuration for meta tags and global settings
  app: {
    head: {
      // Set HTML language and direction for Kurdish Sorani
      htmlAttrs: {
        lang: "ckb", // Kurdish Sorani language code
        dir: "rtl", // Right-to-left text direction
      },
      title: "وێبگەی کوردی - Kurdish Web",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "وێبگەی کوردی بۆ نیشاندانی کارەکان و بەرهەمەکان بە زمانی کوردی",
        },
      ],
      // Load Kurdish fonts for better typography
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@300;400;500;600;700&display=swap",
        },
      ],
    },
  },

  // Runtime configuration for environment variables
  runtimeConfig: {
    public: {
      siteName: "وێبگەی کوردی",
      siteDescription: "وێبگەی کوردی بۆ دیزاین و گەشەپێدانی وێبسایت",
      domain: "webs.krd",
      agencyName: "Kurdish Web",
      founded: "2020",
    },
  },
});
