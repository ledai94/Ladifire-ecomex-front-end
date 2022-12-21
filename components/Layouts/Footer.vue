<template>
    <footer id="sprd-footer" class="footer">
        <div class="sprd-footer sprd-responsive-cnt">
            <Features />

            <FtMain :items="items"></FtMain>

            <div class="ft-seo-wrapper">
                <div class="ft-seo container">
                    <div class="row ft-seo-google">
                        <div id="js-footer-seo-text">
                            <p>Copyright © 2020 Ladifireteam.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import Features from '@/components/Layouts/Footers/Features.vue'
import FtMain from '@/components/Layouts/Footers/FtMain'

export default {
    name: 'Footer',
    components: { FtMain, Features },
    props: {
        items: {
            type: Object,
            required: true,
        },
    },
}
</script>
