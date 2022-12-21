export const state = () => ({
    error: null,
})

export const mutations = {
    notData(state, par) {
        if (par) {
            state.error = null
        } else {
            state.error = 'Your search didn’t yield any results.'
        }
    },
}
