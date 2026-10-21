__d("WACryptoAesCbc", [
    "Promise",
    "WABinary",
    "WACryptoDependencies",
    "WAPromiseDelays",
    "WATypedArraysCast",
    "WATypedArraysConcat",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = 16;
    const u = 1024;
    const c = 16;
    const d = 1024 * 1024;
    const m = s * d;
    const p = (()=>{
        function e(e, t, n, r) {
            this.$4 = null;
            this.$6 = false;
            this.$1 = e;
            this.$2 = t;
            this.$3 = n;
            const a = {
                name: "AES-CBC",
                iv: r
            };
            this.$5 = o("WACryptoDependencies").getCrypto().subtle.importKey("raw", n, "AES-CBC", false, [
                t
            ]).then((e)=>({
                    algo: a,
                    key: e
                }));
        }
        const t = e.prototype;
        t.append = function(t) {
            const e = this;
            this.$7("append");
            let n;
            const r = this.$4;
            if (r) {
                r.writeByteArray(t);
                if (r.size() > u) {
                    const a = r.size() % s;
                    n = r.readByteArrayView(r.size() - a);
                    if (!r.size()) {
                        this.$4 = null;
                    }
                } else {
                    n = null;
                }
            } else if (t.length > u) {
                const i = t.length % s;
                if (i) {
                    this.$4 = new (o("WABinary")).Binary(t);
                    n = this.$4.readByteArrayView(t.length - i);
                } else {
                    n = t;
                }
            } else {
                this.$4 = new (o("WABinary")).Binary(t);
                n = null;
            }
            const l = n;
            if (l) {
                this.$5 = this.$5.then(({ algo: n, key })=>{
                    if (e.$2 === "encrypt") {
                        return o("WACryptoDependencies").getCrypto().subtle.encrypt(n, key, l).then((t)=>{
                            e.$1.writeByteArray(new Uint8Array(t, 0, t.byteLength - s));
                            return new Uint8Array(t, t.byteLength - 2 * s, s);
                        });
                    }
                    const a = l.slice(-s);
                    return o("WACryptoDependencies").getCrypto().subtle.decrypt(n, key, l).then((t)=>{
                        e.$1.writeBuffer(t);
                        return a;
                    });
                }).then((t)=>{
                    const n = {
                        name: "AES-CBC",
                        iv: t
                    };
                    return o("WACryptoDependencies").getCrypto().subtle.importKey("raw", e.$3, "AES-CBC", false, [
                        e.$2
                    ]).then((e)=>({
                            algo: n,
                            key: e
                        }));
                });
            }
            return this.$5.then(()=>{});
        };
        t.finalize = function(t) {
            const e = this;
            this.$7("finalize");
            let n;
            if (this.$4) {
                const r = this.$4;
                if (t) {
                    r.writeByteArray(t);
                }
                n = r.readByteArrayView();
                this.$4 = null;
            } else {
                if (t) {
                    n = t;
                }
            }
            if (n) {
                const a = n;
                return this.$5.then(({ algo: n, key })=>{
                    if (e.$2 === "encrypt") {
                        return o("WACryptoDependencies").getCrypto().subtle.encrypt(n, key, a);
                    }
                    return o("WACryptoDependencies").getCrypto().subtle.decrypt(n, key, a);
                }).then((t)=>{
                    e.$1.writeBuffer(t);
                });
            } else {
                return this.$5.then(()=>{});
            }
        };
        t.$7 = function(t) {
            if (this.$6) {
                throw r("err")(`AesCbcStream.${t} called after finalize`);
            }
        };
        return e;
    })();
    function _(e) {
        return {
            name: "AES-CBC",
            iv: o("WATypedArraysCast").castTypedArrays(Uint8Array, e)
        };
    }
    function f(e) {
        return o("WACryptoDependencies").getCrypto().subtle.importKey("raw", o("WATypedArraysCast").castTypedArrays(Uint8Array, e), "AES-CBC", false, [
            "encrypt"
        ]);
    }
    function g(e) {
        if (e) {
            return o("WATypedArraysCast").castTypedArrays(Uint8Array, e);
        }
        const t = new Uint8Array(c);
        o("WACryptoDependencies").getCrypto().getRandomValues(t);
        return t;
    }
    function h({ byteLength: t }) {
        const n = s - t % s;
        if (Number.isNaN(n)) {
            return t;
        }
        return t + n;
    }
    function y(t, r, a) {
        const i = _(r);
        return (e || (e = n("Promise"))).resolve(o("WACryptoDependencies").getCrypto().subtle.importKey("raw", o("WATypedArraysCast").castTypedArrays(Uint8Array, t), "AES-CBC", false, [
            "decrypt"
        ])).then((e)=>o("WACryptoDependencies").getCrypto().subtle.decrypt(i, e, a));
    }
    function C(t, r) {
        return (e || (e = n("Promise"))).resolve().then(()=>{
            const e = r.slice(0, c);
            const n = r.slice(c);
            return y(t, e, n);
        });
    }
    function b(t, r, a) {
        return (e || (e = n("Promise"))).resolve().then(()=>{
            const i = g(a);
            const l = _(i);
            return (e || (e = n("Promise"))).resolve(f(t)).then((e)=>o("WACryptoDependencies").getCrypto().subtle.encrypt(l, e, r)).then((e)=>o("WATypedArraysConcat").concatTypedArrays(Uint8Array, [
                    i,
                    new Uint8Array(e)
                ]).buffer);
        });
    }
    function v(e) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ encKey: t, plaintext: n, optionalIv: a, chunkSize: l = m, delayInBetween: c = false, yieldFn: d }) {
            if (l % s !== 0) {
                throw r("err")(`chunkSize must be a multiple of ${s}, ${l} received`);
            }
            const p = yield f(t);
            const _ = new Uint8Array(n);
            const y = Math.ceil(_.byteLength / l);
            const C = g(a);
            const b = new Uint8Array(h(_) + C.byteLength);
            b.set(C);
            let L;
            for(let v = 0, S = C; v < y; v++){
                const E = v === y - 1;
                const k = v * l;
                L = _.subarray(k, k + l);
                const I = yield R(E, L, S, p);
                const { encryptedChunk: T, nextIv: D } = I;
                b.set(T, C.byteLength + v * l);
                S = D;
                if (c === true) {
                    if (d != null) {
                        yield d();
                    } else {
                        yield o("WAPromiseDelays").delayMs(0);
                    }
                }
            }
            return b.buffer;
        });
        return S.apply(this, arguments);
    }
    function R(e, t, n, r) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, r) {
            const a = yield o("WACryptoDependencies").getCrypto().subtle.encrypt(_(n), r, t).then((t)=>{
                if (e) {
                    return new Uint8Array(t);
                }
                return new Uint8Array(t).subarray(0, -s);
            });
            const i = a.slice(-s);
            return {
                encryptedChunk: a,
                nextIv: i
            };
        });
        return L.apply(this, arguments);
    }
    l.AES_CBC_BLOCK_SIZE = s;
    l.AesCbcStream = p;
    l.importRawKey = f;
    l.getIv = g;
    l.aesCbcDecrypt = y;
    l.aesCbcDecryptSplit = C;
    l.aesCbcEncrypt = b;
    l.aesCbcEncryptWithChunking = v;
    l.aesCbcEncryptChunk = R;
}, 98);