__d("CallbackDependencyManager", [
    "ErrorGuard"
], function(t, n, r, o, a, i) {
    let e;
    class l {
        constructor(){
            this.$1 = new Map;
            this.$2 = new Map;
            this.$3 = 1;
            this.$4 = new Map;
        }
        $5(t, n) {
            let e = 0;
            const r = new Set;
            for(let o = 0, a = n.length; o < a; o++){
                r.add(n[o]);
            }
            for (const i of r.keys()){
                if (!this.$4.get(i)) {
                    e++;
                    let l = this.$1.get(i);
                    if (l === undefined) {
                        l = new Map;
                        this.$1.set(i, l);
                    }
                    l.set(t, (l.get(t) || 0) + 1);
                }
            }
            return e;
        }
        $6(r) {
            const t = this.$1.get(r);
            if (t) {
                for (const o of t.entries()){
                    const a = o[0];
                    const i = o[1] - 1;
                    t.set(a, i);
                    if (i <= 0) {
                        t.delete(a);
                    }
                    const l = this.$2.get(a);
                    if (l !== undefined && (l.$7--, l.$7 <= 0)) {
                        const s = l.$8;
                        this.$2.delete(a);
                        (e || (e = n("ErrorGuard"))).applyWithGuard(s, null, []);
                    }
                }
            }
        }
        addDependenciesToExistingCallback(t, n) {
            const e = this.$2.get(t);
            if (!e) {
                return null;
            }
            const r = this.$5(t, n);
            e.$7 += r;
            return t;
        }
        isPersistentDependencySatisfied(t) {
            return !!this.$4.get(t);
        }
        satisfyPersistentDependency(t) {
            this.$4.set(t, 1);
            this.$6(t);
        }
        satisfyNonPersistentDependency(t) {
            const e = this.$4.get(t) === 1;
            if (!e) {
                this.$4.set(t, 1);
            }
            this.$6(t);
            if (!e) {
                this.$4.delete(t);
            }
        }
        registerCallback(r, o) {
            const t = this.$3;
            this.$3++;
            const a = this.$5(t, o);
            if (a === 0) {
                (e || (e = n("ErrorGuard"))).applyWithGuard(r, null, []);
                return null;
            }
            this.$2.set(t, {
                $8: r,
                $7: a
            });
            return t;
        }
    }
    a.exports = l;
}, null);