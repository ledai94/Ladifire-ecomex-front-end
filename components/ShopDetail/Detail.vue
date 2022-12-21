<template>
    <div class="pdp__details container">
        <DesignOnOtherProduct v-if="false" :design="product.design" />

        <USP />

        <div :class="['accordion__section', { open: detailPanel }]">
            <div class="accordion__head" @click="detailPanel = !detailPanel">
                <h2 class="accordion__title h3">
                    {{ $t('detail.label') }}
                </h2>

                <div class="accordion__label"></div>

                <button class="accordion__btn">
                    <svg class="accordion__icon accordion__icon--plus">
                        <use xlink:href="/global.svg#plus" />
                    </svg>

                    <svg class="accordion__icon accordion__icon--minus">
                        <use xlink:href="/global.svg#minus" />
                    </svg>
                </button>
            </div>

            <div class="accordion__content pt-details">
                <div class="pt-details__info">
                    <h4 class="h4">
                        {{ product.name }}
                    </h4>

                    <div class="pt-details__txt" v-html="product.description" />
                </div>

                <USP class-name="pt-details__usp" />
            </div>
        </div>

        <div v-if="sizePanelVisible" id="size-table" :class="['accordion__section', { open: sizePanel }]">
            <div class="accordion__head" @click="sizePanel = !sizePanel">
                <h2 class="accordion__title h3">
                    {{ $t('detail.sizeTable') }}
                </h2>

                <div class="accordion__label"></div>

                <button class="accordion__btn">
                    <svg class="accordion__icon accordion__icon--plus">
                        <use xlink:href="/global.svg#plus" />
                    </svg>

                    <svg class="accordion__icon accordion__icon--minus">
                        <use xlink:href="/global.svg#minus"></use>
                    </svg>
                </button>
            </div>

            <div class="accordion__content size">
                <div class="size__details">
                    <div class="size-hint">
                        {{ $t('detail.fit') }}

                        <div class="size-fit bold">
                            {{ product.size_fit_hint }}
                        </div>
                    </div>

                    <div class="size__tip">
                        <span class="bold">{{ $t('detail.sizeTip.title') }}</span>
                        <span>{{ $t('detail.sizeTip.description') }}</span>
                    </div>

                    <div class="size__dimensions">
                        <div class="size__img-wrap">
                            <div class="size__img">
                                <div class="square-size">
                                    <img :alt="$t('detail.sizeTable')" :src="product.size_img.url" />
                                </div>
                            </div>

                            <div class="size__caption small-font">
                                <div v-for="(th, index) in tableHead" :key="index">
                                    {{ th }} – {{ $t('detail.measureHint') }}
                                </div>
                            </div>
                        </div>

                        <div class="size__table-wrap">
                            <table class="size__table">
                                <tbody>
                                    <tr>
                                        <th>{{ $t('detail.size') }}</th>
                                        <th v-for="(th, index) in tableHead" :key="index">{{ th }}</th>
                                    </tr>

                                    <tr
                                        v-for="size in product.sizes"
                                        :key="size.id"
                                        :class="currentSizeId == size.id ? 'active highlight' : ''"
                                        @click="currentSizeId = size.id"
                                    >
                                        <td>
                                            <div>{{ size.name }}</div>
                                        </td>

                                        <td v-for="measure in size.measures" :key="measure.name">
                                            {{ getUnit(measure.value.value, measure.value.unit) }}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Reviews v-bind="{ product, comments }" />
        <DesignDetail v-if="product.design" :design="product.design" />

        <!-- Customers also liked -->
        <div id="d-dFY" class="pdp__slider-wrapper">
            <h4 id="d-hB" class="h4">
                {{ $t('detail.title_liked') }}
            </h4>

            <Slider :isliked="'liked'" :liked="productDetails" />
        </div>
    </div>
</template>

<script>
import DesignDetail from '@/components/ShopDetail/Detail/DesignDetail.vue'
import DesignOnOtherProduct from '@/components/ShopDetail/Detail/DesignOnOtherProduct.vue'
import USP from '@/components/ShopDetail/Detail/USP'
import Reviews from '@/components/ShopDetail/Info/Reviews.vue'
import Slider from '@/components/ShopDetail/Slider.vue'
import Qty from 'js-quantities'
import { map } from 'lodash/collection'

export default {
    name: 'Detail',
    components: { Reviews, DesignDetail, DesignOnOtherProduct, USP, Slider },
    props: {
        product: {
            type: Object,
            required: true,
        },
        productDetails: {
            type: Array,
            required: false,
            default: () => [],
        },
        reviews: {
            type: Object,
            required: false,
            default: () => {},
        },
    },
    data() {
        return {
            detailPanel: true,
            sizePanel: false,
        }
    },
    computed: {
        sizePanelVisible() {
            return this.product.sizes && this.product.size_img && this.product.size_fit_hint
        },
        tableHead() {
            return map(this.product.sizes[0].measures, 'name')
        },
        currentSizeId: {
            get() {
                return this.$route.query.size
            },
            set(value) {
                if (this.currentSizeId == value) {
                    return
                }

                this.$router.push({ query: { ...this.$route.query, size: value } })
            },
        },
        comments() {
            const data = this.reviews.reviews.data

            const lengthVeryBad = this.reviews.lengthStar[1] || 0
            const lengthBad = this.reviews.lengthStar[2] || 0
            const lengthGood = this.reviews.lengthStar[3] || 0
            const lengthVeryGood = this.reviews.lengthStar[4] || 0
            const lengthGreat = this.reviews.lengthStar[5] || 0

            const lengthComment = lengthVeryBad + lengthBad + lengthGood + lengthVeryGood + lengthGreat

            const links = {
                first_page_url: this.reviews.reviews.first_page_url,
                last_page_url: this.reviews.reviews.last_page_url,
                next_page_url: this.reviews.reviews.next_page_url,
                prev_page_url: this.reviews.reviews.prev_page_url,
            }
            const meta = {
                current_page: this.reviews.reviews.current_page,
                from: this.reviews.reviews.from,
                last_page: this.reviews.reviews.last_page,
                links: this.reviews.reviews.links,
                path: this.reviews.reviews.path,
                per_page: this.reviews.reviews.per_page,
                to: this.reviews.reviews.to,
                total: this.reviews.reviews.total,
            }
            return {
                data,
                links,
                meta,
                lengthComment,
                lengthVeryBad,
                lengthBad,
                lengthGood,
                lengthVeryGood,
                lengthGreat,
            }
        },
    },
    watch: {
        '$route.hash'(value) {
            if (value == '#size-table') {
                this.sizePanel = true
            }
        },
    },
    methods: {
        getUnit(value, unit) {
            return Qty(value, unit).to(this.$t('general.unit')).toPrec(0.1)
        },
    },
}
</script>

<style>
.size {
    display: block !important;
}
</style>
