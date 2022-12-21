export async function getPopularCategories(axios) {
    return await axios.$get('home/popular_categories').then((r) => r.data)
}

export async function getPopularDesignCategories(axios) {
    return await axios.$get('home/popular_design_categories').then((r) => r.data)
}

export async function getPopularDepartments(axios) {
    return await axios.$get('home/popular_departments').then((r) => r.data)
}
