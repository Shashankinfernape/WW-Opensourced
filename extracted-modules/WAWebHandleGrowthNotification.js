__d("WAWebHandleGrowthNotification", [
    "WADeprecatedWapParser",
    "WALogger",
    "WATimeUtils",
    "WAWap",
    "WAWebChatFindBridge",
    "WAWebChatMessageCountsWamEvent",
    "WAWebChatThreadLogging",
    "WAWebCreateChat",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebJidToWid",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebNotificationDeliveryWamEvent",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebWamEnumNotificationTypeEnum",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = {
        contacts: "contacts",
        "w:growth": "w:growth"
    };
    const d = new (r("WADeprecatedWapParser"))("incomingGrowthNotificationParser", function(e) {
        e.assertTag("notification");
        const t = e.attrString("id");
        const n = e.attrWapJid("from");
        const r = e.attrEnum("type", c);
        const o = {
            stanzaId: t,
            from: n,
            type: r
        };
        if (e.hasChild("invite")) {
            const a = e.child("invite");
            if (a.hasChild("receiver")) {
                const i = a.child("receiver");
                return babelHelpers.extends({
                    receiverId: i.hasAttr("user") ? i.attrUserJid("user") : null,
                    reason: i.hasAttr("reason") ? i.attrString("reason") : ""
                }, o);
            }
        }
        return o;
    });
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const n = d.parse(t);
            if (n.error) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Parsing Error: ",
                    ""
                ])), n.error.toString());
                throw n.error;
            }
            const n_success = n.success;
            const r_type = n_success.type;
            if (r_type === "contacts") {
                if (!("receiverId" in n_success) || n_success.receiverId == null) {
                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "Invalid receiver id"
                    ])));
                    return;
                }
                const i = o("WAWebJidToWid").userJidToUserWid(n_success.receiverId);
                const l = "reason" in n_success && n_success.reason === "clicked_invite_link";
                yield _(i, l);
            }
            return o("WAWap").wap("ack", {
                id: o("WAWap").CUSTOM_STRING(n_success.stanzaId),
                class: "notification",
                type: r_type,
                to: n_success.from
            });
        });
        return p.apply(this, arguments);
    }
    function _(e, t) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = yield o("WAWebChatFindBridge").findLocal(e.toString());
            if (n == null) {
                yield o("WAWebCreateChat").createChat({
                    createChatOrigin: "createChatOnInviteAccept",
                    destination: {
                        chatId: e
                    }
                });
                const r = yield o("WAWebChatFindBridge").findLocal(e.toString());
                if (r == null) {
                    o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "Unable to create new chat thread with receiver"
                    ])));
                    return;
                }
                const a = r.id;
                const i = yield g(a, t);
                const l = yield o("WAWebChatThreadLogging").getChatThreadID(r.id.toJid());
                new (o("WAWebNotificationDeliveryWamEvent")).NotificationDeliveryWamEvent({
                    threadId: l,
                    uiNotificationType: o("WAWebWamEnumNotificationTypeEnum").NOTIFICATION_TYPE_ENUM.INVITE_JOINED
                }).commit();
                yield o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                    chatId: a,
                    newMsg: i,
                    handleSingleMsgOrigin: "processInviteDeepLinkSenderNotification"
                });
                new (o("WAWebChatMessageCountsWamEvent")).ChatMessageCountsWamEvent({
                    isInviteCreatedThread: true
                }).commit();
            }
        });
        return f.apply(this, arguments);
    }
    function g(e, t) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            return {
                id: new (r("WAWebMsgKey"))({
                    remote: e,
                    fromMe: false,
                    id: yield r("WAWebMsgKey").newId()
                }),
                from: e,
                subtype: "sender_invite",
                to: o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
                type: "notification_template",
                kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
                viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                t: o("WATimeUtils").unixTime(),
                templateParams: [
                    t.toString()
                ]
            };
        });
        return h.apply(this, arguments);
    }
    l.default = m;
}, 98);