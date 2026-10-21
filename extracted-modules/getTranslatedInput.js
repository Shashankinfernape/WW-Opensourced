__d("getTranslatedInput", [
    "Env",
    "ExecutionEnvironment",
    "FBLogger",
    "MakeHasteTranslationsMap"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = "JHASH";
    const c = new RegExp(`__${u}__(.+?)__${u}__`);
    const d = !!(e || (e = r("Env"))).use_fbt_virtual_modules;
    function m(e) {
        const e_table = e.table;
        if (d && (s || (s = r("ExecutionEnvironment"))).isInBrowser) {
            if (typeof e_table === "string") {
                const n = e_table.match(c);
                if (n != null) {
                    return p(babelHelpers.extends({}, e, {
                        table: o("MakeHasteTranslationsMap").get(n[1])
                    }));
                }
            }
            r("FBLogger")("binary_transparency", "inlined_translations").warn("Found inlined translated contents in client_fetch_translations experiment! Input: %s", JSON.stringify(e_table));
        }
        return p(e);
    }
    function p(e) {
        const e_table = e.table;
        if (typeof e_table === "string" && e_table[0] === "_" && e_table[1] === "j" && (e_table[2] === "{" || e_table[2] === "[")) {
            return babelHelpers.extends({}, e, {
                table: JSON.parse(e_table.substring(2))
            });
        }
        return e;
    }
    l.default = m;
}, 98);