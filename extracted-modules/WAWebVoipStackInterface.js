__d("WAWebVoipStackInterface", [
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebABPropsCache",
    "WAWebEnvironment",
    "WAWebLazyLoadedRetriable",
    "WAWebVoipGatingUtils",
    "WAWebVoipInitEventEmitter",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    const d = "WAWebVoipStackInterfaceImpl";
    const m = 30000;
    let p = null;
    let _;
    let f = null;
    let g = "WAWebVoipStackInterfaceImpl";
    let h = "wa_web_voip_stack_interface";
    function y() {
        if (f == null) {
            f = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (!r("WAWebEnvironment").isWindows || (yield o("WAWebABPropsCache").waitForABPropConfigsReady(), o("WAWebVoipGatingUtils").isWinHybridPlusEnabled())) {
                    return false;
                }
                return o("WAWebABProps").getABPropConfigValue("web_voip_runtime_stack_selection_enabled") === true;
            })();
        }
        return f;
    }
    function C() {
        return g;
    }
    function b() {
        return h;
    }
    function v() {
        if (_ == null) {
            _ = r("JSResourceForInteraction")("WAWebVoipStackInterfaceLoadTelemetry").__setRef("WAWebVoipStackInterface").load().catch((e)=>{
                _ = null;
                throw e;
            });
        }
        return _;
    }
    function S(t) {
        v().then(t).catch((t)=>{
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: stack interface load telemetry failed"
            ]))).catching(r("getErrorSafe")(t));
        });
    }
    function R() {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: getVoipStackInterface awaiting lazy bundle"
            ])));
            const e = yield y();
            g = e ? "WAWebVoipStackInterfaceWindows" : "WAWebVoipStackInterfaceImpl";
            h = e ? "wa_web_voip_stack_interface_windows" : "wa_web_voip_stack_interface";
            const t = e ? r("JSResourceForInteraction")("WAWebVoipStackInterfaceWindows").__setRef("WAWebVoipStackInterface").load() : r("JSResourceForInteraction")("WAWebVoipStackInterfaceImpl").__setRef("WAWebVoipStackInterface").load();
            let a = null;
            const i = new (c || (c = n("Promise")))(function(e, t) {
                a = self.setTimeout(function() {
                    a = null;
                    t(r("err")("voip stack interface load timed out"));
                }, m);
            });
            try {
                return yield (c || (c = n("Promise"))).race([
                    t,
                    i
                ]);
            } finally{
                if (a != null) {
                    self.clearTimeout(a);
                }
            }
        });
        return L.apply(this, arguments);
    }
    const E = r("WAWebLazyLoadedRetriable")(R, d, {
        onAttemptFailure: function() {
            S(function(e) {
                e.logVoipStackInterfaceLoadAttemptFailure();
            });
        },
        onFinalFailure: function(t, n) {
            S(function(e) {
                e.logVoipStackInterfaceLoadRetryExhausted();
            });
            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: stack load failed comp=",
                " mod=",
                " res=",
                " attempts=",
                ""
            ])), d, C(), b(), n).catching(t).sendLogs("voip-stack-interface-lazy-load-failed");
        },
        onRetrySuccess: function() {
            S(function(e) {
                e.logVoipStackInterfaceLoadRetrySuccess();
            });
        }
    });
    function k() {
        return I.apply(this, arguments);
    }
    function I() {
        I = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (o("WAWebVoipGatingUtils").isVoipDownloadEnabled()) {
                yield R();
            }
        });
        return I.apply(this, arguments);
    }
    function T() {
        return D.apply(this, arguments);
    }
    function D() {
        D = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (!o("WAWebVoipGatingUtils").isVoipDownloadEnabled()) {
                return null;
            }
            const e = yield E();
            const { createWAWebVoipStackInterface: t, getVoipStackInterfaceImpl: n } = e;
            if (n != null) {
                p = n();
                x(p);
                return p;
            }
            if (t == null) {
                throw r("err")("voip stack interface module has no factory");
            }
            if (p == null) {
                p = t();
            }
            return p;
        });
        return D.apply(this, arguments);
    }
    function x(e) {
        if (e.type === "web") {
            o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.markVoipWebStackCreated(Date.now());
        }
    }
    function $() {
        return p;
    }
    l.prefetchVoipStackInterfaceModule = k;
    l.getVoipStackInterface = T;
    l.getCachedVoipStackInterface = $;
}, 98);