__d("WAWebGetChatTypeInd", [
    "WAWebWamEnumChatType",
    "WAWebWidFactory"
], function(t, n, r, o, a, i, l) {
    const e = new Set([
        "unknown",
        "low",
        "high"
    ]);
    function s(t) {
        if (t == null) {
            return o("WAWebWamEnumChatType").CHAT_TYPE.INDIVIDUAL;
        }
        if (t.isApi) {
            return o("WAWebWamEnumChatType").CHAT_TYPE.ENT;
        }
        if (t.isSmb) {
            return o("WAWebWamEnumChatType").CHAT_TYPE.SMB;
        }
        if (t.level != null && e.has(t.level)) {
            return o("WAWebWamEnumChatType").CHAT_TYPE.BUSINESS;
        }
        return o("WAWebWamEnumChatType").CHAT_TYPE.INDIVIDUAL;
    }
    function u(e, t) {
        if (e.isGroup()) {
            if (t != null) {
                return o("WAWebWidFactory").createWid(t);
            }
            return c(e) ?? e;
        }
        return e;
    }
    function c(e) {
        const t = e.user.indexOf("-");
        if (t === -1) {
            return null;
        }
        return o("WAWebWidFactory").createWid(`${e.user.slice(0, t)}@c.us`);
    }
    l.getChatTypeInd = s;
    l.getChatTypeWid = u;
}, 98);