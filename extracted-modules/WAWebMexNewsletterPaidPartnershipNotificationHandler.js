__d("WAWebMexNewsletterPaidPartnershipNotificationHandler", [
    "WAJids",
    "WALogger",
    "WAWebBackendApi",
    "WAWebDBMessageUtils",
    "WAWebNewsletterDBUtils",
    "WAWebNewsletterGatingUtils",
    "WAWebSchemaMessage",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    function d(e, t) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            if (!o("WAWebNewsletterGatingUtils").isChannelDSA26ReceiverEnabled()) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter][dsa26-pp] receiver disabled"
                ])));
                return;
            }
            const n_xwa2_notify_newsletter_paid_partnership_update = n.xwa2_notify_newsletter_paid_partnership_update;
            if (n_xwa2_notify_newsletter_paid_partnership_update == null) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter][dsa26-pp] null response data"
                ])));
                return;
            }
            const { message_type, newsletter_id, server_id } = n_xwa2_notify_newsletter_paid_partnership_update;
            try {
                const m = o("WAJids").toNewsletterJid(newsletter_id);
                const p = message_type === "STATUS" ? o("WAWebDBMessageUtils").InternalIdPrefix.NewsletterStatus : o("WAWebDBMessageUtils").InternalIdPrefix.Default;
                const _ = yield o("WAWebNewsletterDBUtils").getMessageByServerId(Number(server_id), m, p);
                if (_ == null) {
                    o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[newsletter][dsa26-pp] msgKey not found, serverId=",
                        ", messageType=",
                        ""
                    ])), server_id, message_type ?? "unknown");
                    return;
                }
                yield o("WAWebSchemaMessage").getMessageTable().bulkCreateOrMerge([
                    {
                        id: _.id.toString(),
                        hasPaidPartnershipLabel: true
                    }
                ]);
                o("WAWebBackendApi").frontendFireAndForget("updateNewsletterMsgPaidPartnershipLabel", {
                    id: _.id
                });
            } catch (error) {
                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter][dsa26-pp] notification handling failed"
                ]))).tags("newsletter").catching(r("getErrorSafe")(error)).sendLogs("newsletter-dsa26-pp-notification-handling-failed");
            }
        });
        return m.apply(this, arguments);
    }
    l.mexHandleNewsletterPaidPartnership = d;
}, 98);