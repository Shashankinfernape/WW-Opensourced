__d("WAPromiseCache", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = function(t) {
        this.promise = t;
        this.lastUsedTime = this.createdTime = +Date.now();
    };
    const l = (()=>{
        function t(e, { maxCached: r = 10, maxAge: a = 1 / 0, shouldCache: i }) {
            this.$1 = {};
            this.$2 = r;
            this.$3 = a;
            this.$4 = e;
            this.$5 = i;
        }
        const n = t.prototype;
        n.delete = function(t) {
            delete this.$1[t];
        };
        n.getOrRun = function(n, ...g) {
            const t = this;
            const r = this.$1;
            if (this.$3 !== 1 / 0) {
                const o = Date.now() - this.$3;
                for(let a = Object.keys(r), i = 0; i < a.length; i++){
                    const l = a[i];
                    if (r[l].createdTime < o) {
                        delete r[l];
                    }
                }
            }
            const s = r[n];
            if (s) {
                s.lastUsedTime = +Date.now();
                return s.promise;
            }
            const u = Object.keys(r);
            if (u.length >= this.$2) {
                let c;
                let d;
                for (const p of u){
                    const _ = r[p];
                    if (d == null || _.lastUsedTime < d) {
                        d = _.lastUsedTime;
                        c = p;
                    }
                }
                if (c != null) {
                    delete r[c];
                }
            }
            const y = this.$4.apply(void 0, [
                n,
                ...g
            ]);
            r[n] = new e(y);
            y.then((e)=>{
                const r = t.$5;
                if (t.$1[n] === y && !r(e)) {
                    delete t.$1[n];
                }
            }).catch(()=>{
                if (t.$1[n] === y) {
                    delete t.$1[n];
                }
            });
            return y;
        };
        n.isCached = function(t) {
            const e = this.$1;
            const n = e[t];
            if (n) {
                let r = true;
                if (this.$3 !== 1 / 0) {
                    const o = Date.now() - this.$3;
                    r = n.createdTime >= o;
                }
                return r && !!n;
            }
            return false;
        };
        return t;
    })();
    i.default = l;
}, 66);