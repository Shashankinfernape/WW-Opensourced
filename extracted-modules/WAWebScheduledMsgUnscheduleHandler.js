__d("WAWebScheduledMsgUnscheduleHandler", [
    "WALogger",
    "WAWebDBProcessRevokeMsgs",
    "WAWebScheduledMsgRevealKeyStore",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e, t) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            const r = t.toString();
            const a = t.id;
            let i = yield o("WAWebScheduledMsgRevealKeyStore").getRevealKeyByMsgId(r);
            if (i == null && r !== a) {
                i = yield o("WAWebScheduledMsgRevealKeyStore").getRevealKeyByMsgId(a);
            }
            if (i != null) {
                const u = i.chatId ?? "<unknown>";
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg][unschedule] cleanup msg=",
                    " chat=",
                    ""
                ])), i.msgId, u);
                yield o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(i.msgId);
            } else {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg][unschedule] no reveal-key row for ",
                    "/",
                    ""
                ])), r, a);
            }
            const { newMsgKey: c, revokeTimestamp: d, sender: m } = n;
            if (m != null) {
                yield o("WAWebDBProcessRevokeMsgs").processRevokeMsgs([
                    {
                        revokeMsgKey: t,
                        newMsgKey: c,
                        timestamp: d,
                        subtype: "sender_revoke",
                        sender: m,
                        revokeTimestamp: d,
                        skipRevokeWindow: true
                    }
                ]);
            }
        });
        return c.apply(this, arguments);
    }
    l.handleScheduledMsgUnschedule = u;
}, 98);