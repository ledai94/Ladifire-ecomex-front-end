<template>
    <div class="star-rating">
        <label
            v-for="rating in ratings"
            :key="rating"
            class="star-rating__star"
            :class="{ 'is-selected': value >= rating && value != null, 'is-disabled': disabled }"
            @click="set(rating)"
            @mouseover="star_over(rating)"
            @mouseout="star_out"
        >
            <input
                v-model="value"
                class="star-rating star-rating__checkbox"
                type="radio"
                :value="rating"
                :disabled="disabled"
            />★</label
        >
    </div>
</template>

<script>
export default {
    name: 'StarRating',
    props: {
        value: { type: Number, required: false, default: 4 },
        id: { type: Number, required: false, default: 0 },
        disabled: { type: Boolean, required: false, default: false },
        required: { type: Boolean, required: false, default: false },
    },
    data() {
        return {
            temp_value: null,
            ratings: [1, 2, 3, 4, 5],
            valueStar: null,
        }
    },
    computed: {},

    methods: {
        /*
         * Behaviour of the stars on mouseover.
         */
        star_over(index) {
            if (!this.disabled) {
                this.temp_value = this.value
                return (this.value = index)
            }
        },

        /*
         * Behaviour of the stars on mouseout.
         */
        star_out() {
            if (!this.disabled) {
                return (this.value = this.temp_value)
            }
        },

        /*
         * Set the rating.
         */
        set(value) {
            if (!this.disabled) {
                this.temp_value = value
                this.$emit('star-value', value)
                return (this.value = value)
            }
        },
    },
}
</script>

<style lang="scss">
%visually-hidden {
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
}

.star-rating {
    &__star {
        display: inline-block;
        padding: 3px;
        vertical-align: middle;
        line-height: 1;
        font-size: 1.75em;
        color: #ababab;
        transition: color 0.2s ease-out;

        &:hover {
            cursor: pointer;
        }

        &.is-selected {
            color: #333333;
        }

        &.is-disabled:hover {
            cursor: default;
        }
    }

    &__checkbox {
        @extend %visually-hidden;
    }
}
</style>
