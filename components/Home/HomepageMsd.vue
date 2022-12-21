<template>
    <section class="homepage-mds">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 class="h1">{{ $t('Home.title_homepage_msd') }}</h2>
                    <h3>{{ $t('Home.homepage_msd') }}</h3>
                </div>
            </div>
            <div class="row icons">
                <div v-for="(mdsItem, index) in mds" :key="index" class="col-4 col-md-3">
                    <a :href="mdsItem.url"><img :src="mdsItem.image" /></a><span>{{ mdsItem.name }}</span>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <a class="sprd-button primary" :href="url" style="background-color: #f0a97d">
                        {{ $t('Home.get_started') }}
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            url: process.env.DASHBOARD_BASE_URL,
            mds: [
                {
                    name: 'Create design',
                    url: process.env.DASHBOARD_BASE_URL + '/designs',
                    image: '/homepage/image_19.jpg',
                },
                {
                    name: 'Upload',
                    url: process.env.DASHBOARD_BASE_URL + '/designs',
                    image: '/homepage/image_20.jpg',
                },
                {
                    name: 'Earn money',
                    url: process.env.DASHBOARD_BASE_URL,
                    image: '/homepage/image_21.jpg',
                },
            ],
        }
    },
}
</script>
