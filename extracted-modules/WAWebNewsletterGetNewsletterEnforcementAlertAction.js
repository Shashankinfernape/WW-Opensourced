__d("WAWebNewsletterGetNewsletterEnforcementAlertAction", [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebGetNewsletterEnforcementAlertsJob",
    "WAWebL10N",
    "WAWebNewsletterBridgeApi",
    "WAWebNewsletterEnforcementAlertCollection",
    "WAWebNewsletterValidationUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e, t) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n = o("WAJobOrchestratorTypes").JOB_PRIORITY.HIGH) {
            try {
                const newsletterJid = o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(t.toJid());
                const i = r("WAWebL10N").getLocale();
                const l = yield o("WAWebGetNewsletterEnforcementAlertsJob").getNewsletterEnforcementAlerts({
                    locale: i,
                    newsletterJid,
                    priority: n
                });
                if (l == null) {
                    return;
                }
                const { enforcementData, msgModelMap } = l;
                o("WAWebNewsletterEnforcementAlertCollection").NewsletterEnforcementAlertCollection.setMsgModelMap(msgModelMap);
                o("WAWebNewsletterBridgeApi").NewsletterBridgeApi.updateNewsletterEnforcementAlerts({
                    enforcementAlerts: enforcementData
                });
            } catch (t) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[getNewsletterEnforcementAlertAction] fetch failed"
                ]))).tags("newsletter").sendLogs("newsletter-failed-to-get-NewsletterEnforcement-alerts");
            }
        });
        return u.apply(this, arguments);
    }
    l.getNewsletterEnforcementAlertAction = s;
}, 98);