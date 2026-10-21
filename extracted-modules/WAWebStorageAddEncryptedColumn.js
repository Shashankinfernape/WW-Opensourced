__d("WAWebStorageAddEncryptedColumn", [
    "invariant",
    "WAWebStorageMutation",
    "WAWebStorageSchema"
], function(t, n, r, o, a, i, l, s) {
    const e = ((e)=>{
        function t(t) {
            let n;
            const { dataType: r, name: o, opts: a, packedName: i } = t;
            n = e.call(this, a) || this;
            n.name = o;
            n.packedName = i;
            n.dataType = r;
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        const n = t.prototype;
        n.validate = function(t) {
            const e = this;
            if (t.columns.find((t)=>t.name === e.name)) {
                s(0, 75738, this.name, t.name);
            }
        };
        n.apply = function(t) {
            const e = o("WAWebStorageSchema").cloneSchema(t);
            e.columns.push({
                name: this.name,
                packedName: this.packedName
            });
            e.encryptedColumns[this.name] = this.dataType;
            return e;
        };
        return t;
    })(r("WAWebStorageMutation"));
    l.default = e;
}, 98);