__d("WAWebPermanentStorage", [
    "WALogger",
    "WAWebLocalStorage",
    "WAWebStorageErrorHandlingUtils",
    "WAWebWAWCStorage",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(t, n, r = {}) {
        o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "[storage] db ",
            ":Error: ",
            ""
        ])), n, t);
        if (t.name === "QuotaExceededError" || t.message && t.message.includes("QuotaExceededError")) {
            o("WAWebStorageErrorHandlingUtils").reportQuotaExceededError(t, babelHelpers.extends({
                op: n,
                db: "wawc"
            }, r));
        }
    }
    const u = (()=>{
        function e() {
            this.dataStore = {};
        }
        const t = e.prototype;
        t.setItem = function(t, n, o = true) {
            this.dataStore[t] = n;
            if (r("WAWebLocalStorage") != null) {
                try {
                    r("WAWebLocalStorage").setItem(t, n);
                } catch (e) {
                    throw e;
                }
            }
            if (o) {
                r("WAWebWAWCStorage").idb().then((e)=>e.user.put({
                        key: t,
                        value: n
                    })).catch((e)=>{
                    if (e instanceof Error) {
                        s(e, "setItem", {
                            writeSize: n.length
                        });
                    }
                });
            }
        };
        t.getItem = function(t, n = false) {
            if (this.dataStore[t] === void 0 || n) {
                if (r("WAWebLocalStorage") != null) {
                    const e = r("WAWebLocalStorage").getItem(t);
                    if (e != null) {
                        this.setItem(t, e, false);
                    }
                    return e;
                }
                return null;
            }
            return this.dataStore[t];
        };
        t.removeItem = function(t) {
            delete this.dataStore[t];
            if (r("WAWebLocalStorage") != null) {
                r("WAWebLocalStorage").removeItem(t);
            }
            r("WAWebWAWCStorage").idb().then((e)=>e.user.delete(t)).catch((e)=>{
                if (e instanceof Error) {
                    s(e, "removeItem");
                }
            });
        };
        t.clear = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                this.dataStore = {};
                if (r("WAWebLocalStorage") != null) {
                    r("WAWebLocalStorage").clear();
                    if (e) {
                        Object.keys(e).forEach((t)=>{
                            r("WAWebLocalStorage").setItem(t, String(e[t]));
                        });
                    }
                }
                yield r("WAWebWAWCStorage").idb().then((e)=>e.user.clear()).catch((e)=>{
                    if (e instanceof Error) {
                        s(e, "clear");
                    }
                });
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return e;
    })();
    const c = new u;
    l.default = c;
}, 98);