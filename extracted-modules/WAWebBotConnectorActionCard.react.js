__d("WAWebBotConnectorActionCard.react", [
    "fbt",
    "JSResourceForInteraction",
    "WAWebExternalLink.react",
    "WAWebHatchConnectorCardRoute",
    "WAWebHatchConnectorsFlowLoadable",
    "WAWebHatchConnectorsLogging",
    "WAWebHatchLogging",
    "WAWebHatchPendingTab",
    "WAWebImg.react",
    "WAWebURLUtils",
    "WDSButton.react",
    "WDSIconIcGridView.react",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "isStringNotNullAndNotWhitespaceOnly",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebHatchConnector",
    "useWAWebIsHatchChannelConnected",
    "useWAWebThrottledCallback"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    const e = [
        "metaSlot",
        "msgKey"
    ];
    const u = [
        "msgKey"
    ];
    let c;
    let d;
    const m = d || (d = o("react"));
    const p = d;
    const { useEffect, useEffectEvent, useRef } = p;
    const h = 40;
    const y = 24;
    const C = 257;
    const b = 48;
    const v = [
        ".whatsapp.net",
        ".fbcdn.net"
    ];
    const S = 1000;
    const R = r("JSResourceForInteraction")("WAWebAddHatchConnectorAccount").__setRef("WAWebBotConnectorActionCard.react");
    const L = r("JSResourceForInteraction")("WAWebGrantHatchConnectorScope").__setRef("WAWebBotConnectorActionCard.react");
    const E = r("JSResourceForInteraction")("WAWebReadHatchConnectorCardRoute").__setRef("WAWebBotConnectorActionCard.react");
    const k = {
        iconBadge: {
            alignItems: "x6s0dn4",
            backgroundColor: "x1k43qru",
            borderStartStartRadius: "xt8t1vi",
            borderStartEndRadius: "x1xc408v",
            borderEndEndRadius: "x129tdwq",
            borderEndStartRadius: "x15urzxu",
            color: "x14ug900",
            display: "x78zum5",
            flexShrink: "x2lah0s",
            height: "x1vqgdyp",
            justifyContent: "xl56j7k",
            width: "x100vrsf",
            $$css: true
        },
        rowIcon: {
            backgroundColor: "x4wrhlh",
            borderStartStartRadius: "xyi3aci",
            borderStartEndRadius: "xwf5gio",
            borderEndEndRadius: "x1p453bz",
            borderEndStartRadius: "x1suzm8a",
            $$css: true
        }
    };
    function IComponent(t) {
        const n = o("react-compiler-runtime").c(30);
        let a;
        let i;
        let l;
        if (n[0] !== t) {
            a = t.metaSlot;
            i = t.msgKey;
            l = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = a;
            n[2] = i;
            n[3] = l;
        } else {
            a = n[1];
            i = n[2];
            l = n[3];
        }
        const s = l;
        const { imageUrl, subtitle, title } = s;
        const p = useD(i, l);
        const { ctaLabel, isCtaDisabled, onCtaPress } = p;
        let h;
        if (n[4] === Symbol.for("react.memo_cache_sentinel")) {
            h = {
                className: "x78zum5 xdt5ytf x1vjgo2v"
            };
            n[4] = h;
        } else {
            h = n[4];
        }
        let y;
        if (n[5] === Symbol.for("react.memo_cache_sentinel")) {
            y = {
                className: "x6s0dn4 x4wrhlh xyi3aci xwf5gio x1p453bz x1suzm8a x1aj3ljl x78zum5 x1q0g3np x4tpdpg x1xrf6ya xde1mab xscbp6u x1iw51ew"
            };
            n[5] = y;
        } else {
            y = n[5];
        }
        let C;
        if (n[6] !== imageUrl) {
            C = <PComponent imageUrl={imageUrl}/>;
            n[6] = imageUrl;
            n[7] = C;
        } else {
            C = n[7];
        }
        let b;
        if (n[8] === Symbol.for("react.memo_cache_sentinel")) {
            b = {
                className: "x78zum5 xdt5ytf x1iyjqo2 xeuugli x1b73lln"
            };
            n[8] = b;
        } else {
            b = n[8];
        }
        let v;
        if (n[9] !== title) {
            const Component = r("WDSText.react");
            v = r("isStringNotNullAndNotWhitespaceOnly")(title) && <Component colorName="contentDefault" maxLines={1} testid="bot_ur_connector_action_card_title" type="Body1Emphasized">{title}</Component>;
            n[9] = title;
            n[10] = v;
        } else {
            v = n[10];
        }
        let S;
        if (n[11] !== subtitle) {
            const Component = r("WDSText.react");
            S = r("isStringNotNullAndNotWhitespaceOnly")(subtitle) && <Component colorName="contentDeemphasized" maxLines={2} testid="bot_ur_connector_action_card_subtitle" type="Body2">{subtitle}</Component>;
            n[11] = subtitle;
            n[12] = S;
        } else {
            S = n[12];
        }
        let R;
        if (n[13] !== v || n[14] !== S) {
            R = <div {...babelHelpers.extends({}, b, {
                "data-testid": "bot_ur_connector_action_card_text",
                children: [
                    v,
                    S
                ]
            })}/>;
            n[13] = v;
            n[14] = S;
            n[15] = R;
        } else {
            R = n[15];
        }
        let L;
        if (n[16] !== a) {
            L = a != null && <div className="xpvyfi4 x2lah0s" data-testid="bot_ur_connector_action_card_meta">{a}</div>;
            n[16] = a;
            n[17] = L;
        } else {
            L = n[17];
        }
        let E;
        if (n[18] !== C || n[19] !== R || n[20] !== L) {
            E = <div {...babelHelpers.extends({}, y, {
                "data-testid": "bot_ur_connector_action_card_info",
                children: [
                    C,
                    R,
                    L
                ]
            })}/>;
            n[18] = C;
            n[19] = R;
            n[20] = L;
            n[21] = E;
        } else {
            E = n[21];
        }
        let k;
        if (n[22] === Symbol.for("react.memo_cache_sentinel")) {
            k = {
                className: "x6s0dn4 x78zum5 xl56j7k x1wxaq2x"
            };
            n[22] = k;
        } else {
            k = n[22];
        }
        let I;
        if (n[23] !== ctaLabel || n[24] !== isCtaDisabled || n[25] !== onCtaPress) {
            const Component = r("WDSButton.react");
            I = <div {...babelHelpers.extends({}, k, {
                "data-testid": "bot_ur_connector_action_card_cta",
                children: <Component disabled={isCtaDisabled} label={ctaLabel} onPress={onCtaPress} testid="bot_ur_connector_action_card_cta_button" variant="borderless"/>
            })}/>;
            n[23] = ctaLabel;
            n[24] = isCtaDisabled;
            n[25] = onCtaPress;
            n[26] = I;
        } else {
            I = n[26];
        }
        let T;
        if (n[27] !== I || n[28] !== E) {
            T = <div {...babelHelpers.extends({}, h, {
                "data-testid": "bot_ur_connector_action_card",
                children: [
                    E,
                    I
                ]
            })}/>;
            n[27] = I;
            n[28] = E;
            n[29] = T;
        } else {
            T = n[29];
        }
        return T;
    }
    function TComponent(e) {
        const t = o("react-compiler-runtime").c(21);
        let n;
        let a;
        if (t[0] !== e) {
            n = e.msgKey;
            a = babelHelpers.objectWithoutPropertiesLoose(e, u);
            t[0] = e;
            t[1] = n;
            t[2] = a;
        } else {
            n = t[1];
            a = t[2];
        }
        const i = a;
        const { imageUrl, title } = i;
        const c = useD(n, a);
        const { ctaLabel, isConnected, onCtaPress } = c;
        let f;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            f = {
                className: "x6s0dn4 xrdqr27 x78zum5 x1q0g3np"
            };
            t[3] = f;
        } else {
            f = t[3];
        }
        let g;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            g = {
                className: "x6s0dn4 x1aj3ljl x78zum5 x1q0g3np x1iyjqo2 xeuugli"
            };
            t[4] = g;
        } else {
            g = t[4];
        }
        let h;
        if (t[5] !== imageUrl) {
            h = <PComponent imageUrl={imageUrl} xstyle={k.rowIcon}/>;
            t[5] = imageUrl;
            t[6] = h;
        } else {
            h = t[6];
        }
        let y;
        if (t[7] === Symbol.for("react.memo_cache_sentinel")) {
            y = {
                className: "x78zum5 xdt5ytf x1iyjqo2 xeuugli x1b73lln"
            };
            t[7] = y;
        } else {
            y = t[7];
        }
        let C;
        if (t[8] !== title) {
            const Component = r("WDSText.react");
            C = <div {...babelHelpers.extends({}, y, {
                "data-testid": "bot_ur_connector_action_card_row_text",
                children: <Component colorName="contentDefault" maxLines={1} testid="bot_ur_connector_action_card_row_title" type="Body1">{title}</Component>
            })}/>;
            t[8] = title;
            t[9] = C;
        } else {
            C = t[9];
        }
        let b;
        if (t[10] !== h || t[11] !== C) {
            b = <div {...babelHelpers.extends({}, g, {
                "data-testid": "bot_ur_connector_action_card_row_info",
                children: [
                    h,
                    C
                ]
            })}/>;
            t[10] = h;
            t[11] = C;
            t[12] = b;
        } else {
            b = t[12];
        }
        let v;
        if (t[13] === Symbol.for("react.memo_cache_sentinel")) {
            v = {
                className: "x2lah0s"
            };
            t[13] = v;
        } else {
            v = t[13];
        }
        let S;
        if (t[14] !== ctaLabel || t[15] !== isConnected || t[16] !== onCtaPress) {
            const Component = r("WDSText.react");
            const Component_1 = r("WDSButton.react");
            S = <div {...babelHelpers.extends({}, v, {
                "data-testid": "bot_ur_connector_action_card_row_end",
                children: isConnected ? <Component colorName="contentDeemphasized" testid="bot_ur_connector_action_card_row_connected" type="Body2">{ctaLabel}</Component> : <Component_1 label={ctaLabel} onPress={onCtaPress} size="small" testid="bot_ur_connector_action_card_row_cta_button" variant="outline"/>
            })}/>;
            t[14] = ctaLabel;
            t[15] = isConnected;
            t[16] = onCtaPress;
            t[17] = S;
        } else {
            S = t[17];
        }
        let R;
        if (t[18] !== b || t[19] !== S) {
            R = <div {...babelHelpers.extends({}, f, {
                "data-testid": "bot_ur_connector_action_card_row",
                children: [
                    b,
                    S
                ]
            })}/>;
            t[18] = b;
            t[19] = S;
            t[20] = R;
        } else {
            R = t[20];
        }
        return R;
    }
    function useD(e, t) {
        const n = o("react-compiler-runtime").c(30);
        const { action, actionUrl, cardId, connectorId, ctaLabel, scopeKey, status, title } = t;
        const p = r("useWAWebIsHatchChannelConnected")();
        let _;
        if (n[0] !== connectorId) {
            _ = connectorId.trim();
            n[0] = connectorId;
            n[1] = _;
        } else {
            _ = n[1];
        }
        const connectorId_1 = _;
        const h = r("useWAWebHatchConnector")(connectorId_1);
        let y;
        if (n[2] !== action || n[3] !== h || n[4] !== p || n[5] !== scopeKey) {
            y = h == null && p && o("WAWebHatchConnectorCardRoute").canRouteHatchConnectorCardAction(String(action), scopeKey);
            n[2] = action;
            n[3] = h;
            n[4] = p;
            n[5] = scopeKey;
            n[6] = y;
        } else {
            y = n[6];
        }
        const C = y;
        const isConnected = String(action) === "CONNECT" && (String(status) === "LINKED" || h?.state === "connected");
        const v = String(action) === "CONNECT";
        useX(v ? `${e}/connector/${cardId}` : null, connectorId_1, h);
        const RRef = useRef(false);
        let L;
        if (n[7] !== action || n[8] !== actionUrl || n[9] !== h || n[10] !== p || n[11] !== v || n[12] !== scopeKey || n[13] !== C || n[14] !== title || n[15] !== connectorId_1) {
            L = function() {
                if (v) {
                    o("WAWebHatchLogging").logHatchConnector("connect_message_tapped", $(connectorId_1, h));
                }
                if (v && p) {
                    o("WAWebHatchConnectorsFlowLoadable").openHatchConnectorDrawer(connectorId_1, title);
                    return;
                }
                e: {
                    const e = o("WAWebHatchConnectorCardRoute").resolveHatchConnectorCardRoute(String(action), h, RRef.current, scopeKey);
                    if (e === "add_account") {
                        N({
                            actionUrl,
                            connectorId: connectorId_1,
                            isRequestingLinkRef: RRef
                        });
                        break e;
                    }
                    if ((typeof e === "object" && e !== null || typeof e === "function") && e.kind === "grant_scope" && "methodKey" in e) {
                        const t = e.methodKey;
                        M(connectorId_1, t, actionUrl, RRef);
                        break e;
                    }
                    if (e === "fallback_url" && C) {
                        w(String(action), connectorId_1, scopeKey, actionUrl, RRef);
                        break e;
                    }
                    if (e === "fallback_url") {
                        o("WAWebExternalLink.react").openExternalLink(actionUrl, {
                            noApiCmdHandling: true
                        });
                        break e;
                    }
                    if (e === "noop") {
                        return;
                    }
                    throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
                }
            };
            n[7] = action;
            n[8] = actionUrl;
            n[9] = h;
            n[10] = p;
            n[11] = v;
            n[12] = scopeKey;
            n[13] = C;
            n[14] = title;
            n[15] = connectorId_1;
            n[16] = L;
        } else {
            L = n[16];
        }
        let E;
        if (n[17] === Symbol.for("react.memo_cache_sentinel")) {
            E = {
                leading: true,
                trailing: false
            };
            n[17] = E;
        } else {
            E = n[17];
        }
        const onCtaPress = r("useWAWebThrottledCallback")(L, S, E);
        let ctaLabel_1;
        if (n[18] !== action || n[19] !== ctaLabel || n[20] !== isConnected) {
            ctaLabel_1 = B(action, ctaLabel, isConnected);
            n[18] = action;
            n[19] = ctaLabel;
            n[20] = isConnected;
            n[21] = ctaLabel_1;
        } else {
            ctaLabel_1 = n[21];
        }
        let isCtaDisabled;
        if (n[22] !== h || n[23] !== isConnected) {
            isCtaDisabled = isConnected && !o("WAWebHatchConnectorCardRoute").canOpenHatchConnectorDetails(h);
            n[22] = h;
            n[23] = isConnected;
            n[24] = isCtaDisabled;
        } else {
            isCtaDisabled = n[24];
        }
        let D;
        if (n[25] !== onCtaPress || n[26] !== isConnected || n[27] !== ctaLabel_1 || n[28] !== isCtaDisabled) {
            D = {
                ctaLabel: ctaLabel_1,
                isConnected,
                isCtaDisabled,
                onCtaPress
            };
            n[25] = onCtaPress;
            n[26] = isConnected;
            n[27] = ctaLabel_1;
            n[28] = isCtaDisabled;
            n[29] = D;
        } else {
            D = n[29];
        }
        return D;
    }
    function useX(e, connectorId, n) {
        const r = o("react-compiler-runtime").c(8);
        let a;
        if (r[0] !== n || r[1] !== connectorId) {
            a = function(r) {
                o("WAWebHatchLogging").logHatchConnectorCardImpression(r, $(connectorId, n));
            };
            r[0] = n;
            r[1] = connectorId;
            r[2] = a;
        } else {
            a = r[2];
        }
        const i = useEffectEvent(a);
        let l;
        if (r[3] !== e || r[4] !== i) {
            l = function() {
                if (e != null) {
                    i(e);
                }
            };
            r[3] = e;
            r[4] = i;
            r[5] = l;
        } else {
            l = r[5];
        }
        let s;
        if (r[6] !== e) {
            s = [
                e
            ];
            r[6] = e;
            r[7] = s;
        } else {
            s = r[7];
        }
        useEffect(l, s);
    }
    function $(connectorId, t) {
        return {
            connectorId,
            connectorType: t != null ? o("WAWebHatchConnectorsLogging").getHatchConnectorLogType(t) : undefined
        };
    }
    function PComponent(e) {
        const t = o("react-compiler-runtime").c(10);
        const { imageUrl, xstyle } = e;
        let i;
        if (t[0] !== imageUrl) {
            i = q(imageUrl);
            t[0] = imageUrl;
            t[1] = i;
        } else {
            i = t[1];
        }
        const l = i;
        let s;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            s = m.jsx(r("WDSIconIcGridView.react"), {
                height: y,
                width: y
            });
            t[2] = s;
        } else {
            s = t[2];
        }
        const u = s;
        let d;
        if (t[3] !== xstyle) {
            d = (c || (c = r("stylex"))).props(k.iconBadge, xstyle);
            t[3] = xstyle;
            t[4] = d;
        } else {
            d = t[4];
        }
        let p;
        if (t[5] !== l) {
            const Component = r("WAWebImg.react");
            p = l != null ? <Component alt="" className="xxk0z11 x19kjcj4 xvy4d1p" renderError={function() {
                return u;
            }} src={l} testid="bot_ur_connector_action_card_image"/> : u;
            t[5] = l;
            t[6] = p;
        } else {
            p = t[6];
        }
        let _;
        if (t[7] !== d || t[8] !== p) {
            _ = <div {...babelHelpers.extends({}, d, {
                "data-testid": "bot_ur_connector_action_card_icon",
                children: p
            })}/>;
            t[7] = d;
            t[8] = p;
            t[9] = _;
        } else {
            _ = t[9];
        }
        return _;
    }
    function N({ actionUrl, connectorId, isRequestingLinkRef }) {
        O(isRequestingLinkRef, (e)=>A(connectorId, actionUrl, e));
    }
    function M(connectorId, t, actionUrl, RRef) {
        O(RRef, (r)=>F(connectorId, t, actionUrl, r));
    }
    function w(e, connectorId, scopeKey, actionUrl, RRef) {
        O(RRef, (a)=>E.load().then((()=>{
                const i = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ readHatchConnectorCardRoute }) {
                    e: {
                        const l = yield readHatchConnectorCardRoute(e, connectorId, scopeKey);
                        if (l === "add_account") {
                            yield A(connectorId, actionUrl, a);
                            break e;
                        }
                        if ((typeof l === "object" && l !== null || typeof l === "function") && l.kind === "grant_scope" && "methodKey" in l) {
                            const s = l.methodKey;
                            yield F(connectorId, s, actionUrl, a);
                            break e;
                        }
                        if (l === "fallback_url" || l === "noop") {
                            a.navigate(actionUrl);
                            break e;
                        }
                        throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${l}`);
                    }
                });
                return function(e) {
                    return i.apply(this, arguments);
                };
            })(), ()=>a.navigate(actionUrl)));
    }
    function A(e, actionUrl, n) {
        return R.load().then(({ addHatchConnectorAccount })=>addHatchConnectorAccount(e, n), ()=>n.navigate(actionUrl));
    }
    function F(e, t, actionUrl, o) {
        return L.load().then((()=>{
            const r = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ grantHatchConnectorScope, openHatchScopeGrantFailedToast }) {
                const i = yield grantHatchConnectorScope(e, t, o);
                if (i !== "opened") {
                    openHatchScopeGrantFailedToast();
                }
            });
            return function(e) {
                return r.apply(this, arguments);
            };
        })(), ()=>o.navigate(actionUrl));
    }
    function O(e, t) {
        e.current = true;
        t(o("WAWebHatchPendingTab").openHatchPendingTab()).finally(()=>{
            e.current = false;
        });
    }
    function B(action, ctaLabel, isConnected) {
        if (isConnected) {
            return s._("Connected");
        }
        if (String(action) !== "ADD_SCOPE" && r("isStringNotNullAndNotWhitespaceOnly")(ctaLabel)) {
            return ctaLabel;
        }
        return W(action);
    }
    function W(action) {
        return ((e)=>{
            switch(e){
                case "ADD_ACCOUNT":
                    return s._("Add new account");
                case "ADD_SCOPE":
                    return s._("Update permissions");
                default:
                    return s._("Connect");
            }
        })(String(action));
    }
    function q(imageUrl) {
        if (imageUrl == null || !r("WAWebURLUtils").isHttps(imageUrl)) {
            return null;
        }
        const t = r("WAWebURLUtils").hostname(imageUrl);
        if (v.some((e)=>t.endsWith(e))) {
            return imageUrl;
        }
        return null;
    }
    l.WAWebBotConnectorActionCard = IComponent;
    l.WAWebBotConnectorActionCardRow = TComponent;
}, 226);