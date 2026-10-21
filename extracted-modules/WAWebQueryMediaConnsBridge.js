__d("WAWebQueryMediaConnsBridge", [
    "WABackoffDelay",
    "WAPromiseBackoffs",
    "WAWebBackendErrors",
    "WAWebQueryMediaConnsJob",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = 1000;
    const s = 900 * 1000;
    const u = o("WAPromiseBackoffs").createTimer({
        algo: {
            type: "fibonacci",
            first: 0,
            second: 1
        },
        max: s,
        jitter: 0.25
    });
    function c(t) {
        return o("WABackoffDelay").backoff({
            delay: function({ taskDuration }) {
                const r = e * u();
                return Math.max(r - taskDuration, 0);
            },
            signal: t
        }, (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const n = o("WAWebQueryMediaConnsJob").queryMediaConn(t);
                try {
                    const r = yield n;
                    let authTTL = r.authTTL;
                    let ttl = r.ttl;
                    authTTL *= 1000;
                    ttl *= 1000;
                    return babelHelpers.extends({}, r, {
                        authTTL,
                        ttl
                    });
                } catch (error) {
                    if (error instanceof o("WAWebBackendErrors").E507) {
                        throw error;
                    }
                    if (error instanceof o("WAWebBackendErrors").ServerStatusCodeError && error.status >= 500) {
                        return e(error);
                    }
                    throw error;
                }
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        })());
    }
    l.sendQueryMediaConn = c;
}, 98);