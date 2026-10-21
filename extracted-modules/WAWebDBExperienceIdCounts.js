__d("WAWebDBExperienceIdCounts", [
    "WAWebParseMsgKeyString",
    "WAWebSchemaExperienceId",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e() {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield o("WAWebSchemaExperienceId").getExperienceIdTable().all();
            if (e.length === 0) {
                return null;
            }
            const t = new Map;
            const n = new Map;
            const msgKeys = [];
            for (const a of e){
                msgKeys.push(a.msgKey);
                const i = c(a.msgKey);
                if (i != null) {
                    for (const l of new Set(a.experienceIds)){
                        if (!(!Number.isInteger(l) || l <= 0)) {
                            const d = t.get(l) ?? new Set;
                            d.add(i);
                            t.set(l, d);
                            n.set(l, (n.get(l) ?? 0) + 1);
                        }
                    }
                }
            }
            return {
                aggregates: Array.from(t, function([r, o]) {
                    return {
                        experienceId: r,
                        uniqueMessageCount: n.get(r) ?? 0,
                        uniqueSenderCount: o.size
                    };
                }),
                msgKeys
            };
        });
        return s.apply(this, arguments);
    }
    function u(e) {
        return o("WAWebSchemaExperienceId").getExperienceIdTable().bulkRemove(e);
    }
    function c(msgKey) {
        try {
            const t = r("WAWebParseMsgKeyString")(msgKey);
            const { fromMe, participant, remote } = t;
            if (fromMe === true) {
                return null;
            }
            return participant ?? remote;
        } catch (e) {
            return null;
        }
    }
    l.getReceivedExperienceIdCounts = e;
    l.removeReportedExperienceIds = u;
}, 98);