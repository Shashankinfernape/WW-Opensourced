__d("WAWebDeleteReactionsJob", [
    "WALogger",
    "WAWebDBDeleteReactions",
    "WAWebDBMessageDelete",
    "WAWebDefinePersistedJob",
    "WAWebMsgKey",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = o("WAWebDefinePersistedJob").defineWebPersistedJob().step("deleteReactions", function({ chatId: n, parentMsgKeys: r }) {
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "Persisted: deleteReaction persisted job started"
        ])));
        return {
            chatId: n,
            parentMsgKeys: r
        };
    }).step("deleteReactionsFromReactionsTable", (()=>{
        const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chatId: t, parentMsgKeys: n }) {
            const r = yield o("WAWebDBDeleteReactions").deleteReactionsByParentMessageKeys(n);
            return r || (o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[deleteReactions] Reactions tbl undefined, len=",
                ""
            ])), n.length), []);
        });
        return function(t) {
            return e.apply(this, arguments);
        };
    })()).finalStep("deleteReactionsFromMessageTable", (()=>{
        const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, { chatId: n, parentMsgKeys: a }) {
            const i = [];
            if (!e) {
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[deleteReactions] Msg tbl reactionKeys undef, len=",
                    ""
                ])), a.length);
            }
            e.forEach((e)=>{
                if (r("WAWebMsgKey").fromString(e).fromMe) {
                    i.push(e);
                }
            });
            if (i.length > 0) {
                yield o("WAWebDBMessageDelete").removeMessagesFromHistory(i, {
                    deleteAssociatedMsgs: false
                });
            }
            return e;
        });
        return function(t, n) {
            return e.apply(this, arguments);
        };
    })()).end();
    l.deleteReactions = c;
}, 98);