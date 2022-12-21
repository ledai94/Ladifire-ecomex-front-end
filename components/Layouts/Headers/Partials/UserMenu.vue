<template>
    <div id="login-menu-header">
        <div class="user-menu">
            <!-- <button class="user-menu__button" @click="openLogin"> -->
            <button class="user-menu__button" @click="userMenu">
                <svg class="user-menu__icon user-menu__icon--account">
                    <use xlink:href="/global.svg#account"></use>
                </svg>

                <span v-if="!$auth.loggedIn">{{ $t('headers.login') }}</span>
                <span v-else> {{ $auth.state.user.name }} </span>

                <svg class="user-menu__icon user-menu__icon--down">
                    <use xlink:href="/global.svg#down"></use>
                </svg>
            </button>

            <div v-if="$auth.loggedIn" ref="userMenu" class="user-menu__content">
                <!--TODO: Change User Menu-->
                <div class="user-menu__list">
                    <a class="user-menu__link" :href="linkDashboard">
                        <svg class="user-menu__icon user-menu__icon--gauge">
                            <use xlink:href="/mp.svg#gauge"></use>
                        </svg>

                        <span>{{ $t('headers.overview') }}</span>
                    </a>
                    <a class="user-menu__link" :href="linkDesigns">
                        <svg class="user-menu__icon user-menu__icon--template">
                            <use xlink:href="/mp.svg#template"></use>
                        </svg>

                        <span>{{ $t('headers.designs') }}</span></a
                    >
                </div>

                <button class="user-menu__cta button pattern cta" @click="$auth.logout()">
                    {{ $t('headers.logout') }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { getPartnerUrl } from '@/utils'

export default {
    name: 'UserMenu',
    data() {
        return {
            visible: false,
        }
    },
    computed: {
        linkDashboard() {
            return getPartnerUrl(this)
        },
        linkDesigns() {
            return getPartnerUrl(this, 'designs')
        },
    },
    watch: {
        visible(state) {
            if (state) {
                this.$refs.userMenu.classList.add('open')
            } else {
                this.$refs.userMenu.classList.remove('open')
            }
        },
    },
    methods: {
        userMenu() {
            if (this.$auth.loggedIn) {
                this.visible = !this.visible
            } else {
                this.$login.show()
            }
        },
        // openLogin() {
        //     this.$modal.open({ name: 'openLogin' })
        // },
    },
}
</script>

<style lang="scss" scoped>
@import '~assets/sass/user_menu.scss';
</style>
