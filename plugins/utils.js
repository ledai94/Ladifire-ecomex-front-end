export default ({ app }, inject) => {
    inject('appRoute', (id, slug) => {
        if (id == 'categories') {
            return 'categories'
        }
        return slug + '-' + id
    })
    inject('appRouted', (id, slug) => {
        return slug + '=' + id
    })
}
