export const state = () => ({
    product: {},
})
export const getters = {}
export const mutations = {
    SET_PRODUCT(state, par) {
        state.product = par
    },
}
export const actions = {
    setProduct({ commit }, product) {
        commit('SET_PRODUCT', product)
    },
}
