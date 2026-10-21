__d("WAWebAccountLinkingAPI", [
    "WALogger",
    "WAPromiseDelays",
    "WASmaxWaffleForceDeleteStateRPC",
    "WASmaxWaffleForceSuspendStateRPC",
    "WASmaxWaffleGetCertificateRPC",
    "WASmaxWaffleRefreshAccessTokensRPC",
    "WASmaxWaffleStateExistsRPC",
    "WASmaxWaffleWFPingRPC",
    "WAWebAPIParser",
    "WAWebAccountLinkingAPIGetCertsQuery.graphql",
    "WAWebAccountLinkingConstants",
    "WAWebAccountLinkingCryptoUtils",
    "WAWebAccountLinkingDBOperationsAPI",
    "WAWebAccountLinkingGatingUtils",
    "WAWebAccountLinkingHandler",
    "WAWebGraphQLServerError",
    "WAWebMetaAiWaffleAuthTokenCache",
    "WAWebRelayClient",
    "WAWebSubscriptionAgeGating",
    "WAWebWaffleCertificateCache",
    "WAWebWaffleEncryptionMetadataArgs",
    "WAWebWaffleFXServiceDataQueryV2Mutation",
    "WAWebWaffleIQErrorHandler",
    "WAWebWaffleLifecycleWamLogger",
    "WAWebWamEnumWaffleLifecycleTraceActionType",
    "WAWebX509Utils",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe"
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
    let b;
    let v;
    let S;
    let R;
    let L;
    let E;
    let k;
    let I;
    let T;
    let D;
    let x;
    const $ = o("WAWebAccountLinkingDBOperationsAPI").getAccountLinkingDBOps("account_linking");
    const P = {
        fetchValidCertificate: [
            "companion",
            "guest"
        ],
        generateWAEntACUser: [
            "guest"
        ],
        generateAccessTokens: [
            "guest"
        ],
        refreshAccessToken: [
            "companion",
            "guest"
        ],
        ping: [
            "companion",
            "guest"
        ],
        stateExists: [
            "companion",
            "guest"
        ],
        forceDeleteState: [
            "companion",
            "guest"
        ],
        forceSuspendState: [
            "companion",
            "guest"
        ],
        fetchServiceData: [
            "companion",
            "guest"
        ],
        sendLinkingMutation: [
            "guest"
        ]
    };
    function N(e) {
        const t = o("WAWebAccountLinkingGatingUtils").getWaffleMode();
        const n = P[e];
        if (!n.includes(t)) {
            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                '[WAFFLE] API "',
                '" not allowed in ',
                " mode"
            ])), e, t).sendLogs("waffle-api-mode-not-allowed");
            throw r("err")(`[WAFFLE] API "${e}" not allowed in ${t} mode`);
        }
    }
    function M() {
        return w.apply(this, arguments);
    }
    function w() {
        w = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            N("fetchValidCertificate");
            const e = yield o("WAWebWaffleCertificateCache").loadCertFromIDB();
            if (e != null) {
                if (!F(e)) {
                    const t = yield O(e);
                    if (t != null) {
                        return t;
                    }
                }
            }
            return W();
        });
        return w.apply(this, arguments);
    }
    function A(e) {
        if (e.payloadKeyId == null && !e.passwordIsOaep) {
            return 1;
        }
        return 2;
    }
    function F(e) {
        const t = A(e);
        const n = o("WAWebAccountLinkingGatingUtils").isWafflePkiMigrationEnabled() ? 2 : 1;
        return t !== n;
    }
    function O(e) {
        return B.apply(this, arguments);
    }
    function B() {
        B = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const { passwordIsOaep, passwordKeyId, passwordPem, payloadKeyId } = e;
            try {
                const l = yield o("WAWebX509Utils").extractCertificates(e.encryptionPem);
                const s = yield o("WAWebAccountLinkingCryptoUtils").validateCertificateChain(l);
                if (s != null) {
                    const c = yield s.getPublicKey({
                        algorithm: {
                            algorithm: {
                                name: "RSA-OAEP",
                                hash: {
                                    name: "SHA-1"
                                }
                            },
                            usages: [
                                "encrypt"
                            ]
                        }
                    });
                    const d = payloadKeyId == null ? null : yield s.getPublicKey({
                        algorithm: {
                            algorithm: {
                                name: "RSA-OAEP",
                                hash: {
                                    name: "SHA-256"
                                }
                            },
                            usages: [
                                "encrypt"
                            ]
                        }
                    });
                    let m = null;
                    if (passwordPem != null) {
                        m = yield o("WAWebAccountLinkingCryptoUtils").importPasswordPublicKey(passwordPem, passwordIsOaep ? "SHA-256" : "SHA-1");
                    }
                    return {
                        encryptionKey: c,
                        passwordKeyIsOaepSha256: passwordIsOaep,
                        passwordKeyId: passwordKeyId ?? null,
                        passwordPublicKey: m,
                        payloadEncryptionKeyV2: d,
                        payloadKeyId,
                        source: "cache"
                    };
                }
            } catch (error) {
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] Failed to restore cert from PEM"
                ]))).catching(r("getErrorSafe")(error));
            }
            return null;
        });
        return B.apply(this, arguments);
    }
    function W() {
        return q.apply(this, arguments);
    }
    function q() {
        q = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (!o("WAWebAccountLinkingGatingUtils").isWafflePkiMigrationEnabled()) {
                return Y();
            }
            const e = yield V();
            return e ?? (o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "[WAFFLE] GraphQL certificate fetch failed, falling back to IQ"
            ]))).sendLogs("waffle-graphql-cert-fetch-fallback", {
                sampling: 0.1
            }), Y());
        });
        return q.apply(this, arguments);
    }
    const U = e !== undefined ? e : e = n("WAWebAccountLinkingAPIGetCertsQuery.graphql");
    function V() {
        return H.apply(this, arguments);
    }
    function H() {
        H = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            try {
                const i = yield o("WAWebRelayClient").fetchQuery(U, {}, {
                    environmentType: "whatsapp_web"
                });
                const l = i?.waffle_get_certs?.payload_encryption;
                const s = l?.cert_chain_pem;
                if (s == null || s.length === 0) {
                    o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAFFLE] GetCerts response missing payload encryption chain"
                    ])));
                    return null;
                }
                const payloadKeyId = l?.key_id ?? null;
                if (payloadKeyId == null) {
                    o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAFFLE] GetCerts payload certificate has no key_id"
                    ]))).sendLogs("waffle-getcerts-missing-payload-key-id", {
                        sampling: 0.1
                    });
                    return null;
                }
                const c = s.join("\n");
                const g = yield o("WAWebX509Utils").extractCertificates(c);
                const h = yield o("WAWebAccountLinkingCryptoUtils").validateCertificateChain(g);
                if (h == null) {
                    o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAFFLE] GetCerts payload certificate validation failed"
                    ])));
                    return null;
                }
                const y = yield h.getPublicKey({
                    algorithm: {
                        algorithm: {
                            name: "RSA-OAEP",
                            hash: {
                                name: "SHA-1"
                            }
                        },
                        usages: [
                            "encrypt"
                        ]
                    }
                });
                const C = yield h.getPublicKey({
                    algorithm: {
                        algorithm: {
                            name: "RSA-OAEP",
                            hash: {
                                name: "SHA-256"
                            }
                        },
                        usages: [
                            "encrypt"
                        ]
                    }
                });
                let b = null;
                let v = null;
                let S = null;
                const R = i?.waffle_get_certs?.password_encryption;
                const L = R?.cert_chain_pem;
                if (L != null && L.length > 0) {
                    try {
                        const k = yield o("WAWebX509Utils").extractCertificates(L.join("\n"));
                        const I = yield o("WAWebAccountLinkingCryptoUtils").validateCertificateChain(k);
                        if (I == null) {
                            throw r("err")("[WAFFLE] Password certificate chain validation failed");
                        }
                        const T = yield I.getPublicKey({
                            algorithm: {
                                algorithm: {
                                    name: "RSA-OAEP",
                                    hash: {
                                        name: "SHA-1"
                                    }
                                },
                                usages: [
                                    "encrypt"
                                ]
                            }
                        });
                        S = yield o("WAWebAccountLinkingCryptoUtils").cryptoKeyToPem(T);
                        b = yield o("WAWebAccountLinkingCryptoUtils").importPasswordPublicKey(S, "SHA-256");
                        v = R?.key_id ?? null;
                    } catch (error) {
                        o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                            "[WAFFLE] Failed to import password certificate from GetCerts"
                        ]))).catching(r("getErrorSafe")(error));
                        S = null;
                        b = null;
                        v = null;
                    }
                }
                const D = b != null;
                yield o("WAWebWaffleCertificateCache").saveCertToIDB({
                    encryptionPem: c,
                    passwordIsOaep: D,
                    passwordKeyId: v,
                    passwordPem: S,
                    passwordTtlSeconds: R?.ttl_seconds,
                    payloadKeyId,
                    ttlSeconds: l?.ttl_seconds ?? null
                });
                return {
                    encryptionKey: y,
                    passwordKeyId: v,
                    passwordKeyIsOaepSha256: D,
                    passwordPublicKey: b,
                    payloadEncryptionKeyV2: C,
                    payloadKeyId,
                    source: "graphql"
                };
            } catch (error) {
                const x = error instanceof o("WAWebGraphQLServerError").GraphQLServerError ? o("WAWebGraphQLServerError").formatGraphQLServerError(error) : error;
                o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] GetCerts query failed: ",
                    ""
                ])), x).tags("waffle", "account-linking");
                return null;
            }
        });
        return H.apply(this, arguments);
    }
    function G() {
        return z.apply(this, arguments);
    }
    function z() {
        z = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            N("fetchValidCertificate");
            if (!o("WAWebAccountLinkingGatingUtils").isWafflePkiMigrationEnabled()) {
                throw r("err")("[WAFFLE Debug] Enable web_waffle_pki_migration for this session with ?gk_enable=web_waffle_pki_migration before forcing V2");
            }
            const e = yield V();
            if (e == null) {
                throw r("err")("[WAFFLE Debug] V2 certificate fetch or validation failed; inspect the GetCerts error logs");
            }
            const t = yield o("WAWebWaffleCertificateCache").loadCertFromIDB();
            if (t == null || t.payloadKeyId !== e.payloadKeyId || t.passwordIsOaep !== e.passwordKeyIsOaepSha256) {
                throw r("err")("[WAFFLE Debug] V2 certificate was not persisted to the cache");
            }
            return e;
        });
        return z.apply(this, arguments);
    }
    const environmentType = "whatsapp_web";
    const K = {
        passwordChainLength: null,
        passwordKeyId: null,
        passwordTtlSeconds: null,
        payloadChainLength: null,
        payloadKeyId: null,
        payloadTtlSeconds: null
    };
    function Q() {
        return X.apply(this, arguments);
    }
    function X() {
        X = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            try {
                const m = yield o("WAWebRelayClient").fetchQuery(U, {}, {
                    environmentType
                });
                const p = m?.waffle_get_certs?.payload_encryption;
                const _ = m?.waffle_get_certs?.password_encryption;
                return {
                    environmentType,
                    error: null,
                    rawError: null,
                    ok: p?.key_id != null,
                    passwordChainLength: _?.cert_chain_pem?.length ?? null,
                    passwordKeyId: _?.key_id ?? null,
                    passwordTtlSeconds: _?.ttl_seconds ?? null,
                    payloadChainLength: p?.cert_chain_pem?.length ?? null,
                    payloadKeyId: p?.key_id ?? null,
                    payloadTtlSeconds: p?.ttl_seconds ?? null
                };
            } catch (error) {
                return babelHelpers.extends({}, K, {
                    environmentType,
                    error: error instanceof o("WAWebGraphQLServerError").GraphQLServerError ? o("WAWebGraphQLServerError").formatGraphQLServerError(error) : r("getErrorSafe")(error).toString(),
                    ok: false,
                    rawError: error instanceof o("WAWebGraphQLServerError").GraphQLServerError ? JSON.stringify(error.source?.errors ?? []) : null
                });
            }
        });
        return X.apply(this, arguments);
    }
    function Y() {
        return J.apply(this, arguments);
    }
    function J() {
        J = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const timestampElementValue = Math.floor(Date.now() / 1000);
            try {
                const t = yield o("WASmaxWaffleGetCertificateRPC").sendGetCertificateRPC({
                    hasPasswordPem: true,
                    hasPayloadEncCertificates: true,
                    timestampElementValue
                });
                if (t.name === "GetCertificateResponseSuccess") {
                    const a = t.value.replyGetCertificateResponseMixin;
                    const i = a.encryptionPem?.elementValue;
                    if (i != null) {
                        const l = String.fromCharCode.apply(null, i);
                        const s = yield o("WAWebX509Utils").extractCertificates(l);
                        const u = yield o("WAWebAccountLinkingCryptoUtils").validateCertificateChain(s);
                        if (u != null) {
                            const m = yield u.getPublicKey({
                                algorithm: {
                                    algorithm: {
                                        name: "RSA-OAEP",
                                        hash: {
                                            name: "SHA-1"
                                        }
                                    },
                                    usages: [
                                        "encrypt"
                                    ]
                                }
                            });
                            let p = null;
                            let _ = null;
                            let f = null;
                            const b = a.passwordPem;
                            if (b != null) {
                                try {
                                    f = String.fromCharCode.apply(null, b.elementValue);
                                    p = yield o("WAWebAccountLinkingCryptoUtils").importPasswordPublicKey(f);
                                    _ = b.keyId;
                                } catch (error) {
                                    o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                                        "[WAFFLE] Failed to import password PEM"
                                    ]))).catching(r("getErrorSafe")(error));
                                }
                            }
                            const ttlSeconds = a.encryptionPem?.ttl ?? null;
                            yield o("WAWebWaffleCertificateCache").saveCertToIDB({
                                encryptionPem: l,
                                passwordIsOaep: false,
                                passwordKeyId: _,
                                passwordPem: f,
                                passwordTtlSeconds: b?.ttl,
                                payloadKeyId: null,
                                ttlSeconds
                            });
                            return {
                                encryptionKey: m,
                                passwordKeyId: _,
                                passwordKeyIsOaepSha256: false,
                                passwordPublicKey: p,
                                payloadEncryptionKeyV2: null,
                                payloadKeyId: null,
                                source: "iq"
                            };
                        }
                        o("WALogger").ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                            "[WAFFLE] Fetching valid certificate failed"
                        ])));
                        return null;
                    }
                    return null;
                }
                const S = t.value.errorGetCertificateErrors;
                o("WALogger").ERROR(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] GetCertificate RPC failed: ",
                    ""
                ])), S.name);
                return null;
            } catch (error) {
                o("WALogger").ERROR(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                    "fetchValidCertificate failed"
                ]))).catching(r("getErrorSafe")(error));
            }
        });
        return J.apply(this, arguments);
    }
    const Z = o("WAWebWaffleIQErrorHandler").createWaffleOperationRetryState();
    const ee = o("WAWebWaffleIQErrorHandler").createWaffleOperationRetryState();
    let te = null;
    function ne(e, t) {
        return re.apply(this, arguments);
    }
    function re() {
        re = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            e: {
                if (e === "request_nonce") {
                    return o("WAWebWaffleIQErrorHandler").handleNonceRetry(t);
                }
                if (e === "refresh_token") {
                    const n = t.nextBackoffMs();
                    if (n == null) {
                        return false;
                    }
                    yield o("WAPromiseDelays").delayMs(n);
                    return oe();
                    break e;
                }
                if (e === "refetch_certs") {
                    yield o("WAWebWaffleCertificateCache").invalidateCertInIDB();
                    const r = t.nextBackoffMs();
                    if (r == null) {
                        return false;
                    }
                    yield o("WAPromiseDelays").delayMs(r);
                    const a = yield M();
                    return a != null;
                }
                if (e === "purge") {
                    o("WAWebMetaAiWaffleAuthTokenCache").clearMetaAiWaffleAuthTokenBlobCache();
                    yield $.purgeWaffleData();
                    yield o("WAWebSubscriptionAgeGating").invalidateSubscriptionAgeVerdict();
                    return true;
                    break e;
                }
                if (e === "pause") {
                    yield o("WAWebAccountLinkingHandler").handlePausedState();
                    return true;
                    break e;
                }
                if (e === "server_purge") {
                    const i = yield pe();
                    if (i) {
                        o("WAWebMetaAiWaffleAuthTokenCache").clearMetaAiWaffleAuthTokenBlobCache();
                        yield $.purgeWaffleData();
                        yield o("WAWebSubscriptionAgeGating").invalidateSubscriptionAgeVerdict();
                    }
                    return i;
                    break e;
                }
                if (e === "server_pause") {
                    const l = yield fe();
                    if (l) {
                        yield o("WAWebAccountLinkingHandler").handlePausedState();
                    }
                    return l;
                    break e;
                }
                if (e === "retry" || e === "handled" || e === "fail") {
                    return false;
                }
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
            }
        });
        return re.apply(this, arguments);
    }
    function oe() {
        return ae.apply(this, arguments);
    }
    function ae() {
        ae = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            N("refreshAccessToken");
            const e = te;
            if (e != null) {
                o("WAWebWaffleLifecycleWamLogger").logRefreshToken({
                    traceAction: o("WAWebWamEnumWaffleLifecycleTraceActionType").WAFFLE_LIFECYCLE_TRACE_ACTION_TYPE.REFRESH_TOKEN_DEDUPLICATED
                });
                return e;
            }
            te = ie().finally(()=>{
                te = null;
            });
            return te;
        });
        return ae.apply(this, arguments);
    }
    function ie() {
        return le.apply(this, arguments);
    }
    function le() {
        le = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = Date.now();
            o("WAWebWaffleLifecycleWamLogger").logRefreshToken({
                traceAction: o("WAWebWamEnumWaffleLifecycleTraceActionType").WAFFLE_LIFECYCLE_TRACE_ACTION_TYPE.REFRESH_TOKEN_INITIATED
            });
            const t = yield $.getAccountLinkingData();
            if (t == null) {
                se(e);
                return false;
            }
            const { fbid, nonce } = t;
            const i = yield o("WAWebAccountLinkingCryptoUtils").generateRSAKeys();
            const { privateKey, publicKey } = i;
            const client_pub_key = yield o("WAWebAccountLinkingCryptoUtils").cryptoKeyToPem(publicKey);
            const c = {
                version: 1,
                timestamp: Date.now(),
                nonce,
                client_pub_key,
                client_pub_key_type: "RSA 2048"
            };
            const d = yield o("WAWebAccountLinkingCryptoUtils").wrapWafflePayload(c);
            if (fbid != null) {
                const m = yield o("WASmaxWaffleRefreshAccessTokensRPC").sendRefreshAccessTokensRPC({
                    rSAEncryptionMetadataRSAEncryptionMetadataOrRSAEncryptionMetadataV2MixinGroupArgs: o("WAWebWaffleEncryptionMetadataArgs").waffleEncryptionMetadataArgs(d),
                    timestampElementValue: Date.now(),
                    fbidElementValue: fbid
                });
                if (m.name === "RefreshAccessTokensResponseSuccess") {
                    Z.reset();
                    const p = o("WAWebAPIParser").parseRSAEncryptionMetadataMixin(m.value.encryptionMetadataRSAEncryptionMetadataMixin);
                    const { data, key, nonce: nonce_1, tag } = p;
                    try {
                        const y = yield o("WAWebAccountLinkingCryptoUtils").decryptRSAEncryptedPayload(privateKey, key, data, nonce_1, tag);
                        if ("access_token" in y) {
                            yield $.updateAccesstoken(y.access_token);
                            o("WAWebMetaAiWaffleAuthTokenCache").refreshMetaAiWaffleAuthTokenBlob();
                            o("WAWebWaffleLifecycleWamLogger").logRefreshToken({
                                elapsedMs: Date.now() - e,
                                hasAccessToken: true,
                                pkiVersion: o("WAWebWaffleLifecycleWamLogger").mapPkiVersionToWam(d.version),
                                traceAction: o("WAWebWamEnumWaffleLifecycleTraceActionType").WAFFLE_LIFECYCLE_TRACE_ACTION_TYPE.REFRESH_TOKEN_SUCCESS
                            });
                            return true;
                        }
                        se(e);
                    } catch (error) {
                        o("WALogger").ERROR(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                            "[WAFFLE] Failed to refresh access token"
                        ]))).catching(r("getErrorSafe")(error));
                        se(e);
                    }
                } else {
                    let C;
                    const S = m.value.errorRefreshAccessTokensErrors;
                    const R = yield o("WAWebWaffleIQErrorHandler").handleCommonWaffleIQError("refreshAccessToken", S.name, d.version);
                    (C = o("WAWebWaffleLifecycleWamLogger")).logRefreshToken({
                        elapsedMs: Date.now() - e,
                        errorAction: C.mapIQErrorActionToWam(R),
                        errorCode: C.mapIQErrorNameToWamCode(S.name),
                        pkiVersion: C.mapPkiVersionToWam(d.version),
                        traceAction: o("WAWebWamEnumWaffleLifecycleTraceActionType").WAFFLE_LIFECYCLE_TRACE_ACTION_TYPE.REFRESH_TOKEN_ERROR
                    });
                    yield ne(R, Z);
                    o("WALogger").ERROR(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAFFLE] Refresh access token RPC failed: ",
                        ""
                    ])), S.name);
                }
            } else {
                se(e);
            }
            return false;
        });
        return le.apply(this, arguments);
    }
    function se(e) {
        o("WAWebWaffleLifecycleWamLogger").logRefreshToken({
            elapsedMs: Date.now() - e,
            hasAccessToken: false,
            traceAction: o("WAWebWamEnumWaffleLifecycleTraceActionType").WAFFLE_LIFECYCLE_TRACE_ACTION_TYPE.REFRESH_TOKEN_ERROR
        });
    }
    function ue() {
        return ce.apply(this, arguments);
    }
    function ce() {
        ce = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            N("ping");
            const e = Date.now();
            const t = yield $.getAccountLinkingData();
            if (t != null) {
                const { accesstoken, fbid } = t;
                if (accesstoken != null) {
                    const a = {
                        version: 1,
                        timestamp: Date.now(),
                        access_token: accesstoken
                    };
                    const i = yield o("WAWebAccountLinkingCryptoUtils").wrapWafflePayload(a);
                    if (fbid != null) {
                        const l = yield o("WASmaxWaffleWFPingRPC").sendWFPingRPC({
                            rSAEncryptionMetadataRSAEncryptionMetadataOrRSAEncryptionMetadataV2MixinGroupArgs: o("WAWebWaffleEncryptionMetadataArgs").waffleEncryptionMetadataArgs(i),
                            timestampElementValue: Date.now(),
                            fbidElementValue: fbid
                        });
                        if (l.name === "WFPingResponseSuccess") {
                            ee.reset();
                            const s = l.value.pingIntervalElementValue;
                            yield $.updatePingInterval(s);
                            o("WAWebWaffleLifecycleWamLogger").logPing({
                                elapsedMs: Date.now() - e,
                                hasAccessToken: true,
                                pkiVersion: o("WAWebWaffleLifecycleWamLogger").mapPkiVersionToWam(i.version)
                            });
                        } else {
                            let u;
                            const c = l.value.errorWfPingErrors;
                            const d = yield o("WAWebWaffleIQErrorHandler").handleCommonWaffleIQError("ping", c.name, i.version);
                            (u = o("WAWebWaffleLifecycleWamLogger")).logPing({
                                elapsedMs: Date.now() - e,
                                errorAction: u.mapIQErrorActionToWam(d),
                                errorCode: u.mapIQErrorNameToWamCode(c.name),
                                hasAccessToken: true,
                                pkiVersion: u.mapPkiVersionToWam(i.version)
                            });
                            yield ne(d, ee);
                            o("WALogger").ERROR(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                                "[WAFFLE] Ping failed: ",
                                ""
                            ])), c.name);
                        }
                    } else {
                        o("WAWebWaffleLifecycleWamLogger").logPing({
                            elapsedMs: Date.now() - e,
                            hasAccessToken: true
                        });
                        o("WALogger").ERROR(R || (R = babelHelpers.taggedTemplateLiteralLoose([
                            "[WAFFLE] Ping failed due to null waEntFbid"
                        ])));
                    }
                }
            }
        });
        return ce.apply(this, arguments);
    }
    function de() {
        return me.apply(this, arguments);
    }
    function me() {
        me = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            N("stateExists");
            const e = yield o("WASmaxWaffleStateExistsRPC").sendStateExistsRPC({
                timestampElementValue: Date.now()
            });
            if (e.name === "StateExistsResponseSuccess") {
                const t = o("WAWebAccountLinkingConstants").AccountLinkingStateExists.cast(e.value.wfStateElementValue);
                if (t != null) {
                    return t;
                }
                o("WALogger").ERROR(L || (L = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] Failed to parse state exists response"
                ])));
            } else {
                const n = e.value.errorStateExistsErrors;
                yield o("WAWebWaffleIQErrorHandler").handleCommonWaffleIQError("stateExists", n.name);
                o("WALogger").ERROR(E || (E = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] StateExists RPC failed: ",
                    ""
                ])), n.name);
            }
        });
        return me.apply(this, arguments);
    }
    function pe() {
        return _e.apply(this, arguments);
    }
    function _e() {
        _e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            N("forceDeleteState");
            const e = yield o("WASmaxWaffleForceDeleteStateRPC").sendForceDeleteStateRPC({
                timestampElementValue: Math.floor(Date.now() / 1000)
            });
            if (e.name === "ForceDeleteStateResponseSuccess") {
                return true;
            }
            const errorForceDeleteStateErrors = e.value.errorForceDeleteStateErrors;
            o("WALogger").ERROR(k || (k = babelHelpers.taggedTemplateLiteralLoose([
                "[WAFFLE] ForceDeleteState RPC failed: ",
                ""
            ])), errorForceDeleteStateErrors.name).sendLogs("waffle-force-delete-state-failed");
            return false;
        });
        return _e.apply(this, arguments);
    }
    function fe() {
        return ge.apply(this, arguments);
    }
    function ge() {
        ge = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            N("forceSuspendState");
            const e = yield o("WASmaxWaffleForceSuspendStateRPC").sendForceSuspendStateRPC({
                timestampElementValue: Math.floor(Date.now() / 1000)
            });
            if (e.name === "ForceSuspendStateResponseSuccess") {
                return true;
            }
            const errorForceSuspendStateErrors = e.value.errorForceSuspendStateErrors;
            o("WALogger").ERROR(I || (I = babelHelpers.taggedTemplateLiteralLoose([
                "[WAFFLE] ForceSuspendState RPC failed: ",
                ""
            ])), errorForceSuspendStateErrors.name).sendLogs("waffle-force-suspend-state-failed", {
                sampling: 0.01
            });
            return false;
        });
        return ge.apply(this, arguments);
    }
    function he() {
        return ye.apply(this, arguments);
    }
    function ye() {
        ye = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            N("fetchServiceData");
            const e = yield $.getAccountLinkingData();
            if (e != null) {
                const accessToken = e.accesstoken;
                let n;
                try {
                    n = yield o("WAWebRelayClient").commitMutation(r("WAWebWaffleFXServiceDataQueryV2Mutation"), {}, {
                        accessToken
                    });
                } catch (error) {
                    const a = error instanceof o("WAWebGraphQLServerError").GraphQLServerError ? o("WAWebGraphQLServerError").formatGraphQLServerError(error) : error;
                    o("WALogger").ERROR(T || (T = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAFFLE] fetchServiceData mutation failed: ",
                        ""
                    ])), a).tags("waffle", "account-linking").sendLogs("waffle-fetch-service-data-mutation-failed", {
                        sampling: 0.01
                    });
                    return;
                }
                if (n == null) {
                    o("WALogger").ERROR(D || (D = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAFFLE] Fetching service data result"
                    ])));
                    return;
                }
                const i = o("WAWebAPIParser").parseServiceData(n);
                if (i == null) {
                    o("WALogger").ERROR(x || (x = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAFFLE] Fetching service data failed"
                    ])));
                    return;
                }
                yield $.updateServiceData(i);
            }
        });
        return ye.apply(this, arguments);
    }
    l.assertModeAllowed = N;
    l.fetchValidCertificate = M;
    l.forceWafflePkiV2ForDebug = G;
    l.runWaffleGetCertsForDebug = Q;
    l.handleRecoveryAction = ne;
    l.refreshAccessToken = oe;
    l.ping = ue;
    l.stateExists = de;
    l.fetchServiceData = he;
}, 98);