<template>
    <!-- Works page - the showcase of professional capabilities
       This page serves as the primary decision-making factor for potential clients -->
    <div>

        <!-- Hero section establishing the page purpose -->
        <section class="bg-white py-20 md:py-32">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                <!-- Page title and introduction -->
                <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-6">
                    کارەکان کە دەیکەم
                </h1>

                <!-- Value proposition and methodology -->
                <p class="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                    بەرهەمی دیجیتاڵ دروست دەکەم کە سەرنج لە پێداویستیەکانی بەکارهێنەر
                    دەخاتەوە و لەگەڵ ستراتیژی بەرهەمەکە دەگونجێت
                </p>
            </div>
        </section>

        <!-- Filter section for project categorization -->
        <section class="bg-gray-50 py-8 sticky top-16 z-30 border-b border-gray-200">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex flex-wrap justify-center gap-4">

                    <!-- Filter buttons for different project categories -->
                    <button v-for="category in categories" :key="category.id" @click="setActiveFilter(category.id)"
                        class="px-6 py-2 rounded-full text-sm font-medium transition-all duration-300" :class="[
                            activeFilter === category.id
                                ? 'bg-gray-900 text-white'
                                : 'bg-white text-gray-600 hover:bg-gray-100'
                        ]">
                        {{ category.name }}
                        <span class="mr-2 text-xs opacity-75">
                            ({{ category.count }})
                        </span>
                    </button>
                </div>
            </div>
        </section>

        <!-- Main portfolio grid -->
        <section class="py-20 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <!-- Projects grid with masonry-like layout -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

                    <!-- Individual project cards -->
                    <div v-for="(project, index) in filteredProjects" :key="project.id"
                        class="portfolio-card group cursor-pointer animate-fade-in-up"
                        :style="`animation-delay: ${index * 0.1}s`" @click="navigateToProject(project.slug)">

                        <!-- Project image with aspect ratio preservation -->
                        <div class="aspect-video bg-gray-200 overflow-hidden">
                            <img :src="project.image" :alt="project.title"
                                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                loading="lazy" />
                        </div>

                        <!-- Project information overlay -->
                        <div class="p-6">

                            <!-- Project metadata (category and year) -->
                            <div class="flex justify-between items-center mb-3">
                                <span class="text-sm font-medium text-gray-500 uppercase tracking-wide">
                                    {{ project.category }}
                                </span>
                                <span class="text-sm text-gray-400">
                                    {{ project.year }}
                                </span>
                            </div>

                            <!-- Project title and description -->
                            <h3
                                class="text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                                {{ project.title }}
                            </h3>

                            <p class="text-gray-600 leading-relaxed line-clamp-3">
                                {{ project.description }}
                            </p>

                            <!-- View project link with arrow indicator -->
                            <div
                                class="mt-4 flex items-center text-gray-900 font-medium group-hover:text-gray-600 transition-colors">
                                <span class="mr-2">بینینی پڕۆژە</span>
                                <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Load more button for pagination (if needed) -->
                <div v-if="hasMoreProjects" class="text-center mt-12">
                    <button @click="loadMoreProjects" class="btn-secondary" :disabled="isLoading">
                        <span v-if="!isLoading">زیاتر بارکردن</span>
                        <span v-else class="flex items-center">
                            <svg class="animate-spin -ml-1 mr-3 h-4 w-4" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                    stroke-width="4" />
                                <path class="opacity-75" fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            بارکردن...
                        </span>
                    </button>
                </div>

                <!-- Empty state when no projects match filter -->
                <div v-if="filteredProjects.length === 0" class="text-center py-16">
                    <div class="text-gray-500 text-lg mb-4">
                        هیچ پڕۆژەیەک نەدۆزرایەوە
                    </div>
                    <p class="text-gray-400">
                        فلتەرێکی تر هەڵبژێرە یان دواتر سەردانی بکەرەوە
                    </p>
                </div>
            </div>
        </section>

    </div>
</template>

<script setup>
// Works page component logic and data management
// This page handles project filtering, loading, and navigation

// SEO metadata for the works page
useHead({
    title: 'کارەکان - وێبگەی کوردی',
    meta: [
        {
            name: 'description',
            content: 'نموونەی کارەکانی دیزاینی دیجیتاڵ، وێبسایت، براند، و پڕۆژەکانی تر'
        },
        {
            property: 'og:title',
            content: 'کارەکان - وێبگەی کوردی'
        },
        {
            property: 'og:description',
            content: 'نموونەی کارەکانی دیزاینی دیجیتاڵ، وێبسایت، براند، و پڕۆژەکانی تر'
        }
    ]
})

// Reactive state for filtering and pagination
const activeFilter = ref('all')
const isLoading = ref(false)
const hasMoreProjects = ref(false)

// Project categories for filtering - this helps users find relevant work
const categories = ref([
    { id: 'all', name: 'هەموو', count: 12 },
    { id: 'web-design', name: 'دیزاینی وێب', count: 6 },
    { id: 'branding', name: 'براندینگ', count: 3 },
    { id: 'mobile-app', name: 'ئەپی مۆبایل', count: 2 },
    { id: 'ui-ux', name: 'UI/UX', count: 4 }
])

