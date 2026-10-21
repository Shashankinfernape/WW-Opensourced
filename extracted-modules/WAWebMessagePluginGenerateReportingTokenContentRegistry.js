__d("WAWebMessagePluginGenerateReportingTokenContentRegistry", [
    "WAWebGenerateChatReportingTokenContent",
    "WAWebGenerateMediaReportingTokenContent"
], function(t, n, r, o, a, i, l) {
    let generateReportingTokenContent;
    const s = [
        {
            type: "album",
            subtype: undefined,
            generateReportingTokenContent: null
        },
        {
            type: "audio",
            subtype: undefined,
            generateReportingTokenContent: generateReportingTokenContent = r("WAWebGenerateMediaReportingTokenContent")
        },
        {
            type: "biz_content_placeholder",
            subtype: undefined,
            generateReportingTokenContent: null
        },
        {
            type: "buttons_response",
            subtype: undefined,
            generateReportingTokenContent: null
        },
        {
            type: "chat",
            subtype: "url",
            generateReportingTokenContent: r("WAWebGenerateChatReportingTokenContent")
        },
        {
            type: "chat",
            subtype: undefined,
            generateReportingTokenContent: r("WAWebGenerateChatReportingTokenContent")
        },
        {
            type: "ciphertext",
            subtype: "acp_unavailable_fanout",
            generateReportingTokenContent: null
        },
        {
            type: "ciphertext",
            subtype: "bot_unavailable_fanout",
            generateReportingTokenContent: null
        },
        {
            type: "ciphertext",
            subtype: "fanout",
            generateReportingTokenContent: null
        },
        {
            type: "ciphertext",
            subtype: "hosted_unavailable_fanout",
            generateReportingTokenContent: null
        },
        {
            type: "ciphertext",
            subtype: "view_once_unavailable_fanout",
            generateReportingTokenContent: null
        },
        {
            type: "ciphertext",
            subtype: undefined,
            generateReportingTokenContent: null
        },
        {
            type: "comment",
            subtype: undefined,
            generateReportingTokenContent: null
        },
        {
            type: "debug_placeholder",
            subtype: undefined,
            generateReportingTokenContent: null
        },
        {
            type: "document",
            subtype: undefined,
            generateReportingTokenContent
        },
        {
            type: "event_creation",
            subtype: undefined,
            generateReportingTokenContent: null
        },
        {
            type: "event_edit_encrypted",
            subtype: undefined,
            generateReportingTokenContent: null
        },
        {
            type: "event_response",
            subtype: undefined,
            generateReportingTokenContent: null
        },
        {
            type: "group-history",
            subtype: "message_history_bundle",
            generateReportingTokenContent: null
        },
        {
            type: "groups_v4_invite",
            subtype: undefined,
            generateReportingTokenContent: null
        },
        {
            type: "hsm",
            subtype: undefined,
            generateReportingTokenContent: null
        },
        {
            type: "image",
            subtype: undefined,
            generateReportingTokenContent
        },
        {
            type: "interactive",
            subtype: undefined,
            generateReportingTokenContent
        },
        {
            type: "interactive_response",
            subtype: undefined,
            generateReportingTokenContent: null
        },
        {
            type: "keep_in_chat",
            subtype: undefined,
            generateReportingTokenContent: null
        },
        {
            type: "list",
            subtype: undefined,
            generateReportingTokenContent: null
        },
        {
            type: "list_response",
            subtype: undefined,
            generateReportingTokenContent: null
        },
        {
            type: "loading_media",
            subtype: "loading_image",
            generateReportingTokenContent: null
        },
        {
            type: "loading_media",
            subtype: "loading_video",
            generateReportingTokenContent: null
        },
        {
            type: "location",
            subtype: undefined,
            generateReportingTokenContent: null
        },
        {
            type: "message_edit_encrypted",
            subtype: "message_edit",
            generateReportingTokenContent: null
        },
        {
            type: "message_history_notice",
            subtype: "message_history_notice",
            generateReportingTokenContent: null
        },
        {
            type: "multi_vcard",
            subtype: undefined,
            generateReportingTokenContent: null
        },
        {
            type: "music",
            subtype: undefined,
            generateReportingTokenContent: null
        },
        {
            type: "native_flow",
            subtype: undefined,
            generateReportingTokenContent: null
        },
        {
            type: "newsletter_admin_invite",
            subtype: undefined,
            generateReportingTokenContent: null
        },
        {
            type: "newsletter_follower_invite",
            subtype: undefined,
            generateReportingTokenContent: null
        },
        {
            type: "newsletter_question_response",
            subtype: undefined,
            generateReportingTokenContent: null
        },
        {
            type: "notification_template",
            subtype: "contact_info_card",
            generateReportingTokenContent: null
        },
        {
            type: "order",
            subtype: undefined,
            generateReportingTokenContent: null
        },
        {
            type: "payment",
            subtype: "ciphertext",
            generateReportingTokenContent: null
        },
        {
            type: "payment",
            subtype: "futureproof",
            generateReportingTokenContent: null
        },
        {
            type: "payment",
            subtype: "invite",
            generateReportingTokenContent: null
        },
        {
            type: "payment",
            subtype: "request",
            generateReportingTokenContent: null
        },
        {
            type: "payment",
            subtype: "send",
            generateReportingTokenContent: null
        },
        {
            type: "pin_message",
            subtype: undefined,
            generateReportingTokenContent: null
        },
        {
            type: "pinned_message",
            subtype: undefined,
            generateReportingTokenContent: null
        },
        {
            type: "poll_add_option_decrypted",
            subtype: undefined,
            generateReportingTokenContent: null
        },
        {
            type: "poll_add_option_encrypted",
            subtype: undefined,
            generateReportingTokenContent: null
        },
        {
            type: "poll_creation",
            subtype: undefined,
            generateReportingTokenContent: null
        },
        {
            type: "poll_edit_encrypted",
            subtype: undefined,
            generateReportingTokenContent: null
        },
        {
            type: "poll_result_snapshot",
            subtype: undefined,
            generateReportingTokenContent: null
        },
        {
            type: "poll_update",
            subtype: "poll_vote",
            generateReportingTokenContent: null
        },
        {
            type: "product",
            subtype: undefined,
            generateReportingTokenContent: null
        },
        {
            type: "protocol",
            subtype: "acp2_system_message",
            generateReportingTokenContent: null
        },
        {
            type: "protocol",
            subtype: "admin_revoke",
            generateReportingTokenContent: null
        },
        {
            type: "protocol",
            subtype: "ai_media_collection",
            generateReportingTokenContent: null
        },
        {
            type: "protocol",
            subtype: "biz_ai_metadata_sync",
            generateReportingTokenContent: null
        },
        {
            type: "protocol",
            subtype: "bot_feedback",
            generateReportingTokenContent: null
        },
        {
            type: "protocol",
            subtype: "bot_memu_onboarding",
            generateReportingTokenContent: null
        },
        {
            type: "protocol",
            subtype: "bot_request_welcome",
            generateReportingTokenContent: null
        },
        {
            type: "protocol",
            subtype: "ephemeral_setting",
            generateReportingTokenContent: null
        },
        {
            type: "protocol",
            subtype: "ephemeral_sync_response",
            generateReportingTokenContent: null
        },
        {
            type: "protocol",
            subtype: "event_edit_decrypted",
            generateReportingTokenContent: null
        },
        {
            type: "protocol",
            subtype: "hatch_metadata_sync",
            generateReportingTokenContent: null
        },
        {
            type: "protocol",
            subtype: "history_sync_notification",
            generateReportingTokenContent: null
        },
        {
            type: "protocol",
            subtype: "limit_sharing_system_message",
            generateReportingTokenContent: null
        },
        {
            type: "protocol",
            subtype: "member_label",
            generateReportingTokenContent: null
        },
        {
            type: "protocol",
            subtype: "message_edit",
            generateReportingTokenContent: null
        },
        {
            type: "protocol",
            subtype: "message_edit_decrypted",
            generateReportingTokenContent: null
        },
        {
            type: "protocol",
            subtype: "poll_edit_decrypted",
            generateReportingTokenContent: null
        },
        {
            type: "protocol",
            subtype: "scheduled_message_unschedule",
            generateReportingTokenContent: null
        },
        {
            type: "protocol",
            subtype: "sender_revoke",
            generateReportingTokenContent: null
        },
        {
            type: "protocol",
            subtype: "share_phone_number",
            generateReportingTokenContent: null
        },
        {
            type: "protocol",
            subtype: "status_group_mention_message",
            generateReportingTokenContent: null
        },
        {
            type: "protocol",
            subtype: "status_mention_message",
            generateReportingTokenContent: null
        },
        {
            type: "ptt",
            subtype: undefined,
            generateReportingTokenContent
        },
        {
            type: "ptv",
            subtype: undefined,
            generateReportingTokenContent
        },
        {
            type: "quarantined",
            subtype: undefined,
            generateReportingTokenContent: null
        },
        {
            type: "reaction",
            subtype: undefined,
            generateReportingTokenContent: null
        },
        {
            type: "reaction_enc",
            subtype: undefined,
            generateReportingTokenContent: null
        },
        {
            type: "request_phone_number",
            subtype: undefined,
            generateReportingTokenContent: null
        },
        {
            type: "revoked",
            subtype: "admin",
            generateReportingTokenContent: null
        },
        {
            type: "revoked",
            subtype: "sender",
            generateReportingTokenContent: null
        },
        {
            type: "rich_response",
            subtype: undefined,
            generateReportingTokenContent: null
        },
        {
            type: "sharable_event_invite",
            subtype: undefined,
            generateReportingTokenContent: null
        },
        {
            type: "status_notification",
            subtype: "status_notification_message",
            generateReportingTokenContent: null
        },
        {
            type: "sticker",
            subtype: undefined,
            generateReportingTokenContent
        },
        {
            type: "sticker-pack",
            subtype: undefined,
            generateReportingTokenContent: null
        },
        {
            type: "template_button_reply",
            subtype: undefined,
            generateReportingTokenContent: null
        },
        {
            type: "unknown",
            subtype: "payment_action_request_declined",
            generateReportingTokenContent: null
        },
        {
            type: "unknown",
            subtype: "payment_transaction_request_cancelled",
            generateReportingTokenContent: null
        },
        {
            type: "unknown",
            subtype: "phone",
            generateReportingTokenContent: null
        },
        {
            type: "unknown",
            subtype: "phone_only_feature",
            generateReportingTokenContent: null
        },
        {
            type: "unknown",
            subtype: undefined,
            generateReportingTokenContent: null
        },
        {
            type: "vcard",
            subtype: undefined,
            generateReportingTokenContent: null
        },
        {
            type: "video",
            subtype: undefined,
            generateReportingTokenContent
        }
    ];
    l.default = s;
}, 98);