__d("WAWebVoipSctpDataChannelThreadManager", [
    "WALogger",
    "WAWebABProps",
    "WAWebVoipGatingUtils",
    "WAWebVoipSctpDataChannelThread",
    "asyncToGeneratorRuntime",
    "justknobx"
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
    let h;
    let y;
    let C;
    let b;
    let v = null;
    let S = null;
    let R = null;
    function L() {
        if (R != null) {
            return R;
        }
        let t = null;
        try {
            t = new RTCPeerConnection;
            const ch = t.createDataChannel("__transfer_probe__", {
                negotiated: true,
                id: 0
            });
            const r = new MessageChannel;
            r.port1.postMessage({
                ch
            }, [
                ch
            ]);
            r.port1.close();
            r.port2.close();
            R = true;
        } catch (e) {
            R = false;
        } finally{
            t?.close();
        }
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [DCThread] RTCDataChannel transfer supported: ",
            ""
        ])), String(R));
        return R === true;
    }
    function E(e) {
        return k.apply(this, arguments);
    }
    function k() {
        k = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebABProps").getABPropConfigValue("enable_web_voip_proxy_and_sctp_workers");
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [DCThread] init shouldEnable=",
                ""
            ])), String(t));
            if (!t) {
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [DCThread] disabled by ABProp, skip"
                ])));
                return false;
            }
            if (!L()) {
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [DCThread] no RTCDataChannel transfer support, skip"
                ])));
                return false;
            }
            if (S != null && S.isActive()) {
                o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [DCThread] thread already active, reuse"
                ])));
                return true;
            }
            if (v != null) {
                o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [DCThread] Awaiting existing pthread creation promise"
                ])));
                try {
                    S = yield v;
                    o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [DCThread] Existing promise resolved, thread active: ",
                        ""
                    ])), String(S?.isActive() ?? false));
                    return S != null && S.isActive();
                } catch (error) {
                    o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [DCThread] Existing promise rejected: ",
                        ""
                    ])), String(error));
                    return false;
                }
            }
            o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [DCThread] init WASM pthread for RTCDataChannel I/O"
            ])));
            v = r("WAWebVoipSctpDataChannelThread").create();
            try {
                S = yield v;
                S?.setRemoveRelayPortOverride(o("WAWebVoipGatingUtils").shouldUseOriginalRelayPort());
                S?.setSctpTimeoutMs(e());
                S?.setRelayParkedTxIdleMs(I());
                o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [DCThread] WASM pthread created successfully"
                ])));
                S?.ping();
                return true;
            } catch (error) {
                o("WALogger").ERROR(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [DCThread] Failed to create WASM pthread: ",
                    ""
                ])), error);
                v = null;
                return false;
            }
        });
        return k.apply(this, arguments);
    }
    function I() {
        try {
            return r("justknobx")._("1307") || 0;
        } catch (error) {
            o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [DCThread] relay parked TX idle JK unavailable, using fallback=6000: ",
                ""
            ])), String(error));
            return 6000;
        }
    }
    function T() {
        return S != null && S.isActive();
    }
    function D() {
        if (S != null && S.isActive()) {
            return S;
        }
        return null;
    }
    function x() {
        return $.apply(this, arguments);
    }
    function $() {
        $ = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            v = null;
            if (S == null || !S.isActive()) {
                S = null;
                return;
            }
            o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [DCThread] Shutting down WASM pthread"
            ])));
            const e = S;
            S = null;
            yield e.shutdown();
            o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [DCThread] WASM pthread shutdown complete"
            ])));
        });
        return $.apply(this, arguments);
    }
    l.initDataChannelWorker = E;
    l.isDataChannelThreadActive = T;
    l.getDataChannelThread = D;
    l.stopDataChannelWorker = x;
}, 98);