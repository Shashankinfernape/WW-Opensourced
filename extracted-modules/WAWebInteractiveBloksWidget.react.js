__d("WAWebInteractiveBloksWidget.react", [
    "WAWebA2UIRenderTiming",
    "WAWebABProps",
    "WAWebBloksEntryPointLoadable",
    "WAWebBloksWidgetPayload",
    "WAWebFlex.react",
    "WAWebInteractiveBloksWidgetLogger",
    "WAWebQplFlowWrapper",
    "WAWebThemeContext",
    "WDSText.react",
    "justknobx",
    "qpl",
    "react",
    "react-compiler-runtime",
    "useWAWebRenderCallbacks"
], function(t, n, r, o, a, i, l) {
    const e = [
        "_from_me"
    ];
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useCallback, useEffect, useMemo, useRef, useState } = c;
    const g = 10000;
    const h = r("qpl")._(411369473, "1383");
    const timeoutInMs = 30000;
    const C = "component_type";
    const b = "is_cached";
    const v = false;
    const S = "missing_bot_attribution";
    function R(e) {
        const n = o("react-compiler-runtime").c(43);
        const { bloksWidget, chatJid, hasReply, isBizBot1pMessage, isFromMe, messageId } = e;
        const p = isBizBot1pMessage === undefined ? false : isBizBot1pMessage;
        const R = o("WAWebThemeContext").useIsDarkTheme();
        const E = useState(false);
        const k = E[0];
        const I = E[1];
        bloksWidget?.data;
        const T = bloksWidget?.data;
        const D = hasReply === true;
        const x = isFromMe === true;
        let $;
        if (n[0] !== chatJid || n[1] !== messageId || n[2] !== T || n[3] !== D || n[4] !== x) {
            $ = L(T, chatJid, messageId, D, x);
            n[0] = chatJid;
            n[1] = messageId;
            n[2] = T;
            n[3] = D;
            n[4] = x;
            n[5] = $;
        } else {
            $ = n[5];
        }
        const componentData = $;
        let N;
        if (n[6] !== bloksWidget?.data) {
            N = function() {
                return o("WAWebBloksWidgetPayload").readA2UIComponentType(bloksWidget?.data);
            };
            n[6] = bloksWidget?.data;
            n[7] = N;
        } else {
            N = n[7];
        }
        bloksWidget?.data;
        let M;
        if (n[8] !== N) {
            M = N();
            n[8] = N;
            n[9] = M;
        } else {
            M = n[9];
        }
        const w = M;
        let A;
        if (n[10] !== bloksWidget) {
            A = o("WAWebBloksWidgetPayload").isA2UIBloksWidget(bloksWidget);
            n[10] = bloksWidget;
            n[11] = A;
        } else {
            A = n[11];
        }
        const F = A;
        let O;
        if (n[12] !== F || n[13] !== p) {
            O = F && !p && o("WAWebABProps").getABPropConfigValue("im_a2ui_require_bot_attribution");
            n[12] = F;
            n[13] = p;
            n[14] = O;
        } else {
            O = n[14];
        }
        const B = O;
        let W;
        if (n[15] !== F || n[16] !== B) {
            W = F && !B && r("justknobx")._("1085");
            n[15] = F;
            n[16] = B;
            n[17] = W;
        } else {
            W = n[17];
        }
        const q = W;
        const U = bloksWidget?.uuid;
        const VRef = useRef(null);
        const HRef = useRef(false);
        let G;
        if (n[18] === Symbol.for("react.memo_cache_sentinel")) {
            G = function(t) {
                if (!HRef.current) {
                    const e = VRef.current;
                    if (e != null) {
                        HRef.current = true;
                        e.end(t);
                    }
                }
            };
            n[18] = G;
        } else {
            G = n[18];
        }
        const z = G;
        let onMount;
        if (n[19] !== w || n[20] !== q || n[21] !== U) {
            onMount = function() {
                if (q && !(U == null || !o("WAWebA2UIRenderTiming").markA2UIRenderStartedIfAbsent(U))) {
                    const n = o("WAWebQplFlowWrapper").QPL.markerStart(h, {
                        instanceKey: o("WAWebA2UIRenderTiming").nextA2UIRenderInstanceKey(),
                        cancelOnUnload: true,
                        timeoutInMs
                    });
                    VRef.current = n;
                    n.annotate({
                        bool: {
                            [b]: v
                        },
                        string: w != null ? {
                            [C]: w
                        } : null
                    });
                    o("WAWebA2UIRenderTiming").registerA2UIRenderCallback(U, function() {
                        z(2);
                    });
                }
            };
            n[19] = w;
            n[20] = q;
            n[21] = U;
            n[22] = onMount;
        } else {
            onMount = n[22];
        }
        let onUnmount;
        if (n[23] !== U) {
            onUnmount = function() {
                if (VRef.current != null) {
                    if (U != null) {
                        o("WAWebA2UIRenderTiming").unregisterA2UIRenderCallback(U);
                    }
                    if (!HRef.current) {
                        z(4);
                        if (U != null) {
                            o("WAWebA2UIRenderTiming").clearA2UIRenderStarted(U);
                        }
                    }
                    VRef.current = null;
                }
            };
            n[23] = U;
            n[24] = onUnmount;
        } else {
            onUnmount = n[24];
        }
        let Q;
        if (n[25] !== onMount || n[26] !== onUnmount) {
            Q = {
                onMount,
                onUnmount
            };
            n[25] = onMount;
            n[26] = onUnmount;
            n[27] = Q;
        } else {
            Q = n[27];
        }
        r("useWAWebRenderCallbacks")(Q);
        let X;
        let Y;
        if (n[28] === Symbol.for("react.memo_cache_sentinel")) {
            X = function() {
                let e = false;
                const t = window.setTimeout(function() {
                    if (!e) {
                        I(true);
                    }
                }, g);
                o("WAWebBloksEntryPointLoadable").requireBundle().then(()=>{
                    if (!e) {
                        window.clearTimeout(t);
                        VRef.current?.addPoint("bundle_loaded");
                    }
                });
                return function() {
                    e = true;
                    window.clearTimeout(t);
                };
            };
            Y = [];
            n[28] = X;
            n[29] = Y;
        } else {
            X = n[28];
            Y = n[29];
        }
        useEffect(X, Y);
        const J = k || B || bloksWidget == null || bloksWidget.uuid == null && bloksWidget.data == null && bloksWidget.type == null;
        const ZRef = useRef(false);
        let ee;
        let te;
        if (n[30] !== bloksWidget || n[31] !== B || n[32] !== q || n[33] !== J) {
            ee = function() {
                if (J && !ZRef.current) {
                    ZRef.current = true;
                    o("WAWebInteractiveBloksWidgetLogger").logInteractiveBloksWidgetFallback(bloksWidget, B ? S : null);
                    if (q) {
                        z(3);
                    }
                }
            };
            te = [
                J,
                bloksWidget,
                B,
                q,
                z
            ];
            n[30] = bloksWidget;
            n[31] = B;
            n[32] = q;
            n[33] = J;
            n[34] = ee;
            n[35] = te;
        } else {
            ee = n[34];
            te = n[35];
        }
        useEffect(ee, te);
        if (J) {
            const ne = bloksWidget?.fallback;
            if (ne != null && ne !== "") {
                let re;
                if (n[36] !== ne) {
                    const Component = r("WDSText.react");
                    const Component_1 = o("WAWebFlex.react").FlexColumn;
                    re = <Component_1 align="center" justify="center"><Component type="Body2" colorName="contentDeemphasized">{ne}</Component></Component_1>;
                    n[36] = ne;
                    n[37] = re;
                } else {
                    re = n[37];
                }
                return re;
            }
            return null;
        }
        const componentType = bloksWidget?.type ?? "";
        const uuid = bloksWidget?.uuid;
        const ie = R ? "dark" : "light";
        let le;
        if (n[38] !== componentData || n[39] !== componentType || n[40] !== uuid || n[41] !== ie) {
            le = u.jsx(o("WAWebBloksEntryPointLoadable").WAWebBloksEntryPointLoadable, {
                componentType,
                componentData,
                uuid,
                theme: ie
            });
            n[38] = componentData;
            n[39] = componentType;
            n[40] = uuid;
            n[41] = ie;
            n[42] = le;
        } else {
            le = n[42];
        }
        return le;
    }
    function L(t, chat_jid, message_row_id, a, i) {
        if (t == null || t === "") {
            return "";
        }
        try {
            const l = JSON.parse(t);
            if (l == null || typeof l !== "object" || Array.isArray(l)) {
                return t;
            }
            const s = l._from_me;
            const u = babelHelpers.objectWithoutPropertiesLoose(l, e);
            const c = babelHelpers.extends({}, u, {
                a2ui_supported_elements: o("WAWebABProps").getABPropConfigValue("a2ui_supported_elements")
            }, a ? {
                _has_reply: true
            } : null);
            const d = i ? babelHelpers.extends({}, c, {
                _from_me: true
            }) : c;
            const m = chat_jid != null && chat_jid !== "" && message_row_id != null && message_row_id !== "";
            return JSON.stringify(m ? babelHelpers.extends({}, d, {
                chat_jid,
                message_row_id
            }) : d);
        } catch (e) {
            return t;
        }
    }
    l.default = R;
}, 98);