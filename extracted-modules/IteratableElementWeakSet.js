__d("IteratableElementWeakSet", [
    "WebAPIs"
], function(t, n, r, o, a, i, l) {
    "use strict";
    class e {
        constructor(){
            this.$1 = [];
            this.$2 = new (o("WebAPIs")).WeakSet;
            this.$3 = 0;
        }
        delete(t) {
            this.$2.delete(t);
            this.$1 = this.$1.filter((e)=>{
                const n = e.deref();
                return n !== t && n != null;
            });
        }
        add(t) {
            if (!this.$2.has(t)) {
                const e = new (o("WebAPIs")).WeakRef(t);
                this.$1.push(e);
                this.$2.add(t);
            }
            if (this.$3++ % 10 === 0) {
                this.$1 = this.$1.filter((e)=>{
                    const t = e.deref();
                    return t != null;
                });
            }
        }
        clear() {
            this.$1 = [];
            this.$2 = new (o("WebAPIs")).WeakSet;
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
        *values() {
            this.$1 = this.$1.filter((e)=>e.deref() != null);
            for (const e of this.$1){
                const t = e.deref();
                if (t) {
                    yield t;
                }
            }
        }
        *keys() {
            yield* this.values();
        }
        *entries() {
            const e = this.values();
            for (const t of e){
                yield [
                    t,
                    t
                ];
            }
        }
        forEach(t, n) {
            const e = this.values();
            for (const r of e){
                t.call(n, r, r, this);
            }
        }
    }
    l.default = e;
}, 98);