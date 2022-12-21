<template>
    <div class="sprd-header__top js-top-panel">
        <div class="container">
            <PromoPanel />

            <div class="start-selling">
                <a :href="urlDashboard">
                    <svg class="icon icon--shop">
                        <use xlink:href="/global.svg#shop"></use>
                    </svg>

                    {{ $t('headers.start_selling') }}
                </a>
            </div>

            <ul class="help-login">
                <li>
                    <UserMenu />
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import PromoPanel from '@/components/Layouts/Headers/Partials/PromoPanel.vue'
import UserMenu from '@/components/Layouts/Headers/Partials/UserMenu.vue'

export default {
    name: 'TopPanel',
    components: { PromoPanel, UserMenu },
    computed: {
        urlDashboard() {
            return process.env.DASHBOARD_BASE_URL + '/designs'
        },
    },
}
</script>
