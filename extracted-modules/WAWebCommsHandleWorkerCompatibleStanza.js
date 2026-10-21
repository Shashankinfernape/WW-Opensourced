__d("WAWebCommsHandleWorkerCompatibleStanza", [
    "WAParsableWapNode",
    "WAWebCommsHandleMessagingStanza",
    "WAWebCommsHandleStanzaUtils",
    "WAWebCreateNackFromStanza",
    "WAWebHandleGroupNotification",
    "WAWebHandleIdentityChange",
    "WAWebHandleNewsletterMsg",
    "WAWebHandleNewsletterStatus",
    "WAWebHandleVoipCallReceipt",
    "WAWebNewsletterGatingUtils",
    "WAWebPostUnknownStanzaMetric",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebWamWorkerOfflineProcessReporter",
    "WAWebWid",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (!o("WAWebRuntimeEnvironmentUtils").isWorker()) {
                return e;
            }
            const t = yield e;
            o("WAWebWamWorkerOfflineProcessReporter").WorkerOfflineResumeReporter.updateProcessedNotificationCount();
            return t;
        });
        return s.apply(this, arguments);
    }
    function u(t) {
        const n = o("WAWebCommsHandleMessagingStanza").handleMessagingStanza(t);
        if (n != null) {
            return n;
        }
        const a = t.attrs;
        switch(t.tag){
            case "notification":
                {
                    switch(a.type){
                        case "w:gp2":
                            return e(o("WAWebHandleGroupNotification").handleGroupNotification(t)).catch((e)=>c(t, r("getErrorSafe")(e)));
                        case "encrypt":
                            {
                                const i = t.content;
                                if (!Array.isArray(i) || !i.length) {
                                    break;
                                }
                                const l = i[0].tag;
                                switch(l){
                                    case "identity":
                                        return e(o("WAWebHandleIdentityChange").handleE2eIdentityChange(t)).catch((e)=>c(t, r("getErrorSafe")(e)));
                                }
                                break;
                            }
                    }
                    break;
                }
            case "message":
                {
                    const s = t.attrs.from;
                    if (r("WAWebWid").isNewsletter(s?.toString())) {
                        return r("WAWebHandleNewsletterMsg")(t).catch((e)=>o("WAWebCommsHandleStanzaUtils").handleMessageParsingFailure(t, r("getErrorSafe")(e)));
                    }
                    break;
                }
            case "status":
                {
                    const u = t.attrs.from;
                    if (r("WAWebWid").isNewsletter(u?.toString()) && o("WAWebNewsletterGatingUtils").isNewsletterStatusReceiverEnabled()) {
                        return r("WAWebHandleNewsletterStatus")(t).catch((e)=>o("WAWebCommsHandleStanzaUtils").handleMessageParsingFailure(t, r("getErrorSafe")(e)));
                    }
                    break;
                }
            case "receipt":
                try {
                    if (o("WAWebCommsHandleStanzaUtils").isCallReceipt(t)) {
                        return o("WAWebHandleVoipCallReceipt").handleCallReceipt(t);
                    }
                } catch (e) {
                    if (e instanceof o("WAParsableWapNode").XmppParsingFailure) {
                        o("WAWebPostUnknownStanzaMetric").postUnknownStanzaMetric(t);
                        return o("WAWebCreateNackFromStanza").createNackFromStanza(t, o("WAWebCreateNackFromStanza").NackReason.ParsingError);
                    }
                    return o("WAWebCreateNackFromStanza").createNackFromStanza(t, o("WAWebCreateNackFromStanza").NackReason.UnhandledError);
                }
        }
    }
    function c(e, t) {
        if (t instanceof o("WAParsableWapNode").XmppParsingFailure) {
            o("WAWebPostUnknownStanzaMetric").postUnknownStanzaMetric(e);
            return o("WAWebCreateNackFromStanza").createNackFromStanza(e, o("WAWebCreateNackFromStanza").NackReason.ParsingError);
        }
        return o("WAWebCreateNackFromStanza").createNackFromStanza(e, o("WAWebCreateNackFromStanza").NackReason.UnhandledError);
    }
    l.handleWorkerCompatibleStanza = u;
}, 98);