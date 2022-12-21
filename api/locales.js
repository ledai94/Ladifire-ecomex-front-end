export async function fetchCountries(axios) {
    return await axios.$get('countries')
}

export async function fetchCurrentCountry(axios) {
    return await axios.$get('http://ip-api.com/json?fields=countryCode').then((r) => r.countryCode)
}
