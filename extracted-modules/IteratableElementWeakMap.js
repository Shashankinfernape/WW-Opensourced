__d("IteratableElementWeakMap", [
    "WebAPIs"
], function(t, n, r, o, a, i, l) {
    "use strict";
    class e {
        constructor(){
            this.$1 = [];
            this.$2 = new (o("WebAPIs")).WeakMap;
            this.$3 = 0;
        }
        delete(t) {
            this.$2.delete(t);
            this.$1 = this.$1.filter((e)=>{
                const n = e.deref();
                return n !== t && n != null;
            });
        }
        set(t, n) {
            if (!this.$2.has(t)) {
                const e = new (o("WebAPIs")).WeakRef(t);
                this.$1.push(e);
                this.$2.set(t, n);
            }
            if (this.$3++ % 10 === 0) {
                this.$1 = this.$1.filter((e)=>{
                    const t = e.deref();
                    return t != null;
                });
            }
        }
        get(t) {
            return this.$2.get(t);
        }
        clear() {
            this.$1 = [];
            this.$2 = new (o("WebAPIs")).WeakMap;
        }
        has(t) {
            return this.$2.has(t);
        }
        size() {
            let e = 0;
            for (const t of this.$1){
                const n = t.deref();
                if (n != null) {
                    e++;
                }
            }
            return e;
        }
        *entries() {
            this.$1 = this.$1.filter((e)=>e.deref() != null);
            for (const e of this.$1){
                const t = e.deref();
                if (t) {
                    const n = this.$2.get(t);
                    if (n != null) {
                        const r = [
                            t,
                            n
                        ];
                        yield r;
                    }
                }
            }
        }
        *keys() {
            const e = this.entries();
            for (const [n, r] of e){
                yield n;
            }
        }
        *values() {
            const e = this.entries();
            for (const [n, r] of e){
                yield r;
            }
        }
        forEach(t, n) {
            const e = this.entries();
            for (const [o, a] of e){
                t.call(n, a, o, this);
            }
        }
    }
    l.default = e;
}, 98);