__d("WAWebNewsletterGetMessageUpdatesAction", [
    "Promise",
    "WAJids",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebBackendErrors",
    "WAWebNewsletterBridgeApi",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterGetMessageUpdatesJob",
    "WAWebNewsletterMetadataJob",
    "WAWebNewsletterSystemMessages",
    "WAWebNewsletterValidationUtils",
    "asyncToGeneratorRuntime",
    "compactMap",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let s;
    let u;
    let c;
    let d;
    function m(e, t) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const a = `[maybeUpdateMsgsAddOns][${t.id.toJid()}]`;
            if (e.length !== 0) {
                const i = e.filter((e)=>{
                    if (e.serverId == null) {
                        return false;
                    }
                    return e.serverId >= o("WAWebNewsletterSystemMessages").EARLIEST_AVAILABLE_MESSAGE_ID && e.serverId <= o("WAWebNewsletterSystemMessages").LATEST_AVAILABLE_MESSAGE_ID;
                });
                const l = Math.min(...i.map((e)=>e.lastUpdateFromServerTs ?? 0));
                if (_(l)) {
                    const m = Math.min(...r("compactMap")(i, function(e) {
                        return e.serverId;
                    }));
                    if (Number.isSafeInteger(m)) {
                        try {
                            let after = m - 1;
                            for(var f = 0, g = []; f < i.length;){
                                const h = Math.min(i.length - f, o("WAWebNewsletterGatingUtils").getMaxMsgCountFromServer());
                                g.push(o("WAWebNewsletterGetMessageUpdatesJob").getNewsletterMessageUpdates(o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(t.id.toJid()), {
                                    cursor: {
                                        after
                                    },
                                    count: h,
                                    since: l > 0 ? l : undefined,
                                    ids: i.map((e)=>e.id)
                                }));
                                after += h;
                                f += h;
                            }
                            const y = yield (d || (d = n("Promise"))).all(g);
                            y.forEach((e)=>{
                                o("WAWebNewsletterBridgeApi").NewsletterBridgeApi.updateNewsletterMessages(e);
                            });
                        } catch (error) {
                            if (error instanceof o("WAWebBackendErrors").ServerStatusCodeError && error.status === 423) {
                                try {
                                    yield o("WAWebNewsletterMetadataJob").suspendNewsletter(o("WAJids").toNewsletterJid(t.id.toJid()));
                                    o("WAWebNewsletterBridgeApi").NewsletterBridgeApi.suspendNewsletter({
                                        id: t.id
                                    });
                                } catch (err) {
                                    const C = t.id.toString();
                                    const b = r("getErrorSafe")(err).name;
                                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                                        "[maybeUpdateMsgsAddOns] suspend failed (423) ",
                                        " ",
                                        ""
                                    ])), C, b).tags("newsletter").sendLogs("newsletter-maybe-update-msg-addons-suspend-error");
                                    return;
                                }
                            } else if (error instanceof o("WAWebBackendErrors").ServerStatusCodeError && error.status === 451) {
                                try {
                                    yield o("WAWebNewsletterMetadataJob").geosuspendNewsletter(o("WAJids").toNewsletterJid(t.id.toJid()));
                                    o("WAWebNewsletterBridgeApi").NewsletterBridgeApi.geosuspendNewsletter({
                                        id: t.id
                                    });
                                } catch (err) {
                                    const v = t.id.toString();
                                    const S = r("getErrorSafe")(err).name;
                                    o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                                        "[maybeUpdateMsgsAddOns] geosuspend failed (451) ",
                                        " ",
                                        ""
                                    ])), v, S).tags("newsletter").sendLogs("newsletter-maybe-update-msg-addons-geosuspend-error");
                                    return;
                                }
                            }
                            o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                                "[maybeUpdateMsgsAddOns] Failed to update messages"
                            ]))).tags("newsletter");
                        }
                    }
                }
            }
        });
        return p.apply(this, arguments);
    }
    function _(e) {
        if (Number.isSafeInteger(e)) {
            return o("WATimeUtils").unixTime() - e > o("WAWebABProps").getABPropConfigValue("channel_pull_message_updates_threshold_seconds");
        }
        return false;
    }
    l.maybeUpdateMsgsAddOns = m;
}, 98);