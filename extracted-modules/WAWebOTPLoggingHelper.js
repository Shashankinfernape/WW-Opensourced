__d("WAWebOTPLoggingHelper", [
    "WACryptoSha256",
    "WAWebABProps",
    "WAWebDBMessageSerialization",
    "WAWebFrontendMsgGetters",
    "WAWebLid1X1MigrationGating",
    "WAWebLidMigrationUtils",
    "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
    "WAWebMsgGetters",
    "WAWebMuteGetters",
    "WAWebOtpRetrieverWamEvent",
    "WAWebSettingsGetters",
    "WAWebSettingsModel",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsNotifications",
    "WAWebWamEnumChatsFolderType",
    "WAWebWamEnumCtaType",
    "WAWebWamEnumOtpEventSource",
    "WAWebWamEnumOtpEventType",
    "WAWebWamEnumOtpProductType",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (o("WAWebMsgGetters").getIsAuthenticationMessage(e)) {
                const t = new (o("WAWebOtpRetrieverWamEvent")).OtpRetrieverWamEvent({
                    ctaType: o("WAWebWamEnumCtaType").CTA_TYPE.COPY_CODE,
                    otpEventSource: o("WAWebWamEnumOtpEventSource").OTP_EVENT_SOURCE.CHAT_CTA,
                    otpEventType: o("WAWebWamEnumOtpEventType").OTP_EVENT_TYPE.CLICK
                });
                yield f(t, e);
                t.commit();
            }
        });
        return s.apply(this, arguments);
    }
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (o("WAWebMsgGetters").getIsAuthenticationMessage(e)) {
                const n = new (o("WAWebOtpRetrieverWamEvent")).OtpRetrieverWamEvent({
                    ctaType: o("WAWebWamEnumCtaType").CTA_TYPE.COPY_CODE,
                    otpEventSource: o("WAWebWamEnumOtpEventSource").OTP_EVENT_SOURCE.OTP_MESSAGE,
                    otpEventType: o("WAWebWamEnumOtpEventType").OTP_EVENT_TYPE.MESSAGE_RECEIVED
                });
                const r = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn()?.getDeviceId();
                if (r != null) {
                    n.waDeviceId = r;
                }
                yield f(n, e);
                n.commit();
            }
        });
        return c.apply(this, arguments);
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebDBMessageSerialization").messageFromDbRow(e);
            if (o("WAWebMsgGetters").getIsAuthenticationMessage(t)) {
                const n = new (o("WAWebOtpRetrieverWamEvent")).OtpRetrieverWamEvent({
                    ctaType: o("WAWebWamEnumCtaType").CTA_TYPE.COPY_CODE,
                    otpEventSource: o("WAWebWamEnumOtpEventSource").OTP_EVENT_SOURCE.OTP_MESSAGE,
                    otpEventType: o("WAWebWamEnumOtpEventType").OTP_EVENT_TYPE.MESSAGE_READ
                });
                yield f(n, t);
                n.commit();
            }
        });
        return m.apply(this, arguments);
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (o("WAWebMsgGetters").getIsAuthenticationMessage(e)) {
                const t = new (o("WAWebOtpRetrieverWamEvent")).OtpRetrieverWamEvent({
                    ctaType: o("WAWebWamEnumCtaType").CTA_TYPE.COPY_CODE,
                    otpEventSource: o("WAWebWamEnumOtpEventSource").OTP_EVENT_SOURCE.OTP_MESSAGE,
                    otpEventType: o("WAWebWamEnumOtpEventType").OTP_EVENT_TYPE.MESSAGE_DELETED
                });
                yield f(t, e);
                t.commit();
            }
        });
        return _.apply(this, arguments);
    }
    function f(e, t) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            e.otpSessionId = yield b(t);
            e.receiverCountryCode = String(o("WAWebLinkDevicePhoneNumberEntryInputFormatUtils").getCountryCodeIso(o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE().user));
            h(e, t);
            const t_templateId = t.templateId;
            if (t_templateId != null) {
                e.templateId = t_templateId;
            }
            const r = v(t);
            if (r != null) {
                e.otpProductType = r;
            }
            y(e);
            C(e, t);
        });
        return g.apply(this, arguments);
    }
    function h(e, t) {
        const user = t.from.user;
        if (user != null) {
            const r = o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated();
            const a = r ? o("WAWebLidMigrationUtils").toLid(t.from) : t.from;
            e.businessLidOrJid = a ? a.toString() : user;
        }
    }
    function y(e) {
        e.isKeepChatsArchivedEnabled = o("WAWebSettingsGetters").getShowArchiveV2(r("WAWebSettingsModel"));
        e.isNotificationEnabled = o("WAWebUserPrefsNotifications").getGlobalNotifications();
    }
    function C(e, t) {
        const n = o("WAWebFrontendMsgGetters").getMaybeChat(t);
        if (n != null) {
            e.chatsFolderType = n.archive ? o("WAWebWamEnumChatsFolderType").CHATS_FOLDER_TYPE.ARCHIVED : o("WAWebWamEnumChatsFolderType").CHATS_FOLDER_TYPE.INBOX;
            e.isMessageNotificationEnabled = !o("WAWebMuteGetters").getIsMuted(n.mute);
        }
    }
    function b(e) {
        return o("WACryptoSha256").sha256Str(e.id.id);
    }
    function v({ hydratedButtons }) {
        if (hydratedButtons == null || hydratedButtons.length === 0) {
            return null;
        }
        const n = o("WAWebABProps").getABPropConfigValue("unified_otp_copy_code_url");
        const r = o("WAWebABProps").getABPropConfigValue("unified_otp_retriever_url");
        for (const a of hydratedButtons){
            const l = a.urlButton?.url;
            if (l != null) {
                if (l.startsWith(n)) {
                    return o("WAWebWamEnumOtpProductType").OTP_PRODUCT_TYPE.COPY_CODE;
                }
                if (l.startsWith(r)) {
                    const u = new URL(l)?.searchParams;
                    const c = u.get("otp_type");
                    if (c != null) {
                        switch(c){
                            case "COPY_CODE":
                                return o("WAWebWamEnumOtpProductType").OTP_PRODUCT_TYPE.COPY_CODE;
                            case "ONE_TAP":
                                return o("WAWebWamEnumOtpProductType").OTP_PRODUCT_TYPE.ONE_TAP;
                            case "ZERO_TAP":
                                return o("WAWebWamEnumOtpProductType").OTP_PRODUCT_TYPE.ZERO_TAP;
                            default:
                                continue;
                        }
                    } else {
                        return o("WAWebWamEnumOtpProductType").OTP_PRODUCT_TYPE.ONE_TAP;
                    }
                }
            }
        }
        return null;
    }
    l.logOTPButtonClick = e;
    l.logOTPMessageReceived = u;
    l.logOTPMessageRead = d;
    l.logOTPMessageDeleted = p;
}, 98);