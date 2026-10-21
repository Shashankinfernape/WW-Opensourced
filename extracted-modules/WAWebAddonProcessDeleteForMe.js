__d("WAWebAddonProcessDeleteForMe", [
    "Promise",
    "WALogger",
    "WAWebAddonConstants",
    "WAWebAddonDBTable",
    "WAWebAddonSortUtils",
    "WAWebAddonUpdateDataUtils",
    "WAWebMsgType",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            return o("WAWebAddonDBTable").addonDBTable.getByMsgKey(o("WAWebMsgType").MSG_TYPE.COMMENT, e);
        });
        return c.apply(this, arguments);
    }
    function d(e, t) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(tableMode, remove) {
            yield o("WAWebAddonUpdateDataUtils").updateAddonsInTableMode({
                processMode: o("WAWebAddonConstants").AddonProcessMode.DeleteForMe,
                tableMode
            }, {
                remove
            });
        });
        return m.apply(this, arguments);
    }
    function p(t) {
        return Array.from(o("WAWebAddonSortUtils").groupAddonsByTableMode(t), function([r, a]) {
            return d(r, a).catch((n)=>{
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "processDeleteForMe failed: ",
                    ""
                ])), n).tags("messaging", "addons").sendLogs(`deleteAddonForMe: ${t[0]?.type} in ${String(r)} failed`);
            });
        });
    }
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = p(e);
            yield (s || (s = n("Promise"))).all(t);
        });
        return f.apply(this, arguments);
    }
    function g(e) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield _([
                e
            ]);
        });
        return h.apply(this, arguments);
    }
    l.hasDeleteAddonForMe = u;
    l.processDeleteForMe = _;
    l.processDeleteForMeSingle = g;
}, 98);