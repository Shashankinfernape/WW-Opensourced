__d("WAWebAddonDeleteForParents", [
    "Promise",
    "WALogger",
    "WAWebAddonDeleteMsgs",
    "WAWebAddonGatingUtils",
    "WAWebDBDeleteReactions",
    "WAWebDBGetReactions",
    "WAWebDBMessageDelete",
    "WAWebDBPollsDeleteVotes",
    "WAWebDeleteLastAddOnsPreview",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebPollPendingUpdatesCleanup",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chatId: r, parentMsgKeys: a }) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "deleteAddOnsForParents started for ",
                ""
            ])), r);
            const i = [
                o("WAWebAddonDeleteMsgs").deleteAddonMsgsByParentKeys({
                    parentMsgKeys: a
                })
            ];
            if (!o("WAWebAddonGatingUtils").isUnifiedInfraEnabledForType(o("WAWebMsgType").MSG_TYPE.REACTION)) {
                i.push(h({
                    chatId: r,
                    parentMsgKeys: a
                }));
            }
            if (!o("WAWebAddonGatingUtils").isUnifiedInfraEnabledForType(o("WAWebMsgType").MSG_TYPE.POLL_UPDATE)) {
                i.push(C({
                    chatId: r,
                    parentMsgKeys: a
                }));
            }
            i.push(o("WAWebPollPendingUpdatesCleanup").deletePollPendingUpdatesForParents(a));
            const l = yield (_ || (_ = n("Promise"))).allSettled(i);
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "deleteAddOnsForParents finished for ",
                ""
            ])), r);
            for (const u of l){
                if (u.status === "rejected") {
                    throw u.reason;
                }
            }
        });
        return g.apply(this, arguments);
    }
    function h(e) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chatId: t, parentMsgKeys: n }) {
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "Persisted: deleteReactionsV2 persisted job started for ",
                ""
            ])), t);
            const a = yield o("WAWebDBGetReactions").getAllReactionsFromParentMsgs(n);
            const i = a.map((e)=>e.msgKey);
            if (i.length === 0) {
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "Persisted: deleteReactionsV2 finished, no reactionsMsgKeys"
                ])));
                return;
            }
            const l = [];
            i.forEach((e)=>{
                if (r("WAWebMsgKey").fromString(e).fromMe) {
                    l.push(e);
                }
            });
            if (l.length > 0) {
                yield o("WAWebDBMessageDelete").removeMessagesFromHistory(l, {
                    deleteAssociatedMsgs: false
                });
            }
            const s = a.map((e)=>[
                    e.parentMsgKey,
                    e.senderUserJid
                ]);
            yield o("WAWebDBDeleteReactions").deleteReactionsByRecords(s);
            yield o("WAWebDeleteLastAddOnsPreview").deleteLastAddOnsPreview(n);
            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "Persisted: deleteReactionsV2 finished"
            ])));
        });
        return y.apply(this, arguments);
    }
    function C(e) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chatId: t, parentMsgKeys: n }) {
            o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "Persisted: deletePollVotes job started for ",
                ""
            ])), t);
            yield o("WAWebDBPollsDeleteVotes").deleteVotesByParentMsgKeys(n);
            o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                "Persisted: deletePollVotes job finished for ",
                ""
            ])), t);
        });
        return b.apply(this, arguments);
    }
    l.deleteAddOnsForParents = f;
    l.deleteReactions = h;
}, 98);