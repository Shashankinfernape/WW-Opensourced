__d("WAWebdbCRUDOperationsNewsletterReaction", [
    "WAWebModelStorageUtils",
    "WAWebSchemaNewsletterReactions",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = new Map;
        e.forEach((e)=>{
            const e_parentMsgKey = e.parentMsgKey;
            const r = e_parentMsgKey;
            const o = t.get(r);
            if (o) {
                if (o.serverTimestamp <= e.serverTimestamp) {
                    t.set(r, e);
                }
            } else {
                t.set(r, e);
            }
        });
        return o("WAWebModelStorageUtils").getStorage().lock([
            "newsletter-reactions"
        ], (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*([n]) {
                const r = Array.from(t.values()).map((e)=>e.parentMsgKey);
                const o = yield n.anyOf([
                    "parentMsgKey"
                ], r);
                o.forEach((e)=>{
                    const e_parentMsgKey = e.parentMsgKey;
                    const r = t.get(e_parentMsgKey);
                    if (r && r.serverTimestamp <= e.serverTimestamp) {
                        t.delete(e_parentMsgKey);
                    }
                });
                yield n.bulkCreateOrReplace(Array.from(t.values()));
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        })());
    }
    function s(e) {
        return o("WAWebModelStorageUtils").getStorage().lock([
            "newsletter-reactions"
        ], (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*([n]) {
                const e_parentMsgKey = e.parentMsgKey;
                const o = yield d(e_parentMsgKey);
                if (o) {
                    yield n.bulkCreateOrReplace([
                        o
                    ]);
                } else {
                    const a = babelHelpers.extends({
                        emojiCountMap: new Map,
                        serverTimestamp: 0
                    }, e);
                    yield n.createOrReplace(a);
                }
            });
            return function(e) {
                return t.apply(this, arguments);
            };
        })());
    }
    function u(e) {
        return o("WAWebSchemaNewsletterReactions").getTable().remove(e);
    }
    function c(e) {
        return o("WAWebSchemaNewsletterReactions").getTable().bulkRemove(e);
    }
    function d(e) {
        return o("WAWebSchemaNewsletterReactions").getTable().get(e);
    }
    l.createOrUpdateNewsletterReactions = e;
    l.createOrUpdateNewsletterReaction = s;
    l.removeNewsletterReactionsForParentMsg = u;
    l.bulkRemoveNewsletterReactionsForParentMsg = c;
    l.getNewsletterReaction = d;
}, 98);