<template>
    <div id="shipping" class="shipping">
        <div v-if="errors" class="alert">
            <ul>
                <li v-for="(error, index) in errors" :key="index">
                    {{ error }}
                </li>
            </ul>
        </div>

        <fieldset>
            <legend>
                {{ $t('checkout.tabs.shippingMethod.title') }}
            </legend>

            <div class="shipping-types radio-group">
                <label
                    v-for="method in methods"
                    :key="method.code"
                    :class="['radio', { active: method.code == selectedMethod }]"
                >
                    <input v-model="selectedMethod" :value="method.code" type="radio" />

                    <div>
                        <div class="cf">
                            <span class="name">
                                {{ method.name }}
                            </span>

                            <span class="delivery-eta">
                                <span class="eta from">
                                    {{ method.time.from }}
                                </span>

                                <span>
                                    - <span class="eta to">{{ method.time.to }}</span>
                                </span>
                            </span>

                            <span class="price">
                                {{ $t('general.price', [method.price]) }}
                            </span>
                        </div>

                        <div class="advantages">
                            <li v-for="(feature, index) in method.features" :key="index">
                                {{ feature }}
                            </li>
                        </div>
                    </div>
                </label>
            </div>
        </fieldset>
    </div>
</template>

<script>
export default {
    name: 'CheckoutShippingMethod',
    data() {
        return {
            methods: [
                {
                    id: 1,
                    code: 'international_standard',
                    name: 'International Standard',
                    time: {
                        from: 'Jan. 15',
                        to: 'Jan. 20',
                    },
                    price: 5.25,
                    features: [
                        'Delivery date not guaranteed',
                        'No tracking number',
                        'Subject to import taxes, customs, and duties',
                    ],
                },
            ],
            selectedMethod: null,
        }
    },
    computed: {
        errors() {
            return this.$store.state.carts.fieldErrors.shipping_method
        },
    },
    watch: {
        selectedMethod(method) {
            this.$store.commit('carts/SET_SHIPPING_METHOD', method)
        },
    },
    created() {
        this.selectedMethod = this.methods[0] ? this.methods[0].code : null
    },
}
</script>
