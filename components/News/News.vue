<template>
    <div class="ml__item ml__item--cat">
        <nuxt-link :to="/news/ + parseInt(name) + '/' + news.id"
            ><picture> <img class="ml__img" :src="image" :alt="news.title" /></picture
        ></nuxt-link>
        <div class="ml-meta">
            <span class="ml-meta__date">{{ date }}</span>
        </div>
        <h3 class="ml__headline ml__headline--cat h2">
            <nuxt-link class="ml__link ml__link--dark" :to="/news/ + parseInt(name) + '/' + news.id">
                {{ news.title }}</nuxt-link
            >
        </h3>
        <p class="ml__txt">
            {{ news.excerpt }}
            <nuxt-link class="ml__link ml__link--brand" :to="/news/ + parseInt(name) + '/' + news.id"
                >Read more »</nuxt-link
            >
        </p>
    </div>
</template>

<script>
export default {
    name: 'News',
    props: {
        news: {
            type: Object,
            required: true,
        },
        name: {
            type: String,
            require: true,
            default: '',
        },
    },
    computed: {
        date() {
            const date = this.news.created_at
            return new Date(date).toDateString()
        },
        image() {
            if (this.news.thumbnail) {
                return this.news.thumbnail
            }
            return '/default-image.webp'
        },
    },
}
</script>

<style scoped></style>
