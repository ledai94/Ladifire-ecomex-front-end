<template>
    <div class="pop-up__content" style="max-height: 938px">
        <div id="height-source" class="login">
            <h1 style="margin-bottom: 2rem !important">
                {{ isSingup ? $t('register.button') : $t('login.title') }}
            </h1>
            <div class="login__registration-link-subline bot-rem">
                <!-- <span class="login__registration-link-space">Want to shop?</span> -->
                <div v-if="isSingup === false" id="registerCustomerLink" class="link" @click="singup">
                    <svg fill="currentColor" viewBox="0 0 32 32">
                        <path
                            d="M16.025 12.935a5.737 5.737 0 1 0-5.737-5.738 5.737 5.737 0 0 0 5.737 5.738zm0-9.475a3.737 3.737 0 1 1-3.737 3.737 3.742 3.742 0 0 1 3.737-3.737zM21.361 13.774l-.609-.384-.558.456a6.808 6.808 0 0 1-8.613 0l-.558-.456-.609.385a10.536 10.536 0 0 0-4.723 8.755c0 5.019-.012 6.958-.012 6.961l-.007 1.007h20.337l.017-.982s.058-3.29.058-6.986a10.537 10.537 0 0 0-4.723-8.756zm2.68 14.724H7.684c.003-1.043.007-2.95.007-5.968a8.565 8.565 0 0 1 3.238-6.677 9.02 9.02 0 0 0 9.918 0 8.562 8.562 0 0 1 3.237 6.677c0 2.452-.025 4.726-.043 5.968z"
                        ></path>
                    </svg>
                    <span> {{ $t('register.button') }} </span>
                </div>
                <div v-else>
                    <span
                        >Already have an account?
                        <a style="color: #00b2a5; cursor: pointer" @click="loginNow">Back to login</a></span
                    >
                </div>
            </div>
            <form v-if="isSingup === false" id="loginForm" method="post" @submit="login">
                <div class="textinput login__username">
                    <input
                        v-model="email"
                        autocomplete="username"
                        autofocus="autofocus"
                        class="textinput__input"
                        type="email"
                    />

                    <label :class="email ? 'textinput-has-value' : ''" for="username">
                        {{ $t('login.username') }}
                    </label>
                </div>

                <div class="textinput login__password">
                    <div
                        id="showpassword"
                        ref="showPasswordBtn"
                        :class="[passwordVisible ? 'password__show-password--active' : '']"
                        class="password__show-password"
                        @click="passwordVisible = !passwordVisible"
                    >
                        <svg fill="currentColor" viewBox="0 0 32 32">
                            <path
                                d="M30.404 15.572C27.454 9.34 21.907 5.467 15.927 5.467S4.399 9.339 1.449 15.572L1.247 16l.202.428C4.4 22.66 9.946 26.533 15.927 26.533s11.527-3.872 14.477-10.105l.202-.428zm-14.477 8.961c-5.064 0-9.801-3.257-12.46-8.533 2.659-5.276 7.396-8.533 12.46-8.533s9.8 3.257 12.46 8.533c-2.66 5.276-7.397 8.533-12.46 8.533z"
                                fill-rule="evenodd"
                            />

                            <path
                                d="M16.03 9.93A6.07 6.07 0 1 0 22.1 16a6.077 6.077 0 0 0-6.07-6.07zm0 10.14A4.07 4.07 0 1 1 20.1 16a4.075 4.075 0 0 1-4.07 4.07z"
                                fill-rule="evenodd"
                            />

                            <circle cx="16" cy="16" r="2"></circle>
                        </svg>

                        <span>{{ $t('login.show_password') }}</span>
                    </div>

                    <input
                        ref="password"
                        v-model="password"
                        :type="passwordVisible ? 'text' : 'password'"
                        autocomplete="current-password"
                        class="textinput__input"
                    />

                    <label :class="password ? 'textinput-has-value' : ''" for="password">
                        {{ $t('login.password') }}
                    </label>
                </div>
                <div v-for="(error, index) in errors" :key="index" class="login__error">
                    {{ error }}
                </div>

                <div class="login__rememberMe">
                    <label class="checkbox">
                        <input
                            id="rememberMeCheckbox"
                            class="checkbox__input"
                            type="checkbox"
                            value="true"
                            name="rememberMe"
                            checked="checked"
                        />
                        <div class="checkbox__checkmark">
                            <svg viewBox="0 0 16 16" fill="currentColor">
                                <path d="M13.3 3.1l-7.1 7-3.5-3.5L1.3 8l4.9 4.9 8.5-8.4z"></path>
                            </svg>
                        </div>
                        <span>Stay signed in</span>
                    </label>
                    <a id="forgotPasswordLink" class="link link--bold" href="#">Forgot your password?</a>
                </div>
                <!-- <div class="login__rememberMe">
                            <a id="registerLink" class="link link--bold" href="#" style="text-align: left !important">
                                {{ $t('register.button') }}
                            </a>

                            <a id="forgotPasswordLink" class="link-to-left link link--bold" href="#">
                                {{ $t('login.forgot_password') }}
                            </a>
                        </div> -->

                <button class="login__cta button button--main button--large" type="submit">
                    {{ $t('login.submit') }}
                </button>
            </form>
            <!-- form register -->
            <FormRegister v-if="isSingup === true" @is-register="isRegister" />
            <div v-if="isSingup === false">
                <div class="strike">
                    <span>{{ $t('or') }}</span>
                </div>

                <button id="login-facebook" class="login__cta button button--facebook button--large" type="submit">
                    <img alt="Facebook" class="button__icon" src="~assets/images/Facebook-icon.svg" />

                    <span>{{ $t('login.facebook') }}</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import Login from '@/plugins/login/login.js'
