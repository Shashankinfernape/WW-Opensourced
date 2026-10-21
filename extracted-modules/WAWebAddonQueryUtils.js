__d("WAWebAddonQueryUtils", [
    "WALogger",
    "WAWebDBMsgUtils",
    "WAWebLidMigrationUtils",
    "WAWebMaybe",
    "WAWebMsgKey",
    "asyncToGeneratorRuntime",
    "compactMap"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const n = yield o("WAWebDBMsgUtils").getMsgsByMsgKey(t.map(String));
            const a = new Map(n.map((e)=>[
                    e.id.toString(),
                    e
                ]));
            if (a.size === t.length) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "getParentMsgsByMsgKey: found all parent messages (",
                    ")"
                ])), a.size);
                return a;
            }
            const a_size = a.size;
            const l = t.filter((e)=>!a.has(e.toString()));
            const u = r("compactMap")(l, o("WAWebLidMigrationUtils").getAlternateMsgKey);
            if (u.length > 0) {
                const c = yield o("WAWebDBMsgUtils").getMsgsByMsgKey(u.map(String));
                c.forEach((e)=>{
                    o("WAWebMaybe").ifSome(o("WAWebLidMigrationUtils").getAlternateMsgKey(e.id), function(t) {
                        a.set(t.toString(), e);
                    });
                });
            }
            yield d(t, a);
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[getParentMsgsByMsgKey] ",
                "/",
                " parents, ",
                " w/o alt keys"
            ])), a.size, t.length, a_size);
            return a;
        });
        return c.apply(this, arguments);
    }
    function d(e, t) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = new Map;
            for (const a of e){
                if (!(t.has(a.toString()) || a.participant == null || !a.remote.isUser() || !a.remote.equals(a.participant))) {
                    const i = new (r("WAWebMsgKey"))({
                        fromMe: a.fromMe,
                        remote: a.remote,
                        id: a.id
                    });
                    n.set(i.toString(), a.toString());
                }
            }
            if (n.size !== 0) {
                const l = yield o("WAWebDBMsgUtils").getMsgsByMsgKey(Array.from(n.keys()));
                l.forEach((e)=>{
                    o("WAWebMaybe").ifSome(n.get(e.id.toString()), function(n) {
                        t.set(n, e);
                    });
                });
            }
        });
        return m.apply(this, arguments);
    }
    l.getParentMsgsByMsgKey = u;
}, 98);