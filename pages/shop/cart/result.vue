<template>
    <div class="row">
        <div id="success">
            <div id="order">
                <div :class="isSuccess ? 'check-image' : 'error-image'" />

                <h1>
                    {{ isSuccess ? $t('checkout.result.title') : $t('checkout.result.error') }}
                </h1>

                <h3 class="order-number">
                    {{ $t('checkout.result.order', [orderId]) }}
                </h3>

                <span v-if="!isSuccess">
                    {{ $t('checkout.result.errorMessage') }}
                </span>
            </div>

            <div class="continue-shopping cf">
                <h2>
                    {{ $t('checkout.result.continueShopping') }}
                </h2>

                <nuxt-link class="btn" to="/">
                    {{ $t('checkout.actions.back') }}
                </nuxt-link>
            </div>

            <div v-if="isSuccess" class="video">
                <h2>
                    {{ $t('checkout.result.next') }}
                </h2>

                <ul class="process">
                    <li class="process-order-success phase">
                        <div class="order-success-image image" />

                        <p class="title">
                            {{ $t('checkout.result.success') }}
                        </p>

                        <p class="details">
                            {{ $t('checkout.result.successDetail') }}
                        </p>
                    </li>

                    <li class="process-printing phase">
                        <div class="printing-image image" />

                        <p class="title">
                            {{ $t('checkout.result.printing') }}
                        </p>

                        <p class="details">
                            {{ $t('checkout.result.printingDetail') }}
                        </p>
                    </li>

                    <li class="process-shipping phase">
                        <div class="shipping-image image" />

                        <p class="title">
                            {{ $t('checkout.result.delivered') }}
                        </p>

                        <p class="details">
                            {{ $t('checkout.result.deliveredDetail') }}
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { status } from '~/api/cart'

export default {
    name: 'CartResult',
    layout: 'cart',
    data() {
        return {
            status: null,
        }
    },
    computed: {
        orderId() {
            return this.$route.query.order_id
        },
        isSuccess() {
            return this.status === 'success' || this.status === 'pending'
        },
    },
    created() {
        if (!this.orderId) {
            this.$router.push('/')
            return
        }

        status(this.$axios, 'order_id', this.orderId)
            .then((order) => {
                this.status = order.payment.status_text || 'failed'

                if (this.isSuccess) {
                    this.$store.dispatch('carts/reset')
                }
            })
            .catch(() => {
                this.$router.push('/')
            })
    },
}
</script>
