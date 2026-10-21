__d("WAWebValidateMediaFilehash", [
    "WAMediaCalculateFilehash",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = yield o("WAMediaCalculateFilehash").calculateFilehash(e);
            return t === n;
        });
        return s.apply(this, arguments);
    }
    l.validateFileash = e;
}, 98);