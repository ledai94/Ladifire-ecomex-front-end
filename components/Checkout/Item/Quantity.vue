<template>
    <div class="basket-item-quantity control-group cf">
        <div v-if="hideActions">
            <div class="label">
                {{ $t('checkout.label.quantity') }}
            </div>

            <span class="value">
                {{ item.amount }}
            </span>
        </div>

        <div v-else class="numeric">
            <a
                v-if="item.amount > 1"
                aria-label="-"
                class="no-hover icon-minus basket-item-decrease round-action removeArticle"
                href="javascript:void(0);"
                @click="updateAmount(item.amount - 1)"
            />

            <div v-else :class="['delete-item btn-group menu-button', { open: confirmDelete }]">
                <a
                    aria-label="Delete"
                    class="dropdown-toggle no-hover icon-trash basket-item-remove round-action removeArticle"
                    href="javascript:void(0);"
                    @click="confirmDelete = !confirmDelete"
                >
                    <span> </span><span class="caret"></span>
                </a>

                <div class="dropdown-menu" name="menu">
                    <div class="delete-item-overlay">
                        <p>{{ $t('checkout.alert.confirmDelete') }}</p>

                        <div class="button-container">
                            <a class="btn-cancel" href="javascript:void(0);" @click="confirmDelete = false">
                                {{ $t('checkout.actions.cancel') }}
                            </a>

                            <a class="btn btn-yes" href="javascript:void(0);" @click="removeItem">
                                {{ $t('checkout.actions.delete') }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <input
                :value="item.amount"
                aria-label="Quantity"
                class="input-mini quantity-input"
                tabindex="0"
                type="text"
                @input="onAmountChange"
            />

            <a
                aria-label="+"
                class="no-hover icon-plus basket-item-increase round-action addArticle"
                href="javascript:void(0);"
                @click="updateAmount(item.amount + 1)"
            />
        </div>
    </div>
</template>

<script>
import _ from 'lodash'

export default {
    name: 'CheckoutItemQuantity',
    props: {
        itemId: {
            type: String,
            required: true,
        },
        item: {
            type: Object,
            required: true,
        },
        hideActions: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
    data() {
        return {
            confirmDelete: false,
        }
    },
    methods: {
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
        removeItem() {
            this.$store.dispatch('carts/remove', this.itemId)
        },
    },
}
</script>
