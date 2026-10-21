__d("WAWebVoipDtlsCertCache", [
    "Promise",
    "WAWebVoipCallStateUtils",
    "WAWebVoipDtlsCertCacheMode",
    "WAWebVoipLocalCallStateStore",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, `DTLS cert requested for a call that is no longer active: ${t}`) || this;
            n.name = "StaleDtlsCertCallError";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(babelHelpers.wrapNativeSuper(Error));
    let u = null;
    let OFF = o("WAWebVoipDtlsCertCacheMode").DtlsCertCacheMode.OFF;
    let d = null;
    let m = false;
    let p = false;
    function _(e, t) {
        if (e !== u) {
            u = e;
            OFF = t;
            d = null;
            m = false;
            p = false;
        }
    }
    function f(e) {
        if (e === u) {
            u = null;
            OFF = o("WAWebVoipDtlsCertCacheMode").DtlsCertCacheMode.OFF;
            d = null;
            m = false;
            p = false;
        }
    }
    function g() {
        return u;
    }
    function h(e) {
        if (e === u) {
            return OFF;
        }
        return o("WAWebVoipDtlsCertCacheMode").DtlsCertCacheMode.OFF;
    }
    function y(e) {
        return e === u && !o("WAWebVoipCallStateUtils").isCallTerminal(o("WAWebVoipLocalCallStateStore").getLocalCallState());
    }
    function C(e) {
        return e === u;
    }
    function b(e) {
        if (e !== u || p) {
            return false;
        }
        p = true;
        return true;
    }
    function v(e) {
        if (e === u && d == null) {
            p = false;
        }
    }
    function S() {
        return RTCPeerConnection.generateCertificate({
            name: "ECDSA",
            namedCurve: "P-256"
        });
    }
    function R(t, r) {
        if (!(t !== u || d != null)) {
            d = (e || (e = n("Promise"))).resolve(r);
            m = true;
        }
    }
    function L(e) {
        if (e !== u || d == null) {
            return "empty";
        }
        if (m) {
            return "ready";
        }
        return "pending";
    }
    function E(e) {
        return k.apply(this, arguments);
    }
    function k() {
        k = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e !== u) {
                throw new s("cache");
            }
            if (d == null) {
                var t = S().then((n)=>{
                    if (e === u && d === t) {
                        m = true;
                    }
                    return n;
                }).catch((n)=>{
                    if (e === u && d === t) {
                        d = null;
                        m = false;
                    }
                    throw n;
                });
                d = t;
            }
            return d;
        });
        return k.apply(this, arguments);
    }
    l.StaleDtlsCertCallError = s;
    l.beginDtlsCertCall = _;
    l.endDtlsCertCall = f;
    l.getActiveDtlsCertCallToken = g;
    l.getDtlsCertCallMode = h;
    l.isDtlsCertCallLive = y;
    l.isDtlsCertCallRegistered = C;
    l.claimDtlsCertSeed = b;
    l.releaseDtlsCertSeed = v;
    l.generateDtlsCert = S;
    l.storeDtlsCert = R;
    l.getDtlsCertCacheState = L;
    l.getOrCreateDtlsCert = E;
}, 98);