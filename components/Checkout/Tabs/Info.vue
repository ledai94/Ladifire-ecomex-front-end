<template>
    <div :class="{ active }">
        <div id="delivery" class="step active">
            <div aria-level="1" class="header" role="heading">
                <h1 class="accessibility">
                    {{ $t('checkout.tabs.info.title') }}
                </h1>

                <h2>
                    <span class="number">1</span>
                    {{ $t('checkout.tabs.info.title') }}
                </h2>
            </div>

            <div class="content">
                <div>
                    <fieldset class="shipping-address">
                        <legend>{{ $t('checkout.tabs.info.shippingAddress') }}</legend>

                        <div>
                            <CheckoutAddressForm />
                        </div>
                    </fieldset>
                </div>

                <CheckoutShippingMethod />
            </div>
        </div>
    </div>
</template>

<script>
import CheckoutAddressForm from '~/components/Checkout/Tabs/AddressForm'
import CheckoutShippingMethod from '~/components/Checkout/Tabs/ShippingMethod'

export default {
    name: 'CheckoutTabInfo',
    components: { CheckoutShippingMethod, CheckoutAddressForm },
    props: {
        active: {
            type: Boolean,
            required: false,
            default: true,
        },
    },
}
</script>
