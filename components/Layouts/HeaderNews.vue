<template>
    <header id="sprd-header-wrap" class="clearfix header-nav-top-activ">
        <div id="sprd-header">
            <div
                class="sprd-menu-btn sprd-header-left sprd-header-col"
                :class="{ 'menu-btn-open': isMenu === true }"
                @click="toggleMenu"
            >
                <div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
                <span>Menu</span>
            </div>
            <div class="sprd-search-btn sprd-header-right sprd-header-col" @click="toggleSearch">
                <div></div>
            </div>
            <div
                class="sprd-main-nav sprd-header-left sprd-header-col"
                :class="{ 'sprd-main-nav-activ menu-display': isMenu === true }"
                style="height: auto"
            >
                <nav>
                    <ul id="menu-main-navi-new-template-1" class="menu">
                        <li
                            v-for="category in navbar"
                            id="nav-menu-item-20069"
                            :key="category.id"
                            class="main-menu-item menu-item-even menu-item-depth-0 menu-item menu-item-type-taxonomy menu-item-object-category"
                            @click="isMenu = false"
                        >
                            <nuxt-link
                                style="-webkit-animation-delay: 0ms; animation-delay: 0ms"
                                :to="'/news/' + category.id"
                                class="menu-link main-menu-link"
                                >{{ category.title }}</nuxt-link
                            >
                        </li>
                    </ul>
                </nav>
            </div>
            <div
                class="sprd-search-container sprd-header-right sprd-header-col"
                :class="{ 'menu-display': isSearch === true }"
            >
                <form id="searchform" method="get" action="https://www.ecomex.com/blog/">
                    <input id="s" type="text" class="field" name="s" placeholder="Search ..." />
                    <input id="searchsubmit" type="submit" class="submit" name="submit" value="Search" />
                </form>
            </div>
            <div class="sprd-header-logo">
                <nuxt-link to="/news" class="logo"></nuxt-link>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'HeaderNews',
    props: {
        navbar: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            isMenu: false,
            isSearch: false,
        }
    },
    methods: {
        toggleMenu() {
            this.isMenu = !this.isMenu
            this.$emit('toggle-menu', this.isMenu)
        },
        toggleSearch() {
            this.isSearch = !this.isSearch
        },
    },
}
</script>

<style lang="scss">
.menu-display {
    display: block !important;
}
</style>
