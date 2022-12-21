<template>
    <div v-if="product.appearances && product.appearances.length > 1" class="pdp-top__colors">
        <div class="select select--colors small-font">
            <div class="select__headline-wrap">
                <span class="select__headline">
                    {{ $t('detail.color') }}
                </span>

                <span>{{ currentAppearance.name }}</span>

                <span class="select__info tiny-font">
                    {{ $t('detail.totalColor', [product.appearances.length]) }}
                </span>
            </div>

            <div class="select-colors no-scrollbar">
                <button
                    v-for="appearance in product.appearances"
                    :key="appearance.id"
                    :class="[
                        'color',
                        'color__bubble',
                        'color__bubble--border',
                        { active: appearance.id == currentAppearance.id },
                    ]"
                    :style="appearanceStyles(appearance)"
                    :title="appearance.name"
                    @click="selectAppearance(appearance.id)"
                >
                    <svg v-if="appearance.id == currentAppearance.id" class="color__icon color__icon--checkmark">
                        <use id="d-uA" class="" xlink:href="/global.svg#checkmark"></use>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { getAppearanceStyles } from '@/utils.js'

export default {
    name: 'Colors',
    props: {
        currentAppearance: {
            type: Object,
            required: true,
        },
        product: {
            type: Object,
            required: true,
        },
    },
    methods: {
        selectAppearance(id) {
            this.$nuxt.$emit('get-appearance', id)
            if (this.currentAppearance.id == id) {
                return
            }
            // console.log({ query: { ...this.$route.query, appearance: id } })
            // console.log(this.$route)
            this.$router.push({ query: { ...this.$route.query, appearance: id } })
        },
        appearanceStyles(appearance) {
            return getAppearanceStyles(appearance)
        },
        getSizeDefault() {
            return 0
        },
    },
}
</script>

<style>
.select-colors {
    justify-content: space-around !important;
}
</style>
