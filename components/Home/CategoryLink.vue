<template>
    <nuxt-link
        :class="[topic ? 'homepage-topics__link' : 'homepage-products__link']"
        :to="'/shop/' + $appRoute(department.id, department.slug) + '/' + $appRoute(item.id, item.slug)"
    >
        <picture :class="[topic ? 'homepage-topics__picture' : 'homepage-products__picture']">
            <img
                :alt="item.name"
                :src="getMediaUrl(item.medias)"
                :class="[topic ? 'homepage-topics__image' : 'homepage-products__image']"
                style="position: relative; width: 100%; height: 100%"
            />
        </picture>
        <div v-if="!topic" class="homepage-products__text">
            {{ item.name }}

            <svg class="icon icon--right">
                <use xlink:href="/global.svg#right"></use>
            </svg>
        </div>
        <!--        <div v-else class="homepage-topics__overlay">-->
        <!--            <span class="homepage-topics__text homepage-topics__text&#45;&#45;inverted">{{ item.name }}</span>-->
        <!--        </div>-->
    </nuxt-link>
</template>

<script>
import { getMediaUrl } from '@/utils'

export default {
    name: 'CategoryLink',
    props: {
        item: {
            type: Object,
            required: true,
        },
        topic: {
            type: Boolean,
        },
    },
    computed: {
        department() {
            if (!this.$route.params.category) {
                return { id: this.$t('router.categories') }
            } else {
                return this.departments.find((el) => {
                    return el.id == this.$route.params.category
                })
            }
        },
    },
    methods: {
        getMediaUrl(obj) {
            return getMediaUrl(obj, 'home')
        },
    },
}
</script>
