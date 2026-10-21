__d("WAWebHandleNewsletterMsg", [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebHandleMsgTypes.flow",
    "WAWebHandleNewsletterMsgAddOns",
    "WAWebHandleNewsletterMsgLogger",
    "WAWebLogReceivedMessages",
    "WAWebMessageProcessorCache",
    "WAWebMessageQueue",
    "WAWebMessageQueueTimeout",
    "WAWebNewsletterCommonGatingUtils",
    "WAWebNewsletterMsgParser",
    "WAWebNewsletterMsgProcessor",
    "WAWebOfflineHandler",
    "WAWebWamWorkerOfflineProcessReporter",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            try {
                const a = r("WAWebNewsletterMsgParser")(t);
                const { ack: i, msg: l } = a;
                if (!o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled()) {
                    return i;
                }
                const d = o("WATimeUtils").unixTimeMs();
                let m = l.offline != null;
                if (m) {
                    o("WAWebOfflineHandler").OfflineMessageHandler.addOfflinePendingMessage();
                    o("WAWebOfflineHandler").OfflineMessageHandler.offlineStanzaReceivedAfterComplete();
                }
                if (o("WAWebOfflineHandler").OfflineMessageHandler.isResumeFromRestartComplete()) {
                    l.offline = null;
                    m = false;
                }
                const p = !o("WAWebNewsletterMsgProcessor").isAddOnType(l.type);
                return yield o("WAWebMessageQueue").onMessageQueue({
                    chatWid: l.from,
                    isOffline: m,
                    msgCategory: null,
                    action: (()=>{
                        const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                            const t = o("WATimeUtils").unixTimeMs();
                            const a = yield o("WAWebNewsletterMsgProcessor").preprocessNewsletterMsg(l);
                            const { isOrphan: u, msgData: _ } = a;
                            const f = p ? o("WAWebMessageProcessorCache").messageProcessorCache.addMessages([
                                {
                                    msg: _
                                }
                            ], !m).then(()=>{
                                o("WAWebWamWorkerOfflineProcessReporter").WorkerOfflineResumeReporter.updateProcessedMessageCount();
                                o("WAWebLogReceivedMessages").logReceivedMessagesInWAM({
                                    msgs: [
                                        _
                                    ],
                                    offline: l.offline,
                                    tsMillis: l.t * 1000,
                                    clientReceivedTsMillis: d,
                                    msgProcessStartTsMillis: t,
                                    serverAddressingMode: null,
                                    localAddressingMode: null
                                });
                            }).catch((t)=>{
                                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                    "[newsletter] Failed to handle newsletter message"
                                ]))).tags("newsletter").sendLogs("newsletter-failed-to-store-incoming-message");
                            }) : (c || (c = n("Promise"))).resolve();
                            yield o("WAWebHandleNewsletterMsgAddOns").maybeHandleNewsletterMsgAddOns(_, {
                                pollVotes: l.pollVote
                            });
                            if (o("WAWebBackendEventBus").BackendEventBus.isMainStreamReadyMd) {
                                if (o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd) {
                                    yield f;
                                }
                                o("WAWebBackendApi").frontendFireAndForget("updateNewsletterMessageUI", {
                                    chatID: l.from,
                                    msg: _,
                                    isOrphan: u
                                });
                            }
                            if (m) {
                                o("WAWebOfflineHandler").OfflineMessageHandler.processMessageDecryptResult(o("WAWebHandleMsgTypes.flow").E2EProcessResult.SUCCESS);
                                o("WAWebMessageProcessorCache").messageProcessorCache.addMessages([
                                    {
                                        receiptInfo: {
                                            externalId: l.id,
                                            from: l.from,
                                            author: l.from
                                        }
                                    }
                                ]).catch((e)=>{
                                    const t = r("getErrorSafe")(e);
                                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                                        "[newsletter] Failed to handle newsletter offline ack"
                                    ]))).catching(t).tags("newsletter").sendLogs("newsletter-failed-to-store-offline-ack");
                                });
                                return null;
                            }
                            return i;
                        });
                        function a() {
                            return t.apply(this, arguments);
                        }
                        return a;
                    })()
                }).catch((e)=>o("WAWebMessageQueueTimeout").handleMessageQueueTimeout(e, "newsletter_msg"));
            } catch (e) {
                const _ = r("getErrorSafe")(e);
                o("WAWebHandleNewsletterMsgLogger").handleNewsletterMsgError(_, {
                    stanza: t
                });
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter] Failed to handle newsletter message"
                ]))).catching(_).tags("newsletter").sendLogs("failed-handle-newsletter-message");
                throw _;
            }
        });
        return m.apply(this, arguments);
    }
    l.default = d;
}, 98);