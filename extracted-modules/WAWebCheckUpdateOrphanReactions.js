__d("WAWebCheckUpdateOrphanReactions", [
    "WALogger",
    "WAWebAddonProcessMsgs",
    "WAWebDBChangeOrphanStateReactions",
    "WAWebReactionDataUtils",
    "WAWebStoreOrphans",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            try {
                const n = yield o("WAWebDBChangeOrphanStateReactions").changeOrphanStateReactions(t);
                const r = yield o("WAWebAddonProcessMsgs").processMsgsAndGetOrphans(n.map((e)=>o("WAWebReactionDataUtils").reactionRowToReactionMsgData(e)));
                const a = r.orphans;
                yield o("WAWebStoreOrphans").storeOrphans(a);
            } catch (error) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "checkUpdateForOrphanReactions: error ",
                    ""
                ])), error);
            }
        });
        return u.apply(this, arguments);
    }
    l.checkUpdateForOrphanReactions = s;
}, 98);