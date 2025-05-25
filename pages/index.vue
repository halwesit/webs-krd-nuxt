<template>
    <!-- Homepage - the primary entry point for visitors
       This page establishes the site's purpose and guides users to key content -->
    <div>

        <!-- Hero Section - the most critical part of any homepage
         This section must immediately communicate who we are and what we offer -->
        <section class="relative bg-white py-20 md:py-32 overflow-hidden">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center">

                    <!-- Agency introduction and main value proposition -->
                    <p class="text-lg text-gray-600 mb-6 animate-fade-in-up">
                        سڵاو، ئێمە وێبز کوردستانین
                    </p>

                    <!-- Primary headline - establishes agency capabilities and market position
               This headline positions us as the leading Kurdish digital agency -->
                    <h1 class="hero-title animate-fade-in-up" style="animation-delay: 0.2s;">
                        پارتنەری دیجیتاڵی<br>
                        کە پێت دەڵێین
                    </h1>

                    <!-- Supporting description that elaborates on the agency value proposition -->
                    <p class="hero-subtitle animate-fade-in-up" style="animation-delay: 0.4s;">
                        ئاژانسی پلەی یەکەمی کوردی بۆ دیزاین و گەشەپێدانی وێبسایت، براندینگ، و
                        چارەسەری دیجیتاڵ کە کۆمپانیا سەرکەوتووەکان پشتی پێ دەبەستن.
                    </p>

                    <!-- Call-to-action button that guides potential clients to the next step -->
                    <div class="animate-fade-in-up" style="animation-delay: 0.6s;">
                        <NuxtLink to="/contact" class="btn-primary mr-4">
                            پرۆژەکەت دەست پێ بکە
                        </NuxtLink>
                        <NuxtLink to="/works" class="btn-secondary">
                            کارەکانمان ببینە
                        </NuxtLink>
                    </div>
                </div>
            </div>

            <!-- Background decoration for visual interest -->
            <div class="absolute top-0 right-0 w-1/3 h-full opacity-5">
                <div class="w-full h-full bg-gradient-to-bl from-gray-900 to-transparent"></div>
            </div>
        </section>

        <!-- Selected Works Section - showcasing our best projects
         This section provides social proof and demonstrates capabilities -->
        <section class="py-20 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <!-- Section header -->
                <div class="text-center mb-16">
                    <h2 class="section-title">کارە هەڵبژێردراوەکان</h2>
                    <p class="section-subtitle">
                        نموونەیەک لە باشترین پڕۆژەکان کە تەواو کراون
                    </p>
                </div>

                <!-- Portfolio grid - responsive layout that works on all devices -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div v-for="(project, index) in selectedProjects" :key="project.id"
                        class="portfolio-card animate-fade-in-up" :style="`animation-delay: ${index * 0.2}s`">

                        <!-- Project image with hover effect -->
                        <div class="aspect-video bg-gray-200 overflow-hidden">
                            <img :src="project.image" :alt="project.title"
                                class="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                        </div>

                        <!-- Project information -->
                        <div class="p-6">
                            <!-- Project category and year -->
                            <div class="flex justify-between items-center mb-3">
                                <span class="text-sm font-medium text-gray-500 uppercase tracking-wide">
                                    {{ project.category }}
                                </span>
                                <span class="text-sm text-gray-400">
                                    {{ project.year }}
                                </span>
                            </div>

                            <!-- Project title and description -->
                            <h3 class="text-xl font-semibold text-gray-900 mb-2">
                                {{ project.title }}
                            </h3>
                            <p class="text-gray-600 leading-relaxed">
                                {{ project.description }}
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Link to view all projects -->
                <div class="text-center mt-12">
                    <NuxtLink to="/works" class="btn-secondary">
                        بینینی هەموو کارەکان
                    </NuxtLink>
                </div>
            </div>
        </section>

        <!-- About Preview Section - building trust and connection through team story -->
        <section class="py-20 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <!-- Team/agency image section with fallback handling -->
                    <div class="order-2 lg:order-1">
                        <div class="aspect-square bg-gray-200 rounded-2xl overflow-hidden">
                            <!-- Professional team photo from Unsplash -->
                            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=600&fit=crop&crop=center"
                                alt="تیمی وێبز کوردستان" class="w-full h-full object-cover" />
                        </div>
                    </div>

                    <!-- Agency story and team content -->
                    <div class="order-1 lg:order-2">
                        <h2 class="text-3xl md:text-4xl font-bold mb-6">
                            ئاژانسی دیجیتاڵی<br>
                            پێشەنگی کوردستان
                        </h2>

                        <p class="text-lg text-gray-600 leading-relaxed mb-8">
                            لە ساڵی ٢٠٢٠ەوە، وێبز کوردستان وەک یەکەم ئاژانسی تایبەتمەند بە
                            دیزاینی دیجیتاڵ بە زمانی کوردی دامەزراوە. تیمێکی پسپۆڕمان هەیە
                            لە دیزاین، گەشەپێدان، و ستراتیژی دیجیتاڵ کە زیاتر لە ١٠٠ پڕۆژەی
                            سەرکەوتوو ئەنجام داوە بۆ کۆمپانیا جۆراوجۆرەکان.
                        </p>

                        <!-- Agency statistics and achievements -->
                        <div class="grid grid-cols-3 gap-8 mb-8">
                            <div class="text-center">
                                <div class="text-2xl font-bold text-gray-900">٤+</div>
                                <div class="text-sm text-gray-600">ساڵی ئەزموون</div>
                            </div>
                            <div class="text-center">
                                <div class="text-2xl font-bold text-gray-900">١٥٠+</div>
                                <div class="text-sm text-gray-600">پڕۆژەی تەواوکراو</div>
                            </div>
                            <div class="text-center">
                                <div class="text-2xl font-bold text-gray-900">٨٥+</div>
                                <div class="text-sm text-gray-600">کڕیاری دڵخۆش</div>
                            </div>
                        </div>

                        <NuxtLink to="/about" class="btn-primary">
                            دەربارەی تیمەکەمان
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </section>

        <!-- Expertise Section - demonstrating our comprehensive agency capabilities -->
        <section class="py-20 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <!-- Section header -->
                <div class="text-center mb-16">
                    <h2 class="section-title">خزمەتگوزاریەکانمان</h2>
                    <p class="section-subtitle">
                        چارەسەری تەواو بۆ هەموو پێداویستیەکانی دیجیتاڵتان
                    </p>
                </div>

                <!-- Services grid showcasing agency capabilities -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div v-for="(service, index) in agencyServices" :key="service.id"
                        class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                        <!-- Service icon -->
                        <div class="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                            <component :is="service.icon" class="w-6 h-6 text-gray-700" />
                        </div>

                        <!-- Service information -->
                        <h3 class="text-xl font-semibold text-gray-900 mb-3">
                            {{ service.title }}
                        </h3>
                        <p class="text-gray-600 leading-relaxed">
                            {{ service.description }}
                        </p>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script setup>
