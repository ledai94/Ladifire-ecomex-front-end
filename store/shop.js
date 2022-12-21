export const state = () => ({
    openClose: false,
    windowWidth: 0,
    test: 'abcxy',
})
export const getters = {}
export const mutations = {
    openFilter: (state) => {
        state.openClose = true
    },
    closeFilter: (state) => {
        state.openClose = false
    },
    setWindowWidth: (state, par) => {
        state.windowWidth = par
        if (par > 768) {
            state.openClose = false
        }
    },
    setTest(state, test) {
        state.test = test
    },
}
export const actions = {}
