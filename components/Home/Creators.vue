<template>
    <section class="homepage-creators">
        <div class="container text-center">
            <div class="row">
                <div class="col-12">
                    <h2 class="h1">Spread Your Influence from the Screen to the Street</h2>
                    <p>
                        Your free online merchandise shop. Create and sell custom
                        <nuxt-link to="#">music merch</nuxt-link> or
                        <nuxt-link to="#">YouTuber merch</nuxt-link>
                        to your audience.
                    </p>
                    <div class="partner-carousel">
                        <div
                            class="swiper-container js-slider-creators swiper-container-initialized swiper-container-horizontal swiper-container-android"
                        >
                            <div v-swiper:mySwiper="options">
                                <div class="swiper-wrapper">
                                    <div v-for="(shop, index) in shops" :key="index" class="swiper-slide">
                                        <nuxt-link to="#" target="_blank"
                                            ><img :src="shop.img_src" :alt="shop.name" /><span>
                                                {{ shop.name }}
                                            </span></nuxt-link
                                        >
                                    </div>
                                </div>

                                <div class="swiper-prev">
                                    <svg id="left" class="icon icon--right" viewBox="0 0 9.45 16.08">
                                        <title>left icon</title>
                                        <path
                                            d="M9.45 1.41L8.04 0 0 8.04l8.04 8.04 1.41-1.41-6.62-6.63 6.62-6.63z"
                                        ></path>
                                    </svg>
                                </div>
                                <div class="swiper-next">
                                    <svg id="right" class="icon icon--left" viewBox="0 0 9.45 16.08">
                                        <title>right icon</title>
                                        <path d="M1.41 0L0 1.41l6.63 6.63L0 14.67l1.41 1.41 8.04-8.04L1.41 0z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nuxt-link class="sprd-button light" to="#" rel="noopener" data-tracking="HP b2b button"
                        >Get Started Now</nuxt-link
                    >
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'Creators',
    // props: {
    //     items: {
    //         type: Array,
    //         required: true,
    //     },
    // },
    data() {
        return {
            options: {
                slidesPerView: '2',
                // loop: false,
                navigation: {
                    nextEl: '.swiper-next',
                    prevEl: '.swiper-prev',
                },
                breakpoints: {
                    480: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    650: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    850: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                    1280: {
                        slidesPerView: 6,
                        spaceBetween: 50,
                    },
                },
            },
            shops: [
                {
                    href: 'Miranda_Sings',
                    img_src: '/homepage/shopUser1.jpeg',
                    name: 'Miranda Sings',
                },
                {
                    href: '#',
                    img_src: '/homepage/shopUser2.jpeg',
                    name: 'Miranda Sings',
                },
                {
                    href: '#',
                    img_src: '/homepage/shopUser3.jpeg',
                    name: 'Miranda Sings',
                },
                {
                    href: '#',
                    img_src: '/homepage/shopUser4.jpeg',
                    name: 'Miranda Sings',
                },
                {
                    href: '#',
                    img_src: '/homepage/shopUser5.jpeg',
                    name: 'Miranda Sings',
                },
                {
                    href: '#',
                    img_src: '/homepage/shopUser6.jpeg',
                    name: 'Miranda Sings',
                },
                {
                    href: '#',
                    img_src: '/homepage/shopUser7.jpeg',
                    name: 'Miranda Sings',
                },
                {
                    href: '#',
                    img_src: '/homepage/shopUser1.jpeg',
                    name: 'Miranda Sings',
                },
                {
                    href: '#',
                    img_src: '/homepage/shopUser2.jpeg',
                    img_alt: 'Miranda Sings',
                    name: 'Miranda Sings',
                },
                {
                    href: '#',
                    img_src: '/homepage/shopUser3.jpeg',
                    name: 'Miranda Sings',
                },
                {
                    href: '#',
                    img_src: '/homepage/shopUser4.jpeg',
                    img_alt: 'Miranda Sings',
                    name: 'Miranda Sings',
                },
            ],
        }
    },
}
</script>
