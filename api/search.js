export async function suggestions(axios, query) {
    return await axios.$get('search/suggestions?q=' + query)
}

export async function search(axios, query, page) {
    console.log(query, page)

    let queryString = '?q=' + query

    if (page) {
        queryString += '&page=' + page
    }

    return await axios.$get('search' + queryString)
}
