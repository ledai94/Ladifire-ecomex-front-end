<template>
    <div id="main-wrap">
        <div id="content">
            <div class="page-header">
                <h2 class="page-title">Posts in Category ‘<span>Marketplace</span>’</h2>
            </div>
            <!-- end .page-header -->
            <PostList v-for="(post, index) in posts.data" :key="index" :post="post" />
            <!-- end post -20918 -->
            <ShopPagination :data="posts" :page="currentPage" />
        </div>
        <!-- end #content -->
    </div>
</template>

<script>
import { getNewsCategory } from '@/api/news.js'
import ShopPagination from '@/components/Shop/Pagination.vue'
// import PostList from '@/components/News/PostList.vue'

export default {
    name: 'List',
    components: { ShopPagination },
    // components: { PostList },
    layout: 'news',
    scrollToTop: true,
    async asyncData(context) {
        const news = await getNewsCategory(context, { ...context.query, ...context.params })

        return { news }
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
        posts() {
            const data = this.news.data

            const links = {
                first: this.news.first_page_url,
                last: this.news.last_page_url,
                next: this.news.next_page_url,
                prev: this.news.prev_page_url,
            }
            const meta = {
                current_page: this.news.current_page,
                from: this.news.from,
                last_page: this.news.last_page,
                links: this.news.links,
                path: this.news.path,
                per_page: this.news.per_page,
                to: this.news.to,
                total: this.news.total,
            }
            return {
                data,
                links,
                meta,
            }
        },
        currentPage() {
            return this.$route.query.page ? parseInt(this.$route.query.page) : 1
        },
        title() {
            const post = this.news.data.find((el, index) => (index = 1)).categories
            return post.find((el) => (el.id = this.$route.params.category)).title
        },
    },

    watchQuery: true,
}
</script>
