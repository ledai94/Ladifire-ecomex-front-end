<template>
    <section class="homepage-products">
        <div class="container">
            <h2 class="homepage-products__headline text-center">
                {{ $t('Home.title_homepage_product') }}
            </h2>

            <div class="row" style="justify-content: center">
                <div v-for="(chunk, index) in chunkItems" :key="index" :class="getItemsClass(chunk.length, index)">
                    <div class="row col-12" style="margin: 0">
                        <component
                            :is="getComponent(chunk.length)"
                            v-for="(item, index) in chunk"
                            :key="item.id"
                            :item="item"
                            :class="getComponentClass(getComponent(chunk.length), chunk.length, index)"
                        >
                            <CategoryLink :item="item" />
                        </component>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { chunkPopular, getMediaUrl } from '@/utils'
import CategoryLink from '@/components/Home/CategoryLink'
import _ from 'lodash'

export default {
    name: 'HomepageProduct',
    components: { CategoryLink },
    props: {
        items: {
            type: Array,
            required: true,
        },
    },
    computed: {
        chunkItems() {
            if (this.items.length <= 3) {
                return _.chunk(this.items, 1)
            }

            return chunkPopular(this.items, 3, 4)
        },
    },
    methods: {
        getComponent(item) {
            return item > 1 ? 'div' : 'category-link'
        },
        getComponentClass(component, length, index) {
            if (component == 'div') {
                const classes = ['homepage-products__tile', 'col-6']

                // Medium screen
                switch (length) {
                    case 2:
                        classes.push('col-md-12')
                        break
                }

                // Large screen
                switch (length) {
                    case 1:
                    case 2:
                        classes.push('col-lg-12')
                        break
                    case 3:
                        if (index == 3) {
                            classes.push('col-lg-12')
                        } else {
                            classes.push('col-lg-6')
                        }
                        break
                    case 4:
                        classes.push('col-lg-6')
                        break
                }

                return classes
            } else {
                return 'homepage-products__link'
            }
        },
        getMediaUrl(obj, type) {
            return getMediaUrl(obj, type)
        },
        getItemsClass(itemLength, index) {
            const classes = ['col-12']

            if (index === 0) {
                classes.push('col-md-6')
            } else {
                classes.push('col-md-3')
            }

            switch (this.chunkItems.length) {
                case 3:
                    classes.push('col-lg-4')
                    break
                case 2:
                    classes.push('col-lg-6')
                    break
            }

            if (itemLength === 1) {
                classes.push('homepage-products__tile')
                classes.push('homepage-products__tile--big')
                classes.push('col-sm-6')
            }

            return classes
        },
    },
}
</script>
