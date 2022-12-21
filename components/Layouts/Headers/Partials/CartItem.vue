<template>
    <div class="basket__item">
        <div class="product__image-wrap square-size">
            <img :alt="item.product.name" :src="imageSrc" />
        </div>

        <div class="product__information">
            <a class="product__name" href="#">
                {{ item.product.name }}
            </a>

            <div class="small-font">
                {{ $t('headers.cart.color', [appearance.name]) }}
            </div>

            <div class="small-font">
                {{ $t('headers.cart.size', [size.name]) }}
            </div>

            <div class="product__quantity_wrap">
                <div class="product__quantity">
                    <button :class="['button', { disabled: item.amount < 2 }]" @click="updateAmount(item.amount - 1)">
                        <svg class="icon icon--minus">
                            <use xlink:href="/global.svg#minus" />
                        </svg>
                    </button>

                    <input
                        :value="item.amount"
                        aria-label="Quantity"
                        class="product__input"
                        min="1"
                        type="number"
                        @input="onAmountChange"
                    />

                    <button class="increase button" @click="updateAmount(item.amount + 1)">
                        <svg class="icon icon--plus">
                            <use xlink:href="/global.svg#plus" />
                        </svg>
                    </button>
                </div>

                <button class="button delete-all" @click="$emit('delete', itemId)">
                    <svg class="icon icon--trash-can">
                        <use xlink:href="/mp.svg#trash-can" />
                    </svg>
                </button>
            </div>

            <div class="price__wrap">
                <div>
                    <div class="price__now-price price--mini-basket">
                        {{ formatPrice(price.total) }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { formatPrice } from '@/utils'
import _ from 'lodash'

export default {
    name: 'CartItem',
    props: {
        itemId: {
            type: String,
            required: true,
        },
        item: {
            type: Object,
            required: true,
        },
        price: {
            type: Object,
            required: true,
        },
    },
    computed: {
        image() {
            return this.item.product.images.find((i) => i.appearance_id == this.item.appearance_id)
        },
        imageSrc() {
            return this.image.media.url
        },
        appearance() {
            return this.item.product.appearances.find((a) => a.id == this.item.appearance_id)
        },
        size() {
            return this.item.product.sizes.find((a) => a.id == this.item.size_id)
        },
    },
    methods: {
        formatPrice(price) {
            return this.$t('general.price', [formatPrice(price)])
        },
        onAmountChange(e) {
            let amount = e.target.value

            if (isNaN(amount) || amount < 1) {
                amount = 1
            }

            this.updateAmount(Math.round(amount))
        },
        updateAmount: _.debounce(function (amount) {
            this.$store.dispatch('carts/updateAmount', [this.itemId, amount])
        }, 300),
    },
}
</script>
