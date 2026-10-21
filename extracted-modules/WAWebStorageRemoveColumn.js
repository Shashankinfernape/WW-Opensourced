__d("WAWebStorageRemoveColumn", [
    "invariant",
    "WAWebStorageMutation",
    "WAWebStorageSchema"
], function(t, n, r, o, a, i, l, s) {
    const e = ((e)=>{
        function t(t, n) {
            let r;
            r = e.call(this, n) || this;
            r.name = t;
            return r;
        }
        babelHelpers.inheritsLoose(t, e);
        const n = t.prototype;
        n.validate = function(t) {
            const e = this;
            const n = t.columns.find((t)=>t.name === e.name);
            if (!n) {
                s(0, 75721, this.name, t.name);
            }
            if (n.primaryKey) {
                s(0, 75722, this.name);
            }
            if (t.indexes.some((t)=>o("WAWebStorageSchema").indexContainsColumn(t, e.name))) {
                s(0, 75723, this.name, t.name);
            }
        };
        n.apply = function(t) {
            const e = this;
            const n = o("WAWebStorageSchema").cloneSchema(t);
            n.columns.splice(n.columns.findIndex((t)=>t.name === e.name), 1);
            return n;
        };
        return t;
    })(r("WAWebStorageMutation"));
    l.default = e;
}, 98);