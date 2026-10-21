__d("WAWebFormatMutator", [
    "WAWebBoolFunc",
    "err"
], function(t, n, r, o, a, i, l) {
    class e {
        static match(t, n, o) {
            throw r("err")("Subclasses of `Mutator` must override `match()`");
        }
        static mutate(t, n, r) {
            return t;
        }
    }
    e.nestable = o("WAWebBoolFunc").returnTrue;
    e.format = true;
    e.fragment = false;
    e.maskOnUnformat = false;
    e.previewChildrenOnly = false;
    e.compatibility = false;
    e.ellipsifiable = false;
    e.mutates = false;
    l.default = e;
}, 98);