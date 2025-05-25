<template>
    <div>
        <!-- Blog post page -->
        <article v-if="post" class="bg-white">

            <!-- Hero section with featured image -->
            <section class="relative py-20 md:py-32 bg-gray-50">
                <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                    <!-- Category and date -->
                    <div class="flex items-center justify-center gap-4 mb-6">
                        <span class="text-sm font-medium text-gray-500 uppercase tracking-wide">
                            {{ post.category || 'بلۆگ' }}
                        </span>
                        <span class="w-1 h-1 bg-gray-400 rounded-full"></span>
                        <time class="text-sm text-gray-500">
                            {{ formatDate(post.date) }}
                        </time>
                    </div>

                    <!-- Post title -->
                    <h1 class="text-3xl md:text-5xl font-bold text-gray-900 text-center mb-8 leading-tight">
                        {{ post.title }}
                    </h1>

                    <!-- Author info -->
                    <div class="flex items-center justify-center gap-4 mb-8">
                        <img :src="post.author?.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'"
                            :alt="post.author?.name || 'وێبگەی کوردی'" class="w-12 h-12 rounded-full" />
                        <div class="text-center">
                            <p class="font-medium text-gray-900">{{ post.author?.name || 'وێبگەی کوردی' }}</p>
                            <p class="text-sm text-gray-500">{{ getReadingTime(post) }} خولەک خوێندنەوە</p>
                        </div>
                    </div>

                    <!-- Featured image -->
                    <div class="aspect-video bg-gray-200 rounded-2xl overflow-hidden">
                        <img :src="post.image || 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1200&h=600&fit=crop&crop=center'"
                            :alt="post.title" class="w-full h-full object-cover" />
                    </div>
                </div>
            </section>

            <!-- Article content -->
            <section class="py-16">
                <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

                    <!-- Article description/excerpt -->
                    <div class="prose prose-lg max-w-none mb-8" v-if="post.description">
                        <p class="text-xl leading-relaxed text-gray-700 font-medium">
                            {{ post.description }}
                        </p>
                    </div>

                    <!-- Main article content from markdown -->
                    <div class="prose prose-lg max-w-none">
                        <ContentRenderer :value="post" />
                    </div>

                    <!-- Tags -->
                    <div class="flex flex-wrap gap-2 pt-8 border-t border-gray-200"
                        v-if="post.tags && post.tags.length > 0">
                        <span v-for="tag in post.tags" :key="tag"
                            class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                            #{{ tag }}
                        </span>
                    </div>
                </div>
            </section>

            <!-- Related posts -->
            <section class="py-16 bg-gray-50" v-if="relatedPosts && relatedPosts.length > 0">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <h2 class="text-2xl font-bold text-gray-900 text-center mb-12">
                        بابەتی پەیوەندیدار
                    </h2>

                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <article v-for="relatedPost in relatedPosts" :key="relatedPost._path"
                            class="group cursor-pointer">
                            <NuxtLink :to="relatedPost._path">
                                <!-- Post image -->
                                <div class="aspect-video bg-gray-200 rounded-xl overflow-hidden mb-4">
                                    <img :src="relatedPost.image || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center'"
                                        :alt="relatedPost.title"
                                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                </div>

                                <!-- Post meta -->
                                <div class="flex items-center gap-2 mb-2">
                                    <span class="text-xs text-gray-500">{{ relatedPost.category || 'بلۆگ' }}</span>
                                    <span class="w-1 h-1 bg-gray-400 rounded-full"></span>
                                    <time class="text-xs text-gray-500">{{ formatDate(relatedPost.date) }}</time>
                                </div>

                                <!-- Post title -->
                                <h3
                                    class="text-lg font-semibold text-gray-900 group-hover:text-gray-600 transition-colors mb-2 line-clamp-2">
                                    {{ relatedPost.title }}
                                </h3>

                                <!-- Post excerpt -->
                                <p class="text-gray-600 text-sm leading-relaxed line-clamp-3">
                                    {{ relatedPost.description || relatedPost.excerpt }}
                                </p>
                            </NuxtLink>
                        </article>
                    </div>
                </div>
            </section>

        </article>

        <!-- 404 state if post not found -->
        <div v-else class="min-h-screen flex items-center justify-center">
            <div class="text-center">
                <h1 class="text-4xl font-bold text-gray-900 mb-4">بابەت نەدۆزرایەوە</h1>
                <p class="text-gray-600 mb-8">ببوورە، ئەم بابەتە بوونی نییە یان لابراوە.</p>
                <NuxtLink to="/blog" class="btn-primary">
                    گەڕانەوە بۆ بلۆگ
                </NuxtLink>
            </div>
        </div>

    </div>
</template>

<script setup>
// Dynamic blog post page with Nuxt Content
// This component handles individual blog post display from markdown files

// Get the slug from the route
const route = useRoute()
const slug = route.params.slug

// Fetch the current post from content
const { data: post } = await useAsyncData(`blog-${slug}`, () =>
    queryContent('/blog', slug).findOne()
)

// Fetch related posts (excluding current post)
const { data: relatedPosts } = await useAsyncData(`related-${slug}`, () =>
    queryContent('/blog')
        .where({ _path: { $ne: `/blog/${slug}` } })
        .limit(3)
        .find()
)

// Date formatting function
const formatDate = (dateString) => {
    if (!dateString) return ''
    const date = new Date(dateString)
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    return date.toLocaleDateString('ku', options)
}

// Helper function to get reading time
const getReadingTime = (post) => {
    return post?.readTime || '٥'
}

// SEO metadata
useHead(() => ({
    title: post.value ? `${post.value.title} - وێبگەی کوردی` : 'بابەت نەدۆزرایەوە - وێبگەی کوردی',
    meta: [
        {
            name: 'description',
            content: post.value?.description || 'بابەتی بلۆگ لە وێبگەی کوردی'
        },
        {
            property: 'og:title',
            content: post.value ? `${post.value.title} - وێبگەی کوردی` : 'بابەت نەدۆزرایەوە'
        },
        {
            property: 'og:description',
            content: post.value?.description || 'بابەتی بلۆگ لە وێبگەی کوردی'
        },
        {
            property: 'og:image',
            content: post.value?.image || ''
        }
    ]
}))

// 404 handling if post doesn't exist
if (!post.value) {
    throw createError({
        statusCode: 404,
        statusMessage: 'بابەت نەدۆزرایەوە'
    })
}
</script>

<style scoped>
/* Blog post specific styling */

/* Typography adjustments for Kurdish text */
.prose {
    text-align: justify;
    hyphens: auto;
}

.prose h2 {
    @apply text-2xl font-bold text-gray-900 mt-8 mb-4;
}

.prose p {
    @apply mb-4 leading-relaxed;
}

.prose ul {
    @apply mb-4 space-y-2;
}

.prose li {
    @apply mr-4;
}

/* Line clamp utilities */
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

/* Responsive adjustments */
@media (max-width: 768px) {
    .text-5xl {
        font-size: 2.5rem;
    }

    .prose {
        font-size: 1rem;
    }
}
</style>