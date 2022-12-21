export const state = () => ({
    items: [],
})
export const getters = {}
export const mutations = {
    onChangeSize(state, i, value) {
        state.items[i].sizeId = value
    },
    inputQuantityItem(state, i, value) {
        state.items[i].quantity = value
    },

    showDeleteProductPopup(state, index) {
        state.items[index].form_checkout.isShowDeleteProductPopup = !state.items[index].form_checkout
            .isShowDeleteProductPopup
    },
    OnGetMainAppearance(state, objIndex) {
        console.log(state, objIndex)
        const formCheckout = state.items[objIndex.indexItems].form_checkout
        for (let i = 0; i < formCheckout.isActive.length; i++) {
            if (i == objIndex.indexAppearance) {
                formCheckout.isActive[i] = true
            } else {
                formCheckout.isActive[i] = false
            }
        }
        if (objIndex.indexAppearance == 0) {
            formCheckout.nameAppearance = 'Front'
            formCheckout.mainAppearance = formCheckout.listAppearance[0].media.url
        }
        if (objIndex.indexAppearance == 1) {
            formCheckout.nameAppearance = 'Back'
            formCheckout.mainAppearance = formCheckout.listAppearance[1].media.url
        }
        if (objIndex.indexAppearance == 2) {
            formCheckout.nameAppearance = 'Left'
            formCheckout.mainAppearance = formCheckout.listAppearance[2].media.url
        }
        if (objIndex.indexAppearance == 3) {
            formCheckout.nameAppearance = 'Right'
            formCheckout.mainAppearance = formCheckout.listAppearance[3].media.url
        }
    },
    addPropertyForCheckoutPage(state, index) {
        state.items[index].form_checkout = {}
        const formCheckout = state.items[index].form_checkout

        formCheckout.isShowProductDetail = false
        const listAppearance = state.items[index].product.images.filter(
            (value) => value.appearance_id == state.items[index].appearanceId
        )
        const listAppearanceForProductDetail = listAppearance.splice(0, 4)
        formCheckout.listAppearance = listAppearanceForProductDetail
        formCheckout.mainAppearance = listAppearanceForProductDetail[0].media.url
        formCheckout.nameAppearance = 'Front'
        formCheckout.attributeAriaLabel = 'Select: ' + formCheckout.nameAppearance
        formCheckout.isActive = [true, false, false, false]
        formCheckout.isShowDeleteProductPopup = false
    },
    updateIsShowProductDetail(state, i) {
        state.items[i].form_checkout.isShowProductDetail = !state.items[i].form_checkout.isShowProductDetail
    },
    setItems(state, par) {
        state.items = par
    },
    insertItem(state, item) {
        const clone = JSON.parse(JSON.stringify(item))
        clone.form_checkout.isShowProductDetail = false
        clone.quantity = 1
        clone.form_checkout.isShowDeleteProductPopup = false
        clone.form_checkout.mainAppearance = clone.form_checkout.listAppearance[0].media.url
        clone.form_checkout.isActive = [true, false, false, false]
        state.items.push(clone)
    },
    updateItem(state, item) {
        state.items.push(item)
    },
    deleteItem(state, index) {
        state.items.splice(index, 1)
    },
    // input quantity
    // decrease quantity -1
    minusQuantityItem(state, index) {
        state.items[index].quantity--
    },
    // increase quantity +1
    // plusQuantityItem(state, index) {
    //     state.items[index].quantity++
    // },
    plusQuantityItem(state, index) {
        state.items[index].quantity++
    },
    callLocalStorage(state, par) {
        state.items = par
    },
}
export const actions = {
    plusQuantityItem: ({ state, commit }, payload) => {
        const items = [...state.items]
        commit('plusQuantityItem', payload)
        localStorage.setItem('*?storage^@cart', JSON.stringify(items))
    },
    minusQuantityItem: ({ state, commit }, payload) => {
        const items = [...state.items]
        commit('minusQuantityItem', payload)
        localStorage.setItem('*?storage^@cart', JSON.stringify(items))
    },
    callLocalStorage: ({ state, commit }, payload) => {
        const items = [...state.payload]

        commit('callLocalStorage', payload)
        localStorage.setItem('*?storage^@cart', JSON.stringify(items))
    },
    deleteItem: ({ state, commit }, payload) => {
        const items = [...state.items]

        commit('deleteItem', payload)
        localStorage.setItem('*?storage^@cart', JSON.stringify(items))
    },
    updateItem: ({ state, commit }, payload) => {
        const items = [...state.items]

        commit('updateItem', payload)
        localStorage.setItem('*?storage^@cart', JSON.stringify(items))
    },
    insertItem: ({ state, commit }, payload) => {
        const items = [...state.items]

        commit('insertItem', payload)
        localStorage.setItem('*?storage^@cart', JSON.stringify(items))
    },
    setItems: ({ state, commit }, payload) => {
        const items = [...state.items]

        commit('setItems', payload)
        localStorage.setItem('*?storage^@cart', JSON.stringify(items))
    },
    updateIsShowProductDetail: ({ state, commit }, payload) => {
        const items = [...state.items]

        commit('updateIsShowProductDetail', payload)
        localStorage.setItem('*?storage^@cart', JSON.stringify(items))
    },
    addPropertyForCheckoutPage: ({ state, commit }, payload) => {
        const items = [...state.items]

        commit('addPropertyForCheckoutPage', payload)
        localStorage.setItem('*?storage^@cart', JSON.stringify(items))
    },
    OnGetMainAppearance: ({ state, commit }, payload) => {
        const items = [...state.items]

        commit('OnGetMainAppearance', payload)
        localStorage.setItem('*?storage^@cart', JSON.stringify(items))
    },
    showDeleteProductPopup: ({ state, commit }, payload) => {
        const items = [...state.items]

        commit('showDeleteProductPopup', payload)
        localStorage.setItem('*?storage^@cart', JSON.stringify(items))
    },
}
