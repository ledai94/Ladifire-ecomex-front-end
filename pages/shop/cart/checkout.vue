<template>
    <div>
        <div class="checkout-options cf">
            <a class="back-btn" href="/" target="_top">
                {{ $t('checkout.actions.back') }}
            </a>
        </div>

        <div class="flexbox-container">
            <div id="basket" class="order-overview">
                <div class="component-loader">
                    <div :class="['order', { updating: loading }]" name="basket-window">
                        <CheckoutCoupon />

                        <CheckoutPriceInfo :prices="prices" />

                        <CheckoutListItem :prices="prices" />
                    </div>
                </div>
            </div>

            <div id="checkout">
                <div id="zoom-container" />

                <div v-if="errors.length > 0" class="alert">
                    <ul>
                        <li v-for="(error, index) in errors" :key="index">
                            {{ error }}
                        </li>
                    </ul>
                </div>

                <div id="checkout-tab">
                    <form class="active ecomex-checkout" name="ecomex" @submit.prevent="checkout">
                        <CheckoutTabInfo :active="activeTab === 'info'" />

                        <CheckoutPaymentMethod />

                        <CheckoutReviewOrder :prices="prices" />
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Frag from 'vue-frag'
import { mapState } from 'vuex'
import { checkout, costs } from '~/api/cart'
import CheckoutCoupon from '~/components/Checkout/Coupon'
import CheckoutListItem from '~/components/Checkout/ListItem'
import CheckoutPriceInfo from '~/components/Checkout/PriceInfo'
import CheckoutTabInfo from '~/components/Checkout/Tabs/Info'
import CheckoutPaymentMethod from '~/components/Checkout/Tabs/PaymentMethod'
import CheckoutReviewOrder from '~/components/Checkout/Tabs/ReviewOrder'

export default {
    name: 'CartCheckout',
    components: {
        CheckoutReviewOrder,
        CheckoutPaymentMethod,
        CheckoutTabInfo,
        CheckoutListItem,
        CheckoutPriceInfo,
        CheckoutCoupon,
    },
    directives: { Frag },
    layout: 'cart',
    data() {
        return {
            loading: false,
            activeTab: 'info',
            prices: {
                subtotal: 0,
                shipping: 0,
                coupon: 0,
                tax: 0,
                total: 0,
                detail: {},
            },
        }
    },
    computed: {
        ...mapState('carts', {
            items: (state) => state.items,
            errors: (state) => state.errors,
            address: (state) => state.address,
            shippingMethod: (state) => state.shippingMethod,
            paymentMethod: (state) => state.paymentMethod,
        }),
    },
    watch: {
        items(cart) {
            if (Object.keys(cart).length === 0) {
                this.$router.push('/')
            }

            this.updatePrices()
        },
    },
    created() {
        if (Object.keys(this.items).length === 0) {
            this.$router.push('/')
        }

        this.updatePrices()

        this.$store.dispatch('locales/fetchCountries')
    },
    methods: {
        checkout() {
            this.$store.commit('carts/LOADING', true)
            this.$store.commit('carts/SET_FIELD_ERRORS', {})
            this.$store.commit('carts/SET_ERRORS', [])

            const params = Object.assign({}, this.address, {
                shipping_method: this.shippingMethod,
                payment_method: this.paymentMethod,
                products: Object.values(this.formatData(this.items).products),
            })

            checkout(this.$axios, params)
                .then((response) => {
                    if (response.redirect_to) {
                        window.location.href = response.redirect_to
                    }
                })
                .catch((error) => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })

                    const response = error.response.data

                    if (response.errors) {
                        this.$store.commit('carts/SET_FIELD_ERRORS', response.errors)
                        return
                    }

                    if (response.message) {
                        this.$store.commit('carts/SET_ERRORS', [response.message])
                        return
                    }

                    this.$store.commit('carts/SET_ERRORS', ['Server Error'])
                })
                .finally(() => {
                    this.$store.commit('carts/LOADING', false)
                })
        },
        updatePrices() {
            const data = this.formatData(this.items)

            if (Object.keys(data.products).length > 0) {
                const vue = this

                vue.loading = true

                costs(this.$axios, data)
                    .then((response) => {
                        if (response.total) {
                            vue.prices = { ...vue.prices, ...response }
                        }
                    })
                    .catch((e) => {
                        this.$router.push('/')

                        console.error(e)
                    })
                    .finally(() => {
                        vue.loading = false
                    })
            }
        },
        formatData(data) {
            const result = {
                products: {},
            }

            Object.keys(data).forEach((id) => {
                const item = Object.assign({}, data[id])

                delete item.product

                result.products[id] = { ...item, id: item.customize_id }
            })

            return result
        },
    },
}
</script>
