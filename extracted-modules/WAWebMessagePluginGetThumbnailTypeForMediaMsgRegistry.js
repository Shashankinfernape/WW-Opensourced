__d("WAWebMessagePluginGetThumbnailTypeForMediaMsgRegistry", [
    "WAWebGetThumbnailTypeForMediaChatMsg",
    "WAWebGetThumbnailTypeForMediaDocumentMsg",
    "WAWebGetThumbnailTypeForMediaImageMsg",
    "WAWebGetThumbnailTypeForMediaInteractiveMsg",
    "WAWebGetThumbnailTypeForMediaStickerPackMsg",
    "WAWebGetThumbnailTypeForMediaVideoMsg"
], function(t, n, r, o, a, i, l) {
    const e = [
        {
            type: "album",
            subtype: undefined,
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "audio",
            subtype: undefined,
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "biz_content_placeholder",
            subtype: undefined,
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "buttons_response",
            subtype: undefined,
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "chat",
            subtype: "url",
            getThumbnailTypeForMediaMsg: r("WAWebGetThumbnailTypeForMediaChatMsg")
        },
        {
            type: "chat",
            subtype: undefined,
            getThumbnailTypeForMediaMsg: r("WAWebGetThumbnailTypeForMediaChatMsg")
        },
        {
            type: "ciphertext",
            subtype: "acp_unavailable_fanout",
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "ciphertext",
            subtype: "bot_unavailable_fanout",
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "ciphertext",
            subtype: "fanout",
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "ciphertext",
            subtype: "hosted_unavailable_fanout",
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "ciphertext",
            subtype: "view_once_unavailable_fanout",
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "ciphertext",
            subtype: undefined,
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "comment",
            subtype: undefined,
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "debug_placeholder",
            subtype: undefined,
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "document",
            subtype: undefined,
            getThumbnailTypeForMediaMsg: r("WAWebGetThumbnailTypeForMediaDocumentMsg")
        },
        {
            type: "event_creation",
            subtype: undefined,
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "event_edit_encrypted",
            subtype: undefined,
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "event_response",
            subtype: undefined,
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "group-history",
            subtype: "message_history_bundle",
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "groups_v4_invite",
            subtype: undefined,
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "hsm",
            subtype: undefined,
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "image",
            subtype: undefined,
            getThumbnailTypeForMediaMsg: r("WAWebGetThumbnailTypeForMediaImageMsg")
        },
        {
            type: "interactive",
            subtype: undefined,
            getThumbnailTypeForMediaMsg: r("WAWebGetThumbnailTypeForMediaInteractiveMsg")
        },
        {
            type: "interactive_response",
            subtype: undefined,
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "keep_in_chat",
            subtype: undefined,
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "list",
            subtype: undefined,
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "list_response",
            subtype: undefined,
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "loading_media",
            subtype: "loading_image",
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "loading_media",
            subtype: "loading_video",
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "location",
            subtype: undefined,
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "message_edit_encrypted",
            subtype: "message_edit",
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "message_history_notice",
            subtype: "message_history_notice",
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "multi_vcard",
            subtype: undefined,
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "music",
            subtype: undefined,
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "native_flow",
            subtype: undefined,
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "newsletter_admin_invite",
            subtype: undefined,
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "newsletter_follower_invite",
            subtype: undefined,
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "newsletter_question_response",
            subtype: undefined,
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "notification_template",
            subtype: "contact_info_card",
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "order",
            subtype: undefined,
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "payment",
            subtype: "ciphertext",
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "payment",
            subtype: "futureproof",
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "payment",
            subtype: "invite",
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "payment",
            subtype: "request",
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "payment",
            subtype: "send",
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "pin_message",
            subtype: undefined,
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "pinned_message",
            subtype: undefined,
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "poll_add_option_decrypted",
            subtype: undefined,
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "poll_add_option_encrypted",
            subtype: undefined,
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "poll_creation",
            subtype: undefined,
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "poll_edit_encrypted",
            subtype: undefined,
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "poll_result_snapshot",
            subtype: undefined,
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "poll_update",
            subtype: "poll_vote",
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "product",
            subtype: undefined,
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "protocol",
            subtype: "acp2_system_message",
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "protocol",
            subtype: "admin_revoke",
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "protocol",
            subtype: "ai_media_collection",
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "protocol",
            subtype: "biz_ai_metadata_sync",
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "protocol",
            subtype: "bot_feedback",
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "protocol",
            subtype: "bot_memu_onboarding",
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "protocol",
            subtype: "bot_request_welcome",
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "protocol",
            subtype: "ephemeral_setting",
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "protocol",
            subtype: "ephemeral_sync_response",
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "protocol",
            subtype: "event_edit_decrypted",
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "protocol",
            subtype: "hatch_metadata_sync",
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "protocol",
            subtype: "history_sync_notification",
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "protocol",
            subtype: "limit_sharing_system_message",
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "protocol",
            subtype: "member_label",
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "protocol",
            subtype: "message_edit",
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "protocol",
            subtype: "message_edit_decrypted",
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "protocol",
            subtype: "poll_edit_decrypted",
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "protocol",
            subtype: "scheduled_message_unschedule",
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "protocol",
            subtype: "sender_revoke",
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "protocol",
            subtype: "share_phone_number",
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "protocol",
            subtype: "status_group_mention_message",
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "protocol",
            subtype: "status_mention_message",
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "ptt",
            subtype: undefined,
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "ptv",
            subtype: undefined,
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "quarantined",
            subtype: undefined,
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "reaction",
            subtype: undefined,
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "reaction_enc",
            subtype: undefined,
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "request_phone_number",
            subtype: undefined,
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "revoked",
            subtype: "admin",
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "revoked",
            subtype: "sender",
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "rich_response",
            subtype: undefined,
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "sharable_event_invite",
            subtype: undefined,
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "status_notification",
            subtype: "status_notification_message",
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "sticker",
            subtype: undefined,
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "sticker-pack",
            subtype: undefined,
            getThumbnailTypeForMediaMsg: r("WAWebGetThumbnailTypeForMediaStickerPackMsg")
        },
        {
            type: "template_button_reply",
            subtype: undefined,
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "unknown",
            subtype: "payment_action_request_declined",
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "unknown",
            subtype: "payment_transaction_request_cancelled",
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "unknown",
            subtype: "phone",
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "unknown",
            subtype: "phone_only_feature",
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "unknown",
            subtype: undefined,
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "vcard",
            subtype: undefined,
            getThumbnailTypeForMediaMsg: null
        },
        {
            type: "video",
            subtype: undefined,
            getThumbnailTypeForMediaMsg: r("WAWebGetThumbnailTypeForMediaVideoMsg")
        }
    ];
    l.default = e;
}, 98);