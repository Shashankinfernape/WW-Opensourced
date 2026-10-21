__d("WAWebMexUpdateTextStatusJob", [
    "WAWebMexClient",
    "WAWebMexUpdateTextStatusJobMutation.graphql",
    "WAWebTextStatusParseUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e, t, n) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, r, a) {
            const i = e !== void 0 ? e : e = n("WAWebMexUpdateTextStatusJobMutation.graphql");
            const l = o("WAWebTextStatusParseUtils").createTextStatusObjectForUpdateRequest({
                textStatusString: t,
                textStatusEmoji: r,
                textStatusEphemeralDuration: a
            });
            const s = {
                input: l
            };
            const u = yield o("WAWebMexClient").fetchQuery(i, s);
            return u;
        });
        return u.apply(this, arguments);
    }
    l.mexUpdateTextStatus = s;
}, 98);