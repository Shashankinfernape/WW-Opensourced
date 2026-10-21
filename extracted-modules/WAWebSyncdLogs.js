__d("WAWebSyncdLogs", [
    "WALogger",
    "WAWebPriorLogs",
    "WAWebSyncdConst",
    "asyncToGeneratorRuntime",
    "compactMap"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e, t) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            const r = o("WAWebPriorLogs").WAWebLogCategory.cast(t);
            if (r != null) {
                return o("WAWebPriorLogs").writePriorLog(r, n);
            }
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: cannot log unknown cagtegory ",
                ""
            ])), t);
        });
        return u.apply(this, arguments);
    }
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = [].concat(Array.from(e ? [
                e
            ] : o("WAWebSyncdConst").CollectionName.members()), [
                ""
            ]);
            const n = r("compactMap")(t, function(e) {
                return o("WAWebPriorLogs").WAWebLogCategory.cast(e);
            });
            return o("WAWebPriorLogs").printPriorLogs(n);
        });
        return d.apply(this, arguments);
    }
    l.writeSyncdLogImpl = s;
    l.printSyncdLogs = c;
}, 98);