__d("WAWebNewsletterMessageDeliveryUpdateToModelUtils", [
    "Promise",
    "WAWebNewsletterDBUtils",
    "WAWebNewsletterGetMessagesJob",
    "WAWebNewsletterUpdateMsgsRecordsJob",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e, t, n) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, r, a) {
            const i = yield o("WAWebNewsletterDBUtils").bulkGetMessagesByServerIds(r.map((e)=>e.id), t);
            const l = [];
            const s = r.map((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    const n = e.id;
                    let r = i.get(e.id);
                    if (r == null) {
                        const a = yield o("WAWebNewsletterGetMessagesJob").getNewsletterMessages(t, 1, {
                            after: n - 1
                        });
                        const s = a.msgs[0];
                        if (s == null) {
                            return null;
                        }
                        r = s;
                        l.push(r);
                    }
                    return babelHelpers.extends({}, e, {
                        msgData: r,
                        serverId: e.id,
                        id: r.id
                    });
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })());
            if (l.length > 0) {
                yield o("WAWebNewsletterUpdateMsgsRecordsJob").addNewsletterMsgsRecords(l);
            }
            const u = yield o("WAWebNewsletterDBUtils").bulkGetMessagesByServerIds(a, t);
            const c = a.map((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    const t = u.get(e);
                    if (t == null) {
                        return null;
                    }
                    return t.id;
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })());
            return {
                modelUpdatesToAdd: (yield (e || (e = n("Promise"))).all(s)).filter(Boolean),
                modelUpdatesToRemove: (yield e.all(c)).filter(Boolean)
            };
        });
        return u.apply(this, arguments);
    }
    l.getMessageDeliveryUpdatesModelToUpdate = s;
}, 98);