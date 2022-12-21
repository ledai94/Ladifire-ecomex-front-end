<template>
    <div id="productReviewSection" :class="['accordion__section product-reviews', { open }]">
        <div id="d-d96" class="accordion__head" @click="open = !open">
            <h2 id="d-h6" class="accordion__title h3">Customer reviews</h2>
            <div id="d-d97" class="accordion__label">
                <div id="d-d99" class="stars star-rating" data-count="72" data-rating="4.5">
                    <div id="d-d9A" class="icon-container">
                        <star-rating
                            :show-rating="false"
                            :read-only="false"
                            :rating="rating"
                            :increment="0.1"
                            :star-size="10"
                            :border-width="4"
                            border-color="#333333"
                            inactive-color="#ffffff"
                            active-color="#333333"
                            :star-points="[23, 2, 14, 17, 0, 19, 10, 34, 7, 50, 23, 43, 38, 50, 36, 34, 46, 19, 31, 17]"
                        ></star-rating>
                    </div>
                    <div id="d-d9B" class="stars__info">
                        <span id="d-s2E" class="stars__detail"></span>
                        <div id="d-d9C" class="stars__count">
                            <span id="d-s2F" class="only-small">{{ comments.lengthComment }}</span
                            ><span id="d-s2G" class="only-large">{{ comments.lengthComment + ' reviews' }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <button id="d-bH" class="accordion__btn">
                <svg id="d-s2C" class="accordion__icon accordion__icon--plus">
                    <use id="d-uT" class="" xlink:href="/global.svg#plus"></use></svg
                ><svg id="d-s2D" class="accordion__icon accordion__icon--minus">
                    <use id="d-uU" class="" xlink:href="/global.svg#minus"></use>
                </svg>
            </button>
        </div>
        <div id="d-d98" class="accordion__content review-section" :class="{ 'accordion__content--no-max': open }">
            <div id="d-d9D" class="rating-chart-and-filter-container">
                <div id="d-d9E" class="product-rating-chart-grid" style="padding-right: 50px">
                    <div id="d-d9F" class="label row-1">
                        5<svg id="d-s2M" class="icon icon--star-filled">
                            <use id="d-u10" class="" xlink:href="/global.svg#star-filled"></use>
                        </svg>
                    </div>
                    <div id="d-d9G" class="outerBar row-1">
                        <div
                            id="d-d9H"
                            class="innerBar"
                            :style="'width:' + Math.round((comments.lengthGreat / comments.lengthComment) * 100) + '%'"
                        ></div>
                    </div>
                    <div id="d-d9I" class="counter row-1">{{ comments.lengthGreat }}</div>
                    <div id="d-d9J" class="label row-2">
                        4<svg id="d-s2N" class="icon icon--star-filled">
                            <use id="d-u11" class="" xlink:href="/global.svg#star-filled"></use>
                        </svg>
                    </div>
                    <div id="d-d9K" class="outerBar row-2">
                        <div
                            id="d-d9L"
                            class="innerBar"
                            :style="
                                'width:' + Math.round((comments.lengthVeryGood / comments.lengthComment) * 100) + '%'
                            "
                        ></div>
                    </div>
                    <div id="d-d9M" class="counter row-2">{{ comments.lengthVeryGood }}</div>
                    <div id="d-d9N" class="label row-3">
                        3<svg id="d-s2O" class="icon icon--star-filled">
                            <use id="d-u12" class="" xlink:href="/global.svg#star-filled"></use>
                        </svg>
                    </div>
                    <div id="d-d9O" class="outerBar row-3">
                        <div
                            id="d-d9P"
                            class="innerBar"
                            :style="'width:' + Math.round((comments.lengthGood / comments.lengthComment) * 100) + '%'"
                        ></div>
                    </div>
                    <div id="d-d9Q" class="counter row-3">{{ comments.lengthGood }}</div>
                    <div id="d-d9R" class="label row-4">
                        2<svg id="d-s2P" class="icon icon--star-filled">
                            <use id="d-u13" class="" xlink:href="/global.svg#star-filled"></use>
                        </svg>
                    </div>
                    <div id="d-d9S" class="outerBar row-4">
                        <div
                            id="d-d9T"
                            class="innerBar"
                            :style="'width:' + Math.round((comments.lengthBad / comments.lengthComment) * 100) + '%'"
                        ></div>
                    </div>
                    <div id="d-d9U" class="counter row-4">{{ comments.lengthBad }}</div>
                    <div id="d-d9V" class="label row-5">
                        1<svg id="d-s2Q" class="icon icon--star-filled">
                            <use id="d-u14" class="" xlink:href="/global.svg#star-filled"></use>
                        </svg>
                    </div>
                    <div id="d-d9W" class="outerBar row-5">
                        <div
                            id="d-d9X"
                            class="innerBar"
                            :style="
                                'width:' + Math.round((comments.lengthVeryBad / comments.lengthComment) * 100) + '%'
                            "
                        ></div>
                    </div>
                    <div id="d-d9Y" class="counter row-5">{{ comments.lengthVeryBad }}</div>
                </div>
                <Review v-bind="{ product }" />
            </div>

            <div id="d-dAF" class="comment-container">
                <div id="d-dAG" class="empty-state d-none">
                    <div id="d-dAH" class="">You selected at least one filter too many</div>
                    <button id="d-bS" class="reset-button">Reset filter</button>
                </div>

                <div v-if="rating" id="pdp-review-comments" class="">
                    <Comment v-for="(review, index) in comments.data" :key="index" :review="review" />
                </div>
                <ShopPagination :data="comments" :page="currentPage" />
            </div>
        </div>
    </div>
</template>

<script>
import ShopPagination from '@/components/Shop/Pagination.vue'
import Comment from '@/components/ShopDetail/Reviews/Comment.vue'
import FilterReview from '@/components/ShopDetail/Reviews/FilterReview.vue'
import Review from '@/components/ShopDetail/Reviews/Review.vue'
import StarRating from 'vue-star-rating/src'

export default {
    name: 'Reviews',
    // eslint-disable-next-line vue/no-unused-components
    components: { ShopPagination, Review, FilterReview, Comment, StarRating },
    props: {
        product: {
            type: Object,
            required: true,
        },
        comments: {
            type: Object,
            required: false,
            default: () => {},
        },
    },
    data() {
        return {
            isActiveFilter: false,
            starPoints: [23, 2, 14, 17, 0, 19, 10, 34, 7, 50, 23, 43, 38, 50, 36, 34, 46, 19, 31, 17],
            stars: [1, 2, 3, 4, 5],
            open: false,
        }
    },
    computed: {
        rating() {
            if (this.comments.lengthComment) {
                return (
                    (this.comments.lengthVeryBad +
                        this.comments.lengthBad * 2 +
                        this.comments.lengthGood * 3 +
                        this.comments.lengthVeryGood * 4 +
                        this.comments.lengthGreat * 5) /
                    this.lengthComment
                )
            }
            return false
        },
        lengthComment() {
            return this.comments.lengthComment
        },
        currentPage() {
            return this.$route.query.page ? parseInt(this.$route.query.page) : 1
        },
    },
    methods: {
        openFilter(par) {
            this.isActiveFilter = par
        },
    },
}
</script>

<style scoped></style>
