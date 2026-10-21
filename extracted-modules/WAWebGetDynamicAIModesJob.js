__d("WAWebGetDynamicAIModesJob", [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebDynamicAIModesCache",
    "WAWebDynamicAIModesMapper",
    "WAWebFetchDynamicAIModes",
    "WAWebOrchestratorNonPersistedJob",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    function u() {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("getDynamicAIModes", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const t = yield o("WAWebDynamicAIModesCache").getCachedDynamicAIModes();
            if (t != null) {
                return t;
            }
            const n = yield o("WAWebFetchDynamicAIModes").fetchDynamicAIModes();
            if (n.type === "success") {
                const r = o("WAWebDynamicAIModesMapper").mapFetchedModesToDynamicAIModeList(n.value);
                if (r.length > 0) {
                    o("WAWebDynamicAIModesCache").setCachedDynamicAIModes(r);
                } else {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[getDynamicAIModes] GQL returned empty mode list"
                    ])));
                }
                return r;
            }
            const a = yield o("WAWebDynamicAIModesCache").getStaleCachedDynamicAIModes();
            return a ?? (o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[getDynamicAIModes] GQL failed, no cache available"
            ]))), []);
        }), {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
        }).waitUntilCompleted();
    }
    l.getDynamicAIModes = u;
}, 98);