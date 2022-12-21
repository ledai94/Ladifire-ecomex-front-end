<template>
    <div :class="['product-details', { active }]">
        <div>
            <div
                class="basket-item-info zoom"
                @mouseover="zoomHandler.over"
                @mouseout="zoomHandler.out"
                @mousemove="zoomHandler.move"
            >
                <div name="content">
                    <div
                        :title="item.product.name"
                        class="composition large-preview sprd-image"
                        style="width: 120px; height: 120px; display: inline-block"
                    >
                        <img
                            :alt="item.product.name"
                            :data-zoom="viewImage(selectedView.id)"
                            :src="viewImage(selectedView.id)"
                            style="width: 120px; height: 120px; max-width: 120px; max-height: 120px"
                        />
                    </div>
                </div>

                <div class="zoom-position" />
            </div>

            <div class="view-list">
                <a
                    v-for="(view, index) in item.product.views"
                    :key="view.id"
                    :class="[index % 2 === 0 ? 'even' : 'odd', { active: view.id == selectedView.id }]"
                    href="javascript:void(0);"
                    @click="selectedView = view"
                >
                    <div
                        :title="selectedView.name"
                        class="sprd-image"
                        style="width: 50px; height: 50px; display: inline-block"
                    >
                        <img
                            :alt="selectedView.name"
                            :src="viewImage(view.id)"
                            style="width: 50px; height: 50px; max-width: 50px; max-height: 50px"
                        />
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import { zoomHandler } from '~/components/Checkout/Zoom'

export default {
    name: 'CheckoutProductDetail',
    props: {
        item: {
            type: Object,
            required: true,
        },
        active: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
    data() {
        return {
            selectedView: this.item.product.default_view,
        }
    },
    computed: {
        zoomHandler() {
            return zoomHandler
        },
    },
    methods: {
        viewImage(viewId) {
            const image = this.item.product.images.find((img) => {
                return img.view_id == viewId && img.appearance_id == this.item.appearance_id
            })

            return image.media.url
        },
    },
}
</script>
