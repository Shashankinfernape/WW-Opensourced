__d("WAWebVoipConverterPrewarm", [
    "Promise",
    "WALogger",
    "WAWebNoop",
    "WAWebVoipGpuDeviceLiveness",
    "WAWebVoipPerfOptimizations",
    "asyncToGeneratorRuntime",
    "requireDeferred"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    const _ = r("requireDeferred")("WAWebVoipVideoCaptureWebGPU").__setRef("WAWebVoipConverterPrewarm");
    let f = null;
    let g = null;
    let h = 0;
    let y = 0;
    const timeoutMs = 5000;
    function b(e, t) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, a) {
            if (o("WAWebVoipPerfOptimizations").isPerfOptimizationEnabled(o("WAWebVoipPerfOptimizations").PerfOptimizationFlag.CONVERTER_PREWARM)) {
                if (f != null) {
                    if (h === t && y === a) {
                        return;
                    }
                    yield L();
                }
                if (g == null) {
                    const i = Date.now();
                    let l = r("WAWebNoop");
                    const s = {
                        abandoned: false,
                        promise: new (p || (p = n("Promise")))(function(e) {
                            l = e;
                        })
                    };
                    g = s;
                    try {
                        const u = yield _.load();
                        const c = u.WebGPUVideoConverter;
                        const d = yield c.create(t, a);
                        if (s.abandoned || g !== s) {
                            d.onDeviceLost = null;
                            (p || (p = n("Promise"))).resolve(d.cleanup()).catch(r("WAWebNoop"));
                            return;
                        }
                        f = d;
                        h = t;
                        y = a;
                        d.onDeviceLost = function() {
                            if (f === d) {
                                f = null;
                                h = 0;
                                y = 0;
                            }
                        };
                        const m = Date.now() - i;
                        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [ConverterPrewarm] Converter pre-warmed in ",
                            "ms for ",
                            "x",
                            ""
                        ])), m, t, a);
                    } catch (e) {} finally{
                        l();
                        if (g === s) {
                            g = null;
                        }
                    }
                }
            }
        });
        return v.apply(this, arguments);
    }
    function S(e, t) {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = g;
            if (n != null) {
                const r = Date.now();
                try {
                    yield o("WAWebVoipGpuDeviceLiveness").withDeviceLiveness(n.promise, {
                        label: "ConverterPrewarm wait",
                        timeoutMs
                    });
                } catch (error) {
                    n.abandoned = true;
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [ConverterPrewarm] pre-warm wait bailed: ",
                        ""
                    ])), String(error));
                    return null;
                }
            }
            const a = f;
            if (a == null) {
                return null;
            }
            if (a.isAlive?.() === false) {
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [ConverterPrewarm] discarding pre-warmed converter, device not alive"
                ])));
                k();
                return null;
            }
            if (h !== e || y !== t) {
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [ConverterPrewarm] res mismatch: ",
                    "x",
                    " vs ",
                    "x",
                    ""
                ])), h, y, e, t);
                yield L();
                return null;
            }
            a.onDeviceLost = null;
            f = null;
            h = 0;
            y = 0;
            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [ConverterPrewarm] Consumed pre-warmed converter for ",
                "x",
                ""
            ])), e, t);
            return a;
        });
        return R.apply(this, arguments);
    }
    function L() {
        return E.apply(this, arguments);
    }
    function E() {
        E = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = g;
            if (e != null) {
                yield e.promise;
            }
            if (f != null) {
                try {
                    yield f.cleanup();
                } catch (error) {
                    o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [ConverterPrewarm] Error during cleanup: ",
                        ""
                    ])), String(error));
                }
                f = null;
                h = 0;
                y = 0;
            }
        });
        return E.apply(this, arguments);
    }
    function k() {
        const e = f;
        f = null;
        h = 0;
        y = 0;
        if (e != null) {
            e.onDeviceLost = null;
            (p || (p = n("Promise"))).resolve(e.cleanup()).catch(r("WAWebNoop"));
        }
    }
    l.prewarmConverter = b;
    l.consumePrewarmedConverter = S;
    l.cleanupPrewarmedConverter = L;
}, 98);