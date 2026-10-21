__d("WAWebMessageStickerLikeBubbleContainer.react", [
    "WAWebAddOnBubbleRenderUtils",
    "WAWebAddOnBubbleType",
    "WAWebAddOnBubblesContainer.react",
    "WAWebBizCtwaContext.react",
    "WAWebDisplayType",
    "WAWebFlex.react",
    "WAWebFrontendMsgGetters",
    "WAWebMessageAuthor.react",
    "WAWebMessageForwardedIndicator.react",
    "WAWebMessageMeta.react",
    "WAWebMessagePaidPartnershipDisclaimerText.react",
    "WAWebMessagePosition",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebStopEvent",
    "WDSMargins.stylex",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebMsgValues",
    "useWAWebSendViewCount"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    let s;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useImperativeHandle, useRef } = d;
    const _ = {
        wrapper: {
            boxSizing: "x9f619",
            paddingInlineStart: "x12w63v0",
            paddingInlineEnd: "x1nzty39",
            paddingTop: "x16ovd2e",
            position: "x1n2onr6",
            zIndex: "x1vjfegm",
            $$css: true
        },
        bubbleZIndex: {
            zIndex: "x1vjfegm",
            $$css: true
        },
        groupHistoryMessage: {
            backgroundColor: "x1fast2d",
            $$css: true
        },
        bubble: {
            maxWidth: "x13nahy2",
            paddingTop: "x1yrsyyn",
            paddingInlineEnd: "xrw5ot4",
            paddingBottom: "xg8j3zb",
            paddingInlineStart: "x7coems",
            position: "x1n2onr6",
            $$css: true
        },
        isTransparent: {
            paddingTop: "xexx8yu",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            marginBottom: "xat24cr",
            $$css: true
        },
        bodyInBubble: {
            textAlign: "x2b8uid",
            $$css: true
        },
        bodyInTransparent: {
            position: "x1n2onr6",
            display: "x1rg5ohu",
            paddingTop: "x1yrsyyn",
            paddingInlineEnd: "x11lfxj5",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x7coems",
            $$css: true
        },
        bodyTransparentBackgroundEmoji: {
            display: "x78zum5",
            flexDirection: "xdt5ytf",
            $$css: true
        },
        announcementBodyInTransparent: {
            display: "x78zum5",
            flexDirection: "xdt5ytf",
            justifyContent: "xl56j7k",
            $$css: true
        },
        wideBodyInTransparent: {
            paddingTop: "xexx8yu",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            $$css: true
        },
        authorInTransparent: {
            paddingTop: "x1iorvi4",
            paddingInlineEnd: "x1bjonze",
            paddingBottom: "xg8j3zb",
            paddingInlineStart: "x7coems",
            borderStartStartRadius: "x1liijdw",
            borderStartEndRadius: "xu342n7",
            borderEndEndRadius: "xelbjmh",
            borderEndStartRadius: "x16pgt24",
            boxShadow: "x1lpesih",
            $$css: true
        },
        authorTransparentIn: {
            backgroundColor: "x1ew7x2d",
            $$css: true
        },
        authorTransparentOut: {
            backgroundColor: "x1g5lz36",
            $$css: true
        },
        bodyHasAuthorInTransparent: {
            paddingTop: "x123j3cw",
            $$css: true
        },
        authorIsFirstInTransparent: {
            borderStartStartRadius: "x1bczwif",
            $$css: true
        },
        announcement: {
            width: "x1yuel0x",
            maxWidth: "x193iq5w",
            $$css: true
        }
    };
    function f(t) {
        const n = o("react-compiler-runtime").c(97);
        let a;
        let i;
        if (n[0] !== t) {
            i = t.ref;
            a = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = a;
            n[2] = i;
        } else {
            a = n[1];
            i = n[2];
        }
        const lRef = useRef(null);
        const uRef = useRef(null);
        const d = a;
        const { displayType, isGroupedSticker, msgContent, msgKey } = d;
        const C = isGroupedSticker === undefined ? false : isGroupedSticker;
        let b;
        if (n[3] === Symbol.for("react.memo_cache_sentinel")) {
            let v;
            let S;
            b = [
                (v = o("WAWebMsgGetters")).getId,
                v.getIsSentByMe,
                v.getIsGroupMsg,
                (S = o("WAWebFrontendMsgGetters")).getSenderObj,
                v.getHasReaction,
                S.getIsTransparentMsg,
                S.getIsTransparentMsgEmoji,
                v.getIsGroupHistoryMessageInOwnChat,
                S.getShouldShowForwarded
            ];
            n[3] = b;
        } else {
            b = n[3];
        }
        const R = o("useWAWebMsgValues").useMsgValues(msgKey, b);
        const L = R[0];
        const E = R[1];
        const k = R[3];
        const I = R[4];
        const T = R[5];
        const D = R[6];
        const x = R[7];
        const $ = R[8];
        let P;
        if (n[4] === Symbol.for("react.memo_cache_sentinel")) {
            P = function() {
                return {
                    getAnchorRef: function() {
                        return lRef;
                    },
                    getMetaRef: function() {
                        return uRef;
                    }
                };
            };
            n[4] = P;
        } else {
            P = n[4];
        }
        useImperativeHandle(i, P);
        let N;
        if (n[5] !== a.displayType || n[6] !== a.mediaData) {
            N = {
                mediaData: a.mediaData,
                displayType: a.displayType
            };
            n[5] = a.displayType;
            n[6] = a.mediaData;
            n[7] = N;
        } else {
            N = n[7];
        }
        const M = o("useWAWebSendViewCount").useSendViewCount(msgKey, N);
        let alignSelf;
        let A;
        let F;
        let O;
        let B;
        let justifySelf;
        let q;
        let U;
        let V;
        if (n[8] !== displayType || n[9] !== $ || n[10] !== C || n[11] !== E || n[12] !== T || n[13] !== D || n[14] !== msgKey || n[15] !== a.bubbleStyle || n[16] !== a.displayAuthor || n[17] !== a.displayCtwaContext || n[18] !== a.position || n[19] !== a.quotedMsg || n[20] !== k) {
            B = o("WAWebDisplayType").isWideDisplay(displayType);
            const H = !B && (a.position === o("WAWebMessagePosition").MsgPosition.FRONT || a.position === o("WAWebMessagePosition").MsgPosition.SINGLE);
            const G = $ && !D;
            let z;
            if (n[30] !== msgKey || n[31] !== G) {
                z = G ? c.jsx(r("WAWebMessageForwardedIndicator.react"), {
                    msgKey
                }) : null;
                n[30] = msgKey;
                n[31] = G;
                n[32] = z;
            } else {
                z = n[32];
            }
            O = z;
            let j;
            if (n[33] !== msgKey) {
                j = c.jsx(r("WAWebMessagePaidPartnershipDisclaimerText.react"), {
                    msgKey
                });
                n[33] = msgKey;
                n[34] = j;
            } else {
                j = n[34];
            }
            q = j;
            justifySelf = G ? undefined : "center";
            alignSelf = G ? "end" : undefined;
            let K;
            if (n[35] !== displayType || n[36] !== H || n[37] !== E || n[38] !== T || n[39] !== msgKey || n[40] !== a.displayAuthor || n[41] !== k) {
                K = a.displayAuthor ? <div {...babelHelpers.extends({
                    ref: lRef
                }, (s || (s = r("stylex"))).props(T && _.authorInTransparent, T && (E ? _.authorTransparentOut : _.authorTransparentIn), T && H && _.authorIsFirstInTransparent), {
                    children: c.jsx(r("WAWebMessageAuthor.react"), {
                        msgKey,
                        contact: k,
                        displayType
                    })
                })}/> : null;
                n[35] = displayType;
                n[36] = H;
                n[37] = E;
                n[38] = T;
                n[39] = msgKey;
                n[40] = a.displayAuthor;
                n[41] = k;
                n[42] = K;
            } else {
                K = n[42];
            }
            A = K;
            let Q;
            if (n[43] !== msgKey || n[44] !== a.displayCtwaContext) {
                Q = a.displayCtwaContext === true ? c.jsx(r("WAWebBizCtwaContext.react"), {
                    msgKey,
                    wrapperClass: "x1198e8h x1ws5yxj xahult9 xw01apr"
                }) : null;
                n[43] = msgKey;
                n[44] = a.displayCtwaContext;
                n[45] = Q;
            } else {
                Q = n[45];
            }
            F = Q;
            const X = G ? "x9f619 x1racca4 xahult9" : ({
                0: "x9f619 x1198e8h x1ws5yxj xahult9 xw01apr",
                2: "x9f619 x1198e8h x1ws5yxj xahult9 xw01apr xdduh5l",
                1: "x9f619 x1ws5yxj xahult9 xw01apr x1ok221b",
                3: "x9f619 x1ws5yxj xahult9 xw01apr xdduh5l x1ok221b"
            })[!B << 1 | !!a.displayAuthor << 0];
            let Y;
            if (n[46] !== a.quotedMsg || n[47] !== X) {
                Y = a.quotedMsg ? <div className={X}>{a.quotedMsg}</div> : null;
                n[46] = a.quotedMsg;
                n[47] = X;
                n[48] = Y;
            } else {
                Y = n[48];
            }
            U = Y;
            V = (s || (s = r("stylex")))(_.bubbleZIndex, (G || !T) && _.wrapper, a.bubbleStyle, !G && _.bubble, T && _.isTransparent, B && !C && _.announcement);
            n[8] = displayType;
            n[9] = $;
            n[10] = C;
            n[11] = E;
            n[12] = T;
            n[13] = D;
            n[14] = msgKey;
            n[15] = a.bubbleStyle;
            n[16] = a.displayAuthor;
            n[17] = a.displayCtwaContext;
            n[18] = a.position;
            n[19] = a.quotedMsg;
            n[20] = k;
            n[21] = alignSelf;
            n[22] = A;
            n[23] = F;
            n[24] = O;
            n[25] = B;
            n[26] = justifySelf;
            n[27] = q;
            n[28] = U;
            n[29] = V;
        } else {
            alignSelf = n[21];
            A = n[22];
            F = n[23];
            O = n[24];
            B = n[25];
            justifySelf = n[26];
            q = n[27];
            U = n[28];
            V = n[29];
        }
        const J = V;
        let Z;
        if (n[49] !== T || n[50] !== D || n[51] !== B || n[52] !== a.displayAuthor) {
            Z = (s || (s = r("stylex")))(!T && _.bodyInBubble, T && _.bodyInTransparent, T && B && _.announcementBodyInTransparent, T && B && _.wideBodyInTransparent, T && D && _.bodyTransparentBackgroundEmoji, T && a.displayAuthor && _.bodyHasAuthorInTransparent);
            n[49] = T;
            n[50] = D;
            n[51] = B;
            n[52] = a.displayAuthor;
            n[53] = Z;
        } else {
            Z = n[53];
        }
        const ee = Z;
        let te;
        if (n[54] !== displayType || n[55] !== I || n[56] !== L || n[57] !== E || n[58] !== T || n[59] !== B || n[60] !== a.onDetailsPaneClosed) {
            const ne = o("WAWebMsgCollection").MsgCollection.get(L);
            te = null;
            if (T && (displayType === o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION || B) && ne != null) {
                let re;
                if (n[62] === Symbol.for("react.memo_cache_sentinel")) {
                    re = (s || (s = r("stylex"))).props(o("WDSMargins.stylex").wdsMargins.marginStartAuto);
                    n[62] = re;
                } else {
                    re = n[62];
                }
                const parentIds = [
                    ne.id.toString()
                ];
                let ae;
                if (n[63] !== displayType || n[64] !== I || n[65] !== E || n[66] !== a.onDetailsPaneClosed || n[67] !== parentIds) {
                    const Component = r("WAWebAddOnBubblesContainer.react");
                    ae = <div {...babelHelpers.extends({}, re, {
                        children: <Component isOutgoingMsg={E} displayType={displayType} bubbleType={o("WAWebAddOnBubbleType").AddOnBubbleType.STICKER_LIKE_MSG} parentIds={parentIds} onDetailsPaneClosed={a.onDetailsPaneClosed} hasReaction={I}/>
                    })}/>;
                    n[63] = displayType;
                    n[64] = I;
                    n[65] = E;
                    n[66] = a.onDetailsPaneClosed;
                    n[67] = parentIds;
                    n[68] = ae;
                } else {
                    ae = n[68];
                }
                te = ae;
            }
            n[54] = displayType;
            n[55] = I;
            n[56] = L;
            n[57] = E;
            n[58] = T;
            n[59] = B;
            n[60] = a.onDetailsPaneClosed;
            n[61] = te;
        } else {
            te = n[61];
        }
        const ie = x && _.groupHistoryMessage;
        let le;
        if (n[69] !== msgKey) {
            le = c.jsx(o("WAWebMessageMeta.react").Meta, {
                msgKey
            });
            n[69] = msgKey;
            n[70] = le;
        } else {
            le = n[70];
        }
        let se;
        if (n[71] !== displayType || n[72] !== E || n[73] !== T || n[74] !== ie || n[75] !== le) {
            const Component = o("WAWebMessageMeta.react").MetaWrapper;
            se = <Component isSentByMe={E} isTransparent={T} displayType={displayType} ref={uRef} xstyle={ie}>{le}</Component>;
            n[71] = displayType;
            n[72] = E;
            n[73] = T;
            n[74] = ie;
            n[75] = le;
            n[76] = se;
        } else {
            se = n[76];
        }
        const ue = se;
        let ce;
        if (n[77] !== ee || n[78] !== msgContent) {
            ce = <div className={ee}>{msgContent}</div>;
            n[77] = ee;
            n[78] = msgContent;
            n[79] = ce;
        } else {
            ce = n[79];
        }
        let de;
        if (n[80] !== te || n[81] !== alignSelf || n[82] !== displayType || n[83] !== T || n[84] !== justifySelf || n[85] !== ue) {
            const Component = o("WAWebFlex.react").FlexRow;
            const Component_1 = o("WAWebFlex.react").FlexColumn;
            de = T && o("WAWebAddOnBubbleRenderUtils").isAddOnBubbleCentered(displayType) ? <Component alignSelf={alignSelf} justifySelf={justifySelf} columnGap={2}>{te}{ue}</Component> : <Component_1>{ue}{te}</Component_1>;
            n[80] = te;
            n[81] = alignSelf;
            n[82] = displayType;
            n[83] = T;
            n[84] = justifySelf;
            n[85] = ue;
            n[86] = de;
        } else {
            de = n[86];
        }
        let me;
        if (n[87] !== A || n[88] !== J || n[89] !== F || n[90] !== O || n[91] !== q || n[92] !== U || n[93] !== M || n[94] !== ce || n[95] !== de) {
            me = <div className={J} onClick={o("WAWebStopEvent").stopPropagation} ref={M}>{A}{O}{q}{U}{F}{ce}{de}</div>;
            n[87] = A;
            n[88] = J;
            n[89] = F;
            n[90] = O;
            n[91] = q;
            n[92] = U;
            n[93] = M;
            n[94] = ce;
            n[95] = de;
            n[96] = me;
        } else {
            me = n[96];
        }
        return me;
    }
    l.default = f;
}, 98);