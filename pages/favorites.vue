<template>
    <div id="sprd-favorites" class="favorites container">
        <div class="favorites-list">
            <h2 class="h2">My favorites</h2>
            <div class="favorites-list__buttons">
                <!--<button class="favorites-list__share">-->
                <!--    <svg class="favorites-list__share__icon favorites-list__share__icon&#45;&#45;share">-->
                <!--        <use xlink:href="/global.svg#share"></use></svg-->
                <!--    ><span class="favorites-list__share__text">Share favorites</span>-->
                <!--</button>-->
                <div class="favorites-list__sort">
                    <svg class="favorites-list__sort__icon favorites-list__sort__icon--sort">
                        <use xlink:href="/mp.svg#sort"></use></svg
                    ><span>Sort by</span>
                </div>
            </div>
            <div class="row no-gutters">
                <div class="col-6 col-md-3"></div>
            </div>
            <div class="favorites-list__unavailable">
                <div class="css-efgamt en1t2qb0">
                    <ShopProduct
                        v-for="(favorite, index) in favorites"
                        :key="index"
                        :product="favorite"
                        :shop="'shop'"
                        :name="name"
                        :favorite="true"
                        @setsize="handleSetsize"
                    />
                </div>
            </div>
        </div>
        <div class="recommendations" :class="favorite ? 'd-none' : ''">
            <h4 class="h4">You may also like these</h4>
            <div id="favorite-recommendations-slider" class="slider slider--horizontal slider--articles thumb-font">
                <div class="slider__items"></div>
                <div class="slider__btn prev d-none">
                    <svg class="slider__arrow slider__arrow--left">
                        <use xlink:href="/global.svg#left"></use>
                    </svg>
                </div>
                <div class="slider__btn next d-none">
                    <svg class="slider__arrow slider__arrow--right">
                        <use xlink:href="/global.svg#right"></use>
                    </svg>
                </div>
            </div>
        </div>
    </div>
    <!--    <div id="edit-view" class="Wrapper productDetails sprd-responsive-cnt d-none"></div>-->
</template>

<script>
// import ProductFavorite from '@/components/Favorites/ProductFavorite.vue'
import ShopProduct from '@/components/Shop/Product.vue'
export default {
    components: { ShopProduct },
    data() {
        return {}
    },
    computed: {
        favorites() {
            return this.$store.state.favorite.favorites
        },
    },
    methods: {
        handleSetsize(favorite) {
            this.setsizeId = favorite.product.id
            this.$store.dispatch('getsize/setProduct', {})
            this.$store.dispatch('getsize/setProduct', favorite.product)
            this.$setsize.show('setsize-product')
        },
    },
}
</script>
<style lang="scss">
@import '~assets/sass/favorites.scss';
@import '~assets/sass/shop_emotion.scss';
</style>
