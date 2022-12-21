<template>
    <portal to="dialogs">
        <div :class="['overlay', 'dialog', { show: open }]">
            <div class="overlay__background" />

            <div class="overlay__container">
                <button class="overlay__close" @click="open = false">
                    <svg class="overlay__icon overlay__icon--x">
                        <use xlink:href="/global.svg#x" />
                    </svg>
                </button>

                <div class="overlay__content">
                    <div v-if="checkmark" class="dialog__checkmark">
                        <svg class="dialog__icon dialog__icon--checkmark">
                            <use xlink:href="/global.svg#checkmark" />
                        </svg>
                    </div>

                    <div class="dialog__title">
                        {{ title }}
                    </div>

                    <div class="dialog__message">
                        <slot />
                    </div>

                    <div v-if="!hasButtonSlot" class="dialog__buttons">
                        <div class="button pattern cancel" @click="open = false">
                            {{ $t('dialog.cancel') }}
                        </div>

                        <div class="button pattern cta delete" @click="$emit('action')">
                            {{ action }}
                        </div>
                    </div>

                    <div v-else class="dialog__buttons">
                        <slot name="buttons" />
                    </div>
                </div>
            </div>
        </div>
    </portal>
</template>

<script>
import Dialog from '@/plugins/dialog/dialog'

export default {
    name: 'Dialog',
    props: {
        name: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: false,
            default: null,
        },
        action: {
            type: String,
            required: false,
            default: null,
        },
        checkmark: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
    data() {
        return {
            open: false,
        }
    },
    computed: {
        hasButtonSlot() {
            return this.$slots.buttons
        },
    },
    watch: {
        open(state) {
            const el = document.querySelector('html')

            if (state) {
                el.classList.add('no-scroll')
            } else {
                el.classList.remove('no-scroll')
            }
        },
    },
    beforeMount() {
        Dialog.EventBus.$on('show', (name) => {
            if (name === this.name) {
                this.open = true
            }
        })

        Dialog.EventBus.$on('hide', (name) => {
            if (name === this.name) {
                this.open = false
            }
        })
    },
    mounted() {
        window.addEventListener('keyup', (e) => {
            if (e.key === 'Escape' && this.open) {
                this.open = false
            }
        })
    },
}
</script>
