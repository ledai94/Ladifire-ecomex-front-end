<template>
    <client-only>
        <div v-click-outside="hideCart">
            <button
                :class="['sprd-header__icon', 'sprd-header__icon--basket', { 'active open': open }]"
                :title="$t('headers.cart.title')"
                @click="open = !open"
            >
                <div>
                    <svg class="icon icon--cart">
                        <use xlink:href="/global.svg#cart" />
                    </svg>

                    <span :class="['sprd-header__icon-counter', { 'd-none': total === 0 }]">
                        {{ total }}
                    </span>
                </div>
            </button>

            <div :class="['basket', { 'basket--empty': total === 0 }, { 'd-none': !open }]">
                <h2 class="basket__header h2">
                    {{ $t('headers.cart.title') }}
                </h2>

                <div class="basket__content">
                    <div class="basket__empty">
                        <img :alt="$t('headers.cart.empty')" src="~assets/images/empty-basket.jpg" />

                        <div class="basket__text">
                            {{ $t('headers.cart.empty') }}
                        </div>

                        <button class="button pattern" @click="open = false">
                            {{ $t('headers.cart.close') }}
                        </button>
                    </div>

                    <div class="basket__items">
                        <CartItem
                            v-for="id in Object.keys(items)"
                            :key="id"
                            :item="items[id]"
                            :item-id="id"
                            :price="prices.detail ? prices.detail[id] || {} : {}"
                            @delete="handleDelete"
                        />
                    </div>

                    <div class="basket__cost-details">
                        <div class="basket__row">
                            <div>{{ $t('headers.cart.subtotal') }}</div>
                            <div>{{ formatPrice(prices.subtotal || 0) }}</div>
                        </div>

                        <div class="basket__row">
                            <div>{{ $t('headers.cart.tax') }}</div>
                            <div>{{ formatPrice(prices.tax || 0) }}</div>
                        </div>
                    </div>
                </div>

                <div class="basket__footer">
                    <div class="basket__hint d-none"></div>

                    <div class="basket__row">
                        <div>{{ $t('headers.cart.total') }}</div>

                        <div class="basket__price">
                            {{ formatPrice(prices.total || 0) }}
                        </div>
                    </div>

                    <div class="basket__buttons">
                        <a class="button pattern cta" href="/cart/checkout">
                            {{ $t('headers.cart.checkout') }}
                        </a>

                        <button class="button pattern" @click="open = false">
                            {{ $t('headers.cart.close') }}
                        </button>
                    </div>
                </div>
            </div>

            <Dialog
                :action="$t('headers.cart.delete.action')"
                :title="$t('headers.cart.delete.title')"
                name="delete-cart-item"
                @action="removeCartItem"
            >
                {{ $t('headers.cart.delete.content') }}
            </Dialog>
        </div>
    </client-only>
</template>

<script>
import { costs } from '@/api/cart'
import CartItem from '@/components/Layouts/Headers/Partials/CartItem'
import { formatPrice } from '@/utils'
import ClickOutside from 'vue-click-outside'

export default {
    name: 'Cart',
    directives: { ClickOutside },
    components: { CartItem },
    data() {
        return {
            open: false,
            prices: {},
            removeId: null,
        }
    },
    computed: {
        total() {
            return Object.keys(this.items).length
        },
        items() {
            return this.$store.state.carts.items
        },
    },
    watch: {
        items() {
            this.updatePrices()
        },
        open(state) {
            const el = document.querySelector('#sprd-main')

            if (state) {
                el.classList.add('itemListOpen')
            } else {
                el.classList.remove('itemListOpen')
            }
        },
    },
    created() {
        this.updatePrices()
    },
    methods: {
        handleDelete(id) {
            this.removeId = id
            this.$dialog.show('delete-cart-item')
        },
        removeCartItem() {
            if (this.removeId) {
                this.$store.dispatch('carts/remove', this.removeId)
            }

            this.$dialog.hide('delete-cart-item')
        },
        hideCart() {
            this.open = false
        },
        formatPrice(price) {
            return this.$t('general.price', [formatPrice(price)])
        },
        updatePrices() {
            const data = this.formatData(this.items)

            if (Object.keys(data.products).length > 0) {
                costs(this.$axios, data).then((response) => {
                    if (response.total) {
                        this.prices = { ...this.prices, ...response }
                    }
                })
            }
        },
        formatData(data) {
            const result = {
                products: {},
            }

            Object.keys(data).forEach((id) => {
                const item = Object.assign({}, data[id])

                delete item.product

                result.products[id] = { ...item, id: item.customize_id }
            })

            return result
        },
    },
}
</script>
