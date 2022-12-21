<template>
    <div class="pdp-top__view">
        <client-only>
            <swiper :options="swiper" class="slider pdp-view-slider only-small">
                <swiper-slide
                    v-for="(img, index) in images"
                    :key="index"
                    :class="{ selected: img.view_id == currentViewId }"
                >
                    <viewer :options="zoomOptions" class="square-size">
                        <img
                            :alt="product.name"
                            :data-source="img.media.url + '?width=550&height=550'"
                            :src="img.media.url + '?width=550&height=550'"
                        />
                    </viewer>
                </swiper-slide>

                <div slot="pagination" class="slider__pagination" />
            </swiper>
        </client-only>

        <div class="pdp-view-image zoomable only-large">
            <viewer :options="zoomOptions">
                <img :alt="product.name" :data-source="image" :src="image" />
            </viewer>
        </div>
    </div>
</template>

<script>
import Viewer from 'v-viewer/src/component.vue'
import 'viewerjs/dist/viewer.css'

export default {
    name: 'Preview',
    components: { Viewer },
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
                slidesPerView: 'auto',
                threshold: 5,
                observer: true,
                containerModifierClass: 'slider--',
                wrapperClass: 'slider__items',
                slideClass: 'slider__item',
                slidePrevClass: 'prev',
                slideNextClass: 'next',
                slideDuplicateClass: 'duplicate',
                slideDuplicatePrevClass: 'duplicate-next',
                slideDuplicateNextClass: 'duplicate-prev',
                slideDuplicateActiveClass: 'duplicate-active',
                pagination: {
                    el: '.slider__pagination',
                    type: 'bullets',
                    bulletElement: 'div',
                    clickable: true,
                    bulletClass: 'slider__bullet',
                    bulletActiveClass: 'active',
                    modifierClass: 'slider__pagination--',
                    clickableClass: 'slider__pagination--clickable',
                },
            },
            zoomOptions: {
                navbar: false,
                title: false,
                scalable: false,
                url: 'data-source',
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
        image() {
            const image = this.product.images.find((img) => {
                return img.appearance_id == this.currentAppearanceId && img.view_id == this.currentViewId
            })

            return image ? image.media.url + '?width=550&height=650' : '/default-image.webp'
        },
    },
}
</script>

<style>
.swiper-container {
    margin: 0 !important;
}

.pdp-view-slider {
    margin: 0 -0.75rem 1rem !important;
}
</style>
