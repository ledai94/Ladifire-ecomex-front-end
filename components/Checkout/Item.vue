<template>
    <div class="basket-item-wrapper cf">
        <CheckoutItemAction v-if="!hideActions" :item="item" :item-id="itemId" />

        <div class="basket-item-info-wrapper">
            <CheckoutItemThumbnail :item="item" />

            <div class="basket-item-info-right">
                <div class="basket-item-color control-group">
                    <div v-if="hideActions" class="label">
                        {{ $t('checkout.label.color') }}
                    </div>

                    <span class="value">
                        {{ item.product.appearances.find((a) => a.id == item.appearance_id).name }}
                    </span>
                </div>

                <CheckoutItemSize :hide-actions="hideActions" :item="item" :item-id="itemId" />

                <CheckoutItemQuantity :hide-actions="hideActions" :item="item" :item-id="itemId" />

                <div class="basket-item-footer">
                    <button
                        :class="['inline-btn detail-link with-arrow', { active: detailOpen }]"
                        @click="$emit('detail')"
                    >
                        {{ $t('checkout.actions.detail') }}
                    </button>

                    <div class="basket-item-price" translate="no">
                        {{ $t('general.price', [itemPrice]) }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CheckoutItemAction from '~/components/Checkout/Item/Action'
import CheckoutItemQuantity from '~/components/Checkout/Item/Quantity'
import CheckoutItemSize from '~/components/Checkout/Item/Size'
import CheckoutItemThumbnail from '~/components/Checkout/Item/Thumbnail'
import { formatPrice } from '~/utils'

export default {
    name: 'CheckoutItem',
    components: { CheckoutItemSize, CheckoutItemAction, CheckoutItemThumbnail, CheckoutItemQuantity },
    props: {
        itemId: {
            type: String,
            required: true,
        },
        item: {
            type: Object,
            required: true,
        },
        prices: {
            type: Object,
            required: true,
        },
        detailOpen: {
            type: Boolean,
            required: false,
            default: false,
        },
        hideActions: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
    computed: {
        itemPrice() {
            const price = this.prices.detail[this.itemId]

            if (price) {
                return formatPrice(price.total)
            }

            return 0
        },
    },
}
</script>
