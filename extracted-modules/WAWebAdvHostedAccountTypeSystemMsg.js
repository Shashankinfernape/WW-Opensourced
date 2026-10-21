__d("WAWebAdvHostedAccountTypeSystemMsg", [
    "WATimeUtils",
    "WAWebBizCoexGatingUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebProtobufsAdv.pb",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow"
], function(t, n, r, o, a, i, l) {
    function e({ accountTypeChangedUser, chatId, newAdvAccountType, useEncryptNowSubtype = false }) {
        if (!chatId.isUser()) {
            return null;
        }
        const s = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
        const u = new (r("WAWebMsgKey"))({
            fromMe: o("WAWebUserPrefsMeUser").isMeAccount(accountTypeChangedUser),
            remote: chatId,
            id: r("WAWebMsgKey").newId_DEPRECATED()
        });
        if (newAdvAccountType === o("WAWebProtobufsAdv.pb").ADVEncryptionType.E2EE) {
            return {
                id: u,
                t: o("WATimeUtils").unixTime(),
                type: "e2e_notification",
                kind: o("WAWebMsgType").MsgKind.E2eNotification,
                viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                subtype: useEncryptNowSubtype ? "encrypt_now" : "encrypt",
                from: chatId,
                to: s
            };
        }
        if (newAdvAccountType === o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED) {
            return {
                id: u,
                t: o("WATimeUtils").unixTime(),
                type: "notification_template",
                kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
                viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                subtype: "biz_account_type_changed_to_hosted",
                from: chatId,
                to: s
            };
        }
        return null;
    }
    function s(e, t) {
        if (!e.isUser()) {
            return null;
        }
        const n = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
        const a = new (r("WAWebMsgKey"))({
            fromMe: o("WAWebUserPrefsMeUser").isMeAccount(t),
            remote: e,
            id: r("WAWebMsgKey").newId_DEPRECATED()
        });
        return {
            id: a,
            t: o("WATimeUtils").unixTime(),
            type: "notification_template",
            kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
            viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
            subtype: "biz_me_account_type_is_hosted",
            from: e,
            to: n
        };
    }
    function u(e, t) {
        if (!e.isUser()) {
            return null;
        }
        const n = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
        const a = new (r("WAWebMsgKey"))({
            fromMe: o("WAWebUserPrefsMeUser").isMeAccount(t),
            remote: e,
            id: r("WAWebMsgKey").newId_DEPRECATED()
        });
        return {
            id: a,
            t: o("WATimeUtils").unixTime(),
            type: "notification_template",
            kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
            viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
            subtype: "biz_account_type_is_hosted",
            from: e,
            to: n
        };
    }
    function c(e, t) {
        if (o("WAWebBizCoexGatingUtils").smbHostedLazySystemMsgInsertInHistorySyncEnabled() && e.isUser()) {
            const n = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
            const a = new (r("WAWebMsgKey"))({
                fromMe: o("WAWebUserPrefsMeUser").isMeAccount(t),
                remote: e,
                id: r("WAWebMsgKey").newId_DEPRECATED()
            });
            return {
                id: a,
                t: o("WATimeUtils").unixTime(),
                type: "notification_template",
                kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
                viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                subtype: "biz_me_account_type_is_hosted_transition",
                from: e,
                to: n
            };
        }
        return null;
    }
    l.genAdvAccountTypeChangeNotificationMsg = e;
    l.genAdvMeAccountIsHostedNotificationMsg = s;
    l.genAdvAccountTypeInitialSysMsg = u;
    l.genAdvAccountTypeSelfTransitionToCoexNotificationMsg = c;
}, 98);