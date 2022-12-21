<template>
    <div class="basket-item-size control-group">
        <div v-if="hideActions">
            <div class="label">
                {{ $t('checkout.label.size') }}
            </div>

            <span class="value">
                {{ size.name }}
            </span>
        </div>

        <select
            v-else
            :disabled="item.product.sizes.length < 2"
            aria-label="Size"
            class="input-small"
            tabindex="0"
            @input="updateSize"
        >
            <option
                v-for="size in item.product.sizes"
                :key="size.id"
                :selected="size.id == item.size_id"
                :value="size.id"
            >
                {{ size.name }}
            </option>
        </select>
    </div>
</template>

<script>
export default {
    name: 'CheckoutItemSize',
    props: {
        itemId: {
            type: String,
            required: true,
        },
        item: {
            type: Object,
            required: true,
        },
        hideActions: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
    computed: {
        size() {
            return this.item.product.sizes.find((s) => s.id == this.item.size_id)
        },
    },
    methods: {
        updateSize(e) {
            this.$store.dispatch('carts/updateSize', [this.itemId, e.target.value])
        },
    },
}
</script>
