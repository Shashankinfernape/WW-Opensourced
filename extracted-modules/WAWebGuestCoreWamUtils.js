__d("WAWebGuestCoreWamUtils", [
    "WALogger",
    "WAWebGuestCoreCommonUtils",
    "WAWebGuestCoreLocalStorage",
    "WAWebGuestUpsellInteractionWamEvent",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e, t, n) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, r = false) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "Guest upsell action: ",
                " for entrypoint: ",
                ", flushWamBuffers: ",
                ""
            ])), n, t, r);
            const a = new (o("WAWebGuestUpsellInteractionWamEvent")).GuestUpsellInteractionWamEvent({
                guestUpsellAction: n,
                guestUpsellEntryPoint: t
            });
            if (r) {
                return a.commitAndWaitForFlush(r);
            }
            return a.commit();
        });
        return u.apply(this, arguments);
    }
    function c() {
        const e = o("WAWebGuestCoreCommonUtils").getBrowserAndOsDetails();
        return {
            browser: e.browserName,
            browserVersion: e.browserVersion,
            deviceName: e.osName,
            deviceVersion: e.osVersion,
            webcTabId: o("WAWebGuestCoreLocalStorage").getGuestExperienceType()
        };
    }
    l.logUpsellAction = s;
    l.getGuestWamOverrides = c;
}, 98);