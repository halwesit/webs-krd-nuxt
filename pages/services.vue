<template>
    <!-- Services page - comprehensive showcase of what we offer
       This page details our service offerings and capabilities -->
    <div>

        <!-- Hero section -->
        <section class="bg-white py-20 md:py-32">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-6">
                    خزمەتگوزاریەکانمان
                </h1>

                <p class="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
                    چارەسەری تەواو بۆ هەموو پێداویستیەکانی دیجیتاڵتان.
                    لە دیزاینەوە تا گەشەپێدان و بازاڕکردن.
                </p>

                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <NuxtLink to="/contact" class="btn-primary">
                        پرۆژەکەت دەست پێ بکە
                    </NuxtLink>
                    <NuxtLink to="/works" class="btn-secondary">
                        نموونەکانمان ببینە
                    </NuxtLink>
                </div>
            </div>
        </section>

        <!-- Main services grid -->
        <section class="py-20 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <!-- Services grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div v-for="(service, index) in services" :key="service.id"
                        class="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group">
                        <!-- Service icon -->
                        <div
                            class="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <component :is="service.icon" class="w-8 h-8 text-gray-700" />
                        </div>

                        <!-- Service content -->
                        <h3 class="text-2xl font-bold text-gray-900 mb-4">
                            {{ service.title }}
                        </h3>

                        <p class="text-gray-600 leading-relaxed mb-6">
                            {{ service.description }}
                        </p>

                        <!-- Service features -->
                        <ul class="space-y-2 mb-6">
                            <li v-for="feature in service.features" :key="feature"
                                class="flex items-start space-x-3 space-x-reverse">
                                <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7" />
                                </svg>
                                <span class="text-gray-700">{{ feature }}</span>
                            </li>
                        </ul>

                        <!-- Service pricing -->
                        <div class="border-t border-gray-200 pt-6">
                            <div class="flex items-center justify-between">
                                <div>
                                    <span class="text-2xl font-bold text-gray-900">{{ service.startingPrice }}</span>
                                    <span class="text-gray-500 text-sm mr-1">دەست پێ کردن لە</span>
                                </div>
                                <NuxtLink to="/contact" class="text-gray-900 hover:text-gray-600 font-medium">
                                    زانیاری زیاتر →
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Process section -->
        <section class="py-20 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <!-- Section header -->
                <div class="text-center mb-16">
                    <h2 class="section-title">چۆن کار دەکەین</h2>
                    <p class="section-subtitle">
                        پرۆسەیەکی ئاسان و ڕوون بۆ گەیشتن بە ئامانجەکانت
                    </p>
                </div>

                <!-- Process steps -->
                <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div v-for="(step, index) in processSteps" :key="step.id" class="text-center group">
                        <!-- Step number -->
                        <div
                            class="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                            {{ index + 1 }}
                        </div>

                        <!-- Step content -->
                        <h3 class="text-xl font-semibold text-gray-900 mb-2">
                            {{ step.title }}
                        </h3>

                        <p class="text-gray-600 leading-relaxed">
                            {{ step.description }}
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ section -->
        <section class="py-20 bg-gray-50">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                <!-- Section header -->
                <div class="text-center mb-16">
                    <h2 class="section-title">پرسیارە بەردەوامەکان</h2>
                    <p class="section-subtitle">
                        وەڵامی یەکێک لە گرنگترین پرسیارەکان
                    </p>
                </div>

                <!-- FAQ items -->
                <div class="space-y-6">
                    <div v-for="(faq, index) in faqs" :key="index" class="bg-white rounded-2xl p-6 shadow-sm">
                        <button @click="toggleFAQ(index)"
                            class="w-full flex justify-between items-center text-right focus:outline-none">
                            <span class="text-lg font-semibold text-gray-900">
                                {{ faq.question }}
                            </span>
                            <svg class="w-5 h-5 text-gray-500 transition-transform duration-300"
                                :class="{ 'rotate-180': faq.isOpen }" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        <Transition enter-active-class="transition duration-300 ease-out"
                            enter-from-class="transform opacity-0 -translate-y-2"
                            enter-to-class="transform opacity-100 translate-y-0"
                            leave-active-class="transition duration-300 ease-in"
                            leave-from-class="transform opacity-100 translate-y-0"
                            leave-to-class="transform opacity-0 -translate-y-2">
                            <div v-if="faq.isOpen" class="mt-4 text-gray-600 leading-relaxed">
                                {{ faq.answer }}
                            </div>
                        </Transition>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA section -->
        <section class="py-20 bg-white">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    ئامادەیت بۆ دەست پێکردن؟
                </h2>

                <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                    با بیرۆکەکەت لەگەڵمان هاوبەش بکە و بزانە چۆن دەتوانین
                    یارمەتیت بدەین لە گەیشتن بە ئامانجەکانت.
                </p>

                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <NuxtLink to="/contact" class="btn-primary">
                        پەیوەندیمان پێوە بکە
                    </NuxtLink>
                    <a href="tel:+9647501234567" class="btn-secondary">
                        پەیوەندی تەلەفۆنی
                    </a>
                </div>
            </div>
        </section>

    </div>
</template>

<script setup>
// Services page component logic
// This page showcases our complete service offerings

// SEO metadata for services page
useHead({
    title: 'خزمەتگوزاریەکان - وێبگەی کوردی',
    meta: [
        {
            name: 'description',
            content: 'خزمەتگوزاریەکانی تەواو بۆ دیزاین و گەشەپێدانی وێبسایت، براندینگ، و چارەسەری دیجیتاڵ'
        },
        {
            property: 'og:title',
            content: 'خزمەتگوزاریەکان - وێبگەی کوردی'
        },
        {
            property: 'og:description',
            content: 'خزمەتگوزاریەکانی تەواو بۆ دیزاین و گەشەپێدانی وێبسایت، براندینگ، و چارەسەری دیجیتاڵ'
        }
    ]
})

