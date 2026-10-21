__d("WAWebUploadStatsBackend", [
    "WABackoffUtils",
    "WABase64",
    "WALogger",
    "WAPromiseDelays",
    "WAPromiseLoop",
    "WAPromiseTimeout",
    "WATimeUtils",
    "WAWebBackendErrors",
    "WAWebNetworkStatus",
    "asyncToGeneratorRuntime",
    "requireDeferred"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = r("requireDeferred")("WAWebStatsUploadJob").__setRef("WAWebUploadStatsBackend");
    function u(e, t) {
        const r = new Uint8Array(o("WABase64").decodeB64(e));
        const a = o("WATimeUtils").unixTime();
        return c(t, (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const n = yield s.load();
                const i = yield n(r, a);
                if (i != null && i.errorCode) {
                    if (i.errorCode >= 500) {
                        throw new (o("WAWebBackendErrors")).ServerStatusCodeError(i.errorCode, i.errorText);
                    }
                    e(t);
                }
                e(void 0);
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        })());
    }
    function c(t, r) {
        return o("WAPromiseLoop").promiseLoop((()=>{
            const a = n("asyncToGeneratorRuntime").asyncToGenerator(function*(n, a, i) {
                try {
                    yield p();
                    return yield r(n);
                } catch (r) {
                    if (i > 1) {
                        o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[wam] sendLogs failure error: ",
                            ""
                        ])), String(r));
                        return n(t);
                    }
                    return d(i);
                }
            });
            return function(e, t, n) {
                return a.apply(this, arguments);
            };
        })());
    }
    function d(e) {
        return o("WAPromiseDelays").delayMs(o("WABackoffUtils").expBackoff(e, 120000, 1000, 0.1));
    }
    const m = 30;
    function p() {
        return o("WAPromiseTimeout").promiseTimeout(r("WAWebNetworkStatus").waitIfOffline(), m * 1000, "wamUploadWaitForOnline");
    }
    l.default = u;
}, 98);