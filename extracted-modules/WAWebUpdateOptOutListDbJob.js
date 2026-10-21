__d("WAWebUpdateOptOutListDbJob", [
    "WALogger",
    "WAWebSchemaOptOutList",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e, t) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            const a = t.toString();
            try {
                if (n) {
                    yield o("WAWebSchemaOptOutList").getOptOutListTable().createOrReplace({
                        id: a
                    });
                } else {
                    yield o("WAWebSchemaOptOutList").getOptOutListTable().remove(a);
                }
            } catch (t) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAWebUpdateOptOutListDbJob] updateOptOutListDbJob failed"
                ]))).verbose().sendLogs("Failed to update optoutlist db");
                throw r("err")("updateOptOutListDbJob failed");
            }
        });
        return c.apply(this, arguments);
    }
    function d() {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            try {
                yield o("WAWebSchemaOptOutList").getOptOutListTable().clear();
            } catch (e) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAWebUpdateOptOutListDbJob] clearOptOutListDbJob failed"
                ])));
                throw r("err")("clearOptOutListDbJob failed");
            }
        });
        return m.apply(this, arguments);
    }
    l.updateOptOutListDbJob = u;
    l.clearOptOutListDbJob = d;
}, 98);