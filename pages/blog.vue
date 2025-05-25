<template>
    <!-- Blog page - content marketing and thought leadership platform
       This page positions us as experts while providing value to visitors -->
    <div>

        <!-- Hero section with newsletter signup - building an audience -->
        <section class="bg-white py-20 md:py-32">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <!-- Content introduction and value proposition -->
                    <div class="order-2 lg:order-1">
                        <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-6">
                            تێڕوانین
                        </h1>

                        <p class="text-lg text-gray-600 leading-relaxed mb-8">
                            بەشداری لە نامەی منەوە بکە بۆ فێربوونی زیاتر لەسەر دیزاین،
                            بلۆگەکەمان، و شتەکانی تری جیاواز کە حەزم لە هاوبەشکردنیان دەکەم.
                        </p>

                        <!-- Newsletter signup form -->
                        <div class="mb-8">
                            <h3 class="text-lg font-semibold mb-4">بەشداری لە نامەکەم بکە</h3>

                            <form @submit.prevent="subscribeToNewsletter" class="space-y-4">
                                <div>
                                    <input v-model="email" type="email" placeholder="ئیمەیڵەکەت بنووسە" required
                                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                                        :disabled="isSubscribing" />
                                </div>

                                <button type="submit" class="btn-primary w-full" :disabled="isSubscribing">
                                    <span v-if="!isSubscribing">پەیوەندی پێوە بکە</span>
                                    <span v-else class="flex items-center justify-center">
                                        <svg class="animate-spin -ml-1 mr-3 h-4 w-4" fill="none" viewBox="0 0 24 24">
                                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                                stroke-width="4" />
                                            <path class="opacity-75" fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                        </svg>
                                        ناردن...
                                    </span>
                                </button>
                            </form>

                            <!-- Success/error messages -->
                            <div v-if="subscriptionMessage" class="mt-4 p-3 rounded-lg"
                                :class="subscriptionSuccess ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'">
                                {{ subscriptionMessage }}
                            </div>
                        </div>
                    </div>

                    <!-- Featured article showcase -->
                    <div class="order-1 lg:order-2">
                        <div v-if="featuredArticle" class="bg-gray-100 rounded-2xl overflow-hidden">

                            <!-- Featured article image -->
                            <div class="aspect-video bg-gray-200">
                                <img :src="featuredArticle.image" :alt="featuredArticle.title"
                                    class="w-full h-full object-cover" />
                            </div>

                            <!-- Featured article content -->
                            <div class="p-6">
                                <h2 class="text-xl font-semibold text-gray-900 mb-3">
                                    {{ featuredArticle.title }}
                                </h2>

                                <p class="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                                    {{ featuredArticle.excerpt }}
                                </p>

                                <div class="text-sm text-gray-500 mb-4">
                                    {{ formatDate(featuredArticle.date) }}
                                </div>

                                <NuxtLink :to="`/blog/${featuredArticle.slug}`"
                                    class="text-gray-900 font-medium hover:text-gray-600 transition-colors">
                                    خوێندنەوەی تەواو →
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Latest insights section - main blog content -->
        <section class="py-20 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <!-- Section header -->
                <div class="text-center mb-16">
                    <h2 class="section-title">دوایین تێڕوانین</h2>
                </div>

                <!-- Blog posts grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    <article v-for="(post, index) in blogPosts" :key="post.id"
                        class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer animate-fade-in-up"
                        :style="`animation-delay: ${index * 0.1}s`" @click="navigateToPost(post.slug)">

                        <!-- Post image -->
                        <div class="aspect-video bg-gray-200 overflow-hidden">
                            <img :src="post.image" :alt="post.title"
                                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                loading="lazy" />
                        </div>

                        <!-- Post content -->
                        <div class="p-6">
                            <!-- Post title -->
                            <h3
                                class="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                                {{ post.title }}
                            </h3>

                            <!-- Post excerpt -->
                            <p class="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                                {{ post.excerpt }}
                            </p>

                            <!-- Post metadata -->
                            <div class="flex items-center justify-between text-sm text-gray-500">
                                <span>{{ formatDate(post.date) }}</span>
                                <span>{{ post.readTime }} خولەک خوێندنەوە</span>
                            </div>
                        </div>
                    </article>
                </div>

                <!-- Load more button for pagination -->
                <div v-if="hasMorePosts" class="text-center">
                    <button @click="loadMorePosts" class="btn-secondary" :disabled="isLoadingPosts">
                        <span v-if="!isLoadingPosts">زیاتر بینین</span>
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
            </div>
        </section>

        <!-- More insights section - additional content discovery -->
        <section class="py-20 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <!-- Section header -->
                <div class="text-center mb-16">
                    <h2 class="section-title">تێڕوانینی زیاتر</h2>
                </div>

                <!-- Additional articles in a different layout -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <article v-for="article in additionalArticles" :key="article.id"
                        class="flex gap-6 group cursor-pointer" @click="navigateToPost(article.slug)">

                        <!-- Article image -->
                        <div class="flex-shrink-0">
                            <div class="w-24 h-24 bg-gray-200 rounded-xl overflow-hidden">
                                <img :src="article.image" :alt="article.title"
                                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                            </div>
                        </div>

                        <!-- Article content -->
                        <div class="flex-grow">
                            <h3
                                class="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                                {{ article.title }}
                            </h3>

                            <p class="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-2">
                                {{ article.excerpt }}
                            </p>

                            <div class="text-xs text-gray-500">
                                {{ formatDate(article.date) }}
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>

    </div>
