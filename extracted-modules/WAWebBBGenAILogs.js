__d("WAWebBBGenAILogs", [
    "WAWebBBLoggerTypes"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, latency_ms, r) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
            extraAttributes: {
                ai_model: r,
                latency_ms,
                num_ai_suggestions: t
            },
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.GENAI_SUGGESTIONS_SHOWN
        });
    }
    function s(e, t) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
            extraAttributes: {
                num_ai_suggestions: t
            },
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.GENAI_CARD_TAPPED
        });
    }
    function u(e, t) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
            extraAttributes: {
                num_ai_suggestions: t
            },
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.GENAI_REFRESH
        });
    }
    function c(e, t) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
            extraAttributes: {
                error_type: t
            },
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.GENAI_ERROR_SHOWN
        });
    }
    function d(e, t) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
            extraAttributes: {
                error_type: t
            },
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.GENAI_ERROR_RETRY
        });
    }
    function m(e, daily_count) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
            extraAttributes: {
                daily_count
            },
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.GENAI_DAILY_LIMIT
        });
    }
    function p(e, modal, n, time_spent_ms) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
            extraAttributes: {
                modal,
                result: n,
                time_spent_ms
            },
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.GENAI_MODAL_CLOSED
        });
    }
    function _(e, t) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
            extraAttributes: {
                num_ai_suggestions: t
            },
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.GENAI_AI_TEXT_USED
        });
    }
    function f(e) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.GENAI_AI_TEXT_CLEARED
        });
    }
    function g(e) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.GENAI_INSUFFICIENT_WORD_COUNT
        });
    }
    function h(e) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.GENAI_CREATE_MODAL_VIEWED
        });
    }
    function y(e) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.GENAI_CREATE_MODAL_DISMISSED
        });
    }
    function C(e, prompt_length) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
            extraAttributes: {
                prompt_length
            },
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.GENAI_CREATE_MODAL_SUBMITTED
        });
    }
    function b(e, chip_label) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
            extraAttributes: {
                chip_label
            },
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.GENAI_CHIP_TAPPED
        });
    }
    function v(e, t) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
            extraAttributes: {
                refinement_count: t
            },
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.GENAI_CUSTOMIZE_BACK
        });
    }
    function S(e, t) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
            extraAttributes: {
                num_ai_suggestions: t
            },
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.GENAI_CUSTOMIZE_OPENED
        });
    }
    function R({ cardIndex, isOriginal, log, refinementCount }) {
        log({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
            extraAttributes: {
                card_index: cardIndex,
                is_original: isOriginal,
                refinement_count: refinementCount
            },
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.GENAI_CUSTOMIZE_USE_MESSAGE
        });
    }
    function L(e) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.GENAI_REFINEMENT_LOADING
        });
    }
    function E(e, response_time_ms) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
            extraAttributes: {
                response_time_ms
            },
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.GENAI_REFINEMENT_COMPLETED
        });
    }
    function k(e, t) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
            extraAttributes: {
                error_type: t
            },
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.GENAI_REFINEMENT_FAILED
        });
    }
    function I(e, prompt_type, n, r) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
            extraAttributes: {
                ai_model: n,
                prompt_type,
                refinement_count: r
            },
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.GENAI_REFINEMENT_SUBMITTED
        });
    }
    function T(e) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.GENAI_ENTRY_POINT_VIEWED
        });
    }
    function D(e, t, num_words_composer_draft) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
            extraAttributes: {
                ai_model: t,
                num_words_composer_draft
            },
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.GENAI_ENTRY_POINT_CLICKED
        });
    }
    function x(e) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.GENAI_TOOLTIP_IMPRESSION
        });
    }
    function $(e) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_NUX,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.GENAI_NUX_MODAL
        });
    }
    function P(e) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_NUX,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.GENAI_NUX_ACCEPT
        });
    }
    function N(e) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_NUX,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.GENAI_NUX_DISMISS
        });
    }
    function M(e, t) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
            extraAttributes: {
                link_name: t
            },
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_NUX,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.GENAI_NUX_LINK
        });
    }
    l.genAISuggestionsShown = e;
    l.genAICardTapped = s;
    l.genAIRefreshTapped = u;
    l.genAIErrorShown = c;
    l.genAIErrorRetryTapped = d;
    l.genAIDailyLimitHit = m;
    l.genAIModalClosed = p;
    l.genAIAiTextUsed = _;
    l.genAIAiTextCleared = f;
    l.genAIInsufficientWordCountShown = g;
    l.genAICreateModalViewed = h;
    l.genAICreateModalDismissed = y;
    l.genAICreateModalSubmitted = C;
    l.genAIChipTapped = b;
    l.genAICustomizeBack = v;
    l.genAICustomizeOpened = S;
    l.genAICustomizeUseMessage = R;
    l.genAIRefinementLoading = L;
    l.genAIRefinementCompleted = E;
    l.genAIRefinementFailed = k;
    l.genAIRefinementSubmitted = I;
    l.genAIEntryPointViewed = T;
    l.genAIEntryPointClicked = D;
    l.genAITooltipImpression = x;
    l.genAINuxModalViewed = $;
    l.genAINuxAcceptClicked = P;
    l.genAINuxDismissClicked = N;
    l.genAINuxLinkClicked = M;
}, 98);