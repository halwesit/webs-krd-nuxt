<template>
    <!-- Dynamic project detail page - showcasing individual portfolio pieces
       This template dynamically generates pages for each project using Nuxt's file-based routing -->
    <div v-if="project">

        <!-- Project hero section with large visuals -->
        <section class="bg-white py-12 md:py-20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <!-- Breadcrumb navigation for better UX and SEO -->
                <nav class="flex items-center space-x-2 space-x-reverse text-sm text-gray-500 mb-8">
                    <NuxtLink to="/works" class="hover:text-gray-700 transition-colors">
                        کارەکان
                    </NuxtLink>
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                    <span class="text-gray-900">{{ project.title }}</span>
                </nav>

                <!-- Project header information -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">

                    <!-- Project details and metadata -->
                    <div class="order-2 lg:order-1">

                        <!-- Project metadata -->
                        <div class="flex items-center gap-4 mb-6">
                            <span class="text-sm font-medium text-gray-500 uppercase tracking-wide">
                                {{ project.category }}
                            </span>
                            <span class="text-sm text-gray-400">{{ project.year }}</span>
                        </div>

                        <!-- Project title and description -->
                        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            {{ project.title }}
                        </h1>

                        <p class="text-lg text-gray-600 leading-relaxed mb-8">
                            {{ project.description }}
                        </p>

                        <!-- Project metadata grid -->
                        <div class="grid grid-cols-2 gap-6 mb-8">

                            <!-- Client information -->
                            <div v-if="project.client">
                                <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
                                    کڕیار
                                </h3>
                                <p class="text-gray-900 font-medium">{{ project.client }}</p>
                            </div>

                            <!-- Timeline -->
                            <div v-if="project.timeline">
                                <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
                                    کاتی تەواوکردن
                                </h3>
                                <p class="text-gray-900 font-medium">{{ project.timeline }}</p>
                            </div>

                            <!-- Technologies used -->
                            <div v-if="project.technologies?.length">
                                <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
                                    تەکنەلۆژیاکان
                                </h3>
                                <div class="flex flex-wrap gap-2">
                                    <span v-for="tech in project.technologies" :key="tech"
                                        class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                                        {{ tech }}
                                    </span>
                                </div>
                            </div>

                            <!-- Services provided -->
                            <div v-if="project.services?.length">
                                <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
                                    خزمەتگوزاریەکان
                                </h3>
                                <div class="flex flex-wrap gap-2">
                                    <span v-for="service in project.services" :key="service"
                                        class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                                        {{ service }}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <!-- Call-to-action buttons -->
                        <div class="flex flex-wrap gap-4">
                            <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" rel="noopener noreferrer"
                                class="btn-primary">
                                بینینی وێبسایت
                            </a>
                            <NuxtLink to="/contact" class="btn-secondary">
                                پڕۆژەی هاوشێوە داوا بکە
                            </NuxtLink>
                        </div>
                    </div>

                    <!-- Featured project image -->
                    <div class="order-1 lg:order-2">
                        <div class="aspect-video bg-gray-200 rounded-2xl overflow-hidden">
                            <img :src="project.featuredImage" :alt="project.title" class="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Project challenge and solution section -->
        <section v-if="project.challenge || project.solution" class="py-20 bg-gray-50">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    <!-- Challenge section -->
                    <div v-if="project.challenge">
                        <h2 class="text-2xl font-bold text-gray-900 mb-6">ئاستەنگەکە</h2>
                        <div class="prose prose-lg text-gray-600 leading-relaxed">
                            <p>{{ project.challenge }}</p>
                        </div>
                    </div>

                    <!-- Solution section -->
                    <div v-if="project.solution">
                        <h2 class="text-2xl font-bold text-gray-900 mb-6">چارەسەر</h2>
                        <div class="prose prose-lg text-gray-600 leading-relaxed">
                            <p>{{ project.solution }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Project results and impact -->
        <section v-if="project.results?.length" class="py-20 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                <!-- Section header -->
                <h2 class="text-3xl font-bold text-gray-900 mb-4">ئەنجامەکان</h2>
                <p class="text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
                    کاریگەری پڕۆژەکە لە ڕێگەی ئامارەکانەوە
                </p>

                <!-- Results metrics grid -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div v-for="result in project.results" :key="result.metric" class="p-6">
                        <div class="text-4xl font-bold text-gray-900 mb-2">
                            {{ result.value }}
                        </div>
                        <div class="text-lg font-medium text-gray-700 mb-1">
                            {{ result.metric }}
                        </div>
                        <div class="text-sm text-gray-500">
                            {{ result.description }}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Project gallery/showcase -->
        <section v-if="project.gallery?.length" class="py-20 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <!-- Gallery images -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div v-for="(image, index) in project.gallery" :key="index"
                        class="bg-gray-200 rounded-2xl overflow-hidden" :class="[
                            index === 0 ? 'md:col-span-2 aspect-video' : 'aspect-square'
                        ]">
                        <img :src="image.url" :alt="image.alt || `${project.title} - ${index + 1}`"
                            class="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                            @click="openLightbox(image, index)" />
                    </div>
                </div>
            </div>
        </section>

        <!-- Client testimonial (if available) -->
        <section v-if="project.testimonial" class="py-20 bg-white">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                <!-- Quote -->
                <blockquote class="text-2xl md:text-3xl font-medium text-gray-900 leading-relaxed mb-8">
                    "{{ project.testimonial.quote }}"
                </blockquote>

                <!-- Author information -->
                <div class="flex items-center justify-center space-x-4 space-x-reverse">
                    <div v-if="project.testimonial.avatar" class="w-12 h-12 rounded-full overflow-hidden">
                        <img :src="project.testimonial.avatar" :alt="project.testimonial.author"
                            class="w-full h-full object-cover" />
                    </div>
                    <div>
                        <div class="font-semibold text-gray-900">
                            {{ project.testimonial.author }}
                        </div>
                        <div class="text-gray-600">
                            {{ project.testimonial.role }}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Related projects -->
        <section class="py-20 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <!-- Section header -->
                <div class="text-center mb-16">
                    <h2 class="text-3xl font-bold text-gray-900 mb-4">پڕۆژەی هاوشێوە</h2>
                    <p class="text-lg text-gray-600">
                        نموونەی کارەکانی تری هاوشێوە
                    </p>
                </div>

                <!-- Related projects grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <NuxtLink v-for="relatedProject in relatedProjects" :key="relatedProject.id"
                        :to="`/works/${relatedProject.slug}`" class="portfolio-card group">
                        <div class="aspect-video bg-gray-200 overflow-hidden">
                            <img :src="relatedProject.image" :alt="relatedProject.title"
                                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>

                        <div class="p-6">
                            <div class="flex justify-between items-center mb-3">
                                <span class="text-sm font-medium text-gray-500 uppercase tracking-wide">
                                    {{ relatedProject.category }}
                                </span>
                                <span class="text-sm text-gray-400">
                                    {{ relatedProject.year }}
                                </span>
                            </div>

                            <h3 class="text-xl font-semibold text-gray-900 mb-2">
                                {{ relatedProject.title }}
                            </h3>

                            <p class="text-gray-600 leading-relaxed line-clamp-3">
                                {{ relatedProject.description }}
                            </p>
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </section>

        <!-- Image lightbox modal -->
        <div v-if="lightboxOpen" @click="closeLightbox"
            class="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
            <div class="relative max-w-7xl max-h-full">
                <img :src="lightboxImage?.url" :alt="lightboxImage?.alt" class="max-w-full max-h-full object-contain" />

                <!-- Close button -->
                <button @click="closeLightbox"
                    class="absolute top-4 left-4 w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white hover:bg-opacity-30 transition-colors">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>

    </div>
