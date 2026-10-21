__d("WAWebDisappearingModeProtoUtils", [
    "WAWebEphemeralityTypes",
    "WAWebProtobufsE2E.pb",
    "WAWebUserPrefsMeUser"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        if (e.from != null) {
            const n = o("WAWebUserPrefsMeUser").isMeAccount(e.from);
            if (t.initiator != null) {
                switch(t.initiator){
                    case o("WAWebProtobufsE2E.pb").DisappearingMode$Initiator.CHANGED_IN_CHAT:
                        return o("WAWebEphemeralityTypes").DisappearingModeInitiator.ChangedInChat;
                    case o("WAWebProtobufsE2E.pb").DisappearingMode$Initiator.INITIATED_BY_ME:
                        if (n) {
                            return o("WAWebEphemeralityTypes").DisappearingModeInitiator.InitiatedByMe;
                        }
                        return o("WAWebEphemeralityTypes").DisappearingModeInitiator.InitiatedByOther;
                    case o("WAWebProtobufsE2E.pb").DisappearingMode$Initiator.INITIATED_BY_OTHER:
                    case o("WAWebProtobufsE2E.pb").DisappearingMode$Initiator.BIZ_UPGRADE_FB_HOSTING:
                        if (n) {
                            return o("WAWebEphemeralityTypes").DisappearingModeInitiator.InitiatedByOther;
                        }
                        return o("WAWebEphemeralityTypes").DisappearingModeInitiator.InitiatedByMe;
                }
            }
        }
    }
    function s(e, t) {
        const n = o("WAWebUserPrefsMeUser").isMeAccount(e.from);
        const { initiatedByMe, initiator, trigger } = t;
        if (trigger != null && trigger === o("WAWebProtobufsE2E.pb").DisappearingMode$Trigger.BIZ_SUPPORTS_FB_HOSTING) {
            return {
                disappearingModeTrigger: u(trigger),
                initiatedByMe: n ? initiatedByMe : !initiatedByMe
            };
        }
        if (trigger != null && initiatedByMe != null) {
            return {
                disappearingModeTrigger: u(trigger),
                initiatedByMe: n ? initiatedByMe : !initiatedByMe
            };
        }
        if (t.initiator != null && initiator != null) {
            switch(initiator){
                case o("WAWebProtobufsE2E.pb").DisappearingMode$Initiator.CHANGED_IN_CHAT:
                    return {
                        disappearingModeTrigger: o("WAWebEphemeralityTypes").DisappearingModeTrigger.ChatSettings
                    };
                case o("WAWebProtobufsE2E.pb").DisappearingMode$Initiator.INITIATED_BY_ME:
                    return {
                        disappearingModeTrigger: o("WAWebEphemeralityTypes").DisappearingModeTrigger.AccountSettings,
                        initiatedByMe: n
                    };
                case o("WAWebProtobufsE2E.pb").DisappearingMode$Initiator.BIZ_UPGRADE_FB_HOSTING:
                case o("WAWebProtobufsE2E.pb").DisappearingMode$Initiator.INITIATED_BY_OTHER:
                    return {
                        disappearingModeTrigger: o("WAWebEphemeralityTypes").DisappearingModeTrigger.AccountSettings,
                        initiatedByMe: !n
                    };
            }
        }
    }
    function u(trigger) {
        switch(trigger){
            case o("WAWebProtobufsE2E.pb").DisappearingMode$Trigger.CHAT_SETTING:
                return o("WAWebEphemeralityTypes").DisappearingModeTrigger.ChatSettings;
            case o("WAWebProtobufsE2E.pb").DisappearingMode$Trigger.ACCOUNT_SETTING:
                return o("WAWebEphemeralityTypes").DisappearingModeTrigger.AccountSettings;
            case o("WAWebProtobufsE2E.pb").DisappearingMode$Trigger.BULK_CHANGE:
                return o("WAWebEphemeralityTypes").DisappearingModeTrigger.BulkChange;
            case o("WAWebProtobufsE2E.pb").DisappearingMode$Trigger.BIZ_SUPPORTS_FB_HOSTING:
                return o("WAWebEphemeralityTypes").DisappearingModeTrigger.BizSupportFbHosting;
            case o("WAWebProtobufsE2E.pb").DisappearingMode$Trigger.UNKNOWN_GROUPS:
                return o("WAWebEphemeralityTypes").DisappearingModeTrigger.UnknownGroups;
            case o("WAWebProtobufsE2E.pb").DisappearingMode$Trigger.UNKNOWN:
                return o("WAWebEphemeralityTypes").DisappearingModeTrigger.Unknown;
        }
    }
    l.protoToDisappearingModeInitiator = e;
    l.protoToDisappearingMode = s;
}, 98);