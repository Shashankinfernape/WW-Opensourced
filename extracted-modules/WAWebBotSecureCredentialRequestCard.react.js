__d("WAWebBotSecureCredentialRequestCard.react", [
    "fbt",
    "JSResourceForInteraction",
    "WALogger",
    "WAWebBoolFunc",
    "WAWebBotSecureCredentialRequestUtils",
    "WAWebHatchLogging",
    "WAWebURLUtils",
    "WDSButton.react",
    "WDSIconIcShieldLock.react",
    "WDSText.react",
    "getErrorSafe",
    "isStringNotNullAndNotWhitespaceOnly",
    "react",
    "react-compiler-runtime",
    "useWAWebAsync",
    "useWAWebIsHatchChannelConnected",
    "useWAWebOnUnmount"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    let u;
    const c = [
        "metaSlot"
    ];
    let d;
    const m = d || (d = o("react"));
    const p = d;
    const { useEffect, useRef, useState } = p;
    const h = 40;
    const y = 24;
    const C = 257;
    const b = 48;
    const v = r("JSResourceForInteraction")("WAWebOpenHatchSecureCredentialAddDialog").__setRef("WAWebBotSecureCredentialRequestCard.react");
    const S = r("JSResourceForInteraction")("WAWebHatchSecureCredentialsVault").__setRef("WAWebBotSecureCredentialRequestCard.react");
    const R = new Set;
    function LComponent(e) {
        const t = o("react-compiler-runtime").c(31);
        let n;
        let a;
        if (t[0] !== e) {
            n = e.metaSlot;
            a = babelHelpers.objectWithoutPropertiesLoose(e, c);
            t[0] = e;
            t[1] = n;
            t[2] = a;
        } else {
            n = t[1];
            a = t[2];
        }
        const i = a;
        const { fields, host, pageUrl, requestId, subtitle, title } = i;
        let f;
        if (t[3] !== fields) {
            f = o("WAWebBotSecureCredentialRequestUtils").isLoginRequest(fields);
            t[3] = fields;
            t[4] = f;
        } else {
            f = t[4];
        }
        const g = f;
        useE(requestId);
        const h = useK(host, pageUrl, requestId, g);
        const { addLogin, isAdded, isReading, isRechecking } = h;
        let R;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            R = {
                className: "x78zum5 xdt5ytf x1vjgo2v"
            };
            t[5] = R;
        } else {
            R = t[5];
        }
        let L;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
            L = {
                className: "x6s0dn4 x4wrhlh xyi3aci xwf5gio x1p453bz x1suzm8a x1aj3ljl x78zum5 x1q0g3np x4tpdpg x1xrf6ya xde1mab xscbp6u x1iw51ew"
            };
            t[6] = L;
        } else {
            L = t[6];
        }
        let I;
        if (t[7] === Symbol.for("react.memo_cache_sentinel")) {
            I = {
                className: "x6s0dn4 x1k43qru xt8t1vi x1xc408v x129tdwq x15urzxu x14ug900 x78zum5 x2lah0s x1vqgdyp xl56j7k x100vrsf"
            };
            t[7] = I;
        } else {
            I = t[7];
        }
        let D;
        let x;
        if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
            D = <div {...babelHelpers.extends({}, I, {
                "data-testid": "bot_ur_secure_credential_request_card_icon",
                children: m.jsx(r("WDSIconIcShieldLock.react"), {
                    height: y,
                    width: y
                })
            })}/>;
            x = {
                className: "x78zum5 xdt5ytf x1iyjqo2 xeuugli x1b73lln"
            };
            t[8] = D;
            t[9] = x;
        } else {
            D = t[8];
            x = t[9];
        }
        let $;
        if (t[10] !== title) {
            const Component = r("WDSText.react");
            $ = <Component colorName="contentDefault" maxLines={1} testid="bot_ur_secure_credential_request_card_title" type="Body1Emphasized">{title}</Component>;
            t[10] = title;
            t[11] = $;
        } else {
            $ = t[11];
        }
        let P;
        if (t[12] !== subtitle) {
            const Component = r("WDSText.react");
            P = typeof subtitle === "string" && r("isStringNotNullAndNotWhitespaceOnly")(subtitle) && <Component colorName="contentDeemphasized" maxLines={2} testid="bot_ur_secure_credential_request_card_subtitle" type="Body2">{subtitle}</Component>;
            t[12] = subtitle;
            t[13] = P;
        } else {
            P = t[13];
        }
        let N;
        if (t[14] !== $ || t[15] !== P) {
            N = <div {...babelHelpers.extends({}, x, {
                "data-testid": "bot_ur_secure_credential_request_card_text",
                children: [
                    $,
                    P
                ]
            })}/>;
            t[14] = $;
            t[15] = P;
            t[16] = N;
        } else {
            N = t[16];
        }
        let M;
        if (t[17] !== n) {
            M = n != null && <div className="xpvyfi4 x2lah0s" data-testid="bot_ur_secure_credential_request_card_meta">{n}</div>;
            t[17] = n;
            t[18] = M;
        } else {
            M = t[18];
        }
        let w;
        if (t[19] !== M || t[20] !== N) {
            w = <div {...babelHelpers.extends({}, L, {
                "data-testid": "bot_ur_secure_credential_request_card_info",
                children: [
                    D,
                    N,
                    M
                ]
            })}/>;
            t[19] = M;
            t[20] = N;
            t[21] = w;
        } else {
            w = t[21];
        }
        let A;
        if (t[22] !== addLogin || t[23] !== g || t[24] !== isAdded || t[25] !== isReading || t[26] !== isRechecking) {
            const Component = r("WDSButton.react");
            A = g && <div className="x6s0dn4 x78zum5 xl56j7k x1wxaq2x" data-testid="bot_ur_secure_credential_request_card_action"><Component disabled={isAdded} label={T(isAdded)} loading={isReading || isRechecking} onPress={addLogin} testid="bot_ur_secure_credential_request_card_enter" variant="borderless"/></div>;
            t[22] = addLogin;
            t[23] = g;
            t[24] = isAdded;
            t[25] = isReading;
            t[26] = isRechecking;
            t[27] = A;
        } else {
            A = t[27];
        }
        let F;
        if (t[28] !== w || t[29] !== A) {
            F = <div {...babelHelpers.extends({}, R, {
                "data-testid": "bot_ur_secure_credential_request_card",
                children: [
                    w,
                    A
                ]
            })}/>;
            t[28] = w;
            t[29] = A;
            t[30] = F;
        } else {
            F = t[30];
        }
        return F;
    }
    function useE(requestId) {
        const t = o("react-compiler-runtime").c(3);
        let n;
        let r;
        if (t[0] !== requestId) {
            n = function() {
                if (!R.has(requestId)) {
                    R.add(requestId);
                    o("WAWebHatchLogging").logHatchSecureCredential("card_impression", "chat");
                }
            };
            r = [
                requestId
            ];
            t[0] = requestId;
            t[1] = n;
            t[2] = r;
        } else {
            n = t[1];
            r = t[2];
        }
        useEffect(n, r);
    }
    function useK(host, pageUrl, requestId, a) {
        const i = o("react-compiler-runtime").c(21);
        const l = r("useWAWebIsHatchChannelConnected")();
        const s = a && l;
        const u = useState(0);
        const c = u[0];
        const d = u[1];
        let m;
        if (i[0] !== l || i[1] !== c) {
            m = [
                c,
                l
            ];
            i[0] = l;
            i[1] = c;
            i[2] = m;
        } else {
            m = i[2];
        }
        const p = r("useWAWebAsync")(D, m, s);
        const _ = useState(false);
        const isRechecking = _[0];
        const y = _[1];
        const C = useState(null);
        const b = C[0];
        const v = C[1];
        const SRef = useRef(null);
        let R;
        if (i[3] === Symbol.for("react.memo_cache_sentinel")) {
            R = function() {
                return SRef.current?.abort();
            };
            i[3] = R;
        } else {
            R = i[3];
        }
        r("useWAWebOnUnmount")(R);
        let L;
        if (i[4] === Symbol.for("react.memo_cache_sentinel")) {
            L = function() {
                return d(I);
            };
            i[4] = L;
        } else {
            L = i[4];
        }
        const E = L;
        let k;
        if (i[5] !== s || i[6] !== p || i[7] !== host || i[8] !== pageUrl || i[9] !== requestId) {
            k = function() {
                o("WAWebHatchLogging").logHatchSecureCredential("card_tap", "chat");
                if (!s) {
                    x(pageUrl, requestId, E);
                    return;
                }
                const r = new AbortController;
                SRef.current = r;
                y(true);
                D().then((t)=>P(t, host)).catch(o("WAWebBoolFunc").returnFalse).then((e)=>{
                    if (!r.signal.aborted) {
                        y(false);
                        if (e) {
                            v(p);
                        } else {
                            x(pageUrl, requestId, E);
                        }
                    }
                });
            };
            i[5] = s;
            i[6] = p;
            i[7] = host;
            i[8] = pageUrl;
            i[9] = requestId;
            i[10] = k;
        } else {
            k = i[10];
        }
        const addLogin = k;
        let isAdded;
        if (i[11] !== s || i[12] !== p || i[13] !== b || i[14] !== host) {
            isAdded = s && (b === p || p.value != null && P(p.value, host));
            i[11] = s;
            i[12] = p;
            i[13] = b;
            i[14] = host;
            i[15] = isAdded;
        } else {
            isAdded = i[15];
        }
        const isReading = s && p.loading;
        let M;
        if (i[16] !== addLogin || i[17] !== isRechecking || i[18] !== isAdded || i[19] !== isReading) {
            M = {
                addLogin,
                isAdded,
                isReading,
                isRechecking
            };
            i[16] = addLogin;
            i[17] = isRechecking;
            i[18] = isAdded;
            i[19] = isReading;
            i[20] = M;
        } else {
            M = i[20];
        }
        return M;
    }
    function I(e) {
        return e + 1;
    }
    function T(isAdded) {
        if (isAdded) {
            return s._("Added");
        }
        return s._("Enter");
    }
    function D() {
        return S.load().then(({ requestHatchSecureCredentials })=>requestHatchSecureCredentials());
    }
    function x(pageUrl, requestId, a) {
        const i = $(pageUrl);
        v.load().then(({ openHatchSecureCredentialAddDialog })=>openHatchSecureCredentialAddDialog(a, "chat", i, requestId)).catch((t)=>{
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "hatch: secure credential add dialog failed to load"
            ]))).catching(r("getErrorSafe")(t)).sendLogs("hatch-secure-credential-add-dialog-load-failed");
        });
    }
    function $(e) {
        try {
            return new URL(e).href;
        } catch (e) {
            o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "hatch: secure credential page url failed to parse"
            ]))).sendLogs("hatch-secure-credential-page-url-parse-failed");
            return;
        }
    }
    function P(e, host) {
        const n = o("WAWebBotSecureCredentialRequestUtils").normalizeHost(host);
        if (n === "") {
            return false;
        }
        return e.some(({ origins })=>origins.some((e)=>o("WAWebBotSecureCredentialRequestUtils").normalizeHost(r("WAWebURLUtils").hostname(e)) === n));
    }
    l.WAWebBotSecureCredentialRequestCard = LComponent;
}, 226);