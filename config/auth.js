module.exports = {
    redirect: {
        home: false,
    },
    // watchLoggedIn: true,
    strategies: {
        local: {
            endpoints: {
                login: { url: '/auth/login', method: 'post', propertyName: 'access_token' },
                logout: { url: '/auth/logout', method: 'get' },
                user: { url: '/auth/user', method: 'get', propertyName: '' },
            },
        },
    },
}
