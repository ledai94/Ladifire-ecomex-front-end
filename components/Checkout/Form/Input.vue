<template>
    <div :class="classes">
        <label :for="inputId" class="control-label">
            {{ label }}
        </label>

        <div class="controls" name="controls">
            <input
                :id="inputId"
                v-bind="{ required, type, placeholder, name, value }"
                class="input-large"
                @focusin="handleFocusIn"
                @focusout="handleFocusOut"
                @input="updateValue($event.target.value)"
            />

            <div v-if="!!info" v-click-outside="hideInfo" :class="['info btn-group menu-button', { open: openInfo }]">
                <a class="dropdown-toggle btn" href="javascript:void(0);" tabindex="-1" @click="openInfo = !openInfo">
                    <span>i </span><span class="caret"></span>
                </a>

                <div class="dropdown-menu" name="menu">
                    <div tabindex="-1">
                        {{ info }}
                    </div>
                </div>
            </div>
        </div>

        <div v-if="errorMessages.length > 0" class="error">
            <ul>
                <li v-for="(error, index) in errorMessages" :key="index">
                    {{ error }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { uid } from '@/utils'
import ClickOutside from 'vue-click-outside'

export default {
    name: 'CheckoutFormInput',
    directives: { ClickOutside },
    props: {
        label: {
            type: String,
            required: true,
        },
        info: {
            type: String,
            required: false,
            default: null,
        },
        type: {
            type: String,
            required: false,
            default: 'text',
        },
        name: {
            type: String,
            required: false,
            default: null,
        },
        placeholder: {
            type: String,
            required: false,
            default: null,
        },
        value: {
            type: [String, Number, Boolean],
            required: false,
            default: null,
        },
        required: {
            type: Boolean,
            required: false,
            default: false,
        },
        errors: {
            type: [Array, String],
            required: false,
            default: () => [],
        },
    },
    data() {
        return {
            active: false,
            focused: false,
            openInfo: false,
        }
    },
    computed: {
        inputId() {
            return 'input-' + uid()
        },
        classes() {
            return [
                'control-group',
                {
                    required: this.required,
                    error: this.errorMessages.length > 0,
                    active: this.isActive,
                    focused: this.focused,
                    'with-info': !!this.info,
                },
            ]
        },
        isActive() {
            if (this.placeholder) {
                return true
            }

            if (this.value) {
                return true
            }

            return this.active
        },
        errorMessages() {
            let errors = this.errors

            if (!Array.isArray(this.errors)) {
                errors = [this.errors]
            }

            return errors
        },
    },
    methods: {
        updateValue(value) {
            this.$emit('input', value)
        },
        handleFocusIn() {
            this.active = true
            this.focused = true
        },
        handleFocusOut() {
            this.active = false
            this.focused = false
        },
        hideInfo() {
            this.openInfo = false
        },
    },
}
</script>
