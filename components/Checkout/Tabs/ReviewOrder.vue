<template>
    <div id="review" class="step order-summary active">
        <div class="header" role="heading" aria-level="1">
            <h1 class="accessibility">
                {{ $t('checkout.tabs.order.title') }}
            </h1>

            <h2>
                <span class="number">3</span>
                {{ $t('checkout.tabs.order.title') }}
            </h2>
        </div>

        <div class="content">
            <div class="basket">
                <div class="component-loader">
                    <div class="order">
                        <CheckoutPriceInfo :prices="prices" />

                        <CheckoutListItem :prices="prices" hide-actions />
                    </div>
                </div>

                <div class="footer">
                    <div class="terms">
                        <span
                            >I acknowledge and accept the
                            <a href="javascript:void(0);"> General Terms and Conditions </a> of ecomex, Inc.</span
                        >
                    </div>

                    <button id="completeBuy" type="submit" class="btn-success buy btn">Buy now</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CheckoutListItem from '~/components/Checkout/ListItem'
import CheckoutPriceInfo from '~/components/Checkout/PriceInfo'

export default {
    name: 'CheckoutReviewOrder',
    components: { CheckoutListItem, CheckoutPriceInfo },
    props: {
        prices: {
            type: Object,
            required: true,
        },
    },
}
</script>
