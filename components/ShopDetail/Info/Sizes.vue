<template>
    <div v-if="product.sizes && product.sizes.length > 0" class="pdp-top__sizes full-width">
        <portal to="modals">
            <div class="overlay overlay--select overlay--sizes" :class="{ show: sizePanel }">
                <div class="overlay__background" @click="sizePanel = !sizePanel" />

                <div class="overlay__container">
                    <button class="overlay__close" @click="sizePanel = !sizePanel">
                        <svg class="overlay__icon overlay__icon--x">
                            <use xlink:href="/global.svg#x" />
                        </svg>
                    </button>

                    <div class="overlay__content">
                        <h4 class="h1">{{ $t('detail.chooseSize') }}</h4>

                        <span class="bold">
                            {{ $t('detail.fit') }}
                        </span>

                        <div class="size-fit bold">
                            {{ product.size_fit_hint }}
                        </div>

                        <div class="select size-select size-select--small">
                            <div
                                v-for="size in product.sizes"
                                :key="size.id"
                                :class="['select__item', { active: size.id == currentSizeId }]"
                                :title="size.name"
                                @click="setScroll()"
                            >
                                <button
                                    class="select__label"
                                    @click="
                                        currentSizeId = size.id
                                        sizePanel = false
                                        isSizeChecked = true
                                    "
                                >
                                    {{ size.name }}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </portal>

        <button
            :class="['select-btn', 'select-btn--size', 'only-small', isSizeChecked ? '' : 'select--error']"
            @click="sizePanel = !sizePanel"
        >
            <span class="select-btn__label">
                {{ currentSize ? currentSize.name : $t('detail.chooseSize') }}
            </span>

            <svg class="icon icon--down">
                <use xlink:href="/global.svg#down"></use>
            </svg>
        </button>

        <div
            :class="[
                'select',
                'size-select',
                'small-font',
                'only-large',
                'size-select--small',
                isSizeChecked ? '' : 'select--error',
            ]"
        >
            <div class="select__headline">
                {{ $t('detail.chooseSize') }}
            </div>

            <div class="select__items no-scrollbar">
                <div
                    v-for="size in product.sizes"
                    :key="size.id"
                    :class="['select__item', { active: size.id == currentSizeId }]"
                    :title="size.name"
                    @click="setScroll()"
                >
                    <button class="select__label" @click="currentSizeId = size.id">
                        {{ size.name }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Sizes',
    props: {
        product: {
            type: Object,
            required: true,
        },
    },
    data() {
        const isSizeChecked = this.$nuxt.$on('size-error', (value) => {
            this.isSizeChecked = value
        })
        return {
            isSizeChecked,
            sizePanel: false,
        }
    },
    computed: {
        currentSize() {
            return this.product.sizes.find((s) => s.id == this.currentSizeId)
        },
        currentSizeId: {
            get() {
                this.$nuxt.$emit('setsize', this.$route.query.size)
                return this.$route.query.size
            },
            set(value) {
                if (this.currentSizeId == value) {
                    return
                }
                this.$router.push({ query: { ...this.$route.query, size: value } })
            },
        },
    },

    methods: {
        setScroll() {
            document.querySelector('html').scrollTo(0, window.scrollY)
        },
    },
}
</script>
