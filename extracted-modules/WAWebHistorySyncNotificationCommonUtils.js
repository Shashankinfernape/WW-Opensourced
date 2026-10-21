__d("WAWebHistorySyncNotificationCommonUtils", [
    "WALogger",
    "WAWebCurrentUser",
    "WAWebHistorySyncLidChatGating",
    "WAWebHistorySyncLogUtils",
    "WAWebHistorySyncMsgKeyOverrideUtils",
    "WAWebKeepAndApplyBrazilPaymentStateUpdates",
    "WAWebParseWebMessageInfoApi",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsNotifications",
    "WAWebWid",
    "WAWebWidFactory",
    "getErrorSafe",
    "gkx"
], function(t, n, r, o, a, i, l) {
    let e;
    let p;
    let _;
    let f;
    let g;
    let h;
    let y;
    let C;
    let b;
    function v(t) {
        let n = null;
        if (o("WAWebCurrentUser").isEmployee()) {
            try {
                n = new Set(t.map(({ lid: t })=>t.toString()));
            } catch (t) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[history] could not create allLidMapping"
                ]))).catching(r("getErrorSafe")(t));
            }
        }
        return n;
    }
    function S(e) {
        if (e == null) {
            return "N/A";
        }
        let t = 0;
        const n = [];
        for (const r of e){
            n.push(r);
            if (t++ === 50) {
                break;
            }
        }
        return n.join(",");
    }
    function R({ allLidMapping: t, message: n, parsedMsg: r, totalMissingMapping: o }) {}
    function L({ allLidMapping: t, chunkInfo: n, dbChatId: a, historyLidPnMappings: i, message: l, protobufChatId: s, totalMissingMapping: u }) {
        let c = null;
        try {
            if (l != null) {
                c = o("WAWebParseWebMessageInfoApi").parseWebMessageInfo(l, i);
            }
            if (o("WAWebKeepAndApplyBrazilPaymentStateUpdates").isRoutedBrazilPaymentStateUpdateMsg(c)) {
                return null;
            }
            R({
                allLidMapping: t,
                message: l,
                parsedMsg: c,
                totalMissingMapping: u
            });
        } catch (e) {
            const d = r("getErrorSafe")(e);
            o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] parseWebMessageInfo failed"
            ]))).catching(d);
            if (!r("gkx")("26258")) {
                o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] parseWebMessageInfo failed on msg key ",
                    ", msg type: ",
                    " in chunk ",
                    ""
                ])), l?.key.id, l?.messageStubType, o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(n)).sendLogs("parseWebMessageInfo failed during history sync");
            }
        }
        if (o("WAWebHistorySyncLidChatGating").isForcedHistoryLidChat() && s.isRegularUserPn() && c != null && c.id != null) {
            if (a.isLid()) {
                c = o("WAWebHistorySyncMsgKeyOverrideUtils").maybeOverrideMsgKeyRemoteWithChatId(c, a);
            } else {
                o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] parseWebMsgInfoAndReturnNullOnFailure: expected dbChatId to be LID but got ",
                    ""
                ])), a.toLogString()).sendLogs("history-sync-forced-lid-chat-dbChatId-not-lid");
            }
        } else if (c != null && c.id != null && s.isRegularUserPn()) {
            c = o("WAWebHistorySyncMsgKeyOverrideUtils").maybeOverrideMsgKeyRemoteWithChatId(c, s, true);
        }
        return c;
    }
    function E(e) {
        o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
            "[history] start to report missing mapping. is sw enabled: ",
            ""
        ])), o("WAWebUserPrefsNotifications").getGlobalOfflineNotifications().toString());
        try {
            const t = [];
            e.forEach((e, n)=>{
                if (e > 0 && t.length < 3) {
                    t.push({
                        type: n,
                        count: e
                    });
                }
            });
            if (t.length > 0) {
                o("WALogger").ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                    "total missing mapping: ",
                    ""
                ])), t.map((e)=>`${e.type}: ${e.count}`).join(", "));
                o("WALogger").ERROR(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                    "missing Lid mapping in history Sync"
                ]))).sendLogs("missing Lid mapping in history Sync");
            }
        } catch (e) {
            o("WALogger").ERROR(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                "[history] could not calculate missing mapping"
            ]))).catching(r("getErrorSafe")(e));
        }
        o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose([
            "[history] end to report missing mapping"
        ])));
    }
    l.getLidMappingAsStringSet = v;
    l.getLidsForLogging = S;
    l.parseWebMsgInfoAndReturnNullOnFailure = L;
    l.reportMissingMapping = E;
}, 98);