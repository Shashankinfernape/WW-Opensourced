__d("WAWebFormatSerializer", [
    "err"
], function(t, n, r, o, a, i, l) {
    class e {
        static onMutator(t, n, o, a, i) {
            throw r("err")("Subclasses of `Serializer` must override `onMutator()`");
        }
        static onRoot(t, n) {
            throw r("err")("Subclasses of `Serializer` must override `onRoot()`");
        }
        static onText(t, n) {
            throw r("err")("Subclasses of `Serializer` must override `onText()`");
        }
        static onDelimiter(t, n) {
            throw r("err")("Subclasses of `Serializer` must override `onDelimiter()`");
        }
    }
    l.default = e;
}, 98);