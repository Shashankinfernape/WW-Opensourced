__d("WAWebUserPrefsIndexedDBStorage", [
    "WALogger",
    "WAWebApiUserPrefs",
    "WAWebCurrentUser",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsPostProcessors",
    "WAWebUserPrefsPreProcessors",
    "WAWebUserPrefsStorageUtils",
    "asyncToGeneratorRuntime",
    "compactMap",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    function g(e) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                yield o("WAWebApiUserPrefs").createOrReplaceUserPref(e);
            } catch (t) {
                o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "userPrefsIdb: insert failed for '",
                    "': ",
                    ""
                ])), e.key, t);
            }
        });
        return h.apply(this, arguments);
    }
    function y(e) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                yield o("WAWebApiUserPrefs").removeUserPref(e);
            } catch (t) {
                o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "userPrefsIdb: remove failed for '",
                    "': ",
                    ""
                ])), e, t);
            }
        });
        return C.apply(this, arguments);
    }
    function b() {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            try {
                yield o("WAWebApiUserPrefs").clearUserPrefs();
            } catch (e) {
                o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "userPrefsIdb: clear failed: ",
                    ""
                ])), e);
            }
        });
        return v.apply(this, arguments);
    }
    function S(e) {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                yield o("WAWebApiUserPrefs").bulkCreateOrReplaceUserPrefs(e);
            } catch (e) {
                o("WALogger").WARN(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "userPrefsIdb: bulk insert failed: ",
                    ""
                ])), e);
            }
        });
        return R.apply(this, arguments);
    }
    function L(e) {
        let t = e;
        if (Object.values(o("WAWebUserPrefsKeys").HASHED_KEYS).some((t)=>t === e)) {
            t = o("WAWebUserPrefsStorageUtils").hashUserPrefKey(e);
        }
        return t;
    }
    const E = (()=>{
        function t() {
            this.loadedUserPrefs = null;
            this.myInstanceId = Math.random().toString(36).substr(2, 5);
            this.$1 = null;
        }
        const a = t.prototype;
        a.setSyncCallback = function(t) {
            this.$1 = t;
        };
        a.applySyncSet = function(t, n) {
            if (this.loadedUserPrefs != null) {
                this.loadedUserPrefs[t] = n;
            }
        };
        a.applyCommittedSet = function(t, n) {
            const r = L(t);
            if (r != null) {
                const a = o("WAWebUserPrefsPreProcessors").preProcessUserPref(t, n);
                this.applySyncSet(r, a);
                this.$1?.({
                    action: "set",
                    key: r,
                    value: a
                });
            }
        };
        a.applySyncRemove = function(t) {
            if (this.loadedUserPrefs != null) {
                delete this.loadedUserPrefs[t];
            }
        };
        a.applySyncClear = function() {
            if (this.loadedUserPrefs != null) {
                this.loadedUserPrefs = {};
            }
        };
        a.init = function() {
            const e = this;
            if (this.$2 == null) {
                this.$2 = o("WAWebApiUserPrefs").allUserPrefsIdb().then((t)=>{
                    const n = Object.fromEntries(t.map(({ key, value: n })=>[
                            key,
                            n
                        ]));
                    e.loadedUserPrefs = n;
                });
            }
            return this.$2;
        };
        a.set = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
                const i = L(t);
                if (i != null) {
                    if (this.loadedUserPrefs == null) {
                        o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "UserPrefsIndexedDBStorage: set(",
                            ") called before init"
                        ])), t).sendLogs("userprefs-idb-set-before-init");
                        yield this.init();
                    }
                    const l = r("nullthrows")(this.loadedUserPrefs);
                    const s = o("WAWebUserPrefsPreProcessors").preProcessUserPref(t, n);
                    l[i] = s;
                    this.$1?.({
                        action: "set",
                        key: i,
                        value: s
                    });
                    yield g({
                        key: i,
                        value: s
                    });
                }
            });
            function a(e, n) {
                return t.apply(this, arguments);
            }
            return a;
        })();
        a.get = function(t) {
            if (this.loadedUserPrefs == null) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "UserPrefsIndexedDBStorage: get(",
                    ") called before init"
                ])), t);
                if (o("WAWebCurrentUser").isEmployee()) {
                    o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "UserPrefsIndexedDBStorage"
                    ]))).sendLogs("userprefs-idb-get-before-init");
                }
                return null;
            }
            const e = this.loadedUserPrefs;
            const n = L(t);
            if (n != null) {
                let r;
                const a = n in e;
                if (a) {
                    r = e[n];
                }
                if (r == null) {
                    return null;
                }
                const i = o("WAWebUserPrefsPostProcessors").postProcessUserPref(t, r);
                return i;
            }
        };
        a.remove = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                let t;
                if (this.loadedUserPrefs == null) {
                    o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "UserPrefsIndexedDBStorage: remove(",
                        ") called before init."
                    ])), e).sendLogs("userprefs-idb-remove-before-init");
                    yield this.init();
                }
                const n = r("nullthrows")(this.loadedUserPrefs);
                const a = L(e);
                if (a != null) {
                    delete n[a];
                    if ((t = this.$1) != null) {
                        t.call(this, {
                            action: "remove",
                            key: a
                        });
                    }
                    yield y(a);
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a.clear = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                this.loadedUserPrefs = {};
                this.$1?.({
                    action: "clear"
                });
                yield b();
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a.bulkSetItemsToIndexedDB = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const n = r("compactMap")(e, function(e) {
                    const t = L(e.key);
                    if (t != null) {
                        return {
                            key: t,
                            value: o("WAWebUserPrefsPreProcessors").preProcessUserPref(e.key, e.value)
                        };
                    }
                });
                yield S(n);
                if (this.loadedUserPrefs == null) {
                    o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "userPrefsIdb: bulkSet called before init"
                    ]))).sendLogs("userprefs-idb-bulk-set-before-init");
                    yield this.init();
                }
                const a = r("nullthrows")(this.loadedUserPrefs);
                for (const i of n){
                    const { key: l, value: s } = i;
                    a[l] = s;
                }
                this.$1?.({
                    action: "bulkSet",
                    entries: n
                });
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return t;
    })();
    const k = new E;
    l.userPrefsIdb = k;
}, 98);