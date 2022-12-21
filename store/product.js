export const state = () => ({
    zoom: false,
    lengthFavorite: null,
    customize: false,
})
export const getters = {}
export const mutations = {
    showCustomize: (state) => {
        state.customize = true
    },
    closeCustomize: (state) => {
        state.customize = false
    },
    loadScreen: (state) => {
        const numberFavurate = JSON.parse(localStorage.getItem('favorite'))
        if (numberFavurate === null) {
            state.lengthFavorite = 0
        } else {
            state.lengthFavorite = JSON.parse(localStorage.getItem('favorite')).length
        }
    },
    // changeColor: (state) => {
    //     const favorited = JSON.parse(localStorage.getItem('favorite'))
    //     let imageIndex = null
    //     let arr = null
    //     state.colors.forEach((el) => {
    //         if (el.idColor === state.product.colorId) {
    //             el.colorActive = true
    //             imageIndex = el.idImage
    //             arr = [state.product.id, state.product.colorId]
    //         } else {
    //             el.colorActive = false
    //         }
    //     })
    //     state.photos = state.images[imageIndex - 1]

    //     if (favorited !== null) {
    //         const favoriteArr = favorited.filter((item) => {
    //             return JSON.stringify(item) == JSON.stringify(arr)
    //         })
    //         if (favoriteArr.length > 0) {
    //             state.product.isFavorite = true
    //         } else {
    //             state.product.isFavorite = false
    //         }
    //     }
    // },
    // colorChange: (state, par) => {
    //     if (typeof par !== 'object') {
    //         par = [state.product.id, parseInt(par)]
    //     }
    //     // eslint-disable-next-line no-console
    //     console.log(par)
    //     const favorited = JSON.parse(localStorage.getItem('favorite'))
    //     if (favorited !== null) {
    //         const favoriteArr = favorited.filter((item) => {
    //             return JSON.stringify(item) == JSON.stringify(par)
    //         })
    //         if (favoriteArr.length > 0) {
    //             state.product.isFavorite = true
    //         } else {
    //             state.product.isFavorite = false
    //         }

    //         state.product.colorId = par[1]
    //     }

    //     let imageIndex = null
    //     state.colors.forEach((el) => {
    //         if (el.idColor == par[1]) {
    //             el.colorActive = true
    //             imageIndex = el.idImage
    //         } else {
    //             el.colorActive = false
    //         }
    //     })
    //     state.photos = state.images[imageIndex - 1]
    // },
    sizeActive: (state, id) => {
        state.sizes.forEach((el) => {
            if (el.idSize === id) {
                el.sizeActive = true
            } else {
                el.sizeActive = false
            }
        })
    },
    favorite: (state, id) => {
        state.product.isFavorite = !state.product.isFavorite
        const favorites = JSON.parse(localStorage.getItem('favorite'))
        if (state.product.isFavorite === true) {
            if (favorites === null) {
                const arrFavorite = []
                arrFavorite.push(id)
                localStorage.setItem('favorite', JSON.stringify(arrFavorite))
            } else {
                favorites.push(id)
                localStorage.setItem('favorite', JSON.stringify(favorites))
            }
        } else {
            const favoriteArr = favorites.filter((item) => {
                return JSON.stringify(item) != JSON.stringify(id)
            })
            localStorage.setItem('favorite', JSON.stringify(favoriteArr))
        }
        state.lengthFavorite = JSON.parse(localStorage.getItem('favorite')).length
    },
}
export const actions = {}
