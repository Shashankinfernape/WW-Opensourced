__d("WAWebUpdateReactionMessageUIAction", [
    "Promise",
    "WAWebDBGetReactions",
    "WAWebReactionDataUtils",
    "WAWebReactionsCollection",
    "WAWebReactionsMsgAction",
    "WAWebReactionsUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e, t) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = yield o("WAWebReactionsUtils").createReactionsRow(e);
            if (n != null) {
                const allowNotify = !t;
                const a = `reaction ${String(e.id)} received to: ${String(e.reactionParentKey)}`;
                const i = yield o("WAWebDBGetReactions").existsReactionAddressingModeInsensitive({
                    parentMsgKey: n.parentMsgKey,
                    senderUserJid: n.senderUserJid
                });
                if (i && i.msgKey === n.msgKey) {
                    const l = i;
                    yield o("WAWebReactionsMsgAction").addOrUpdateReactionsModelCollection(l, {
                        allowNotify
                    });
                }
            }
        });
        return u.apply(this, arguments);
    }
    function c(e) {
        const t = new Set(e);
        for (const n of o("WAWebReactionsCollection").ReactionsCollection.toArray()){
            for (const r of n.reactions.toArray()){
                for (const a of t){
                    const i = r.senders.get(a);
                    if (i != null && (r.senders.remove(a), t.delete(a), t.size === 0)) {
                        return;
                    }
                }
            }
        }
    }
    function d(e, t, n) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, r, a) {
            yield (e || (e = n("Promise"))).all(t.map((e)=>o("WAWebReactionsMsgAction").addOrUpdateReactionsModelCollection(o("WAWebReactionDataUtils").reactionMsgDataToReactionRow(e), a)));
            if (r.length > 0) {
                c(r);
            }
        });
        return m.apply(this, arguments);
    }
    l.updateReactionUI = s;
    l.updateReactionCollection = d;
}, 98);