__d("WAWebUserPrefsCacheStorage", [
    "WAWebKeyValueCacheStore",
    "WAWebUserPrefsPostProcessors",
    "WAWebUserPrefsPreProcessors",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = new Response(JSON.stringify(e), {
            headers: {
                "content-type": "application/json"
            }
        });
        return t;
    }
    function s(e) {
        return e.json();
    }
    function u(e, t) {
        const n = encodeURIComponent(e);
        const r = encodeURIComponent(t);
        return `https://_user_prefs_key_store_.whatsapp.com/${r}_${n}`;
    }
    const c = {
        ignoreSearch: true,
        ignoreMethod: true,
        ignoreVary: true
    };
    const d = "wa_web_user_prefs_cache_store";
    const m = new (r("WAWebKeyValueCacheStore"))(d, e, s, {
        encodeKey: u,
        matchOptions: c
    });
    const p = (()=>{
        function e() {
            this.$1 = {};
        }
        const t = e.prototype;
        t.setItemToCacheStorage = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                const n = o("WAWebUserPrefsPreProcessors").preProcessUserPref(e, t);
                this.$1[e] = n;
                yield m.doPut(e, n);
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t.getItemFromCacheStorage = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                let t = this.$1[e];
                if (t == null) {
                    try {
                        t = yield m.doGet(e);
                        this.$1[e] = t;
                    } catch (e) {}
                }
                if (t == null) {
                    this.removeItemFromCacheStorage(e).catch((e)=>{});
                    return null;
                }
                const n = o("WAWebUserPrefsPostProcessors").postProcessUserPref(e, t);
                return n;
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t.removeItemFromCacheStorage = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                delete this.$1[e];
                yield m.doDel(e);
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t.clearCacheStorage = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                this.$1 = {};
                yield m.doClear();
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return e;
    })();
    const _ = new p;
    l.userPrefsCacheStorage = _;
}, 98);