__d("WABackoffDelay", [
    "Promise",
    "WAPromiseDelays",
    "WARetryableError",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = {
        retries: Infinity
    };
    function u(e, t) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, a) {
            const i = babelHelpers.extends({}, s, t);
            const { delay, retries, signal } = i;
            let iterationCount = 0;
            let m = Date.now();
            let p = null;
            const _ = function(o) {
                return (e || (e = n("Promise"))).reject(new (r("WARetryableError"))(o));
            };
            try {
                m = Date.now();
                return yield a(_, iterationCount, signal);
            } catch (error) {
                iterationCount++;
                if (!(error instanceof r("WARetryableError"))) {
                    throw error;
                }
                p = error;
            }
            while(iterationCount <= retries){
                const taskDuration = Date.now() - m;
                const g = delay({
                    iterationCount,
                    taskDuration
                });
                yield o("WAPromiseDelays").delayMs(g, signal);
                try {
                    m = Date.now();
                    return yield a(_, iterationCount, signal);
                } catch (error) {
                    iterationCount++;
                    if (!(error instanceof r("WARetryableError"))) {
                        throw error;
                    }
                    p = error;
                }
            }
            if (!p) {
                throw r("err")("assert: backoff completed without error or result");
            }
            const p_source = p.source;
            throw p_source;
        });
        return c.apply(this, arguments);
    }
    l.backoff = u;
}, 98);