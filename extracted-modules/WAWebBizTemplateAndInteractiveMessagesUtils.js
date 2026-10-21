__d("WAWebBizTemplateAndInteractiveMessagesUtils", [
    "WALogger",
    "WAWebABProps",
    "WAWebBrAddPixKeyMessageGating",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgGetters",
    "WAWebPaymentsGatingUtils"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = 10;
    const c = 3;
    const d = [
        (s = r("WAWebInteractiveMessagesNativeFlowName")).QUICK_REPLY,
        s.CTA_CALL,
        s.CTA_URL,
        s.CTA_CATALOG,
        s.CATALOG_MESSAGE,
        s.CTA_COPY_CODE,
        s.CTA_FLOW,
        s.ORDER_STATUS,
        s.PAYMENT_REMINDER,
        s.BOOKING_CONFIRMATION,
        s.PAYMENT_REQUEST,
        s.API_SIGNUP,
        s.INAPP_SIGNUP,
        s.CTA_APP,
        s.FORM_MESSAGE
    ];
    function m(e) {
        if (e === "offer_payment_account") {
            if (o("WAWebBrAddPixKeyMessageGating").isAddPixKeyMessageEnabled()) {
                return r("WAWebInteractiveMessagesNativeFlowName").OFFER_PAYMENT_ACCOUNT;
            }
            return null;
        }
        if (e === "review_and_pay") {
            return r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS;
        }
        if (e === "payment_info") {
            return r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO;
        }
        if (e === "br_payment_state") {
            if (o("WAWebPaymentsGatingUtils").isBrazilPaymentStateUpdateSupported()) {
                return r("WAWebInteractiveMessagesNativeFlowName").BR_PAYMENT_STATE;
            }
            return null;
        }
        if (e === "review_order" || e === "order_status") {
            return r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS;
        }
        if (e === "payment_status") {
            return r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_STATUS;
        }
        if (e === "payment_method") {
            return r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_METHOD;
        }
        if (e === "open_webview") {
            return r("WAWebInteractiveMessagesNativeFlowName").MESSAGE_WITH_LINK;
        }
        if (e === "message_with_link_status") {
            return r("WAWebInteractiveMessagesNativeFlowName").MESSAGE_WITH_LINK_STATUS;
        }
        if (e === "cta_url") {
            return r("WAWebInteractiveMessagesNativeFlowName").CTA_URL;
        }
        if (e === "cta_call") {
            return r("WAWebInteractiveMessagesNativeFlowName").CTA_CALL;
        }
        if (e === "quick_reply") {
            return r("WAWebInteractiveMessagesNativeFlowName").QUICK_REPLY;
        }
        if (e === "catalog_message") {
            return r("WAWebInteractiveMessagesNativeFlowName").CATALOG_MESSAGE;
        }
        if (e === "cta_catalog") {
            return r("WAWebInteractiveMessagesNativeFlowName").CTA_CATALOG;
        }
        if (e === "cta_copy") {
            return r("WAWebInteractiveMessagesNativeFlowName").CTA_COPY_CODE;
        }
        if (e === "galaxy_message") {
            return r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW;
        }
        if (e === "payment_reminder") {
            return r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REMINDER;
        }
        if (e === "booking_confirmation") {
            return r("WAWebInteractiveMessagesNativeFlowName").BOOKING_CONFIRMATION;
        }
        if (e === "call_permission_request") {
            return r("WAWebInteractiveMessagesNativeFlowName").CALL_PERMISSION_REQUEST;
        }
        if (e === "payment_request") {
            return r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REQUEST;
        }
        if (e === "api_signup") {
            return r("WAWebInteractiveMessagesNativeFlowName").API_SIGNUP;
        }
        if (e === "inapp_signup") {
            return r("WAWebInteractiveMessagesNativeFlowName").INAPP_SIGNUP;
        }
        if (e === "cta_app") {
            return r("WAWebInteractiveMessagesNativeFlowName").CTA_APP;
        }
        if (e === "form_message") {
            if (o("WAWebABProps").getABPropConfigValue("im_nfm_multi_step_form_killswitch")) {
                return null;
            }
            return r("WAWebInteractiveMessagesNativeFlowName").FORM_MESSAGE;
        }
    }
    function p(e, t, n) {
        if (o("WAWebMsgGetters").isBizSourceFromMarketingMessage(n)) {
            return o("WAWebABProps").getABPropConfigValue("web_premium_messages_interactivity_rendering_enabled");
        }
        if (n === "quoted_carousel_card" && e === r("WAWebInteractiveMessagesNativeFlowName").QUICK_REPLY || y(e)) {
            return true;
        }
        if (t === true) {
            return o("WAWebABProps").getABPropConfigValue("web_premium_messages_interactivity_rendering_enabled");
        }
        return false;
    }
    const _ = function(t) {
        if (t.hydratedTemplateButton != null) {
            return t.hydratedTemplateButton.quickReplyButton != null;
        }
        if (t.nativeFlowButton != null) {
            return t.nativeFlowButton.name === String(r("WAWebInteractiveMessagesNativeFlowName").QUICK_REPLY);
        }
        return false;
    };
    function f(e) {
        if (e.length === 0) {
            return false;
        }
        const t = _(e[0]);
        const n = e[0].hydratedTemplateButton != null;
        if (g(e, n, t)) {
            return true;
        }
        return !e.slice(1).every((e)=>h(e, n, t));
    }
    function g(t, n, r) {
        if (n) {
            const a = t.filter(_).length;
            const i = t.length - a;
            const l = t.length > u || i > c;
            if (l) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Template button limits exceeded: total=",
                    ", cta=",
                    ""
                ])), t.length, i).sendLogs("template-button-limit-exceeded");
            }
            return l;
        }
        const s = r ? u : c;
        return t.length > s;
    }
    function h(e, t, n) {
        const o = _(e);
        const a = e.nativeFlowButton?.name;
        const i = m(a);
        const l = i != null ? d.includes(i) : true;
        return l && (t || n === o);
    }
    function y(e) {
        return d.includes(e);
    }
    l.supportedNativeFlowButtonNamesForInteractiveMsg = d;
    l.getNativeFlowNameByButtonName = m;
    l.isInteractiveCtaMessageEnabled = p;
    l.buttonsViolateButtonImprovementsConstraints = f;
}, 98);