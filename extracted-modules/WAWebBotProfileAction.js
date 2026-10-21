__d("WAWebBotProfileAction", [
    "WAWebRequestBotProfiles",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, personaId) {
            const n = (yield o("WAWebRequestBotProfiles").requestBotProfiles([
                {
                    id: e,
                    isDefault: false,
                    personaId
                }
            ]))[0];
            return n;
        });
        return s.apply(this, arguments);
    }
    l.queryBotProfile = e;
}, 98);