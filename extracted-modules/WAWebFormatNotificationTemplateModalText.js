__d("WAWebFormatNotificationTemplateModalText", [
    "fbt",
    "WAWebABProps",
    "WAWebABPropsInternalNumber",
    "WAWebDisplayedNameIsBizName",
    "WAWebFrontendMsgGetters",
    "WAWebGetBusinessNameFromMsg",
    "WAWebMsgGetters",
    "WAWebMsgModelUtils",
    "WAWebOrderGatingUtils",
    "WAWebSupportChatStrings",
    "WAWebWid",
    "WAWebWidToFormattedNameOrNumber",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const { id, subtype } = e;
        switch(subtype){
            case "non_verified_transition":
                return s._("The business account for {businessName} has registered as a standard user account and may no longer belong to the business.", [
                    s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))
                ]);
            case "unverified_transition":
                return s._("The business account you're chatting with may belong to {businessName}. WhatsApp hasn't verified their name yet.", [
                    s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))
                ]);
            case "verified_transition":
                return s._("To help you connect with businesses, we have verified that the business account you're chatting with belongs to {businessName}.", [
                    s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))
                ]);
            case "verified_low_unknown":
                return s._("The business account you're chatting with may belong to {businessName}. WhatsApp hasn't verified their name yet.", [
                    s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))
                ]);
            case "verified_high":
                return s._("To help you connect with businesses, we have verified that the business account you're chatting with belongs to {businessName}.", [
                    s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))
                ]);
            case "verified_initial_unknown":
                return s._("{businessName} may be a business account, but WhatsApp hasn't verified their name yet.", [
                    s._param("businessName", o("WAWebMsgModelUtils").getMsgDisplayName(e))
                ]);
            case "verified_initial_low":
                return s._("WhatsApp has made changes to the business account types. \"Confirmed business\" will now be labelled as \"Business account\".");
            case "verified_initial_high":
                return s._("WhatsApp has made changes to the business account types. \"Verified business\" will now be labelled as \"Official business account\".");
            case "verified_transition_any_to_none":
                return s._("This account was previously a business account and has now registered as a standard account. It may no longer belong to the business.");
            case "verified_transition_any_to_high":
                return s._("WhatsApp has made changes to the business account types. \"Verified business\" will now be labelled as \"Official business account\".");
            case "verified_transition_high_to_low":
                return s._("WhatsApp is no longer able to verify that this is the account for \"{businessName}\".", [
                    s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))
                ]);
            case "verified_transition_high_to_unknown":
                return s._("WhatsApp is no longer able to verify that this is the account for \"{businessName}\".", [
                    s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))
                ]);
            case "verified_transition_unknown_to_low":
                return s._("WhatsApp has made changes to the business account types. This \"Confirmed business\" will now be labelled as \"Business account\".");
            case "verified_transition_low_to_unknown":
                return s._("WhatsApp is no longer able to confirm that this is the account for \"{businessName}\".", [
                    s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))
                ]);
            case "verified_transition_none_to_low":
                return s._("This account has registered as a business account and WhatsApp has confirmed that this is the account for \"{businessName}\".", [
                    s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))
                ]);
            case "verified_transition_none_to_unknown":
                return s._("{businessName} registered as a business account, but WhatsApp hasn't verified their name yet.", [
                    s._param("businessName", o("WAWebMsgModelUtils").getMsgDisplayName(e))
                ]);
            case "biz_verified_transition_top_to_bottom":
                return s._("WhatsApp is no longer able to verify that this is the official business account of \"{businessName}\".", [
                    s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))
                ]);
            case "biz_verified_transition_bottom_to_top":
                return s._("WhatsApp has verified that this is the official business account of \"{businessName}\".", [
                    s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))
                ]);
            case "biz_intro_top":
                {
                    const a = r("WAWebGetBusinessNameFromMsg")(e);
                    const i = r("WAWebWid").isOfficialBizAccount(id.remote);
                    if (r("WAWebDisplayedNameIsBizName")(id.remote, a)) {
                        if (i) {
                            return s._("This is the official business account of \"WhatsApp\".");
                        }
                        return s._("WhatsApp has verified that this is the official business account of \"{businessName}\".", [
                            s._param("businessName", a)
                        ]);
                    }
                    if (i) {
                        return s._("This is the official business account of \"WhatsApp\". This account is saved with a different name in your address book.");
                    }
                    return s._("WhatsApp has verified that this is the official business account of \"{businessName}\". This account is saved with a different name in your address book.", [
                        s._param("businessName", a)
                    ]);
                }
            case "biz_intro_bottom":
                return s._("\"{businessName}\" registered as a business account, but WhatsApp hasn’t verified their name yet.", [
                    s._param("businessName", r("WAWebWidToFormattedNameOrNumber")(id.remote))
                ]);
            case "biz_name_change":
                return s._("WhatsApp has verified that this official business account changed its name and now uses the name \"{businessName}\".", [
                    s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))
                ]);
            case "biz_move_to_consumer_app":
                return s._("This account was previously a business account but has now registered as a standard account and may no longer belong to the business.");
            case "biz_two_tier_migration_top":
                {
                    const l = r("WAWebGetBusinessNameFromMsg")(e);
                    if (r("WAWebDisplayedNameIsBizName")(id.remote, l)) {
                        return s._("WhatsApp has verified that this is the official business account of \"{businessName}\".", [
                            s._param("businessName", l)
                        ]);
                    }
                    return s._("WhatsApp has verified that this is the official business account of \"{businessName}\". This account is saved with a different name in your address book.", [
                        s._param("businessName", l)
                    ]);
                }
            case "biz_two_tier_migration_bottom":
                return s._("\"{businessName}\" registered as a business account, but WhatsApp hasn’t verified their name yet.", [
                    s._param("businessName", r("WAWebWidToFormattedNameOrNumber")(id.remote))
                ]);
            case "blue_msg_bsp_fb_to_bsp_premise":
            case "blue_msg_bsp_fb_unverified_to_bsp_premise_verified":
            case "blue_msg_bsp_fb_verified_to_bsp_premise_unverified":
            case "blue_msg_bsp_premise_unverified":
            case "blue_msg_bsp_premise_verified":
            case "blue_msg_consumer_to_bsp_premise_unverified":
            case "blue_msg_self_fb_to_bsp_premise":
            case "blue_msg_self_fb_unverified_to_bsp_premise_verified":
            case "blue_msg_self_fb_verified_to_bsp_premise_unverified":
            case "blue_msg_self_premise_to_bsp_premise":
            case "blue_msg_unverified_to_bsp_premise_verified":
            case "blue_msg_verified_to_bsp_premise_unverified":
                return s._("WhatsApp secures messages while they're being delivered to and from the companies that store and manage this chat for {businessName}. Contact {businessName} for more information on their privacy practices.", [
                    s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))
                ]);
            case "blue_msg_consumer_to_self_premise_unverified":
                return s._("This chat is with a business account.");
            case "blue_msg_bsp_fb_to_self_fb":
            case "blue_msg_bsp_fb_unverified":
            case "blue_msg_bsp_fb_unverified_to_self_fb_verified":
            case "blue_msg_bsp_fb_verified":
            case "blue_msg_bsp_fb_verified_to_self_fb_unverified":
            case "blue_msg_consumer_to_bsp_fb_unverified":
            case "blue_msg_consumer_to_self_fb_unverified":
            case "blue_msg_self_fb_unverified":
            case "blue_msg_to_bsp_fb":
            case "blue_msg_to_self_fb":
            case "blue_msg_unverified_to_bsp_fb_verified":
            case "blue_msg_unverified_to_self_fb_verified":
            case "blue_msg_verified_to_bsp_fb_unverified":
            case "blue_msg_verified_to_self_fb_unverified":
                return s._("WhatsApp secures messages while they're being delivered to and from Facebook, where this chat is stored and managed for {businessName}. Contact {businessName} for more information on their privacy practices.", [
                    s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))
                ]);
            case "blue_msg_self_fb_verified":
                {
                    const c = o("WAWebABPropsInternalNumber").getIsInternalNumber(o("WAWebFrontendMsgGetters").getChat(e).id.user);
                    const p = r("WAWebGetBusinessNameFromMsg")(e);
                    if (c) {
                        return s._("WhatsApp secures messages while they're being delivered to and from Facebook, where this chat is stored and managed for {businessName}.", [
                            s._param("businessName", p)
                        ]);
                    }
                    return s._("WhatsApp secures messages while they're being delivered to and from Facebook, where this chat is stored and managed for {businessName}. Contact {businessName} for more information on their privacy practices.", [
                        s._param("businessName", p)
                    ]);
                }
            case "blue_msg_self_premise_unverified":
                return s._("{businessName} is registered as a business account.", [
                    s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))
                ]);
            case "blue_msg_self_premise_verified":
                {
                    const _ = r("WAWebGetBusinessNameFromMsg")(e);
                    if (r("WAWebDisplayedNameIsBizName")(id.remote, _)) {
                        return s._("{businessName} is a verified account.", [
                            s._param("businessName", _)
                        ]);
                    }
                    return s._("{businessName} is a verified account. It's saved as a different name in your contacts.", [
                        s._param("businessName", _)
                    ]);
                }
            case "blue_msg_bsp_fb_verified_to_self_premise_unverified":
            case "blue_msg_bsp_premise_verified_to_self_premise_unverified":
            case "blue_msg_self_fb_verified_to_self_premise_unverified":
            case "blue_msg_verified_to_unverified":
                return s._("{businessName} is no longer a verified account.", [
                    s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))
                ]);
            case "blue_msg_bsp_fb_unverified_to_self_premise_verified":
            case "blue_msg_bsp_premise_unverified_to_self_premise_verified":
            case "blue_msg_self_fb_unverified_to_self_premise_verified":
            case "blue_msg_unverified_to_verified":
                {
                    const f = r("WAWebGetBusinessNameFromMsg")(e);
                    if (r("WAWebDisplayedNameIsBizName")(id.remote, f)) {
                        return s._("This chat is with {businessName}'s verified account.", [
                            s._param("businessName", f)
                        ]);
                    }
                    return s._("This chat is with {businessName}'s verified account. The account is saved as a different name in your contacts.", [
                        s._param("businessName", f)
                    ]);
                }
            case "is_capi_hosted_group":
                return <><div className="x1603h9y x1w7chpp">{s._("WhatsApp secures your messages with the business and other members in this group.")}</div><br/>{s._("You are always in control of the conversation. You can stop chatting with this business or block them at any time.")}</>;
            case "support_system_message":
                return d(o("WAWebMsgGetters").getIsIAS(e), o("WAWebMsgGetters").getIsCAPISupport(e) || id.remote.isSupportAgentBot());
            case "biz_privacy_mode_init_fb":
            case "biz_privacy_mode_to_fb":
                return d(o("WAWebMsgGetters").getIsIAS(e), o("WAWebMsgGetters").getIsCAPISupport(e));
            case "biz_privacy_mode_init_bsp":
            case "biz_privacy_mode_to_bsp":
                return m();
            case "order_ephemeral_exemption":
                if (o("WAWebOrderGatingUtils").isOrderContentOptimizationEnabled()) {
                    return s._("Charges and payments will not disappear from this chat.");
                }
                return s._("Orders and payments will not disappear from this chat.");
            default:
                return null;
        }
    }
    function d(e = false, t = false) {
        if (e) {
            return <>{s._("This is the official chat of WhatsApp Surveys.")}<br/><br/>{s._("Taking surveys is optional.")}<br/><br/>{s._("If you choose to participate, your responses will be kept private. To learn more about how we use and protect your survey responses, click Learn More.")}</>;
        }
        if (t) {
            return <>{o("WAWebSupportChatStrings").SupportChatSecurityModalText()}<br/><br/>{o("WAWebSupportChatStrings").SupportChatLearnMoreLinkText()}</>;
        }
        return m();
    }
    function m() {
        return <><div className="x1603h9y x1w7chpp">{s._("WhatsApp secures your messages and calls with this business.")}</div><br/>{s._("You are always in control of the conversation. You can stop chatting with this business or block them at any time.")}</>;
    }
    function p() {
        return <>{s._("This is a secure, official chat from WhatsApp. We use it to share tips, make announcements and let you know about new features.")}<br/><br/>{s._("We'll never ask for your personal information.")}</>;
    }
    function _(e = false) {
        const t = s._("This business has chosen to use multiple tools to chat with its customers.");
        const n = s._("Chats between only you and this business are managed by a secure service from Meta.");
        const r = o("WAWebABProps").getABPropConfigValue("coex_calling_enabled");
        if (r) {
            return <>{t}<br/><br/>{n}{e ? null : <><br/><br/>{s._("For group chats and status updates, this business is using the WhatsApp Business app. These communications remain end-to-end encrypted.")}</>}</>;
        }
        return <>{t}<br/><br/>{n}<br/><br/>{s._("For group chats, calls, and status updates, this business is using the WhatsApp Business app. These communications remain end-to-end encrypted.")}</>;
    }
    function f() {
        return <>{s._("You are always in control of the conversation. You can stop chatting with this business or block them at any time.")}<br/></>;
    }
    function g() {
        const e = o("WAWebABProps").getABPropConfigValue("coex_calling_enabled");
        return <>{s._("Your business has chosen to use multiple tools to chat with your customers.")}<br/><br/>{e ? s._("Your business uses a secure service from Meta to manage messages and calls in this and other 1-1 chats.") : s._("Chats between only your business and one other person are managed by a secure service from Meta.")}<br/><br/>{e ? s._("For group chats and status updates, your business is using the WhatsApp Business app. These communications remain end-to-end encrypted.") : s._("For group chats, calls, and status updates, your business is using the WhatsApp Business app. These communications remain end-to-end encrypted.")}</>;
    }
    l.formatNotificationTemplateModalText = c;
    l.formatFbModalText = d;
    l.formatBspAndFbModalText = m;
    l.formatWaChatSecurityModalText = p;
    l.formatCoexSecurityModalText = _;
    l.formatCoexSecurityModalTextLastParagraph = f;
    l.formatCoexSecurityModalTextForYourBusiness = g;
}, 226);