__d("WACryptoLtHash", [
    "Promise",
    "WACryptoHkdf",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = 2;
    const u = 128;
    const c = new ArrayBuffer(u);
    const d = (()=>{
        function t(e) {
            this.salt = e;
        }
        const t_prototype = t.prototype;
        t_prototype.add = function(r, o) {
            const t = this;
            return o.reduce((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, n) {
                    return t.$1((yield e), n);
                });
                return function(t, n) {
                    return e.apply(this, arguments);
                };
            })(), (e || (e = n("Promise"))).resolve(r));
        };
        t_prototype.subtract = function(r, o) {
            const t = this;
            return o.reduce((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, n) {
                    return t.$2((yield e), n);
                });
                return function(t, n) {
                    return e.apply(this, arguments);
                };
            })(), (e || (e = n("Promise"))).resolve(r));
        };
        t_prototype.subtractThenAdd = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
                const subtractResult = yield this.subtract(e, n);
                const o = yield this.add(subtractResult, t);
                return {
                    ltHash: o,
                    subtractResult
                };
            });
            function t(t, n, r) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.$1 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                const n = yield o("WACryptoHkdf").extractAndExpand(t, this.salt, u);
                return this.performPointwiseWithOverflow(e, n, function(e, t) {
                    return e + t;
                });
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.$2 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                const n = yield o("WACryptoHkdf").extractAndExpand(t, this.salt, u);
                return this.performPointwiseWithOverflow(e, n, function(e, t) {
                    return e - t;
                });
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.performPointwiseWithOverflow = function(t, n, r) {
            for(var e = new DataView(t), o = new DataView(n), a = new ArrayBuffer(e.byteLength), i = new DataView(a), l = 0; l < e.byteLength; l += s){
                i.setUint16(l, r(e.getUint16(l, true), o.getUint16(l, true)), true);
            }
            return a;
        };
        return t;
    })();
    const m = new d("WhatsApp Patch Integrity");
    l.KEY_LENGTH_BYTES = u;
    l.EMPTY_LT_HASH = c;
    l.LtHash16 = d;
    l.LT_HASH_ANTI_TAMPERING = m;
}, 98);