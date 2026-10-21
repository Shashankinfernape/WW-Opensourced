__d("WAWebMessagePluginMsgDisplayClassRegistry", [
    "WAWebAudioMsgDisplayClass",
    "WAWebChatMsgDisplayClass",
    "WAWebDocumentMsgDisplayClass",
    "WAWebImageMsgDisplayClass",
    "WAWebListMsgDisplayClass",
    "WAWebLocationMsgDisplayClass",
    "WAWebMessageChatMsgDisplayClass",
    "WAWebMessageProductMsgDisplayClass",
    "WAWebMultiVcardMsgDisplayClass",
    "WAWebPollMsgDisplayClass",
    "WAWebPttMsgDisplayClass",
    "WAWebPtvMsgDisplayClass",
    "WAWebStatusMentionMsgDisplayClass",
    "WAWebStickerMsgDisplayClass",
    "WAWebVcardMsgDisplayClass",
    "WAWebVideoMsgDisplayClass"
], function(t, n, r, o, a, i, l) {
    let msgDisplayClass;
    const s = [
        {
            type: "album",
            subtype: undefined,
            msgDisplayClass: null
        },
        {
            type: "audio",
            subtype: undefined,
            msgDisplayClass: r("WAWebAudioMsgDisplayClass")
        },
        {
            type: "biz_content_placeholder",
            subtype: undefined,
            msgDisplayClass: null
        },
        {
            type: "buttons_response",
            subtype: undefined,
            msgDisplayClass: msgDisplayClass = r("WAWebMessageChatMsgDisplayClass")
        },
        {
            type: "chat",
            subtype: "url",
            msgDisplayClass: r("WAWebChatMsgDisplayClass")
        },
        {
            type: "chat",
            subtype: undefined,
            msgDisplayClass: r("WAWebChatMsgDisplayClass")
        },
        {
            type: "ciphertext",
            subtype: "acp_unavailable_fanout",
            msgDisplayClass: null
        },
        {
            type: "ciphertext",
            subtype: "bot_unavailable_fanout",
            msgDisplayClass: null
        },
        {
            type: "ciphertext",
            subtype: "fanout",
            msgDisplayClass: null
        },
        {
            type: "ciphertext",
            subtype: "hosted_unavailable_fanout",
            msgDisplayClass: null
        },
        {
            type: "ciphertext",
            subtype: "view_once_unavailable_fanout",
            msgDisplayClass: null
        },
        {
            type: "ciphertext",
            subtype: undefined,
            msgDisplayClass: null
        },
        {
            type: "comment",
            subtype: undefined,
            msgDisplayClass: null
        },
        {
            type: "debug_placeholder",
            subtype: undefined,
            msgDisplayClass: null
        },
        {
            type: "document",
            subtype: undefined,
            msgDisplayClass: r("WAWebDocumentMsgDisplayClass")
        },
        {
            type: "event_creation",
            subtype: undefined,
            msgDisplayClass: null
        },
        {
            type: "event_edit_encrypted",
            subtype: undefined,
            msgDisplayClass: null
        },
        {
            type: "event_response",
            subtype: undefined,
            msgDisplayClass: null
        },
        {
            type: "group-history",
            subtype: "message_history_bundle",
            msgDisplayClass: null
        },
        {
            type: "groups_v4_invite",
            subtype: undefined,
            msgDisplayClass
        },
        {
            type: "hsm",
            subtype: undefined,
            msgDisplayClass: null
        },
        {
            type: "image",
            subtype: undefined,
            msgDisplayClass: r("WAWebImageMsgDisplayClass")
        },
        {
            type: "interactive",
            subtype: undefined,
            msgDisplayClass: null
        },
        {
            type: "interactive_response",
            subtype: undefined,
            msgDisplayClass: null
        },
        {
            type: "keep_in_chat",
            subtype: undefined,
            msgDisplayClass: null
        },
        {
            type: "list",
            subtype: undefined,
            msgDisplayClass: r("WAWebListMsgDisplayClass")
        },
        {
            type: "list_response",
            subtype: undefined,
            msgDisplayClass
        },
        {
            type: "loading_media",
            subtype: "loading_image",
            msgDisplayClass: null
        },
        {
            type: "loading_media",
            subtype: "loading_video",
            msgDisplayClass: null
        },
        {
            type: "location",
            subtype: undefined,
            msgDisplayClass: r("WAWebLocationMsgDisplayClass")
        },
        {
            type: "message_edit_encrypted",
            subtype: "message_edit",
            msgDisplayClass: null
        },
        {
            type: "message_history_notice",
            subtype: "message_history_notice",
            msgDisplayClass: null
        },
        {
            type: "multi_vcard",
            subtype: undefined,
            msgDisplayClass: r("WAWebMultiVcardMsgDisplayClass")
        },
        {
            type: "music",
            subtype: undefined,
            msgDisplayClass: r("WAWebStickerMsgDisplayClass")
        },
        {
            type: "native_flow",
            subtype: undefined,
            msgDisplayClass: null
        },
        {
            type: "newsletter_admin_invite",
            subtype: undefined,
            msgDisplayClass
        },
        {
            type: "newsletter_follower_invite",
            subtype: undefined,
            msgDisplayClass: null
        },
        {
            type: "newsletter_question_response",
            subtype: undefined,
            msgDisplayClass: null
        },
        {
            type: "notification_template",
            subtype: "contact_info_card",
            msgDisplayClass: null
        },
        {
            type: "order",
            subtype: undefined,
            msgDisplayClass: r("WAWebMessageProductMsgDisplayClass")
        },
        {
            type: "payment",
            subtype: "ciphertext",
            msgDisplayClass: null
        },
        {
            type: "payment",
            subtype: "futureproof",
            msgDisplayClass: null
        },
        {
            type: "payment",
            subtype: "invite",
            msgDisplayClass: null
        },
        {
            type: "payment",
            subtype: "request",
            msgDisplayClass: null
        },
        {
            type: "payment",
            subtype: "send",
            msgDisplayClass: null
        },
        {
            type: "pin_message",
            subtype: undefined,
            msgDisplayClass: null
        },
        {
            type: "pinned_message",
            subtype: undefined,
            msgDisplayClass: null
        },
        {
            type: "poll_add_option_decrypted",
            subtype: undefined,
            msgDisplayClass: null
        },
        {
            type: "poll_add_option_encrypted",
            subtype: undefined,
            msgDisplayClass: null
        },
        {
            type: "poll_creation",
            subtype: undefined,
            msgDisplayClass: r("WAWebPollMsgDisplayClass")
        },
        {
            type: "poll_edit_encrypted",
            subtype: undefined,
            msgDisplayClass: null
        },
        {
            type: "poll_result_snapshot",
            subtype: undefined,
            msgDisplayClass: r("WAWebPollMsgDisplayClass")
        },
        {
            type: "poll_update",
            subtype: "poll_vote",
            msgDisplayClass: null
        },
        {
            type: "product",
            subtype: undefined,
            msgDisplayClass: r("WAWebMessageProductMsgDisplayClass")
        },
        {
            type: "protocol",
            subtype: "acp2_system_message",
            msgDisplayClass: null
        },
        {
            type: "protocol",
            subtype: "admin_revoke",
            msgDisplayClass: null
        },
        {
            type: "protocol",
            subtype: "ai_media_collection",
            msgDisplayClass: null
        },
        {
            type: "protocol",
            subtype: "biz_ai_metadata_sync",
            msgDisplayClass: null
        },
        {
            type: "protocol",
            subtype: "bot_feedback",
            msgDisplayClass: null
        },
        {
            type: "protocol",
            subtype: "bot_memu_onboarding",
            msgDisplayClass: null
        },
        {
            type: "protocol",
            subtype: "bot_request_welcome",
            msgDisplayClass: null
        },
        {
            type: "protocol",
            subtype: "ephemeral_setting",
            msgDisplayClass: null
        },
        {
            type: "protocol",
            subtype: "ephemeral_sync_response",
            msgDisplayClass: null
        },
        {
            type: "protocol",
            subtype: "event_edit_decrypted",
            msgDisplayClass: null
        },
        {
            type: "protocol",
            subtype: "hatch_metadata_sync",
            msgDisplayClass: null
        },
        {
            type: "protocol",
            subtype: "history_sync_notification",
            msgDisplayClass: null
        },
        {
            type: "protocol",
            subtype: "limit_sharing_system_message",
            msgDisplayClass: null
        },
        {
            type: "protocol",
            subtype: "member_label",
            msgDisplayClass: null
        },
        {
            type: "protocol",
            subtype: "message_edit",
            msgDisplayClass: null
        },
        {
            type: "protocol",
            subtype: "message_edit_decrypted",
            msgDisplayClass: null
        },
        {
            type: "protocol",
            subtype: "poll_edit_decrypted",
            msgDisplayClass: null
        },
        {
            type: "protocol",
            subtype: "scheduled_message_unschedule",
            msgDisplayClass: null
        },
        {
            type: "protocol",
            subtype: "sender_revoke",
            msgDisplayClass: null
        },
        {
            type: "protocol",
            subtype: "share_phone_number",
            msgDisplayClass: null
        },
        {
            type: "protocol",
            subtype: "status_group_mention_message",
            msgDisplayClass: r("WAWebStatusMentionMsgDisplayClass")
        },
        {
            type: "protocol",
            subtype: "status_mention_message",
            msgDisplayClass: r("WAWebStatusMentionMsgDisplayClass")
        },
        {
            type: "ptt",
            subtype: undefined,
            msgDisplayClass: r("WAWebPttMsgDisplayClass")
        },
        {
            type: "ptv",
            subtype: undefined,
            msgDisplayClass: r("WAWebPtvMsgDisplayClass")
        },
        {
            type: "quarantined",
            subtype: undefined,
            msgDisplayClass: null
        },
        {
            type: "reaction",
            subtype: undefined,
            msgDisplayClass: null
        },
        {
            type: "reaction_enc",
            subtype: undefined,
            msgDisplayClass: null
        },
        {
            type: "request_phone_number",
            subtype: undefined,
            msgDisplayClass
        },
        {
            type: "revoked",
            subtype: "admin",
            msgDisplayClass
        },
        {
            type: "revoked",
            subtype: "sender",
            msgDisplayClass
        },
        {
            type: "rich_response",
            subtype: undefined,
            msgDisplayClass
        },
        {
            type: "sharable_event_invite",
            subtype: undefined,
            msgDisplayClass: null
        },
        {
            type: "status_notification",
            subtype: "status_notification_message",
            msgDisplayClass: null
        },
        {
            type: "sticker",
            subtype: undefined,
            msgDisplayClass: r("WAWebStickerMsgDisplayClass")
        },
        {
            type: "sticker-pack",
            subtype: undefined,
            msgDisplayClass: null
        },
        {
            type: "template_button_reply",
            subtype: undefined,
            msgDisplayClass
        },
        {
            type: "unknown",
            subtype: "payment_action_request_declined",
            msgDisplayClass: null
        },
        {
            type: "unknown",
            subtype: "payment_transaction_request_cancelled",
            msgDisplayClass: null
        },
        {
            type: "unknown",
            subtype: "phone",
            msgDisplayClass: null
        },
        {
            type: "unknown",
            subtype: "phone_only_feature",
            msgDisplayClass: null
        },
        {
            type: "unknown",
            subtype: undefined,
            msgDisplayClass: null
        },
        {
            type: "vcard",
            subtype: undefined,
            msgDisplayClass: r("WAWebVcardMsgDisplayClass")
        },
        {
            type: "video",
            subtype: undefined,
            msgDisplayClass: r("WAWebVideoMsgDisplayClass")
        }
    ];
    l.default = s;
}, 98);