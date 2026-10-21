__d("WAWebWaitingRoomNameFormat", [
    "WAWebCallingGuestParticipantName",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebFrontendContactGetters",
    "WAWebGuestNameFormat",
    "WAWebParticipantListUtils",
    "WAWebWidFormat"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const r = u(e);
        const { contact, isGuest, notifyName } = r;
        return (o("WAWebCallingGuestParticipantName").getCallingGuestParticipantName(isGuest, notifyName)?.displayName ?? o("WAWebGuestNameFormat").maybeGetNameWithGuestLabel(contact != null ? o("WAWebFrontendContactGetters").getDisplayName(contact) : o("WAWebWidFormat").widToFormattedUser(e), isGuest)).toString();
    }
    function s(e) {
        const r = u(e);
        const { isGuest, notifyName } = r;
        return (o("WAWebCallingGuestParticipantName").getCallingGuestParticipantName(isGuest, notifyName)?.displayName ?? o("WAWebGuestNameFormat").maybeGetNameWithGuestLabel(o("WAWebParticipantListUtils").formatParticipantWidsPreserveOrder([
            e
        ], true), isGuest)).toString();
    }
    function u(e) {
        const t = o("WAWebContactCollection").ContactCollection.get(e);
        return {
            contact: t,
            isGuest: t != null ? o("WAWebFrontendContactGetters").getIsGuest(t) : false,
            notifyName: t != null ? o("WAWebContactGetters").getNotifyName(t) : null
        };
    }
    l.getWaitingRoomUserDisplayName = e;
    l.getWaitingRoomNotificationUserDisplayName = s;
}, 98);