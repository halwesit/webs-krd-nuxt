<template>
    <!-- Contact page - the conversion point where prospects become clients
       This page removes barriers to business engagement while qualifying project scope -->
    <div>

        <!-- Main contact section with form and agency message -->
        <section class="py-20 md:py-32 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    <!-- Agency message and project approach -->
                    <div class="order-2 lg:order-1">
                        <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-8">
                            ئامادەین بۆ گوێگرتن<br>
                            لە پڕۆژەکەت
                        </h1>

                        <!-- Agency connection and value proposition -->
                        <div class="prose prose-lg max-w-none mb-8">
                            <p class="text-lg leading-relaxed text-gray-700 mb-6">
                                چاوەڕوانین بۆ دۆزینەوەی زیاتر لەسەر پڕۆژەکەت و چۆنیەتی
                                یارمەتیدانت لە گەیشتن بە ئامانجەکانی دیجیتاڵت. تیمی پسپۆڕمان
                                ئامادەیە بۆ گوتوگۆی ستراتیژی و پەرەپێدانی چارەسەرێکی گونجاو
                                بۆ پێداویستیەکانی کۆمپانیاکەت.
                            </p>
                        </div>

                        <!-- Contact information and business details -->
                        <div class="space-y-6">

                            <!-- Business email contact -->
                            <div class="flex items-center space-x-4 space-x-reverse">
                                <div
                                    class="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                                    <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="font-semibold text-gray-900">ئیمەیڵی کۆمپانیا</h3>
                                    <a href="mailto:hello@webs.krd"
                                        class="text-gray-600 hover:text-gray-900 transition-colors">
                                        hello@webs.krd
                                    </a>
                                </div>
                            </div>

                            <!-- Response time expectation -->
                            <div class="flex items-center space-x-4 space-x-reverse">
                                <div
                                    class="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                                    <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="font-semibold text-gray-900">کاتی وەڵام</h3>
                                    <p class="text-gray-600">لە ماوەی ١٢ کاتژمێردا وەڵامت دەدەینەوە</p>
                                </div>
                            </div>

                            <!-- Business location -->
                            <div class="flex items-center space-x-4 space-x-reverse">
                                <div
                                    class="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                                    <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="font-semibold text-gray-900">ناونیشان</h3>
                                    <p class="text-gray-600">سلێمانی، کوردستان، عێراق</p>
                                </div>
                            </div>

                            <!-- Business hours -->
                            <div class="flex items-center space-x-4 space-x-reverse">
                                <div
                                    class="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                                    <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V2m0 4v4m0-4H8m8 0h2a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="font-semibold text-gray-900">کاتی کارکردن</h3>
                                    <p class="text-gray-600">شەممە - پێنجشەممە، ٩:٠٠ - ١٧:٠٠</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Contact form -->
                    <div class="order-1 lg:order-2">
                        <div class="bg-gray-50 rounded-2xl p-8">

                            <!-- Form header -->
                            <div class="mb-8">
                                <h2 class="text-2xl font-bold text-gray-900 mb-2">
                                    با قسە بکەین
                                </h2>
                                <p class="text-gray-600">
                                    زانیاریەکانت پڕ بکەرەوە و بە زووترین کات پەیوەندیت پێوە دەکەم
                                </p>
                            </div>

                            <!-- Contact form -->
                            <form @submit.prevent="submitForm" class="space-y-6">

                                <!-- Name field -->
                                <div>
                                    <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                                        ناو
                                    </label>
                                    <input id="name" v-model="form.name" type="text" required
                                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                                        placeholder="ناوی تەواوت" :disabled="isSubmitting" />
                                </div>

                                <!-- Email field -->
                                <div>
                                    <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                                        ئیمەیڵ
                                    </label>
                                    <input id="email" v-model="form.email" type="email" required
                                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                                        placeholder="your@email.com" :disabled="isSubmitting" />
                                </div>

                                <!-- Company field (optional) -->
                                <div>
                                    <label for="company" class="block text-sm font-medium text-gray-700 mb-2">
                                        شەرکەت <span class="text-gray-400">(ئیختیاری)</span>
                                    </label>
                                    <input id="company" v-model="form.company" type="text"
                                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                                        placeholder="ناوی شەرکەت" :disabled="isSubmitting" />
                                </div>

                                <!-- Project type selection -->
                                <div>
                                    <label for="project-type" class="block text-sm font-medium text-gray-700 mb-2">
                                        جۆری پڕۆژە
                                    </label>
                                    <select id="project-type" v-model="form.projectType" required
                                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                                        :disabled="isSubmitting">
                                        <option value="">جۆری پڕۆژە هەڵبژێرە</option>
                                        <option value="website">دیزاینی وێبسایت</option>
                                        <option value="branding">براندینگ</option>
                                        <option value="mobile-app">ئەپی مۆبایل</option>
                                        <option value="ui-ux">دیزاینی UI/UX</option>
                                        <option value="consultation">ڕاوێژکاری</option>
                                        <option value="other">هیتر</option>
                                    </select>
                                </div>

                                <!-- Budget range -->
                                <div>
                                    <label for="budget" class="block text-sm font-medium text-gray-700 mb-2">
                                        بودجە
                                    </label>
                                    <select id="budget" v-model="form.budget" required
                                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                                        :disabled="isSubmitting">
                                        <option value="">بودجەت هەڵبژێرە</option>
                                        <option value="under-1000">کەمتر لە $١٠٠٠</option>
                                        <option value="1000-5000">$١٠٠٠ - $٥٠٠٠</option>
                                        <option value="5000-10000">$٥٠٠٠ - $١٠٠٠٠</option>
                                        <option value="10000-plus">زیاتر لە $١٠٠٠٠</option>
                                        <option value="discuss">با قسەی لەسەر بکەین</option>
                                    </select>
                                </div>

                                <!-- Message field -->
                                <div>
                                    <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                                        پەیام
                                    </label>
                                    <textarea id="message" v-model="form.message" required rows="5"
                                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all resize-none"
                                        placeholder="پەیامەکەت لێرە بنووسە" :disabled="isSubmitting"></textarea>
                                </div>

                                <!-- Submit button -->
                                <button type="submit" class="w-full btn-primary" :disabled="isSubmitting">
                                    <span v-if="!isSubmitting">ناردن</span>
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

                                <!-- Success/error messages -->
                                <div v-if="formMessage" class="p-4 rounded-lg"
                                    :class="formSuccess ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'">
                                    {{ formMessage }}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ Section - addressing common questions proactively -->
        <section class="py-20 bg-gray-50">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                <!-- Section header -->
                <div class="text-center mb-16">
                    <h2 class="section-title">پرسیارە بەردەوامەکان</h2>
                    <p class="section-subtitle">
                        وەڵامی هەندێک لە پرسیارە بەردەوامەکان
                    </p>
                </div>

                <!-- FAQ items -->
                <div class="space-y-8">
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

    </div>
