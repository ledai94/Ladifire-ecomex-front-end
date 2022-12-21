<template>
    <div :class="['usp--pdp', 'usp', 'usp--border', className]">
        <img :alt="$t('detail.usp.trust')" :src="$t('detail.usp.trustImg')" class="usp__img" />

        <h4 class="usp__headline">
            {{ $t('detail.usp.title') }}
        </h4>

        <div class="usp__list">
            <div v-for="(item, index) in usp" :key="index" class="usp__item">
                <div class="svg-icon">
                    <svg :class="['usp__icon', 'usp__icon--' + item.icon]">
                        <use :xlink:href="'/mp.svg#' + item.icon" />
                    </svg>
                </div>

                <div>{{ item.text }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'USP',
    props: {
        className: {
            type: String,
            required: false,
            default: '',
        },
    },
    data() {
        return {
            usp: [
                {
                    icon: 'handshake',
                    text: 'You support independent designers with every purchase',
                },
                {
                    icon: 'product-pile',
                    text: 'Huge variety of products to customize',
                },
                {
                    icon: 'return-order',
                    text: 'Reliable shipping and easy returns',
                },
            ],
        }
    },
}
</script>

<style lang="scss">
.usp .svg-icon {
    align-items: center;
    background-color: #f2f2f2;
    border-radius: 100%;
    display: flex;
    height: 3.5rem;
    justify-content: center;
    left: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 3.5rem;
}
</style>
