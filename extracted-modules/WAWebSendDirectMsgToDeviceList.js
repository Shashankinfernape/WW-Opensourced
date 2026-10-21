__d("WAWebSendDirectMsgToDeviceList", [
    "Promise",
    "WAWebCommsAckParser",
    "WAWebDeprecatedSendIqWorkerCompatible",
    "WAWebSendMsgCommonApi",
    "WAWebSendMsgCreateFanoutStanza",
    "WAWebSignalProtocolStore",
    "WAWebWamEnumMessageDistributionEnumType",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ additionalBotBody, additionalBotShouldHaveIdentity, deviceList, groupData, metricReporter, msgProtobuf, msgRecord, option, scheduledMsgMetadata }) {
            const msgRecord_data = msgRecord.data;
            const { id, to } = msgRecord_data;
            const S = msgRecord.data.to;
            const R = yield o("WAWebSendMsgCreateFanoutStanza").createFanoutMsgStanza({
                additionalBotBody,
                additionalBotShouldHaveIdentity,
                chatId: S,
                deviceList,
                groupData,
                metricReporter,
                msgProtobuf,
                msgRecord,
                option,
                scheduledMsgMetadata
            });
            const R_stanza = R.stanza;
            yield o("WAWebSignalProtocolStore").getSignalProtocolStore().flushBufferToDiskIfNotMemOnlyMode();
            metricReporter.sendPerfReporter?.postReadyToSendStage();
            metricReporter.sendPerfReporter?.startWrittenWireStage();
            const E = yield o("WAWebDeprecatedSendIqWorkerCompatible").deprecatedSendStanzaAndReturnAck(R_stanza, o("WAWebCommsAckParser").toCoreAckTemplate({
                id: id.id,
                class: "message",
                from: to,
                participant: null
            }));
            const k = o("WAWebSendMsgCommonApi").sendMsgAckSyncParser.parse(E);
            if (k.error) {
                return (e || (e = n("Promise"))).reject(r("err")("[messaging] encryptAndSendGroupDirectMsg: Invalid ack from server"));
            }
            metricReporter.sendReporter?.setMessageDistributionType(o("WAWebWamEnumMessageDistributionEnumType").MESSAGE_DISTRIBUTION_ENUM_TYPE.DIRECT_MESSAGE);
            metricReporter.sendPerfReporter?.postWrittenWireStage();
            metricReporter.sendPerfReporter = null;
            metricReporter.sendReporter?.postSuccess();
            metricReporter.sendReporter = null;
            return k.success;
        });
        return u.apply(this, arguments);
    }
    l.sendDirectMsgToDeviceList = s;
}, 98);