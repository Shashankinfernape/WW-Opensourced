__d("WAWebSyncdWamUtils", [
    "WABase64",
    "WATimeUtils",
    "WAWebGetSyncKey",
    "WAWebSchemaSyncActions",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebWamEnumMutationCountBucket",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    function e() {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = new Map;
            const t = yield o("WAWebSchemaSyncActions").getSyncActionsTable().all();
            t.forEach((t)=>{
                const r = o("WAWebSyncdActionUtils").getMutationNameFromIndex(t.collection, t.index) || "no-mutation-name";
                const a = e.get(r) ?? {
                    action: r,
                    applied: 0,
                    invalid: 0,
                    orphan: 0,
                    unsupported: 0,
                    failed: 0
                };
                e: {
                    if (t.actionState === o("WAWebSyncdConst").SyncActionState.Success || t.actionState === o("WAWebSyncdConst").SyncActionState.Skipped) {
                        a.applied++;
                        break e;
                    }
                    if (t.actionState === o("WAWebSyncdConst").SyncActionState.Malformed) {
                        a.invalid++;
                        break e;
                    }
                    if (t.actionState === o("WAWebSyncdConst").SyncActionState.Orphan) {
                        a.orphan++;
                        break e;
                    }
                    if (t.actionState === o("WAWebSyncdConst").SyncActionState.Unsupported) {
                        a.unsupported++;
                        break e;
                    }
                    if (t.actionState === o("WAWebSyncdConst").SyncActionState.Failed) {
                        a.failed++;
                        break e;
                    }
                    throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${t.actionState}`);
                }
                e.set(r, a);
            });
            return e;
        });
        return s.apply(this, arguments);
    }
    function u(e) {
        if (e < 0) {
            throw r("err")("cannot convert negative number to a bucket");
        }
        if (e === 0) {
            return o("WAWebWamEnumMutationCountBucket").MUTATION_COUNT_BUCKET.ZERO;
        }
        if (e === 1) {
            return o("WAWebWamEnumMutationCountBucket").MUTATION_COUNT_BUCKET.ONE;
        }
        if (e < 10) {
            return o("WAWebWamEnumMutationCountBucket").MUTATION_COUNT_BUCKET.LT10;
        }
        if (e < 100) {
            return o("WAWebWamEnumMutationCountBucket").MUTATION_COUNT_BUCKET.LT100;
        }
        if (e < 500) {
            return o("WAWebWamEnumMutationCountBucket").MUTATION_COUNT_BUCKET.LT500;
        }
        if (e < 1000) {
            return o("WAWebWamEnumMutationCountBucket").MUTATION_COUNT_BUCKET.LT1K;
        }
        if (e < 5000) {
            return o("WAWebWamEnumMutationCountBucket").MUTATION_COUNT_BUCKET.LT5K;
        }
        return o("WAWebWamEnumMutationCountBucket").MUTATION_COUNT_BUCKET.GTE5K;
    }
    function c() {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield o("WAWebSchemaSyncActions").getSyncActionsTable().get('["primary_version","session_start"]');
            return e?.timestamp;
        });
        return d.apply(this, arguments);
    }
    function m() {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield o("WAWebGetSyncKey").getAllSyncKeysInTransaction();
            const t = yield o("WAWebSchemaSyncActions").getSyncActionsTable().all();
            const n = yield c();
            const r = n == null ? void 0 : Math.round((o("WATimeUtils").unixTimeMs() - n) / (1000 * 3600 * 24));
            return _(e, t, r);
        });
        return p.apply(this, arguments);
    }
    function _(e, t, n) {
        const r = t.map((e)=>o("WABase64").encodeB64(e.keyId));
        const a = Array.from(new Set(r));
        const i = new Map;
        for (const l of r){
            i.set(l, (i.get(l) || 0) + 1);
        }
        const s = Array.from(i.values()).sort();
        const u = s.length;
        const c = Math.floor(u * 0.8) - 1;
        const d = Math.floor(u * 0.95) - 1;
        return {
            totalKeyCount: e.length,
            keysUsedInSnapshotCount: a.length,
            p80MuationsPerKey: s[c],
            p95MuationsPerKey: s[d],
            syncdSessionLengthDays: n
        };
    }
    l.generateActionStatCounts = e;
    l.convertToBucket = u;
    l.getKeyStats = m;
    l.getKeyStatsInternal = _;
}, 98);