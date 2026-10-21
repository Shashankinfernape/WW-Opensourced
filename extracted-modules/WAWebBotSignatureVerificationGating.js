__d("WAWebBotSignatureVerificationGating", [
    "$InternalEnum",
    "WAWebABProps"
], function(t, n, r, o, a, i, l) {
    const e = n("$InternalEnum")({
        NONE: "none",
        LOG_ONLY: "log_only",
        ENFORCE_BLOCKING: "enforce_blocking"
    });
    function s() {
        const n = o("WAWebABProps").getABPropConfigValue("ai_rich_response_forwarding_verification_enabled_v1");
        return e.cast(n) ?? e.NONE;
    }
    function u() {
        return s() !== e.NONE;
    }
    l.BotSignatureVerificationEnforcementLevel = e;
    l.getForwardVerificationEnforcementLevel = s;
    l.isForwardVerificationEnabled = u;
}, 98);