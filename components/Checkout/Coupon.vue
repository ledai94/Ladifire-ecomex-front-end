<template>
    <div v-if="false" class="coupon">
        <div class="enter-coupon">
            <form autocomplete="off">
                <CheckoutFormInput :label="$t('checkout.actions.coupon')" class="coupon-code" />
            </form>
        </div>
    </div>
</template>

<script>
import CheckoutFormInput from '~/components/Checkout/Form/Input'
export default {
    name: 'CheckoutCoupon',
    components: { CheckoutFormInput },
}
</script>
