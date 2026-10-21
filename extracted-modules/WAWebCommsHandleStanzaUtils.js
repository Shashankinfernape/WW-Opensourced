__d("WAWebCommsHandleStanzaUtils", [
    "WAJids",
    "WALogger",
    "WAParsableWapNode",
    "WAWeb-dexie",
    "WAWebCreateNackFromStanza",
    "WAWebPostIncomingMessageDropMetric",
    "WAWebPostUnknownStanzaMetric",
    "WAWebWid"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    function m(t, n) {
        if (p(t)) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "handleMsg: drop msg with username field"
            ]))).catching(n).tags("messaging", "username").sendLogs(r("WAWebWid").isGroup(t.attrs.from?.toString()) ? "incoming-message-drop-internal-error-username-group" : "incoming-message-drop-internal-error-username");
        }
        if (n instanceof o("WAParsableWapNode").XmppParsingFailure) {
            o("WAWebPostUnknownStanzaMetric").postUnknownStanzaMetric(t);
            o("WAWebPostIncomingMessageDropMetric").postIncomingMessageDropInvalidStanza(t);
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "handleMsg: error while parsing message: ",
                ""
            ])), n).tags("messaging").sendLogs("failedParsingMessageStanza", {
                sampling: 0.01
            });
            return o("WAWebCreateNackFromStanza").createNackFromStanza(t, o("WAWebCreateNackFromStanza").NackReason.ParsingError);
        }
        if (n instanceof r("WAWeb-dexie").DexieError) {
            o("WAWebPostIncomingMessageDropMetric").postIncomingMessageDropDBOperationFailed(t);
            o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "handleMsg: drop msg"
            ]))).catching(n).sendLogs("incoming-message-drop-db-operation-failed", {
                sampling: 0.01
            });
            return;
        }
        o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
            "handleMsg: drop msg, node: ",
            ""
        ])), o("WAJids").maybeSanitizeLogLineText(t.toString())).verbose();
        o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
            "handleMsg: drop msg"
        ]))).catching(n).sendLogs("incoming-message-drop-internal-error", {
            sampling: 0.01
        });
        o("WAWebPostIncomingMessageDropMetric").postIncomingMessageDropInternalError(t);
        return o("WAWebCreateNackFromStanza").createNackFromStanza(t, o("WAWebCreateNackFromStanza").NackReason.UnhandledError);
    }
    function p(e) {
        const t = e.attrs;
        if (t.username != null || t.participant_username != null || t.peer_recipient_username != null || t.recipient_username != null) {
            return true;
        }
        const n = e.content;
        return Array.isArray(n) && n.some((e)=>p(e));
    }
    function _(e) {
        if (Array.isArray(e.content) && e.content.length > 0) {
            const t = e.content[0].tag;
            return t === "offer" || t === "accept" || t === "reject";
        }
        return false;
    }
    l.handleMessageParsingFailure = m;
    l.isCallReceipt = _;
}, 98);