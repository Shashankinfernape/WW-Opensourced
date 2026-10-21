__d("WAWebSendAppStateSyncMsgJob", [
    "WALogger",
    "WAWebCommsAckParser",
    "WAWebDeprecatedSendIqWorkerCompatible",
    "WAWebE2EProtoGenerator",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebSendMsgCreateDeviceStanza",
    "WAWebSendMsgTypes",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ msg, privacySensitive, pushPriority }) {
            yield o("WAWebEventsWaitForOfflineDeliveryEnd").waitForOfflineDeliveryEnd();
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "encryptAndSendKeyMsg: sending ",
                ""
            ])), msg.id.toString()).tags("messaging");
            const msg_to = msg.to;
            const l = o("WAWebE2EProtoGenerator").createPeerMsgProtobuf(msg);
            const s = yield o("WAWebSendMsgCreateDeviceStanza").createUserDeviceMsgStanza({
                type: o("WAWebSendMsgTypes").SendMessageRecordType.Message,
                data: msg
            }, l, {
                to: msg_to,
                recipient: null,
                option: {
                    type: o("WAWebSendMsgCreateDeviceStanza").MsgType.AppStateSync,
                    pushPriority,
                    privacySensitive
                }
            });
            return o("WAWebDeprecatedSendIqWorkerCompatible").deprecatedSendStanzaAndWaitForAck(s, o("WAWebCommsAckParser").toCoreAckTemplate({
                id: msg.id.id,
                class: "message",
                from: msg_to,
                participant: null
            }));
        });
        return u.apply(this, arguments);
    }
    l.encryptAndSendKeyMsg = s;
}, 98);