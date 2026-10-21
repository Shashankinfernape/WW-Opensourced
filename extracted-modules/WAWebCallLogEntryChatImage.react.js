__d("WAWebCallLogEntryChatImage.react", [
    "WAWebCallLogMsgData.flow",
    "WAWebCallLogUtils",
    "WAWebDetailImage.react",
    "WAWebFrontendMsgGetters",
    "WAWebGroupChatImage.react",
    "WAWebMsgGetters",
    "WAWebMultiParticipantCallImage.react",
    "WAWebStackedCirclesImage.react",
    "WAWebUserPrefsMeUser",
    "WAWebVoipUiContext",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const e_useContext = e.useContext;
    const c = {
        width: "x5lhr3w",
        height: "x16ye13r",
        $$css: true
    };
    const d = {
        sizeAuto: function(t) {
            return [
                c,
                {
                    "--x-width": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(`max(49px, min(${(t ?? 0) * 0.2}px, 120px))`),
                    "--x-height": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(`max(49px, min(${(t ?? 0) * 0.2}px, 120px))`)
                }
            ];
        }
    };
    function m(e) {
        const t = o("react-compiler-runtime").c(33);
        const { msg, size } = e;
        const i = size === undefined ? "small" : size;
        const l = e_useContext(r("WAWebVoipUiContext"));
        const l_uiHeight = l.uiHeight;
        let m;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            m = [
                o("WAWebMsgGetters").getIsGroupMsg,
                o("WAWebMsgGetters").getCallParticipants,
                o("WAWebMsgGetters").getCallOutcome
            ];
            t[0] = m;
        } else {
            m = t[0];
        }
        const f = o("useWAWebMsgValues").useMsgValues(msg.id, m);
        const g = f[0];
        const h = f[1];
        const y = f[2];
        let C;
        let b;
        let v;
        if (t[1] !== y || t[2] !== msg || t[3] !== h || t[4] !== i) {
            v = Symbol.for("react.early_return_sentinel");
            e: {
                C = o("WAWebFrontendMsgGetters").getChat(msg);
                const L = h?.some(_) ?? false;
                const E = L ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow() : o("WAWebUserPrefsMeUser").getMaybeMePnUser();
                let k;
                if (t[8] !== i) {
                    k = i === "small" ? 49 : i === "large" ? 100 : i === "auto" ? null : (()=>{
                        throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${i}`);
                    })();
                    t[8] = i;
                    t[9] = k;
                } else {
                    k = t[9];
                }
                b = k;
                const I = (h == null ? undefined : h.map(p).filter((e)=>!e.equals(E))) ?? [];
                if (I.length > 0 && !C.id.isGroup() && y !== o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing) {
                    const T = o("WAWebCallLogUtils").sortCallParticipantWids(I, msg);
                    let D;
                    if (t[10] === Symbol.for("react.memo_cache_sentinel")) {
                        D = {
                            className: "x47corl"
                        };
                        t[10] = D;
                    } else {
                        D = t[10];
                    }
                    const x = b ?? "auto";
                    let $;
                    if (t[11] !== T || t[12] !== x) {
                        $ = <div {...babelHelpers.extends({}, D, {
                            children: s.jsx(r("WAWebMultiParticipantCallImage.react"), {
                                participantWids: T,
                                size: x
                            })
                        })}/>;
                        t[11] = T;
                        t[12] = x;
                        t[13] = $;
                    } else {
                        $ = t[13];
                    }
                    v = $;
                    break e;
                }
            }
            t[1] = y;
            t[2] = msg;
            t[3] = h;
            t[4] = i;
            t[5] = C;
            t[6] = b;
            t[7] = v;
        } else {
            C = t[5];
            b = t[6];
            v = t[7];
        }
        if (v !== Symbol.for("react.early_return_sentinel")) {
            return v;
        }
        let P;
        if (t[14] !== i) {
            P = i === "small" ? o("WAWebDetailImage.react").DetailImageQuality.Low : i === "large" || i === "auto" ? o("WAWebDetailImage.react").DetailImageQuality.High : (()=>{
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${i}`);
            })();
            t[14] = i;
            t[15] = P;
        } else {
            P = t[15];
        }
        const quality = P;
        const customDimensionsStyle = i === "auto";
        let w;
        if (t[16] !== i || t[17] !== l_uiHeight) {
            w = i === "auto" && d.sizeAuto(l_uiHeight);
            t[16] = i;
            t[17] = l_uiHeight;
            t[18] = w;
        } else {
            w = t[18];
        }
        let A;
        if (t[19] !== C.id || t[20] !== quality || t[21] !== b || t[22] !== customDimensionsStyle || t[23] !== w) {
            A = s.jsx(o("WAWebDetailImage.react").DetailImage, {
                id: C.id,
                size: b,
                quality,
                customDimensionsStyle,
                waitIdle: true,
                xstyle: w
            });
            t[19] = C.id;
            t[20] = quality;
            t[21] = b;
            t[22] = customDimensionsStyle;
            t[23] = w;
            t[24] = A;
        } else {
            A = t[24];
        }
        const F = A;
        if (g) {
            let O;
            if (t[25] === Symbol.for("react.memo_cache_sentinel")) {
                O = {
                    className: "x47corl"
                };
                t[25] = O;
            } else {
                O = t[25];
            }
            const B = b ?? 49;
            let W;
            if (t[26] !== C || t[27] !== F || t[28] !== B) {
                W = <div {...babelHelpers.extends({}, O, {
                    children: s.jsx(r("WAWebGroupChatImage.react"), {
                        chat: C,
                        regularChatImage: F,
                        selection: null,
                        showCommunityInfo: false,
                        size: B,
                        theme: o("WAWebStackedCirclesImage.react").SubgroupImageTheme.CHAT_LIST
                    })
                })}/>;
                t[26] = C;
                t[27] = F;
                t[28] = B;
                t[29] = W;
            } else {
                W = t[29];
            }
            return W;
        }
        let q;
        if (t[30] === Symbol.for("react.memo_cache_sentinel")) {
            q = {
                className: "x47corl"
            };
            t[30] = q;
        } else {
            q = t[30];
        }
        let U;
        if (t[31] !== F) {
            U = <div {...babelHelpers.extends({}, q, {
                children: F
            })}/>;
            t[31] = F;
            t[32] = U;
        } else {
            U = t[32];
        }
        return U;
    }
    function p(e) {
        return e.participant;
    }
    function _(e) {
        return e.participant.isLid();
    }
    l.default = m;
}, 98);