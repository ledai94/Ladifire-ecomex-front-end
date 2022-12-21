<template>
    <div class="country-geolocation-section-wrapper">
        <div class="country-geolocation-section">
            <div class="active country-wrapper control-group">
                <label :for="inputId" class="control-label">
                    {{ $t('checkout.tabs.info.form.country') }}
                </label>

                <div class="controls" name="controls">
                    <select :id="inputId" :value="value" @change="handleChange">
                        <option
                            v-for="(country, code) in countries"
                            :key="code"
                            :selected="selectedOption(code)"
                            :value="code"
                        >
                            {{ country }}
                        </option>
                    </select>
                </div>
            </div>
        </div>

        <div v-if="hint" :data-hint="$t('checkout.tabs.info.form.notice')" class="nafta-text cf customs-warning">
            <span v-html="$t('checkout.tabs.info.form.countryHint')" />
        </div>
    </div>
</template>

<script>
import { uid } from '@/utils'

export default {
    name: 'CheckoutFormCountries',
    props: {
        hint: {
            type: Boolean,
            required: false,
            default: false,
        },
        value: {
            type: String,
            required: false,
            default: null,
        },
    },
    computed: {
        inputId() {
            return 'input-' + uid()
        },
        countries() {
            return this.$store.state.locales.countries
        },
    },
    methods: {
        selectedOption(option) {
            if (this.value) {
                return option === this.value
            }

            return false
        },
        handleChange(e) {
            this.$emit('input', e.target.value)
        },
    },
}
</script>
