import Vue from 'vue'
import { uid } from '~/utils'

export const validateCartData = (items) => {
    if (!Array.isArray(items)) {
        items = [items]
    }

    let result = items.filter((item) => {
        if (!(item instanceof Object)) {
            return
        }

        return (
            'id' in item &&
            'customize_id' in item &&
            'appearance_id' in item &&
            'size_id' in item &&
            'amount' in item &&
            'product' in item
        )
    })

    result = result.filter((i) => {
        if (!(i instanceof Object)) {
            return false
        }

        if (!i.product.images || i.product.images < 1) {
            return false
        }

        let keySize = 0

        Object.keys(i).forEach((key) => {
            if (i[key]) {
                keySize++
            }
        })

        return Object.keys(i).length === keySize
    })

    return result.length === items.length
}

export const state = () => ({
    items: {},
    address: {},
    shippingMethod: null,
    paymentMethod: null,
    errors: [],
    fieldErrors: {},
    loading: false,
    showAddedDialog: false,
})

export const getters = {
    find: (state) => (id) => {
        return state.items[id]
    },
    // eslint-disable-next-line camelcase
    findId: (state) => (item) => {
        return Object.keys(state.items).find((i) => {
            return (
                state.items[i].customize_id == item.customize_id &&
                state.items[i].appearance_id == item.appearance_id &&
                state.items[i].size_id == item.size_id
            )
        })
    },
}

export const mutations = {
    ADD(state, item) {
        Vue.set(state.items, uid(), item)
    },
    REMOVE(state, id) {
        Vue.delete(state.items, id)
    },
    SYNC(state, items) {
        state.items = items
    },
    RESET(state) {
        state.items = {}
    },
    UPDATE_ITEM(state, [id, key, value]) {
        const items = Object.assign({}, state.items)

        items[id] = { ...items[id], [key]: value }

        state.items = items
    },
    SET_ADDRESS(state, data) {
        state.address = data
    },
    SET_SHIPPING_METHOD(state, data) {
        state.shippingMethod = data
    },
    SET_PAYMENT_METHOD(state, data) {
        state.paymentMethod = data
    },
    SET_ERRORS(state, data) {
        state.errors = data
    },
    SET_FIELD_ERRORS(state, data) {
        state.fieldErrors = data
    },
    LOADING(state, loading) {
        state.loading = loading
    },
    SHOW_ADDED_DIALOG(state) {
        state.showAddedDialog = true
    },
    HIDE_ADDED_DIALOG(state) {
        state.showAddedDialog = false
    },
}

export const actions = {
    add({ commit }, item) {
        if (validateCartData(item)) {
            commit('ADD', item)
            commit('SHOW_ADDED_DIALOG')

            console.log('Added item to cart')
        }
    },

    addOrIncrease({ dispatch, getters }, item) {
        const id = getters.findId(item)

        if (id) {
            dispatch('increaseAmount', id)
        } else {
            dispatch('add', item)
        }
    },

    remove({ state, commit, getters }, id) {
        if (getters.find(id)) {
            commit('REMOVE', id)
        }
    },

    sync({ commit, dispatch }, items) {
        let isValid = true

        if (!(items instanceof Object)) {
            isValid = false
        }

        const itemKeys = Object.keys(items)

        if (itemKeys.filter((i) => typeof i === 'string' && i.length === 10).length !== itemKeys.length) {
            isValid = false
        }

        const validateData = Object.values(items)

        if (!Array.isArray(validateData)) {
            isValid = false
        }

        if (!validateCartData(validateData)) {
            isValid = false
        }

        if (isValid) {
            commit('SYNC', items)
        } else {
            dispatch('reset')
        }
    },

    reset({ commit }) {
        commit('RESET')
    },

    increaseAmount({ state, commit, getters }, id) {
        const item = getters.find(id)

        if (item) {
            commit('UPDATE_ITEM', [id, 'amount', item.amount + 1])
        }
    },

    decreaseAmount({ state, commit, getters }, id) {
        const item = getters.find(id)

        if (item) {
            commit('UPDATE_ITEM', [id, 'amount', item.amount - 1])
        }
    },

    updateAmount({ state, commit, getters }, [id, amount]) {
        const item = getters.find(id)

        if (item) {
            commit('UPDATE_ITEM', [id, 'amount', amount])
        }
    },

    updateSize({ state, commit, getters }, [id, sizeId]) {
        const item = getters.find(id)

        if (item && item.product.sizes.find((s) => s.id == sizeId)) {
            commit('UPDATE_ITEM', [id, 'size_id', sizeId])
        }
    },
}
