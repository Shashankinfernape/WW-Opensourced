__d("WAWebDBBulkGetRootMsgs", [
    "WALogger",
    "WAWebLid1X1MigrationGating",
    "WAWebLidMigrationUtils",
    "WAWebLidStatusMigrationKeyUtils",
    "WAWebMsgKey",
    "WAWebSchemaChat",
    "WAWebSchemaMessage",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            let t = e;
            if (o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated()) {
                t = yield h(e);
            } else {
                t = e.map((e)=>o("WAWebLidStatusMigrationKeyUtils").matKeyConvert(r("WAWebMsgKey").fromString(e)).toString());
            }
            const n = yield f(t);
            if (n.some((e)=>e == null) && !o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated()) {
                yield p(t, n);
            }
            return n;
        });
        return m.apply(this, arguments);
    }
    function p(e, t) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = e.map((e)=>r("WAWebMsgKey").fromString(e));
            const a = [];
            for(let idxInOriginalMsgKeys = 0; idxInOriginalMsgKeys < t.length; idxInOriginalMsgKeys++){
                if (t[idxInOriginalMsgKeys] == null && n[idxInOriginalMsgKeys].remote.isLid()) {
                    a.push({
                        key: n[idxInOriginalMsgKeys],
                        idxInOriginalMsgKeys
                    });
                }
            }
            if (a.length !== 0) {
                const l = C(a.map((e)=>e.key));
                const s = (yield f(l.map(String))).filter(Boolean);
                const u = [];
                s.forEach((e, n)=>{
                    if (e != null) {
                        const o = e.id;
                        const i = r("nullthrows")(a[n]).idxInOriginalMsgKeys;
                        if (i == null) {
                            if (u.length < 3) {
                                u.push(o ?? "null");
                            }
                            return;
                        }
                        t[i] = e;
                    }
                });
                if (u.length > 0) {
                    const d = e.length;
                    o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[fillMissingLidMessages] ",
                        " no idx, ids=",
                        " keys=",
                        ""
                    ])), u.length, u, d).sendLogs("fillMissingLidMessages-no-original-idx");
                }
            }
        });
        return _.apply(this, arguments);
    }
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebSchemaMessage").getMessageTable().bulkGet(e, false);
            const n = new Map;
            for(let r = 0; r < e.length; r++){
                if (t[r] == null || t[r].subtype === "message_edit") {
                    n.set(e[r], r);
                    t[r] = null;
                }
            }
            if (n.size === 0) {
                return t;
            }
            const a = yield o("WAWebSchemaMessage").getMessageTable().anyOf([
                "latestEditMsgKey"
            ], Array.from(n.keys()));
            for (const i of a){
                if (!(i.latestEditMsgKey == null || i.subtype === "message_edit")) {
                    const l = n.get(i.latestEditMsgKey);
                    if (l != null) {
                        t[l] = i;
                    }
                }
            }
            return t;
        });
        return g.apply(this, arguments);
    }
    function h(e) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (!o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated()) {
                return e;
            }
            const t = e.map((e)=>r("WAWebMsgKey").fromString(e));
            const n = b(t.map((e)=>e.remote));
            const a = yield o("WAWebSchemaChat").getChatTable().anyOf([
                "accountLid"
            ], Array.from(n, function(e) {
                return e.toString();
            }));
            const i = new Map(a.map((e)=>[
                    o("WAWebWidFactory").createWid(r("nullthrows")(e.accountLid)),
                    o("WAWebWidFactory").createWid(e.id)
                ]));
            return v(t, i).map(String);
        });
        return y.apply(this, arguments);
    }
    function C(e) {
        const t = e.reduce((acc, item)=>{
            const n = o("WAWebLidMigrationUtils").toPn(item.remote);
            if (n == null) {
                return acc;
            }
            return acc.set(item.remote, n);
        }, new Map);
        return v(e, t);
    }
    function b(t) {
        const n = t.filter((e)=>e.isRegularUser()).map((e)=>o("WAWebLidMigrationUtils").toLid(e));
        if (n.some((e)=>e == null)) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "_bulkGetRootMsgsByAccountLid: missing mapping for PN remote"
            ])));
        }
        return new Set(n.filter(Boolean));
    }
    function v(e, t) {
        const n = [];
        const a = [];
        const i = e.map((e)=>{
            const e_remote = e.remote;
            if (e_remote.isStatus()) {
                return o("WAWebLidStatusMigrationKeyUtils").matKeyConvert(e);
            }
            if (!e_remote.isRegularUser()) {
                return e;
            }
            const l = o("WAWebLidMigrationUtils").toUserLid(e_remote);
            if (l == null) {
                if (n.length < 3) {
                    n.push(e.id);
                }
                return e;
            }
            const s = t.get(l);
            if (s == null) {
                if (a.length < 3) {
                    a.push(e.id);
                }
                return e;
            }
            return r("WAWebMsgKey").from({
                fromMe: e.fromMe,
                remote: s,
                id: e.id
            });
        });
        if (n.length > 0) {
            o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[_bulkGetRootMsgsByAccountLid] no lid for PN cnt=",
                " keys=",
                ""
            ])), n.length, n);
        }
        if (a.length > 0) {
            o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[_bulkGetRootMsgsByAccountLid] no chat for ",
                " lids => ",
                ""
            ])), a.length, a);
        }
        return i;
    }
    l.bulkGetRootMsgs = d;
    l.fixMsgKeysWithChatId = h;
    l.fixMsgKeysWithPnMapping = C;
}, 98);