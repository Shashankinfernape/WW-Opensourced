__d("RSTMarkFirstUnrecoverableMainThread", [
    "FBLogger",
    "RSTLocalStorageMainThread",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = "rst-first-unrecoverable-marking";
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const { incidentID, sessionID } = t;
            const a = `${sessionID}:first-unrecoverable`;
            try {
                if ("locks" in navigator) {
                    yield navigator.locks.request(e, function() {
                        if (!r("RSTLocalStorageMainThread").has(a)) {
                            r("RSTLocalStorageMainThread").set(a, incidentID);
                            t.isFirstUnrecoverable = true;
                        }
                    });
                }
            } catch (error) {
                r("FBLogger")("responsive-tracker").catching(r("getErrorSafe")(error)).warn("Failed to acquire lock for marking first unrecoverable incident");
            }
        });
        return u.apply(this, arguments);
    }
    l.markFirstUnrecoverableIncident = s;
}, 98);