__d("WAWebBroadcastNotification.react", [
    "WAWebBizBroadcastProContextCard.react",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebFormatBroadcastNotification",
    "WAWebMsgGetters",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(8);
        const { isLastMsg, msgKey } = e;
        let i;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = [
                o("WAWebMsgGetters").getSubtype,
                o("WAWebMsgGetters").getRecipients
            ];
            t[0] = i;
        } else {
            i = t[0];
        }
        const l = o("useWAWebMsgValues").useMsgValues(msgKey, i);
        const u = l[0];
        const c = l[1];
        if (u === o("WAWebCommonMsgSubtypeTypes").MsgSubtype.BbProCreate) {
            let d;
            if (t[1] !== isLastMsg) {
                d = isLastMsg ? o("WAWebFormatBroadcastNotification").getBizBroadcastProChatMessage() : s.jsx(r("WAWebBizBroadcastProContextCard.react"), {});
                t[1] = isLastMsg;
                t[2] = d;
            } else {
                d = t[2];
            }
            return d;
        } else if (u === o("WAWebCommonMsgSubtypeTypes").MsgSubtype.Create) {
            let m;
            if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
                m = o("WAWebFormatBroadcastNotification").getAudienceCreateMessage();
                t[3] = m;
            } else {
                m = t[3];
            }
            return m;
        } else if (u === "add") {
            let p;
            if (t[4] !== c) {
                p = o("WAWebFormatBroadcastNotification").getBroadcastAddMessage(c);
                t[4] = c;
                t[5] = p;
            } else {
                p = t[5];
            }
            return p;
        } else if (u === "remove") {
            let _;
            if (t[6] !== c) {
                _ = o("WAWebFormatBroadcastNotification").getBroadcastRemoveMessage(c);
                t[6] = c;
                t[7] = _;
            } else {
                _ = t[7];
            }
            return _;
        }
        return null;
    }
    l.default = u;
}, 98);