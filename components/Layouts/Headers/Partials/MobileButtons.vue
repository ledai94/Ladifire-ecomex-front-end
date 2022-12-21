<template>
    <div class="sprd-header__menu-icons js-header-icons">
        <nuxt-link class="sprd-header__icon sprd-header__icon--selling" to="/">
            <svg class="icon icon--shop">
                <use xlink:href="/global.svg#shop"></use>
            </svg>

            <div class="sprd-header__icon-label">
                {{ $t('headers.start_selling') }}
            </div>
        </nuxt-link>

        <div
            v-if="!$auth.loggedIn"
            id="login-button-wrapper"
            class="sprd-header__icon sprd-header__icon--login"
            @click="$login.show()"
        >
            <svg class="icon icon--account">
                <use xlink:href="/global.svg#account"></use>
            </svg>

            <div id="login-button" class="sprd-header__icon-label">
                {{ $t('headers.login') }}
            </div>
        </div>

        <div
            v-if="$auth.loggedIn"
            id="logout-button-wrapper"
            class="sprd-header__icon sprd-header__icon--login"
            @click="$auth.logout()"
        >
            <svg class="icon icon--account">
                <use xlink:href="/global.svg#account"></use>
            </svg>

            <div id="logout-button" class="sprd-header__icon-label">
                {{ $t('headers.logout') }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MobileButtons',
}
</script>
