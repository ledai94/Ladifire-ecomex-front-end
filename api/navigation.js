export async function getNavbar(axios) {
    return await axios.$get('navigation/navbar').then((r) => r.data)
}

export async function getFooter(axios) {
    return await axios.$get('navigation/footer').then((r) => r.data)
}

export async function getNavbarNews(axios) {
    return await axios.$get('navigation/navbar_news').then((r) => r)
}

export async function getNewsTest({ $axios }) {
    const url = '/navigation/navbar_news'

    return await $axios
        .$get(url)
        .then((r) => {
            if (r.length > 0) {
                return r
            }
        })
        .catch((error) => {
            console.log(error)
        })
}
