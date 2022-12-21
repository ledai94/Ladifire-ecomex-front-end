<template>
    <section class="ml ml--category">
        <h2 class="ml__headline ml__headline--main h1">
            <span>{{ category }}</span>
        </h2>
        <p class="ml__subline h2">{{ 'Find out more about our latest ' + category + '.' }}</p>
        <div class="ml-wrap ml-wrap--cat">
            <News v-for="(news, index) in dataNews" :key="index" :news="news" :name="name" />
        </div>
        <p class="ml__more ml__more--cat">
            <nuxt-link class="sprdbtn sprdbtn--light" :to="'/news/' + parseInt(name)">Show More</nuxt-link>
        </p>
    </section>
</template>

<script>
import News from '@/components/News/News.vue'
export default {
    name: 'CategoryNew',
    components: { News },
    props: {
        dataNews: {
            type: Array,
            require: false,
            default: () => [],
        },
        categories: {
            type: Array,
            require: true,
            default: () => [],
        },
        name: {
            type: String,
            require: true,
            default: '',
        },
    },
    computed: {
        category() {
            const categoryNews = this.categories.find((el) => el.id == this.name)
            return categoryNews.title
        },
    },
}
</script>

<style scoped></style>
