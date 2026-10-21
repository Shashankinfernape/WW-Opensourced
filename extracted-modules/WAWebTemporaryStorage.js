__d("WAWebTemporaryStorage", [
    "Promise",
    "WATypeUtils",
    "WAWebSessionStorage",
    "WAWebUserPrefsKeys",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = (()=>{
        function t() {
            this.dataStore = {};
        }
        const o = t.prototype;
        o.setItem = function(t, n) {
            this.dataStore[t] = n;
            r("nullthrows")(r("WAWebSessionStorage")).setItem(t, n);
        };
        o.getItem = function(t, n = false) {
            if (this.dataStore[t] == null || n) {
                return r("nullthrows")(r("WAWebSessionStorage")).getItem(t);
            }
            return this.dataStore[t];
        };
        o.removeItem = function(t) {
            delete this.dataStore[t];
            r("nullthrows")(r("WAWebSessionStorage")).removeItem(t);
        };
        o.clear = function(o) {
            this.dataStore = {};
            r("nullthrows")(r("WAWebSessionStorage")).clear();
            if (o) {
                Object.keys(o).forEach((e)=>{
                    r("nullthrows")(r("WAWebSessionStorage")).setItem(e, String(o[e]));
                });
            }
            return (e || (e = n("Promise"))).resolve();
        };
        return t;
    })();
    const u = (()=>{
        function t() {
            this.dataStore = {};
        }
        const r = t.prototype;
        r.setItem = function(t, n) {
            this.dataStore[t] = n;
        };
        r.getItem = function(t) {
            if (this.dataStore[t] === void 0) {
                return null;
            }
            return this.dataStore[t];
        };
        r.removeItem = function(t) {
            delete this.dataStore[t];
        };
        r.clear = function() {
            this.dataStore = {};
            return (e || (e = n("Promise"))).resolve();
        };
        return t;
    })();
    function c() {
        try {
            const e = r("nullthrows")(r("WAWebSessionStorage"));
            e.setItem(o("WAWebUserPrefsKeys").KEYS.STORAGE_TEST, o("WAWebUserPrefsKeys").KEYS.STORAGE_TEST);
            return o("WATypeUtils").isFunction(e.clear);
        } catch (e) {
            return false;
        }
    }
    const d = c() ? new s : new u;
    l.default = d;
}, 98);