import FormRegister from '@/components/Form'
import { getPartnerUrl } from '~/utils'

export default {
    name: 'Login',
    components: { FormRegister },
    middleware: 'auth',
    data() {
        return {
            isSingup: false,
            visible: {},
            passwordVisible: false,
            email: '',
            password: '',
            errors: [],
        }
    },
    watch: {
        visible(state) {
            if (state) {
                this.$refs.loginPopup.classList.add('open')
            } else {
                this.$refs.loginPopup.classList.remove('open')
                this.passwordVisible = false
                this.email = ''
                this.password = ''
                this.errors = []
            }
        },
    },
    // beforeCreate() {
    //     if (this.$auth.loggedIn) {
    //         this.$router.push('/')
    //     }
    // },
    beforeMount() {
        Login.EventBus.$on('show', () => {
            this.show()
        })

        Login.EventBus.$on('hide', () => {
            this.hide()
        })
    },
    mounted() {
        const vue = this

        window.addEventListener('keyup', function (e) {
            if (e.key === 'Escape' && vue.visible) {
                vue.hide()
            }
        })
    },
    methods: {
        singup() {
            this.isSingup = true
        },
        loginNow() {
            this.isSingup = false
        },
        show() {
            this.visible = true
        },
        isRegister(par) {
            this.isSingup = par
        },
        login(event) {
            event.preventDefault()

            this.errors = []

            if (!this.email || !this.password) {
                this.errors.push(this.$t('errors.login.missing_input'))

                return false
            }

            this.$auth
                .loginWith('local', { data: { email: this.email, password: this.password } })
                .then(() => {
                    if (this.$route.query.referer) {
                        window.location.href = getPartnerUrl(this)
                    } else {
                        this.$router.push('/')
                    }
                })
                .catch((error) => {
                    if (!error.response) {
                        this.errors.push('Server Error')
                        return
                    }

                    if (error.response.data && error.response.data.message) {
                        this.errors.push(this.$t('errors.login.incorrect'))
                    } else {
                        this.errors.push(this.$t('errors.login.network_error'))
                    }
                })
        },
    },
}
</script>

<style lang="scss" scoped>
@import '~assets/sass/login.scss';

@media screen and (max-width: 768px) {
    .link-to-left {
        text-align: left !important;
    }
}
.bot-rem {
    margin-bottom: 1.5rem;
}
</style>
