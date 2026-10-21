__d("WAWebFrontendChatGetters", [
    "WALogger",
    "WAWebAiThreadCreationUtils",
    "WAWebBizBroadcastDeviceCapabilityCommon",
    "WAWebBizBroadcastProHiddenChatClassifier",
    "WAWebBotFrontendGating",
    "WAWebBotGating",
    "WAWebBotUtils",
    "WAWebChatConstants",
    "WAWebChatFlowTypes",
    "WAWebChatGetters",
    "WAWebChatModelDerivedMethods",
    "WAWebChatUnreadConstants",
    "WAWebChatViewMode.flow",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebGetters",
    "WAWebGettersCaches",
    "WAWebGroupHistoryPostJoinLocalJoinTimes",
    "WAWebGroupHistorySupportedMessageTypesUtil",
    "WAWebGroupType",
    "WAWebHistorySyncUtils",
    "WAWebLastAddOnDBSerialization",
    "WAWebLimitSharingGatingUtils",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebPrivacyModeSystemMsg",
    "WAWebProductFeature",
    "WAWebThreadMsgUtils",
    "WAWebWid",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = o("WAWebGetters").createGetterFactories({
        root: (s = o("WAWebChatGetters")).getChatUnsafe,
        createCache: o("WAWebGettersCaches").createFrontendChatCache
    });
    const { clearCacheFor, computed, field } = u;
    const p = clearCacheFor;
    const _ = field("groupMetadata");
    const f = field("broadcastMetadata");
    const g = field("contact");
    const h = field("bizBotSystemMsgType");
    const y = field("forceDismissAiAgentBlockBar", {
        default: false
    });
    const C = field("hasRequestedWelcomeMsg", {
        default: false
    });
    const b = field("afterReadDuration");
    const v = field("ephemeralDuration");
    const S = field("linkCount", {
        default: 0
    });
    const R = field("docCount", {
        default: 0
    });
    const L = field("productCount", {
        default: 0
    });
    const E = field("pendingSeenCount", {
        default: 0
    });
    const k = field("unreadMsgAnchor");
    const I = field("composeQuotedMsg");
    const T = field("composeQuotedMsgRemoteJid");
    const D = field("quotedMsgAdminGroupJid");
    const x = field("quotedMsgAdminGroupSubject");
    const $ = field("quotedMsgAdminParentGroupJid");
    const P = field("msgs");
    const N = field("msgsLength");
    const M = field("msgsChanged");
    const w = field("noEarlierMsgs", {
        default: false
    });
    const A = field("isParentGroup");
    const F = field("broadcastRecipientCount", {
        default: 0
    });
    const O = field("groupType");
    const B = field("hasCapi");
    const W = field("createdLocally");
    const q = field("chatViewMode");
    const U = field("pendingDeleteForMeCount");
    const V = field("attachMediaContents");
    const H = field("isCameraCaptureDrawerOpen", {
        default: false
    });
    const G = field("formattedTitle");
    const z = field("assignedAgent");
    const j = field("isAssignedToMe", {
        default: false
    });
    const K = field("mute");
    const Q = field("presence");
    const X = field("newsletterMetadata");
    const Y = field("limitSharing");
    const J = field("acp2Setting");
    const Z = field("wallpaperValue");
    const ee = field("chatThemeValue");
    const te = field("isAnnounceGrpRestrict", {
        default: false
    });
    const ne = field("promises", {
        getDefault: function() {
            return {
                reportSpamAndBlockSender: undefined,
                reportSpamBlockClear: undefined,
                reportSpamExitClear: undefined,
                sendNotSpam: undefined,
                sendUnstarAll: undefined,
                updateSortTime: undefined,
                setPin: undefined,
                setArchive: undefined,
                updateDraftMessage: undefined
            };
        }
    });
    const re = field("isFavorite", {
        default: false
    });
    const oe = field("trusted");
    const ae = field("notSpam");
    const ie = field("active");
    const le = field("pendingAction");
    const se = field("pttRecordingSession");
    const ue = field("unopenedByAssignedAgent", {
        default: false
    });
    const ce = field("mmSignalSharingExpirationWindow");
    const de = computed(function([n, r, a, i, l, s]) {
        if (r) {
            if (s === o("WAWebGroupType").GroupType.COMMUNITY) {
                return o("WAWebChatFlowTypes").ChatKindType.Community;
            }
            return o("WAWebChatFlowTypes").ChatKindType.Group;
        }
        if (a) {
            return o("WAWebChatFlowTypes").ChatKindType.Broadcast;
        }
        if (i) {
            return o("WAWebChatFlowTypes").ChatKindType.Chat;
        }
        if (l) {
            return o("WAWebChatFlowTypes").ChatKindType.Newsletter;
        }
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "chat:unknown kind id:",
            ""
        ])), n.toLogString());
    }, [
        s.getId,
        s.getIsGroup,
        s.getIsBroadcast,
        s.getIsUser,
        s.getIsNewsletter,
        O
    ]);
    const me = computed(function([t, n]) {
        return t && n === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP;
    }, [
        s.getIsGroup,
        O
    ]);
    const pe = computed(function([t, n]) {
        return t && n === o("WAWebGroupType").GroupType.COMMUNITY;
    }, [
        s.getIsGroup,
        O
    ]);
    const _e = computed(function([t]) {
        return t === true;
    }, [
        B
    ]);
    const fe = computed(function([t, n]) {
        if (!n) {
            return false;
        }
        if (t === o("WAWebChatFlowTypes").ChatKindType.Chat) {
            const r = o("WAWebPrivacyModeSystemMsg").getReducedPrivacyMode(n.privacyMode);
            if (r === o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.FB || r === o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.BSP) {
                return false;
            }
        }
        return n.isHosted !== true;
    }, [
        de,
        g
    ]);
    const ge = computed(function([t, n]) {
        if (t === o("WAWebChatUnreadConstants").MARKED_AS_UNREAD) {
            return t;
        }
        return Math.max(0, t - n);
    }, [
        s.getUnreadCount,
        E
    ]);
    const he = computed(function([t, n, r]) {
        if (t === 0) {
            return false;
        }
        if (n) {
            const a = n.getMsgChunk();
            const i = a ? a.getModelsArray() : [];
            return n !== i.find((e)=>o("WAWebMsgGetters").getIsUnreadType(e));
        }
        const l = r.last();
        const s = l != null && o("WAWebMsgGetters").getIsSentByMe(l);
        if (s) {
            return false;
        }
        if (r.msgLoadState.noEarlierMsgs) {
            const u = r.filter((e)=>o("WAWebMsgGetters").getIsUnreadType(e));
            return u.length !== t;
        }
        return true;
    }, [
        s.getUnreadCount,
        k,
        P
    ]);
    const ye = computed(function([n, r]) {
        const o = n?.text?.trim();
        return !!(o != null && o !== "" || r);
    }, [
        s.getDraftMessage,
        V
    ]);
    const Ce = computed(function([t, n, r, a]) {
        if (o("WAWebProductFeature").isInternalProduct() || !n) {
            return false;
        }
        if (t.user === "chat" || r) {
            return true;
        }
        if (o("WAWebBizBroadcastDeviceCapabilityCommon").isBizBroadcastEnabledAndDeviceSupported()) {
            return a > 0;
        }
        return false;
    }, [
        s.getId,
        s.getIsBroadcast,
        s.getBBProEntrypointEnabled,
        F
    ]);
    const be = computed(function([t, n, a, i, l, s, u, c, d, m, p, _]) {
        if (n || o("WAWebBotFrontendGating").isBotChatUnavailable(t) || o("WAWebBotUtils").isHiddenBotWid(t)) {
            return false;
        }
        if (a) {
            return _;
        }
        if (r("WAWebWid").isStatus(t) || i === o("WAWebChatConstants").ConversationEndOfHistoryTransferModelPropType.NOT_INCLUDED_IN_HIST_SYNC && u.length === 0 || l && s === true || d === o("WAWebChatViewMode.flow").ChatViewModeType.ONLY_MARKETING_FROM_SELF && !p && o("WAWebBizBroadcastProHiddenChatClassifier").isBizBroadcastProHiddenChatsEnabled() || !l && c === true && u.every((e)=>e.broadcast && o("WAWebMsgGetters").getIsSentByMe(e)) && r("justknobx")._("310")) {
            return false;
        }
        const f = u.some((e)=>o("WAWebMsgGetters").isRealMessage(e) || o("WAWebMsgGetters").getIsVisibleCallLog(e));
        return c !== true || f || p;
    }, [
        s.getId,
        s.getIsLocked,
        s.getIsBroadcast,
        s.getEndOfHistoryTransferType,
        s.getIsGroup,
        A,
        P,
        W,
        q,
        N,
        ye,
        Ce
    ]);
    const ve = computed(function([t, n, r, a, i]) {
        const l = o("WAWebBotUtils").isMetaAiBot(a) && o("WAWebBotGating").isDefaultThreadRoutingEnabled();
        const s = l ? o("WAWebAiThreadCreationUtils").getHistoricalMetaAiThreadId() : null;
        const u = Se(a, i);
        for(let c = t.length - 1; c >= 0; c--){
            const d = t.at(c);
            if (d && Re(d, u)) {
                if (s != null && !o("WAWebThreadMsgUtils").isMsgInThread(d, s)) {
                    continue;
                }
                return d;
            }
        }
        if (t.length > 0) {
            return t.last();
        }
    }, [
        P,
        M,
        U,
        s.getId,
        J
    ]);
    function Se(e, t) {
        return t?.enabled === true && o("WAWebLimitSharingGatingUtils").isAcp2EnabledForWid(e);
    }
    function Re(e, t) {
        return o("WAWebChatModelDerivedMethods").isPreviewMessage(e) || t && o("WAWebChatModelDerivedMethods").isAcp2RestrictionNotice(e);
    }
    const Le = computed(function([t, n]) {
        for(let r = t.length - 1; r >= 0; r--){
            const a = t.at(r);
            if (a != null) {
                if (a.subtype === o("WAWebCommonMsgSubtypeTypes").MsgSubtype.ScheduledMessageCreated) {
                    return a;
                }
                if (o("WAWebChatModelDerivedMethods").isPreviewMessage(a)) {
                    return null;
                }
            }
        }
        return null;
    }, [
        P,
        M
    ]);
    const Ee = computed(function([t, n, a, i]) {
        const l = i != null && o("WAWebHistorySyncUtils").primaryHasMoreMessagesReadyToLoad(i);
        const s = a && !l;
        if (!s) {
            return {
                startOfHistoryLoaded: false,
                earliestShareableMsgT: null,
                latestShareableMsgT: null
            };
        }
        let earliestShareableMsgT = null;
        let latestShareableMsgT = null;
        for(let d = 0; d < t.length; d++){
            const m = t.at(d);
            if (m != null && r("WAWebGroupHistorySupportedMessageTypesUtil")(m.type)) {
                const p = m.t;
                if (p != null) {
                    if (earliestShareableMsgT == null || p < earliestShareableMsgT) {
                        earliestShareableMsgT = p;
                    }
                    if (latestShareableMsgT == null || p > latestShareableMsgT) {
                        latestShareableMsgT = p;
                    }
                }
            }
        }
        return {
            startOfHistoryLoaded: true,
            earliestShareableMsgT,
            latestShareableMsgT
        };
    }, [
        P,
        M,
        w,
        s.getEndOfHistoryTransferType
    ]);
    const ke = computed(function([t]) {
        return o("WAWebGroupHistoryPostJoinLocalJoinTimes").computeLocalJoinTimeFallbacks(t.getModelsArray());
    }, [
        P,
        M
    ]);
    const Ie = computed(function([t, n, r, a]) {
        if (!n || !r && !a) {
            return false;
        }
        const i = o("WAWebContactCollection").ContactCollection.get(a || t);
        return !(i != null && o("WAWebFrontendContactGetters").getIsMyContact(i));
    }, [
        s.getId,
        s.getIsUser,
        s.getChangeNumberOldJid,
        s.getChangeNumberNewJid
    ]);
    const Te = computed(function([t, n]) {
        if (t) {
            return t;
        }
        if (n) {
            return o("WAWebLastAddOnDBSerialization").lastAddOnPreviewFromDeprecatedLastReactionPreview(n);
        }
    }, [
        s.getChatlistPreview,
        s.getLastReactionPreview
    ]);
    l.clearFrontendChatGetterCacheFor = p;
    l.getGroupMetadata = _;
    l.getBroadcastMetadata = f;
    l.getContact = g;
    l.getBizBotSystemMsgType = h;
    l.getForceDismissAiAgentBlockBar = y;
    l.getHasRequestedWelcomeMsg = C;
    l.getAfterReadDuration = b;
    l.getEphemeralDuration = v;
    l.getLinkCount = S;
    l.getDocCount = R;
    l.getProductCount = L;
    l.getComposeQuotedMsg = I;
    l.getComposeQuotedMsgRemoteJid = T;
    l.getQuotedMsgAdminGroupJid = D;
    l.getQuotedMsgAdminGroupSubject = x;
    l.getQuotedMsgAdminParentGroupJid = $;
    l.getMsgs = P;
    l.getIsParentGroup = A;
    l.getAttachMediaContents = V;
    l.getIsCameraCaptureDrawerOpen = H;
    l.getFormattedTitle = G;
    l.getAssignedAgent = z;
    l.getIsAssignedToMe = j;
    l.getMute = K;
    l.getPresence = Q;
    l.getNewsletterMetadata = X;
    l.getLimitSharing = Y;
    l.getAcp2Setting = J;
    l.getWallpaperValue = Z;
    l.getChatThemeValue = ee;
    l.getIsAnnounceGrpRestrict = te;
    l.getPromises = ne;
    l.getIsFavorite = re;
    l.getTrusted = oe;
    l.getNotSpam = ae;
    l.getActive = ie;
    l.getPendingAction = le;
    l.getPttRecordingSession = se;
    l.getUnopenedByAssignedAgent = ue;
    l.getMmSignalSharingExpirationWindow = ce;
    l.getKind = de;
    l.getIsCAG = me;
    l.getIsCommunity = pe;
    l.getIsCapiHostedGroup = _e;
    l.getIsE2ee = fe;
    l.getOptimisticUnreadCount = ge;
    l.getShouldShowUnreadDivider = he;
    l.getHasDraftMessage = ye;
    l.getShouldBroadcastAppearInList = Ce;
    l.getShouldAppearInList = be;
    l.getPreviewMessage = ve;
    l.getLastScheduledCreatedMsg = Le;
    l.getShareableHistoryInfo = Ee;
    l.getLatestJoinTimeByParticipant = ke;
    l.getShowChangeNumberNotification = Ie;
    l.getDerivedLastAddOnPreview = Te;
}, 98);