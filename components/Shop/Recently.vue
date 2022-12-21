<template>
    <!-- Recently viewed -->
    <div id="d-dG3" class="recently-viewed">
        <h2 id="d-hD" class="headline h4">{{ $t('detail.recently') }}</h2>
        <Slider :isliked="'liked'" :liked="productDetails" />
        <div id="d-dG7" class="button clear pattern">{{ $t('detail.clear_history') }}</div>
        <div id="d-dG8" class="opt form__field form__field--switch">
            <label id="d-l"
                ><span id="d-s4G">{{ $t('detail.remember_history') }}</span
                ><input id="d-i23" class="form__input" type="checkbox" />
                <div id="d-dG9" class="form__switch">
                    <svg id="d-s4H" class="form__switch-icon form__switch-icon--x">
                        <use id="d-u28" xlink:href="/global.svg#x" />
                    </svg>
                    <svg id="d-s4I" class="form__switch-icon form__switch-icon--checkmark">
                        <use id="d-u29" xlink:href="/global.svg#checkmark" />
                    </svg>
                </div>
            </label>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Recently',
}
</script>
