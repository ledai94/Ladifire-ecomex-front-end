export async function costs(axios, data) {
    return await axios.$post('cart/costs', data)
}

export async function checkout(axios, data) {
    return await axios.$post('cart/checkout', data)
}

export async function status(axios, type, orderId) {
    return await axios.$get('cart/status?' + type + '=' + orderId)
}
