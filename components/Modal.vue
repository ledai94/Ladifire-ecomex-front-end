<template>
    <portal to="modals">
        <div :id="'lightbox-' + name" class="lightbox">
            <div class="lightbox__layer js-lightbox-close" @click="hide"></div>

            <div class="lightbox__container">
                <div class="lightbox__close js-lightbox-close" @click="hide">
                    <svg class="icon icon--x">
                        <use xlink:href="/global.svg#x"></use>
                    </svg>
                </div>

                <div class="lightbox__content">
                    <slot />
                </div>
            </div>
        </div>
    </portal>
</template>

<script>
import Modal from '@/plugins/modal/modal.js'
export default {
    name: 'Modal',
    props: {
        name: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            visible: {},
        }
    },
    watch: {
        visible(state) {
            const element = document.getElementById('lightbox-' + this.name)
            if (element) {
                if (state) {
                    document.querySelector('#sprd-header').classList.remove('fade-out')
                    document.querySelector('#sprd-header').classList.add('open-layer')
                    element.classList.add('show')
                } else {
                    document.querySelector('#sprd-header').classList.remove('open-layer')
                    element.classList.remove('show')
                }
            }
        },
    },
    beforeMount() {
        Modal.EventBus.$on('show', (name) => {
            if (name === this.name) {
                this.show()
            }
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
        show() {
            this.visible = true
        },
        hide() {
            this.visible = false
        },
    },
}
</script>
