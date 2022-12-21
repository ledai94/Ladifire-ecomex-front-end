<template>
    <div name="basket-window">
        <ul class="price-container">
            <li class="sub-total">
                <span class="name">
                    {{ $t('checkout.priceInfos.subtotal') }}
                </span>

                <strong class="price" translate="no">
                    {{ $t('general.price', [formatPrice(prices.subtotal)]) }}
                </strong>
            </li>

            <!--TODO: Calculator shipping fee-->
            <li v-if="false" class="delivery">
                <span class="name">Shipping costs</span>
                <span class="price" translate="no">$44.99</span>

                <div class="delivery-eta active">
                    <button class="shipping-type inline-btn link">International Standard</button>:
                    <span class="eta from" translate="no">Jan. 14</span>
                    <span> - <span class="eta to" translate="no">Jan. 19</span></span>
                </div>
            </li>

            <li class="volume-discount" style="margin-top: 0.5em">
                <span class="name">
                    {{ $t('checkout.priceInfos.coupon') }}
                </span>

                <strong class="price" translate="no">
                    {{ $t('general.price', [formatPrice(prices.coupon)]) }}
                </strong>
            </li>

            <li class="sales-tax">
                <span class="name">
                    {{ $t('checkout.priceInfos.tax') }}
                </span>

                <strong class="price" translate="no">
                    {{ $t('general.price', [formatPrice(prices.tax)]) }}
                </strong>
            </li>

            <li class="total cf">
                <span class="name">
                    {{ $t('checkout.priceInfos.total') }}
                </span>

                <span class="price" translate="no">
                    {{ $t('general.price', [formatPrice(prices.total)]) }}
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
import { formatPrice } from '~/utils'

export default {
    name: 'CheckoutPriceInfo',
    props: {
        prices: {
            type: Object,
            required: true,
        },
    },
    methods: {
        formatPrice(price) {
            return formatPrice(price)
        },
    },
}
</script>
