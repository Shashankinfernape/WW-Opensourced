__d("WAWebGalaxyFlowFeatureSupport", [
    "WALogger",
    "WAWebABProps",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebLidMigrationUtils",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebPrimaryFeaturesModel",
    "WAWebWidFactory"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = 3;
    function u(e, t) {
        return t?.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE_RESPONSE || e.wa_flow_response_params != null || e.flow_message_version != null && +e.flow_message_version >= s;
    }
    function c(t) {
        if (t == null) {
            return null;
        }
        try {
            return JSON.parse(t);
        } catch (t) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "Failed to parse button params JSON: ",
                ""
            ])), t);
            return null;
        }
    }
    function d(e) {
        if (e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE) {
            const n = e?.interactivePayload?.buttons;
            if (n != null && n.length > 0) {
                return n.find((e)=>e.name === r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW)?.buttonParamsJson;
            }
        }
        if (e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE_RESPONSE) {
            return e?.interactivePayload?.buttonParamsJson;
        }
        return null;
    }
    function m(e, t) {
        let n;
        const r = o("WAWebABProps").getABPropConfigValue("enable_futureproof_galaxy_flow_message_for_business_numbers").split(",");
        if (r.length === 0) {
            return false;
        }
        if (e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE) {
            const a = t == null ? o("WAWebMsgGetters").getSender(e) : t.from;
            if (a) {
                const i = o("WAWebLidMigrationUtils").toPn(a);
                if (i) {
                    n = o("WAWebWidFactory").asUserWidOrThrow(i).user;
                }
            }
            if (n != null) {
                return r.includes(n);
            }
        }
        if (e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE_RESPONSE) {
            return p(e?.to, r);
        }
        return false;
    }
    function p(e, t) {
        const n = e ? o("WAWebLidMigrationUtils").toPn(e) : null;
        if (n == null) {
            return false;
        }
        return t.includes(o("WAWebWidFactory").asUserWidOrThrow(n).user);
    }
    function _({ buttonParamsJson: t, interactiveType: n, to: a }) {
        const i = o("WAWebABProps").getABPropConfigValue("enable_futureproof_galaxy_flow_message_for_business_numbers").split(",");
        if (p(a, i) || !o("WAWebPrimaryFeaturesModel").PrimaryFeatures.isGalaxyFlowCompanionSyncSupported || n !== r("WAWebInteractiveMessageType").NATIVE_FLOW) {
            return false;
        }
        return c(t) != null;
    }
    function f(e, t, n) {
        if (e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE_RESPONSE && n == null) {
            return _({
                buttonParamsJson: e.interactivePayload?.buttonParamsJson,
                interactiveType: e.interactiveType,
                to: e.to
            });
        }
        if (m(e, n)) {
            return false;
        }
        const a = n != null ? n.galaxyFlowDisabled !== void 0 : false;
        if (!a && !o("WAWebPrimaryFeaturesModel").PrimaryFeatures.isGalaxyFlowCompanionSyncSupported) {
            return false;
        }
        if (e.type === o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE && t != null) {
            return u({
                flow_message_version: t
            }, e);
        }
        if (!g(e)) {
            return false;
        }
        const i = d(e);
        const l = c(i);
        if (l == null) {
            return false;
        }
        return u(l, e);
    }
    function g(e) {
        return (e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE || e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE_RESPONSE) && e.interactiveType === r("WAWebInteractiveMessageType").NATIVE_FLOW;
    }
    l.isFlowResponseSupportedFor = _;
    l.isFlowSupported = f;
}, 98);