<template>
    <div id="invoice" class="step active">
        <div aria-level="1" class="header" role="heading">
            <h1 class="accessibility">
                {{ $t('checkout.tabs.paymentMethod.title') }}
            </h1>

            <h2>
                <span class="number">2</span>
                {{ $t('checkout.tabs.paymentMethod.title') }}
            </h2>
        </div>

        <div class="content">
            <div v-if="errors" class="alert">
                <ul>
                    <li v-for="(error, index) in errors" :key="index">
                        {{ error }}
                    </li>
                </ul>
            </div>

            <fieldset class="payment-types active">
                <legend class="accessibility">
                    {{ $t('checkout.tabs.paymentMethod.title') }}
                </legend>

                <div class="radio-group">
                    <div class="paypal radio active">
                        <div>
                            <div class="radio-wrapper">
                                <label class="payment-type-label">
                                    <input v-model="selectedMethod" type="radio" value="paypal" />

                                    <strong>
                                        {{ $t('checkout.tabs.paymentMethod.paypal.title') }}
                                    </strong>
                                </label>

                                <div name="form">
                                    <div>
                                        <div class="component-loader">
                                            <div class="paypal">
                                                <div class="header">
                                                    <div class="paypal-image" />
                                                </div>

                                                <div class="content space">
                                                    <div class="paypal">
                                                        <div>
                                                            {{ $t('checkout.tabs.paymentMethod.paypal.help') }}
                                                        </div>

                                                        <div
                                                            class="warning"
                                                            v-html="$t('checkout.tabs.paymentMethod.paypal.note')"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </fieldset>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CheckoutPaymentMethod',
    data() {
        return {
            selectedMethod: null,
        }
    },
    computed: {
        errors() {
            return this.$store.state.carts.fieldErrors.payment_method
        },
    },
    watch: {
        selectedMethod(method) {
            this.$store.commit('carts/SET_PAYMENT_METHOD', method)
        },
    },
    created() {
        this.selectedMethod = 'paypal'
    },
}
</script>
