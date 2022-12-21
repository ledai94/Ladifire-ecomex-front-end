import SizeComponent from '@/components/Size.vue'

const Size = {
    install(Vue) {
        this.EventBus = new Vue()

        Vue.component('Size', SizeComponent)

        Vue.prototype.$size = {
            show() {
                console.log('show emt')
                Size.EventBus.$emit('show')
            },
            hide() {
                Size.EventBus.$emit('hide')
            },
        }
    },
}

export default Size
