__d("WAWebCallingGuestParticipantName", [
    "WAWebChatContactUtils",
    "WAWebGuestNameFormat"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const baseName = o("WAWebChatContactUtils").getFormattedNotifyName(t);
        if (!e || baseName === "") {
            return null;
        }
        return {
            baseName,
            displayName: o("WAWebGuestNameFormat").maybeGetNameWithGuestLabel(baseName, true)
        };
    }
    l.getCallingGuestParticipantName = e;
}, 98);