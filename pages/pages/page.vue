<template>
    <div id="page" class="container">
        <div style="margin-top: 2rem; margin-bottom: 2rem">
            <h1 class="font-size-h1">{{ page.title }}</h1>
        </div>
        <div v-html="page.content"></div>
    </div>
</template>

<script>
import { getPage } from '@/api/pages.js'

export default {
    async asyncData(context) {
        const page = await getPage(context, context.params.slug)

        return { page }
    },
    head() {
        return {
            title: this.page.seo.title,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.page.seo.description,
                },
                {
                    hid: 'canonical',
                    name: 'canonical',
                    content: this.page.seo.canonical,
                },
                {
                    hid: 'keyword',
                    name: 'keyword',
                    content: this.page.seo.keyword,
                },
            ],
        }
    },
}
</script>
<style lang="scss">
@media (min-width: 1024px) {
    .container {
        width: 88%;
    }
    .font-size-h1 {
        font-size: 32px;
        font-weight: 400;
    }
}

@media (min-width: 768px) {
    .container {
        width: 94%;
    }
}
@media (min-width: 480px) {
    .container {
        width: 100%;
    }
}
.font-size-h1 {
    font-size: 22px;
    font-weight: 600;
}
.container {
    margin-left: auto;
    margin-right: auto;
    max-width: 1600px;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    width: 100%;
}
</style>