</template>

<script setup>
// Blog page component logic and content management
// This page handles blog content display and newsletter functionality

// SEO metadata for the blog page
useHead({
    title: 'بلۆگ - وێبگەی کوردی',
    meta: [
        {
            name: 'description',
            content: 'تێڕوانین و وتارەکان لەسەر دیزاینی دیجیتاڵ، تەکنەلۆژی، و گەشەسەندنی وێب'
        },
        {
            property: 'og:title',
            content: 'بلۆگ - وێبگەی کوردی'
        },
        {
            property: 'og:description',
            content: 'تێڕوانین و وتارەکان لەسەر دیزاینی دیجیتاڵ، تەکنەلۆژی، و گەشەسەندنی وێب'
        }
    ]
})

// Reactive state for newsletter and pagination
const email = ref('')
const isSubscribing = ref(false)
const subscriptionMessage = ref('')
const subscriptionSuccess = ref(false)
const isLoadingPosts = ref(false)
const hasMorePosts = ref(true)

// Featured article data - this would typically come from your CMS
const featuredArticle = ref({
    id: 1,
    title: 'چۆن دیزاینەران ئامادەکاری بۆ داهاتوو بکەن؟',
    excerpt: 'لە جیهانێکدا کە بە خێرایی لەلایەن پێشکەوتنی تەکنەلۆژیەوە گۆڕانکاری دەکات و بەردەوام دەگۆڕێت، چ ڕۆڵێک هەیە لە دەستکاریکردنی داهاتوودا؟ لەکاتێکدا بیرکردنەوەی دیجیتاڵ بەردەوام دەگۆڕێت، پرسیارەکە ئەوەیە: چۆن دیزاینەران ئامادەکاری بۆ داهاتوو بکەن و لە پیشەسازییەکدا بمێننەوە کە بەردەوام سنوورەکان دەگوازێتەوە؟',
    date: '2023-02-28',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&h=400&fit=crop&crop=center',
    slug: 'how-designers-prepare-future'
})

// Main blog posts data - this would come from Nuxt Content or your CMS
const blogPosts = ref([
    {
        id: 2,
        title: 'دەستپێکردن و گەشەکردنی کارێر لە دیزاینی وێبدا',
        excerpt: 'لە ماوەی چەند ساڵی ڕابردوودا، جیهانێکی سەرسوڕهێنەر بووین. جیهانێک کە سەرپرستی نەکراوە کاریگەریەک بووە لە مینیمالیزمدا.',
        date: '2022-04-08',
        image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&h=400&fit=crop&crop=center',
        slug: 'starting-career-web-design',
        readTime: '٥'
    },
    {
        id: 3,
        title: 'دروستکردنی لاپەڕەی لاندینگ کە کارپێکراو پیشان دەدات',
        excerpt: 'لە ساڵانی ڕابردووی پاڵاوتنی بیرکردنەوەی دیجیتاڵدا، لاپەڕەیەکی لاندینگی باش دەکرێت کۆتایی کاریگەرتر بێت',
        date: '2022-03-15',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center',
        slug: 'create-effective-landing-page',
        readTime: '٧'
    },
    {
        id: 4,
        title: 'چۆن پۆرتفۆلیۆی کاریگەری دیزاین دروست بکەین',
        excerpt: 'لە بوارە پێشکەوتوو و کێبڕکێکارانەی دیزایندا، پۆرتفۆلیۆیەکی بەهێز تەنها کۆکراوەیەک نییە لە کارە جیاوازەکان بەڵکو...',
        date: '2022-01-12',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=center',
        slug: 'create-effective-design-portfolio',
        readTime: '٦'
    }
])

