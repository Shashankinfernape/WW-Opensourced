__d("WAWebMexLidChangeNotificationHandler", [
    "WAWebGetChatRecordByAccountLid",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebMexLidChangeNotification",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameGatingUtils",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = o("WAWebUserPrefsMeUser").getMeUserOrThrow();
            return {
                id: new (r("WAWebMsgKey"))({
                    remote: e,
                    fromMe: false,
                    id: yield r("WAWebMsgKey").newId()
                }),
                from: e,
                subtype: "change_lid",
                viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                t: Date.now(),
                to: n,
                type: "notification_template",
                kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
                templateParams: [
                    t
                ]
            };
        });
        return s.apply(this, arguments);
    }
    function u(e, t) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
                const r = o("WAWebMexLidChangeNotification").parseLidChangeNotification(n);
                const { newLid, oldLid } = r;
                const l = (yield o("WAWebGetChatRecordByAccountLid").getChatRecordByAccountLid(oldLid))[0];
                const s = l != null ? o("WAWebWidFactory").createWid(l.id) : oldLid;
                const u = yield e(s, newLid.toString());
                yield o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                    chatId: s,
                    newMsg: u,
                    handleSingleMsgOrigin: "lid_change_notification"
                });
            }
        });
        return c.apply(this, arguments);
    }
    l.mexHandleLidChangeNotification = u;
}, 98);