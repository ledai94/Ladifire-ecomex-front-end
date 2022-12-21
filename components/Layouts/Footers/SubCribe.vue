<template>
    <div>
        <div class="ft-newsletter">
            <div class="ft-newsletter-title">
                <i class="icon-mm icon-mm-headline icon-verified"></i
                ><span><span class="h3">Subscribe to our newsletter!</span></span>
            </div>
            <form id="newsletter-sign-up-form" method="post" action="javascript:void(0)">
                <input
                    class="newsletter-email"
                    type="email"
                    value=""
                    aria-label="Your e-mail address"
                    placeholder="Your e-mail address"
                /><button id="newsletter-submit" class="sprd-button primary" type="button">Subscribe</button>
            </form>
            <div class="newsletter-messages">
                <div id="newsletter-message-ok">
                    <i class="icon-mm icon-mm-headline icon-happy"></i>
                    <div class="h3">Thank you very much!</div>
                    <div class="newsletter-message__text">
                        We have just sent you an email - please confirm your e-mail address by clicking on the link
                        contained within. This will complete the registration process for our newsletter.
                    </div>
                </div>
                <div id="newsletter-message-error">
                    An error has occurred. The given e-mail address is either wrong, or already exists within our
                    system.
                </div>
            </div>
        </div>
        <div class="newsletter-info d-none d-md-flex" data-lightbox="newsletter-info">
            <i class="icon-mm icon-info-circle" aria-hidden="true"></i
            ><span @click.prevent="openInformation">More Information</span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Subscribe',
}
</script>