</template>

<script setup>
// Contact page component logic and form handling
// This page converts visitors into potential clients through clear communication

// SEO metadata for the contact page
useHead({
    title: 'پەیوەندی - وێبگەی کوردی',
    meta: [
        {
            name: 'description',
            content: 'پەیوەندی پێوە بکە بۆ پڕۆژەکانی دیزاینی دیجیتاڵ، وێبسایت، و براندینگ'
        },
        {
            property: 'og:title',
            content: 'پەیوەندی - وێبگەی کوردی'
        },
        {
            property: 'og:description',
            content: 'پەیوەندی پێوە بکە بۆ پڕۆژەکانی دیزاینی دیجیتاڵ، وێبسایت، و براندینگ'
        }
    ]
})

// Reactive form state
const form = reactive({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: ''
})

const isSubmitting = ref(false)
const formMessage = ref('')
const formSuccess = ref(false)

// FAQ data with toggle functionality
const faqs = ref([
    {
        question: 'چەند کات دەخایەنێت پڕۆژەیەک؟',
        answer: 'کاتی تەواوکردنی پڕۆژە دەگۆڕێت بەگوێرەی قۆناغی پڕۆژەکە. پڕۆژەی دیزاینی وێبسایتی ئاسایی ٢-٤ هەفتە دەخایەنێت، بەڵام پڕۆژەی گەورەتر دەتوانێت ٦-٨ هەفتە بخایەنێت. کاتی ورد دوای گوتوگۆی یەکەم دیاری دەکرێت.',
        isOpen: false
    },
    {
        question: 'چۆن پرۆسەی کارکردن؟',
        answer: 'پرۆسەکە دەست پێ دەکات بە گوتوگۆیەکی یەکەم بۆ تێگەیشتن لە پێداویستیەکانت. پاشان پلانی پڕۆژە و نرخەکە ئامادە دەکەم. دوای ڕازیبوون، کارکردن دەست پێ دەکات بە توێژینەوە و ستراتیژی، پاشان دیزاین و گەشەپێدان.',
        isOpen: false
    },
    {
        question: 'ئایا لە دوای تەواوبوونی پڕۆژە پشتگیری دەکەیت؟',
        answer: 'بەڵێ، ٣٠ ڕۆژ پشتگیری بەخۆڕایی لەگەڵ هەموو پڕۆژەیەکدا دەدەم. ئەمە بریتییە لە چارەسەرکردنی هەر کێشەیەک و گۆڕانکاری بچووکەکان. پشتگیری درێژخایەن بە نرخی جیاواز بەردەستە.',
        isOpen: false
    },
    {
        question: 'چۆن نرخەکان دیاری دەکرێت؟',
        answer: 'نرخەکان دیاری دەکرێت بەگوێرەی ئاڵۆزی پڕۆژە، کاتە پێویستەکە، و تایبەتمەندیە داواکراوەکان. دوای تێگەیشتن لە پێداویستیەکانت، وردبینیەکی تەواو لەگەڵ نرخی گشتی دەنێرم.',
        isOpen: false
    },
    {
        question: 'ئایا لەگەڵ کڕیارانی نێودەوڵەتی کار دەکەیت؟',
        answer: 'بەڵێ، لەگەڵ کڕیارانی جیهانی کار دەکەم. پەیوەندیکردن لە ڕێگەی ئیمەیڵ، زووم، و ئامرازەکانی کۆلابۆریشنی تر دەکەم. کاتژمێری جیاوازیش کێشە نایکات.',
        isOpen: false
    }
])

