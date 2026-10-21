__d("WAWebKeyValueCacheStore", [
    "Promise",
    "WALogger",
    "WAWebAbstractStore",
    "WAWebIdentityFunction",
    "WAWebStorageCmd",
    "WAWebStorageErrorHandlingUtils",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    const f = ((t)=>{
        function a(e, n, r, a) {
            let s;
            s = t.call(this) || this;
            s.$KeyValueCacheStore$p_1 = e;
            s.$KeyValueCacheStore$p_3 = n;
            s.$KeyValueCacheStore$p_4 = r;
            s.$KeyValueCacheStore$p_5 = a?.encodeKey ?? o("WAWebIdentityFunction").identityFunction;
            s.$KeyValueCacheStore$p_6 = a?.matchOptions ?? {};
            return s;
        }
        babelHelpers.inheritsLoose(a, t);
        const i = a.prototype;
        i.doGet = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                yield this.doOpen();
                const n = this.$KeyValueCacheStore$p_5(t, this.$KeyValueCacheStore$p_1);
                this.$KeyValueCacheStore$p_6.ignoreSearch = false;
                if (!this.$KeyValueCacheStore$p_2) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Unable to get: abstract doGet called"
                    ])));
                    throw r("err")("Unable to get");
                }
                const a = yield this.$KeyValueCacheStore$p_2.match(n, this.$KeyValueCacheStore$p_6);
                if (a == null) {
                    return null;
                }
                return this.$KeyValueCacheStore$p_4(a);
            });
            function a(e) {
                return t.apply(this, arguments);
            }
            return a;
        })();
        i.doPut = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                yield this.doOpen();
                try {
                    const n = this.$KeyValueCacheStore$p_5(e, this.$KeyValueCacheStore$p_1);
                    if (!this.$KeyValueCacheStore$p_2) {
                        o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "Unable to put: abstract doPut called"
                        ])));
                        throw r("err")("Unable to put in cache");
                    }
                    yield this.$KeyValueCacheStore$p_2.put(n, this.$KeyValueCacheStore$p_3(t));
                    return t;
                } catch (e) {
                    yield g();
                    throw e;
                }
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        i.doDel = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                yield this.doOpen();
                const t = this.$KeyValueCacheStore$p_5(e, this.$KeyValueCacheStore$p_1);
                this.$KeyValueCacheStore$p_6.ignoreSearch = false;
                if (!this.$KeyValueCacheStore$p_2) {
                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "Unable to delete: abstract doDel called"
                    ])));
                    return (_ || (_ = n("Promise"))).reject(r("err")("Unable to delete"));
                }
                yield this.$KeyValueCacheStore$p_2.delete(t, this.$KeyValueCacheStore$p_6);
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        i.doClear = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = yield caches.delete(this.$KeyValueCacheStore$p_1);
                if (!e) {
                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "Tried to delete a non-existent cache: ",
                        ""
                    ])), this.$KeyValueCacheStore$p_1);
                }
                this.$KeyValueCacheStore$p_2 = null;
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        i.doOpen = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (this.$KeyValueCacheStore$p_2 == null) {
                    try {
                        this.$KeyValueCacheStore$p_2 = yield caches.open(this.$KeyValueCacheStore$p_1);
                    } catch (e) {
                        this.$KeyValueCacheStore$p_2 = null;
                        o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                            "Unable to open cache: ",
                            ", error: ",
                            ""
                        ])), this.$KeyValueCacheStore$p_1, e);
                        yield g();
                        o("WAWebStorageCmd").StorageCmd.trigger("cache_storage_open_failed");
                        throw e;
                    }
                }
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        i.doClose = function() {
            this.$KeyValueCacheStore$p_2 = null;
            return (_ || (_ = n("Promise"))).resolve();
        };
        return a;
    })(r("WAWebAbstractStore"));
    function g() {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            return o("WAWebStorageErrorHandlingUtils").estimateStorageLogFormatted().then((e)=>{
                o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[cache-operation-failed] Storage Estimate: ",
                    ""
                ])), JSON.stringify(e));
            }).catch(()=>{
                o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[cache-operation-failed] Failed to get storage estimate"
                ])));
            });
        });
        return h.apply(this, arguments);
    }
    l.default = f;
}, 98);