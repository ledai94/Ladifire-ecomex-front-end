<template>
    <div>
        <div id="sprd-main" class="white-bg SprdMain header-spacing">
            <Header :navbar="navbar" />

            <div id="sprd-content" class="Wrapper productDetails extra-menu has-promo" tabindex="-1">
                <Nuxt />
            </div>

            <Footer :items="footer" />

            <Dialog name="addedToCart" :title="$t('messages.addedToCart')" checkmark>
                <template #buttons>
                    <div class="button pattern cta" @click="goToCheckout">
                        {{ $t('actions.checkout') }}
                    </div>

                    <div class="button pattern" @click="hideCartDialog">
                        {{ $t('actions.continueShopping') }}
                    </div>
                </template>
            </Dialog>
            <Share />

            <client-only>
                <portal-target multiple name="modals" />
                <portal-target multiple name="dialogs" />
            </client-only>

            <Login />
            <Setsize name="setsize-product" @action="addToCart"> set size </Setsize>
        </div>
    </div>
</template>

<script>
import Footer from '@/components/Layouts/Footer.vue'
import Header from '@/components/Layouts/Header.vue'
import { getFooter, getNavbar } from '~/api/navigation'

export default {
    components: { Footer, Header },
    scrollTop: true,
    data() {
        return {
            navbar: {},
            footer: {},
        }
    },
    async fetch() {
        this.navbar = await getNavbar(this.$axios)
        this.footer = await getFooter(this.$axios)
    },
    fetchOnServer: true,
    computed: {
        addedToCartState() {
            return this.$store.state.carts.showAddedDialog
        },
    },
    watch: {
        $route() {
            this.setPageCode()

            if (document) {
                document.body.scrollTop = 0
                document.documentElement.scrollTop = 0
            }
        },
        addedToCartState(state) {
            console.log('cart dialog', state)

            if (state) {
                this.$dialog.show('addedToCart')
            } else {
                this.$dialog.hide('addedToCart')
            }
        },
    },
    created() {
        this.setPageCode()
    },
    methods: {
        hideCartDialog() {
            this.$store.commit('carts/HIDE_ADDED_DIALOG')
        },
        goToCheckout() {
            this.hideCartDialog()
            window.location.href = '/cart/checkout'
        },
        setPageCode() {
            let code = 'GENERAL'
            const shop = this.$route.params.shop

            if (shop === 'custom') {
                code = 'CYO'
            } else if (shop === 'shop') {
                code = 'MP'
            }

            if (this.$route.path === '/design') {
                code = 'EDIT'
            }

            this.$store.commit('page/setCode', code)
        },
    },
}
</script>

<style lang="scss">
@import '~assets/sass/main.scss';
@import '~assets/sass/header.scss';
@import '~assets/sass/footer.scss';

.sprd-footer {
    position: relative !important;
}
</style>
