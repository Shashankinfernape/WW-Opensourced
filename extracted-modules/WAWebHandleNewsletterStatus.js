__d("WAWebHandleNewsletterStatus", [
    "WALogger",
    "WASmaxStatusDeliverIncomingNewsletterStatusRPC",
    "WAWebBackendApi",
    "WAWebHandleMsgError",
    "WAWebHandleMsgTypes.flow",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebJidToWid",
    "WAWebMessageProcessorCache",
    "WAWebMessageQueue",
    "WAWebMessageQueueTimeout",
    "WAWebNewsletterStatusUtils",
    "WAWebOfflineHandler",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            let t = false;
            try {
                const i = o("WASmaxStatusDeliverIncomingNewsletterStatusRPC").receiveIncomingNewsletterStatusRPC(e);
                const { makeIncomingNewsletterStatusResponseSuccess: l, parsedRequest: d } = i;
                const m = l();
                const f = o("WAWebJidToWid").jidWithTypeToWid({
                    jidType: "newsletter",
                    newsletterJid: d.from
                });
                const g = d.newsletterStatusContentTypeMixins;
                switch(g.name){
                    case "StatusNewsletterReaction":
                    case "StatusNewsletterReactionRevoke":
                        return m;
                    default:
                        break;
                }
                let h = d.offlineMixin?.offline != null;
                if (h) {
                    o("WAWebOfflineHandler").OfflineMessageHandler.addOfflinePendingMessage();
                    o("WAWebOfflineHandler").OfflineMessageHandler.offlineStanzaReceivedAfterComplete();
                }
                if (o("WAWebOfflineHandler").OfflineMessageHandler.isResumeFromRestartComplete()) {
                    h = false;
                }
                t = h;
                return yield o("WAWebMessageQueue").onMessageQueue({
                    chatWid: f,
                    isOffline: h,
                    msgCategory: null,
                    action: (()=>{
                        const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                            let e;
                            try {
                                e = p({
                                    content: g,
                                    from: f,
                                    isOffline: h,
                                    parsedRequest: d
                                });
                            } catch (e) {
                                if (!(e instanceof o("WAWebHandleMsgError").MessageValidationError)) {
                                    throw e;
                                }
                                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                                    "[newsletter][status] Invalid status content, skipping"
                                ]))).catching(r("getErrorSafe")(e)).tags("newsletter", "status").sendLogs("newsletter-status-invalid-content-skipped");
                                return _({
                                    ack: m,
                                    from: f,
                                    isOffline: h,
                                    parsedRequest: d
                                });
                            }
                            try {
                                yield o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                                    chatId: f,
                                    newMsg: e,
                                    handleSingleMsgOrigin: "addStatusMessages"
                                });
                                if (d.serverId != null) {
                                    o("WAWebBackendApi").frontendFireAndForget("fillGapFromIncomingStanza", {
                                        newsletterJid: d.from,
                                        incomingServerId: d.serverId,
                                        sentTime: d.t
                                    });
                                }
                            } catch (e) {
                                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                                    "[newsletter][status] Failed to process status stanza"
                                ]))).catching(r("getErrorSafe")(e)).tags("newsletter", "status").sendLogs("newsletter-status-failed-to-process-status-stanza");
                            }
                            return _({
                                ack: m,
                                from: f,
                                isOffline: h,
                                parsedRequest: d
                            });
                        });
                        function t() {
                            return e.apply(this, arguments);
                        }
                        return t;
                    })()
                }).catch((e)=>o("WAWebMessageQueueTimeout").handleMessageQueueTimeout(e, "newsletter_status"));
            } catch (e) {
                if (t) {
                    o("WAWebOfflineHandler").OfflineMessageHandler.processMessageDecryptResult(o("WAWebHandleMsgTypes.flow").E2EProcessResult.PARSE_ERROR);
                }
                const y = r("getErrorSafe")(e);
                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter][status] Failed to handle newsletter status"
                ]))).catching(y).tags("newsletter", "status").sendLogs("failed-handle-newsletter-status");
                throw y;
            }
        });
        return m.apply(this, arguments);
    }
    function p({ content: t, from: n, isOffline: a, parsedRequest: i }) {
        switch(t.name){
            case "StatusNewsletterText":
            case "StatusNewsletterMedia":
                {
                    const l = t.value.plaintextNewsletterPlaintextPayloadMixin.elementValue;
                    const s = o("WAWebNewsletterStatusUtils").mapStatusStanzaToMsgData(i, n, l);
                    return babelHelpers.extends({}, s, {
                        isNewsletterStatus: true,
                        author: n,
                        isNewMsg: !a
                    });
                }
            case "StatusNewsletterRevoke":
                {
                    const u = o("WAWebNewsletterStatusUtils").mapStatusRevokeToMsgData(i, n);
                    return babelHelpers.extends({}, u, {
                        isNewsletterStatus: true,
                        author: n,
                        isNewMsg: !a
                    });
                }
            case "StatusNewsletterReaction":
            case "StatusNewsletterReactionRevoke":
                throw r("err")(`[newsletter][status] Unexpected addon status content type: ${t.name}`);
            default:
                t.name;
                throw r("err")(`[newsletter][status] Unhandled status content type: ${t.name}`);
        }
    }
    function _({ ack: n, from: a, isOffline: i, parsedRequest: l }) {
        if (i) {
            o("WAWebOfflineHandler").OfflineMessageHandler.processMessageDecryptResult(o("WAWebHandleMsgTypes.flow").E2EProcessResult.SUCCESS);
            o("WAWebMessageProcessorCache").messageProcessorCache.addMessages([
                {
                    receiptInfo: {
                        externalId: l.id,
                        from: a,
                        author: a,
                        statusAckType: r("nullthrows")(n.attrs.type).toString()
                    }
                }
            ]).catch((t)=>{
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter][status] Failed to store offline ack"
                ]))).catching(r("getErrorSafe")(t)).tags("newsletter", "status").sendLogs("newsletter-status-failed-offline-ack");
            });
            return null;
        }
        return n;
    }
    l.default = d;
}, 98);