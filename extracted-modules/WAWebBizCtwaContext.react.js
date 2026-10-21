__d("WAWebBizCtwaContext.react", [
    "WAWebBizCtwaAGMUtils",
    "WAWebBizCtwaContextImagePreview.react",
    "WAWebBizCtwaContextLargeImagePreview.react",
    "WAWebBizCtwaContextVideoPreview.react",
    "WAWebBizCtwaPreview.react",
    "WAWebBizSuspiciousLabel.react",
    "WAWebCTWAGatingUtils",
    "WAWebCtwaAGMUtils",
    "WAWebFrontendMsgGetters",
    "WAWebMessageViaAdIndicator.react",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function UComponent(e) {
        const t = o("react-compiler-runtime").c(20);
        const { msgKey, wrapperClass } = e;
        let i;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = [
                o("WAWebMsgGetters").getCtwaContext,
                o("WAWebMsgGetters").getType,
                o("WAWebMsgGetters").getIsSentByMe,
                o("WAWebFrontendMsgGetters").getSafeMsg
            ];
            t[0] = i;
        } else {
            i = t[0];
        }
        const l = o("useWAWebMsgValues").useMsgValues(msgKey, i);
        const ctwaContext = l[0];
        const d = l[1];
        const m = l[2];
        const p = l[3];
        if (ctwaContext == null) {
            return null;
        }
        let _;
        if (t[1] !== p) {
            _ = p.unsafe();
            t[1] = p;
            t[2] = _;
        } else {
            _ = t[2];
        }
        const f = _;
        let g;
        if (t[3] !== ctwaContext.isSuspiciousLink || t[4] !== msgKey) {
            g = ctwaContext.isSuspiciousLink === true ? s.jsx(o("WAWebBizSuspiciousLabel.react").SuspiciousLabel, {
                msgKey
            }) : null;
            t[3] = ctwaContext.isSuspiciousLink;
            t[4] = msgKey;
            t[5] = g;
        } else {
            g = t[5];
        }
        const h = g;
        let y;
        if (t[6] !== ctwaContext.alwaysShowAdAttribution || t[7] !== msgKey) {
            y = ctwaContext.alwaysShowAdAttribution === true ? s.jsx(r("WAWebMessageViaAdIndicator.react"), {
                msgKey
            }) : null;
            t[6] = ctwaContext.alwaysShowAdAttribution;
            t[7] = msgKey;
            t[8] = y;
        } else {
            y = t[8];
        }
        const C = y;
        const b = d !== o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE || o("WAWebBizCtwaAGMUtils").isAutomatedGreetingMessage({
            isAGMShown: ctwaContext.automatedGreetingMessageShown,
            msgSource: ctwaContext.sourceApp,
            msgType: d
        }) ? wrapperClass : "";
        let v;
        if (t[9] !== ctwaContext || t[10] !== m || t[11] !== f || t[12] !== msgKey || t[13] !== d) {
            v = <C1 ctwaContext={ctwaContext} isSentByMe={m} msg={f} msgKey={msgKey} type={d}/>;
            t[9] = ctwaContext;
            t[10] = m;
            t[11] = f;
            t[12] = msgKey;
            t[13] = d;
            t[14] = v;
        } else {
            v = t[14];
        }
        let S;
        if (t[15] !== h || t[16] !== b || t[17] !== v || t[18] !== C) {
            S = <div className={b}>{h}{C}{v}</div>;
            t[15] = h;
            t[16] = b;
            t[17] = v;
            t[18] = C;
            t[19] = S;
        } else {
            S = t[19];
        }
        return S;
    }
    function C1(e) {
        const t = o("react-compiler-runtime").c(12);
        const { ctwaContext, isSentByMe, msg, msgKey, type } = e;
        if (ctwaContext.sourceUrl == null || ctwaContext.mediaType === o("WAWebProtobufsE2E.pb").ContextInfo$ExternalAdReplyInfo$MediaType.NONE || ctwaContext.adContextPreviewDismissed === true && o("WAWebCTWAGatingUtils").isHideAdContextIfSoftDismissed()) {
            return null;
        }
        const c = o("WAWebCtwaAGMUtils").isWamoAGMIntegrationEnabled(ctwaContext.sourceApp) && ctwaContext.automatedGreetingMessageShown === true;
        if (c) {
            if (type === o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE && (ctwaContext.mediaType === o("WAWebProtobufsE2E.pb").ContextInfo$ExternalAdReplyInfo$MediaType.VIDEO || ctwaContext.mediaType === o("WAWebProtobufsE2E.pb").ContextInfo$ExternalAdReplyInfo$MediaType.IMAGE)) {
                let d;
                if (t[0] !== ctwaContext || t[1] !== msgKey) {
                    d = s.jsx(r("WAWebBizCtwaPreview.react"), {
                        context: ctwaContext,
                        msgKey
                    });
                    t[0] = ctwaContext;
                    t[1] = msgKey;
                    t[2] = d;
                } else {
                    d = t[2];
                }
                return d;
            }
            return null;
        }
        if (ctwaContext.mediaType === o("WAWebProtobufsE2E.pb").ContextInfo$ExternalAdReplyInfo$MediaType.VIDEO) {
            let m;
            if (t[3] !== ctwaContext || t[4] !== msg) {
                m = s.jsx(r("WAWebBizCtwaContextVideoPreview.react"), {
                    msg,
                    context: ctwaContext
                });
                t[3] = ctwaContext;
                t[4] = msg;
                t[5] = m;
            } else {
                m = t[5];
            }
            return m;
        }
        if (ctwaContext.mediaType === o("WAWebProtobufsE2E.pb").ContextInfo$ExternalAdReplyInfo$MediaType.IMAGE) {
            if (o("WAWebCTWAGatingUtils").isAdsAttributionEnabled()) {
                let p;
                if (t[6] !== ctwaContext || t[7] !== isSentByMe) {
                    p = s.jsx(r("WAWebBizCtwaContextLargeImagePreview.react"), {
                        context: ctwaContext,
                        isSentByMe
                    });
                    t[6] = ctwaContext;
                    t[7] = isSentByMe;
                    t[8] = p;
                } else {
                    p = t[8];
                }
                return p;
            }
            let _;
            if (t[9] !== ctwaContext || t[10] !== isSentByMe) {
                _ = s.jsx(r("WAWebBizCtwaContextImagePreview.react"), {
                    context: ctwaContext,
                    isSentByMe,
                    compose: false
                });
                t[9] = ctwaContext;
                t[10] = isSentByMe;
                t[11] = _;
            } else {
                _ = t[11];
            }
            return _;
        }
        return null;
    }
    l.default = UComponent;
}, 98);