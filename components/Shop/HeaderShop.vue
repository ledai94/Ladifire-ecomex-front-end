<template>
    <div class="css-0 en1t2qb0">
        <div>
            <ol class="css-10f6cge e1na0waw0">
                <li v-for="(item, index) in breadcrumbs" :key="index">
                    <nuxt-link v-if="index != breadcrumbs.length - 1" :to="search ? '' : item.to" class="css-1unrqcp">
                        {{ item.label }}
                    </nuxt-link>

                    <span v-else>{{ item.label }}</span>

                    <svg
                        v-if="index != breadcrumbs.length - 1"
                        class="css-6xwt68 e1na0waw2"
                        fill="currentColor"
                        height="1em"
                        viewBox="0 0 32 32"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M9.46 31.9L25.36 16 9.46.1 6.64 2.93 19.7 16 6.64 29.07l2.82 2.83z"></path>
                    </svg>
                </li>
            </ol>

            <div v-if="!shopUser" class="css-m7xnyq e1ufa10z0">
                <h1 class="css-l8sws8 e19iwmj70">
                    {{ title }}
                </h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ShopHeader',
    props: {
        search: {
            type: Boolean,
            required: false,
            default: false,
        },
        title: {
            type: String,
            required: false,
            default: () => '',
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
        filter: {
            type: Object,
            required: false,
            default: () => {},
        },
        shopUser: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
    computed: {
        isActive() {
            return this.$store.state.shop.openClose
        },
        breadcrumbs() {
            const shop = this.$route.params.shop || 'search'
            const breadcrumbs = [{ to: '/', label: this.$t('category.home') }]

            if (shop) {
                breadcrumbs.push({
                    to: '/' + shop,
                    label: this.$t('shop.' + shop),
                })
            }

            if (this.selectedDepartment) {
                breadcrumbs.push({
                    to: '/' + shop + '/' + this.selectedDepartment.id,
                    label: this.selectedDepartment.name,
                })
            }

            if (this.selectedCategory) {
                const department = this.selectedDepartment ? this.selectedDepartment.id : this.$t('router.categories')

                breadcrumbs.push({
                    to: '/' + shop + '/' + department + '/' + this.selectedCategory.id,
                    label: this.selectedCategory.name,
                })
            }

            return breadcrumbs
        },
    },
}
</script>

<style scoped>
.css-10f6cge {
    list-style: none;
}
</style>
