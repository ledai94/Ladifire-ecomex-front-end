<template>
    <div>
        <div class="ft-body-wrapper">
            <div class="container">
                <div class="ft-body">
                    <div class="ft-newsletter-country">
                        <!-- newsletter -->
                        <Subcribe></Subcribe>
                        <!-- Country -->
                        <!--<Language></Language>-->
                    </div>

                    <div v-for="(links, group) in items" :key="group" :class="getClass(group)">
                        <span class="h3">{{ group }}</span>

                        <component
                            :is="group == 'Follow Us' ? 'div' : 'ul'"
                            :class="{ 'ft-external__wrapper': group == 'Follow Us' }"
                        >
                            <component
                                :is="group == 'Follow Us' ? 'div' : 'li'"
                                v-for="link in links"
                                :key="link.id"
                                :class="{ 'ft-external-channel': group == 'Follow Us' }"
                            >
                                <a :href="link.link">
                                    <svg v-if="link.icon && link.icon.type == 'integrated'" :class="link.icon.class">
                                        <use :xlink:href="'/global.svg#' + link.icon.ref"></use>
                                    </svg>

                                    <span>{{ link.name }}</span>

                                    <svg v-if="group == 'Service'" class="icon icon--right">
                                        <use xlink:href="/global.svg#right"></use>
                                    </svg>
                                </a>
                            </component>
                        </component>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Language from './Language'
import Subcribe from './SubCribe'

export default {
    name: 'FtMain',
    components: {
        Subcribe,
        Language,
    },
    props: {
        items: {
            type: Object,
            required: true,
        },
    },
    methods: {
        getClass(group) {
            const map = {
                Service: 'ft-customer-service',
                'The Company': 'ft-company',
                'Follow Us': 'ft-external',
            }

            return map[group]
        },
    },
}
</script>
