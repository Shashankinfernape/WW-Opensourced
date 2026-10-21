__d("RSTLocalStorageMainThread", [
    "FBLogger",
    "WebStorage",
    "fb-error"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = "RSTData";
    const u = 200;
    const c = 2880 * 60 * 1000;
    class d {
        constructor(){
            this.$2 = true;
            this.$1 = (e || (e = r("WebStorage"))).getLocalStorage();
            this.probeAndInit();
        }
        $3(t, n) {
            const e = r("fb-error").getErrorSafe(t);
            r("FBLogger")("responsive-tracker").catching(e).warn("%s error in RSTLocalStorage", n);
        }
        $4() {
            if (!this.$2) {
                return {};
            }
            try {
                const t = this.$1?.getItem(s);
                const n = t != null ? JSON.parse(t) : {};
                if (n !== null && typeof n === "object") {
                    return n;
                }
                return {};
            } catch (error) {
                this.$3(error, "readStore");
                return {};
            }
        }
        $5(t) {
            if (this.$2) {
                try {
                    this.$1?.setItem(s, JSON.stringify(t));
                } catch (error) {
                    this.$3(error, "writeStore");
                    return;
                }
            }
        }
        probeAndInit() {
            if (this.$1 == null) {
                this.$2 = false;
                return;
            }
            const e = this.$1;
            try {
                const t = e.getItem(s);
                if (t != null) {
                    return;
                }
                e.setItem(s, "{}");
            } catch (error) {
                this.$3(error, "probeAndInit");
                this.$2 = false;
            }
        }
        cleanUpExpiredEntries() {
            if (this.$2) {
                try {
                    const e = this.$6(this.$4());
                    this.$5(e);
                } catch (error) {
                    this.$3(error, "cleanUpExpiredEntries");
                    return;
                }
            }
        }
        $6(t) {
            const e = Date.now();
            for (const [r, o] of Object.entries(t)){
                if (e - o.lastWriteTime > c || typeof o.lastWriteTime !== "number") {
                    delete t[r];
                }
            }
            return t;
        }
        $7(t) {
            const e = Object.entries(t);
            if (e.length <= u) {
                return t;
            }
            e.sort((e, t)=>e[1].lastWriteTime - t[1].lastWriteTime);
            const n = e.slice(e.length - u);
            return Object.fromEntries(n);
        }
        set(t, n) {
            if (this.$2) {
                let e = this.$4();
                e = this.$6(e);
                e[t] = {
                    value: n,
                    lastWriteTime: Date.now()
                };
                e = this.$7(e);
                this.$5(e);
            }
        }
        get(t) {
            if (!this.$2) {
                return null;
            }
            const e = this.$4();
            const n = e[t];
            if (n) {
                return n.value;
            }
            return null;
        }
        delete(t) {
            try {
                if (!this.$2) {
                    return;
                }
                const e = this.$4();
                delete e[t];
                this.$5(e);
            } catch (error) {
                this.$3(error, "delete");
                return;
            }
        }
        has(t) {
            if (!this.$2) {
                return false;
            }
            const e = this.$4();
            const n = e[t];
            if (n) {
                return Date.now() - n.lastWriteTime <= c;
            }
            return false;
        }
        clear() {
            if (this.$2) {
                this.$5({});
            }
        }
        keys() {
            if (!this.$2) {
                return [];
            }
            const e = this.$6(this.$4());
            return Object.keys(e);
        }
        entries() {
            if (!this.$2) {
                return [];
            }
            const e = this.$6(this.$4());
            return Object.entries(e).map(([t, n])=>[
                    t,
                    n.value
                ]);
        }
    }
    const m = new d;
    l.default = m;
}, 98);