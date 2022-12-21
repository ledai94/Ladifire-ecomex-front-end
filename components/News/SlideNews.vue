<template>
    <section class="ml ml--slider">
        <div class="ml-wrap">
            <div class="ml-slider ml-slider--sidebar">
                <div class="swiper-container sprd_catgeory_slider-0 swiper-container-horizontal">
                    <div v-swiper:mySwiper="options" class="sprd_catgeory_slider-0">
                        <div class="swiper-wrapper">
                            <div v-for="slide in slides" :key="slide.id" class="swiper-slide">
                                <div class="ml__item ml__item--swiper">
                                    <nuxt-link
                                        class="ml-item__link"
                                        style="display: block; width: 100%"
                                        :to="'/news/category/' + slide.id"
                                        ><picture>
                                            <img
                                                class="ml__img ml__img--slider"
                                                :src="slide.thumbnail"
                                                :alt="slide.title" /></picture
                                    ></nuxt-link>
                                    <div
                                        class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"
                                    >
                                        <span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span
                                        ><span class="swiper-pagination-bullet"></span
                                        ><span class="swiper-pagination-bullet"></span>
                                    </div>
                                    <h3 class="ml-item__headline h2">
                                        <nuxt-link class="ml__link ml__link--dark" :to="'/news/category/' + slide.id">
                                            {{ slide.title }}</nuxt-link
                                        >
                                    </h3>
                                    <p>
                                        {{ slide.excerpt }}
                                        <nuxt-link class="ml__link ml__link--brand" :to="'/news/category/' + slide.id"
                                            >Read more »</nuxt-link
                                        >
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ml-sidebar">
                <NewsPost v-for="news in showNew" :key="news.id" :news="news" />
            </div>
        </div>
    </section>
</template>

<script>
import NewsPost from '@/components/News/NewsPost.vue'
export default {
    name: 'SlideNews',
    components: { NewsPost },
    props: {
        postNew: {
            type: Array,
            required: false,
        },
    },
    data() {
        return {
            options: {
                slidesPerView: '1',
                pagination: {
                    el: '.swiper-pagination',
                },
            },
        }
    },
    computed: {
        slides() {
            return this.postNew.filter((el, index) => index < 3)
        },
        showNew() {
            return this.postNew.filter((el, index) => index >= 3)
        },
    },
}
</script>

<style scoped></style>
