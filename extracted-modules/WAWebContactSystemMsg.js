__d("WAWebContactSystemMsg", [
    "WATimeUtils",
    "WAWebABProps",
    "WAWebApiContact",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameTypes",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = o("WAWebUserPrefsMeUser").getMeUserOrThrow();
        const a = new (r("WAWebMsgKey"))({
            fromMe: o("WAWebUserPrefsMeUser").isMeAccount(t),
            remote: e,
            id: r("WAWebMsgKey").newId_DEPRECATED()
        });
        return {
            id: a,
            t: o("WATimeUtils").unixTime(),
            type: "e2e_notification",
            kind: o("WAWebMsgType").MsgKind.E2eNotification,
            viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
            subtype: "identity",
            from: e,
            to: n,
            body: t.toString()
        };
    }
    function s(e, t = "encrypt") {
        return f(e, {
            type: "e2e_notification",
            kind: o("WAWebMsgType").MsgKind.E2eNotification,
            subtype: t,
            templateParams: []
        });
    }
    function u(e) {
        return f(e, {
            type: "e2e_notification",
            kind: o("WAWebMsgType").MsgKind.E2eNotification,
            subtype: "encrypt_now",
            templateParams: []
        });
    }
    function c(e, t, n = []) {
        return f(e, {
            type: "notification_template",
            kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
            subtype: t,
            templateParams: n
        });
    }
    function d({ afterReadDuration: t, chatId: n, duration: a, initiatedByMe: i }) {
        const l = i ? o("WAWebUserPrefsMeUser").getMeUserOrThrow() : n;
        if (l == null) {
            throw r("err")(`Cannot set null initiator for DDM system message: ${n.toString()} / ${String(i)}`);
        }
        return f(n, babelHelpers.extends({
            type: "notification_template",
            kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
            subtype: "disappearing_mode",
            templateParams: [],
            ephemeralDuration: a,
            ephemeralSettingUser: l
        }, t != null ? {
            afterReadDuration: t
        } : {}));
    }
    function m(e, t, n) {
        return f(e, {
            type: "notification_template",
            kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
            subtype: "disappearing_mode_update",
            templateParams: [],
            ephemeralDuration: t,
            ephemeralSettingUser: n
        });
    }
    function p({ chatId: t, displayName: n, newUsername: r, oldUsername: a, viewMode: i, wid: l }) {
        return f(t, babelHelpers.extends({
            type: "notification_template",
            kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
            subtype: "change_username",
            templateParams: [
                a != null ? o("WAWebUsernameTypes").serializeUsername(a) : "",
                r != null ? o("WAWebUsernameTypes").serializeUsername(r) : "",
                l,
                n ?? ""
            ]
        }, i != null ? {
            viewMode: i
        } : {}));
    }
    function _(e) {
        return f(e, {
            type: "notification_template",
            kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
            subtype: "disappearing_mode_unsupported",
            templateParams: []
        });
    }
    function f(e, t) {
        const n = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow();
        const a = o("WAWebUserPrefsMeUser").getMeUserOrThrow();
        const i = new (r("WAWebMsgKey"))({
            fromMe: o("WAWebUserPrefsMeUser").isMeAccount(e),
            remote: e,
            id: r("WAWebMsgKey").newId_DEPRECATED()
        });
        return babelHelpers.extends({
            id: i,
            t: o("WATimeUtils").unixTime(),
            from: e,
            to: e.isLid() ? n : a
        }, t);
    }
    function g(e, t) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (t.isSignupDeeplink === true) {
                return f(e, {
                    type: o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE,
                    kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
                    subtype: o("WAWebCommonMsgSubtypeTypes").MsgSubtype.ContactInfoCard,
                    templateParams: [
                        e
                    ]
                });
            }
            if (t.isEnterprise && !t.isFMXCtWA || !e.isUser() || e.isPSA() || t.isWASupportStartingChat || t.iAmStartingChat && !t.isFMXCtWA || t.isFromCTWA && !t.isFMXCtWA && o("WAWebABProps").getABPropConfigValue("fmx_ctwa_kill_switch") || e.isBot() || e.isAiHub()) {
                return null;
            }
            const n = yield o("WAWebApiContact").isAddressBookContact(o("WAWebWidToJid").widToUserJid(o("WAWebWidFactory").asUserWidOrThrow(e)));
            if (n) {
                return null;
            }
            return f(e, {
                type: "notification_template",
                kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
                subtype: "contact_info_card",
                templateParams: [
                    e
                ]
            });
        });
        return h.apply(this, arguments);
    }
    function y(e, t) {
        return f(e, {
            type: "notification_template",
            kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
            subtype: "acp2_system_message",
            acp2Setting: t,
            templateParams: []
        });
    }
    function C(e, t) {
        return f(e, {
            type: "notification_template",
            kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
            subtype: "limit_sharing_system_message",
            limitSharing: t,
            templateParams: []
        });
    }
    function b(e) {
        return f(e, {
            type: "notification_template",
            kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
            subtype: "mm_signal_sharing_system_message",
            templateParams: []
        });
    }
    l.genSecurityCodeNotificationMsg = e;
    l.genEncryptNotificationMsg = s;
    l.genEncryptNotificationMsgAfterBotRemoved = u;
    l.genNonE2ENotificationMsg = c;
    l.genDefaultDisappearingModeSystemMsg = d;
    l.genDisappearingModeUpdateSystemMsg = m;
    l.genUsernameChangeSystemMsg = p;
    l.genDisappearingModeUnsupportedSystemMsg = _;
    l.genNotificationMsg = f;
    l.genContactInfoCardMsg = g;
    l.genAcp2UpdateSystemMsg = y;
    l.genLimitSharingUpdateSystemMsg = C;
    l.genMmSignalSharingSystemMsg = b;
}, 98);