</template>

<script setup>
// Dynamic project page logic and data fetching
// This page demonstrates advanced Nuxt concepts like dynamic routing and SEO optimization

// Get the project slug from the route parameters
const route = useRoute()
const projectSlug = route.params.slug

// Reactive state for lightbox functionality
const lightboxOpen = ref(false)
const lightboxImage = ref(null)

// Mock project data - in a real application, this would come from a CMS or API
// This structure represents a comprehensive project case study
const projectsData = {
    'zenith-magazine': {
        id: 1,
        slug: 'zenith-magazine',
        title: 'وێبسایتی گۆڤاری کوردستان',
        description: 'گۆڤارێکی ئۆنلاین کە دوایین زانیاریەکان لەسەر مۆد، ڕووداو، تیپ و ئامۆژگاری ژیان، و زۆر شتی تر دەخاتەڕوو',
        category: 'دیزاینی وێب',
        year: '٢٠٢٣',
        client: 'گۆڤاری کوردستان',
        timeline: '٦ هەفتە',
        featuredImage: '/images/projects/zenith-magazine-hero.jpg',
        technologies: ['Vue.js', 'Nuxt 3', 'Tailwind CSS', 'Strapi CMS'],
        services: ['دیزاینی UI/UX', 'گەشەپێدانی فرۆنت-ئێند', 'بەڕێوەبردنی ناوەڕۆک'],
        liveUrl: 'https://zenith-magazine.example.com',
        challenge: 'گۆڤاری کوردستان پێویستی بە وێبسایتێکی نوێ هەبوو کە هەم جوان بێت و هەم خێرا کار بکات. ئەوان ویستیان وێبسایتێک کە تێیدا بتوانن بە ئاسانی ناوەڕۆک زیاد بکەن و لەگەڵ خوێنەراندا کارپێکراو بن.',
        solution: 'وێبسایتێکی نوێم دروست کرد کە لە Vue.js و Nuxt 3 بەکار دەهێنێت بۆ خێرایی باش و SEO باش. سیستەمی بەڕێوەبردنی ناوەڕۆک بەکارهێنام کە بە ئاسانی بەکاردەهێنرێت.',
        results: [
            {
                metric: 'بەرزبوونەوەی سەردانکار',
                value: '+٢٤٪',
                description: 'لە ماوەی سێ مانگی یەکەمدا'
            },
            {
                metric: 'خێرایی بارکردن',
                value: '٢.١ چرکە',
                description: 'کاتی بارکردنی لاپەڕە'
            },
            {
                metric: 'نمرەی SEO',
                value: '٩٥/١٠٠',
                description: 'لە Google PageSpeed Insights'
            }
        ],
        gallery: [
            { url: '/images/projects/zenith-gallery-1.jpg', alt: 'لاپەڕەی سەرەکی' },
            { url: '/images/projects/zenith-gallery-2.jpg', alt: 'لاپەڕەی وتار' },
            { url: '/images/projects/zenith-gallery-3.jpg', alt: 'ڤیرژنی مۆبایل' },
            { url: '/images/projects/zenith-gallery-4.jpg', alt: 'پانێڵی بەڕێوەبردن' }
        ],
        testimonial: {
            quote: 'ئامیر کارێکی نایابی کردووە لە دروستکردنی وێبسایتی ئێمەدا. وێبسایتەکە هەم جوانە و هەم بە ئاسانی بەکاردەهێنرێت.',
            author: 'سامانسا مۆرگان',
            role: 'بەڕێوەبەری نەکسفلۆ',
            avatar: '/images/testimonials/samantha-morgan.jpg'
        }
    }
    // Additional projects would be added here
}

