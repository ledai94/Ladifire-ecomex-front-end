<template>
    <div v-if="ads.message" class="header-menu__ssp-link ssp-link">
        <a :href="ads.url" class="ssp-link__text-wrapper">
            <div class="h3">
                {{ ads.message }}
            </div>

            <div class="cta">
                {{ ads.button }}

                <svg class="icon icon--right">
                    <use xlink:href="/global.svg#right"></use>
                </svg>
            </div>

            <img :alt="ads.message" :data-src="ads.image" />
        </a>
    </div>
</template>

<script>
// TODO: Fetch from api
export default {
    name: 'HeaderAdvertisement',
    data() {
        return {
            ads: {
                message: 'Start Selling Your Designs on 200+ Products',
                button: 'Start Selling Now',
                image: '/images/mds_laptop.png',
                url: 'http://google.com',
            },
        }
    },
}
</script>
