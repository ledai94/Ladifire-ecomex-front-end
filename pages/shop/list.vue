<template>
    <div class="css-e87cl3 en1t2qb0">
        <div class="css-0 en1t2qb0">
            <ShopHeader v-bind="{ title, selectedCategory, selectedDepartment }" />

            <div class="css-1dbhkgm en1t2qb0">
                <ShopFilter v-bind="{ filters, selectedCategory, selectedDepartment }" />

                <div class="css-ryj074 en1t2qb0">
                    <div class="css-0 en1t2qb0 TileList articles">
                        <ShopResetFilter
                            v-bind="{ baseUrl: '/' + $route.params.shop, selectedCategory, selectedDepartment }"
                        />

                        <ShopSort :sort="sortType" :on-change-view-mode="onChangeViewMode" :view-mode="viewMode" />

                        <div class="css-0 en1t2qb0">
                            <div class="css-1q0ef7f en1t2qb0">
                                <div v-if="messengerError !== null" id="l-d2N" class="filter-notification">
                                    <svg id="l-s33" class="icon icon--info-circle">
                                        <use id="l-u27" class="" xlink:href="/mp.svg#info-circle"></use>
                                    </svg>
                                    <div id="l-d2O" class="contentContainer">
                                        <span id="l-s34" class="content">{{ messengerError }}</span>
                                    </div>
                                </div>
                                <div class="css-efgamt en1t2qb0">
                                    <ShopProduct
                                        v-for="product in products"
                                        :key="product.customize_id"
                                        :product="product"
                                        :shop="currentShop"
                                        :view-mode="viewMode"
                                        @setsize="handleSetsize"
                                    />
                                </div>

                                <ShopPagination :data="productList" :page="currentPage" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="css-0 en1t2qb0">
                <p class="css-1gwul8g eey0lba0" v-html="$t('shop.footer')" />
            </div>
        </div>
    </div>
</template>

<script>
import { getProductFilters, getProducts } from '@/api/shop'
import ShopFilter from '@/components/Shop/Filter'
import ShopHeader from '@/components/Shop/HeaderShop.vue'
import ShopPagination from '@/components/Shop/Pagination'
import ShopProduct from '@/components/Shop/Product'
import ShopResetFilter from '@/components/Shop/ResetFilter'
import ShopSort from '@/components/Shop/Sort'

export default {
    name: 'ShopIndex',
    components: { ShopPagination, ShopProduct, ShopSort, ShopResetFilter, ShopFilter, ShopHeader },
    validate({ params }) {
        return ['custom', 'shop'].includes(params.shop)
    },
    scrollToTop: true,
    async asyncData(context) {
        const filters = await getProductFilters(context, { ...context.query, ...context.params })
        const productList = await getProducts(context, { ...context.query, ...context.params })

        return { filters, productList }
    },
    data() {
        return {
            viewMode: 'product',
        }
    },
    head() {
        return {
            title: this.title,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.title,
                },
            ],
        }
    },
    computed: {
        messengerError() {
            return this.$store.state.common.error
        },
        products() {
            if (!this.productList) {
                return []
            }

            return this.productList.data
        },
        title() {
            const title = []

            if (this.selectedDepartment) {
                title.push(this.selectedDepartment.name)
            }

            if (this.selectedCategory) {
                title.push(this.selectedCategory.name)
            }

            if (title.length < 1) {
                title.push(this.$t('shop.' + this.currentShop))
            }

            return title.join(' - ')
        },
        sortType() {
            return this.$route.query.sort
        },
        currentShop() {
            return this.$route.params.shop
        },
        currentPage() {
            return this.$route.query.page ? parseInt(this.$route.query.page) : 1
        },
        selectedDepartment() {
            if (!this.filters.departments) {
                return null
            }

            return this.filters.departments.find((d) => d.id == this.$route.params.category)
        },
        selectedCategory() {
            if (!this.filters.categories) {
                return null
            }

            return this.filters.categories.find((d) => d.id == this.$route.params.type)
        },
    },
    watch: {
        $route() {
            if (document) {
                document.body.scrollTop = 0
                document.documentElement.scrollTop = 0
            }
        },
    },
    watchQuery: true,
    methods: {
        handleSetsize(product) {
            // this.setsizeId = product.id
            this.$store.dispatch('getsize/setProduct', {})
            this.$store.dispatch('getsize/setProduct', product)
            this.$setsize.show('setsize-product')
        },
        addToCart() {},
        onChangeViewMode(par) {
            this.viewMode = par
        },
    },
}
</script>

<style lang="scss">
@import '~assets/sass/als_header.scss';
@import '~assets/sass/shop_emotion.scss';
@import '~assets/sass/list.scss';
@import '~assets/sass/mp-common.scss';
@import '~assets/sass/body.scss';

ul,
ol {
    list-style: none;
}
.article-btn {
    z-index: 0 !important;
}
</style>
