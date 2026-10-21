__d("WAWebNewsletterRpcUtils", [
    "WAExponentialBackoff",
    "WAWebBackendErrors",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = {
        minTimeout: 1000,
        retries: 3
    };
    const s = new Set([
        429,
        500
    ]);
    function u(t, r) {
        const a = r === void 0 ? {
            retryableErrorCodes: s
        } : r;
        const i = a.retryableErrorCodes;
        const l = new AbortController;
        const u = l.signal;
        return o("WAExponentialBackoff").exponentialBackoff(babelHelpers.extends({}, e, {
            signal: u
        }), (()=>{
            const r = n("asyncToGeneratorRuntime").asyncToGenerator(function*(n, r) {
                try {
                    return yield t();
                } catch (t) {
                    if (!(t instanceof o("WAWebBackendErrors").ServerStatusCodeError)) {
                        throw t;
                    }
                    const a = i.has(t.statusCode);
                    if (a && r < e.retries) {
                        return n(t);
                    }
                    throw t;
                }
            });
            return function(e, t) {
                return r.apply(this, arguments);
            };
        })());
    }
    l.runWithBackoff = u;
}, 98);