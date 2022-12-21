<template>
    <div v-if="visible" class="pagination">
        <nuxt-link
            :class="{ disabled: page == 1 }"
            :title="$t('pagination.first')"
            :to="{ query: { ...$route.query, page: 1 } }"
            class="pagination__arrow pagination__arrow--first only-small"
        >
            <svg class="icon icon--left-jump">
                <use xlink:href="/mp.svg#left-jump"></use>
            </svg>
        </nuxt-link>

        <nuxt-link
            :class="{ disabled: !data.links.prev }"
            :title="$t('pagination.prev')"
            :to="{ query: { ...$route.query, page: page - 1 } }"
            class="pagination__arrow pagination__arrow--backward"
        >
            <svg class="icon icon--left">
                <use xlink:href="/global.svg#left"></use>
            </svg>
        </nuxt-link>

        <div class="pagination__label only-small">
            {{ $t('pagination.page', [page]) }}
        </div>

        <div class="pagination__numbers only-large">
            <span v-for="(p, key) in pageRange" :key="key">
                <nuxt-link
                    v-if="typeof p == 'number'"
                    :class="{ active: p == page }"
                    :to="{ query: { ...$route.query, page: p } }"
                    class="pagination__number"
                >
                    {{ p }}
                </nuxt-link>

                <div v-else class="pagination__gap">
                    {{ p }}
                </div>
            </span>
        </div>

        <nuxt-link
            :class="{ disabled: !data.links.next }"
            :title="$t('pagination.next')"
            :to="{ query: { ...$route.query, page: page + 1 } }"
            class="pagination__arrow pagination__arrow--forward"
        >
            <svg class="icon icon--right">
                <use xlink:href="/global.svg#right"></use>
            </svg>
        </nuxt-link>

        <nuxt-link
            :class="{ disabled: page == data.meta.last_page }"
            :title="$t('pagination.last')"
            :to="{ query: { ...$route.query, page: data.meta.last_page } }"
            class="pagination__arrow pagination__arrow--last only-small"
        >
            <svg id="l-s7R" class="icon icon--right-jump">
                <use id="l-u59" class="" xlink:href="/mp.svg#right-jump"></use>
            </svg>
        </nuxt-link>
    </div>
</template>

<script>
export default {
    name: 'ShopPagination',
    props: {
        data: {
            type: Object,
            required: false,
            default: () => {},
        },
        page: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {
            limit: 2,
        }
    },
    computed: {
        visible() {
            if (!this.data) {
                return false
            }

            return this.data.meta.total > this.data.meta.per_page
        },
        pageRange() {
            if (!this.data) {
                return 0
            }

            if (this.limit === -1) {
                return 0
            }

            if (this.limit === 0) {
                return this.data.meta.last_page
            }

            const current = this.page
            const last = this.data.meta.last_page
            const delta = this.limit
            const left = current - delta
            const right = current + delta + 1
            const range = []
            const pages = []

            let l

            for (let i = 1; i <= last; i++) {
                if (i === 1 || i === last || (i >= left && i < right)) {
                    range.push(i)
                }
            }

            range.forEach(function (i) {
                if (l) {
                    if (i - l === 2) {
                        pages.push(l + 1)
                    } else if (i - l !== 1) {
                        pages.push('...')
                    }
                }

                pages.push(i)

                l = i
            })

            return pages
        },
    },
}
</script>
