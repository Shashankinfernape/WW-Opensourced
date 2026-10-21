__d("WAWebSpamUtils", [
    "WAWebMsgGetters",
    "WAWebSpamConstants"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return o("WAWebSpamConstants").SUPPORTED_MESSAGE_TYPES_FOR_MESSAGE_LEVEL_REPORTING.has(e);
    }
    function s(e) {
        return o("WAWebSpamConstants").PAID_PARTNERSHIP_LABEL_SUPPORTED_MESSAGE_TYPES.has(e.type) && !o("WAWebMsgGetters").getIsGif(e);
    }
    function u(e) {
        return o("WAWebSpamConstants").SPAM_REPORT_SUPPORTED_MESSAGE_TYPES.has(e);
    }
    function c(e) {
        return o("WAWebSpamConstants").SPAM_REPORT_SUPPORTED_ASSOCIATED_MESSAGE_TYPES.has(e);
    }
    function d(e) {
        switch(e){
            case "album":
                return 0;
            case "audio":
                return 1;
            case "automated_greeting_message":
                return 2;
            case "biz_content_placeholder":
                return 3;
            case "biz-cover-photo":
                return 4;
            case "broadcast_notification":
                return 5;
            case "buttons_response":
                return 6;
            case "call_log":
                return 7;
            case "chat":
                return 8;
            case "ciphertext":
                return 9;
            case "comment":
                return 10;
            case "debug":
                return 11;
            case "debug_placeholder":
                return 12;
            case "document":
                return 13;
            case "e2e_notification":
                return 14;
            case "event_creation":
                return 15;
            case "event_edit_encrypted":
                return 16;
            case "event_response":
                return 17;
            case "gp2":
                return 18;
            case "groups_v4_invite":
                return 19;
            case "guest_upsell_system_msg":
                return 20;
            case "history_bundle":
                return 21;
            case "hsm":
                return 22;
            case "image":
                return 23;
            case "interactive":
                return 24;
            case "interactive_response":
                return 25;
            case "keep_in_chat":
                return 26;
            case "list":
                return 27;
            case "list_response":
                return 28;
            case "location":
                return 29;
            case "multi_vcard":
                return 30;
            case "native_flow":
                return 31;
            case "newsletter_admin_invite":
                return 32;
            case "newsletter_notification":
                return 33;
            case "newsletter_question_response":
                return 34;
            case "notification":
                return 35;
            case "notification_template":
                return 36;
            case "order":
                return 37;
            case "oversized":
                return 38;
            case "payment":
                return 39;
            case "pin_message":
                return 40;
            case "pinned_message":
                return 41;
            case "poll_creation":
                return 42;
            case "poll_result_snapshot":
                return 43;
            case "poll_update":
                return 44;
            case "product":
                return 45;
            case "protocol":
                return 46;
            case "ptt":
                return 47;
            case "ptv":
                return 48;
            case "reaction":
                return 49;
            case "reaction_enc":
                return 50;
            case "request_phone_number":
                return 51;
            case "revoked":
                return 52;
            case "rich_response":
                return 53;
            case "status":
                return 54;
            case "status_notification":
                return 55;
            case "sticker":
                return 56;
            case "sticker-pack":
                return 57;
            case "template_button_reply":
                return 58;
            case "unknown":
                return 59;
            case "vcard":
                return 60;
            case "video":
                return 61;
            case "newsletter_follower_invite":
                return 62;
            case "group-history":
                return 63;
            case "message_history_notice":
                return 64;
            case "quarantined":
                return 65;
            case "message_edit_encrypted":
                return 66;
            case "loading_media":
                return 67;
            case "poll_edit_encrypted":
                return 68;
            case "poll_add_option_encrypted":
                return 69;
            case "poll_add_option_decrypted":
                return 70;
            case "sharable_event_invite":
                return 71;
            case "music":
                return 72;
            default:
                return (()=>{
                    throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
                })();
        }
    }
    l.isMsgTypeSupportedForMsgLevelReporting = e;
    l.isMsgTypeSupportedForPaidPartnershipLabel = s;
    l.isSpamSupportedForMessageType = u;
    l.isSpamSupportedForAssociatedMessageType = c;
    l.msgTypeToReportLocalMessageType = d;
}, 98);