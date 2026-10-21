__d("WAWebMexSetUsernameKeyJob", [
    "WAWebMexClient",
    "WAWebMexSetUsernameKeyJobMutation.graphql",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(pin) {
            const a = {
                pin
            };
            const i = e !== undefined ? e : e = n("WAWebMexSetUsernameKeyJobMutation.graphql");
            const l = yield o("WAWebMexClient").fetchQuery(i, pin != null ? a : {});
            return l.xwa2_username_pin_set?.result === "SUCCESS";
        });
        return u.apply(this, arguments);
    }
    l.mexSetUsernameKeyQueryJob = s;
}, 98);