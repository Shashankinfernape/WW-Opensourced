__d("WAWebQbmIncomingMessageLogger", [
    "WAWebABProps",
    "WAWebInAppSignupInfoStore",
    "WAWebLidAwareContactsDB",
    "WAWebMsgGetters",
    "WAWebQBMLoggerBuilder",
    "WAWebQbmIncomingMessageWamEvent",
    "WAWebUserPrefsNotifications",
    "WAWebWamEnumChatsFolderType",
    "WAWebWamEnumContactType",
    "WAWebWamEnumQbmFlag",
    "asyncToGeneratorRuntime",
    "gkx"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let s;
    const u = {
        [(s = o("WAWebWamEnumQbmFlag")).QBM_FLAG.OTHER]: "OTHER",
        [s.QBM_FLAG.TRANSACTIONAL]: "TRANSACTIONAL",
        [s.QBM_FLAG.PROMOTIONAL]: "NON_TRANSACTIONAL",
        [s.QBM_FLAG.OTP]: "OTP",
        [s.QBM_FLAG.MARKETING_MESSAGE_SMB]: "MARKETING_MESSAGE_SMB"
    };
    function c(e) {
        const t = o("WAWebMsgGetters").getBizSource(e);
        if (o("WAWebMsgGetters").isBizSourceFromMarketingMessage(t)) {
            return o("WAWebWamEnumQbmFlag").QBM_FLAG.MARKETING_MESSAGE_SMB;
        }
        return ((e)=>{
            switch(e){
                case "UTILITY":
                    return o("WAWebWamEnumQbmFlag").QBM_FLAG.TRANSACTIONAL;
                case "MARKETING":
                    return o("WAWebWamEnumQbmFlag").QBM_FLAG.PROMOTIONAL;
                case "AUTHENTICATION":
                    return o("WAWebWamEnumQbmFlag").QBM_FLAG.OTP;
                default:
                    return o("WAWebWamEnumQbmFlag").QBM_FLAG.OTHER;
            }
        })(o("WAWebMsgGetters").getHsmTag(e));
    }
    function d(e, t) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = p(e, t);
            if (n.length !== 0) {
                const a = yield r("WAWebLidAwareContactsDB").bulkGet(n.map(({ msg: r })=>r.from?.toJid() ?? ""));
                if (o("WAWebABProps").getABPropConfigValue("inapp_signup_m1_logging_enabled")) {
                    yield o("WAWebInAppSignupInfoStore").ensureInAppSignupInfoHydrated();
                }
                n.forEach(({ chat: n, msg: r }, t)=>{
                    f(r, n, a[t]);
                });
            }
        });
        return m.apply(this, arguments);
    }
    function p(e, t) {
        const n = e.map((e, n)=>({
                msg: e,
                chat: t[n]
            }));
        const o = n.filter(({ msg: t })=>_(t));
        if (o.length === n.length || !r("gkx")("21649")) {
            return n;
        }
        return o;
    }
    function _(e) {
        const t = e.from;
        return !o("WAWebMsgGetters").getIsSentByMe(e) && t != null && !t.isGroup() && !t.isStatus();
    }
    function f(e, t, n) {
        if (!(!_(e) || n == null)) {
            const { isBusiness: i, isEnterprise: l } = n;
            if (!(!i && !l)) {
                const s = l ? o("WAWebWamEnumContactType").CONTACT_TYPE.ENTERPRISE : o("WAWebWamEnumContactType").CONTACT_TYPE.SMB;
                const d = t?.archive === true ? o("WAWebWamEnumChatsFolderType").CHATS_FOLDER_TYPE.ARCHIVED : o("WAWebWamEnumChatsFolderType").CHATS_FOLDER_TYPE.INBOX;
                const m = c(e);
                new (o("WAWebQbmIncomingMessageWamEvent")).QbmIncomingMessageWamEvent(babelHelpers.extends({
                    contactType: s,
                    chatsFolderType: d,
                    isMuted: t?.muteExpiration != null && t.muteExpiration > 0,
                    qbmFlag: m,
                    qbmFlagStr: u[m],
                    hsmTagStr: o("WAWebMsgGetters").getHsmTag(e) ?? "",
                    messageTypeStr: e.type,
                    notificationEnabled: o("WAWebUserPrefsNotifications").getGlobalNotifications(),
                    isBizIntent: i,
                    isInsubContact: n.isAddressBookContact === 1
                }, o("WAWebQBMLoggerBuilder").getIasQbmFields(t?.id ?? null))).commit();
            }
        }
    }
    l.logQbmIncomingMessages = d;
}, 98);