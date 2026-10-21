__d("WAWebMessagePluginQuotedMsgThumbnailIconRegistry", [
    "WAWebChatQuotedMsgThumbnailIcon.react",
    "WAWebInteractiveQuotedMsgThumbnailIcon",
    "WAWebListQuotedMsgThumbnailIcon",
    "WAWebLocationQuotedMsgThumbnailIcon",
    "WAWebMediaMsgPreviewQuotedMsgThumbnailIcon.react",
    "WAWebMultiVcardQuotedMsgThumbnailIcon",
    "WAWebMusicQuotedMsgThumbnailIcon",
    "WAWebNativeFlowQuotedMsgThumbnailIcon",
    "WAWebOrderQuotedMsgThumbnailIcon",
    "WAWebPaymentQuotedMsgThumbnailIcon",
    "WAWebProductQuotedMsgThumbnailIcon",
    "WAWebVcardQuotedMsgThumbnailIcon"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = [
        {
            type: "album",
            subtype: undefined,
            quotedMsgThumbnailIcon: null
        },
        {
            type: "audio",
            subtype: undefined,
            quotedMsgThumbnailIcon: null
        },
        {
            type: "biz_content_placeholder",
            subtype: undefined,
            quotedMsgThumbnailIcon: null
        },
        {
            type: "buttons_response",
            subtype: undefined,
            quotedMsgThumbnailIcon: null
        },
        {
            type: "chat",
            subtype: "url",
            quotedMsgThumbnailIcon: r("WAWebChatQuotedMsgThumbnailIcon.react")
        },
        {
            type: "chat",
            subtype: undefined,
            quotedMsgThumbnailIcon: null
        },
        {
            type: "ciphertext",
            subtype: "acp_unavailable_fanout",
            quotedMsgThumbnailIcon: null
        },
        {
            type: "ciphertext",
            subtype: "bot_unavailable_fanout",
            quotedMsgThumbnailIcon: null
        },
        {
            type: "ciphertext",
            subtype: "fanout",
            quotedMsgThumbnailIcon: null
        },
        {
            type: "ciphertext",
            subtype: "hosted_unavailable_fanout",
            quotedMsgThumbnailIcon: null
        },
        {
            type: "ciphertext",
            subtype: "view_once_unavailable_fanout",
            quotedMsgThumbnailIcon: null
        },
        {
            type: "ciphertext",
            subtype: undefined,
            quotedMsgThumbnailIcon: null
        },
        {
            type: "comment",
            subtype: undefined,
            quotedMsgThumbnailIcon: null
        },
        {
            type: "debug_placeholder",
            subtype: undefined,
            quotedMsgThumbnailIcon: null
        },
        {
            type: "document",
            subtype: undefined,
            quotedMsgThumbnailIcon: e = r("WAWebMediaMsgPreviewQuotedMsgThumbnailIcon.react")
        },
        {
            type: "event_creation",
            subtype: undefined,
            quotedMsgThumbnailIcon: null
        },
        {
            type: "event_edit_encrypted",
            subtype: undefined,
            quotedMsgThumbnailIcon: null
        },
        {
            type: "event_response",
            subtype: undefined,
            quotedMsgThumbnailIcon: null
        },
        {
            type: "group-history",
            subtype: "message_history_bundle",
            quotedMsgThumbnailIcon: null
        },
        {
            type: "groups_v4_invite",
            subtype: undefined,
            quotedMsgThumbnailIcon: null
        },
        {
            type: "hsm",
            subtype: undefined,
            quotedMsgThumbnailIcon: null
        },
        {
            type: "image",
            subtype: undefined,
            quotedMsgThumbnailIcon: e
        },
        {
            type: "interactive",
            subtype: undefined,
            quotedMsgThumbnailIcon: r("WAWebInteractiveQuotedMsgThumbnailIcon")
        },
        {
            type: "interactive_response",
            subtype: undefined,
            quotedMsgThumbnailIcon: null
        },
        {
            type: "keep_in_chat",
            subtype: undefined,
            quotedMsgThumbnailIcon: null
        },
        {
            type: "list",
            subtype: undefined,
            quotedMsgThumbnailIcon: r("WAWebListQuotedMsgThumbnailIcon")
        },
        {
            type: "list_response",
            subtype: undefined,
            quotedMsgThumbnailIcon: null
        },
        {
            type: "loading_media",
            subtype: "loading_image",
            quotedMsgThumbnailIcon: null
        },
        {
            type: "loading_media",
            subtype: "loading_video",
            quotedMsgThumbnailIcon: null
        },
        {
            type: "location",
            subtype: undefined,
            quotedMsgThumbnailIcon: r("WAWebLocationQuotedMsgThumbnailIcon")
        },
        {
            type: "message_edit_encrypted",
            subtype: "message_edit",
            quotedMsgThumbnailIcon: null
        },
        {
            type: "message_history_notice",
            subtype: "message_history_notice",
            quotedMsgThumbnailIcon: null
        },
        {
            type: "multi_vcard",
            subtype: undefined,
            quotedMsgThumbnailIcon: r("WAWebMultiVcardQuotedMsgThumbnailIcon")
        },
        {
            type: "music",
            subtype: undefined,
            quotedMsgThumbnailIcon: r("WAWebMusicQuotedMsgThumbnailIcon")
        },
        {
            type: "native_flow",
            subtype: undefined,
            quotedMsgThumbnailIcon: r("WAWebNativeFlowQuotedMsgThumbnailIcon")
        },
        {
            type: "newsletter_admin_invite",
            subtype: undefined,
            quotedMsgThumbnailIcon: null
        },
        {
            type: "newsletter_follower_invite",
            subtype: undefined,
            quotedMsgThumbnailIcon: null
        },
        {
            type: "newsletter_question_response",
            subtype: undefined,
            quotedMsgThumbnailIcon: null
        },
        {
            type: "notification_template",
            subtype: "contact_info_card",
            quotedMsgThumbnailIcon: null
        },
        {
            type: "order",
            subtype: undefined,
            quotedMsgThumbnailIcon: r("WAWebOrderQuotedMsgThumbnailIcon")
        },
        {
            type: "payment",
            subtype: "ciphertext",
            quotedMsgThumbnailIcon: s = r("WAWebPaymentQuotedMsgThumbnailIcon")
        },
        {
            type: "payment",
            subtype: "futureproof",
            quotedMsgThumbnailIcon: s
        },
        {
            type: "payment",
            subtype: "invite",
            quotedMsgThumbnailIcon: s
        },
        {
            type: "payment",
            subtype: "request",
            quotedMsgThumbnailIcon: s
        },
        {
            type: "payment",
            subtype: "send",
            quotedMsgThumbnailIcon: s
        },
        {
            type: "pin_message",
            subtype: undefined,
            quotedMsgThumbnailIcon: null
        },
        {
            type: "pinned_message",
            subtype: undefined,
            quotedMsgThumbnailIcon: null
        },
        {
            type: "poll_add_option_decrypted",
            subtype: undefined,
            quotedMsgThumbnailIcon: null
        },
        {
            type: "poll_add_option_encrypted",
            subtype: undefined,
            quotedMsgThumbnailIcon: null
        },
        {
            type: "poll_creation",
            subtype: undefined,
            quotedMsgThumbnailIcon: null
        },
        {
            type: "poll_edit_encrypted",
            subtype: undefined,
            quotedMsgThumbnailIcon: null
        },
        {
            type: "poll_result_snapshot",
            subtype: undefined,
            quotedMsgThumbnailIcon: null
        },
        {
            type: "poll_update",
            subtype: "poll_vote",
            quotedMsgThumbnailIcon: null
        },
        {
            type: "product",
            subtype: undefined,
            quotedMsgThumbnailIcon: r("WAWebProductQuotedMsgThumbnailIcon")
        },
        {
            type: "protocol",
            subtype: "acp2_system_message",
            quotedMsgThumbnailIcon: null
        },
        {
            type: "protocol",
            subtype: "admin_revoke",
            quotedMsgThumbnailIcon: null
        },
        {
            type: "protocol",
            subtype: "ai_media_collection",
            quotedMsgThumbnailIcon: null
        },
        {
            type: "protocol",
            subtype: "biz_ai_metadata_sync",
            quotedMsgThumbnailIcon: null
        },
        {
            type: "protocol",
            subtype: "bot_feedback",
            quotedMsgThumbnailIcon: null
        },
        {
            type: "protocol",
            subtype: "bot_memu_onboarding",
            quotedMsgThumbnailIcon: null
        },
        {
            type: "protocol",
            subtype: "bot_request_welcome",
            quotedMsgThumbnailIcon: null
        },
        {
            type: "protocol",
            subtype: "ephemeral_setting",
            quotedMsgThumbnailIcon: null
        },
        {
            type: "protocol",
            subtype: "ephemeral_sync_response",
            quotedMsgThumbnailIcon: null
        },
        {
            type: "protocol",
            subtype: "event_edit_decrypted",
            quotedMsgThumbnailIcon: null
        },
        {
            type: "protocol",
            subtype: "hatch_metadata_sync",
            quotedMsgThumbnailIcon: null
        },
        {
            type: "protocol",
            subtype: "history_sync_notification",
            quotedMsgThumbnailIcon: null
        },
        {
            type: "protocol",
            subtype: "limit_sharing_system_message",
            quotedMsgThumbnailIcon: null
        },
        {
            type: "protocol",
            subtype: "member_label",
            quotedMsgThumbnailIcon: null
        },
        {
            type: "protocol",
            subtype: "message_edit",
            quotedMsgThumbnailIcon: null
        },
        {
            type: "protocol",
            subtype: "message_edit_decrypted",
            quotedMsgThumbnailIcon: null
        },
        {
            type: "protocol",
            subtype: "poll_edit_decrypted",
            quotedMsgThumbnailIcon: null
        },
        {
            type: "protocol",
            subtype: "scheduled_message_unschedule",
            quotedMsgThumbnailIcon: null
        },
        {
            type: "protocol",
            subtype: "sender_revoke",
            quotedMsgThumbnailIcon: null
        },
        {
            type: "protocol",
            subtype: "share_phone_number",
            quotedMsgThumbnailIcon: null
        },
        {
            type: "protocol",
            subtype: "status_group_mention_message",
            quotedMsgThumbnailIcon: null
        },
        {
            type: "protocol",
            subtype: "status_mention_message",
            quotedMsgThumbnailIcon: null
        },
        {
            type: "ptt",
            subtype: undefined,
            quotedMsgThumbnailIcon: null
        },
        {
            type: "ptv",
            subtype: undefined,
            quotedMsgThumbnailIcon: e
        },
        {
            type: "quarantined",
            subtype: undefined,
            quotedMsgThumbnailIcon: null
        },
        {
            type: "reaction",
            subtype: undefined,
            quotedMsgThumbnailIcon: null
        },
        {
            type: "reaction_enc",
            subtype: undefined,
            quotedMsgThumbnailIcon: null
        },
        {
            type: "request_phone_number",
            subtype: undefined,
            quotedMsgThumbnailIcon: null
        },
        {
            type: "revoked",
            subtype: "admin",
            quotedMsgThumbnailIcon: null
        },
        {
            type: "revoked",
            subtype: "sender",
            quotedMsgThumbnailIcon: null
        },
        {
            type: "rich_response",
            subtype: undefined,
            quotedMsgThumbnailIcon: null
        },
        {
            type: "sharable_event_invite",
            subtype: undefined,
            quotedMsgThumbnailIcon: null
        },
        {
            type: "status_notification",
            subtype: "status_notification_message",
            quotedMsgThumbnailIcon: null
        },
        {
            type: "sticker",
            subtype: undefined,
            quotedMsgThumbnailIcon: null
        },
        {
            type: "sticker-pack",
            subtype: undefined,
            quotedMsgThumbnailIcon: e
        },
        {
            type: "template_button_reply",
            subtype: undefined,
            quotedMsgThumbnailIcon: null
        },
        {
            type: "unknown",
            subtype: "payment_action_request_declined",
            quotedMsgThumbnailIcon: null
        },
        {
            type: "unknown",
            subtype: "payment_transaction_request_cancelled",
            quotedMsgThumbnailIcon: null
        },
        {
            type: "unknown",
            subtype: "phone",
            quotedMsgThumbnailIcon: null
        },
        {
            type: "unknown",
            subtype: "phone_only_feature",
            quotedMsgThumbnailIcon: null
        },
        {
            type: "unknown",
            subtype: undefined,
            quotedMsgThumbnailIcon: null
        },
        {
            type: "vcard",
            subtype: undefined,
            quotedMsgThumbnailIcon: r("WAWebVcardQuotedMsgThumbnailIcon")
        },
        {
            type: "video",
            subtype: undefined,
            quotedMsgThumbnailIcon: e
        }
    ];
    l.default = u;
}, 98);