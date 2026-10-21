__d("WAWebVoiceChatWaveNotification", [
    "fbt",
    "WAWebApiContact",
    "WAWebBaseNotification",
    "WAWebCallCollection",
    "WAWebChatFlowTypes",
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebNotificationIconUtils",
    "WAWebNotificationMuteReason",
    "WAWebWidFactory",
    "WAWebWidFormat",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    const e = ((e)=>{
        function t({ callId, groupJid, onJoinCall, senderWid }) {
            let n;
            n = e.call(this) || this;
            n.callId = callId;
            n.senderWid = senderWid;
            n.groupJid = groupJid;
            n.onJoinCall = onJoinCall;
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.shouldMute = function(t) {
            const activeCall = r("WAWebCallCollection").activeCall;
            if (activeCall != null && activeCall.id === this.callId) {
                return r("WAWebNotificationMuteReason").AppState;
            }
            return null;
        };
        t_prototype.buildKey = function() {
            return `voice-chat-wave:${this.callId}`;
        };
        t_prototype.getChatKind = function() {
            if (this.groupJid != null) {
                return o("WAWebChatFlowTypes").ChatKindType.Group;
            }
            return o("WAWebChatFlowTypes").ChatKindType.Chat;
        };
        t_prototype.getIcon = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                return o("WAWebNotificationIconUtils").getNotificationIconByWid(this.senderWid, this.abortController.signal, o("WAWebNotificationIconUtils").USER_DEFAULT_ICON);
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.getBannerOptions = function() {
            const e = this.$WAVoiceChatWaveNotification$p_1();
            return {
                wid: this.senderWid,
                title: e,
                body: this.$WAVoiceChatWaveNotification$p_2(e),
                onClick: this.onJoinCall,
                doNotOpenChat: true,
                tag: this.buildKey()
            };
        };
        t_prototype.$WAVoiceChatWaveNotification$p_1 = function() {
            const e = this.$WAVoiceChatWaveNotification$p_3();
            if (e != null) {
                return o("WAWebFrontendContactGetters").getDisplayName(e);
            }
            return o("WAWebWidFormat").widToFormattedUser(this.senderWid);
        };
        t_prototype.$WAVoiceChatWaveNotification$p_3 = function() {
            const senderWid = this.senderWid;
            if (!senderWid.isUser()) {
                return o("WAWebContactCollection").ContactCollection.get(senderWid);
            }
            const t = o("WAWebWidFactory").asUserWidOrThrow(senderWid);
            let n = o("WAWebContactCollection").ContactCollection.get(t);
            if (n != null && n.name != null) {
                return n;
            }
            const r = o("WAWebApiContact").getAlternateUserWid(t);
            if (r != null) {
                const a = o("WAWebContactCollection").ContactCollection.get(r);
                if (a != null && (n == null || a.name != null)) {
                    n = a;
                }
            }
            if (n != null && n.name == null && n.phoneNumber != null) {
                const i = o("WAWebContactCollection").ContactCollection.get(n.phoneNumber);
                if (i != null && i.name != null) {
                    n = i;
                }
            }
            return n;
        };
        t_prototype.$WAVoiceChatWaveNotification$p_2 = function(t) {
            return s._("👋 {senderName} wants to talk now. Join the conversation!", [
                s._param("senderName", t)
            ]).toString();
        };
        return t;
    })(o("WAWebBaseNotification").WABaseNotification);
    l.WAVoiceChatWaveNotification = e;
}, 226);