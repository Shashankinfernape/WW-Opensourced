__d("WAWebStorageRemoveIndex", [
    "invariant",
    "WAWebStorageMutation",
    "WAWebStorageSchema"
], function(t, n, r, o, a, i, l, s) {
    const e = ((e)=>{
        function t(t, n) {
            let r;
            r = e.call(this, n) || this;
            r.column = t;
            return r;
        }
        babelHelpers.inheritsLoose(t, e);
        const n = t.prototype;
        n.validate = function(t) {
            if (o("WAWebStorageSchema").findIndex(t, this.$RemoveIndex$p_1()) === -1) {
                s(0, 75718, this.column, t.name);
            }
        };
        n.apply = function(t) {
            const e = o("WAWebStorageSchema").cloneSchema(t);
            const n = o("WAWebStorageSchema").findIndex(t, this.$RemoveIndex$p_1());
            e.indexes.splice(n, 1);
            return e;
        };
        n.$RemoveIndex$p_1 = function() {
            return {
                type: o("WAWebStorageSchema").INDEX_TYPE.SIMPLE,
                column: this.column
            };
        };
        return t;
    })(r("WAWebStorageMutation"));
    l.default = e;
}, 98);