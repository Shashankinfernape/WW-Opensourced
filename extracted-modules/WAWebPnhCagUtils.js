__d("WAWebPnhCagUtils", [
    "WAWebLidMigrationUtils",
    "WAWebWidFactory"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = e.participants.iAmAdmin();
        const n = e.participants.toArray();
        const r = [];
        const a = [];
        if (t) {
            for (const i of n){
                r.push(i.id);
                a.push(o("WAWebLidMigrationUtils").toLid(o("WAWebWidFactory").asUserWidOrThrow(i.id)));
            }
        } else {
            for (const l of n){
                if (l.id.isLid()) {
                    r.push(l.id);
                } else {
                    a.push(o("WAWebLidMigrationUtils").toLid(o("WAWebWidFactory").asUserWidOrThrow(l.id)));
                }
            }
        }
        return [].concat(r, a).filter(Boolean);
    }
    function s(e, t) {
        const n = [];
        if (e) {
            for (const r of t){
                n.push(r.id);
                if (r.lid) {
                    n.push(r.lid);
                }
            }
            return n;
        }
        for (const o of t){
            if (o.id.isLid()) {
                n.push(o.id);
            } else if (o.lid) {
                n.push(o.lid);
            }
        }
        return n;
    }
    l.augmentedCagGroupMetadataParticipantList = e;
    l.augmentedCagGroupParticipantList = s;
}, 98);