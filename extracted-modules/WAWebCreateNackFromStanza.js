__d("WAWebCreateNackFromStanza", [
    "$InternalEnum",
    "WALogger",
    "WAWap",
    "WAWebCurrentUser",
    "WAWebPostUnknownStanzaMetric",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    const _ = n("$InternalEnum")({
        UnsupportedMessage: 415,
        InvalidReportingToken: 420,
        MissingReportingToken: 421,
        ParsingError: 487,
        UnrecognizedStanza: 488,
        UnrecognizedStanzaClass: 489,
        UnrecognizedStanzaType: 490,
        InvalidProtobuf: 491,
        InvalidHostedCompanionStanza: 493,
        MissingMessageSecret: 495,
        SignalErrorOldCounter: 496,
        MessageDeletedOnPeer: 499,
        UnhandledError: 500,
        UnsupportedAdminRevoke: 550,
        UnsupportedLIDGroup: 551,
        DBOperationFailed: 552
    });
    function f(t, n) {
        const l = t?.tag;
        const p = t?.attrs?.id;
        const f = t?.attrs?.type?.toString();
        const h = _.getName(n);
        try {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "createNackFromStanza: class: '",
                "' type: '",
                "' id: '",
                "' reason: '",
                "'"
            ])), l, f, p, h);
            if (l === "receipt" && n === _.UnrecognizedStanza) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Unrecognized receipt stanza: type: '",
                    "'"
                ])), f).sendLogs("unrecognized-receipt-stanza", {
                    sampling: o("WAWebCurrentUser").isEmployee() ? 1 : 0.001
                });
            }
            if (t.attrs.type?.toString() === "text" && t.tag === "message") {
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "createNackFromStanza: unknown text type stanza"
                ]))).sendLogs("createNackFromStanza-unknown-text-type-stanza", {
                    sampling: 0.01
                });
            }
            if (p != null && t?.attrs?.from != null) {
                return g(t, n);
            }
            o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "[createNackFromStanza] fail: id/from null cls=",
                " type=",
                " reason=",
                ""
            ])), l, f, h);
            o("WAWebPostUnknownStanzaMetric").postUnknownStanzaMetric(t);
        } catch (error) {
            o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "[createNackFromStanza] fail cls=",
                " type=",
                " id=",
                " reason=",
                ""
            ])), l, f, p, h);
            const v = r("getErrorSafe")(error);
            o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "createNackFromStanza: failed with unhandled reason: ",
                ""
            ])), v.message ?? error).sendLogs("send-nack-exception");
        }
        return "NO_ACK";
    }
    function g(e, t) {
        const e_attrs = e.attrs;
        if (t === _.UnrecognizedStanza) {
            return o("WAWap").wap("ack", {
                class: o("WAWap").CUSTOM_STRING(e.tag),
                id: e_attrs.id,
                to: e_attrs.from,
                type: e_attrs.type || o("WAWap").DROP_ATTR,
                participant: e_attrs.participant || o("WAWap").DROP_ATTR,
                error: o("WAWap").INT(t)
            });
        }
        switch(e.tag){
            case "notification":
                return o("WAWap").wap("ack", {
                    class: "notification",
                    id: e_attrs.id,
                    to: e_attrs.from,
                    type: e_attrs.type || o("WAWap").DROP_ATTR,
                    participant: e_attrs.participant || o("WAWap").DROP_ATTR,
                    error: o("WAWap").INT(t)
                });
            case "message":
                return o("WAWap").wap("ack", {
                    class: "message",
                    id: e_attrs.id,
                    to: e_attrs.from,
                    type: e_attrs.type || o("WAWap").DROP_ATTR,
                    participant: e_attrs.participant || o("WAWap").DROP_ATTR,
                    error: o("WAWap").INT(t)
                });
            case "receipt":
                return o("WAWap").wap("ack", {
                    class: "receipt",
                    id: e_attrs.id,
                    to: e_attrs.from,
                    type: e_attrs.type || o("WAWap").DROP_ATTR,
                    participant: e_attrs.participant || o("WAWap").DROP_ATTR,
                    error: o("WAWap").INT(t)
                });
            case "status":
                return o("WAWap").wap("ack", {
                    class: "status",
                    id: e_attrs.id,
                    to: e_attrs.from,
                    type: e_attrs.type || o("WAWap").DROP_ATTR,
                    participant: e_attrs.participant || o("WAWap").DROP_ATTR,
                    error: o("WAWap").INT(t)
                });
            default:
                o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "sendNack called with unsupported stanza tag: ",
                    ""
                ])), e.tag).sendLogs("unsupported-nack");
                o("WAWebPostUnknownStanzaMetric").postUnknownStanzaMetric(e);
                return "NO_ACK";
        }
    }
    l.NackReason = _;
    l.createNackFromStanza = f;
}, 98);