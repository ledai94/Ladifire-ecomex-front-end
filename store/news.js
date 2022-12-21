export const state = () => ({
    data: null,
})

export const mutations = {
    data(state, par) {
        state.data = par
    },
}