// Form submission handler
const submitForm = async () => {
    // Basic validation
    if (!form.name || !form.email || !form.projectType || !form.budget || !form.message) {
        formSuccess.value = false
        formMessage.value = 'تکایە هەموو خانە پێویستەکان پڕ بکەرەوە'
        return
    }

    isSubmitting.value = true
    formMessage.value = ''

    try {
        // Simulate form submission - in real implementation, this would send to your backend/service
        await new Promise(resolve => setTimeout(resolve, 2000))

        // Simulate successful submission
        formSuccess.value = true
        formMessage.value = 'سوپاس! پەیامەکەت وەرگیرا. لە ماوەی ٢٤ کاتژمێردا وەڵامت دەدەمەوە.'

        // Reset form
        Object.keys(form).forEach(key => {
            form[key] = ''
        })

    } catch (error) {
        formSuccess.value = false
        formMessage.value = 'هەڵەیەک ڕوویدا لە ناردنی پەیامەکە. تکایە دواتر هەوڵبدەرەوە.'
    } finally {
        isSubmitting.value = false

        // Clear message after 5 seconds
        setTimeout(() => {
            formMessage.value = ''
        }, 5000)
    }
}

// FAQ toggle functionality
const toggleFAQ = (index) => {
    faqs.value[index].isOpen = !faqs.value[index].isOpen
}

// Auto-focus on name field when page loads (for better UX)
onMounted(() => {
    nextTick(() => {
        const nameInput = document.getElementById('name')
        if (nameInput) {
            nameInput.focus()
        }
    })
})
</script>

<style scoped>
/* Contact page specific styling for professional presentation */

/* Form input styling with RTL support */
input,
select,
textarea {
    direction: rtl;
    text-align: right;
}

input:focus,
select:focus,
textarea:focus {
    box-shadow: 0 0 0 3px rgba(31, 41, 55, 0.1);
}

/* Placeholder text alignment for RTL */
input::placeholder,
textarea::placeholder {
    text-align: right;
}

/* Select dropdown styling */
select {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
    background-position: left 0.75rem center;
    background-repeat: no-repeat;
    background-size: 1.25em 1.25em;
    padding-left: 2.5rem;
}

/* FAQ section styling */
.bg-white {
    border: 1px solid #f3f4f6;
}

.bg-white:hover {
    border-color: #e5e7eb;
    transition: border-color 0.2s ease;
}

/* Success/error message styling */
.bg-green-100 {
    border-right: 4px solid #10b981;
}

.bg-red-100 {
    border-right: 4px solid #ef4444;
}

/* Contact info icons */
.w-12.h-12 {
    transition: all 0.3s ease;
}

.w-12.h-12:hover {
    background-color: #f3f4f6;
}

/* Loading spinner animation */
.animate-spin {
    animation: spin 1s linear infinite;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
    .order-1 {
        order: 1;
    }

    .order-2 {
        order: 2;
    }
}

@media (max-width: 768px) {
    .grid-cols-1 {
        gap: 2rem;
    }

    .text-4xl {
        font-size: 2.5rem;
    }

    .p-8 {
        padding: 1.5rem;
    }
}

/* Enhanced accessibility */
button:focus,
input:focus,
select:focus,
textarea:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
}

/* Smooth transitions for interactive elements */
button,
input,
select,
textarea {
    transition: all 0.2s ease;
}
</style>