__d("WAWebStoreSpecialAbProps", [
    "WALogger",
    "WAWebABProps",
    "WAWebLocalStorage",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = [
        "wa_web_favicons_update_m1",
        "web_ui_refresh_m1",
        "web_hybrid_apply_latest_db_schema_optimization_enabled"
    ];
    const u = "abprops_needed_early";
    function c() {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            try {
                const t = s.reduce((e, t)=>{
                    const n = o("WAWebABProps").getABPropConfigValue(t);
                    if (n != null) {
                        e[t] = n;
                    }
                    return e;
                }, {});
                if (r("WAWebLocalStorage") != null) {
                    r("WAWebLocalStorage").setItem(u, JSON.stringify(t));
                }
            } catch (t) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Failed to store special early abprops"
                ]))).sendLogs(r("getErrorSafe")(t).message);
            }
        });
        return d.apply(this, arguments);
    }
    l.storeSpecialAbProps = c;
}, 98);