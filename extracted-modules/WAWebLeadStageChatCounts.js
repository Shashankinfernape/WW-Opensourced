__d("WAWebLeadStageChatCounts", [
    "WAWebChatCollection",
    "WAWebLeadStage",
    "WAWebLeadStageStore",
    "WAWebListsUtil"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = new Map;
        for (const n of o("WAWebListsUtil").getAllChatsInList(e)){
            t.set(n.id.toString(), n);
        }
        for (const r of o("WAWebChatCollection").ChatCollection.getModelsArray()){
            if (r.labels?.includes(e.id) === true) {
                t.set(r.id.toString(), r);
            }
        }
        return Array.from(t.values());
    }
    function s(t) {
        const n = new Map([
            [
                o("WAWebLeadStage").LeadStage.LEAD,
                0
            ]
        ].concat(o("WAWebLeadStage").LEAD_SUBSTAGE_ORDER.map((e)=>[
                e,
                0
            ])));
        for (const r of e(t)){
            const l = o("WAWebLeadStageStore").getLeadStageFromStore(r.id.toString()) ?? o("WAWebLeadStage").LeadStage.LEAD;
            n.set(l, (n.get(l) ?? 0) + 1);
        }
        return n;
    }
    function u(t) {
        const n = new Set;
        for (const r of e(t)){
            n.add(r.id.toString());
        }
        t.labelItemCollection.forEach((e)=>{
            if (e != null) {
                n.add(e.parentId);
            }
        });
        return Array.from(n);
    }
    function c(t, n) {
        return e(t).filter((e)=>(o("WAWebLeadStageStore").getLeadStageFromStore(e.id.toString()) ?? o("WAWebLeadStage").LeadStage.LEAD) === n);
    }
    l.getLeadStageChatCounts = s;
    l.getLeadListMemberJids = u;
    l.getLeadListChatsAtStage = c;
}, 98);