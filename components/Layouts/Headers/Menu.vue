<template>
    <div class="sprd-header__menu header-menu scroll-wrapper js-header-menu-wrapper">
        <div class="container">
            <div class="header-menu__main-panel">
                <div class="header-menu__main-links js-header-menu-branches zero-state">
                    <div class="introduction">
                        {{ $t('headers.introduction') }}
                    </div>

                    <div class="main-link js-header-menu-link-cyo" data-type="custom">
                        <div class="title">
                            {{ $t('headers.shops.custom.name') }}
                        </div>

                        <div class="description">
                            {{ $t('headers.shops.custom.description') }}
                        </div>

                        <svg class="icon icon--right">
                            <use xlink:href="/global.svg#right"></use>
                        </svg>
                    </div>

                    <div class="main-link js-header-menu-link-mp" data-type="shop">
                        <div class="title">
                            {{ $t('headers.shops.shop.name') }}
                        </div>

                        <div class="description">
                            {{ $t('headers.shops.shop.description') }}
                        </div>

                        <svg class="icon icon--right">
                            <use xlink:href="/global.svg#right"></use>
                        </svg>
                    </div>
                </div>

                <div class="js-menu-wrapper">
                    <nav
                        v-for="(code, shop) in shops"
                        :id="'navbar-item-' + shop"
                        :key="shop"
                        :class="[
                            'header-menu__level-1--' + code,
                            'js-header-menu-' + code,
                            pageCode === code ? 'is-active' : '',
                        ]"
                        :data-type="shop"
                        class="header-menu__level-1 js-header-menu-level-1"
                    >
                        <div
                            v-if="shop === 'shop'"
                            id="header-search-mobile"
                            class="sprd-header__icon sprd-header__icon--search js-header-search-show"
                        >
                            <svg class="icon icon--lens">
                                <use xlink:href="/global.svg#lens"></use>
                            </svg>
                        </div>

                        <ul>
                            <li v-if="shop === 'custom'" class="menu-items-lv2 header-menu__start-creating">
                                <nuxt-link role="menuitem" tabindex="-1" to="/create-your-own">
                                    <svg class="icon icon--pencil">
                                        <use xlink:href="/global.svg#pencil"></use>
                                    </svg>

                                    {{ $t('headers.buttons.start_creating') }}
                                </nuxt-link>
                            </li>

                            <li v-for="item in items[shop]" :key="item.id" class="menu-items-lv2">
                                <nuxt-link
                                    :to="'/' + shop + '/' + $appRoute(item.id, item.slug)"
                                    class="mobile-inactive"
                                    role="menuitem"
                                    tabindex="-1"
                                >
                                    {{ item.name }}

                                    <svg class="icon icon--right">
                                        <use xlink:href="/global.svg#right"></use>
                                    </svg>
                                </nuxt-link>

                                <div class="header-menu__level-2 header-menu__level-2--cyo js-header-menu-level-2">
                                    <div class="header-menu__level-2-title js-header-minimal-close">
                                        {{ item.name }}

                                        <svg class="icon icon--x">
                                            <use xlink:href="/global.svg#x"></use>
                                        </svg>
                                    </div>

                                    <div class="header-menu__level-2-back js-header-menu-level-1-back">
                                        <svg class="icon icon--left">
                                            <use xlink:href="/global.svg#left"></use>
                                        </svg>

                                        {{ $t('headers.buttons.back') }}
                                    </div>

                                    <div class="header-menu__list-wrapper">
                                        <ul>
                                            <li v-for="type in item.types" :key="type.id">
                                                <nuxt-link
                                                    :to="
                                                        '/' +
                                                        shop +
                                                        '/' +
                                                        $appRoute(item.id, item.slug) +
                                                        '/' +
                                                        $appRoute(type.id, type.slug)
                                                    "
                                                    tabindex="-1"
                                                >
                                                    {{ type.name }}
                                                </nuxt-link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>

                <HeaderAdvertisement />
            </div>
        </div>
    </div>
</template>

<script>
import HeaderAdvertisement from '@/components/Layouts/Headers/Partials/Advertisement.vue'
export default {
    name: 'HeaderMenu',
    components: { HeaderAdvertisement },
    props: {
        items: {
            type: Object,
            require: true,
            default: () => {},
        },
    },
    data() {
        return {
            shops: {
                custom: 'cyo',
                shop: 'mp',
            },
        }
    },
    computed: {
        pageCode() {
            return this.$store.state.page.code.toLowerCase()
        },
    },
}
</script>
