<template>
  <!-- Root application template - this wraps every page on webs.krd
       Think of this as the foundation that every page is built upon -->
  <div id="app" class="min-h-screen bg-gray-50">

    <!-- Global loading indicator - shows when navigating between pages -->
    <Transition name="page-loading" enter-active-class="transition-opacity duration-300 ease-out"
      enter-from-class="opacity-0" enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-300 ease-in" leave-from-class="opacity-100"
      leave-to-class="opacity-0">
      <div v-if="pending" class="fixed inset-0 z-50 bg-white bg-opacity-90 flex items-center justify-center">
        <!-- Kurdish-styled loading spinner -->
        <div class="text-center">
          <div class="animate-spin w-8 h-8 border-3 border-gray-300 border-t-gray-900 rounded-full mx-auto mb-4"></div>
          <p class="text-gray-600 text-sm">بارکردن...</p>
        </div>
      </div>
    </Transition>

    <!-- Main application layout wrapper
         This is where Nuxt decides which layout to use for each page -->
    <NuxtLayout>
      <!-- Page content insertion point
           Every page component (index.vue, about.vue, etc.) gets rendered here -->
      <NuxtPage />
    </NuxtLayout>

    <!-- Global notification system for user feedback -->
    <ClientOnly>
      <Teleport to="body">
        <div id="toast-container"></div>
      </Teleport>
    </ClientOnly>

    <!-- Development-only debugging panel (removed in production automatically) -->
    <NuxtDevtools v-if="$config.public.dev" />
  </div>
</template>

<script setup>
// Root application logic and global configuration
// This script runs on every page load and sets up global functionality

// Global SEO and meta configuration that applies to every page
// These can be overridden by individual pages when needed
useHead({
  // Set default HTML language and direction for the entire site
  htmlAttrs: {
    lang: 'ckb',  // Kurdish Sorani language code
    dir: 'rtl'    // Right-to-left text direction
  },

  // Default meta tags that apply to all pages (can be overridden)
  title: 'وێبز کوردستان - ئاژانسی دیزاینی دیجیتاڵی کوردی',
  meta: [
    // Essential meta tags for proper rendering and SEO
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      name: 'description',
      content: 'ئاژانسی پێشەنگی کوردی بۆ دیزاین و گەشەپێدانی وێبسایت، براندینگ، و چارەسەری دیجیتاڵ'
    },

    // Open Graph tags for social media sharing
    { property: 'og:site_name', content: 'وێبز کوردستان' },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'ckb_IQ' },

    // Twitter Card tags for Twitter sharing
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@webs_krd' },

    // Additional SEO and technical meta tags
    { name: 'robots', content: 'index, follow' },
    { name: 'author', content: 'وێبز کوردستان' },
    { name: 'theme-color', content: '#1f2937' },

    // Mobile and browser-specific optimizations
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
    { name: 'apple-mobile-web-app-title', content: 'وێبز کوردستان' }
  ],

  // Global CSS and font loading
  link: [
    // Preconnect to font services for better performance
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },

    // Load Kurdish/Arabic fonts with optimal display settings
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@300;400;500;600;700&family=Noto+Serif+Arabic:wght@400;500;600;700&display=swap'
    },

    // Favicon and app icons
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'manifest', href: '/site.webmanifest' }
  ],

  // Global structured data for search engines
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        'name': 'وێبز کوردستان',
        'alternateName': 'Webs Kurdistan',
        'url': 'https://webs.krd',
        'description': 'ئاژانسی پێشەنگی کوردی بۆ دیزاین و گەشەپێدانی وێبسایت',
        'foundingDate': '2020',
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': 'سلێمانی',
          'addressRegion': 'کوردستان',
          'addressCountry': 'IQ'
        },
        'contactPoint': {
          '@type': 'ContactPoint',
          'telephone': '+964-750-123-4567',
          'contactType': 'customer service',
          'email': 'hello@webs.krd'
        },
        'sameAs': [
          'https://twitter.com/webs_krd',
          'https://instagram.com/webs.krd',
          'https://linkedin.com/company/webs-kurdistan'
        ]
      })
    }
  ]
})

