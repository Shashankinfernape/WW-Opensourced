__d("FbtResultBase", [], function(t, n, r, o, a, i) {
    "use strict";
    class e {
        constructor(e, t){
            this.$1 = e;
            this.__errorListener = t;
            this.$3 = false;
            this.$2 = null;
        }
        flattenToArray() {
            return e.flattenToArray(this.$1);
        }
        getContents() {
            return this.$1;
        }
        toString() {
            if (Object.isFrozen(this)) {
                return this.$4();
            }
            if (this.$3) {
                return "<<Reentering fbt.toString() is forbidden>>";
            }
            this.$3 = true;
            try {
                return this.$4();
            } finally{
                this.$3 = false;
            }
        }
        $4() {
            if (this.$2 != null) {
                return this.$2;
            }
            let t = "";
            for(let n = this.flattenToArray(), r = 0; r < n.length; ++r){
                const o = n[r];
                if (typeof o === "string" || o instanceof e) {
                    t += o.toString();
                } else {
                    let a;
                    if (!((a = this.__errorListener) == null || a.onStringSerializationError == null)) {
                        a.onStringSerializationError(o);
                    }
                }
            }
            if (!Object.isFrozen(this)) {
                this.$2 = t;
            }
            return t;
        }
        toJSON() {
            return this.toString();
        }
        static flattenToArray(n) {
            const t = [];
            for (const o of n){
                if (Array.isArray(o)) {
                    t.push(...e.flattenToArray(o));
                } else if (o instanceof e) {
                    t.push(...o.flattenToArray());
                } else {
                    t.push(o);
                }
            }
            return t;
        }
    }
    [
        "anchor",
        "big",
        "blink",
        "bold",
        "charAt",
        "charCodeAt",
        "codePointAt",
        "contains",
        "endsWith",
        "fixed",
        "fontcolor",
        "fontsize",
        "includes",
        "indexOf",
        "italics",
        "lastIndexOf",
        "link",
        "localeCompare",
        "match",
        "normalize",
        "repeat",
        "replace",
        "search",
        "slice",
        "small",
        "split",
        "startsWith",
        "strike",
        "sub",
        "substr",
        "substring",
        "sup",
        "toLocaleLowerCase",
        "toLocaleUpperCase",
        "toLowerCase",
        "toUpperCase",
        "trim",
        "trimLeft",
        "trimRight"
    ].forEach((t)=>{
        e.prototype[t] = function(...r) {
            let e;
            if (!((e = this.__errorListener) == null || e.onStringMethodUsed == null)) {
                e.onStringMethodUsed(t);
            }
            return String.prototype[t].apply(this, r);
        };
    });
    const l = e;
    a.exports = l;
}, null);