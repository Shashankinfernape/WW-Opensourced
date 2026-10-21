__d("WAWebMexNewsletterLeaveHandler", [
    "WAJids",
    "WALogger",
    "WAWebBackendApi",
    "WAWebJidToWid",
    "WAWebNewsletterDBUtils",
    "WAWebNewsletterDeleteChatJob",
    "WAWebNewsletterDeleteMessageAddOns",
    "WAWebNewsletterMetadataJob",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e, t) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            const a = n.xwa2_notify_newsletter_on_leave.id;
            if (a == null) {
                throw r("err")("unexpected null id in xwa2_notify_newsletter_on_leave");
            }
            const i = o("WAJids").toNewsletterJid(a);
            const l = o("WAWebJidToWid").newsletterJidToWid(i);
            if (!(yield o("WAWebNewsletterDBUtils").doesNewsletterExistInStorage(i))) {
                o("WAWebBackendApi").frontendFireAndForget("updateNewsletterSubscriberCount", {
                    id: l,
                    update: {
                        increment: -1
                    }
                });
                return;
            }
            try {
                yield o("WAWebNewsletterMetadataJob").deleteNewsletterMetadata(i);
                yield o("WAWebNewsletterDeleteMessageAddOns").deleteNewsletterMessageAddOns(i);
                yield o("WAWebNewsletterDeleteChatJob").deleteNewsletterChat(l);
                o("WAWebBackendApi").frontendFireAndForget("deleteNewsletter", {
                    id: l,
                    keep: true,
                    newsletterDeleted: false
                });
                o("WAWebBackendApi").frontendFireAndForget("clearStatusForRemovedContact", {});
            } catch (error) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[mex][newsletter][notification][leave]"
                ]))).catching(r("getErrorSafe")(error)).tags("mex", "newsletter").sendLogs("mex-newsletter-notification-leave-fail");
            }
        });
        return u.apply(this, arguments);
    }
    l.mexHandleNewsletterLeave = s;
}, 98);