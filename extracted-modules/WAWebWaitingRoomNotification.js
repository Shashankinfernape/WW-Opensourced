__d("WAWebWaitingRoomNotification", [
    "fbt",
    "WAWebBaseNotification",
    "WAWebChatFlowTypes",
    "WAWebNotificationHelpers",
    "WAWebNotificationIconUtils",
    "WAWebNotificationMuteReason",
    "WAWebParticipantListUtils",
    "WAWebVoipPopoutWindowState",
    "WAWebWaitingRoomNameFormat",
    "asyncToGeneratorRuntime",
    "bx"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    const e = r("bx").getURL(r("bx")("9555"));
    const u = ((t)=>{
        function a(e) {
            let n;
            const { callId, isInCall } = e;
            const a = isInCall === undefined ? false : isInCall;
            const { linkToken, onOpenWaitingRoom, waitingRoomUserWids } = e;
            n = t.call(this) || this;
            n.callId = callId;
            n.linkToken = linkToken;
            n.waitingRoomUserWids = waitingRoomUserWids;
            n.onOpenWaitingRoom = onOpenWaitingRoom;
            n.isInCall = a;
            return n;
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.shouldMute = function(t) {
            if (this.isInCall && c()) {
                return r("WAWebNotificationMuteReason").AppState;
            }
            return null;
        };
        a_prototype.buildKey = function() {
            return `waiting-room:${this.callId}`;
        };
        a_prototype.getChatKind = function() {
            return o("WAWebChatFlowTypes").ChatKindType.Group;
        };
        a_prototype.getIcon = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const t = this.waitingRoomUserWids[0];
                if (t != null) {
                    return o("WAWebNotificationIconUtils").getNotificationIconByWid(t, this.abortController.signal, o("WAWebNotificationIconUtils").USER_DEFAULT_ICON);
                }
                return e;
            });
            function r() {
                return t.apply(this, arguments);
            }
            return r;
        })();
        a_prototype.getBannerOptions = function() {
            const t = this.$WAWaitingRoomNotification$p_1();
            const n = s._("_j{\"*\":\"Want to join your call link\",\"_1\":\"Wants to join your call link\"}", [
                s._plural(this.waitingRoomUserWids.length)
            ]).toString();
            const r = this.waitingRoomUserWids[0] ?? null;
            return {
                wid: r,
                title: t,
                body: n,
                onClick: this.onOpenWaitingRoom,
                doNotOpenChat: true,
                tag: `waiting-room:${this.callId}`
            };
        };
        a_prototype.$WAWaitingRoomNotification$p_1 = function() {
            if (this.waitingRoomUserWids.length === 0) {
                return s._("Someone").toString();
            }
            if (this.waitingRoomUserWids.length === 1) {
                return o("WAWebWaitingRoomNameFormat").getWaitingRoomNotificationUserDisplayName(this.waitingRoomUserWids[0]);
            }
            return o("WAWebParticipantListUtils").formatParticipantWidsPreserveOrder(this.waitingRoomUserWids, true);
        };
        return a;
    })(o("WAWebBaseNotification").WABaseNotification);
    function c() {
        const e = o("WAWebVoipPopoutWindowState").getPopoutWindow();
        if (e == null) {
            return o("WAWebNotificationHelpers").appIsActive();
        }
        try {
            return e.document.hasFocus();
        } catch (e) {
            return false;
        }
    }
    l.WAWaitingRoomNotification = u;
}, 226);