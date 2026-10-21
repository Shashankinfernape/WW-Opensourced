__d("WAWebDecompressAndDecodeBundle", [
    "WABinary",
    "WAGzip",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = new (o("WABinary")).Binary(e);
            return o("WAGzip").inflate(t.readByteArrayView());
        });
        return s.apply(this, arguments);
    }
    l.decompressBundle = e;
}, 98);