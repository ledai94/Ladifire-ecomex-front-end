// import favorites from '~/pages/favorites.vue'

export const state = () => ({
    favorites: [],
})

export const getters = {
    exists(state) {
        return (product, colorId) => {
            return (
                state.favorites &&
                state.favorites.find(
                    (f) =>
                        f.product.id == product.id &&
                        f.color == colorId &&
                        f.product.customize_id == product.customize_id
                )
            )
        }
    },
    favoriteLength(state) {
        return state.favorites.length
    },
}

export const mutations = {
    setFavourites(state, data) {
        state.favorites = data
    },

    callLocalStorage(state, par) {
        state.favorites = par
    },
}

export const actions = {
    toggle({ state, getters, commit }, payload) {
        const favourites = [...state.favorites]
        // eslint-disable-next-line camelcase
        const [product, color, shop, department_id, category_id] = payload
        console.log('getter', getters.exists(product, color))
        if (getters.exists(product, color)) {
            favourites.splice(
                favourites.findIndex(
                    (f) =>
                        f.product.id == product.id && f.product.customize_id == product.customize_id && f.color == color
                ),
                1
            )
        } else {
            favourites.push({ product, color, shop, department_id, category_id })
        }

        commit('setFavourites', favourites)
        localStorage.setItem('favorites', JSON.stringify(favourites))
    },
}
