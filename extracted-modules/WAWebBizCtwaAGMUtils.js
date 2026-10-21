__d("WAWebBizCtwaAGMUtils", [
    "fbt",
    "WAWebABProps",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebCtwaAGMUtils",
    "WAWebMsgType",
    "WAWebSignupGating",
    "WAWebURLUtils"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
        return s._("{ad source} ad", [
            s._param("ad source", e)
        ]);
    }
    function u(sourceUrl) {
        return r("WAWebURLUtils").withoutWww(r("WAWebURLUtils").hostname(sourceUrl));
    }
    function c(e) {
        if (e.sourceUrl == null) {
            return null;
        }
        const t = u(e.sourceUrl);
        const n = t.split(".")[0];
        if (n === "fb") {
            return "facebook";
        }
        return n;
    }
    function d(e) {
        return s._("{ad source} Ad image preview", [
            s._param("ad source", e)
        ]);
    }
    function m() {
        return s._("Error loading photo");
    }
    function p({ isAGMShown, msgSource, msgSubtype, msgType }) {
        if (msgType === o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE && msgSubtype === o("WAWebCommonMsgSubtypeTypes").MsgSubtype.Signup) {
            return true;
        }
        const i = msgSource === o("WAWebCtwaAGMUtils").AGM_SOURCE_APP.FACEBOOK || msgSource === o("WAWebCtwaAGMUtils").AGM_SOURCE_APP.INSTAGRAM;
        const l = msgType === o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE && isAGMShown === true;
        return i && l;
    }
    function _(e) {
        if (e.type === o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE && e.ctwaContext != null) {
            const t = e.ctwaContext;
            const n = o("WAWebCtwaAGMUtils").extractAGMPayload(t);
            if (n?.ctaType === o("WAWebCtwaAGMUtils").AGM_CTA_TYPE.FLOW) {
                return o("WAWebABProps").getABPropConfigValue("enable_agm_flow_cta") && o("WAWebABProps").getABPropConfigValue("flows_wa_web_agm_cta") && o("WAWebABProps").getABPropConfigValue("flows_wa_web_responses_download");
            }
            return true;
        }
        return false;
    }
    function f(e) {
        if (e.type === o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE && e.subtype === o("WAWebCommonMsgSubtypeTypes").MsgSubtype.Signup) {
            return o("WAWebSignupGating").isSignupAGMEnabled();
        }
        return _(e) && p({
            isAGMShown: e.ctwaContext?.automatedGreetingMessageShown === true,
            msgSource: e.ctwaContext?.sourceApp,
            msgType: e.type
        });
    }
    function g(e) {
        const t = e.getAllMsgs();
        const n = t.find((e)=>e.type !== o("WAWebMsgType").MSG_TYPE.E2E_NOTIFICATION && e.type !== o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE && e.type !== o("WAWebMsgType").MSG_TYPE.NOTIFICATION);
        return n?.type === o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE;
    }
    l.getAdSourceLabel = e;
    l.getHostnameLabel = c;
    l.getAdImageAlt = d;
    l.getAdImgError = m;
    l.isAutomatedGreetingMessage = p;
    l.isAGMSupported = f;
    l.isCtWAInitiatedChat = g;
}, 226);