__d("WAWebGalaxyFlowsUnifiedEncryptionVerifier", [
    "Promise",
    "WABase64",
    "WALogger",
    "WAWebApiDeviceList",
    "WAWebCryptoCurve25519",
    "WAWebCryptoCurve25519VerifySignature",
    "WAWebGalaxyFlowsError",
    "WAWebGalaxyFlowsIdentityFetcher",
    "WAWebSignalCommonUtils",
    "WAWebSignalProtocolStore",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    const d = (()=>{
        function t() {}
        const t_prototype = t.prototype;
        t_prototype.arePublicKeyWithSignatureValid = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ callback, contactId, publicKeyPem, publicKeySignature }) {
                const identityWids = yield this.$1(contactId);
                const i = yield this.$2({
                    identityWids,
                    publicKeyPem,
                    publicKeySignature
                });
                if (i === "valid") {
                    callback.onComplete(true);
                } else {
                    yield this.$3(identityWids, publicKeyPem, publicKeySignature, callback);
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.$3 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, r, a) {
                const i = this;
                return new (c || (c = n("Promise")))(function(l, s) {
                    o("WAWebGalaxyFlowsIdentityFetcher").GalaxyFlowsIdentityFetcher.fetchIdentitiesFor(e, {
                        onComplete: (()=>{
                            const o = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                                try {
                                    yield i.$4(e, t, r, a);
                                    l();
                                } catch (error) {
                                    s(error);
                                }
                            });
                            function u() {
                                return o.apply(this, arguments);
                            }
                            return u;
                        })()
                    }).catch(s);
                });
            });
            function t(t, n, r, o) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.$4 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(identityWids, publicKeyPem, publicKeySignature, r) {
                const a = yield this.$2({
                    identityWids,
                    publicKeyPem,
                    publicKeySignature
                });
                if (a === "missing_identity_key") {
                    throw new (o("WAWebGalaxyFlowsError")).WaeGalaxyFlowError(o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetadataErrors.MISSING_IDENTITY_KEY);
                }
                if (a === "identity_key_load_error") {
                    throw new (o("WAWebGalaxyFlowsError")).WaeGalaxyFlowError(o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetadataErrors.PUBLIC_KEY_SIGNATURE_VERIFICATION_EXCEPTION);
                }
                const i = a === "valid";
                try {
                    r.onComplete(i);
                } catch (error) {
                    throw error;
                }
            });
            function t(t, n, r, o) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.$1 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = yield m(e);
                if (t == null) {
                    return [
                        e
                    ];
                }
                const n = t.devices.map((e)=>o("WAWebWidFactory").createDeviceWidFromDeviceListPk(t.id, e.id, e.isHosted)).filter((e)=>e.isHosted());
                if (n.length > 0) {
                    return n;
                }
                return [
                    e
                ];
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.$2 = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ identityWids, publicKeyPem, publicKeySignature }) {
                if (publicKeyPem == null || publicKeySignature == null) {
                    return "invalid";
                }
                try {
                    const s = yield (c || (c = n("Promise"))).all(identityWids.map(_));
                    const u = new Uint8Array(o("WABase64").decodeB64(publicKeyPem));
                    const d = new Uint8Array(o("WABase64").decodeB64(publicKeySignature));
                    let m = false;
                    let p = false;
                    for (const f of s){
                        if (f.status === "failed") {
                            p = true;
                            continue;
                        }
                        const g = f.value;
                        if (g != null) {
                            m = true;
                            const h = o("WAWebCryptoCurve25519").toCurveKeyPubKey(o("WAWebSignalCommonUtils").strToBuffer(g));
                            if (o("WAWebCryptoCurve25519VerifySignature").verifySignature(new Uint8Array(h), u, d)) {
                                return "valid";
                            }
                        }
                    }
                    if (p) {
                        return "identity_key_load_error";
                    }
                    if (m) {
                        return "invalid";
                    }
                    return "missing_identity_key";
                } catch (error) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[GALAXY_FLOW] Public key signature verification failed"
                    ]))).catching(r("getErrorSafe")(error)).sendLogs("galaxy-flow-public-key-verification-failed");
                    throw new (o("WAWebGalaxyFlowsError")).WaeGalaxyFlowError(o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetadataErrors.PUBLIC_KEY_SIGNATURE_VERIFICATION_EXCEPTION);
                }
            });
            function a(e) {
                return t.apply(this, arguments);
            }
            return a;
        })();
        return t;
    })();
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                const t = yield o("WAWebApiDeviceList").getDeviceIds([
                    e
                ], true);
                const n = t[0];
                return n;
            } catch (error) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[GALAXY_FLOW] Device list lookup failed"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("galaxy-flow-device-list-lookup-failed");
                return null;
            }
        });
        return p.apply(this, arguments);
    }
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                return {
                    status: "loaded",
                    value: yield o("WAWebSignalProtocolStore").getPersistSignalProtocolStore().loadIdentityKey(o("WAWebSignalCommonUtils").createSignalAddress(e).toString())
                };
            } catch (error) {
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[GALAXY_FLOW] Identity key load failed"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("galaxy-flow-identity-key-load-failed");
                return {
                    status: "failed"
                };
            }
        });
        return f.apply(this, arguments);
    }
    const g = new d;
    l.UnifiedEncryptionVerifier = g;
}, 98);