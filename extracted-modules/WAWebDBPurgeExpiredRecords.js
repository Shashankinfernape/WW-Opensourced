__d("WAWebDBPurgeExpiredRecords", [
    "Promise",
    "WAWeb-moment",
    "WAWebDBMapOrphansToProviders",
    "WAWebDBOrphanDbSerialization",
    "WAWebMsgType",
    "WAWebSchemaMessage",
    "WAWebSchemaMessageOrphans",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e, t) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, a) {
            const i = r("WAWeb-moment")().subtract(t, "days").unix();
            const l = r("WAWeb-moment")().subtract(a, "days").unix();
            const s = yield o("WAWebSchemaMessageOrphans").getMessageOrphanTable().between([
                "t"
            ], 0, i);
            const u = new Set(s.map((e)=>e.parentMsgKey));
            const c = yield o("WAWebSchemaMessage").getMessageTable().bulkGet(Array.from(u));
            const d = new Set(c.filter((e)=>e && e.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN).map((e)=>e?.id));
            const m = s.filter((e)=>!d.has(e.parentMsgKey) || e.t < l).map(o("WAWebDBOrphanDbSerialization").orphanFromDbRow);
            const p = yield o("WAWebDBMapOrphansToProviders").mapOrphansToProviders(m);
            const _ = [];
            for (const [g, h] of p.entries()){
                if (g.onRecordsPurged != null) {
                    _.push(g.onRecordsPurged(h));
                }
            }
            yield (e || (e = n("Promise"))).all(_);
            const y = m.map((e)=>e.msgKey);
            return o("WAWebSchemaMessageOrphans").getMessageOrphanTable().bulkRemove(y);
        });
        return u.apply(this, arguments);
    }
    l.purgeExpiredOrphanRecords = s;
}, 98);