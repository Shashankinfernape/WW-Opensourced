__d("WAWebZipUtils", [
    "Promise",
    "WABinary",
    "WAWebZip",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const o = yield (e || (e = n("Promise"))).all(t.map(({ blob })=>d(blob)));
            const a = new (r("WAWebZip"));
            o.forEach((contents, n)=>a.add({
                    contents,
                    path: t[n].name
                }));
            return c(a.create());
        });
        return u.apply(this, arguments);
    }
    function c(e) {
        return new Blob([
            e.readByteArrayView()
        ], {
            type: "application/zip"
        });
    }
    function d(blob) {
        let r;
        return new (e || (e = n("Promise")))(function(e, n) {
            r = new FileReader;
            r.addEventListener("loadend", function() {
                e(o("WABinary").Binary.build(r.result));
            });
            r.addEventListener("error", function() {
                n(r.error);
            });
            r.readAsArrayBuffer(blob);
        });
    }
    l.zipFiles = s;
}, 98);