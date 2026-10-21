__d("WAWebMexUpdateNewsletterUserSetting", [
    "WAWebMexClient",
    "WAWebMexNewsletterUtils",
    "WAWebMexUpdateNewsletterUserSettingJobMutation.graphql",
    "WAWebNewsletterRpcUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e !== undefined ? e : e = n("WAWebMexUpdateNewsletterUserSettingJobMutation.graphql");
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebNewsletterRpcUtils").runWithBackoff(function() {
                return d(e);
            });
            const n = o("WAWebMexNewsletterUtils").convertMutationResponse(t.xwa2_newsletter_update_user_setting);
            return [
                n
            ];
        });
        return c.apply(this, arguments);
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = {
                input: e
            };
            const n = yield o("WAWebMexClient").fetchQuery(s, t);
            return n;
        });
        return m.apply(this, arguments);
    }
    l.mexUpdateNewsletterUserSetting = u;
}, 98);