<template>
    <div id="edit-view" class="Wrapper productDetails sprd-responsive-cnt">
        <section id="designer-content" class="layoutProductCentered Wrapper">
            <div id="tablocontainer" class="container">
                <iframe id="sketchomat" width="100%" height="100%" style="border: 0" :src="urlIframe"></iframe>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    data() {
        return {
            baseIframeUrl: process.env.DESIGN_BASE_URL,
        }
    },
    computed: {
        urlIframe() {
            if (this.$route.query) {
                return this.baseIframeUrl + this.$route.fullPath.slice(16)
            }
            return this.baseIframeUrl
        },
    },
}
</script>
<style lang="scss" scoped>
.m-reviews {
    margin-bottom: 2em;
    margin-top: 2em;
}
@media (min-width: 1024px) {
    .m-reviews {
        margin-bottom: 4em;
        margin-top: 4em;
    }
}
.m-reviews__star {
    margin-right: 0.25em;
    display: inline-block;
    line-height: 1;
}
.m-reviews__star-icon--star {
    width: 0.8615em;
    height: 0.8265em;
}
.m-reviews__star-icon--star-filled {
    width: 0.8615em;
    height: 0.826em;
}
.m-reviews__star-icon--star-half-filled {
    width: 0.8615em;
    height: 0.826em;
}
.m-reviews__reload {
    margin-top: 1em;
    margin-bottom: 1em;
}
.m-reviews__comments-comment {
    margin: 1em 0;
}
.m-reviews__comments-metas {
    font-size: 1em;
    margin-bottom: 0.5em;
}
.m-reviews__comments-stars {
    top: 0.15em;
    margin-right: 0.2em;
}
.m-reviews__comments-date {
    font-family: Roboto, sans-serif;
    font-size: 0.625rem;
    line-height: 1.5;
    color: #737373;
}
@media screen and (min-width: 768px) {
    .m-reviews__comments-date {
        font-size: 0.75rem;
    }
}
@media screen and (min-width: 1920px) {
    .m-reviews__comments-date {
        font-size: 0.875rem;
    }
}
.m-reviews__summary-row {
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
}
.m-reviews__summary-amount,
.m-reviews__summary-description {
    flex: 0 1 7em;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
}
@media screen and (min-width: 1280px) {
    .m-reviews__summary-amount,
    .m-reviews__summary-description {
        padding-left: 1rem;
        padding-right: 1rem;
    }
}
.m-reviews__summary-percentage {
    flex: 1 1 auto;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
}
@media screen and (min-width: 1280px) {
    .m-reviews__summary-percentage {
        padding-left: 1rem;
        padding-right: 1rem;
    }
}
.m-reviews__summary-average {
    margin-bottom: 0.46em;
}
.m-reviews__summary-stars {
    top: 0.15em;
    margin-right: 0.2em;
}
.m-reviews__summary-count {
    display: inline-block;
    font-size: 0.75em;
}
.m-reviews__summary-details {
    margin-bottom: 1em;
}
.m-reviews__summary-percent {
    display: block;
    background-color: #f4f4f4;
    line-height: 1rem;
    position: relative;
}
.m-reviews__summary-percent__inner {
    background-color: #333;
    width: 66%;
    vertical-align: top;
    display: block;
}
.m-pt-details {
    margin: 2rem 0;
}
@media (min-width: 480px) {
    .m-pt-details {
        margin: 4rem 0;
    }
}
.m-pt-details__section {
    margin-top: 1rem;
    margin-bottom: 1rem;
}
.m-pt-details__description ul {
    margin: 10px 0 20px 0;
}
.m-pt-details__measurement {
    font-size: 0.875rem;
}
.m-pt-details__measurement-image {
    margin-bottom: 1rem;
}
.m-pt-details__bulk-info {
    position: relative;
    display: flex;
    align-items: center;
}
.m-pt-details__bulk-info-svg {
    margin-right: 0.375em;
    font-size: 1.25em;
    line-height: 1;
    vertical-align: middle;
    display: inline-block;
}
.m-pt-details__bulk-info-svg-icon--info-circle {
    width: 1.75em;
    height: 1.75em;
}
#designer-content {
    position: relative;
    background: #f2f2f2;
}
#designer-content.templomat {
    background: #fff;
}
#designer-content #tablocontainer {
    position: relative;
}
.linkboxes {
    border-top: 1px solid #eaeaea;
}
.linkboxes h3 {
    margin: 1.5em 0;
}
.linkboxes ul {
    padding: 0;
}
@media (min-width: 667px) {
    .linkboxes ul li {
        float: left;
        width: 33.3333%;
    }
}
#sprd-content #tablocontainer {
    border-top: 0 !important;
    height: calc(100vh - 114px - 1.5rem) !important;
}
.mobile #sprd-content #tablocontainer {
    border-top: 0 !important;
    padding-top: 0 !important;
    box-sizing: content-box;
}
#sprd-content #tablocontainer #smartomat {
    border: 0;
    position: absolute;
    top: 0;
    height: 100%;
}
</style>
