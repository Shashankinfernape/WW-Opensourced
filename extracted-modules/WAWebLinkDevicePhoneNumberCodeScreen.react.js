__d("WAWebLinkDevicePhoneNumberCodeScreen.react", [
    "fbt",
    "WALogger",
    "WATimeUtils",
    "WAWebAltDeviceLinkingApi",
    "WAWebAltDeviceLinkingQpl",
    "WAWebAlternateDeviceLinkingLink.react",
    "WAWebClickableLink.react",
    "WAWebCmd",
    "WAWebFlex.react",
    "WAWebLinkDeviceAction",
    "WAWebLinkDeviceCodeView.react",
    "WAWebLinkDeviceCodeViewCodeType",
    "WAWebLinkDeviceEvents",
    "WAWebLinkDevicePhoneNumberCodeCells.react",
    "WAWebPhoneUtils",
    "WAWebSpinner.react",
    "WAWebUnstyledButton.react",
    "WDSIconIcRefresh.react",
    "WDSMargins.stylex",
    "WDSPaddings.stylex",
    "getErrorSafe",
    "nullthrows",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
    "useWAWebOnUnmount",
    "useWAWebStableCallback",
    "useWAWebTimeout"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    const f = _ || (_ = o("react"));
    const g = _;
    const { useEffect: h, useState: y } = g;
    const C = {
        marginInlineEnd10: {
            marginInlineEnd: "x1sa5p1d",
            $$css: true
        }
    };
    const b = 5;
    const v = "link-device-phone-number-code-screen-instructions";
    const S = {
        phoneCodeWarning: {
            backgroundColor: "x1c2u55m",
            color: "x10e1pyi",
            borderStartStartRadius: "x1rgw4pv",
            borderStartEndRadius: "x1vjm0to",
            borderEndEndRadius: "xnqoqkk",
            borderEndStartRadius: "x16lu3ki",
            height: "xng8ra",
            width: "xdzyupr",
            marginTop: "x1rdy4ex",
            $$css: true
        },
        phoneCodeWarningIcon: {
            color: "x10e1pyi",
            $$css: true
        },
        errorTitle: {
            lineHeight: "x1u7k74",
            $$css: true
        },
        errorAction: {
            fontWeight: "x1ny7uwr",
            fontSize: "x1f6kntn",
            $$css: true
        }
    };
    function R(t) {
        const n = o("react-compiler-runtime").c(53);
        const a = t.code;
        const i = y(0);
        const l = i[0];
        const p = i[1];
        const _ = y(true);
        const g = _[0];
        const C = _[1];
        const S = y(false);
        const R = S[0];
        const k = S[1];
        let I;
        let T;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            I = function() {
                C(false);
                o("WAWebCmd").Cmd.onInitialLoadReadyFromBridge();
            };
            T = [];
            n[0] = I;
            n[1] = T;
        } else {
            I = n[0];
            T = n[1];
        }
        h(I, T);
        const D = a == null || l > b;
        const x = y(false);
        const $ = x[0];
        const P = x[1];
        let N;
        if (n[2] !== l) {
            N = function(n) {
                let t;
                if (n != null && n.resetRefreshCount) {
                    t = 0;
                } else {
                    t = l + 1;
                }
                p(t);
                k(false);
                P(false);
                if (t <= b) {
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "alt pairing: regenerating link code..."
                    ])));
                    o("WAWebLinkDeviceAction").refreshAltLinkingCode();
                }
            };
            n[2] = l;
            n[3] = N;
        } else {
            N = n[3];
        }
        const M = r("useWAWebStableCallback")(N);
        let w;
        if (n[4] !== M) {
            w = function() {
                o("WAWebAltDeviceLinkingQpl").addPointToCurrentMarker("primary_hello_expire");
                M();
            };
            n[4] = M;
            n[5] = w;
        } else {
            w = n[5];
        }
        const A = o("useWAWebTimeout").useTimeout(w, 1 * o("WATimeUtils").MINUTE_MILLISECONDS);
        const F = A[0];
        const O = A[1];
        let B;
        if (n[6] !== F) {
            B = function() {
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "alt pairing: primary hello rcvd, 1min code regen timer"
                ])));
                F();
            };
            n[6] = F;
            n[7] = B;
        } else {
            B = n[7];
        }
        o("useWAWebListener").useListener(o("WAWebLinkDeviceEvents").WAWebLinkDeviceEvents, "link_device_events:primary_hello_received", B);
        let W;
        if (n[8] === Symbol.for("react.memo_cache_sentinel")) {
            W = function() {
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "alt pairing: force manual refresh received"
                ])));
                o("WAWebAltDeviceLinkingQpl").addPointToCurrentMarker("force_manual_refresh");
                k(true);
                o("WAWebAltDeviceLinkingApi").initializeAltDeviceLinking().catch(L);
            };
            n[8] = W;
        } else {
            W = n[8];
        }
        o("useWAWebListener").useListener(o("WAWebLinkDeviceEvents").WAWebLinkDeviceEvents, "link_device_events:force_manual_refresh", W);
        let q;
        if (n[9] !== M) {
            q = function() {
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "alt pairing: regen code, 6min TTL expired"
                ])));
                o("WAWebAltDeviceLinkingQpl").addPointToCurrentMarker("code_ttl_expire");
                M();
            };
            n[9] = M;
            n[10] = q;
        } else {
            q = n[10];
        }
        const U = o("useWAWebTimeout").useTimeout(q, 3.25 * o("WATimeUtils").MINUTE_MILLISECONDS);
        const V = U[0];
        const H = U[1];
        let G;
        let z;
        if (n[11] !== D || n[12] !== V) {
            G = function() {
                if (!D) {
                    V();
                }
            };
            z = [
                V,
                D
            ];
            n[11] = D;
            n[12] = V;
            n[13] = G;
            n[14] = z;
        } else {
            G = n[13];
            z = n[14];
        }
        h(G, z);
        let j;
        if (n[15] !== O || n[16] !== H) {
            j = function() {
                O();
                H();
            };
            n[15] = O;
            n[16] = H;
            n[17] = j;
        } else {
            j = n[17];
        }
        const K = r("useWAWebStableCallback")(j);
        let Q;
        let X;
        if (n[18] !== K || n[19] !== R || n[20] !== l) {
            Q = function() {
                if (l > b || R) {
                    K();
                    P(true);
                    return;
                }
            };
            X = [
                l,
                R,
                K
            ];
            n[18] = K;
            n[19] = R;
            n[20] = l;
            n[21] = Q;
            n[22] = X;
        } else {
            Q = n[21];
            X = n[22];
        }
        h(Q, X);
        let Y;
        if (n[23] !== K) {
            Y = function() {
                o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "alt pairing: canceling link code timers"
                ])));
                K();
            };
            n[23] = K;
            n[24] = Y;
        } else {
            Y = n[24];
        }
        r("useWAWebOnUnmount")(Y);
        let J;
        if (g || D) {
            let Z;
            if (n[25] === Symbol.for("react.memo_cache_sentinel")) {
                Z = <div className="x78zum5 x6s0dn4 xl56j7k x10wjd1d">{f.jsx(o("WAWebSpinner.react").Spinner, {})}</div>;
                n[25] = Z;
            } else {
                Z = n[25];
            }
            J = Z;
        } else if ($) {
            let ee;
            if (n[26] !== M) {
                ee = <E onClick={function() {
                    M({
                        resetRefreshCount: true
                    });
                }}/>;
                n[26] = M;
                n[27] = ee;
            } else {
                ee = n[27];
            }
            J = ee;
        } else {
            let te;
            if (n[28] !== t.code) {
                te = r("nullthrows")(t.code);
                n[28] = t.code;
                n[29] = te;
            } else {
                te = n[29];
            }
            let ne;
            if (n[30] !== te) {
                ne = f.jsx(r("WAWebLinkDevicePhoneNumberCodeCells.react"), {
                    code: te,
                    "aria-details": v
                });
                n[30] = te;
                n[31] = ne;
            } else {
                ne = n[31];
            }
            J = ne;
        }
        let re;
        if (n[32] !== t.phoneNumber) {
            re = o("WAWebPhoneUtils").formatPhone(t.phoneNumber);
            n[32] = t.phoneNumber;
            n[33] = re;
        } else {
            re = n[33];
        }
        const oe = re;
        const ae = t.apiCmd;
        let ie;
        if (n[34] === Symbol.for("react.memo_cache_sentinel")) {
            ie = s._("Enter code on phone");
            n[34] = ie;
        } else {
            ie = n[34];
        }
        let le;
        if (n[35] !== oe || n[36] !== t.onClickEditPhoneNumber) {
            let se;
            if (n[38] !== oe) {
                se = <span dir="ltr">{oe}</span>;
                n[38] = oe;
                n[39] = se;
            } else {
                se = n[39];
            }
            const Component = r("WAWebClickableLink.react");
            le = s._("Linking WhatsApp account {=m2} ({=m5})", [
                s._implicitParam("=m2", <strong>{s._("{phone-number}", [
                    s._param("phone-number", se)
                ])}</strong>),
                s._implicitParam("=m5", <Component className="x1v5yvga" onClick={t.onClickEditPhoneNumber} testid="link_device_phone_code_edit_number_link">{s._("edit")}</Component>)
            ]);
            n[35] = oe;
            n[36] = t.onClickEditPhoneNumber;
            n[37] = le;
        } else {
            le = n[37];
        }
        let ue;
        if (n[40] !== t.onClickLinkWithQr) {
            const Component = r("WAWebAlternateDeviceLinkingLink.react");
            ue = <Component codeType={o("WAWebLinkDeviceCodeViewCodeType").LinkDeviceCodeViewCodeType.PHONE_NUMBER_LINK_CODE} onClick={t.onClickLinkWithQr}/>;
            n[40] = t.onClickLinkWithQr;
            n[41] = ue;
        } else {
            ue = n[41];
        }
        let ce;
        if (n[42] !== D) {
            ce = ({
                0: {
                    className: "x1n2onr6 x78zum5 x1okw0bk x6s0dn4 xl56j7k"
                },
                1: {
                    className: "x1n2onr6 x78zum5 x1okw0bk x6s0dn4 xl56j7k x14atkfc"
                }
            })[!D << 0];
            n[42] = D;
            n[43] = ce;
        } else {
            ce = n[43];
        }
        let de;
        if (n[44] === Symbol.for("react.memo_cache_sentinel")) {
            de = s._("Enter code on phone:");
            n[44] = de;
        } else {
            de = n[44];
        }
        let me;
        if (n[45] !== J || n[46] !== ce) {
            me = <div {...babelHelpers.extends({}, ce, {
                dir: "ltr",
                "aria-live": "polite",
                "aria-atomic": "true",
                "aria-label": de,
                children: J
            })}/>;
            n[45] = J;
            n[46] = ce;
            n[47] = me;
        } else {
            me = n[47];
        }
        let pe;
        if (n[48] !== t.apiCmd || n[49] !== le || n[50] !== ue || n[51] !== me) {
            const Component = o("WAWebLinkDeviceCodeView.react").LinkDeviceCodeView;
            pe = <Component codeType={o("WAWebLinkDeviceCodeViewCodeType").LinkDeviceCodeViewCodeType.PHONE_NUMBER_LINK_CODE} apiCmd={ae} title={ie} subtitle={le} alternativeLinkDeviceMethodHint={ue}>{me}</Component>;
            n[48] = t.apiCmd;
            n[49] = le;
            n[50] = ue;
            n[51] = me;
            n[52] = pe;
        } else {
            pe = n[52];
        }
        return pe;
    }
    function L(e) {
        o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
            "alt pairing: initialize alt linking failed"
        ]))).catching(r("getErrorSafe")(e)).sendLogs("alt-pairing-init-failed");
    }
    function E(e) {
        const t = o("react-compiler-runtime").c(6);
        let n;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            n = [
                S.phoneCodeWarning,
                o("WDSMargins.stylex").wdsMargins.marginHorAuto,
                o("WDSPaddings.stylex").wdsPaddings.paddingHor20
            ];
            t[0] = n;
        } else {
            n = t[0];
        }
        let a;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebFlex.react").FlexItem;
            a = <Component align="center" xstyle={C.marginInlineEnd10}>{f.jsx(r("WDSIconIcRefresh.react"), {
                testid: "refresh-large",
                width: 32,
                height: 32,
                iconXstyle: S.phoneCodeWarningIcon
            })}</Component>;
            t[1] = a;
        } else {
            a = t[1];
        }
        let i;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebFlex.react").FlexItem;
            i = <Component xstyle={S.errorTitle}>{s._("Code expired")}</Component>;
            t[2] = i;
        } else {
            i = t[2];
        }
        let l;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebFlex.react").FlexItem;
            const Component_1 = o("WAWebFlex.react").FlexColumn;
            const Component_2 = o("WAWebFlex.react").FlexRow;
            l = <Component_2>{a}<Component_1 align="start" justify="start">{i}<Component xstyle={S.errorAction}>{s._("Click to generate new code")}</Component></Component_1></Component_2>;
            t[3] = l;
        } else {
            l = t[3];
        }
        let u;
        if (t[4] !== e.onClick) {
            const Component = r("WAWebUnstyledButton.react");
            u = <Component key="expiry" testid="link_device_phone_code_expired_refresh_button" xstyle={n} onClick={e.onClick}>{l}</Component>;
            t[4] = e.onClick;
            t[5] = u;
        } else {
            u = t[5];
        }
        return u;
    }
    l.default = R;
}, 226);