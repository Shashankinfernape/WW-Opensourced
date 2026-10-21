__d("WAWebBroadcastMeta.react", [
    "WAWebBizBroadcastProMessageUtils",
    "WAWebChatGetters",
    "WAWebFrontendMsgGetters",
    "WAWebMessageMeta.react",
    "WAWebMsgGetters",
    "react",
    "react-compiler-runtime",
    "useWAWebBizBroadcastIsDelivering",
    "useWAWebIsBizBroadcastProChat",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function UComponent(e) {
        const t = o("react-compiler-runtime").c(16);
        const { displayType, isRTL, msgKey } = e;
        let l;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            l = [
                o("WAWebMsgGetters").getIsNewsletterMsg,
                o("WAWebMsgGetters").getIsSentByMe,
                o("WAWebMsgGetters").getPmCampaignId
            ];
            t[0] = l;
        } else {
            l = t[0];
        }
        const u = o("useWAWebMsgValues").useMsgValues(msgKey, l);
        const m = u[0];
        const p = u[1];
        const pmCampaignId = u[2];
        let f;
        if (t[1] !== m || t[2] !== msgKey) {
            f = o("WAWebFrontendMsgGetters").getChatByMsgKey(msgKey, m);
            t[1] = m;
            t[2] = msgKey;
            t[3] = f;
        } else {
            f = t[3];
        }
        const g = f;
        const h = r("useWAWebIsBizBroadcastProChat")(g);
        let isBizBroadcastProChat;
        if (t[4] !== g || t[5] !== h) {
            isBizBroadcastProChat = o("WAWebChatGetters").getIsBroadcast(g) && h;
            t[4] = g;
            t[5] = h;
            t[6] = isBizBroadcastProChat;
        } else {
            isBizBroadcastProChat = t[6];
        }
        let C;
        if (t[7] !== p || t[8] !== pmCampaignId || t[9] !== isBizBroadcastProChat) {
            C = o("WAWebBizBroadcastProMessageUtils").isBizBroadcastProOutgoingMessage({
                isBizBroadcastProChat,
                isSentByMe: p,
                pmCampaignId
            });
            t[7] = p;
            t[8] = pmCampaignId;
            t[9] = isBizBroadcastProChat;
            t[10] = C;
        } else {
            C = t[10];
        }
        const b = C;
        let v;
        if (t[11] !== displayType || t[12] !== b || t[13] !== isRTL || t[14] !== msgKey) {
            v = b ? <D2Component displayType={displayType} isDelivering={false} isRTL={isRTL} msgKey={msgKey} shouldUseStatusLayout/> : <C3Component displayType={displayType} isRTL={isRTL} msgKey={msgKey}/>;
            t[11] = displayType;
            t[12] = b;
            t[13] = isRTL;
            t[14] = msgKey;
            t[15] = v;
        } else {
            v = t[15];
        }
        return v;
    }
    function C3Component(e) {
        const t = o("react-compiler-runtime").c(5);
        const { displayType, isRTL, msgKey } = e;
        const l = r("useWAWebBizBroadcastIsDelivering")(msgKey);
        let u;
        if (t[0] !== displayType || t[1] !== l || t[2] !== isRTL || t[3] !== msgKey) {
            u = <D2Component displayType={displayType} isDelivering={l} isRTL={isRTL} msgKey={msgKey} shouldUseStatusLayout={l}/>;
            t[0] = displayType;
            t[1] = l;
            t[2] = isRTL;
            t[3] = msgKey;
            t[4] = u;
        } else {
            u = t[4];
        }
        return u;
    }
    function D2Component(e) {
        const t = o("react-compiler-runtime").c(10);
        const { displayType, isDelivering, isRTL, msgKey, shouldUseStatusLayout } = e;
        let u;
        if (t[0] !== isRTL || t[1] !== shouldUseStatusLayout) {
            u = ({
                0: {
                    className: "x18mqm2i xhsvlbd x14z9mp xz62fqu x1wbi8v6 x1n2onr6 x1n327nk"
                },
                2: {
                    className: "xhsvlbd x14z9mp xz62fqu x1wbi8v6 x1n2onr6 x1n327nk xtrg13t"
                },
                1: {
                    className: "x1n2onr6 x1n327nk x78zum5 xyen2ro x13a6bvl xfl633f x14z9mp xz62fqu x1lziwak xh8yej3"
                },
                3: {
                    className: "x1n2onr6 x1n327nk x78zum5 xyen2ro x13a6bvl xfl633f x14z9mp xz62fqu x1lziwak xh8yej3"
                }
            })[!!isRTL << 1 | !!shouldUseStatusLayout << 0];
            t[0] = isRTL;
            t[1] = shouldUseStatusLayout;
            t[2] = u;
        } else {
            u = t[2];
        }
        let c;
        if (t[3] !== displayType || t[4] !== isDelivering || t[5] !== msgKey) {
            c = s.jsx(o("WAWebMessageMeta.react").Meta, {
                displayType,
                isDelivering,
                msgKey
            });
            t[3] = displayType;
            t[4] = isDelivering;
            t[5] = msgKey;
            t[6] = c;
        } else {
            c = t[6];
        }
        let d;
        if (t[7] !== u || t[8] !== c) {
            d = <div {...babelHelpers.extends({}, u, {
                children: c
            })}/>;
            t[7] = u;
            t[8] = c;
            t[9] = d;
        } else {
            d = t[9];
        }
        return d;
    }
    l.default = UComponent;
}, 98);