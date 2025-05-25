<template>
    <!-- Header navigation with RTL-optimized layout
       The header uses a responsive design that adapts to both desktop and mobile screens -->
    <header class="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">

                <!-- Logo section - positioned on the right side for RTL layout -->
                <div class="flex-shrink-0">
                    <NuxtLink to="/" class="flex items-center space-x-2 space-x-reverse">
                        <!-- Agency logo icon -->
                        <div class="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                            <span class="text-white font-bold text-sm">و</span>
                        </div>
                        <span class="font-bold text-xl text-gray-900">وێبگەی کوردی</span>
                    </NuxtLink>
                </div>

                <!-- Desktop Navigation Menu - hidden on mobile -->
                <nav class="hidden md:flex items-center space-x-8 space-x-reverse">
                    <NuxtLink v-for="item in navigationItems" :key="item.path" :to="item.path" class="nav-link"
                        :class="{ 'bg-gray-100': $route.path === item.path }">
                        {{ item.name }}
                    </NuxtLink>
                </nav>

                <!-- Contact button and mobile menu button -->
                <div class="flex items-center space-x-4 space-x-reverse">
                    <!-- Contact button - visible on all screen sizes -->
                    <NuxtLink to="/contact" class="btn-primary">
                        پەیوەندی
                    </NuxtLink>

                    <!-- Mobile menu button - only visible on mobile -->
                    <button @click="toggleMobileMenu"
                        class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        :aria-expanded="isMobileMenuOpen" aria-label="گۆڕینی مێنوو">
                        <!-- Hamburger icon with smooth transition -->
                        <div class="w-6 h-6 flex flex-col justify-center items-center">
                            <span class="w-5 h-0.5 bg-gray-600 transition-all duration-300"
                                :class="{ 'rotate-45 translate-y-1': isMobileMenuOpen }"></span>
                            <span class="w-5 h-0.5 bg-gray-600 my-1 transition-all duration-300"
                                :class="{ 'opacity-0': isMobileMenuOpen }"></span>
                            <span class="w-5 h-0.5 bg-gray-600 transition-all duration-300"
                                :class="{ '-rotate-45 -translate-y-1': isMobileMenuOpen }"></span>
                        </div>
                    </button>
                </div>
            </div>

            <!-- Mobile Navigation Menu - improved design and functionality -->
            <Transition enter-active-class="transition duration-300 ease-out"
                enter-from-class="transform -translate-y-full opacity-0"
                enter-to-class="transform translate-y-0 opacity-100"
                leave-active-class="transition duration-300 ease-in"
                leave-from-class="transform translate-y-0 opacity-100"
                leave-to-class="transform -translate-y-full opacity-0">
                <div v-if="isMobileMenuOpen" class="md:hidden">
                    <!-- Mobile menu overlay -->
                    <div class="fixed inset-0 z-40 bg-black bg-opacity-50" @click="closeMobileMenu"></div>

                    <!-- Mobile menu content -->
                    <div class="relative z-50 bg-white border-t border-gray-200 shadow-lg">
                        <nav class="px-4 pt-4 pb-6 space-y-2">
                            <NuxtLink v-for="item in navigationItems" :key="item.path" :to="item.path"
                                @click="closeMobileMenu"
                                class="flex items-center px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200"
                                :class="{ 'bg-gray-100 text-gray-900': $route.path === item.path }">
                                <!-- Add icons for better visual hierarchy -->
                                <span class="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                                {{ item.name }}
                            </NuxtLink>

                            <!-- Mobile contact button -->
                            <div class="pt-4 border-t border-gray-100">
                                <NuxtLink to="/contact" @click="closeMobileMenu"
                                    class="flex items-center justify-center w-full px-4 py-3 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors duration-200">
                                    پەیوەندی
                                </NuxtLink>
                            </div>
                        </nav>
                    </div>
                </div>
            </Transition>
        </div>
    </header>
</template>

<script setup>
// Component logic for navigation functionality
// This reactive state manages the mobile menu visibility

const isMobileMenuOpen = ref(false)

// Navigation items - this array defines all the pages in our agency site
// Each item guides potential clients through their decision-making journey
const navigationItems = [
    { name: 'سەرەتا', path: '/' },                    // Home
    { name: 'خزمەتگوزاریەکان', path: '/services' },     // Services (new focus)
    { name: 'کارەکانمان', path: '/works' },            // Our Works/Portfolio
    { name: 'دەربارەمان', path: '/about' },           // About Us (team story)
    { name: 'بلۆگ', path: '/blog' },                  // Blog/Insights
]

// Methods for handling mobile menu interactions
const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
    isMobileMenuOpen.value = false
}

// Close mobile menu when route changes (user navigates to new page)
// This ensures the menu doesn't stay open when user clicks a link
watch(() => useRoute().path, () => {
    closeMobileMenu()
})

// Close mobile menu when user clicks outside of it
// This provides better user experience on mobile devices
onMounted(() => {
    const handleClickOutside = (event) => {
        const header = event.target.closest('header')
        if (!header && isMobileMenuOpen.value) {
            closeMobileMenu()
        }
    }

    document.addEventListener('click', handleClickOutside)

    // Cleanup event listener when component is destroyed
    onUnmounted(() => {
        document.removeEventListener('click', handleClickOutside)
    })
})
</script>

<style scoped>
/* Header-specific styles for enhanced RTL support */

/* Ensure navigation links have proper spacing in RTL */
.nav-link {
    position: relative;
}

/* Active link indicator */
.nav-link.router-link-active {
    @apply text-gray-900 bg-gray-100;
}

/* Smooth hover effects for navigation items */
.nav-link:hover {
    @apply text-gray-900;
}

/* Mobile menu backdrop blur effect */
header {
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
}

/* Ensure proper spacing for RTL space-x-reverse utilities */
.space-x-reverse> :not([hidden])~ :not([hidden]) {
    --tw-space-x-reverse: 1;
    margin-right: calc(0.5rem * var(--tw-space-x-reverse));
    margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));
}
</style>