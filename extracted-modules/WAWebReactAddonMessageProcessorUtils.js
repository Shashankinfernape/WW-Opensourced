__d("WAWebReactAddonMessageProcessorUtils", [
    "WAWebAddonDBTable",
    "WAWebApiContact",
    "WAWebCastToReactionMsg",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebSchemaReactions",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return [
            e.reactionParentKey,
            r("nullthrows")(o("WAWebMsgGetters").getSender(e))
        ];
    }
    function s(t) {
        return e(t).map((e)=>e.toString()).join("-");
    }
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const n = new Map;
            const r = t.map(e);
            const a = yield o("WAWebAddonDBTable").addonDBTable.bulkGetByParentAndSender(o("WAWebMsgType").MSG_TYPE.REACTION, r);
            for (const i of a){
                const l = o("WAWebCastToReactionMsg").assertReactionMsgData(i);
                const u = s(l);
                n.set(u, l.reactionTimestamp);
            }
            return function(e) {
                const t = s(e);
                return n.get(t);
            };
        });
        return c.apply(this, arguments);
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const n = t.map(e);
            const a = [];
            for (const [l, s] of n){
                const u = s.isUser() ? o("WAWebApiContact").getAlternateUserWid(o("WAWebWidFactory").asUserWidOrThrow(s)) : void 0;
                if (u) {
                    a.push([
                        l.toString(),
                        u.toString()
                    ]);
                }
            }
            const c = function(t, n) {
                return `${t.toString()}_${n.toString()}`;
            };
            const d = yield o("WAWebSchemaReactions").getReactionsTable().anyOf([
                "parentMsgKey",
                "senderUserJid"
            ], a);
            const m = new Set;
            d.filter(Boolean).forEach((e)=>{
                const t = [
                    e.parentMsgKey,
                    e.senderUserJid
                ];
                const n = t[0];
                const a = t[1];
                m.add(c(r("WAWebMsgKey").from(n), o("WAWebWidFactory").createUserWidOrThrow(a)));
            });
            return t.map((t)=>{
                const n = e(t);
                const r = n[0];
                const a = n[1];
                const i = o("WAWebApiContact").getAlternateUserWid(o("WAWebWidFactory").asUserWidOrThrow(a));
                if (i == null || !m.has(c(r, i))) {
                    return t;
                }
                let l = t.author;
                let s = t.from;
                if (l != null && l.isRegularUser()) {
                    const u = o("WAWebApiContact").getAlternateUserWid(o("WAWebWidFactory").asUserWidOrThrow(l));
                    if (u != null) {
                        l = u;
                    }
                }
                if (t.from.isRegularUser()) {
                    const d = o("WAWebApiContact").getAlternateUserWid(o("WAWebWidFactory").asUserWidOrThrow(t.from));
                    if (d) {
                        s = d;
                    }
                }
                return babelHelpers.extends({}, t, {
                    from: s,
                    author: l
                });
            });
        });
        return m.apply(this, arguments);
    }
    l.createGetReactionTimestamp = u;
    l.overrideExistingReactions = d;
}, 98);