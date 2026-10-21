__d("WAWebExtractEphemeralFieldsFromScheduledMsg", [
    "WALongInt",
    "WAWebAfterReadUtils",
    "WAWebDisappearingModeProtoUtils",
    "WAWebGetScheduledMsgContextInfo"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = o("WAWebGetScheduledMsgContextInfo").getScheduledMsgContextInfo(e);
        if (n == null) {
            return {};
        }
        const r = {};
        if (n.expiration != null) {
            r.ephemeralDuration = n.expiration;
        }
        if (n.ephemeralSettingTimestamp != null) {
            r.ephemeralSettingTimestamp = o("WALongInt").numberOrThrowIfTooLarge(n.ephemeralSettingTimestamp);
        }
        if (n.ephemeralSharedSecret != null) {
            r.ephemeralSharedSecret = n.ephemeralSharedSecret;
        }
        if (n.afterReadDuration != null && o("WAWebAfterReadUtils").isAfterReadEnabled()) {
            r.afterReadDuration = n.afterReadDuration;
        }
        const n_disappearingMode = n.disappearingMode;
        if (n_disappearingMode != null) {
            const i = {
                from: t
            };
            const l = o("WAWebDisappearingModeProtoUtils").protoToDisappearingModeInitiator(i, n_disappearingMode);
            if (l != null) {
                r.disappearingModeInitiator = l;
            }
            const s = o("WAWebDisappearingModeProtoUtils").protoToDisappearingMode(i, n_disappearingMode);
            if (s != null) {
                r.disappearingModeTrigger = s.disappearingModeTrigger;
                if (s.initiatedByMe != null) {
                    r.disappearingModeInitiatedByMe = s.initiatedByMe;
                }
            }
        }
        return r;
    }
    l.extractEphemeralFieldsFromScheduledMsg = e;
}, 98);