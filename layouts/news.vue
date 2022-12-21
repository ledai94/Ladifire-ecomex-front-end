<template>
    <div
        id="sprd-main"
        class="archive category category-design-contest category-196 header-margin one-column content home page-template page-template-startpage-curated page-template-startpage-curated-php page page-id-10919 page-parent header-margin one-column content"
        :class="{ 'body-position': isMenu }"
    >
        <HeaderNews :navbar="navbar" />
        <Nuxt :navbar="navbar" />
        <FooterNews />
    </div>
</template>

<script>
import { getNavbarNews } from '@/api/navigation.js'
import FooterNews from '@/components/Layouts/FooterNews.vue'
import HeaderNews from '@/components/Layouts/HeaderNews.vue'
export default {
    name: 'News',
    components: { FooterNews, HeaderNews },
    scrollToTop: true,
    data() {
        return {
            navbar: {},
            isMenu: false,
        }
    },
    async fetch() {
        await getNavbarNews(this.$axios).then((r) => {
            this.navbar = r
        })
    },
    fetchOnServer: true,
    computed: {
        navbarTest() {
            return this.testapi
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
    methods: {
        // toggleMenu(par) {
        //     this.isMenu = par
        // },
    },
}
</script>

<style lang="scss">
@import '~assets/sass/news.scss';
.body-position {
    position: fixed;
}
a,
#site-title h1 a:hover,
.entry-header h2.entry-title a:hover,
.author-info .author-details h3 a:hover,
#footerwidget-wrap .widget a:hover,
#footer #site-info a:hover,
#site-nav li a:hover,
#site-nav li li a:hover,
.widget_categories a:hover,
.widget_meta a:hover,
.widget_links a:hover,
.widget_recent_entries a:hover,
.widget_pages a:hover,
.widget_archive a:hover,
.widget_nav_menu a:hover,
.slider-wrap .responsive-slider.flexslider .slide-title a:hover,
#smart-archives-list ul li a:hover,
#smart-archives-fancy ul.archive-list li a:hover,
#content .post.portfolio-element h2.entry-title a:hover {
    color: #00b2a5;
}
</style>
