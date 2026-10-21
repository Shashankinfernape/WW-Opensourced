__d("WAWebPaymentType.react", [
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebFormatPaymentMsg",
    "WAWebName.react",
    "WAWebWidFormat",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(7);
        const { isQuoted, msgKey, receiverJid, subtype } = e;
        let l;
        if (t[0] !== msgKey || t[1] !== receiverJid || t[2] !== subtype) {
            l = subtype === "invite" && msgKey ? o("WAWebFormatPaymentMsg").formatPaymentInviteMessageText(msgKey) : c(receiverJid, subtype);
            t[0] = msgKey;
            t[1] = receiverJid;
            t[2] = subtype;
            t[3] = l;
        } else {
            l = t[3];
        }
        const u = l;
        let d;
        if (t[4] !== u || t[5] !== isQuoted) {
            d = u != null ? <span {...babelHelpers.extends({}, {
                0: {
                    className: "x14ug900"
                },
                1: {
                    className: "x14ug900 x13a8xbf"
                }
            }[(isQuoted === true) << 0], {
                children: u
            })}/> : null;
            t[4] = u;
            t[5] = isQuoted;
            t[6] = d;
        } else {
            d = t[6];
        }
        return d;
    }
    function c(receiverJid, subtype) {
        if (!receiverJid) {
            return null;
        }
        const n = o("WAWebContactCollection").ContactCollection.get(receiverJid);
        if (n && o("WAWebContactGetters").getIsMe(n)) {
            return o("WAWebFormatPaymentMsg").getPaymentTypeTextForSelf(subtype);
        }
        const r = n ? s.jsx(o("WAWebName.react").Name, {
            contact: n,
            showNotifyName: true
        }) : o("WAWebWidFormat").widToFormattedUser(receiverJid);
        return o("WAWebFormatPaymentMsg").getPaymentTypeText(subtype, <span className="xk50ysn">{r}</span>);
    }
    l.default = u;
}, 98);