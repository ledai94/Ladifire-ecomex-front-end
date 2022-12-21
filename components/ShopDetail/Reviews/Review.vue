<template>
    <div class="comment-rating" style="padding-right: 50px">
        <div v-if="!this.$auth.loggedIn">
            <p style="background-color: rgb(255, 244, 229); padding: 5px 0px">
                Please <nuxt-link to="/login" style="color: #09b2a5">Login</nuxt-link> to rate and review products. If
                you haven't an account please click <nuxt-link to="/register" style="color: #09b2a5">here</nuxt-link> to
                register
            </p>
        </div>
        <div v-else>
            <form method="post" @submit.prevent="postReview">
                <p style="margin-bottom: 0px">Rate</p>
                <StarRating :value="rating" @star-value="starValue" />
                <!--<star-rating :increment="1" />-->
                <p style="margin-bottom: 2px">Reviews</p>
                <div style="position: relative">
                    <textarea id="w3review" v-model="review" rows="3" style="width: 100%; resize: none"></textarea>
                    <span class="hiddenFileInput">
                        <input ref="photo" type="file" accept="image/*" multiple @change="uploadFieldChange" />
                    </span>
                </div>
                <div v-if="checkError">
                    <span style="font-size: 12px; color: red">{{ message }}</span>
                </div>
                <div v-if="imagePreviews || !error" style="margin: 5px 0px; display: flex">
                    <div v-for="(img, index) in imagePreviews" :key="index" style="position: relative">
                        <img
                            class="show-img img-responsive"
                            :src="img.path"
                            :alt="img.name"
                            style="width: 100px; height: 70px; margin-right: 5px"
                        />
                        <span class="delete" @click.prevent="deleteImage(index)">
                            <svg class="article-btn__icon article-btn__icon--x">
                                <use xlink:href="/global.svg#x"></use>
                            </svg>
                        </span>
                    </div>
                </div>

                <button class="button default" type="submit">Send Review</button>
            </form>
        </div>
    </div>
</template>
<script>
import StarRating from './StarRating.vue'
export default {
    name: 'Review',
    components: { StarRating },
    props: {
        product: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            review: '',
            images: null,
            imagePreviews: [],
            star: null,
            files: [],
            checkError: false,
            message: '',
        }
    },
    computed: {
        rating() {
            if (!this.star) {
                return 4
            }
            return this.star
        },
    },
    methods: {
        async postReview(event) {
            event.preventDefault()
            const formData = new FormData()
            // formData.append('files', this.files)
            if (this.files) {
                for (let i = 0; i < this.files.length; i++) {
                    const image = this.files[i]
                    formData.append('image[' + i + ']', image)
                }
            }

            const json = JSON.stringify({
                body: this.review,
                user_id: this.$auth.user.id,
                product_id: this.product.id,
                rating: this.rating,
            })
            formData.append('data', json)

            await this.$axios
                .post('/reviews', formData, {
                    headers: {
                        'content-type': 'multipart/form-data',
                    },
                })
                .then((response) => {
                    if (response.data) {
                        this.message = response.data.message
                        this.checkError = true
                        setTimeout(() => {
                            this.checkError = false
                        }, 5000)
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
            this.review = ''
            this.imagePreviews = []
            this.files = []
        },
        uploadFieldChange(e) {
            this.images = this.$refs.photo.files
            if (!this.images.length) {
                return false
            }
            if (this.images.length > 3) {
                alert('chi up duoc toi da 3 anh')
                return false
            }
            this.images.forEach((el) => {
                this.createImage(el)
            })
        },
        createImage(file) {
            this.files.push(file)
            if (this.files.length > 3) {
                this.files.splice(3)
                alert('chi up duoc toi da 3 anh')
                return false
            }
            const reader = new FileReader()
            reader.onload = (e) => {
                console.log(e)
                const dataURI = e.target.result
                if (dataURI) {
                    if (!this.imagePreviews.length) {
                        this.imagePreviews.push({ name: file.name, path: dataURI })
                        this.currentIndexImage = 0
                    } else {
                        this.imagePreviews.push({ name: file.name, path: dataURI })
                    }
                }
            }
            reader.readAsDataURL(file)
        },
        deleteImage(index) {
            this.imagePreviews.splice(index, 1)
            this.files.splice(index, 1)
        },
        starValue(par) {
            this.star = par
        },
    },
}
</script>

<style scoped>
.delete {
    display: block;
    width: 15px;
    height: 15px;
    /*border: 1px solid #333333;*/
    /*border-radius: 50%;*/
    padding: 1px;
    position: absolute;
    top: -3px;
    right: 5px;
    cursor: pointer;
}
.custom-text {
    font-weight: bold;
    font-size: 1.9em;
    border: 1px solid #cfcfcf;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 5px;
    color: #999;
    background: #fff;
}
.comment-rating {
    margin-bottom: 1.5rem;
}
@media screen and (min-width: 768px) {
    .comment-rating {
        margin-bottom: 2.5rem;
        width: 50%;
    }
}
.button-review {
    padding: 7px 10px;
    margin: 10px 0px;
    border: 1px solid #999;
    border-radius: 5%;
}
.hiddenFileInput > input {
    height: 100%;
    width: 35px;
    opacity: 0;
    cursor: pointer;
}
.hiddenFileInput {
    position: absolute;
    top: 0;
    right: 0;
    width: 35px;
    height: 35px;
    display: inline-block;
    overflow: hidden;
    cursor: pointer;

    /*for the background, optional*/
    background: center center no-repeat;
    background-size: 75% 75%;
    background-image: url('/camera.png');
}
</style>
