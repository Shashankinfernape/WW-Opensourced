__d("WAWebNewsletterSubscribeToLiveUpdatesAction", [
    "WAJids",
    "WALogger",
    "WAWebNewsletterBridgeApi",
    "WAWebNewsletterMetadataJob",
    "WAWebNewsletterSubscribeToLiveUpdatesJob",
    "WAWebNewsletterValidationUtils",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            try {
                return yield o("WAWebNewsletterSubscribeToLiveUpdatesJob").subscribeToLiveUpdatesJob(o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(t.toJid()));
            } catch (error) {
                const n = error != null && typeof error === "object" && "status" in error ? error.status : null;
                if (n === 423) {
                    try {
                        yield o("WAWebNewsletterMetadataJob").suspendNewsletter(o("WAJids").toNewsletterJid(t.toJid()));
                        o("WAWebNewsletterBridgeApi").NewsletterBridgeApi.suspendNewsletter({
                            id: t
                        });
                    } catch (err) {
                        const a = r("getErrorSafe")(err);
                        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[subscribeToLiveUpdatesJob] suspend failed (423) ",
                            ""
                        ])), t.toString()).catching(a).tags("newsletter").sendLogs("newsletter-subscribe-to-live-updates-suspend-error");
                        return;
                    }
                } else if (n === 451) {
                    try {
                        yield o("WAWebNewsletterMetadataJob").geosuspendNewsletter(o("WAJids").toNewsletterJid(t.toJid()));
                        o("WAWebNewsletterBridgeApi").NewsletterBridgeApi.geosuspendNewsletter({
                            id: t
                        });
                    } catch (err) {
                        const i = r("getErrorSafe")(err);
                        o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "[subscribeToLiveUpdatesJob] geosuspend failed (451) ",
                            ""
                        ])), t.toString()).catching(i).tags("newsletter").sendLogs("newsletter-subscribe-to-live-updates-geosuspend-error");
                        return;
                    }
                }
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[subscribeToLiveUpdatesJob] subscribe failed"
                ])));
            }
        });
        return d.apply(this, arguments);
    }
    l.subscribeToLiveUpdates = c;
}, 98);