__d("WAWebInAppSignupPrompt", [
    "WALogger",
    "WAWebBizTemplateAndInteractiveMessagesUtils",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgType",
    "WAWebSignupGating",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = new WeakSet;
    function u(e) {
        if (e.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE) {
            return null;
        }
        return c({
            interactivePayload: e.interactivePayload,
            interactiveType: e.interactiveType,
            nativeFlowName: e.nativeFlowName,
            type: e.type
        });
    }
    function c({ interactivePayload: a, interactiveType: i, nativeFlowName: l, type }) {
        if (l !== r("WAWebInteractiveMessagesNativeFlowName").API_SIGNUP || type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE || i !== r("WAWebInteractiveMessageType").NATIVE_FLOW) {
            return null;
        }
        const c = a?.buttons?.find(function(e) {
            return o("WAWebBizTemplateAndInteractiveMessagesUtils").getNativeFlowNameByButtonName(e.name) === r("WAWebInteractiveMessagesNativeFlowName").API_SIGNUP;
        });
        try {
            return m(c?.buttonParamsJson);
        } catch (t) {
            if (a != null && !s.has(a)) {
                s.add(a);
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[in-app-signup-prompt] Invalid button params"
                ]))).catching(r("getErrorSafe")(t)).sendLogs("in-app-signup-prompt-invalid-button-params");
            }
            return null;
        }
    }
    function d(e) {
        try {
            return m(e);
        } catch (e) {
            return null;
        }
    }
    function m(e) {
        if (e == null) {
            return null;
        }
        const t = JSON.parse(e);
        if (t.signup_id == null || t.signup_id === "" || !o("WAWebSignupGating").isReceivedSignupPromptEnabled()) {
            return null;
        }
        return {
            signupId: t.signup_id,
            privacyPolicyUrl: p(t.privacy_policy_url)
        };
    }
    function p(e) {
        if (e == null || e === "") {
            return null;
        }
        try {
            const t = new URL(e);
            const n = t.protocol;
            if (n === "http:" || n === "https:") {
                return e;
            }
            return null;
        } catch (e) {
            return null;
        }
    }
    l.getInAppSignupPromptInfo = u;
    l.getInAppSignupPromptInfoFor = c;
    l.parseInAppSignupPromptButtonParams = d;
}, 98);