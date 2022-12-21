import ModalComponent from '@/components/Modal.vue'

const Modal = {
    install(Vue) {
        this.EventBus = new Vue()

        Vue.component('Modal', ModalComponent)

        Vue.prototype.$modal = {
            show(name) {
                Modal.EventBus.$emit('show', name)
            },
        }
    },
}

export default Modal
