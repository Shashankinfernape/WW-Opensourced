__d("WAWebNewsletterSystemMessagesAction", [
    "Promise",
    "WAWebMsgModelFromData",
    "WAWebNewsletterSystemMessages",
    "WAWebNewsletterUpdateMsgsRecordsJob",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(t) {
        return t.addQueue.enqueue((e || (e = n("Promise"))).resolve().then(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const r = o("WAWebNewsletterSystemMessages").genNewsletterCreationSystemMessages({
                id: t.id,
                name: t.name,
                t: t.newsletterMetadata?.creationTime,
                role: t.newsletterMetadata?.membershipType
            });
            const a = r.map(o("WAWebMsgModelFromData").msgModelFromMsgData);
            yield o("WAWebNewsletterUpdateMsgsRecordsJob").addNewsletterMsgsRecords(r);
            t.msgs.add(a, {
                at: 0
            });
            return a;
        })));
    }
    l.addSystemMessagesToChat = s;
}, 98);