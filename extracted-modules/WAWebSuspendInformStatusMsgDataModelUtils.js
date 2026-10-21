__d("WAWebSuspendInformStatusMsgDataModelUtils", [
    "WAWebDBMessageUtils",
    "WAWebNewsletterDBUtils",
    "WAWebNewsletterGetStatusesJob",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t, n) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            if (e.length === 0) {
                return new Map;
            }
            const r = yield o("WAWebNewsletterDBUtils").bulkGetMessagesByServerIds(e, t, o("WAWebDBMessageUtils").InternalIdPrefix.NewsletterStatus);
            const a = [];
            const i = new Map;
            e.forEach((e)=>{
                const t = r.get(e);
                if (t != null) {
                    i.set(e, t);
                } else {
                    a.push(e);
                }
            });
            if (a.length > 0) {
                const s = Math.min(...a);
                const u = yield o("WAWebNewsletterGetStatusesJob").getNewsletterStatuses(t, n, {
                    afterServerId: s - 1
                });
                const c = i.size;
                u?.msgs?.forEach(function(e) {
                    if (e?.serverId != null) {
                        i.set(e.serverId, e);
                    }
                });
                const d = i.size - c;
            }
            return i;
        });
        return s.apply(this, arguments);
    }
    l.populateStatusMsgModels = e;
}, 98);