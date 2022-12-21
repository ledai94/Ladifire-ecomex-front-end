import DialogComponent from '@/components/Dialog.vue'

const Dialog = {
    install(Vue) {
        this.EventBus = new Vue()

        Vue.component('Dialog', DialogComponent)

        Vue.prototype.$dialog = {
            show(name) {
                Dialog.EventBus.$emit('show', name)
            },
            hide(name) {
                Dialog.EventBus.$emit('hide', name)
            },
        }
    },
}

export default Dialog
