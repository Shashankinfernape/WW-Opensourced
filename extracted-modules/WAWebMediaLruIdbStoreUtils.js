__d("WAWebMediaLruIdbStoreUtils", [
    "Promise",
    "WAWebAbstractStore",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = ((t)=>{
        function r(e, n) {
            let r;
            r = t.call(this) || this;
            r.$IdbStore$p_1 = e;
            r.$IdbStore$p_2 = n;
            return r;
        }
        babelHelpers.inheritsLoose(r, t);
        const r_prototype = r.prototype;
        r_prototype.doGet = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                yield this.$IdbStore$p_1();
                return this.$IdbStore$p_2.get(e);
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        r_prototype.doQueryByIndex = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                yield this.$IdbStore$p_1();
                return this.$IdbStore$p_2.all({
                    limit: t.limit,
                    index: [
                        e
                    ]
                });
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        r_prototype.doGetAll = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                yield this.$IdbStore$p_1();
                return this.$IdbStore$p_2.all();
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        r_prototype.doPut = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                const n = this;
                yield this.$IdbStore$p_1().then(()=>n.$IdbStore$p_2.createOrReplace(t));
                return t;
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        r_prototype.doDel = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                yield this.$IdbStore$p_1();
                return this.$IdbStore$p_2.remove(e);
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        r_prototype.doCount = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                yield this.$IdbStore$p_1();
                return this.$IdbStore$p_2.count();
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        r_prototype.doClear = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                yield this.$IdbStore$p_1();
                return this.$IdbStore$p_2.clear(true);
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        r_prototype.doOpen = function() {
            return this.$IdbStore$p_1();
        };
        r_prototype.doClose = function() {
            return (e || (e = n("Promise"))).resolve();
        };
        return r;
    })(r("WAWebAbstractStore"));
    l.default = s;
}, 98);