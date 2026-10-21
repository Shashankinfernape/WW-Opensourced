__d("WATrie", [
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    "use strict";
    class e {
        constructor(e){
            this._children = {};
            this._indices = [];
            if (e) {
                this._data = e;
            }
        }
        static fromBackwardsStrings(n, r) {
            return n.reduce((acc, item, index)=>acc.addBackwardsString(item, index), new e(r))._optimize();
        }
        addBackwardsString(n, r) {
            for(var t = n.length - 1, o = this; t >= 0;){
                const a = n.charAt(t);
                o._addIndex(r);
                o = o.get(a) || o.set(a, new e);
                t--;
            }
            o._addIndex(r);
            return this;
        }
        static fromForwardsStrings(n, r) {
            return n.reduce((acc, item, index)=>acc.addForwardsString(item, index), new e(r))._optimize();
        }
        addForwardsString(n, r) {
            for(var t = 0, o = this; t < n.length;){
                const a = n.charAt(t);
                o._addIndex(r);
                o = o.get(a) || o.set(a, new e);
                t++;
            }
            o._addIndex(r);
            return this;
        }
        set(t, n) {
            this._children[t] = n;
            return n;
        }
        get(t) {
            return this._children[t];
        }
        getChildren() {
            const e = this;
            return Object.keys(this._children).map((prefix)=>({
                    prefix,
                    node: r("nullthrows")(e.get(prefix))
                }));
        }
        hasChildren() {
            return !s(this._children);
        }
        search(t) {
            const _data = this._data;
            if (!_data) {
                return [];
            }
            for(var n = this, r = 0; r < t.length && n; r++){
                const o = t[r];
                n = n.get(o);
            }
            if (!n) {
                return [];
            }
            const a = n.getIndices();
            return a.map((t)=>_data[t]);
        }
        _addIndex(t) {
            this._indices.push(t);
        }
        getIndices() {
            const _indices = this._indices;
            const t = Object.keys(this._children);
            if (t.length === 1 && this._indices.length === 0) {
                return this._children[t[0]].getIndices();
            }
            return _indices;
        }
        _optimize() {
            const e = this;
            if (!this.hasChildren()) {
                return this;
            }
            const t = Object.keys(this._children);
            const _indices = this._children[t[0]]._indices;
            t.forEach((t)=>{
                e._children[t]._optimize();
            });
            if (t.length === 1 && this._indices.length === _indices.length) {
                this._indices = [];
            }
            return this;
        }
        testOnlyGetChildrenProperty() {
            return this._children;
        }
        testOnlyGetIndicesProperty() {
            return this._indices;
        }
    }
    function s(_children) {
        for(const t in _children){
            return false;
        }
        return true;
    }
    l.default = e;
}, 98);