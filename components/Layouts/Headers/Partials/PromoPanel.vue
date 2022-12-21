<template>
    <nuxt-link
        v-if="promo.title"
        to="/news"
        class="promo-panel promo-panel--pink js-header-message"
        data-lightbox="header-message"
    >
        <div class="promo-panel__extension"></div>

        <span class="promo-panel__text">
            <svg class="icon" viewbox="0 0 27.94 20.7" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M25 2.76h-5.14a3 3 0 0 0-3-2.76H3a3 3 0 0 0-3 3v14.85h3.09a4 4 0 0 0 7.64-.05h6.53a4 4 0 0 0 7.74-.18v.18h3V8.14zM8.9 16.71a2 2 0 1 1-2-2 2 2 0 0 1 2 2zm12.19 2a2 2 0 1 1 2-2 2 2 0 0 1-2 1.99zm4.85-2.9H25a4 4 0 0 0-7.78 0h-6.43a4 4 0 0 0-7.79 0H2V3a1 1 0 0 1 1-1h13.86a1 1 0 0 1 1 1v6.32h2V4.76h4l2.1 3.89z"
                />
            </svg>

            {{ promo.title }}

            <svg class="icon icon--right after">
                <use xlink:href="/global.svg#right"></use>
            </svg>
        </span>

        <span class="promo-panel__link js-promo-link">
            {{ $t('headers.more_information') }}
            <svg class="icon icon--right">
                <use xlink:href="/global.svg#right"></use>
            </svg>
        </span>

        <Modal v-if="promo.message" name="promo">
            {{ promo.message }}
        </Modal>
    </nuxt-link>
</template>

<script>
import Modal from '@/components/Modal.vue'
export default {
    name: 'PromoPanel',
    components: { Modal },
    data() {
        return {
            // TODO: Fetch promo from API
            promo: {
                title: "We're still open and here for you!",
                message:
                    'The COVID-19 crisis is forcing us to step back from everyday life. There’s nothing we can do about this. But we can make the best of it. As long as the health of our employees, community and suppliers is not at risk, we will carry on. We will continue to accept, print and ship your orders. Stay healthy and keep smiling!',
            },
        }
    },
    mounted() {
        if (this.promo.title) {
            document.querySelector('.sprd-header').classList.add('has-promo')
        }
        if (!this.promo.title && window.innerWidth < 768) {
            document.querySelector('.js-top-panel').classList.add('d-none')
        }
    },
    methods: {
        showPromo() {
            this.$modal.show('promo')
        },
    },
}
</script>
