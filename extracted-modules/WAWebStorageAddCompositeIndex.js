__d("WAWebStorageAddCompositeIndex", [
    "invariant",
    "WAWebStorageMutation",
    "WAWebStorageSchema"
], function(t, n, r, o, a, i, l, s) {
    const e = ((e)=>{
        function t(t, n) {
            let r;
            r = e.call(this, n) || this;
            r.columns = [].concat(t);
            return r;
        }
        babelHelpers.inheritsLoose(t, e);
        const n = t.prototype;
        n.validate = function(t) {
            const e = this;
            this.columns.forEach((e)=>{
                if (!t.columns.find((t)=>t.packedName === e)) {
                    s(0, 75731, e, t.name);
                }
            });
            if (!(this.columns.length > 1)) {
                s(0, 56264);
            }
            if (o("WAWebStorageSchema").findIndex(t, this.$AddCompositeIndex$p_1()) !== -1) {
                s(0, 75735, String(this.columns), t.name);
            }
            const n = t.columns.filter((e)=>e.primaryKey && e.primaryKey === o("WAWebStorageSchema").PrimaryKeyType.COMPOSITE).map((e)=>e.name);
            if (!(n.length !== this.columns.length || n.some((t)=>!e.columns.includes(t)))) {
                s(0, 75736, String(this.columns), t.name);
            }
        };
        n.apply = function(t) {
            const e = o("WAWebStorageSchema").cloneSchema(t);
            e.indexes.push(this.$AddCompositeIndex$p_1());
            return e;
        };
        n.$AddCompositeIndex$p_1 = function() {
            return {
                type: o("WAWebStorageSchema").INDEX_TYPE.COMPOSITE,
                columns: this.columns
            };
        };
        return t;
    })(r("WAWebStorageMutation"));
    l.default = e;
}, 98);