__d("WAWebCallLinkJoinedNotification", [
    "fbt",
    "WAWebBaseNotification",
    "WAWebChatFlowTypes",
    "WAWebNotificationHelpers",
    "WAWebNotificationIconUtils",
    "WAWebNotificationMuteReason",
    "WAWebParticipantListUtils",
    "asyncToGeneratorRuntime",
    "bx"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    const e = r("bx").getURL(r("bx")("9555"));
    const u = ((t)=>{
        function a({ callId, linkToken, onJoinCall, participantWids }) {
            let n;
            n = t.call(this) || this;
            n.callId = callId;
            n.linkToken = linkToken;
            n.onJoinCall = onJoinCall;
            n.participantWids = participantWids;
            return n;
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.shouldMute = function(t) {
            if (o("WAWebNotificationHelpers").appIsActive()) {
                return r("WAWebNotificationMuteReason").AppState;
            }
            return null;
        };
        a_prototype.buildKey = function() {
            return `call-link-joined:${this.callId}`;
        };
        a_prototype.getChatKind = function() {
            return o("WAWebChatFlowTypes").ChatKindType.Group;
        };
        a_prototype.getIcon = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const t = this.participantWids[0];
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
            const t = this.$WACallLinkJoinedNotification$p_1();
            const n = s._("Joined your call link").toString();
            const r = this.participantWids[0] ?? null;
            return {
                wid: r,
                title: t,
                body: n,
                onClick: this.onJoinCall,
                doNotOpenChat: true,
                tag: `call-link-joined:${this.callId}`
            };
        };
        a_prototype.$WACallLinkJoinedNotification$p_1 = function() {
            if (this.participantWids.length === 0) {
                return s._("Someone joined your call link").toString();
            }
            return o("WAWebParticipantListUtils").formatParticipantWidsPreserveOrder(this.participantWids, true);
        };
        return a;
    })(o("WAWebBaseNotification").WABaseNotification);
    l.WACallLinkJoinedNotification = u;
}, 226);