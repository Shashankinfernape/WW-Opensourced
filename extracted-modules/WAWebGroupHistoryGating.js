__d("WAWebGroupHistoryGating", [
    "WAWebABProps",
    "WAWebGroupABProps",
    "WAWebWidToJid",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        if (o("WAWebABProps").getABPropConfigValue("group_history_send")) {
            return true;
        }
        if (e != null) {
            return o("WAWebGroupABProps").getGroupABPropConfigValue(o("WAWebWidToJid").widToGroupJid(e), "group_history_send_group_level");
        }
        return false;
    }
    function s(e) {
        if (o("WAWebABProps").getABPropConfigValue("group_history_settings_toggle_ui")) {
            return true;
        }
        if (e != null) {
            return o("WAWebGroupABProps").getGroupABPropConfigValue(o("WAWebWidToJid").widToGroupJid(e), "group_history_settings_toggle_ui_group_level");
        }
        return false;
    }
    function u(e) {
        if (o("WAWebABProps").getABPropConfigValue("rt_ghs_sender_enabled")) {
            return true;
        }
        if (e != null) {
            try {
                return o("WAWebGroupABProps").getGroupABPropConfigValue(o("WAWebWidToJid").widToGroupJid(e), "rt_ghs_sender_group_level_enabled");
            } catch (e) {
                return false;
            }
        }
        return false;
    }
    function c() {
        return o("WAWebABProps").getABPropConfigValue("rt_ghs_receiver_enabled");
    }
    function d(e) {
        if (o("WAWebABProps").getABPropConfigValue("group_history_out_of_window_pin_sender")) {
            return true;
        }
        if (e != null) {
            try {
                return o("WAWebGroupABProps").getGroupABPropConfigValue(o("WAWebWidToJid").widToGroupJid(e), "group_history_out_of_window_pin_sender_group_level");
            } catch (e) {
                return false;
            }
        }
        return false;
    }
    function m(e) {
        if (o("WAWebABProps").getABPropConfigValue("group_history_send_after_join")) {
            return true;
        }
        if (e != null) {
            try {
                return o("WAWebGroupABProps").getGroupABPropConfigValue(o("WAWebWidToJid").widToGroupJid(e), "group_history_send_after_join_group_level");
            } catch (e) {
                return false;
            }
        }
        return false;
    }
    const p = 1209600;
    function _(e) {
        const t = o("WAWebABProps").getABPropConfigValue("group_history_messages_time_limit_secs");
        if (t !== p || e == null) {
            return t;
        }
        try {
            return o("WAWebGroupABProps").getGroupABPropConfigValue(o("WAWebWidToJid").widToGroupJid(e), "group_history_messages_time_limit_secs_group_level");
        } catch (e) {
            return t;
        }
    }
    function f() {
        return o("WAWebABProps").getABPropConfigValue("is_internal_tester");
    }
    function g(e) {
        return m(e) || f();
    }
    function h() {
        return o("WAWebABProps").getABPropConfigValue("group_history_after_join_prerequisites");
    }
    function y() {
        return o("WAWebABProps").getABPropConfigValue("group_history_after_join_sender_prerequisites");
    }
    function C() {
        return o("WAWebABProps").getABPropConfigValue("group_history_send_once_default_on");
    }
    function b() {
        return o("WAWebABProps").getABPropConfigValue("group_history_send_default_on");
    }
    function v() {
        return o("WAWebABProps").getABPropConfigValue("group_history_sender_speed_bump_dialog_display_times");
    }
    function S() {
        return o("WAWebABProps").getABPropConfigValue("group_history_per_group_toggle_md_sync");
    }
    function R() {
        return r("justknobx")._("5870");
    }
    l.isGroupHistorySenderEnabled = e;
    l.isGroupHistorySettingsToggleUIEnabled = s;
    l.isGroupHistorySenderReportingTokenEnabled = u;
    l.isGroupHistoryReceiverReportingTokenEnabled = c;
    l.isOutOfWindowPinSenderEnabled = d;
    l.isGroupHistoryPostJoinSenderEnabled = m;
    l.getGroupHistoryMessagesTimeLimitSecs = _;
    l.isGroupHistoryPostJoinSenderOrInternalTesterEnabled = g;
    l.isGroupHistoryAfterJoinPrerequisitesEnabled = h;
    l.isGroupHistoryPostJoinSenderPrerequisitesEnabled = y;
    l.isGroupHistorySendOnceDefaultOnEnabled = C;
    l.isGroupHistorySendDefaultOnEnabled = b;
    l.getGroupHistorySpeedBumpDialogDisplayTimes = v;
    l.isGroupHistoryPerGroupToggleMdSyncEnabled = S;
    l.shouldSkipUnsupportedMessagesFromBundle = R;
}, 98);