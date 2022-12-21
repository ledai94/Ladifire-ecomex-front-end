<template>
    <article
        id="post-20918"
        class="post-20918 post type-post status-publish format-image has-post-thumbnail hentry category-featured-startpage-post category-marketplace category-partner-area post_format-post-format-image"
    >
        <div class="entry-header">
            <h1 class="entry-title">{{ postDetail.title }}</h1>
            <aside class="entry-details">
                <ul>
                    <li class="entry-author">{{ postDetail.author }}</li>
                    <li>{{ date }}</li>
                </ul>
            </aside>
            <!--end .entry-details -->
            <picture> <img :alt="postDetail.title" :src="image" /></picture>
        </div>
        <!--end .entry-header -->
        <div class="entry-content" v-html="postDetail.content"></div>
        <!-- end entry-content -->
        <footer class="entry-meta">
            <ul>
                <li class="entry-cats">
                    <ul class="post-categories">
                        <li v-for="category in categories" :key="category.id">
                            <nuxt-link to="" rel="category tag">{{ category.title }}</nuxt-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </footer>
        <!-- end .entry-meta -->
    </article>
</template>

<script>
export default {
    name: 'PostShow',
    props: {
        post: {
            type: Object,
            required: false,
        },
    },
    computed: {
        postDetail() {
            return this.post.core
        },
        date() {
            const date = this.postDetail.created_at
            return new Date(date).toDateString()
        },
        image() {
            if (this.postDetail.featured_image) {
                return this.postDetail.featured_image
            }
            return '/default-image.webp'
        },
        categories() {
            return this.post.categories
        },
    },
}
</script>

<style scoped></style>
