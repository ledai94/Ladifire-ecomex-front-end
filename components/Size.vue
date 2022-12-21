<template>
    <div ref="sizePopup" class="overlay a2b-overlay">
        <div class="overlay__background"></div>
        <div class="overlay__container">
            <button class="overlay__close" @click="hide">
                <svg class="overlay__icon overlay__icon--x">
                    <use xlink:href="/global.svg#x"></use>
                </svg>
            </button>
            <div class="overlay__content">
                <div class="a2b-overlay__img Wrapper">
                    <div class="Loader d-none"></div>
                    <img
                        src="//image.spreadshirtmedia.com/image-server/v1/mp/products/T210A1PA3176PT17X0Y13D12707063FS6686/views/1,width=378,height=378,appearanceId=1,backgroundColor=F2F2F2,modelId=1543,crop=detail,modelImageVersion=1605005884/hand-suit-bat-cartoon.jpg"
                    />
                </div>
                <div class="a2b-overlay__right-wrapper">
                    <div class="h4">Men's T-Shirt</div>
                    <div class="h4">Hand Suit Bat Cartoon</div>
                    <div class="select size-select size-select--small">
                        <div class="select__item" data-size-id="2" data-size-name="S">
                            <div class="select__label"><span>S</span></div>
                        </div>
                        <div class="select__item" data-size-id="3" data-size-name="M">
                            <div class="select__label"><span>M</span></div>
                        </div>
                        <div class="select__item" data-size-id="4" data-size-name="L">
                            <div class="select__label"><span>L</span></div>
                        </div>
                        <div class="select__item" data-size-id="5" data-size-name="XL">
                            <div class="select__label"><span>XL</span></div>
                        </div>
                        <div class="select__item" data-size-id="6" data-size-name="2XL">
                            <div class="select__label"><span>2XL</span></div>
                        </div>
                        <div class="select__item" data-size-id="38" data-size-name="3XL">
                            <div class="select__label"><span>3XL</span></div>
                        </div>
                        <div class="select__item" data-size-id="94" data-size-name="4XL">
                            <div class="select__label"><span>4XL</span></div>
                        </div>
                        <div class="select__item" data-size-id="102" data-size-name="5XL">
                            <div class="select__label"><span>5XL</span></div>
                        </div>
                        <div class="select__item" data-size-id="52" data-size-name="6XL">
                            <div class="select__label"><span>6XL</span></div>
                        </div>
                    </div>
                    <div class="size-hint"><div class="pt-sizes__fit">Regular fit</div></div>
                    <div class="price__wrap">
                        <div>
                            <div class="price__now-price a2b-overlay__price">
                                <span class="price__from d-none">from </span><span content="USD">$</span
                                ><span content="18.99">18.99</span>
                            </div>
                        </div>
                    </div>
                    <div class="button pattern cta cart">
                        <svg class="icon icon--cart">
                            <use xlink:href="/pages/_components/svg/global.svg#cart"></use></svg
                        ><span>Add to cart</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Size from '@/plugins/size/size.js'
export default {
    name: 'Size',
    data() {
        return {
            visible: {},
        }
    },
    watch: {
        visible(state) {
            if (state) {
                this.$refs.sizePopup.classList.add('show')
            } else {
                this.$refs.sizePopup.classList.remove('show')
            }
        },
    },
    beforeMount() {
        Size.EventBus.$on('show', () => {
            console.log('show size')
            this.show()
        })

        Size.EventBus.$on('hide', () => {
            this.hide()
        })
    },
    // mounted() {
    //     const vue = this
    //
    //     window.addEventListener('keyup', function (e) {
    //         if (e.key === 'Escape' && vue.visible) {
    //             vue.hide()
    //         }
    //     })
    // },
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

<style scoped></style>
