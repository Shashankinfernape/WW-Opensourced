__d("WAWebNewsletterHandleLiveUpdatesNotification", [
    "WALogger",
    "WASmaxNewslettersLiveUpdatesNotificationRPC",
    "WAWebBackendApi",
    "WAWebNewsletterBackendAddOnsUtils",
    "WAWebNewsletterExtendedGatingUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const n = o("WASmaxNewslettersLiveUpdatesNotificationRPC").receiveLiveUpdatesNotificationRPC(t);
            const { makeLiveUpdatesNotificationResponseAck, parsedRequest } = n;
            try {
                if (!o("WAWebNewsletterExtendedGatingUtils").isNewsletterReactionEnabled()) {
                    return makeLiveUpdatesNotificationResponseAck();
                }
                const l = parsedRequest.from;
                const s = parsedRequest.liveUpdatesMessagesNewsletterMessageResponsePayloadMixin.message;
                const u = parsedRequest.t;
                const c = yield o("WAWebNewsletterBackendAddOnsUtils").getMsgsAndAddOnsFromUpdates(s, o("WAWebWidFactory").createWid(r("nullthrows")(l)), u);
                yield o("WAWebNewsletterBackendAddOnsUtils").updateAddOnDbRecords(babelHelpers.extends({}, c, {
                    timestamp: u
                }));
                o("WAWebBackendApi").frontendFireAndForget("updateNewsletterMessages", c);
                return makeLiveUpdatesNotificationResponseAck();
            } catch (t) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter] live-updates notif handling failed"
                ]))).tags("newsletter").sendLogs("newsletter-live-updates-db");
                return makeLiveUpdatesNotificationResponseAck();
            }
        });
        return u.apply(this, arguments);
    }
    l.handleNewsletterLiveUpdatesNotification = s;
}, 98);