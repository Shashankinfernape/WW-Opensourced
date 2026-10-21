__d("WebStorageMutex", [
    "WebStorage",
    "clearTimeout",
    "pageID",
    "setTimeout"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s = null;
    let u = false;
    let c = r("pageID");
    function d() {
        if (!u) {
            u = true;
            s = (e || (e = r("WebStorage"))).getLocalStorage();
        }
        return s;
    }
    class m {
        constructor(e){
            this.name = e;
        }
        static testSetPageID(t) {
            c = t;
        }
        $2() {
            const t = d();
            if (!t) {
                return c;
            }
            const n = (t.getItem(`mutex_${this.name}`) ?? "").split(":");
            if (n && parseInt(n[1], 10) >= Date.now()) {
                return n[0];
            }
            return null;
        }
        $3(n) {
            const t = d();
            if (t) {
                const o = n ?? 1000;
                const a = Date.now() + o;
                (e || (e = r("WebStorage"))).setItemGuarded(t, `mutex_${this.name}`, `${c}:${a}`);
            }
        }
        hasLock() {
            return this.$2() === c;
        }
        lock(t, n, o) {
            const e = this;
            if (this.$1 != null && this.$1 !== 0) {
                r("clearTimeout")(this.$1);
            }
            if (c === (this.$2() || c)) {
                this.$3(o);
            }
            this.$1 = r("setTimeout")(function() {
                e.$1 = null;
                const r = e.hasLock() ? t : n;
                if (r) {
                    r(e);
                }
            }, 0);
        }
        unlock() {
            if (this.$1 != null && this.$1 !== 0) {
                r("clearTimeout")(this.$1);
            }
            const e = d();
            if (e && this.hasLock()) {
                e.removeItem(`mutex_${this.name}`);
            }
        }
    }
    l.default = m;
}, 98);