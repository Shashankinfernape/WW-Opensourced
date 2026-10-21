__d("WAWebNotificationsTestNotification", [
    "fbt",
    "WAWebBaseNotification",
    "WAWebNotificationIconUtils",
    "WAWebPushNotificationsGatingUtils",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "fbs"
], function(t, n, r, o, a, i, l, s) {
    const e = "verify-notification";
    const u = ((e)=>{
        function t(t) {
            let n;
            const r = t === undefined ? {} : t;
            const r_onClick = r.onClick;
            n = e.call(this) || this;
            n.$WATestNotification$p_1 = r_onClick;
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.shouldShowBanner = function() {
            return true;
        };
        t_prototype.buildKey = function() {
            return `test-notification:${this.creationAt}`;
        };
        t_prototype.getChatKind = function() {
            return null;
        };
        t_prototype.getIcon = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                return o("WAWebNotificationIconUtils").WHATSAPP_DEFAULT_ICON;
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.getBannerOptions = function() {
            const e = s._("WhatsApp").toString();
            const t = s._("Click here to complete the notification test").toString();
            return babelHelpers.extends({
                wid: o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
                title: e,
                body: t,
                doNotOpenChat: true,
                onClick: this.$WATestNotification$p_1
            }, c());
        };
        return t;
    })(o("WAWebBaseNotification").WABaseNotification);
    function c() {
        if (!o("WAWebPushNotificationsGatingUtils").canSupportNotificationActions() || navigator.serviceWorker?.controller == null) {
            return {};
        }
        return {
            showViaServiceWorker: true,
            actions: [
                {
                    action: e,
                    title: r("fbs")._("Confirm").toString()
                }
            ]
        };
    }
    l.WATestNotification = u;
}, 226);