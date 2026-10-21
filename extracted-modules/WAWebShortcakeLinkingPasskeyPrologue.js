__d("WAWebShortcakeLinkingPasskeyPrologue", [
    "WABase64",
    "WALogger",
    "WASmaxMdGetRefRPC",
    "WASmaxMdSetPasskeyPrologueRPC",
    "WAWebCompanionPlatformType",
    "WAWebShortcakeLinkingApi",
    "WAWebShortcakeLinkingHandoffProof",
    "WAWebShortcakeLinkingRequestOptionsCache",
    "asyncToGeneratorRuntime",
    "err",
    "unsafeCast"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "Shortcake prologue: starting WebAuthn assertion"
            ])));
            const a = self.navigator?.credentials;
            if (a == null) {
                throw r("err")("Shortcake prologue: WebAuthn not available");
            }
            const i = new TextDecoder().decode(t);
            const publicKey = JSON.parse(i);
            if (publicKey.challenge != null) {
                publicKey.challenge = o("WABase64").decodeB64UrlSafe(publicKey.challenge);
            }
            if (Array.isArray(publicKey.allowCredentials)) {
                for (const s of publicKey.allowCredentials){
                    if (s.id != null) {
                        s.id = o("WABase64").decodeB64UrlSafe(s.id);
                    }
                }
            }
            const u = yield a.get({
                publicKey
            });
            if (u == null || u.type !== "public-key") {
                throw r("err")("Shortcake prologue: WebAuthn ceremony returned no credential");
            }
            const c = r("unsafeCast")(u);
            const { rawId, response } = c;
            const p = {
                id: c.id,
                rawId: o("WABase64").encodeB64UrlSafe(rawId),
                type: c.type,
                response: {
                    clientDataJSON: o("WABase64").encodeB64UrlSafe(response.clientDataJSON),
                    authenticatorData: o("WABase64").encodeB64UrlSafe(response.authenticatorData),
                    signature: o("WABase64").encodeB64UrlSafe(response.signature),
                    userHandle: response.userHandle ? o("WABase64").encodeB64UrlSafe(response.userHandle) : null
                }
            };
            const assertionJson = new TextEncoder().encode(JSON.stringify(p));
            return {
                assertionJson,
                credentialId: new Uint8Array(rawId)
            };
        });
        return p.apply(this, arguments);
    }
    function _() {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "Shortcake prologue: requesting CompanionRef"
            ])));
            const e = yield o("WASmaxMdGetRefRPC").sendGetRefRPC();
            if (e.name !== "GetRefResponseSuccess") {
                throw r("err")("Shortcake prologue: GetRef IQ failed");
            }
            const refElementValue = e.value.refElementValue;
            return new TextDecoder().decode(refElementValue);
        });
        return f.apply(this, arguments);
    }
    function g() {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "Shortcake prologue: starting"
            ])));
            try {
                const e = yield o("WAWebShortcakeLinkingRequestOptionsCache").getRequestOptions();
                const t = yield m(e);
                const { assertionJson, credentialId } = t;
                const i = yield _();
                const l = yield o("WAWebShortcakeLinkingApi").initializeShortcakeLinking(i, r("WAWebCompanionPlatformType")());
                const s = o("WAWebShortcakeLinkingHandoffProof").getHandoffKeyHolder().peek();
                let pairingHandoffProofArgs;
                if (s != null) {
                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "Shortcake prologue: including pairing handoff proof"
                    ])));
                    const f = yield o("WAWebShortcakeLinkingHandoffProof").computePairingHandoffProof(s, l);
                    pairingHandoffProofArgs = {
                        pairingHandoffProofElementValue: new Uint8Array(f)
                    };
                }
                yield o("WASmaxMdSetPasskeyPrologueRPC").sendSetPasskeyPrologueRPC({
                    credentialIdElementValue: credentialId,
                    webauthnAssertionElementValue: assertionJson,
                    prologuePayloadElementValue: new Uint8Array(l),
                    pairingHandoffProofArgs
                });
                if (s != null) {
                    o("WAWebShortcakeLinkingApi").setSkipHandoffUx();
                    o("WAWebShortcakeLinkingHandoffProof").getHandoffKeyHolder().clear();
                }
                o("WAWebShortcakeLinkingApi").markPrologueSent();
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "Shortcake prologue: IQ sent -> WaitingForPrimaryIdentity"
                ])));
            } catch (error) {
                o("WAWebShortcakeLinkingRequestOptionsCache").clearCachedRequestOptions();
                o("WAWebShortcakeLinkingApi").cancelShortcakeLinking();
                throw error;
            }
        });
        return h.apply(this, arguments);
    }
    l.executePasskeyPrologue = g;
}, 98);