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

export async function getProducts({ $axios, store }, params) {
    const url = params.shop == 'shop' ? '/customizes' : '/products'

    return await $axios
        .$get(
            url +
                buildQueries({
                    user_id: params.user,
                    department_id: params.category,
                    category_id: params.type,
                    per_page: params.per_page || 24,
                    page: params.page,
                    sort_type: params.sort,
                })
        )
        .then((r) => {
            if (r.data.length > 0) {
                store.commit('common/notData', true)
                return r
            } else {
                store.commit('common/notData', false)
            }
        })
        .catch((error) => {
            console.log(error)
        })
}

export async function getProductFilters({ $axios }, params) {
    return await $axios
        .$get(
            '/product_filters' +
                buildQueries({
                    department_id: params.category,
                    category_id: params.type,
                })
        )
        .then((r) => r.data)
}
// eslint-disable-next-line require-await
export async function getReviews({ $axios, store }, params) {
    return await $axios
        .$get(
            'reviews' +
                buildQueries({
                    product_id: params.productId,
                    per_page: params.per_page || 10,
                    commentPage: params.page,
                })
        )
        .then((r) => {
            return r
            // if (r.data.length > 0) {
            //     store.commit('common/notData', true)
            //     return r
            // } else {
            //     store.commit('common/notData', false)
            // }
        })
        .catch((error) => {
            console.log(error)
        })
}
