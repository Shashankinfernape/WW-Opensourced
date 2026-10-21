__d("WAWebRequestPersistentStorage", [
    "WALogger",
    "WATagsLogger",
    "asyncToGeneratorRuntime",
    "once"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = r("once")(d);
    function d() {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            try {
                if (navigator?.storage?.persist) {
                    const n = yield navigator.storage.persist();
                    yield o("WATagsLogger").whenReady();
                    if (n) {
                        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[storage] storage bucket is persistent"
                        ])));
                    } else {
                        o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "[storage] storage bucket persistence denied"
                        ]))).sendLogs("aquire-persistent-storage-denied", {
                            sampling: 0.001
                        });
                    }
                }
            } catch (e) {
                yield o("WATagsLogger").whenReady();
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[storage] storage bucket persistence error: ",
                    ""
                ])), e).sendLogs("failed-to-aquire-persistent-storage");
            }
        });
        return m.apply(this, arguments);
    }
    l.requestPersistentStore = c;
}, 98);