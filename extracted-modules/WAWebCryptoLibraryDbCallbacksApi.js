__d("WAWebCryptoLibraryDbCallbacksApi", [
    "Promise",
    "WAByteArray",
    "WALogger",
    "WAResultOrError",
    "WASignalKeys",
    "WASignalLocalStorageProtocol.pb",
    "WASignalOther",
    "WAWebApiContact",
    "WAWebSessionScope",
    "WAWebSignalCommonUtils",
    "WAWebSignalProtocolStore",
    "WAWebSignalStorage",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    function m(e, t) {
        if (t === o("WAWebSessionScope").SessionScope.PQ) {
            return e.loadSessionPqScope;
        }
        if (t === o("WAWebSessionScope").SessionScope.STATUS) {
            return e.loadSessionStatusScope;
        }
        return e.loadSession;
    }
    function p(e, t) {
        if (t === o("WAWebSessionScope").SessionScope.PQ) {
            return e.handleNewSessionPqScope;
        }
        if (t === o("WAWebSessionScope").SessionScope.STATUS) {
            return e.handleNewSessionStatusScope;
        }
        return e.handleNewSession;
    }
    function _() {
        const loadSession = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = o("WAWebWidFactory").createDeviceWidOrThrow(e);
                o("WAWebApiContact").checkPnToLidMapping([
                    t
                ], o("WAWebApiContact").CheckPnToLidMappingCaller.WAWEB_CRYPTO_LIBRARY_DB_CALLBACK_API_LOAD_SESSION);
                const n = o("WAWebSignalCommonUtils").createSignalAddress(t);
                const r = yield o("WAWebSignalProtocolStore").getSignalProtocolStore().loadSession(n);
                return r ?? null;
            });
            return function(n) {
                return e.apply(this, arguments);
            };
        })();
        const r = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, r, a, i, l = false) {
                const s = o("WAWebWidFactory").createDeviceWidOrThrow(e);
                o("WAWebApiContact").checkPnToLidMapping([
                    s
                ], o("WAWebApiContact").CheckPnToLidMappingCaller.WAWEB_CRYPTO_LIBRARY_DB_CALLBACK_API_HANDLE_NEW_SESSION);
                const u = o("WAWebSignalCommonUtils").createSignalAddress(s);
                return (d || (d = n("Promise"))).all([
                    !l && o("WAWebSignalProtocolStore").getSignalProtocolStore().storeSession(u, t),
                    r && o("WAWebSignalProtocolStore").getSignalProtocolStore().saveIdentity(u, o("WAByteArray").uint8ArrayToBuffer(r)),
                    a != null && o("WAWebSignalProtocolStore").getSignalProtocolStore().removePreKey(a)
                ]).then(()=>o("WAResultOrError").makeResult());
            });
            return function(n, r, o, a, i, l) {
                return e.apply(this, arguments);
            };
        })();
        const loadSenderKeySession = function(t, n) {
            const e = o("WAWebWidFactory").createDeviceWidOrThrow(n);
            o("WAWebApiContact").checkPnToLidMapping([
                e
            ], o("WAWebApiContact").CheckPnToLidMappingCaller.WAWEB_CRYPTO_LIBRARY_DB_CALLBACK_API_LOAD_SENDER_KEY_SESSION);
            const r = o("WAWebSignalCommonUtils").createSignalLikeSenderKeyName(t, e);
            return o("WAWebSignalProtocolStore").getSignalProtocolStore().loadSenderKey(r).then((e)=>{
                if (e == null) {
                    return o("WAResultOrError").makeError("errLoadSenderKeySession");
                }
                return o("WAResultOrError").makeResult(e);
            });
        };
        const saveSenderKeySession = function(t, n, r) {
            const e = o("WAWebWidFactory").createDeviceWidOrThrow(n);
            o("WAWebApiContact").checkPnToLidMapping([
                e
            ], o("WAWebApiContact").CheckPnToLidMappingCaller.WAWEB_CRYPTO_LIBRARY_DB_CALLBACK_API_SAVE_SENDER_KEY_SESSION);
            const a = o("WAWebSignalCommonUtils").createSignalLikeSenderKeyName(t, e);
            return o("WAWebSignalProtocolStore").getSignalProtocolStore().storeSenderKey(a, r);
        };
        const loadSessionStatusScope = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const n = o("WAWebWidFactory").createDeviceWidOrThrow(t);
                o("WAWebApiContact").checkPnToLidMapping([
                    n
                ], o("WAWebApiContact").CheckPnToLidMappingCaller.WAWEB_CRYPTO_LIBRARY_DB_CALLBACK_API_LOAD_SESSION);
                const r = o("WAWebSignalCommonUtils").createSignalAddress(n, o("WAWebSessionScope").SessionScope.STATUS);
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[status-session] loadSessionStatusScope"
                ])));
                const a = yield o("WAWebSignalProtocolStore").getSignalProtocolStore().loadSession(r);
                return a ?? null;
            });
            return function(n) {
                return t.apply(this, arguments);
            };
        })();
        const handleNewSessionStatusScope = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, r, a, i, l = false) {
                const u = o("WAWebWidFactory").createDeviceWidOrThrow(e);
                o("WAWebApiContact").checkPnToLidMapping([
                    u
                ], o("WAWebApiContact").CheckPnToLidMappingCaller.WAWEB_CRYPTO_LIBRARY_DB_CALLBACK_API_HANDLE_NEW_SESSION);
                const c = o("WAWebSignalCommonUtils").createSignalAddress(u, o("WAWebSessionScope").SessionScope.STATUS);
                const m = o("WAWebSignalCommonUtils").createSignalAddress(u);
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[status-session] handleNewSessionStatusScope"
                ])));
                return (d || (d = n("Promise"))).all([
                    !l && o("WAWebSignalProtocolStore").getSignalProtocolStore().storeSession(c, t),
                    r && o("WAWebSignalProtocolStore").getSignalProtocolStore().saveIdentity(m, o("WAByteArray").uint8ArrayToBuffer(r)),
                    a != null && o("WAWebSignalProtocolStore").getSignalProtocolStore().removePreKey(a)
                ]).then(()=>o("WAResultOrError").makeResult());
            });
            return function(n, r, o, a, i, l) {
                return e.apply(this, arguments);
            };
        })();
        const loadSessionPqScope = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = o("WAWebWidFactory").createDeviceWidOrThrow(e);
                o("WAWebApiContact").checkPnToLidMapping([
                    t
                ], o("WAWebApiContact").CheckPnToLidMappingCaller.WAWEB_CRYPTO_LIBRARY_DB_CALLBACK_API_LOAD_SESSION);
                const n = o("WAWebSignalCommonUtils").createSignalAddress(t, o("WAWebSessionScope").SessionScope.PQ);
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[pq-session] loadSessionPqScope"
                ])));
                const r = yield o("WAWebSignalProtocolStore").getSignalProtocolStore().loadSession(n);
                return r ?? null;
            });
            return function(n) {
                return e.apply(this, arguments);
            };
        })();
        const handleNewSessionPqScope = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, r, a, i, l = false) {
                const s = o("WAWebWidFactory").createDeviceWidOrThrow(e);
                o("WAWebApiContact").checkPnToLidMapping([
                    s
                ], o("WAWebApiContact").CheckPnToLidMappingCaller.WAWEB_CRYPTO_LIBRARY_DB_CALLBACK_API_HANDLE_NEW_SESSION);
                const u = o("WAWebSignalCommonUtils").createSignalAddress(s, o("WAWebSessionScope").SessionScope.PQ);
                const m = o("WAWebSignalCommonUtils").createSignalAddress(s);
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[pq-session] handleNewSessionPqScope"
                ])));
                return (d || (d = n("Promise"))).all([
                    !l && o("WAWebSignalProtocolStore").getSignalProtocolStore().storeSession(u, t),
                    r && o("WAWebSignalProtocolStore").getSignalProtocolStore().saveIdentity(m, o("WAByteArray").uint8ArrayToBuffer(r)),
                    a != null && o("WAWebSignalProtocolStore").getSignalProtocolStore().removePreKey(a)
                ]).then(()=>o("WAResultOrError").makeResult());
            });
            return function(n, r, o, a, i, l) {
                return e.apply(this, arguments);
            };
        })();
        return {
            loadSession,
            handleNewSession: r,
            loadSenderKeySession,
            saveSenderKeySession,
            loadSessionStatusScope,
            handleNewSessionStatusScope,
            loadSessionPqScope,
            handleNewSessionPqScope,
            loadSignedPreKey: function(t) {
                return o("WAWebSignalProtocolStore").getSignalProtocolStore().loadSignedPreKey(t).then((e)=>{
                    if (e == null) {
                        return null;
                    }
                    const n = o("WASignalKeys").makeKeyPairFromArrayBuffers(e.pubKey, e.privKey);
                    const r = o("WASignalOther").encodeSignalProto(o("WASignalLocalStorageProtocol.pb").SignedPreKeyRecordStructureSpec, {
                        id: t,
                        publicKey: o("WASignalKeys").serializePubKey(n),
                        privateKey: n.privateKey,
                        signature: new Uint8Array(e.signature),
                        timestamp: 0
                    });
                    return o("WASignalOther").castToByteEncoded(r);
                });
            },
            loadOneTimePreKey: function(t) {
                return o("WAWebSignalProtocolStore").getSignalProtocolStore().loadPreKey(t).then((e)=>{
                    if (e == null) {
                        return null;
                    }
                    const n = o("WASignalKeys").makeKeyPairFromArrayBuffers(e.pubKey, e.privKey);
                    const r = o("WASignalOther").encodeSignalProto(o("WASignalLocalStorageProtocol.pb").PreKeyRecordStructureSpec, {
                        id: t,
                        publicKey: o("WASignalKeys").serializePubKey(n),
                        privateKey: n.privateKey
                    });
                    return o("WASignalOther").castToByteEncoded(r);
                });
            },
            loadKyberPreKey: (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    const t = yield o("WAWebSignalStorage").getKyberPreKeyTable().get(e);
                    if (t != null) {
                        return {
                            secretKey: new Uint8Array(t.keyPair.privKey),
                            shouldDeleteAfterUse: true
                        };
                    }
                    const n = yield o("WAWebSignalStorage").getKyberLastResortKeyTable().get(e);
                    if (n == null) {
                        return null;
                    }
                    return {
                        secretKey: new Uint8Array(n.keyPair.privKey),
                        shouldDeleteAfterUse: false
                    };
                });
                function t(t) {
                    return e.apply(this, arguments);
                }
                return t;
            })(),
            deleteKyberPreKey: (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    yield o("WAWebSignalStorage").getKyberPreKeyTable().remove(e);
                });
                function t(t) {
                    return e.apply(this, arguments);
                }
                return t;
            })(),
            getRegistrationInfo: (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    const e = yield o("WAWebSignalProtocolStore").getSignalProtocolStore().getLocalRegistrationId();
                    const t = yield o("WAWebSignalProtocolStore").getSignalProtocolStore().getIdentityKeyPair();
                    if (!(e == null || t == null) && e && t) {
                        return {
                            regId: o("WASignalOther").castRegistrationId(e),
                            staticKeyPair: o("WASignalKeys").makeKeyPairFromArrayBuffers(t.pubKey.slice(1), t.privKey)
                        };
                    }
                });
                function t() {
                    return e.apply(this, arguments);
                }
                return t;
            })()
        };
    }
    l.selectLoadSession = m;
    l.selectHandleNewSession = p;
    l.getCryptoDbCallbacks = _;
}, 98);