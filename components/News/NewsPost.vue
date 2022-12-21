<template>
    <div class="ml__item">
        <nuxt-link :to="'/news/category/' + news.id"
            ><picture> <img class="ml-category-list__img" :src="news.thumbnail" :alt="news.title" /></picture
        ></nuxt-link>
        <div class="ml-meta">
            <span class="ml-meta__date">{{ date }}</span>
        </div>
        <h3 class="ml__headline h2">
            <nuxt-link class="ml__link ml__link--dark" :to="'/news/category/' + news.id"> {{ news.title }}</nuxt-link>
        </h3>
    </div>
</template>

<script>
export default {
    name: 'NewsPost',
    props: {
        news: {
            type: Object,
            required: false,
        },
    },
    computed: {
        date() {
            const date = this.news.created_at
            return new Date(date).toDateString()
        },
    },
}
</script>

<style scoped></style>
