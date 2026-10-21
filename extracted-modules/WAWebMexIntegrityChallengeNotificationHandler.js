__d("WAWebMexIntegrityChallengeNotificationHandler", [
    "WALogger",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e, t) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[mex][integrity-challenge] kill switch on, skip"
            ]))).tags("mex", "integrity-challenge");
        });
        return u.apply(this, arguments);
    }
    l.mexHandleIntegrityChallengeNotification = s;
}, 98);