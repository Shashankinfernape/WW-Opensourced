__d("WAWebInCallWaitingRoomNotificationHelper", [
    "WALogger",
    "WAWebABProps",
    "WAWebNotificationBackend",
    "WAWebNotificationController",
    "WAWebVoipPopoutWindowState",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = "enable_waiting_room_admin_ui";
    function u({ callId, waitingRoomUsers, waitingRoomUsersCount }) {
        if (o("WAWebABProps").getABPropConfigValue(s)) {
            if (waitingRoomUsersCount === 0) {
                c(callId);
                return;
            }
            o("WAWebNotificationBackend").showWaitingRoomNotification({
                callId,
                isInCall: true,
                linkToken: "",
                waitingRoomUserWids: waitingRoomUsers,
                onOpenWaitingRoom
            }).catch((t)=>{
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: failed to show in-call waiting-room notification"
                ]))).catching(r("getErrorSafe")(t)).sendLogs("voip-in-call-waiting-room-notif");
            });
        }
    }
    function c(e) {
        if (o("WAWebABProps").getABPropConfigValue(s)) {
            o("WAWebNotificationController").WANotificationController.closeOrCancelNotification(`waiting-room:${e}`);
        }
    }
    function onOpenWaitingRoom() {
        if (o("WAWebVoipPopoutWindowState").isPopoutWindowAlive()) {
            const e = o("WAWebVoipPopoutWindowState").getPopoutWindow();
            if (e != null) {
                try {
                    e.focus();
                    return;
                } catch (e) {}
            }
        }
        try {
            window.focus();
        } catch (e) {}
    }
    l.maybeShowOrCloseInCallWaitingRoomNotification = u;
    l.closeInCallWaitingRoomNotification = c;
}, 98);