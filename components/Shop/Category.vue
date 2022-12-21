<template>
    <div id="label-cat-K118614" class="Item filterText" :class="this.$route.params.type == category.id ? 'active' : ''">
        <nuxt-link
            class="Label item"
            :to="
                '/' +
                this.$route.params.shop +
                '/' +
                $appRoute(item.id, item.slug) +
                '/' +
                $appRoute(category.id, category.slug)
            "
            >{{ category.name }}
            <!-- <svg class="icon icon--x">
                <use xlink:href="/global.svg#x"></use></svg> -->
        </nuxt-link>
        <div v-if="categoryChildrens !== null" class="SubFilters">
            <div
                v-for="categoryChildren in categoryChildrens"
                id="label-cat-K120024"
                :key="categoryChildren.id"
                class="Item filterText"
            >
                <nuxt-link class="Label item" to="#"
                    >{{ categoryChildren.name }}
                    <!-- <svg class="icon icon--x">
                        <use xlink:href="/global.svg#x"></use></svg> -->
                </nuxt-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        category: {
            type: Object,
            required: true,
        },
        departments: {
            type: Array,
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
    computed: {
        categoryChildrens() {
            return this.category.children
        },
        item() {
            if (!this.$route.params.category) {
                return { id: this.$t('router.categories') }
            } else {
                return this.departments.find((el) => {
                    return el.id == this.$route.params.category
                })
            }
        },
    },
}
</script>
