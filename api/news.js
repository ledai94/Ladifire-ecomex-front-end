function buildQueries(params) {
    const queries = []
    Object.keys(params).forEach((key) => {
        if (key == 'department_id' && params[key] == 'categories') {
            return
        }

        if (params[key]) {
            queries.push(key + '=' + params[key])
        }
    })

    return '?' + queries.join('&')
}

export async function getNews({ $axios, store }, params) {
    const categoriesId = []
    params.forEach((el) => {
        categoriesId.push(el.id)
    })
    const url = '/posts'

    return await $axios
        .$get(
            url +
                buildQueries({
                    categories: categoriesId,
                })
        )
        .then((r) => {
            return r
        })
        .catch((error) => {
            console.log(error)
        })
}
export async function getNewsCategory({ $axios, store }, params) {
    const url = '/posts'

    return await $axios
        .$get(
            url +
                buildQueries({
                    categories: params.category,
                    per_page: params.per_page || 12,
                    page: params.page,
                })
        )
        .then((r) => {
            return r
        })
        .catch((error) => {
            console.log(error)
        })
}

export async function find({ $axios, params }, id) {
    const url = '/posts'

    return await $axios.$get(url + '/' + id).then((r) => r.data)
}
