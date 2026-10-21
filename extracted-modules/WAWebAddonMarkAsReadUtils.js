__d("WAWebAddonMarkAsReadUtils", [
    "WALogger",
    "WAWebAddonConstants",
    "WAWebAddonSelectUtils",
    "WAWebAddonUpdateDataUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const add = t.map((e)=>{
                if (e.read != null) {
                    return babelHelpers.extends({}, e, {
                        read: true
                    });
                }
                return e;
            });
            try {
                const r = o("WAWebAddonSelectUtils").getAddonTableMode(t[0]);
                yield o("WAWebAddonUpdateDataUtils").updateAddonsInTableMode({
                    processMode: o("WAWebAddonConstants").AddonProcessMode.MarkAsRead,
                    tableMode: r
                }, {
                    add
                });
            } catch (error) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "processMarkAsRead update failed ",
                    ""
                ])), error).tags("addons", "messaging").sendLogs("processMarkAsRead");
            }
        });
        return u.apply(this, arguments);
    }
    l.processMarkAsRead = s;
}, 98);