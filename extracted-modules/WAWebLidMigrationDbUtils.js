__d("WAWebLidMigrationDbUtils", [
    "WALogger",
    "WAWebApiContact",
    "WAWebGetChatRecordByAccountLid",
    "WAWebLid1X1MigrationGating",
    "WAWebSchemaChat",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const n = new Map;
            const r = t.filter((e)=>{
                const t = o("WAWebWidFactory").createWid(e);
                return t.isRegularUser() && !t.isLid();
            });
            if (r.length === 0) {
                return n;
            }
            const a = yield o("WAWebSchemaChat").getChatTable().bulkGet(r);
            a.forEach((e, t)=>{
                let a = e?.accountLid;
                if (a == null) {
                    const l = o("WAWebWidFactory").createUserWidOrThrow(r[t]);
                    a = o("WAWebApiContact").getCurrentLid(l)?.toString();
                }
                if (a != null) {
                    n.set(r[t], a);
                }
            });
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "findAccountLidsForPnChatIds: ",
                " lids for ",
                " pn chats"
            ])), n.size, t.length);
            return n;
        });
        return u.apply(this, arguments);
    }
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = new Map;
            const n = e.filter((e)=>{
                const t = o("WAWebWidFactory").createWid(e);
                return t.isLid();
            });
            if (n.length === 0) {
                return t;
            }
            const r = yield o("WAWebSchemaChat").getChatTable().anyOf([
                "accountLid"
            ], n);
            r.forEach((e)=>{
                const e_accountLid = e.accountLid;
                if (e_accountLid != null) {
                    t.set(e_accountLid, e.id);
                }
            });
            n.forEach((e)=>{
                if (!t.has(e)) {
                    const r = o("WAWebWidFactory").createUserLidOrThrow(e);
                    const a = o("WAWebApiContact").getPhoneNumber(r)?.toString();
                    if (a != null) {
                        t.set(e, a);
                    }
                }
            });
            return t;
        });
        return d.apply(this, arguments);
    }
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated();
            if (t) {
                const n = yield o("WAWebGetChatRecordByAccountLid").getChatRecordByAccountLid(e);
                const r = n[0];
                const a = r?.id;
                if (a) {
                    return o("WAWebWidFactory").createUserWidOrThrow(a);
                }
                return undefined;
            }
            return o("WAWebApiContact").getPhoneNumber(e);
        });
        return p.apply(this, arguments);
    }
    l.findAccountLidsForPnChatIds = s;
    l.findChatIdsForAccountLids = c;
    l.getChatWidFromUserLid = m;
}, 98);