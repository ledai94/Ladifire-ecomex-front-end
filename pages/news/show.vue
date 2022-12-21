<template>
    <div id="main-wrap">
        <div id="content">
            <PostShow :post="post" />
            <!-- end post -20918 -->
            <MoreSite />
        </div>
        <!-- end #content -->
    </div>
</template>

<script>
import { find } from '@/api/news.js'
import MoreSite from '@/components/News/MoreSite.vue'
import PostShow from '@/components/News/PostShow.vue'

export default {
    name: 'Show',
    components: { MoreSite, PostShow },
    layout: 'news',
    async asyncData(context) {
        const post = await find(context, context.params.post)

        return { post }
    },
    head() {
        return {
            title: this.post.seo.title,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.post.seo.meta_description,
                },
                {
                    hid: 'canonical',
                    name: 'canonical',
                    content: this.post.seo.meta_canonical,
                },
                {
                    hid: 'image',
                    name: 'image',
                    content: this.post.seo.meta_image,
                },
                {
                    hid: 'keyword',
                    name: 'keyword',
                    content: this.post.seo.meta_keyword,
                },
            ],
        }
    },
}
</script>

<style scoped></style>
