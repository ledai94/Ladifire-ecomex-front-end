import SetsizeComponent from '@/components/Setsize.vue'

const Setsize = {
    install(Vue) {
        this.EventBus = new Vue()

        Vue.component('Setsize', SetsizeComponent)

        Vue.prototype.$setsize = {
            show(name) {
                Setsize.EventBus.$emit('show', name)
            },
            hide(name) {
                Setsize.EventBus.$emit('hide', name)
            },
        }
    },
}

export default Setsize
