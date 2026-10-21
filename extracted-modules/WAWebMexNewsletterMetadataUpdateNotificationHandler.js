__d("WAWebMexNewsletterMetadataUpdateNotificationHandler", [
    "WAJids",
    "WALogger",
    "WAWebApiChatCommon",
    "WAWebJidToWid",
    "WAWebMexNewsletterParseUtils",
    "WAWebNewsletterMetadataUpdateUtils",
    "WAWebNewsletterModelUtils",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e, t) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, { xwa2_notify_newsletter_on_metadata_update }) {
            const xwa2_notify_newsletter_on_metadata_update_id = xwa2_notify_newsletter_on_metadata_update.id;
            if (xwa2_notify_newsletter_on_metadata_update_id == null) {
                throw r("err")("unexpected null id in xwa2_notify_newsletter_on_metadata_update");
            }
            const l = o("WAJids").toNewsletterJid(xwa2_notify_newsletter_on_metadata_update_id);
            const s = o("WAWebJidToWid").newsletterJidToWid(l);
            const u = yield o("WAWebApiChatCommon").getChatRecord(s);
            if (u != null) {
                const c = o("WAWebMexNewsletterParseUtils").parseMexNewsletterResponse(xwa2_notify_newsletter_on_metadata_update);
                if (c == null) {
                    throw r("err")("Unexpected null metadata for newsletter update notification");
                }
                try {
                    const d = o("WAWebNewsletterModelUtils").mapNewsletterToModels(c);
                    const { chat, metadata, pic } = d;
                    yield o("WAWebNewsletterMetadataUpdateUtils").updateNewsletterMetadataAndPic(chat, metadata, pic);
                } catch (t) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[mex][newsletter] metadata-update notif failed"
                    ]))).tags("mex", "newsletter").sendLogs("mex-newsletter-notification-metadata-update-fail");
                }
            }
        });
        return u.apply(this, arguments);
    }
    l.mexHandleNewsletterMetadataUpdate = s;
}, 98);