__d("WAWebAbstractStore", [
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    const e = (()=>{
        function e() {}
        const t = e.prototype;
        t.open = function() {
            const e = this;
            if (this.$2) {
                return this.$2;
            }
            if (this.$1) {
                this.$2 = this.$1.catch((t)=>{
                    e.$2 = null;
                    throw t;
                }).then(()=>{
                    e.$2 = null;
                    return e.open();
                });
                return this.$2;
            }
            this.$2 = this.doOpen().catch((t)=>{
                e.$2 = null;
                throw t;
            }).then(()=>{
                e.$2 = null;
            });
            return this.$2;
        };
        t.close = function() {
            const e = this;
            if (this.$1) {
                return this.$1;
            }
            if (this.$2) {
                this.$1 = this.$2.catch((t)=>{
                    e.$1 = null;
                    throw t;
                }).then(()=>{
                    e.$1 = null;
                    return e.close();
                });
                return this.$1;
            }
            this.$1 = this.doClose().catch((t)=>{
                e.$1 = null;
                throw t;
            }).then(()=>{
                e.$1 = null;
            });
            return this.$1;
        };
        t.get = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                yield this.open();
                return this.doGet(e);
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t.queryByIndex = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                yield this.open();
                return this.doQueryByIndex(e, t);
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t.getAll = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                yield this.open();
                return this.doGetAll();
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t.put = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                yield this.open();
                return this.doPut(e, t);
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t.del = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                yield this.open();
                return this.doDel(e);
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t.count = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                yield this.open();
                return this.doCount();
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t.clear = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                yield this.open();
                return this.doClear();
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t.doGet = function(t) {
            throw r("err")("Not implemented");
        };
        t.doQueryByIndex = function(t, n) {
            throw r("err")("Not implemented");
        };
        t.doGetAll = function() {
            throw r("err")("Not implemented");
        };
        t.doPut = function(t, n) {
            throw r("err")("Not implemented");
        };
        t.doDel = function(t) {
            throw r("err")("Not implemented");
        };
        t.doCount = function() {
            throw r("err")("Not implemented");
        };
        t.doClear = function() {
            throw r("err")("Not implemented");
        };
        t.doOpen = function() {
            throw r("err")("Not implemented");
        };
        t.doClose = function() {
            throw r("err")("Not implemented");
        };
        return e;
    })();
    l.default = e;
}, 98);