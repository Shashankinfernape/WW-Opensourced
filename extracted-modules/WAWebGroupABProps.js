__d("WAWebGroupABProps", [
    "WALogger",
    "WAWebGroupABPropsCache",
    "WAWebGroupABPropsConfigs",
    "gkx"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(t, n) {
        const i = o("WAWebGroupABPropsConfigs").ABPropConfigs[n];
        if (i == null) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[group-abprops] config not defined, config name: ",
                "."
            ])), n);
        }
        const l = i[0];
        const u = i[1];
        const c = i[2];
        const d = i[3];
        const m = c;
        const p = o("WAWebGroupABPropsCache").getGetGroupABPropConfigValueImpl();
        if (p == null) {
            if (r("gkx")("16539")) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-abprops] impl must be set before access: ",
                    ""
                ])), n);
            }
            return m;
        }
        const _ = p(t, n) ?? m;
        return _;
    }
    l.getGroupABPropConfigValue = u;
}, 98);