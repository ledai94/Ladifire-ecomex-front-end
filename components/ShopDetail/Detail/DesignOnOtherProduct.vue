<template>
    <div id="d-d1T" class="more-products">
        <h2 id="d-h3" class="more-products__headline h3">{{ $t('detail.title_more_product') }}</h2>
        <div id="pdp-department-buttons" class="department-buttons faded">
            <div id="d-d1U" class="items">
                <div id="department-button-1" class="Button department men active">
                    <svg class="department-icon department-icon--male">
                        <use xlink:href="/mp.svg#male" />
                    </svg>
                    <div class="label">Men</div>
                </div>
                <div id="department-button-2" class="Button department women">
                    <svg class="department-icon department-icon--female">
                        <use xlink:href="/mp.svg#female" />
                    </svg>
                    <div class="label">Women</div>
                </div>
                <div id="department-button-4" class="Button department accessories">
                    <svg class="department-icon department-icon--bag">
                        <use xlink:href="/mp.svg#bag" />
                    </svg>
                    <div class="label">Accessories</div>
                </div>
                <div id="department-button-23" class="Button department wallart">
                    <svg class="department-icon department-icon--frame-wallart">
                        <use xlink:href="/mp.svg#frame-wallart" />
                    </svg>
                    <div class="label">Home &amp; Living</div>
                </div>
            </div>
        </div>
        <Slider :isliked="'moreProduct'" :liked="productDetails" />
    </div>
</template>

<script>
export default {
    name: 'DesignOnOtherProduct',
    props: {
        design: {
            type: Object,
            required: true,
        },
    },
}
</script>
