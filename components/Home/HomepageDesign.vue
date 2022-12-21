<template>
    <section v-if="items.length > 0" class="homepage-designs">
        <div class="container">
            <h2 class="homepage-designs__headline text-center">
                {{ $t('Home.title_homepage_design') }}
            </h2>

            <div class="row">
                <div v-for="(item, index) in items" :key="item.id" class="col-12 col-md-6">
                    <nuxt-link class="homepage-designs__tile" :to="'/shop?design_category=' + item.id">
                        <picture :class="['tile__picture', 'tile__picture--bg']">
                            <img
                                :alt="item.name"
                                :data-id="item.id + index"
                                :src="getMediaUrl(item.medias, 'home_bg')"
                                class="tile__image tile--bg"
                                style="width: 100%; max-height: 300px"
                            />
                        </picture>

                        <div class="tile__overlay">
                            <div :data-id="item.id + index" class="tile__text tile__text--white">
                                <h3 class="tile__title">{{ item.name }}</h3>
                                <div class="tile__prehead"></div>
                            </div>

                            <!--                            <picture class="tile__picture tile__picture&#45;&#45;deco">-->
                            <!--                                <img-->
                            <!--                                    :alt="item.name"-->
                            <!--                                    :src="getMediaUrl(item.medias, 'home_deco')"-->
                            <!--                                    class="tile__image"-->
                            <!--                                />-->
                            <!--                            </picture>-->
                        </div>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { getImageLightness, getMediaUrl } from '@/utils'

export default {
    props: {
        items: {
            type: Array,
            required: true,
        },
    },
    mounted() {
        document.querySelectorAll('.tile--bg').forEach((el) => {
            getImageLightness(el.src, (brightness) => {
                if (brightness < 150) {
                    document
                        .querySelector('.tile--title[data-id="' + el.dataset.id + '"]')
                        .classList.add('tile__text--white')
                }
            })
        })
    },
    methods: {
        getMediaUrl(obj, type) {
            return getMediaUrl(obj, type)
        },
    },
}
</script>
