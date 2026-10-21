__d("WAWebDBGetReactions", [
    "WAWebApiContact",
    "WAWebEmoji",
    "WAWebLidMigrationUtils",
    "WAWebModelStorageUtils",
    "WAWebMsgKey",
    "WAWebParseMsgKeyString",
    "WAWebSchemaReactions",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = "";
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const n = yield o("WAWebSchemaReactions").getReactionsTable().equals([
                "parentMsgKey"
            ], t);
            const a = {
                reactions: [],
                reactionByMe: null
            };
            const i = new Map;
            n.forEach((t)=>{
                const { orphan, reactionText } = t;
                if (reactionText !== e && orphan !== 1) {
                    const u = o("WAWebEmoji").EmojiUtil.getEmojiAggregate(reactionText);
                    const c = i.get(u) ?? [];
                    i.set(u, [].concat(c, [
                        t
                    ]));
                    const d = r("WAWebParseMsgKeyString")(t.msgKey);
                    if (d.fromMe) {
                        a.reactionByMe = t;
                    }
                }
            });
            const l = a.reactionByMe ? o("WAWebEmoji").EmojiUtil.getEmojiAggregate(a.reactionByMe.reactionText) : "";
            i.forEach((senders, aggregateEmoji)=>{
                let hasReactionByMe = false;
                if (aggregateEmoji === l) {
                    hasReactionByMe = true;
                }
                a.reactions.push({
                    aggregateEmoji,
                    senders,
                    hasReactionByMe
                });
            });
            return a;
        });
        return u.apply(this, arguments);
    }
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const r = new Map;
            yield o("WAWebModelStorageUtils").getStorage().lock([
                "reactions"
            ], (()=>{
                const o = n("asyncToGeneratorRuntime").asyncToGenerator(function*([o]) {
                    const a = yield o.anyOf([
                        "parentMsgKey"
                    ], t);
                    a.forEach((t)=>{
                        const { orphan, reactionText } = t;
                        if (reactionText !== e && orphan !== 1) {
                            const i = r.get(t.parentMsgKey) ?? [];
                            i.push(t);
                            r.set(t.parentMsgKey, i);
                        }
                    });
                });
                return function(e) {
                    return o.apply(this, arguments);
                };
            })());
            return r;
        });
        return d.apply(this, arguments);
    }
    function m(e) {
        return o("WAWebModelStorageUtils").getStorage().lock([
            "reactions"
        ], function([n]) {
            return n.anyOf([
                "parentMsgKey"
            ], e);
        });
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ parentMsgKey, senderUserJid }) {
            const l = [];
            const s = o("WAWebLidMigrationUtils").getAlternateMsgKey(r("WAWebMsgKey").from(parentMsgKey))?.toString();
            const u = o("WAWebApiContact").getAlternateUserWid(o("WAWebWidFactory").createUserWidOrThrow(senderUserJid))?.toString();
            const c = [
                parentMsgKey,
                s
            ].filter(Boolean);
            const d = [
                senderUserJid,
                u
            ].filter(Boolean);
            for (const m of c){
                for (const p of d){
                    l.push([
                        m,
                        p
                    ]);
                }
            }
            const _ = yield o("WAWebSchemaReactions").getReactionsTable().anyOf([
                "parentMsgKey",
                "senderUserJid"
            ], l, {
                limit: 1
            });
            return _[0];
        });
        return _.apply(this, arguments);
    }
    l.REVOKED_REACTION_TEXT = e;
    l.getReactions = s;
    l.getFilteredReactionsFromParentMsgs = c;
    l.getAllReactionsFromParentMsgs = m;
    l.existsReactionAddressingModeInsensitive = p;
}, 98);