__d("WAWebStorageRemoveCompositeIndex", [
    "invariant",
    "WAWebStorageMutation",
    "WAWebStorageSchema"
], function(t, n, r, o, a, i, l, s) {
    const e = ((e)=>{
        function t(t, n) {
            let r;
            r = e.call(this, n) || this;
            r.columns = t.toSorted();
            return r;
        }
        babelHelpers.inheritsLoose(t, e);
        const n = t.prototype;
        n.validate = function(t) {
            if (o("WAWebStorageSchema").findIndex(t, this.$RemoveIndex$p_1()) === -1) {
                s(0, 75726, String(this.columns), t.name);
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
                type: o("WAWebStorageSchema").INDEX_TYPE.COMPOSITE,
                columns: this.columns
            };
        };
        return t;
    })(r("WAWebStorageMutation"));
    l.default = e;
}, 98);