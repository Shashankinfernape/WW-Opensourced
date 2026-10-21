__d("WANoiseHandshake", [
    "Promise",
    "WABinary",
    "WACryptoDependencies",
    "WACryptoHkdf",
    "WACryptoSha256",
    "WAErrors",
    "WANoiseSocket",
    "WAResolvable",
    "WATagsLogger",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    const d = o("WATagsLogger").TAGS([
        "NoiseHandshake"
    ]);
    const m = (c || (c = n("Promise"))).reject("UNINITIALIZED HANDSHAKE");
    const p = new Uint8Array(0);
    m.catch(()=>{});
    const _ = (()=>{
        function t(e) {
            const t = this;
            this.$2 = m;
            this.$3 = m;
            this.$4 = m;
            this.$5 = 0;
            this.$1 = e;
            this.$6 = new (o("WAResolvable")).Resolvable;
            e.onClose = function() {
                t.$6.reject(new (o("WAErrors")).Disconnected("NoiseHandshake: SocketClosed"));
            };
            b(this.$6.promise);
        }
        const r = t.prototype;
        r.start = function(t, r) {
            const e = o("WABinary").Binary.build(t).readBuffer();
            const a = e.byteLength === 32 ? (c || (c = n("Promise"))).resolve(e) : o("WACryptoSha256").sha256(e);
            this.$2 = a;
            this.$3 = a;
            this.$4 = a.then(g);
            this.authenticate(r);
        };
        r.sendAndReceive = function(t) {
            const e = this.$1;
            const r = new (c || (c = n("Promise")))(function(n) {
                e.onFrame = function(t) {
                    e.onFrame = null;
                    n(t);
                };
                e.sendFrame(t);
            });
            return this.$7(r);
        };
        r.send = function(t) {
            this.$1.sendFrame(t);
        };
        r.authenticate = function(t) {
            this.$2 = (c || (c = n("Promise"))).all([
                this.$2,
                t
            ]).then(([t, n])=>{
                const r = o("WABinary").Binary.build(t, n).readByteArrayView();
                return o("WACryptoSha256").sha256(r);
            });
        };
        r.encrypt = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                try {
                    const r = this.$5++;
                    const o = (c || (c = n("Promise"))).all([
                        this.$4,
                        this.$2,
                        t
                    ]).then(([t, n, o])=>h(t, r, n, o));
                    this.authenticate(o);
                    const a = yield this.$7(o);
                    return a;
                } catch (t) {
                    d.ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Error on encrypt: ",
                        ""
                    ])), t);
                    throw t;
                }
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        r.decrypt = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                try {
                    const r = this.$5++;
                    const o = (c || (c = n("Promise"))).all([
                        this.$4,
                        this.$2
                    ]).then(([n, o])=>y(n, r, o, e));
                    this.authenticate(e);
                    const a = yield this.$7(o);
                    return a;
                } catch (e) {
                    d.ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "Error on decrypt: ",
                        " reason: ",
                        ""
                    ])), e, t);
                    throw e;
                }
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        r.finish = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = this;
                try {
                    const t = this.$3.then((e)=>C(e, new Uint8Array(0))).then(([t, r])=>(c || (c = n("Promise"))).all([
                            g(t, [
                                "encrypt"
                            ]),
                            g(r, [
                                "decrypt"
                            ])
                        ])).then(([n, r])=>new (o("WANoiseSocket")).NoiseSocket(e.$1, n, r));
                    const r = yield this.$7(t);
                    return r;
                } catch (e) {
                    d.ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "Error on finish: ",
                        ""
                    ])), e);
                    throw e;
                }
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        r.mixIntoKey = function(t) {
            this.$5 = 0;
            const e = (c || (c = n("Promise"))).all([
                this.$3,
                t
            ]).then(([t, n])=>C(t, new Uint8Array(n)));
            this.$3 = e.then((e)=>e[0]);
            this.$4 = e.then((e)=>g(e[1]));
            b(this.$3);
            b(this.$4);
        };
        r.$7 = function(t) {
            const e = this;
            return (c || (c = n("Promise"))).race([
                t,
                this.$6.promise
            ]).then((t)=>{
                if (e.$6.resolveWasCalled()) {
                    return e.$6.promise;
                }
                return t;
            });
        };
        return t;
    })();
    function f(e) {
        const t = new ArrayBuffer(12);
        const n = new DataView(t);
        n.setUint32(8, e);
        return new Uint8Array(t);
    }
    function g(e, t = [
        "encrypt",
        "decrypt"
    ]) {
        return o("WACryptoDependencies").getCrypto().subtle.importKey("raw", new Uint8Array(e), "AES-GCM", false, t);
    }
    function h(e, t, n, r) {
        return o("WACryptoDependencies").getCrypto().subtle.encrypt({
            name: "AES-GCM",
            iv: f(t),
            additionalData: n ? new Uint8Array(n) : p
        }, e, r);
    }
    function y(e, t, n, r) {
        return o("WACryptoDependencies").getCrypto().subtle.decrypt({
            name: "AES-GCM",
            iv: f(t),
            additionalData: n ? new Uint8Array(n) : p
        }, e, r);
    }
    function C(e, t) {
        return o("WACryptoHkdf").extractWithSaltAndExpand(t, new Uint8Array(e), "", 64).then((e)=>[
                e.slice(0, 32),
                e.slice(32)
            ]);
    }
    function b(e) {
        e.catch(()=>{});
    }
    l.NoiseHandshake = _;
}, 98);