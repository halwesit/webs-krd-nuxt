<template>
    <!-- About page - building agency credibility and team trust through comprehensive story
       This page transforms visitors into potential clients through collective expertise -->
    <div>

        <!-- Hero section with agency introduction -->
        <section class="bg-white py-20 md:py-32">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                <!-- Page title with agency positioning -->
                <h1 class="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">
                    دەربارەمان
                </h1>

                <!-- Main agency value proposition -->
                <h2 class="text-4xl md:text-6xl font-bold leading-tight mb-8">
                    ئاژانسی پێشەنگ<br>
                    لە کوردستان
                </h2>

                <!-- Call-to-action buttons positioned prominently -->
                <div class="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                    <NuxtLink to="/contact" class="btn-primary">
                        پرۆژەکەت دەست پێ بکە
                    </NuxtLink>
                    <a href="/webs-krd-company-profile.pdf" download class="btn-secondary">
                        پرۆفایلی کۆمپانیا دابگرە
                    </a>
                </div>
            </div>
        </section>

        <!-- Agency story and team capabilities section -->
        <section class="py-20 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <!-- Agency statistics and credentials -->
                    <div class="order-2 lg:order-1">

                        <!-- Company metrics - building credibility through numbers -->
                        <div class="grid grid-cols-1 gap-8 mb-12">

                            <!-- Years in business -->
                            <div class="bg-white p-6 rounded-2xl">
                                <div class="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
                                    ساڵانی کارکردن
                                </div>
                                <div class="text-3xl font-bold text-gray-900">٤+</div>
                            </div>

                            <!-- Projects completed -->
                            <div class="bg-white p-6 rounded-2xl">
                                <div class="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
                                    پڕۆژەی تەواوکراو
                                </div>
                                <div class="text-3xl font-bold text-gray-900">١٥٠+</div>
                            </div>

                            <!-- Active team members -->
                            <div class="bg-white p-6 rounded-2xl">
                                <div class="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
                                    ئەندامانی تیم
                                </div>
                                <div class="text-3xl font-bold text-gray-900">١٢</div>
                            </div>
                        </div>
                    </div>

                    <!-- Agency narrative and company journey -->
                    <div class="order-1 lg:order-2">

                        <!-- Team photo with professional styling - Using Unsplash -->
                        <div class="aspect-square bg-gray-200 rounded-2xl overflow-hidden mb-8">
                            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=600&fit=crop&crop=center"
                                alt="تیمی وێبز کوردستان" class="w-full h-full object-cover" />
                        </div>

                        <!-- Company story - this narrative builds organizational trust -->
                        <div class="prose prose-lg max-w-none">
                            <p class="text-lg leading-relaxed text-gray-700 mb-6">
                                وێبز کوردستان لە ساڵی ٢٠٢٠دا دامەزراوە وەک یەکەم ئاژانسی تایبەتمەند
                                بە دیزاینی دیجیتاڵ و گەشەپێدانی وێبسایت بە زمانی کوردی. ئێمە
                                لە مەبەستی خزمەتکردنی کۆمپانیا کورد و نێودەوڵەتیەکان کە دەیانەوێت
                                بە بازاڕی کوردستان بگەن یان ئامادەبوونی دیجیتاڵیان بەهێز بکەن.
                            </p>

                            <p class="text-lg leading-relaxed text-gray-700 mb-6">
                                تیمەکەمان پێکهاتووە لە دیزاینەر، گەشەپێدەر، ستراتیژیست دیجیتاڵ،
                                و پسپۆڕانی بازاڕکردن کە هەموویان ئەزموونی کارکردنیان هەیە لەگەڵ
                                کۆمپانیا جۆراووجۆرەکان لە هەرێمی کوردستان و دەرەوەی. ئێمە
                                باوەڕمان وایە کە تەکنەلۆژی دەبێت خزمەتکاری مرۆڤ بێت، نەک پێچەوانە.
                            </p>

                            <p class="text-lg leading-relaxed text-gray-700">
                                ئامانجی سەرەکیمان ئەوەیە کە یارمەتی کۆمپانیاکان بدەین تا لە
                                جیهانی دیجیتاڵدا سەرکەوتوو بن و لە هەمان کاتدا کولتوری
                                کوردی و زمانەکەمان بپارێزین و پتەو بکەین.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Expertise section with detailed skill breakdown -->
        <section class="py-20 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <!-- Section header -->
                <div class="text-center mb-16">
                    <h2 class="section-title">پسپۆڕیەکانمان</h2>
                    <p class="section-subtitle">
                        باشترین ئێمەین بۆ بەرزکردنەوەی بەرهەمەکەت
                    </p>
                </div>

                <!-- Skills grid with detailed descriptions -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div v-for="skill in expertiseSkills" :key="skill.id" class="group">

                        <!-- Skill icon and title -->
                        <div class="flex items-start space-x-4 space-x-reverse mb-4">
                            <div
                                class="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-900 group-hover:text-white transition-colors duration-300">
                                <component :is="skill.icon" class="w-6 h-6" />
                            </div>
                            <div class="flex-grow">
                                <h3 class="text-xl font-semibold text-gray-900 mb-2">
                                    {{ skill.title }}
                                </h3>
                                <p class="text-gray-600 leading-relaxed">
                                    {{ skill.description }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Awards and recognition section - social proof is crucial -->
        <section class="py-20 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <!-- Section header -->
                <div class="text-center mb-16">
                    <h2 class="section-title">خەڵات و ناسین</h2>
                    <p class="section-subtitle">
                        ئەم خەڵاتانە کارەکانمان لە باشترکردنی ئەزموونی دیجیتاڵدا نیشان دەدەن
                    </p>
                </div>

                <!-- Awards grid - displaying professional achievements -->
                <div class="grid grid-cols-2 md:grid-cols-5 gap-8">
                    <div v-for="award in awards" :key="award.id"
                        class="text-center group cursor-pointer hover:scale-105 transition-transform duration-300">

                        <!-- Award logo/icon placeholder -->
                        <div
                            class="w-16 h-16 mx-auto mb-4 bg-white rounded-lg shadow-sm flex items-center justify-center group-hover:shadow-md transition-shadow duration-300">
                            <!-- Using a generic icon instead of specific award logos -->
                            <svg class="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                            </svg>
                        </div>

                        <!-- Award details -->
                        <h4 class="font-medium text-gray-900 text-sm mb-1">
                            {{ award.platform }}
                        </h4>
                        <p class="text-2xl font-bold text-gray-900 mb-1">
                            {{ award.count }}
                        </p>
                        <p class="text-xs text-gray-500">
                            {{ award.type }}
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Latest work preview section with Unsplash images -->
        <section class="py-20 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <!-- Section header -->
                <div class="text-center mb-16">
                    <h2 class="section-title">دوایین کار</h2>
                    <p class="section-subtitle">
                        نموونەیەک لە دوایین پڕۆژەکانمان
                    </p>
                </div>

                <!-- Featured project showcase with Unsplash images -->
                <div class="max-w-4xl mx-auto">
                    <div class="bg-gray-100 rounded-2xl overflow-hidden">

                        <!-- Project images using Unsplash -->
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-1">
                            <div class="aspect-video bg-gray-200">
                                <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop&crop=center"
                                    alt="وێبسایتی گۆڤاری کوردستان" class="w-full h-full object-cover" />
                            </div>
                            <div class="aspect-video bg-gray-200">
                                <img src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=600&h=400&fit=crop&crop=center"
                                    alt="وێبسایتی گۆڤاری کوردستان - ڤیرژنی مۆبایل" class="w-full h-full object-cover" />
                            </div>
                        </div>

                        <!-- Project information -->
                        <div class="p-8 text-center">
                            <div class="flex justify-center items-center gap-4 mb-4">
                                <span class="text-sm font-medium text-gray-500 uppercase tracking-wide">
                                    دیزاینی وێب
                                </span>
                                <span class="text-sm text-gray-400">٢٠٢٣</span>
                            </div>

                            <h3 class="text-2xl font-bold text-gray-900 mb-4">
                                وێبسایتی گۆڤاری کوردستان
                            </h3>

                            <p class="text-gray-600 leading-relaxed mb-6 max-w-2xl mx-auto">
                                گۆڤارێکی ئۆنلاین کە دوایین زانیاریەکان لەسەر مۆد، ڕووداو، ڕێنمایی ژیان،
                                و زۆر شتی تر دەخاتەڕوو
                            </p>

                            <NuxtLink to="/works/zenith-magazine" class="btn-primary">
                                بینینی زیاتر
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script setup>
// About page component logic and metadata
// This page builds trust through company narrative and team credentials

// SEO metadata specific to the about page
useHead({
    title: 'دەربارەمان - وێبز کوردستان',
    meta: [
        {
            name: 'description',
            content: 'ئاژانسی دیجیتاڵی کوردی لەگەڵ ٤+ ساڵی ئەزموون لە دیزاین و گەشەپێدانی وێبسایت و براند'
        },
        {
            property: 'og:title',
            content: 'دەربارەمان - وێبز کوردستان'
        },
        {
            property: 'og:description',
            content: 'ئاژانسی دیجیتاڵی کوردی لەگەڵ ٤+ ساڵی ئەزموون لە دیزاین و گەشەپێدانی وێبسایت و براند'
        }
    ]
})

// Expertise skills with detailed descriptions
const expertiseSkills = ref([
    {
        id: 1,
        title: 'دیزاینی UI/UX',
        description: 'دروستکردنی ڕووکاری کارپێکراو کە لەگەڵ ئامانجەکانتان و کڕیارانتان دەگونجێت',
        icon: 'ComputerDesktopIcon'
    },
    {
        id: 2,
        title: 'براندینگ',
        description: 'دروستکردنی ناسنامەی تایبەت و یادگار کە گونجاوە لەگەڵ چەشن و بەهاکانتان',
        icon: 'SparklesIcon'
    },
    {
        id: 3,
        title: 'وێنەکێشی',
        description: 'وێنەکێشی سەرنجڕاکێش بۆ جۆرەجۆر میدیا، ستایل و تەکنیکە جۆراوجۆرەکان بەکاردەهێنین',
        icon: 'PaintBrushIcon'
    },
    {
        id: 4,
        title: 'گەشەپێدانی فریمەر',
        description: 'بەکارهێنانی فریمەر بۆ دروستکردنی پرۆتۆتایپ و ڕووکاری پێشکەوتوو و دینامیک کە بەکارهێنەران بەکاردەهێنن',
        icon: 'CodeBracketIcon'
    }
])

// Awards and recognition data - social proof through achievements
const awards = ref([
    {
        id: 1,
        platform: 'FWA',
        count: '١٤',
        type: 'خەڵات'
    },
    {
        id: 2,
        platform: 'CSS DESIGN AWARDS',
        count: '٧',
        type: 'خەڵات'
    },
    {
        id: 3,
        platform: 'WEBBY AWARDS',
        count: '٧',
        type: 'خەڵات'
    },
    {
        id: 4,
        platform: 'BEST OF BEHANCE',
        count: '٨',
        type: 'جار'
    },
    {
        id: 5,
        platform: 'FRAMER CITY',
        count: '٣',
        type: 'خەڵات'
    }
])

// Import required icons
import {
    ComputerDesktopIcon,
    SparklesIcon,
    PaintBrushIcon,
    CodeBracketIcon
} from '@heroicons/vue/24/outline'
</script>

<style scoped>
/* About page specific styling for enhanced presentation */

/* Professional photo hover effect */
.aspect-square img {
    transition: transform 0.3s ease;
}

.aspect-square:hover img {
    transform: scale(1.05);
}

/* Statistics cards hover animation */
.bg-white:hover {
    transform: translateY(-2px);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Expertise skill cards group hover effects */
.group:hover .w-12 {
    background-color: #1f2937;
    color: white;
}

/* Awards section hover effects */
.group:hover .shadow-sm {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

/* Responsive adjustments for mobile devices */
@media (max-width: 768px) {
    .grid-cols-2 {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 1.5rem;
    }

    .text-4xl {
        font-size: 2.5rem;
    }
}

/* Typography enhancements for Kurdish text */
.prose p {
    text-align: justify;
    hyphens: auto;
}
</style>