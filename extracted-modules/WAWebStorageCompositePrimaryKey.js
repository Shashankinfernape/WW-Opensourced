__d("WAWebStorageCompositePrimaryKey", [
    "invariant",
    "WAWebStorageAbstractPrimaryKey",
    "WAWebStorageSchema"
], function(t, n, r, o, a, i, l, s) {
    const e = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const n = t.prototype;
        n.validate = function(n) {
            e.prototype.validate.call(this, n);
            if (!(this.columns && this.columns.length > 1)) {
                s(0, 56266);
            }
        };
        n.apply = function(t) {
            const e = o("WAWebStorageSchema").cloneSchema(t);
            this.columns.forEach((t)=>{
                e.columns.push({
                    name: t.name,
                    packedName: t.packedName,
                    primaryKey: o("WAWebStorageSchema").PrimaryKeyType.COMPOSITE
                });
            });
            return e;
        };
        return t;
    })(r("WAWebStorageAbstractPrimaryKey"));
    l.default = e;
}, 98);