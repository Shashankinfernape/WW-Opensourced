__d("WAWebWAWCInit", [
    "WALogger",
    "WAWebWAWCStorage",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    function s() {
        return r("WAWebWAWCStorage").openDB();
    }
    function u() {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const t = r("WAWebWAWCStorage").opening;
            if (t != null) {
                yield t;
            }
            try {
                yield r("WAWebWAWCStorage").idb();
            } catch (t) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "ensureWAWCOpen: idb() failed, fall back to openDB"
                ]))).catching(r("getErrorSafe")(t)).sendLogs("wawc-ensure-open-fallback");
                yield r("WAWebWAWCStorage").openDB();
            }
        });
        return c.apply(this, arguments);
    }
    l.initWAWC = s;
    l.ensureWAWCOpen = u;
}, 98);