__d("WAWebHistoryMsgHandlerAction", [
    "Promise",
    "WABase64",
    "WAFilteredCatch",
    "WALogger",
    "WALongInt",
    "WATimeUtils",
    "WAWebAddonProcessMsgs",
    "WAWebAddonProcessMsgsUtils",
    "WAWebAdvHostedAccountTypeSystemMsg",
    "WAWebApiContact",
    "WAWebApiFilterAndReplaceMessages",
    "WAWebApiHistorySyncNotification",
    "WAWebAsISOCountryCode",
    "WAWebBackendApi",
    "WAWebBackendErrors",
    "WAWebBizCoexGatingUtils",
    "WAWebBizCoexUtils",
    "WAWebBotTypes",
    "WAWebCTWAGatingUtils",
    "WAWebCallsOnlyGating",
    "WAWebChatConstants",
    "WAWebCheckUpdateOrphanReactions",
    "WAWebContactSystemMsg",
    "WAWebCryptoCurve25519",
    "WAWebCurrentUser",
    "WAWebDBCreateLidPnMappings",
    "WAWebDBDrainBotOrphansForHistoryMsgs",
    "WAWebDBProcessInitialHistorySyncMessage",
    "WAWebEphemeralityTypes",
    "WAWebEphemeralityUtils",
    "WAWebHandleAddChats",
    "WAWebHistorySyncLidChatGating",
    "WAWebHistorySyncLogUtils",
    "WAWebHistorySyncNotificationCommonUtils",
    "WAWebHistorySyncNotificationUtils",
    "WAWebHistorySyncStickers",
    "WAWebLidMigrationUtils",
    "WAWebLimitSharingProtoUtils",
    "WAWebMemberLabelHistorySync",
    "WAWebMmSignalSharingExpirationWindowUtils",
    "WAWebMobilePlatforms",
    "WAWebMsgAGMProcessing",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebNoop",
    "WAWebProcessMessageAssociationMessages",
    "WAWebProtobufsAdv.pb",
    "WAWebProtobufsE2E.pb",
    "WAWebProtobufsHistorySync.pb",
    "WAWebSeedBotProfilesFromHistorySync",
    "WAWebSignalCommonUtils",
    "WAWebSignalProtocolStore",
    "WAWebSyncBootstrap",
    "WAWebSyncdOrphan",
    "WAWebUserPrefsHistorySync",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsModelStorage",
    "WAWebUserPrefsMultiDevice",
    "WAWebUserPrefsPhoneNumberHidingThreadPromotionMigration",
    "WAWebUsernameTypes",
    "WAWebVoipActionWriteCallLogSync",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "isStringNullOrEmpty"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    let h;
    let y;
    let C;
    let b;
    let v;
    let S;
    let R;
    let L;
    let E;
    let k;
    let I;
    let T;
    let D;
    let x;
    let $;
    let P;
    let N;
    let M;
    let w;
    let A;
    let F;
    let O;
    function B(e) {
        return W.apply(this, arguments);
    }
    function W() {
        W = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chunkDownloadFinishTimestamp, chunkInfo, historyLidPnMappings, historySyncDataAppliedMetric, historySyncDownloadMetric, newLidMetadata, newUsernameUpdates, proto }) {
            o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync][initial bootstrap] preprocessing started, ",
                ""
            ])), o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(chunkInfo)).tags("history-sync");
            const m = [];
            const p = {};
            const _ = {};
            const w = new Map;
            const A = {};
            const F = [];
            const B = new Map;
            const W = new Set;
            let q = 0;
            const U = [];
            const V = [];
            const H = o("WAWebHistorySyncNotificationCommonUtils").getLidMappingAsStringSet(historyLidPnMappings);
            if (o("WAWebCurrentUser").isEmployee()) {
                o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                    "first lid mappings for initial sync. count: ",
                    ". ",
                    "..."
                ])), H?.size, o("WAWebHistorySyncNotificationCommonUtils").getLidsForLogging(H)).verbose();
            }
            const Y = new Map;
            const J = [];
            let Z = 0;
            let ee = 0;
            let te = 0;
            const ne = [];
            const re = o("WAWebBizCoexGatingUtils").smbHostedLazySystemMsgInsertInHistorySyncEnabled() && (yield o("WAWebUserPrefsMultiDevice").getIsHostedMeAccount()) === true;
            const oe = function*(t) {
                let d;
                const f = t.id;
                if (o("WAWebCurrentUser").isEmployee()) {
                    o("WALogger").LOG(D || (D = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] processing conversation ",
                        " with ",
                        " messages"
                    ])), f, t.messages.length);
                }
                const g = o("WAWebWidFactory").createWid(f);
                if (g.isNewsletter()) {
                    return 0;
                }
                const h = z(g, t);
                if (h.result === "skip-chat") {
                    return 0;
                }
                if (h.result === "extracted") {
                    const y = h.accountLid;
                    if (w.has(y)) {
                        o("WALogger").ERROR(x || (x = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync] handleInitialSyncMsgs: Found duplicated accountLid during initial sync"
                        ]))).sendLogs("duplicated-account-lid-in-history-sync");
                        return 0;
                    }
                    w.set(y, g);
                } else {
                    h.result;
                }
                let C = g;
                let historyChatId;
                const v = o("WAWebHistorySyncLidChatGating").isForcedHistoryLidChat() && g.isRegularUserPn() && h.accountLid != null;
                if (v && h.accountLid != null) {
                    Z++;
                    if (J.length < 3) {
                        J.push(`${g.toLogString()} -> ${h.accountLid.toLogString()}`);
                    }
                    C = h.accountLid;
                    historyChatId = g.toString();
                }
                if (g.isUser()) {
                    if (g.isLid()) {
                        const S = t.pnJid;
                        if (S != null) {
                            m.push({
                                lid: g,
                                pn: o("WAWebWidFactory").createUserWidOrThrow(S)
                            });
                        }
                        const { displayName, shareOwnPn } = t;
                        if (displayName != null || shareOwnPn != null) {
                            const E = {};
                            if (displayName != null) {
                                E.displayNameLID = displayName;
                            }
                            if (shareOwnPn != null) {
                                E.shareOwnPn = shareOwnPn;
                            }
                            newLidMetadata.push({
                                lid: g,
                                data: E
                            });
                        }
                    } else if (t.lidJid != null) {
                        const lid = o("WAWebWidFactory").createUserLidOrThrow(t.lidJid);
                        m.push({
                            lid,
                            pn: g
                        });
                    }
                }
                const t_name = t.name;
                if (C.isBot() && t_name != null && t_name !== "") {
                    V.push({
                        name: t_name,
                        wid: C
                    });
                }
                let T = [];
                q += t.messages.length;
                let O = [];
                const G = new Set;
                const j = [];
                if (t.messages.length === 0) {
                    p[f] = -1;
                }
                if (!r("isStringNullOrEmpty")(t.pHash)) {
                    A[f] = t.pHash;
                }
                let K;
                let oe = false;
                let ae = [];
                let ie = 0;
                let le = 0;
                t.messages.forEach((e, n)=>{
                    if (n === t.messages.length - 1) {
                        const d = o("WALongInt").maybeNumberOrThrowIfTooLarge(e.msgOrderId);
                        if (d != null) {
                            p[f] = d;
                        }
                    }
                    const m = e?.message?.message?.protocolMessage?.type === o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.REQUEST_WELCOME_MESSAGE;
                    if (m) {
                        ie++;
                        return;
                    }
                    const _ = e?.message?.message?.protocolMessage?.type === o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.BOT_MEMU_ONBOARDING_MESSAGE;
                    if (_) {
                        le++;
                        return;
                    }
                    if (!o("WAWebLimitSharingProtoUtils").shouldWithholdHistorySyncMessage(t, e)) {
                        if (o("WAWebMobilePlatforms").isSMB() && o("WAWebBizCoexGatingUtils").smbHostedLazySystemMsgInsertInHistorySyncEnabled() && n === 0 && C.isUser() && t.systemMessageToInsert != null) {
                            switch(t.systemMessageToInsert){
                                case o("WAWebProtobufsHistorySync.pb").PrivacySystemMessage.E2EE_MSG:
                                    {
                                        if (re) {
                                            break;
                                        }
                                        const h = o("WAWebAdvHostedAccountTypeSystemMsg").genAdvAccountTypeChangeNotificationMsg({
                                            accountTypeChangedUser: o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
                                            chatId: C,
                                            newAdvAccountType: o("WAWebProtobufsAdv.pb").ADVEncryptionType.E2EE
                                        });
                                        O.push(h);
                                        o("WAWebBizCoexUtils").sendWamCoexPrivacySysMsgHistorySyncInsert(h);
                                        break;
                                    }
                                case o("WAWebProtobufsHistorySync.pb").PrivacySystemMessage.NE2EE_SELF:
                                    {
                                        if (!re) {
                                            break;
                                        }
                                        const y = o("WAWebAdvHostedAccountTypeSystemMsg").genAdvAccountTypeSelfTransitionToCoexNotificationMsg(C, o("WAWebUserPrefsMeUser").getMeUserOrThrow());
                                        O.push(y);
                                        o("WAWebBizCoexUtils").sendWamCoexPrivacySysMsgHistorySyncInsert(y);
                                        break;
                                    }
                                case o("WAWebProtobufsHistorySync.pb").PrivacySystemMessage.NE2EE_OTHER:
                                    {
                                        const b = o("WAWebAdvHostedAccountTypeSystemMsg").genAdvAccountTypeChangeNotificationMsg({
                                            accountTypeChangedUser: o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
                                            chatId: C,
                                            newAdvAccountType: o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED
                                        });
                                        O.push(b);
                                        o("WAWebBizCoexUtils").sendWamCoexPrivacySysMsgHistorySyncInsert(b);
                                    }
                            }
                        }
                        const v = o("WAWebHistorySyncNotificationCommonUtils").parseWebMsgInfoAndReturnNullOnFailure({
                            protobufChatId: g,
                            message: e.message,
                            chunkInfo,
                            allLidMapping: H,
                            totalMissingMapping: Y,
                            historyLidPnMappings,
                            dbChatId: C
                        });
                        const S = e.message?.message?.commentMessage?.targetMessageKey == null;
                        const R = v?.associationType != null;
                        if (S) {
                            if (v != null && G.has(v.id.toString())) {
                                G.delete(v == null ? undefined : v.id.toString());
                            }
                            if (!(v != null && v.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE && v.ctwaContext != null)) {
                                O.push(v);
                            }
                            const ctwaContext = e.message?.message?.extendedTextMessage?.contextInfo?.externalAdReply;
                            const k = v ?? {};
                            const { from, id, to } = k;
                            if (ctwaContext != null && id?.fromMe != null && from != null && to != null && o("WAWebCTWAGatingUtils").shouldGenerateAGMMsgs(ctwaContext)) {
                                const P = new (r("WAWebMsgKey"))({
                                    fromMe: !id.fromMe,
                                    remote: C,
                                    id: r("WAWebMsgKey").newId_DEPRECATED()
                                });
                                const N = o("WAWebMsgAGMProcessing").genHistoryAutomatedGreetingMsg({
                                    msgKey: P,
                                    ctwaContext,
                                    to: from,
                                    from: to,
                                    msgTimestamp: e.message?.messageTimestamp
                                });
                                O.push(N);
                            }
                        }
                        if (v != null && R) {
                            const M = v.parentMsgKey.toString();
                            G.add(M);
                            j.push(v);
                        }
                        T = T.concat(o("WAWebAddonProcessMsgsUtils").parseHistorySyncMsg({
                            webMsgInfo: e.message,
                            parsedWebMsgInfo: v,
                            isFromCag: t.isDefaultSubgroup ?? false
                        }));
                        if (v?.subtype === "biz_bot_1p_disclosure") {
                            K = o("WAWebBotTypes").BizBotType.BIZ_1P;
                        }
                        if (v?.subtype === "biz_bot_3p_disclosure") {
                            K = o("WAWebBotTypes").BizBotType.BIZ_3P;
                        }
                        if (v?.subtype === "ctwa_consumer_data_sharing_disclosure_system_message") {
                            oe = true;
                        }
                        ae = o("WAWebMmSignalSharingExpirationWindowUtils").getUpdatedMmSignalSharingExpirationWindowFromHistorySync(e.message, ae);
                    }
                });
                if (ie > 0) {
                    o("WALogger").LOG($ || ($ = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] Dropped ",
                        " request welcome messages"
                    ])), ie);
                }
                if (le > 0) {
                    o("WALogger").LOG(P || (P = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] Dropped ",
                        " memu onboarding messages"
                    ])), le);
                }
                let se;
                if (G.size > 0) {
                    const ue = o("WAWebProcessMessageAssociationMessages").classifyAssociatedMsgsFromHistorySyncUsingMissingParentsCache(j, G);
                    if (ue != null && ue.validAssociatedMsgs) {
                        se = o("WAWebApiFilterAndReplaceMessages").validateMsgFn(ue?.validAssociatedMsgs);
                    }
                }
                O = o("WAWebApiFilterAndReplaceMessages").filterAndReplaceMessagesInitialHistorySync(O, se);
                O = O.reverse();
                const ce = o("WAWebLimitSharingProtoUtils").getAcp2SettingFromProtocolHistorySyncConversation(t);
                if (ce != null && (B.set(C.toString(), ce), o("WAWebLimitSharingProtoUtils").shouldInjectAcp2HistorySyncNotice(ce, C, O))) {
                    const de = babelHelpers.extends({}, o("WAWebContactSystemMsg").genAcp2UpdateSystemMsg(C, ce), {
                        t: Math.floor(Number(ce.settingTimestamp) / 1000)
                    });
                    O.push(de);
                }
                const t_contactPrimaryIdentityKey = t.contactPrimaryIdentityKey;
                if (t_contactPrimaryIdentityKey && r("WAWebWid").isUser(C)) {
                    const identityKey = o("WAWebSignalCommonUtils").bufferToStr(o("WAWebCryptoCurve25519").toSignalCurvePubKey(t_contactPrimaryIdentityKey));
                    U.push({
                        userId: o("WAWebWidFactory").asUserWidOrThrow(C),
                        identityKey
                    });
                }
                let _e;
                let fe;
                let disappearingModeInitiatedByMe;
                if (t.disappearingMode?.initiator != null) {
                    switch(t.disappearingMode.initiator){
                        case o("WAWebProtobufsE2E.pb").DisappearingMode$Initiator.CHANGED_IN_CHAT:
                            _e = o("WAWebEphemeralityTypes").DisappearingModeInitiator.ChangedInChat;
                            fe = o("WAWebEphemeralityTypes").DisappearingModeTrigger.ChatSettings;
                            break;
                        case o("WAWebProtobufsE2E.pb").DisappearingMode$Initiator.INITIATED_BY_ME:
                            _e = o("WAWebEphemeralityTypes").DisappearingModeInitiator.InitiatedByMe;
                            fe = o("WAWebEphemeralityTypes").DisappearingModeTrigger.AccountSettings;
                            disappearingModeInitiatedByMe = true;
                            break;
                        case o("WAWebProtobufsE2E.pb").DisappearingMode$Initiator.INITIATED_BY_OTHER:
                        case o("WAWebProtobufsE2E.pb").DisappearingMode$Initiator.BIZ_UPGRADE_FB_HOSTING:
                            _e = o("WAWebEphemeralityTypes").DisappearingModeInitiator.InitiatedByOther;
                            fe = o("WAWebEphemeralityTypes").DisappearingModeTrigger.AccountSettings;
                            disappearingModeInitiatedByMe = false;
                            break;
                    }
                }
                if (t.disappearingMode?.trigger != null) {
                    const he = o("WAWebEphemeralityUtils").getDisappearingModeTriggerFromProtobuf(t.disappearingMode.trigger);
                    if (he != null) {
                        fe = he;
                    }
                }
                if (t.disappearingMode?.initiatedByMe != null) {
                    disappearingModeInitiatedByMe = t.disappearingMode.initiatedByMe;
                }
                const ye = t.tcToken != null && t.tcTokenTimestamp != null;
                if (o("WAWebCurrentUser").isEmployee()) {
                    o("WALogger").LOG(N || (N = babelHelpers.taggedTemplateLiteralLoose([
                        "handleInitialSyncMsgs: incoming chat info: protobufChatId=",
                        ", dbChatId=",
                        ", ",
                        ", ",
                        ""
                    ])), g, C, h.accountLid ?? "n/a", C.isRegularUser() ? o("WAWebApiContact").getAlternateUserWid(o("WAWebWidFactory").asUserWidOrThrow(C)) : "n/a");
                }
                const h_accountLid = h.accountLid;
                const chatInfo = {
                    t: o("WALongInt").maybeNumberOrThrowIfTooLarge(t.conversationTimestamp ?? t.lastMsgTimestamp),
                    accountLid: h_accountLid,
                    id: C,
                    unreadCount: t.unreadCount,
                    ephemeralDuration: t.ephemeralExpiration,
                    ephemeralSettingTimestamp: t.ephemeralSettingTimestamp,
                    disappearingModeInitiator: _e,
                    disappearingModeTrigger: fe,
                    disappearingModeInitiatedByMe,
                    endOfHistoryTransferType: t.endOfHistoryTransferType ?? o("WAWebChatConstants").ConversationEndOfHistoryTransferModelPropType.INCOMPLETE,
                    name: t.name,
                    notSpam: t.notSpam,
                    isSenderNewAccount: t.isSenderNewAccount,
                    isSenderSuspicious: t.isSenderSuspicious,
                    pendingInitialLoading: false,
                    unreadMentionCount: t.unreadMentionCount,
                    tcToken: ye ? t.tcToken : null,
                    tcTokenTimestamp: ye ? t.tcTokenTimestamp : null,
                    tcTokenSenderTimestamp: t.tcTokenSenderTimestamp,
                    bizBotSystemMsgType: K,
                    hasCtwaConsumerDataSharingDisclosureSystemMsg: oe || undefined,
                    isLocked: t.locked,
                    limitSharing: o("WAWebLimitSharingProtoUtils").getLimitSharingFromProtocolHistorySyncConversation(t),
                    capiThreadControl: Q(t.maibaAiThreadEnabled),
                    historyChatId
                };
                if (C.isLid()) {
                    chatInfo.lidOriginType = X(t.lidOriginType);
                }
                if (t.archived != null) {
                    chatInfo.archive = t.archived;
                }
                if (t.authAgentParentCompanyName != null) {
                    chatInfo.parentCompanyName = t.authAgentParentCompanyName;
                    chatInfo.obaPhoneNumber = t.authAgentObaPhoneNumber ?? "";
                }
                if ((d = ae) != null && d.length) {
                    chatInfo.mmSignalSharingExpirationWindow = o("WAWebMmSignalSharingExpirationWindowUtils").getSortedMmSignalSharingExpirationWindowFromHistorySync(ae);
                }
                ne.push(o("WAWebHistorySyncNotificationUtils").saveGroupMetadataForLeftGroup(t, chatInfo.id).catch((e)=>{
                    o("WALogger").WARN(M || (M = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] history_sync_notification_handler: saveGroupMetadataForLeftGroup failed"
                    ]))).tags("history-sync");
                }));
                const Re = C.toString();
                const Le = W.has(f);
                if (Le) {
                    ee++;
                } else {
                    W.add(f);
                }
                const Ee = Object.prototype.hasOwnProperty.call(_, Re);
                if (Ee) {
                    te++;
                } else if (!Le) {
                    F.push(chatInfo);
                }
                _[Re] = {
                    chatInfo,
                    msgs: O,
                    unifiedAddons: T
                };
            };
            let ae;
            for (const ie of proto.conversations){
                ae = yield* oe(ie);
            }
            if (Z > 0) {
                o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] overriding ",
                    " chat ids => ",
                    ""
                ])), Z, J);
            }
            if (ee > 0) {
                o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] found ",
                    " duplicated protobuf conversation ids during initial sync"
                ])), ee);
            }
            if (te > 0) {
                o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] found ",
                    " duplicated db conversation ids during initial sync"
                ])), te);
            }
            for (const le of proto.accounts){
                const se = j(le);
                if (se) {
                    newUsernameUpdates.push(se);
                }
            }
            const ue = o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(chunkInfo, q, F.length);
            o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync][initial bootstrap] preprocessing completed, ",
                ""
            ])), ue).tags("history-sync");
            if (m.length > 0) {
                o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] saving ",
                    " LIDxPN mappings obtained from conversations"
                ])), m.length);
                yield o("WAWebDBCreateLidPnMappings").createLidPnMappings({
                    mappings: m,
                    flushImmediately: true,
                    identityChangeHandlingEnabled: false,
                    learningSource: "history-msg-handler"
                });
            }
            historySyncDownloadMetric.mdBootstrapMessagesCount = q;
            historySyncDownloadMetric.mdBootstrapChatsCount = proto.conversations.length;
            o("WAWebHistorySyncNotificationUtils").commitHistoryDownloadedMetric({
                chunkDownloadFinishTimestamp,
                historySyncDownloadMetric,
                isSuccess: true,
                startTs: chunkInfo.historySyncStepStartedTs
            });
            r("WAWebSyncBootstrap").markInitialHistorySyncCountDebugStats(q, F.length);
            let ce = 0;
            const de = [];
            U.forEach(({ identityKey, userId })=>{
                if (!userId.isLid() && o("WAWebApiContact").getCurrentLid(userId) == null && userId.isRegularUser()) {
                    ce++;
                }
                try {
                    const identifier = o("WAWebSignalCommonUtils").createSignalAddress(userId).toString();
                    if (o("WAWebUserPrefsMeUser").isMeAccount(userId)) {
                        o("WAWebHistorySyncNotificationUtils").checkSelfHistorySyncIdentity(identifier, identityKey).catch(()=>{
                            o("WALogger").ERROR(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                                "[history sync] handleInitialSyncMsgs: can't save the identity key."
                            ], [
                                "[history sync] handleInitialSyncMsgs: can\\'t save the identity key."
                            ]))).sendLogs("failed-self-identity-check-from-history-sync");
                        });
                    } else {
                        de.push({
                            identifier,
                            identityKey
                        });
                    }
                } catch (e) {
                    o("WALogger").ERROR(R || (R = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] handleInitialSyncMsgs: can't save the identity key."
                    ], [
                        "[history sync] handleInitialSyncMsgs: can\\'t save the identity key."
                    ])));
                }
            });
            yield o("WAWebSignalProtocolStore").getPersistSignalProtocolStore().bulkCreateIdentity(de);
            if (ce > 0) {
                o("WALogger").ERROR(L || (L = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] handleInitialSyncMsgs: there are Identities with missing LIDs: ",
                    ""
                ])), ce).sendLogs("handleInitialSyncMsgs: there are Identities with missing LIDs", {
                    sampling: 0.01
                });
            }
            try {
                yield (O || (O = n("Promise"))).all(ne);
            } catch (e) {
                o("WALogger").WARN(E || (E = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] handleInitialSyncMsgs: saving group metadata failed"
                ]))).tags("history-sync");
            }
            yield o("WAWebSeedBotProfilesFromHistorySync").seedBotProfilesFromHistorySync(V);
            yield r("WAWebHandleAddChats")(F);
            yield o("WAWebLimitSharingProtoUtils").applyAcp2HistorySyncAdoptions(B);
            yield G(_, ue);
            yield o("WAWebApiHistorySyncNotification").updateCurrentlyProcessed(chunkInfo.msgKey, chunkInfo.syncType, chunkInfo.chunkOrder);
            o("WALogger").LOG(k || (k = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync][initial bootstrap] data applied, ",
                ""
            ])), ue).tags("history-sync");
            o("WAWebHistorySyncNotificationUtils").commitHistoryDataAppliedMetric({
                historySyncDataAppliedMetric,
                startTs: chunkInfo.historySyncStepStartedTs,
                isSuccess: true,
                forceFlushWamBuffer: true
            });
            o("WALogger").LOG(I || (I = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] storing initial sync messages complete, ",
                ""
            ])), o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(chunkInfo, q, F.length));
            o("WALogger").LOG(T || (T = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] set history initial sync boundary with length ",
                ""
            ])), Object.keys(p).length);
            yield (O || (O = n("Promise"))).all([
                o("WAWebHistorySyncNotificationUtils").handleChatThreadLoggingMetadata(proto),
                o("WAWebUserPrefsHistorySync").setHistoryInitialSyncBoundary(p),
                proto.companionMetaNonce != null ? o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set("WAWebCompanionMetaNonce", proto.companionMetaNonce) : null,
                K(proto.nctSalt)
            ]);
            o("WAWebUserPrefsModelStorage").setInitialGroupPhash(A);
            o("WAWebHistorySyncNotificationCommonUtils").reportMissingMapping(Y);
        });
        return W.apply(this, arguments);
    }
    function q(e) {
        return U.apply(this, arguments);
    }
    function U() {
        U = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chunkDownloadFinishTimestamp, chunkInfo, historySyncDataAppliedMetric, historySyncDownloadMetric, proto }) {
            o("WALogger").LOG(w || (w = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] processing history non blocking data"
            ])));
            o("WAWebHistorySyncNotificationUtils").commitHistoryDownloadedMetric({
                chunkDownloadFinishTimestamp,
                historySyncDownloadMetric,
                isSuccess: true,
                startTs: chunkInfo.historySyncStepStartedTs
            });
            if (proto.pastParticipants != null && proto.pastParticipants.length > 0) {
                yield o("WAWebHistorySyncNotificationUtils").processPastParticipants(proto, chunkInfo);
            }
            if (proto.callLogRecords != null && proto.callLogRecords.length > 0) {
                yield V(proto, chunkInfo);
            }
            if (proto.conversations != null) {
                yield o("WAWebMemberLabelHistorySync").processMemberLabels(proto);
            }
            o("WAWebHistorySyncStickers").processRecentStickers(proto, chunkInfo);
            o("WAWebHistorySyncNotificationUtils").commitHistoryDataAppliedMetric({
                historySyncDataAppliedMetric,
                startTs: chunkInfo.historySyncStepStartedTs,
                isSuccess: true
            });
        });
        return U.apply(this, arguments);
    }
    function V(e, t) {
        return H.apply(this, arguments);
    }
    function H() {
        H = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            o("WALogger").LOG(A || (A = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] start processing call log records"
            ])));
            e.callLogRecords.sort(({ startTime }, t)=>{
                const t_startTime = t.startTime;
                return o("WATimeUtils").castToUnixTime(parseInt(startTime, 10)) - o("WATimeUtils").castToUnixTime(parseInt(t_startTime, 10));
            });
            yield (O || (O = n("Promise"))).all(e.callLogRecords.map((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(callLogRecord) {
                    yield o("WAWebVoipActionWriteCallLogSync").generateCallLogFromCallSyncRecord({
                        callLogRecord,
                        fromHistorySync: true
                    });
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })()));
            o("WALogger").LOG(F || (F = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] storing call log records complete, ",
                ""
            ])), o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(t, e.callLogRecords.length));
        });
        return H.apply(this, arguments);
    }
    function G(t, a) {
        if (o("WAWebCallsOnlyGating").isCallsOnlyModeEnabled()) {
            return (O || (O = n("Promise"))).resolve();
        }
        const i = {
            add: "last",
            isHistory: true
        };
        const l = Object.keys(t).map((e)=>o("WAWebBackendApi").frontendSendAndReceive("processMultipleMessages", {
                chatId: o("WAWebWidFactory").createWid(e),
                msgObjs: t[e].msgs,
                meta: i,
                processMessagesOrigin: "historyMsgHandlerAction",
                chatMsgsCollection: null
            }));
        return (O || (O = n("Promise"))).all([].concat(l, [
            o("WAWebDBProcessInitialHistorySyncMessage").storeInitialSyncMessages(t, a)
        ])).then(()=>{
            const r = Array.prototype.concat(...Object.keys(t).map((e)=>t[e].msgs.map((e)=>e.id.toString())));
            o("WAWebCheckUpdateOrphanReactions").checkUpdateForOrphanReactions(r).catch(()=>{
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] Failed update for orphan reactions"
                ]))).sendLogs("failed-update-for-orphan-reactions");
            });
            const a = Object.keys(t).flatMap((e)=>t[e].msgs.flatMap((e)=>(e.threadIds ?? []).map((e)=>e.toString())));
            return o("WAWebSyncdOrphan").checkOrphanMutations(r, Object.keys(t), a);
        }).then(()=>o("WAWebDBDrainBotOrphansForHistoryMsgs").drainBotOrphansForHistoryMsgs(Object.keys(t).flatMap((e)=>t[e].msgs))).then(()=>(O || (O = n("Promise"))).all(Array.prototype.concat(...Object.keys(t).map((e)=>t[e].unifiedAddons))).then((e)=>o("WAWebAddonProcessMsgs").processHistoryMsgs([].concat(...e)))).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").LogoutDrop, r("WAWebNoop"))).catch((e)=>{
            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] error occurred"
            ]))).catching(r("getErrorSafe")(e)).sendLogs("msg_handler for MD: error storing/processing multiple messages");
        });
    }
    function z(accountLid, t) {
        if (!o("WAWebLidMigrationUtils").shouldHaveAccountLid(accountLid)) {
            return {
                result: "not-needed"
            };
        }
        if (t.accountLid != null) {
            const accountLid = o("WAWebWidFactory").createUserLidOrThrow(t.accountLid);
            return {
                result: "extracted",
                accountLid
            };
        }
        if (accountLid.isLid()) {
            return {
                result: "extracted",
                accountLid
            };
        }
        o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
            "[history sync] handleInitialSyncMsgs: Migrated account not sending accountLid for a PN chat in history sync"
        ]))).sendLogs("missing-account-lid-in-history-sync");
        return {
            result: "skip-chat"
        };
    }
    function j({ lid, username, countryCode }) {
        if (!(lid == null || username == null && countryCode == null)) {
            const i = o("WAWebWidFactory").createUserWidOrThrow(lid);
            let usernameCountryCode;
            if (countryCode != null) {
                usernameCountryCode = o("WAWebAsISOCountryCode").asISOCountryCode(countryCode);
                if (!usernameCountryCode && o("WAWebCurrentUser").isEmployee()) {
                    o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] invalid country code retrieved"
                    ]))).sendLogs("invalid-country-code-for-username-history-sync", {
                        sampling: 0.01
                    });
                }
            }
            if (username != null) {
                try {
                    const s = {
                        userId: i,
                        username: o("WAWebUsernameTypes").asUsername(username)
                    };
                    if (usernameCountryCode != null) {
                        s.usernameCountryCode = usernameCountryCode;
                    }
                    return s;
                } catch (error) {
                    o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] handleInitialSyncMsgs: invalid username received."
                    ]))).catching(r("getErrorSafe")(error)).sendLogs("invalid-username-history-sync");
                    if (usernameCountryCode != null) {
                        return {
                            userId: i,
                            usernameCountryCode
                        };
                    }
                    return null;
                }
            } else if (usernameCountryCode != null) {
                return {
                    userId: i,
                    usernameCountryCode
                };
            }
        }
    }
    function K(e) {
        if (e != null) {
            o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] Stored NCT salt, size=",
                " bytes"
            ])), e.byteLength);
            return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set("WAWebNctSalt", o("WABase64").encodeB64(e));
        }
        return null;
    }
    function Q(e) {
        if (e === true) {
            return o("WAWebProtobufsE2E.pb").Message$CloudAPIThreadControlNotification$CloudAPIThreadControl.CONTROL_TAKEN;
        }
        if (e === false || e === undefined) {
            return o("WAWebProtobufsE2E.pb").Message$CloudAPIThreadControlNotification$CloudAPIThreadControl.UNKNOWN;
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })();
    }
    function X(e) {
        if (e != null) {
            const t = o("WAWebUsernameTypes").LidOriginType.cast(e);
            if (t == null) {
                o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] handleInitialSyncMsgs: invalid lidOriginType received."
                ]))).sendLogs(`handleInitialSyncMsgs: invalid lidOriginType received: ${e}`);
                return o("WAWebUsernameTypes").LidOriginType.GENERAL;
            }
            if (t === o("WAWebUsernameTypes").LidOriginType.PNH_CTWA && o("WAWebUserPrefsPhoneNumberHidingThreadPromotionMigration").hasPhoneNumberHidingThreadPromotionMigrationStarted()) {
                o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] handleInitialSyncMsgs: overriding PNH_CTWA to GENERAL post-migration"
                ]))).sendLogs("handleInitialSyncMsgs: overriding PNH_CTWA lidOriginType to GENERAL post-migration");
                return o("WAWebUsernameTypes").LidOriginType.GENERAL;
            }
            return t;
        }
        return o("WAWebUsernameTypes").LidOriginType.GENERAL;
    }
    l.handleInitialSyncMsgs = B;
    l.handleNonBlockingData = q;
    l.getUsernameUpdate = j;
    l.storeNctSaltFromHistorySync = K;
    l.getCapiThreadControlForHistorySync = Q;
    l.determineLidOriginTypeForHistorySync = X;
}, 98);