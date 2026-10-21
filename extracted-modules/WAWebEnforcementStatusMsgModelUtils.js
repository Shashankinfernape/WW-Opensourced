__d("WAWebEnforcementStatusMsgModelUtils", [
    "WAWebSuspendInformStatusMsgDataModelUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (e.size === 0) {
                return new Map;
            }
            return o("WAWebSuspendInformStatusMsgDataModelUtils").populateStatusMsgModels(Array.from(e), t, "admin");
        });
        return s.apply(this, arguments);
    }
    l.populateStatusMsgModelsForEnforcement = e;
}, 98);