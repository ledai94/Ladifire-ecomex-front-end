<template>
    <div id="d-d3" class="stars stars--link" data-count="1563" data-rating="4.4">
        <div id="d-d4" class="icon-container">
            <client-only>
                <star-rating
                    :read-only="true"
                    :rating="3.8"
                    :star-size="10"
                    :border-width="4"
                    border-color="#333333"
                    inactive-color="#ffffff"
                    active-color="#333333"
                    :star-points="[23, 2, 14, 17, 0, 19, 10, 34, 7, 50, 23, 43, 38, 50, 36, 34, 46, 19, 31, 17]"
                ></star-rating>
            </client-only>
        </div>

        <div id="d-d5" class="stars__info">
            <!--<span id="d-s" class="stars__detail">4.4</span>-->

            <div id="d-d6" class="stars__count">
                <span id="d-s2" class="only-small">1563</span>
                <span id="d-s3" class="only-large">1563 reviews</span>
            </div>
        </div>
    </div>
</template>

<script>
import StarRating from 'vue-star-rating/src'
export default {
    name: 'Rating',
    components: { StarRating },
    props: {
        product: {
            type: Object,
            required: true,
        },
    },
}
</script>
