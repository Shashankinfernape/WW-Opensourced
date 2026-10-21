__d("WAWebSharableEventNotification", [
    "fbt",
    "WAWebBaseNotification",
    "WAWebChatCollection",
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebLidMigrationUtils",
    "WAWebNotificationIconUtils",
    "WAWebOpenSharableEventInviteNotSupportedModalAction",
    "WAWebSharableEventNotificationConstants",
    "WAWebSharableEventNotificationStrings",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l, s) {
    const e = ((e)=>{
        function t({ payload, type }) {
            let n;
            n = e.call(this) || this;
            n.payload = payload;
            n.type = type;
            n.senderWid = payload.senderWidString != null ? o("WAWebWidFactory").createWid(payload.senderWidString) : null;
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.buildKey = function() {
            return `sharable_event:${o("WAWebSharableEventNotificationConstants").getIdentifierTag(this.type)}:${this.payload.eventId}`;
        };
        t_prototype.getBannerOptions = function() {
            return {
                wid: this.senderWid ?? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
                title: this.computeTitle(),
                body: o("WAWebSharableEventNotificationStrings").formatSharableEventBody(this.payload.body) ?? "",
                onClick: o("WAWebOpenSharableEventInviteNotSupportedModalAction").openSharableEventInviteNotSupportedModal,
                doNotOpenChat: true
            };
        };
        t_prototype.getSenderContact = function() {
            const senderWid = this.senderWid;
            if (senderWid == null) {
                return null;
            }
            const n = o("WAWebLidMigrationUtils").shouldHaveAccountLid(senderWid) ? o("WAWebLidMigrationUtils").toLid(senderWid) : null;
            if (n != null) {
                const r = o("WAWebContactCollection").ContactCollection.get(n);
                if (r != null) {
                    return r;
                }
            }
            const a = o("WAWebLidMigrationUtils").toPn(senderWid) ?? senderWid;
            return o("WAWebContactCollection").ContactCollection.get(a);
        };
        t_prototype.computeTitle = function() {
            if (this.type === o("WAWebSharableEventNotificationConstants").SharableEventNotificationType.Suspended) {
                return s._("Event suspended").toString();
            }
            if (!o("WAWebSharableEventNotificationConstants").isSenderAttributed(this.type)) {
                return this.payload.title;
            }
            const e = this.getSenderContact();
            const t = e != null ? o("WAWebFrontendContactGetters").getFormattedName(e) : null;
            if (t != null && t.length > 0) {
                return t;
            }
            return this.payload.title;
        };
        t_prototype.getIcon = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const senderWid = this.senderWid;
                if (!o("WAWebSharableEventNotificationConstants").isSenderAttributed(this.type) || senderWid == null) {
                    return o("WAWebNotificationIconUtils").WHATSAPP_DEFAULT_ICON;
                }
                const n = o("WAWebChatCollection").ChatCollection.getLatestChatForWid(senderWid);
                if (n != null) {
                    return o("WAWebNotificationIconUtils").getChatNotificationIcon(n, this.abortController.signal, o("WAWebNotificationIconUtils").USER_DEFAULT_ICON);
                }
                const r = this.getSenderContact();
                return o("WAWebNotificationIconUtils").getNotificationIconByWid(r?.id ?? senderWid, this.abortController.signal, o("WAWebNotificationIconUtils").USER_DEFAULT_ICON);
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.getChatKind = function() {
            return null;
        };
        return t;
    })(o("WAWebBaseNotification").WABaseNotification);
    l.WAWebSharableEventNotification = e;
}, 226);