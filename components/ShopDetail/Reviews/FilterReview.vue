<template>
    <div id="d-d9Z" class="review-filter" :class="{ 'only-large': desktop }">
        <div id="d-dA0" class="rating-filter">
            <div id="d-dA1" class="title">Filter by rating</div>
            <div id="d-dA2" class="filter-button-container rating-filter">
                <button v-for="star in stars" :key="star" class="select__item">
                    <div class="select__label" value="1">{{ star + ' star' }}</div>
                </button>
            </div>
        </div>
        <div id="d-dA8" class="size-filter">
            <div id="d-dA9" class="title">Filter by size</div>
            <div id="d-dAA" class="filter-button-container size-filter">
                <button v-for="size in reviews.sizes" :key="size.id" class="select__item">
                    <div class="select__label">{{ size.name }}</div>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FilterReview',
    props: {
        desktop: {
            type: Boolean,
            required: false,
        },
        stars: {
            type: Array,
            required: true,
        },
        reviews: {
            type: Object,
            required: true,
        },
    },
}
</script>

<style scoped></style>
