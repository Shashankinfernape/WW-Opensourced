__d("WAWebPremiumMessageAddSendAction", [
    "WAWebPremiumMessageCollection",
    "WAWebPremiumMessageSchema",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = [];
            for (const n of e){
                const r = o("WAWebPremiumMessageCollection").PremiumMessageCollection.get(n.premiumMessageId);
                if (r) {
                    const a = new Set(r.sentMessageIds);
                    a.add(n.messageId);
                    t.push(r);
                    r.set("sentMessageIds", a);
                }
            }
            yield o("WAWebPremiumMessageSchema").getPremiumMessageTable().bulkCreateOrMerge(t.map((e)=>({
                    id: e.id,
                    name: e.name,
                    type: e.type,
                    isDeleted: e.isDeleted,
                    mediaId: e.mediaId,
                    sentMessageIds: e.sentMessageIds
                })));
        });
        return s.apply(this, arguments);
    }
    l.default = e;
}, 98);