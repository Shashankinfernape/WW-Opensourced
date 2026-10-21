__d("WAWebBizAILargeScreensLogEvents", [
    "WAWebSMBUserJourneyLogger",
    "WAWebWamEnumEntryPoint",
    "WAWebWamEnumSmbFeatureNameEnum",
    "WAWebWamEnumSmbUserActionTypeEnum",
    "WAWebWamEnumSurfaceType"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = {
        AFTER_24H_REPLY: "remove_chats_24hrs_later",
        IMMEDIATELY: "remove_chats_immediately"
    };
    function s() {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.NAV_BAR,
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_AI_HUB_CHAT,
            userActionTarget: "nav_bar_entry_point",
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW
        });
    }
    function u() {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.NAV_BAR,
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_AI_HUB_CHAT,
            userActionTarget: "nav_bar_entry_point",
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK
        });
    }
    const c = [
        [
            "insight_id",
            "insight_id"
        ],
        [
            "insight_type",
            "type"
        ]
    ];
    function d(e) {
        const t = e.indexOf("?");
        const deeplink_url = t === -1 ? e : e.slice(0, t);
        const r = {
            deeplink_url
        };
        if (t !== -1) {
            const a = new URLSearchParams(e.slice(t + 1));
            for (const [l, s] of c){
                const u = a.get(l);
                if (u != null && u !== "") {
                    r[s] = u;
                }
            }
        }
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHATS_LIST,
            extraAttributes: r,
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_AI_HUB_CHAT,
            userActionTarget: "message_cta",
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK
        });
    }
    function m(e) {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            entryPoint: e,
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.AI_HOME,
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW
        });
    }
    function p(e) {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.AI_HOME,
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK,
            userActionTarget: e
        });
    }
    function _(e, t) {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            entryPoint: e,
            extraAttributes: t == null ? undefined : {
                subscription_status: t
            },
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_AI_HUB_HOME,
            userActionTarget: "subscription_entrypoint",
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW
        });
    }
    function f(e, t) {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            entryPoint: e,
            extraAttributes: t == null ? undefined : {
                subscription_status: t
            },
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_AI_HUB_HOME,
            userActionTarget: "subscription_entrypoint",
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK
        });
    }
    function g() {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_RULES_LIST,
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW
        });
    }
    function h() {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GENAI_AGENT_AI_REPLIES_V1,
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW
        });
    }
    function y() {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GENAI_AGENT_AI_REPLIES,
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW
        });
    }
    function C(e) {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            entryPoint: e,
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            stickyEntryPoint: false,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_AGENT_HANDOFF_LIST_CONFIG,
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.ENTER
        });
    }
    function b(t, n) {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            entryPoint: t,
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            stickyEntryPoint: false,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_AGENT_HANDOFF_LIST_CONFIG,
            userActionTarget: e[n],
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK
        });
    }
    function v(is_enabled) {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            extraAttributes: {
                is_enabled
            },
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GENAI_AGENT_AI_REPLIES,
            userActionTarget: "allow_replies",
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK
        });
    }
    function S(segment) {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            extraAttributes: {
                segment
            },
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GENAI_AGENT_AI_REPLIES,
            userActionTarget: "audience_row",
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK
        });
    }
    function R(e) {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            extraAttributes: {
                selection: e
            },
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GENAI_AGENT_AI_REPLIES,
            userActionTarget: "schedule",
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK
        });
    }
    function L() {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GENAI_AGENT_AI_REPLIES,
            userActionTarget: "learn_more",
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK
        });
    }
    function E() {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GENAI_AGENT_AI_REPLIES,
            userActionTarget: "learning_banner_learn_more",
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK
        });
    }
    function k() {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GENAI_AGENT_AI_REPLIES,
            userActionTarget: "delete_ai",
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK
        });
    }
    function I(save_kind, t, n) {
        const r = t ? "success" : "failure";
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            extraAttributes: n != null ? {
                error: n,
                result: r,
                save_kind
            } : {
                result: r,
                save_kind
            },
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GENAI_AGENT_AI_REPLIES,
            userActionTarget: "save_settings_gql_response",
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.API
        });
    }
    function T() {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GENAI_AGENT_AI_REPLIES_CHATS,
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW
        });
    }
    function D(e) {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            extraAttributes: {
                selection: e
            },
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GENAI_AGENT_AI_REPLIES_CHATS,
            userActionTarget: "mode",
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK
        });
    }
    function x() {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_AI_HUB_KNOWLEDGE_EXAMPLE_RESPONSE,
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW
        });
    }
    function $() {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_AI_HUB_ADD_BUSINESS_INFO,
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW
        });
    }
    function P() {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_AI_HUB_ADD_PURCHASING_INFO,
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW
        });
    }
    function N() {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_AI_HUB_ONLINE_STORE_LINKS,
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW
        });
    }
    function M() {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_AI_HUB_KNOWLEDGE_REPO,
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW
        });
    }
    function w(e) {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_AI_HUB_KNOWLEDGE_REPO,
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK,
            userActionTarget: e
        });
    }
    function A() {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_AI_HUB_KNOWLEDGE_RESOURCE,
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW
        });
    }
    function F() {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_AI_HUB_KNOWLEDGE_RESOURCE,
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK,
            userActionTarget: "upload_file"
        });
    }
    function O(e) {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_AI_HUB_KNOWLEDGE_RESOURCE,
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.API,
            userActionTarget: e ? "upload_success" : "upload_failure"
        });
    }
    function B() {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_AI_HUB_KNOWLEDGE_RESOURCE,
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK,
            userActionTarget: "create_chat_history"
        });
    }
    function W(e) {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_AI_HUB_KNOWLEDGE_RESOURCE,
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.API,
            userActionTarget: e ? "chat_history_success" : "chat_history_failure"
        });
    }
    function q() {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_AI_HUB_KNOWLEDGE_RESOURCE,
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.DELETE,
            userActionTarget: "delete_source"
        });
    }
    function U(e) {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_AI_HUB_KNOWLEDGE_RESOURCE,
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.API,
            userActionTarget: e ? "delete_success" : "delete_failure"
        });
    }
    function V() {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_PRODUCT_INFO_EDIT,
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW
        });
    }
    function H() {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_PRODUCT_INFO_EDIT,
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK,
            userActionTarget: "save"
        });
    }
    function G(e) {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_PRODUCT_INFO_EDIT,
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.API,
            userActionTarget: e ? "save_success" : "save_failure"
        });
    }
    function z() {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_BESTSELLERS,
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW
        });
    }
    function j() {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_BESTSELLERS,
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK,
            userActionTarget: "toggle_product"
        });
    }
    function K() {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_BESTSELLERS,
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK,
            userActionTarget: "save"
        });
    }
    function Q(e) {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_BESTSELLERS,
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.API,
            userActionTarget: e ? "save_success" : "save_failure"
        });
    }
    function X() {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_SETTINGS_FAQ_EDIT_INFO_SCREEN,
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW
        });
    }
    function Y() {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_SETTINGS_FAQ_EDIT_INFO_SCREEN,
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK,
            userActionTarget: "save"
        });
    }
    function J(e) {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_SETTINGS_FAQ_EDIT_INFO_SCREEN,
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.API,
            userActionTarget: e ? "save_success" : "save_failure"
        });
    }
    function Z() {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_KNOWLEDGE_EDIT,
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW
        });
    }
    function ee() {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_KNOWLEDGE_EDIT,
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK,
            userActionTarget: "save"
        });
    }
    function te(e) {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_KNOWLEDGE_EDIT,
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.API,
            userActionTarget: e ? "save_success" : "save_failure"
        });
    }
    function ne() {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_LEADGEN_LIST,
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW
        });
    }
    function re() {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_LEADGEN_TYPE_SELECTION,
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW
        });
    }
    function oe() {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_LEADGEN_FIELD_SELECTION,
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW
        });
    }
    function ae() {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_LEADGEN_FIELD_SELECTION,
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK,
            userActionTarget: "save"
        });
    }
    function ie(e) {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_LEADGEN_FIELD_SELECTION,
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.API,
            userActionTarget: e ? "save_success" : "save_failure"
        });
    }
    function le(e) {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_LEADGEN_LIST,
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.API,
            userActionTarget: e ? "delete_success" : "delete_failure"
        });
    }
    function se(e) {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_LEADGEN_CUSTOMER_INFO_LIST,
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.API,
            userActionTarget: e ? "mark_all_seen_success" : "mark_all_seen_failure"
        });
    }
    function ue(e) {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_AI_HUB_ONLINE_STORE_LINKS,
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.API,
            userActionTarget: e ? "save_success" : "save_failure"
        });
    }
    function ce(e) {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_RULE_EDITOR,
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.API,
            userActionTarget: e ? "save_success" : "save_failure"
        });
    }
    function de() {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_LEADGEN_CUSTOMER_INFO_LIST,
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW
        });
    }
    function me(response_count) {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            extraAttributes: {
                response_count
            },
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_LEADGEN_CUSTOMER_INFO_LIST,
            userActionTarget: "download_all_button",
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK
        });
    }
    function pe() {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_LEADGEN_CUSTOMER_RESPONSE,
            userActionTarget: "download_button",
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK
        });
    }
    function _e(is_download_all, t, n) {
        const action_status = t ? "success" : "failure";
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            extraAttributes: n != null ? {
                action_status,
                error: n,
                is_download_all
            } : {
                action_status,
                is_download_all
            },
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: is_download_all ? o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_LEADGEN_CUSTOMER_INFO_LIST : o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_LEADGEN_CUSTOMER_RESPONSE,
            userActionTarget: "download_complete",
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.API
        });
    }
    function fe(e) {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.BUSINESS_TOOLS_HOME,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BUSINESS_HOME_PAGE,
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW,
            userActionTarget: "bizai_entry",
            extraAttributes: {
                is_onboarded: e
            }
        });
    }
    function ge(e) {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.BUSINESS_TOOLS_HOME,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BUSINESS_HOME_PAGE,
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK,
            userActionTarget: "bizai_entry",
            extraAttributes: {
                is_onboarded: e
            }
        });
    }
    function he() {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_WEB_ONBOARDING_QR_CODE,
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW,
            extraAttributes: {
                referral: "web-qr-handoff"
            }
        });
    }
    function ye() {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_WEB_ONBOARDING_QR_CODE,
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK,
            userActionTarget: "need_help"
        });
    }
    function Ce(connected, t, n) {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            extraAttributes: {
                connected,
                files_num: t,
                success: n
            },
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_AI_HUB_KNOWLEDGE_REPO,
            userActionTarget: "gdrive_section",
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW
        });
    }
    function be() {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_AI_HUB_KNOWLEDGE_REPO,
            userActionTarget: "gdrive_section_see_all",
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK
        });
    }
    function ve(e, t) {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            extraAttributes: {
                files_num: e,
                success: t
            },
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_GDRIVE_KNOWLEDGE_REPO,
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW
        });
    }
    function Se(e) {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: e ? o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_GDRIVE_KNOWLEDGE_REPO : o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_AI_HUB_KNOWLEDGE_REPO,
            userActionTarget: "gdrive_delete",
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK
        });
    }
    function Re(e, t) {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            extraAttributes: t != null ? {
                error: t,
                success: e
            } : {
                success: e
            },
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_AI_HUB_KNOWLEDGE_REPO,
            userActionTarget: "gdrive_files_fetch_gql_response",
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.API
        });
    }
    function Le(e, t) {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            extraAttributes: {
                selected_files_num: 1,
                success: t
            },
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: e ? o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_GDRIVE_KNOWLEDGE_REPO : o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_AI_HUB_KNOWLEDGE_REPO,
            userActionTarget: "gdrive_file_delete_gql_response",
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.API
        });
    }
    function Ee() {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.AI_HOME,
            userActionTarget: "connections_entry_point",
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW
        });
    }
    function ke() {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.AI_HOME,
            userActionTarget: "connections_entry_point",
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK
        });
    }
    function Ie(connected_partners, t) {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            extraAttributes: {
                connected_partners,
                success: t
            },
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.PARTNERS_CONNECTIONS_HUB,
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW
        });
    }
    function Te(partner_id) {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            extraAttributes: {
                partner_id
            },
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.PARTNERS_CONNECTIONS_HUB,
            userActionTarget: "partner_item",
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK
        });
    }
    function De() {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.PARTNER_MANAGEMENT,
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW
        });
    }
    function xe(partner, t) {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            extraAttributes: {
                partner,
                result: t
            },
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.PARTNER_MANAGEMENT,
            userActionTarget: "disconnect_partner",
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK
        });
    }
    function $e(e, t, n) {
        const r = t ? "success" : "fail";
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            entryPoint: e === "connections" ? o("WAWebWamEnumEntryPoint").ENTRY_POINT.CONNECTIONS : o("WAWebWamEnumEntryPoint").ENTRY_POINT.BUSINESS_TOOLS,
            extraAttributes: n != null ? {
                error: n,
                result: r
            } : {
                result: r
            },
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            stickyEntryPoint: false,
            surface: e === "connections" ? o("WAWebWamEnumSurfaceType").SURFACE_TYPE.PARTNER_MANAGEMENT : o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_BOOK_APPOINTMENTS_CONNECTOR_CONNECT,
            userActionTarget: "setup_3p_integration",
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.API
        });
    }
    function Pe(e) {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            entryPoint: e,
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            stickyEntryPoint: false,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_GDRIVE_VALUE_PROP,
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW
        });
    }
    function Ne(e) {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            entryPoint: e,
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            stickyEntryPoint: false,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_GDRIVE_VALUE_PROP,
            userActionTarget: "connect",
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK
        });
    }
    function Me(e, t) {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            entryPoint: e,
            extraAttributes: {
                success: t
            },
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            stickyEntryPoint: false,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_GDRIVE_VALUE_PROP,
            userActionTarget: "connect",
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW
        });
    }
    function we(e) {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            entryPoint: e,
            extraAttributes: {
                result: "canceled"
            },
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            stickyEntryPoint: false,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_GDRIVE_VALUE_PROP,
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW
        });
    }
    function Ae(e) {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            entryPoint: e,
            extraAttributes: {
                result: "canceled"
            },
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            stickyEntryPoint: false,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_GDRIVE_FILE_PICKER,
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW
        });
    }
    function Fe(e) {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            entryPoint: e,
            extraAttributes: {
                result: "synced"
            },
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            stickyEntryPoint: false,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_GDRIVE_AFTER_SETUP,
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW
        });
    }
    function Oe() {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_THREAD,
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            stickyEntryPoint: false,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT_THREAD,
            userActionTarget: "editing_nux_view",
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW
        });
    }
    function Be() {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_THREAD,
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            stickyEntryPoint: false,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT_THREAD,
            userActionTarget: "editing_nux_close_button",
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK
        });
    }
    function We(e, discovery_tooltip_was_viewed) {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_THREAD,
            extraAttributes: {
                discovery_tooltip_was_viewed,
                is_within_editing_window: e
            },
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            stickyEntryPoint: false,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT_THREAD,
            userActionTarget: "edit",
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK
        });
    }
    function qe(e) {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_THREAD,
            extraAttributes: {
                is_within_editing_window: e
            },
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            stickyEntryPoint: false,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT_THREAD,
            userActionTarget: "editing_hint_chat_composer",
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW
        });
    }
    function Ue(e) {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_THREAD,
            extraAttributes: {
                is_within_editing_window: e
            },
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            stickyEntryPoint: false,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT_THREAD,
            userActionTarget: "start_editing",
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK
        });
    }
    function Ve(e) {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_THREAD,
            extraAttributes: {
                is_within_editing_window: e
            },
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            stickyEntryPoint: false,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT_THREAD,
            userActionTarget: "editing_send",
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK
        });
    }
    function He(e) {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_THREAD,
            extraAttributes: {
                is_within_editing_window: e
            },
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            stickyEntryPoint: false,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT_THREAD,
            userActionTarget: "editing_nux_hint",
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW
        });
    }
    function Ge(message_age_ms, t) {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.COACHING_ENTRYPOINT_BUTTON,
            extraAttributes: {
                delivers_to_customer: t,
                message_age_ms
            },
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            stickyEntryPoint: false,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_COACHING,
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW
        });
    }
    function ze(e, t, n) {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.COACHING_ENTRYPOINT_BUTTON,
            extraAttributes: {
                delivers_to_customer: n,
                text_change_cnt: e,
                timespent_ms: t
            },
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            stickyEntryPoint: false,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_COACHING,
            userActionTarget: "save_button",
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK
        });
    }
    function je(e, t, n) {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.COACHING_ENTRYPOINT_BUTTON,
            extraAttributes: {
                delivers_to_customer: n,
                text_change_cnt: e,
                timespent_ms: t
            },
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            stickyEntryPoint: false,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_COACHING,
            userActionTarget: "cancel_button",
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK
        });
    }
    function Ke(e) {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_THREAD,
            extraAttributes: {
                is_within_editing_window: e
            },
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            stickyEntryPoint: false,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT_THREAD,
            userActionTarget: "submit_coaching_response_start",
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.API
        });
    }
    function Qe(e, t) {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_THREAD,
            extraAttributes: e === "success" ? {
                is_within_editing_window: t,
                result: "success"
            } : {
                error: e,
                is_within_editing_window: t,
                result: "failure"
            },
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            stickyEntryPoint: false,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT_THREAD,
            userActionTarget: "submit_coaching_response_result",
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.API
        });
    }
    function Xe() {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_BOOK_APPOINTMENTS_NUX,
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW
        });
    }
    function Ye(appointment_type_count) {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            extraAttributes: {
                appointment_type_count,
                is_empty: appointment_type_count === 0
            },
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_BOOK_APPOINTMENTS_LANDING,
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW
        });
    }
    function Je(e) {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            extraAttributes: {
                index: e
            },
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_BOOK_APPOINTMENTS_LANDING,
            userActionTarget: "appointment_type_row",
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK
        });
    }
    function Ze() {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_BOOK_APPOINTMENTS_DETAIL,
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW
        });
    }
    function et() {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.BUSINESS_TOOLS,
            extraAttributes: {
                flow_type: "edit"
            },
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            prevSurface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_BOOK_APPOINTMENTS_LANDING,
            stickyEntryPoint: false,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_BOOK_APPOINTMENTS_DETAIL,
            userActionTarget: "delete_appointment_button",
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK
        });
    }
    function tt(e, t) {
        const n = e ? "success" : "fail";
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.BUSINESS_TOOLS,
            extraAttributes: t != null ? {
                error: t,
                flow_type: "edit",
                result: n
            } : {
                flow_type: "edit",
                result: n
            },
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            prevSurface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_AI_HUB_HOME,
            stickyEntryPoint: false,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_BOOK_APPOINTMENTS_DETAIL,
            userActionTarget: "delete_appointment_flow",
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.API
        });
    }
    function nt(e) {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.BUSINESS_TOOLS,
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            prevSurface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_AI_HUB_HOME,
            stickyEntryPoint: false,
            surface: ct(e),
            userActionTarget: "add_appointment_type_button",
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK
        });
    }
    function rt(e, t, n) {
        const r = e === "title" ? {
            userActionTarget: "trigger_screen"
        } : null;
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log(babelHelpers.extends({
            entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.BUSINESS_TOOLS,
            extraAttributes: ut(e, n),
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            prevSurface: mt(e, t),
            stickyEntryPoint: false,
            surface: dt(e),
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW
        }, r));
    }
    function ot(e, t) {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.BUSINESS_TOOLS,
            extraAttributes: st(),
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            prevSurface: mt(e, t),
            stickyEntryPoint: false,
            surface: dt(e),
            userActionTarget: "next_button",
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK
        });
    }
    function at(selected_fields, custom_field_count, is_first_appointment_type) {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.BUSINESS_TOOLS,
            extraAttributes: st({
                custom_field_count,
                has_prefill: false,
                is_first_appointment_type,
                selected_fields
            }),
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            prevSurface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_BOOK_APPOINTMENTS_AVAILABILITY,
            stickyEntryPoint: false,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_BOOK_APPOINTMENTS_CUSTOMER_INFO,
            userActionTarget: "save_button",
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK
        });
    }
    function it(e, t, n) {
        const r = e ? "success" : "fail";
        const a = {
            duration: `${n.durationMinutes}min`,
            field_count: n.customerFields.filter((e)=>e.enabled).length,
            flow_type: "create",
            has_prefill: false,
            is_m5_1_refresh: true,
            location_count: n.locationTypes.length,
            result: r
        };
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.BUSINESS_TOOLS,
            extraAttributes: t != null ? babelHelpers.extends({
                error: t
            }, a) : a,
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            prevSurface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_BOOK_APPOINTMENTS_AVAILABILITY,
            stickyEntryPoint: false,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_BOOK_APPOINTMENTS_CUSTOMER_INFO,
            userActionTarget: "save_appointment_type",
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.API
        });
    }
    function lt(e, t, n) {
        const r = e ? "success" : "fail";
        const a = {
            duration: `${n.durationMinutes}min`,
            field_count: n.customerFields.filter((e)=>e.enabled).length,
            flow_type: "edit",
            has_prefill: false,
            is_m5_1_refresh: true,
            location_count: n.locationTypes.length,
            result: r
        };
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.BUSINESS_TOOLS,
            extraAttributes: t != null ? babelHelpers.extends({
                error: t
            }, a) : a,
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            prevSurface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_BOOK_APPOINTMENTS_AVAILABILITY,
            stickyEntryPoint: false,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_BOOK_APPOINTMENTS_CUSTOMER_INFO,
            userActionTarget: "save_appointment_type",
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.API
        });
    }
    function st(e) {
        const t = {
            flow_type: "create",
            is_m5_1_refresh: true
        };
        if (e != null) {
            for (const n of Object.keys(e)){
                t[n] = e[n];
            }
        }
        return t;
    }
    function ut(e, calendar_count) {
        if (e === "title") {
            return st({
                has_prefill: false
            });
        }
        if (e === "calendar-availability") {
            return st({
                calendar_count
            });
        }
        if (e === "duration-location" || e === "customer-info") {
            return st();
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })();
    }
    function ct(e) {
        if (e === "setup_nux") {
            return o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_BOOK_APPOINTMENTS_NUX;
        }
        return o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_BOOK_APPOINTMENTS_LANDING;
    }
    function dt(e) {
        switch(e){
            case "title":
                return o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_BOOK_APPOINTMENTS_TRIGGER;
            case "duration-location":
                return o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_BOOK_APPOINTMENTS_DURATION;
            case "calendar-availability":
                return o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_BOOK_APPOINTMENTS_AVAILABILITY;
            case "customer-info":
                return o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_BOOK_APPOINTMENTS_CUSTOMER_INFO;
            default:
                return (()=>{
                    throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
                })();
        }
    }
    function mt(e, t) {
        switch(e){
            case "title":
                return ct(t);
            case "duration-location":
                return o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_BOOK_APPOINTMENTS_TRIGGER;
            case "calendar-availability":
                return o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_BOOK_APPOINTMENTS_DURATION;
            case "customer-info":
                return o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_BOOK_APPOINTMENTS_AVAILABILITY;
            default:
                return (()=>{
                    throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
                })();
        }
    }
    function pt(e, t, n) {
        const r = e ? "success" : "fail";
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            extraAttributes: t != null ? {
                error: t,
                result: r
            } : {
                result: r
            },
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: n === "setup_nux" ? o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_BOOK_APPOINTMENTS_NUX : o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_BOOK_APPOINTMENTS_LANDING,
            userActionTarget: "fetch_appointment_flow_home",
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.API
        });
    }
    function _t(e, t) {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            entryPoint: e,
            extraAttributes: t == null ? undefined : {
                upcoming_count: t
            },
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_AI_HUB_HOME,
            userActionTarget: "calendar_entrypoint",
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW
        });
    }
    function ft(e, t) {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            entryPoint: e,
            extraAttributes: t == null ? undefined : {
                upcoming_count: t
            },
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_AI_HUB_HOME,
            userActionTarget: "calendar_entrypoint",
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK
        });
    }
    function gt() {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.AI_HOME,
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            stickyEntryPoint: false,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_1P_CALENDAR_LIST,
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW
        });
    }
    function ht(e, event_count, n) {
        const r = e ? "success" : "fail";
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.AI_HOME,
            extraAttributes: n != null ? {
                error: n,
                event_count,
                result: r
            } : {
                event_count,
                result: r
            },
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            stickyEntryPoint: false,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_1P_CALENDAR_LIST,
            userActionTarget: "fetch_calendar_events",
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.API
        });
    }
    function yt() {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.AI_HOME,
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            stickyEntryPoint: false,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_1P_CALENDAR_LIST,
            userActionTarget: "appointment_row",
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK
        });
    }
    function Ct() {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.AI_HOME,
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            stickyEntryPoint: false,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_1P_CALENDAR_DETAIL,
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW
        });
    }
    function bt() {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.AI_HOME,
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            stickyEntryPoint: false,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_1P_CALENDAR_LIST,
            userActionTarget: "open_customer_chat",
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK
        });
    }
    function vt() {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.AI_HOME,
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            stickyEntryPoint: false,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_1P_CALENDAR_DETAIL,
            userActionTarget: "delete_appointment",
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK
        });
    }
    function St() {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.AI_HOME,
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            stickyEntryPoint: false,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_1P_CALENDAR_DELETE_CONFIRM_DIALOG,
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW
        });
    }
    function Rt() {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.AI_HOME,
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            stickyEntryPoint: false,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_1P_CALENDAR_DELETE_CONFIRM_DIALOG,
            userActionTarget: "delete",
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK
        });
    }
    function Lt() {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.AI_HOME,
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            stickyEntryPoint: false,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_1P_CALENDAR_DELETE_CONFIRM_DIALOG,
            userActionTarget: "cancel",
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK
        });
    }
    function Et() {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.AI_HOME,
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            stickyEntryPoint: false,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_1P_CALENDAR_DELETE_CONFIRM_DIALOG,
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.DISMISS
        });
    }
    function kt(e, t) {
        const n = e ? "success" : "fail";
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.AI_HOME,
            extraAttributes: t != null ? {
                error: t,
                result: n
            } : {
                result: n
            },
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            stickyEntryPoint: false,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_1P_CALENDAR_DETAIL,
            userActionTarget: "cancel_calendar_event",
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.API
        });
    }
    function It() {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.AI_HOME,
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            stickyEntryPoint: false,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_1P_CALENDAR_ERROR_DIALOG,
            userActionTarget: "delete_error",
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW
        });
    }
    function Tt(state) {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.AI_HOME,
            extraAttributes: {
                state
            },
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            stickyEntryPoint: false,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_1P_CALENDAR_LIST,
            userActionTarget: "third_party_calendar_notice",
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW
        });
    }
    l.logViewAiHubNavEntryPoint = s;
    l.logClickAiHubNavEntryPoint = u;
    l.logBizAiHubDeeplinkClick = d;
    l.logViewAIHome = m;
    l.logClickAIHomeSection = p;
    l.logViewMetaOneEntryPoint = _;
    l.logClickMetaOneEntryPoint = f;
    l.logViewInstructionsDrawer = g;
    l.logViewResponseSettingsDrawer = h;
    l.logViewResponseSettingsV2Drawer = y;
    l.logEnterHandoffListSettings = C;
    l.logSelectHandoffRemovalTiming = b;
    l.logClickResponseSettingsMasterToggle = v;
    l.logClickResponseSettingsAudienceRow = S;
    l.logClickResponseSettingsSchedule = R;
    l.logClickResponseSettingsLearnMore = L;
    l.logClickResponseSettingsLearningBannerLearnMore = E;
    l.logClickResponseSettingsDeleteAi = k;
    l.logApiResponseSettingsSave = I;
    l.logViewResponseModePicker = T;
    l.logClickResponseMode = D;
    l.logViewExampleResponsesDrawer = x;
    l.logViewBusinessInfoDrawer = $;
    l.logViewPurchaseInfoDrawer = P;
    l.logViewWebsiteEditDrawer = N;
    l.logViewKnowledgeDrawer = M;
    l.logClickKnowledgeSeeAll = w;
    l.logViewKnowledgeSources = A;
    l.logClickUploadFile = F;
    l.logApiUploadFileResult = O;
    l.logClickCreateChatHistory = B;
    l.logApiChatHistoryResult = W;
    l.logClickDeleteSource = q;
    l.logApiDeleteSourceResult = U;
    l.logViewProductInfoEdit = V;
    l.logClickSaveProductInfo = H;
    l.logApiSaveProductInfoResult = G;
    l.logViewBestsellersDrawer = z;
    l.logClickToggleBestseller = j;
    l.logClickSaveBestsellers = K;
    l.logApiSaveBestsellersResult = Q;
    l.logViewFAQEdit = X;
    l.logClickSaveFAQ = Y;
    l.logApiSaveFAQResult = J;
    l.logViewKnowledgeEdit = Z;
    l.logClickSaveKnowledge = ee;
    l.logApiSaveKnowledgeResult = te;
    l.logViewLeadGenList = ne;
    l.logViewLeadGenTypeSelection = re;
    l.logViewLeadGenFieldSelection = oe;
    l.logClickSaveLeadGenForm = ae;
    l.logApiSaveLeadGenFormResult = ie;
    l.logApiDeleteLeadGenFormResult = le;
    l.logApiMarkAllSeenResult = se;
    l.logApiSaveWebsiteResult = ue;
    l.logApiSaveRuleResult = ce;
    l.logViewLeadGenCustomerInfoList = de;
    l.logClickDownloadAllLeadGenData = me;
    l.logClickDownloadSingleLeadGenData = pe;
    l.logApiDownloadLeadGenDataResult = _e;
    l.logViewBizAiEntryTile = fe;
    l.logClickBizAiEntryTile = ge;
    l.logViewBizAiOnboardingQr = he;
    l.logClickBizAiOnboardingNeedHelp = ye;
    l.logViewGoogleDriveKnowledgeSection = Ce;
    l.logClickGoogleDriveSeeAll = be;
    l.logViewGoogleDriveDrawer = ve;
    l.logClickGoogleDriveDelete = Se;
    l.logApiGoogleDriveFetchFiles = Re;
    l.logApiGoogleDriveDeleteFile = Le;
    l.logViewConnectionsEntryPoint = Ee;
    l.logClickConnectionsEntryPoint = ke;
    l.logViewPartnersHub = Ie;
    l.logClickPartnerRow = Te;
    l.logViewPartnerManagement = De;
    l.logClickDisconnectPartner = xe;
    l.logApiSetupThirdPartyIntegration = $e;
    l.logViewGoogleDriveValueProp = Pe;
    l.logClickGoogleDriveConnect = Ne;
    l.logViewGoogleDriveConnectResult = Me;
    l.logViewGoogleDriveSetupCanceled = we;
    l.logViewGoogleDriveSetupDismissed = Ae;
    l.logViewGoogleDriveSetupSynced = Fe;
    l.logViewBizAiMessageEditDiscoveryTooltip = Oe;
    l.logClickBizAiMessageEditDiscoveryTooltipClose = Be;
    l.logClickBizAiMessageEditAction = We;
    l.logViewBizAiMessageEditComposerHint = qe;
    l.logClickBizAiMessageEditStartEditing = Ue;
    l.logClickBizAiMessageEditSend = Ve;
    l.logViewBizAiMessageEditPostEditHint = He;
    l.logViewBizAiMessageEditEditor = Ge;
    l.logClickBizAiMessageEditSave = ze;
    l.logClickBizAiMessageEditCancel = je;
    l.logApiBizAiMessageEditCoachingStart = Ke;
    l.logApiBizAiMessageEditCoachingResult = Qe;
    l.logViewAppointmentsSetupNux = Xe;
    l.logViewAppointmentsLanding = Ye;
    l.logClickAppointmentTypeRow = Je;
    l.logViewAppointmentTypeDetail = Ze;
    l.logClickDeleteAppointmentType = et;
    l.logApiDeleteAppointmentFlow = tt;
    l.logClickAddAppointmentType = nt;
    l.logViewAppointmentCreateStep = rt;
    l.logClickAppointmentCreateNext = ot;
    l.logClickSaveAppointmentType = at;
    l.logApiCreateAppointmentFlow = it;
    l.logApiUpdateAppointmentFlow = lt;
    l.logApiAppointmentHomeFetch = pt;
    l.logViewCalendarEntryPoint = _t;
    l.logClickCalendarEntryPoint = ft;
    l.logViewCalendarBookingsList = gt;
    l.logApiFetchCalendarEvents = ht;
    l.logClickCalendarBookingRow = yt;
    l.logViewCalendarBookingDetail = Ct;
    l.logClickOpenCustomerChat = bt;
    l.logClickDeleteCalendarBooking = vt;
    l.logViewCancelCalendarBookingDialog = St;
    l.logClickConfirmCancelCalendarBooking = Rt;
    l.logClickKeepCalendarBooking = Lt;
    l.logDismissCancelCalendarBookingDialog = Et;
    l.logApiCancelCalendarEvent = kt;
    l.logViewCancelCalendarBookingErrorDialog = It;
    l.logViewThirdPartyCalendarNotice = Tt;
}, 98);