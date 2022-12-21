<template>
    <div id="header" role="banner">
        <div class="wrapper">
            <a class="logo" href="/">
                <img alt="" src="~assets/images/2.png" />
            </a>

            <div class="info">
                <div class="contact">
                    {{ $t('checkout.service.info') }}

                    <a :href="'tel:' + $t('checkout.service.title')" class="phone">
                        {{ $t('checkout.service.phone') }}
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CheckoutHeader',
}
</script>
