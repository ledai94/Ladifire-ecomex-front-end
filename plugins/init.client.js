import { find } from '~/api/products'

export default ({ store, $axios }) => {
    const favourites = JSON.parse(localStorage.getItem('favorites'))
    store.commit('favorite/callLocalStorage', favourites || [])

    if (localStorage) {
        store.dispatch('carts/sync', JSON.parse(localStorage.getItem('ecomex-carts')) || {})

        const address = JSON.parse(localStorage.getItem('shipping-address'))

        if (address && address.address) {
            store.commit('carts/SET_ADDRESS', address)
        }
    }

    window.addEventListener(
        'message',
        function (e) {
            if (e.data.message && e.data.message == 'addToCart') {
                const data = e.data.value

                find({ $axios, params: { shop: 'shop' } }, data.customizeId).then((product) => {
                    Object.keys(data.sizes).forEach((size) => {
                        store.dispatch('carts/addOrIncrease', {
                            id: product.id,
                            customize_id: product.customize_id,
                            appearance_id: data.appearanceId,
                            size_id: size,
                            amount: data.sizes[size],
                            product,
                        })
                    })
                })
            }
        },
        false
    )
}
