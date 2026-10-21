__d("WAWebSendMsgToDeviceList", [
    "WAWebCommsAckParser",
    "WAWebDeprecatedSendIqWorkerCompatible",
    "WAWebSendMsgCommonApi",
    "WAWebSendMsgCreateFanoutStanza",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chatId, deviceWids, metricReporter, msgProtobuf, msgRecord, option, scheduledMsgMetadata }) {
            metricReporter.sendPerfReporter?.startReadyToSendStage();
            const msgRecord_data = msgRecord.data;
            const { id, to } = msgRecord_data;
            const y = yield o("WAWebSendMsgCreateFanoutStanza").createFanoutMsgStanza({
                chatId,
                deviceList: deviceWids,
                metricReporter,
                msgProtobuf,
                msgRecord,
                option,
                scheduledMsgMetadata
            });
            const y_stanza = y.stanza;
            metricReporter.sendPerfReporter?.postReadyToSendStage();
            metricReporter.sendPerfReporter?.startWrittenWireStage();
            const b = yield o("WAWebDeprecatedSendIqWorkerCompatible").deprecatedSendStanzaAndReturnAck(y_stanza, o("WAWebCommsAckParser").toCoreAckTemplate({
                id: id.id,
                class: "message",
                from: to,
                participant: null
            }));
            const v = o("WAWebSendMsgCommonApi").sendMsgAckSyncParser.parse(b);
            if (v.error) {
                throw r("err")("[messaging] sendMsgToDeviceList: Invalid ack from server");
            }
            metricReporter.sendPerfReporter?.postWrittenWireStage();
            metricReporter.sendPerfReporter = null;
            metricReporter.sendReporter?.postSuccess();
            metricReporter.sendReporter = null;
            return v.success;
        });
        return s.apply(this, arguments);
    }
    l.sendMsgToDeviceList = e;
}, 98);