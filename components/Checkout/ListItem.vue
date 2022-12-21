<template>
    <div class="basket-items-wrapper">
        <ul class="basket-items">
            <li v-for="id in Object.keys(items)" :key="id" class="cf">
                <CheckoutItem
                    v-bind="{ itemId: id, item: items[id], prices }"
                    :detail-open="detailOpenItem === id"
                    :hide-actions="hideActions"
                    @detail="onDetailClick(id)"
                />

                <CheckoutProductDetail :active="detailOpenItem === id" :item="items[id]" />
            </li>
        </ul>
    </div>
</template>

<script>
import CheckoutItem from '~/components/Checkout/Item'
import CheckoutProductDetail from '~/components/Checkout/ProductDetail'

export default {
    name: 'CheckoutListItem',
    components: { CheckoutProductDetail, CheckoutItem },
    props: {
        prices: {
            type: Object,
            required: true,
        },
        hideActions: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
    data() {
        return {
            detailOpenItem: null,
        }
    },
    computed: {
        items() {
            return this.$store.state.carts.items
        },
    },
    methods: {
        onDetailClick(index) {
            if (this.detailOpenItem === index) {
                this.detailOpenItem = null
            } else {
                this.detailOpenItem = index
            }
        },
    },
}
</script>
