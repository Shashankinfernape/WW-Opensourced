__d("WAWebFormatNotificationTemplateText", [
    "fbt",
    "WAWebABProps",
    "WAWebABPropsInternalNumber",
    "WAWebBizBroadcastFormatStatusText",
    "WAWebBotBaseGating",
    "WAWebBotExposedName",
    "WAWebBotGroupGatingUtils",
    "WAWebBotProfileCollection",
    "WAWebBotSupportGating",
    "WAWebBotTypes",
    "WAWebBotUtils",
    "WAWebCTWAGatingUtils",
    "WAWebChatAssignmentUtils",
    "WAWebClock",
    "WAWebCommonMsgTemplateParamsUtils",
    "WAWebContactCollection",
    "WAWebCurrencyUtils",
    "WAWebDisplayedNameIsBizName",
    "WAWebFbtAppName",
    "WAWebFormatChangeLidTemplateText",
    "WAWebFormatChangeUsernameTemplateText",
    "WAWebFormatEphemeralSetting",
    "WAWebFormatParticipantNames",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebGetBusinessNameFromMsg",
    "WAWebGroupAgentPrivacyNoticeKind",
    "WAWebHostedGroupUtils",
    "WAWebLabelConstants",
    "WAWebLimitSharingUIUtils",
    "WAWebMsgGetters",
    "WAWebOrderGatingUtils",
    "WAWebResolveBotProfile",
    "WAWebSupportChatStrings",
    "WAWebSystemMessageGatingUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "WAWebWidToFormattedNameOrNumber",
    "nullthrows"
], function(t, n, r, o, a, i, l, s) {
    function e(e, t, n) {
        const r = {
            text: u(e, t, n)
        };
        const o = X(e);
        if (o != null) {
            r.ctaText = o;
        }
        return r;
    }
    function u(e, t, n) {
        const { templateParams, subtype } = e;
        switch(subtype){
            case "non_verified_transition":
                return s._("The business account you were chatting with is now a standard account. Click for more info.");
            case "unverified_transition":
                return s._("The business account you're chatting with is now unverified. Click for more info.");
            case "verified_transition":
                return s._("The business account you're chatting with is now verified. Click for more info.");
            case "verified_low_unknown":
                return s._("This chat is with an unverified business account. Click for more info.");
            case "verified_high":
                return s._("This chat is with a verified business account. Click for more info.");
            case "verified_initial_unknown":
                return s._("This chat may be with a business account. Click for more info.");
            case "verified_initial_low":
                return s._("This chat is with the business account for \"{businessName}\". Click for more info.", [
                    s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))
                ]);
            case "verified_initial_high":
                return s._("This chat is with the verified business account for \"{businessName}\". Click for more info.", [
                    s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))
                ]);
            case "verified_transition_any_to_none":
                return s._("This business account has now registered as a standard account. Click for more info.");
            case "verified_transition_any_to_high":
                return s._("The business account you're chatting with is now verified as \"{businessName}\". Click for more info.", [
                    s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))
                ]);
            case "verified_transition_high_to_low":
                return s._("The business account you're chatting with is no longer verified as \"{businessName}\". Click for more info.", [
                    s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))
                ]);
            case "verified_transition_high_to_unknown":
                return s._("The business account you're chatting with is no longer verified as \"{businessName}\". Click for more info.", [
                    s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))
                ]);
            case "verified_transition_unknown_to_low":
                return s._("The business account you're chatting with belongs to \"{businessName}\".", [
                    s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))
                ]);
            case "verified_transition_low_to_unknown":
                return s._("The business account you're chatting with is no longer confirmed as \"{businessName}\". Click for more info.", [
                    s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))
                ]);
            case "verified_transition_none_to_low":
                return s._("This account has registered as a business account. Click for more info.");
            case "verified_transition_none_to_unknown":
                return s._("This chat may be with a business account. Click for more info.");
            case "change_number":
                return m(e, templateParams);
            case "sender_invite":
                return p(e, templateParams);
            case "receiver_invite":
                return _(e);
            case "masked_thread_created":
                return s._("Your phone number is not shared in this chat. Businesses who have your number in their contacts will be able to see it. Click to learn more");
            case "pnh_thread_promotion":
                return s._("Sending a message shares your phone number.");
            case "cag_masked_thread_created":
                return s._("This chat has added privacy for your phone number. Click to learn more.");
            case "payment_transaction_status_update_failed":
                return s._("Your payment to {receiverName} {relativeTime} couldn't complete.", [
                    s._param("receiverName", r("WAWebWidToFormattedNameOrNumber")(templateParams[0])),
                    s._param("relativeTime", o("WAWebClock").Clock.paymentTimestampStr(e.t))
                ]);
            case "payment_transaction_status_update_refunded":
                return s._("Your payment to {receiverName} was refunded {relativeTime}.", [
                    s._param("receiverName", r("WAWebWidToFormattedNameOrNumber")(templateParams[0])),
                    s._param("relativeTime", o("WAWebClock").Clock.paymentTimestampStr(e.t))
                ]);
            case "payment_transaction_status_update_refund_failed":
                return s._("Your payment to {receiverName} {relativeTime} couldn't complete.", [
                    s._param("receiverName", r("WAWebWidToFormattedNameOrNumber")(templateParams[0])),
                    s._param("relativeTime", o("WAWebClock").Clock.paymentTimestampStr(e.t))
                ]);
            case "payment_transaction_request_cancelled":
                return f(e, templateParams);
            case "payment_transaction_status_receiver_pending_setup":
                return g(templateParams);
            case "payment_action_request_declined":
                return h(e, templateParams);
            case "payment_action_request_expired":
                return y(templateParams);
            case "payment_invite_account_set_up":
                return C(templateParams);
            case "biz_verified_transition_top_to_bottom":
                return s._("{businessName} is no longer a verified account. Click to learn more.", [
                    s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))
                ]);
            case "biz_verified_transition_bottom_to_top":
                return s._("{businessName} is now a verified account. Click to learn more.", [
                    s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))
                ]);
            case "biz_intro_top":
                return S(e);
            case "biz_intro_bottom":
                return s._("This chat is with a business account. Click for more info.");
            case "biz_name_change":
                return R(e);
            case "biz_move_to_consumer_app":
                return s._("This business account has now registered as a standard account. Click for more info.");
            case "biz_two_tier_migration_top":
                return s._("This chat is with {businessName}'s verified account. Click for more info.", [
                    s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))
                ]);
            case "biz_two_tier_migration_bottom":
                return s._("This chat is with a business account. Click for more info.");
            case "blue_msg_bsp_fb_to_bsp_premise":
                return s._("{businessName} no longer uses Facebook to manage its WhatsApp conversations. Click to learn how this changes privacy in this chat.", [
                    s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))
                ]);
            case "blue_msg_bsp_fb_to_self_fb":
                return s._("{businessName} now only uses Facebook to manage its WhatsApp conversations. Click to learn how this changes privacy in this chat.", [
                    s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))
                ]);
            case "blue_msg_bsp_fb_to_self_premise":
                return s._("{businessName} no longer uses Facebook or other companies to manage its WhatsApp conversations.", [
                    s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))
                ]);
            case "blue_msg_bsp_fb_unverified":
                return s._("This chat is with a business account that uses Facebook and other companies to manage its WhatsApp conversations. Click to learn more about privacy in this chat.");
            case "blue_msg_bsp_fb_unverified_to_bsp_premise_verified":
                return b(e);
            case "blue_msg_bsp_fb_unverified_to_self_fb_verified":
                return v(e);
            case "blue_msg_bsp_fb_unverified_to_self_premise_verified":
                return s._("{businessName} is now a verified account. This business no longer uses Meta or other companies to manage its WhatsApp conversations. Click to learn more.", [
                    s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))
                ]);
            case "blue_msg_bsp_fb_verified":
                return L(e);
            case "blue_msg_bsp_fb_verified_to_bsp_premise_unverified":
                return E(e);
            case "blue_msg_bsp_fb_verified_to_self_fb_unverified":
                return k(e);
            case "blue_msg_bsp_fb_verified_to_self_premise_unverified":
                return I(e);
            case "blue_msg_bsp_premise_to_self_premise":
                return s._("{businessName} no longer uses other companies to manage its WhatsApp conversations.", [
                    s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))
                ]);
            case "blue_msg_bsp_premise_unverified":
                return s._("This chat is with a business account that uses other companies to manage its WhatsApp conversations. Click to learn more about privacy in this chat.");
            case "blue_msg_bsp_premise_unverified_to_self_premise_verified":
                return s._("{businessName} is now a verified account and no longer uses other companies to manage its WhatsApp conversations. This changes privacy in this chat. Click to learn more.", [
                    s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))
                ]);
            case "blue_msg_bsp_premise_verified":
                return T(e);
            case "blue_msg_bsp_premise_verified_to_self_premise_unverified":
                return D(e);
            case "blue_msg_consumer_to_bsp_fb_unverified":
                return x(e);
            case "blue_msg_consumer_to_bsp_premise_unverified":
                return s._("{businessName} is now registered as a business account that uses other companies to manage its WhatsApp conversations. Click to learn how this changes privacy in this chat.", [
                    s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))
                ]);
            case "blue_msg_consumer_to_self_fb_unverified":
                return s._("{businessName} is now registered as a business account that uses Facebook to manage its WhatsApp conversations. Click to learn how this changes privacy in this chat.", [
                    s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))
                ]);
            case "blue_msg_consumer_to_self_premise_unverified":
                return s._("{businessName} is now registered as a business account. Click to learn more.", [
                    s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))
                ]);
            case "blue_msg_self_fb_to_bsp_premise":
                return s._("{businessName} now uses other companies instead of Facebook to manage its WhatsApp conversations. Click to learn how this changes privacy in this chat.", [
                    s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))
                ]);
            case "blue_msg_self_fb_to_self_premise":
                return s._("{businessName} no longer uses Facebook to manage its WhatsApp conversations.", [
                    s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))
                ]);
            case "blue_msg_self_fb_unverified":
                return s._("This chat is with a business account that uses Facebook to manage its WhatsApp conversations. Click to learn more about privacy in this chat.");
            case "blue_msg_self_fb_unverified_to_bsp_premise_verified":
                return $(e);
            case "blue_msg_self_fb_unverified_to_self_premise_verified":
                return P(e);
            case "blue_msg_self_fb_verified":
                return N(e);
            case "blue_msg_self_fb_verified_to_bsp_premise_unverified":
                return s._("{businessName} is no longer a verified account. The account uses other companies instead of Meta to manage its WhatsApp conversations. This changes privacy in this chat. Click to learn more.", [
                    s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))
                ]);
            case "blue_msg_self_fb_verified_to_self_premise_unverified":
                return s._("{businessName} is no longer a verified account and no longer uses Meta to manage its WhatsApp conversations. This changes privacy in this chat. Click to learn more.", [
                    s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))
                ]);
            case "blue_msg_self_premise_to_bsp_premise":
                return s._("{businessName} now uses other companies to manage its WhatsApp conversations. Click to learn how this changes privacy in this chat.", [
                    s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))
                ]);
            case "blue_msg_self_premise_unverified":
                return s._("This chat is with a business account. Click to learn more.");
            case "blue_msg_self_premise_verified":
                return s._("This chat is with {businessName}'s verified account. Click to learn more.", [
                    s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))
                ]);
            case "blue_msg_to_bsp_fb":
                return s._("{businessName} now uses Facebook and other companies to manage its WhatsApp conversations. Click to learn how this changes privacy in this chat.", [
                    s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))
                ]);
            case "blue_msg_to_consumer":
                return s._("{businessName} is no longer registered as a business account.", [
                    s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))
                ]);
            case "blue_msg_to_self_fb":
                return s._("{businessName} now uses Facebook to manage its WhatsApp conversations. Click to learn how this changes privacy in this chat.", [
                    s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))
                ]);
            case "blue_msg_unverified_to_bsp_fb_verified":
                return M(e);
            case "blue_msg_unverified_to_bsp_premise_verified":
                return w(e);
            case "blue_msg_unverified_to_self_fb_verified":
                return A(e);
            case "blue_msg_unverified_to_verified":
                return F(e);
            case "blue_msg_verified_to_bsp_fb_unverified":
                return s._("{businessName} is no longer a verified account and now uses Meta and other companies to manage its WhatsApp conversations. This changes privacy in this chat. Click to learn more.", [
                    s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))
                ]);
            case "blue_msg_verified_to_bsp_premise_unverified":
                return s._("{businessName} is no longer a verified account and now uses other companies to manage its WhatsApp conversations. This changes privacy in this chat. Click to learn more.", [
                    s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))
                ]);
            case "blue_msg_verified_to_self_fb_unverified":
                return s._("{businessName} is no longer a verified account and now uses Meta to manage its WhatsApp conversations. This changes privacy in this chat. Click to learn more.", [
                    s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))
                ]);
            case "blue_msg_verified_to_unverified":
                return s._("{businessName} is no longer a verified account. Click to learn more.", [
                    s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))
                ]);
            case "biz_privacy_mode_init_fb":
                return O(e);
            case "support_system_message":
                return B();
            case "biz_privacy_mode_to_fb":
                return G(e);
            case "biz_privacy_mode_init_bsp":
                return s._("This business works with other companies to manage this chat. Click to learn more.");
            case "biz_privacy_mode_to_bsp":
                return s._("This business is now working with other companies to manage this chat. Click to learn more.");
            case "block_contact":
                return W(templateParams);
            case "disappearing_mode_update":
                return o("WAWebFormatEphemeralSetting").formatEphemeralSetting(e);
            case "disappearing_mode":
                return o("WAWebFormatEphemeralSetting").getDefaultDisappearingModeSystemMessageText(e);
            case "disappearing_mode_unsupported":
                return o("WAWebFormatEphemeralSetting").getDMUnsupportedSystemMessageText();
            case "chat_assignment":
                return U(templateParams, t);
            case "chat_assignment_unassign":
                return V(t);
            case "order_ephemeral_exemption":
                return H();
            case "bot_init":
                return z(e, n);
            case "bot_invoke_disclaimer":
                return j();
            case "biz_bot_1p_disclosure":
                return q();
            case "biz_bot_3p_disclosure":
                return s._("This AI is from a third-party developer. Meta receives your AI chats to improve its AI quality. Tap to learn more.");
            case "change_lid":
                return o("WAWebFormatChangeLidTemplateText").formatChangeLidLeadTemplateText(e);
            case "change_username":
                return r("WAWebFormatChangeUsernameTemplateText")(e);
            case "saga_init":
                return s._("Messages may be generated by AI and may be inaccurate or inappropriate. Click to learn more.");
            case "biz_account_type_changed_to_hosted":
                return s._("This business is now using a secure service from Meta to manage this chat. Click to learn more.");
            case "biz_me_account_type_is_hosted":
                return s._("Your business uses a secure service from Meta to manage this chat. Click to learn more.");
            case "biz_account_type_is_hosted":
                return s._("This business uses a secure service from Meta to manage this chat. Click to learn more.");
            case "biz_me_account_type_is_hosted_transition":
                return s._("Your business is now using a secure service from Meta to manage this chat. Click to learn more.");
            case "marketing_messages_from_business_stopped":
                return s._("Offers and announcements stopped. Click to resume.");
            case "marketing_messages_from_business_resumed":
                return s._("Offers and announcements resumed. Click to stop.");
            case "marketing_messages_post_send_opt_out":
                return s._("You are getting offers and announcements from {businessName}", [
                    s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))
                ]);
            case "limit_sharing_system_message":
                return o("WAWebLimitSharingUIUtils").getLimitSharingMessageSystemNotificationText(e);
            case "acp2_system_message":
                return o("WAWebLimitSharingUIUtils").getAcp2MessageSystemNotificationText(e);
            case "is_capi_hosted_group":
                return K(e);
            case "biz_automatically_labeled_chat_system_message":
                return Q(e);
            case "biz_per_customer_3pd_data_share_opt_in":
                return d(true);
            case "biz_per_customer_3pd_data_share_opt_out":
                return d(false);
            case "ctwa_consumer_data_sharing_disclosure_system_message":
                return c();
            case "group_transition_to_bot_group":
                return J(templateParams);
            case "biz_broadcast_status":
                return r("WAWebBizBroadcastFormatStatusText")(templateParams);
            default:
                return s._("You received a message on your phone, but your version of {app name} doesn't support it.", [
                    s._param("app name", o("WAWebFbtAppName").fbtWAWebAppShortName())
                ]);
        }
    }
    function c() {
        if (o("WAWebCTWAGatingUtils").shouldShowMetaAdSourceCopy()) {
            return s._("This chat started from an ad on Meta. Click to learn more");
        }
        return s._("This chat started from an ad on Facebook or Instagram. Click to learn more");
    }
    function d(e) {
        if (o("WAWebCTWAGatingUtils").shouldShowMetaAdSourceCopy()) {
            if (e) {
                return s._("This chat started from an ad on Meta. Data sharing for customer-related activities is turned on");
            }
            return s._("This chat started from an ad on Meta. Data sharing for customer-related activities is turned off");
        }
        if (e) {
            return s._("This chat started from an ad on Facebook or Instagram. Data sharing for customer-related activities is turned on");
        }
        return s._("This chat started from an ad on Facebook or Instagram. Data sharing for customer-related activities is turned off");
    }
    function m(e, templateParams) {
        const n = r("nullthrows")(o("WAWebCommonMsgTemplateParamsUtils").interpretMsgTemplateParams({
            type: "change_number",
            templateParams
        }), "interpretMsgTemplateParams: change_number");
        const a = n[0];
        const i = n.length === 4 ? n[2] : null;
        const l = o("WAWebFrontendContactGetters").getFormattedName(o("WAWebContactCollection").ContactCollection.gadd(a));
        const u = r("WAWebWid").equals(o("WAWebFrontendMsgGetters").getChat(e).id, a);
        const c = r("WAWebWid").equals(o("WAWebFrontendMsgGetters").getChat(e).id, i);
        if (u || c) {
            return s._("{name} changed their phone number to a new number.", [
                s._param("name", l)
            ]);
        }
        return s._("{name} changed their phone number. You're currently chatting with their new number.", [
            s._param("name", l)
        ]);
    }
    function p(e, templateParams) {
        const n = o("WAWebFormatParticipantNames").getFormattedName({
            jid: e.from
        });
        if (templateParams.length > 0 && templateParams[0] === "true") {
            return s._("{receiver_name} accepted your invite to join WhatsApp", [
                s._param("receiver_name", n)
            ]);
        }
        return s._("{receiver_name} is new to WhatsApp", [
            s._param("receiver_name", n)
        ]);
    }
    function _(e) {
        const t = o("WAWebFormatParticipantNames").getFormattedName({
            clickable: false,
            jid: e.from
        });
        return s._("We let {sender_name} know you joined!", [
            s._param("sender_name", t)
        ]);
    }
    function f(e, templateParams) {
        const n = r("nullthrows")(o("WAWebCommonMsgTemplateParamsUtils").interpretMsgTemplateParams({
            type: "payment_transaction_request_cancelled",
            templateParams
        }), "interpretMsgTemplateParams: payment_transaction_request_cancelled");
        const a = n[0];
        const i = n[1];
        const l = n[2];
        const u = r("WAWebWidToFormattedNameOrNumber")(a);
        const c = parseInt(l, 10);
        const d = o("WAWebCurrencyUtils").formatAmount1000({
            amount: c,
            currency: i
        });
        if (e.id.fromMe) {
            return s._("_j{\"*\":\"You cancelled your payment request to {contactName} for {currencyAndAmount}\"}", [
                s._plural(c / 1000),
                s._param("contactName", u),
                s._param("currencyAndAmount", d)
            ]);
        }
        return s._("_j{\"*\":\"{contactName} cancelled their payment request for {currencyAndAmount}\"}", [
            s._plural(c / 1000),
            s._param("contactName", u),
            s._param("currencyAndAmount", d)
        ]);
    }
    function g(templateParams) {
        const t = r("nullthrows")(o("WAWebCommonMsgTemplateParamsUtils").interpretMsgTemplateParams({
            type: "payment_transaction_status_receiver_pending_setup",
            templateParams
        }), "interpretMsgTemplateParams: payment_transaction_status_receiver_pending_setup");
        const n = t[0];
        const a = t[1];
        const i = t[2];
        const l = r("WAWebWidToFormattedNameOrNumber")(n);
        const u = parseInt(i, 10);
        const c = o("WAWebCurrencyUtils").formatAmount1000({
            amount: u,
            currency: a
        });
        return s._("_j{\"*\":\"{senderName} sent you {currencyAndAmount}. Use WhatsApp on your phone to accept this transaction.\"}", [
            s._plural(u / 1000),
            s._param("senderName", l),
            s._param("currencyAndAmount", c)
        ]);
    }
    function h(e, templateParams) {
        const n = r("nullthrows")(o("WAWebCommonMsgTemplateParamsUtils").interpretMsgTemplateParams({
            type: "payment_action_request_declined",
            templateParams
        }), "interpretMsgTemplateParams: payment_action_request_declined");
        const a = n[0];
        const i = n[1];
        const l = n[2];
        const u = r("WAWebWidToFormattedNameOrNumber")(a);
        const c = parseInt(l, 10);
        const d = o("WAWebCurrencyUtils").formatAmount1000({
            amount: c,
            currency: i
        });
        if (e.id.fromMe) {
            return s._("_j{\"*\":\"You declined {contactName}'s payment request for {currencyAndAmount}.\"}", [
                s._plural(c / 1000),
                s._param("contactName", u),
                s._param("currencyAndAmount", d)
            ]);
        }
        return s._("_j{\"*\":\"{contactName} declined your payment request for {currencyAndAmount}.\"}", [
            s._plural(c / 1000),
            s._param("contactName", u),
            s._param("currencyAndAmount", d)
        ]);
    }
    function y(templateParams) {
        const t = r("nullthrows")(o("WAWebCommonMsgTemplateParamsUtils").interpretMsgTemplateParams({
            type: "payment_action_request_expired",
            templateParams
        }), "interpretMsgTemplateParams: payment_action_request_expired");
        const n = t[0];
        const a = t[1];
        const i = t[2];
        const l = t[3];
        const u = r("WAWebWidToFormattedNameOrNumber")(n);
        const c = r("WAWebWidToFormattedNameOrNumber")(a);
        const d = parseInt(l, 10);
        const m = o("WAWebCurrencyUtils").formatAmount1000({
            amount: d,
            currency: i
        });
        if (o("WAWebUserPrefsMeUser").isMeAccount(n)) {
            return s._("_j{\"*\":\"Your payment request to {receiverName} for {currencyAndAmount} expired.\"}", [
                s._plural(d / 1000),
                s._param("receiverName", c),
                s._param("currencyAndAmount", m)
            ]);
        }
        return s._("_j{\"*\":\"{senderName}'s payment request for {currencyAndAmount} to you expired.\"}", [
            s._plural(d / 1000),
            s._param("senderName", u),
            s._param("currencyAndAmount", m)
        ]);
    }
    function C(templateParams) {
        const t = r("nullthrows")(o("WAWebCommonMsgTemplateParamsUtils").interpretMsgTemplateParams({
            type: "payment_invite_account_set_up",
            templateParams
        }), "interpretMsgTemplateParams: payment_invite_account_set_up");
        const n = t[0];
        return s._("{invitee} has set up payments", [
            s._param("invitee", r("WAWebWidToFormattedNameOrNumber")(n))
        ]);
    }
    function b(e) {
        const t = e.id;
        const n = r("WAWebGetBusinessNameFromMsg")(e);
        if (r("WAWebDisplayedNameIsBizName")(t.remote, n)) {
            return s._("{businessName} is no longer a verified account.", [
                s._param("businessName", n)
            ]);
        }
        return s._("{businessName} is now a verified account, but it's saved as a different name in your contacts. This business no longer uses Facebook to manage its WhatsApp conversations. Click to learn how this changes privacy in this chat.", [
            s._param("businessName", n)
        ]);
    }
    function v(e) {
        const t = e.id;
        const n = r("WAWebGetBusinessNameFromMsg")(e);
        if (r("WAWebDisplayedNameIsBizName")(t.remote, n)) {
            return s._("{businessName} is now a verified account and only uses Meta to manage its WhatsApp conversations. This changes privacy in this chat. Click to learn more.", [
                s._param("businessName", n)
            ]);
        }
        return s._("{businessName} is now a verified account, but it's saved as a different name in your contacts. This business only uses Meta to manage its WhatsApp conversations. This changes privacy in this chat. Click to learn more.", [
            s._param("businessName", n)
        ]);
    }
    function S(e) {
        const remote = e.id.remote;
        if (r("WAWebWid").isOfficialBizAccount(remote)) {
            return s._("This chat is with WhatsApp's verified account. Click for more info.");
        }
        return s._("This chat is with {businessName}'s verified account. Click for more info.", [
            s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))
        ]);
    }
    function R(e) {
        return s._("This business changed its name to \"{businessName}\". Click for more info.", [
            s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))
        ]);
    }
    function L(e) {
        const t = e.id;
        const n = r("WAWebGetBusinessNameFromMsg")(e);
        if (r("WAWebDisplayedNameIsBizName")(t.remote, n)) {
            return s._("This chat is with {businessName}'s verified account. This account uses Meta and other companies to manage its WhatsApp conversations. Click to learn more about privacy in this chat.", [
                s._param("businessName", n)
            ]);
        }
        return s._("This chat is with {businessName}'s verified account, but it's saved as a different name in your contacts. This business uses Meta and other companies to manage its WhatsApp conversations. Click to learn more about privacy in this chat.", [
            s._param("businessName", n)
        ]);
    }
    function E(e) {
        return s._("{businessName} is no longer a verified account and no longer uses Meta to manage its WhatsApp conversations. This changes privacy in this chat. Click to learn more.", [
            s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))
        ]);
    }
    function k(e) {
        return s._("{businessName} is no longer a verified account and now only uses Meta to manage its WhatsApp conversations. This changes privacy in this chat. Click to learn more.", [
            s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))
        ]);
    }
    function I(e) {
        return s._("{businessName} is no longer a verified account and no longer uses Meta or other companies to manage its WhatsApp conversations. This changes privacy in this chat. Click to learn more.", [
            s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))
        ]);
    }
    function T(e) {
        const t = e.id;
        const n = r("WAWebGetBusinessNameFromMsg")(e);
        if (r("WAWebDisplayedNameIsBizName")(t.remote, n)) {
            return s._("This chat is with {businessName}'s verified account. This account uses other companies to manage its WhatsApp conversations. Click to learn more about privacy in this chat.", [
                s._param("businessName", n)
            ]);
        }
        return s._("This chat is with {businessName}'s verified account, but it's saved as a different name in your contacts. This account uses other companies to manage its WhatsApp conversations. This changes privacy in this chat. Click to learn more.", [
            s._param("businessName", n)
        ]);
    }
    function D(e) {
        return s._("{businessName} is no longer a verified account and no longer uses other companies to manage its WhatsApp conversations. This changes privacy in this chat. Click to learn more.", [
            s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))
        ]);
    }
    function x(e) {
        return s._("{businessName} is now a verified account that uses Meta and other companies to manage its WhatsApp conversations. This changes privacy in this chat. Click to learn more.", [
            s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))
        ]);
    }
    function $(e) {
        const t = e.id;
        const n = r("WAWebGetBusinessNameFromMsg")(e);
        if (r("WAWebDisplayedNameIsBizName")(t.remote, n)) {
            return s._("{businessName} is now a verified account and now uses other companies instead of Meta to manage its WhatsApp conversations. This changes privacy in this chat. Click to learn more.", [
                s._param("businessName", n)
            ]);
        }
        return s._("{businessName} is now a verified account, but it's saved as a different name in your contacts. This account now uses other companies instead of Meta to manage its WhatsApp conversations. This changes privacy in this chat. Click to learn more.", [
            s._param("businessName", n)
        ]);
    }
    function P(e) {
        return s._("{businessName} is now a verified account and no longer uses Meta to manage its WhatsApp conversations. This changes privacy in this chat. Click to learn more.", [
            s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))
        ]);
    }
    function N(e) {
        const t = e.id;
        const n = r("WAWebGetBusinessNameFromMsg")(e);
        const a = o("WAWebABPropsInternalNumber").getIsInternalNumber(o("WAWebFrontendMsgGetters").getChat(e).id.user);
        if (r("WAWebDisplayedNameIsBizName")(t.remote, n)) {
            if (a) {
                return s._("This chat is with the official account of {businessName}. This account uses Facebook to manage its WhatsApp conversations. Click to learn more about privacy in this chat.", [
                    s._param("businessName", n)
                ]);
            }
            return s._("This chat is with the official business account of {businessName}. This business uses Facebook to manage its WhatsApp conversations. Click to learn more about privacy in this chat.", [
                s._param("businessName", n)
            ]);
        }
        if (a) {
            return s._("This chat is with the official account of {businessName}, but it's saved as a different name in your contacts. This account uses Facebook to manage its WhatsApp conversations. Click to learn more about privacy in this chat.", [
                s._param("businessName", n)
            ]);
        }
        return s._("This chat is with the official business account of {businessName}, but it's saved as a different name in your contacts. This business uses Facebook to manage its WhatsApp conversations. Click to learn more about privacy in this chat.", [
            s._param("businessName", n)
        ]);
    }
    function M(e) {
        const t = e.id;
        const n = r("WAWebGetBusinessNameFromMsg")(e);
        if (r("WAWebDisplayedNameIsBizName")(t.remote, n)) {
            return s._("{businessName} is now a verified account that uses Meta and other companies to manage its WhatsApp conversations. This changes privacy in this chat. Click to learn more.", [
                s._param("businessName", n)
            ]);
        }
        return s._("{businessName} is now a verified account, but it's saved as a different name in your contacts. This account uses Meta and other companies to manage its WhatsApp conversations. This changes privacy in this chat. Click to learn more", [
            s._param("businessName", n)
        ]);
    }
    function w(e) {
        const t = e.id;
        const n = r("WAWebGetBusinessNameFromMsg")(e);
        if (r("WAWebDisplayedNameIsBizName")(t.remote, n)) {
            return s._("{businessName} is now a verified account that uses other companies to manage its WhatsApp conversations. This changes privacy in this chat. Click to learn more.", [
                s._param("businessName", n)
            ]);
        }
        return s._("{businessName} is now a verified account, but it's saved as a different name in your contacts. This business uses other companies to manage its WhatsApp conversations. This changes privacy in this chat. Click here to learn more.", [
            s._param("businessName", n)
        ]);
    }
    function A(e) {
        const t = e.id;
        const n = r("WAWebGetBusinessNameFromMsg")(e);
        if (r("WAWebDisplayedNameIsBizName")(t.remote, n)) {
            return s._("{businessName} is now a verified account that uses Meta to manage its WhatsApp conversations. This changes privacy in this chat. Click here to learn more.", [
                s._param("businessName", n)
            ]);
        }
        return s._("{businessName} is now a verified account, but it's saved as a different name in your contacts. This account uses Meta to manage its WhatsApp conversations. This changes privacy in this chat. Click here to learn more.", [
            s._param("businessName", n)
        ]);
    }
    function F(e) {
        return s._("{businessName} is now a verified account. Click to learn more.", [
            s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))
        ]);
    }
    function O(e) {
        if (o("WAWebMsgGetters").getIsCAPISupport(e)) {
            return o("WAWebSupportChatStrings").SupportChatSystemMessage();
        }
        return s._("This business uses a secure service from Meta to manage this chat. Click to learn more.");
    }
    function B() {
        return o("WAWebSupportChatStrings").SupportChatSystemMessage();
    }
    function W(templateParams) {
        if (templateParams[0] === "true") {
            return s._("You blocked this person");
        }
        return s._("You unblocked this person");
    }
    function q() {
        if (o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 3) {
            return s._("AI from Meta receives and generates messages for this business. Click to learn more.");
        }
        if (o("WAWebCTWAGatingUtils").isUpdatedConsumerDisclosureUiBrazilEnabled()) {
            return s._("AI from Meta receives messages and may use them to improve AI quality and generate messages for this business. Click to learn more.");
        }
        if (o("WAWebCTWAGatingUtils").isUpdatedConsumerDisclosureUiRowEnabled() || o("WAWebCTWAGatingUtils").isUpdatedConsumerDisclosureUiIndiaEnabled()) {
            return s._("AI from Meta receives messages to improve AI quality and generate messages for this business. Click to learn more.");
        }
        return s._("AI from Meta receives chats and generates messages for this business. Click to learn more.");
    }
    function U(templateParams, t) {
        const n = r("nullthrows")(o("WAWebCommonMsgTemplateParamsUtils").interpretMsgTemplateParams({
            type: "chat_assignment",
            templateParams
        }), "interpretMsgTemplateParams: chat_assignment");
        const a = n[0];
        if (o("WAWebChatAssignmentUtils").shouldUseChatAssignmentCTA(t)) {
            return s._("Chat assigned to {agent_name}. Click to change", [
                s._param("agent_name", a)
            ]);
        }
        return s._("Chat assigned to {agent_name}", [
            s._param("agent_name", a)
        ]);
    }
    function V(e) {
        if (o("WAWebChatAssignmentUtils").shouldUseChatAssignmentCTA(e)) {
            return s._("Chat was unassigned. Click to change");
        }
        return s._("Chat was unassigned");
    }
    function H() {
        if (o("WAWebOrderGatingUtils").isOrderContentOptimizationEnabled()) {
            return s._("Charges and payments will not disappear from this chat. Click to learn more");
        }
        return s._("Orders and payments will not disappear from this chat. Click to learn more");
    }
    function G(e) {
        if (o("WAWebMsgGetters").getIsIAS(e)) {
            return s._("WhatsApp Surveys uses a secure service from Meta to manage this chat. Click to learn more.");
        }
        return s._("This business is now using a secure service from Meta to manage this chat. Click to learn more.");
    }
    function z(e, t) {
        const n = o("WAWebResolveBotProfile").resolveBotSupportInput(e.id.remote);
        if (o("WAWebBotExposedName").isBotProfileViewOnly(n) || o("WAWebBotSupportGating").isThirdPartyAgent(n)) {
            return s._("Messages in this chat are sent through a secure Meta service. Learn more about how these chats work.");
        }
        if (o("WAWebBotUtils").isBotChannelFBID(e.id.remote)) {
            return s._("Messages are generated by AI. Some may be inaccurate or inappropriate. Learn more.");
        }
        if (t === o("WAWebBotTypes").BotPosingAsProfessionalType.YES) {
            return s._("This is an AI, not a real expert who’s trained or has a license to help people. It is for self-help and can’t replace professional advice, diagnosis, or services. Messages are generated by AI. Some may be inaccurate or inappropriate. Click to learn more.");
        }
        if (o("WAWebBotUtils").isBusinessAssistantBot(e.id.remote)) {
            return s._("Messages are generated by Meta AI business assistant. Some may be inaccurate or inappropriate.");
        }
        return s._("Messages are generated by AI from Meta. Some may be inaccurate or inappropriate. You can improve the quality by sending feedback. Click to learn more.");
    }
    function j() {
        if (o("WAWebBotBaseGating").isBotEnabled()) {
            return s._("Only messages that mention or people share with \u0040Meta AI can be read by Meta. Meta can't read any other messages in this chat. Some responses may be inaccurate or inappropriate. Click to learn more.");
        }
        return s._("Only messages that mention \u0040Meta AI are sent to Meta. Meta can't read any other messages in this chat. Some responses may be inaccurate or inappropriate. Click to learn more.");
    }
    function K(e) {
        const n = o("WAWebFrontendMsgGetters").getChat(e);
        const n_groupMetadata = n.groupMetadata;
        const a = n_groupMetadata?.owner && n_groupMetadata.participants.get(n_groupMetadata.owner)?.contact;
        if (a != null) {
            return o("WAWebHostedGroupUtils").getSecureServicesBannerText(a);
        }
        return "";
    }
    function Q(e) {
        const t = Number(e.templateParams[0]);
        let n = "";
        if (t === o("WAWebLabelConstants").PREDEFINED_LABEL_IDS.DO_NEW_ORDER) {
            n = s._("new order");
        } else if (t === o("WAWebLabelConstants").PREDEFINED_LABEL_IDS.DO_LEAD) {
            n = s._("lead");
        }
        return s._("Chat automatically added to {labelName}", [
            s._param("labelName", n)
        ]);
    }
    function X(e) {
        const e_subtype = e.subtype;
        if (e_subtype === "change_lid") {
            return o("WAWebFormatChangeLidTemplateText").formatChangeLidCtaTemplateText(e);
        }
        if (e_subtype === "group_transition_to_bot_group" && Y(e.templateParams)) {
            return s._("Learn more");
        }
        return null;
    }
    function Y(templateParams) {
        const t = o("WAWebGroupAgentPrivacyNoticeKind").getGroupAgentPrivacyNotice(templateParams);
        const t_kind = t.kind;
        return (t_kind === o("WAWebGroupAgentPrivacyNoticeKind").GroupAgentPrivacyNoticeKind.MUSE || t_kind === o("WAWebGroupAgentPrivacyNoticeKind").GroupAgentPrivacyNoticeKind.GENERIC) && o("WAWebSystemMessageGatingUtils").systemMessageActionTextStylingEnabled();
    }
    function J(templateParams) {
        const t = o("WAWebGroupAgentPrivacyNoticeKind").getGroupAgentPrivacyNotice(templateParams);
        const { agent, kind } = t;
        const a = Y(templateParams);
        if (kind === o("WAWebGroupAgentPrivacyNoticeKind").GroupAgentPrivacyNoticeKind.THIRD_PARTY && agent != null) {
            return te(agent);
        }
        if (kind === o("WAWebGroupAgentPrivacyNoticeKind").GroupAgentPrivacyNoticeKind.MUSE && o("WAWebBotGroupGatingUtils").isMuseGroupAgentRenderingEnabled()) {
            return Z(a);
        }
        if (kind === o("WAWebGroupAgentPrivacyNoticeKind").GroupAgentPrivacyNoticeKind.MUSE || kind === o("WAWebGroupAgentPrivacyNoticeKind").GroupAgentPrivacyNoticeKind.GENERIC) {
            return ee(a);
        }
        return s._("A group member added Meta AI to this chat. Meta can read new messages. Group admins can remove Meta AI at any time. Click to learn more.");
    }
    function Z(e) {
        if (e) {
            return s._("A member added their Muse, an AI agent by Meta. Meta can read new messages in this chat. The Muse owner or admins can remove it anytime");
        }
        return s._("A member added their Muse, an AI agent by Meta. Meta can read new messages in this chat. The Muse owner or admins can remove it anytime. Learn more");
    }
    function ee(e) {
        if (e) {
            return s._("A member added an AI agent to this chat. Messages are sent through a secure Meta service. Admins can remove it anytime");
        }
        return s._("A member added an AI agent to this chat. Messages are sent through a secure Meta service. Admins can remove it anytime. Learn more");
    }
    function te(agent) {
        const n = o("WAWebBotProfileCollection").BotProfileCollection.get(agent)?.name;
        const r = n != null && n !== "" ? n : s._("Unknown account");
        return s._("A group member added {agent_name} to this chat. Meta can read new messages. Group admins can remove {agent_name_repeat} at any time.", [
            s._param("agent_name", r),
            s._param("agent_name_repeat", r)
        ]);
    }
    l.default = e;
}, 226);