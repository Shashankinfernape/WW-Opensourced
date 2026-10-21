__d("WAWebStorageAbstractPrimaryKey", [
    "invariant",
    "WAWebStorageMutation",
    "err"
], function(t, n, r, o, a, i, l, s) {
    const e = ((e)=>{
        function t(t, n) {
            let r;
            r = e.call(this, n) || this;
            if (r.constructor.name === "AbstractPrimaryKey") {
                s(0, 56321);
            }
            if (Array.isArray(t)) {
                r.columns = [].concat(t);
            } else {
                r.columns = [
                    t
                ];
            }
            return r;
        }
        babelHelpers.inheritsLoose(t, e);
        const n = t.prototype;
        n.validate = function(t) {
            if (t.columns.length !== 0) {
                s(0, 56320);
            }
        };
        n.apply = function(t) {
            throw r("err")("Subclass of `AbstractPrimaryKey` must implement `apply` method");
        };
        return t;
    })(r("WAWebStorageMutation"));
    l.default = e;
}, 98);