// Complete projects data - in a real application, this would come from an API or CMS
// Each project includes all necessary information for display and filtering
const allProjects = ref([
    {
        id: 1,
        title: 'وێبسایتی گۆڤاری کوردستان',
        description: 'گۆڤارێکی ئۆنلاین کە دوایین زانیاریەکان لەسەر مۆد، ڕووداو، تیپ و ئامۆژگاری ژیان، و زۆر شتی تر دەخاتەڕوو',
        category: 'دیزاینی وێب',
        year: '٢٠٢٣',
        image: '/images/projects/zenith-magazine.jpg',
        slug: 'zenith-magazine',
        tags: ['web-design', 'ui-ux']
    },
    {
        id: 2,
        title: 'لاپەڕەی لاندینگی ئارونیکا',
        description: 'پلاتفۆرمێکی دیجیتاڵی سەردەم کە شێوازی کارکردنی خەڵک لەگەڵ تەکنەلۆژیا دەگۆڕێت',
        category: 'دیزاینی وێب',
        year: '٢٠٢٢',
        image: '/images/projects/arunika-landing.jpg',
        slug: 'arunika-landing-page',
        tags: ['web-design']
    },
    {
        id: 3,
        title: 'داشبۆردی CRM پۆسلی',
        description: 'پلاتفۆرمێکی دیجیتاڵی سەردەم کە شێوازی کارکردنی خەڵک لەگەڵ تەکنەلۆژیا دەگۆڕێت',
        category: 'دیزاینی وێب',
        year: '٢٠٢١',
        image: '/images/projects/posly-crm.jpg',
        slug: 'posly-crm-dashboard',
        tags: ['web-design', 'ui-ux']
    },
    {
        id: 4,
        title: 'وێبسایتی کەسی جیسن',
        description: 'پلاتفۆرمێکی دیجیتاڵی سەردەم کە شێوازی کارکردنی خەڵک لەگەڵ تەکنەلۆژیا دەگۆڕێت',
        category: 'دیزاینی وێب',
        year: '٢٠٢١',
        image: '/images/projects/jason-personal.jpg',
        slug: 'jason-personal-website',
        tags: ['web-design']
    },
    {
        id: 5,
        title: 'براندی شەرکەتی تەکنەلۆژی',
        description: 'ناسنامەی تەواوی براند بۆ شەرکەتێکی نوێی تەکنەلۆژی لەگەڵ لۆگۆ، ڕەنگ، و ستایلی نووسین',
        category: 'براندینگ',
        year: '٢٠٢٣',
        image: '/images/projects/tech-company-brand.jpg',
        slug: 'tech-company-branding',
        tags: ['branding']
    },
    {
        id: 6,
        title: 'ئەپی مۆبایلی فیتنەس',
        description: 'ئەپلیکەیشنێکی مۆبایل بۆ دوای کەوتنی ئاستی تەندروستی و فیتنەس لەگەڵ UI/UX نوێ',
        category: 'ئەپی مۆبایل',
        year: '٢٠٢٢',
        image: '/images/projects/fitness-mobile-app.jpg',
        slug: 'fitness-mobile-app',
        tags: ['mobile-app', 'ui-ux']
    }
])

// Computed property for filtered projects based on active filter
// This demonstrates reactive programming - the displayed projects automatically update when the filter changes
const filteredProjects = computed(() => {
    if (activeFilter.value === 'all') {
        return allProjects.value
    }

    // Filter projects based on their tags array
    return allProjects.value.filter(project =>
        project.tags.includes(activeFilter.value)
    )
})

// Methods for handling user interactions

// Filter method - updates which projects are displayed
const setActiveFilter = (filterId) => {
    activeFilter.value = filterId

    // Smooth scroll to top of grid when filter changes
    // This improves user experience by showing the newly filtered results
    const worksSection = document.querySelector('.py-20.bg-gray-50')
    if (worksSection) {
        worksSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
}

// Navigation method - handles project click events
const navigateToProject = (slug) => {
    // Navigate to individual project page
    navigateTo(`/works/${slug}`)
}

// Pagination method - loads additional projects (for future expansion)
const loadMoreProjects = async () => {
    isLoading.value = true

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    // In a real application, this would fetch more projects from an API
    // For now, we'll just disable the loading state
    isLoading.value = false
    hasMoreProjects.value = false
}

// Initialize component state
onMounted(() => {
    // Check if there are more projects to load
    // This could be determined by comparing current projects with total available
    hasMoreProjects.value = false
})
</script>

<style scoped>
/* Works page specific styling for enhanced visual presentation */

/* Portfolio card hover effects with smooth transitions */
.portfolio-card {
    transition: all 0.3s ease;
    cursor: pointer;
}

.portfolio-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

/* Image scaling effect on hover */
.portfolio-card img {
    transition: transform 0.5s ease;
}

.portfolio-card:hover img {
    transform: scale(1.05);
}

/* Filter button active state styling */
.bg-gray-900 {
    background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
}

/* Text truncation for project descriptions */
.line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

/* Smooth arrow animation on project cards */
.group:hover svg {
    transform: translateX(-4px);
}

/* Loading spinner animation */
.animate-spin {
    animation: spin 1s linear infinite;
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

/* Responsive adjustments for mobile devices */
@media (max-width: 768px) {
    .grid-cols-1 {
        gap: 1.5rem;
    }

    .portfolio-card:hover {
        transform: translateY(-4px);
    }

    .sticky {
        position: static;
    }
}

/* Enhanced focus states for accessibility */
button:focus,
.portfolio-card:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
}

/* Smooth transitions for filter changes */
.animate-fade-in-up {
    opacity: 0;
    animation: fadeInUp 0.6s ease-out forwards;
}
</style>