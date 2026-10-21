__d("WAWebShortcakeLinkingHandlePasskeyPrologueRequest", [
    "WABase64",
    "WALogger",
    "WASmaxMdPasskeyPrologueRequestNotificationRPC",
    "WASmaxMessageFallbackDeliverRPC",
    "WASmaxParsingFailure",
    "WAWebAdvSignatureApi",
    "WAWebBackendApi",
    "WAWebCreateNackFromStanza",
    "WAWebShortcakeLinkingApi",
    "WAWebShortcakeLinkingDbscRegistration",
    "WAWebShortcakeLinkingHandoffProof",
    "WAWebShortcakeLinkingRequestOptionsCache",
    "WAWebUserPrefsMultiDevice",
    "asyncToGeneratorRuntime",
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
    const f = 32;
    function g() {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            o("WAWebShortcakeLinkingHandoffProof").getHandoffKeyHolder().clear();
            try {
                const t = o("WAWebUserPrefsMultiDevice").getADVSecretKey();
                if (t != null) {
                    const n = o("WABase64").decodeB64(t);
                    if (n.byteLength === f) {
                        const a = yield o("WAWebShortcakeLinkingHandoffProof").derivePairingHandoffHmacKey(n);
                        o("WAWebShortcakeLinkingHandoffProof").getHandoffKeyHolder().stash(a);
                        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "Shortcake handoff: stashed handoff key"
                        ])));
                    } else {
                        o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "Shortcake handoff: unexpected secret length ",
                            ""
                        ])), n.byteLength);
                    }
                } else {
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "Shortcake handoff: no prior secret"
                    ])));
                }
            } catch (error) {
                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "Shortcake handoff: derivation failed"
                ]))).catching(r("getErrorSafe")(error)).tags("wa-ice", "wa_app_compromise", "shortcake").sendLogs("shortcake-handoff-derivation-failed");
            }
            yield o("WAWebAdvSignatureApi").generateADVSecretKey();
        });
        return h.apply(this, arguments);
    }
    function y(e) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            let t;
            try {
                t = o("WASmaxMdPasskeyPrologueRequestNotificationRPC").receivePasskeyPrologueRequestNotificationRPC(e);
            } catch (error) {
                if (error instanceof o("WASmaxParsingFailure").SmaxParsingFailure) {
                    o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[shortcake] parse passkey_prologue_request"
                    ]))).catching(r("getErrorSafe")(error)).tags("wa-ice", "wa_app_compromise", "shortcake").sendLogs("shortcake-passkey-prologue-request-parse-failed");
                    return o("WASmaxMessageFallbackDeliverRPC").makeDeliverResponseBadStanza({
                        ackError: o("WAWebCreateNackFromStanza").NackReason.ParsingError
                    }, e);
                }
                throw error;
            }
            const n = t;
            const { makePasskeyPrologueRequestNotificationResponseAck, parsedRequest } = n;
            const parsedRequest_passkeyRequestOptions = parsedRequest.passkeyRequestOptions;
            if (parsedRequest_passkeyRequestOptions != null) {
                o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[shortcake] caching embedded PasskeyRequestOptions"
                ])));
                o("WAWebShortcakeLinkingRequestOptionsCache").setCachedRequestOptions(parsedRequest_passkeyRequestOptions.elementValue);
            } else {
                o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[shortcake] passkey_prologue_request: no embedded options"
                ])));
            }
            const parsedRequest_dbscRegistration = parsedRequest.dbscRegistration;
            if (parsedRequest_dbscRegistration != null) {
                o("WAWebShortcakeLinkingDbscRegistration").startDbscRegistration(parsedRequest_dbscRegistration.elementValue);
            }
            if (o("WAWebShortcakeLinkingApi").getShortcakeLinkingStage() === o("WAWebShortcakeLinkingApi").ShortcakeLinkingStage.NotStarted) {
                yield g();
            } else {
                o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "Shortcake handoff: in progress, skip stash + ADV rotate"
                ])));
            }
            o("WAWebBackendApi").frontendFireAndForget("passkeyPrologueRequest", {});
            return makePasskeyPrologueRequestNotificationResponseAck();
        });
        return C.apply(this, arguments);
    }
    l.handlePasskeyPrologueRequestNotification = y;
}, 98);