<template>
    <client-only>
        <div class="stage">
            <div :class="['window-manager', { 'modal-active': loading }]">
                <div class="NA">
                    <div id="footer-push">
                        <CheckoutHeader />

                        <div id="wrapper" name="main" class="wrapper" role="main">
                            <Nuxt />
                        </div>
                    </div>

                    <CheckoutFooter />
                </div>

                <div v-if="loading" class="modal modal-container">
                    <div class="modal-backdrop back-drop" />

                    <div class="dialog-container">
                        <div id="loader" tabindex="-1" class="dialog normal modal window">
                            <div class="modal-header">
                                <div name="header">
                                    <h3></h3>
                                </div>
                            </div>

                            <div name="body" class="modal-body">
                                {{ $t('checkout.actions.loading') }}
                            </div>

                            <div name="footer" class="modal-footer"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </client-only>
</template>

<script>
import CheckoutFooter from '@/components/Checkout/Footer'
import CheckoutHeader from '@/components/Checkout/Header'

export default {
    name: 'Cart',
    components: { CheckoutHeader, CheckoutFooter },
    head() {
        return {
            htmlAttrs: {
                class: 'fixed-supported js flexbox',
            },
        }
    },
    computed: {
        loading() {
            return this.$store.state.carts.loading
        },
    },
}
</script>

<style lang="scss">
@import '~assets/checkout/css/checkout.min.css';
</style>
