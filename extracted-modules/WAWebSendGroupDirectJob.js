__d("WAWebSendGroupDirectJob", [
    "WALogger",
    "WATimeUtils",
    "WAWebBotUtils",
    "WAWebMsgFanoutTypes",
    "WAWebResendGroupMsg",
    "WAWebSendDirectMsgToDeviceList",
    "asyncToGeneratorRuntime",
    "cr:10198"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ additionalBotBody, additionalBotShouldHaveIdentity, deviceList, groupData, metricReporter, msgProtobuf, msgRecord, scheduledMsgMetadata, sessionScope }) {
            const f = msgRecord.data.to;
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "encryptAndSendGroupDirectMsg: sending ",
                " with group ",
                ""
            ])), msgRecord.data.id, f.toLogString()).tags("messaging");
            const g = deviceList.filter((e)=>!o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e));
            const h = yield o("WAWebSendDirectMsgToDeviceList").sendDirectMsgToDeviceList({
                additionalBotBody,
                additionalBotShouldHaveIdentity,
                deviceList: g,
                groupData,
                metricReporter,
                msgProtobuf,
                msgRecord,
                option: {
                    fanoutType: o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT,
                    sessionScope
                },
                scheduledMsgMetadata
            });
            const { addressingMode, phash } = h;
            if (phash != null && phash !== "") {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[encryptAndSendGroupDirectMsg] phash mismatch, server: ",
                    ""
                ])), phash).tags("messaging");
                o("WAWebResendGroupMsg").resendPersistedGroupMsgWrapper({
                    isDirect: true,
                    msgRecord,
                    msgProtobuf,
                    oldList: g,
                    ackTime: o("WATimeUtils").unixTime(),
                    groupData,
                    phash,
                    metricReporter,
                    serverAddressingMode: addressingMode
                }).catch((e)=>{
                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "resendGroupDirectMsg: failed to resend group msg: ",
                        ", type: ",
                        ""
                    ])), msgRecord.data.id.toString(), msgRecord.data.type).tags("messaging");
                    o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "resendGroupDirectMsg: failed to resend group msg: ",
                        ""
                    ])), e).tags("messaging").sendLogs("message-resend-failed", {
                        sampling: 0.01
                    });
                });
            }
            return h;
        });
        return m.apply(this, arguments);
    }
    l.encryptAndSendGroupDirectMsg = d;
}, 98);