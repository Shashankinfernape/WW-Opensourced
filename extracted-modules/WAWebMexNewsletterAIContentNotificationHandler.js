__d("WAWebMexNewsletterAIContentNotificationHandler", [
    "WAJids",
    "WALogger",
    "WAWebBackendApi",
    "WAWebDBMessageUtils",
    "WAWebMsgAIProvenance",
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
            if (!o("WAWebNewsletterGatingUtils").isChannelSGIReceiverEnabled()) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter][sgi-ai-content] receiver disabled"
                ])));
                return;
            }
            const n_xwa2_notify_newsletter_ai_content_update = n.xwa2_notify_newsletter_ai_content_update;
            if (n_xwa2_notify_newsletter_ai_content_update == null) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter][sgi-ai-content] null response data"
                ])));
                return;
            }
            const { message_type, newsletter_id, server_id } = n_xwa2_notify_newsletter_ai_content_update;
            try {
                const m = o("WAJids").toNewsletterJid(newsletter_id);
                const p = message_type === "STATUS" ? o("WAWebDBMessageUtils").InternalIdPrefix.NewsletterStatus : o("WAWebDBMessageUtils").InternalIdPrefix.Default;
                const _ = yield o("WAWebNewsletterDBUtils").getMessageByServerId(Number(server_id), m, p);
                if (_ == null) {
                    o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[newsletter][sgi-ai-content] msg not found, serverId=",
                        ", messageType=",
                        ""
                    ])), server_id, message_type ?? "unknown");
                    return;
                }
                const aiProvenance = o("WAWebMsgAIProvenance").withSelfDisclosed(_.aiProvenance);
                yield o("WAWebSchemaMessage").getMessageTable().bulkCreateOrMerge([
                    {
                        id: _.id.toString(),
                        aiProvenance
                    }
                ]);
                o("WAWebBackendApi").frontendFireAndForget("updateNewsletterMsgAiContentLabel", {
                    id: _.id
                });
            } catch (error) {
                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter][sgi-ai-content] notification handling failed"
                ]))).tags("newsletter", "sgi", "wa-ice", "wa-spice-web").catching(r("getErrorSafe")(error)).sendLogs("newsletter-sgi-ai-content-notification-handling-failed");
            }
        });
        return m.apply(this, arguments);
    }
    l.mexHandleNewsletterAIContent = d;
}, 98);