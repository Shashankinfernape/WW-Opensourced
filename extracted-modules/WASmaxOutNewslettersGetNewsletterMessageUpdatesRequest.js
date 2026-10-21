__d("WASmaxOutNewslettersGetNewsletterMessageUpdatesRequest", [
    "WASmaxAttrs",
    "WASmaxJsx",
    "WASmaxOutNewslettersMessageUpdatesBeforeOrAfterMixinMixinGroup",
    "WASmaxOutNewslettersNewsletterIQGetRequestMixin",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const { messageUpdatesCount, messageUpdatesSince, messageUpdatesBeforeOrAfterMixinMixinGroupArgs } = e;
        const a = o("WASmaxOutNewslettersNewsletterIQGetRequestMixin").mergeNewsletterIQGetRequestMixin(o("WASmaxJsx").smax("iq", null, o("WASmaxOutNewslettersMessageUpdatesBeforeOrAfterMixinMixinGroup").mergeMessageUpdatesBeforeOrAfterMixinMixinGroup(o("WASmaxJsx").smax("message_updates", {
            count: o("WAWap").INT(messageUpdatesCount),
            since: o("WASmaxAttrs").OPTIONAL(o("WAWap").INT, messageUpdatesSince)
        }), messageUpdatesBeforeOrAfterMixinMixinGroupArgs)), e);
        return a;
    }
    l.makeGetNewsletterMessageUpdatesRequest = e;
}, 98);