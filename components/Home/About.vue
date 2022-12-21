<template>
    <section class="homepage-about">
        <div class="container">
            <div class="row justify-content-center">
                <div class="homepage-about__skew-wrapper col-12 col-md-10 col-lg-6">
                    <div class="homepage-about__text-wrapper">
                        <h2 style="color: #fff">This Is Merakiprint</h2>
                        <p>
                            At Merakiprint, we are dedicated to providing beautifully available products, customized
                            apparel, and home-decors. We are also a marketplace for freelancers to sell their own
                            design. We value free expression, friendliness with the environment, fair and close
                            cooperation.
                        </p>
                        <nuxt-link class="homepage-about__link" to="/pages/about-us" style="color: #fff">
                            Get To Know Us
                            <svg class="icon icon--right">
                                <use xlink:href="/global.svg#right"></use></svg
                        ></nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'About',
}
</script>

<style scoped></style>
