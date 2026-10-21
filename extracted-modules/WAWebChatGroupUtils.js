__d("WAWebChatGroupUtils", [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebAgentTransitionUtils",
    "WAWebApiContact",
    "WAWebBizAiAgentGating",
    "WAWebBizAiAgentStatusUtils",
    "WAWebBizAiStrings",
    "WAWebBizBotProfileUtils",
    "WAWebBizCoexGatingUtils",
    "WAWebBotComposerTreatment",
    "WAWebBotFrontendGating",
    "WAWebBotGating",
    "WAWebBotTos",
    "WAWebChatGetters",
    "WAWebConversationDeprecatedLidChatUtils",
    "WAWebCurrentUser",
    "WAWebDBUpdateChatTable",
    "WAWebFrontendContactGetters",
    "WAWebGroupMetadataTypeUtils",
    "WAWebGroupType",
    "WAWebIndividualNewChatMessageCappingLimitUtils",
    "WAWebLid1X1MigrationGating",
    "WAWebLimitSharingGatingUtils",
    "WAWebMobilePlatforms",
    "WAWebNoop",
    "WAWebReachoutTimelockUtils",
    "WAWebStateUtils",
    "WAWebTosCountryGating",
    "WAWebTosGating",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsMultiDevice"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    function d(e) {
        if (!e) {
            return false;
        }
        const n = o("WAWebStateUtils").unproxy(e);
        return o("WAWebChatGetters").getIsGroup(n) && n.groupMetadata?.support === true;
    }
    function m(e) {
        if (!e) {
            return false;
        }
        const n = o("WAWebStateUtils").unproxy(e);
        return o("WAWebChatGetters").getIsGroup(n) && n.groupMetadata?.isOpenBotGroup === true;
    }
    function p(e) {
        if (!e) {
            return false;
        }
        const n = o("WAWebStateUtils").unproxy(e);
        return o("WAWebChatGetters").getIsGroup(n) && n.groupMetadata?.isTeeBotGroup === true;
    }
    function _(e) {
        let t;
        const n = o("WAWebStateUtils").unproxy(e);
        return o("WAWebChatGetters").getIsGroup(n) && !!((t = n.groupMetadata) != null && t.terminated);
    }
    function f(e) {
        const t = o("WAWebStateUtils").unproxy(e);
        return o("WAWebChatGetters").getIsGroup(t) && o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(t.groupMetadata) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP;
    }
    function g(e) {
        const t = o("WAWebStateUtils").unproxy(e);
        return o("WAWebChatGetters").getIsGroup(t) && o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(t.groupMetadata) === o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP;
    }
    function h(e) {
        let t;
        if (!e) {
            return false;
        }
        const n = o("WAWebStateUtils").unproxy(e);
        return o("WAWebChatGetters").getIsGroup(n) && !!((t = n.groupMetadata) != null && t.suspended);
    }
    function y(e) {
        const t = o("WAWebStateUtils").unproxy(e);
        return t.canSend && !h(t) && !_(t) && !o("WAWebLimitSharingGatingUtils").isChatAcp2Restricted(t);
    }
    function C(e) {
        const n = o("WAWebStateUtils").unproxy(e);
        return o("WAWebChatGetters").getIsGroup(n) && n.groupMetadata?.growthLockType === "invite" && (n.groupMetadata.growthLockExpiration || 0) > o("WATimeUtils").unixTime();
    }
    function b(e) {
        let t;
        if (!e) {
            return false;
        }
        const n = o("WAWebStateUtils").unproxy(e);
        const r = _(n);
        const a = h(n) && !((t = n.groupMetadata) != null && t.participants.iAmMember());
        return (r || a) && !f(n);
    }
    function v(e) {
        const t = o("WAWebStateUtils").unproxy(e);
        return o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(t.groupMetadata) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP && h(t);
    }
    function S(e) {
        const t = o("WAWebStateUtils").unproxy(e);
        return o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(t.groupMetadata) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP && h(t) && _(t);
    }
    function R(e) {
        const t = o("WAWebStateUtils").unproxy(e);
        return o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(t.groupMetadata) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP && _(t);
    }
    function L(e) {
        return h(e) || _(e);
    }
    function E(t) {
        let a;
        const i = o("WAWebStateUtils").unproxy(t);
        if (!(d(i) && i.isReadOnly)) {
            let l = (c || (c = n("Promise"))).resolve();
            if (o("WAWebChatGetters").getIsNewsletter(i)) {
                let s;
                const u = !((s = i.newsletterMetadata) != null && s.iAmAdminOrOwner()) || i.isSuspendedOrTerminated();
                if (i.isReadOnly !== u) {
                    o("WAWebDBUpdateChatTable").updateChatTable(i.id, {
                        isReadOnly: u
                    }).then(()=>{
                        i.isReadOnly = u;
                        $(i);
                    }).catch(r("WAWebNoop"));
                }
                return;
            }
            if (o("WAWebChatGetters").getIsGroup(i) && !((a = i.groupMetadata) != null && a.stale)) {
                let m;
                const p = o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(i.groupMetadata) !== o("WAWebGroupType").GroupType.COMMUNITY && (!((m = i.groupMetadata) != null && m.participants.iAmMember()) || _(i));
                if (i.isReadOnly !== p) {
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "chat:updateReadOnly:old ",
                        ", new ",
                        ""
                    ])), i.isReadOnly, p);
                    l = o("WAWebDBUpdateChatTable").updateChatTable(i.id, {
                        isReadOnly: p
                    }).then(()=>{
                        i.isReadOnly = p;
                        $(i);
                    });
                }
            }
            l.then(()=>{
                if (o("WAWebChatGetters").getIsBroadcast(i)) {
                    x(i);
                }
            });
        }
    }
    function k(e) {
        const n = o("WAWebStateUtils").unproxy(e);
        return n.groupMetadata?.participants.length || 1;
    }
    function I(e, t, n) {
        const r = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
        if (r.equals(e)) {
            return o("WAWebUserPrefsMeUser").getMeUserOrThrow();
        }
        if (o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated() || !e.isLid()) {
            return e;
        }
        const a = o("WAWebApiContact").getPhoneNumber(e);
        return a ?? (o("WAWebCurrentUser").isEmployee() && o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
            "[getOneToOneContactFromGroupContact] PN not found for Lid ",
            ""
        ])), e.toString()), o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
            "[getOneToOneContactFromGroupContact] LID->PN missing ctx=",
            " ",
            ""
        ])), t, n).sendLogs("lid-group-get-one-to-one-contact"), null);
    }
    function T(e) {
        const e_participants = e.participants;
        const r = e.size ?? 0;
        const o = e_participants.iAmAdmin() ? r : e_participants.length;
        return o;
    }
    function D(e) {
        const e_name = e.name;
        if (e_name != null && e_name.trim().length > 0) {
            return e_name;
        }
        const name = e.contact.name;
        if (name != null && name.trim().length > 0) {
            return name;
        }
        return (e.broadcastMetadata?.recipients ?? []).map((e)=>e.formattedShortName).join(", ");
    }
    function x(e) {
        if (o("WAWebChatGetters").getIsBroadcast(e)) {
            e.formattedTitle = D(e);
        } else if (o("WAWebChatGetters").getIsUser(e)) {
            e.formattedTitle = e.id.isAiHub() ? o("WAWebBizAiStrings").getBizAiHubTitle().toString() : o("WAWebFrontendContactGetters").getFormattedUser(e.contact) ?? "";
        } else if (o("WAWebChatGetters").getIsGroup(e)) {
            e.formattedTitle = e.contact.name ?? e.groupMetadata?.subject;
        } else if (o("WAWebChatGetters").getIsNewsletter(e)) {
            e.formattedTitle = e.contact.name ?? e.newsletterMetadata?.name;
        }
    }
    function $(e, businessProfile) {
        const n = M(e, {
            businessProfile,
            ignoreAiAgentBlock: false
        });
        e.canSend = n;
        return n;
    }
    function P(e) {
        return o("WAWebBizAiAgentGating").isAiAgentAutoReplyEnabled() && o("WAWebBizAiAgentStatusUtils").shouldShowAiAgentBlockBar(e);
    }
    function N(e) {
        if (e.contact == null) {
            return false;
        }
        return M(e, {
            businessProfile: null,
            ignoreAiAgentBlock: true
        });
    }
    function M(e, { businessProfile, ignoreAiAgentBlock }) {
        if (e.isReadOnly || e.isAnnounceGrpRestrict === true || o("WAWebTosGating").shouldBlockByTos(e.contact) || o("WAWebTosGating").shouldBlockByBotTos(e.contact) || o("WAWebTosCountryGating").shouldBlockByCountry(e.contact) || o("WAWebBotFrontendGating").isBotChatUnavailable(e.id) || !ignoreAiAgentBlock && P(e) || o("WAWebBotComposerTreatment").isBotSupportComposerBlocked(e.id)) {
            return false;
        }
        if (o("WAWebBizBotProfileUtils").isBizBot3pBusinessProfile(businessProfile ?? e.contact.businessProfile) && (!o("WAWebBotGating").isBizBot3pAvailable() || !o("WAWebBotTos").hasAcceptedBizBotTos())) {
            return false;
        }
        if (o("WAWebChatGetters").getIsUser(e)) {
            return !(o("WAWebMobilePlatforms").isSMB() && !o("WAWebUserPrefsMultiDevice").getIsHostedMeAccountFromLocalStorage() && o("WAWebAgentTransitionUtils").getMeSmbOffboardingState() && o("WAWebBizCoexGatingUtils").agentSmbOffboardingEnabled() || e.contact.isContactBlocked || o("WAWebChatGetters").getIsPSA(e) || o("WAWebChatGetters").getIsIAS(e) || e.parentCompanyName != null && e.obaPhoneNumber != null && e.contact.type === "out" && o("WAWebBizCoexGatingUtils").agentOffboardingEnabled() || o("WAWebReachoutTimelockUtils").isUserReachoutTimelocked() && !o("WAWebReachoutTimelockUtils").canSendMsgWhileTimelocked({
                chat: e,
                contact: e.contact
            }) || o("WAWebIndividualNewChatMessageCappingLimitUtils").isUserCapped() && !o("WAWebIndividualNewChatMessageCappingLimitUtils").canSendMsgWhileCapped({
                chat: e,
                contact: e.contact
            }) || o("WAWebConversationDeprecatedLidChatUtils").isDeprecatedLidChatSendBlocked(e));
        }
        if (o("WAWebChatGetters").getIsNewsletter(e)) {
            return e.newsletterMetadata?.iAmAdminOrOwner() ?? false;
        }
        return true;
    }
    function w(e) {
        return o("WAWebChatGetters").getIsGroup(e) && !f(e) && !e.isReadOnly;
    }
    l.isSupportGroup = d;
    l.isAIGroupOpen = m;
    l.isAIGroupTee = p;
    l.isTerminatedGroup = _;
    l.isCommunityAnnouncementGroup = f;
    l.isCommunityGeneralGroup = g;
    l.isSuspendedGroup = h;
    l.canSendToGroup = y;
    l.isInviteGrowthLockedGroup = C;
    l.isTerminatedGroupOrNotMember = b;
    l.isSuspendedCommunityAnnouncementGroup = v;
    l.isIntegrityDeactivatedCommunityAnnouncementGroup = S;
    l.isDeactivatedCommunityAnnouncementGroup = R;
    l.shouldBlockCall = L;
    l.updateReadOnly = E;
    l.getParticipantCount = k;
    l.getOneToOneContactFromGroupContact = I;
    l.getGroupParticipantsCount = T;
    l.getBroadcastChatTitle = D;
    l.updateTitle = x;
    l.updateCanSend = $;
    l.canSendIgnoringAiAgentBlock = N;
    l.shouldShowLeaveAndReportGroupModalForChat = w;
}, 98);