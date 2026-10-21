__d("WASmaxOutMessagePublishNewsletterRequest", [
    "WASmaxJsx",
    "WASmaxOutMessagePublishClientNewsletterAndServerOrNewsletterIDMixinGroup",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ messageTo, clientNewsletterAndServerOrNewsletterIDMixinGroupArgs }) {
        const r = o("WASmaxOutMessagePublishClientNewsletterAndServerOrNewsletterIDMixinGroup").mergeClientNewsletterAndServerOrNewsletterIDMixinGroup(o("WASmaxJsx").smax("message", {
            to: o("WAWap").JID(messageTo)
        }), clientNewsletterAndServerOrNewsletterIDMixinGroupArgs);
        return r;
    }
    l.makeNewsletterRequest = e;
}, 98);