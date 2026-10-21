__d("WAWebDBBulkCanSetGroupEphemeralSetting", [
    "Promise",
    "WAWebGroupUtils",
    "WAWebGroupsParticipantsApi",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e, t, n) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, r, o) {
            const a = new Set;
            if (o.length === 0) {
                return a;
            }
            const i = yield (e || (e = n("Promise"))).all([
                t.anyOf([
                    "id"
                ], o, {
                    shouldDecrypt: false
                }),
                r.anyOf([
                    "groupId"
                ], o, {
                    shouldDecrypt: false
                })
            ]);
            const l = i[0];
            const s = i[1];
            const u = new Map;
            for (const d of l){
                u.set(d.id, d);
            }
            const m = new Map;
            for (const p of s){
                m.set(p.groupId, p);
            }
            for (const _ of o){
                const f = u.get(_);
                if (f != null && c(f, m.get(_))) {
                    a.add(_);
                }
            }
            return a;
        });
        return u.apply(this, arguments);
    }
    function c(e, t) {
        const r = !e.support;
        if (e.suspended || e.terminated || !o("WAWebGroupsParticipantsApi").checkMyMembershipForParticipantRecord(t)) {
            return false;
        }
        if (o("WAWebGroupUtils").amIGroupAdmin(t?.admins ?? [])) {
            return r;
        }
        if (e.restrict || e.defaultSubgroup === true) {
            return false;
        }
        return r;
    }
    l.bulkCanSetGroupEphemeralSetting = s;
}, 98);