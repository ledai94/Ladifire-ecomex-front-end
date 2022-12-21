<template>
    <header id="sprd-header" class="header" :class="[toggleFilterSmall ? 'd-none' : '']">
        <div id="navigation" class="navigation">
            <div class="sprd-responsive-cnt">
                <div class="sprd-header">
                    <button class="sprd-header__skip">
                        {{ $t('headers.skip') }}
                    </button>

                    <TopPanel />

                    <HeaderMain />

                    <HeaderMenu :items="navbar" />

                    <div class="header-menu__black-layer js-header-black-layer"></div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import HeaderMain from '@/components/Layouts/Headers/Main.vue'
import HeaderMenu from '@/components/Layouts/Headers/Menu.vue'
import TopPanel from '@/components/Layouts/Headers/TopPanel.vue'
export default {
    name: 'Header',
    components: { HeaderMenu, HeaderMain, TopPanel },
    props: {
        navbar: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            F: false,
            E: false,
            g: false,
            searchWrapper: null,
            searchBackBtn: null,
            searchForm: null,
            searchShow: null,
            content: null,
            menuBranches: null,
            mainCYO: null,
            mainMP: null,
            menuCYO: null,
            menuMP: null,
            linkCYO: null,
            linkMP: null,
            menuLv1: null,
            menuLv1Items: null,
            menuLv2: null,
            menuBtn: null,
            headerMain: null,
            body: null,
            menuWrapper: null,
            backLayer: null,
            headerEl: null,
        }
    },
    computed: {
        toggleFilterSmall() {
            return this.$store.state.shop.openClose
        },
    },

    mounted() {
        this.content = document.querySelector('#sprd-content') // e
        this.headerEl = document.querySelector('#sprd-header') // o
        this.searchWrapper = document.querySelector('.js-header-searchbar-wrapper') // p
        this.searchForm = document.querySelector('.js-header-search-form') // c
        this.searchBackBtn = document.querySelectorAll('.js-header-search-back') // l
        this.searchShow = document.querySelector('.js-header-search-show') // i
        this.menuBranches = document.querySelector('.js-header-menu-branches') // a
        this.mainCYO = document.querySelector('.js-header-main-cyo') // d
        this.mainMP = document.querySelector('.js-header-main-mp') // u
        this.menuCYO = document.querySelector('.js-header-menu-cyo') // m
        this.menuMP = document.querySelector('.js-header-menu-mp') // v
        this.linkCYO = document.querySelector('.js-header-menu-link-cyo') // h
        this.linkMP = document.querySelector('.js-header-menu-link-mp') // L
        this.menuLv1 = document.querySelectorAll('.js-header-menu-level-1') // f
        this.menuLv1Items = document.querySelectorAll('.js-header-menu-level-1 > ul > li') // P
        this.menuLv2 = document.querySelectorAll('.js-header-menu-level-2') // x
        this.menuBtn = document.querySelector('.js-header-menu-button') // D
        this.headerMain = document.querySelector('.js-header-main') // r
        this.body = document.querySelector('body') // t
        this.menuWrapper = document.querySelector('.js-header-menu-wrapper') // M
        this.backLayer = document.querySelector('.js-header-black-layer') // H
        document.querySelector('.sprd-header__skip').addEventListener('click', function () {
            this.content.focus()
        })
        this.searchBtn()
        this.desktopLinks()
        this.header().addEventListeners()
        this.registerScrollEvent()
        this.horizontalScrollFade().init()
    },
    methods: {
        $() {
            this.E = false
            this.header().addEventListeners()
            this.searchBtn()
            this.horizontalScrollFade().init()
        },
        // R
        header() {
            const vue = this
            vue.menuBtn.addEventListener('click', function () {
                if (vue.F === false) {
                    if (vue.E) {
                        vue.$()
                        vue.G()
                        vue.F = true
                    }
                }
                vue.B()
            })
            return {
                addEventListeners() {
                    vue.G()
                },
                closeMenu() {
                    vue.K()
                },
            }
        },
        G() {
            const P = document.querySelectorAll('.js-header-menu-level-1 > ul > li')
            const I = document.querySelectorAll('.js-header-menu-level-1-back')
            const O = document.querySelectorAll('.js-header-menu-level-2 a')
            const z = document.querySelectorAll('.js-header-menu-wrapper a')
            const Y = document.querySelectorAll('.js-header-icons a')
            const _ = document.querySelectorAll('.js-header-minimal-close')
            if (this.backLayer) {
                this.backLayer.removeEventListener('click', this.K)
                this.backLayer.addEventListener('click', this.K)
            }
            this.linkCYO.removeEventListener('click', this.U)
            this.linkMP.removeEventListener('click', this.J)
            this.linkCYO.addEventListener('click', this.U)
            this.linkMP.addEventListener('click', this.J)
            for (let e = P.length; e--; ) {
                P[e].removeEventListener('click', this.Q, true)
                P[e].addEventListener('click', this.Q, true)
            }
            for (let t = O.length; t--; ) {
                O[t].removeEventListener('click', this.W)
                O[t].addEventListener('click', this.W)
            }
            for (let n = I.length; n--; ) {
                I[n].removeEventListener('click', this.V)
                I[n].addEventListener('click', this.V)
            }
            for (let r = z.length; r--; ) {
                z[r].removeEventListener('click', this.K)
                z[r].addEventListener('click', this.K)
            }
            for (let a = Y.length; a--; ) {
                Y[a].removeEventListener('click', this.K)
                Y[a].addEventListener('click', this.K)
            }
            for (let s = _.length; s--; ) {
                _[s].removeEventListener('click', this.K)
                _[s].addEventListener('click', this.K)
            }
        },
        U() {
            this.V()
            this.toggleActiveClass([this.linkCYO, this.menuCYO], 'active')
            this.toggleActiveClass([this.linkMP, this.menuMP], 'inactive')
            this.menuBranches.classList.remove('zero-state')
        },
        J() {
            this.V()
            this.toggleActiveClass([this.linkCYO, this.menuCYO], 'inactive')
            this.toggleActiveClass([this.linkMP, this.menuMP], 'active')
            this.menuBranches.classList.remove('zero-state')
        },
        W() {
            this.V()
            this.resetMobileHeader()
        },
        Q(e) {
            if (
                window.innerWidth < 1024 &&
                !e.target.classList.contains('js-header-menu-level-1-back') &&
                !e.target.classList.contains('js-header-minimal-close') &&
                e.target.localName === 'li'
            ) {
                if (this.g === false) {
                    this.headerMain.classList.add('minimal-view')
                    this.menuWrapper.classList.add('minimal-view')
                    this.B(true)
                }
                this.menuLv1Items.forEach((item) => {
                    item.classList.add('d-none')
                })
                e.target.classList.remove('d-none')
                e.target.classList.add('is-open')
                e.target.querySelector('a').classList.add('d-none')
                e.target.querySelector('div').classList.add('is-open')
            }
        },
        K() {
            this.g = false
            this.V()
            this.body.classList.remove('no-scroll')
            this.headerMain.classList.remove('is-open')
            this.headerMain.classList.remove('minimal-view')
            this.menuWrapper.classList.remove('is-open')
            this.menuWrapper.classList.remove('minimal-view')
            this.menuBtn.classList.remove('is-open')
            this.resetMobileHeader()
        },
        B(e) {
            this.g = !this.headerMain.classList.contains('is-open') || (this.V(), false)
            this.body.classList.toggle('no-scroll')
            this.headerMain.classList.toggle('is-open')
            this.menuWrapper.classList.toggle('is-open')
            if (!e) {
                this.menuBtn.classList.toggle('is-open')
            }
            this.resetMobileHeader()
        },
        V() {
            this.menuLv2.forEach((item) => {
                item.classList.remove('is-open')
            })
            this.menuLv1Items.forEach((item) => {
                item.classList.remove('d-none')
                item.classList.remove('is-open')
                item.querySelector('a').classList.remove('d-none')
            })
        },
        // j
        searchBtn() {
            const vue = this
            if (this.searchShow) {
                this.searchShow.addEventListener('click', function () {
                    vue.deactivateMenu()
                    vue.showExtraSearch(true)
                    vue.searchBackBtn.forEach((item) => {
                        item.classList.remove('d-none')
                    })
                })
                this.searchBackBtn.forEach((item) => {
                    item.addEventListener('click', function () {
                        vue.hideSearchBackBtn()
                        vue.resetMobileHeader()
                    })
                })
            }
        },
        // C
        desktopLinks() {
            const vue = this
            let e, t, n, r, a
            function s() {
                e = true
                vue.deactivateSearchWrapper()
                vue.toggleActiveClass([vue.menuCYO, vue.linkCYO], 'active')
                vue.toggleActiveClass([vue.menuMP, vue.linkMP], 'inactive')
                if (vue.mainMP) {
                    vue.mainMP.classList.remove('is-hover')
                }
                if (vue.mainCYO) {
                    vue.mainCYO.classList.add('is-hover')
                }
                c(vue.mainCYO)
            }
            function o() {
                t = true
                vue.deactivateSearchWrapper()
                vue.toggleActiveClass([vue.menuCYO, vue.linkCYO], 'inactive')
                vue.toggleActiveClass([vue.menuMP, vue.linkMP], 'active')
                if (vue.mainMP) {
                    vue.mainMP.classList.add('is-hover')
                }
                if (vue.mainCYO) {
                    vue.mainCYO.classList.remove('is-hover')
                }
                c(vue.mainMP)
            }
            function c(element) {
                if (window.innerWidth > 1023) {
                    vue.menuLv1.forEach((item) => {
                        item.addEventListener('mouseleave', i)
                    })
                    element.addEventListener('mouseleave', i)
                }
            }
            function i() {
                if (vue.searchWrapper && !vue.searchWrapper.classList.contains('is-active')) {
                    n = setTimeout(function () {
                        vue.menuLv1.forEach((item) => {
                            item.removeEventListener('mouseleave', i)
                        })
                        if (vue.mainCYO) {
                            vue.mainCYO.classList.remove('is-hover')
                            vue.mainCYO.removeEventListener('mouseleave', i)
                        }
                        if (vue.mainMP) {
                            vue.mainMP.classList.remove('is-hover')
                            vue.mainMP.removeEventListener('mouseleave', i)
                        }
                        t = e = false
                        vue.resetMobileHeader()
                    }, 500)
                }
            }
            function l(type) {
                const menus = []
                const menuElements = document.querySelectorAll('.js-header-menu-' + type + '> ul > li > [tabindex]')
                menuElements.forEach((item) => {
                    const menuLv2 = item.parentNode.querySelectorAll('.header-menu__list-wrapper [tabindex]')
                    menus.push({
                        level1: item,
                        level2: menuLv2,
                    })
                })
                menus[0].level1.focus()
                let sp = 0
                let op = -1
                window.addEventListener('keydown', function handleEvent(event) {
                    switch (event.keyCode) {
                        case 38:
                            event.preventDefault()
                            if (op > 0) {
                                --op
                            } else if (op === 0) {
                                op = -1
                            }
                            break
                        case 39:
                            event.preventDefault()
                            if (sp < menus.length - 1) {
                                sp += 1
                                op = -1
                            }
                            break
                        case 40:
                            event.preventDefault()
                            if (op === -1 && menus[sp].level2.length > 0) {
                                op = 0
                            } else if (op > -1 && op < menus[sp].level2.length - 1) {
                                op += 1
                            }
                            break
                        case 37:
                            event.preventDefault()
                            if (sp > 0) {
                                sp--
                                op = -1
                            }
                            break
                        case 9:
                            window.removeEventListener('keydown', handleEvent)
                            i()
                    }
                    if (op === -1) {
                        menus[sp].level1.focus()
                    } else if (menus[sp].level2.length > 0) {
                        menus[sp].level2[op].focus()
                    }
                })
            }
            if (vue.mainCYO && vue.mainMP) {
                window.addEventListener('keydown', function (event) {
                    if (event.keyCode === 40 && document.activeElement === vue.mainCYO) {
                        event.preventDefault()
                        s()
                        l('cyo')
                    } else if (event.keyCode === 40 && document.activeElement === vue.mainMP) {
                        event.preventDefault()
                        o()
                        l('mp')
                    } else if (event.key === 'Escape') {
                        i()
                    }
                })
            }
            if (vue.mainCYO) {
                vue.mainCYO.addEventListener('mouseenter', function () {
                    if (vue.E) {
                        vue.$()
                    }
                    if (vue.menuCYO) {
                        vue.menuCYO.addEventListener('mouseenter', function () {
                            e = false
                            clearTimeout(r)
                            clearTimeout(a)
                            clearTimeout(n)
                        })
                    }
                    clearTimeout(n)
                    if (!['MP', 'EDIT'].includes(vue.$store.state.page.code)) {
                        if (t) {
                            r = setTimeout(s, 300)
                        } else {
                            s()
                        }
                    }
                })
            }
            if (vue.mainMP) {
                vue.mainMP.addEventListener('mouseenter', function () {
                    if (vue.E) {
                        vue.$()
                    }
                    if (vue.menuMP) {
                        vue.menuMP.addEventListener('mouseenter', function () {
                            t = false
                            clearTimeout(r)
                            clearTimeout(a)
                            clearTimeout(n)
                        })
                    }
                    clearTimeout(n)
                    if (!['CYO', 'EDIT'].includes(vue.$store.state.page.code)) {
                        if (e) {
                            a = setTimeout(o, 300)
                        } else {
                            o()
                        }
                    }
                })
            }
        },
        // w
        resetMobileHeader() {
            switch (this.$store.state.page.code) {
                case 'MP':
                    if (this.E && !this.menuMP) {
                        this.$()
                    }
                    this.deactivateSearchWrapper()
                    if (this.searchForm) {
                        this.searchForm.classList.remove('d-none')
                    }
                    if (this.content) {
                        this.content.classList.remove('extra-searchbar')
                        this.content.classList.add('extra-menu')
                    }
                    this.toggleActiveClass([this.mainCYO, this.menuCYO, this.linkCYO], 'inactive')
                    this.toggleActiveClass([this.mainMP, this.menuMP, this.linkMP], 'active')
                    if (this.menuBranches) {
                        this.menuBranches.classList.remove('zero-state')
                    }
                    break
                case 'CYO':
                case 'EDIT':
                    if (this.E && !this.menuCYO) {
                        this.$()
                    }
                    this.deactivateSearchWrapper()
                    if (this.searchForm) {
                        this.searchForm.classList.remove('d-none')
                    }
                    if (this.content) {
                        this.content.classList.remove('extra-searchbar')
                    }
                    if (this.$store.state.page.code !== 'EDIT') {
                        this.toggleActiveClass([this.mainCYO, this.menuCYO, this.linkCYO], 'active')
                        this.toggleActiveClass([this.mainMP, this.menuMP, this.linkMP], 'inactive')
                        if (this.menuBranches) {
                            this.menuBranches.classList.remove('zero-state')
                        }
                        if (this.content) {
                            this.content.classList.add('extra-menu')
                        }
                    } else {
                        this.deactivateMenu()
                        this.toggleActiveClass([this.mainCYO], 'active')
                        if (this.content) {
                            this.content.classList.remove('extra-menu')
                        }
                    }
                    break
                case 'MDS':
                    this.deactivateMenu()
                    this.deactivateSearchWrapper()
                    if (this.searchForm && !this.searchForm.classList.contains('d-none')) {
                        this.searchForm.classList.add('d-none')
                    }
                    if (this.content) {
                        this.content.classList.remove('extra-searchbar')
                        this.content.classList.remove('extra-menu')
                    }
                    break
                case 'GENERAL':
                    this.deactivateMenu()
                    this.hideSearchBackBtn()
                    this.showExtraSearch()
                    if (this.content) {
                        this.content.classList.add('extra-searchbar')
                    }
                    break
            }
        },
        // k
        deactivateMenu(e) {
            let disable = []
            if (e) {
                disable = [this.menuCYO, this.menuMP]
            } else {
                disable = [this.mainCYO, this.menuCYO, this.linkCYO, this.mainMP, this.menuMP, this.linkMP]
            }
            this.toggleActiveClass(disable, 'inactive')
            if (this.menuBranches) {
                this.menuBranches.classList.add('zero-state')
            }
        },
        // A
        deactivateSearchWrapper() {
            if (this.searchWrapper) {
                this.searchWrapper.classList.remove('is-active')
            }
        },
        // b
        hideSearchBackBtn() {
            this.searchBackBtn.forEach((item) => {
                item.classList.add('d-none')
            })
        },
        // T
        showExtraSearch(focus = false) {
            if (this.searchWrapper) {
                if (!this.searchWrapper.classList.contains('is-active')) {
                    this.searchWrapper.classList.add('is-active')
                }
                if (focus) {
                    this.searchWrapper.querySelector('input').focus()
                }
            }
            if (this.searchForm) {
                this.searchForm.classList.remove('d-none')
            }
        },
        // q
        toggleActiveClass(elements, state) {
            elements.forEach((item) => {
                if (item !== null) {
                    if (state === 'active' && !item.classList.contains('is-active')) {
                        item.classList.add('is-active')
                    } else if (state === 'inactive') {
                        item.classList.remove('is-active')
                    }
                }
            })
        },
        // horizontalScrollFade
        horizontalScrollFade() {
            const t = document.querySelectorAll('.scroll-wrapper')
            function n(e) {
                const tp = e.firstElementChild
                const np = tp.getBoundingClientRect().width
                const r = tp.scrollWidth
                const a = tp.scrollLeft
                if (r <= np) {
                    e.classList.remove('fade-start')
                    e.classList.remove('fade-end')
                } else if (a === 0) {
                    e.classList.remove('fade-start')
                    e.classList.add('fade-end')
                } else if (a > 0 && a < r - np) {
                    e.classList.add('fade-start')
                    e.classList.add('fade-end')
                } else {
                    e.classList.add('fade-start')
                    e.classList.remove('fade-end')
                }
            }
            return {
                init() {
                    t.forEach((item) => {
                        item.firstElementChild.addEventListener('scroll', n.bind(null, item))
                        window.addEventListener('resize', n.bind(null, item))
                        n(item)
                    })
                },
                scrollFade(e) {
                    n(e)
                },
            }
        },
        // X
        registerScrollEvent() {
            let n
            let r = window.pageYOffset
            const vue = this
            const a = document.createEvent('Event')
            a.initEvent('headerStatus', true, true)
            window.headerShown = true
            window.addEventListener('scroll', function () {
                const e = window.pageYOffset
                const t = document.body.offsetHeight - window.innerHeight
                if (r < e && e > 175 && e < t - 200) {
                    if (vue.g === false && vue.hasModal() === false) {
                        vue.headerEl.classList.add('fade-out')
                        vue.headerEl.classList.remove('fade-in')
                        if (window.innerWidth < 768 && vue.searchWrapper) {
                            vue.searchWrapper.classList.add('d-none')
                        }
                        n = false
                    }
                } else if (e !== r) {
                    vue.headerEl.classList.remove('fade-out')
                    vue.headerEl.classList.add('fade-in')
                    if (vue.searchWrapper) {
                        vue.searchWrapper.classList.remove('d-none')
                    }
                    n = true
                }
                r = e
                if (n !== window.headerShown) {
                    window.headerShown = n
                    vue.headerEl.dispatchEvent(a)
                }
            })
        },
        hasModal() {
            for (let e = document.querySelectorAll('.lightbox'), t = e.length; t--; ) {
                if (e[t].classList.contains('show')) {
                    return true
                }
            }
            return false
        },
    },
}
</script>
