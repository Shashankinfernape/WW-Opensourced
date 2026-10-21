__d("WAWebVoipDtlsCertAcquire", [
    "WAWebCoreActionsODS",
    "WAWebVoipDtlsCertCache",
    "WAWebVoipDtlsCertCacheMode",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        const t = o("WAWebVoipDtlsCertCache").getActiveDtlsCertCallToken();
        if (t == null) {
            c("fresh_no_arm", e);
            return o("WAWebVoipDtlsCertCache").generateDtlsCert();
        }
        const n = o("WAWebVoipDtlsCertCache").getDtlsCertCallMode(t);
        if (n === o("WAWebVoipDtlsCertCacheMode").DtlsCertCacheMode.OFF) {
            c("fresh_no_arm", e);
            return o("WAWebVoipDtlsCertCache").generateDtlsCert();
        }
        return s(e, t, n);
    }
    function s(e, t, n) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const r = f(e) && o("WAWebVoipDtlsCertCache").claimDtlsCertSeed(t);
            const a = g(e, r);
            let i = "fresh_path_off";
            if (o("WAWebVoipDtlsCertCacheMode").isCertReuseEnabledForPath(n, a)) {
                const l = o("WAWebVoipDtlsCertCache").getDtlsCertCacheState(t);
                if (!_(l, n)) {
                    i = "fresh_unseeded";
                } else if (o("WAWebVoipDtlsCertCache").isDtlsCertCallLive(t)) {
                    c(p(l), e);
                    try {
                        return yield o("WAWebVoipDtlsCertCache").getOrCreateDtlsCert(t);
                    } catch (n) {
                        c("fresh_after_failure", e);
                        return d(t, r);
                    }
                } else {
                    i = "fresh_call_ending";
                }
            }
            c(i, e);
            return d(t, r);
        });
        return u.apply(this, arguments);
    }
    function c(e, t) {
        o("WAWebCoreActionsODS").logCallSctpDtlsCertSource(e);
    }
    function d(e, t) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            try {
                const n = yield o("WAWebVoipDtlsCertCache").generateDtlsCert();
                if (t) {
                    o("WAWebVoipDtlsCertCache").storeDtlsCert(e, n);
                }
                return n;
            } catch (error) {
                if (t) {
                    o("WAWebVoipDtlsCertCache").releaseDtlsCertSeed(e);
                }
                throw error;
            }
        });
        return m.apply(this, arguments);
    }
    function p(e) {
        switch(e){
            case "empty":
                return "generated_shared";
            case "pending":
                return "inflight_reuse";
            case "ready":
                return "ready_reuse";
            default:
                return (()=>{
                    throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
                })();
        }
    }
    function _(e, t) {
        return e !== "empty" || o("WAWebVoipDtlsCertCacheMode").canGenerateSharedCert(t);
    }
    function f(e) {
        return e === "initial";
    }
    function g(e, t) {
        switch(e){
            case "initial":
                if (t) {
                    return "initial_seed";
                }
                return "initial_other";
            case "mid_call_relay_update":
                return "mid_call_relay_update";
            case "same_path_reconnect":
                return "same_path_reconnect";
            case "ice_restart":
                return "ice_restart";
            default:
                return (()=>{
                    throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
                })();
        }
    }
    l.acquireDtlsCert = e;
}, 98);