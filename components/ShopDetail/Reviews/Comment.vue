<template>
    <div class="reviewComment">
        <div class="jss377">
            <div class="jss378">
                <div class="MuiAvatar-root MuiAvatar-circle jss379 MuiAvatar-colorDefault">{{ avatar }}</div>
            </div>
            <div style="flex: 1 1 0%">
                <div class="jss380">
                    <div class="jss381">
                        <div>
                            <div>
                                <strong>{{ review.user.name }}</strong>
                            </div>
                            <div class="jss424">
                                <star-rating
                                    :show-rating="false"
                                    :read-only="true"
                                    :rating="review.rating"
                                    :increment="0.1"
                                    :star-size="10"
                                    :border-width="4"
                                    border-color="#333333"
                                    inactive-color="#ffffff"
                                    active-color="#333333"
                                    :star-points="starPoints"
                                ></star-rating>
                            </div>
                        </div>
                        <div style="padding-right: 20px">
                            <span class="jss383">{{ date }}</span>
                        </div>
                    </div>
                </div>
                <p class="jss382">
                    {{ review.body }}
                </p>
                <div style="display: flex">
                    <img
                        v-for="image in review.media"
                        :key="image.id"
                        :src="image.url"
                        :alt="image.name"
                        style="width: 100px; height: 65px; margin-right: 5px"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import StarRating from 'vue-star-rating/src'
export default {
    name: 'Comment',
    components: { StarRating },
    props: {
        review: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            starPoints: [23, 2, 14, 17, 0, 19, 10, 34, 7, 50, 23, 43, 38, 50, 36, 34, 46, 19, 31, 17],
        }
    },
    computed: {
        avatar() {
            const user = this.review.user
            const name = user.name || user.email
            if (user.avatar) {
                return user.avatar
            }
            return name.slice(0, 1).toUpperCase()
        },
        date() {
            const date = this.review.created_at
            return new Date(date).toDateString()
        },
    },
    created() {
        // console.log('this.review.created_at', this.review.created_at.toDateString())
    },
}
</script>

<style scoped>
.jss377 {
    display: flex;
    margin-bottom: 15px;
}
.jss378 {
    flex-basis: 80px;
}
.jss379 {
    width: 46px;
    border: 1px solid #cbcbcb;
    height: 46px;
    border-radius: 50%;
}
.MuiAvatar-colorDefault {
    color: #fafafa;
    background-color: #bdbdbd;
}
.MuiAvatar-root {
    width: 40px;
    height: 40px;
    display: flex;
    overflow: hidden;
    position: relative;
    font-size: 1.25rem;
    align-items: center;
    flex-shrink: 0;
    font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue, Arial, sans-serif,
        Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
    line-height: 1;
    user-select: none;
    border-radius: 50%;
    justify-content: center;
}
.jss380 {
    display: flex;
    justify-content: space-between;
}
.jss381 {
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.jss383 {
    color: #606469;
    font-size: 14px;
    margin-left: 6px;
}
.jss424 {
    color: #999;
    display: flex;
    font-size: 14px;
}
.jss384 {
    font-size: 16px;
    font-weight: 400;
}
.MuiButton-outlinedSizeSmall {
    padding: 3px 9px;
}
.MuiButton-outlined {
    border: 1px solid rgba(0, 0, 0, 0.23);
}
.MuiButton-root {
    color: #333333;
    min-width: 64px;
    box-sizing: border-box;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue, Arial, sans-serif,
        Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
    line-height: 1.75;
    border-radius: 4px;
    text-transform: none;
}
.MuiButtonBase-root {
    cursor: pointer;
    margin: 0;
    display: inline-flex;
    position: relative;
    align-items: center;
    user-select: none;
    vertical-align: middle;
    justify-content: center;
    text-decoration: none;
    background-color: transparent;
    -webkit-tap-highlight-color: transparent;
}
.MuiButton-label {
    width: 100%;
    display: inherit;
    align-items: inherit;
    justify-content: inherit;
}
.MuiTouchRipple-root {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    overflow: hidden;
    position: absolute;
    border-radius: inherit;
    pointer-events: none;
}
</style>
