__d("WAWebDBCreateOrUpdateReactions", [
    "WAWebApiContact",
    "WAWebLidMigrationUtils",
    "WAWebModelStorageUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = new Map;
        e.forEach((e)=>{
            if (o("WAWebUserPrefsMeUser").isSerializedWidMe(e.senderUserJid)) {
                e.read = true;
            }
            const n = s(e);
            const r = t.get(n);
            if (r) {
                if (r.timestamp <= e.timestamp) {
                    t.set(n, e);
                }
            } else {
                t.set(n, e);
            }
        });
        return o("WAWebModelStorageUtils").getStorage().lock([
            "reactions"
        ], (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*([n]) {
                const r = [];
                const a = [];
                Array.from(t.values()).forEach((e)=>{
                    a.push([
                        e.parentMsgKey,
                        e.senderUserJid
                    ]);
                    const t = o("WAWebApiContact").getAlternateUserWid(o("WAWebWidFactory").createUserWidOrThrow(e.senderUserJid));
                    if (t != null) {
                        a.push([
                            e.parentMsgKey,
                            t.toString()
                        ]);
                    }
                });
                const i = yield n.anyOf([
                    "parentMsgKey",
                    "senderUserJid"
                ], a);
                i.forEach((e)=>{
                    const n = s(e);
                    const o = t.get(n);
                    if (o) {
                        if (o.timestamp <= e.timestamp) {
                            t.delete(n);
                        } else if (o.senderUserJid !== e.senderUserJid) {
                            r.push([
                                e.parentMsgKey,
                                e.senderUserJid
                            ]);
                        }
                    }
                });
                if (r.length > 0) {
                    yield n.bulkRemove(r);
                }
                yield n.bulkCreateOrReplace(Array.from(t.values()));
                return Array.from(t.values());
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        })());
    }
    function s(e) {
        const t = o("WAWebWidFactory").createUserWidOrThrow(e.senderUserJid);
        const n = String(o("WAWebLidMigrationUtils").toPn(t));
        const r = String(o("WAWebLidMigrationUtils").toLid(t));
        return `${e.parentMsgKey},${n},${r}`;
    }
    l.createOrUpdateReactions = e;
}, 98);