// Additional articles for the "More Insights" section
const additionalArticles = ref([
    {
        id: 5,
        title: 'دەستپێکردن و گەشەکردنی کارێر لە دیزاینی وێبدا',
        excerpt: 'لە ماوەی چەند ساڵی ڕابردوودا، جیهانێکی سەرسوڕهێنەر بووین.',
        date: '2022-04-08',
        image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=200&h=200&fit=crop&crop=center',
        slug: 'starting-career-web-design'
    },
    {
        id: 6,
        title: 'چۆن دیزاینەران ئامادەکاری بۆ داهاتوو بکەن؟',
        excerpt: 'لە جیهانێکدا کە بە خێرایی لەلایەن پێشکەوتنی تەکنەلۆژیەوە گۆڕانکاری دەکات',
        date: '2023-02-28',
        image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=200&h=200&fit=crop&crop=center',
        slug: 'how-designers-prepare-future'
    },
    {
        id: 7,
        title: 'دروستکردنی لاپەڕەی لاندینگ کە کارپێکراو پیشان دەدات',
        excerpt: 'لە ساڵانی ڕابردووی پاڵاوتنی بیرکردنەوەی دیجیتاڵدا',
        date: '2022-03-15',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=200&fit=crop&crop=center',
        slug: 'create-effective-landing-page'
    },
    {
        id: 8,
        title: 'دروستکردنی پێکهاتەی ناڤیگەیشن لەگەڵ گۆڕاوەکان',
        excerpt: 'ناڤیگەیشن کلیلی هەر ڕووکارێکی دیجیتاڵە. پێکهاتەی زیرەک',
        date: '2022-02-06',
        image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=200&h=200&fit=crop&crop=center',
        slug: 'building-navigation-component'
    }
])

// Utility methods for handling interactions and data formatting

// Newsletter subscription handler
const subscribeToNewsletter = async () => {
    if (!email.value) return

    isSubscribing.value = true
    subscriptionMessage.value = ''

    try {
        // Simulate API call - in real implementation, this would call your newsletter service
        await new Promise(resolve => setTimeout(resolve, 1500))

        // Simulate successful subscription
        subscriptionSuccess.value = true
        subscriptionMessage.value = 'سوپاس! بە سەرکەوتوویی بەشداریت کرد لە نامەکەماندا.'
        email.value = ''

    } catch (error) {
        subscriptionSuccess.value = false
        subscriptionMessage.value = 'هەڵەیەک ڕوویدا. تکایە دواتر هەوڵبدەرەوە.'
    } finally {
        isSubscribing.value = false

        // Clear message after 5 seconds
        setTimeout(() => {
            subscriptionMessage.value = ''
        }, 5000)
    }
}

// Navigation methods
const navigateToPost = (slug) => {
    navigateTo(`/blog/${slug}`)
}

// Load more posts functionality
const loadMorePosts = async () => {
    isLoadingPosts.value = true

    // Simulate loading more posts
    await new Promise(resolve => setTimeout(resolve, 1000))

    // In a real app, you would fetch more posts from your API/CMS here
    // For now, we'll just disable the load more functionality
    hasMorePosts.value = false
    isLoadingPosts.value = false
}

// Date formatting utility - formats dates in Kurdish
const formatDate = (dateString) => {
    const date = new Date(dateString)
    const months = [
        'کانونی دووەم', 'شوبات', 'ئازار', 'نیسان', 'ئایار', 'حوزەیران',
        'تەممەز', 'ئاب', 'ئەیلوول', 'تشرینی یەکەم', 'تشرینی دووەم', 'کانونی یەکەم'
    ]

    const day = date.getDate()
    const month = months[date.getMonth()]
    const year = date.getFullYear()

    return `${day} ${month} ${year}`
}

// Component lifecycle - initialize data when page loads
onMounted(() => {
    // In a real application, you might fetch blog posts from an API here
    // For this demo, we're using static data
    console.log('Blog page loaded with', blogPosts.value.length, 'posts')
})
</script>

<style scoped>
/* Blog page specific styling for enhanced readability and engagement */

/* Newsletter form styling */
input[type="email"] {
    background-color: #ffffff;
    direction: rtl;
    text-align: right;
}

input[type="email"]:focus {
    box-shadow: 0 0 0 3px rgba(31, 41, 55, 0.1);
}

/* Blog post card hover effects */
article {
    transition: all 0.3s ease;
}

article:hover {
    transform: translateY(-4px);
}

/* Text truncation for consistent card heights */
.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

/* Featured article special styling */
.aspect-video {
    aspect-ratio: 16 / 9;
}

/* Subscription message animations */
.bg-green-100 {
    border-right: 4px solid #10b981;
}

.bg-red-100 {
    border-right: 4px solid #ef4444;
}

/* Loading spinner */
.animate-spin {
    animation: spin 1s linear infinite;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .grid-cols-1 {
        gap: 1.5rem;
    }

    .aspect-video {
        aspect-ratio: 4 / 3;
    }

    /* Stack newsletter form elements on mobile */
    .space-y-4> :not([hidden])~ :not([hidden]) {
        margin-top: 1rem;
    }
}

/* Enhanced accessibility */
article:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
}

/* Kurdish typography enhancements */
h1,
h2,
h3 {
    font-weight: 600;
    line-height: 1.3;
}

p {
    line-height: 1.6;
}
</style>