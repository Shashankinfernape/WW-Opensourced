__d("useWAWebSmsRegistration", [
    "WAIsoToCc",
    "WAWebPhoneNumberCaptureValidation",
    "WAWebSmsRegistrationSendSmsCall",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "requireDeferred",
    "useWAWebTimeout",
    "useWAWebUnmountSignal"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const { useCallback: u, useState: c } = s;
    const d = r("requireDeferred")("WAWebLinkDeviceQplHelpLinkEvent").__setRef("useWAWebSmsRegistration");
    function m(e, t) {
        if (t !== true) {
            d.load().then(({ WAWebLinkDeviceQplHelpLinkEvent: n, WebcPairingScreenLinkType: r })=>{
                n(e == null ? r.REG_PN_SCREEN_CONTINUE_CLICKED : r.REG_WACOM_PN_SCREEN_CONTINUE_CLICKED);
            });
        }
    }
    function p(e) {
        const t = e?.retry_after;
        if (e?.status === o("WAWebSmsRegistrationSendSmsCall").WhatsappGrowthInvites_SignUpViaWebResponseStatus.ERROR && t != null && t > 0) {
            return t * 1000;
        }
        return null;
    }
    function _() {
        const e = o("react-compiler-runtime").c(16);
        const t = c(false);
        const a = t[0];
        const i = t[1];
        const l = c(false);
        const s = l[0];
        const u = l[1];
        const d = c();
        const _ = d[0];
        const f = d[1];
        const g = c("");
        const h = g[0];
        const y = g[1];
        const C = c("");
        const b = C[0];
        const v = C[1];
        const S = r("useWAWebUnmountSignal")();
        let R;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            R = function() {
                return u(false);
            };
            e[0] = R;
        } else {
            R = e[0];
        }
        const L = o("useWAWebTimeout").useManualTimeout(R);
        const E = L[0];
        let k;
        if (e[1] !== E) {
            k = function(t) {
                const e = p(t);
                if (e != null) {
                    u(true);
                    E(e);
                }
                f(t);
            };
            e[1] = E;
            e[2] = k;
        } else {
            k = e[2];
        }
        const I = k;
        let T;
        if (e[3] !== s || e[4] !== I || e[5] !== a || e[6] !== S) {
            T = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, l) {
                    if (!(a || s || !r("WAWebPhoneNumberCaptureValidation")(e, t))) {
                        m(n, l?.skipContinueQpl);
                        i(true);
                        y(e);
                        v(t);
                        const c = (r("WAIsoToCc")[e] ?? "") + t;
                        const d = yield o("WAWebSmsRegistrationSendSmsCall").sendSmsCall(c);
                        if (!S.aborted) {
                            I(d);
                            i(false);
                        }
                    }
                });
                return function(n, r, o, a) {
                    return e.apply(this, arguments);
                };
            })();
            e[3] = s;
            e[4] = I;
            e[5] = a;
            e[6] = S;
            e[7] = T;
        } else {
            T = e[7];
        }
        const D = T;
        let x;
        if (e[8] === Symbol.for("react.memo_cache_sentinel")) {
            x = function() {
                f(null);
                y("");
                v("");
            };
            e[8] = x;
        } else {
            x = e[8];
        }
        const $ = x;
        let P;
        if (e[9] !== s || e[10] !== h || e[11] !== b || e[12] !== a || e[13] !== D || e[14] !== _) {
            P = {
                blockRetry: s,
                lastCountryId: h,
                lastPhoneNumber: b,
                loading: a,
                reset: $,
                sendSms: D,
                serverResponse: _
            };
            e[9] = s;
            e[10] = h;
            e[11] = b;
            e[12] = a;
            e[13] = D;
            e[14] = _;
            e[15] = P;
        } else {
            P = e[15];
        }
        return P;
    }
    l.default = _;
}, 98);