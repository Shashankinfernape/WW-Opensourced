__d("WAWebSignalSessionApi", [
    "Promise",
    "WABinary",
    "WAJids",
    "WALogger",
    "WAWebAdvSignatureApi",
    "WAWebApiContact",
    "WAWebCryptoCurve25519",
    "WAWebCryptoLibrary",
    "WAWebCryptoLibraryDbCallbacksApi",
    "WAWebCryptoLibrarySessionApi",
    "WAWebCryptoLibraryUtilsApi",
    "WAWebSessionScope",
    "WAWebSignalCommonUtils",
    "WAWebSignalProtocolStore",
    "WAWebSignalStoreApi",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "cr:4533",
    "err",
    "gkx"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    let h;
    let y;
    let C;
    const b = [
        o("WAWebSessionScope").SessionScope.DEFAULT,
        o("WAWebSessionScope").SessionScope.STATUS,
        o("WAWebSessionScope").SessionScope.PQ
    ];
    function v(e, t) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            const { deviceIdentity, identity, wid } = t;
            if (r("gkx")("26258")) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Signal::createSignalSession sessionScope=",
                    ""
                ])), n ?? "default");
            } else {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Signal::createSignalSession with ",
                    " sessionScope=",
                    ""
                ])), wid.toString({
                    legacy: true
                }), n ?? "default");
            }
            if (wid.device != null && wid.device !== o("WAJids").DEFAULT_DEVICE_ID) {
                if (!deviceIdentity) {
                    throw r("err")("Signal::createSignalSession: expected device-identity in keyBundle for companion device");
                }
                const m = yield o("WAWebAdvSignatureApi").validateADVwithIdentityKey(wid, deviceIdentity, identity);
                if (!m) {
                    throw r("err")("Signal::createSignalSession: invalid identityKey fetched");
                }
            }
            let identityKey;
            let _;
            let f;
            try {
                identityKey = o("WAWebCryptoCurve25519").toSignalCurvePubKey(new (o("WABinary")).Binary(t.identity).readBuffer());
            } catch (error) {
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "Assertion failed!"
                ]))).sendLogs("Signal::createSignalSession: invalid identityKey fetched");
                throw error;
            }
            try {
                _ = o("WAWebCryptoCurve25519").toSignalCurvePubKey(new (o("WABinary")).Binary(t.skey.pubkey).readBuffer());
            } catch (error) {
                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "Assertion failed!"
                ]))).sendLogs("Signal::createSignalSession: invalid signedPreKey fetched");
                throw error;
            }
            if (t.key) {
                try {
                    f = o("WAWebCryptoCurve25519").toSignalCurvePubKey(new (o("WABinary")).Binary(t.key.pubkey).readBuffer());
                } catch (e) {
                    o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "Assertion failed!"
                    ]))).sendLogs("Signal::createSignalSession: invalid preKey fetched");
                }
            }
            const g = {
                registrationId: t.regId,
                identityKey,
                signedPreKey: {
                    keyId: t.skey.id,
                    publicKey: _,
                    signature: new (o("WABinary")).Binary(t.skey.signature).readBuffer()
                }
            };
            if (t.key && f) {
                g.preKey = {
                    keyId: t.key.id,
                    publicKey: f
                };
            }
            const t_kyberKey = t.kyberKey;
            if (t_kyberKey != null) {
                g.kyberKey = {
                    keyId: t_kyberKey.id,
                    publicKey: new Uint8Array(t_kyberKey.publicKey).buffer,
                    signature: new Uint8Array(t_kyberKey.signature).buffer
                };
            }
            return o("WAWebCryptoLibrarySessionApi").createSignalSession(g, wid, n);
        });
        return S.apply(this, arguments);
    }
    function R(e, t) {
        o("WAWebApiContact").checkPnToLidMapping(e, o("WAWebApiContact").CheckPnToLidMappingCaller.WAWEB_SIGNAL_SESSION_HAS_SIGNAL_SESSIONS);
        return o("WAWebSignalProtocolStore").getPersistSignalProtocolStore().containSessions(e.map((e)=>o("WAWebSignalCommonUtils").createSignalAddress(e, t).toString()));
    }
    function L(e, t) {
        return E.apply(this, arguments);
    }
    function E() {
        E = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = yield o("WAWebCryptoLibrarySessionApi").getRemoteRegId(e, t);
            if (n != null || t === o("WAWebSessionScope").SessionScope.DEFAULT) {
                return n;
            }
            return o("WAWebCryptoLibrarySessionApi").getRemoteRegId(e, o("WAWebSessionScope").SessionScope.DEFAULT);
        });
        return E.apply(this, arguments);
    }
    function k(e) {
        return I.apply(this, arguments);
    }
    function I() {
        I = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            o("WAWebApiContact").checkPnToLidMapping([
                e
            ], o("WAWebApiContact").CheckPnToLidMappingCaller.WAWEB_SIGNAL_SESSION_DELETE_REMOTE_INFO);
            const t = o("WAWebSignalCommonUtils").createSignalAddress(e).toString();
            o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "[session] deleteRemoteInfo"
            ])));
            const r = [
                o("WAWebSignalProtocolStore").getSignalProtocolStore().removeIdentity(t)
            ].concat(b.map((t)=>o("WAWebSignalProtocolStore").getSignalProtocolStore().removeSession(o("WAWebSignalCommonUtils").createSignalAddress(e, t).toString())));
            yield (C || (C = n("Promise"))).all(r);
        });
        return I.apply(this, arguments);
    }
    function T(e, t) {
        return D.apply(this, arguments);
    }
    function D() {
        D = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            o("WAWebApiContact").checkPnToLidMapping([
                e
            ], o("WAWebApiContact").CheckPnToLidMappingCaller.WAWEB_SIGNAL_SESSION_DELETE_REMOTE_SESSION);
            const r = t != null ? [
                t
            ] : b;
            o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                "[session] deleteRemoteSession scope=",
                ""
            ])), t ?? "all");
            yield (C || (C = n("Promise"))).all(r.map((t)=>o("WAWebSignalProtocolStore").getSignalProtocolStore().removeSession(o("WAWebSignalCommonUtils").createSignalAddress(e, t).toString())));
        });
        return D.apply(this, arguments);
    }
    function x(e) {
        const t = o("WAWebSignalCommonUtils").createSignalAddress(e).toString();
        return o("WAWebSignalProtocolStore").getPersistSignalProtocolStore().maybeCleanUpUnconvertedSession(t);
    }
    function $(e, t) {
        return P.apply(this, arguments);
    }
    function P() {
        P = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = o("WAWebCryptoLibraryDbCallbacksApi").getCryptoDbCallbacks();
            const a = o("WAJids").unsafeCoerceToDeviceJid(e.toJid());
            const i = yield r("WAWebCryptoLibraryUtilsApi").getSessionAliceBaseKey(a, o("WAWebCryptoLibraryDbCallbacksApi").selectLoadSession(n, t));
            if (i.success === true) {
                return i.value;
            }
            return null;
        });
        return P.apply(this, arguments);
    }
    function N(e, t, n) {
        return M.apply(this, arguments);
    }
    function M() {
        M = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            o("WAWebApiContact").checkPnToLidMapping([
                e
            ], o("WAWebApiContact").CheckPnToLidMappingCaller.WAWEB_SIGNAL_SESSION_SAVE_SESSION_BASE_KEY);
            const r = o("WAWebSignalCommonUtils").createSignalAddress(e, n);
            const a = yield $(e, n);
            if (a) {
                yield o("WAWebSignalStoreApi").waSignalStore.saveBaseKey(r.toString(), t, a);
            } else {
                o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "saveSessionBaseKey: for ",
                    ", no basekey provided"
                ])), t);
            }
        });
        return M.apply(this, arguments);
    }
    function w(e, t, n) {
        return A.apply(this, arguments);
    }
    function A() {
        A = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, r) {
            o("WAWebApiContact").checkPnToLidMapping([
                e
            ], o("WAWebApiContact").CheckPnToLidMappingCaller.WAWEB_SIGNAL_SESSION_HAS_SAME_BASE_KEY);
            const a = o("WAWebSignalCommonUtils").createSignalAddress(e, r);
            const i = yield (C || (C = n("Promise"))).all([
                $(e, r),
                o("WAWebSignalStoreApi").waSignalStore.loadBaseKey(a.toString(), t)
            ]);
            const l = i[0];
            const s = i[1];
            if (s) {
                if (l) {
                    if (o("WAWebSignalCommonUtils").bufferEqual(s, l)) {
                        o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                            "hasSameBaseKey: ",
                            ", baseKey match"
                        ])), t);
                        return true;
                    }
                    o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                        "hasSameBaseKey: ",
                        ", baseKey mismatch"
                    ])), t);
                    return false;
                }
                o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                    "hasSameBaseKey: ",
                    ", no saved session"
                ])), t);
                return false;
            }
            o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                "hasSameBaseKey: ",
                ", no saved baseKey"
            ])), t);
            return false;
        });
        return A.apply(this, arguments);
    }
    function F(e, t, n) {
        return O.apply(this, arguments);
    }
    function O() {
        O = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            return o("WAWebCryptoLibrarySessionApi").createGroupSenderSignalSession(o("WAWebWidFactory").createWid(t), e, n);
        });
        return O.apply(this, arguments);
    }
    function B(e, t) {
        return W.apply(this, arguments);
    }
    function W() {
        W = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            return o("WAWebCryptoLibrary").getGroupSenderKeyInfo(e, t);
        });
        return W.apply(this, arguments);
    }
    function q(e, t) {
        o("WAWebApiContact").checkPnToLidMapping([
            t
        ], o("WAWebApiContact").CheckPnToLidMappingCaller.WAWEB_SIGNAL_SESSION_DELETE_GROUP_SENDER_KEY_INFO);
        const n = o("WAWebSignalCommonUtils").createSignalAddress(t);
        const r = `${e.toString({
            legacy: true
        })}::${n.toString()}`;
        return o("WAWebSignalStoreApi").waSignalStore.removeSenderKey(r);
    }
    function U(e) {
        o("WAWebApiContact").checkPnToLidMapping([
            e
        ], o("WAWebApiContact").CheckPnToLidMappingCaller.WAWEB_SIGNAL_SESSION_DELETE_DEVICE_SENDER_KEY);
        const t = String(o("WAWebSignalCommonUtils").createSignalAddress(e));
        return o("WAWebSignalStoreApi").waSignalStore.removeSenderKeyBySenderId(t);
    }
    l.createSignalSession = v;
    l.hasSignalSessions = R;
    l.getRemoteRegId = L;
    l.deleteRemoteInfo = k;
    l.deleteRemoteSession = T;
    l.maybeDeleteUnconvertedSession = x;
    l.saveSessionBaseKey = N;
    l.hasSameBaseKey = w;
    l.createGroupSignalSession = F;
    l.getGroupSenderKeyInfo = B;
    l.deleteGroupSenderKeyInfo = q;
    l.deleteDeviceSenderKey = U;
}, 98);