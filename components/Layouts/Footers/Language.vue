<template>
    <div class="ft-country">
        <span class="h3">Language/Currency</span>
        <ul>
            <li>
                <div id="country-indicator">
                    <span class="flag" data-locale="us_US">United States | USD</span>
                    <svg class="icon icon--right">
                        <use xlink:href="/global.svg#right"></use>
                    </svg>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'Language',
}
</script>
