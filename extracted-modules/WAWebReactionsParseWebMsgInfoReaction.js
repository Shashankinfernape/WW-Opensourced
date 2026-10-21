__d("WAWebReactionsParseWebMsgInfoReaction", [
    "WALogger",
    "WALongInt",
    "WAWebAddOnParseWebMsgInfo",
    "WAWebE2EProtoUtils",
    "WAWebProtobufsWeb.pb",
    "WAWebWid",
    "WAWebWidFactory",
    "getErrorSafe",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c(t, n) {
        const a = [];
        try {
            if (t == null || n == null) {
                return a;
            }
            const l = [];
            if (t.messageAddOns?.length > 0) {
                for (const c of t.messageAddOns){
                    if (c.messageAddOnType === o("WAWebProtobufsWeb.pb").MessageAddOn$MessageAddOnType.REACTION) {
                        const m = c.messageAddOn?.reactionMessage;
                        if (m != null) {
                            l.push({
                                key: r("nullthrows")(c.messageAddOnKey),
                                senderTimestampMs: o("WALongInt").numberOrThrowIfTooLarge(r("nullthrows")(m.senderTimestampMs)),
                                text: m.text,
                                unread: c.status !== o("WAWebProtobufsWeb.pb").WebMessageInfo$Status.READ
                            });
                        }
                    }
                }
            } else {
                if (t.reactions != null && n.reactions != null) {
                    l.push(...n.reactions);
                }
            }
            let p = 0;
            let _ = 0;
            l.forEach(({ key: t, senderTimestampMs: i, text: l, unread: s })=>{
                const u = o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(l ?? "");
                const c = r("nullthrows")(o("WAWebAddOnParseWebMsgInfo").buildAddonMsgKey({
                    key: t
                }));
                const { msgKey: d, sender: m } = c;
                if (m == null || !(m instanceof r("WAWebWid"))) {
                    p++;
                } else if (u == null) {
                    _++;
                } else {
                    a.push({
                        id: d,
                        reactionTimestamp: i,
                        reactionText: u,
                        reactionParentKey: n.id,
                        sender: o("WAWebWidFactory").createWid(m.toString()),
                        unread: d.fromMe ? false : s === true
                    });
                }
            });
            if (p > 0) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[parseWebMsgInfoReaction] invalid sender cnt=",
                    ""
                ])), p);
            }
            if (_ > 0) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[parseWebMsgInfoReaction] null text cnt=",
                    ""
                ])), _);
            }
        } catch (e) {
            const f = r("getErrorSafe")(e);
            o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[parseWebMsgInfoReaction] failed err=",
                " stack=",
                ""
            ])), f?.name, f?.stack);
        }
        return a;
    }
    l.parseWebMsgInfoReaction = c;
}, 98);