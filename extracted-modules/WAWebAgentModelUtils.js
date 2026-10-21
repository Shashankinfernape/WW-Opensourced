__d("WAWebAgentModelUtils", [
    "fbt",
    "WAWebChatAssignmentGatingUtils",
    "WAWebConnModel",
    "WAWebFeatureFlagName",
    "WAWebSubscriptionFeatureFlagActions"
], function(t, n, r, o, a, i, l, s) {
    function e() {
        return s._("{business-name} (Admin)", [
            s._param("business-name", o("WAWebConnModel").Conn.pushname)
        ]);
    }
    function u() {
        return o("WAWebChatAssignmentGatingUtils").isMultiDeviceMessageAttributionEnabled() && o("WAWebSubscriptionFeatureFlagActions").isSubscriptionFeatureFlagEnabled(o("WAWebFeatureFlagName").FeatureFlagName.CHAT_ASSIGNMENT);
    }
    const c = 0;
    function d(t, n) {
        if (n === c) {
            return e().toString();
        }
        return t;
    }
    function m(e) {
        return d(e.name, e.deviceId);
    }
    l.canUserSeeMessageAttribution = u;
    l.PRIMARY_DEVICE_ID = c;
    l.getFormattedAgentName = d;
    l.getFormattedAgentNameForAgent = m;
}, 226);