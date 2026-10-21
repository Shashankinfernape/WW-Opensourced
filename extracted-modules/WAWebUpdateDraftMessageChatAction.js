__d("WAWebUpdateDraftMessageChatAction", [
    "WAWebChatCollection",
    "WAWebNewsletterCollection",
    "WAWebUpdateDraftMessageChatJob",
    "WAWebWid"
], function(t, n, r, o, a, i, l) {
    function e(e, draftMessage) {
        const n = r("WAWebWid").isNewsletter(e) ? r("WAWebNewsletterCollection").get(e) : o("WAWebChatCollection").ChatCollection.get(e);
        const a = new AbortController;
        const i = o("WAWebUpdateDraftMessageChatJob").updateDraftMessageChat({
            chatId: e,
            draftMessage,
            abortSignal: a.signal
        });
        i.finally(()=>{
            if (n) {
                if (n?.promises.updateDraftMessage?.promise === i) {
                    n.promises.updateDraftMessage = null;
                }
            }
        });
        if (n) {
            const l = n.promises;
            if (l.updateDraftMessage != null) {
                l.updateDraftMessage.abortController.abort();
            }
            n.draftMessage = draftMessage;
            n.promises.updateDraftMessage = {
                promise: i,
                abortController: a
            };
        }
        return i;
    }
    l.updateDraftMessageChat = e;
}, 98);