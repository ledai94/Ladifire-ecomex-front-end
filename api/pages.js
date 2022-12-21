export async function getPage({ $axios, params }, slug) {
    const url = 'pages/' + slug

    return await $axios.$get(url).then((r) => r.data)
}
