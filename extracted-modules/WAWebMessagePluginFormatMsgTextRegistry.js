__d("WAWebMessagePluginFormatMsgTextRegistry", [
    "WAWebAlbumsFormatAlbumMessageText",
    "WAWebCommentFormatMsgText",
    "WAWebEventsFormatEventCreationMessageText",
    "WAWebEventsFormatEventEditMessageText",
    "WAWebFormatAudioMsgText",
    "WAWebFormatBizContentPlaceholderMsgText",
    "WAWebFormatCiphertextMsgText",
    "WAWebFormatDebugPlaceholderMsgText",
    "WAWebFormatDocumentMsgText",
    "WAWebFormatGroupInviteMsgText",
    "WAWebFormatImageMsgText",
    "WAWebFormatKeepInChatMsgText",
    "WAWebFormatListMsgText",
    "WAWebFormatListResponseMsgText",
    "WAWebFormatLocationMsgText",
    "WAWebFormatMultiVcardMsgText",
    "WAWebFormatNativeFlowMsgText",
    "WAWebFormatNewsletterAdminInviteMsgText",
    "WAWebFormatNewsletterFollowerInviteMsgText",
    "WAWebFormatOrderMsgText",
    "WAWebFormatPaymentMsgText",
    "WAWebFormatPinnedMessageMsgText",
    "WAWebFormatProductMsgText",
    "WAWebFormatPttMsgText",
    "WAWebFormatQuarantinedMsgText",
    "WAWebFormatRequestPhoneNumberMsgText",
    "WAWebFormatRevokedMsgText",
    "WAWebFormatRichResponseMessageText",
    "WAWebFormatStickerMsgText",
    "WAWebFormatStickerPackMsgText",
    "WAWebFormatTemplateButtonReplyMsgText",
    "WAWebFormatVcardMsgText",
    "WAWebFormatVideoMsgText",
    "WAWebMusicFormatMsgText",
    "WAWebPollsFormatPollAddOptionDecryptedMsgText",
    "WAWebPollsFormatPollMessageText",
    "WAWebSharableEventInviteFormatMessageText",
    "WAWebStatusMentionFormatMsgText"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = [
        {
            type: "album",
            subtype: undefined,
            formatMsgText: r("WAWebAlbumsFormatAlbumMessageText")
        },
        {
            type: "audio",
            subtype: undefined,
            formatMsgText: r("WAWebFormatAudioMsgText")
        },
        {
            type: "biz_content_placeholder",
            subtype: undefined,
            formatMsgText: r("WAWebFormatBizContentPlaceholderMsgText")
        },
        {
            type: "buttons_response",
            subtype: undefined,
            formatMsgText: r("WAWebFormatTemplateButtonReplyMsgText")
        },
        {
            type: "chat",
            subtype: "url",
            formatMsgText: null
        },
        {
            type: "chat",
            subtype: undefined,
            formatMsgText: null
        },
        {
            type: "ciphertext",
            subtype: "acp_unavailable_fanout",
            formatMsgText: e = r("WAWebFormatCiphertextMsgText")
        },
        {
            type: "ciphertext",
            subtype: "bot_unavailable_fanout",
            formatMsgText: e
        },
        {
            type: "ciphertext",
            subtype: "fanout",
            formatMsgText: e
        },
        {
            type: "ciphertext",
            subtype: "hosted_unavailable_fanout",
            formatMsgText: e
        },
        {
            type: "ciphertext",
            subtype: "view_once_unavailable_fanout",
            formatMsgText: e
        },
        {
            type: "ciphertext",
            subtype: undefined,
            formatMsgText: e
        },
        {
            type: "comment",
            subtype: undefined,
            formatMsgText: r("WAWebCommentFormatMsgText")
        },
        {
            type: "debug_placeholder",
            subtype: undefined,
            formatMsgText: r("WAWebFormatDebugPlaceholderMsgText")
        },
        {
            type: "document",
            subtype: undefined,
            formatMsgText: r("WAWebFormatDocumentMsgText")
        },
        {
            type: "event_creation",
            subtype: undefined,
            formatMsgText: r("WAWebEventsFormatEventCreationMessageText")
        },
        {
            type: "event_edit_encrypted",
            subtype: undefined,
            formatMsgText: null
        },
        {
            type: "event_response",
            subtype: undefined,
            formatMsgText: null
        },
        {
            type: "group-history",
            subtype: "message_history_bundle",
            formatMsgText: null
        },
        {
            type: "groups_v4_invite",
            subtype: undefined,
            formatMsgText: r("WAWebFormatGroupInviteMsgText")
        },
        {
            type: "hsm",
            subtype: undefined,
            formatMsgText: null
        },
        {
            type: "image",
            subtype: undefined,
            formatMsgText: r("WAWebFormatImageMsgText")
        },
        {
            type: "interactive",
            subtype: undefined,
            formatMsgText: null
        },
        {
            type: "interactive_response",
            subtype: undefined,
            formatMsgText: null
        },
        {
            type: "keep_in_chat",
            subtype: undefined,
            formatMsgText: r("WAWebFormatKeepInChatMsgText")
        },
        {
            type: "list",
            subtype: undefined,
            formatMsgText: r("WAWebFormatListMsgText")
        },
        {
            type: "list_response",
            subtype: undefined,
            formatMsgText: r("WAWebFormatListResponseMsgText")
        },
        {
            type: "loading_media",
            subtype: "loading_image",
            formatMsgText: r("WAWebFormatImageMsgText")
        },
        {
            type: "loading_media",
            subtype: "loading_video",
            formatMsgText: r("WAWebFormatVideoMsgText")
        },
        {
            type: "location",
            subtype: undefined,
            formatMsgText: r("WAWebFormatLocationMsgText")
        },
        {
            type: "message_edit_encrypted",
            subtype: "message_edit",
            formatMsgText: null
        },
        {
            type: "message_history_notice",
            subtype: "message_history_notice",
            formatMsgText: null
        },
        {
            type: "multi_vcard",
            subtype: undefined,
            formatMsgText: r("WAWebFormatMultiVcardMsgText")
        },
        {
            type: "music",
            subtype: undefined,
            formatMsgText: r("WAWebMusicFormatMsgText")
        },
        {
            type: "native_flow",
            subtype: undefined,
            formatMsgText: r("WAWebFormatNativeFlowMsgText")
        },
        {
            type: "newsletter_admin_invite",
            subtype: undefined,
            formatMsgText: r("WAWebFormatNewsletterAdminInviteMsgText")
        },
        {
            type: "newsletter_follower_invite",
            subtype: undefined,
            formatMsgText: r("WAWebFormatNewsletterFollowerInviteMsgText")
        },
        {
            type: "newsletter_question_response",
            subtype: undefined,
            formatMsgText: null
        },
        {
            type: "notification_template",
            subtype: "contact_info_card",
            formatMsgText: null
        },
        {
            type: "order",
            subtype: undefined,
            formatMsgText: r("WAWebFormatOrderMsgText")
        },
        {
            type: "payment",
            subtype: "ciphertext",
            formatMsgText: s = r("WAWebFormatPaymentMsgText")
        },
        {
            type: "payment",
            subtype: "futureproof",
            formatMsgText: s
        },
        {
            type: "payment",
            subtype: "invite",
            formatMsgText: s
        },
        {
            type: "payment",
            subtype: "request",
            formatMsgText: s
        },
        {
            type: "payment",
            subtype: "send",
            formatMsgText: s
        },
        {
            type: "pin_message",
            subtype: undefined,
            formatMsgText: null
        },
        {
            type: "pinned_message",
            subtype: undefined,
            formatMsgText: r("WAWebFormatPinnedMessageMsgText")
        },
        {
            type: "poll_add_option_decrypted",
            subtype: undefined,
            formatMsgText: r("WAWebPollsFormatPollAddOptionDecryptedMsgText")
        },
        {
            type: "poll_add_option_encrypted",
            subtype: undefined,
            formatMsgText: null
        },
        {
            type: "poll_creation",
            subtype: undefined,
            formatMsgText: r("WAWebPollsFormatPollMessageText")
        },
        {
            type: "poll_edit_encrypted",
            subtype: undefined,
            formatMsgText: null
        },
        {
            type: "poll_result_snapshot",
            subtype: undefined,
            formatMsgText: r("WAWebPollsFormatPollMessageText")
        },
        {
            type: "poll_update",
            subtype: "poll_vote",
            formatMsgText: null
        },
        {
            type: "product",
            subtype: undefined,
            formatMsgText: r("WAWebFormatProductMsgText")
        },
        {
            type: "protocol",
            subtype: "acp2_system_message",
            formatMsgText: null
        },
        {
            type: "protocol",
            subtype: "admin_revoke",
            formatMsgText: u = r("WAWebFormatRevokedMsgText")
        },
        {
            type: "protocol",
            subtype: "ai_media_collection",
            formatMsgText: null
        },
        {
            type: "protocol",
            subtype: "biz_ai_metadata_sync",
            formatMsgText: null
        },
        {
            type: "protocol",
            subtype: "bot_feedback",
            formatMsgText: null
        },
        {
            type: "protocol",
            subtype: "bot_memu_onboarding",
            formatMsgText: null
        },
        {
            type: "protocol",
            subtype: "bot_request_welcome",
            formatMsgText: null
        },
        {
            type: "protocol",
            subtype: "ephemeral_setting",
            formatMsgText: null
        },
        {
            type: "protocol",
            subtype: "ephemeral_sync_response",
            formatMsgText: null
        },
        {
            type: "protocol",
            subtype: "event_edit_decrypted",
            formatMsgText: r("WAWebEventsFormatEventEditMessageText")
        },
        {
            type: "protocol",
            subtype: "hatch_metadata_sync",
            formatMsgText: null
        },
        {
            type: "protocol",
            subtype: "history_sync_notification",
            formatMsgText: null
        },
        {
            type: "protocol",
            subtype: "limit_sharing_system_message",
            formatMsgText: null
        },
        {
            type: "protocol",
            subtype: "member_label",
            formatMsgText: null
        },
        {
            type: "protocol",
            subtype: "message_edit",
            formatMsgText: null
        },
        {
            type: "protocol",
            subtype: "message_edit_decrypted",
            formatMsgText: null
        },
        {
            type: "protocol",
            subtype: "poll_edit_decrypted",
            formatMsgText: null
        },
        {
            type: "protocol",
            subtype: "scheduled_message_unschedule",
            formatMsgText: null
        },
        {
            type: "protocol",
            subtype: "sender_revoke",
            formatMsgText: u
        },
        {
            type: "protocol",
            subtype: "share_phone_number",
            formatMsgText: null
        },
        {
            type: "protocol",
            subtype: "status_group_mention_message",
            formatMsgText: r("WAWebStatusMentionFormatMsgText")
        },
        {
            type: "protocol",
            subtype: "status_mention_message",
            formatMsgText: r("WAWebStatusMentionFormatMsgText")
        },
        {
            type: "ptt",
            subtype: undefined,
            formatMsgText: r("WAWebFormatPttMsgText")
        },
        {
            type: "ptv",
            subtype: undefined,
            formatMsgText: null
        },
        {
            type: "quarantined",
            subtype: undefined,
            formatMsgText: r("WAWebFormatQuarantinedMsgText")
        },
        {
            type: "reaction",
            subtype: undefined,
            formatMsgText: null
        },
        {
            type: "reaction_enc",
            subtype: undefined,
            formatMsgText: null
        },
        {
            type: "request_phone_number",
            subtype: undefined,
            formatMsgText: r("WAWebFormatRequestPhoneNumberMsgText")
        },
        {
            type: "revoked",
            subtype: "admin",
            formatMsgText: u
        },
        {
            type: "revoked",
            subtype: "sender",
            formatMsgText: u
        },
        {
            type: "rich_response",
            subtype: undefined,
            formatMsgText: r("WAWebFormatRichResponseMessageText")
        },
        {
            type: "sharable_event_invite",
            subtype: undefined,
            formatMsgText: r("WAWebSharableEventInviteFormatMessageText")
        },
        {
            type: "status_notification",
            subtype: "status_notification_message",
            formatMsgText: null
        },
        {
            type: "sticker",
            subtype: undefined,
            formatMsgText: r("WAWebFormatStickerMsgText")
        },
        {
            type: "sticker-pack",
            subtype: undefined,
            formatMsgText: r("WAWebFormatStickerPackMsgText")
        },
        {
            type: "template_button_reply",
            subtype: undefined,
            formatMsgText: r("WAWebFormatTemplateButtonReplyMsgText")
        },
        {
            type: "unknown",
            subtype: "payment_action_request_declined",
            formatMsgText: null
        },
        {
            type: "unknown",
            subtype: "payment_transaction_request_cancelled",
            formatMsgText: null
        },
        {
            type: "unknown",
            subtype: "phone",
            formatMsgText: null
        },
        {
            type: "unknown",
            subtype: "phone_only_feature",
            formatMsgText: null
        },
        {
            type: "unknown",
            subtype: undefined,
            formatMsgText: null
        },
        {
            type: "vcard",
            subtype: undefined,
            formatMsgText: r("WAWebFormatVcardMsgText")
        },
        {
            type: "video",
            subtype: undefined,
            formatMsgText: r("WAWebFormatVideoMsgText")
        }
    ];
    l.default = c;
}, 98);