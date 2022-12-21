<template>
    <div
        id="header-search-wrapper"
        :class="[!['CYO', 'MP', 'EDIT'].includes($store.state.page.code) ? 'is-active' : '']"
        class="sprd-header__search-wrapper js-header-searchbar-wrapper"
    >
        <form id="header-search" ref="search" class="js-header-search-form" role="search" @submit="submitForm">
            <div class="sprd-header__icon sprd-header__icon--back d-none js-header-search-back">
                <svg class="icon icon--x">
                    <use xlink:href="/global.svg#x"></use>
                </svg>
            </div>

            <input
                id="header-search-input"
                v-model="query"
                :aria-label="$t('headers.search.label')"
                :placeholder="$t('headers.search.placeholder')"
                autocomplete="off"
                type="search"
                @input="handleQueryChange"
            />

            <div
                id="header-search-clear"
                ref="clearBtn"
                class="sprd-header__icon sprd-header__icon--clear d-none"
                @click="resetQuery"
            >
                <svg class="icon icon--x">
                    <use xlink:href="/global.svg#x"></use>
                </svg>
            </div>

            <div id="header-search-submit" class="sprd-header__icon sprd-header__icon--search" @click="submitForm">
                <svg class="icon icon--lens">
                    <use xlink:href="/global.svg#lens"></use>
                </svg>
            </div>
        </form>

        <div v-show="isOpen" ref="suggestion" class="sprd-header__autocomplete autocomplete">
            <div
                v-for="(suggestion, index) in suggestions"
                :key="index"
                class="item"
                @click="selectSuggestion(suggestion.raw)"
                v-html="suggestion.highlight"
            />
        </div>
    </div>
</template>

<script>
import { suggestions } from '@/api/search'
import _ from 'lodash'

export default {
    name: 'Search',
    data() {
        return {
            query: '',
            isOpen: false,
            suggestions: [],
        }
    },
    watch: {
        query(value) {
            if (value) {
                this.$refs.clearBtn.classList.remove('d-none')
                this.getSuggestions(value)
            } else {
                this.$refs.clearBtn.classList.add('d-none')
                this.suggestions = []
            }
        },
        suggestions(value) {
            this.isOpen = value.length > 0
        },
        $route() {
            this.query = this.$route.params.query
        },
    },
    beforeMount() {
        document.addEventListener('click', this.handleClickOutside)
    },
    beforeDestroy() {
        document.removeEventListener('click', this.handleClickOutside)
    },
    methods: {
        getSuggestions: _.debounce(function (query) {
            if (this.$route.params.query && this.$route.params.query == query) {
                return
            }

            suggestions(this.$axios, query).then((result) => {
                if (Array.isArray(result)) {
                    const suggests = []

                    result.forEach((data) => {
                        suggests.push({
                            raw: data.name,
                            highlight: '<span class="marked">' + data.name + '</span>',
                        })
                    })

                    this.suggestions = suggests
                }
            })
        }, 500),
        search(query) {
            this.suggestions = []

            if (query) {
                this.$router.push({
                    path: '/search/' + query,
                })
            } else {
                this.$router.push({
                    path: '/shop',
                })
            }
        },
        submitForm(e) {
            e.preventDefault()
            this.search(this.query)
        },
        selectSuggestion(query) {
            this.search(query)
        },
        resetQuery() {
            this.query = ''
        },
        handleQueryChange: _.debounce(function (event) {
            this.query = event.target.value
        }, 500),
        handleClickOutside(event) {
            if (!this.$el.contains(event.target)) {
                this.suggestions = []
            }
        },
    },
}
</script>

<style scoped>
.autocomplete {
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
