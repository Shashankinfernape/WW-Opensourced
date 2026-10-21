__d("WAWebMarketingMessagesUserFeedbackGatingUtils", [
    "WAWebABProps"
], function(t, n, r, o, a, i, l) {
    function e() {
        return o("WAWebABProps").getABPropConfigValue("mm_message_level_feedback_not_interested_menu_enabled");
    }
    function s() {
        return o("WAWebABProps").getABPropConfigValue("mm_opt_out_lid_migration_enabled");
    }
    function u() {
        return o("WAWebABProps").getABPropConfigValue("mm_opt_out_enabled");
    }
    function c() {
        return o("WAWebABProps").getABPropConfigValue("mm_user_controls_unified_stop_enabled");
    }
    function d() {
        return o("WAWebABProps").getABPropConfigValue("mm_user_controls_unified_logging_symmetry_enabled");
    }
    function m() {
        return o("WAWebABProps").getABPropConfigValue("fmx_manage_messages_simplified_logging_symmetry_enabled");
    }
    function p() {
        const e = o("WAWebABProps").getABPropConfigValue("mm_user_controls_exception_number_prefixes");
        if (e === "") {
            return [];
        }
        return e.split(",").map((e)=>e.trim());
    }
    function _(e) {
        if (e == null) {
            return false;
        }
        const t = p();
        return t.some((t)=>e.toString().startsWith(t));
    }
    function f(e) {
        return g(e) && c();
    }
    function g(e) {
        return (e.isMarketingMessageThread || e.isEverOptedOutOfMarketingMessages) && u() && !_(e.id);
    }
    l.isMMMessageLevelFeedbackNotInterestedMenuEnabled = e;
    l.isMMOptOutAlwaysUseLidInGraphQLEnabled = s;
    l.isMMOptOutEnabled = u;
    l.isMMUserControlsUnifiedStopEnabled = c;
    l.isMMUserControlsLoggingSymmetryEnabled = d;
    l.isSimplifiedManageMessagesLoggingSymmetryEnabled = m;
    l.getMMUserControlsExceptionNumberPrefixes = p;
    l.isMMUserControlsExceptionNumberPrefixMatch = _;
    l.shouldShowUnifiedMMControls = f;
    l.isMMUserControlsEligible = g;
}, 98);