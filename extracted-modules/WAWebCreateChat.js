__d("WAWebCreateChat", [
    "JSResourceForInteraction",
    "Promise",
    "WAFilterObjectNullishProps",
    "WALogger",
    "WAWebApiBusinessProfile",
    "WAWebApiChat",
    "WAWebApiChatCommon",
    "WAWebApiContact",
    "WAWebApiContactUsernameFields",
    "WAWebApiOrphanTcToken",
    "WAWebApiVerifiedBusinessName",
    "WAWebBackendApi",
    "WAWebBotStaticProfiles",
    "WAWebBotTypes",
    "WAWebChatOriginTypes",
    "WAWebChatViewMode.flow",
    "WAWebContactSystemMsg",
    "WAWebCtwaAGMUtils",
    "WAWebEphemeralityResolver",
    "WAWebEphemeralityTypes",
    "WAWebEphemeralityUtils",
    "WAWebFMXGatingUtils",
    "WAWebFetchAndSetIntegritySignals",
    "WAWebGetCTWAEligibilityFromConversion",
    "WAWebGetMessageCache",
    "WAWebHandleMsgTypes.flow",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebInitialSystemMsg",
    "WAWebLid1X1MigrationGating",
    "WAWebLidAwareContactsDB",
    "WAWebLidMigrationUtils",
    "WAWebMsgEphemerality",
    "WAWebPrivacyModeSystemMsg",
    "WAWebPsFmxActionWamEvent",
    "WAWebQueryBusinessProfile",
    "WAWebUpdateLidMetadataJob",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameGatingUtils",
    "WAWebWamEnumFmxEntryPoint",
    "WAWebWamEnumFmxEvent",
    "WAWebWidFactory",
    "WAWebWorkerSafeBackendApi",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "nullthrows"
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
    const S = r("JSResourceForInteraction")("WAWebFetchBotProfileOnChatAdd").__setRef("WAWebCreateChat");
    function R(e) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (!(!e.isFbidBot() || o("WAWebBotStaticProfiles").isStaticProfile(e))) {
                try {
                    const t = yield S.load();
                    const n = t.fetchBotProfileOnChatAdd;
                    yield n(e);
                } catch (e) {
                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "createChat: loading the bot profile fetch failed"
                    ]))).catching(r("getErrorSafe")(e)).sendLogs("bot-chat-add-profile-load-failed");
                }
            }
        });
        return L.apply(this, arguments);
    }
    function E(e) {
        return k.apply(this, arguments);
    }
    function k() {
        k = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ createChatOrigin: t, destination: n, initialProps: a, options: i }) {
            const l = i ?? {};
            const s = l.createdOffline;
            const C = s === void 0 ? false : s;
            const { firstIncomingMsg: b, forceUsync: v } = l;
            const S = v === void 0 ? false : v;
            const { nextPrivacyMode: L, suppressInitialE2EENotice: E } = l;
            const k = E === void 0 ? false : E;
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "createChat: ",
                ""
            ])), t);
            const T = n.chatId;
            let $ = T;
            if (T.isLid()) {
                r("nullthrows")(a?.lidOriginType, "Origin type is missing when creating LID chat");
                const N = o("WAWebApiContact").getPhoneNumber(T);
                const M = !o("WAWebChatOriginTypes").VALID_LID_ORIGINS.has(t);
                const w = o("WAWebChatOriginTypes").VALID_USERNAME_ORIGINS.has(t) && N != null;
                if (w && !o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated()) {
                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "createChat: ",
                        " username chat with known pn"
                    ])), t).sendLogs("unexpected-username-lid-chat");
                    if (N != null) {
                        $ = N;
                    }
                } else if (M && !o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated()) {
                    o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "lid: ",
                        ", origin type: ",
                        ""
                    ])), n.chatId.toLogString(), a?.lidOriginType);
                    o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "createChat: ",
                        " unexpected lid chat created"
                    ])), t).sendLogs("unexpected-lid-chat");
                }
                const A = yield o("WAWebApiContact").getContactRecord(o("WAWebUserPrefsMeUser").getMeLidUserOrThrow());
                if (t === "username_contactless_search" && A?.username == null) {
                    yield o("WAWebUpdateLidMetadataJob").updateLidMetadataJob([
                        {
                            lid: T,
                            data: {
                                shareOwnPn: true
                            }
                        }
                    ]);
                }
            }
            const F = $.isUser() && S ? yield o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive("getOrQueryUsyncInfo", {
                wid: $,
                forceUsync: true
            }) : null;
            const O = F == null ? $ : F.wid;
            if (!$.equals(O)) {
                const B = yield o("WAWebApiChatCommon").getChatRecord(O);
                if (B != null) {
                    return;
                }
            }
            let W = false;
            let q = false;
            let U = null;
            if (F?.bizInfo != null) {
                W = F.bizInfo?.verifiedName.isApi;
                q = F.bizInfo?.verifiedName.isSmb;
                U = o("WAWebPrivacyModeSystemMsg").getPrivacyModeFromQueryExistResponse(F);
            } else if (F == null) {
                const G = yield o("WAWebApiVerifiedBusinessName").getVerifiedBusinessNameRecordLidAware(O);
                if (G != null) {
                    q = G.isSmb;
                    W = G.isApi;
                    U = G.privacyMode != null ? o("WAWebApiVerifiedBusinessName").convertPrivacyModeFromStorageType(G.privacyMode) : null;
                }
            }
            const z = a != null ? babelHelpers.extends({}, a, {
                id: O
            }) : {
                id: O
            };
            if (o("WAWebLidMigrationUtils").shouldHaveAccountLid(O)) {
                z.accountLid = r("nullthrows")(n.accountLid, "account lid not provided for one on one chat creation");
                o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "createChat: new chat id=",
                    " lid=",
                    " pn=",
                    ""
                ])), O.toLogString(), z.accountLid?.toLogString(), o("WAWebLidMigrationUtils").toPn(O)?.toLogString() ?? "n/a");
            }
            const X = O.isUser() && !O.isBot() ? yield x({
                firstIncomingMsg: b,
                id: O,
                userIsEnterprise: W
            }) : null;
            if (X != null) {
                o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[DMResolve] DM settings found for new chat"
                ])));
                z.ephemeralDuration = X.duration;
                z.ephemeralSettingTimestamp = X.settingTimestamp;
                z.disappearingModeInitiator = X.initiator;
                z.disappearingModeTrigger = X.disappearingModeTrigger;
                z.disappearingModeInitiatedByMe = X.initiatedByMe;
                if (X.afterReadDuration != null) {
                    z.afterReadDuration = X.afterReadDuration;
                }
            }
            const Y = o("WAWebPrivacyModeSystemMsg").getLatestPrivacyMode(L, U);
            if (O.isUser()) {
                o("WAWebBackendApi").frontendFireAndForget("updateBusinessInfo", {
                    contactId: O,
                    businessInfo: {
                        privacyMode: Y
                    }
                });
            }
            let J;
            if (b?.subtype !== "ephemeral_setting") {
                J = D(O, X?.duration, X?.initiator, X?.afterReadDuration);
            }
            const Z = b?.ctwaContext != null ? o("WAWebGetCTWAEligibilityFromConversion").getCTWAEligibilityFromConversion({
                conversionData: b.ctwaContext.conversionData,
                conversionSource: b.ctwaContext.conversionSource,
                ctwaSignals: b.ctwaContext.ctwaSignals
            }) : null;
            const ee = b?.ctwaContext;
            const te = ee?.sourceApp !== o("WAWebCtwaAGMUtils").AGM_SOURCE_APP.WHATSAPP;
            const ne = t === "signupAGM";
            const re = ee != null && Z != null && !Z.is3pdag;
            const oe = b == null || b.id.fromMe;
            const ae = ee != null && te;
            const ie = yield o("WAWebContactSystemMsg").genContactInfoCardMsg(O, {
                isSmb: q,
                isEnterprise: W || b?.senderOrRecipientAccountTypeHosted === true,
                iAmStartingChat: oe,
                isWASupportStartingChat: b != null && O.isCAPISupportAccount(),
                isFromCTWA: re,
                isFMXCtWA: ae,
                isSignupDeeplink: ne
            });
            if (O.isUser() && oe && !ae) {
                z.notSpam = true;
            }
            if (ie != null) {
                new (o("WAWebPsFmxActionWamEvent")).PsFmxActionWamEvent({
                    fmxEntryPoint: o("WAWebWamEnumFmxEntryPoint").FMX_ENTRY_POINT.FMX_CARD,
                    fmxEvent: o("WAWebWamEnumFmxEvent").FMX_EVENT.FMX_CARD_INSERTED,
                    isSenderSmb: q
                }).commit();
            }
            let le;
            if (q || W) {
                le = yield P(O);
            }
            const se = (yield r("WAWebInitialSystemMsg")(O, Y, le)).filter((e)=>!k || e.subtype !== "encrypt");
            if (se.some((e)=>e.subtype === "biz_bot_3p_disclosure")) {
                z.bizBotSystemMsgType = o("WAWebBotTypes").BizBotType.BIZ_3P;
            } else if (se.some((e)=>e.subtype === "biz_bot_1p_disclosure")) {
                z.bizBotSystemMsgType = o("WAWebBotTypes").BizBotType.BIZ_1P;
            }
            const ue = yield o("WAWebApiOrphanTcToken").getOrphanTcToken(O);
            if (ue) {
                o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "createChat: found orphan tc token for ",
                    ""
                ])), O.toLogString());
                z.tcToken = ue.tcToken ?? null;
                z.tcTokenTimestamp = ue.tcTokenTimestamp ?? null;
                yield o("WAWebApiOrphanTcToken").removeOrphanTcToken(O);
            }
            try {
                if (!o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated() && z.id.isRegularUserPn()) {
                    const me = o("WAWebApiContact").getCurrentLid(z.id);
                    if (me != null) {
                        z.originalLid = me;
                    }
                }
            } catch (e) {
                o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                    "createChat: failed to get lid for ",
                    ""
                ])), z.id.toLogString()).catching(r("getErrorSafe")(e)).sendLogs("createChat-lid-offline-resume-workaround-failed-chat");
            }
            let pe;
            if (O.isLid() && o("WAWebUsernameGatingUtils").usernameAdoptionAndEngagementMonitoringEnabled()) {
                const _e = o("WAWebLidMigrationUtils").toPn(O) != null;
                if (_e) {
                    z.isUsernameThreadAtCreation = false;
                } else {
                    pe = yield o("WAWebApiContact").getContactRecord(O);
                    z.isUsernameThreadAtCreation = pe?.username != null;
                }
            }
            yield o("WAWebBackendApi").frontendFireAndForget("chatCollectionGadd", {
                chat: z
            });
            yield o("WAWebApiChat").createChatRecord(O, I(z));
            if (ie != null && !q && !W && o("WAWebFMXGatingUtils").isExpandFmxMexEnabled()) {
                const ge = o("WAWebFetchAndSetIntegritySignals").fetchAndSetIntegritySignals(O);
                o("WAWebBackendApi").frontendFireAndForget("chatCollectionUpdate", {
                    updates: [
                        {
                            id: O,
                            integritySignalsPromise: ge
                        }
                    ]
                });
            }
            const he = o("WAWebHandleMsgTypes.flow").MessageOverwriteOption.NO_OVERWRITE;
            const ye = false;
            const Ce = [].concat(se, [
                ie,
                J
            ]).filter(Boolean);
            if (C) {
                o("WAWebGetMessageCache").getMessageCache().addMessages(Ce.map((e)=>({
                        msg: e
                    })), false).catch((e)=>{
                    o("WALogger").ERROR(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                        "createChat: failed to add messages to the message cache"
                    ]))).catching(r("getErrorSafe")(e)).sendLogs("createChat-add-messages-failed");
                });
            } else {
                o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                    "createChat: will add ",
                    " messages to chat ",
                    ""
                ])), Ce.length, O.toLogString());
                for (const be of Ce){
                    yield o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                        chatId: O,
                        newMsg: be,
                        handleSingleMsgOrigin: "createChat",
                        messageOverwriteOption: he,
                        preserveOrder: ye
                    });
                }
            }
            if (n.chatId.isUser()) {
                const ve = o("WAWebWidFactory").createUserWidOrThrow(n.chatId.toString());
                const Se = ve.toJid();
                const Re = o("WAWebApiContact").getContactHash(Se);
                const Le = {
                    id: Se,
                    contactHash: Re
                };
                let Ee;
                if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
                    Ee = pe?.usernameCountryCode ?? (yield o("WAWebApiContactUsernameFields").getOrFetchContactUsernameCountryCode(O));
                    if (Ee != null) {
                        Le.usernameCountryCode = Ee;
                    }
                }
                yield r("WAWebLidAwareContactsDB").createOrMerge(Se, Le);
            }
            R(n.chatId);
        });
        return k.apply(this, arguments);
    }
    function I(t) {
        const m = {
            id: t.id.toString(),
            accountLid: t.accountLid?.toString(),
            t: t.t,
            isAutoMuted: false,
            unreadCount: t.unreadCount ?? 0,
            notSpam: t.notSpam,
            ephemeralDuration: t.ephemeralDuration,
            ephemeralSettingTimestamp: t.ephemeralSettingTimestamp,
            disappearingModeInitiator: (t.disappearingModeInitiator != null, t.disappearingModeInitiator),
            tcToken: t.tcToken ?? void 0,
            tcTokenTimestamp: t.tcTokenTimestamp ?? void 0,
            tcTokenSenderTimestamp: t.tcTokenSenderTimestamp ?? void 0,
            bizBotSystemMsgType: t.bizBotSystemMsgType,
            chatViewMode: t.chatViewMode ?? o("WAWebChatViewMode.flow").ChatViewModeType.VISIBLE,
            lidOriginType: t.lidOriginType,
            createdLocally: t.createdLocally ?? false
        };
        m.disappearingModeTrigger = (t.disappearingModeTrigger != null, t.disappearingModeTrigger);
        m.disappearingModeInitiatedByMe = t.disappearingModeInitiatedByMe ?? void 0;
        const p = t;
        if (p.isUsernameThreadAtCreation != null) {
            m.isUsernameThreadAtCreation = p.isUsernameThreadAtCreation;
        }
        if (p.isSenderNewAccount != null) {
            m.isSenderNewAccount = p.isSenderNewAccount;
        }
        if (t.name != null) {
            m.name = t.name;
        }
        if (t.isReadOnly != null) {
            m.isReadOnly = t.isReadOnly;
        }
        if (t.muteExpiration != null) {
            m.muteExpiration = t.muteExpiration;
        }
        try {
            const _ = t;
            if (_.originalLid != null) {
                m.originalLid = _.originalLid.toString();
            }
        } catch (t) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "createChatObjectForStorage: failed"
            ]))).catching(r("getErrorSafe")(t)).sendLogs("createChat-lid-offline-resume-workaround-failed-conversion");
        }
        return m;
    }
    function T(e) {
        return o("WAFilterObjectNullishProps").filterObjectNullishProps(I(e));
    }
    function D(e, t, n, r) {
        let a = null;
        if (t != null) {
            if (n === o("WAWebEphemeralityTypes").DisappearingModeInitiator.ChangedInChat) {
                a = o("WAWebContactSystemMsg").genDisappearingModeUpdateSystemMsg(e, t, null);
            } else {
                a = o("WAWebContactSystemMsg").genDefaultDisappearingModeSystemMsg({
                    afterReadDuration: r,
                    chatId: e,
                    duration: t,
                    initiatedByMe: n === o("WAWebEphemeralityTypes").DisappearingModeInitiator.InitiatedByMe
                });
            }
        }
        return a;
    }
    function x(e) {
        return $.apply(this, arguments);
    }
    function $() {
        $ = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ firstIncomingMsg: t, id: r, userIsEnterprise: a }) {
            o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                "getDisappearingModeSettingForNewChat"
            ])));
            const i = yield (v || (v = n("Promise"))).all([
                o("WAWebApiContact").getContactRecord(o("WAWebUserPrefsMeUser").getMeLidUserOrThrow()),
                o("WAWebApiContact").getContactRecord(r)
            ]);
            const l = i[0];
            const s = i[1];
            if (s && o("WAWebEphemeralityUtils").isEphemeralityDisabledForMessagingWithContact(s)) {
                o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                    "getDisappearingModeSettingForNewChat: ephemerality disabled"
                ])));
                return null;
            }
            if (!a && r.isUser() && !r.isPSA()) {
                const u = t == null || t.id.fromMe;
                if (u) {
                    return o("WAWebEphemeralityResolver").resolveNewChatDMSettings(l, s);
                }
                const c = o("WAWebEphemeralityResolver").getEphemeralDurationForUser(l);
                return o("WAWebEphemeralityResolver").resolveNewIncomingChatDMSettings(t ? o("WAWebMsgEphemerality").getMsgEphemeralitySettings(t) : null, c);
            }
        });
        return $.apply(this, arguments);
    }
    function P(e) {
        return N.apply(this, arguments);
    }
    function N() {
        N = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const n = yield o("WAWebApiBusinessProfile").getBusinessProfileRow(e.toString());
            if (n) {
                return o("WAWebBotTypes").BizBotAutomatedType.cast(n.automatedType);
            }
            const r = yield o("WAWebQueryBusinessProfile").queryBusinessProfile([
                {
                    wid: e
                }
            ]);
            return r[0]?.profile?.automated_type;
        });
        return N.apply(this, arguments);
    }
    l.createChat = E;
    l.createNewsletterObjectForStorage = T;
}, 98);