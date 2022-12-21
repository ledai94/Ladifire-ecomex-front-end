import Login from '@/pages/auth/login.vue'
import ShopList from '@/pages/shop/list.vue'
import Vue from 'vue'
import Router from 'vue-router'
import CartCheckout from '~/pages/shop/cart/checkout'
import CartResult from '~/pages/shop/cart/result'

import Custom from '~/pages/custom/index.vue'
import Favorites from '~/pages/favorites.vue'
import Index from '~/pages/index.vue'
import NewsIndex from '~/pages/news/index.vue'
import NewsList from '~/pages/news/list.vue'
import NewsShow from '~/pages/news/show.vue'
// import paymentSuccessfully from '~/pages/payment/payment-successfully.vue'
import Search from '~/pages/search.vue'
import Page from '~/pages/pages/page.vue'
import ShopDetail from '~/pages/shop/show.vue'
import ShopListUser from '~/pages/marketplace/index.vue'
// import CheckoutIndex from '~/pages/cart/checkout/index.vue'
// import CheckoutResult from '~/pages/cart/checkout/result.vue'

Vue.use(Router)

export function createRouter() {
    return new Router({
        mode: 'history',
        routes: [
            {
                path: '/',
                component: Index,
            },
            {
                path: '/cart/checkout',
                component: CartCheckout,
            },
            {
                path: '/cart/order',
                component: CartResult,
            },
            {
                path: '/favorites',
                component: Favorites,
            },

            {
                path: '/create-your-own',
                component: Custom,
            },
            {
                path: '/login',
                component: Login,
            },

            // {
            //     path: '/cart',
            //     component: CartIndex,
            // },
            // {
            //     path: '/checkout',
            //     component: CheckoutIndex,
            // },
            // {
            //     path: '/checkout/result',
            //     component: CheckoutResult,
            // },
            {
                path: '/pages/:slug',
                component: Page,
            },
            {
                path: '/:shop/user/:user',
                component: ShopListUser,
            },
            {
                path: '/search/:query',
                component: Search,
            },
            {
                path: '/news',
                component: NewsIndex,
            },
            {
                path: '/news/:category',
                component: NewsList,
            },
            {
                path: '/news/:category/:post',
                component: NewsShow,
            },
            {
                path: '/:shop/(.*-)?:category(\\d+)/(.*-)?:type(\\d+)/(.*-)?:product(\\d+)',
                component: ShopDetail,
            },
            {
                path: '/:shop/categories/(.*-)?:type(\\d+)',
                component: ShopList,
            },
            {
                path: '/:shop/(.*-)?:category(\\d+)/(.*-)?:type(\\d+)',
                component: ShopList,
            },
            {
                path: '/:shop/(.*-)?:category(\\d+)',
                component: ShopList,
            },
            {
                path: '/:shop',
                component: ShopList,
            },
        ],
    })
}
