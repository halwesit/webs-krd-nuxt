<template>
    <!-- Scroll to top button that appears when user scrolls down
       This enhances user experience by providing easy navigation back to the top -->
    <Transition enter-active-class="transition duration-300 ease-out"
        enter-from-class="transform translate-y-16 opacity-0" enter-to-class="transform translate-y-0 opacity-100"
        leave-active-class="transition duration-300 ease-in" leave-from-class="transform translate-y-0 opacity-100"
        leave-to-class="transform translate-y-16 opacity-0">
        <button v-if="showScrollButton" @click="scrollToTop"
            class="fixed bottom-8 left-8 z-40 w-12 h-12 bg-gray-900 text-white rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 flex items-center justify-center hover:scale-110"
            aria-label="گەڕانەوە بۆ سەرەوە">
            <!-- Up arrow icon -->
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
        </button>
    </Transition>
</template>

<script setup>
// Component logic for scroll-to-top functionality
// This demonstrates how to create interactive UI elements that respond to user behavior

// Reactive state to track whether the button should be visible
const showScrollButton = ref(false)

// Function to smoothly scroll to the top of the page
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

// Function to handle scroll events and determine button visibility
const handleScroll = () => {
    // Show button when user has scrolled more than 300 pixels down
    // This prevents the button from appearing too early in the scroll
    showScrollButton.value = window.scrollY > 300
}

// Set up scroll event listener when component mounts
// This is a great example of how Vue 3's Composition API handles lifecycle events
onMounted(() => {
    // Add scroll event listener with throttling for better performance
    let ticking = false

    const throttledHandleScroll = () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                handleScroll()
                ticking = false
            })
            ticking = true
        }
    }

    window.addEventListener('scroll', throttledHandleScroll, { passive: true })

    // Clean up event listener when component is destroyed
    // This prevents memory leaks and is a crucial practice in Vue development
    onUnmounted(() => {
        window.removeEventListener('scroll', throttledHandleScroll)
    })
})
</script>

<style scoped>
/* Scroll button specific styling with enhanced RTL support */

/* Position the button on the left side for RTL layout
   In LTR layouts, this would typically be on the right side */
button {
    /* Enhanced shadow for better visibility */
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* Hover effect that slightly enlarges the button */
button:hover {
    /* Transform scale creates a nice interactive feedback */
    transform: scale(1.1);

    /* Enhanced shadow on hover for depth effect */
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

/* Focus styles for accessibility - important for keyboard navigation */
button:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
}

/* Active state for when button is being clicked */
button:active {
    transform: scale(0.95);
}

/* Responsive adjustments for mobile devices */
@media (max-width: 640px) {
    button {
        /* Slightly smaller on mobile for better finger accessibility */
        width: 2.75rem;
        height: 2.75rem;
        bottom: 1.5rem;
        left: 1.5rem;
    }
}
</style>