// Homepage component logic and data
// This script handles the dynamic content and page metadata

// SEO metadata for the homepage - crucial for search engine visibility
useHead({
    title: 'وێبگەی کوردی - دیزاینەری دیجیتاڵی کوردی',
    meta: [
        {
            name: 'description',
            content: 'دیزاینەری دیجیتاڵی کوردی بۆ دروستکردنی وێبسایت، براند، و گرافیکی جوان و کاریگەر'
        },
        {
            property: 'og:title',
            content: 'وێبگەی کوردی - دیزاینەری دیجیتاڵی کوردی'
        },
        {
            property: 'og:description',
            content: 'دیزاینەری دیجیتاڵی کوردی بۆ دروستکردنی وێبسایت، براند، و گرافیکی جوان و کاریگەر'
        }
    ]
})

// Selected projects data - this would typically come from a CMS or API
// For demonstration, we're using static data with Kurdish project names
const selectedProjects = ref([
    {
        id: 1,
        title: 'وێبسایتی گۆڤاری کوردستان',
        description: 'گۆڤارێکی ئۆنلاین کە دوایین زانیاریەکان لەسەر مۆد، ڕووداو و ژیانی کۆمەڵایەتی دەخاتەڕوو',
        category: 'دیزاینی وێب',
        year: '٢٠٢٣',
        image: '/images/project-1.jpg'
    },
    {
        id: 2,
        title: 'لاپەڕەی لاندینگی شەرکەت',
        description: 'پلاتفۆرمێکی دیجیتاڵی سەردەم کە شێوازی کارکردنی خەڵک لەگەڵ تەکنەلۆژیا دەگۆڕێت',
        category: 'دیزاینی وێب',
        year: '٢٠٢٢',
        image: '/images/project-2.jpg'
    },
    {
        id: 3,
        title: 'داشبۆردی CRM پۆسلی',
        description: 'پلاتفۆرمێکی دیجیتاڵی سەردەم کە شێوازی کارکردنی خەڵک لەگەڵ تەکنەلۆژیا دەگۆڕێت',
        category: 'دیزاینی وێب',
        year: '٢٠٢١',
        image: '/images/project-3.jpg'
    }
])

