import Layout from './layout'
const VModal = {
    install(Vue) {
        this.EventBus = new Vue()
        Vue.component('VModal', Layout)
        Vue.prototype.$modal = {
            open(params) {
                VModal.EventBus.$emit('open', params)
            },
            close(params) {
                VModal.EventBus.$emit('close', params)
            },
        }
    },
}
export default VModal