// Get current project data
const project = computed(() => projectsData[projectSlug])

// Related projects (would typically be fetched based on category/tags)
const relatedProjects = ref([
    {
        id: 2,
        title: 'لاپەڕەی لاندینگی ئارونیکا',
        description: 'پلاتفۆرمێکی دیجیتاڵی سەردەم کە شێوازی کارکردنی خەڵک لەگەڵ تەکنەلۆژیا دەگۆڕێت',
        category: 'دیزاینی وێب',
        year: '٢٠٢٢',
        image: '/images/projects/arunika-related.jpg',
        slug: 'arunika-landing-page'
    },
    {
        id: 3,
        title: 'داشبۆردی CRM پۆسلی',
        description: 'پلاتفۆرمێکی دیجیتاڵی سەردەم کە شێوازی کارکردنی خەڵک لەگەڵ تەکنەلۆژیا دەگۆڕێت',
        category: 'دیزاینی وێب',
        year: '٢٠٢١',
        image: '/images/projects/posly-related.jpg',
        slug: 'posly-crm-dashboard'
    }
])

// Lightbox functionality
const openLightbox = (image, index) => {
    lightboxImage.value = image
    lightboxOpen.value = true
    // Prevent body scrolling when lightbox is open
    document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
    lightboxOpen.value = false
    lightboxImage.value = null
    // Restore body scrolling
    document.body.style.overflow = 'unset'
}

// Handle 404 for non-existent projects
if (!project.value) {
    throw createError({
        statusCode: 404,
        statusMessage: 'Project Not Found'
    })
}

// Dynamic SEO meta tags based on project data
useHead({
    title: `${project.value.title} - وێبگەی کوردی`,
    meta: [
        {
            name: 'description',
            content: project.value.description
        },
        {
            property: 'og:title',
            content: `${project.value.title} - وێبگەی کوردی`
        },
        {
            property: 'og:description',
            content: project.value.description
        },
        {
            property: 'og:image',
            content: project.value.featuredImage
        },
        {
            property: 'og:type',
            content: 'article'
        }
    ],
    // Structured data for better SEO
    script: [
        {
            type: 'application/ld+json',
            children: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'CreativeWork',
                'name': project.value.title,
                'description': project.value.description,
                'image': project.value.featuredImage,
                'creator': {
                    '@type': 'Person',
                    'name': 'وێبگەی کوردی'
                },
                'dateCreated': project.value.year
            })
        }
    ]
})

// Cleanup when component is destroyed
onUnmounted(() => {
    document.body.style.overflow = 'unset'
})
</script>

<style scoped>
/* Project detail page specific styling */

/* Text truncation utility */
.line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

/* Gallery image hover effects */
.portfolio-card img {
    transition: transform 0.3s ease;
}

/* Lightbox styling */
.fixed.inset-0 {
    backdrop-filter: blur(4px);
}

/* Results metrics animation */
.text-4xl {
    background: linear-gradient(135deg, #1f2937 0%, #4b5563 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* Testimonial styling */
blockquote {
    position: relative;
}

blockquote::before {
    content: '"';
    position: absolute;
    top: -20px;
    right: -10px;
    font-size: 4rem;
    color: #e5e7eb;
    font-family: serif;
}

/* Enhanced hover effects */
.portfolio-card:hover {
    transform: translateY(-4px);
    transition: transform 0.3s ease;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .grid-cols-1 {
        gap: 1.5rem;
    }

    .text-3xl {
        font-size: 2rem;
    }

    .text-4xl {
        font-size: 2.5rem;
    }

    /* Lightbox mobile adjustments */
    .fixed .relative {
        margin: 1rem;
    }
}

/* Accessibility improvements */
button:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
}

/* Loading states and transitions */
.aspect-video img,
.aspect-square img {
    transition: opacity 0.3s ease;
}

.aspect-video img:not([src]),
.aspect-square img:not([src]) {
    opacity: 0;
}
</style>