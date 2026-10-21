__d("WAWebMexNewsletterWamoSubStatusChangeNotificationHandler", [
    "WAJids",
    "WALogger",
    "WAWebApiChatCommon",
    "WAWebBackendApi",
    "WAWebCommonNewsletterEnums",
    "WAWebJidToWid",
    "WAWebNewsletterMetadataJob",
    "WAWebNewsletterStorageUtils",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e, t) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, { xwa2_notify_newsletter_on_wamo_sub_status_change }) {
            const { newsletter_id, wamo_sub_event } = xwa2_notify_newsletter_on_wamo_sub_status_change;
            if (newsletter_id == null) {
                throw r("err")("unexpected null newsletter_id in xwa2_notify_newsletter_on_wamo_sub_status_change");
            }
            const s = o("WAJids").toNewsletterJid(newsletter_id);
            const u = o("WAWebJidToWid").newsletterJidToWid(s);
            const c = yield o("WAWebApiChatCommon").getChatRecord(u);
            if (c != null) {
                try {
                    let wamoSubStatus;
                    switch(wamo_sub_event){
                        case "SUBSCRIPTION_CREATED":
                            wamoSubStatus = o("WAWebCommonNewsletterEnums").WamoSubStatus.ACTIVE;
                            break;
                        case "SUBSCRIPTION_PAUSED":
                        case "SUBSCRIPTION_ON_HOLD":
                        case "SUBSCRIPTION_EXPIRED":
                            wamoSubStatus = o("WAWebCommonNewsletterEnums").WamoSubStatus.INACTIVE;
                            break;
                        case "SUBSCRIPTION_CANCELLED":
                        case "SUBSCRIPTION_IN_GRACE_PERIOD":
                        case "SUBSCRIPTION_PENDING_REVOKE":
                        case "SUBSCRIPTION_RENEWED":
                        case "SUBSCRIPTION_TO_RENEW_SOON":
                        case "SUBSCRIPTION_XGRADE":
                            break;
                        default:
                            {
                                const m = wamo_sub_event ?? "null or undefined";
                                throw r("err")(`Unexpected Wamo Sub event: ${m}`);
                            }
                    }
                    if (wamoSubStatus == null) {
                        return;
                    }
                    yield o("WAWebNewsletterMetadataJob").updateNewsletterMetadata({
                        id: s,
                        wamoSubStatus: o("WAWebNewsletterStorageUtils").mapNewsletterWamoSubStatusForStorage(wamoSubStatus)
                    });
                    o("WAWebBackendApi").frontendFireAndForget("handleNewsletterWamoSubStatusChangeNotification", {
                        jid: s,
                        wamoSubStatus
                    });
                } catch (error) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[mex][newsletter] wamo-sub-status-change failed: ",
                        ""
                    ])), wamo_sub_event).catching(r("getErrorSafe")(error)).tags("mex", "newsletter").sendLogs("mex-newsletter-notification-wamo-sub-status-change-fail");
                }
            }
        });
        return u.apply(this, arguments);
    }
    l.mexHandleNewsletterWamoSubStatusChange = s;
}, 98);