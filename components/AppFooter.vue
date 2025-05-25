<template>
    <!-- Footer section with collaboration call-to-action and site information
       The footer mirrors the design concept from the original AMRDN Design portfolio -->
    <footer class="relative">

        <!-- Main collaboration section with dark background -->
        <section class="bg-gray-900 text-white py-16 md:py-20">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                <!-- Main call-to-action heading -->
                <h2 class="text-3xl md:text-4xl font-bold mb-6">
                    ئامادەی بۆ هاوکاری؟
                </h2>

                <!-- Subtitle encouraging contact -->
                <p class="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                    با بیرۆکەکانت لێرە بخەینەوە
                </p>

                <!-- Email contact link with hover effect -->
                <a href="mailto:info@kurdishweb.com"
                    class="inline-block text-xl font-medium border-b-2 border-white hover:border-gray-300 transition-colors duration-300 mb-12">
                    info@kurdishweb.com
                </a>

                <!-- Navigation links row -->
                <div class="flex flex-wrap justify-center items-center gap-8 text-sm">
                    <NuxtLink v-for="item in footerLinks" :key="item.path" :to="item.path"
                        class="hover:text-gray-300 transition-colors duration-300"
                        :class="{ 'text-gray-400': $route.path === item.path }">
                        {{ item.name }}
                    </NuxtLink>
                </div>
            </div>
        </section>

        <!-- Bottom footer section with copyright and social links -->
        <section class="bg-white border-t border-gray-200 py-6">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                    <!-- Copyright notice -->
                    <div class="text-sm text-gray-600 text-center md:text-right">
                        © {{ currentYear }} - هەموو مافەکان پارێزراون
                    </div>

                    <!-- Social media links -->
                    <div class="flex justify-center md:justify-end items-center space-x-6 space-x-reverse">
                        <a v-for="social in socialLinks" :key="social.name" :href="social.url" :aria-label="social.name"
                            class="text-gray-600 hover:text-gray-900 transition-colors duration-300" target="_blank"
                            rel="noopener noreferrer">
                            <component :is="social.icon" class="w-5 h-5" />
                        </a>
                    </div>

                    <!-- "Back to Top" link -->
                    <button @click="scrollToTop"
                        class="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300 flex items-center gap-2">
                        <span>گەڕانەوە بۆ سەرەوە</span>
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    </footer>
</template>

<script setup>
// Footer component logic and data
// This script section handles the dynamic content and interactions

// Get current year for copyright notice
const currentYear = new Date().getFullYear()

// Footer navigation links - these should match main navigation
const footerLinks = [
    { name: 'کارەکان', path: '/works' },
    { name: 'دەربارە', path: '/about' },
    { name: 'بلۆگ', path: '/blog' },
    { name: 'پەیوەندی', path: '/contact' }
]

// Social media links configuration
// These icons will be imported from Heroicons for consistency
const socialLinks = ref([
    {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/kurdishweb',
        icon: 'LinkedInIcon'
    },
    {
        name: 'Dribbble',
        url: 'https://dribbble.com/kurdishweb',
        icon: 'DribbbleIcon'
    },
    {
        name: 'Twitter',
        url: 'https://twitter.com/kurdishweb',
        icon: 'TwitterIcon'
    },
    {
        name: 'Instagram',
        url: 'https://instagram.com/kurdishweb',
        icon: 'InstagramIcon'
    }
])

// Smooth scroll to top functionality
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

// Import social media icons
// These will be available as components in the template
const LinkedInIcon = defineAsyncComponent(() =>
    import('@heroicons/vue/24/outline').then(module => ({ default: module.UserIcon }))
)

const DribbbleIcon = defineAsyncComponent(() =>
    import('@heroicons/vue/24/outline').then(module => ({ default: module.GlobeAltIcon }))
)

const TwitterIcon = defineAsyncComponent(() =>
    import('@heroicons/vue/24/outline').then(module => ({ default: module.ChatBubbleLeftIcon }))
)

const InstagramIcon = defineAsyncComponent(() =>
    import('@heroicons/vue/24/outline').then(module => ({ default: module.CameraIcon }))
)
</script>

<style scoped>
/* Footer-specific styling for enhanced visual appeal */

/* Gradient background effect for the collaboration section */
.bg-gray-900 {
    background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
}

/* Email link hover animation */
a[href^="mailto"] {
    position: relative;
    transition: all 0.3s ease;
}

a[href^="mailto"]:hover {
    transform: translateY(-2px);
}

/* Social link hover effects */
.social-link:hover {
    transform: translateY(-2px);
}

/* Responsive adjustments for mobile devices */
@media (max-width: 768px) {
    .flex-col {
        text-align: center;
    }

    .space-x-reverse> :not([hidden])~ :not([hidden]) {
        margin-right: 0.5rem;
        margin-left: 0;
    }
}

/* Subtle animation for the back to top button */
button:hover svg {
    transform: translateY(-2px);
    transition: transform 0.2s ease;
}
</style>