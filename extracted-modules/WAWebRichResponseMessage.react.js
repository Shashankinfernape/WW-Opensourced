__d("WAWebRichResponseMessage.react", [
    "FBLogger",
    "WALogger",
    "WAWebBotTypes",
    "WAWebErrorBoundary.react",
    "WAWebFlex.react",
    "WAWebForwardedBotFallbackBubble.react",
    "WAWebForwardedBotMessageUtils",
    "WAWebFrontendMsgGetters",
    "WAWebHatchJarvisBubbleLoadable",
    "WAWebHatchJarvisReplyGate",
    "WAWebMessageBubbleTypingIndicator.react",
    "WAWebMessageSpacerText.react",
    "WAWebMessageTextBubble.react",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebRichResponse.flow",
    "WAWebRichResponseFragment.react",
    "WAWebRichResponseMsgUtils",
    "WAWebUnifiedResponseBubble.react",
    "WAWebUnifiedResponseUtils",
    "WAWebUnsupportedMessage",
    "WAWebUpdateForwardedBotValidationStatusAction",
    "WAWebUseBotMessageUpdateScrolling",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const s_useCallback = s.useCallback;
    function d(t) {
        const n = o("react-compiler-runtime").c(38);
        const { displayAuthor, displayType, msgKey } = t;
        let s;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            let c;
            s = [
                (c = o("WAWebMsgGetters")).getUnifiedResponse,
                c.getForwardedAiBotMessageInfo,
                c.getIsForwarded,
                c.getT,
                c.getType
            ];
            n[0] = s;
        } else {
            s = n[0];
        }
        const d = o("useWAWebMsgValues").useMsgValues(msgKey, s);
        const unifiedResponse = d[0];
        const y = d[1];
        const C = d[2];
        const b = d[3];
        const v = d[4];
        let S;
        if (n[1] !== msgKey) {
            S = function() {
                const t = o("WAWebMsgCollection").MsgCollection.get(msgKey);
                if (t == null) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[rich-response] download consent skipped, message left the collection"
                    ])));
                    return;
                }
                const n = g(t.safe());
                if (n != null) {
                    o("WAWebUpdateForwardedBotValidationStatusAction").acceptForwardedBotDownloadConsentAction(n);
                }
            };
            n[1] = msgKey;
            n[2] = S;
        } else {
            S = n[2];
        }
        const onDownloadClick = S;
        let L;
        if (n[3] !== y) {
            L = y != null ? o("WAWebForwardedBotMessageUtils").getForwardedBotDisplayMode(y.validationStatus) : "normal";
            n[3] = y;
            n[4] = L;
        } else {
            L = n[4];
        }
        const mode = L;
        if (mode !== "normal") {
            let k;
            if (n[5] !== displayAuthor || n[6] !== mode || n[7] !== displayType || n[8] !== onDownloadClick || n[9] !== msgKey) {
                const Component = r("WAWebForwardedBotFallbackBubble.react");
                k = <Component displayAuthor={displayAuthor} displayType={displayType} mode={mode} msgKey={msgKey} onDownloadClick={onDownloadClick}/>;
                n[5] = displayAuthor;
                n[6] = mode;
                n[7] = displayType;
                n[8] = onDownloadClick;
                n[9] = msgKey;
                n[10] = k;
            } else {
                k = n[10];
            }
            return k;
        }
        if (v === o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE && unifiedResponse != null && o("WAWebUnifiedResponseUtils").isUnifiedResponseVisible({
            unifiedResponse,
            t: b
        })) {
            let errorFallback;
            if (n[11] !== msgKey) {
                errorFallback = function() {
                    return <M11 msgKey={msgKey}/>;
                };
                n[11] = msgKey;
                n[12] = errorFallback;
            } else {
                errorFallback = n[12];
            }
            let T;
            if (n[13] !== displayAuthor || n[14] !== displayType || n[15] !== msgKey || n[16] !== errorFallback || n[17] !== unifiedResponse) {
                T = u.jsx(o("WAWebUnifiedResponseBubble.react").WAWebUnifiedResponseBubble, {
                    displayAuthor,
                    displayType,
                    errorFallback,
                    msgKey,
                    unifiedResponse
                });
                n[13] = displayAuthor;
                n[14] = displayType;
                n[15] = msgKey;
                n[16] = errorFallback;
                n[17] = unifiedResponse;
                n[18] = T;
            } else {
                T = n[18];
            }
            const D = T;
            let x;
            if (n[19] !== displayAuthor || n[20] !== displayType || n[21] !== msgKey) {
                x = function() {
                    return <P5Component displayAuthor={displayAuthor} displayType={displayType} msgKey={msgKey}/>;
                };
                n[19] = displayAuthor;
                n[20] = displayType;
                n[21] = msgKey;
                n[22] = x;
            } else {
                x = n[22];
            }
            let $;
            if (n[23] !== displayAuthor || n[24] !== displayType || n[25] !== y || n[26] !== C || n[27] !== msgKey || n[28] !== unifiedResponse || n[29] !== D) {
                const Component = o("WAWebErrorBoundary.react").ErrorBoundary;
                $ = o("WAWebHatchJarvisReplyGate").shouldDrawHatchJarvisReply({
                    chatId: msgKey.remote,
                    isForwarded: C || y != null,
                    isFromMe: msgKey.fromMe,
                    unifiedResponse
                }) ? <Component name="WAWebHatchJarvisBubble" fallback={function() {
                    return D;
                }} onError={_}>{u.jsx(r("WAWebHatchJarvisBubbleLoadable"), {
                    displayAuthor,
                    displayType,
                    errorFallback: function() {
                        return <M11 msgKey={msgKey}/>;
                    },
                    fallback: D,
                    msgKey
                })}</Component> : D;
                n[23] = displayAuthor;
                n[24] = displayType;
                n[25] = y;
                n[26] = C;
                n[27] = msgKey;
                n[28] = unifiedResponse;
                n[29] = D;
                n[30] = $;
            } else {
                $ = n[30];
            }
            let P;
            if (n[31] !== x || n[32] !== $) {
                const Component = o("WAWebErrorBoundary.react").ErrorBoundary;
                P = <Component name="WAWebUnifiedResponseBubble" fallback={x} onError={f}>{$}</Component>;
                n[31] = x;
                n[32] = $;
                n[33] = P;
            } else {
                P = n[33];
            }
            return P;
        }
        let N;
        if (n[34] !== displayAuthor || n[35] !== displayType || n[36] !== msgKey) {
            N = <P5Component displayAuthor={displayAuthor} displayType={displayType} msgKey={msgKey}/>;
            n[34] = displayAuthor;
            n[35] = displayType;
            n[36] = msgKey;
            n[37] = N;
        } else {
            N = n[37];
        }
        return N;
    }
    function M11(e) {
        const t = o("react-compiler-runtime").c(6);
        const e_msgKey = e.msgKey;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = [
                o("WAWebMsgGetters").getRichResponse
            ];
            t[0] = a;
        } else {
            a = t[0];
        }
        const i = o("useWAWebMsgValues").useMsgValues(e_msgKey, a);
        const l = i[0];
        let s;
        if (t[1] !== e_msgKey || t[2] !== l) {
            s = l == null ? [] : o("WAWebRichResponseMsgUtils").getBundledRichResponseFragments(l.fragments).map((fragment, t)=>u.jsx(r("WAWebRichResponseFragment.react"), {
                    fragment,
                    msgKey: e_msgKey,
                    parseState: l.parseState
                }, t));
            t[1] = e_msgKey;
            t[2] = l;
            t[3] = s;
        } else {
            s = t[3];
        }
        const c = s;
        let d;
        if (t[4] !== c) {
            const Component = o("WAWebFlex.react").FlexColumn;
            d = <Component align="stretch" rowGap={12}>{c}</Component>;
            t[4] = c;
            t[5] = d;
        } else {
            d = t[5];
        }
        return d;
    }
    function P5Component(e) {
        const t = o("react-compiler-runtime").c(17);
        const { displayAuthor, displayType, msgKey } = e;
        let l;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            l = [
                o("WAWebMsgGetters").getRichResponse,
                o("WAWebMsgGetters").getBotEditType,
                o("WAWebFrontendMsgGetters").getSafeMsg
            ];
            t[0] = l;
        } else {
            l = t[0];
        }
        const s = o("useWAWebMsgValues").useMsgValues(msgKey, l);
        const c = s[0];
        const d = s[1];
        const p = s[2];
        o("WAWebUseBotMessageUpdateScrolling").useBotMessageUpdateScrolling(msgKey);
        if (c?.parseState === o("WAWebRichResponse.flow").RichResponseParseState.Unparsed) {
            let _;
            if (t[1] !== d || t[2] !== displayAuthor || t[3] !== displayType || t[4] !== msgKey || t[5] !== p) {
                const Component = r("WAWebMessageTextBubble.react");
                _ = d == null || d === o("WAWebBotTypes").BotMsgEditType.LAST ? u.jsx(r("WAWebUnsupportedMessage"), {
                    msg: p,
                    displayAuthor,
                    hideUpdateButton: true
                }) : <Component msgKey={msgKey} displayAuthor={displayAuthor} displayType={displayType}>{u.jsx(r("WAWebMessageBubbleTypingIndicator.react"), {
                    isBotMsgStreaming: false
                })}</Component>;
                t[1] = d;
                t[2] = displayAuthor;
                t[3] = displayType;
                t[4] = msgKey;
                t[5] = p;
                t[6] = _;
            } else {
                _ = t[6];
            }
            return _;
        }
        let f;
        if (t[7] !== msgKey) {
            f = <M11 msgKey={msgKey}/>;
            t[7] = msgKey;
            t[8] = f;
        } else {
            f = t[8];
        }
        let g;
        if (t[9] !== msgKey || t[10] !== f) {
            const Component = r("WAWebMessageSpacerText.react");
            g = <Component msgKey={msgKey}>{f}</Component>;
            t[9] = msgKey;
            t[10] = f;
            t[11] = g;
        } else {
            g = t[11];
        }
        let h;
        if (t[12] !== displayAuthor || t[13] !== displayType || t[14] !== msgKey || t[15] !== g) {
            const Component = r("WAWebMessageTextBubble.react");
            h = <Component msgKey={msgKey} displayAuthor={displayAuthor} displayType={displayType}>{g}</Component>;
            t[12] = displayAuthor;
            t[13] = displayType;
            t[14] = msgKey;
            t[15] = g;
            t[16] = h;
        } else {
            h = t[16];
        }
        return h;
    }
    function _(e) {
        r("FBLogger")("wa_web_ur_parser").catching(e).mustfix("Error rendering a Jarvis reply, falling back to its unified response sections");
    }
    function f(e) {
        r("FBLogger")("wa_web_ur_parser").catching(e).mustfix("Error rendering WAWebUnifiedResponseBubble, falling back to RichResponseBubble");
    }
    function g(e) {
        if (e.type === o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE) {
            return e;
        }
        return null;
    }
    l.default = d;
}, 98);