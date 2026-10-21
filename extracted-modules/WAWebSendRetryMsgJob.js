__d("WAWebSendRetryMsgJob", [
    "invariant",
    "WALogger",
    "WAWebABPropsSaga",
    "WAWebBotMessageSecret",
    "WAWebCommsAckParser",
    "WAWebDeprecatedSendIqWorkerCompatible",
    "WAWebE2EProtoGenerator",
    "WAWebOutgoingMessage",
    "WAWebResendBroadcastMsg",
    "WAWebResendStatusMsg",
    "WAWebSendCoexV2RetryMsgJob",
    "WAWebSendMsgCreateDeviceStanza",
    "WAWebStatusGatingUtils",
    "WAWebWid",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const { msgRecord, participant, recipient, retryContext, retryCount, to } = t;
            const d = msgRecord.data.id.id;
            const p = participant || to;
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "sendRetry: id ",
                " to ",
                ", requester: ",
                ", count: ",
                ""
            ])), d, to.toString(), p.toString(), retryCount).tags("messaging");
            if (to.isStatus() && o("WAWebStatusGatingUtils").isStatusPublishViaSmaxEnabled()) {
                return m(t);
            }
            let f;
            let g = "message";
            let h;
            const y = o("WAWebSendCoexV2RetryMsgJob").getCoexV2RetryDispatch({
                msgRecord,
                recipient,
                retryContext,
                retryCount,
                to
            });
            e: {
                const C = y;
                if ((typeof C === "object" && C !== null || typeof C === "function") && C.kind === "applicable" && "result" in C) {
                    const b = C.result;
                    h = yield b;
                    if (h == null) {
                        return;
                    }
                    break e;
                }
                if ((typeof C === "object" && C !== null || typeof C === "function") && C.kind === "fallback" && "result" in C) {
                    const v = C.result;
                    h = yield v;
                    break e;
                }
                if ((typeof C === "object" && C !== null || typeof C === "function") && C.kind === "not_applicable") {
                    h = null;
                    break e;
                }
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${C}`);
            }
            if (h != null) {
                f = h;
            } else {
                const S = yield _(t);
                f = S.stanza;
                g = S.statusStanzaClass;
            }
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "sendRetry: sending ",
                " to ",
                ""
            ])), d, to.toString()).tags("messaging");
            let R = to.isStatus() ? null : participant;
            let L = to;
            if (to.isBot() && recipient != null && !(recipient != null && recipient.isBot())) {
                R = to;
                if (recipient == null) {
                    s(0, 75958);
                }
                L = recipient;
            }
            return o("WAWebDeprecatedSendIqWorkerCompatible").deprecatedSendStanzaAndWaitForAck(f, o("WAWebCommsAckParser").toCoreAckTemplate({
                id: d,
                class: to.isStatus() ? g : "message",
                from: L,
                participant: R
            }));
        });
        return d.apply(this, arguments);
    }
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ msgRecord, participant, retryCount, sessionScope, to }) {
            if (participant == null) {
                s(0, 111426);
            }
            return o("WAWebResendStatusMsg").sendStatusRetryMsgViaSmax({
                deviceMsgType: {
                    type: o("WAWebSendMsgCreateDeviceStanza").MsgType.Retry,
                    retryCount
                },
                msgProtobuf: o("WAWebOutgoingMessage").createOutgoingMessageProtobuf(o("WAWebOutgoingMessage").OutgoingMessageOriginType.Retry, msgRecord),
                msgRecord,
                participant,
                sessionScope,
                to
            });
        });
        return p.apply(this, arguments);
    }
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ accountLid, isLidBot, lidOrigin, msgRecord, participant, recipient, retryCount, sessionScope, to }) {
            const _ = msgRecord?.data?.messageSecret;
            const botMessageSecret = _ ? new Uint8Array((yield o("WAWebBotMessageSecret").genBotMsgSecretFromMsgSecret(_))) : null;
            const g = o("WAWebOutgoingMessage").createOutgoingMessageProtobuf(o("WAWebOutgoingMessage").OutgoingMessageOriginType.Retry, msgRecord);
            const h = {
                type: o("WAWebSendMsgCreateDeviceStanza").MsgType.Retry,
                retryCount
            };
            const y = {
                to,
                option: h,
                botMessageSecret
            };
            if (r("WAWebWid").isCAPISupportAccount(to) && o("WAWebABPropsSaga").getIsSagaV1Enabled() && o("WAWebABPropsSaga").getIsSagaV1ReengagementEnabled()) {
                yield o("WAWebE2EProtoGenerator").addDebugInfoSupportPayload(g);
            }
            if (to.isUser()) {
                return {
                    stanza: yield o("WAWebSendMsgCreateDeviceStanza").createUserDeviceMsgStanza(msgRecord, g, babelHelpers.extends({}, y, {
                        recipient,
                        peerRecipientLid: accountLid
                    }), lidOrigin),
                    statusStanzaClass: "message"
                };
            }
            if (to.isStatus()) {
                if (participant == null) {
                    s(0, 111426);
                }
                const C = yield o("WAWebResendStatusMsg").createStatusDeviceMsgStanza({
                    to,
                    participant,
                    msgRecord,
                    msgProtobuf: g,
                    deviceMsgType: h,
                    sessionScope
                });
                return {
                    stanza: C.stanza,
                    statusStanzaClass: C.stanzaClass
                };
            }
            if (to.isBroadcastList()) {
                if (participant == null) {
                    s(0, 141738);
                }
                return {
                    stanza: yield o("WAWebResendBroadcastMsg").createBroadcastDeviceMsgStanza({
                        to,
                        participant,
                        msgRecord,
                        msgProtobuf: g,
                        deviceMsgType: h
                    }),
                    statusStanzaClass: "message"
                };
            }
            if (participant == null) {
                s(0, 56263);
            }
            const b = msgRecord.data.isGroupStatus === true ? sessionScope : undefined;
            return {
                stanza: yield o("WAWebSendMsgCreateDeviceStanza").createGroupDeviceMsgStanza({
                    msgProtobuf: g,
                    msgRecord,
                    params: babelHelpers.extends({}, y, {
                        isLidBot,
                        participant,
                        sessionScope: b
                    })
                }),
                statusStanzaClass: "message"
            };
        });
        return f.apply(this, arguments);
    }
    l.sendRetry = c;
}, 98);