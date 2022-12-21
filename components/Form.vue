<template>
    <form id="registerForm" method="post" @submit="register">
        <div class="textinput login__username">
            <input v-model="username" autocomplete="email" autofocus="autofocus" class="textinput__input" type="text" />

            <label :class="username ? 'textinput-has-value' : ''" for="username">
                {{ $t('register.username') }}
            </label>
        </div>
        <div v-if="errors.length < 1" style="margin-bottom: 2.5rem" class="login__error">
            {{ errorUsername }}
        </div>
        <div class="textinput login__email">
            <input v-model="email" autocomplete="email" autofocus="autofocus" class="textinput__input" type="email" />

            <label :class="email ? 'textinput-has-value' : ''" for="email">
                {{ $t('register.email') }}
            </label>
        </div>
        <div v-if="errors.length < 1" style="margin-bottom: 2.5rem" class="login__error">
            {{ errorEmail }}
        </div>
        <div class="textinput login__phone">
            <input
                v-model="phone"
                autocomplete="Phone Number"
                autofocus="autofocus"
                class="textinput__input"
                type="text"
            />

            <label :class="phone ? 'textinput-has-value' : ''" for="phone">
                {{ $t('register.phone') }}
            </label>
        </div>
        <div v-if="errors.length < 1" style="margin-bottom: 2.5rem" class="login__error">
            {{ errorEmail }}
        </div>
        <div class="textinput login__password">
            <input
                ref="password"
                v-model="password"
                type="password"
                autocomplete="current-password"
                class="textinput__input"
            />

            <label :class="password ? 'textinput-has-value' : ''" for="password">
                {{ $t('login.password') }}
            </label>
        </div>
        <div v-if="errors.length < 1" style="margin-bottom: 2.5rem" class="login__error">
            {{ errorPassword }}
        </div>
        <div style="margin-bottom: 2.5rem" class="textinput login__password">
            <input
                ref="password"
                v-model="repassword"
                type="password"
                autocomplete="current-password"
                class="textinput__input"
            />

            <label :class="repassword ? 'textinput-has-value' : ''" for="password">
                {{ $t('login.repassword') }}
            </label>
        </div>

        <div v-for="(error, index) in errors" :key="index" style="margin-bottom: 2.5rem" class="login__error">
            {{ error }}
        </div>
        <button class="login__cta button button--main button--large" type="submit">
            {{ $t('register.submit') }}
        </button>
    </form>
</template>
<script>
export default {
    data() {
        return {
            username: '',
            email: '',
            phone: '',
            password: '',
            repassword: '',
            error: [],
            errors: [],
            errorEmail: '',
            errorUsername: '',
            errorPassword: '',
        }
    },
    methods: {
        register(event) {
            event.preventDefault()
            this.errors = []
            this.error = []
            if (!this.email || !this.phone || !this.password || !this.username || !this.repassword) {
                this.errors.push(this.$t('errors.register.missing_input'))

                return false
            }
            this.$axios
                .post('/auth/signup', {
                    email: this.email,
                    phone: this.phone,
                    password: this.password,
                    password_confirmation: this.repassword,
                    name: this.username,
                })
                .then((response) => {
                    console.log(response)
                    this.$emit('is-register', false)
                })
                .catch((error) => {
                    if (error.response.data && error.response.data.message) {
                        this.error.push(error.response.data.errors)
                        if (this.error[0].email) {
                            this.errorEmail = this.error[0].email[0]
                        }
                        if (this.error[0].name) {
                            this.errorUsername = this.error[0].name[0]
                        }
                        if (this.error[0].password) {
                            this.errorPassword = this.error[0].password[0]
                        }
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
