__d("RSTWebWorkerClientMainThread", [
    "RSTWebWorkerClientMainThreadImpl",
    "RSTWebWorkerResource",
    "WorkerBundleResource"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = new (r("RSTWebWorkerClientMainThreadImpl"))(function() {
        return o("WorkerBundleResource").createDedicatedWebWorker(r("RSTWebWorkerResource"), {
            logImportScriptsErrors: true,
            name: "RSTWebWorker"
        });
    });
    l.default = e;
}, 98);