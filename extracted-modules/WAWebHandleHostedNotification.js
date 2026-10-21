__d("WAWebHandleHostedNotification", [
    "WALogger",
    "WASmaxCoexistenceOffboardingNotificationRPC",
    "WASmaxCoexistenceOnboardingStatusNotificationRPC",
    "WASmaxCoexistenceSyncNotificationRPC",
    "WASmaxNotificationFallbackGenericNotificationRPC",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WAWebCTWADetectedOutcomeOnboardingStatusNotification",
    "WAWebCoexStateSyncNotification",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const n = o("WASmaxParseUtils").flattenedChildWithTag(t, "onboarding_status");
            if (n.success) {
                const r = o("WASmaxCoexistenceOnboardingStatusNotificationRPC").receiveOnboardingStatusNotificationRPC(t);
                const a = r.parsedRequest;
                if (a.onboardingStatusStatus === "completed" && a.onboardingStatusProductSurfaceMixin.productSurface === "automation") {
                    o("WAWebCTWADetectedOutcomeOnboardingStatusNotification").handleCTWADetectedOutcomeOnboardingStatusNotification(true);
                }
                return;
            }
            const i = o("WASmaxParseUtils").flattenedChildWithTag(t, "offboarding");
            if (i.success) {
                const l = o("WASmaxCoexistenceOffboardingNotificationRPC").receiveOffboardingNotificationRPC(t);
                const u = l.parsedRequest;
                if (u.offboardingProductSurface === "automation") {
                    o("WAWebCTWADetectedOutcomeOnboardingStatusNotification").handleCTWADetectedOutcomeOnboardingStatusNotification(false);
                }
                return;
            }
            const c = o("WASmaxParseUtils").flattenedChildWithTag(t, "sync");
            if (c.success) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "handleHostedNotification: sync notification received"
                ])));
                o("WASmaxCoexistenceSyncNotificationRPC").receiveSyncNotificationRPC(t);
                o("WAWebCoexStateSyncNotification").handleCoexStateSyncNotification();
                return o("WASmaxNotificationFallbackGenericNotificationRPC").makeGenericNotificationResponseAck(t);
            }
            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "handleHostedNotification: unsupported hosted notification"
            ])));
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure("handleHostedNotification: unsupported hosted notification");
        });
        return c.apply(this, arguments);
    }
    l.handleHostedNotification = u;
}, 98);