// Global loading state management
// This tracks when the application is loading new pages or data
const pending = ref(false)

// Access to Nuxt's runtime configuration
const { $config } = useNuxtApp()

// Global error handling for the entire application
// This catches any unhandled errors and provides graceful fallbacks
onErrorCaptured((error, instance, info) => {
  // Log error for debugging (in development) or monitoring (in production)
  console.error('Global error caught:', error, info)

  // In production, you might want to send this to an error tracking service
  // like Sentry, LogRocket, or Bugsnag for monitoring
  if (process.env.NODE_ENV === 'production') {
    // Example: Sentry.captureException(error)
  }

  // Prevent the error from propagating and breaking the entire application
  return false
})

// Global navigation event handlers
// These provide feedback during page transitions
const nuxtApp = useNuxtApp()

// Show loading indicator when starting navigation
nuxtApp.hook('page:start', () => {
  pending.value = true
})

// Hide loading indicator when navigation completes
nuxtApp.hook('page:finish', () => {
  pending.value = false
})

// Global keyboard shortcuts (optional enhancement)
// These provide power-user navigation options
onMounted(() => {
  const handleKeyboard = (event) => {
    // Command/Ctrl + K to focus search (if you add search functionality later)
    if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
      event.preventDefault()
      // Focus search input when implemented
      // document.querySelector('#search-input')?.focus()
    }

    // Escape key to close modals or overlays
    if (event.key === 'Escape') {
      // Close any open modals, menus, or overlays
      // This provides consistent escape behavior across the site
    }
  }

  document.addEventListener('keydown', handleKeyboard)

  // Cleanup event listener when component unmounts
  onUnmounted(() => {
    document.removeEventListener('keydown', handleKeyboard)
  })
})

// Performance monitoring (optional but valuable for agencies)
// This helps you understand how fast your website loads for users
if (process.client && 'performance' in window) {
  onMounted(() => {
    // Wait for page to fully load before measuring performance
    setTimeout(() => {
      const perfData = performance.getEntriesByType('navigation')[0]
      if (perfData) {
        const loadTime = perfData.loadEventEnd - perfData.loadEventStart

        // In production, you might send this data to analytics
        // Example: gtag('event', 'page_load_time', { value: loadTime })

        // For development, log performance data
        if (process.env.NODE_ENV === 'development') {
          console.log(`Page load time: ${loadTime}ms`)
        }
      }
    }, 1000)
  })
}
</script>

<style>
/* Global styles that apply to the entire application
   These styles ensure consistent behavior across all pages */

/* Ensure smooth scrolling throughout the site */
html {
  scroll-behavior: smooth;
}

/* Global RTL text direction for Kurdish content */
body {
  direction: rtl;
  text-align: right;
}

/* Loading transition styles */
.page-loading-enter-active,
.page-loading-leave-active {
  transition: opacity 0.3s ease;
}

.page-loading-enter-from,
.page-loading-leave-to {
  opacity: 0;
}

/* Custom scrollbar styling for better aesthetics */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

/* Focus styles for better accessibility */
*:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

/* Ensure images don't break layout */
img {
  max-width: 100%;
  height: auto;
}

/* Print styles for better document printing */
@media print {
  .no-print {
    display: none !important;
  }

  body {
    font-size: 12pt;
    line-height: 1.4;
  }

  h1,
  h2,
  h3 {
    page-break-after: avoid;
  }
}

/* High contrast mode support for accessibility */
@media (prefers-contrast: high) {
  .bg-gray-50 {
    background-color: white;
  }

  .text-gray-600 {
    color: black;
  }
}

/* Reduced motion support for users with motion sensitivity */
@media (prefers-reduced-motion: reduce) {

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Dark mode preparation (for future implementation) */
@media (prefers-color-scheme: dark) {
  /* Dark mode styles would go here when you're ready to implement them */
}
</style>