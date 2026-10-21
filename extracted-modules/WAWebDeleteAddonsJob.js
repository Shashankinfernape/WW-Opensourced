__d("WAWebDeleteAddonsJob", [
    "WAWebAddonDeleteForParents",
    "WAWebDefinePersistedJob"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebDefinePersistedJob").defineWebPersistedJob().finalStep("deleteAddOns", function({ chatId: t, parentMsgKeys: n }) {
        return o("WAWebAddonDeleteForParents").deleteAddOnsForParents({
            chatId: t,
            parentMsgKeys: n
        });
    }).end();
    const s = o("WAWebDefinePersistedJob").defineWebPersistedJob().finalStep("deleteReactionsV2", function({ chatId: t, parentMsgKeys: n }) {
        return o("WAWebAddonDeleteForParents").deleteReactions({
            chatId: t,
            parentMsgKeys: n
        });
    }).end();
    l.deleteAddOns = e;
    l.deleteReactionsV2 = s;
}, 98);