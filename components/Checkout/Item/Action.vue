<template>
    <div class="flex-container">
        <h4 class="flex-stretch">
            <span class="basket-item-product-type">
                {{ item.product.name }}
            </span>
        </h4>

        <div class="buttons">
            <nuxt-link :title="$t('checkout.actions.edit')" class="edit-link icon-edit" to="/" /><!--
                            --><a
                :title="$t('checkout.actions.duplicate')"
                class="duplicate-item icon-duplicate"
                href="javascript:void(0);"
                @click="duplicate"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: 'CheckoutItemAction',
    props: {
        itemId: {
            type: String,
            required: true,
        },
        item: {
            type: Object,
            required: true,
        },
    },
    methods: {
        duplicate() {
            this.$store.dispatch('carts/add', { ...this.item, amount: 1 })
        },
    },
}
</script>
