__d("WAWebThreadLoggingFalco", [
    "JSResourceForInteraction",
    "WALogger",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "unsafeCast"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = r("JSResourceForInteraction")("WAWebWamFalcoGlobalFields").__setRef("WAWebThreadLoggingFalco");
    function d() {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            try {
                yield c.load();
                return true;
            } catch (e) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "canLoadThreadLoggingFalcoCanonicals: loading the canonical fields failed"
                ]))).catching(r("getErrorSafe")(e)).sendLogs("thread-logging-falco-canonicals-preload-failure");
                return false;
            }
        });
        return m.apply(this, arguments);
    }
    function p(e, t) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            let n;
            try {
                n = yield c.load();
            } catch (e) {
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "logThreadInteractionFalcoEvent: loading the canonical fields failed"
                ]))).catching(r("getErrorSafe")(e)).sendLogs("thread-logging-falco-canonicals-load-failure");
                return;
            }
            e.log(function() {
                const e = babelHelpers.extends({}, f(function() {
                    return n.getCanonicalFieldsForFalco();
                }));
                for (const [a, i] of Object.entries(t())){
                    if (i != null && (typeof i !== "number" || Number.isFinite(i))) {
                        e[a] = i;
                    }
                }
                return r("unsafeCast")(e);
            });
        });
        return _.apply(this, arguments);
    }
    function f(t) {
        try {
            return t();
        } catch (t) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "logThreadInteractionFalcoEvent: reading the canonical fields failed"
            ]))).catching(r("getErrorSafe")(t)).sendLogs("thread-logging-falco-canonicals-read-failure");
            return {};
        }
    }
    l.canLoadThreadLoggingFalcoCanonicals = d;
    l.logThreadInteractionFalcoEvent = p;
}, 98);