__d("useWAWebVoipIsCallingEnabledAndInited", [
    "WALogger",
    "WAWebCmd",
    "WAWebVoipBackendLoadable",
    "WAWebVoipBootInitDecision",
    "WAWebVoipGatingUtils",
    "WAWebVoipInitEventEmitter",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
    "react-compiler-runtime",
    "useWAWebEventTargetValue",
    "useWAWebListener",
    "useWAWebStableCallback"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const useEffect = (s || (s = o("react"))).useEffect;
    function useC() {
        const e = o("react-compiler-runtime").c(9);
        const t = r("useWAWebEventTargetValue")(o("WAWebCmd").Cmd, "on_ab_props_update_from_bridge", y);
        const n = r("useWAWebStableCallback")(g);
        const a = r("useWAWebStableCallback")(_);
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "on_ab_props_update_from_bridge", n);
        const inited = r("useWAWebEventTargetValue")(o("WAWebVoipInitEventEmitter").VoipInitEventEmitter, "voipInitSuccess", p);
        const initErrored = r("useWAWebEventTargetValue")(o("WAWebVoipInitEventEmitter").VoipInitEventEmitter, "voipInitFailure", m);
        let s;
        let c;
        if (e[0] !== initErrored || e[1] !== a) {
            s = function() {
                if (initErrored) {
                    a().catch(d);
                }
            };
            c = [
                initErrored,
                a
            ];
            e[0] = initErrored;
            e[1] = a;
            e[2] = s;
            e[3] = c;
        } else {
            s = e[2];
            c = e[3];
        }
        useEffect(s, c);
        const available = inited || t;
        let enabled;
        if (e[4] === Symbol.for("react.memo_cache_sentinel")) {
            enabled = o("WAWebVoipGatingUtils").isCallingEnabled();
            e[4] = enabled;
        } else {
            enabled = e[4];
        }
        let C;
        if (e[5] !== initErrored || e[6] !== inited || e[7] !== available) {
            C = {
                available,
                enabled,
                inited,
                initErrored
            };
            e[5] = initErrored;
            e[6] = inited;
            e[7] = available;
            e[8] = C;
        } else {
            C = e[8];
        }
        return C;
    }
    function d(t) {
        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "voip: failed to retry init from call entry state"
        ]))).catching(r("getErrorSafe")(t)).sendLogs("voip: retry-init-from-call-entry-state-failed");
    }
    function m() {
        return o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getDidVoipInitError();
    }
    function p() {
        return o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInited();
    }
    function _() {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (o("WAWebVoipGatingUtils").isVoipDownloadEnabled() && !document.hidden && !o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInited() && o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getDidVoipInitError()) {
                const e = yield o("WAWebVoipBackendLoadable").requireVoipJsBackend();
                const t = e.WAWebVoipInit;
                yield t.retryWAWebVoipInitAfterFailure();
            }
        });
        return f.apply(this, arguments);
    }
    function g() {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (!o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInited()) {
                yield o("WAWebVoipBackendLoadable").initializeVoipFromBootGate("ab_prop_update");
            }
        });
        return h.apply(this, arguments);
    }
    function y() {
        return o("WAWebVoipGatingUtils").isVoipDownloadEnabled() && o("WAWebVoipBootInitDecision").isDeferredVoipBootInitEnabled();
    }
    l.useWAWebVoipIsCallingEnabledAndInited = useC;
}, 98);