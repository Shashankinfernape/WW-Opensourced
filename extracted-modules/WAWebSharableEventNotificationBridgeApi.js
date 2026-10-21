__d("WAWebSharableEventNotificationBridgeApi", [
    "WALogger",
    "WAWebSharableEventNotification",
    "WAWebSharableEventNotificationConstants",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(typeRaw) {
        return o("WAWebSharableEventNotificationConstants").SharableEventNotificationType.cast(typeRaw);
    }
    const u = {
        showSharableEventNotification: (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ payload, typeRaw }) {
                const i = s(typeRaw);
                if (i == null) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[sharable_event][notification] unrecognized typeRaw=",
                        ""
                    ])), typeRaw).sendLogs("sharable-event-notification-unknown-type");
                    throw r("err")(`[sharable_event][notification] unrecognized typeRaw=${typeRaw}`);
                }
                const l = new (o("WAWebSharableEventNotification")).WAWebSharableEventNotification({
                    payload,
                    type: i
                });
                yield l.triggerNotification(null);
            });
            function a(e) {
                return t.apply(this, arguments);
            }
            return a;
        })()
    };
    l.SharableEventNotificationBridgeApi = u;
}, 98);