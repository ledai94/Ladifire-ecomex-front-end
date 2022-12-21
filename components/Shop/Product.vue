<template>
    <div class="en1t2qb0" :class="{ 'css-12ahr2y': shop == 'shop' || shop == 'custom' }" style="width: 70%">
        <div
            class="e12z4h0610 css-17mjrw7"
            @mouseover="viewMode == 'design' ? hover(true) : ''"
            @mouseleave="viewMode == 'design' ? hover(false) : ''"
        >
            <div class="css-1ipf0s3 e12z4h060" style="position: relative">
                <nuxt-link :to="shop == 'custom' ? designUrl : productUrl">
                    <img
                        :alt="favorite ? product.product.name : product.name"
                        :src="isHover ? imageHover : productImage"
                        class="css-23gpdb e1rqwfbh0"
                        height="300"
                        width="300"
                    />
                </nuxt-link>
                <button
                    v-if="!favorite"
                    class="article-btn"
                    :class="{
                        active: $store.getters['favorite/exists'](
                            product,
                            selectedAppearance ? selectedAppearance.id : product.default_values.appearance
                        ),
                    }"
                    @click.prevent="toggleFavorite(product)"
                >
                    <svg class="article-btn__icon article-btn__icon--heart">
                        <use xlink:href="/global.svg#heart"></use></svg
                    ><svg class="article-btn__icon article-btn__icon--heart-filled">
                        <use xlink:href="/mp.svg#heart-filled"></use>
                    </svg>
                </button>
                <div v-else class="article-btn" style="margin: 0.25rem" @click="deleteFavorite(product)">
                    <svg class="article-btn__icon article-btn__icon--x">
                        <use xlink:href="/global.svg#x"></use>
                    </svg>
                </div>
            </div>

            <div class="css-hq1ctj e12z4h061">
                <div class="css-1dnvzty en1t2qb0">
                    <span class="css-4t9wa4 ezfpgcm0">
                        <nuxt-link :to="shop == 'custom' ? designUrl : productUrl">
                            {{ favorite ? product.product.name : product.name }}
                        </nuxt-link>
                    </span>

                    <div v-if="shop != 'design'" class="css-0 en1t2qb0">
                        <span class="css-ntvznv fz-big ezfpgcm0">
                            {{
                                $t('general.price', [
                                    favorite ? product.product.price.vat_included : product.price.vat_included,
                                ])
                            }}
                        </span>
                    </div>

                    <div v-if="!favorite" class="css-dxvynx" :class="{ e12z4h062: viewMode === 'product' }">
                        <div class="css-1i5uka2 e12z4h064">
                            <ul class="css-ozubnb en1t2qb0">
                                <li
                                    v-for="appearance in product.appearances"
                                    :key="appearance.id"
                                    class="css-2rlxtj en1t2qb0"
                                >
                                    <button
                                        :title="appearance.name"
                                        class="css-iw3d6o e1bjfd7j2"
                                        @click="selectedAppearance = appearance"
                                    >
                                        <span :style="appearanceStyles(appearance)" class="css-1chvsc e1bjfd7j0" />
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div v-if="shop != 'design'" class="css-8xl60i en1t2qb0">
                    <ProductRating
                        v-if="product.rating"
                        :class-name="['css-70qvj9', 'en1t2qb0']"
                        :count-class="['css-ntvznv', 'ezfpgcm0']"
                        :product="product"
                    />
                </div>

                <div v-if="shop == 'shop' || shop == 'custom'" class="css-ohwg9z e12z4h065">
                    <div class="css-1ny2wnk e12z4h066">
                        <div v-if="shop == 'custom'" class="css-1rztl7a en1t2qb0">
                            <nuxt-link :to="productUrl" class="css-1yuqoyg e1855x531"
                                ><span class="css-18biwo en1t2qb0"
                                    ><span class="css-rzr0o5 ezfpgcm0">Product details&nbsp;</span
                                    ><svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 32 32"
                                        width=".75rem"
                                        height=".75rem"
                                        fill="currentColor"
                                    >
                                        <path
                                            d="M9.46 31.9L25.36 16 9.46.1 6.64 2.93 19.7 16 6.64 29.07l2.82 2.83z"
                                        ></path></svg></span
                            ></nuxt-link>
                        </div>

                        <div @click="$emit('setsize', product)">
                            <nuxt-link class="css-pnnvkq e1553w8p2" :to="shop == 'custom' ? designUrl : ''">
                                <svg
                                    v-if="shop == 'shop'"
                                    id="d-sP"
                                    class="button-icon button-icon--cart"
                                    style="margin-right: 0.5rem; fill: #fff !important"
                                >
                                    <use id="d-uD" xlink:href="/global.svg#cart"></use>
                                </svg>
                                {{ actionLabel }}
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProductRating from '@/components/Shop/ProductRating'
import { getAppearanceStyles } from '@/utils.js'

