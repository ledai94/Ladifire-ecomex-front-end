import ShareComponent from '@/components/Share.vue'
const Share = {
    install(Vue) {
        this.EventBus = new Vue()
        Vue.component('Share', ShareComponent)
        Vue.prototype.$share = {
            show() {
                Share.EventBus.$emit('show')
            },
            hide() {
                Share.EventBus.$emit('hide')
            },
        }
    },
}
export default Share
