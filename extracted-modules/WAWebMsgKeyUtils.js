__d("WAWebMsgKeyUtils", [
    "$InternalEnum",
    "WALogger",
    "WAWebIsCagGroupCache",
    "WAWebUserPrefsMeUser",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = n("$InternalEnum").Mirrored([
        "Addon",
        "Message",
        "EditMessage"
    ]);
    function c(e) {
        return e.fromMe && o("WAWebUserPrefsMeUser").isMeAccount(e.remote);
    }
    function d(t, n) {
        const t_remote = t.remote;
        if (t_remote.isGroup()) {
            let i;
            if (t.participant == null) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "missing participant in a group ",
                    " ",
                    " ",
                    ""
                ])), t.id, t.remote, t.fromMe).sendLogs("group-missing-participant");
                return false;
            }
            const l = r("WAWebIsCagGroupCache").isCag(t_remote);
            if (l && n === u.Addon) {
                return true;
            }
            return !!((i = t.participant) != null && i.isLid());
        }
        return t_remote.isLid();
    }
    function m(e, t) {
        if (d(t, e)) {
            return o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
        }
        if (e === u.Addon) {
            if (r("WAWebIsCagGroupCache").isCag(t.remote)) {
                return o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
            }
            return o("WAWebUserPrefsMeUser").getMeUserOrThrow();
        }
        if (e === u.EditMessage || e === u.Message) {
            return o("WAWebUserPrefsMeUser").getMeUserOrThrow();
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })();
    }
    function p(e, t) {
        const e_remote = e.remote;
        const a = m(t, e);
        if (e_remote.isBroadcastList()) {
            const i = r("nullthrows")(e.participant, "missing participant in broadcast");
            const l = e.fromMe ? a : i;
            const u = e.fromMe ? i : a;
            return {
                from: l,
                to: u,
                broadcastId: e_remote
            };
        }
        const c = e.fromMe ? a : e_remote;
        const d = e.fromMe ? e_remote : a;
        const p = e_remote.isGroup() || e_remote.isStatus();
        if (!p && e.participant) {
            o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "unexpected participant ",
                " in ",
                ""
            ])), e.participant, e_remote).sendLogs("msgKey-unexpected-participant", {
                sampling: 0.01
            });
        }
        const author = p ? e.participant : undefined;
        if (e_remote.isStatus()) {
            return {
                from: c,
                to: d,
                author,
                broadcastId: e_remote
            };
        }
        return {
            from: c,
            to: d,
            author
        };
    }
    l.TranslateMsgKeyType = u;
    l.isNoteToSelf = c;
    l.isLidMsgKey = d;
    l.msgKeyToTargetInfo = p;
}, 98);