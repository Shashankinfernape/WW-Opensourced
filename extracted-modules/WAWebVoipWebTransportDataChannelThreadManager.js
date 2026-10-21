__d("WAWebVoipWebTransportDataChannelThreadManager", [
    "Promise",
    "WACustomError",
    "WALogger",
    "WAWebCoreActionsODS",
    "WAWebNoop",
    "WAWebVoipPthreadHardening",
    "WAWebVoipWebTransportDataChannelThread",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    let m = null;
    let p = null;
    let _ = 0;
    function f() {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = p;
            if (e != null) {
                if (e.isActive()) {
                    return true;
                }
                p = null;
                m = null;
                _++;
                yield b(e);
            }
            let t = m;
            if (t == null) {
                const r = _;
                t = (d || (d = n("Promise"))).resolve().then(()=>h(r));
                m = t;
            }
            const o = yield t;
            if (o == null || !o.isActive()) {
                if (m === t) {
                    m = null;
                }
                return false;
            }
            return true;
        });
        return g.apply(this, arguments);
    }
    function h(e) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportThread] Creating dedicated WebTransport pthread"
            ])));
            let n;
            try {
                n = yield r("WAWebVoipWebTransportDataChannelThread").create();
            } catch (error) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WebTransportThread] Failed to create pthread"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("webtransport-pthread-create-failed");
                if (t === _) {
                    m = null;
                }
                return null;
            }
            if (t !== _ || !n.isActive()) {
                if (o("WAWebVoipPthreadHardening").isVoipWorkerLifecycleHardeningEnabled()) {
                    b(n);
                } else {
                    yield b(n);
                }
                return null;
            }
            p = n;
            return n;
        });
        return y.apply(this, arguments);
    }
    function C() {
        if (p != null && p.isActive()) {
            return p;
        }
        return null;
    }
    function b(e) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            e.registerStateHandler(r("WAWebNoop"));
            try {
                yield e.shutdown();
            } catch (error) {
                if (error instanceof o("WACustomError").TimeoutError) {
                    o("WAWebCoreActionsODS").logCallWebtransportJsWorkerJoinTimeout();
                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [WebTransportThread] pthread join timed out: ",
                        ""
                    ])), String(error));
                    return;
                }
                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WebTransportThread] Failed to shut down pthread"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("webtransport-pthread-shutdown-failed");
            }
        });
        return v.apply(this, arguments);
    }
    function S() {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            _++;
            m = null;
            const e = p;
            p = null;
            if (e != null) {
                yield b(e);
            }
        });
        return R.apply(this, arguments);
    }
    l.initWebTransportDataChannelWorker = f;
    l.getWebTransportDataChannelThread = C;
    l.stopWebTransportDataChannelWorker = S;
}, 98);