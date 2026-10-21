__d("WAWebCallAcceptedElsewhereNotification", [
    "fbt",
    "WAWebBaseNotification",
    "WAWebChatFlowTypes",
    "WAWebNotificationIconUtils",
    "asyncToGeneratorRuntime",
    "bx"
], function(t, n, r, o, a, i, l, s) {
    const e = r("bx").getURL(r("bx")("9555"));
    const u = ((t)=>{
        function r({ callId, groupJid, isVideo, onJoinCall, participantWids, title }) {
            let n;
            n = t.call(this) || this;
            n.callId = callId;
            n.groupJid = groupJid;
            n.participantWids = participantWids;
            n.isVideo = isVideo;
            n.onJoinCall = onJoinCall;
            n.title = title;
            return n;
        }
        babelHelpers.inheritsLoose(r, t);
        const r_prototype = r.prototype;
        r_prototype.buildKey = function() {
            return `call-accepted-elsewhere:${this.callId}`;
        };
        r_prototype.getChatKind = function() {
            return o("WAWebChatFlowTypes").ChatKindType.Group;
        };
        r_prototype.getIcon = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (this.groupJid != null) {
                    return o("WAWebNotificationIconUtils").getNotificationIconByWid(this.groupJid, this.abortController.signal, e);
                }
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
        r_prototype.getBannerOptions = function() {
            const n = this.isVideo ? s._("Join video call on this device").toString() : s._("Join voice call on this device").toString();
            const r = this.groupJid ?? this.participantWids[0] ?? null;
            return {
                wid: r,
                title: this.title,
                body: n,
                onClick: this.onJoinCall,
                doNotOpenChat: true,
                tag: `call-accepted-elsewhere:${this.callId}`
            };
        };
        return r;
    })(o("WAWebBaseNotification").WABaseNotification);
    l.WACallAcceptedElsewhereNotification = u;
}, 226);