__d("WAWebFormatCTAText", [
    "fbt",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebFbtCommon",
    "WAWebGroupAgentAddedRowProfile",
    "WAWebGroupHistoryPostJoinEligibility",
    "WAWebGroupHistoryPostJoinSubtype",
    "WAWebGroupType",
    "WAWebMsgType",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c({ chat, iAmAdmin, id, latestJoinTimeByRecipient, msgT, recipients, shareableHistoryInfo, subtype, templateParams, type }) {
        let g;
        switch(type){
            case o("WAWebMsgType").MSG_TYPE.E2E_NOTIFICATION:
                {
                    if (r("WAWebWid").isCAPISupportAccount(id?.remote)) {
                        g = null;
                    } else {
                        g = s._("Learn more");
                    }
                    break;
                }
            case o("WAWebMsgType").MSG_TYPE.GP2:
                {
                    g = d({
                        chat,
                        iAmAdmin,
                        latestJoinTimeByRecipient,
                        msgT,
                        recipients,
                        shareableHistoryInfo,
                        subtype,
                        templateParams
                    });
                    break;
                }
            case o("WAWebMsgType").MSG_TYPE.PROTOCOL:
                {
                    if (subtype === "event_edit_decrypted") {
                        g = s._("See event");
                    } else if (subtype === "limit_sharing_system_message" || subtype === "acp2_system_message") {
                        g = r("WAWebFbtCommon")("Learn more");
                    }
                    break;
                }
            case o("WAWebMsgType").MSG_TYPE.POLL_ADD_OPTION_DECRYPTED:
                {
                    g = s._("View poll");
                    break;
                }
            case o("WAWebMsgType").MSG_TYPE.NOTIFICATION:
                {
                    if (subtype === o("WAWebCommonMsgSubtypeTypes").MsgSubtype.ScheduledMessageCreated) {
                        g = s._("View");
                    }
                    break;
                }
            case o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE:
                {
                    if (subtype === "limit_sharing_system_message" || subtype === "acp2_system_message" || subtype === "biz_automatically_labeled_chat_system_message") {
                        g = r("WAWebFbtCommon")("Learn more");
                    } else if (subtype === "biz_per_customer_3pd_data_share_opt_in" || subtype === "biz_per_customer_3pd_data_share_opt_out") {
                        g = s._("Manage");
                    }
                    break;
                }
        }
        if (g == null) {
            return null;
        }
        return <span data-testid="system-notification-cta-text">{g}</span>;
    }
    c.displayName = `${c.name} [from ${i.id}]`;
    function d({ chat, iAmAdmin, latestJoinTimeByRecipient, msgT, recipients, shareableHistoryInfo, subtype, templateParams }) {
        if (o("WAWebGroupAgentAddedRowProfile").getAddedGroupAgentProfile(subtype, recipients, chat) != null) {
            return null;
        }
        if (o("WAWebGroupHistoryPostJoinSubtype").isPostJoinHistoryCTASubtype(subtype)) {
            const _ = m({
                chat,
                latestJoinTimeByRecipient,
                msgT,
                recipients,
                shareableHistoryInfo
            });
            if (_ != null) {
                return _;
            }
        }
        switch(subtype){
            case "growth_unlocked":
            case "revoke_invite":
                return s._("View the new invite link");
            case "add":
                return s._("View members");
            case "description":
            case "parent_group_description":
            case "initial_pHash_mismatch":
            case "default_sub_group_promote":
            case "default_sub_group_demote":
                return s._("View");
            case "growth_locked":
            case "hidden_group":
                return r("WAWebFbtCommon")("Learn more");
            case "membership_approval_request":
            case "created_membership_requests":
                return s._("Review");
            case "membership_approval_mode":
                if (o("WAWebGroupType").GroupSettingChangeSystemMessageIsAdmin.cast(templateParams?.[1]?.toString()) === o("WAWebGroupType").GroupSettingChangeSystemMessageIsAdmin.Admin) {
                    return s._("Change");
                }
                return null;
            case "ephemeral_keep_in_chat":
                return r("WAWebFbtCommon")("Learn more");
            case "join_flood_notification":
                if (iAmAdmin !== true) {
                    return null;
                }
                return s._("Manage members");
            case "created_subgroup_suggestion":
                return s._("Approve or reject");
            default:
                return null;
        }
    }
    function m({ chat, latestJoinTimeByRecipient, msgT, recipients, shareableHistoryInfo }) {
        if (recipients == null || chat == null) {
            return null;
        }
        const chat_groupMetadata = chat.groupMetadata;
        if (chat_groupMetadata == null) {
            return null;
        }
        const s = (t)=>latestJoinTimeByRecipient == null || latestJoinTimeByRecipient.get(t.toString()) === msgT;
        if (recipients.length > 1) {
            if (!o("WAWebGroupHistoryPostJoinEligibility").hasResolvableNonSelfRecipient(recipients, msgT, latestJoinTimeByRecipient)) {
                return null;
            }
            const u = o("WAWebGroupHistoryPostJoinEligibility").groupContextFromMetadata(chat_groupMetadata);
            if (!o("WAWebGroupHistoryPostJoinEligibility").isPostJoinHistoryGroupEligible(u)) {
                return null;
            }
            const c = recipients.some((e)=>{
                if (e == null || o("WAWebUserPrefsMeUser").isMeAccount(e) || !s(e)) {
                    return false;
                }
                const t = chat_groupMetadata.participants.get(e);
                return t != null && o("WAWebGroupHistoryPostJoinEligibility").canSendPostJoinHistoryToParticipant(t, u, msgT, shareableHistoryInfo);
            });
            if (c && o("WAWebGroupHistoryPostJoinEligibility").isPostJoinHistoryExperimentArmEnabled(chat_groupMetadata.id)) {
                return p();
            }
            return null;
        }
        if (recipients.length !== 1 || recipients[0] == null) {
            return null;
        }
        const d = recipients[0];
        if (o("WAWebUserPrefsMeUser").isMeAccount(d) || !s(d)) {
            return null;
        }
        const m = chat_groupMetadata.participants.get(d);
        if (m == null) {
            return null;
        }
        if (o("WAWebGroupHistoryPostJoinEligibility").shouldOfferPostJoinHistoryToParticipant(m, o("WAWebGroupHistoryPostJoinEligibility").groupContextFromMetadata(chat_groupMetadata), msgT, shareableHistoryInfo)) {
            return p();
        }
        return null;
    }
    function p() {
        return s._("Send message history");
    }
    p.displayName = `${p.name} [from ${i.id}]`;
    l.default = c;
}, 226);