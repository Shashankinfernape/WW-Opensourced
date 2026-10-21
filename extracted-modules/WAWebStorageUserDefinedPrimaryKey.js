__d("WAWebStorageUserDefinedPrimaryKey", [
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
            if (!(this.columns && this.columns.length === 1)) {
                s(0, 56293);
            }
        };
        n.apply = function(t) {
            const e = o("WAWebStorageSchema").cloneSchema(t);
            e.columns.unshift({
                name: this.columns[0].name,
                packedName: this.columns[0].packedName,
                primaryKey: o("WAWebStorageSchema").PrimaryKeyType.USER_DEFINED
            });
            return e;
        };
        return t;
    })(r("WAWebStorageAbstractPrimaryKey"));
    l.default = e;
}, 98);