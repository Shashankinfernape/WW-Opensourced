__d("WAWebMsgDataUtils", [
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebBotTypes",
    "WAWebBrazilPaymentStateUpdatePayload",
    "WAWebChatAssignmentGatingUtils",
    "WAWebChatGetters",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebCommonMsgUtils",
    "WAWebCurrentUser",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebSilentProtocolMsg",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebViewModeUtils",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = new Set([
        (s = o("WAWebCommonMsgSubtypeTypes")).MsgSubtype.Create,
        s.MsgSubtype.BbProCreate,
        s.MsgSubtype.ScheduledMessageCreated,
        s.MsgSubtype.BrazilPaymentReceiptAdded
    ]);
    function c(e) {
        const { type, subtype } = e;
        let a;
        if (type === o("WAWebMsgType").MSG_TYPE.GP2) {
            if (subtype === "subject") {
                a = o("WAWebCommonMsgUtils").EventType.NOTEWORTHY;
            } else if (subtype === "add" || subtype === "invite" || subtype === "invite_auto_add" || subtype === "linked_group_join" || subtype === "community_invite_auto_add_rich") {
                if (e.recipients && o("WAWebUserPrefsMeUser").isMePrimary(e.recipients[0])) {
                    a = o("WAWebCommonMsgUtils").EventType.SIGNIFICANT;
                } else {
                    a = o("WAWebCommonMsgUtils").EventType.IGNORE;
                }
            } else if (subtype === "community_owner_update") {
                if (e.recipients && o("WAWebUserPrefsMeUser").isMePrimary(e.recipients[0])) {
                    a = o("WAWebCommonMsgUtils").EventType.DEFAULT;
                } else {
                    a = o("WAWebCommonMsgUtils").EventType.IGNORE;
                }
            } else if (subtype === "linked_group_promote" || subtype === "linked_group_demote") {
                if (r("WAWebWid").isGroup(e.id.remote) && e.recipients && o("WAWebUserPrefsMeUser").isMePrimary(e.recipients[0]) && !o("WAWebUserPrefsMeUser").isMeAccount(e.author)) {
                    a = o("WAWebCommonMsgUtils").EventType.SIGNIFICANT;
                } else {
                    a = o("WAWebCommonMsgUtils").EventType.IGNORE;
                }
            } else if (subtype === "remove") {
                if (e.recipients && o("WAWebUserPrefsMeUser").isMePrimary(e.recipients[0])) {
                    a = o("WAWebCommonMsgUtils").EventType.NOTEWORTHY;
                } else {
                    a = o("WAWebCommonMsgUtils").EventType.IGNORE;
                }
            } else if (subtype === "create" || subtype === "empty_subgroup_create" || subtype === "general_chat_add") {
                a = o("WAWebCommonMsgUtils").EventType.NOTEWORTHY;
            } else if (subtype === "created_subgroup_suggestion") {
                a = o("WAWebCommonMsgUtils").EventType.DEFAULT;
            } else if (subtype === "parent_group_link" || subtype === "auto_add" || subtype === "default_sub_group_admin_add" || subtype === "community_participant_add_rich" || subtype === "subgroup_admin_triggered_auto_add" || subtype === "subgroup_admin_triggered_invite_auto_add" || subtype === "sibling_group_link" || subtype === "community_invite_rich" || subtype === "sub_group_participant_add_rich" || subtype === "sub_group_invite_rich" || subtype === "community_link_parent_group_rich") {
                a = o("WAWebCommonMsgUtils").EventType.SIGNIFICANT;
            } else if (subtype === "membership_approval_request" || subtype === "created_membership_requests" || subtype === "sibling_group_unlink") {
                a = o("WAWebCommonMsgUtils").EventType.NOTEWORTHY;
            } else {
                a = o("WAWebCommonMsgUtils").EventType.IGNORE;
            }
        } else if (type === o("WAWebMsgType").MSG_TYPE.BROADCAST_NOTIFICATION || type === o("WAWebMsgType").MSG_TYPE.NOTIFICATION || type === o("WAWebMsgType").MSG_TYPE.E2E_NOTIFICATION) {
            a = subtype != null && u.has(subtype) ? o("WAWebCommonMsgUtils").EventType.NOTEWORTHY : o("WAWebCommonMsgUtils").EventType.IGNORE;
        } else if (type === o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE && o("WAWebUserPrefsMeUser").isMePrimary(e.from)) {
            a = o("WAWebCommonMsgUtils").EventType.IGNORE;
        } else if (type === o("WAWebMsgType").MSG_TYPE.CALL_LOG) {
            a = e.viewMode === o("WAWebViewMode.flow").ViewModeType.HIDDEN || e.viewMode === o("WAWebViewMode.flow").ViewModeType.CALL_LOG_AD_HOC_GROUP_CALL ? o("WAWebCommonMsgUtils").EventType.IGNORE : d(e);
        } else if (e.broadcast === true) {
            if (r("WAWebWid").isBroadcast(e.id.remote)) {
                a = o("WAWebCommonMsgUtils").EventType.NOTEWORTHY;
            } else {
                a = o("WAWebCommonMsgUtils").EventType.IGNORE;
            }
        } else if (o("WAWebMsgGetters").getIsGroupStatus(e) || o("WAWebMsgGetters").getIsNewsletterStatus(e) || type === o("WAWebMsgType").MSG_TYPE.REVOKED) {
            a = o("WAWebCommonMsgUtils").EventType.IGNORE;
        } else if (r("WAWebWid").isPSA(e.id.remote)) {
            a = e.ack === o("WAWebAck").ACK.RECEIVED ? o("WAWebCommonMsgUtils").EventType.DEFAULT : o("WAWebCommonMsgUtils").EventType.AMBIENT;
        } else if (type === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT || type === o("WAWebMsgType").MSG_TYPE.OVERSIZED) {
            a = o("WAWebCommonMsgUtils").EventType.AMBIENT;
        } else if (type === o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE) {
            if (subtype === "sender_invite" || (subtype === "chat_assignment" || subtype === "chat_assignment_unassign") && o("WAWebChatAssignmentGatingUtils").shouldReorderChatOnAssignment(subtype === "chat_assignment_unassign")) {
                a = o("WAWebCommonMsgUtils").EventType.NOTEWORTHY;
            } else {
                a = o("WAWebCommonMsgUtils").EventType.IGNORE;
            }
        } else if (type === o("WAWebMsgType").MSG_TYPE.PROTOCOL && (subtype === "ephemeral_setting" || o("WAWebSilentProtocolMsg").isSilentProtocolMsg(e)) || type === o("WAWebMsgType").MSG_TYPE.REACTION) {
            a = o("WAWebCommonMsgUtils").EventType.IGNORE;
        } else {
            a = m(e);
        }
        return a;
    }
    function d(e) {
        if (o("WAWebViewModeUtils").isOfflineResumeCallLogPlaceholderViewMode(e.viewMode)) {
            return o("WAWebCommonMsgUtils").EventType.AMBIENT;
        }
        return o("WAWebCommonMsgUtils").EventType.NOTEWORTHY;
    }
    function m(e) {
        if (o("WAWebBrazilPaymentStateUpdatePayload").isBrazilPaymentStateUpdateMsg(e) && r("justknobx")._("6395")) {
            return o("WAWebCommonMsgUtils").EventType.IGNORE;
        }
        return o("WAWebCommonMsgUtils").EventType.DEFAULT;
    }
    function p(e, t) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            const i = t.id;
            const l = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
            const s = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
            let u = t.id.isLid() ? s : l;
            let c;
            if (o("WAWebChatGetters").getIsGroup(t)) {
                u = t.groupMetadata?.isLidAddressingMode === true ? s : l;
                c = o("WAWebWidFactory").asUserWidOrThrow(u);
                if (o("WAWebCurrentUser").isEmployee()) {
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "genOutgoingMsgData: generating key for group ",
                        ", has metadata: ",
                        ",\n          isLidAddressingMode: ",
                        ", participant: ",
                        ""
                    ])), i.toString(), t.groupMetadata != null, t.groupMetadata?.isLidAddressingMode, c);
                }
            } else {
                if (t.id.isStatus()) {
                    c = l;
                }
            }
            const p = new (r("WAWebMsgKey"))({
                from: u,
                to: i,
                id: yield r("WAWebMsgKey").newId(),
                participant: c,
                selfDir: "out"
            });
            const _ = t.contact.businessProfile?.automatedType;
            let bizBotType;
            if (_) {
                bizBotType = _ === o("WAWebBotTypes").BizBotAutomatedType.PARTIAL_1P ? o("WAWebBotTypes").BizBotType.BIZ_1P : _ === o("WAWebBotTypes").BizBotAutomatedType.FULL_3P ? o("WAWebBotTypes").BizBotType.BIZ_3P : _ === o("WAWebBotTypes").BizBotAutomatedType.UNKNOWN ? null : (()=>{
                    throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${_}`);
                })();
            }
            return {
                id: p,
                from: u,
                to: i,
                type: n,
                t: o("WATimeUtils").unixTime(),
                viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                isNewMsg: true,
                local: true,
                ack: o("WAWebAck").ACK.CLOCK,
                bizBotType
            };
        });
        return _.apply(this, arguments);
    }
    l.eventTypeFromMsgType = c;
    l.genOutgoingMsgData = p;
}, 98);