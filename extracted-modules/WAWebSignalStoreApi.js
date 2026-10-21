__d("WAWebSignalStoreApi", [
    "Promise",
    "WALogger",
    "WASignalKeys",
    "WAWebNoop",
    "WAWebSignalCommonUtils",
    "WAWebSignalConst",
    "WAWebSignalStorage",
    "WAWebSignalStorageUtils",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = 1;
    const c = (()=>{
        function t() {
            this.idToSignedPreKey = new Map;
        }
        const a = t.prototype;
        a.getMeta = function(t) {
            const e = o("WAWebSignalStorage").getMetaTable();
            return e.get(t).then((e)=>{
                if (e) {
                    return e.value;
                }
                return null;
            });
        };
        a.putMeta = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = o("WAWebSignalStorage").getMetaTable();
                const r = e.map((e)=>t.createOrReplace(e));
                yield (s || (s = n("Promise"))).all(r);
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a.setServerHasPreKeys = function(t) {
            this.putMeta([
                {
                    key: o("WAWebSignalConst").META_KEYS.SERVER_HAS_KEY,
                    value: t
                }
            ]);
        };
        a.getServerHasPreKeys = function() {
            return this.getMeta(o("WAWebSignalConst").META_KEYS.SERVER_HAS_KEY);
        };
        a.putADVSignedIdentity = function(t) {
            return this.putMeta([
                {
                    key: o("WAWebSignalConst").META_KEYS.ADV_SIGNED_IDENTITY,
                    value: t
                }
            ]);
        };
        a.getADVSignedIdentity = function() {
            return this.getMeta(o("WAWebSignalConst").META_KEYS.ADV_SIGNED_IDENTITY);
        };
        a.getPreKeysByRange = function(t, n) {
            const e = o("WAWebSignalStorage").getPreKeyTable();
            return e.greaterThan([
                "keyId"
            ], t - 1, {
                limit: n
            });
        };
        a.getPreKeyById = function(t) {
            const e = o("WAWebSignalStorage").getPreKeyTable();
            return e.get(t);
        };
        a.removePreKeyById = function(t) {
            const e = o("WAWebSignalStorage").getPreKeyTable();
            return e.remove(t);
        };
        a.bulkRemovePreKey = function(t) {
            const e = o("WAWebSignalStorage").getPreKeyTable();
            return e.bulkRemove(t);
        };
        a.putPreKeys = function(t) {
            const e = o("WAWebSignalStorage").getPreKeyTable();
            return e.bulkCreateOrReplace(t);
        };
        a.markPreKeyAsDirectDistribution = function(t) {
            const e = o("WAWebSignalStorage").getPreKeyTable();
            return e.merge(t, {
                isDirectDistribution: 1
            });
        };
        a.getSignedPreKey = function() {
            const e = this;
            return this.getMeta(o("WAWebSignalConst").META_KEYS.LAST_SPK_ID).then((t)=>e.getSignedPreKeyById(t));
        };
        a.getSignedPreKeyById = function(t) {
            const e = this;
            if (this.idToSignedPreKey.has(t)) {
                return (s || (s = n("Promise"))).resolve(this.idToSignedPreKey.get(t));
            }
            const r = o("WAWebSignalStorage").getSignedPreKeyTable();
            return r.get(t).then((n)=>{
                e.idToSignedPreKey.set(t, n);
                return n;
            });
        };
        a.putSignedPreKeys = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = o("WAWebSignalStorage").getSignedPreKeyTable();
                const a = e.map(({ keyId: n, keyPair: o, signature: a })=>t.get(n).then((e)=>{
                        if (e) {
                            throw r("err")(`signed preKey id ${n} already exists`);
                        }
                        const i = {
                            keyId: n,
                            keyPair: o,
                            signature: a
                        };
                        return t.create(i);
                    }));
                yield (s || (s = n("Promise"))).all(a);
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a.putSession = function(t, n) {
            const e = o("WAWebSignalStorage").getSessionTable();
            return e.createOrReplace({
                address: t,
                session: n
            });
        };
        a.bulkPutSession = function(t) {
            const e = o("WAWebSignalStorage").getSessionTable();
            return e.bulkCreateOrReplace(t);
        };
        a.removeSession = function(t) {
            const e = o("WAWebSignalStorage").getSessionTable();
            return e.remove(t);
        };
        a.bulkRemoveSession = function(t) {
            const e = o("WAWebSignalStorage").getSessionTable();
            return e.bulkRemove(t);
        };
        a.getSession = function(t) {
            const e = o("WAWebSignalStorage").getSessionTable();
            return e.get(t).then((e)=>{
                if (e) {
                    return e.session;
                }
                return null;
            });
        };
        a.bulkGetSession = function(t) {
            const e = o("WAWebSignalStorage").getSessionTable();
            return e.bulkGet(t).then((e)=>e.map((e)=>{
                    if (e) {
                        return e.session;
                    }
                    return null;
                }));
        };
        a.putIdentity = function(t, n) {
            const e = o("WAWebSignalStorage").getIdentityTable();
            return e.createOrReplace({
                identifier: t,
                identityKey: n
            });
        };
        a.bulkPutIdentity = function(t) {
            const e = o("WAWebSignalStorage").getIdentityTable();
            return e.bulkCreateOrReplace(t);
        };
        a.bulkGetIdentity = function(t) {
            const e = o("WAWebSignalStorage").getIdentityTable();
            return e.bulkGet(t).then((e)=>e.map((e)=>{
                    if (e) {
                        return e.identityKey;
                    }
                    return null;
                }));
        };
        a.getIdentity = function(t) {
            const e = o("WAWebSignalStorage").getIdentityTable();
            return e.get(t).then((e)=>{
                if (e) {
                    return e.identityKey;
                }
                return null;
            });
        };
        a.removeIdentity = function(t) {
            const e = o("WAWebSignalStorage").getIdentityTable();
            return e.remove(t);
        };
        a.bulkRemoveIdentity = function(t) {
            const e = o("WAWebSignalStorage").getIdentityTable();
            return e.bulkRemove(t);
        };
        a.getIdentityKeyWithRowId = function(t) {
            const e = o("WAWebSignalStorage").getIdentityTable();
            return e.get(t).then((e)=>{
                if (e) {
                    return {
                        identityKey: e.identityKey,
                        rowId: e.rowId,
                        sentAddonRowId: e.sentAddonRowId,
                        accountEncryptionState: e.accountEncryptionState
                    };
                }
                return null;
            });
        };
        a.bulkGetIdentityKeyWithRowId = function(t) {
            const e = o("WAWebSignalStorage").getIdentityTable();
            return e.bulkGet(t).then((e)=>e.map((e)=>{
                    if (e) {
                        return {
                            identityKey: e.identityKey,
                            rowId: e.rowId,
                            accountEncryptionState: e.accountEncryptionState
                        };
                    }
                    return null;
                }));
        };
        a.getAllIdentityRows = function() {
            return o("WAWebSignalStorage").getIdentityTable().all();
        };
        a.bulkPutIdentityKeyWithRowId = function(t) {
            const e = o("WAWebSignalStorage").getIdentityTable();
            return e.bulkCreateOrReplace(t);
        };
        a.saveBaseKey = function(t, n, r) {
            const e = o("WAWebSignalStorage").getBaseKeyTable();
            return e.createOrReplace({
                address: t,
                originalMsgId: n,
                baseKey: r
            });
        };
        a.loadBaseKey = function(t, n) {
            const e = o("WAWebSignalStorage").getBaseKeyTable();
            return e.equals([
                "address",
                "originalMsgId"
            ], [
                t,
                n
            ]).then((e)=>{
                if (e && e.length !== 0) {
                    return e[0].baseKey;
                }
                return null;
            });
        };
        a.deleteBaseKey = function(t, n) {
            const e = o("WAWebSignalStorage").getBaseKeyTable();
            return e.equals([
                "address",
                "originalMsgId"
            ], [
                t,
                n
            ]).then((t)=>{
                if (t && t.length !== 0) {
                    return e.remove(t[0].id);
                }
            });
        };
        a.putSenderKey = function(t, n, r) {
            const e = o("WAWebSignalStorage").getSenderKeyTable();
            return e.createOrReplace({
                senderKeyName: t,
                senderId: n,
                senderKey: r
            });
        };
        a.bulkPutSenderKey = function(t) {
            const e = o("WAWebSignalStorage").getSenderKeyTable();
            return e.bulkCreateOrReplace(t);
        };
        a.removeSenderKey = function(t) {
            const e = o("WAWebSignalStorage").getSenderKeyTable();
            return e.remove(t);
        };
        a.getSenderKey = function(t) {
            const e = o("WAWebSignalStorage").getSenderKeyTable();
            return e.get(t).then((e)=>{
                if (e) {
                    return e.senderKey;
                }
                return null;
            });
        };
        a.removeSenderKeyBySenderId = function(t) {
            const e = o("WAWebSignalStorage").getSenderKeyTable();
            return e.equals([
                "senderId"
            ], t).then((t)=>e.bulkRemove(t.map((e)=>e.senderKeyName)));
        };
        a.clearCredential = function() {
            let e;
            const t = [
                (e = o("WAWebSignalStorage")).getIdentityTable(),
                e.getMetaTable(),
                e.getPreKeyTable(),
                e.getSessionTable(),
                e.getSignedPreKeyTable()
            ];
            return (s || (s = n("Promise"))).all(t.map((e)=>e.clear())).then(r("WAWebNoop"));
        };
        a.getRegistrationInfo = function() {
            const e = this;
            if (this.registrationInfo != null) {
                return (s || (s = n("Promise"))).resolve(this.registrationInfo);
            }
            return (s || (s = n("Promise"))).all([
                this.getMeta(o("WAWebSignalConst").META_KEYS.REG_ID),
                this.getMeta(o("WAWebSignalConst").META_KEYS.STATIC_PUBKEY),
                this.getMeta(o("WAWebSignalConst").META_KEYS.STATIC_PRIVKEY)
            ]).then(([r, a, i])=>{
                if (!(!r || !a || !i)) {
                    return (s || (s = n("Promise"))).all([
                        o("WAWebSignalCommonUtils").decryptRegistrationMaterial(a),
                        o("WAWebSignalCommonUtils").decryptRegistrationMaterial(i)
                    ]).then(([n, o])=>{
                        e.registrationInfo = {
                            registrationId: r,
                            identityKeyPair: {
                                pubKey: n,
                                privKey: o
                            }
                        };
                        return e.registrationInfo;
                    });
                }
            });
        };
        a.setRegistrationInfo = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = this;
                yield (s || (s = n("Promise"))).all([
                    o("WAWebSignalCommonUtils").encryptRegistrationMaterial(e.identityKeyPair.pubKey),
                    o("WAWebSignalCommonUtils").encryptRegistrationMaterial(e.identityKeyPair.privKey)
                ]).then(([a, i])=>(s || (s = n("Promise"))).all([
                        t.putMeta([
                            {
                                key: o("WAWebSignalConst").META_KEYS.REG_ID,
                                value: e.registrationId
                            },
                            {
                                key: o("WAWebSignalConst").META_KEYS.STATIC_PUBKEY,
                                value: a
                            },
                            {
                                key: o("WAWebSignalConst").META_KEYS.STATIC_PRIVKEY,
                                value: i
                            }
                        ])
                    ]));
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a.getOrGenPreKeys = function(r, a) {
            const t = this;
            return o("WAWebSignalStorageUtils").getStorage().lock([
                "signal-meta-store",
                "prekey-store"
            ], function() {
                return (s || (s = n("Promise"))).all([
                    t.getMeta(o("WAWebSignalConst").META_KEYS.FIRST_UNUPLOAD_PK_ID),
                    t.getMeta(o("WAWebSignalConst").META_KEYS.NEXT_PK_ID)
                ]).then(([i, l])=>{
                    const s = i || u;
                    const c = l || u;
                    const m = c - s;
                    const p = r - m;
                    if (p <= 0) {
                        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[getPreKeys] no gen needed avail=",
                            " need=",
                            ""
                        ])), m, r);
                        return t.getPreKeysByRange(s, r);
                    }
                    const _ = d(c, c + p).map((e)=>a(e));
                    return t.savePreKeys(_).then(()=>t.getPreKeysByRange(s, r));
                });
            });
        };
        a.getOrGenSinglePreKey = function(t) {
            return this.getOrGenPreKeys(1, t).then((e)=>{
                if (e.length !== 1) {
                    throw r("err")(`Expected to get exactly one key but got ${e.length}`);
                }
                return e[0];
            });
        };
        a.savePreKeys = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                if (e.length !== 0) {
                    const t = e[e.length - 1];
                    yield (s || (s = n("Promise"))).all([
                        this.putMeta([
                            {
                                key: o("WAWebSignalConst").META_KEYS.NEXT_PK_ID,
                                value: t.keyId + 1
                            }
                        ]),
                        this.putPreKeys(e)
                    ]);
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a.markKeyAsUploaded = function(t) {
            const e = this;
            return (s || (s = n("Promise"))).all([
                this.getMeta(o("WAWebSignalConst").META_KEYS.FIRST_UNUPLOAD_PK_ID),
                this.getMeta(o("WAWebSignalConst").META_KEYS.NEXT_PK_ID)
            ]).then(([a, i])=>{
                if (t < 0 || !i || t >= i) {
                    throw r("err")(`markKeyAsUploaded: key ${t} is out of boundary.`);
                }
                const l = a ? Math.max(a, t + 1) : t + 1;
                return e.putMeta([
                    {
                        key: o("WAWebSignalConst").META_KEYS.FIRST_UNUPLOAD_PK_ID,
                        value: l
                    }
                ]);
            });
        };
        a.rotateSignedPreKey = function(t, r) {
            const e = this;
            return o("WAWebSignalStorageUtils").getStorage().lock([
                "signal-meta-store",
                "signed-prekey-store"
            ], function() {
                return e.getMeta(o("WAWebSignalConst").META_KEYS.LAST_SPK_ID).then((a)=>{
                    const i = a == null || a + 1 >= o("WASignalKeys").PRE_KEY_NON_INCLUSIVE_UPPER_BORDER ? u : a + 1;
                    const l = r(t, i);
                    return (s || (s = n("Promise"))).all([
                        e.putSignedPreKeys([
                            l
                        ]),
                        e.putMeta([
                            {
                                key: o("WAWebSignalConst").META_KEYS.LAST_SPK_ID,
                                value: i
                            }
                        ])
                    ]).then(()=>l);
                });
            });
        };
        return t;
    })();
    function d(e, t) {
        const n = [];
        for(let r = e; r < t; r++){
            n.push(r);
        }
        return n;
    }
    const m = new c;
    l.waSignalStore = m;
}, 98);