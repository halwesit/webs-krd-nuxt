<template>
    <!-- Custom error page that maintains branding and provides helpful navigation
       This page handles 404 and other errors gracefully with Kurdish messaging -->
    <div class="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div class="max-w-2xl mx-auto text-center">

            <!-- Error illustration or icon -->
            <div class="mb-8">
                <div class="w-32 h-32 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
                    <!-- 404 Icon -->
                    <svg v-if="error.statusCode === 404" class="w-16 h-16 text-gray-400" fill="none"
                        stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 20c-4.411 0-8-3.589-8-8 0-1.781.58-3.42 1.563-4.749L12 4l6.437 3.251A7.96 7.96 0 0120 12c0 4.411-3.589 8-8 8z" />
                    </svg>

                    <!-- Server Error Icon -->
                    <svg v-else class="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                </div>
            </div>

            <!-- Error message based on status code -->
            <div class="mb-8">
                <!-- 404 Not Found -->
                <div v-if="error.statusCode === 404">
                    <h1 class="text-6xl font-bold text-gray-900 mb-4">٤٠٤</h1>
                    <h2 class="text-3xl font-bold text-gray-800 mb-4">
                        لاپەڕەکە نەدۆزرایەوە
                    </h2>
                    <p class="text-lg text-gray-600 leading-relaxed mb-8">
                        ببورە، لاپەڕەکە کە بەدوایدا دەگەڕێیت بوونی نییە یان گوازراوەتەوە.
                        تکایە بەستەرەکە بپشکنە یان بگەڕێوە بۆ لاپەڕەی سەرەکی.
                    </p>
                </div>

                <!-- Server Error -->
                <div v-else-if="error.statusCode >= 500">
                    <h1 class="text-6xl font-bold text-gray-900 mb-4">{{ error.statusCode }}</h1>
                    <h2 class="text-3xl font-bold text-gray-800 mb-4">
                        هەڵەی سێرڤەر
                    </h2>
                    <p class="text-lg text-gray-600 leading-relaxed mb-8">
                        ببورە، کێشەیەکی تەکنیکی ڕوویداوە. تکایە چەند خولەکێک چاوەڕوان بە و
                        دواتر هەوڵبدەرەوە. ئەگەر کێشەکە بەردەوام بوو، پەیوەندیمان پێوە بکە.
                    </p>
                </div>

                <!-- Other Errors -->
                <div v-else>
                    <h1 class="text-6xl font-bold text-gray-900 mb-4">{{ error.statusCode || 'هەڵە' }}</h1>
                    <h2 class="text-3xl font-bold text-gray-800 mb-4">
                        هەڵەیەک ڕوویداوە
                    </h2>
                    <p class="text-lg text-gray-600 leading-relaxed mb-8">
                        {{ error.statusMessage || 'هەڵەیەکی نەناسراو ڕوویداوە. تکایە دواتر هەوڵبدەرەوە.' }}
                    </p>
                </div>
            </div>

            <!-- Action buttons -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">

                <!-- Go back button -->
                <button @click="goBack" class="btn-secondary flex items-center justify-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    گەڕانەوە
                </button>

                <!-- Home button -->
                <NuxtLink to="/" class="btn-primary flex items-center justify-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    سەرەتا
                </NuxtLink>

                <!-- Contact button (for server errors) -->
                <NuxtLink v-if="error.statusCode >= 500" to="/contact"
                    class="btn-secondary flex items-center justify-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    پەیوەندی
                </NuxtLink>
            </div>

            <!-- Helpful links for 404 pages -->
            <div v-if="error.statusCode === 404" class="border-t border-gray-200 pt-8">
                <h3 class="text-lg font-semibold text-gray-900 mb-4">
                    بەڵکو ئەمانە بتەوێت؟
                </h3>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                    <!-- Quick navigation links -->
                    <NuxtLink to="/works"
                        class="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center group">
                        <div
                            class="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:bg-gray-200 transition-colors">
                            <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                        </div>
                        <span class="text-sm font-medium text-gray-900">کارەکان</span>
                    </NuxtLink>

                    <NuxtLink to="/about"
                        class="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center group">
                        <div
                            class="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:bg-gray-200 transition-colors">
                            <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                        <span class="text-sm font-medium text-gray-900">دەربارە</span>
                    </NuxtLink>

                    <NuxtLink to="/blog"
                        class="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center group">
                        <div
                            class="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:bg-gray-200 transition-colors">
                            <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </div>
                        <span class="text-sm font-medium text-gray-900">بلۆگ</span>
                    </NuxtLink>

                    <NuxtLink to="/contact"
                        class="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center group">
                        <div
                            class="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:bg-gray-200 transition-colors">
                            <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <span class="text-sm font-medium text-gray-900">پەیوەندی</span>
                    </NuxtLink>
                </div>
            </div>

            <!-- Error details for development (hidden in production) -->
            <div v-if="isDev && error.stack" class="mt-12 p-4 bg-red-50 rounded-lg text-right">
                <details class="cursor-pointer">
                    <summary class="text-sm font-medium text-red-800 mb-2">
                        وردەکاریەکانی تەکنیکی (تەنها بۆ گەشەپێدەران)
                    </summary>
                    <pre
                        class="text-xs text-red-700 overflow-auto max-h-48 text-left whitespace-pre-wrap">{{ error.stack }}</pre>
                </details>
            </div>
        </div>
    </div>
