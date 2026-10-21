__d("WAWebQBMLoggerBuilder", [
    "WAWebABProps",
    "WAWebBizMessageAttributionFields",
    "WAWebInAppSignupInfoCache",
    "WAWebMsgGetters",
    "WAWebWamEnumChatsFolderType",
    "WAWebWamEnumContactType",
    "WAWebWamEnumQbmFlag"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = "ds";
    const s = (()=>{
        function t(e, t) {
            this.msg = e;
            this.chat = t;
            this.sharedFields = {};
        }
        const n = t.prototype;
        n.isLoggingAllowed = function(t) {
            return !!this.getBusinessContactType(t);
        };
        n.log = function(t) {
            if (this.isLoggingAllowed(this.chat)) {
                t(this.sharedFields);
            }
        };
        n.addCommonFields = function() {
            const r = this.getBusinessContactType(this.chat);
            const a = this.msg.broadcast === true;
            this.sharedFields = babelHelpers.extends({}, this.sharedFields, {
                chatsFolderType: this.getFolderType(),
                contactType: r ?? void 0,
                decisionId: this.msg.decisionId ?? void 0,
                entSourceSubplatform: this.msg.sourceType ?? void 0,
                deltaTime: this.getDeltaTimeSeconds(this.msg.t),
                deltaTimeReceived: this.getDeltaTimeFromMillis(this.msg.clientReceivedTsMillis),
                hsmTagStr: o("WAWebMsgGetters").getHsmTag(this.msg) ?? void 0,
                isBroadcastMessage: a,
                isCoex: this.getIsCoex(),
                isThroughDecisionService: this.getIsThroughDecisionService(),
                messageTypeStr: this.msg.type,
                qbmFlag: this.getQbmFlag(),
                isOba: this.getIsOba(this.chat)
            });
            return this;
        };
        n.addAttributionFields = function() {
            const e = o("WAWebBizMessageAttributionFields").extractBizMessageAttribution(this.msg);
            this.sharedFields = babelHelpers.extends({}, this.sharedFields, e);
            return this;
        };
        n.addIasFields = function() {
            this.sharedFields = babelHelpers.extends({}, this.sharedFields, u(this.chat.id.toString()));
            return this;
        };
        n.getQbmFlag = function() {
            const e = o("WAWebMsgGetters").getBizSource(this.msg);
            if (o("WAWebMsgGetters").isBizSourceFromMarketingMessage(e)) {
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
            })(o("WAWebMsgGetters").getHsmTag(this.msg));
        };
        n.getBusinessContactType = function(t) {
            if (t.contact.isEnterprise === true) {
                return o("WAWebWamEnumContactType").CONTACT_TYPE.ENTERPRISE;
            }
            if (t.contact.isBusiness === true) {
                return o("WAWebWamEnumContactType").CONTACT_TYPE.SMB;
            }
        };
        n.getDeltaTimeSeconds = function(t) {
            if (!(t == null || t <= 0)) {
                return Math.floor(Date.now() / 1000) - t;
            }
        };
        n.getDeltaTimeFromMillis = function(t) {
            if (!(t == null || t <= 0)) {
                return Math.floor((Date.now() - t) / 1000);
            }
        };
        n.getIsCoex = function() {
            return this.chat.contact.isHosted === true;
        };
        n.getFolderType = function() {
            if (this.chat?.archive === true) {
                return o("WAWebWamEnumChatsFolderType").CHATS_FOLDER_TYPE.ARCHIVED;
            }
            return o("WAWebWamEnumChatsFolderType").CHATS_FOLDER_TYPE.INBOX;
        };
        n.getIsThroughDecisionService = function() {
            const n = this.msg.decisionSources;
            return n?.includes(e) ?? false;
        };
        n.getIsOba = function(t) {
            return t.contact.businessProfile?.isAuthorizedAgent === true;
        };
        return t;
    })();
    function u(e) {
        if (!o("WAWebABProps").getABPropConfigValue("inapp_signup_m1_logging_enabled")) {
            return {};
        }
        if (e == null) {
            return {};
        }
        const a = o("WAWebInAppSignupInfoCache").getInAppSignupInfo(e);
        if (a == null) {
            return {};
        }
        return {
            isIasSubscriber: a.isIasSubscriber ?? false,
            iasOptinDs: a.iasOptinDs ?? void 0,
            iasEntryPoint: a.iasEntryPoint ?? void 0
        };
    }
    l.QBMLoggerBuilder = s;
    l.getIasQbmFields = u;
}, 98);