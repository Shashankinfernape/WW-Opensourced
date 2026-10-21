__d("WAWebEncodeRgbaToWebp", [
    "Promise",
    "WAWebMiscErrors",
    "WAWebRgbaToWebpWorkerResource",
    "WorkerBundleResource"
], function(t, n, r, o, a, i, l) {
    let e;
    function s({ height: a, opts: i, rgbaData: l, width: s }) {
        const u = i ?? {};
        const c = u.ensureExtendedFormat;
        const d = c === void 0 ? false : c;
        const m = u.quality;
        const p = m === void 0 ? 90 : m;
        return new (e || (e = n("Promise")))(function(e, t) {
            const n = o("WorkerBundleResource").createDedicatedWebWorker(r("WAWebRgbaToWebpWorkerResource"));
            n.onerror = function(e) {
                n.terminate();
                t(new (o("WAWebMiscErrors")).EncodeWebpError("worker error", e));
            };
            n.onmessageerror = function(e) {
                n.terminate();
                t(new (o("WAWebMiscErrors")).EncodeWebpError("worker message error", e));
            };
            n.onmessage = function(t) {
                n.terminate();
                e(t.data.blob);
            };
            n.postMessage({
                type: "message",
                message: {
                    rgbaData: l,
                    width: s,
                    height: a,
                    quality: p,
                    ensureExtendedFormat: d
                }
            });
        });
    }
    l.default = s;
}, 98);