<template>
    <div>
        <section class="bg-white py-20 md:py-32">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-6">
                    تێڕوانین
                </h1>

                <!-- Debug info -->
                <div class="mb-8 p-4 bg-gray-100 rounded">
                    <p>Posts loaded: {{ posts?.length || 0 }}</p>
                    <p>Pending: {{ pending }}</p>
                    <p>Error: {{ error?.message }}</p>
                </div>

                <!-- Blog posts grid -->
                <div v-if="posts && posts.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <article v-for="post in posts" :key="post._path"
                        class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
                        @click="navigateToPost(post._path)">

                        <div class="aspect-video bg-gray-200">
                            <img :src="post.image" :alt="post.title" class="w-full h-full object-cover" />
                        </div>

                        <div class="p-6">
                            <h3 class="text-xl font-semibold text-gray-900 mb-3">
                                {{ post.title }}
                            </h3>
                            <p class="text-gray-600 leading-relaxed mb-4">
                                {{ post.description }}
                            </p>
                            <div class="text-sm text-gray-500">
                                {{ formatDate(post.date) }}
                            </div>
                        </div>
                    </article>
                </div>

                <div v-else-if="pending" class="text-center">
                    Loading posts...
                </div>

                <div v-else class="text-center">
                    No posts found.
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
// Simple test version using the exact pattern from [slug].vue
useHead({
    title: 'بلۆگ - وێبگەی کوردی'
})

// Use the exact same pattern as [slug].vue but with $content
const { data: posts, pending, error } = await useAsyncData('blog-posts', async () => {
    const { $content } = useNuxtApp()
    return await $content('blog')
        .where({ published: { $ne: false } })
        .sort({ date: -1 })
        .find()
})

console.log('Blog posts data:', posts.value)
console.log('Number of posts:', posts.value?.length)
console.log('Pending:', pending.value)
console.log('Error:', error.value)

// Navigation methods
const navigateToPost = (path) => {
    navigateTo(path)
}

// Date formatting utility
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
</script>

<style scoped>
.aspect-video {
    aspect-ratio: 16 / 9;
}
</style>
