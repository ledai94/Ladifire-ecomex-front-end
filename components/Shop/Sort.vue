<template>
    <div class="listHead">
        <div v-if="currentShop == 'shop' || search" class="gridPadding listButtons">
            <div class="selector selector--views">
                <span class="thumb-font">Change view</span>
                <div
                    class="selector__item"
                    :class="{ active: viewMode === 'product' }"
                    @click.prevent="onChangeViewMode('product')"
                >
                    <svg class="selector__item__icon selector__item__icon--template">
                        <use id="l-u1O" class="" xlink:href="/mp.svg#template"></use>
                    </svg>
                </div>
                <div
                    class="selector__item"
                    :class="{ active: viewMode === 'design' }"
                    @click.prevent="onChangeViewMode('design')"
                >
                    <svg class="selector__item__icon selector__item__icon--image">
                        <use class="" xlink:href="/mp.svg#image"></use>
                    </svg>
                </div>
            </div>
            <div class="button pattern cta filter only-small" style="padding: 0.3rem 1rem" @click.prevent="openFilter">
                <svg class="icon icon--control">
                    <use class="" xlink:href="/global.svg#control"></use></svg
                ><span class="caption">Filter</span><span id="l-s2M" class="count d-none">0</span>
            </div>
        </div>
        <div v-if="!search" id="sortByFilter" class="InListFilter Sortby gridPadding thumb-font">
            <span class="label">
                {{ $t('filter.sort') }}
            </span>
            <div class="filterItems">
                <span v-for="(label, type, index) in sortTypes" :key="type">
                    <nuxt-link
                        :class="['ejder8n0', sort == type ? 'css-1t2iw6e' : 'css-1unrqcp']"
                        :to="{ query: { ...$route.query, sort: type, page: 1 } }"
                        style="margin: 0 5px 0 5px"
                    >
                        {{ label }}
                    </nuxt-link>

                    <span v-if="index != Object.keys(sortTypes).length - 1"> |</span>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ShopSort',
    props: {
        sort: {
            type: String,
            required: false,
            default: 'popular',
        },
        onChangeViewMode: {
            type: Function,
            required: false,
        },
        viewMode: {
            type: String,
            required: false,
        },
        search: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
    data() {
        return {
            sortTypes: {
                popular: this.$t('sortTypes.popular'),
                newest: this.$t('sortTypes.newest'),
            },
        }
    },
    computed: {
        currentShop() {
            return this.$route.params.shop
        },
    },
    methods: {
        openFilter() {
            this.$store.commit('shop/openFilter')
        },
    },
}
</script>