</template>

<script setup>
// Error page component logic
// This page provides a branded, helpful experience for various error types

// Define props for error object
const props = defineProps({
    error: {
        type: Object,
        required: true
    }
})

// Check if we're in development mode
const isDev = process.dev

// SEO metadata for error pages
useHead({
    title: `هەڵە ${props.error.statusCode || ''} - وێبگەی کوردی`,
    meta: [
        {
            name: 'robots',
            content: 'noindex, nofollow'
        }
    ]
})

// Go back function
const goBack = () => {
    // Check if there's browser history to go back to
    if (window.history.length > 1) {
        window.history.back()
    } else {
        // If no history, redirect to home page
        navigateTo('/')
    }
}

// Optional: Track error for analytics (in production)
onMounted(() => {
    if (!isDev && props.error.statusCode) {
        // Example: Send error info to analytics service
        // gtag('event', 'page_error', {
        //   error_code: props.error.statusCode,
        //   error_message: props.error.statusMessage,
        //   page_location: window.location.href
        // })
    }
})

// Auto-redirect for certain errors after a delay (optional)
// onMounted(() => {
//   if (props.error.statusCode >= 500) {
//     setTimeout(() => {
//       navigateTo('/')
//     }, 10000) // Redirect to home after 10 seconds for server errors
//   }
// })
</script>

<style scoped>
/* Error page specific styling */

/* Ensure proper RTL layout */
.text-right {
    text-align: right;
}

.text-left {
    text-align: left;
}

/* Custom animations for error page elements */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Apply animation to main content */
.max-w-2xl {
    animation: fadeInUp 0.6s ease-out;
}

/* Enhanced button hover effects */
.btn-primary:hover,
.btn-secondary:hover {
    transform: translateY(-2px);
    transition: transform 0.2s ease;
}

/* Grid hover effects */
.group:hover {
    transform: translateY(-2px);
}

/* Details/summary styling for error info */
details summary {
    list-style: none;
}

details summary::-webkit-details-marker {
    display: none;
}

details[open] summary::after {
    content: ' ▲';
}

details summary::after {
    content: ' ▼';
    font-size: 0.8em;
    color: #dc2626;
}

/* Responsive adjustments */
@media (max-width: 640px) {
    .text-6xl {
        font-size: 4rem;
    }

    .text-3xl {
        font-size: 2rem;
    }

    .flex-col {
        gap: 1rem;
    }

    .grid-cols-1 {
        gap: 0.75rem;
    }
}

/* Dark mode support (if implemented) */
@media (prefers-color-scheme: dark) {
    .bg-gray-50 {
        background-color: #1f2937;
    }

    .text-gray-900 {
        color: #f9fafb;
    }

    .text-gray-600 {
        color: #d1d5db;
    }
}
</style>