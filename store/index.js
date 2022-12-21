const syncCartWithLocalStorage = (store) => {
    store.subscribe((mutation, state) => {
        if (mutation.type.includes('carts/') && localStorage) {
            localStorage.setItem('ecomex-carts', JSON.stringify(state.carts.items))

            if (state.carts.address.address) {
                localStorage.setItem('shipping-address', JSON.stringify(state.carts.address))
            }
        }
    })
}

export const plugins = [syncCartWithLocalStorage]
