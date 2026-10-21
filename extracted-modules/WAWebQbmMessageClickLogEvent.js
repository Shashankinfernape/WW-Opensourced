__d("WAWebQbmMessageClickLogEvent", [
    "Promise",
    "WAWebABProps",
    "WAWebChatThreadLogging",
    "WAWebFrontendContactGetters",
    "WAWebInAppSignupInfoStore",
    "WAWebMsgGetters",
    "WAWebQBMLoggerBuilder",
    "WAWebQbmMessageClickWamEvent",
    "WAWebWamEnumQbmMessageClickButtonClickedType",
    "WAWebWamEnumThumbnailType",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = {
        cta_url: (s = o("WAWebWamEnumQbmMessageClickButtonClickedType")).QBM_MESSAGE_CLICK_BUTTON_CLICKED_TYPE.URL,
        quick_reply: s.QBM_MESSAGE_CLICK_BUTTON_CLICKED_TYPE.QUICK_REPLY,
        cta_call: s.QBM_MESSAGE_CLICK_BUTTON_CLICKED_TYPE.PHONE_NUMBER,
        cta_copy: s.QBM_MESSAGE_CLICK_BUTTON_CLICKED_TYPE.COPY_CODE,
        cta_catalog: s.QBM_MESSAGE_CLICK_BUTTON_CLICKED_TYPE.CATALOG,
        mpm: s.QBM_MESSAGE_CLICK_BUTTON_CLICKED_TYPE.MPM,
        galaxy_message: s.QBM_MESSAGE_CLICK_BUTTON_CLICKED_TYPE.FLOW,
        cta_app: s.QBM_MESSAGE_CLICK_BUTTON_CLICKED_TYPE.APP
    };
    function c({ interactivePayload }) {
        if (interactivePayload?.messageParamsJson == null) {
            return false;
        }
        try {
            const r = JSON.parse(interactivePayload.messageParamsJson);
            return r?.mediaThumbnailConfiguration?.useCustomVideoThumbnail === true;
        } catch (e) {
            return false;
        }
    }
    function d(msg) {
        if (c(msg)) {
            return o("WAWebWamEnumThumbnailType").THUMBNAIL_TYPE.CUSTOM;
        }
        if (o("WAWebMsgGetters").getThumbnailHQ(msg) != null) {
            return o("WAWebWamEnumThumbnailType").THUMBNAIL_TYPE.HQ;
        }
        return o("WAWebWamEnumThumbnailType").THUMBNAIL_TYPE.MEDIA_BASED;
    }
    function m(buttonClickedType, nativeFlowName) {
        if (nativeFlowName != null) {
            return u[nativeFlowName] ?? o("WAWebWamEnumQbmMessageClickButtonClickedType").QBM_MESSAGE_CLICK_BUTTON_CLICKED_TYPE.OTHER;
        }
        return buttonClickedType;
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ buttonClickedType, chat, msg, nativeFlowName }) {
            if (o("WAWebABProps").getABPropConfigValue("web_biz_quality_telemetry_message_clicks_enabled")) {
                if (o("WAWebABProps").getABPropConfigValue("inapp_signup_m1_logging_enabled")) {
                    yield o("WAWebInAppSignupInfoStore").ensureInAppSignupInfoHydrated();
                }
                new (o("WAWebQBMLoggerBuilder")).QBMLoggerBuilder(msg, chat).addCommonFields().addAttributionFields().addIasFields().log((()=>{
                    const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                        const buttonClickedType_1 = m(buttonClickedType, nativeFlowName);
                        const u = o("WAWebFrontendContactGetters").getIsMyContact(chat.contact);
                        const c = yield (e || (e = n("Promise"))).all([
                            o("WAWebChatThreadLogging").getMessageIDHMAC(msg.id.toString()),
                            o("WAWebChatThreadLogging").getChatThreadIDHMAC(chat.id.toString())
                        ]);
                        const p = c[0];
                        const _ = c[1];
                        new (o("WAWebQbmMessageClickWamEvent")).QbmMessageClickWamEvent(babelHelpers.extends({}, t, {
                            isInsubContact: u,
                            buttonClickedType: buttonClickedType_1,
                            thumbnailType: d(msg),
                            messageIdHmac: p ?? undefined,
                            threadIdHmac: _ ?? undefined
                        })).commit();
                    });
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                })());
            }
        });
        return _.apply(this, arguments);
    }
    l.logQbmMessageClick = p;
}, 98);