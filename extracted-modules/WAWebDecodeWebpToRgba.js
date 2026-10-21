__d("WAWebDecodeWebpToRgba", [
    "Promise",
    "WAWebMiscErrors",
    "WAWebWebpToRgbaWorkerResource",
    "WorkerBundleResource"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(webpBuffer) {
        return new (e || (e = n("Promise")))(function(e, n) {
            const a = o("WorkerBundleResource").createDedicatedWebWorker(r("WAWebWebpToRgbaWorkerResource"));
            a.onerror = function(e) {
                a.terminate();
                n(new (o("WAWebMiscErrors")).DecodeWebpResultsError("worker error", e));
            };
            a.onmessageerror = function(e) {
                a.terminate();
                n(new (o("WAWebMiscErrors")).DecodeWebpResultsError("worker message error", e));
            };
            a.onmessage = function(t) {
                a.terminate();
                const t_data = t.data;
                e(t_data);
            };
            a.postMessage({
                type: "message",
                message: {
                    webpBuffer
                }
            }, [
                webpBuffer
            ]);
        });
    }
    l.default = s;
}, 98);