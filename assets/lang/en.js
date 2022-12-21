export default {
    or: 'or',
    general: {
        // eslint-disable-next-line no-template-curly-in-string
        price: '${0}',
        unit: 'cm',
    },
    dialog: {
        cancel: 'Cancel',
    },
    actions: {
        checkout: 'Checkout',
        continueShopping: 'Continue shopping',
    },
    messages: {
        addedToCart: 'Your item was added to the cart',
    },
    errors: {
        login: {
            missing_input: 'Enter username and password',
            network_error: 'Snap. It did’t work. Don’t give up. Please try again.',
            incorrect: 'Username or password incorrect',
        },
        register: {
            missing_input: 'Enter username, email and password',
        },
    },
    headers: {
        cart: {
            title: 'Shopping Cart',
            empty: 'Your cart is empty. Do some shopping!',
            close: 'Continue shopping',
            subtotal: 'Subtotal',
            total: 'Total',
            tax: 'Tax',
            checkout: 'Checkout',
            color: 'Color: {0}',
            size: 'Size: {0}',
            delete: {
                title: 'Delete item',
                content: 'Are you sure you want to delete this item?',
                action: 'Delete',
            },
        },
        skip: 'Jump to content',
        start_selling: 'Start Selling',
        more_information: 'More Information',
        login: 'Login',
        introduction: 'Create personalised products or shop from our designer marketplace.',
        buttons: {
            favorites: 'Favorites',
            cart: 'Shopping Cart',
            back: 'Back',
            start_creating: 'Start Creating',
            addToCart: 'Add to cart',
        },
        shops: {
            custom: {
                name: 'Create',
                description: 'Custom Products',
            },
            shop: {
                name: 'Shop',
                description: 'Marketplace Designs',
            },
        },
        search: {
            label: 'Search',
            placeholder: 'Find designs or products',
        },
        logout: 'Logout',
        overview: 'Overview',
        designs: 'Designs',
    },
    login: {
        close: 'Close',
        title: 'Login',
        username: 'Email or Username',
        password: 'Password',
        repassword: 'Confirm password',
        show_password: 'Show',
        forgot_password: 'Forgot your password?',
        submit: 'Login',
        facebook: 'Log in with Facebook',
    },
    register: {
        button: 'Register Now',
        submit: 'Register',
        email: 'Email',
        username: 'User Name',
        phone: 'Phone',
    },

    noscript: 'Your web browser must have JavaScript enabled in order for this application to display correctly.',
    jump_to_content: 'Jump to content',
    introduction: 'Create personalised products or shop from our designer marketplace.',
    back: 'Back',
    see_all: 'See All {name}',
    start_creating: 'Start Creating',
    custom: {
        title: 'Create',
        description: 'Custom Products',
    },
    shop: {
        title: 'Shop',
        description: 'Marketplace Designs',
        custom: 'Custom',
        shop: 'Shop',
        search: 'Search',
        footer:
            'Express yourself! You can personalise custom <a href="/custom/t-shirts">T-Shirts</a> to create a super unique look.',
    },
    search: {
        label: 'Search',
        placeholder: 'Find designs or products',
    },
    Home: {
        create_now: 'Create Now',
        trending_now: 'Trending Now',
        title_homepage_product: 'Popular Products. Delightful Designs.',
        title_homepage_design: 'Spotlight on Design',
        title_homepage_msd: 'Turn Your Designs into Profit',
        homepage_msd: 'Free forever | Zero-risk | Monthly payouts',
        get_started: 'Get Started',
        title_homepage_spod: 'Merchaki is on',
        desp_homepage_spod:
            'At long last, the quality, speed and reliability associated with ecomex prints and products is now available for your Shopify store! Boasting Shopify’s fastest turnaround, SPOD gives you full control over your own white label print-on-demand services. Give us a try today!',
    },
    category: {
        change_view: 'Change view',
        sort_by: 'Sort by',
        relevance: 'Relevance',
        newest: 'Newest',
        home: 'Home',
    },
    filterBar: {
        categories: 'Categories',
        products: 'Products',
        filter: 'Filter',
    },
    filter: {
        title: 'Options',
        apply: 'Apply Filter',
        reset: 'Reset all filters',
        sort: 'Sort by:',
    },
    sortTypes: {
        popular: 'Popular',
        newest: 'Newest',
    },
    router: {
        categories: 'categories',
    },
    product: {
        actions: {
            create: 'Create now',
            AddToCart: 'Add to cart',
        },
    },
    pagination: {
        first: 'First page',
        last: 'Last page',
        prev: 'Previous page',
        next: 'Next page',
        page: 'Page {0}',
    },
    detail: {
        title_liked: 'Customers also liked',
        title_similar_designs: 'Similar designs',
        title_design_details: 'Design details',
        title_more_product: 'Get this design on other products',
        recently: 'Recently viewed',
        clear_history: 'Clear history',
        remember_history: 'Remember history',
        label: 'Product details',
        color: 'Color:',
        totalColor: '{0} colors available',
        fit: 'Fit:',
        chooseSize: 'Choose a size',
        size: 'Size',
        sizeTable: 'Size table',
        shipping: 'Shipping time',
        measureHint: 'Length in cm',
        sizeTip: {
            title: 'Find the right size:',
            description:
                'Compare these measurements with a similar product you have at home. Place the product on a flat surface to get the best results.',
        },
        usp: {
            title: 'Custom-printed for you',
            trust: 'Printed In The US',
            trustImg: '/us_US.png',
        },
        buttons: {
            customize: 'Customize',
            AddToCart: 'Add to cart',
            share: 'Share',
            favourites: 'Add to favorites',
            favorited: 'Added to favorites',
        },
        designer: 'Designer',
        design: 'Design',
        reportDesign: 'Report design',
    },
    checkout: {
        label: {
            color: 'Color',
            quantity: 'Quantity',
            size: 'Size',
        },
        result: {
            title: 'Thank you for your order',
            error: 'Oh no!',
            errorMessage:
                'We could not complete your order. Please try again or contact admin to get more information. Thank you!',
            order: 'Your Order Number: {0}',
            next: 'What Happens Next?',
            success: 'Order Successful',
            successDetail: 'Checkout complete. Now it’s our turn.',
            printing: 'Printing & Shipping',
            printingDetail: 'See how your order will be produced below.',
            delivered: 'Delivered',
            deliveredDetail: 'From the factory floor straight to your door.',
            continueShopping: 'Continue shopping',
        },
        actions: {
            back: 'Back to shop',
            edit: 'Edit',
            duplicate: 'Duplicate item',
            detail: 'Details',
            cancel: 'Cancel',
            delete: 'Delete',
            coupon: 'Coupon code',
            loading: 'Loading...',
        },
        alert: {
            confirmDelete: 'Do you really want to delete this product?',
        },
        priceInfos: {
            subtotal: 'Sub-total',
            coupon: 'Coupon',
            tax: 'Sales Tax',
            total: 'Total',
        },
        service: {
            title: 'Any questions?',
            info: 'Call us! Mon - Fri: 8am - 7pm ET, Sat. 10am - 2pm ET',
            phone: '+1 800 381 0815',
        },
        footer: {
            legal: 'Legal information',
            policy: 'Privacy policy',
            trust: {
                title: 'Over 5 million customers love our products. Quality since 2002.',
            },
        },
        tabs: {
            shippingMethod: {
                title: 'Shipping method',
            },
            order: {
                title: 'Order',
            },
            paymentMethod: {
                title: 'Payment',
                paypal: {
                    title: 'Paypal',
                    help: 'Quick and easy payment with PayPal.',
                    note:
                        'Click on “<strong>Buy Now</strong>” to get directed to PayPal. Please complete your purchase there within the next <strong>3 hours</strong>. This is necessary to get your order processed and under way.',
                },
            },
            info: {
                title: 'Shipping',
                contact: 'How can we contact you?',
                shippingAddress: 'Send my order to',
                form: {
                    firstName: 'First name',
                    lastName: 'Last name',
                    email: 'Your e-mail address',
                    phone: 'Your phone number',
                    phoneInfo:
                        ' Please provide your telephone number. We’ll only get in touch in case of important queries regarding your order. This is particularly important when ordering 25 items or more. ',
                    address: 'Your address',
                    district: 'District',
                    province: 'Province',
                    country: 'Country',
                    notice: 'Notice',
                    countryHint:
                        'All orders are shipped from the United States. Additional costs for customs and duties may apply upon delivery, depending on product type and order price.',
                },
            },
        },
    },
}
