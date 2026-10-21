__d("WAWebSuspendInformDataModelUtils", [
    "WAWebNewsletterDBUtils",
    "WAWebNewsletterGetMessagesJob",
    "WAWebNewsletterUpdateMsgsRecordsJob",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const r = yield o("WAWebNewsletterDBUtils").bulkGetMessagesByServerIds(e, t);
            const a = [];
            const i = [];
            const l = new Map;
            e.forEach((e)=>{
                const t = r.get(e);
                if (t != null) {
                    l.set(e, t);
                } else {
                    i.push(e);
                }
            });
            let s;
            if (i.length > 0) {
                const u = Math.min(...i);
                const c = Math.max(...i);
                s = yield o("WAWebNewsletterGetMessagesJob").getNewsletterMessages(t, c - u + 1, {
                    after: u - 1
                });
            }
            s?.msgs.forEach(function(e) {
                if (e != null) {
                    a.push(e);
                    if (e.serverId != null) {
                        l.set(e.serverId, e);
                    }
                }
            });
            if (a.length > 0) {
                yield o("WAWebNewsletterUpdateMsgsRecordsJob").addNewsletterMsgsRecords(a);
            }
            return l;
        });
        return s.apply(this, arguments);
    }
    l.populateMsgModels = e;
}, 98);