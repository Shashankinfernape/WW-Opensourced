__d("WAStorageEstimator", [
    "Promise",
    "WAResultOrError"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s() {
        if (navigator.storage != null && typeof navigator.storage.estimate === "function") {
            return navigator.storage.estimate().then((e)=>o("WAResultOrError").makeResult(e)).catch((e)=>o("WAResultOrError").makeError({
                    type: "runtime-error",
                    runtimeError: e
                }));
        }
        return (e || (e = n("Promise"))).resolve(o("WAResultOrError").makeError({
            type: "not-support"
        }));
    }
    l.estimateStorage = s;
}, 98);