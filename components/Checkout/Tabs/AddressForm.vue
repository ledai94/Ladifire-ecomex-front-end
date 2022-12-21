<template>
    <div class="address-form">
        <CheckoutFormInput
            v-model="name"
            :errors="errors.name"
            :label="$t('checkout.tabs.info.form.lastName')"
            required
        />

        <CheckoutFormInput
            v-model="phone"
            :errors="errors.phone"
            :info="$t('checkout.tabs.info.form.phoneInfo')"
            :label="$t('checkout.tabs.info.form.phone')"
        />

        <div class="auto-completion">
            <CheckoutFormInput
                v-model="address"
                :errors="errors.address"
                :label="$t('checkout.tabs.info.form.address')"
                required
            />

            <div class="name-wrapper">
                <CheckoutFormInput
                    v-model="district"
                    :errors="errors.district"
                    :label="$t('checkout.tabs.info.form.district')"
                    class="firstname"
                    required
                />

                <CheckoutFormInput
                    v-model="province"
                    :errors="errors.province"
                    :label="$t('checkout.tabs.info.form.province')"
                    class="lastname"
                    required
                />
            </div>

            <CheckoutFormCountries v-model="country" :errors="errors.country" hint />
        </div>
    </div>
</template>

<script>
import CheckoutFormInput from '@/components/Checkout/Form/Input'
import { fetchCurrentCountry } from '~/api/locales'
import CheckoutFormCountries from '~/components/Checkout/Form/Countries'

export default {
    name: 'CheckoutAddressForm',
    components: { CheckoutFormCountries, CheckoutFormInput },
    data() {
        return {
            name: null,
            phone: null,
            address: null,
            district: null,
            province: null,
            country: null,
        }
    },
    computed: {
        errors() {
            return this.$store.state.carts.fieldErrors
        },
        formAddress() {
            return {
                name: this.name,
                phone: this.phone,
                address: this.address,
                district: this.district,
                province: this.province,
                country: this.country,
            }
        },
        storeAddress() {
            return this.$store.state.carts.address
        },
    },
    watch: {
        formAddress(address) {
            this.$store.commit('carts/SET_ADDRESS', address)
        },
    },
    created() {
        fetchCurrentCountry(this.$axios)
            .then((country) => {
                this.country = country
            })
            .catch(() => {})

        if (this.storeAddress) {
            Object.keys(this.storeAddress).forEach((key) => {
                this[key] = this.storeAddress[key]
            })
        }
    },
}
</script>
