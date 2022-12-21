import { fetchCountries } from '~/api/locales'

export const state = () => ({
    countries: {},
    currentCountry: null,
})

export const mutations = {
    SET_COUNTRIES(state, data) {
        state.countries = data
    },
}

export const actions = {
    fetchCountries({ commit }) {
        fetchCountries(this.$axios).then((data) => {
            commit('SET_COUNTRIES', data)
        })
    },
}
