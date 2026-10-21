__d("WAWebChatUpdates", [
    "WAAbortError",
    "WALogger",
    "WARaceSignal",
    "WAWebChatGetMessage",
    "WAWebChatLoadMessages",
    "WAWebDBUpdateChatTable",
    "WAWebNoop",
    "WAWebReleaseToEventLoop",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(t) {
        const n = Number(t.mute.expiration);
        o("WAWebDBUpdateChatTable").updateChatTable(t.id, {
            muteExpiration: n
        }).then(()=>t.muteExpiration = n).catch((n)=>{
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "models:Chat:updateMuteExpiration ",
                ""
            ])), t.id.toString()).catching(r("getErrorSafe")(n)).sendLogs("chat-update-mute-expiration-fail");
        });
    }
    function c(e) {
        const n = e.mute.mentionAllMuteExpiration ?? 0;
        if (e.mentionAllMuteExpiration !== n) {
            o("WAWebDBUpdateChatTable").updateChatTable(e.id, {
                mentionAllMuteExpiration: n
            }).then(()=>{
                e.mentionAllMuteExpiration = n;
            });
        }
    }
    function d(e) {
        const callMuteExpiration = e.mute.callExpiration ?? 0;
        if (e.callMuteExpiration !== callMuteExpiration) {
            o("WAWebDBUpdateChatTable").updateChatTable(e.id, {
                callMuteExpiration
            }).then(()=>{
                e.callMuteExpiration = callMuteExpiration;
            }).catch((t)=>{
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "models:Chat:updateCallMuteExpiration ",
                    ""
                ])), e.id.toString()).catching(r("getErrorSafe")(t)).sendLogs("chat-update-call-mute-expiration-fail");
            });
        }
    }
    function m(e) {
        if (!e.promises.updateSortTime) {
            const t = new AbortController;
            const n = t.signal;
            const a = r("WARaceSignal")([
                n,
                e.getAbortController().signal
            ], function(t) {
                const n = o("WAWebReleaseToEventLoop").releaseToEventLoop();
                return n.then(()=>{
                    const t = o("WAWebChatGetMessage").getLastTimestampMsg(e);
                    if (t) {
                        e.t = t.t;
                        return;
                    } else {
                        if (e.msgs.msgLoadState.noEarlierMsgs) {
                            return;
                        }
                        if (e.pendingMsgs) {
                            return;
                        }
                    }
                    return o("WAWebChatLoadMessages").loadEarlierMsgs({
                        chat: e
                    });
                }).then((n)=>{
                    if (t.aborted) {
                        throw new (o("WAAbortError")).AbortError;
                    }
                    if (n) {
                        const r = o("WAWebChatGetMessage").getLastTimestampMsg(e);
                        e.t = r ? r.t : undefined;
                    }
                }).catch(r("WAWebNoop")).finally(()=>{
                    e.promises.updateSortTime = undefined;
                });
            });
            e.promises.updateSortTime = {
                promise: a,
                abortController: t
            };
        }
    }
    l.updateMuteExpiration = u;
    l.updateMentionAllMuteExpiration = c;
    l.updateCallMuteExpiration = d;
    l.updateSortTime = m;
}, 98);