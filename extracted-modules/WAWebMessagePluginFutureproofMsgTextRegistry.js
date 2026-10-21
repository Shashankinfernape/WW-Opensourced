__d("WAWebMessagePluginFutureproofMsgTextRegistry", [
    "WAWebCommentFutureproofMsgText",
    "WAWebEventCreationFutureproofMsgText",
    "WAWebEventEditFutureproofMsgText",
    "WAWebEventResponseFutureproofMsgText",
    "WAWebKeepInChatFutureproofMessageText",
    "WAWebMemberLabelFutureproofMsgText",
    "WAWebMessageHistoryBundleFutureproofMsgText",
    "WAWebMessageHistoryNoticeFutureproofMsgText",
    "WAWebMusicFutureproofMsgText",
    "WAWebPinMessageFutureproofText",
    "WAWebPollEditFutureproofMsgText",
    "WAWebReactionsFutureproofMessageText",
    "WAWebRichResponseFutureproofMsgText",
    "WAWebSharableEventInviteFutureproofMsgText",
    "WAWebStatusMentionFutureproofMsgText"
], function(t, n, r, o, a, i, l) {
    const e = [
        {
            type: "album",
            subtype: undefined,
            futureproofMsgText: null
        },
        {
            type: "audio",
            subtype: undefined,
            futureproofMsgText: null
        },
        {
            type: "biz_content_placeholder",
            subtype: undefined,
            futureproofMsgText: null
        },
        {
            type: "buttons_response",
            subtype: undefined,
            futureproofMsgText: null
        },
        {
            type: "chat",
            subtype: "url",
            futureproofMsgText: null
        },
        {
            type: "chat",
            subtype: undefined,
            futureproofMsgText: null
        },
        {
            type: "ciphertext",
            subtype: "acp_unavailable_fanout",
            futureproofMsgText: null
        },
        {
            type: "ciphertext",
            subtype: "bot_unavailable_fanout",
            futureproofMsgText: null
        },
        {
            type: "ciphertext",
            subtype: "fanout",
            futureproofMsgText: null
        },
        {
            type: "ciphertext",
            subtype: "hosted_unavailable_fanout",
            futureproofMsgText: null
        },
        {
            type: "ciphertext",
            subtype: "view_once_unavailable_fanout",
            futureproofMsgText: null
        },
        {
            type: "ciphertext",
            subtype: undefined,
            futureproofMsgText: null
        },
        {
            type: "comment",
            subtype: undefined,
            futureproofMsgText: r("WAWebCommentFutureproofMsgText")
        },
        {
            type: "debug_placeholder",
            subtype: undefined,
            futureproofMsgText: null
        },
        {
            type: "document",
            subtype: undefined,
            futureproofMsgText: null
        },
        {
            type: "event_creation",
            subtype: undefined,
            futureproofMsgText: r("WAWebEventCreationFutureproofMsgText")
        },
        {
            type: "event_edit_encrypted",
            subtype: undefined,
            futureproofMsgText: r("WAWebEventEditFutureproofMsgText")
        },
        {
            type: "event_response",
            subtype: undefined,
            futureproofMsgText: r("WAWebEventResponseFutureproofMsgText")
        },
        {
            type: "group-history",
            subtype: "message_history_bundle",
            futureproofMsgText: r("WAWebMessageHistoryBundleFutureproofMsgText")
        },
        {
            type: "groups_v4_invite",
            subtype: undefined,
            futureproofMsgText: null
        },
        {
            type: "hsm",
            subtype: undefined,
            futureproofMsgText: null
        },
        {
            type: "image",
            subtype: undefined,
            futureproofMsgText: null
        },
        {
            type: "interactive",
            subtype: undefined,
            futureproofMsgText: null
        },
        {
            type: "interactive_response",
            subtype: undefined,
            futureproofMsgText: null
        },
        {
            type: "keep_in_chat",
            subtype: undefined,
            futureproofMsgText: r("WAWebKeepInChatFutureproofMessageText")
        },
        {
            type: "list",
            subtype: undefined,
            futureproofMsgText: null
        },
        {
            type: "list_response",
            subtype: undefined,
            futureproofMsgText: null
        },
        {
            type: "loading_media",
            subtype: "loading_image",
            futureproofMsgText: null
        },
        {
            type: "loading_media",
            subtype: "loading_video",
            futureproofMsgText: null
        },
        {
            type: "location",
            subtype: undefined,
            futureproofMsgText: null
        },
        {
            type: "message_edit_encrypted",
            subtype: "message_edit",
            futureproofMsgText: null
        },
        {
            type: "message_history_notice",
            subtype: "message_history_notice",
            futureproofMsgText: r("WAWebMessageHistoryNoticeFutureproofMsgText")
        },
        {
            type: "multi_vcard",
            subtype: undefined,
            futureproofMsgText: null
        },
        {
            type: "music",
            subtype: undefined,
            futureproofMsgText: r("WAWebMusicFutureproofMsgText")
        },
        {
            type: "native_flow",
            subtype: undefined,
            futureproofMsgText: null
        },
        {
            type: "newsletter_admin_invite",
            subtype: undefined,
            futureproofMsgText: null
        },
        {
            type: "newsletter_follower_invite",
            subtype: undefined,
            futureproofMsgText: null
        },
        {
            type: "newsletter_question_response",
            subtype: undefined,
            futureproofMsgText: null
        },
        {
            type: "notification_template",
            subtype: "contact_info_card",
            futureproofMsgText: null
        },
        {
            type: "order",
            subtype: undefined,
            futureproofMsgText: null
        },
        {
            type: "payment",
            subtype: "ciphertext",
            futureproofMsgText: null
        },
        {
            type: "payment",
            subtype: "futureproof",
            futureproofMsgText: null
        },
        {
            type: "payment",
            subtype: "invite",
            futureproofMsgText: null
        },
        {
            type: "payment",
            subtype: "request",
            futureproofMsgText: null
        },
        {
            type: "payment",
            subtype: "send",
            futureproofMsgText: null
        },
        {
            type: "pin_message",
            subtype: undefined,
            futureproofMsgText: r("WAWebPinMessageFutureproofText")
        },
        {
            type: "pinned_message",
            subtype: undefined,
            futureproofMsgText: null
        },
        {
            type: "poll_add_option_decrypted",
            subtype: undefined,
            futureproofMsgText: null
        },
        {
            type: "poll_add_option_encrypted",
            subtype: undefined,
            futureproofMsgText: null
        },
        {
            type: "poll_creation",
            subtype: undefined,
            futureproofMsgText: null
        },
        {
            type: "poll_edit_encrypted",
            subtype: undefined,
            futureproofMsgText: r("WAWebPollEditFutureproofMsgText")
        },
        {
            type: "poll_result_snapshot",
            subtype: undefined,
            futureproofMsgText: null
        },
        {
            type: "poll_update",
            subtype: "poll_vote",
            futureproofMsgText: null
        },
        {
            type: "product",
            subtype: undefined,
            futureproofMsgText: null
        },
        {
            type: "protocol",
            subtype: "acp2_system_message",
            futureproofMsgText: null
        },
        {
            type: "protocol",
            subtype: "admin_revoke",
            futureproofMsgText: null
        },
        {
            type: "protocol",
            subtype: "ai_media_collection",
            futureproofMsgText: null
        },
        {
            type: "protocol",
            subtype: "biz_ai_metadata_sync",
            futureproofMsgText: null
        },
        {
            type: "protocol",
            subtype: "bot_feedback",
            futureproofMsgText: null
        },
        {
            type: "protocol",
            subtype: "bot_memu_onboarding",
            futureproofMsgText: null
        },
        {
            type: "protocol",
            subtype: "bot_request_welcome",
            futureproofMsgText: null
        },
        {
            type: "protocol",
            subtype: "ephemeral_setting",
            futureproofMsgText: null
        },
        {
            type: "protocol",
            subtype: "ephemeral_sync_response",
            futureproofMsgText: null
        },
        {
            type: "protocol",
            subtype: "event_edit_decrypted",
            futureproofMsgText: null
        },
        {
            type: "protocol",
            subtype: "hatch_metadata_sync",
            futureproofMsgText: null
        },
        {
            type: "protocol",
            subtype: "history_sync_notification",
            futureproofMsgText: null
        },
        {
            type: "protocol",
            subtype: "limit_sharing_system_message",
            futureproofMsgText: null
        },
        {
            type: "protocol",
            subtype: "member_label",
            futureproofMsgText: r("WAWebMemberLabelFutureproofMsgText")
        },
        {
            type: "protocol",
            subtype: "message_edit",
            futureproofMsgText: null
        },
        {
            type: "protocol",
            subtype: "message_edit_decrypted",
            futureproofMsgText: null
        },
        {
            type: "protocol",
            subtype: "poll_edit_decrypted",
            futureproofMsgText: null
        },
        {
            type: "protocol",
            subtype: "scheduled_message_unschedule",
            futureproofMsgText: null
        },
        {
            type: "protocol",
            subtype: "sender_revoke",
            futureproofMsgText: null
        },
        {
            type: "protocol",
            subtype: "share_phone_number",
            futureproofMsgText: null
        },
        {
            type: "protocol",
            subtype: "status_group_mention_message",
            futureproofMsgText: r("WAWebStatusMentionFutureproofMsgText")
        },
        {
            type: "protocol",
            subtype: "status_mention_message",
            futureproofMsgText: r("WAWebStatusMentionFutureproofMsgText")
        },
        {
            type: "ptt",
            subtype: undefined,
            futureproofMsgText: null
        },
        {
            type: "ptv",
            subtype: undefined,
            futureproofMsgText: null
        },
        {
            type: "quarantined",
            subtype: undefined,
            futureproofMsgText: null
        },
        {
            type: "reaction",
            subtype: undefined,
            futureproofMsgText: r("WAWebReactionsFutureproofMessageText")
        },
        {
            type: "reaction_enc",
            subtype: undefined,
            futureproofMsgText: null
        },
        {
            type: "request_phone_number",
            subtype: undefined,
            futureproofMsgText: null
        },
        {
            type: "revoked",
            subtype: "admin",
            futureproofMsgText: null
        },
        {
            type: "revoked",
            subtype: "sender",
            futureproofMsgText: null
        },
        {
            type: "rich_response",
            subtype: undefined,
            futureproofMsgText: r("WAWebRichResponseFutureproofMsgText")
        },
        {
            type: "sharable_event_invite",
            subtype: undefined,
            futureproofMsgText: r("WAWebSharableEventInviteFutureproofMsgText")
        },
        {
            type: "status_notification",
            subtype: "status_notification_message",
            futureproofMsgText: null
        },
        {
            type: "sticker",
            subtype: undefined,
            futureproofMsgText: null
        },
        {
            type: "sticker-pack",
            subtype: undefined,
            futureproofMsgText: null
        },
        {
            type: "template_button_reply",
            subtype: undefined,
            futureproofMsgText: null
        },
        {
            type: "unknown",
            subtype: "payment_action_request_declined",
            futureproofMsgText: null
        },
        {
            type: "unknown",
            subtype: "payment_transaction_request_cancelled",
            futureproofMsgText: null
        },
        {
            type: "unknown",
            subtype: "phone",
            futureproofMsgText: null
        },
        {
            type: "unknown",
            subtype: "phone_only_feature",
            futureproofMsgText: null
        },
        {
            type: "unknown",
            subtype: undefined,
            futureproofMsgText: null
        },
        {
            type: "vcard",
            subtype: undefined,
            futureproofMsgText: null
        },
        {
            type: "video",
            subtype: undefined,
            futureproofMsgText: null
        }
    ];
    l.default = e;
}, 98);