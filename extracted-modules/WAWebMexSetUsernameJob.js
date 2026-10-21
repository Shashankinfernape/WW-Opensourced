__d("WAWebMexSetUsernameJob", [
    "WAWebMexClient",
    "WAWebMexSetUsernameJobMutation.graphql",
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const i = e !== void 0 ? e : e = n("WAWebMexSetUsernameJobMutation.graphql");
            const l = yield o("WAWebMexClient").fetchQuery(i, r("isStringNullOrEmpty")(t.input) ? {} : t);
            return l.xwa2_username_set?.result === "SUCCESS";
        });
        return u.apply(this, arguments);
    }
    l.mexSetUsernameQueryJob = s;
}, 98);