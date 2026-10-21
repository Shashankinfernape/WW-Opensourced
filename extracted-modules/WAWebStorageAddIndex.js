__d("WAWebStorageAddIndex", [
    "invariant",
    "WAWebStorageMutation",
    "WAWebStorageSchema"
], function(t, n, r, o, a, i, l, s) {
    const e = ((e)=>{
        function t(t, n) {
            let r;
            r = e.call(this, n) || this;
            r.keyPath = t;
            r.column = t.split(".")[0];
            return r;
        }
        babelHelpers.inheritsLoose(t, e);
        const n = t.prototype;
        n.validate = function(t) {
            const e = this;
            const n = t.columns.find((t)=>t.packedName === e.column);
            if (!n) {
                s(0, 75731, this.column, t.name);
            }
            if (!(n && (!n.primaryKey || n.primaryKey === o("WAWebStorageSchema").PrimaryKeyType.COMPOSITE))) {
                s(0, 75732, t.name);
            }
            if (t.indexes.some((t)=>(t.type === o("WAWebStorageSchema").INDEX_TYPE.ARRAY || t.type === o("WAWebStorageSchema").INDEX_TYPE.SIMPLE || t.type === o("WAWebStorageSchema").INDEX_TYPE.UNIQUE) && o("WAWebStorageSchema").indexContainsColumn(t, e.column))) {
                s(0, 75733, this.column, t.name);
            }
        };
        n.apply = function(t) {
            const e = o("WAWebStorageSchema").cloneSchema(t);
            e.indexes.push(this.$AddIndex$p_1());
            return e;
        };
        n.$AddIndex$p_1 = function() {
            return {
                type: o("WAWebStorageSchema").INDEX_TYPE.SIMPLE,
                column: this.keyPath
            };
        };
        return t;
    })(r("WAWebStorageMutation"));
    l.default = e;
}, 98);