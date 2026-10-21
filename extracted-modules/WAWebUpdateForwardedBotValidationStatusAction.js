__d("WAWebUpdateForwardedBotValidationStatusAction", [
    "WAWebUpdateForwardedBotValidationStatusJob",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            return u(e, "download_consent_accepted");
        });
        return s.apply(this, arguments);
    }
    function u(e, t) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, validationStatus) {
            const n = e.unsafe();
            const n_forwardedAiBotMessageInfo = n.forwardedAiBotMessageInfo;
            if (n_forwardedAiBotMessageInfo != null) {
                yield o("WAWebUpdateForwardedBotValidationStatusJob").updateForwardedBotValidationStatus(e.id, validationStatus);
                n.forwardedAiBotMessageInfo = babelHelpers.extends({}, n_forwardedAiBotMessageInfo, {
                    validationStatus
                });
            }
        });
        return c.apply(this, arguments);
    }
    l.acceptForwardedBotDownloadConsentAction = e;
    l.updateForwardedBotValidationStatusAction = u;
}, 98);