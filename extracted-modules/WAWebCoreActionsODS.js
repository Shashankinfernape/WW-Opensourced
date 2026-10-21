__d("WAWebCoreActionsODS", [
    "WAWebODS"
], function(t, n, r, o, a, i, l) {
    function e() {
        r("WAWebODS").incr("web.status.send");
    }
    function s() {
        r("WAWebODS").incr("web.mc_migration.control");
    }
    function u() {
        r("WAWebODS").incr("web.mc_migration.test");
    }
    function c() {
        r("WAWebODS").incr("web.group.create");
    }
    function d() {
        r("WAWebODS").incr("web.group.create.error");
    }
    function m() {
        r("WAWebODS").incr("web.msg.send.channel");
    }
    function p() {
        r("WAWebODS").incr("web.group.add_participant");
    }
    function _() {
        r("WAWebODS").incr("web.group.add_participant.error");
    }
    function f() {
        r("WAWebODS").incr("web.search.has_results");
    }
    function g() {
        r("WAWebODS").incr("web.search.error");
    }
    function h() {
        r("WAWebODS").incr("web.msg.send.error");
    }
    function y() {
        r("WAWebODS").incr("web.msg.send.error.upload");
    }
    let C = false;
    function b() {
        C = true;
    }
    function v() {
        return C;
    }
    function S() {
        r("WAWebODS").incr("web.page_load.success");
    }
    function R() {
        r("WAWebODS").incr("web.page_load.success.main");
    }
    function L() {
        r("WAWebODS").incr("web.page_load.success.qr");
    }
    let E = false;
    function k() {
        if (!E) {
            E = true;
            r("WAWebODS").incr("web.page_load.error");
        }
    }
    function I() {
        k();
        r("WAWebODS").incr("web.page_load.error.storage_init");
    }
    function T() {
        k();
        r("WAWebODS").incr("web.page_load.error.js_exception");
    }
    function D() {
        k();
        r("WAWebODS").incr("web.page_load.error.unhandled_rejection");
    }
    function x() {
        k();
        r("WAWebODS").incr("web.page_load.error.forced_logout");
    }
    function $() {
        k();
        r("WAWebODS").incr("web.page_load.error.service_unavailable");
    }
    function P() {
        k();
        r("WAWebODS").incr("web.page_load.error.timeout");
    }
    function N() {
        k();
        r("WAWebODS").incr("web.page_load.error.history_sync_incomplete");
    }
    function M() {
        r("WAWebODS").incr("web.pair.success");
    }
    function w() {
        r("WAWebODS").incr("web.pair.error");
    }
    function A() {
        r("WAWebODS").incr("web.session.forced_logout");
    }
    function F() {
        r("WAWebODS").incr("web.media.upload.success");
    }
    function O() {
        r("WAWebODS").incr("web.media.upload.error");
    }
    function B() {
        r("WAWebODS").incr("web.media.upload.error.server");
    }
    function W() {
        r("WAWebODS").incr("web.media.upload.error.network");
    }
    function q() {
        r("WAWebODS").incr("web.media.download.success");
    }
    function U() {
        r("WAWebODS").incr("web.media.download.error");
    }
    function V() {
        r("WAWebODS").incr("web.media.download.error.expired");
    }
    function H() {
        r("WAWebODS").incr("web.media.download.error.network");
    }
    function G() {
        r("WAWebODS").incr("web.call.success");
    }
    function z() {
        r("WAWebODS").incr("web.call.error.terminal");
    }
    function j() {
        r("WAWebODS").incr("web.call.attempt");
    }
    function K() {
        r("WAWebODS").incr("web.call.incoming.held_stack_unresponsive");
    }
    function Q() {
        r("WAWebODS").incr("web.call.incoming.deferred_boot.stale_offer");
    }
    function X() {
        r("WAWebODS").incr("web.call.incoming.deferred_boot.stale_offer_after_hidden_prewarm");
    }
    function Y() {
        r("WAWebODS").incr("web.call.incoming.deferred_boot.stale_follow_up");
    }
    function J() {
        r("WAWebODS").incr("web.call.init.blocked_stack_unresponsive");
    }
    function Z() {
        r("WAWebODS").incr("web.notification_test.started");
    }
    function ee() {
        r("WAWebODS").incr("web.notification_test.completed");
    }
    function te() {
        r("WAWebODS").incr("web.notification_test.tip_shown");
    }
    function ne() {
        r("WAWebODS").incr("web.notification_test.open_device_settings");
    }
    function re() {
        r("WAWebODS").incr("web.call.deeplink.confirm_shown");
    }
    function oe() {
        r("WAWebODS").incr("web.call.deeplink.confirm_accepted");
    }
    function ae() {
        r("WAWebODS").incr("web.call.deeplink.confirm_declined");
    }
    function ie() {
        r("WAWebODS").incr("web.call.deeplink.not_allowed");
    }
    function le() {
        r("WAWebODS").incr("web.call.deeplink.refused_after_ask");
    }
    function se() {
        r("WAWebODS").incr("web.call.deeplink.confirm_guard_swallowed");
    }
    function ue() {
        r("WAWebODS").incr("web.call.deeplink.peer_mismatch");
    }
    function ce() {
        r("WAWebODS").incr("web.call.fieldstats.final_received");
    }
    function de() {
        r("WAWebODS").incr("web.call.fieldstats.wam_handoff_completed");
    }
    function me() {
        r("WAWebODS").incr("web.call.fieldstats.wam_handoff_failed");
    }
    function pe() {
        r("WAWebODS").incr("web.call.fieldstats.recovery_found");
    }
    function _e() {
        r("WAWebODS").incr("web.call.fieldstats.recovery_completed");
    }
    function fe() {
        r("WAWebODS").incr("web.call.fieldstats.recovery_failed");
    }
    function ge() {
        r("WAWebODS").incr("web.call.fieldstats.recovery_init_failed");
    }
    function he() {
        r("WAWebODS").incr("web.call.fieldstats.recovery_cleanup_failed");
    }
    function ye() {
        r("WAWebODS").incr("web.call.fieldstats.recovery_parse_failed");
    }
    function Ce() {
        r("WAWebODS").incr("web.call.fieldstats.persistence_cleanup_failed");
    }
    function be() {
        r("WAWebODS").incr("web.call.fieldstats.dedup_marker_failed");
    }
    function ve() {
        r("WAWebODS").incr("web.call.fieldstats.recovery_duplicate_suppressed");
    }
    function Se() {
        r("WAWebODS").incr("web.call.fieldstats.watchdog_send");
    }
    function Re(e, t) {
        Le(e);
        if (t) {
            Ee(e);
        }
    }
    function Le(e) {
        e: {
            if (e === "warning_shown") {
                r("WAWebODS").incr("web.call.mic_health.warning_shown");
                break e;
            }
            if (e === "warning_action") {
                r("WAWebODS").incr("web.call.mic_health.warning_action");
                break e;
            }
            if (e === "recovered_after_switch") {
                r("WAWebODS").incr("web.call.mic_health.recovered_after_switch");
                break e;
            }
            if (e === "signal_after_warning_without_switch") {
                r("WAWebODS").incr("web.call.mic_health.signal_after_warning_without_switch");
                break e;
            }
            if (e === "unavailable_banner_shown") {
                r("WAWebODS").incr("web.call.mic_health.unavailable_banner_shown");
                break e;
            }
            if (e === "unavailable_banner_action") {
                r("WAWebODS").incr("web.call.mic_health.unavailable_banner_action");
                break e;
            }
            if (e === "verdict_deferred_stale") {
                r("WAWebODS").incr("web.call.mic_health.verdict_deferred_stale");
                break e;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        }
    }
    function Ee(e) {
        e: {
            if (e === "warning_shown") {
                r("WAWebODS").incr("web.call.mic_health.warning_shown.group");
                break e;
            }
            if (e === "warning_action") {
                r("WAWebODS").incr("web.call.mic_health.warning_action.group");
                break e;
            }
            if (e === "recovered_after_switch") {
                r("WAWebODS").incr("web.call.mic_health.recovered_after_switch.group");
                break e;
            }
            if (e === "signal_after_warning_without_switch") {
                r("WAWebODS").incr("web.call.mic_health.signal_after_warning_without_switch.group");
                break e;
            }
            if (e === "unavailable_banner_shown") {
                r("WAWebODS").incr("web.call.mic_health.unavailable_banner_shown.group");
                break e;
            }
            if (e === "unavailable_banner_action") {
                r("WAWebODS").incr("web.call.mic_health.unavailable_banner_action.group");
                break e;
            }
            if (e === "verdict_deferred_stale") {
                r("WAWebODS").incr("web.call.mic_health.verdict_deferred_stale.group");
                break e;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        }
    }
    function ke(e) {
        e: {
            if (e === "shown") {
                r("WAWebODS").incr("web.call.calls_tab_notifications_off_banner.shown");
                break e;
            }
            if (e === "action") {
                r("WAWebODS").incr("web.call.calls_tab_notifications_off_banner.action");
                break e;
            }
            if (e === "dismiss") {
                r("WAWebODS").incr("web.call.calls_tab_notifications_off_banner.dismiss");
                break e;
            }
            if (e === "auto_dismiss") {
                r("WAWebODS").incr("web.call.calls_tab_notifications_off_banner.auto_dismiss");
                break e;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        }
    }
    function Ie(e) {
        e: {
            if (e === "shown") {
                r("WAWebODS").incr("web.call.chatlist_missed_call_banner.shown");
                break e;
            }
            if (e === "action") {
                r("WAWebODS").incr("web.call.chatlist_missed_call_banner.action");
                break e;
            }
            if (e === "action_failed") {
                r("WAWebODS").incr("web.call.chatlist_missed_call_banner.action_failed");
                break e;
            }
            if (e === "dismiss") {
                r("WAWebODS").incr("web.call.chatlist_missed_call_banner.dismiss");
                break e;
            }
            if (e === "auto_dismiss") {
                r("WAWebODS").incr("web.call.chatlist_missed_call_banner.auto_dismiss");
                break e;
            }
            if (e === "superseded") {
                r("WAWebODS").incr("web.call.chatlist_missed_call_banner.superseded");
                break e;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        }
    }
    function Te(e) {
        e: {
            if (e === "shown") {
                r("WAWebODS").incr("web.call.calls_tab_permissions_off_banner.shown");
                break e;
            }
            if (e === "action") {
                r("WAWebODS").incr("web.call.calls_tab_permissions_off_banner.action");
                break e;
            }
            if (e === "dismiss") {
                r("WAWebODS").incr("web.call.calls_tab_permissions_off_banner.dismiss");
                break e;
            }
            if (e === "auto_dismiss") {
                r("WAWebODS").incr("web.call.calls_tab_permissions_off_banner.auto_dismiss");
                break e;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        }
    }
    function De() {
        r("WAWebODS").incr("web.call.outgoing.audio");
    }
    function xe() {
        r("WAWebODS").incr("web.call.outgoing.video");
    }
    function $e() {
        r("WAWebODS").incr("web.call.outgoing.group.audio");
    }
    function Pe() {
        r("WAWebODS").incr("web.call.outgoing.group.video");
    }
    function Ne(e) {
        if (e) {
            r("WAWebODS").incr("web.call.video_capture.with_converter.dom_attach.enabled.attempt");
        } else {
            r("WAWebODS").incr("web.call.video_capture.with_converter.dom_attach.disabled.attempt");
        }
    }
    function Me(e) {
        if (e) {
            r("WAWebODS").incr("web.call.video_capture.with_converter.dom_attach.enabled.failure");
        } else {
            r("WAWebODS").incr("web.call.video_capture.with_converter.dom_attach.disabled.failure");
        }
    }
    function we(e) {
        if (e) {
            r("WAWebODS").incr("web.call.video_capture.with_converter.dom_attach.enabled.success");
        } else {
            r("WAWebODS").incr("web.call.video_capture.with_converter.dom_attach.disabled.success");
        }
    }
    function Ae() {
        r("WAWebODS").incr("web.call.incoming.accept");
    }
    function Fe() {
        r("WAWebODS").incr("web.call.incoming.decline");
    }
    function Oe() {
        r("WAWebODS").incr("web.call.incoming.missed");
    }
    function Be() {
        r("WAWebODS").incr("web.call.incoming.dismiss");
    }
    function We() {
        r("WAWebODS").incr("web.call.group.join");
    }
    function qe() {
        r("WAWebODS").incr("web.call.group.join_error");
    }
    function Ue() {
        r("WAWebODS").incr("web.call.voip_init.boot.deferred");
    }
    function Ve(e) {
        e: {
            if (e === "lazy") {
                r("WAWebODS").incr("web.call.voip_init.boot.armed.lazy");
                break e;
            }
            if (e === "deadline") {
                r("WAWebODS").incr("web.call.voip_init.boot.armed.deadline");
                break e;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        }
    }
    function He(e) {
        e: {
            if (e === "fail_open") {
                r("WAWebODS").incr("web.call.voip_init.boot.scheduler_load_timeout.fail_open");
                break e;
            }
            if (e === "wait") {
                r("WAWebODS").incr("web.call.voip_init.boot.scheduler_load_timeout.wait");
                break e;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        }
    }
    function Ge(e) {
        e: {
            if (e === "deadline") {
                r("WAWebODS").incr("web.call.voip_init.boot.fire_attempt.deadline");
                break e;
            }
            if (e === "hidden_prewarm") {
                r("WAWebODS").incr("web.call.voip_init.boot.fire_attempt.hidden_prewarm");
                break e;
            }
            if (e === "scheduler_error") {
                r("WAWebODS").incr("web.call.voip_init.boot.fire_attempt.scheduler_error");
                break e;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        }
    }
    function ze(e) {
        e: {
            if (e === "deadline") {
                r("WAWebODS").incr("web.call.voip_init.boot.fired.deadline");
                break e;
            }
            if (e === "hidden_prewarm") {
                r("WAWebODS").incr("web.call.voip_init.boot.fired.hidden_prewarm");
                break e;
            }
            if (e === "scheduler_error") {
                r("WAWebODS").incr("web.call.voip_init.boot.fired.scheduler_error");
                break e;
            }
            if (e === "intent_owned") {
                r("WAWebODS").incr("web.call.voip_init.boot.fired.intent_owned");
                break e;
            }
            if (e === "prewarm_owned") {
                r("WAWebODS").incr("web.call.voip_init.boot.fired.prewarm_owned");
                break e;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        }
    }
    function je() {
        r("WAWebODS").incr("web.call.voip_init.hidden_prewarm.watching");
    }
    function Ke(e) {
        e: {
            if (e === "constrained_network") {
                r("WAWebODS").incr("web.call.voip_init.hidden_prewarm.skip.constrained_network");
                break e;
            }
            if (e === "disabled") {
                r("WAWebODS").incr("web.call.voip_init.hidden_prewarm.skip.disabled");
                break e;
            }
            if (e === "low_memory") {
                r("WAWebODS").incr("web.call.voip_init.hidden_prewarm.skip.low_memory");
                break e;
            }
            if (e === "unsupported") {
                r("WAWebODS").incr("web.call.voip_init.hidden_prewarm.skip.unsupported");
                break e;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        }
    }
    function Qe(e) {
        e: {
            if (e === "constrained_network") {
                r("WAWebODS").incr("web.call.voip_init.hidden_prewarm.end.constrained_network");
                break e;
            }
            if (e === "disabled") {
                r("WAWebODS").incr("web.call.voip_init.hidden_prewarm.end.disabled");
                break e;
            }
            if (e === "error") {
                r("WAWebODS").incr("web.call.voip_init.hidden_prewarm.end.error");
                break e;
            }
            if (e === "hard_refresh") {
                r("WAWebODS").incr("web.call.voip_init.hidden_prewarm.end.hard_refresh");
                break e;
            }
            if (e === "init_errored") {
                r("WAWebODS").incr("web.call.voip_init.hidden_prewarm.end.init_errored");
                break e;
            }
            if (e === "init_in_flight") {
                r("WAWebODS").incr("web.call.voip_init.hidden_prewarm.end.init_in_flight");
                break e;
            }
            if (e === "inited") {
                r("WAWebODS").incr("web.call.voip_init.hidden_prewarm.end.inited");
                break e;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        }
    }
    function Xe(e) {
        e: {
            if (e === "late_timer") {
                r("WAWebODS").incr("web.call.voip_init.hidden_prewarm.rearm.late_timer");
                break e;
            }
            if (e === "offline") {
                r("WAWebODS").incr("web.call.voip_init.hidden_prewarm.rearm.offline");
                break e;
            }
            if (e === "offline_delivery") {
                r("WAWebODS").incr("web.call.voip_init.hidden_prewarm.rearm.offline_delivery");
                break e;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        }
    }
    function Ye(e) {
        e: {
            if (e === "chunk_failed") {
                r("WAWebODS").incr("web.call.voip_init.hidden_prewarm.load.chunk_failed");
                break e;
            }
            if (e === "failed") {
                r("WAWebODS").incr("web.call.voip_init.hidden_prewarm.load.failed");
                break e;
            }
            if (e === "timeout") {
                r("WAWebODS").incr("web.call.voip_init.hidden_prewarm.load.timeout");
                break e;
            }
            if (e === "visible") {
                r("WAWebODS").incr("web.call.voip_init.hidden_prewarm.load.visible");
                break e;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        }
    }
    function Je(e) {
        e: {
            if (e === "ended_visible") {
                r("WAWebODS").incr("web.call.voip_init.hidden_prewarm.init.ended_visible");
                break e;
            }
            if (e === "failure") {
                r("WAWebODS").incr("web.call.voip_init.hidden_prewarm.init.failure");
                break e;
            }
            if (e === "success") {
                r("WAWebODS").incr("web.call.voip_init.hidden_prewarm.init.success");
                break e;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        }
    }
    function Ze(e) {
        e: {
            if (e === "hidden") {
                r("WAWebODS").incr("web.call.voip_init.hidden_prewarm.post_init.hidden");
                break e;
            }
            if (e === "visible") {
                r("WAWebODS").incr("web.call.voip_init.hidden_prewarm.post_init.visible");
                break e;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        }
    }
    function et(e) {
        e: {
            if (e === "pool_growth") {
                r("WAWebODS").incr("web.call.voip_init.hidden_prewarm.post_init.ran_hidden.pool_growth");
                break e;
            }
            if (e === "ui_bundle") {
                r("WAWebODS").incr("web.call.voip_init.hidden_prewarm.post_init.ran_hidden.ui_bundle");
                break e;
            }
            if (e === "webtransport_pthread") {
                r("WAWebODS").incr("web.call.voip_init.hidden_prewarm.post_init.ran_hidden.webtransport_pthread");
                break e;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        }
    }
    function tt(e) {
        e: {
            if (e === "started") {
                r("WAWebODS").incr("web.call.voip_init.wasm_idle_warm.started");
                break e;
            }
            if (e === "complete") {
                r("WAWebODS").incr("web.call.voip_init.wasm_idle_warm.complete");
                break e;
            }
            if (e === "failed") {
                r("WAWebODS").incr("web.call.voip_init.wasm_idle_warm.failed");
                break e;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        }
    }
    function nt(e) {
        e: {
            if (e === "constrained_network") {
                r("WAWebODS").incr("web.call.voip_init.wasm_idle_warm.skip.constrained_network");
                break e;
            }
            if (e === "disabled") {
                r("WAWebODS").incr("web.call.voip_init.wasm_idle_warm.skip.disabled");
                break e;
            }
            if (e === "init_in_flight") {
                r("WAWebODS").incr("web.call.voip_init.wasm_idle_warm.skip.init_in_flight");
                break e;
            }
            if (e === "inited") {
                r("WAWebODS").incr("web.call.voip_init.wasm_idle_warm.skip.inited");
                break e;
            }
            if (e === "offline") {
                r("WAWebODS").incr("web.call.voip_init.wasm_idle_warm.skip.offline");
                break e;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        }
    }
    function rt(e) {
        e: {
            if (e === "call") {
                r("WAWebODS").incr("web.call.voip_init.deferred_start.call");
                break e;
            }
            if (e === "incoming_group") {
                r("WAWebODS").incr("web.call.voip_init.deferred_start.incoming_group");
                break e;
            }
            if (e === "incoming_offer_ended") {
                r("WAWebODS").incr("web.call.voip_init.deferred_start.incoming_offer_ended");
                break e;
            }
            if (e === "incoming_offer_fresh") {
                r("WAWebODS").incr("web.call.voip_init.deferred_start.incoming_offer_fresh");
                break e;
            }
            if (e === "incoming_offer_queued_30s_plus") {
                r("WAWebODS").incr("web.call.voip_init.deferred_start.incoming_offer_queued_30s_plus");
                break e;
            }
            if (e === "incoming_other") {
                r("WAWebODS").incr("web.call.voip_init.deferred_start.incoming_other");
                break e;
            }
            if (e === "prewarm_scheduled") {
                r("WAWebODS").incr("web.call.voip_init.deferred_start.prewarm_scheduled");
                break e;
            }
            if (e === "prewarm_unscheduled") {
                r("WAWebODS").incr("web.call.voip_init.deferred_start.prewarm_unscheduled");
                break e;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        }
    }
    function ot() {
        r("WAWebODS").incr("web.call.voip_init.success");
    }
    function at() {
        r("WAWebODS").incr("web.call.voip_init.error");
    }
    function it() {
        r("WAWebODS").incr("web.call.voip_init.pre_wasm_reload_required");
    }
    function lt() {
        r("WAWebODS").incr("web.call.voip_init.skip_unsupported");
    }
    function st() {
        r("WAWebODS").incr("web.call.voip_init.wasm_contract_mismatch");
    }
    function ut() {
        r("WAWebODS").incr("web.call.voip_init.wasm_artifact.content_addressed.bx_key_missing");
    }
    function ct() {
        r("WAWebODS").incr("web.call.voip_init.wasm_artifact.content_addressed.bx_lookup_failure");
    }
    function dt() {
        r("WAWebODS").incr("web.call.voip_init.wasm_artifact.content_addressed.load_attempt");
    }
    function mt() {
        r("WAWebODS").incr("web.call.voip_init.wasm_artifact.content_addressed.load_success");
    }
    function pt() {
        r("WAWebODS").incr("web.call.voip_init.wasm_artifact.unversioned.load_attempt");
    }
    function _t() {
        r("WAWebODS").incr("web.call.voip_init.wasm_artifact.unversioned.load_success");
    }
    function ft() {
        r("WAWebODS").incr("web.call.voip_init.wasm_artifact.worker_glue.pinned_load_attempt");
    }
    function gt() {
        r("WAWebODS").incr("web.call.voip_init.wasm_artifact.worker_glue.pinned_load_failed");
    }
    function ht() {
        r("WAWebODS").incr("web.call.voip_init.wasm_artifact.worker_glue.bootstrap_wait_failed_unmatched");
    }
    function yt() {
        r("WAWebODS").incr("web.call.voip_init.wasm_artifact.worker_glue.pinned_load_failed_bootstrap");
    }
    function Ct() {
        r("WAWebODS").incr("web.call.voip_init.wasm_artifact.worker_glue.pinned_load_failed_bound");
    }
    function bt() {
        r("WAWebODS").incr("web.call.voip_init.wasm_artifact.worker_glue.pinned_load_failed_unattributed");
    }
    function vt() {
        r("WAWebODS").incr("web.call.voip_init.wasm_artifact.worker_glue.prefetch_attempt");
    }
    function St() {
        r("WAWebODS").incr("web.call.voip_init.wasm_artifact.worker_glue.prefetch_failed");
    }
    function Rt() {
        r("WAWebODS").incr("web.call.voip_init.wasm_artifact.worker_glue.prefetch_skipped");
    }
    function Lt() {
        r("WAWebODS").incr("web.call.voip_init.wasm_artifact.worker_glue.bx_lookup_failure");
    }
    function Et() {
        r("WAWebODS").incr("web.call.voip_init.wasm_artifact.worker_glue.unpinned_fallback");
    }
    function kt() {
        r("WAWebODS").incr("web.call.voip_init.wasm_artifact.worker_glue.runtime_unpinned");
    }
    function It() {
        r("WAWebODS").incr("web.call.voip_init.wasm_artifact.worker_glue.stuck_worker_terminated");
    }
    function Tt() {
        r("WAWebODS").incr("web.call.voip_init.wasm_artifact.worker_glue.skew_detected");
    }
    function Dt() {
        r("WAWebODS").incr("web.call.voip_init.wasm_artifact.worker_glue.skew_pinned_import_loaded");
    }
    function xt() {
        r("WAWebODS").incr("web.call.voip_init.wasm_artifact.worker_glue.skew_pinned_import_failed");
    }
    function $t() {
        r("WAWebODS").incr("web.call.voip_init.retry_attempt");
    }
    function Pt() {
        r("WAWebODS").incr("web.call.voip_init.retry_idle_wait.started_hidden");
    }
    function Nt() {
        r("WAWebODS").incr("web.call.voip_init.retry_idle_wait.hidden_ended");
    }
    function Mt() {
        r("WAWebODS").incr("web.call.voip_init.retry_idle_wait.hidden_long");
    }
    function wt() {
        r("WAWebODS").incr("web.call.voip_init.retry_success");
    }
    function At() {
        r("WAWebODS").incr("web.call.voip_init.thread_pool.worker_load_timeout");
    }
    function Ft() {
        r("WAWebODS").incr("web.call.voip_init.thread_pool.emergency_worker_load_timeout");
    }
    function Ot() {
        r("WAWebODS").incr("web.call.voip_init.js_worker.join_timeout");
    }
    function Bt() {
        r("WAWebODS").incr("web.call.voip_init.retry_exhausted");
    }
    function Wt() {
        r("WAWebODS").incr("web.call.voip_init.retry_failure");
    }
    function qt() {
        r("WAWebODS").incr("web.call.voip_init.visibility_retry_attempt");
    }
    function Ut() {
        r("WAWebODS").incr("web.call.voip_init.visibility_retry_suppressed");
    }
    function Vt() {
        r("WAWebODS").incr("web.call.voip_init.visibility_retry_success");
    }
    function Ht() {
        r("WAWebODS").incr("web.call.voip_stack_interface.load_attempt_failure");
    }
    function Gt() {
        r("WAWebODS").incr("web.call.voip_stack_interface.load_retry_exhausted");
    }
    function zt() {
        r("WAWebODS").incr("web.call.voip_stack_interface.load_retry_success");
    }
    function jt() {
        r("WAWebODS").incr("web.call.browser_unsupported.missing_shared_array_buffer");
    }
    function Kt(e) {
        switch(e){
            case true:
                r("WAWebODS").incr("web.call.browser_capability.missing_sab.cross_origin_isolated");
                break;
            case false:
                r("WAWebODS").incr("web.call.browser_capability.missing_sab.not_cross_origin_isolated");
                break;
            default:
                r("WAWebODS").incr("web.call.browser_capability.missing_sab.isolation_unsupported");
        }
    }
    function Qt(e) {
        switch(e){
            case true:
                r("WAWebODS").incr("web.call.browser_capability.missing_atomics.cross_origin_isolated");
                break;
            case false:
                r("WAWebODS").incr("web.call.browser_capability.missing_atomics.not_cross_origin_isolated");
                break;
            default:
                r("WAWebODS").incr("web.call.browser_capability.missing_atomics.isolation_unsupported");
        }
    }
    function Xt(e) {
        switch(e){
            case true:
                r("WAWebODS").incr("web.call.browser_capability.missing_rtc.cross_origin_isolated");
                break;
            case false:
                r("WAWebODS").incr("web.call.browser_capability.missing_rtc.not_cross_origin_isolated");
                break;
            default:
                r("WAWebODS").incr("web.call.browser_capability.missing_rtc.isolation_unsupported");
        }
    }
    function Yt(e) {
        switch(e){
            case true:
                r("WAWebODS").incr("web.call.browser_capability.broken_wasm.cross_origin_isolated");
                break;
            case false:
                r("WAWebODS").incr("web.call.browser_capability.broken_wasm.not_cross_origin_isolated");
                break;
            default:
                r("WAWebODS").incr("web.call.browser_capability.broken_wasm.isolation_unsupported");
        }
    }
    function Jt() {
        r("WAWebODS").incr("web.call.browser_unsupported.missing_atomics");
    }
    function Zt() {
        r("WAWebODS").incr("web.call.browser_unsupported.missing_rtc_peer_connection");
    }
    function en() {
        r("WAWebODS").incr("web.call.browser_unsupported.broken_voip_wasm");
    }
    function tn() {
        r("WAWebODS").incr("web.call.permission.denied");
    }
    function nn() {
        r("WAWebODS").incr("web.call.permission.denied_by_system");
    }
    function rn() {
        r("WAWebODS").incr("web.call.permission.device_error");
    }
    function on() {
        r("WAWebODS").incr("web.call.permission.timed_out");
    }
    function an(e) {
        e: {
            if (e === "denied") {
                r("WAWebODS").incr("web.call.permission.failed_while_granted.denied");
                break e;
            }
            if (e === "device_error") {
                r("WAWebODS").incr("web.call.permission.failed_while_granted.device_error");
                break e;
            }
            if (e === "timed_out") {
                r("WAWebODS").incr("web.call.permission.failed_while_granted.timed_out");
                break e;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        }
    }
    function ln(e) {
        e: {
            if (e === "granted_to_prompt") {
                r("WAWebODS").incr("web.call.permission.mic.loss_while_unmuted.granted_to_prompt");
                break e;
            }
            if (e === "granted_to_denied") {
                r("WAWebODS").incr("web.call.permission.mic.loss_while_unmuted.granted_to_denied");
                break e;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        }
    }
    function sn() {
        r("WAWebODS").incr("web.call.screen_share.denied");
    }
    function un() {
        r("WAWebODS").incr("web.call.wasm_crash");
    }
    function cn() {
        r("WAWebODS").incr("web.call.media.mic_error");
    }
    function dn() {
        r("WAWebODS").incr("web.call.media.mic_preview_error");
    }
    function mn(e) {
        e: {
            if (e === "already_ready") {
                r("WAWebODS").incr("web.call.media.mic_unmute_preparation.already_ready");
                break e;
            }
            if (e === "reacquired") {
                r("WAWebODS").incr("web.call.media.mic_unmute_preparation.reacquired");
                break e;
            }
            if (e === "permission_denied") {
                r("WAWebODS").incr("web.call.media.mic_unmute_preparation.permission_denied");
                break e;
            }
            if (e === "preflight_failed") {
                r("WAWebODS").incr("web.call.media.mic_unmute_preparation.preflight_failed");
                break e;
            }
            if (e === "reacquire_failed") {
                r("WAWebODS").incr("web.call.media.mic_unmute_preparation.reacquire_failed");
                break e;
            }
            if (e === "stale_call") {
                r("WAWebODS").incr("web.call.media.mic_unmute_preparation.stale_call");
                break e;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        }
    }
    function pn(e) {
        e: {
            if (e === "recorded") {
                r("WAWebODS").incr("web.call.blocked_mic_join.recorded");
                break e;
            }
            if (e === "blocked_at_prompt") {
                r("WAWebODS").incr("web.call.blocked_mic_join.blocked_at_prompt");
                break e;
            }
            if (e === "blocked_at_unmute") {
                r("WAWebODS").incr("web.call.blocked_mic_join.blocked_at_unmute");
                break e;
            }
            if (e === "allowed_while_ringing") {
                r("WAWebODS").incr("web.call.blocked_mic_join.allowed_while_ringing");
                break e;
            }
            if (e === "reopened") {
                r("WAWebODS").incr("web.call.blocked_mic_join.reopened");
                break e;
            }
            if (e === "auto_unmuted") {
                r("WAWebODS").incr("web.call.blocked_mic_join.auto_unmuted");
                break e;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        }
    }
    function _n(e) {
        e: {
            if (e === "blocked") {
                r("WAWebODS").incr("web.call.outgoing_video_camera_blocked");
                break e;
            }
            if (e === "refused") {
                r("WAWebODS").incr("web.call.outgoing_video_camera_refused");
                break e;
            }
            if (e === "blocked_by_system") {
                r("WAWebODS").incr("web.call.outgoing_video_camera_blocked_by_system");
                break e;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        }
    }
    function fn(e) {
        e: {
            if (e === "at_prompt") {
                r("WAWebODS").incr("web.call.start_mic_refused.at_prompt");
                break e;
            }
            if (e === "blocked_before") {
                r("WAWebODS").incr("web.call.start_mic_refused.blocked_before");
                break e;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        }
    }
    function gn() {
        r("WAWebODS").incr("web.call.media.camera_error");
    }
    function hn() {
        r("WAWebODS").incr("web.call.network_offline");
    }
    function yn() {
        r("WAWebODS").incr("web.call.relay.port_3478");
    }
    function Cn() {
        r("WAWebODS").incr("web.call.sctp_prewarm_v2.run");
    }
    function bn() {
        r("WAWebODS").incr("web.call.sctp_prewarm_v2.marked_slow");
    }
    function vn() {
        r("WAWebODS").incr("web.call.sctp_prewarm_v2.skipped_slow");
    }
    function Sn() {
        r("WAWebODS").incr("web.call.ice.started.port_3478");
    }
    function Rn() {
        r("WAWebODS").incr("web.call.ice.started.port_3480");
    }
    function Ln() {
        r("WAWebODS").incr("web.call.ice.connected.port_3478");
    }
    function En() {
        r("WAWebODS").incr("web.call.ice.connected.port_3480");
    }
    function kn() {
        r("WAWebODS").incr("web.call.ice.failed.port_3478");
    }
    function In() {
        r("WAWebODS").incr("web.call.ice.failed.port_3480");
    }
    function Tn() {
        r("WAWebODS").incr("web.call.dtls.started.port_3478");
    }
    function Dn() {
        r("WAWebODS").incr("web.call.dtls.started.port_3480");
    }
    function xn() {
        r("WAWebODS").incr("web.call.dtls.connected.port_3478");
    }
    function $n() {
        r("WAWebODS").incr("web.call.dtls.connected.port_3480");
    }
    function Pn() {
        r("WAWebODS").incr("web.call.dtls.failed.stall.port_3478");
    }
    function Nn() {
        r("WAWebODS").incr("web.call.dtls.failed.stall.port_3480");
    }
    function Mn() {
        r("WAWebODS").incr("web.call.dtls.failed.pc_failed.port_3478");
    }
    function wn() {
        r("WAWebODS").incr("web.call.dtls.failed.pc_failed.port_3480");
    }
    function An() {
        r("WAWebODS").incr("web.call.sctp.connection_failed.port_3478");
    }
    function Fn() {
        r("WAWebODS").incr("web.call.sctp.connection_failed.port_3480");
    }
    function On() {
        r("WAWebODS").incr("web.call.sctp.connection_cleaned_up.port_3478");
    }
    function Bn() {
        r("WAWebODS").incr("web.call.sctp.connection_cleaned_up.port_3480");
    }
    function Wn(e) {
        if (e) {
            r("WAWebODS").incr("web.call.sctp.early_packet_relay.eligible.group");
        } else {
            r("WAWebODS").incr("web.call.sctp.early_packet_relay.eligible.non_group");
        }
    }
    function qn(e) {
        e: {
            if (e === "attempted") {
                r("WAWebODS").incr("web.call.sctp.early_packet_relay.reconnect.attempted");
                break e;
            }
            if (e === "pc_connected") {
                r("WAWebODS").incr("web.call.sctp.early_packet_relay.reconnect.pc_connected");
                break e;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        }
    }
    function Un() {
        r("WAWebODS").incr("web.call.sctp.data_channel_relay_error");
    }
    function Vn() {
        r("WAWebODS").incr("web.call.sctp.data_channel_relay_error.no_first_response_timeout");
    }
    function Hn() {
        r("WAWebODS").incr("web.call.sctp.data_channel_relay_error.onerror");
    }
    function Gn() {
        r("WAWebODS").incr("web.call.sctp.data_channel_relay_error.remote_close");
    }
    function zn() {
        r("WAWebODS").incr("web.call.sctp.data_channel_relay_error.rx_stall_timeout");
    }
    function jn(e) {
        e: {
            if (e === "retained") {
                r("WAWebODS").incr("web.call.sctp.obsolete_relay.retained");
                break e;
            }
            if (e === "transport_failed") {
                r("WAWebODS").incr("web.call.sctp.obsolete_relay.transport_failed");
                break e;
            }
            if (e === "reconnect_attempted") {
                r("WAWebODS").incr("web.call.sctp.obsolete_relay.reconnect.attempted");
                break e;
            }
            if (e === "reconnect_succeeded") {
                r("WAWebODS").incr("web.call.sctp.obsolete_relay.reconnect.succeeded");
                break e;
            }
            if (e === "reconnect_exhausted") {
                r("WAWebODS").incr("web.call.sctp.obsolete_relay.reconnect.exhausted");
                break e;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        }
    }
    function Kn() {
        r("WAWebODS").incr("web.call.sctp.ice_restart.skipped_cleanup_in_progress");
    }
    function Qn(e) {
        e: {
            if (e === "cert_acquire") {
                r("WAWebODS").incr("web.call.sctp.ice_restart.aborted_stale.cert_acquire");
                break e;
            }
            if (e === "negotiation") {
                r("WAWebODS").incr("web.call.sctp.ice_restart.aborted_stale.negotiation");
                break e;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        }
    }
    function Xn(e) {
        e: {
            if (e === "fresh_no_arm") {
                r("WAWebODS").incr("web.call.sctp.dtls_cert.fresh.no_arm");
                break e;
            }
            if (e === "fresh_path_off") {
                r("WAWebODS").incr("web.call.sctp.dtls_cert.fresh.path_off");
                break e;
            }
            if (e === "fresh_unseeded") {
                r("WAWebODS").incr("web.call.sctp.dtls_cert.fresh.unseeded");
                break e;
            }
            if (e === "fresh_call_ending") {
                r("WAWebODS").incr("web.call.sctp.dtls_cert.fresh.call_ending");
                break e;
            }
            if (e === "fresh_after_failure") {
                r("WAWebODS").incr("web.call.sctp.dtls_cert.fresh.after_failure");
                break e;
            }
            if (e === "generated_shared") {
                r("WAWebODS").incr("web.call.sctp.dtls_cert.generated_shared");
                break e;
            }
            if (e === "inflight_reuse") {
                r("WAWebODS").incr("web.call.sctp.dtls_cert.reuse.inflight");
                break e;
            }
            if (e === "ready_reuse") {
                r("WAWebODS").incr("web.call.sctp.dtls_cert.reuse.ready");
                break e;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        }
    }
    function Yn() {
        r("WAWebODS").incr("web.call.sctp.dtls_cert.prewarm_failed");
    }
    function Jn() {
        r("WAWebODS").incr("web.call.webtransport.connect.attempted");
    }
    function Zn() {
        r("WAWebODS").incr("web.call.webtransport.connect.succeeded");
    }
    function er() {
        r("WAWebODS").incr("web.call.webtransport.connect.failed");
    }
    function tr() {
        r("WAWebODS").incr("web.call.webtransport.js_worker.join_timeout");
    }
    function nr(e) {
        e: {
            if (e === "handshake_timeout") {
                r("WAWebODS").incr("web.call.webtransport.connect.fail.handshake_timeout");
                break e;
            }
            if (e === "immediate_reject") {
                r("WAWebODS").incr("web.call.webtransport.connect.fail.immediate_reject");
                break e;
            }
            if (e === "session_error") {
                r("WAWebODS").incr("web.call.webtransport.connect.fail.session_error");
                break e;
            }
            if (e === "stream_error") {
                r("WAWebODS").incr("web.call.webtransport.connect.fail.stream_error");
                break e;
            }
            if (e === "aborted") {
                r("WAWebODS").incr("web.call.webtransport.connect.fail.aborted");
                break e;
            }
            if (e === "unknown") {
                r("WAWebODS").incr("web.call.webtransport.connect.fail.unknown");
                break e;
            }
            if (e === "connection_timeout") {
                r("WAWebODS").incr("web.call.webtransport.connect.fail.connection_timeout");
                break e;
            }
            if (e === "invalid_config") {
                r("WAWebODS").incr("web.call.webtransport.connect.fail.invalid_config");
                break e;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        }
    }
    function rr() {
        r("WAWebODS").incr("web.call.webtransport.relays.ipv6_only");
    }
    function or() {
        r("WAWebODS").incr("web.call.webtransport.fallback_to_sctp.triggered");
    }
    function ar() {
        r("WAWebODS").incr("web.call.webtransport.fallback_to_sctp.ipv4_only_ipv6_failed");
    }
    function ir() {
        r("WAWebODS").incr("web.call.webtransport.fallback_to_sctp.skipped_disabled");
    }
    function lr() {
        r("WAWebODS").incr("web.call.webtransport.fallback_to_sctp.sctp_connected");
    }
    function sr() {
        r("WAWebODS").incr("web.call.webtransport.fallback_to_sctp.sctp_failed");
    }
    function ur() {
        r("WAWebODS").incr("web.call.webtransport.group_call_anc");
    }
    function cr() {
        r("WAWebODS").incr("web.call.voip.rpc_ready.timeout.foreground");
    }
    function dr() {
        r("WAWebODS").incr("web.call.voip.rpc_ready.timeout.absolute");
    }
    function mr() {
        r("WAWebODS").incr("web.call.voip.rpc_ready.cleanup_shutdown.attempted");
    }
    function pr() {
        r("WAWebODS").incr("web.call.voip.rpc_ready.cleanup_shutdown.failed");
    }
    function _r() {
        r("WAWebODS").incr("web.call.voip.rpc_ready.retry_success");
    }
    function fr() {
        r("WAWebODS").incr("web.call.voip.rpc_ready.background_pause_success");
    }
    function gr() {
        r("WAWebODS").incr("web.call.voip.rpc_ready.hidden_grace.started");
    }
    function hr() {
        r("WAWebODS").incr("web.call.voip.rpc_ready.hidden_grace.recovered");
    }
    function yr() {
        r("WAWebODS").incr("web.call.voip.rpc_ready.hidden_grace.exhausted.foreground");
    }
    function Cr() {
        r("WAWebODS").incr("web.call.voip.rpc_ready.hidden_grace.exhausted.absolute");
    }
    function br() {
        r("WAWebODS").incr("web.call.voip.rpc_init.timeout.foreground");
    }
    function vr() {
        r("WAWebODS").incr("web.call.voip.rpc_init.timeout.absolute");
    }
    function Sr() {
        r("WAWebODS").incr("web.call.voip.rpc_init.background_pause_success");
    }
    function Rr() {
        r("WAWebODS").incr("web.calendar.open.date_marker");
    }
    function Lr() {
        r("WAWebODS").incr("web.calendar.open.search_drawer");
    }
    function Er() {
        r("WAWebODS").incr("web.calendar.date_selected.date_marker");
    }
    function kr() {
        r("WAWebODS").incr("web.calendar.date_selected.search_drawer");
    }
    function Ir() {
        r("WAWebODS").incr("web.calendar.open.sticky_date_marker");
    }
    function Tr() {
        r("WAWebODS").incr("web.calendar.date_selected.sticky_date_marker");
    }
    l.logStatusSend = e;
    l.logMCMigrationControl = s;
    l.logMCMigrationTest = u;
    l.logGroupCreate = c;
    l.logGroupCreateError = d;
    l.logChannelMsgSend = m;
    l.logGroupAddParticipant = p;
    l.logGroupAddParticipantError = _;
    l.logGlobalSearchHasResults = f;
    l.logGlobalSearchError = g;
    l.logMsgSendError = h;
    l.logMsgSendErrorUpload = y;
    l.markPageLoadComplete = b;
    l.isPageLoadComplete = v;
    l.logPageLoadSuccess = S;
    l.logPageLoadSuccessMain = R;
    l.logPageLoadSuccessQr = L;
    l.logPageLoadError = k;
    l.logPageLoadErrorStorageInit = I;
    l.logPageLoadErrorJsException = T;
    l.logPageLoadErrorUnhandledRejection = D;
    l.logPageLoadErrorForcedLogout = x;
    l.logPageLoadErrorServiceUnavailable = $;
    l.logPageLoadErrorTimeout = P;
    l.logPageLoadErrorHistorySyncIncomplete = N;
    l.logPairSuccess = M;
    l.logPairError = w;
    l.logSessionForcedLogout = A;
    l.logMediaUploadSuccess = F;
    l.logMediaUploadError = O;
    l.logMediaUploadErrorServer = B;
    l.logMediaUploadErrorNetwork = W;
    l.logMediaDownloadSuccess = q;
    l.logMediaDownloadError = U;
    l.logMediaDownloadErrorExpired = V;
    l.logMediaDownloadErrorNetwork = H;
    l.logCallSuccess = G;
    l.logCallErrorTerminal = z;
    l.logCallAttempt = j;
    l.logCallIncomingHeldStackUnresponsive = K;
    l.logCallIncomingDeferredBootStaleOffer = Q;
    l.logCallIncomingDeferredBootStaleOfferAfterHiddenPrewarm = X;
    l.logCallIncomingDeferredBootStaleFollowUp = Y;
    l.logCallInitBlockedStackUnresponsive = J;
    l.logNotificationTestStarted = Z;
    l.logNotificationTestCompleted = ee;
    l.logNotificationTestTipShown = te;
    l.logNotificationTestOpenDeviceSettings = ne;
    l.logDeepLinkCallConfirmShown = re;
    l.logDeepLinkCallConfirmAccepted = oe;
    l.logDeepLinkCallConfirmDeclined = ae;
    l.logDeepLinkCallNotAllowed = ie;
    l.logDeepLinkCallRefusedAfterAsk = le;
    l.logDeepLinkCallConfirmGuardSwallowed = se;
    l.logDeepLinkCallPeerMismatch = ue;
    l.logCallFieldstatsFinalReceived = ce;
    l.logCallFieldstatsHandoffCompleted = de;
    l.logCallFieldstatsHandoffFailed = me;
    l.logCallFieldstatsRecoveryFound = pe;
    l.logCallFieldstatsRecoveryCompleted = _e;
    l.logCallFieldstatsRecoveryFailed = fe;
    l.logCallFieldstatsRecoveryInitFailed = ge;
    l.logCallFieldstatsRecoveryCleanupFailed = he;
    l.logCallFieldstatsRecoveryParseFailed = ye;
    l.logCallFieldstatsPersistenceCleanupFailed = Ce;
    l.logCallFieldstatsDedupMarkerFailed = be;
    l.logCallFieldstatsRecoveryDuplicateSuppressed = ve;
    l.logCallFieldstatsWatchdogSend = Se;
    l.logCallMicHealthOutcome = Re;
    l.logCallsTabNotificationsOffBanner = ke;
    l.logChatlistMissedCallBanner = Ie;
    l.logCallsTabPermissionsOffBanner = Te;
    l.logCallOutgoingAudio = De;
    l.logCallOutgoingVideo = xe;
    l.logCallOutgoingGroupAudio = $e;
    l.logCallOutgoingGroupVideo = Pe;
    l.logCallVideoCaptureWithConverterPlayAttempt = Ne;
    l.logCallVideoCaptureWithConverterPlayFailure = Me;
    l.logCallVideoCaptureWithConverterPlaySuccess = we;
    l.logCallIncomingAccept = Ae;
    l.logCallIncomingDecline = Fe;
    l.logCallIncomingMissed = Oe;
    l.logCallIncomingDismiss = Be;
    l.logCallGroupJoin = We;
    l.logCallGroupJoinError = qe;
    l.logCallVoipBootInitDeferred = Ue;
    l.logCallVoipBootInitArmed = Ve;
    l.logCallVoipBootGateSchedulerLoadTimeout = He;
    l.logCallVoipBootInitFireAttempt = Ge;
    l.logCallVoipBootInitFired = ze;
    l.logCallVoipBootHiddenPrewarmWatching = je;
    l.logCallVoipBootHiddenPrewarmSkip = Ke;
    l.logCallVoipBootHiddenPrewarmEnd = Qe;
    l.logCallVoipBootHiddenPrewarmRearm = Xe;
    l.logCallVoipBootHiddenPrewarmLoad = Ye;
    l.logCallVoipBootHiddenPrewarmInit = Je;
    l.logCallVoipBootHiddenPrewarmPostInit = Ze;
    l.logCallVoipBootHiddenPrewarmPostInitRanHidden = et;
    l.logCallVoipWasmIdleWarm = tt;
    l.logCallVoipWasmIdleWarmSkip = nt;
    l.logCallVoipInitDeferredStart = rt;
    l.logCallVoipInitSuccess = ot;
    l.logCallVoipInitError = at;
    l.logCallVoipInitPreWasmReloadRequired = it;
    l.logCallVoipInitSkipUnsupported = lt;
    l.logCallVoipInitWasmContractMismatch = st;
    l.logCallVoipInitWasmArtifactContentAddressedBxKeyMissing = ut;
    l.logCallVoipInitWasmArtifactContentAddressedBxLookupFailure = ct;
    l.logCallVoipInitWasmArtifactContentAddressedLoadAttempt = dt;
    l.logCallVoipInitWasmArtifactContentAddressedLoadSuccess = mt;
    l.logCallVoipInitWasmArtifactUnversionedLoadAttempt = pt;
    l.logCallVoipInitWasmArtifactUnversionedLoadSuccess = _t;
    l.logCallVoipInitWasmArtifactWorkerGluePinnedLoadAttempt = ft;
    l.logCallVoipInitWasmArtifactWorkerGluePinnedLoadFailed = gt;
    l.logCallVoipInitWasmArtifactWorkerGlueBootstrapWaitFailedUnmatched = ht;
    l.logCallVoipInitWasmArtifactWorkerGluePinnedLoadFailedBootstrap = yt;
    l.logCallVoipInitWasmArtifactWorkerGluePinnedLoadFailedBound = Ct;
    l.logCallVoipInitWasmArtifactWorkerGluePinnedLoadFailedUnattributed = bt;
    l.logCallVoipInitWasmArtifactWorkerGluePrefetchAttempt = vt;
    l.logCallVoipInitWasmArtifactWorkerGluePrefetchFailed = St;
    l.logCallVoipInitWasmArtifactWorkerGluePrefetchSkipped = Rt;
    l.logCallVoipInitWasmArtifactWorkerGlueBxLookupFailure = Lt;
    l.logCallVoipInitWasmArtifactWorkerGlueUnpinnedFallback = Et;
    l.logCallVoipInitWasmArtifactWorkerGlueRuntimeUnpinned = kt;
    l.logCallVoipInitWasmArtifactWorkerGlueStuckWorkerTerminated = It;
    l.logCallVoipInitWasmArtifactWorkerGlueSkewDetected = Tt;
    l.logCallVoipInitWasmArtifactWorkerGlueSkewPinnedImportLoaded = Dt;
    l.logCallVoipInitWasmArtifactWorkerGlueSkewPinnedImportFailed = xt;
    l.logCallVoipInitRetryAttempt = $t;
    l.logCallVoipInitRetryIdleWaitStartedHidden = Pt;
    l.logCallVoipInitRetryIdleWaitHiddenEnded = Nt;
    l.logCallVoipInitRetryIdleWaitHiddenLong = Mt;
    l.logCallVoipInitRetrySuccess = wt;
    l.logCallVoipInitThreadPoolWorkerLoadTimeout = At;
    l.logCallVoipInitThreadPoolEmergencyWorkerLoadTimeout = Ft;
    l.logCallVoipInitJsWorkerJoinTimeout = Ot;
    l.logCallVoipInitRetryExhausted = Bt;
    l.logCallVoipInitRetryFailure = Wt;
    l.logCallVoipInitVisibilityRetryAttempt = qt;
    l.logCallVoipInitVisibilityRetrySuppressed = Ut;
    l.logCallVoipInitVisibilityRetrySuccess = Vt;
    l.logCallVoipStackInterfaceLoadAttemptFailure = Ht;
    l.logCallVoipStackInterfaceLoadRetryExhausted = Gt;
    l.logCallVoipStackInterfaceLoadRetrySuccess = zt;
    l.logCallBrowserUnsupportedMissingSAB = jt;
    l.logCallBrowserCapabilityMissingSAB = Kt;
    l.logCallBrowserCapabilityMissingAtomics = Qt;
    l.logCallBrowserCapabilityMissingRTC = Xt;
    l.logCallBrowserCapabilityBrokenWasm = Yt;
    l.logCallBrowserUnsupportedMissingAtomics = Jt;
    l.logCallBrowserUnsupportedMissingRTC = Zt;
    l.logCallBrowserUnsupportedBrokenWasm = en;
    l.logCallPermissionDenied = tn;
    l.logCallPermissionDeniedBySystem = nn;
    l.logCallPermissionDeviceError = rn;
    l.logCallPermissionTimedOut = on;
    l.logCallPermissionFailedWhileGranted = an;
    l.logCallMicPermissionLossTransition = ln;
    l.logCallScreenShareDenied = sn;
    l.logCallWasmCrash = un;
    l.logCallMediaMicError = cn;
    l.logCallMediaMicPreviewError = dn;
    l.logCallMicUnmutePreparationOutcome = mn;
    l.logCallBlockedMicJoin = pn;
    l.logCallOutgoingVideoCameraOff = _n;
    l.logCallStartMicrophoneRefused = fn;
    l.logCallMediaCameraError = gn;
    l.logCallNetworkOffline = hn;
    l.logCallRelayPort3478 = yn;
    l.logCallSctpPrewarmV2Run = Cn;
    l.logCallSctpPrewarmV2MarkedSlow = bn;
    l.logCallSctpPrewarmV2SkippedSlow = vn;
    l.logCallIceStartedPort3478 = Sn;
    l.logCallIceStartedPort3480 = Rn;
    l.logCallIceConnectedPort3478 = Ln;
    l.logCallIceConnectedPort3480 = En;
    l.logCallIceFailedPort3478 = kn;
    l.logCallIceFailedPort3480 = In;
    l.logCallDtlsStartedPort3478 = Tn;
    l.logCallDtlsStartedPort3480 = Dn;
    l.logCallDtlsConnectedPort3478 = xn;
    l.logCallDtlsConnectedPort3480 = $n;
    l.logCallDtlsFailedStallPort3478 = Pn;
    l.logCallDtlsFailedStallPort3480 = Nn;
    l.logCallDtlsFailedPcFailedPort3478 = Mn;
    l.logCallDtlsFailedPcFailedPort3480 = wn;
    l.logCallSctpConnectionFailedPort3478 = An;
    l.logCallSctpConnectionFailedPort3480 = Fn;
    l.logCallSctpConnectionCleanedUpPort3478 = On;
    l.logCallSctpConnectionCleanedUpPort3480 = Bn;
    l.logCallSctpEarlyPacketRelayEligible = Wn;
    l.logCallSctpEarlyPacketRelayReconnectEvent = qn;
    l.logCallDataChannelRelayError = Un;
    l.logCallDataChannelRelayErrorNoFirstResponseTimeout = Vn;
    l.logCallDataChannelRelayErrorOnError = Hn;
    l.logCallDataChannelRelayErrorRemoteClose = Gn;
    l.logCallDataChannelRelayErrorRxStallTimeout = zn;
    l.logCallSctpObsoleteRelayEvent = jn;
    l.logCallSctpIceRestartSkippedCleanupInProgress = Kn;
    l.logCallSctpIceRestartAbortedStale = Qn;
    l.logCallSctpDtlsCertSource = Xn;
    l.logCallSctpDtlsCertPrewarmFailed = Yn;
    l.logCallWebtransportConnectAttempted = Jn;
    l.logCallWebtransportConnectSucceeded = Zn;
    l.logCallWebtransportConnectFailed = er;
    l.logCallWebtransportJsWorkerJoinTimeout = tr;
    l.logCallWebtransportConnectFailByCategory = nr;
    l.logCallWebtransportRelaysIpv6Only = rr;
    l.logCallWebtransportFallbackToSctpTriggered = or;
    l.logCallSctpFallbackIpv4OnlyIpv6Failed = ar;
    l.logCallWebtransportFallbackToSctpSkippedDisabled = ir;
    l.logCallWebtransportFallbackToSctpSctpConnected = lr;
    l.logCallWebtransportFallbackToSctpSctpFailed = sr;
    l.logCallWebtransportGroupCallAnc = ur;
    l.logCallVoipRpcReadyTimeoutForeground = cr;
    l.logCallVoipRpcReadyTimeoutAbsolute = dr;
    l.logCallVoipRpcReadyCleanupShutdownAttempted = mr;
    l.logCallVoipRpcReadyCleanupShutdownFailed = pr;
    l.logCallVoipRpcReadyRetrySuccess = _r;
    l.logCallVoipRpcReadyBackgroundPauseSuccess = fr;
    l.logCallVoipRpcReadyHiddenGraceStarted = gr;
    l.logCallVoipRpcReadyHiddenGraceRecovered = hr;
    l.logCallVoipRpcReadyHiddenGraceExhaustedForeground = yr;
    l.logCallVoipRpcReadyHiddenGraceExhaustedAbsolute = Cr;
    l.logCallVoipRpcInitTimeoutForeground = br;
    l.logCallVoipRpcInitTimeoutAbsolute = vr;
    l.logCallVoipRpcInitBackgroundPauseSuccess = Sr;
    l.logCalendarOpenFromDateMarker = Rr;
    l.logCalendarOpenFromSearchDrawer = Lr;
    l.logCalendarDateSelectedFromDateMarker = Er;
    l.logCalendarDateSelectedFromSearchDrawer = kr;
    l.logCalendarOpenFromStickyDateMarker = Ir;
    l.logCalendarDateSelectedFromStickyDateMarker = Tr;
}, 98);