__d("WAWebNewsletterSyntheticStatusUtils", [
    "WAJids",
    "WATimeUtils",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterMetadataCollection",
    "WAWebStatusCollection"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return e == null || o("WATimeUtils").unixTime() - e > o("WATimeUtils").DAY_SECONDS;
    }
    function s(e) {
        let n;
        return (r("WAWebNewsletterMetadataCollection") == null || (n = r("WAWebNewsletterMetadataCollection").get(e)) == null ? undefined : n.lastFilledStatusServerId) ?? null;
    }
    function u(t, n, r) {
        if (e(r)) {
            const a = o("WAWebStatusCollection").StatusCollection.get(t);
            if (a != null) {
                o("WAWebStatusCollection").StatusCollection.remove(a);
            }
            return false;
        }
        const i = o("WAWebStatusCollection").StatusCollection.get(t);
        const l = i != null && i.isSyntheticFromMetadata !== true;
        if (l || n == null) {
            return false;
        }
        const u = o("WAJids").toNewsletterJid(t.toJid());
        const c = s(u);
        if (c != null && n <= c || !o("WAWebNewsletterGatingUtils").isNewsletterStatusReceiverEnabled()) {
            return false;
        }
        o("WAWebStatusCollection").StatusCollection.add({
            id: t,
            t: r,
            totalCount: 1,
            unreadCount: 1,
            isSyntheticFromMetadata: true
        }, {
            merge: true
        });
        return true;
    }
    function c() {
        if (o("WAWebNewsletterGatingUtils").isNewsletterStatusReceiverEnabled()) {
            if (r("WAWebNewsletterMetadataCollection") != null) {
                r("WAWebNewsletterMetadataCollection").forEach((e)=>{
                    const e_statusMetadata = e.statusMetadata;
                    if (e_statusMetadata != null) {
                        const n = e.id;
                        u(n, e_statusMetadata.lastStatusServerId, e_statusMetadata.lastStatusSentTime);
                    }
                });
            }
        }
    }
    l.isNewsletterStatusExpired = e;
    l.getFilledStatusCursor = s;
    l.maybeCreateOrCleanupSynthetic = u;
    l.createSyntheticsForNewsletters = c;
}, 98);