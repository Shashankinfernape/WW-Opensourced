__d("WAWebMsgEphemerality", [
    "WAWebEphemeralityTypes",
    "WAWebMsgType"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        if (e.ephemeralDuration == null && e.ephemeralSettingTimestamp == null && e.disappearingModeInitiator == null) {
            return null;
        }
        const n = e.ephemeralDuration ?? 0;
        let r = e.ephemeralSettingTimestamp;
        let a = e.disappearingModeInitiator;
        const { disappearingModeTrigger: i, disappearingModeInitiatedByMe: l } = e;
        if (e.subtype === "ephemeral_setting") {
            r = e.t;
            a = o("WAWebEphemeralityTypes").DisappearingModeInitiator.ChangedInChat;
        }
        return {
            duration: n,
            settingTimestamp: r,
            initiator: a,
            disappearingModeTrigger: i,
            initiatedByMe: l,
            afterReadDuration: e.afterReadDuration
        };
    }
    const u = [
        (e = o("WAWebMsgType")).MSG_TYPE.CHAT,
        e.MSG_TYPE.IMAGE,
        e.MSG_TYPE.VIDEO,
        e.MSG_TYPE.AUDIO,
        e.MSG_TYPE.PTT,
        e.MSG_TYPE.DOCUMENT,
        e.MSG_TYPE.PRODUCT,
        e.MSG_TYPE.STICKER,
        e.MSG_TYPE.POLL_CREATION,
        e.MSG_TYPE.POLL_RESULT_SNAPSHOT,
        e.MSG_TYPE.NEWSLETTER_ADMIN_INVITE,
        e.MSG_TYPE.GROUPS_V4_INVITE,
        e.MSG_TYPE.CALL_LOG
    ];
    function c(e) {
        return !!u.includes(e);
    }
    l.getMsgEphemeralitySettings = s;
    l.ephemeralMessageTypes = u;
    l.messageSupportsEphemerality = c;
}, 98);