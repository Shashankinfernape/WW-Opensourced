__d("WAWebFeatureDetectionDetectAvifSupport", [
    "WABase64",
    "WAPromiseTimeout",
    "WAWebBoolFunc",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = "AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUEAAAGGbWV0YQAAAAAAAAAhaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAAAAAAAOcGl0bQAAAAAAAQAAACxpbG9jAAAAAEQAAAIAAQAAAAEAAAHJAAAAMwACAAAAAQAAAa4AAAAbAAAAQmlpbmYAAAAAAAIAAAAaaW5mZQIAAAAAAQAAYXYwMUNvbG9yAAAAABppbmZlAgAAAAACAABhdjAxQWxwaGEAAAAAGmlyZWYAAAAAAAAADmF1eGwAAgABAAEAAADDaXBycAAAAJ1pcGNvAAAAFGlzcGUAAAAAAAAAAgAAAAIAAAAQcGl4aQAAAAADCAgIAAAADGF2MUOBIAAAAAAAE2NvbHJuY2x4AAEADQAGgAAAAA5waXhpAAAAAAEIAAAADGF2MUOBABwAAAAAOGF1eEMAAAAAdXJuOm1wZWc6bXBlZ0I6Y2ljcDpzeXN0ZW1zOmF1eGlsaWFyeTphbHBoYQAAAAAeaXBtYQAAAAAAAAACAAEEAQKDBAACBAEFhgcAAABWbWRhdBIACgQYAD5VMhEYAAABEI0S/4asiFoWYfZfwBIACgc4AD5QENBpMiYZAAAAQAD9V8c3k1Qh/jYShRHnGzKDXlQmsoHRD+NUFZA6g7TUMA==";
    const s = 30000;
    let u = null;
    function c() {
        if (u == null) {
            u = o("WAPromiseTimeout").promiseTimeout(d(), s).catch(o("WAWebBoolFunc").returnFalse);
        }
        return u;
    }
    function d() {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const t = yield createImageBitmap(new Blob([
                o("WABase64").decodeB64(e)
            ], {
                type: "image/avif"
            }));
            const n = t.height === 2;
            t.close();
            return n;
        });
        return m.apply(this, arguments);
    }
    l.detectAvifSupport = c;
}, 98);