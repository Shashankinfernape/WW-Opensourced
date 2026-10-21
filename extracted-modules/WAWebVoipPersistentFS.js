__d("WAWebVoipPersistentFS", [
    "Promise",
    "WALogger",
    "WAWebPonyfillsIdleCallback",
    "asyncToGeneratorRuntime",
    "err",
    "once"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    const h = "/wa_voip_storage";
    const y = 1000;
    const C = 10;
    let b = false;
    let v = null;
    let S = false;
    let R = null;
    let L = 0;
    let E = null;
    const k = 5000;
    const I = 2;
    function T(e, t) {
        return new (g || (g = n("Promise")))(function(n, o) {
            let a = false;
            const i = window.setTimeout(function() {
                if (!a) {
                    a = true;
                    o(r("err")(`[IDBFS] syncfs timed out after ${k}ms`));
                }
            }, k);
            e.syncfs(t, function(e) {
                if (!a) {
                    a = true;
                    window.clearTimeout(i);
                    if (e) {
                        o(e);
                    } else {
                        n();
                    }
                }
            });
        });
    }
    function D(e) {
        if (e == null || typeof e !== "object") {
            return false;
        }
        return e.name === "InvalidStateError";
    }
    function x(e) {
        const IDBFS = e.filesystems.IDBFS;
        if (!(IDBFS == null || IDBFS.quit == null)) {
            IDBFS.quit();
        }
    }
    function $(e) {
        return P.apply(this, arguments);
    }
    function P() {
        P = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                yield T(e, false);
            } catch (error) {
                if (!D(error)) {
                    throw error;
                }
                x(e);
                try {
                    yield T(e, false);
                } catch (err) {
                    if (!D(err)) {
                        throw err;
                    }
                    o("WALogger").WARN(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [IDBFS] sync skipped: IndexedDB connection closing (best-effort)"
                    ])));
                }
            }
        });
        return P.apply(this, arguments);
    }
    const N = r("once")((()=>{
        const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ FS }) {
            if (!FS) {
                throw r("err")("[IDBFS] FS not available in WASM module");
            }
            try {
                FS.mkdir(h);
            } catch (e) {}
            FS.mount(FS.filesystems.IDBFS, {}, h);
            const i = function*() {
                try {
                    yield T(FS, true);
                    b = true;
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [IDBFS] syncfs succeeded on attempt ",
                        ""
                    ])), u + 1);
                    return {
                        v: undefined
                    };
                } catch (error) {
                    if (u < I) {
                        const t = (u + 1) * 10000;
                        o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [IDBFS] syncfs attempt ",
                            " failed, retry in ",
                            "ms"
                        ])), u + 1, t);
                        yield new (g || (g = n("Promise")))(function(e) {
                            window.setTimeout(function() {
                                o("WAWebPonyfillsIdleCallback").requestIdleCallback(function() {
                                    return e();
                                });
                            }, t);
                        });
                    } else {
                        throw error;
                    }
                }
            };
            let l;
            for(var u = 0; u <= I; u++){
                l = yield* i();
                if (l) {
                    return l.v;
                }
            }
        });
        return function(e) {
            return t.apply(this, arguments);
        };
    })());
    function M(e) {
        return w.apply(this, arguments);
    }
    function w() {
        w = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (!b) {
                throw r("err")("[IDBFS] Persistent FS not initialized");
            }
            if (v != null) {
                return v;
            }
            const t = e.FS;
            if (!t) {
                throw r("err")("[IDBFS] FS not available in WASM module");
            }
            const n = $(t).finally(()=>{
                v = null;
            });
            v = n;
            return n;
        });
        return w.apply(this, arguments);
    }
    function A() {
        return h;
    }
    function F() {
        if (!(!S || R == null)) {
            o("WAWebPonyfillsIdleCallback").requestIdleCallback(function() {
                const e = R;
                if (!(!S || e == null)) {
                    const t = Date.now();
                    M(e).then(()=>{
                        const e = Date.now() - t;
                        L++;
                        if (L % C === 0) {
                            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [IDBFS] Periodic sync #",
                                " completed in ",
                                "ms"
                            ])), L, e);
                        }
                    }).catch((e)=>{
                        L++;
                        o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [IDBFS] Periodic sync #",
                            " failed: ",
                            ""
                        ])), L, e);
                    }).finally(()=>{
                        if (S) {
                            window.setTimeout(F, y);
                        }
                    });
                }
            });
        }
    }
    function O() {
        if (S && R != null) {
            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [IDBFS] page unload, skipping final sync (last periodic sync #",
                ")"
            ])), L);
        }
    }
    function B(e) {
        if (S) {
            o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [IDBFS] Periodic sync already running, skipping start"
            ])));
            return;
        }
        L = 0;
        S = true;
        R = e;
        o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [IDBFS] Starting periodic sync (target interval: ",
            "ms)"
        ])), y);
        F();
        if (typeof window !== "undefined") {
            window.addEventListener("beforeunload", O);
            E = function() {
                window.removeEventListener("beforeunload", O);
            };
        }
    }
    function W() {
        if (S) {
            o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [IDBFS] Stopping periodic sync after ",
                " syncs"
            ])), L);
            S = false;
            R = null;
            if (E != null) {
                E();
                E = null;
            }
        }
    }
    l.initPersistentFS = N;
    l.syncPersistentFS = M;
    l.getVoipPersistentDirectoryPath = A;
    l.startPeriodicVoipSync = B;
    l.stopPeriodicVoipSync = W;
}, 98);