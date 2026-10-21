__d("WAWebChatAssignmentGatingUtils", [
    "WAWebABProps",
    "WAWebMobilePlatforms"
], function(t, n, r, o, a, i, l) {
    function e() {
        return o("WAWebMobilePlatforms").isSMB() && o("WAWebABProps").getABPropConfigValue("smb_md_agent_chat_assignment_enabled");
    }
    function s() {
        if (e()) {
            return o("WAWebABProps").getABPropConfigValue("smb_md_agent_chat_assignment_nux_impressions");
        }
        return 0;
    }
    function u(e) {
        if (e) {
            return o("WAWebABProps").getABPropConfigValue("smb_md_agent_chat_assignment_chats_reorder_on_chat_unassignment_enabled");
        }
        return o("WAWebABProps").getABPropConfigValue("smb_md_agent_chat_assignment_chats_reorder_on_chat_assignment_enabled");
    }
    function c() {
        return o("WAWebMobilePlatforms").isSMB();
    }
    function d() {
        return o("WAWebMobilePlatforms").isSMB() && o("WAWebABProps").getABPropConfigValue("smb_multi_device_message_attribution_enabled");
    }
    l.chatAssignmentEnabled = e;
    l.chatAssignmentMaxNuxImpressions = s;
    l.shouldReorderChatOnAssignment = u;
    l.isBizAIToolsSettingsEnabled = c;
    l.isMultiDeviceMessageAttributionEnabled = d;
}, 98);