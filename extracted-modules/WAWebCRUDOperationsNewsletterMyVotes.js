__d("WAWebCRUDOperationsNewsletterMyVotes", [
    "Promise",
    "WALogger",
    "WAWebModelStorageUtils",
    "WAWebNewsletterDBUtils",
    "WAWebSchemaNewsletterMyVotes",
    "WAWebWid",
    "asyncToGeneratorRuntime",
    "compactMap"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(t) {
        return o("WAWebModelStorageUtils").getStorage().lock([
            "newsletter-my-votes"
        ], (()=>{
            const a = n("asyncToGeneratorRuntime").asyncToGenerator(function*([a]) {
                if (!r("WAWebWid").isNewsletter(t.chatJid)) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[createOrUpdateMyVote] Invalid newsletter jid ",
                        ""
                    ])), t.chatJid);
                    return;
                }
                const i = yield m(t.chatJid, t.msgServerId);
                if (!(i != null && i.serverTimestampMs > t.serverTimestampMs)) {
                    yield a.createOrReplace(t);
                }
            });
            return function(e) {
                return a.apply(this, arguments);
            };
        })());
    }
    function c(e) {
        return o("WAWebModelStorageUtils").getStorage().lock([
            "newsletter-my-votes"
        ], (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*([n]) {
                const o = new Map;
                const a = r("compactMap")(e, function(e) {
                    if (r("WAWebWid").isNewsletter(e.chatJid)) {
                        o.set(`${e.chatJid}-${e.msgServerId}`, e);
                        return [
                            e.chatJid,
                            e.msgServerId
                        ];
                    }
                });
                const i = yield n.anyOf([
                    "chatJid",
                    "msgServerId"
                ], a);
                i.forEach((e)=>{
                    const t = `${e.chatJid}-${e.msgServerId}`;
                    const n = o.get(t);
                    if (n != null && n.serverTimestampMs < e.serverTimestampMs) {
                        o.delete(t);
                    }
                });
                yield n.bulkCreateOrReplace(Array.from(o.values()));
            });
            return function(e) {
                return t.apply(this, arguments);
            };
        })());
    }
    const d = 100;
    function m(e, t) {
        if (!Number.isSafeInteger(t) || t < d || t >= o("WAWebNewsletterDBUtils").TEMPORARY_SERVER_ID_LOWER_BOUND) {
            return (s || (s = n("Promise"))).resolve(null);
        }
        return o("WAWebSchemaNewsletterMyVotes").getTable().get([
            e,
            t
        ]);
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield m(e.chatJid, e.msgServerId);
            if (t != null) {
                yield u(babelHelpers.extends({}, t, e));
            }
        });
        return _.apply(this, arguments);
    }
    l.createOrUpdateMyVote = u;
    l.bulkCreateOrUpdateMyVotes = c;
    l.getMyVote = m;
    l.updateMyVote = p;
}, 98);