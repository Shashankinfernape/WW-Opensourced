__d("WAWebBizAiSmartComposerLogEvents", [
    "WALogger",
    "WAWebBizAiSmartComposerErrorMapping",
    "WAWebSMBUserJourneyLogger",
    "WAWebWamEnumEntryPoint",
    "WAWebWamEnumSmbFeatureNameEnum",
    "WAWebWamEnumSmbUserActionTypeEnum",
    "WAWebWamEnumSurfaceType",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = {
        ai_agent: "AI_AGENT",
        manual: "MANUAL",
        suggestions: "SUGGESTIONS"
    };
    const variant = "TWO_LINE";
    const d = {
        error: "error",
        loading: "loading",
        quota_handoff: "handoff",
        success: "success"
    };
    const m = {
        appear: (s = o("WAWebWamEnumSmbUserActionTypeEnum")).SMB_USER_ACTION_TYPE_ENUM.VIEW,
        dismiss: s.SMB_USER_ACTION_TYPE_ENUM.DISMISS,
        sent: s.SMB_USER_ACTION_TYPE_ENUM.VIEW,
        transition: s.SMB_USER_ACTION_TYPE_ENUM.VIEW
    };
    function p(is_chat_ai_eligible) {
        I("smart_composer", o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW, {
            is_chat_ai_eligible,
            variant
        });
    }
    function _() {
        I("mode_switching_bottom_sheet", o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW, {
            variant
        });
    }
    function f(e) {
        I(e, o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW, {
            is_companion: true
        }, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_AGENT_SMART_COMPOSER_HANDOFF_CARD);
    }
    function g({ cardStatus, cardType, errorCode, reason, trigger }) {
        const l = {
            card_state: d[cardStatus],
            dismissed: reason
        };
        if (cardType != null) {
            l.card_type = cardType;
        }
        if (trigger != null) {
            l.trigger = trigger;
        }
        if (errorCode != null) {
            l.error_code = o("WAWebBizAiSmartComposerErrorMapping").getSuggestedReplyErrorWireValue(errorCode);
        }
        I("suggested_reply_card_dismissed", o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.DISMISS, l);
    }
    function h({ action, cardStatus, cardType, dismissReason, editDistanceRatio, errorCode, funnelId }) {
        const u = {
            action,
            card_state: cardStatus,
            funnel_id: funnelId
        };
        if (cardType != null) {
            u.card_type = cardType;
        }
        if (dismissReason != null) {
            u.dismiss_reason = dismissReason;
        }
        if (errorCode != null) {
            u.error_code = o("WAWebBizAiSmartComposerErrorMapping").getSuggestedReplyErrorWireValue(errorCode);
        }
        if (editDistanceRatio != null) {
            u.edit_distance_ratio = editDistanceRatio;
        }
        I("suggested_reply_card_funnel", m[action], u);
    }
    function y(e) {
        I("suggested_reply_metering_gql_response", o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.API, {
            success: e
        });
    }
    function C(e, is_from_cache, n) {
        I("suggested_reply_card_view", o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW, {
            card_state: "success",
            is_from_cache,
            trigger: e,
            card_type: n
        });
    }
    function b(e) {
        I("suggested_reply_requested", o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.API, {
            trigger: e
        });
    }
    function v(e, t) {
        const n = {
            trigger: e
        };
        if (t != null) {
            n.error_code = o("WAWebBizAiSmartComposerErrorMapping").getSuggestedReplyErrorWireValue(t);
        }
        I("suggested_reply_received", o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.API, n);
    }
    function S(e, t, n) {
        const r = {
            card_type: t,
            suggestion_word_count: n.suggestionWordCount,
            trigger: e,
            was_edited: n.wasEdited
        };
        if (n.editDistance != null) {
            r.edit_distance = n.editDistance;
        }
        if (n.editDistanceRatio != null) {
            r.edit_distance_ratio = n.editDistanceRatio;
        }
        I("suggested_reply_send", o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK, r);
    }
    function R() {
        I("submit_coaching_response_start", o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.API);
    }
    function L(e) {
        I("submit_coaching_response_result", o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.API, e === "success" ? {
            result: "success"
        } : {
            error: e,
            result: "failure"
        });
    }
    function E(e, t) {
        I("suggested_reply_card_tapped", o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK, {
            card_type: t,
            trigger: e
        });
    }
    function k({ from, success, to, trigger }) {
        I("mode_switch_requested", o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK, {
            from: u[from],
            success,
            to: u[to],
            trigger,
            variant
        });
    }
    function I(t, userActionType, a, i = o("WAWebWamEnumSurfaceType").SURFACE_TYPE.SMB_SMART_COMPOSER) {
        try {
            o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
                entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_THREAD,
                extraAttributes: a,
                featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
                stickyEntryPoint: false,
                surface: i,
                userActionTarget: t,
                userActionType
            });
        } catch (error) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[SmartComposer] journey telemetry failed"
            ]))).catching(r("getErrorSafe")(error)).sendLogs("biz-ai-smart-composer-wam-fail");
        }
    }
    l.logViewSmartComposer = p;
    l.logViewModeSwitchingSheet = _;
    l.logViewHandoffCard = f;
    l.logDismissSuggestionCard = g;
    l.logSuggestionCardFunnel = h;
    l.logMeteringResponse = y;
    l.logViewSuggestionCard = C;
    l.logSuggestionRequested = b;
    l.logSuggestionReceived = v;
    l.logSendSuggestion = S;
    l.logSuggestedReplyCoachingStart = R;
    l.logSuggestedReplyCoachingResult = L;
    l.logTapSuggestionCard = E;
    l.logModeSwitchRequested = k;
}, 98);