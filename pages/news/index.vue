<template>
    <div id="main-wrap" class="content">
        <div class="content__wrap">
            <h1 class="with__subheadline" style="text-align: center">Your Marketplace News</h1>
            <h2 style="text-align: center">Insights, trends, inspiration and a lot more.</h2>
            <SlideNews :post-new="posts.posts" />
            <CategoryNew
                v-for="(data, name, index) in posts.news"
                :key="index"
                :data-news="data"
                :name="name"
                :categories="categories"
            />
            <!--<section class="ml ml&#45;&#45;tags">-->
            <!--    <h2 class="ml__headline ml__headline&#45;&#45;main h1"><span>A Well Of Knowledge</span></h2>-->
            <!--    <p class="ml__subline h2">Browse our library of insightful articles.</p>-->
            <!--    <div class="ml-wrap ml-wrap&#45;&#45;tags">-->
            <!--        <div class="ml__item ml__item&#45;&#45;tags">-->
            <!--            <div class="ml__icon ml__icon&#45;&#45;tags"></div>-->
            <!--            <h2 class="ml__headline">Partner Area</h2>-->
            <!--            <ul>-->
            <!--                <li>-->
            <!--                    <a-->
            <!--                        class="ml__link ml__link&#45;&#45;brand"-->
            <!--                        href="https://www.ecomex.com/blog/tag/partner-area-features/"-->
            <!--                        >Partner Area Features</a-->
            <!--                    >-->
            <!--                </li>-->
            <!--                <li>-->
            <!--                    <a-->
            <!--                        class="ml__link ml__link&#45;&#45;brand"-->
            <!--                        href="https://www.ecomex.com/blog/tag/uploading-designs/"-->
            <!--                        >Uploading Designs</a-->
            <!--                    >-->
            <!--                </li>-->
            <!--                <li>-->
            <!--                    <a-->
            <!--                        class="ml__link ml__link&#45;&#45;brand"-->
            <!--                        href="https://www.ecomex.com/blog/tag/creating-products/"-->
            <!--                        >Creating Products</a-->
            <!--                    >-->
            <!--                </li>-->
            <!--                <li>-->
            <!--                    <a-->
            <!--                        class="ml__link ml__link&#45;&#45;brand"-->
            <!--                        href="https://www.ecomex.com/blog/tag/sales-statistics/"-->
            <!--                        >Sales Statistics</a-->
            <!--                    >-->
            <!--                </li>-->
            <!--                <li>-->
            <!--                    <a class="ml__link ml__link&#45;&#45;brand" href="https://www.ecomex.com/blog/tag/partner-app/"-->
            <!--                        >Partner App</a-->
            <!--                    >-->
            <!--                </li>-->
            <!--                <li>-->
            <!--                    <a class="ml__link ml__link&#45;&#45;brand" href="https://www.ecomex.com/blog/tag/earnings/"-->
            <!--                        >Earnings</a-->
            <!--                    >-->
            <!--                </li>-->
            <!--                <li>-->
            <!--                    <a class="ml__link ml__link&#45;&#45;brand" href="https://www.ecomex.com/blog/tag/legal-tips/"-->
            <!--                        >Legal Tips</a-->
            <!--                    >-->
            <!--                </li>-->
            <!--            </ul>-->
            <!--        </div>-->
            <!--        <div class="ml__item ml__item&#45;&#45;tags">-->
            <!--            <div class="ml__icon ml__icon&#45;&#45;tags"></div>-->
            <!--            <h2 class="ml__headline">Products</h2>-->
            <!--            <ul>-->
            <!--                <li>-->
            <!--                    <a-->
            <!--                        class="ml__link ml__link&#45;&#45;brand"-->
            <!--                        href="https://www.ecomex.com/blog/category/product-news/"-->
            <!--                        >Product News</a-->
            <!--                    >-->
            <!--                </li>-->
            <!--                <li>-->
            <!--                    <a class="ml__link ml__link&#45;&#45;brand" href="https://www.ecomex.com/blog/tag/sales-trends/"-->
            <!--                        >Sales Trends</a-->
            <!--                    >-->
            <!--                </li>-->
            <!--            </ul>-->
            <!--        </div>-->
            <!--        <div class="ml__item ml__item&#45;&#45;tags">-->
            <!--            <div class="ml__icon ml__icon&#45;&#45;tags"></div>-->
            <!--            <h2 class="ml__headline">Marketplace</h2>-->
            <!--            <ul>-->
            <!--                <li>-->
            <!--                    <a-->
            <!--                        class="ml__link ml__link&#45;&#45;brand"-->
            <!--                        href="https://www.ecomex.com/blog/tag/marketplace-features/"-->
            <!--                        >Marketplace Features</a-->
            <!--                    >-->
            <!--                </li>-->
            <!--                <li>-->
            <!--                    <a-->
            <!--                        class="ml__link ml__link&#45;&#45;brand"-->
            <!--                        href="https://www.ecomex.com/blog/category/marketplace/designer-of-the-month/"-->
            <!--                        >Designer of the Month</a-->
            <!--                    >-->
            <!--                </li>-->
            <!--                <li>-->
            <!--                    <a-->
            <!--                        class="ml__link ml__link&#45;&#45;brand"-->
            <!--                        href="https://www.ecomex.com/blog/category/marketplace/design-contest/"-->
            <!--                        >Design Contest</a-->
            <!--                    >-->
            <!--                </li>-->
            <!--                <li>-->
            <!--                    <a class="ml__link ml__link&#45;&#45;brand" href="https://www.ecomex.com/blog/tag/success-tips/"-->
            <!--                        >Success Tips</a-->
            <!--                    >-->
            <!--                </li>-->
            <!--                <li>-->
            <!--                    <a-->
            <!--                        class="ml__link ml__link&#45;&#45;brand"-->
            <!--                        href="https://www.ecomex.com/blog/tag/top-search-terms/"-->
            <!--                        >Top Search Terms</a-->
            <!--                    >-->
            <!--                </li>-->
            <!--                <li>-->
            <!--                    <a-->
            <!--                        class="ml__link ml__link&#45;&#45;brand"-->
            <!--                        href="https://www.ecomex.com/blog/tag/design-inspiration/"-->
            <!--                        >Design Inspiration</a-->
            <!--                    >-->
            <!--                </li>-->
            <!--            </ul>-->
            <!--        </div>-->
            <!--        <div class="ml__item ml__item&#45;&#45;tags">-->
            <!--            <div class="ml__icon ml__icon&#45;&#45;tags"></div>-->
            <!--            <h2 class="ml__headline">Spreadshop</h2>-->
            <!--            <ul>-->
            <!--                <li>-->
            <!--                    <a-->
            <!--                        class="ml__link ml__link&#45;&#45;brand"-->
            <!--                        href="https://www.ecomex.com/blog/tag/shop-features/"-->
            <!--                        >Shop Features</a-->
            <!--                    >-->
            <!--                </li>-->
            <!--                <li>-->
            <!--                    <a-->
            <!--                        class="ml__link ml__link&#45;&#45;brand"-->
            <!--                        href="https://www.ecomex.com/blog/tag/shop-of-the-month/"-->
            <!--                        >Shop of the Month</a-->
            <!--                    >-->
            <!--                </li>-->
            <!--                <li>-->
            <!--                    <a-->
            <!--                        class="ml__link ml__link&#45;&#45;brand"-->
            <!--                        href="https://www.ecomex.com/blog/tag/shop-marketing/"-->
            <!--                        >Shop Marketing</a-->
            <!--                    >-->
            <!--                </li>-->
            <!--                <li>-->
            <!--                    <a-->
            <!--                        class="ml__link ml__link&#45;&#45;brand"-->
            <!--                        href="https://www.ecomex.com/blog/tag/social-media-marketing-tips/"-->
            <!--                        >Social Media Marketing Tips</a-->
            <!--                    >-->
            <!--                </li>-->
            <!--                <li>-->
            <!--                    <a-->
            <!--                        class="ml__link ml__link&#45;&#45;brand"-->
            <!--                        href="https://www.ecomex.com/blog/tag/tips-tutorials/"-->
            <!--                        >Tips &amp; Tutorials</a-->
            <!--                    >-->
            <!--                </li>-->
            <!--                <li>-->
            <!--                    <a-->
            <!--                        class="ml__link ml__link&#45;&#45;brand"-->
            <!--                        href="https://www.ecomex.com/blog/tag/advanced-settings/"-->
            <!--                        >Advanced Settings</a-->
            <!--                    >-->
            <!--                </li>-->
            <!--            </ul>-->
            <!--        </div>-->
            <!--    </div>-->
            <!--</section>-->
        </div>
        <!-- end #content -->
    </div>
</template>

<script>
import { getNewsTest } from '@/api/navigation.js'
import { getNews } from '@/api/news.js'
import CategoryNew from '@/components/News/CategoryNews.vue'
import SlideNews from '@/components/News/SlideNews.vue'
export default {
    components: { CategoryNew, SlideNews },
    layout: 'news',
    scrollToTop: true,
    async asyncData(context) {
        const categories = await getNewsTest(context)
        const posts = await getNews(context, categories)

        return { posts, categories }
    },
    head() {
        return {
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'News',
                },
            ],
        }
    },
    computed: {},
}
</script>
