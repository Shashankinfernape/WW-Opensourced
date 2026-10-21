__d("WAWebHandleMsgSendReceipt", [
    "WALogger",
    "WAWebABProps",
    "WAWebCoexV2GatingUtils",
    "WAWebCoexV2ReceiptRecipient",
    "WAWebCoexV2SendReceipt",
    "WAWebCreateNackFromStanza",
    "WAWebDeliveryReceiptClassUtils",
    "WAWebHandleMsgCommon",
    "WAWebHandleMsgSendAck",
    "WAWebHandleMsgTypes.flow",
    "WAWebMsgProcessingApiUtils",
    "WAWebPostMessageHighRetryCountMetric",
    "WAWebSendDeliveryReceiptJob",
    "WAWebSendReceiptJobCommon",
    "WAWebSendRetryReceiptJob",
    "WAWebSessionScopeWamUtils",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    function m(e, t, n, r) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, a, i, l) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "sendReceipt"
            ])));
            const p = t.externalId;
            const { rawTs: h, type: y } = a;
            const C = o("WAWebMsgProcessingApiUtils").getFrom(t);
            let b = null;
            if (t.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT && o("WAWebUserPrefsMeUser").isMeAccount(t.author)) {
                if (t.originalBotRecipient != null) {
                    b = t.originalBotRecipient;
                } else {
                    b = t.preMatChat ?? t.chat;
                }
            } else if (t.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT && o("WAWebCoexV2GatingUtils").isCoexV2RelayMessage(t.author, t.metaFrom)) {
                b = t.preMatChat ?? t.chat;
            }
            const R = t.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT ? null : t.preMatChat ?? t.author;
            const L = t.category === o("WAWebHandleMsgCommon").MSG_CATEGORY.peer;
            const E = !t.chat.isBot() && t.author.isBot();
            const k = o("WAWebDeliveryReceiptClassUtils").getDeliveryReceiptClass(C, a) != null;
            const I = a.isStatusStanza === true ? "status" : void 0;
            if (i.result == null) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    'sendReceipt: invalid e2eProcessResult "',
                    '"'
                ])), i.result).sendLogs("send-receipt-missing-e2e-process-result");
                return o("WAWebHandleMsgSendAck").sendAck({
                    externalId: p,
                    from: C,
                    participant: R,
                    stanzaClass: I,
                    type: y
                });
            }
            const T = g(i);
            function D(e) {
                return x.apply(this, arguments);
            }
            function x() {
                x = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ errorReason: t, label: n, send: i }) {
                    try {
                        yield i(p, r("nullthrows")(o("WAWebCoexV2ReceiptRecipient").toCoexV2ReceiptRecipient(r("nullthrows")(a.targetChatJid))));
                    } catch (e) {
                        o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                            "[coexv2] ",
                            " receipt failed, falling back to ack"
                        ])), n).catching(r("getErrorSafe")(e)).sendLogs(t);
                        o("WAWebHandleMsgSendAck").sendAck({
                            externalId: p,
                            from: C,
                            participant: R,
                            stanzaClass: I,
                            type: y
                        });
                    }
                });
                return x.apply(this, arguments);
            }
            e: {
                if (i.result === o("WAWebHandleMsgTypes.flow").E2EProcessResult.SUCCESS || i.result === o("WAWebHandleMsgTypes.flow").E2EProcessResult.SIGNAL_OLD_COUNTER_ERROR) {
                    if (_(t)) {
                        yield D({
                            errorReason: "coexv2-sender-receipt-error",
                            label: "sender",
                            send: o("WAWebCoexV2SendReceipt").sendCoexV2SenderReceipt
                        });
                        return;
                    }
                    if (f(t)) {
                        yield D({
                            errorReason: "coexv2-delivery-receipt-error",
                            label: "delivery",
                            send: o("WAWebCoexV2SendReceipt").sendCoexV2DeliveryReceipt
                        });
                        return;
                    }
                    if (E && l?.sendsGroupAgentDeliveryReceipt !== true) {
                        let $;
                        let P;
                        let N;
                        if (t.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT) {
                            $ = t.author;
                            P = t.chat;
                        } else {
                            $ = t.chat;
                            N = t.author;
                        }
                        return o("WAWebSendReceiptJobCommon").sendBotInvokeResponseAcks({
                            messageIds: [
                                p
                            ],
                            participant: N,
                            recipient: P,
                            to: $
                        });
                    } else if (a.type === o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.medianotify) {
                        return o("WAWebHandleMsgSendAck").sendAck({
                            externalId: p,
                            from: C,
                            participant: R,
                            stanzaClass: I,
                            type: y
                        });
                    }
                    return o("WAWebSendDeliveryReceiptJob").sendDeliveryReceiptsAfterDecryption({
                        isPeerMsg: L,
                        isStatusContext: k,
                        msgId: p,
                        participant: R,
                        receiptModeBitmask: T,
                        recipient: b,
                        response: i,
                        sendsGroupAgentDeliveryReceipt: l?.sendsGroupAgentDeliveryReceipt === true,
                        to: C
                    });
                }
                if (i.result === o("WAWebHandleMsgTypes.flow").E2EProcessResult.HSM_MISMATCH) {
                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        'sendReceipt: HSM mismatch, no receipt sent for "',
                        '"'
                    ])), p).sendLogs("send-receipt-skipping-hsm-mismatch-result");
                    return;
                }
                if (i.result === o("WAWebHandleMsgTypes.flow").E2EProcessResult.RETRY) {
                    const M = i.retryCount == null ? 1 : i.retryCount + 1;
                    const w = i.failedEnc;
                    yield o("WAWebSendRetryReceiptJob").sendRetryReceipt({
                        retryCount: M,
                        to: C,
                        participant: R,
                        recipient: b,
                        externalId: p,
                        rawTs: h,
                        isPeer: L,
                        retryReason: i.retryReason,
                        isStateless: C?.isHosted() === true,
                        receiptModeBitmask: T,
                        failedEncType: i.failedEncType
                    });
                    o("WAWebPostMessageHighRetryCountMetric").maybePostMessageHighRetryCountMetric({
                        isPq: w?.sessionType != null ? w.sessionType === "pq" : void 0,
                        msgInfo: t,
                        retryCount: M,
                        sessionScope: w != null ? o("WAWebSessionScopeWamUtils").getIncomingSkdmSessionScope({
                            from: C,
                            isGroupStatus: a.isGroupStatus,
                            isSkdm: a.isSkdm,
                            metaSessionScope: a.metaSessionScope
                        }) : void 0
                    });
                    return;
                }
                if (i.result === o("WAWebHandleMsgTypes.flow").E2EProcessResult.BACKFILL) {
                    return o("WAWebHandleMsgSendAck").sendAck({
                        externalId: p,
                        from: C,
                        participant: R,
                        stanzaClass: I,
                        type: y
                    });
                }
                if (i.result === o("WAWebHandleMsgTypes.flow").E2EProcessResult.PARSE_VALIDATION_ERROR) {
                    if (l?.canNack === false) {
                        return o("WAWebHandleMsgSendAck").sendAck({
                            externalId: p,
                            from: C,
                            participant: R,
                            stanzaClass: I,
                            type: y
                        });
                    }
                    return o("WAWebHandleMsgSendAck").sendNack(p, C, y, R, o("WAWebCreateNackFromStanza").NackReason.InvalidProtobuf, i.e2eFailureReason, I);
                }
                if (i.result === o("WAWebHandleMsgTypes.flow").E2EProcessResult.PARSE_ERROR) {
                    if (l?.canNack === false) {
                        return o("WAWebHandleMsgSendAck").sendAck({
                            externalId: p,
                            from: C,
                            participant: R,
                            stanzaClass: I,
                            type: y
                        });
                    }
                    return o("WAWebHandleMsgSendAck").sendNack(p, C, y, R, i.nackReason ?? o("WAWebCreateNackFromStanza").NackReason.ParsingError, void 0, I);
                }
                if (i.result === o("WAWebHandleMsgTypes.flow").E2EProcessResult.DEFERRED) {
                    o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        'sendReceipt: unexpected DEFERRED result for "',
                        '"'
                    ])), p).sendLogs("send-receipt-unexpected-deferred", {
                        sampling: 0.01
                    });
                    if (l?.canNack === false) {
                        return o("WAWebHandleMsgSendAck").sendAck({
                            externalId: p,
                            from: C,
                            participant: R,
                            stanzaClass: I,
                            type: y
                        });
                    }
                    return o("WAWebHandleMsgSendAck").sendNack(p, C, y, R, o("WAWebCreateNackFromStanza").NackReason.UnhandledError, void 0, I);
                }
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${i.result}`);
            }
        });
        return p.apply(this, arguments);
    }
    function _(e) {
        return e.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT && o("WAWebUserPrefsMeUser").isMeAccount(e.metaFrom) && o("WAWebCoexV2GatingUtils").isCoexV2RelayMessage(e.author, e.metaFrom);
    }
    function f(e) {
        return e.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT && o("WAWebCoexV2GatingUtils").isCoexV2RelayMessage(e.author, e.metaFrom) && e.metaFrom != null && !o("WAWebUserPrefsMeUser").isMeAccount(e.metaFrom);
    }
    function g(e) {
        let t = 0;
        if (e.isOrphanAddon === true && o("WAWebABProps").getABPropConfigValue("web_send_orphan_in_receipts_enabled")) {
            t |= 1 << o("WAWebSendReceiptJobCommon").ReceiptModeBitPosition.ORPHAN;
        }
        if (e.result === o("WAWebHandleMsgTypes.flow").E2EProcessResult.RETRY && e.placeholderCreated === false && o("WAWebABProps").getABPropConfigValue("web_send_hid_failed_decrypt_in_receipts_enabled")) {
            t |= 1 << o("WAWebSendReceiptJobCommon").ReceiptModeBitPosition.HID_FAILED_DECRYPT;
        }
        return t;
    }
    l.sendReceipt = m;
    l.isCoexV2SenderReceiptMessage = _;
    l.isCoexV2PeerDeliveryReceiptMessage = f;
}, 98);