<template>
    <div>
        <div id="edit-view" class="Wrapper productDetails sprd-responsive-cnt d-none" />
        <div id="cms-view" data-pageid="">
            <div id="homepage" class="sprd-responsive-cnt" data-tracking="homepage">
                <!-- Create-Shop Slide -->
                <section class="homepage-hero">
                    <div class="homepage-hero__wrapper cta">
                        <nuxt-link
                            class="homepage-hero__cyo"
                            to="/create-your-own"
                            data-tracking="HP main teaser - CTA create"
                            ><div class="homepage-hero__background">
                                <div class="homepage-hero__background-image" />
                            </div>
                            <div class="homepage-hero__model" />
                            <div class="homepage-hero__text">
                                <h2 style="color: #ffffff">
                                    <span style="color: #ffffff">CREATE</span> personalized products for any event or
                                    occasion
                                </h2>
                                <br />
                                <div
                                    class="sprd-button main js-hero-cyo"
                                    style="background-color: #ffffff; width: 234px; color: #91353b"
                                >
                                    Start Designing Now
                                </div>
                            </div></nuxt-link
                        ><nuxt-link class="homepage-hero__mp" to="/shop" data-tracking="HP main teaser - CTA shop"
                            ><div class="homepage-hero__background">
                                <div class="homepage-hero__background-image" />
                            </div>
                            <div class="homepage-hero__model" />
                            <div class="homepage-hero__text">
                                <h2 style="color: #313234">
                                    <span>SHOP</span> unique designs on any product by independent designers
                                </h2>
                                <br />
                                <div class="sprd-button main js-hero-mp" style="background-color: #313234">
                                    Find Something You Love
                                </div>
                            </div></nuxt-link
                        >
                    </div>
                </section>
                <!-- tabs -->
                <!-- <HomepageTab /> -->
                <!-- Trending Now -->
                <client-only>
                    <HomepageTopic :items="popularDepartments" :lenght="popularDepartments.length" />
                </client-only>
                <!-- Popular Products. Delightful Designs. -->
                <client-only>
                    <HomepageProduct :items="popularCategories" />
                </client-only>
                <!-- Spotlight on Design -->
                <HomepageDesign :items="popularDesignCategories" />
                <!-- Turn Your Designs into Profit -->
                <HomepageMsd :items="popularCategories" />
                <!-- Spread Your Influence from the Screen to the Street -->
                <Creators />
                <!-- Custom Shirts: You Think It, We Print It. -->
                <!--<Seo />-->
                <!-- This Is ecomex -->
                <About />
                <!--<About />-->
            </div>
        </div>
    </div>
</template>

<script>
import { getPopularCategories, getPopularDesignCategories, getPopularDepartments } from '@/api/home'
import About from '@/components/Home/About.vue'
import HomepageMsd from '@/components/Home/HomepageMsd.vue'
import HomepageDesign from '@/components/Home/HomepageDesign.vue'
import HomepageProduct from '@/components/Home/HomepageProduct.vue'
import HomepageTopic from '@/components/Home/HomepageTopic.vue'
import Creators from '@/components/Home/Creators.vue'
export default {
    components: {
        About,
        Creators,
        HomepageTopic,
        HomepageProduct,
        HomepageDesign,
        HomepageMsd,
    },

    async asyncData({ $axios }) {
        const popularCategories = await getPopularCategories($axios)
        const popularDesignCategories = await getPopularDesignCategories($axios)
        const popularDepartments = await getPopularDepartments($axios)

        return { popularCategories, popularDesignCategories, popularDepartments }
    },
}
</script>

<style lang="scss">
@import '~assets/sass/body.scss';
</style>
