__d("WAWebMessagePluginGenerateWebMessageInfoRegistry", [
    "WAWebGenerateRevokeWebMessageInfo",
    "WAWebGenerateWebMessageInfo"
], function(t, n, r, o, a, i, l) {
    let generateWebMessageInfo;
    const s = [
        {
            type: "album",
            subtype: undefined,
            generateWebMessageInfo: generateWebMessageInfo = r("WAWebGenerateWebMessageInfo")
        },
        {
            type: "audio",
            subtype: undefined,
            generateWebMessageInfo
        },
        {
            type: "biz_content_placeholder",
            subtype: undefined,
            generateWebMessageInfo: null
        },
        {
            type: "buttons_response",
            subtype: undefined,
            generateWebMessageInfo: null
        },
        {
            type: "chat",
            subtype: "url",
            generateWebMessageInfo
        },
        {
            type: "chat",
            subtype: undefined,
            generateWebMessageInfo
        },
        {
            type: "ciphertext",
            subtype: "acp_unavailable_fanout",
            generateWebMessageInfo: null
        },
        {
            type: "ciphertext",
            subtype: "bot_unavailable_fanout",
            generateWebMessageInfo: null
        },
        {
            type: "ciphertext",
            subtype: "fanout",
            generateWebMessageInfo: null
        },
        {
            type: "ciphertext",
            subtype: "hosted_unavailable_fanout",
            generateWebMessageInfo: null
        },
        {
            type: "ciphertext",
            subtype: "view_once_unavailable_fanout",
            generateWebMessageInfo: null
        },
        {
            type: "ciphertext",
            subtype: undefined,
            generateWebMessageInfo: null
        },
        {
            type: "comment",
            subtype: undefined,
            generateWebMessageInfo: null
        },
        {
            type: "debug_placeholder",
            subtype: undefined,
            generateWebMessageInfo: null
        },
        {
            type: "document",
            subtype: undefined,
            generateWebMessageInfo
        },
        {
            type: "event_creation",
            subtype: undefined,
            generateWebMessageInfo
        },
        {
            type: "event_edit_encrypted",
            subtype: undefined,
            generateWebMessageInfo: null
        },
        {
            type: "event_response",
            subtype: undefined,
            generateWebMessageInfo: null
        },
        {
            type: "group-history",
            subtype: "message_history_bundle",
            generateWebMessageInfo: null
        },
        {
            type: "groups_v4_invite",
            subtype: undefined,
            generateWebMessageInfo: null
        },
        {
            type: "hsm",
            subtype: undefined,
            generateWebMessageInfo: null
        },
        {
            type: "image",
            subtype: undefined,
            generateWebMessageInfo
        },
        {
            type: "interactive",
            subtype: undefined,
            generateWebMessageInfo: null
        },
        {
            type: "interactive_response",
            subtype: undefined,
            generateWebMessageInfo: null
        },
        {
            type: "keep_in_chat",
            subtype: undefined,
            generateWebMessageInfo: null
        },
        {
            type: "list",
            subtype: undefined,
            generateWebMessageInfo: null
        },
        {
            type: "list_response",
            subtype: undefined,
            generateWebMessageInfo: null
        },
        {
            type: "loading_media",
            subtype: "loading_image",
            generateWebMessageInfo: null
        },
        {
            type: "loading_media",
            subtype: "loading_video",
            generateWebMessageInfo: null
        },
        {
            type: "location",
            subtype: undefined,
            generateWebMessageInfo
        },
        {
            type: "message_edit_encrypted",
            subtype: "message_edit",
            generateWebMessageInfo: null
        },
        {
            type: "message_history_notice",
            subtype: "message_history_notice",
            generateWebMessageInfo: null
        },
        {
            type: "multi_vcard",
            subtype: undefined,
            generateWebMessageInfo
        },
        {
            type: "music",
            subtype: undefined,
            generateWebMessageInfo: null
        },
        {
            type: "native_flow",
            subtype: undefined,
            generateWebMessageInfo: null
        },
        {
            type: "newsletter_admin_invite",
            subtype: undefined,
            generateWebMessageInfo: null
        },
        {
            type: "newsletter_follower_invite",
            subtype: undefined,
            generateWebMessageInfo: null
        },
        {
            type: "newsletter_question_response",
            subtype: undefined,
            generateWebMessageInfo: null
        },
        {
            type: "notification_template",
            subtype: "contact_info_card",
            generateWebMessageInfo: null
        },
        {
            type: "order",
            subtype: undefined,
            generateWebMessageInfo: null
        },
        {
            type: "payment",
            subtype: "ciphertext",
            generateWebMessageInfo: null
        },
        {
            type: "payment",
            subtype: "futureproof",
            generateWebMessageInfo: null
        },
        {
            type: "payment",
            subtype: "invite",
            generateWebMessageInfo: null
        },
        {
            type: "payment",
            subtype: "request",
            generateWebMessageInfo: null
        },
        {
            type: "payment",
            subtype: "send",
            generateWebMessageInfo: null
        },
        {
            type: "pin_message",
            subtype: undefined,
            generateWebMessageInfo: null
        },
        {
            type: "pinned_message",
            subtype: undefined,
            generateWebMessageInfo: null
        },
        {
            type: "poll_add_option_decrypted",
            subtype: undefined,
            generateWebMessageInfo: null
        },
        {
            type: "poll_add_option_encrypted",
            subtype: undefined,
            generateWebMessageInfo: null
        },
        {
            type: "poll_creation",
            subtype: undefined,
            generateWebMessageInfo
        },
        {
            type: "poll_edit_encrypted",
            subtype: undefined,
            generateWebMessageInfo: null
        },
        {
            type: "poll_result_snapshot",
            subtype: undefined,
            generateWebMessageInfo: null
        },
        {
            type: "poll_update",
            subtype: "poll_vote",
            generateWebMessageInfo: null
        },
        {
            type: "product",
            subtype: undefined,
            generateWebMessageInfo: null
        },
        {
            type: "protocol",
            subtype: "acp2_system_message",
            generateWebMessageInfo: null
        },
        {
            type: "protocol",
            subtype: "admin_revoke",
            generateWebMessageInfo: null
        },
        {
            type: "protocol",
            subtype: "ai_media_collection",
            generateWebMessageInfo: null
        },
        {
            type: "protocol",
            subtype: "biz_ai_metadata_sync",
            generateWebMessageInfo: null
        },
        {
            type: "protocol",
            subtype: "bot_feedback",
            generateWebMessageInfo: null
        },
        {
            type: "protocol",
            subtype: "bot_memu_onboarding",
            generateWebMessageInfo: null
        },
        {
            type: "protocol",
            subtype: "bot_request_welcome",
            generateWebMessageInfo: null
        },
        {
            type: "protocol",
            subtype: "ephemeral_setting",
            generateWebMessageInfo: null
        },
        {
            type: "protocol",
            subtype: "ephemeral_sync_response",
            generateWebMessageInfo: null
        },
        {
            type: "protocol",
            subtype: "event_edit_decrypted",
            generateWebMessageInfo: null
        },
        {
            type: "protocol",
            subtype: "hatch_metadata_sync",
            generateWebMessageInfo: null
        },
        {
            type: "protocol",
            subtype: "history_sync_notification",
            generateWebMessageInfo: null
        },
        {
            type: "protocol",
            subtype: "limit_sharing_system_message",
            generateWebMessageInfo: null
        },
        {
            type: "protocol",
            subtype: "member_label",
            generateWebMessageInfo: null
        },
        {
            type: "protocol",
            subtype: "message_edit",
            generateWebMessageInfo: null
        },
        {
            type: "protocol",
            subtype: "message_edit_decrypted",
            generateWebMessageInfo: null
        },
        {
            type: "protocol",
            subtype: "poll_edit_decrypted",
            generateWebMessageInfo: null
        },
        {
            type: "protocol",
            subtype: "scheduled_message_unschedule",
            generateWebMessageInfo: null
        },
        {
            type: "protocol",
            subtype: "sender_revoke",
            generateWebMessageInfo: null
        },
        {
            type: "protocol",
            subtype: "share_phone_number",
            generateWebMessageInfo: null
        },
        {
            type: "protocol",
            subtype: "status_group_mention_message",
            generateWebMessageInfo: null
        },
        {
            type: "protocol",
            subtype: "status_mention_message",
            generateWebMessageInfo: null
        },
        {
            type: "ptt",
            subtype: undefined,
            generateWebMessageInfo
        },
        {
            type: "ptv",
            subtype: undefined,
            generateWebMessageInfo
        },
        {
            type: "quarantined",
            subtype: undefined,
            generateWebMessageInfo: null
        },
        {
            type: "reaction",
            subtype: undefined,
            generateWebMessageInfo: null
        },
        {
            type: "reaction_enc",
            subtype: undefined,
            generateWebMessageInfo: null
        },
        {
            type: "request_phone_number",
            subtype: undefined,
            generateWebMessageInfo: null
        },
        {
            type: "revoked",
            subtype: "admin",
            generateWebMessageInfo: r("WAWebGenerateRevokeWebMessageInfo")
        },
        {
            type: "revoked",
            subtype: "sender",
            generateWebMessageInfo: r("WAWebGenerateRevokeWebMessageInfo")
        },
        {
            type: "rich_response",
            subtype: undefined,
            generateWebMessageInfo: null
        },
        {
            type: "sharable_event_invite",
            subtype: undefined,
            generateWebMessageInfo: null
        },
        {
            type: "status_notification",
            subtype: "status_notification_message",
            generateWebMessageInfo: null
        },
        {
            type: "sticker",
            subtype: undefined,
            generateWebMessageInfo
        },
        {
            type: "sticker-pack",
            subtype: undefined,
            generateWebMessageInfo: null
        },
        {
            type: "template_button_reply",
            subtype: undefined,
            generateWebMessageInfo: null
        },
        {
            type: "unknown",
            subtype: "payment_action_request_declined",
            generateWebMessageInfo: null
        },
        {
            type: "unknown",
            subtype: "payment_transaction_request_cancelled",
            generateWebMessageInfo: null
        },
        {
            type: "unknown",
            subtype: "phone",
            generateWebMessageInfo: null
        },
        {
            type: "unknown",
            subtype: "phone_only_feature",
            generateWebMessageInfo: null
        },
        {
            type: "unknown",
            subtype: undefined,
            generateWebMessageInfo: null
        },
        {
            type: "vcard",
            subtype: undefined,
            generateWebMessageInfo
        },
        {
            type: "video",
            subtype: undefined,
            generateWebMessageInfo
        }
    ];
    l.default = s;
}, 98);