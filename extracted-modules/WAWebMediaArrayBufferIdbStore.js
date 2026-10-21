__d("WAWebMediaArrayBufferIdbStore", [
    "Promise",
    "WAWebAbstractStore",
    "WAWebLruMediaStorage",
    "WAWebMediaLruIdbStoreUtils",
    "WAWebSchemaLruMediaArrayBuffer",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = ((t)=>{
        function a(e) {
            let n;
            n = t.call(this) || this;
            n.name = "indexeddb";
            n.$ArrayBufferIdbStore$p_1 = new (r("WAWebMediaLruIdbStoreUtils"))(o("WAWebLruMediaStorage").initialize, o("WAWebSchemaLruMediaArrayBuffer").IdbArrayBufferTable);
            return n;
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.doGet = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = yield this.$ArrayBufferIdbStore$p_1.get(e);
                if (t) {
                    return t.data;
                }
                return null;
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.doQueryByIndex = function(t, n) {
            throw r("err")("Not implemented. Actual Arraybuffer store does not need it.");
        };
        a_prototype.doGetAll = function() {
            throw r("err")("Not implemented. Actual Arraybuffer store does not need it.");
        };
        a_prototype.doPut = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                const n = yield this.$ArrayBufferIdbStore$p_1.put(e, {
                    id: e,
                    data: t
                });
                return n.data;
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.doDel = function(t) {
            return this.$ArrayBufferIdbStore$p_1.del(t);
        };
        a_prototype.doCount = function() {
            return this.$ArrayBufferIdbStore$p_1.count();
        };
        a_prototype.clear = function() {
            return this.$ArrayBufferIdbStore$p_1.clear();
        };
        a_prototype.doOpen = function() {
            return (e || (e = n("Promise"))).resolve();
        };
        a_prototype.doClose = function() {
            return (e || (e = n("Promise"))).resolve();
        };
        return a;
    })(r("WAWebAbstractStore"));
    l.default = s;
}, 98);