__d("WAWebInteractiveGalaxyFlowResponseMessage.react", [
    "WABidi",
    "WALogger",
    "WAWebEmojiText.react",
    "WAWebFlex.react",
    "WAWebGalaxyFlowResponseUtils",
    "WAWebGetGalaxyFlowCtaButton",
    "WAWebGetGalaxyFlowsActionFromButton",
    "WAWebL10N",
    "WAWebMessageMeta.react",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebText.react",
    "WDSIconIcDescription.react",
    "WDSPaddings.stylex",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    const s_useMemo = s.useMemo;
    const d = {
        innerBubble: {
            height: "xdiz9cm",
            borderStartStartRadius: "x1liijdw",
            borderStartEndRadius: "xu342n7",
            borderEndEndRadius: "xelbjmh",
            borderEndStartRadius: "x16pgt24",
            backgroundColor: "x1bu39yj",
            $$css: true
        },
        roundIconContainer: {
            display: "x78zum5",
            alignItems: "x6s0dn4",
            justifyContent: "xl56j7k",
            width: "x14qfxbe",
            height: "xc9qbxq",
            backgroundColor: "x1k43qru",
            borderStartStartRadius: "x1c9tyrk",
            borderStartEndRadius: "xeusxvb",
            borderEndEndRadius: "x1pahc9y",
            borderEndStartRadius: "x1ertn4p",
            $$css: true
        },
        titleText: {
            fontSize: "x1jchvi3",
            $$css: true
        },
        iconColor: {
            color: "x1v5yvga",
            $$css: true
        }
    };
    function m(t) {
        const a = o("react-compiler-runtime").c(41);
        const { defaultMsg, msgKey } = t;
        let s;
        if (a[0] === Symbol.for("react.memo_cache_sentinel")) {
            s = [
                o("WAWebMsgGetters").getInteractivePayload
            ];
            a[0] = s;
        } else {
            s = a[0];
        }
        const c = o("useWAWebMsgValues").useMsgValues(msgKey, s);
        const m = c[0];
        const p = m?.buttonParamsJson ?? "{}";
        let _;
        if (a[1] !== p) {
            _ = JSON.parse(p);
            a[1] = p;
            a[2] = _;
        } else {
            _ = a[2];
        }
        const __wa_flow_response_params = _.wa_flow_response_params;
        if (__wa_flow_response_params == null || !Object.hasOwn(__wa_flow_response_params, "response_message") || __wa_flow_response_params.response_message == null) {
            return defaultMsg;
        }
        if (__wa_flow_response_params.title == null) {
            return null;
        }
        let h;
        if (a[3] !== p) {
            h = o("WAWebGetGalaxyFlowCtaButton").getGalaxyFlowResponseCtaButton(p, 0);
            a[3] = p;
            a[4] = h;
        } else {
            h = a[4];
        }
        const y = h;
        if (y == null) {
            return null;
        }
        let C;
        if (a[5] !== y || a[6] !== msgKey) {
            C = function() {
                let n;
                const r = o("WAWebMsgCollection").MsgCollection.get(msgKey)?.safe();
                if (r == null) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[galaxy-flow] response action skipped, message left the collection"
                    ])));
                    return;
                }
                if (r.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE_RESPONSE) {
                    if (!((n = o("WAWebGetGalaxyFlowsActionFromButton").getCtaFlowInteractiveAction(y, r)) == null || n.onClick == null)) {
                        n.onClick();
                    }
                }
            };
            a[5] = y;
            a[6] = msgKey;
            a[7] = C;
        } else {
            C = a[7];
        }
        const b = C;
        let v;
        if (a[8] === Symbol.for("react.memo_cache_sentinel")) {
            v = ({
                0: {
                    className: "x10l6tqk x1n327nk x23vkua xtkvdam"
                },
                1: {
                    className: "x10l6tqk x1n327nk x23vkua xtkvdam xtrg13t"
                }
            })[!!r("WAWebL10N").isRTL() << 0];
            a[8] = v;
        } else {
            v = a[8];
        }
        let S;
        if (a[9] !== msgKey) {
            S = u.jsx(o("WAWebMessageMeta.react").Meta, {
                msgKey
            });
            a[9] = msgKey;
            a[10] = S;
        } else {
            S = a[10];
        }
        let R;
        if (a[11] !== v || a[12] !== S) {
            R = <div {...babelHelpers.extends({}, v, {
                children: S
            })}/>;
            a[11] = v;
            a[12] = S;
            a[13] = R;
        } else {
            R = a[13];
        }
        const L = R;
        let E;
        if (a[14] !== msgKey) {
            E = o("WAWebGalaxyFlowResponseUtils").getGalaxyFlowResponseSubtitle(msgKey);
            a[14] = msgKey;
            a[15] = E;
        } else {
            E = a[15];
        }
        const k = E;
        const g_title = __wa_flow_response_params.title;
        let T;
        if (a[16] !== b) {
            T = function(t) {
                t.preventDefault();
                if (t.key === "Enter" || t.key === " ") {
                    b();
                }
            };
            a[16] = b;
            a[17] = T;
        } else {
            T = a[17];
        }
        let D;
        if (a[18] === Symbol.for("react.memo_cache_sentinel")) {
            D = {
                className: "x9f619 x87ps6o x3orp4s x1lte6z7 x123j3cw xaso8d8 x1gabggj"
            };
            a[18] = D;
        } else {
            D = a[18];
        }
        let x;
        if (a[19] === Symbol.for("react.memo_cache_sentinel")) {
            x = [
                d.innerBubble,
                o("WDSPaddings.stylex").wdsPaddings.padding8
            ];
            a[19] = x;
        } else {
            x = a[19];
        }
        let $;
        if (a[20] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebFlex.react").FlexItem;
            $ = <Component xstyle={d.roundIconContainer} padding={2}>{u.jsx(r("WDSIconIcDescription.react"), {
                xstyle: d.iconColor
            })}</Component>;
            a[20] = $;
        } else {
            $ = a[20];
        }
        let P;
        if (a[21] !== g_title) {
            P = o("WABidi").bidiDir(g_title);
            a[21] = g_title;
            a[22] = P;
        } else {
            P = a[22];
        }
        let N;
        if (a[23] === Symbol.for("react.memo_cache_sentinel")) {
            N = r("WAWebL10N").isRTL();
            a[23] = N;
        } else {
            N = a[23];
        }
        const M = P === "rtl" !== N;
        let w;
        if (a[24] !== g_title) {
            w = o("WABidi").bidiDir(g_title);
            a[24] = g_title;
            a[25] = w;
        } else {
            w = a[25];
        }
        let A;
        if (a[26] !== M || a[27] !== w || a[28] !== g_title) {
            A = u.jsx(o("WAWebEmojiText.react").EmojiText, {
                xstyle: d.titleText,
                text: g_title,
                textLimit: 30,
                dirMismatch: M,
                direction: w,
                inferLinesDirection: true
            });
            a[26] = M;
            a[27] = w;
            a[28] = g_title;
            a[29] = A;
        } else {
            A = a[29];
        }
        let F;
        if (a[30] !== k) {
            const Component = o("WAWebText.react").WAWebTextMuted;
            F = <Component>{k}</Component>;
            a[30] = k;
            a[31] = F;
        } else {
            F = a[31];
        }
        let O;
        if (a[32] !== L || a[33] !== A || a[34] !== F) {
            const Component = o("WAWebFlex.react").FlexColumn;
            const Component_1 = o("WAWebFlex.react").FlexRow;
            O = <Component_1 xstyle={x} align="center">{$}<Component xstyle={o("WDSPaddings.stylex").wdsPaddings.paddingStart12} justify="evenly" rowGap={4}>{A}{F}{L}</Component></Component_1>;
            a[32] = L;
            a[33] = A;
            a[34] = F;
            a[35] = O;
        } else {
            O = a[35];
        }
        let B;
        if (a[36] !== b || a[37] !== D || a[38] !== O || a[39] !== T) {
            B = <div {...babelHelpers.extends({
                "data-testid": "galaxy-flow-response-bubble",
                role: "button",
                onClick: b,
                tabIndex: 0,
                onKeyDown: T
            }, D, {
                children: O
            })}/>;
            a[36] = b;
            a[37] = D;
            a[38] = O;
            a[39] = T;
            a[40] = B;
        } else {
            B = a[40];
        }
        return B;
    }
    l.default = m;
}, 98);