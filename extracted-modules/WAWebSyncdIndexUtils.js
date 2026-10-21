__d("WAWebSyncdIndexUtils", [
    "WALogger",
    "WAWebMsgKey",
    "WAWebSyncdConst",
    "WAWebSyncdMetrics",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumMdSyncdCriticalEventCode",
    "WAWebWid",
    "WAWebWidFactory",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = /\d(?=)/gm;
    function d(e) {
        return {
            actionState: o("WAWebSyncdConst").SyncActionState.Malformed
        };
    }
    function m(e) {
        const t = e.toString();
        if (!e.fromMe || e.remote.isUser()) {
            return t;
        }
        const n = t.lastIndexOf("_");
        return t.substring(0, n);
    }
    function p(t, n, a, i) {
        let l;
        if (!r("WAWebWid").isWid(t)) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "syncKeyToMsgKey: invalid remote value: ",
                ""
            ])), t.replace(c, "#"));
            return null;
        }
        const u = o("WAWebWidFactory").createWid(t);
        if (!u.isUser() && !u.isNewsletter()) {
            if (a === "0" && !r("WAWebWid").isWid(i)) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "syncKeyToMsgKey: invalid participant value: ",
                    ""
                ])), i.replace(c, "#"));
                return null;
            }
            if (a === "1") {
                l = o("WAWebUserPrefsMeUser").getMeUserOrThrow();
            } else {
                l = o("WAWebWidFactory").createWid(i);
            }
        }
        return new (r("WAWebMsgKey"))({
            fromMe: a === "1",
            remote: u,
            id: n,
            participant: l
        });
    }
    function _(e) {
        const t = JSON.parse(e);
        if (t.length < 5) {
            throw r("err")("[sync-action] star action index malformed, cannot create MsgKey");
        }
        const n = p(t[1], t[2], t[3], t[4]);
        if (!n) {
            o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[sync-action] star index malformed, MsgKey failed"
            ])));
            throw r("err")("[sync-action] star action index data is malformed, , cannot create MsgKey");
        }
        return n;
    }
    function f(e, t) {
        o("WAWebSyncdMetrics").uploadMdCriticalEventMetric(o("WAWebWamEnumMdSyncdCriticalEventCode").MD_SYNCD_CRITICAL_EVENT_CODE.ACTION_INVALID_INDEX_DATA, e, t);
        return {
            actionState: o("WAWebSyncdConst").SyncActionState.Malformed
        };
    }
    l.malformedActionValue = d;
    l.msgKeyToDbIdWithoutFromMeParticipant = m;
    l.syncKeyToMsgKey = p;
    l.getMsgKeyFromStarActionIndex = _;
    l.malformedActionIndex = f;
}, 98);