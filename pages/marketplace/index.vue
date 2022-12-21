<template>
    <div class="css-e87cl3 en1t2qb0">
        <ShopHeader v-bind="{ title, selectedCategory, selectedDepartment, shopUser }" />
        <div id="l-d" class="ShowroomHeader">
            <div id="l-d2" class="showroomBanner only-large">
                <div id="l-d3" class="Wrapper backgroundImage">
                    <img id="l-i2" alt="Showroom - forhuman" src="/background_shop_user.jpg" class="" />
                </div>
                <div id="l-d4" class="Wrapper foregroundImage">
                    <img id="l-i" alt="Showroom - forhuman" src="/foreground_user.jpg" />
                </div>
            </div>
            <div id="l-d5" class="content gridPadding" style="padding-left: 1rem">
                <div id="sr-designer-info" class="DesignerCard">
                    <div id="l-d6" class="Wrapper designer">
                        <div id="l-d7" class="Wrapper image">
                            <img id="l-i3" alt="forhuman" src="/avata.png" class="Image artist" />
                        </div>
                    </div>
                    <h2 id="l-h" class="h1">forhuman</h2>
                    <div id="designer-country" class="country-pin">
                        <svg id="l-s6" class="icon icon--map-pin">
                            <use id="l-u3" class="" xlink:href="/mp.svg#map-pin"></use></svg
                        ><span id="l-s7" class="">Indonesia</span>
                    </div>
                    <div id="l-d8" class="Wrapper buttons">
                        <button id="srEdit" class="pattern sr-edit only-large open d-none button">
                            <svg id="l-sE" class="button-icon button-icon--pencil">
                                <use id="l-u8" class="" xlink:href="/global.svg#pencil"></use></svg
                            ><span id="l-sF" class="">Edit</span>
                        </button>
                        <div id="l-dG" class="adminFoot only-large">
                            <div id="l-dH" class="button pattern close cta">Close</div>
                        </div>
                        <button id="l-b" class="share pattern button">
                            <svg id="l-sG" class="button-icon button-icon--share">
                                <use id="l-u9" class="" xlink:href="/global.svg#share"></use></svg
                            ><span id="l-sH" class="">Share</span>
                        </button>
                    </div>
                    <div
                        id="l-d9"
                        class="collapsible collapsible--panel collapsible--small lowerInfo"
                        :class="{ open: isActive }"
                    >
                        <div id="l-dA" class="collapsible__toggle" @click="smallMore">
                            <span id="l-s8" class="">More about forhuman</span
                            ><svg id="l-s9" class="collapsible__icon collapsible__icon--up">
                                <use id="l-u4" class="" xlink:href="/global.svg#up"></use></svg
                            ><svg id="l-sA" class="collapsible__icon collapsible__icon--down">
                                <use id="l-u5" class="" xlink:href="/global.svg#down"></use>
                            </svg>
                        </div>
                        <div id="l-dB" class="collapsible__inner">
                            <div id="l-dC" class="Wrapper designerLinks">
                                <div id="designer-channels" class="">
                                    <a
                                        class="circleLink socialMediaIcon hoverColorBg custom"
                                        title="forhuman’s Website"
                                        href="#"
                                        target="_blank"
                                        rel="nofollow"
                                        ><svg class="icon icon--chain">
                                            <use xlink:href="/mp.svg#chain"></use></svg
                                    ></a>
                                </div>
                            </div>
                            <div id="l-dD" class="Wrapper designerText">
                                <div
                                    id="designer-description"
                                    class="collapsible collapsible--text description collapsible--large collapsible--off open"
                                >
                                    <!--<div id="l-dE" class="collapsible__inner fade">-->
                                    <!--    All designs, FunnyGeek, Love, Birthday, Sports, Quotes, Hipster, Comics,-->
                                    <!--    Evolution-->
                                    <!--</div>-->
                                    <div id="l-dF" class="collapsible__toggle">
                                        <span id="l-sB" class="">Show less</span
                                        ><svg
                                            id="l-sC"
                                            class="collapsible__icon--fill-mermaid collapsible__icon collapsible__icon--up"
                                        >
                                            <use id="l-u6" class="" xlink:href="/global.svg#up"></use></svg
                                        ><svg
                                            id="l-sD"
                                            class="collapsible__icon--fill-mermaid collapsible__icon collapsible__icon--down"
                                        >
                                            <use id="l-u7" class="" xlink:href="/global.svg#down"></use>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <h1 id="listHeadline" class="h2" style="padding-left: 1rem">All Designs from forhuman</h1>
        <div class="css-0 en1t2qb0">
            <!--<ShopHeader v-bind="{ title, selectedCategory, selectedDepartment }" />-->

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
        <Setsize name="setsize-product" @action="addToCart"> set size </Setsize>
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
        return ['shop'].includes(params.shop)
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
            shopUser: true,
            isActive: false,
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
        smallMore() {
            this.isActive = !this.isActive
        },
        handleSetsize(product) {
            console.log(product)
            this.setsizeId = product.id
            this.$store.dispatch('getsize/setProduct', {})
            this.$store.dispatch('getsize/setProduct', product)
            console.log(this.$store.state.getsize.product.name)
            // this.productSetSize = product
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
<style lang="scss">
.Showroom {
    margin-bottom: 8em;
}

.Showroom .emptyShowroom {
    text-align: center;
}

.Showroom .emptyShowroom .description,
.Showroom .emptyShowroom .headline {
    margin-top: 1.4rem;
}

.ShowroomHeader {
    position: relative;
    width: 100%;
    box-sizing: border-box;
}

.ShowroomHeader .Wrapper.buttons {
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 1em;
    right: 16px;
    z-index: 2;
}

.ShowroomHeader .button.sr-edit {
    margin-right: 1em;
}

.ShowroomHeader .Image.background img:not([src]),
.ShowroomHeader .Image.background img[src=''],
.ShowroomHeader .Image.background source:not([src]),
.ShowroomHeader .Image.background source[srcset=''],
.ShowroomHeader .Image.header img:not([src]),
.ShowroomHeader .Image.header img[src=''],
.ShowroomHeader .Image.header source:not([src]),
.ShowroomHeader .Image.header source[srcset=''] {
    display: none !important;
}

.ShowroomHeader .showroomBanner {
    display: block;
    position: relative;
}

.ShowroomHeader .Wrapper.backgroundImage {
    position: absolute;
    width: 100vw;
    top: 0;
    bottom: 0;
    margin-left: calc((100vw - 100%) / -2);
    overflow: hidden;
}

.ShowroomHeader .Wrapper.backgroundImage img[src]:not([src='']) {
    display: block;
    width: 100%;
    height: 100%;
    border: none;
    outline: 0;
    -moz-filter: blur(50px);
    -o-filter: blur(50px);
    -ms-filter: blur(50px);
    filter: url("data:image/svg+xml;utf9,<svg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'><filter%20id='blur'><feGaussianBlur%20stdDeviation='5'%20/></filter></svg>#blur");
    filter: blur(50px);
}

.ShowroomHeader .Wrapper.foregroundImage {
    margin-left: calc((100vw - 100%) / -2);
    position: relative;
    width: 100vw;
}

.ShowroomHeader .Wrapper.foregroundImage img {
    height: auto;
    max-width: 100vw;
    margin: 0 auto;
    display: block;
}

.ShowroomHeader .content {
    min-height: 156px;
    position: relative;
}

.ShowroomHeader .Wrapper.designer {
    float: left;
    margin-right: 16px;
    position: relative;
    width: 120px;
}

.ShowroomHeader .Wrapper.designer .Wrapper.image {
    line-height: 0;
}

.ShowroomHeader .Wrapper.designer .Image {
    box-sizing: border-box;
    background: #fff;
    width: 120px;
    height: 120px;
    border-radius: 100%;
    box-shadow: 0 0 0 1px #d9d9d9;
}

.ShowroomHeader .adminFoot {
    display: none;
}

@media (max-width: 767px) {
    .ShowroomHeader .sharing__button {
        height: 2.5rem;
        max-width: 2.5rem;
        margin-top: -0.5rem;
        padding: 0.3rem;
        overflow: hidden;
        border-radius: 100%;
    }

    .ShowroomHeader .sharing__overlay.open + .sharing__button {
        margin-bottom: 3rem;
    }

    .ShowroomHeader .content {
        border-bottom: 1px solid #d9d9d9;
        margin: 0 8px 8px;
        padding-left: 0;
        padding-right: 0;
        padding-bottom: 1em;
        min-height: 128px;
    }

    .ShowroomHeader .Wrapper.designer {
        margin-bottom: 12px;
        width: 100px;
    }

    .ShowroomHeader .Wrapper.designer .Image {
        width: 100px;
        height: 100px;
    }

    .ShowroomHeader .Wrapper.foregroundImage {
        min-height: 80px;
    }

    .ShowroomHeader .Wrapper.buttons {
        float: right;
        position: relative;
        top: 0;
        justify-content: center;
    }
}

.ShowroomHeader button:focus {
    outline: 0;
}

.DesignerCard {
    box-sizing: border-box;
    vertical-align: top;
    white-space: normal;
}

.DesignerCard .description {
    text-align: left;
}

.DesignerCard .designerLinks .circleLink {
    height: 30px;
    width: 30px;
    border-radius: 100%;
    cursor: pointer;
    display: inline-block;
    line-height: 30px;
    text-align: center;
    text-decoration: none;
    background-color: #333;
    color: #fff;
    font-size: 1.2rem;
    margin: 0.4rem 0.8rem 0.4rem 0;
}

.DesignerCard .designerLinks .circleLink:before {
    vertical-align: middle;
}

.DesignerCard .designerLinks .placeholders .circleLink {
    background-color: #f2f2f2;
    cursor: auto;
}

@media screen and (min-width: 768px) {
    .DesignerCard .description {
        max-width: 65%;
        min-width: 35%;
    }

    .DesignerCard .lowerInfo {
        margin-left: 136px;
    }
}

@media screen and (max-width: 767px) {
    .DesignerCard .description {
        margin-top: 0.3em;
    }

    .DesignerCard .lowerInfo {
        clear: both;
        width: 100%;
    }
}
@media (min-width: 1280px) {
    .container {
        width: 88%;
    }
}
</style>
