__d("WAWebStatusDBMessageInfo", [
    "Promise",
    "WABatcher",
    "WALogger",
    "WAPromiseMap",
    "WAWebApiMessageInfoStore",
    "WAWebLidStatusMigrationUtils",
    "WAWebUserPrefsStatus",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = {
        delayMs: 5000
    };
    const p = o("WABatcher").createSimpleBatcher(m, function(e) {
        return _(e);
    });
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[updatePeerStatusReceiptInfoInBatch] processing ",
                " records"
            ])), t.length);
            let r;
            let a;
            let i;
            let l;
            const c = yield o("WAPromiseMap").promiseMap(t, (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ msgKey: t, setting: s }) {
                    switch(s){
                        case "denylist":
                            if (r == null) {
                                r = o("WAWebUserPrefsStatus").getStatusDenyList().then((e)=>new Set(e.map(String)));
                            }
                            if (a == null) {
                                a = o("WAWebUserPrefsStatus").getStatusContacts();
                            }
                            return {
                                msgKey: t,
                                receiverIds: yield (d || (d = n("Promise"))).all([
                                    a,
                                    r
                                ]).then(([t, n])=>t.filter((e)=>!n.has(e.toString())))
                            };
                        case "allowlist":
                            if (i == null) {
                                i = o("WAWebUserPrefsStatus").getStatusAllowList();
                            }
                            return {
                                msgKey: t,
                                receiverIds: yield i
                            };
                        case "contacts":
                            if (a == null) {
                                a = o("WAWebUserPrefsStatus").getStatusContacts();
                            }
                            return {
                                msgKey: t,
                                receiverIds: yield a
                            };
                        default:
                            if (l == null) {
                                l = o("WAWebUserPrefsStatus").getStatusList();
                            }
                            return {
                                msgKey: t,
                                receiverIds: (yield l).list
                            };
                    }
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })());
            const m = [];
            c.forEach((e)=>{
                e.receiverIds.forEach((t)=>{
                    m.push({
                        msgKey: e.msgKey,
                        receiverId: o("WAWebLidStatusMigrationUtils").matWidConvert(t)
                    });
                });
            });
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[updatePeerStatusReceiptInfoInBatch] updating ",
                " records"
            ])), m.length);
            yield o("WAWebApiMessageInfoStore").createOrMergeReceiptRecords(m);
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[updatePeerStatusReceiptInfoInBatch] updated ",
                " records"
            ])), m.length);
            return t.map(()=>{});
        });
        return f.apply(this, arguments);
    }
    function g(e, t, n) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "updatePeerStatusReceiptInfo: adding ",
                ", setting ",
                ", offline ",
                ""
            ])), e.id, n, t);
            const r = p.accept({
                msgKey: e,
                setting: n
            });
            if (!t) {
                p.runActiveBatch();
            }
            return r;
        });
        return h.apply(this, arguments);
    }
    l.updatePeerStatusReceiptInfo = g;
}, 98);