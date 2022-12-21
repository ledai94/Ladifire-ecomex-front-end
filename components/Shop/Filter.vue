<template>
    <div class="css-152tcew en1t2qb0">
        <div v-if="url == 'custom'" class="css-1agsezw e1k5ptyl0">
            <button type="button" width="full" class="css-a9k0jb e1553w8p0" @click.prevent="openFilter">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    class="css-e9xurp e1k5ptyl3"
                    style="transform: rotate(90deg)"
                >
                    <path
                        d="M5.68 21.86V0H3.39v21.86a4.57 4.57 0 000 8.81V32h2.29v-1.33a4.57 4.57 0 000-8.8zm-1.14 6.71a2.29 2.29 0 110-4.57 2.29 2.29 0 010 4.57zM17.1 3.63V0h-2.29v3.63a4.57 4.57 0 000 8.82V32h2.29V12.45a4.57 4.57 0 000-8.82zm-1.15 6.66a2.29 2.29 0 110-4.58 2.29 2.29 0 010 4.58zm16 5.71c0-2.08-1.41-3.9-3.43-4.41V0h-2.28v11.6a4.57 4.57 0 000 8.82V32h2.29V20.42A4.57 4.57 0 0031.95 16zm-4.57 2.29a2.29 2.29 0 110-4.58 2.29 2.29 0 010 4.58z"
                    ></path></svg
                >{{ $t('filterBar.filter') }}
            </button>
        </div>
        <div class="e1k5ptyl1" :class="[isActive ? 'css-nsb694' : 'css-1mm0243']">
            <div class="css-14ftddo e1k5ptyl2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    class="css-e9xurp e1k5ptyl3"
                    style="transform: rotate(90deg)"
                >
                    <path
                        d="M5.68 21.86V0H3.39v21.86a4.57 4.57 0 000 8.81V32h2.29v-1.33a4.57 4.57 0 000-8.8zm-1.14 6.71a2.29 2.29 0 110-4.57 2.29 2.29 0 010 4.57zM17.1 3.63V0h-2.29v3.63a4.57 4.57 0 000 8.82V32h2.29V12.45a4.57 4.57 0 000-8.82zm-1.15 6.66a2.29 2.29 0 110-4.58 2.29 2.29 0 010 4.58zm16 5.71c0-2.08-1.41-3.9-3.43-4.41V0h-2.28v11.6a4.57 4.57 0 000 8.82V32h2.29V20.42A4.57 4.57 0 0031.95 16zm-4.57 2.29a2.29 2.29 0 110-4.58 2.29 2.29 0 010 4.58z"
                    ></path></svg
                >{{ $t('filterBar.filter')
                }}<button class="css-1gwvi1g e1k5ptyl4" @click.prevent="closeFilter">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="8 8 16 16"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                    >
                        <path
                            d="M24.11 9.39L22.7 7.97l-6.63 6.63-6.62-6.63-1.41 1.42 6.62 6.62-6.62 6.63 1.41 1.41 6.62-6.62 6.63 6.62 1.41-1.41-6.62-6.63 6.62-6.62z"
                        ></path>
                    </svg>
                </button>
            </div>
            <div class="css-x5r8aa filterBar col-12 hasSidebar" style="width: 100%">
                <div class="css-x5r8aa e1k5ptyl5 filters">
                    <div
                        id="sidebarDepartmentFilter"
                        class="departments x SidebarFilter collapsible"
                        :class="[toggleDeparment ? 'open' : '']"
                    >
                        <div id="l-dJ" class="head" @click.prevent="toggleDeparment = !toggleDeparment">
                            <div id="l-dK" class="title">{{ $t('filterBar.categories') }}</div>
                            <div id="l-dL" class="label selectedFilter">{{ nameDepartmentSelected }}</div>
                            <div id="l-dM" class="control expand">
                                <svg id="l-sF" class="expand__icon expand__icon--minus">
                                    <use id="l-uA" class="" xlink:href="/global.svg#minus"></use></svg
                                ><svg id="l-sG" class="expand__icon expand__icon--plus">
                                    <use id="l-uB" class="" xlink:href="/global.svg#plus"></use>
                                </svg>
                            </div>
                        </div>
                        <div id="l-dN" class="filterItems collapsible__inner">
                            <div
                                v-for="(department, index) in departments"
                                id="dep-D1"
                                :key="index"
                                class="Item filter filterText"
                            >
                                <nuxt-link
                                    class="Label item"
                                    :to="'/' + url + '/' + $appRoute(department.id, department.slug)"
                                    >{{ department.name }}
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                    <div
                        id="sidebarCategoryFilter"
                        class="labelCategories x SidebarFilter collapsible"
                        :class="[toggleCategory ? 'open' : '']"
                    >
                        <div id="l-dO" class="head" @click.prevent="toggleCategory = !toggleCategory">
                            <div id="l-dP" class="title">{{ $t('filterBar.products') }}</div>
                            <div id="l-dQ" class="label selectedFilter">{{ nameCategorySelected }}</div>
                            <div id="l-dR" class="control expand">
                                <svg id="l-sR" class="expand__icon expand__icon--minus">
                                    <use id="l-uL" class="" xlink:href="/global.svg#minus"></use></svg
                                ><svg id="l-sS" class="expand__icon expand__icon--plus">
                                    <use id="l-uM" class="" xlink:href="/global.svg#plus"></use>
                                </svg>
                            </div>
                        </div>
                        <div id="l-dS" class="filterItems collapsible__inner">
                            <template v-for="(category, index) in categories">
                                <Category
                                    :key="index"
                                    v-bind="{ selectedCategory, selectedDepartment, category, departments }"
                                />
                            </template>
                        </div>
                    </div>
                </div>
                <ShopResetFilter
                    v-if="isActive"
                    v-bind="{ baseUrl: '/' + $route.params.shop, selectedCategory, selectedDepartment }"
                />
            </div>
            <div class="css-1fodp0m e1k5ptyl7">
                <button type="button" width="full" class="css-pnnvkq e1553w8p0" @click.prevent="closeFilter">
                    {{ $t('filter.apply') }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import Category from '@/components/Shop/Category'
import ShopResetFilter from '@/components/Shop/ResetFilter'
export default {
    components: { Category, ShopResetFilter },
    props: {
        filters: {
            type: Object,
            required: true,
        },
        selectedDepartment: {
            type: Object,
            required: false,
            default: () => {},
        },
        selectedCategory: {
            type: Object,
            required: false,
            default: () => {},
        },
    },
    data() {
        return {
            toggleDeparment: true,
            toggleCategory: true,
            windowWidth: 0,
        }
    },
    computed: {
        departments() {
            return this.filters.departments
        },
        categories() {
            return this.filters.categories
        },
        isActive() {
            return this.$store.state.shop.openClose
        },
        url() {
            return this.$route.params.shop
        },
        nameDepartmentSelected() {
            if (this.selectedDepartment !== undefined) {
                return this.selectedDepartment.name
            } else {
                return ''
            }
        },
        nameCategorySelected() {
            if (this.selectedCategory !== undefined) {
                return this.selectedCategory.name
            } else {
                return ''
            }
        },
    },
    watch: {
        isActive(state) {
            if (document) {
                document.querySelector('html').classList.toggle('no-scroll', state)
            }
        },
    },
    mounted() {
        if (this.$route.params.category !== undefined && this.$route.params.category != this.$t('router.categories')) {
            document
                .querySelector('#sidebarDepartmentFilter .filter:nth-child(' + this.$route.params.category + ')')
                .classList.add('active')
        }
        this.$nextTick(() => {
            window.addEventListener('resize', this.getWindowWidth)

            this.getWindowWidth()
        })
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.getWindowWidth)
    },
    methods: {
        openFilter() {
            // this.isActive = par
            this.$store.commit('shop/openFilter')
        },
        closeFilter() {
            // this.isActive = par
            this.$store.commit('shop/closeFilter')
        },
        getWindowWidth(event) {
            this.windowWidth = document.documentElement.clientWidth
            this.$store.commit('shop/setWindowWidth', this.windowWidth)
        },
    },
}
</script>
<style lang="scss">
.css-x5r8aa {
    flex: 1 1 auto !important;
}
.css-nsb694 {
    flex-direction: column;
    position: fixed;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-color: rgb(255, 255, 255);
    z-index: 10;
    display: flex;
}
// .col-12 {
//     max-width: 100% !important;
// }
.button.pattern {
    background-color: #fff;
    border: 0.125rem solid #00b2a5;
    border-radius: 0.25rem;
    color: #00b2a5;
    font-weight: 700;
    line-height: 1.5rem;
    padding: 16px;
}
@media (min-width: 768px) {
    .css-nsb694 {
        position: unset;
    }
}
</style>
