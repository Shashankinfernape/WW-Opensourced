__d("WAWebHandleVoipCallReceipt", [
    "Promise",
    "WADeprecatedWapParser",
    "WALogger",
    "WAParsableWapNode",
    "WAWap",
    "WAWebCommsWapMd",
    "WAWebJidToWid",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebVoipBootInitDecision",
    "WAWebVoipDeferredBootLogging",
    "WAWebVoipInitEventEmitter",
    "WAWebVoipPeerTcToken",
    "WAWebVoipStackInterface",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    const d = new (r("WADeprecatedWapParser"))("callReceiptParser", function(e) {
        e.assertTag("receipt");
        const t = e.maybeChild("offer") || e.maybeChild("accept") || e.maybeChild("reject");
        if (!t) {
            throw e.createParseError("Unrecognized call stanza");
        }
        return {
            stanzaId: e.attrString("id"),
            type: e.maybeAttrString("type"),
            from: o("WAWebJidToWid").jidWithTypeToWid(e.attrJidWithType("from"))
        };
    });
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = d.parse(e);
            if (t.error) {
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "Parsing Error: ",
                    ""
                ])), t.error.toString());
                return (c || (c = n("Promise"))).reject(t.error);
            }
            const r = t.success;
            const { from: a, stanzaId: i, type: l } = r;
            if (_()) {
                const s = yield (c || (c = n("Promise"))).all([
                    o("WAWebVoipStackInterface").getVoipStackInterface(),
                    o("WAWebVoipPeerTcToken").fetchPeerTcToken(a)
                ]);
                const m = s[0];
                const p = s[1];
                yield m?.handleIncomingSignalingReceipt(new (o("WAParsableWapNode")).ParsableWapNode("receipt", e), a.toString({
                    legacy: true,
                    formatIncludeDevice: true
                }), p);
            }
            return o("WAWap").wap("ack", {
                id: o("WAWap").CUSTOM_STRING(i),
                to: o("WAWebCommsWapMd").JID(a),
                class: "receipt",
                type: o("WAWap").MAYBE_CUSTOM_STRING(l)
            });
        });
        return p.apply(this, arguments);
    }
    function _() {
        if (o("WAWebRuntimeEnvironmentUtils").isWorker()) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: call receipt dropped reason=worker_realm"
            ])));
            return false;
        }
        if (o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInited() || !o("WAWebVoipBootInitDecision").isDeferredVoipBootInitEnabled()) {
            return true;
        }
        o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(function() {
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [deferred-boot] receipt dropped reason=not_inited"
            ])));
        });
        return false;
    }
    l.handleCallReceipt = m;
}, 98);