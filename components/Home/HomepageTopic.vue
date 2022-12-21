<template>
    <section class="homepage-topics">
        <div class="container">
            <h2 class="homepage-topics__headline text-center">
                {{ $t('Home.trending_now') }}
            </h2>

            <div id="topic" class="row" style="justify-content: center">
                <div v-for="(chunk, index) in chunkItems" :key="index" :class="getItemsClass(chunk.length)">
                    <component
                        :is="getComponent(chunk.length)"
                        v-for="item in chunk"
                        :key="item.id"
                        :item="item"
                        :class="getComponentClass([getComponent(chunk.length), item.id])"
                        :topic="topic"
                    >
                        <CategoryLink :item="item" :topic="topic" />
                    </component>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { getMediaUrl, change } from '@/utils'
import CategoryLink from '@/components/Home/CategoryLink'
import _ from 'lodash'

export default {
    components: { CategoryLink },
    props: {
        items: {
            type: Array,
            required: true,
        },
        lenght: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {
            topic: true,
        }
    },
    computed: {
        chunkItems() {
            if (this.items.length <= 4) {
                // eslint-disable-next-line no-undef
                return _.chunk(this.items, 1)
            }
            const result = []
            const tempItems = this.items

            let maxColumn = 4
            const itemCount = 2
            let itemPerColumn = itemCount

            while (true) {
                const items = []

                if (tempItems.length > maxColumn) {
                    itemPerColumn = itemCount
                } else {
                    itemPerColumn = itemCount / 2
                }

                maxColumn--

                for (let i = 0; i < itemPerColumn; i++) {
                    items.push(tempItems.pop())
                }

                result.push(items)

                if (maxColumn < 1) {
                    break
                }
            }
            let sum = 0
            result.forEach((el) => {
                sum += el.length
            })
            if (sum === 6) {
                const arr1 = change(result, 2, 0)
                return arr1
            }
            return result.reverse()
        },
    },
    mounted() {
        document.querySelectorAll('#topic > .col-sm-6 > div.homepage-topics__tile:nth-child(2)').forEach((el) => {
            el.classList.add('no-gutter')
        })
        document.querySelector('#topic > .col-6').classList.add('order-sm-0')
    },
    methods: {
        getComponent(item) {
            return item > 1 ? 'div' : 'category-link'
        },
        getComponentClass(component) {
            if (component[0] == 'div') {
                return ['homepage-topics__tile']
            } else {
                return 'homepage-topics__link'
            }
        },
        getMediaUrl(obj, type) {
            return getMediaUrl(obj, type)
        },
        getItemsClass(itemLength) {
            const classes = ['homepage-topics__tile']
            // console.log(this.lenght)
            switch (this.chunkItems.length) {
                case 3:
                    classes.push('col-6')
                    classes.push('sm-6')
                    break
                case 2:
                    classes.push('col-6')
                    classes.push('sm-6')
                    break
            }

            if (itemLength === 1) {
                classes.push('col-12')
                classes.push('order-1')
                classes.push('col-sm-6')
            }
            if (itemLength === 2) {
                classes.push('col-6')
                classes.push('col-sm-6')
                classes.push('order-1')
            }

            return classes
        },
    },
}
</script>
