__d("WAWebDbEncryptionKey", [
    "invariant",
    "Promise",
    "WABase64",
    "WALogger",
    "WAResolvable",
    "WATimeUtils",
    "WAWeb-dexie",
    "WAWebDbErrors",
    "WAWebDexieCastTypes",
    "WAWebDexieObservability",
    "WAWebPageLoadLogging",
    "WAWebStorageCmd",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    let d;
    const m = "wawc_db_enc";
    const p = "keys";
    const _ = 128;
    const f = {
        name: "HKDF"
    };
    const g = {
        hash: "SHA-256"
    };
    const h = o("WATimeUtils").WEEK_MILLISECONDS * 4 * 24;
    const y = "fts_hmac_keys";
    const C = "worm_ear_keys";
    const b = 256;
    const v = "worm-ear-v1";
    const S = "AES-CBC";
    const R = (()=>{
        function t() {
            const t = this;
            let a;
            this.$8 = new (a = o("WAResolvable")).Resolvable;
            this.$9 = new a.Resolvable;
            this.$10 = new a.Resolvable;
            this.$12 = new a.Resolvable;
            this.$14 = function(e) {
                return t.$13().keys.orderBy("id").toArray().then((r)=>{
                    if (!r || r.length === 0) {
                        return t.$17(e);
                    }
                    const o = r[r.length - 1]._expiration;
                    if (o != null && o <= Date.now()) {
                        return t.$17(e);
                    }
                    t.$11 = e;
                    const a = r.map((()=>{
                        const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                            const n = yield self.crypto.subtle.deriveKey(babelHelpers.extends({}, f, g, {
                                salt: e,
                                info: new Uint8Array(1)
                            }), t.key, {
                                name: S,
                                length: _
                            }, false, [
                                "encrypt",
                                "decrypt"
                            ]);
                            return babelHelpers.extends({}, t, {
                                key: n
                            });
                        });
                        return function(e) {
                            return t.apply(this, arguments);
                        };
                    })());
                    return (d || (d = n("Promise"))).all(a).then((e)=>{
                        t.$2 = e;
                    });
                });
            };
            this.$15 = function() {
                return t.$13()[y].orderBy("id").toArray().then((e)=>{
                    if (!e || e.length === 0) {
                        return t.$18();
                    }
                    if (e.length > 1) {
                        throw new (o("WAWebDbErrors")).DBInvalidFtsHMACKey;
                    }
                    t.$4 = e[e.length - 1];
                });
            };
            this.$17 = function(e) {
                return L().then((n)=>t.$13().keys.add({
                        key: n,
                        _expiration: Date.now() + h
                    }).then(()=>t.$14(e)));
            };
            this.$18 = function() {
                return L().then((e)=>t.$13()[y].add({
                        key: e
                    }).then(()=>t.$15()));
            };
            this.$16 = function() {
                return t.$13()[C].orderBy("id").toArray().then((e)=>{
                    if (!e || e.length === 0) {
                        return t.$19();
                    }
                    t.$6 = e[e.length - 1].key;
                });
            };
            this.$19 = function() {
                return E().then((e)=>t.$13()[C].add({
                        key: e
                    }).then(()=>t.$16()));
            };
            this.generateFinalDbEncryptionAndFtsKey = function(a) {
                if (t.$3 != null || t.$11 == null) {
                    return (d || (d = n("Promise"))).resolve();
                }
                const i = o("WABase64").decodeB64(a);
                t.$20(i);
                t.$21(i);
                t.$22(i).catch((n)=>{
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to derive the final wormEarKey"
                    ]))).catching(r("getErrorSafe")(n)).sendLogs("worm-ear-key-derive-failed");
                    t.$10.resolve();
                });
                return (d || (d = n("Promise"))).resolve();
            };
            this.$22 = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    const n = t.$6;
                    if (n == null) {
                        o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "Base wormEarKey is null in generateFinalWormEarKey"
                        ]))).sendLogs("worm-ear-key-base-missing");
                        throw new (o("WAWebDbErrors")).DbEncKeyNotLoaded(C);
                    }
                    t.$7 = yield globalThis.crypto.subtle.deriveBits(babelHelpers.extends({}, f, g, {
                        salt: e,
                        info: new TextEncoder().encode(v)
                    }), n, b);
                    t.$10.resolve();
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })();
            this.$21 = function(e) {
                o("WAWebPageLoadLogging").startPageLoadQplMeasure("generateFinalDbMsgEncryptionKey");
                const r = t.$13().keys.orderBy("id").toArray().then((r)=>{
                    const o = r.map((()=>{
                        const r = n("asyncToGeneratorRuntime").asyncToGenerator(function*(n) {
                            if (t.$11 == null) {
                                s(0, 56319);
                            }
                            let r;
                            try {
                                r = yield self.crypto.subtle.deriveKey(babelHelpers.extends({}, f, g, {
                                    salt: e,
                                    info: new Uint8Array(t.$11 || 0)
                                }), n.key, {
                                    name: S,
                                    length: _
                                }, false, [
                                    "encrypt",
                                    "decrypt"
                                ]);
                            } catch (e) {
                                t.$11 = null;
                                throw e;
                            }
                            return babelHelpers.extends({}, n, {
                                key: r
                            });
                        });
                        return function(e) {
                            return r.apply(this, arguments);
                        };
                    })());
                    return (d || (d = n("Promise"))).all(o).then((e)=>{
                        t.$11 = null;
                        t.$3 = e;
                        t.$8.resolve();
                    });
                });
                return r.finally(()=>{
                    o("WAWebPageLoadLogging").endPageLoadQplMeasure("generateFinalDbMsgEncryptionKey");
                    t.$11 = null;
                });
            };
            this.$20 = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    if (!t.$4 || t.$4.key == null || t.$4.id == null) {
                        o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "Base ftsHMACKey is null in _generateFinalFtsHmacKey"
                        ])));
                        throw new (o("WAWebDbErrors")).DBInvalidFtsHMACKey;
                    }
                    const n = [
                        t.$4.id,
                        t.$4.key
                    ];
                    const r = n[0];
                    const a = n[1];
                    const i = yield self.crypto.subtle.deriveKey(babelHelpers.extends({}, f, g, {
                        salt: e,
                        info: new Uint8Array(0)
                    }), a, {
                        name: "HMAC",
                        hash: "SHA-256"
                    }, false, [
                        "sign"
                    ]);
                    t.$5 = {
                        id: r,
                        key: i
                    };
                    t.$9.resolve();
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })();
        }
        const a = t.prototype;
        a.init = function(t) {
            const l = this;
            if (this.$1) {
                return (d || (d = n("Promise"))).resolve();
            }
            this.$1 = new (r("WAWeb-dexie"))(m, {
                chromeTransactionDurability: "relaxed",
                addons: []
            });
            o("WAWebDexieObservability").dropDexieObservability(this.$1);
            o("WAWebStorageCmd").notifyOnVersionChange(this.$13(), m);
            this.$13().version(1).stores({
                [p]: "++id, _expirtation",
                [y]: "++id"
            });
            this.$13().version(2).stores({
                [p]: "++id",
                [y]: "++id"
            });
            this.$13().version(3).stores({
                [p]: "++id",
                [y]: "++id",
                [C]: "++id"
            });
            const s = t.buffer.slice(t.byteOffset, t.byteLength + t.byteOffset);
            return o("WAWebDexieCastTypes").dexieCastToPromise(this.$13().open()).then(()=>(d || (d = n("Promise"))).all([
                    l.$14(s),
                    l.$15(),
                    l.$16()
                ])).then(()=>l.$12.resolve());
        };
        a.$13 = function() {
            if (this.$1 == null) {
                throw r("err")("[db_encryption_key] db is not initialized");
            }
            return this.$1;
        };
        a.deleteKeys = function() {
            const e = this;
            return (d || (d = n("Promise"))).all([
                this.$13().table(p).clear(),
                this.$13().table(y).clear(),
                this.$13().table(C).clear()
            ]).then(()=>{}).finally(()=>{
                e.$1 = null;
                return o("WAWebDexieCastTypes").dexieCastToPromise(r("WAWeb-dexie").delete(m)).catch(()=>r("WAWeb-dexie").delete(m));
            });
        };
        a.resetDB = function() {
            this.$1?.close();
            this.$1 = null;
        };
        a.deleteKeyCache = function() {
            let e;
            this.$2 = null;
            this.$4 = null;
            this.$3 = null;
            this.$8 = new (e = o("WAResolvable")).Resolvable;
            this.$9 = new e.Resolvable;
            this.$10 = new e.Resolvable;
            this.$5 = null;
            this.$6 = null;
            this.$7 = null;
            this.$11 = null;
            this.$12 = new e.Resolvable;
        };
        a.setFinalDbMsgEncKeys_TESTONLY = function(t) {
            this.$3 = t;
        };
        a.setKeys_TESTONLY = function(t) {
            this.$2 = t;
        };
        a.waitForFinalDbMsgEncKey = function() {
            return this.$8.promise;
        };
        a.waitForFinalFtsHmacKey = function() {
            return this.$9.promise;
        };
        a.waitForWormEarKey = function() {
            return this.$10.promise;
        };
        a.waitForInit = function() {
            return this.$12.promise;
        };
        a.getEncKeys = function() {
            if (!this.$2) {
                throw new (o("WAWebDbErrors")).DbEncKeyNotLoaded(p);
            }
            return this.$2;
        };
        a.getDbMsgEncKeys = function(t) {
            if (!this.$3) {
                throw new (o("WAWebDbErrors")).DbMsgEncKeyNotLoaded(t.tableName);
            }
            return this.$3;
        };
        a.getFtsHMACKey = function() {
            if (!this.$5) {
                throw new (o("WAWebDbErrors")).DbEncKeyNotLoaded(y);
            }
            return this.$5;
        };
        a.getWormEarKey = function() {
            if (!this.$7) {
                throw new (o("WAWebDbErrors")).DbEncKeyNotLoaded(C);
            }
            return this.$7;
        };
        return t;
    })();
    function L() {
        const e = new Uint8Array(_);
        self.crypto.getRandomValues(e);
        return self.crypto.subtle.importKey("raw", e, f, false, [
            "deriveKey"
        ]);
    }
    function E() {
        const e = new Uint8Array(_);
        globalThis.crypto.getRandomValues(e);
        return globalThis.crypto.subtle.importKey("raw", e, f.name, false, [
            "deriveBits"
        ]);
    }
    const k = new R;
    l.DB_ENCRYPTION_CIPHER = S;
    l.DbEncKeyStore = k;
}, 98);