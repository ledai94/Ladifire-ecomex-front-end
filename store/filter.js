export const state = () => ({
    filter: null,
    categories: [
        { id: 1, name: 'Men', isActive: false },
        { id: 2, name: 'Women', isActive: false },
        { id: 3, name: 'Kids', isActive: false },
        { id: 4, name: 'Babies', isActive: false },
        { id: 5, name: 'Accessories', isActive: false },
        { id: 6, name: 'Phone Cases', isActive: false },
        { id: 7, name: 'Home & Living', isActive: false },
        { id: 8, name: 'Stationery', isActive: false },
    ],
    products: [
        { id: 1, name: 'T-Shirts', isActive: false },
        { id: 2, name: 'Tank Tops', isActive: false },
        { id: 3, name: 'Polo Shirts', isActive: false },
        { id: 4, name: 'Long-Sleeved Shirts', isActive: false },
        { id: 5, name: 'Hoodies & Sweatshirts', isActive: false },
        { id: 6, name: 'Dresses', isActive: false },
        { id: 7, name: 'Baby T-Shirts', isActive: false },
        { id: 8, name: 'Baby One Pieces', isActive: false },
        { id: 9, name: 'Baby Hats', isActive: false },
        { id: 10, name: 'Baby Bibs', isActive: false },
        { id: 11, name: 'Face Masks', isActive: false },
        { id: 12, name: 'Posters', isActive: false },
        { id: 13, name: 'Stickers', isActive: false },
    ],
    id: null,
    type: null,
})

export const getters = {}
export const mutations = {
    postApi: (state, par) => {
        state.id = par[0]
        state.type = par[1]
    },
    openfilterSmall: (state, par) => {
        state.filter = par
    },
    closeFilterSmall: (state, par) => {
        state.filter = par
    },
    activeCategory: (state, par) => {
        if (par[1] === true) {
            state.categories.forEach((el) => {
                if (el.isActive === true) {
                    el.isActive = false
                }
                if (el.id === par[0]) {
                    el.isActive = true
                }
            })
        } else {
            state.products.forEach((el) => {
                if (el.isActive === true) {
                    el.isActive = false
                }
                if (el.id === par[0]) {
                    el.isActive = true
                }
            })
        }
    },
    removeCategory: (state, par) => {
        if (par[1] === true) {
            state.categories.forEach((el) => {
                if (el.id === par[0]) {
                    el.isActive = false
                }
            })
        } else {
            state.products.forEach((el) => {
                if (el.id === par[0]) {
                    el.isActive = false
                }
            })
        }
    },
}
