// function buildQueries(params) {
//     const queries = []
//     Object.keys(params).forEach((key) => {
//         if (key == 'department_id' && params[key] == 'categories') {
//             return
//         }
//
//         if (params[key]) {
//             queries.push(key + '=' + params[key])
//         }
//     })
//
//     return '?' + queries.join('&')
// }

export function getProductsDetal({ $axios, store }, params) {
    return $axios.$get('/products').then((r) => {
        return r.data
    })
}
