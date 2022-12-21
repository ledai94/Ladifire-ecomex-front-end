<template>
    <div
        id="recommended-products-slider"
        class="swiper-container swiper-container-initialized swiper-container-horizontal"
    >
        <div id="d-dFZ" v-swiper:mySwiper="options" class="slider__items">
            <div class="swiper-wrapper">
                <div v-for="item in liked" :key="item.id" class="swiper-slide">
                    <LikedProduct :product="item" :shop="isliked" />
                </div>
            </div>
            <!--                <div class="swiper-prev swiper">-->
            <!--                    <svg class="icon icon&#45;&#45;left"><use xlink:href="/global.svg#left"></use></svg>-->
            <!--                </div>-->
            <!--                <div class="swiper-next swiper">-->
            <!--                    <svg class="icon icon&#45;&#45;right"><use xlink:href="/global.svg#right"></use></svg>-->
            <!--                </div>-->
        </div>
    </div>
</template>
<script>
import LikedProduct from '@/components/Shop/Product.vue'
export default {
    components: { LikedProduct },
    props: {
        liked: {
            type: Array,
            required: true,
        },
        isliked: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            options: {
                slidesPerView: '1',
                // spaceBetween: 20,
                // loop: false,
                navigation: {
                    nextEl: '.swiper-next',
                    prevEl: '.swiper-prev',
                },
                breakpoints: {
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    650: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    850: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    1280: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    },
                },
            },
        }
    },
}
</script>
<style type="scss">
.swiper {
    background: #00b2a5;
    display: inline-block;
    border-radius: 3px;
    opacity: 0.7;
    text-align: center;
    font-size: 130%;
    font-weight: 700;
    color: #fff;
    border: 1px solid #009487;
    box-shadow: none;
    width: 30px;
    height: 42px;
    line-height: 40px;
    position: absolute;
    cursor: pointer;
    top: 33%;
    z-index: 10;
}
.swiper-prev {
    left: -5px;
}
.swiper-next {
    right: -5px;
}
</style>
