__d("WAWebGroupHistorySenderUserJourneyLogger", [
    "WALogger",
    "WATimeUtils",
    "WAWebGroupHistorySenderUserJourneyWamEvent",
    "WAWebUnifiedSession",
    "WAWebWamEnumGroupHistoryIneligibilityReason",
    "WAWebWamEnumGroupHistorySenderActionType",
    "WAWebWamEnumGroupHistorySystemMessageType",
    "WAWebWamEnumGroupHistoryToggleMode"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    const c = {
        add: (s = o("WAWebWamEnumGroupHistorySystemMessageType")).GROUP_HISTORY_SYSTEM_MESSAGE_TYPE.MANUALLY_ADD,
        auto_add: s.GROUP_HISTORY_SYSTEM_MESSAGE_TYPE.INVITE_AUTO_ADD,
        invite: s.GROUP_HISTORY_SYSTEM_MESSAGE_TYPE.INVITE_ACCEPT,
        invite_auto_add: s.GROUP_HISTORY_SYSTEM_MESSAGE_TYPE.INVITE_AUTO_ADD,
        linked_group_join: s.GROUP_HISTORY_SYSTEM_MESSAGE_TYPE.COMMUNITY,
        v4_add_invite_join: s.GROUP_HISTORY_SYSTEM_MESSAGE_TYPE.INVITE_LINK
    };
    function d(e) {
        if (e == null) {
            return o("WAWebWamEnumGroupHistorySystemMessageType").GROUP_HISTORY_SYSTEM_MESSAGE_TYPE.UNKNOWN;
        }
        return c[e] ?? o("WAWebWamEnumGroupHistorySystemMessageType").GROUP_HISTORY_SYSTEM_MESSAGE_TYPE.UNKNOWN;
    }
    const m = {
        already_received: (u = o("WAWebWamEnumGroupHistoryIneligibilityReason")).GROUP_HISTORY_INELIGIBILITY_REASON.NOT_NEW_OR_ALREADY_SENT,
        bot: u.GROUP_HISTORY_INELIGIBILITY_REASON.RECEIVER_NOT_ELIGIBLE,
        group_ineligible: u.GROUP_HISTORY_INELIGIBILITY_REASON.GROUP_TYPE_NOT_ELIGIBLE,
        no_available_messages: u.GROUP_HISTORY_INELIGIBILITY_REASON.NO_SHAREABLE_MESSAGES,
        no_join_time: u.GROUP_HISTORY_INELIGIBILITY_REASON.NOT_IN_GROUP,
        window_expired: u.GROUP_HISTORY_INELIGIBILITY_REASON.NOT_NEW_OR_ALREADY_SENT
    };
    function p(e) {
        if (e == null) {
            return o("WAWebWamEnumGroupHistoryIneligibilityReason").GROUP_HISTORY_INELIGIBILITY_REASON.UNKNOWN;
        }
        return m[e] ?? o("WAWebWamEnumGroupHistoryIneligibilityReason").GROUP_HISTORY_INELIGIBILITY_REASON.UNKNOWN;
    }
    class _ {
        $1(n) {
            const t = o("WAWebUnifiedSession").UnifiedSessionManager.getSessionId();
            if (t == null) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history][M2] Unified session ID is null"
                ])));
                return;
            }
            new (o("WAWebGroupHistorySenderUserJourneyWamEvent")).GroupHistorySenderUserJourneyWamEvent(babelHelpers.extends({}, n, {
                userJourneyTs: o("WATimeUtils").unixTimeMs(),
                unifiedSessionId: t
            })).commit();
        }
        $2(t, { groupHistorySystemMessageType, recipientCount, uiSurface }) {
            this.$1({
                groupHistorySenderActionType: t,
                groupHistorySystemMessageType,
                recipientCount,
                uiSurface
            });
        }
        sendMessageHistorySystemMessageClicked(t) {
            this.$2(o("WAWebWamEnumGroupHistorySenderActionType").GROUP_HISTORY_SENDER_ACTION_TYPE.SEND_MESSAGE_HISTORY_SYSTEM_MESSAGE_CLICKED, t);
        }
        viewOptionsSystemMessageClicked(t) {
            this.$2(o("WAWebWamEnumGroupHistorySenderActionType").GROUP_HISTORY_SENDER_ACTION_TYPE.VIEW_OPTIONS_SYSTEM_MESSAGE_CLICKED, t);
        }
        sendMessageHistoryCtaSystemMessageDisplayed({ groupHistorySystemMessageType, recipientCount, uiSurface }) {
            this.$1({
                groupHistorySenderActionType: o("WAWebWamEnumGroupHistorySenderActionType").GROUP_HISTORY_SENDER_ACTION_TYPE.SEND_MESSAGE_HISTORY_CTA_SYSTEM_MESSAGE_DISPLAY,
                groupHistorySystemMessageType,
                recipientCount,
                uiSurface
            });
        }
        ctaSystemMessageNotDisplayed({ groupHistorySystemMessageType, ineligibleReason, uiSurface }) {
            this.$1({
                groupHistorySenderActionType: o("WAWebWamEnumGroupHistorySenderActionType").GROUP_HISTORY_SENDER_ACTION_TYPE.SEND_MESSAGE_HISTORY_CTA_SYSTEM_MESSAGE_NOT_DISPLAYED,
                groupHistorySystemMessageType,
                ineligibleReason,
                uiSurface
            });
        }
        dropdownMenuItemDisplayed({ recipientCount, uiSurface }) {
            this.$1({
                groupHistorySenderActionType: o("WAWebWamEnumGroupHistorySenderActionType").GROUP_HISTORY_SENDER_ACTION_TYPE.GROUP_HISTORY_DROPDOWN_MENU_ITEM_DISPLAYED,
                recipientCount,
                uiSurface
            });
        }
        dropdownMenuItemClicked({ recipientCount, uiSurface }) {
            this.$1({
                groupHistorySenderActionType: o("WAWebWamEnumGroupHistorySenderActionType").GROUP_HISTORY_SENDER_ACTION_TYPE.GROUP_HISTORY_DROPDOWN_MENU_ITEM_CLICKED,
                recipientCount,
                uiSurface
            });
        }
        $3(t, { bundleSendSource, recipientCount, uiSurface }) {
            this.$1({
                bundleSendSource,
                groupHistorySenderActionType: t,
                recipientCount,
                uiSurface
            });
        }
        bottomsheetDisplayed(t) {
            this.$3(o("WAWebWamEnumGroupHistorySenderActionType").GROUP_HISTORY_SENDER_ACTION_TYPE.GROUP_HISTORY_BOTTOMSHEET_DISPLAYED, t);
        }
        bottomsheetConfirmButtonClicked(t) {
            this.$3(o("WAWebWamEnumGroupHistorySenderActionType").GROUP_HISTORY_SENDER_ACTION_TYPE.GROUP_HISTORY_BOTTOMSHEET_CONFIRM_BUTTON_CLICKED, t);
        }
        bottomsheetCancelButtonClicked(t) {
            this.$3(o("WAWebWamEnumGroupHistorySenderActionType").GROUP_HISTORY_SENDER_ACTION_TYPE.GROUP_HISTORY_BOTTOMSHEET_CANCEL_BUTTON_CLICKED, t);
        }
        bottomsheetDismissed(t) {
            this.$3(o("WAWebWamEnumGroupHistorySenderActionType").GROUP_HISTORY_SENDER_ACTION_TYPE.GROUP_HISTORY_BOTTOMSHEET_DISMISSED, t);
        }
        bundleMessageSent({ bundleSendSource, groupAddMemberEntryPoint, groupHistoryMessagesCount, groupHistorySystemMessageType, recipientCount, uiSurface }) {
            this.$1({
                bundleSendSource,
                groupAddMemberEntryPoint: groupAddMemberEntryPoint ?? undefined,
                groupHistoryMessagesCount: groupHistoryMessagesCount ?? undefined,
                groupHistorySenderActionType: o("WAWebWamEnumGroupHistorySenderActionType").GROUP_HISTORY_SENDER_ACTION_TYPE.GROUP_HISTORY_BUNDLE_MESSAGE_SENT,
                groupHistorySystemMessageType: groupHistorySystemMessageType ?? undefined,
                recipientCount,
                uiSurface
            });
        }
        noticeMessageSent({ bundleSendSource, groupAddMemberEntryPoint, groupHistorySystemMessageType, recipientCount, uiSurface }) {
            this.$1({
                bundleSendSource,
                groupAddMemberEntryPoint: groupAddMemberEntryPoint ?? undefined,
                groupHistorySenderActionType: o("WAWebWamEnumGroupHistorySenderActionType").GROUP_HISTORY_SENDER_ACTION_TYPE.GROUP_HISTORY_NOTICE_MESSAGE_SENT,
                groupHistorySystemMessageType: groupHistorySystemMessageType ?? undefined,
                recipientCount,
                uiSurface
            });
        }
        $4(t, { bundleSendSource, groupHistorySystemMessageType, recipientCount, uiSurface }) {
            this.$1({
                bundleSendSource,
                groupHistorySenderActionType: t,
                groupHistorySystemMessageType: groupHistorySystemMessageType ?? undefined,
                recipientCount,
                uiSurface
            });
        }
        bundleMessageAcked(t) {
            this.$4(o("WAWebWamEnumGroupHistorySenderActionType").GROUP_HISTORY_SENDER_ACTION_TYPE.GROUP_HISTORY_BUNDLE_MESSAGE_ACKED, t);
        }
        noticeMessageAcked(t) {
            this.$4(o("WAWebWamEnumGroupHistorySenderActionType").GROUP_HISTORY_SENDER_ACTION_TYPE.GROUP_HISTORY_NOTICE_MESSAGE_ACKED, t);
        }
        $5(t, { ineligibleReason, uiSurface }) {
            this.$1({
                groupHistorySenderActionType: t,
                ineligibleReason,
                uiSurface
            });
        }
        sendIneligibleAtCtaClick(t) {
            this.$5(o("WAWebWamEnumGroupHistorySenderActionType").GROUP_HISTORY_SENDER_ACTION_TYPE.GROUP_HISTORY_SEND_INELIGIBLE_AT_CTA_CLICK, t);
        }
        sendIneligibleAtSendClick(t) {
            this.$5(o("WAWebWamEnumGroupHistorySenderActionType").GROUP_HISTORY_SENDER_ACTION_TYPE.GROUP_HISTORY_SEND_INELIGIBLE_AT_SEND_CLICK, t);
        }
        selectableMessagesLoaded({ groupHistoryMessagesCount, uiSurface }) {
            this.$1({
                groupHistoryMessagesCount,
                groupHistorySenderActionType: o("WAWebWamEnumGroupHistorySenderActionType").GROUP_HISTORY_SENDER_ACTION_TYPE.GROUP_HISTORY_SELECTABLE_MESSAGES_LOADED,
                uiSurface
            });
        }
        countChangeEntryPointClicked({ groupHistoryMessagesCount, uiSurface }) {
            this.$1({
                groupHistoryMessagesCount,
                groupHistorySenderActionType: o("WAWebWamEnumGroupHistorySenderActionType").GROUP_HISTORY_SENDER_ACTION_TYPE.GROUP_HISTORY_COUNT_CHANGE_ENTRY_POINT_CLICKED,
                uiSurface
            });
        }
        countChanged({ groupHistoryMessagesCount, uiSurface }) {
            this.$1({
                groupHistoryMessagesCount,
                groupHistorySenderActionType: o("WAWebWamEnumGroupHistorySenderActionType").GROUP_HISTORY_SENDER_ACTION_TYPE.GROUP_HISTORY_COUNT_CHANGED,
                uiSurface
            });
        }
        footerDisplayed({ groupAddMemberEntryPoint, groupHistoryMessagesCount, isGroupHistoryToggledOn, toggleActivation, uiSurface }) {
            this.$1({
                groupAddMemberEntryPoint: groupAddMemberEntryPoint ?? undefined,
                groupHistoryMessagesCount,
                groupHistorySenderActionType: o("WAWebWamEnumGroupHistorySenderActionType").GROUP_HISTORY_SENDER_ACTION_TYPE.GROUP_HISTORY_FOOTER_DISPLAYED,
                isGroupHistoryToggledOn,
                toggleDefaultOn: toggleActivation.toggleDefaultOn,
                togglePerGroupUsageActivated: toggleActivation.togglePerGroupUsageActivated,
                toggleUserActivated: toggleActivation.toggleUserActivated,
                uiSurface
            });
        }
        groupHistoryToggleOn({ groupAddMemberEntryPoint, groupHistoryMessagesCount, uiSurface }) {
            this.$1({
                groupAddMemberEntryPoint: groupAddMemberEntryPoint ?? undefined,
                groupHistoryMessagesCount,
                groupHistorySenderActionType: o("WAWebWamEnumGroupHistorySenderActionType").GROUP_HISTORY_SENDER_ACTION_TYPE.GROUP_HISTORY_TOGGLE_ON,
                uiSurface
            });
        }
        groupHistoryToggleOff({ groupAddMemberEntryPoint, groupHistoryMessagesCount, uiSurface }) {
            this.$1({
                groupAddMemberEntryPoint: groupAddMemberEntryPoint ?? undefined,
                groupHistoryMessagesCount,
                groupHistorySenderActionType: o("WAWebWamEnumGroupHistorySenderActionType").GROUP_HISTORY_SENDER_ACTION_TYPE.GROUP_HISTORY_TOGGLE_OFF,
                uiSurface
            });
        }
        speedBumpDialogDisplayed({ uiSurface }) {
            this.$1({
                groupHistorySenderActionType: o("WAWebWamEnumGroupHistorySenderActionType").GROUP_HISTORY_SENDER_ACTION_TYPE.GROUP_HISTORY_SPEED_BUMP_DIALOG_DISPLAYED,
                uiSurface
            });
        }
        speedBumpDialogContinued({ uiSurface }) {
            this.$1({
                groupHistorySenderActionType: o("WAWebWamEnumGroupHistorySenderActionType").GROUP_HISTORY_SENDER_ACTION_TYPE.GROUP_HISTORY_SPEED_BUMP_DIALOG_CONTINUED,
                uiSurface
            });
        }
        speedBumpDialogCanceled({ uiSurface }) {
            this.$1({
                groupHistorySenderActionType: o("WAWebWamEnumGroupHistorySenderActionType").GROUP_HISTORY_SENDER_ACTION_TYPE.GROUP_HISTORY_SPEED_BUMP_DIALOG_CANCELED,
                uiSurface
            });
        }
        groupHistoryToggleModeMdSyncReceived({ isToggleOn }) {
            this.$1({
                groupHistorySenderActionType: o("WAWebWamEnumGroupHistorySenderActionType").GROUP_HISTORY_SENDER_ACTION_TYPE.GROUP_HISTORY_TOGGLE_MODE_MD_SYNC_RECEIVED,
                groupHistoryToggleMode: isToggleOn ? o("WAWebWamEnumGroupHistoryToggleMode").GROUP_HISTORY_TOGGLE_MODE.ON : o("WAWebWamEnumGroupHistoryToggleMode").GROUP_HISTORY_TOGGLE_MODE.OFF
            });
        }
    }
    const f = new _;
    l.getGroupHistorySystemMessageType = d;
    l.mapEligibilityResultToIneligibleReason = p;
    l.GroupHistorySenderUserJourneyLogger = f;
}, 98);