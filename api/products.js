export async function find({ $axios, params }, id) {
    const url = params.shop == 'shop' ? '/customizes' : '/products'

    return await $axios.$get(url + '/' + id).then((r) => r.data)
}
