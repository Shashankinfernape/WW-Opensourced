__d("WAWebMuteMentionAllUtils", [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WATypeUtils",
    "WAWebChatMuteBridge",
    "WAWebNoop",
    "WAWebWid"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    const _ = -1;
    function f(t, a) {
        if (!r("WAWebWid").isGroup(t.id)) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "models:Mute:muteMentionAll called on non-group chat ",
                ""
            ])), t.id.toString());
            return (p || (p = n("Promise"))).reject();
        }
        let l = a;
        if (!o("WATypeUtils").isNumber(l)) {
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "models:Mute:muteMentionAll called with invalid expiration ",
                ""
            ])), l);
            return (p || (p = n("Promise"))).reject();
        }
        l = Math.round(l);
        if (l > 2000000000) {
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "models:Mute:muteMentionAll called with wrong units?",
                " exp:",
                ""
            ])), t.id.toString(), l);
        }
        if (l === _) {
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "models:Mute:muteMentionAll ",
                " muted, no expiration"
            ])), t.id.toString());
        } else {
            const m = l - o("WATimeUtils").unixTimeWithoutClockSkewCorrection();
            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "models:Mute:muteMentionAll ",
                " duration:",
                ""
            ])), t.id.toString(), m);
        }
        if (t.promises.muteMentionAll) {
            return t.promises.muteMentionAll.then(r("WAWebNoop"));
        }
        t.promises.muteMentionAll = o("WAWebChatMuteBridge").sendConversationMute({
            _expirationNew: t.expiration,
            chatId: t.id,
            expiration: t.expiration ?? 0,
            mentionAllMuteExpiration: l
        });
        return t.promises.muteMentionAll.then((e)=>{
            if (e.status === 200) {
                t.set({
                    mentionAllMuteExpiration: l
                });
            }
        }).finally(()=>{
            t.promises.muteMentionAll = null;
        });
    }
    function g(e) {
        o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
            "models:Mute:unmuteMentionAll ",
            ""
        ])), e.id.toString());
        if (e.promises.unmuteMentionAll) {
            return e.promises.unmuteMentionAll.then(r("WAWebNoop"));
        }
        e.promises.unmuteMentionAll = o("WAWebChatMuteBridge").sendConversationMute({
            _expirationNew: e.expiration,
            chatId: e.id,
            expiration: e.expiration ?? 0,
            mentionAllMuteExpiration: 0
        });
        return e.promises.unmuteMentionAll.then((t)=>{
            if (t.status === 200) {
                e.set({
                    mentionAllMuteExpiration: 0
                });
            }
        }).finally(()=>{
            e.promises.unmuteMentionAll = null;
        });
    }
    l.muteMentionAll = f;
    l.unmuteMentionAll = g;
}, 98);