// Services data
const services = ref([
    {
        id: 1,
        title: 'دیزاین و گەشەپێدانی وێبسایت',
        description: 'وێبسایتی مۆدێرن و وەڵامدەرەوە کە لەگەڵ ئامانجەکانت دەگونجێت و ئەزموونێکی نایاب بۆ بەکارهێنەران دابین دەکات.',
        icon: 'ComputerDesktopIcon',
        startingPrice: '$٨٠٠',
        features: [
            'دیزاینی وەڵامدەرەوە بۆ هەموو ئامێرەکان',
            'خێرایی بارکردنی باش',
            'گەشەپێدان بە تەکنەلۆژیای نۆێ',
            'پشتگیری SEO',
            'سیستەمی بەڕێوەبردنی ناوەڕۆک'
        ]
    },
    {
        id: 2,
        title: 'براندینگ و ناسنامەی بیزنەس',
        description: 'دروستکردنی ناسنامەی تەواو و کاریگەر بۆ براندەکەت کە لە بازاڕدا جیاکاریت دەکاتەوە.',
        icon: 'PaintBrushIcon',
        startingPrice: '$٦٠٠',
        features: [
            'دیزاینی لۆگۆ و ناسنامەی بیزنەس',
            'هەڵبژاردنی ڕەنگ و فۆنت',
            'دروستکردنی گایدلاینی براند',
            'کارتی بیزنەس و چاپکردن',
            'دیزاینی کۆمەڵایەتی'
        ]
    },
    {
        id: 3,
        title: 'بازاڕکردنی دیجیتاڵ',
        description: 'ستراتیژی و پلانگێڕی بۆ باشترکردنی ئامادەبوونی دیجیتاڵت و گەیشتن بە کڕیارانی زیاتر.',
        icon: 'ChartBarIcon',
        startingPrice: '$٤٠٠',
        features: [
            'بازاڕکردنی کۆمەڵایەتی',
            'گۆگڵ ئادز و فەیسبووک ئادز',
            'SEO و SEM',
            'ناوەڕۆکی بازاڕکردن',
            'ڕاپۆرتی مانگانە'
        ]
    },
    {
        id: 4,
        title: 'پشتگیری و چاکسازی',
        description: 'پشتگیری بەردەوام و چاکسازی وێبسایتەکانت بۆ دڵنیایی لە کارپێکردنی نایاب.',
        icon: 'CogIcon',
        startingPrice: '$١٥٠',
        features: [
            'نۆکردنەوەی بەردەوام',
            'پاڵپشتی تەکنیکی',
            'باکئەپی ئاسایشی',
            'چاککردنی خێرایی',
            'مۆنیتەرینگی ٢٤/٧'
        ]
    }
])

// Process steps
const processSteps = ref([
    {
        id: 1,
        title: 'گوتوگۆی یەکەم',
        description: 'تێگەیشتن لە پێداویستیەکانت و ئامانجەکانت'
    },
    {
        id: 2,
        title: 'پلانگێڕی',
        description: 'دروستکردنی ستراتیژی و دیزاینی سەرەتایی'
    },
    {
        id: 3,
        title: 'گەشەپێدان',
        description: 'جێبەجێکردنی پڕۆژە بە کۆلابۆریشن'
    },
    {
        id: 4,
        title: 'تەسلیمکردن',
        description: 'کۆتایی پڕۆژە و پشتگیری درێژخایەن'
    }
])

// FAQ data
const faqs = ref([
    {
        question: 'چەند کات دەخایەنێت پڕۆژەیەک؟',
        answer: 'کاتی تەواوکردنی پڕۆژە دەگۆڕێت بەگوێرەی قۆناغی پڕۆژەکە. وێبسایتی ئاسایی ٢-٤ هەفتە، بەڵام پڕۆژەی گەورەتر ٦-٨ هەفتە دەخایەنێت.',
        isOpen: false
    },
    {
        question: 'ئایا پشتگیری دوای تەواوبوون دەکەن؟',
        answer: 'بەڵێ، ٣٠ ڕۆژ پشتگیری بەخۆڕایی لەگەڵ هەموو پڕۆژەیەکدا دەدەین. پشتگیری درێژخایەن بە نرخی جیاواز بەردەستە.',
        isOpen: false
    },
    {
        question: 'چۆن نرخەکان دیاری دەکرێت؟',
        answer: 'نرخەکان دیاری دەکرێت بەگوێرەی ئاڵۆزی پڕۆژە، کاتە پێویستەکە، و تایبەتمەندیە داواکراوەکان. نرخی دەستپێکردن لە خشتەکەدا نیشان دراوە.',
        isOpen: false
    }
])

// FAQ toggle functionality
const toggleFAQ = (index) => {
    faqs.value[index].isOpen = !faqs.value[index].isOpen
}

// Import required icons
import {
    ComputerDesktopIcon,
    PaintBrushIcon,
    ChartBarIcon,
    CogIcon
} from '@heroicons/vue/24/outline'
</script>

<style scoped>
/* Services page specific styling */

/* Service cards hover effects */
.group:hover .w-16 {
    transform: scale(1.1);
}

/* Process steps hover effects */
.group:hover .w-16.h-16 {
    background-color: #374151;
}

/* FAQ animation */
.rotate-180 {
    transform: rotate(180deg);
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .grid-cols-1 {
        gap: 1.5rem;
    }

    .text-4xl {
        font-size: 2.5rem;
    }
}
</style>