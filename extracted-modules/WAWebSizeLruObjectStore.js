__d("WAWebSizeLruObjectStore", [
    "Promise",
    "WALogger",
    "WAPromiseLoop",
    "WAPromiseQueue",
    "WAShiftTimer",
    "WAWebAbstractStore",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
    "nullthrows",
    "sumBy"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    const p = ((t)=>{
        function a(a, i) {
            let l;
            l = t.call(this) || this;
            l.$SizeLruObjectStore$p_10 = new (o("WAPromiseQueue")).PromiseQueueMap;
            l.$SizeLruObjectStore$p_11 = function() {
                if (l.$SizeLruObjectStore$p_9) {
                    return l.$SizeLruObjectStore$p_9;
                }
                const t = l.open().then(()=>o("WAPromiseLoop").promiseLoop((()=>{
                        const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                            const a = ()=>{
                                l.$SizeLruObjectStore$p_9 = null;
                                t();
                            };
                            const i = l.getCurrentSize();
                            if (i == null || i <= l.$SizeLruObjectStore$p_5) {
                                a();
                                return;
                            }
                            const s = yield l.queryOneByIndex(l.$SizeLruObjectStore$p_3);
                            const u = l.getCurrentSize();
                            const l_$SizeLruObjectStore$p_5 = l.$SizeLruObjectStore$p_5;
                            if (u == null || u <= l_$SizeLruObjectStore$p_5) {
                                a();
                                return;
                            }
                            if (s == null) {
                                n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                                    const t = yield l.count();
                                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                        "[SizeLruObjectStore] _purge: no row, size=",
                                        ">",
                                        ", cnt=",
                                        ""
                                    ])), u, l_$SizeLruObjectStore$p_5, t).sendLogs("size-lru-store-invalid-empty");
                                })();
                                return (m || (m = n("Promise"))).reject(r("err")("Query returned no result but currentSize > maxSize"));
                            }
                            const d = s[l.$SizeLruObjectStore$p_2];
                            return l.del(d);
                        });
                        return function(e) {
                            return t.apply(this, arguments);
                        };
                    })()));
                return l.$SizeLruObjectStore$p_9 = t;
            };
            l.$SizeLruObjectStore$p_12 = function() {
                l.$SizeLruObjectStore$p_8.debounce(2000);
            };
            l.doPut = function(e, t) {
                return l.$SizeLruObjectStore$p_10.enqueue(e, n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    if (t[l.$SizeLruObjectStore$p_2] !== e) {
                        throw r("err")("The key you provide does not match.");
                    }
                    const n = yield l.$SizeLruObjectStore$p_1.get(e);
                    const o = n == null ? 0 : l.$SizeLruObjectStore$p_13(n);
                    const a = l.$SizeLruObjectStore$p_13(t);
                    const i = a - o;
                    const s = yield l.$SizeLruObjectStore$p_1.put(e, t);
                    l.$SizeLruObjectStore$p_6 = r("nullthrows")(l.getCurrentSize()) + i;
                    l.$SizeLruObjectStore$p_12();
                    return s;
                }));
            };
            l.doDel = function(e) {
                return l.$SizeLruObjectStore$p_10.enqueue(e, n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    const t = yield l.$SizeLruObjectStore$p_1.get(e);
                    if (t != null) {
                        try {
                            yield l.$SizeLruObjectStore$p_7(e, t);
                        } catch (error) {
                            const n = r("getErrorSafe")(error);
                            o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                                "SizeLRUObjectStore: _dispose error: ",
                                ""
                            ])), n.message).sendLogs("size-lru-store-dispose-error");
                            throw n;
                        }
                        yield l.$SizeLruObjectStore$p_1.del(e);
                        l.$SizeLruObjectStore$p_6 = r("nullthrows")(l.getCurrentSize()) - l.$SizeLruObjectStore$p_13(t);
                    }
                }));
            };
            l.$SizeLruObjectStore$p_1 = a;
            l.$SizeLruObjectStore$p_2 = i.primaryIndex;
            l.$SizeLruObjectStore$p_3 = i.dateIndex;
            l.$SizeLruObjectStore$p_4 = i.sizeIndex;
            if (i.maxSize < 0) {
                throw r("err")("Cannot set max size to a negative number");
            }
            l.$SizeLruObjectStore$p_5 = Math.floor(i.maxSize);
            l.$SizeLruObjectStore$p_7 = i.dispose;
            l.$SizeLruObjectStore$p_8 = new (o("WAShiftTimer")).ShiftTimer(function() {
                l.$SizeLruObjectStore$p_11().catch((e)=>{
                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "Error while purging: ",
                        ""
                    ])), e.message);
                });
            });
            return l;
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.getCurrentSize = function() {
            return this.$SizeLruObjectStore$p_6;
        };
        a_prototype.getMaxSize = function() {
            return this.$SizeLruObjectStore$p_5;
        };
        a_prototype.setMaxSize = function(t) {
            if (t < 0) {
                return (m || (m = n("Promise"))).reject(r("err")("Cannot set size to a negative number"));
            }
            this.$SizeLruObjectStore$p_5 = Math.floor(t);
            this.$SizeLruObjectStore$p_8.cancel();
            return this.$SizeLruObjectStore$p_11().catch((e)=>{
                o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "Error while purging during setMaxSize: ",
                    ""
                ])), e.message);
            });
        };
        a_prototype.putObject = function(t) {
            const e = t[this.$SizeLruObjectStore$p_2];
            return this.put(e, t);
        };
        a_prototype.$SizeLruObjectStore$p_13 = function(t) {
            const e = t[this.$SizeLruObjectStore$p_4];
            if (typeof e !== "number" || e < 0) {
                o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "Invalid size in index ",
                    ": ",
                    ""
                ])), this.$SizeLruObjectStore$p_4, e);
                return 0;
            }
            return e;
        };
        a_prototype.doGet = function(t) {
            return this.$SizeLruObjectStore$p_1.get(t);
        };
        a_prototype.queryOneByIndex = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = yield this.$SizeLruObjectStore$p_1.queryByIndex(e, {
                    limit: 1
                });
                if (t.length === 0) {
                    return null;
                }
                return t[0];
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.doQueryByIndex = function(t, n) {
            return this.$SizeLruObjectStore$p_1.queryByIndex(t, n);
        };
        a_prototype.doGetAll = function() {
            return this.$SizeLruObjectStore$p_1.getAll();
        };
        a_prototype.doClear = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                this.$SizeLruObjectStore$p_8.cancel();
                yield this.$SizeLruObjectStore$p_1.clear();
                this.$SizeLruObjectStore$p_6 = 0;
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.doCount = function() {
            return this.$SizeLruObjectStore$p_1.count();
        };
        a_prototype.doOpen = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = this;
                yield this.$SizeLruObjectStore$p_1.open();
                if (this.$SizeLruObjectStore$p_6 == null) {
                    const t = yield this.$SizeLruObjectStore$p_1.doGetAll();
                    this.$SizeLruObjectStore$p_6 = r("sumBy")(t, function(t) {
                        return e.$SizeLruObjectStore$p_13(t);
                    });
                }
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.doClose = function() {
            this.$SizeLruObjectStore$p_6 = null;
            return this.$SizeLruObjectStore$p_1.close();
        };
        return a;
    })(r("WAWebAbstractStore"));
    l.default = p;
}, 98);