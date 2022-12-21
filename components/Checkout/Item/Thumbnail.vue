<template>
    <div class="basket-item-info-left">
        <div
            class="basket-item-info zoom"
            @mousemove="zoomHandler.move"
            @mouseout="zoomHandler.out"
            @mouseover="zoomHandler.over"
        >
            <div name="content">
                <div
                    :title="item.product.name"
                    class="composition sprd-image"
                    style="width: 120px; height: 120px; display: inline-block"
                >
                    <img
                        :alt="item.product.name"
                        :data-zoom="defaultImage"
                        :src="defaultImage"
                        style="width: 120px; height: 120px; max-width: 120px; max-height: 120px"
                    />
                </div>
            </div>

            <div class="zoom-position" />
        </div>
    </div>
</template>

<script>
import { zoomHandler } from '~/components/Checkout/Zoom'

export default {
    name: 'CheckoutItemThumbnail',
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
    computed: {
        defaultImage() {
            const product = this.item.product

            if (product.default_image) {
                return product.default_image.media.url
            }

            if (product.images && product.images.length > 0) {
                return product.images[0].media.url
            }

            return null
        },
        zoomHandler() {
            return zoomHandler
        },
    },
}
</script>
