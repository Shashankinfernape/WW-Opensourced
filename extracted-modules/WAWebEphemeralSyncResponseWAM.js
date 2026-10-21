__d("WAWebEphemeralSyncResponseWAM", [
    "WAWebABProps",
    "WAWebChatThreadLogging",
    "WAWebEphemeralSyncResponseReceiveWamEvent",
    "WAWebEphemeralSyncResponseSendWamEvent",
    "WAWebEphemeralityWAMUtils",
    "WAWebWamEnumEsrSendResultType",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e() {
        return o("WAWebABProps").getABPropConfigValue("dm_reliability_logging");
    }
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ attempts, changes, incomingMsgSettings, localChatSettings, to }) {
            if (e()) {
                const s = new (o("WAWebEphemeralSyncResponseSendWamEvent")).EphemeralSyncResponseSendWamEvent({
                    threadId: yield o("WAWebChatThreadLogging").getChatThreadID(to.toJid()),
                    esrSendResult: o("WAWebWamEnumEsrSendResultType").ESR_SEND_RESULT_TYPE.SUCCESS,
                    isAGroup: false,
                    esrDisappearingModeInitiator: o("WAWebEphemeralityWAMUtils").getWamDisappearingModeInitiator(changes.initiator),
                    esrEphemeralityDuration: changes.duration,
                    esrEphemeralityInitiator: o("WAWebEphemeralityWAMUtils").getWamDisappearingModeInitiatedByMe(changes.initiatedByMe),
                    esrEphemeralitySettingTimestamp: changes.settingTimestamp,
                    esrEphemeralityTriggerAction: o("WAWebEphemeralityWAMUtils").getWamDisappearingModeTrigger(changes.disappearingModeTrigger)
                });
                if (localChatSettings != null) {
                    if (localChatSettings.initiator != null) {
                        s.set({
                            clientDisappearingModeInitiator: o("WAWebEphemeralityWAMUtils").getWamDisappearingModeInitiator(localChatSettings.initiator)
                        });
                    }
                    if (localChatSettings.disappearingModeTrigger != null) {
                        s.set({
                            clientEphemeralityTriggerAction: o("WAWebEphemeralityWAMUtils").getWamDisappearingModeTrigger(localChatSettings.disappearingModeTrigger)
                        });
                    }
                    s.set({
                        clientEphemeralityDuration: localChatSettings.duration,
                        clientEphemeralityInitiator: o("WAWebEphemeralityWAMUtils").getWamDisappearingModeInitiatedByMe(localChatSettings.initiatedByMe),
                        clientEphemeralitySettingTimestamp: localChatSettings.settingTimestamp
                    });
                }
                if (incomingMsgSettings != null) {
                    if (incomingMsgSettings.initiator != null) {
                        s.set({
                            messageDisappearingModeInitiator: o("WAWebEphemeralityWAMUtils").getWamDisappearingModeInitiator(incomingMsgSettings.initiator)
                        });
                    }
                    if (incomingMsgSettings.disappearingModeTrigger != null) {
                        s.set({
                            messageEphemeralityTriggerAction: o("WAWebEphemeralityWAMUtils").getWamDisappearingModeTrigger(incomingMsgSettings.disappearingModeTrigger)
                        });
                    }
                    s.set({
                        messageEphemeralityDuration: incomingMsgSettings.duration,
                        messageEphemeralityInitiator: o("WAWebEphemeralityWAMUtils").getWamDisappearingModeInitiatedByMe(incomingMsgSettings.initiatedByMe),
                        messageEphemeralitySettingTimestamp: incomingMsgSettings.settingTimestamp
                    });
                }
                if (attempts != null) {
                    s.set({
                        esrSendAttempt: attempts
                    });
                }
                s.commit();
            }
        });
        return u.apply(this, arguments);
    }
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ attempts, error, to }) {
            if (e()) {
                const i = new (o("WAWebEphemeralSyncResponseSendWamEvent")).EphemeralSyncResponseSendWamEvent({
                    threadId: yield o("WAWebChatThreadLogging").getChatThreadID(to.toJid()),
                    esrFailureReason: error,
                    esrSendResult: o("WAWebWamEnumEsrSendResultType").ESR_SEND_RESULT_TYPE.ERROR
                });
                if (attempts != null) {
                    i.set({
                        esrSendAttempt: attempts
                    });
                }
                i.commit();
            }
        });
        return d.apply(this, arguments);
    }
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chat, failureReason, incomingESRSettings, localChatSettings }) {
            if (e()) {
                const l = new (o("WAWebEphemeralSyncResponseReceiveWamEvent")).EphemeralSyncResponseReceiveWamEvent({
                    threadId: yield o("WAWebChatThreadLogging").getChatThreadID(chat.id.toJid()),
                    isAGroup: false
                });
                if (incomingESRSettings != null) {
                    if (incomingESRSettings.initiator != null) {
                        l.set({
                            esrDisappearingModeInitiator: o("WAWebEphemeralityWAMUtils").getWamDisappearingModeInitiator(incomingESRSettings.initiator)
                        });
                    }
                    if (incomingESRSettings.disappearingModeTrigger != null) {
                        l.set({
                            esrEphemeralityTriggerAction: o("WAWebEphemeralityWAMUtils").getWamDisappearingModeTrigger(incomingESRSettings.disappearingModeTrigger)
                        });
                    }
                    l.set({
                        esrEphemeralityDuration: incomingESRSettings.duration,
                        esrEphemeralityInitiator: o("WAWebEphemeralityWAMUtils").getWamDisappearingModeInitiatedByMe(incomingESRSettings.initiatedByMe),
                        esrEphemeralitySettingTimestamp: incomingESRSettings.settingTimestamp
                    });
                }
                if (localChatSettings != null) {
                    if (localChatSettings.initiator != null) {
                        l.set({
                            clientDisappearingModeInitiator: o("WAWebEphemeralityWAMUtils").getWamDisappearingModeInitiator(localChatSettings.initiator)
                        });
                    }
                    if (localChatSettings.disappearingModeTrigger != null) {
                        l.set({
                            clientEphemeralityTriggerAction: o("WAWebEphemeralityWAMUtils").getWamDisappearingModeTrigger(localChatSettings.disappearingModeTrigger)
                        });
                    }
                    l.set({
                        clientEphemeralityDuration: localChatSettings.duration,
                        clientEphemeralityInitiator: o("WAWebEphemeralityWAMUtils").getWamDisappearingModeInitiatedByMe(localChatSettings.initiatedByMe),
                        clientEphemeralitySettingTimestamp: localChatSettings.settingTimestamp
                    });
                }
                if (failureReason != null) {
                    l.set({
                        esrResolveResult: o("WAWebWamEnumEsrSendResultType").ESR_SEND_RESULT_TYPE.ERROR,
                        esrFailureReason: failureReason
                    });
                } else {
                    l.set({
                        esrResolveResult: o("WAWebWamEnumEsrSendResultType").ESR_SEND_RESULT_TYPE.SUCCESS
                    });
                }
                l.commit();
            }
        });
        return p.apply(this, arguments);
    }
    l.sendEphemeralSyncResponseSendWamEvent = s;
    l.sendEphemeralSyncResponseSendErrorWamEvent = c;
    l.sendEphemeralSyncResponseReceiveWamEvent = m;
}, 98);