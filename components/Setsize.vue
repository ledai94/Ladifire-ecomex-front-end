<template>
    <div id="setsize-product" :class="['overlay', 'overlay--select', 'overlay--sizes', { show: open }]">
        <div class="overlay__background"></div>
        <div class="overlay__container">
            <button class="overlay__close" @click="hide">
                <svg class="overlay__icon overlay__icon--x">
                    <use xlink:href="/global.svg#x"></use>
                </svg>
            </button>
            <div class="overlay__content">
                <h4 class="h1">Choose your size</h4>
                <div class="size-fit bold"></div>
                <div class="select size-select">
                    <div
                        v-for="(size, index) in getProduct.sizes"
                        :key="size.id"
                        class="select__item"
                        :data-size-id="size.id"
                        :data-size-name="size.name"
                        @click="addToCart(index)"
                    >
                        <div class="select__label">
                            <span>{{ size.name }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Setsize from '@/plugins/setsize/setsize'

export default {
    name: 'Setsize',
    props: {
        name: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            open: false,
        }
    },
    computed: {
        getProduct() {
            return this.$store.state.getsize.product
        },
    },
    watch: {
        open(state) {
            const el = document.getElementById('setsize-product')

            if (state) {
                el.classList.add('show')
            } else {
                el.classList.remove('show')
            }
        },
    },
    beforeMount() {
        Setsize.EventBus.$on('show', (name) => {
            if (name === this.name) {
                this.open = true
            }
        })

        Setsize.EventBus.$on('hide', (name) => {
            if (name === this.name) {
                this.open = false
            }
        })
    },
    mounted() {
        window.addEventListener('keyup', (e) => {
            if (e.key === 'Escape' && this.open) {
                this.open = false
            }
        })
    },
    // created() {
    //     window.scrollTo(100, 1000)
    // },
    methods: {
        // check() {},
        addToCart(index) {
            this.open = false
            const size = this.getProduct.sizes[index]
            this.$store.dispatch('carts/addOrIncrease', {
                id: this.getProduct.id,
                customize_id: this.getProduct.customize_id,
                appearance_id: this.getProduct.appearances[0].id,
                size_id: size.id,
                amount: 1,
                product: this.getProduct,
            })
        },
        hide() {
            this.open = false
        },
    },
}
</script>

<style></style>
