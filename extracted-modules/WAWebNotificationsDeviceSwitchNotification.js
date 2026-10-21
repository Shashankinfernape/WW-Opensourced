__d("WAWebNotificationsDeviceSwitchNotification", [
    "fbt",
    "WAWebBaseNotification",
    "WAWebNotificationHelpers",
    "WAWebNotificationIconUtils",
    "WAWebNotificationMuteReason",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l, s) {
    const e = ((e)=>{
        function t({ otpCode, wid }) {
            let n;
            n = e.call(this) || this;
            n.wid = wid;
            n.otpCode = otpCode;
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.shouldMute = function(t) {
            if (o("WAWebNotificationHelpers").appIsActive()) {
                return r("WAWebNotificationMuteReason").AppState;
            }
            return null;
        };
        t_prototype.buildKey = function() {
            return `registration:${this.wid.toString()}`;
        };
        t_prototype.getChatKind = function() {
            return null;
        };
        t_prototype.getIcon = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                return o("WAWebNotificationIconUtils").getNotificationIconByWid(this.wid, this.abortController.signal, o("WAWebNotificationIconUtils").USER_DEFAULT_ICON);
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.getBannerOptions = function() {
            const e = s._("Do not share it with anyone. Your code is {otpCode}.", [
                s._param("otpCode", this.otpCode)
            ]).toString();
            const t = s._("Code for new phone").toString();
            return {
                wid: this.wid,
                title: t,
                body: e,
                doNotOpenChat: true
            };
        };
        return t;
    })(o("WAWebBaseNotification").WABaseNotification);
    l.WADeviceSwitchNotification = e;
}, 226);