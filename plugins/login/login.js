import LoginComponent from '@/components/Login.vue'

const Login = {
    install(Vue) {
        this.EventBus = new Vue()

        Vue.component('Login', LoginComponent)

        Vue.prototype.$login = {
            show() {
                Login.EventBus.$emit('show')
            },
            hide() {
                Login.EventBus.$emit('hide')
            },
        }
    },
}

export default Login
