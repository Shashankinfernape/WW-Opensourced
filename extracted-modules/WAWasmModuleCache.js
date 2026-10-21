__d("WAWasmModuleCache", [
    "Promise",
    "WAAbortError",
    "WAExponentialBackoff",
    "WAPromiseManagement",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
    "gkx"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const t_fetch = t.fetch;
    const u = {
        minTimeout: 1000,
        retries: 3,
        factor: 2,
        jitter: 0.2
    };
    const c = 3;
    const d = new Map;
    const m = o("WAPromiseManagement").cacheWhilePending(function(e) {
        return e;
    }, (()=>{
        const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = d.get(e);
            if (t != null) {
                return t;
            }
            const n = yield f(e);
            d.set(e, n);
            return n;
        });
        return function(t) {
            return e.apply(this, arguments);
        };
    })());
    function p(e) {
        const t = new AbortController;
        return o("WAExponentialBackoff").exponentialBackoff(babelHelpers.extends({}, u, {
            signal: t.signal
        }), (()=>{
            const o = n("asyncToGeneratorRuntime").asyncToGenerator(function*(n, o) {
                if (o > c) {
                    throw r("err")(`WASM fetch exceeded max retries (${c})`);
                }
                yield _(t.signal);
                let a;
                try {
                    a = yield t_fetch(e, {
                        signal: t.signal
                    });
                } catch (error) {
                    return n(r("getErrorSafe")(error));
                }
                if (a.status >= 500) {
                    return n(r("err")(`WASM fetch server error: ${a.status}`));
                }
                if (!a.ok) {
                    throw r("err")(`WASM fetch failed: ${a.status}`);
                }
                return a;
            });
            return function(e, t) {
                return o.apply(this, arguments);
            };
        })());
    }
    function _(signal) {
        if (globalThis.navigator?.onLine !== false) {
            return (e || (e = n("Promise"))).resolve();
        }
        return new (e || (e = n("Promise")))(function(e, n) {
            if (signal.aborted) {
                n(new (o("WAAbortError")).AbortError);
                return;
            }
            const r = function() {
                signal.removeEventListener("abort", a);
                e();
            };
            var a = function() {
                self.removeEventListener("online", r);
                n(new (o("WAAbortError")).AbortError);
            };
            self.addEventListener("online", r, {
                once: true
            });
            signal.addEventListener("abort", a, {
                once: true
            });
        });
    }
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = r("gkx")("22038");
            const n = t ? p(e) : t_fetch(e);
            if (typeof WebAssembly.compileStreaming === "function") {
                return WebAssembly.compileStreaming(n);
            }
            const o = yield n;
            return WebAssembly.compile((yield o.arrayBuffer()));
        });
        return g.apply(this, arguments);
    }
    l.loadWasmModule = m;
}, 98);