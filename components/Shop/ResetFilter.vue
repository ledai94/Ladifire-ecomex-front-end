<template>
    <div v-if="selectedFilters.length > 0" class="css-1ebnygn en1t2qb0">
        <ul class="css-s1rp3y en1t2qb0">
            <li class="css-2rlxtj en1t2qb0">
                <nuxt-link :to="baseUrl" class="css-708qat e1gz14ml1">
                    {{ $t('filter.reset') }}

                    <svg
                        class="css-op46v e1gz14ml0"
                        fill="currentColor"
                        height="1em"
                        viewBox="8 8 16 16"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M24.11 9.39L22.7 7.97l-6.63 6.63-6.62-6.63-1.41 1.42 6.62 6.62-6.62 6.63 1.41 1.41 6.62-6.62 6.63 6.62 1.41-1.41-6.62-6.63 6.62-6.62z"
                        />
                    </svg>
                </nuxt-link>
            </li>

            <li v-for="(item, index) in selectedFilters" :key="index" class="css-2rlxtj en1t2qb0">
                <nuxt-link class="css-1t1q81a e1gz14ml1" :to="item.to">
                    {{ item.label }}

                    <svg
                        class="css-op46v e1gz14ml0"
                        fill="currentColor"
                        height="1em"
                        viewBox="8 8 16 16"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M24.11 9.39L22.7 7.97l-6.63 6.63-6.62-6.63-1.41 1.42 6.62 6.62-6.62 6.63 1.41 1.41 6.62-6.62 6.63 6.62 1.41-1.41-6.62-6.63 6.62-6.62z"
                        />
                    </svg>
                </nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'ShopResetFilter',
    props: {
        baseUrl: {
            type: String,
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
        selectedFilters() {
            const filters = []
            const department = this.selectedDepartment
            const category = this.selectedCategory

            if (department) {
                filters.push({
                    to: this.baseUrl + '/' + (category ? this.$t('router.categories') + '/' + category.id : ''),
                    label: this.selectedDepartment.name,
                })
            }

            if (category) {
                filters.push({
                    to: this.baseUrl + '/' + (department ? department.id : ''),
                    label: this.selectedCategory.name,
                })
            }

            return filters
        },
    },
}
</script>
