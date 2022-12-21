<template>
    <div>
        <div v-if="visible" :data-modal="name" class="modal">
            <div aria-modal="true" tabindex="-1" class="modal_mask">
                <div class="modal-wrapper">
                    <div class="modal-container">
                        <div class="modal_body">
                            <slot :payload="payload" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import VModal from './handle'
export default {
    props: {
        visible: false,
        name: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            payload: null,
        }
    },
    beforeMount() {
        // open event
        VModal.EventBus.$on('open', (params) => {
            if (this.name === params.name) {
                this.open(params)
            }
        })

        // close event
        VModal.EventBus.$on('close', (params) => {
            if (this.name === params.name) {
                this.close(params)
            }
        })
    },
    methods: {
        open(params) {
            this.visible = true
            // to do something (mo popup xu ly nhung gi)
        },
        close(params) {
            this.visible = false
        },
    },
}
</script>
<style>
.modal {
    display: flex;
}
.modal_mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
}
.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}

.modal-container {
    width: 500px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
}
</style>
