__d("WAWebBBHomeLogs", [
    "WAWebBBLoggerTypes"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
            entryPoint: t,
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_HOME,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.PAGE
        });
    }
    function s(e, t, n) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
            entryPoint: n,
            extraAttributes: {
                audience_id: t
            },
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_HOME,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.EXISTING_AUDIENCE_LIST_ITEM
        });
    }
    function u(e, t) {
        let n;
        e({
            action: (n = o("WAWebBBLoggerTypes")).SMB_USER_ACTION_TYPE_ENUM.CLICK,
            entryPoint: n.ENTRY_POINT.CHAT_HOME,
            extraAttributes: {
                audience_id: t
            },
            surface: n.SURFACE_TYPE.CHATLIST,
            userActionTarget: n.UserActionTarget.EXISTING_AUDIENCE_LIST_ITEM
        });
    }
    function c(e, t) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
            entryPoint: t,
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_HOME,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.LEARN_MORE_LINK
        });
    }
    function d(e, t) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
            entryPoint: t,
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_HOME,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.NEW_AUDIENCE_DROPDOWN
        });
    }
    function m(e, t) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
            entryPoint: t,
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_HOME,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.OVERFLOW_MENU_BUTTON
        });
    }
    function p(e, t) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
            entryPoint: t,
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_HOME,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.DATA_SHARING
        });
    }
    function _(e, t) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
            entryPoint: t,
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_HOME,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.DOWNLOAD_SUBSCRIBED_RECIPIENTS
        });
    }
    function f(e, t) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
            entryPoint: t,
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_HOME,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.REMOVE_RECIPIENTS_FROM_DATA_SHARING
        });
    }
    function g(e, t, n, launch_point, a) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
            bbTier: a,
            entryPoint: t,
            extraAttributes: {
                direction: n === "TURN_OFF" ? "turn_off" : "turn_on",
                launch_point
            },
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_HOME,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.ADVANCED_TOOLS_TOGGLE
        });
    }
    function h(e, t, n) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
            bbTier: n,
            entryPoint: t,
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_HOME,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.CONNECT_BANNER
        });
    }
    function y(e, t) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
            entryPoint: t,
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_HOME,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.AUDIENCES_TAB_BUTTON
        });
    }
    function C(e, t) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
            entryPoint: t,
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_HOME,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.BROADCASTS_TAB_BUTTON
        });
    }
    function b(e, card_count, n, r) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
            entryPoint: n,
            extraAttributes: {
                card_count
            },
            surface: r,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.SUGGESTED_AUDIENCE_CARDS_IMPRESSION
        });
    }
    function v(e, t) {
        let n;
        e({
            action: (n = o("WAWebBBLoggerTypes")).SMB_USER_ACTION_TYPE_ENUM.VIEW,
            entryPoint: n.ENTRY_POINT.CHAT_HOME,
            extraAttributes: {
                audience_id: t
            },
            surface: n.SURFACE_TYPE.CHATLIST,
            userActionTarget: n.UserActionTarget.CHAT_LIST_CONTEXT_MENU
        });
    }
    function S(e) {
        let t;
        e({
            action: (t = o("WAWebBBLoggerTypes")).SMB_USER_ACTION_TYPE_ENUM.VIEW,
            entryPoint: t.ENTRY_POINT.BB_THREAD,
            surface: t.SURFACE_TYPE.BB_THREAD,
            userActionTarget: t.UserActionTarget.MESSAGE_CONTEXT_MENU
        });
    }
    function R(e, t) {
        let n;
        e({
            action: (n = o("WAWebBBLoggerTypes")).SMB_USER_ACTION_TYPE_ENUM.VIEW,
            entryPoint: n.ENTRY_POINT.BB_THREAD,
            extraAttributes: {
                audience_id: t
            },
            surface: n.SURFACE_TYPE.BB_THREAD,
            userActionTarget: n.UserActionTarget.CONVERSATION_HEADER_MENU
        });
    }
    function L({ broadcastChatCount, hasBroadcastWithNonZeroRecipients, hasBroadcastWithZeroRecipients, isBroadcastInChatList, log, primarySupportsBusinessBroadcast }) {
        let t;
        log({
            action: (t = o("WAWebBBLoggerTypes")).SMB_USER_ACTION_TYPE_ENUM.VIEW,
            entryPoint: t.ENTRY_POINT.CHAT_HOME,
            extraAttributes: {
                broadcast_chat_count: broadcastChatCount,
                has_broadcast_with_non_zero_recipients: hasBroadcastWithNonZeroRecipients,
                has_broadcast_with_zero_recipients: hasBroadcastWithZeroRecipients,
                is_broadcast_in_chat_list: isBroadcastInChatList,
                primary_supports_business_broadcast: primarySupportsBusinessBroadcast
            },
            surface: t.SURFACE_TYPE.CHATLIST,
            userActionTarget: t.UserActionTarget.BROADCAST_CHAT_LIST_STATE
        });
    }
    function E(e, t) {
        let n;
        e({
            action: (n = o("WAWebBBLoggerTypes")).SMB_USER_ACTION_TYPE_ENUM.VIEW,
            entryPoint: n.ENTRY_POINT.BB_THREAD,
            extraAttributes: {
                audience_id: t
            },
            surface: n.SURFACE_TYPE.BB_THREAD,
            userActionTarget: n.UserActionTarget.PAGE
        });
    }
    function k(e) {
        let t;
        e({
            action: (t = o("WAWebBBLoggerTypes")).SMB_USER_ACTION_TYPE_ENUM.VIEW,
            entryPoint: t.ENTRY_POINT.BB_THREAD,
            surface: t.SURFACE_TYPE.BB_THREAD,
            userActionTarget: t.UserActionTarget.TOS_REVIEW_BANNER
        });
    }
    function I(e) {
        let t;
        e({
            action: (t = o("WAWebBBLoggerTypes")).SMB_USER_ACTION_TYPE_ENUM.CLICK,
            entryPoint: t.ENTRY_POINT.BB_THREAD,
            surface: t.SURFACE_TYPE.BB_THREAD,
            userActionTarget: t.UserActionTarget.TOS_REVIEW_BANNER
        });
    }
    function T(e, t) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
            entryPoint: t,
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_HOME,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.BROADCAST_ITEM_OVERFLOW_BUTTON
        });
    }
    function D(e, eligibility, n, r) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.API,
            entryPoint: n,
            extraAttributes: {
                eligibility
            },
            surface: r,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.ELIGIBILITY_GATE
        });
    }
    function x(e, t, predicate_type, resolved_count, a) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
            entryPoint: a,
            extraAttributes: {
                predicate_type,
                resolved_count,
                suggested_audience_card_id: t
            },
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_HOME,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.SUGGESTED_AUDIENCE_CARD_CLICK
        });
    }
    function $(e, t, n, r, a) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.API,
            entryPoint: r,
            extraAttributes: {
                predicate_type: n ?? "",
                suggested_audience_card_id: t
            },
            surface: a,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.SUGGESTED_AUDIENCE_CARD_ERROR
        });
    }
    l.bbHomePageViewed = e;
    l.newBusinessBroadcastAudienceListItemClicked = s;
    l.newChatFlowAudienceListItemClicked = u;
    l.homeLearnMoreClicked = c;
    l.homeNewAudienceDropdownClicked = d;
    l.homeOverflowMenuClicked = m;
    l.dataSharingClicked = p;
    l.downloadSubscribedRecipientsClicked = _;
    l.removeRecipientsFromDataSharingClicked = f;
    l.advancedToolsToggleClicked = g;
    l.connectBannerViewed = h;
    l.homeAudiencesTabClicked = y;
    l.homeBroadcastsTabClicked = C;
    l.suggestedAudienceCardsViewed = b;
    l.chatListContextMenuOpened = v;
    l.messageContextMenuOpened = S;
    l.conversationHeaderMenuOpened = R;
    l.broadcastChatListItemViewed = L;
    l.broadcastThreadViewed = E;
    l.tosReviewBannerViewed = k;
    l.tosReviewBannerClicked = I;
    l.broadcastItemOverflowClicked = T;
    l.eligibilityCheckResult = D;
    l.suggestedAudienceCardClicked = x;
    l.suggestedAudienceCardError = $;
}, 98);