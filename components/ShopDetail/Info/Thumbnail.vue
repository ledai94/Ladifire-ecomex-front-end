<template>
    <div class="pdp-top__thumbnails only-large">
        <client-only>
            <swiper
                :options="swiper"
                class="slider slider--small-arrows thumbnail-slider only-large"
                @click-slide="handleClickSlide"
            >
                <swiper-slide
                    v-for="image in images"
                    :key="image.media.id"
                    :class="['square-size', { selected: image.view_id == currentViewId }]"
                >
                    <img :alt="product.name" :src="image.media.url + '?width=120&height=120'" />
                </swiper-slide>

                <div class="slider__btn prev">
                    <svg class="slider__arrow slider__arrow--up">
                        <use xlink:href="/global.svg#up" />
                    </svg>
                </div>

                <div class="slider__btn next">
                    <svg class="slider__arrow slider__arrow--down">
                        <use xlink:href="/global.svg#down" />
                    </svg>
                </div>
            </swiper>
        </client-only>
    </div>
</template>

<script>
export default {
    name: 'Thumbnail',
    props: {
        currentAppearanceId: {
            type: [Number, String],
            required: true,
        },
        product: {
            type: Object,
            required: true,
        },
        images: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            swiper: {
                containerModifierClass: 'slider--',
                wrapperClass: 'slider__items',
                slideClass: 'slider__item',
                slidePrevClass: 'prev',
                slideNextClass: 'next',
                slideDuplicateClass: 'duplicate',
                slideDuplicatePrevClass: 'duplicate-next',
                slideDuplicateNextClass: 'duplicate-prev',
                slideDuplicateActiveClass: 'duplicate-active',
                observer: true,
                threshold: 5,
                direction: 'vertical',
                slidesPerView: 'auto',
                navigation: {
                    disabledClass: 'd-none',
                    hiddenClass: 'd-none',
                    prevEl: '.slider__btn.prev',
                    nextEl: '.slider__btn.next',
                },
            },
        }
    },
    computed: {
        currentViewId: {
            get() {
                let view = this.$route.query.view

                if (!view) {
                    view = this.product.default_values.view
                }

                return view
            },
            set(value) {
                if (this.currentViewId == value) {
                    return
                }

                this.$router.push({ query: { ...this.$route.query, view: value } })
            },
        },
    },
    methods: {
        handleClickSlide(index) {
            this.currentViewId = this.images[index].view_id
        },
    },
}
</script>
