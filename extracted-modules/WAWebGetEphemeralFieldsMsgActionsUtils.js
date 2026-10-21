__d("WAWebGetEphemeralFieldsMsgActionsUtils", [
    "WAWebChatEphemerality",
    "WAWebChatGetters"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = {};
        const n = o("WAWebChatEphemerality").getAfterReadEnvelopeForChat(e);
        const { afterReadDuration, ephemeralDuration } = n;
        if (o("WAWebChatEphemerality").isEphemeralSettingOn(e)) {
            t.ephemeralDuration = ephemeralDuration;
        }
        const i = o("WAWebChatEphemerality").getEphemeralSettingTimestamp(e);
        if (i != null) {
            t.ephemeralSettingTimestamp = i;
        }
        const l = o("WAWebChatEphemerality").getDisappearingModeInitiator(e);
        if (l != null) {
            t.disappearingModeInitiator = l;
        }
        const s = o("WAWebChatEphemerality").getDisappearingModeTrigger(e);
        if (s != null) {
            t.disappearingModeTrigger = s;
        }
        const u = o("WAWebChatEphemerality").getDisappearingModeInitiatedByMe(e);
        if (u != null) {
            t.disappearingModeInitiatedByMe = u;
        }
        if (o("WAWebChatGetters").getIsGroup(e)) {
            const c = o("WAWebChatEphemerality").getDisappearingModeTriggerGroups(e);
            if (c != null) {
                t.disappearingModeTrigger = c;
            }
            const d = o("WAWebChatEphemerality").getDisappearingModeInitiatedByMeGroups(e);
            if (d != null) {
                t.disappearingModeInitiatedByMe = d;
            }
        }
        if (afterReadDuration != null) {
            t.afterReadDuration = afterReadDuration;
        }
        return babelHelpers.extends({}, t);
    }
    l.getEphemeralFields = e;
}, 98);