// Expertise areas - showcasing core competencies
const expertiseAreas = ref([
    {
        id: 1,
        title: 'دیزاینی UI/UX',
        description: 'دروستکردنی ڕووکاری بەکارهێنەر کە لەگەڵ ئامانجەکەت و کڕیارانت دەگونجێت',
        icon: 'ComputerDesktopIcon'
    },
    {
        id: 2,
        title: 'براندینگ',
        description: 'دروستکردنی ناسنامەی تایبەت و یادگار کە جیاوازی براندەکەت دەردەخات',
        icon: 'PaintBrushIcon'
    },
    {
        id: 3,
        title: 'وێنەکێشی',
        description: 'وێنەکێشی سەرنجڕاکێش بۆ جۆرەجۆر میدیا، ستایل و تەکنیک',
        icon: 'PhotoIcon'
    },
    {
        id: 4,
        title: 'گەشەپێدانی فریمەر',
        description: 'بەکارهێنانی فریمەر بۆ دروستکردنی ڕووکاری پێشکەوتوو و دینامیک',
        icon: 'CodeBracketIcon'
    }
])

// Reactive state for image loading management
const teamImageExists = ref(true)

// Error handling for missing images
const handleImageError = () => {
    teamImageExists.value = false
}

// Check if image exists on component mount
onMounted(() => {
    // Create a new image object to test if the file exists
    const img = new Image()
    img.onload = () => {
        teamImageExists.value = true
    }
    img.onerror = () => {
        teamImageExists.value = false
    }
    img.src = '/images/team-photo.jpg'
})

// Import required icons from Heroicons
import {
    ComputerDesktopIcon,
    PaintBrushIcon,
    PhotoIcon,
    CodeBracketIcon
} from '@heroicons/vue/24/outline'
</script>

<style scoped>
/* Homepage-specific styling enhancements */

/* Hero section gradient background */
.hero-section {
    background: linear-gradient(135deg, #ffffff 0%, #f9fafb 100%);
}

/* Animation delays for staggered entrance effects */
.animate-fade-in-up {
    opacity: 0;
    animation: fadeInUp 0.8s ease-out forwards;
}

/* Responsive text sizing for mobile devices */
@media (max-width: 640px) {
    .hero-title {
        font-size: 2.5rem;
        line-height: 1.2;
    }

    .hero-subtitle {
        font-size: 1rem;
        margin-bottom: 2rem;
    }
}

/* Portfolio card hover effects */
.portfolio-card:hover {
    transform: translateY(-4px);
}

/* Button group responsive spacing */
.btn-primary+.btn-secondary {
    margin-right: 1rem;
}

@media (max-width: 640px) {
    .btn-primary+.btn-secondary {
        margin-right: 0;
        margin-top: 0.75rem;
    }
}
</style>