__d("WAWebUserPrefsLocalStorage", [
    "WALogger",
    "WAWebLocalStorage",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsPostProcessors",
    "WAWebUserPrefsPreProcessors",
    "WAWebUserPrefsStorageUtils",
    "cr:34987"
], function(t, n, r, o, a, i, l) {
    let s;
    const u = n("cr:34987") ?? {};
    const c = u.notifySettingChangeHandler;
    function d(e) {
        let t = e;
        if (Object.values(o("WAWebUserPrefsKeys").HASHED_KEYS).some((t)=>t === e)) {
            t = o("WAWebUserPrefsStorageUtils").hashUserPrefKey(e);
        }
        return t;
    }
    const m = (()=>{
        function e() {
            this.$1 = {};
        }
        const t = e.prototype;
        t.setItemToLocalStorage = function(t, n) {
            if (r("WAWebLocalStorage") != null) {
                const e = d(t);
                if (e != null) {
                    const a = JSON.stringify(o("WAWebUserPrefsPreProcessors").preProcessUserPref(t, n));
                    if (a != null) {
                        this.$1[e] = a;
                        try {
                            r("WAWebLocalStorage").setItem(e, a);
                        } catch (e) {
                            throw e;
                        }
                        c?.(t, a);
                    }
                }
            }
        };
        t.getItemFromLocalStorage = function(t) {
            const e = d(t);
            if (e != null) {
                let n = this.$1[e];
                if (n == null && r("WAWebLocalStorage") != null) {
                    n = r("WAWebLocalStorage").getItem(e);
                }
                if (n == null) {
                    return null;
                }
                this.$1[e] = n;
                let a;
                try {
                    a = JSON.parse(n);
                } catch (e) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "getItemFromLocalStorage: parse error"
                    ]))).sendLogs("get-local-storage-item-parse-error");
                    this.removeItemFromLocalStorage(t);
                    return null;
                }
                const i = o("WAWebUserPrefsPostProcessors").postProcessUserPref(t, a);
                return i;
            }
        };
        t.removeItemFromLocalStorage = function(t) {
            const e = d(t);
            if (e != null) {
                delete this.$1[e];
                if (r("WAWebLocalStorage") != null) {
                    r("WAWebLocalStorage").removeItem(e);
                }
            }
        };
        t.clearLocalStorage = function() {
            this.$1 = {};
            if (r("WAWebLocalStorage") != null) {
                r("WAWebLocalStorage").clear();
            }
        };
        return e;
    })();
    const p = new m;
    l.default = p;
}, 98);