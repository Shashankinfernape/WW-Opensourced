__d("WAWebHandleMessageRetryRequest", [
    "Promise",
    "WALogger",
    "WAWap",
    "WAWebABProps",
    "WAWebCommsWapMd",
    "WAWebCreateReceiptStanzaReceiveMetric",
    "WAWebHandleRetryRequest",
    "WAWebRetryRequestParser",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const a = o("WAWebCreateReceiptStanzaReceiveMetric").createRetryReceiptStanzaReceiveMetric();
            const i = r("WAWebRetryRequestParser").parse(t);
            if (i.error) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Parsing Error: ",
                    ""
                ])), i.error.toString());
                return (u || (u = n("Promise"))).reject(i.error);
            }
            const i_success = i.success;
            const { from, participant, stanzaId, type } = i_success;
            if (stanzaId == null) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Received null stanzaID when handling message retry request"
                ])));
                return (u || (u = n("Promise"))).reject(r("err")("Received null stanzaID when handling message retry request"));
            }
            const _ = o("WAWap").wap("ack", {
                id: o("WAWap").CUSTOM_STRING(stanzaId),
                to: o("WAWebCommsWapMd").JID(from),
                participant: participant ? o("WAWebCommsWapMd").DEVICE_JID(participant) : o("WAWap").DROP_ATTR,
                class: "receipt",
                type: "retry"
            });
            try {
                yield o("WAWebHandleRetryRequest").handleRetryRequest(i_success);
            } finally{
                if (o("WAWebABProps").getABPropConfigValue("web_retry_receipt_logging_enabled")) {
                    a({
                        from,
                        type
                    });
                }
            }
            return _;
        });
        return d.apply(this, arguments);
    }
    l.handleMessageRetryRequest = c;
}, 98);