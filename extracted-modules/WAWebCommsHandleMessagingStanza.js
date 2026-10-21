__d("WAWebCommsHandleMessagingStanza", [
    "WAParsableWapNode",
    "WAWap",
    "WAWebCommsClassifyStatusStanza",
    "WAWebCommsHandleStanzaUtils",
    "WAWebCreateNackFromStanza",
    "WAWebHandleMsg",
    "WAWebHandleMsgReceipt",
    "WAWebPostUnknownStanzaMetric",
    "WAWebStatusGatingUtils",
    "WAWebWid",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const n = e.attrs;
        let a = false;
        let i = false;
        if (e.tag === "status" && !r("WAWebWid").isNewsletter(n.from?.toString())) {
            const u = o("WAWebStatusGatingUtils").isStatusDeliverViaSmaxEnabled() ? o("WAWebCommsClassifyStatusStanza").classifyIncomingStatusStanza(e) : null;
            a = u?.isGroupStatus ?? r("WAWebWid").isGroup(n.from?.toString());
            i = true;
            e.tag = "message";
        }
        switch(e.tag){
            case "message":
                {
                    const c = e.attrs.from;
                    if (!r("WAWebWid").isNewsletter(c?.toString())) {
                        return r("WAWebHandleMsg")(e, {
                            isGroupStatusStanza: a,
                            isStatusStanza: i
                        }).catch((t)=>{
                            const n = i ? new (o("WAWap")).WapNode("status", e.attrs, e.content) : e;
                            return o("WAWebCommsHandleStanzaUtils").handleMessageParsingFailure(n, r("getErrorSafe")(t));
                        });
                    }
                }
                break;
            case "receipt":
                try {
                    if (!o("WAWebCommsHandleStanzaUtils").isCallReceipt(e) && n.type !== "retry" && n.type !== "enc_rekey_retry") {
                        return r("WAWebHandleMsgReceipt")(e);
                    }
                } catch (t) {
                    if (t instanceof o("WAParsableWapNode").XmppParsingFailure) {
                        o("WAWebPostUnknownStanzaMetric").postUnknownStanzaMetric(e);
                        return o("WAWebCreateNackFromStanza").createNackFromStanza(e, o("WAWebCreateNackFromStanza").NackReason.ParsingError);
                    }
                    return o("WAWebCreateNackFromStanza").createNackFromStanza(e, o("WAWebCreateNackFromStanza").NackReason.UnhandledError);
                }
        }
    }
    l.handleMessagingStanza = e;
}, 98);