__d("WAWebQuickPromotionForcePassRuleValidator", [], function(t, n, r, o, a, i) {
    function e(e, t) {
        const qpConfigForcePass = e.data.qpConfigForcePass;
        let forcePass;
        if (qpConfigForcePass === "true") {
            forcePass = true;
        } else {
            forcePass = false;
        }
        return {
            result: true,
            skipWaterfallLogging: true,
            forcePass
        };
    }
    i.forcePassRuleValidator = e;
}, 66);