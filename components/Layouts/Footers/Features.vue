<template>
    <div class="ft-head-wrapper">
        <div class="container ft-head">
            <div class="ft-payment">
                <div class="ft-head-headline">
                    <svg class="icon icon--lock">
                        <use xlink:href="/global.svg#lock"></use>
                    </svg>
                    <div class="h1">All secure payment methods</div>
                </div>
                <div class="ft-payment-methods">
                    <svg class="icon icon--paypal">
                        <use xlink:href="/global.svg#paypal"></use>
                    </svg>
                    <svg class="icon icon--visa">
                        <use xlink:href="/global.svg#visa"></use>
                    </svg>
                    <svg class="icon icon--mastercard">
                        <use xlink:href="/global.svg#mastercard"></use>
                    </svg>
                    <svg class="icon icon--american-express">
                        <use xlink:href="/global.svg#american-express"></use>
                    </svg>
                </div>
                <nuxt-link class="ft-payment-link" to="#">
                    Read more
                    <svg class="icon icon--right">
                        <use xlink:href="/global.svg#right"></use>
                    </svg>
                </nuxt-link>
            </div>

            <div class="ft-return">
                <div class="ft-head-headline">
                    <svg class="icon icon--happy">
                        <use xlink:href="/global.svg#happy"></use>
                    </svg>
                    <div class="h1">Satisfaction guaranteed</div>
                </div>
                <div class="ft-return-details">
                    Easy returns within 30 days, <b><br class="d-none d-xxl-inline" />no questions asked!</b>
                </div>
                <nuxt-link class="ft-return-link" to="#">
                    Read more
                    <svg class="icon icon--right">
                        <use xlink:href="/global.svg#right"></use>
                    </svg>
                </nuxt-link>
            </div>

            <div class="ft-delivery">
                <div class="ft-head-headline">
                    <svg class="icon icon--truck">
                        <use xlink:href="/global.svg#truck"></use>
                    </svg>
                    <div class="h1">Worldwide delivery</div>
                </div>
                <div class="ft-delivery-methods">
                    <svg class="icon icon--ups">
                        <use xlink:href="/global.svg#ups"></use>
                    </svg>
                    <svg class="icon icon--us-postal-service">
                        <use xlink:href="/global.svg#us-postal-service"></use>
                    </svg>
                </div>
                <nuxt-link class="ft-delivery-link" to="#">
                    Read more
                    <svg class="icon icon--right">
                        <use xlink:href="/global.svg#right"></use>
                    </svg>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Features',
}
</script>
