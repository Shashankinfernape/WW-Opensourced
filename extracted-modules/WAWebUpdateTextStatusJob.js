__d("WAWebUpdateTextStatusJob", [
    "WALogger",
    "WAWebMexExperiment",
    "WAWebMexUpdateTextStatusJob",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e, t, n) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, r) {
            const i = new (o("WAWebMexExperiment")).GraphQlPerfTracker("update-text-status");
            i.start();
            i.toUseGraphQL();
            const l = yield o("WAWebMexUpdateTextStatusJob").mexUpdateTextStatus(t, n, r);
            const s = l.xwa2_update_text_status?.result;
            i.stop();
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "updateTextStatus success"
            ])));
            return {
                result: s
            };
        });
        return u.apply(this, arguments);
    }
    l.updateTextStatus = s;
}, 98);