__d("WAWebStorageGatingUtils", [
    "WALogger",
    "WAWebModelStorageUtils",
    "WAWebUserPrefsDBSettings",
    "asyncToGeneratorRuntime",
    "gkx"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const n = yield o("WAWebModelStorageUtils").storageExists();
            if (n) {
                const a = yield o("WAWebUserPrefsDBSettings").getColumnPackingValueFromStorage();
                return a ?? (yield o("WAWebUserPrefsDBSettings").setColumnPackingValueToStorage(false), false);
            }
            if (!r("gkx")("26258") && URLSearchParams) {
                const i = new URLSearchParams(window.location.search);
                const l = i.get("pack");
                if (l != null) {
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[column-serialization] enabled from url request"
                    ])));
                    yield o("WAWebUserPrefsDBSettings").setColumnPackingValueToStorage(l === "true" || l === "1");
                    return true;
                }
            }
            yield o("WAWebUserPrefsDBSettings").setColumnPackingValueToStorage(t);
            return t;
        });
        return u.apply(this, arguments);
    }
    l.columnPackingEnabled = s;
}, 98);