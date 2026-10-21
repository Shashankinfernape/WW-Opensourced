__d("WAWebMessageGroupNotificationBodyText", [
    "fbt",
    "WALogger",
    "WAWebBotGroupGatingUtils",
    "WAWebChatCommunityUtils",
    "WAWebChatGroupUtils",
    "WAWebContactCollection",
    "WAWebFormatAddNotification",
    "WAWebFormatAllowNonAdminSubGroupCreationNotification",
    "WAWebFormatAnnounceNotification",
    "WAWebFormatCommunityOwnerUpdateNotification",
    "WAWebFormatCreateNotification",
    "WAWebFormatCreatedSubgroupSuggestionNotification",
    "WAWebFormatDeleteNotification",
    "WAWebFormatDescriptionNotification",
    "WAWebFormatEphemeralSetting",
    "WAWebFormatLeaveNotification",
    "WAWebFormatLinkNotification",
    "WAWebFormatMemberAddModeNotification",
    "WAWebFormatMemberLinkModeNotification",
    "WAWebFormatMembershipApprovalNotification",
    "WAWebFormatParticipantNames",
    "WAWebFormatPictureNotification",
    "WAWebFormatPromoteDemoteNotification",
    "WAWebFormatRemoveNotification",
    "WAWebFormatReportToAdminNotification",
    "WAWebFormatRestrictNotification",
    "WAWebFormatSubjectNotification",
    "WAWebFrontendMsgGetters",
    "WAWebGroupAgentAddAttribution",
    "WAWebGroupAgentProfileRouting",
    "WAWebGroupMetadataGetters",
    "WAWebMemberShareGroupHistoryModeFormatSystemMessageText",
    "WAWebMessageCommunityEmptySubgroupWelcome.react",
    "WAWebMessageCommunityEmptySubgroupWelcomeTitle.react",
    "WAWebMessageCommunityGeneralChatAutoAddDisabledNotification.react",
    "WAWebMessageCommunityGeneralChatWelcome.react",
    "WAWebMessageCommunityGeneralChatWelcomeTitle.react",
    "WAWebMessageCommunityLinkGroup.react",
    "WAWebMessageCommunityLinkGroupTitle.react",
    "WAWebMessageCommunitySubgroupWelcome.react",
    "WAWebMessageCommunitySubgroupWelcomeTitle.react",
    "WAWebMessageCommunityWelcomeAdmin.react",
    "WAWebMessageCommunityWelcomeAdminTitle.react",
    "WAWebMessageCommunityWelcomeMember.react",
    "WAWebMessageCommunityWelcomeMemberTitle.react",
    "WAWebMessageCommunityWelcomeSubgroup.react",
    "WAWebMsgModelUtils",
    "WAWebStateUtils",
    "WAWebSystemMessageGatingUtils",
    "WAWebSystemMessagesUtils",
    "WAWebWid",
    "WAWebWidFormat",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    const d = c || (c = o("react"));
    const m = o("WAWebSystemMessageGatingUtils").systemMessageActionTextStylingEnabled();
    function p({ chat, clickable, id }) {
        return id && clickable && o("WAWebGroupAgentProfileRouting").getGroupAgentProfileDestination(id, chat) == null && (!id.isUser() || !o("WAWebChatCommunityUtils").shouldMaskPhoneNumberForChat(chat, o("WAWebContactCollection").ContactCollection.gadd(id)));
    }
    function _({ clickable, isLastMsg, msg }) {
        const { author, body, subtype, templateParams } = msg;
        const h = (msg.recipients ?? []).filter((e)=>e instanceof r("WAWebWid"));
        const y = o("WAWebFrontendMsgGetters").getChat(msg.unsafe());
        const C = o("WAWebMsgModelUtils").getMsgDisplayName(msg.unsafe());
        const unknownUserLogContext = clickable ? "group_system_message" : undefined;
        const authorClickable = author instanceof r("WAWebWid") ? o("WAWebFormatParticipantNames").getFormattedName({
            clickable: p({
                chat: y,
                clickable,
                id: author
            }),
            jid: author,
            tabIndex: "0",
            unknownUserLogContext
        }) : null;
        const S = h[0];
        const subjectClickable = S ? o("WAWebFormatParticipantNames").getFormattedName({
            clickable: p({
                chat: y,
                clickable,
                id: S
            }),
            jid: S,
            tabIndex: "0",
            unknownUserLogContext
        }) : null;
        const participantsClickable = o("WAWebFormatParticipantNames").getFormattedNames(h, clickable && h.length === 1 && !(y.groupMetadata != null && o("WAWebGroupMetadataGetters").getIsCag(y.groupMetadata)) && (!o("WAWebBotGroupGatingUtils").isOpenGroupBotParticipantAddEnabled() || !h[0].isBot()) && o("WAWebGroupAgentProfileRouting").getGroupAgentProfileDestination(h[0], y) == null, undefined, "0", unknownUserLogContext);
        switch(subtype){
            case "add":
                return {
                    l10nBodyTextInstance: o("WAWebFormatAddNotification").formatAddNotification({
                        author,
                        authorClickable,
                        museAgentAddAttribution: o("WAWebGroupAgentAddAttribution").groupAgentAddAttributionFromBody(body),
                        subject: S,
                        subjectClickable,
                        participantsClickable,
                        recipients: h
                    }),
                    isBodyTextClickable: !!authorClickable || !!subjectClickable || !!participantsClickable
                };
            case "remove":
                return {
                    l10nBodyTextInstance: o("WAWebFormatRemoveNotification").formatRemoveNotification({
                        author,
                        authorClickable,
                        subject: S,
                        subjectClickable,
                        participantsClickable
                    })
                };
            case "leave":
                return {
                    l10nBodyTextInstance: o("WAWebFormatLeaveNotification").formatLeaveNotification({
                        body,
                        subject: S,
                        participantsClickable
                    })
                };
            case "picture":
                return {
                    l10nBodyTextInstance: o("WAWebFormatPictureNotification").formatPictureNotification({
                        author,
                        authorClickable,
                        body
                    })
                };
            case "subject":
                {
                    const subjectValue = d.jsx(o("WAWebSystemMessagesUtils").FormattedText, {
                        text: body
                    });
                    return {
                        l10nBodyTextInstance: o("WAWebFormatSubjectNotification").formatSubjectNotification({
                            author,
                            authorClickable,
                            chat: y,
                            subjectValue
                        })
                    };
                }
            case "modify":
                {
                    const k = o("WAWebWidFormat").widToFormattedUser(author);
                    const I = o("WAWebWidFormat").widToFormattedUser(S);
                    if (k === C) {
                        return {
                            l10nBodyTextInstance: s._("{name} changed to {new_number}", [
                                s._param("name", C),
                                s._param("new_number", I)
                            ])
                        };
                    }
                    return {
                        l10nBodyTextInstance: s._("{name} changed their phone number to a new number.", [
                            s._param("name", C)
                        ])
                    };
                }
            case "create":
                return {
                    l10nBodyTextInstance: o("WAWebFormatCreateNotification").formatCreateNotification({
                        chat: y,
                        author,
                        authorClickable,
                        groupSubject: body,
                        groupSubjectAsString: false
                    })
                };
            case "delete":
                return {
                    l10nBodyTextInstance: o("WAWebFormatDeleteNotification").formatDeleteNotification({
                        chat: y
                    })
                };
            case "promote":
            case "demote":
            case "linked_group_promote":
            case "linked_group_demote":
                return {
                    l10nBodyTextInstance: o("WAWebFormatPromoteDemoteNotification").formatPromoteDemoteNotification({
                        subtype,
                        subject: S,
                        subjectClickable,
                        participantsClickable,
                        participantsCount: h.length
                    })
                };
            case "invite":
                if (o("WAWebSystemMessagesUtils").isMe(S)) {
                    return {
                        l10nBodyTextInstance: s._("You joined via an invite link")
                    };
                }
                return {
                    l10nBodyTextInstance: s._("{name} joined via an invite link", [
                        s._param("name", subjectClickable)
                    ])
                };
            case "revoke_invite":
                if (o("WAWebSystemMessagesUtils").isMe(author)) {
                    return {
                        l10nBodyTextInstance: m ? s._("You reset this group's invite link") : s._("You reset this group's invite link. Click to view the new invite link")
                    };
                }
                return {
                    l10nBodyTextInstance: m ? s._("{name} reset this group's invite link", [
                        s._param("name", authorClickable)
                    ]) : s._("{name} reset this group's invite link. Click to view the new invite link", [
                        s._param("name", authorClickable)
                    ])
                };
            case "description":
                return {
                    l10nBodyTextInstance: o("WAWebFormatDescriptionNotification").formatDescriptionNotification({
                        author,
                        authorClickable
                    })
                };
            case "parent_group_description":
                return {
                    l10nBodyTextInstance: o("WAWebFormatDescriptionNotification").formatDescriptionNotification({
                        author,
                        authorClickable,
                        isParentGroup: true
                    })
                };
            case "announce":
                return {
                    l10nBodyTextInstance: o("WAWebFormatAnnounceNotification").formatAnnounceNotification({
                        author,
                        authorClickable,
                        body
                    })
                };
            case "restrict":
                return {
                    l10nBodyTextInstance: o("WAWebFormatRestrictNotification").formatRestrictNotification({
                        author,
                        authorClickable,
                        templateParams
                    })
                };
            case "no_frequently_forwarded":
                if (body === "on") {
                    if (o("WAWebSystemMessagesUtils").isMe(author)) {
                        return {
                            l10nBodyTextInstance: s._("You changed this group's settings to not allow messages that have been forwarded many times.")
                        };
                    }
                    return {
                        l10nBodyTextInstance: s._("{name} changed this group's settings to not allow messages that have been forwarded many times.", [
                            s._param("name", authorClickable)
                        ])
                    };
                }
                if (o("WAWebSystemMessagesUtils").isMe(author)) {
                    return {
                        l10nBodyTextInstance: s._("You changed this group's settings to allow messages that have been forwarded many times.")
                    };
                }
                return {
                    l10nBodyTextInstance: s._("{name} changed this group's settings to allow messages that have been forwarded many times.", [
                        s._param("name", authorClickable)
                    ])
                };
            case "announce_msg_bounce":
                return {
                    l10nBodyTextInstance: s._("Only admins can message this group.")
                };
            case "v4_add_invite_sent":
                return {
                    l10nBodyTextInstance: s._("You invited {participants}", [
                        s._param("participants", participantsClickable)
                    ])
                };
            case "v4_add_invite_join":
                return {
                    l10nBodyTextInstance: s._("{participants} joined using your invite", [
                        s._param("participants", participantsClickable)
                    ])
                };
            case "ephemeral":
                return {
                    l10nBodyTextInstance: o("WAWebFormatEphemeralSetting").formatEphemeralSetting(o("WAWebStateUtils").unproxy(msg.unsafe()))
                };
            case "initial_pHash_mismatch":
            case "default_sub_group_promote":
            case "default_sub_group_demote":
                if (o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(y)) {
                    return {
                        l10nBodyTextInstance: m ? s._("Community members have changed") : s._("Community members have changed. Click to view")
                    };
                }
                return {
                    l10nBodyTextInstance: m ? s._("Group members have changed") : s._("Group members have changed. Click to view")
                };
            case "growth_locked":
                return {
                    l10nBodyTextInstance: m ? s._("Invite via link became unavailable") : s._("Invite via link became unavailable. Click to learn more")
                };
            case "growth_unlocked":
                return {
                    l10nBodyTextInstance: m ? s._("Invite via link became available again") : s._("Invite via link became available again. Click to view the new invite link.")
                };
            case "linked_group_join":
            case "parent_group_link":
            case "sibling_group_link":
            case "sub_group_link":
            case "parent_group_unlink":
            case "sibling_group_unlink":
            case "delete_parent_group":
            case "delete_parent_group_unlink":
            case "sub_group_unlink":
            case "integrity_parent_group_unlink":
            case "auto_add":
            case "default_sub_group_admin_add":
            case "invite_auto_add":
                return {
                    l10nBodyTextInstance: o("WAWebFormatLinkNotification").formatLinkNotification({
                        author,
                        clickable,
                        subject: S,
                        subtype,
                        templateParams
                    })
                };
            case "community_create":
                return {
                    l10nBodyTextInstance: isLastMsg ? o("WAWebMessageCommunityWelcomeAdminTitle.react").communityWelcomeAdminTitle({
                        author,
                        chat: y,
                        templateParams
                    }) : d.jsx(o("WAWebMessageCommunityWelcomeAdmin.react").MessageCommunityWelcomeAdmin, {
                        author,
                        chat: y,
                        templateParams
                    })
                };
            case "community_participant_add_rich":
            case "community_invite_rich":
            case "community_invite_auto_add_rich":
                return {
                    l10nBodyTextInstance: isLastMsg ? o("WAWebMessageCommunityWelcomeMemberTitle.react").communityWelcomeMemberTitle() : d.jsx(o("WAWebMessageCommunityWelcomeMember.react").MessageCommunityWelcomeMember, {
                        templateParams,
                        clickable,
                        author,
                        chat: y
                    })
                };
            case "subgroup_admin_triggered_auto_add":
            case "subgroup_admin_triggered_invite_auto_add":
                return {
                    l10nBodyTextInstance: isLastMsg ? o("WAWebMessageCommunityWelcomeMemberTitle.react").communityWelcomeMemberTitle() : d.jsx(r("WAWebMessageCommunityWelcomeSubgroup.react"), {
                        templateParams
                    })
                };
            case "sub_group_participant_add_rich":
            case "sub_group_invite_rich":
                return {
                    l10nBodyTextInstance: isLastMsg ? o("WAWebMessageCommunitySubgroupWelcomeTitle.react").communitySubgroupWelcomeTitle({
                        templateParams,
                        clickable,
                        author
                    }) : d.jsx(o("WAWebMessageCommunitySubgroupWelcome.react").MessageCommunitySubgroupWelcome, {
                        chat: y,
                        author,
                        templateParams,
                        clickable
                    })
                };
            case "community_link_parent_group_rich":
                return {
                    l10nBodyTextInstance: isLastMsg ? o("WAWebMessageCommunityLinkGroupTitle.react").communityLinkGroupTitle({
                        templateParams,
                        clickable,
                        author
                    }) : d.jsx(o("WAWebMessageCommunityLinkGroup.react").MessageCommunityLinkGroup, {
                        chat: y,
                        author,
                        templateParams,
                        clickable
                    })
                };
            case "ephemeral_keep_in_chat":
                return {
                    l10nBodyTextInstance: m ? s._("Disappearing messages now support keeping messages in the chat.") : s._("Disappearing messages now support keeping messages in the chat. Click to learn more.")
                };
            case "membership_approval_mode":
            case "membership_approval_request":
            case "created_membership_requests":
                return {
                    l10nBodyTextInstance: o("WAWebFormatMembershipApprovalNotification").formatMembershipApprovalNotification(subtype, author, templateParams)
                };
            case "allow_admin_reports":
                return {
                    l10nBodyTextInstance: o("WAWebFormatReportToAdminNotification").formatReportToAdminNotification(author, templateParams)
                };
            case "allow_non_admin_sub_group_creation":
                return {
                    l10nBodyTextInstance: r("WAWebFormatAllowNonAdminSubGroupCreationNotification")(y, templateParams)
                };
            case "empty_subgroup_create":
                return {
                    l10nBodyTextInstance: isLastMsg ? o("WAWebMessageCommunityEmptySubgroupWelcomeTitle.react").communityEmptySubgroupWelcomeTitle(y.formattedTitle) : d.jsx(r("WAWebMessageCommunityEmptySubgroupWelcome.react"), {
                        templateParams,
                        subgroupChat: y
                    })
                };
            case "member_add_mode":
                {
                    let T;
                    const D = !!((T = y.groupMetadata) != null && T.participants.iAmAdmin());
                    return {
                        l10nBodyTextInstance: r("WAWebFormatMemberAddModeNotification")(author, D, templateParams)
                    };
                }
            case "member_link_mode":
                {
                    let x;
                    const $ = !!((x = y.groupMetadata) != null && x.participants.iAmAdmin());
                    return {
                        l10nBodyTextInstance: r("WAWebFormatMemberLinkModeNotification")(author, $, templateParams)
                    };
                }
            case "join_flood_notification":
                {
                    let P;
                    const N = !!((P = y.groupMetadata) != null && P.participants.iAmAdmin());
                    if (N) {
                        return {
                            l10nBodyTextInstance: s._("Multiple people have joined using a group link")
                        };
                    }
                    return {
                        l10nBodyTextInstance: null
                    };
                }
            case "created_subgroup_suggestion":
                return {
                    l10nBodyTextInstance: r("WAWebFormatCreatedSubgroupSuggestionNotification")(author, templateParams, clickable)
                };
            case "general_chat_add":
                return {
                    l10nBodyTextInstance: isLastMsg ? o("WAWebMessageCommunityGeneralChatWelcomeTitle.react").communityGeneralChatWelcomeTitle(y.formattedTitle) : d.jsx(r("WAWebMessageCommunityGeneralChatWelcome.react"), {
                        templateParams,
                        subgroupChat: y,
                        author
                    })
                };
            case "general_chat_auto_add_disabled":
                return {
                    l10nBodyTextInstance: o("WAWebMessageCommunityGeneralChatAutoAddDisabledNotification.react").communityGeneralChatAutoAddDisabledNotification(y.formattedTitle, templateParams)
                };
            case "community_owner_update":
                return {
                    l10nBodyTextInstance: o("WAWebFormatCommunityOwnerUpdateNotification").formatCommunityOwnerUpdateNotification({
                        author,
                        templateParams,
                        clickable
                    })
                };
            case "is_capi_hosted_group":
                {
                    if (y.groupMetadata?.hasCapi === true) {
                        return {
                            l10nBodyTextInstance: "Test capi notification for group chat"
                        };
                    }
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "wa:groupNotification:not implemented yet"
                    ])));
                    break;
                }
            case "hidden_group":
                return {
                    l10nBodyTextInstance: s._("You set the group visibility to hidden")
                };
            case "member_share_group_history_mode":
                return {
                    l10nBodyTextInstance: r("WAWebMemberShareGroupHistoryModeFormatSystemMessageText")({
                        msg: msg.unsafe(),
                        options: {}
                    })
                };
            default:
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "wa:groupNotification:unknown message subtype: ",
                    ""
                ])), subtype);
                break;
        }
        return {
            l10nBodyTextInstance: null
        };
    }
    l.getMsgTypeAndGroupBodyText = _;
}, 226);