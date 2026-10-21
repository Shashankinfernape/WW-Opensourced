__d("WAWebMsgReactionsBridge", [
    "Promise",
    "WALogger",
    "WAWebAck",
    "WAWebDBGetReactions",
    "WAWebDBUpdateMessageTable",
    "WAWebLidMigrationUtils",
    "WAWebMsgCollection",
    "WAWebMsgKey",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e, t) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, hasReaction) {
            const r = o("WAWebMsgCollection").MsgCollection.get(e);
            if (r && r.hasReaction !== hasReaction) {
                const a = {
                    hasReaction
                };
                yield o("WAWebDBUpdateMessageTable").updateMessageTable(r.id, a);
                r.set(a);
            }
            return (s || (s = n("Promise"))).resolve();
        });
        return c.apply(this, arguments);
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            let n;
            try {
                n = yield o("WAWebDBGetReactions").getReactions(t.id.toString());
                if (n.reactions.length === 0 && t.id.remote.isStatus()) {
                    const a = o("WAWebLidMigrationUtils").getAlternateMsgKey(t.id);
                    if (a) {
                        n = yield o("WAWebDBGetReactions").getReactions(a.toString());
                    }
                }
            } catch (error) {
                const i = r("getErrorSafe")(error);
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "getReactions: failed"
                ]))).catching(i).verbose().sendLogs("getReactions failed");
                throw i;
            }
            const reactions = n.reactions.map((e)=>{
                const senders = e.senders.map((e)=>babelHelpers.extends({}, e, {
                        id: r("WAWebMsgKey").fromString(e.msgKey),
                        isSendFailure: o("WAWebUserPrefsMeUser").isSerializedWidMe(e.senderUserJid) && e.ack === o("WAWebAck").ACK.CLOCK
                    }));
                return babelHelpers.extends({}, e, {
                    hasReactionByMe: e.hasReactionByMe,
                    id: e.aggregateEmoji,
                    senders
                });
            });
            const s = reactions.length > 0;
            yield u(t.id.toString(), s);
            return babelHelpers.extends({}, n, {
                id: t.id,
                reactions
            });
        });
        return m.apply(this, arguments);
    }
    l.updateHasReactionInParent = u;
    l.sendQueryReactions = d;
}, 98);