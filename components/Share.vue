<template>
    <div ref="share_modal" class="overlay overlay--small">
        <div class="overlay__background"></div>
        <div class="overlay__container">
            <button class="overlay__close" @click="hide">
                <svg class="overlay__icon overlay__icon--x">
                    <use xlink:href="/global.svg#x"></use>
                </svg>
            </button>
            <div class="overlay__content sharing">
                <h2 class="h2 sharing__headline">Share your product</h2>
                <div class="sharing__icons">
                    <button class="sharing__btn sharing__btn__only-mobile--mail">
                        <a href="mailto:" target="_blank">
                            <div class="sharing__btn__bubble sharing__btn__bubble--mail">
                                <svg class="sharing__btn__icon sharing__btn__icon--envelope">
                                    <use xlink:href="/global.svg#envelope"></use>
                                </svg>
                            </div>
                            <span>Mail</span>
                        </a>
                    </button>

                    <button class="sharing__btn sharing__btn__only-mobile--messenger">
                        <a href="https://messager.com" target="_blank">
                            <div class="sharing__btn__bubble sharing__btn__bubble--messenger">
                                <svg class="sharing__btn__icon sharing__btn__icon--messenger">
                                    <use xlink:href="/mp.svg#messenger"></use>
                                </svg>
                            </div>
                            <span>Messenger</span>
                        </a>
                    </button>

                    <button class="sharing__btn sharing__btn__only-mobile--whatsapp">
                        <a href="https://whatsapp.com" target="_blank">
                            <div class="sharing__btn__bubble sharing__btn__bubble--whatsapp">
                                <svg class="sharing__btn__icon sharing__btn__icon--whatsapp">
                                    <use xlink:href="/mp.svg#whatsapp"></use>
                                </svg>
                            </div>
                            <span>WhatsApp</span>
                        </a>
                    </button>

                    <button class="sharing__btn sharing__btn__only-mobile--facebook">
                        <a href="https://facebook.com" target="_blank">
                            <div class="sharing__btn__bubble sharing__btn__bubble--facebook">
                                <svg class="sharing__btn__icon sharing__btn__icon--facebook">
                                    <use xlink:href="/global.svg#facebook"></use>
                                </svg>
                            </div>
                            <span>Facebook</span>
                        </a>
                    </button>

                    <button class="sharing__btn sharing__btn__only-mobile--pinterest">
                        <a href="https://pinterest.com" target="_blank">
                            <div class="sharing__btn__bubble sharing__btn__bubble--pinterest">
                                <svg class="sharing__btn__icon sharing__btn__icon--pinterest">
                                    <use xlink:href="/global.svg#pinterest"></use>
                                </svg>
                            </div>
                            <span>Pinterest</span>
                        </a>
                    </button>
                    <button class="sharing__btn sharing__btn__only-mobile--twitter">
                        <a href="https://twitter.com" target="_blank">
                            <div class="sharing__btn__bubble sharing__btn__bubble--twitter">
                                <svg class="sharing__btn__icon sharing__btn__icon--twitter">
                                    <use xlink:href="/global.svg#twitter"></use>
                                </svg>
                            </div>
                            <span>Twitter</span>
                        </a>
                    </button>
                    <div class="sharing__text">or copy this link</div>
                    <div class="sharing__input-wrapper">
                        <input
                            id="mylink"
                            :value="'https://Merchaki.com' + this.$route.fullPath"
                            class="sharing__input"
                            type="text"
                            readonly=""
                            @click="urlproduct"
                        />

                        <button class="sharing__copy" @click="copyURL()">
                            <svg class="sharing__copy__icon sharing__copy__icon--copy">
                                <use xlink:href="/mp.svg#copy"></use></svg
                            ><span class="sharing__copy__text">{{ Copy }}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Share from '@/plugins/share/share.js'
export default {
    name: 'Share',
    data() {
        const urlProduct = this.$nuxt.$on('product-url', (value) => {
            this.urlProduct = value
        })
        return {
            urlProduct,
            visible: {},
            Copy: 'Copy',
        }
    },

    watch: {
        visible(state) {
            if (state) {
                this.$refs.share_modal.classList.add('show')
            } else {
                this.$refs.share_modal.classList.remove('show')
            }
        },
    },
    beforeMount() {
        Share.EventBus.$on('show', () => {
            this.show()
        })

        Share.EventBus.$on('hide', () => {
            this.hide()
        })
    },
    mounted() {
        window.addEventListener('keyup', (e) => {
            if (e.key === 'Escape' && this.visible) {
                this.visible = false
            }
        })
    },
    methods: {
        urlproduct() {
            console.log(this.$route)
        },
        copyURL() {
            const copyText = document.getElementById('mylink')
            copyText.select()
            document.execCommand('copy')
            this.Copy = 'Copied'
            alert('Link Copied')
        },
        show() {
            this.visible = true
        },
        hide() {
            this.visible = false
            this.Copy = 'Copy'
        },
    },
}
</script>

<style>
#share_modal {
    margin-top: 50%;
}
</style>
