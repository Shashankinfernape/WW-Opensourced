__d("WAWebLidStatusMigrationUtils", [
    "WALogger",
    "WAWebLidMigrationUtils"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(t) {
        if (!t.isRegularUser()) {
            return t;
        }
        const n = o("WAWebLidMigrationUtils").toLid(t);
        return n ?? (o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "matWidConvert: no LID mapping found for ",
            ", falling back to PN"
        ])), t.toLogString()), t);
    }
    l.matWidConvert = s;
}, 98);