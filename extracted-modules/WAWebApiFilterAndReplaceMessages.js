__d("WAWebApiFilterAndReplaceMessages", [
    "WALogger",
    "WAWebApiOrphanRevoke",
    "WAWebLidMigrationUtils",
    "WAWebWid",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return function(t) {
            if (t.associationType != null) {
                return e.get(t.id.toString());
            }
            return t;
        };
    }
    function u(e, t) {
        const n = [];
        e.forEach((e)=>{
            if (e != null) {
                if (t) {
                    const r = t(e);
                    if (r) {
                        n.push(r);
                    }
                } else {
                    n.push(e);
                }
            }
        });
        return n;
    }
    function c(e, t) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            const a = yield o("WAWebApiOrphanRevoke").getOrphansRevokesCache();
            const i = [];
            const newMsgs = [];
            let s = 0;
            const u = [];
            t.forEach((e)=>{
                const c = e.id.toString();
                const d = o("WAWebLidMigrationUtils").getAlternateMsgKey(e.id);
                const m = a.get(c) ?? (d && a.get(d.toString()));
                if (m) {
                    s++;
                    if (u.length < 3) {
                        u.push(e.id.id);
                    }
                    if (!r("WAWebWid").isStatus(e.id.remote)) {
                        newMsgs.push(o("WAWebApiOrphanRevoke").createRevokeMsgFromOrphanRevoke(e, m));
                    }
                    i.push(m);
                } else if (n) {
                    const p = n(e);
                    if (p) {
                        newMsgs.push(p);
                    }
                } else {
                    newMsgs.push(e);
                }
            });
            if (s > 0) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[filterAndReplaceMessages] ",
                    " orphan revokes ids=",
                    ""
                ])), s, u);
            }
            o("WAWebApiOrphanRevoke").bulkRemoveOrphansUsingOrphansCache(i);
            return {
                newMsgs
            };
        });
        return d.apply(this, arguments);
    }
    l.validateMsgFn = s;
    l.filterAndReplaceMessagesInitialHistorySync = u;
    l.filterAndReplaceMessages = c;
}, 98);