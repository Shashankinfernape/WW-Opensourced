__d("QPLMarkerMap", [
    "DoublyLinkedListMap"
], function(t, n, r, o, a, i, l) {
    "use strict";
    class e {
        constructor(e = {}){
            var { perMarkerLimit = null, totalLimit = null } = e;
            this.size = 0;
            this.$1 = {};
            this.$4 = totalLimit;
            this.$5 = perMarkerLimit;
            this.$3 = new Map;
            this.$2 = new (r("DoublyLinkedListMap"));
        }
        set(t, n, r) {
            let e = this.$1[t];
            if (e === undefined) {
                const o = {};
                e = o;
                this.$1[t] = e;
            }
            const a = Object.prototype.hasOwnProperty.call(e, n);
            if (!a) {
                this.$6(t);
                this.$7();
            }
            this.$8(t, n);
            if (!a) {
                this.size++;
            }
            e[n] = r;
        }
        delete(t, n) {
            const e = this.$1[t];
            if (!(e === undefined || !Object.prototype.hasOwnProperty.call(e, n))) {
                this.$9(t, n);
                delete e[n];
                this.size--;
                if (Object.keys(e).length === 0) {
                    delete this.$1[t];
                }
            }
        }
        get(t, n) {
            const e = this.$1[t];
            if (e !== undefined) {
                return e[n];
            }
        }
        has(t, n) {
            const e = this.$1[t];
            if (e === undefined) {
                return false;
            }
            return Object.prototype.hasOwnProperty.call(e, n);
        }
        forEach(t) {
            let e = 0;
            for(const n in this.$1){
                const r = Number(n);
                const o = this.$1[r];
                for(const a in o){
                    const i = Number(a);
                    t(o[i], r, i, e++);
                }
            }
        }
        toString() {
            try {
                return JSON.stringify(this.$1);
            } catch (e) {
                return "{}";
            }
        }
        $8(t, n) {
            const e = {
                markerId: t,
                instanceKey: n
            };
            const r = this.$10(t, n);
            const o = this.$4 != null;
            const a = this.$5 != null;
            if (o) {
                this.$2.remove(r);
                this.$2.append(r, e);
            }
            const i = this.$11(t);
            if (a) {
                i.remove(r);
                i.append(r, e);
            }
        }
        $9(t, n) {
            const e = this.$10(t, n);
            const r = this.$4 != null;
            const o = this.$5 != null;
            if (r) {
                this.$2.remove(e);
            }
            if (o) {
                const a = this.$3.get(t);
                if (a) {
                    a.remove(e);
                    if (a.isEmpty()) {
                        this.$3.delete(t);
                    }
                }
            }
        }
        $6(t) {
            const e = this.$5;
            if (e != null) {
                const n = this.$11(t);
                if (n.getCount() >= e) {
                    this.$12(n);
                }
            }
        }
        $7() {
            const e = this.$4;
            if (e != null && this.size >= e) {
                this.$12(this.$2);
            }
        }
        $12(t) {
            const e = t.getHeadKey();
            if (e != null) {
                const n = t.get(e);
                if (n) {
                    this.delete(n.markerId, n.instanceKey);
                }
            }
        }
        $10(t, n) {
            return `${t}:${n}`;
        }
        $11(t) {
            let e = this.$3.get(t);
            if (!e) {
                e = new (r("DoublyLinkedListMap"));
                this.$3.set(t, e);
            }
            return e;
        }
    }
    l.default = e;
}, 98);