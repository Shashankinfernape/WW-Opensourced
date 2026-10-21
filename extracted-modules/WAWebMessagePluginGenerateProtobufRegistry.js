__d("WAWebMessagePluginGenerateProtobufRegistry", [
    "WAWebAlbumsGenerateAlbumMessageProto",
    "WAWebEventsGenerateEventCreationMessageProto",
    "WAWebEventsGenerateEventEditMessageProto",
    "WAWebEventsGenerateEventResponseMessageProto",
    "WAWebGenerateAiMediaCollectionProtocolMsg",
    "WAWebGenerateBotFeedbackProtocolMessageProto",
    "WAWebGenerateBotRequestWelcomeMessageProto",
    "WAWebGenerateButtonsResponseMessageProto",
    "WAWebGenerateChatMessageProto",
    "WAWebGenerateDocumentMessageProto",
    "WAWebGenerateEncCommentMessageProto",
    "WAWebGenerateEphemeralSyncResponseMessageProto",
    "WAWebGenerateExtendedTextMessageProtoUtils",
    "WAWebGenerateGroupInviteMessageProto",
    "WAWebGenerateHatchMetadataSyncProto",
    "WAWebGenerateImageMessageProto",
    "WAWebGenerateInteractiveMessageProto",
    "WAWebGenerateInteractiveResponseMessageProto",
    "WAWebGenerateKeepInChatMessageProto",
    "WAWebGenerateListMessageProto",
    "WAWebGenerateListResponseMessageProto",
    "WAWebGenerateLocationMessageProto",
    "WAWebGenerateMessageHistoryBundleProto",
    "WAWebGenerateMessageHistoryNoticeProto",
    "WAWebGenerateMultiVcardMessageProto",
    "WAWebGenerateNativeFlowButtonsMessageProto",
    "WAWebGenerateNewsletterAdminInviteMessageProto",
    "WAWebGenerateNewsletterFollowerInviteMessageProto",
    "WAWebGenerateNotSupportedMessageProto",
    "WAWebGenerateOrderMessageProto",
    "WAWebGeneratePinMessageProto",
    "WAWebGeneratePollResultSnapshotMessageProto",
    "WAWebGenerateProductMessageProto",
    "WAWebGenerateProtocolEphemeralSettingMessageProto",
    "WAWebGenerateProtocolHistorySyncNotificationMessageProto",
    "WAWebGenerateProtocolLimitSharingMessageProto",
    "WAWebGenerateProtocolMemberLabelMessageProto",
    "WAWebGenerateProtocolMessageEditProto",
    "WAWebGenerateProtocolRevokeMessageProto",
    "WAWebGenerateProtocolSharePhoneNumberMessageProto",
    "WAWebGenerateReactionEncMessageProto",
    "WAWebGenerateRequestPaymentMessageProto",
    "WAWebGenerateRequestPhoneNumberMessageProto",
    "WAWebGenerateRichResponseMessageProto",
    "WAWebGenerateSecretMessageEditProto",
    "WAWebGenerateSendPaymentMessageProto",
    "WAWebGenerateStickerPackMessageProto",
    "WAWebGenerateTemplateButtonReplyMessageProto",
    "WAWebGenerateVcardMessageProto",
    "WAWebGenerateVideoMessageProto",
    "WAWebMusicGenerateMusicMessageProto",
    "WAWebPollsGeneratePollCreationMessageProto",
    "WAWebPollsGeneratePollEditMessageProto",
    "WAWebPollsGeneratePollVoteMessageProto",
    "WAWebPttGenerateAudioOrPttMessageProto",
    "WAWebQuestionsGenerateQuestionResponseMessageProto",
    "WAWebReactionsGenerateReactionMessageProto",
    "WAWebStickersGenerateStickerMessageProto"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = [
        {
            type: "album",
            subtype: undefined,
            generateProtobuf: r("WAWebAlbumsGenerateAlbumMessageProto")
        },
        {
            type: "audio",
            subtype: undefined,
            generateProtobuf: r("WAWebPttGenerateAudioOrPttMessageProto")
        },
        {
            type: "biz_content_placeholder",
            subtype: undefined,
            generateProtobuf: e = r("WAWebGenerateNotSupportedMessageProto")
        },
        {
            type: "buttons_response",
            subtype: undefined,
            generateProtobuf: r("WAWebGenerateButtonsResponseMessageProto")
        },
        {
            type: "chat",
            subtype: "url",
            generateProtobuf: r("WAWebGenerateExtendedTextMessageProtoUtils")
        },
        {
            type: "chat",
            subtype: undefined,
            generateProtobuf: r("WAWebGenerateChatMessageProto")
        },
        {
            type: "ciphertext",
            subtype: "acp_unavailable_fanout",
            generateProtobuf: null
        },
        {
            type: "ciphertext",
            subtype: "bot_unavailable_fanout",
            generateProtobuf: null
        },
        {
            type: "ciphertext",
            subtype: "fanout",
            generateProtobuf: null
        },
        {
            type: "ciphertext",
            subtype: "hosted_unavailable_fanout",
            generateProtobuf: null
        },
        {
            type: "ciphertext",
            subtype: "view_once_unavailable_fanout",
            generateProtobuf: null
        },
        {
            type: "ciphertext",
            subtype: undefined,
            generateProtobuf: null
        },
        {
            type: "comment",
            subtype: undefined,
            generateProtobuf: r("WAWebGenerateEncCommentMessageProto")
        },
        {
            type: "debug_placeholder",
            subtype: undefined,
            generateProtobuf: null
        },
        {
            type: "document",
            subtype: undefined,
            generateProtobuf: r("WAWebGenerateDocumentMessageProto")
        },
        {
            type: "event_creation",
            subtype: undefined,
            generateProtobuf: r("WAWebEventsGenerateEventCreationMessageProto")
        },
        {
            type: "event_edit_encrypted",
            subtype: undefined,
            generateProtobuf: r("WAWebEventsGenerateEventEditMessageProto")
        },
        {
            type: "event_response",
            subtype: undefined,
            generateProtobuf: r("WAWebEventsGenerateEventResponseMessageProto")
        },
        {
            type: "group-history",
            subtype: "message_history_bundle",
            generateProtobuf: r("WAWebGenerateMessageHistoryBundleProto")
        },
        {
            type: "groups_v4_invite",
            subtype: undefined,
            generateProtobuf: r("WAWebGenerateGroupInviteMessageProto")
        },
        {
            type: "hsm",
            subtype: undefined,
            generateProtobuf: e
        },
        {
            type: "image",
            subtype: undefined,
            generateProtobuf: r("WAWebGenerateImageMessageProto")
        },
        {
            type: "interactive",
            subtype: undefined,
            generateProtobuf: r("WAWebGenerateInteractiveMessageProto")
        },
        {
            type: "interactive_response",
            subtype: undefined,
            generateProtobuf: r("WAWebGenerateInteractiveResponseMessageProto")
        },
        {
            type: "keep_in_chat",
            subtype: undefined,
            generateProtobuf: r("WAWebGenerateKeepInChatMessageProto")
        },
        {
            type: "list",
            subtype: undefined,
            generateProtobuf: r("WAWebGenerateListMessageProto")
        },
        {
            type: "list_response",
            subtype: undefined,
            generateProtobuf: r("WAWebGenerateListResponseMessageProto")
        },
        {
            type: "loading_media",
            subtype: "loading_image",
            generateProtobuf: null
        },
        {
            type: "loading_media",
            subtype: "loading_video",
            generateProtobuf: null
        },
        {
            type: "location",
            subtype: undefined,
            generateProtobuf: r("WAWebGenerateLocationMessageProto")
        },
        {
            type: "message_edit_encrypted",
            subtype: "message_edit",
            generateProtobuf: r("WAWebGenerateSecretMessageEditProto")
        },
        {
            type: "message_history_notice",
            subtype: "message_history_notice",
            generateProtobuf: r("WAWebGenerateMessageHistoryNoticeProto")
        },
        {
            type: "multi_vcard",
            subtype: undefined,
            generateProtobuf: r("WAWebGenerateMultiVcardMessageProto")
        },
        {
            type: "music",
            subtype: undefined,
            generateProtobuf: r("WAWebMusicGenerateMusicMessageProto")
        },
        {
            type: "native_flow",
            subtype: undefined,
            generateProtobuf: r("WAWebGenerateNativeFlowButtonsMessageProto")
        },
        {
            type: "newsletter_admin_invite",
            subtype: undefined,
            generateProtobuf: r("WAWebGenerateNewsletterAdminInviteMessageProto")
        },
        {
            type: "newsletter_follower_invite",
            subtype: undefined,
            generateProtobuf: r("WAWebGenerateNewsletterFollowerInviteMessageProto")
        },
        {
            type: "newsletter_question_response",
            subtype: undefined,
            generateProtobuf: r("WAWebQuestionsGenerateQuestionResponseMessageProto")
        },
        {
            type: "notification_template",
            subtype: "contact_info_card",
            generateProtobuf: null
        },
        {
            type: "order",
            subtype: undefined,
            generateProtobuf: r("WAWebGenerateOrderMessageProto")
        },
        {
            type: "payment",
            subtype: "ciphertext",
            generateProtobuf: null
        },
        {
            type: "payment",
            subtype: "futureproof",
            generateProtobuf: null
        },
        {
            type: "payment",
            subtype: "invite",
            generateProtobuf: e
        },
        {
            type: "payment",
            subtype: "request",
            generateProtobuf: r("WAWebGenerateRequestPaymentMessageProto")
        },
        {
            type: "payment",
            subtype: "send",
            generateProtobuf: r("WAWebGenerateSendPaymentMessageProto")
        },
        {
            type: "pin_message",
            subtype: undefined,
            generateProtobuf: r("WAWebGeneratePinMessageProto")
        },
        {
            type: "pinned_message",
            subtype: undefined,
            generateProtobuf: null
        },
        {
            type: "poll_add_option_decrypted",
            subtype: undefined,
            generateProtobuf: null
        },
        {
            type: "poll_add_option_encrypted",
            subtype: undefined,
            generateProtobuf: null
        },
        {
            type: "poll_creation",
            subtype: undefined,
            generateProtobuf: r("WAWebPollsGeneratePollCreationMessageProto")
        },
        {
            type: "poll_edit_encrypted",
            subtype: undefined,
            generateProtobuf: r("WAWebPollsGeneratePollEditMessageProto")
        },
        {
            type: "poll_result_snapshot",
            subtype: undefined,
            generateProtobuf: r("WAWebGeneratePollResultSnapshotMessageProto")
        },
        {
            type: "poll_update",
            subtype: "poll_vote",
            generateProtobuf: r("WAWebPollsGeneratePollVoteMessageProto")
        },
        {
            type: "product",
            subtype: undefined,
            generateProtobuf: r("WAWebGenerateProductMessageProto")
        },
        {
            type: "protocol",
            subtype: "acp2_system_message",
            generateProtobuf: null
        },
        {
            type: "protocol",
            subtype: "admin_revoke",
            generateProtobuf: s = r("WAWebGenerateProtocolRevokeMessageProto")
        },
        {
            type: "protocol",
            subtype: "ai_media_collection",
            generateProtobuf: r("WAWebGenerateAiMediaCollectionProtocolMsg")
        },
        {
            type: "protocol",
            subtype: "biz_ai_metadata_sync",
            generateProtobuf: null
        },
        {
            type: "protocol",
            subtype: "bot_feedback",
            generateProtobuf: r("WAWebGenerateBotFeedbackProtocolMessageProto")
        },
        {
            type: "protocol",
            subtype: "bot_memu_onboarding",
            generateProtobuf: null
        },
        {
            type: "protocol",
            subtype: "bot_request_welcome",
            generateProtobuf: r("WAWebGenerateBotRequestWelcomeMessageProto")
        },
        {
            type: "protocol",
            subtype: "ephemeral_setting",
            generateProtobuf: r("WAWebGenerateProtocolEphemeralSettingMessageProto")
        },
        {
            type: "protocol",
            subtype: "ephemeral_sync_response",
            generateProtobuf: r("WAWebGenerateEphemeralSyncResponseMessageProto")
        },
        {
            type: "protocol",
            subtype: "event_edit_decrypted",
            generateProtobuf: null
        },
        {
            type: "protocol",
            subtype: "hatch_metadata_sync",
            generateProtobuf: r("WAWebGenerateHatchMetadataSyncProto")
        },
        {
            type: "protocol",
            subtype: "history_sync_notification",
            generateProtobuf: r("WAWebGenerateProtocolHistorySyncNotificationMessageProto")
        },
        {
            type: "protocol",
            subtype: "limit_sharing_system_message",
            generateProtobuf: r("WAWebGenerateProtocolLimitSharingMessageProto")
        },
        {
            type: "protocol",
            subtype: "member_label",
            generateProtobuf: r("WAWebGenerateProtocolMemberLabelMessageProto")
        },
        {
            type: "protocol",
            subtype: "message_edit",
            generateProtobuf: r("WAWebGenerateProtocolMessageEditProto")
        },
        {
            type: "protocol",
            subtype: "message_edit_decrypted",
            generateProtobuf: null
        },
        {
            type: "protocol",
            subtype: "poll_edit_decrypted",
            generateProtobuf: null
        },
        {
            type: "protocol",
            subtype: "scheduled_message_unschedule",
            generateProtobuf: null
        },
        {
            type: "protocol",
            subtype: "sender_revoke",
            generateProtobuf: s
        },
        {
            type: "protocol",
            subtype: "share_phone_number",
            generateProtobuf: r("WAWebGenerateProtocolSharePhoneNumberMessageProto")
        },
        {
            type: "protocol",
            subtype: "status_group_mention_message",
            generateProtobuf: null
        },
        {
            type: "protocol",
            subtype: "status_mention_message",
            generateProtobuf: null
        },
        {
            type: "ptt",
            subtype: undefined,
            generateProtobuf: r("WAWebPttGenerateAudioOrPttMessageProto")
        },
        {
            type: "ptv",
            subtype: undefined,
            generateProtobuf: r("WAWebGenerateVideoMessageProto")
        },
        {
            type: "quarantined",
            subtype: undefined,
            generateProtobuf: null
        },
        {
            type: "reaction",
            subtype: undefined,
            generateProtobuf: r("WAWebReactionsGenerateReactionMessageProto")
        },
        {
            type: "reaction_enc",
            subtype: undefined,
            generateProtobuf: r("WAWebGenerateReactionEncMessageProto")
        },
        {
            type: "request_phone_number",
            subtype: undefined,
            generateProtobuf: r("WAWebGenerateRequestPhoneNumberMessageProto")
        },
        {
            type: "revoked",
            subtype: "admin",
            generateProtobuf: s
        },
        {
            type: "revoked",
            subtype: "sender",
            generateProtobuf: s
        },
        {
            type: "rich_response",
            subtype: undefined,
            generateProtobuf: r("WAWebGenerateRichResponseMessageProto")
        },
        {
            type: "sharable_event_invite",
            subtype: undefined,
            generateProtobuf: null
        },
        {
            type: "status_notification",
            subtype: "status_notification_message",
            generateProtobuf: null
        },
        {
            type: "sticker",
            subtype: undefined,
            generateProtobuf: r("WAWebStickersGenerateStickerMessageProto")
        },
        {
            type: "sticker-pack",
            subtype: undefined,
            generateProtobuf: r("WAWebGenerateStickerPackMessageProto")
        },
        {
            type: "template_button_reply",
            subtype: undefined,
            generateProtobuf: r("WAWebGenerateTemplateButtonReplyMessageProto")
        },
        {
            type: "unknown",
            subtype: "payment_action_request_declined",
            generateProtobuf: e
        },
        {
            type: "unknown",
            subtype: "payment_transaction_request_cancelled",
            generateProtobuf: e
        },
        {
            type: "unknown",
            subtype: "phone",
            generateProtobuf: null
        },
        {
            type: "unknown",
            subtype: "phone_only_feature",
            generateProtobuf: null
        },
        {
            type: "unknown",
            subtype: undefined,
            generateProtobuf: null
        },
        {
            type: "vcard",
            subtype: undefined,
            generateProtobuf: r("WAWebGenerateVcardMessageProto")
        },
        {
            type: "video",
            subtype: undefined,
            generateProtobuf: r("WAWebGenerateVideoMessageProto")
        }
    ];
    l.default = u;
}, 98);