__d("WAWebMediaStoreLruImpl", [
    "Promise",
    "WALogger",
    "WAPromiseQueue",
    "WAWeb-dexie",
    "WAWebAbstractStore",
    "WAWebMediaStoreMetaInfo",
    "WAWebStorageErrorHandlingUtils",
    "asyncToGeneratorRuntime",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = ((t)=>{
        function a(i) {
            let l;
            l = t.call(this) || this;
            l._queueMap = new (o("WAPromiseQueue")).PromiseQueueMap;
            l.updateMaxSizeInterval = null;
            l._dispose = function(e, t) {
                return l._bufferStore.del(e);
            };
            l.doPut = function(t, i) {
                return l._queueMap.enqueue(t, n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    if (i.byteLength > l.$LruMediaStore$p_1() || i.byteLength > a.SINGLE_ITEM_SIZE_LIMIT_IN_BYTES) {
                        return i;
                    }
                    const n = {
                        id: t,
                        timestamp: Date.now(),
                        size: i.byteLength
                    };
                    try {
                        yield l._metaInfoStore.putObject(n);
                        return l._bufferStore.put(t, i);
                    } catch (error) {
                        if (error instanceof r("WAWeb-dexie").AbortError && error.message.includes("QuotaExceededError")) {
                            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                "[LruMediaStore] QuotaExceededError, shrinking"
                            ])));
                            l.setMaxSize(r("nullthrows")(l.getCurrentSize()) / 2);
                            o("WAWebStorageErrorHandlingUtils").reportQuotaExceededError(error, {
                                op: "put",
                                db: "lru-media-store",
                                writeSize: i.byteLength
                            });
                            return;
                        }
                        throw error;
                    }
                }));
            };
            l.doDel = function(e) {
                return l._queueMap.enqueue(e, function() {
                    return l._metaInfoStore.del(e);
                });
            };
            const { arrayBufferStore, maxSize } = i;
            l.name = arrayBufferStore.name;
            l._bufferStore = arrayBufferStore;
            l._metaInfoStore = new (r("WAWebMediaStoreMetaInfo"))(maxSize, l._dispose);
            return l;
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.doGet = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = yield this._bufferStore.get(e);
                if (t != null) {
                    this.put(e, t);
                }
                return t;
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.doClear = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                yield this._bufferStore.clear();
                return this._metaInfoStore.clear();
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.doCount = function() {
            return this._metaInfoStore.count();
        };
        a_prototype.doOpen = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                yield (s || (s = n("Promise"))).all([
                    this._metaInfoStore.open(),
                    this._bufferStore.open()
                ]);
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.doClose = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                yield (s || (s = n("Promise"))).all([
                    this._metaInfoStore.close(),
                    this._bufferStore.close()
                ]);
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.getCurrentSize = function() {
            return this._metaInfoStore.getCurrentSize();
        };
        a_prototype.$LruMediaStore$p_1 = function() {
            return this._metaInfoStore.getMaxSize();
        };
        a_prototype.setMaxSize = function(t) {
            return this._metaInfoStore.setMaxSize(t);
        };
        return a;
    })(r("WAWebAbstractStore"));
    u.SINGLE_ITEM_SIZE_LIMIT_IN_BYTES = 30000000;
    l.default = u;
}, 98);