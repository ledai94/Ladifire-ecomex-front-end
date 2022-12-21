<template>
    <div class="pdp-top container">
        <div class="pdp-top__header pdp-header">
            <div class="pdp-header__headline">
                <h2 class="pdp-header__pt-name headline h3">
                    {{ product.name }}
                </h2>

                <Rating v-if="product.rating" :product="product" />
            </div>

            <div v-if="product.design" class="pdp-header__subline">
                <h1 class="pdp-header__design-title">
                    {{ product.design.name }}
                </h1>

                <div v-if="product.design.user" class="pdp-header__designer-link">
                    <span class="pdp-header__by">by </span>

                    <span class="pdp-header__designer">
                        {{ product.design.user.name || product.design.user.email }}
                    </span>
                </div>
            </div>
        </div>

        <Thumbnail v-bind="{ product, currentAppearanceId, images }" />
        <Preview v-bind="{ product, currentAppearanceId, images }" />

        <div class="pdp-top__price price-info">
            <div class="bold price-info__value">
                <div class="price__wrap">
                    <div class="price__now-price">
                        <span>{{ $t('general.price', [product.price.vat_included]) }}</span>
                    </div>
                </div>
            </div>
        </div>

        <Colors v-bind="{ product, currentAppearance }" />
        <Sizes v-bind="{ product }" />

        <div class="pdp-top__size-hint size-hint small-font">
            <div class="size-fit bold">
                {{ product.size_fit_hint }}
            </div>

            <a class="link" href="#size-table">
                {{ $t('detail.sizeTable') }}
            </a>
        </div>

        <!--TODO: Missing Actions-->
        <AddToCart :product-in-cart="productInCart" v-bind="{ currentAppearanceId }"></AddToCart>

        <div v-if="product.design" class="pdp-top__transformer">
            <nuxt-link class="transformer-button" :to="urlProduct" style="display: block">
                <svg class="icon icon--pencil">
                    <use xlink:href="/global.svg#pencil" />
                </svg>

                <span>{{ $t('detail.buttons.customize') }}</span>
            </nuxt-link>
        </div>

        <div class="pdp-top__buttons pdp-buttons small-font full-width">
            <button :title="$t('detail.buttons.share')" class="default small share button" @click="showShareModal">
                <svg class="button-icon button-icon--share">
                    <use xlink:href="/global.svg#share" />
                </svg>

                <span>{{ $t('detail.buttons.share') }}</span>
            </button>

            <button
                :title="$t('detail.buttons.favourites')"
                class="button default small favorite"
                @click.prevent="toggleFavorite(product)"
            >
                <svg class="button-icon button-icon--heart" :class="{ 'd-none': isFavorite }">
                    <use xlink:href="/global.svg#heart"></use>
                </svg>

                <svg class="button-icon button-icon--heart-filled" :class="{ 'd-none': !isFavorite }">
                    <use xlink:href="/mp.svg#heart-filled"></use>
                </svg>

                <span>{{ isFavorite ? $t('detail.buttons.favorited') : $t('detail.buttons.favourites') }}</span>
            </button>
        </div>

        <div class="pdp-top__delivery delivery-info tiny-font">
            <div class="delivery-info__label bold">
                {{ $t('detail.shipping') }}
            </div>

            <svg class="icon icon--truck">
                <use xlink:href="/global.svg#truck" />
            </svg>

            <div class="delivery-info__date link">Standard Nov.&nbsp;13 - Nov.&nbsp;23</div>
        </div>
    </div>
</template>

<script>
import AddToCart from '@/components/ShopDetail/Info/AddToCart.vue'
import Colors from '@/components/ShopDetail/Info/Colors'
import Preview from '@/components/ShopDetail/Info/Preview'
import Sizes from '@/components/ShopDetail/Info/Sizes'
import Thumbnail from '@/components/ShopDetail/Info/Thumbnail'
import Rating from '@/components/ShopDetail/Rating'

export default {
    name: 'Info',
    components: { Sizes, Colors, Preview, Thumbnail, Rating, AddToCart },
    props: {
        product: {
            type: Object,
            required: true,
        },
    },
    data(props) {
        const productInCart = props.product
        return {
            productInCart,
            isSize: null,
            visible: false,
            // isFavorite: false,
        }
    },
    computed: {
        shop() {
            return this.$route.params.shop
        },
        department() {
            return this.$route.params.category
        },
        category() {
            return this.$route.params.type
        },
        images() {
            return this.product.images.filter((img) => img.appearance_id == this.currentAppearanceId)
        },
        currentAppearance() {
            return this.product.appearances.find((ap) => ap.id == this.currentAppearanceId)
        },
        currentAppearanceId() {
            let appearance = this.$route.query.appearance

            if (!appearance) {
                appearance = this.product.default_values.appearance
            }

            return appearance
        },
        urlProduct() {
            return (
                '/create-your-own' +
                '/?customize_id=' +
                (this.product.customize_id || this.product.id) +
                '&appearance_id=' +
                (this.currentAppearanceId ? this.currentAppearanceId : this.product.default_values.appearance)
            )
        },
        isFavorite() {
            return this.$store.getters['favorite/exists'](
                this.product,
                this.currentAppearanceId ? this.currentAppearanceId : this.product.default_values.appearance
            )
        },
    },
    methods: {
        showShareModal() {
            this.$nuxt.$emit('product-url', this.urlProduct)
            this.$share.show()
        },
        toggleFavorite(product) {
            this.isFavorite = !this.isFavorite
            this.$store.dispatch('favorite/toggle', [
                product,
                this.currentAppearanceId,
                this.$route.params.shop,
                this.$route.params.category,
                this.$route.params.type,
            ])
        },
    },
}
</script>

<style scoped>
html {
    scroll-behavior: smooth;
}
</style>
