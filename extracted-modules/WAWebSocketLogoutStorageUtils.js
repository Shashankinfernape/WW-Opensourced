__d("WAWebSocketLogoutStorageUtils", [
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WAWebFtsClient",
    "WAWebFtsStorage",
    "WAWebJobsStorage",
    "WAWebLruMediaStorageUtils",
    "WAWebModelStorage",
    "WAWebOffdStorage",
    "WAWebQplStorage",
    "WAWebWorkerStorage",
    "asyncToGeneratorRuntime",
    "cr:10201",
    "getErrorSafe",
    "gkx"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = r("JSResourceForInteraction")("WAWebLabyrinthDebugStorage").__setRef("WAWebSocketLogoutStorageUtils");
    function c() {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = [
                o("WAWebModelStorage").destroy(),
                o("WAWebLruMediaStorageUtils").destroyStorage()
            ];
            e.push(o("WAWebFtsStorage").destroy());
            e.push(o("WAWebOffdStorage").destroy());
            e.push(o("WAWebJobsStorage").destroy());
            e.push(o("WAWebQplStorage").destroy());
            e.push(o("WAWebFtsClient").ftsClient.clearInitializationPromises());
            e.push(o("WAWebFtsClient").ftsClient.destroyExternalStorage());
            if (r("gkx")("23871")) {
                e.push(m());
            }
            e.push(o("WAWebWorkerStorage").destroy());
            yield (s || (s = n("Promise"))).all(e);
        });
        return d.apply(this, arguments);
    }
    function m() {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            try {
                const t = yield u.load();
                const n = t.destroy;
                yield n();
            } catch (error) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "destroyStorage: loading Labyrinth debug storage failed"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("labyrinth-debug-storage-load-failed");
            }
        });
        return p.apply(this, arguments);
    }
    l.destroyStorage = c;
}, 98);