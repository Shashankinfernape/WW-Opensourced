__d("WAWebUpdateLastAddOnPreviewChatAction", [
    "WAWebChatCollection",
    "WAWebMsgKey",
    "WAWebNewsletterCollection",
    "WAWebWid"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        e.forEach((chatlistPreview, t)=>{
            const n = r("WAWebWid").isNewsletter(t) ? r("WAWebNewsletterCollection").get(t) : o("WAWebChatCollection").ChatCollection.get(t);
            if (n != null) {
                n.set({
                    chatlistPreview,
                    lastReactionPreview: undefined
                });
            }
        });
    }
    function s(e) {
        const t = new Set(e.map((e)=>r("WAWebMsgKey").fromString(e).remote.toString()));
        t.forEach((t)=>{
            const i = o("WAWebChatCollection").ChatCollection.get(t) ?? r("WAWebNewsletterCollection").get(t);
            if (i != null) {
                const l = i.chatlistPreview?.parentMsgKey;
                if (l != null && e.includes(l)) {
                    i.unset([
                        "chatlistPreview",
                        "lastReactionPreview"
                    ]);
                }
            }
        });
    }
    l.updateModelsForLastAddOnPreview = e;
    l.deleteModelsForLastAddOnPreview = s;
}, 98);