export default {
    name: 'ShopProduct',
    components: { ProductRating },
    props: {
        shop: {
            type: String,
            required: true,
        },
        favorite: {
            type: Boolean,
            required: false,
            default: false,
        },
        product: {
            type: Object,
            required: true,
        },
        viewMode: {
            type: String,
            required: false,
            default: () => {},
        },
    },
    data() {
        return {
            selectedAppearance: null,
            image: null,
            isHover: false,
            imageHover: null,
            urlDesigns: process.env.DESIGN_BASE_URL,
            // activeFavorite: false,
        }
    },
    computed: {
        actionLabel() {
            return this.shop == 'custom' ? this.$t('product.actions.create') : this.$t('product.actions.AddToCart')
        },
        productUrl() {
            if (this.favorite) {
                const urlFavorite = [
                    this.shop,
                    this.product.department_id,
                    this.product.category_id,
                    this.$appRoute(
                        this.product.product.customize_id || this.product.product.id,
                        this.product.product.slug
                    ),
                ]

                const appearance = this.$appRouted(this.product.color, 'appearance')
                return '/' + urlFavorite.join('/') + '?' + appearance
            }
            const url = [
                this.shop,
                this.product.type.department_id,
                this.product.type.category_id,
                this.$appRoute(this.product.customize_id || this.product.id, this.product.slug),
            ]

            if (this.selectedAppearance) {
                const appearance = this.$appRouted(this.selectedAppearance.id, 'appearance')
                return '/' + url.join('/') + '?' + appearance
            }
            return '/' + url.join('/')
        },
        productImage() {
            if (this.viewMode === 'design' && this.product.design && this.product.design.images) {
                const appearance = this.selectedAppearance
                    ? this.selectedAppearance.id
                    : this.product.default_image.appearance_id

                const images = this.product.design.images.find((i) => i.appearance_id == appearance)
                const image = images.image

                if (image) {
                    return image + '?width=378&height=378'
                }
            } else {
                if (this.selectedAppearance) {
                    const image = this.product.images.find((image) => image.appearance_id == this.selectedAppearance.id)

                    if (image) {
                        return image.media.url + '?width=378&height=378'
                    }
                }

                if (this.product.default_image) {
                    const productImg = this.product.default_image.media.url

                    if (productImg) {
                        return productImg + '?width=378&height=378'
                    }
                }
                if (this.product.color) {
                    const image = this.product.product.images.find((image) => image.appearance_id == this.product.color)

                    if (image) {
                        return image.media.url + '?width=378&height=378'
                    }
                }
            }

            return '/default-image.webp'
        },
        designUrl() {
            return (
                '/create-your-own' +
                '/?product_id=' +
                this.product.id +
                '&appearance_id=' +
                (this.selectedAppearance ? this.selectedAppearance.id : this.product.default_values.appearance)
            )
        },
    },
    created() {
        this.$nuxt.$on('change-view', (par) => {
            this.changeView = par
        })
    },
    methods: {
        deleteFavorite(favorite) {
            this.$store.dispatch('favorite/toggle', [
                favorite.product,
                favorite.color,
                favorite.shop,
                favorite.department_id,
                favorite.category_id,
            ])
        },
        toggleFavorite(product) {
            this.$store.dispatch('favorite/toggle', [
                product,
                this.selectedAppearance ? this.selectedAppearance.id : product.default_values.appearance,
                this.$route.params.shop,
                product.type.department_id,
                product.type.category_id,
            ])
        },
        hover(par) {
            if (this.viewMode === 'design' && par === false) {
                this.isHover = false
                const appearance = this.selectedAppearance
                    ? this.selectedAppearance.id
                    : this.product.default_image.appearance_id

                const images = this.product.design.images.find((i) => i.appearance_id == appearance)
                const image = images.image

                if (image) {
                    this.imageHover = image
                }
            } else {
                this.isHover = true
                if (this.selectedAppearance) {
                    const image = this.product.images.find((image) => image.appearance_id == this.selectedAppearance.id)

                    if (image) {
                        this.imageHover = image.media.url
                    }
                }

                if (this.product.default_image) {
                    const productImg = this.product.default_image.media.url

                    if (productImg) {
                        this.imageHover = productImg
                    }
                }
            }

            // this.imageHover = '/default-image.webp'
        },
        appearanceStyles(appearance) {
            return getAppearanceStyles(appearance)
        },
    },
}
</script>

<style lang="scss">
.fz-big {
    font-size: 0.9rem !important;
    font-weight: 700;
    white-space: nowrap;
}
@media screen and (min-width: 1280px) {
    .css-e87cl3 {
        width: 70% !important;
    }
}
</style>
