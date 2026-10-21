__d("WAWebDownloadLogFile", [
    "JSResourceForInteraction",
    "WAWebFileSaver",
    "WAWebFileSaverTypes",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = 1000000;
    const s = 10 * e;
    function u() {
        return new Date().toISOString().replace(/:/g, "-");
    }
    function c(e, t) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = new Blob([
                e
            ], {
                type: "text/plain"
            });
            if (n.size <= s) {
                return o("WAWebFileSaver").FileSaver.downloadData(n, t, o("WAWebFileSaverTypes").AllowedFileExtensions.TXT);
            }
            const r = yield m();
            r.push(e, true);
            const a = new Blob([
                r.result()
            ], {
                type: "application/zip"
            });
            return o("WAWebFileSaver").FileSaver.downloadData(a, `${t}.txt`, o("WAWebFileSaverTypes").AllowedFileExtensions.ZIP);
        });
        return d.apply(this, arguments);
    }
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e = {}) {
            const t = yield r("JSResourceForInteraction")("WAGzip").__setRef("WAWebDownloadLogFile").load();
            return t.createDeflate(e);
        });
        return p.apply(this, arguments);
    }
    l.getLogFileTimestamp = u;
    l.downloadLogFile = c;
}, 98);