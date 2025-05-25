<template>
    <!-- Main layout wrapper that applies to all pages
       This provides consistent navigation and structure throughout the site -->
    <div class="min-h-screen bg-gray-50">
        <!-- Header Navigation Component -->
        <AppHeader />

        <!-- Main content area where individual pages will be rendered -->
        <main class="relative">
            <!-- This is where Nuxt will inject the content of each page -->
            <slot />
        </main>

        <!-- Footer Component -->
        <AppFooter />

        <!-- Scroll to top button for better user experience -->
        <ScrollToTop />
    </div>
</template>

<script setup>
// Layout-level logic and SEO meta tags
// The useHead composable allows us to set meta information for the entire site

useHead({
    // Set the base language and direction for all pages
    htmlAttrs: {
        lang: 'ckb', // Kurdish Sorani language code
        dir: 'rtl'   // Right-to-left text direction
    },

    // Global meta tags that apply to all pages
    meta: [
        {
            name: 'author',
            content: 'وێبگەی کوردی'
        },
        {
            name: 'keywords',
            content: 'کوردی، وێبسایت، دیزاین، پورتفۆلیۆ، Kurdish, Kurdistan, Web Design'
        },
        {
            property: 'og:site_name',
            content: 'وێبگەی کوردی'
        },
        {
            property: 'og:type',
            content: 'website'
        }
    ],

    // Structured data for better SEO
    script: [
        {
            type: 'application/ld+json',
            children: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Person',
                'name': 'وێبگەی کوردی',
                'description': 'دیزاینەری دیجیتاڵی کوردی',
                'url': 'https://kurdishweb.com'
            })
        }
    ]
})

// Runtime configuration access
const { public: config } = useRuntimeConfig()
</script>

<style scoped>
/* Layout-specific styles
   These styles ensure the layout structure works properly in RTL */

main {
    /* Minimum height to push footer to bottom of viewport */
    min-height: calc(100vh - 200px);
}

/* Smooth scrolling for anchor links */
html {
    scroll-behavior: smooth;
}

/* Custom scrollbar styling for RTL layout */
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
    background: #a8a8a8;
}
</style>