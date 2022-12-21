<template>
    <article
        id="post-20918"
        class="post-20918 post type-post status-publish format-image has-post-thumbnail hentry category-featured-startpage-post category-marketplace category-partner-area post_format-post-format-image"
    >
        <header class="entry-header">
            <h2 class="entry-title">
                <nuxt-link
                    :to="/news/ + $route.params.category + '/' + post.id"
                    title="Permalink to More and More Design Uploads &amp; How We Deal with Them"
                    rel="bookmark"
                    >{{ post.title }}</nuxt-link
                >
            </h2>
            <aside class="entry-details">
                <ul>
                    <li class="entry-author">{{ post.author }}</li>
                    <li>{{ date }}</li>
                    <li class="entry-edit"></li>
                </ul>
            </aside>
            <!--end .entry-details -->
            <nuxt-link
                :to="/news/ + $route.params.category + '/' + post.id"
                title="More and More Design Uploads &amp; How We Deal with Them"
            >
                <picture> <img :src="image" :alt="post.title" /></picture>
            </nuxt-link>
        </header>
        <!--end .entry-header -->
        <div class="entry-content">
            <p>
                {{ post.excerpt }}
            </p>
            <p>
                <nuxt-link :to="/news/ + $route.params.category + '/' + post.id" class="more-link">Read more</nuxt-link>
            </p>
        </div>
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
    name: 'PostList',
    props: {
        post: {
            type: Object,
            required: false,
        },
    },
    computed: {
        date() {
            const date = this.post.created_at
            return new Date(date).toDateString()
        },
        image() {
            if (this.post.thumbnail) {
                return this.post.thumbnail
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
