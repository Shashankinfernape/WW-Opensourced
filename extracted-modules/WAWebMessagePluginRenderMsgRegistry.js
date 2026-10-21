__d("WAWebMessagePluginRenderMsgRegistry", [
    "WAWebCommentRenderMsg",
    "WAWebContactInfoCardRenderMsg.react",
    "WAWebStatusMentionRenderMsg.react"
], function(t, n, r, o, a, i, l) {
    const e = [
        {
            type: "album",
            subtype: undefined,
            renderMsg: null
        },
        {
            type: "audio",
            subtype: undefined,
            renderMsg: null
        },
        {
            type: "biz_content_placeholder",
            subtype: undefined,
            renderMsg: null
        },
        {
            type: "buttons_response",
            subtype: undefined,
            renderMsg: null
        },
        {
            type: "chat",
            subtype: "url",
            renderMsg: null
        },
        {
            type: "chat",
            subtype: undefined,
            renderMsg: null
        },
        {
            type: "ciphertext",
            subtype: "acp_unavailable_fanout",
            renderMsg: null
        },
        {
            type: "ciphertext",
            subtype: "bot_unavailable_fanout",
            renderMsg: null
        },
        {
            type: "ciphertext",
            subtype: "fanout",
            renderMsg: null
        },
        {
            type: "ciphertext",
            subtype: "hosted_unavailable_fanout",
            renderMsg: null
        },
        {
            type: "ciphertext",
            subtype: "view_once_unavailable_fanout",
            renderMsg: null
        },
        {
            type: "ciphertext",
            subtype: undefined,
            renderMsg: null
        },
        {
            type: "comment",
            subtype: undefined,
            renderMsg: r("WAWebCommentRenderMsg")
        },
        {
            type: "debug_placeholder",
            subtype: undefined,
            renderMsg: null
        },
        {
            type: "document",
            subtype: undefined,
            renderMsg: null
        },
        {
            type: "event_creation",
            subtype: undefined,
            renderMsg: null
        },
        {
            type: "event_edit_encrypted",
            subtype: undefined,
            renderMsg: null
        },
        {
            type: "event_response",
            subtype: undefined,
            renderMsg: null
        },
        {
            type: "group-history",
            subtype: "message_history_bundle",
            renderMsg: null
        },
        {
            type: "groups_v4_invite",
            subtype: undefined,
            renderMsg: null
        },
        {
            type: "hsm",
            subtype: undefined,
            renderMsg: null
        },
        {
            type: "image",
            subtype: undefined,
            renderMsg: null
        },
        {
            type: "interactive",
            subtype: undefined,
            renderMsg: null
        },
        {
            type: "interactive_response",
            subtype: undefined,
            renderMsg: null
        },
        {
            type: "keep_in_chat",
            subtype: undefined,
            renderMsg: null
        },
        {
            type: "list",
            subtype: undefined,
            renderMsg: null
        },
        {
            type: "list_response",
            subtype: undefined,
            renderMsg: null
        },
        {
            type: "loading_media",
            subtype: "loading_image",
            renderMsg: null
        },
        {
            type: "loading_media",
            subtype: "loading_video",
            renderMsg: null
        },
        {
            type: "location",
            subtype: undefined,
            renderMsg: null
        },
        {
            type: "message_edit_encrypted",
            subtype: "message_edit",
            renderMsg: null
        },
        {
            type: "message_history_notice",
            subtype: "message_history_notice",
            renderMsg: null
        },
        {
            type: "multi_vcard",
            subtype: undefined,
            renderMsg: null
        },
        {
            type: "music",
            subtype: undefined,
            renderMsg: null
        },
        {
            type: "native_flow",
            subtype: undefined,
            renderMsg: null
        },
        {
            type: "newsletter_admin_invite",
            subtype: undefined,
            renderMsg: null
        },
        {
            type: "newsletter_follower_invite",
            subtype: undefined,
            renderMsg: null
        },
        {
            type: "newsletter_question_response",
            subtype: undefined,
            renderMsg: null
        },
        {
            type: "notification_template",
            subtype: "contact_info_card",
            renderMsg: r("WAWebContactInfoCardRenderMsg.react")
        },
        {
            type: "order",
            subtype: undefined,
            renderMsg: null
        },
        {
            type: "payment",
            subtype: "ciphertext",
            renderMsg: null
        },
        {
            type: "payment",
            subtype: "futureproof",
            renderMsg: null
        },
        {
            type: "payment",
            subtype: "invite",
            renderMsg: null
        },
        {
            type: "payment",
            subtype: "request",
            renderMsg: null
        },
        {
            type: "payment",
            subtype: "send",
            renderMsg: null
        },
        {
            type: "pin_message",
            subtype: undefined,
            renderMsg: null
        },
        {
            type: "pinned_message",
            subtype: undefined,
            renderMsg: null
        },
        {
            type: "poll_add_option_decrypted",
            subtype: undefined,
            renderMsg: null
        },
        {
            type: "poll_add_option_encrypted",
            subtype: undefined,
            renderMsg: null
        },
        {
            type: "poll_creation",
            subtype: undefined,
            renderMsg: null
        },
        {
            type: "poll_edit_encrypted",
            subtype: undefined,
            renderMsg: null
        },
        {
            type: "poll_result_snapshot",
            subtype: undefined,
            renderMsg: null
        },
        {
            type: "poll_update",
            subtype: "poll_vote",
            renderMsg: null
        },
        {
            type: "product",
            subtype: undefined,
            renderMsg: null
        },
        {
            type: "protocol",
            subtype: "acp2_system_message",
            renderMsg: null
        },
        {
            type: "protocol",
            subtype: "admin_revoke",
            renderMsg: null
        },
        {
            type: "protocol",
            subtype: "ai_media_collection",
            renderMsg: null
        },
        {
            type: "protocol",
            subtype: "biz_ai_metadata_sync",
            renderMsg: null
        },
        {
            type: "protocol",
            subtype: "bot_feedback",
            renderMsg: null
        },
        {
            type: "protocol",
            subtype: "bot_memu_onboarding",
            renderMsg: null
        },
        {
            type: "protocol",
            subtype: "bot_request_welcome",
            renderMsg: null
        },
        {
            type: "protocol",
            subtype: "ephemeral_setting",
            renderMsg: null
        },
        {
            type: "protocol",
            subtype: "ephemeral_sync_response",
            renderMsg: null
        },
        {
            type: "protocol",
            subtype: "event_edit_decrypted",
            renderMsg: null
        },
        {
            type: "protocol",
            subtype: "hatch_metadata_sync",
            renderMsg: null
        },
        {
            type: "protocol",
            subtype: "history_sync_notification",
            renderMsg: null
        },
        {
            type: "protocol",
            subtype: "limit_sharing_system_message",
            renderMsg: null
        },
        {
            type: "protocol",
            subtype: "member_label",
            renderMsg: null
        },
        {
            type: "protocol",
            subtype: "message_edit",
            renderMsg: null
        },
        {
            type: "protocol",
            subtype: "message_edit_decrypted",
            renderMsg: null
        },
        {
            type: "protocol",
            subtype: "poll_edit_decrypted",
            renderMsg: null
        },
        {
            type: "protocol",
            subtype: "scheduled_message_unschedule",
            renderMsg: null
        },
        {
            type: "protocol",
            subtype: "sender_revoke",
            renderMsg: null
        },
        {
            type: "protocol",
            subtype: "share_phone_number",
            renderMsg: null
        },
        {
            type: "protocol",
            subtype: "status_group_mention_message",
            renderMsg: r("WAWebStatusMentionRenderMsg.react")
        },
        {
            type: "protocol",
            subtype: "status_mention_message",
            renderMsg: r("WAWebStatusMentionRenderMsg.react")
        },
        {
            type: "ptt",
            subtype: undefined,
            renderMsg: null
        },
        {
            type: "ptv",
            subtype: undefined,
            renderMsg: null
        },
        {
            type: "quarantined",
            subtype: undefined,
            renderMsg: null
        },
        {
            type: "reaction",
            subtype: undefined,
            renderMsg: null
        },
        {
            type: "reaction_enc",
            subtype: undefined,
            renderMsg: null
        },
        {
            type: "request_phone_number",
            subtype: undefined,
            renderMsg: null
        },
        {
            type: "revoked",
            subtype: "admin",
            renderMsg: null
        },
        {
            type: "revoked",
            subtype: "sender",
            renderMsg: null
        },
        {
            type: "rich_response",
            subtype: undefined,
            renderMsg: null
        },
        {
            type: "sharable_event_invite",
            subtype: undefined,
            renderMsg: null
        },
        {
            type: "status_notification",
            subtype: "status_notification_message",
            renderMsg: null
        },
        {
            type: "sticker",
            subtype: undefined,
            renderMsg: null
        },
        {
            type: "sticker-pack",
            subtype: undefined,
            renderMsg: null
        },
        {
            type: "template_button_reply",
            subtype: undefined,
            renderMsg: null
        },
        {
            type: "unknown",
            subtype: "payment_action_request_declined",
            renderMsg: null
        },
        {
            type: "unknown",
            subtype: "payment_transaction_request_cancelled",
            renderMsg: null
        },
        {
            type: "unknown",
            subtype: "phone",
            renderMsg: null
        },
        {
            type: "unknown",
            subtype: "phone_only_feature",
            renderMsg: null
        },
        {
            type: "unknown",
            subtype: undefined,
            renderMsg: null
        },
        {
            type: "vcard",
            subtype: undefined,
            renderMsg: null
        },
        {
            type: "video",
            subtype: undefined,
            renderMsg: null
        }
    ];
    l.default = e;
}, 98);