__d("WAWebMessagePluginGetAriaLabelForMsgTextComponentRegistry", [
    "WAWebAlbumsAriaLabelForMsgText",
    "WAWebAudioAriaLabelForMsgText",
    "WAWebImageAriaLabelForMsgText",
    "WAWebMultiVcardAriaLabelForMsgText",
    "WAWebPttAriaLabelForMsgText",
    "WAWebPtvAriaLabelForMsgText",
    "WAWebVcardAriaLabelForMsgText",
    "WAWebVideoAriaLabelForMsgText"
], function(t, n, r, o, a, i, l) {
    const e = [
        {
            type: "album",
            subtype: undefined,
            getAriaLabelForMsgTextComponent: r("WAWebAlbumsAriaLabelForMsgText")
        },
        {
            type: "audio",
            subtype: undefined,
            getAriaLabelForMsgTextComponent: r("WAWebAudioAriaLabelForMsgText")
        },
        {
            type: "biz_content_placeholder",
            subtype: undefined,
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "buttons_response",
            subtype: undefined,
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "chat",
            subtype: "url",
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "chat",
            subtype: undefined,
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "ciphertext",
            subtype: "acp_unavailable_fanout",
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "ciphertext",
            subtype: "bot_unavailable_fanout",
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "ciphertext",
            subtype: "fanout",
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "ciphertext",
            subtype: "hosted_unavailable_fanout",
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "ciphertext",
            subtype: "view_once_unavailable_fanout",
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "ciphertext",
            subtype: undefined,
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "comment",
            subtype: undefined,
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "debug_placeholder",
            subtype: undefined,
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "document",
            subtype: undefined,
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "event_creation",
            subtype: undefined,
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "event_edit_encrypted",
            subtype: undefined,
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "event_response",
            subtype: undefined,
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "group-history",
            subtype: "message_history_bundle",
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "groups_v4_invite",
            subtype: undefined,
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "hsm",
            subtype: undefined,
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "image",
            subtype: undefined,
            getAriaLabelForMsgTextComponent: r("WAWebImageAriaLabelForMsgText")
        },
        {
            type: "interactive",
            subtype: undefined,
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "interactive_response",
            subtype: undefined,
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "keep_in_chat",
            subtype: undefined,
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "list",
            subtype: undefined,
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "list_response",
            subtype: undefined,
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "loading_media",
            subtype: "loading_image",
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "loading_media",
            subtype: "loading_video",
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "location",
            subtype: undefined,
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "message_edit_encrypted",
            subtype: "message_edit",
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "message_history_notice",
            subtype: "message_history_notice",
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "multi_vcard",
            subtype: undefined,
            getAriaLabelForMsgTextComponent: r("WAWebMultiVcardAriaLabelForMsgText")
        },
        {
            type: "music",
            subtype: undefined,
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "native_flow",
            subtype: undefined,
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "newsletter_admin_invite",
            subtype: undefined,
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "newsletter_follower_invite",
            subtype: undefined,
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "newsletter_question_response",
            subtype: undefined,
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "notification_template",
            subtype: "contact_info_card",
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "order",
            subtype: undefined,
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "payment",
            subtype: "ciphertext",
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "payment",
            subtype: "futureproof",
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "payment",
            subtype: "invite",
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "payment",
            subtype: "request",
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "payment",
            subtype: "send",
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "pin_message",
            subtype: undefined,
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "pinned_message",
            subtype: undefined,
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "poll_add_option_decrypted",
            subtype: undefined,
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "poll_add_option_encrypted",
            subtype: undefined,
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "poll_creation",
            subtype: undefined,
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "poll_edit_encrypted",
            subtype: undefined,
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "poll_result_snapshot",
            subtype: undefined,
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "poll_update",
            subtype: "poll_vote",
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "product",
            subtype: undefined,
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "protocol",
            subtype: "acp2_system_message",
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "protocol",
            subtype: "admin_revoke",
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "protocol",
            subtype: "ai_media_collection",
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "protocol",
            subtype: "biz_ai_metadata_sync",
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "protocol",
            subtype: "bot_feedback",
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "protocol",
            subtype: "bot_memu_onboarding",
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "protocol",
            subtype: "bot_request_welcome",
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "protocol",
            subtype: "ephemeral_setting",
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "protocol",
            subtype: "ephemeral_sync_response",
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "protocol",
            subtype: "event_edit_decrypted",
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "protocol",
            subtype: "hatch_metadata_sync",
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "protocol",
            subtype: "history_sync_notification",
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "protocol",
            subtype: "limit_sharing_system_message",
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "protocol",
            subtype: "member_label",
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "protocol",
            subtype: "message_edit",
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "protocol",
            subtype: "message_edit_decrypted",
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "protocol",
            subtype: "poll_edit_decrypted",
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "protocol",
            subtype: "scheduled_message_unschedule",
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "protocol",
            subtype: "sender_revoke",
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "protocol",
            subtype: "share_phone_number",
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "protocol",
            subtype: "status_group_mention_message",
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "protocol",
            subtype: "status_mention_message",
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "ptt",
            subtype: undefined,
            getAriaLabelForMsgTextComponent: r("WAWebPttAriaLabelForMsgText")
        },
        {
            type: "ptv",
            subtype: undefined,
            getAriaLabelForMsgTextComponent: r("WAWebPtvAriaLabelForMsgText")
        },
        {
            type: "quarantined",
            subtype: undefined,
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "reaction",
            subtype: undefined,
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "reaction_enc",
            subtype: undefined,
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "request_phone_number",
            subtype: undefined,
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "revoked",
            subtype: "admin",
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "revoked",
            subtype: "sender",
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "rich_response",
            subtype: undefined,
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "sharable_event_invite",
            subtype: undefined,
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "status_notification",
            subtype: "status_notification_message",
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "sticker",
            subtype: undefined,
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "sticker-pack",
            subtype: undefined,
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "template_button_reply",
            subtype: undefined,
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "unknown",
            subtype: "payment_action_request_declined",
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "unknown",
            subtype: "payment_transaction_request_cancelled",
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "unknown",
            subtype: "phone",
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "unknown",
            subtype: "phone_only_feature",
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "unknown",
            subtype: undefined,
            getAriaLabelForMsgTextComponent: null
        },
        {
            type: "vcard",
            subtype: undefined,
            getAriaLabelForMsgTextComponent: r("WAWebVcardAriaLabelForMsgText")
        },
        {
            type: "video",
            subtype: undefined,
            getAriaLabelForMsgTextComponent: r("WAWebVideoAriaLabelForMsgText")
        }
    ];
    l.default = e;
}, 98);