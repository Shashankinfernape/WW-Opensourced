__d("WAWebStorageAddColumn", [
    "invariant",
    "WAWebStorageMutation",
    "WAWebStorageSchema"
], function(t, n, r, o, a, i, l, s) {
    const e = ((e)=>{
        function t(t, n, r) {
            let o;
            o = e.call(this, r) || this;
            o.name = t;
            o.packedName = n;
            return o;
        }
        babelHelpers.inheritsLoose(t, e);
        const n = t.prototype;
        n.validate = function(t) {
            const e = this;
            if (t.columns.find((t)=>t.name === e.name)) {
                s(0, 75717, this.name, t.name);
            }
        };
        n.apply = function(t) {
            const e = o("WAWebStorageSchema").cloneSchema(t);
            e.columns.push({
                name: this.name,
                packedName: this.packedName
            });
            return e;
        };
        return t;
    })(r("WAWebStorageMutation"));
    l.default = e;
}, 98);