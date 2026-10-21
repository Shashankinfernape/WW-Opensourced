__d("WAWebMediaStore", [
    "WALogger",
    "WAMemoizeConcurrent",
    "WAWebDbErrors",
    "WAWebIndexedDB",
    "WAWebMediaArrayBufferCacheStore",
    "WAWebMediaArrayBufferIdbStore",
    "WAWebMediaStoreDummyImpl",
    "WAWebMediaStoreLruImpl",
    "WAWebPromiseQueue",
    "WAWebSerializeError",
    "WAWebStoreQuotaManager",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "once"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = new AbortController;
    const c = (()=>{
        function t() {
            const t = this;
            this.$1 = r("once")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                try {
                    const t = yield d();
                    if (t != null) {
                        yield t.open();
                        return t;
                    }
                } catch (error) {
                    if (r("getErrorSafe")(error).name === "SecurityError") {
                        o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "\n            There was a security error attempting to open the media storage.             This likely indicates a permissions error. Falling back to fake             (no-op) storage.\n          "
                        ], [
                            "\n            There was a security error attempting to open the media storage. \\\n            This likely indicates a permissions error. Falling back to fake \\\n            (no-op) storage.\n          "
                        ])));
                    } else {
                        if (error instanceof o("WAWebDbErrors").DbOnLogoutAbort) {
                            throw error;
                        }
                        o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "\n            Failed to initialize media store! Falling back to fake (no-op) storage. Error:\n            ",
                            "\n          "
                        ])), r("WAWebSerializeError")(error)).verbose().sendLogs("Failed to initialize media store");
                    }
                }
                return new (r("WAWebMediaStoreDummyImpl"));
            }));
            this.$3 = new (o("WAWebPromiseQueue")).PromiseQueue;
            this.$2 = r("WAMemoizeConcurrent")(function(e) {
                return e.key;
            }, function({ key }) {
                return t.$3.enqueue(function() {
                    return t.get(key).then((e)=>e != null);
                });
            });
        }
        const t_prototype = t.prototype;
        t_prototype.getName = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = yield this.$1();
                return e.name;
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.setMaxSize = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = yield this.$1();
                return t.setMaxSize(e);
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.get = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = yield this.$1();
                return t.get(e);
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.has = function(t) {
            return this.$2({
                key: t,
                signal: u.signal
            });
        };
        t_prototype.queryByIndex = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                const n = yield this.$1();
                return n.queryByIndex(e, t);
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.getAll = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = yield this.$1();
                return e.getAll();
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.put = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                const n = yield this.$1();
                return n.put(e, t);
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.del = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = yield this.$1();
                yield t.del(e);
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.count = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = yield this.$1();
                return e.count();
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.clear = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = yield this.$1();
                yield e.clear();
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.open = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = yield this.$1();
                yield e.open();
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.close = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = yield this.$1();
                yield e.close();
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return t;
    })();
    function d() {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const arrayBufferStore = p();
            if (arrayBufferStore == null) {
                return null;
            }
            const t = yield o("WAWebStoreQuotaManager").storeQuotaManager.getQuotaForStore("lru-media-store");
            return new (r("WAWebMediaStoreLruImpl"))({
                maxSize: t,
                arrayBufferStore
            });
        });
        return m.apply(this, arguments);
    }
    function p() {
        if (r("WAWebIndexedDB") != null) {
            const e = new (r("WAWebMediaArrayBufferIdbStore"))("media_lru_buffer");
            if ("caches" in self) {
                return new (r("WAWebMediaArrayBufferCacheStore"))("lru-media-array-buffer-cache");
            }
            return e;
        }
        return null;
    }
    const _ = new c;
    l.MediaStore = c;
    l.LruMediaStore = _;
}, 98);