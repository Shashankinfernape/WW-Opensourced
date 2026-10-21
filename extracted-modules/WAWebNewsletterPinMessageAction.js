__d("WAWebNewsletterPinMessageAction", [
    "WAJids",
    "WALogger",
    "WAWebNewsletterMetadataCollection",
    "WAWebNewsletterPinMessagesJob",
    "WAWebNewsletterUnpinMessagesJob",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e, pinnedMessages) {
        if (pinnedMessages != null) {
            r("WAWebNewsletterMetadataCollection").gadd(e.id).set({
                pinnedMessages
            }, {
                merge: true
            });
        }
    }
    function c(e, t) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            const a = o("WAJids").toNewsletterJid(t.id.toString());
            try {
                const i = yield o("WAWebNewsletterPinMessagesJob").pinNewsletterMessages(a, [
                    String(n)
                ]);
                u(t, i);
            } catch (error) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[NEWSLETTER][PIN] pin failed"
                ]))).catching(r("getErrorSafe")(error)).tags("NEWSLETTER", "PIN").sendLogs("newsletter-pin-failed");
                throw error;
            }
        });
        return d.apply(this, arguments);
    }
    function m(e, t) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = o("WAJids").toNewsletterJid(e.id.toString());
            try {
                const a = yield o("WAWebNewsletterUnpinMessagesJob").unpinNewsletterMessages(n, [
                    String(t)
                ]);
                u(e, a);
            } catch (error) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[NEWSLETTER][PIN] unpin failed"
                ]))).catching(r("getErrorSafe")(error)).tags("NEWSLETTER", "PIN").sendLogs("newsletter-unpin-failed");
                throw error;
            }
        });
        return p.apply(this, arguments);
    }
    l.pinNewsletterMessage = c;
    l.unpinNewsletterMessage = m;
}, 98);