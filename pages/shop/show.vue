<template>
    <div id="article-detail-page" class="pdp">
        <Info :product="product" />
        <Detail v-bind="{ product, productDetails, reviews }" />
    </div>
</template>

<script>
import { find } from '@/api/products'
import { getProducts, getReviews } from '@/api/shop.js'
import Detail from '@/components/ShopDetail/Detail'
import Info from '@/components/ShopDetail/Info'

export default {
    components: { Detail, Info },
    scrollToTop: true,
    async asyncData(context) {
        const product = await find(context, context.params.product)

        const relates = await getProducts(context, {
            shop: context.params.shop,
            department_id: context.params.category,
            category_id: context.params.type,
            per_page: 10,
        })
        const productId = product.id
        const reviews = await getReviews(context, { ...context.query, productId })

        const productDetails = relates.data

        return { product, productDetails, reviews }
    },
    head() {
        return {
            title: this.product.name,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.product.short_description,
                },
            ],
        }
    },
    // watchQuery: true,
}
</script>

<style lang="scss">
@import '~assets/sass/detail.scss';
@import '~assets/sass/mp-common.scss';
@import '~assets/sass/product.scss';
@import '~assets/sass/shop_emotion.scss';

@media screen and (max-width: 767px) {
    .pdp-header__pt-name {
        font-size: 0.875rem !important;
    }
}
</style>
