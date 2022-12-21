<template>
    <footer>
        <div class="wrapper">
            <div class="service">
                <h3>{{ $t('checkout.service.title') }}</h3>

                <div>{{ $t('checkout.service.info') }}</div>

                <p class="contact">
                    <a :href="'tel:' + $t('checkout.service.title')">
                        {{ $t('checkout.service.phone') }}
                    </a>
                </p>
            </div>

            <div class="trust">
                <h3>{{ $t('checkout.footer.trust.title') }}</h3>

                <div class="trust-element-group">
                    <div class="trust-elements">
                        <div class="sprd-guarantee sprd-guarantee-us" />
                    </div>

                    <div class="trust-elements"></div>
                </div>
            </div>
        </div>

        <div class="sprd-footer">
            <div class="wrapper">
                <button class="inline-btn link">
                    {{ $t('checkout.footer.legal') }}
                </button>

                <button class="inline-btn link">
                    {{ $t('checkout.footer.policy') }}
                </button>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'CheckoutFooter',
}
</script>
