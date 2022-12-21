<template>
    <div :class="className">
        <star-rating
            :show-rating="false"
            :rating="3.8"
            :star-size="10"
            :border-width="4"
            border-color="#333333"
            inactive-color="#ffffff"
            active-color="#333333"
            :star-points="[23, 2, 14, 17, 0, 19, 10, 34, 7, 50, 23, 43, 38, 50, 36, 34, 46, 19, 31, 17]"
        ></star-rating>

        <span :class="countClass"> (1968)</span>
    </div>
</template>

<script>
import StarRating from 'vue-star-rating/src'
export default {
    name: 'ProductRating',
    components: { StarRating },
    props: {
        product: {
            type: Object,
            required: true,
        },
        className: {
            type: [String, Array],
            required: false,
            default: () => [],
        },
        countClass: {
            type: [String, Array],
            required: false,
            default: () => [],
        },
    },
}
</script>
