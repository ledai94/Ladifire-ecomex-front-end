<template>
    <button class="pdp-top__cart cart pattern cta button" @click="addToCart">
        <svg class="button-icon button-icon--cart">
            <use xlink:href="/global.svg#cart"></use>
        </svg>

        <span>
            {{ $t('detail.buttons.AddToCart') }}
        </span>
    </button>
</template>

<script>
export default {
    // eslint-disable-next-line vue/require-prop-types
    props: {
        productInCart: {
            type: Object,
            required: true,
        },
        currentAppearanceId: {
            type: Number,
            required: true,
        },
    },
    methods: {
        addToCart() {
            const size = this.productInCart.sizes.find((s) => s.id == this.$nuxt.$route.query.size)

            this.$nuxt.$emit('size-error', !!size)
            if (size) {
                this.$store.dispatch('carts/addOrIncrease', {
                    id: this.productInCart.id,
                    customize_id: this.productInCart.customize_id,
                    appearance_id: this.currentAppearanceId,
                    size_id: size.id,
                    amount: 1,
                    product: this.productInCart,
                })
            }
        },
    },
}
</script>
