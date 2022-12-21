<template>
    <div :class="['accordion__section', { open }]">
        <div class="accordion__head" @click="open = !open">
            <h2 class="accordion__title h3">
                {{ $t('detail.title_design_details') }}
            </h2>

            <div class="accordion__label" />

            <button class="accordion__btn">
                <svg class="accordion__icon accordion__icon--plus">
                    <use class="" xlink:href="/global.svg#plus"></use>
                </svg>

                <svg class="accordion__icon accordion__icon--minus">
                    <use class="" xlink:href="/global.svg#minus"></use>
                </svg>
            </button>
        </div>

        <div class="accordion__content">
            <div v-if="design.user" class="designer-info">
                <img :src="avatar" alt="User Avatar" class="designer-info__image designer-info__image--round" />

                <div class="designer-info__infos">
                    <div class="designer-info__label tiny-font">
                        {{ $t('detail.designer') }}
                    </div>

                    <div class="designer-info__name">
                        {{ design.user.name || design.user.email }}
                    </div>

                    <div v-if="design.user.address" class="country-pin designer-info__country">
                        {{ design.user.address.country }}
                    </div>
                </div>
            </div>

            <div class="designer-info">
                <img :alt="design.name" :src="design.image" class="designer-info__image designer-info__image--border" />

                <div class="designer-info__infos">
                    <div class="designer-info__label tiny-font">
                        {{ $t('detail.design') }}
                    </div>

                    <div class="designer-info__name">
                        {{ design.name }}
                    </div>

                    <button class="button default designer-info__report bold">
                        <svg class="button-icon button-icon--flag-report">
                            <use xlink:href="/mp.svg#flag-report" />
                        </svg>

                        <span>{{ $t('detail.reportDesign') }}</span>
                    </button>
                </div>

                <div class="designer-info__description">
                    {{ design.description }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DesignDetail',
    props: {
        design: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            open: false,
        }
    },
    computed: {
        avatar() {
            return '/'
        },
    },
}
</script>
