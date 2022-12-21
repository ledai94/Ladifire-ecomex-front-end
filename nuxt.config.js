const config = {
    app: require('./config/app.js'),
    api: require('./config/api.js'),
    auth: require('./config/auth.js'),
}

export default {
    server: {
        port: 3000, // default: 3000
        host: '0.0.0.0', // default: localhost
    },
    publicRuntimeConfig: config,

    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: config.app.name,
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            { hid: 'description', name: 'description', content: '' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    i18n: {
        locales: [
            {
                code: 'en',
                file: 'en.js',
            },
        ],
        lazy: true,
        langDir: 'assets/lang/',
        defaultLocale: 'en',
    },
    loading: {
        color: '#00b2a5',
        height: '2px',
    },
    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: ['swiper/css/swiper.css'],

    // Style resources (https://github.com/nuxt-community/style-resources-module)
    /* styleResources: {
          scss: ['./assets/sass/_variables.scss'],
      }, */

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        { src: '~/plugins/vue-awesome-swiper.js', ssr: false },
        { src: '~/plugins/vue-pinch-zoom.js', ssr: false },
        { src: '~/plugins/init.client.js' },
        { src: '~/plugins/star-rating.js', mode: 'client' },
        'plugins/modals/v-modal.js',
        'plugins/portal',
        'plugins/modal/index',
        'plugins/dialog/index',
        'plugins/setsize/index',
        'plugins/login/index',
        'plugins/utils',
        'plugins/vue-tooltip.js',
        'plugins/share/index',
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        '@nuxtjs/router',
        // https://go.nuxtjs.dev/eslint
        // "@nuxtjs/eslint-module",
        // https://go.nuxtjs.dev/stylelint
        // "@nuxtjs/stylelint-module",
        '@nuxtjs/dotenv',
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        '@nuxtjs/auth',
        '@nuxtjs/style-resources',
        'nuxt-i18n',
        'nuxt-imagemin',
        '@nuxtjs/pwa',
        '@nuxtjs/robots',
        [
            'nuxt-lazy-load',
            {
                defaultImage: '/loading.svg',
            },
        ],
    ],

    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    axios: {
        baseURL: config.api.baseUrl,
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
        extend(config, ctx) {
            //     // Run ESLint on save
            //     if (ctx.isDev && ctx.isClient) {
            //         config.module.rules.push({
            //             enforce: 'pre',
            //             test: /\.(js|vue)$/,
            //             loader: 'eslint-loader',
            //             exclude: /(node_modules)/,
            //         })
            //     }
        },
        extractCSS: true,
        optimization: {
            splitChunks: {
                chunks: 'all',
            },
        },
        transpile: ['star-rating'],
        splitChunks: {
            layouts: true,
            pages: true,
            commons: true,
        },
    },
    auth: config.auth,
    robots: {
        UserAgent: '*',
        Disallow: '',
    },
}
