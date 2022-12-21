<template>
    <div class="css-e87cl3 en1t2qb0">
        <div class="css-0 en1t2qb0">
            <ShopHeader v-bind="{ title, selectedCategory, selectedDepartment, search }" />
            <div class="en1t2qb0">
                <div class="css-ryj074 en1t2qb0" style="flex: unset">
                    <div class="css-0 en1t2qb0 TileList articles">
                        <ShopSort
                            :sort="sortType"
                            :on-change-view-mode="onChangeViewMode"
                            :view-mode="viewMode"
                            :search="true"
                        />

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
                                        :shop="'shop'"
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
        <Setsize name="setsize-product" @action="addToCart"> set size </Setsize>
    </div>
</template>

<script>
import ShopHeader from '@/components/Shop/HeaderShop.vue'
import ShopPagination from '@/components/Shop/Pagination.vue'
import ShopProduct from '@/components/Shop/Product.vue'
import ShopSort from '@/components/Shop/Sort.vue'
import { search } from '~/api/search'

export default {
    name: 'Search',
    components: { ShopHeader, ShopSort, ShopPagination, ShopProduct },
    async asyncData({ params, $axios, query }) {
        return {
            result: await search($axios, params.query, query.page),
        }
    },
    data() {
        return {
            viewMode: 'product',
            search: true,
        }
    },
    computed: {
        products() {
            let result = []

            if (this.result.data) {
                this.result.data.forEach((design) => {
                    if (design.products && design.products.length > 0) {
                        result = result.concat(design.products)
                    }
                })
            }

            return result
        },
        productList() {
            const links = {
                first: this.result.first_page_url,
                last: this.result.last_page_url,
                next: this.result.next_page_url,
                prev: this.result.prev_page_url,
            }
            const meta = {
                current_page: this.result.current_page,
                from: this.result.from,
                last_page: this.result.last_page,
                links: this.result.links,
                path: this.result.path,
                per_page: this.result.per_page,
                to: this.result.to,
                total: this.result.total,
            }
            return {
                links,
                meta,
            }
        },
        messengerError() {
            return this.$store.state.common.error
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
                title.push(this.$t(this.currentShop))
            }

            return title.join(' - ')
        },
        currentShop() {
            return this.$route.params.query
        },
        selectedDepartment() {
            return { name: this.$route.params.query, id: 1 }
        },
        selectedCategory() {
            if (!this.result.categories) {
                return null
            }

            return this.result.categories.find((d) => d.id == this.$route.params.type)
        },
        sortType() {
            return this.$route.query.sort
        },
        currentPage() {
            return this.$route.query.page ? parseInt(this.$route.query.page) : 1
        },
    },
    watchQuery: ['page'],
    methods: {
        handleSetsize(product) {
            this.setsizeId = product.id
            this.$store.dispatch('getsize/setProduct', {})
            this.$store.dispatch('getsize/setProduct', product)
            // this.productSetSize = product
            this.$setsize.show('setsize-product')
        },
        onChangeViewMode(par) {
            this.viewMode = par
        },
    },
}
</script>
