__d("WAWebMexNewsletterStateChangeHandler", [
    "WAJids",
    "WALogger",
    "WAWebApiChatCommon",
    "WAWebBackendApi",
    "WAWebJidToWid",
    "WAWebNewsletterDeleteChatJob",
    "WAWebNewsletterMetadataJob",
    "WAWebNewsletterMetadataQueryJob",
    "WAWebNewsletterModelUtils",
    "WAWebNewsletterQueues",
    "WAWebNewsletterStorageUtils",
    "WAWebNewsletterSystemMessages",
    "WAWebNewsletterUpdateMsgsRecordsJob",
    "WAWebNux",
    "WAWebUserPrefsNuxPreferences",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        switch(e){
            case "ACTIVE":
                return "active";
            case "SUSPENDED":
                return "suspended";
            case "GEOSUSPENDED":
                return "geosuspended";
        }
    }
    function u(e, t) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            yield o("WAWebNewsletterQueues").newsletterJoinNotificationQueue.wait();
            const n_xwa2_notify_newsletter_on_state_change = n.xwa2_notify_newsletter_on_state_change;
            const { id, is_requestor, state } = n_xwa2_notify_newsletter_on_state_change;
            if (id == null) {
                throw r("err")("unexpected null id in xwa2_notify_newsletter_on_state_change");
            }
            const c = o("WAJids").toNewsletterJid(id);
            const newsletterWid = o("WAWebJidToWid").newsletterJidToWid(c);
            const isSender = is_requestor === true;
            const _ = state?.type;
            const f = yield o("WAWebApiChatCommon").getChatRecord(newsletterWid);
            if (f != null) {
                try {
                    switch(_){
                        case "DELETED":
                            yield o("WAWebNewsletterQueues").newsletterDeleteQueue.wait();
                            return yield d({
                                isSender,
                                name: f.name,
                                newsletterJid: c,
                                newsletterWid
                            });
                        case "ACTIVE":
                        case "SUSPENDED":
                        case "GEOSUSPENDED":
                            {
                                const stateType = s(_);
                                const h = o("WAWebNewsletterMetadataQueryJob").emptyNewsletterMetadataType(c);
                                const y = babelHelpers.extends({}, h, {
                                    newsletterStateMetadataMixin: {
                                        stateType
                                    }
                                });
                                const C = o("WAWebNewsletterModelUtils").mapNewsletterToModels(y);
                                const { chat, metadata, pic } = C;
                                yield o("WAWebNewsletterMetadataJob").updateNewsletterMetadata(o("WAWebNewsletterStorageUtils").createNewsletterMetadataObjectForStorage(metadata));
                                if (metadata.suspended === true) {
                                    const R = o("WAWebNux").getNewsletterAlertsBannerNuxKey(metadata.id.toString());
                                    o("WAWebUserPrefsNuxPreferences").resetNux(R);
                                }
                                yield o("WAWebBackendApi").frontendSendAndReceive("updateNewsletterMetadata", {
                                    metadata,
                                    newsletter: chat,
                                    pic
                                });
                                break;
                            }
                        default:
                            {
                                const L = _ ?? "null or undefined";
                                throw r("err")(`Unexpected state change type: ${L}`);
                            }
                    }
                } catch (error) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[mex][newsletter] state-change update to ",
                        " failed"
                    ])), _).catching(r("getErrorSafe")(error)).tags("mex", "newsletter").sendLogs("mex-newsletternotification-state-change-fail");
                }
            }
        });
        return c.apply(this, arguments);
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ isSender, name, newsletterJid, newsletterWid }) {
            if (isSender) {
                return p(newsletterJid, newsletterWid);
            }
            return f(newsletterJid, newsletterWid, name);
        });
        return m.apply(this, arguments);
    }
    function p(e, t) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            yield o("WAWebNewsletterMetadataJob").deleteNewsletterMetadata(e.toString());
            yield o("WAWebNewsletterDeleteChatJob").deleteNewsletterChat(t);
            yield o("WAWebNewsletterMetadataJob").deleteNewsletterPicture(e.toString());
            yield o("WAWebBackendApi").frontendSendAndReceive("deleteNewsletter", {
                id: t,
                keep: true,
                newsletterDeleted: true
            });
        });
        return _.apply(this, arguments);
    }
    function f(e, t, n) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const msgs = o("WAWebNewsletterSystemMessages").genNewsletterDeletionSystemMessages({
                id: e,
                name: n
            });
            yield o("WAWebNewsletterMetadataJob").updateNewsletterMetadata({
                id: e,
                terminated: true
            });
            yield o("WAWebNewsletterUpdateMsgsRecordsJob").addNewsletterMsgsRecords(msgs);
            yield o("WAWebBackendApi").frontendSendAndReceive("terminateNewsletter", {
                id: t,
                msgs
            });
        });
        return g.apply(this, arguments);
    }
    l.mexHandleNewsletterStateChange = u;
}, 98);