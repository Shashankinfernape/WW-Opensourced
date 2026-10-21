__d("WAWebInAppSignupConfirmation", [
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgType",
    "isStringNullOrEmpty"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        try {
            const r = JSON.parse(e);
            if (r.signup_id == null || r.subscription_timestamp == null) {
                return null;
            }
            return {
                signupId: r.signup_id,
                subscriptionTimestamp: String(r.subscription_timestamp),
                promoCode: r.promo_code ?? null,
                websiteUrl: r.website_url ?? null
            };
        } catch (e) {
            return null;
        }
    }
    function s(e) {
        if (e.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE) {
            return null;
        }
        return u({
            interactivePayload: e.interactivePayload,
            interactiveType: e.interactiveType,
            nativeFlowName: e.nativeFlowName,
            type: e.type
        });
    }
    function u({ interactivePayload: a, interactiveType: i, nativeFlowName: l, type }) {
        if (l !== r("WAWebInteractiveMessagesNativeFlowName").INAPP_SIGNUP || type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE || i !== r("WAWebInteractiveMessageType").NATIVE_FLOW || !(a != null && a.buttons)) {
            return null;
        }
        const u = a.buttons[0]?.buttonParamsJson;
        if (u == null) {
            return null;
        }
        return e(u);
    }
    function c(e) {
        if (e == null) {
            return null;
        }
        try {
            const t = JSON.parse(e);
            const n = t.promo_code;
            if (!r("isStringNullOrEmpty")(n)) {
                return n;
            }
        } catch (e) {
            return null;
        }
        return null;
    }
    function d(e) {
        if (e == null) {
            return null;
        }
        try {
            const t = JSON.parse(e);
            const n = t.website_url;
            if (!r("isStringNullOrEmpty")(n)) {
                return n;
            }
        } catch (e) {
            return null;
        }
        return null;
    }
    function m(e, t) {
        if (t == null || t === "" || e.includes(`*${t}*`)) {
            return e;
        }
        const n = e.indexOf(t);
        if (n < 0) {
            return e;
        }
        return e.slice(0, n) + `*${t}*` + e.slice(n + t.length);
    }
    l.getInAppSignupConfirmationInfo = s;
    l.getInAppSignupConfirmationInfoFor = u;
    l.parseInAppSignupPromoCode = c;
    l.parseInAppSignupWebsiteUrl = d;
    l.applyBoldToPromoCode = m;
}, 98);