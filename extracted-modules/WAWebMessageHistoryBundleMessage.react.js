__d("WAWebMessageHistoryBundleMessage.react", [
    "fbt",
    "WALogger",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebDownloadHistoryBundleAction",
    "WAWebFormatMessageHistoryBundleBody",
    "WAWebFrontendMsgGetters",
    "WAWebGroupHistoryMsgData.flow",
    "WAWebGroupHistoryReceiverUserJourneyLogger",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgModelPropUtils",
    "WAWebMsgType",
    "WAWebSystemMessageWithSingleCTA.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWamEnumWebcRmrReasonCode",
    "WDSIconIcError.react",
    "WDSSpinner.react",
    "fbs",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    let u;
    const c = u || (u = o("react"));
    const u_useEffect = u.useEffect;
    const m = {
        messageBody: {
            display: "x78zum5",
            flexWrap: "x1a02dak",
            paddingTop: "x1gxa6cn",
            paddingBottom: "xa0aww2",
            columnGap: "x1trrmfo",
            justifyContent: "xl56j7k",
            $$css: true
        },
        error: {
            color: "xqnyt8g",
            $$css: true
        },
        cta: {
            display: "x78zum5",
            alignItems: "x6s0dn4",
            $$css: true
        }
    };
    function p(e) {
        const t = o("react-compiler-runtime").c(27);
        const { msgKey, ref } = e;
        let i;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = [
                o("WAWebMsgGetters").getGroupHistoryBundleMetadata,
                o("WAWebMsgGetters").getAuthor
            ];
            t[0] = i;
        } else {
            i = t[0];
        }
        const l = o("useWAWebMsgValues").useMsgValues(msgKey, i);
        const s = l[0];
        const u = l[1];
        const p = s?.processState;
        let f;
        let g;
        if (t[1] !== msgKey || t[2] !== p) {
            f = function() {
                if (!(p !== o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState.NONE || msgKey.fromMe)) {
                    const e = C(msgKey);
                    if (!(e == null || !o("WAWebMsgModelPropUtils").isTrusted(e.unsafe()))) {
                        r("WAWebDownloadHistoryBundleAction")(e, p, {
                            downloadEvenIfExpensive: false,
                            rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.MSG_RENDER,
                            isUserInitiated: false
                        });
                    }
                }
            };
            g = [
                msgKey,
                p
            ];
            t[1] = msgKey;
            t[2] = p;
            t[3] = f;
            t[4] = g;
        } else {
            f = t[3];
            g = t[4];
        }
        u_useEffect(f, g);
        const b = msgKey.fromMe || p === o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState.DEDUPED;
        const v = p === o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState.FAILED && m.error;
        let S;
        if (t[5] !== v) {
            S = [
                m.messageBody,
                v
            ];
            t[5] = v;
            t[6] = S;
        } else {
            S = t[6];
        }
        let R;
        if (t[7] !== u || t[8] !== s || t[9] !== p) {
            R = o("WAWebFormatMessageHistoryBundleBody").formatMessageHistoryBundleBodyFor({
                author: u,
                metadata: s
            }, p);
            t[7] = u;
            t[8] = s;
            t[9] = p;
            t[10] = R;
        } else {
            R = t[10];
        }
        let L;
        if (t[11] !== msgKey.fromMe || t[12] !== p) {
            L = h(p, msgKey.fromMe);
            t[11] = msgKey.fromMe;
            t[12] = p;
            t[13] = L;
        } else {
            L = t[13];
        }
        let E;
        if (t[14] !== p) {
            E = y(p);
            t[14] = p;
            t[15] = E;
        } else {
            E = t[15];
        }
        let k;
        if (t[16] !== b || t[17] !== msgKey || t[18] !== p) {
            k = b ? null : function() {
                _(msgKey, p);
            };
            t[16] = b;
            t[17] = msgKey;
            t[18] = p;
            t[19] = k;
        } else {
            k = t[19];
        }
        let I;
        if (t[20] !== ref || t[21] !== S || t[22] !== R || t[23] !== L || t[24] !== E || t[25] !== k) {
            const Component = o("WAWebSystemMessageWithSingleCTA.react").SystemMessageWithSingleCTA;
            I = <Component xstyle={S} bodyText={R} ctaText={L} ctaXstyle={m.cta} icon={E} onClick={k} onclickRef={ref} testid="message-history-bundle-message"/>;
            t[20] = ref;
            t[21] = S;
            t[22] = R;
            t[23] = L;
            t[24] = E;
            t[25] = k;
            t[26] = I;
        } else {
            I = t[26];
        }
        return I;
    }
    function _(msgKey, t) {
        if (t === o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState.NONE || t === o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState.FAILED) {
            return f(msgKey, t);
        }
        if (t === o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState.INJECTED || t === o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState.INJECTED_PARTIAL) {
            return g(msgKey);
        }
        return null;
    }
    function f(msgKey, t) {
        const n = C(msgKey);
        if (n != null) {
            o("WAWebGroupHistoryReceiverUserJourneyLogger").GroupHistoryReceiverUserJourneyLogger.downloadButtonClicked(msgKey.remote.toJid());
            r("WAWebDownloadHistoryBundleAction")(n, t, {
                downloadEvenIfExpensive: true,
                rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.MSG_CLICK,
                isUserInitiated: true
            });
        }
    }
    function g(msgKey) {
        const n = o("WAWebMsgCollection").MsgCollection.get(msgKey);
        if (n != null) {
            o("WAWebGroupHistoryReceiverUserJourneyLogger").GroupHistoryReceiverUserJourneyLogger.viewButtonClicked(msgKey.remote.toJid());
            const r = o("WAWebFrontendMsgGetters").getChat(n);
            const a = r.msgs.findFirst(function(e) {
                const n = o("WAWebMsgGetters").getGroupHistoryBundleMessageKey(e);
                return n != null && n.id === msgKey.id;
            });
            if (a) {
                o("WAWebCmd").Cmd.openChatAt({
                    chat: r,
                    chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.MessageHistoryBundle,
                    msgContext: {
                        collection: a.getMsgChunk() || r.msgs,
                        msg: a,
                        key: a.id,
                        highlightMsg: true
                    }
                }).catch(()=>{
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[group-history] open chat at first bundle msg failed"
                    ])));
                });
            } else {
                o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, {
                    msg: s._("No message history to view")
                }));
            }
        }
    }
    function h(e, fromMe) {
        if (fromMe) {
            return null;
        }
        if (e === o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState.NONE) {
            return r("fbs")._("Download");
        }
        if (e === o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState.INJECTED || e === o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState.INJECTED_PARTIAL) {
            return r("fbs")._("View");
        }
        if (e === o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState.FAILED) {
            return r("fbs")._("Retry");
        }
        return null;
    }
    function y(e) {
        if (e === o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState.DOWNLOADING || e === o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState.PROCESSING) {
            return c.jsx(r("WDSSpinner.react"), {
                size: 16
            });
        }
        if (e === o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState.FAILED) {
            return c.jsx(r("WDSIconIcError.react"), {
                height: 16
            });
        }
        return null;
    }
    function C(e) {
        const n = o("WAWebMsgCollection").MsgCollection.get(e)?.safe();
        if (n == null || n.type !== o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_BUNDLE) {
            return null;
        }
        return n;
    }
    l.default = p;
}, 226);