<template>
    <div class="sprd-header__main js-header-main">
        <div class="sprd-header__flex-wrapper container">
            <div id="burger-menu" class="sprd-header__menu-button d-lg-none js-header-menu-button">
                <div class="burger-menu">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            <nuxt-link class="sprd-header__logo" to="/">
                <!-- <img v-lazy-load :alt="$config.app.name" data-src="~assets/images/logo.svg" /> -->
                <img :alt="$config.app.name" src="~assets/images/2.png" />
            </nuxt-link>

            <ul class="sprd-header__main-links" role="menubar">
                <li>
                    <nuxt-link
                        ref="customLink"
                        class="sprd-header__link-cyo js-header-main-cyo head-link"
                        data-type="custom"
                        to="/custom"
                    >
                        <div class="title">
                            {{ $t('headers.shops.custom.name') }}
                        </div>

                        <div class="description">
                            {{ $t('headers.shops.custom.description') }}
                        </div>
                    </nuxt-link>
                </li>

                <li>
                    <nuxt-link
                        ref="shopLink"
                        class="sprd-header__link-mp js-header-main-mp head-link"
                        data-type="shop"
                        to="/shop"
                    >
                        <div class="title">
                            {{ $t('headers.shops.shop.name') }}
                        </div>

                        <div class="description">
                            {{ $t('headers.shops.shop.description') }}
                        </div>
                    </nuxt-link>
                </li>
            </ul>

            <Search />

            <client-only>
                <nuxt-link
                    id="wishlistButton"
                    :title="$t('headers.buttons.favorites')"
                    class="sprd-header__icon sprd-header__icon--wishlist"
                    to="/favorites"
                >
                    <div>
                        <svg class="icon icon--heart">
                            <use xlink:href="/global.svg#heart"></use>
                        </svg>

                        <span
                            id="wishlistCountText"
                            class="sprd-header__icon-counter"
                            :class="favoriteLength > 0 ? '' : 'd-none'"
                        >
                            {{ favoriteLength }}
                        </span>
                    </div>
                </nuxt-link>
            </client-only>

            <Cart />

            <MobileButtons />
        </div>
    </div>
</template>
<script>
import MobileButtons from '@/components/Layouts/Headers/Partials/MobileButtons.vue'
import Search from '@/components/Layouts/Headers/Partials/Search.vue'
import Cart from '@/components/Layouts/Headers/Partials/Cart.vue'

export default {
    name: 'HeaderMain',
    components: { Search, MobileButtons, Cart },
    data() {
        return {
            // setLocalStorage: this.$auth.$storage.setLocalStorage('items', this.itemsInCart),
        }
    },
    computed: {
        favoriteLength() {
            return this.$store.state.favorite.favorites.length
        },
    },
    watch: {},
    mounted() {
        // this.aaaa = this.$store.getters['favorite/favoriteLength']
    },
}
</script>
<style></style>
