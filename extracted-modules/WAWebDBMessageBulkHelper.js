__d("WAWebDBMessageBulkHelper", [
    "Promise",
    "WALogger",
    "WALoggerUtils",
    "WAWebApiContact",
    "WAWebBackendApi",
    "WAWebBizBroadcastProHiddenChatClassifier",
    "WAWebBizBroadcastProHiddenChatStorage",
    "WAWebChatViewMode.flow",
    "WAWebCommonMsgUtils",
    "WAWebCurrentUser",
    "WAWebDBAddOnProviders",
    "WAWebDBCAPIPermissions",
    "WAWebDBChatValidation",
    "WAWebDBEncryptMultipleMsgs",
    "WAWebDBExperienceIdStore",
    "WAWebDBMessageUtils",
    "WAWebDBStoreEncryptedMsgs",
    "WAWebDBStoreNewsletterEncryptedMsgs",
    "WAWebLidMigrationLogging",
    "WAWebLidMigrationUtils",
    "WAWebModelStorageUtils",
    "WAWebMsgGetters",
    "WAWebMsgStoreExtensions",
    "WAWebNewsletterDBUtils",
    "WAWebQuarantineDataStore",
    "WAWebSchemaChat",
    "WAWebSchemaGroupMetadata",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsPhoneNumberHidingThreadPromotionMigration",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameTypes",
    "WAWebViewMode.flow",
    "WAWebViewModeUtils",
    "WAWebVoipGatingUtils",
    "WAWebWamEnumWebcChatCreateCreationMethod",
    "WAWebWebcChatCreateWamEvent",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "compactMap",
    "countWhere",
    "getErrorSafe",
    "gkx",
    "justknobx"
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
    function S(e, t) {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = yield o("WAWebMsgStoreExtensions").prepareNewMsgsForStore(e);
            try {
                yield k(n, t);
            } catch (error) {
                const a = r("getErrorSafe")(error);
                if (o("WAWebDBStoreEncryptedMsgs").isEligibleForFallback(n.length, a)) {
                    yield k(n, t, true);
                } else {
                    throw a;
                }
            }
        });
        return R.apply(this, arguments);
    }
    function L(e, t) {
        return E.apply(this, arguments);
    }
    function E() {
        E = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            try {
                let i = t.filter((e)=>{
                    const participant = e.id.participant;
                    return participant && participant.isLid() && o("WAWebLidMigrationUtils").toPn(participant) == null && e.id.remote.isGroup() && !o("WAWebUserPrefsMeUser").isMeAccount(participant);
                });
                if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
                    const l = r("compactMap")(i, function(e) {
                        return e.id.participant;
                    });
                    if (l.length > 0) {
                        const _ = yield o("WAWebApiContact").bulkGetContactRecord(l);
                        const f = _.reduce((acc, item)=>{
                            if (item?.id != null && item?.username != null) {
                                acc.add(item.id);
                            }
                            return acc;
                        }, new Set);
                        i = i.filter((e)=>{
                            const participant = e.id.participant;
                            return participant && !f.has(participant.toString());
                        });
                    }
                }
                if (i.length === 0) {
                    return;
                }
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "logMissingGroupParticipantLids: has some participants with missing Lids"
                ])));
                const g = [];
                i.forEach((e)=>{
                    if (g.length < 3) {
                        g.push({
                            type: e.type,
                            subtype: e.subtype
                        });
                    }
                });
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "logMissingGroupParticipantLids: Missing PN mappings while saving ",
                    " Lid group messages. types/subtypes => ",
                    ""
                ])), i.length, JSON.stringify(g));
                const h = new Set(i.map((e)=>e.id.remote.toString()));
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "logMissingGroupParticipantLids: number affected groups: ",
                    ""
                ])), h.size);
                const y = yield o("WAWebSchemaGroupMetadata").getGroupMetadataTable().anyOf([
                    "id"
                ], Array.from(h));
                const C = [];
                y.forEach((e)=>{
                    if (C.length < 3) {
                        C.push({
                            announce: e.announce,
                            isParentGroup: e.isParentGroup
                        });
                    }
                });
                if (y.length > 0) {
                    o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "logMissingGroupParticipantLids: Missing PN mappings while saving Lid group messages for ",
                        " groups. announce/isParent => ",
                        ""
                    ])), y.length, JSON.stringify(C));
                }
                const b = y.filter((e)=>e?.announce === false);
                if (b.length === 0) {
                    return;
                }
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "logMissingGroupParticipantLids: number non Cag Groups: ",
                    ""
                ])), b.length);
                const v = r("countWhere")(b, function(e) {
                    return !!(e != null && e.isLidAddressingMode);
                });
                const S = b.length - v;
                o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "logMissingGroupParticipantLids: Missing PN mappings while saving Lid group messages. lid groups count: ",
                    ", pn groups count: ",
                    ",\n          is history: ",
                    ""
                ])), v, S, n?.toString() ?? "na").sendLogs("no-pn-mapping-for-group-lid-message");
            } catch (error) {
                o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "Could not log missing Lids ",
                    ""
                ])), error).sendLogs("could-not-log-missing-lids");
            }
        });
        return E.apply(this, arguments);
    }
    function k(e, t, n) {
        return I.apply(this, arguments);
    }
    function I() {
        I = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, r = false) {
            if (o("WAWebCurrentUser").isEmployee()) {
                o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "persistNewMessagesInBulk: ",
                    ""
                ])), e.map((e)=>e?.id?.id));
            }
            const a = o("WAWebQuarantineDataStore").extractQuarantineDataFromMessages(e);
            L(e);
            const i = yield (v || (v = n("Promise"))).all([
                x(e),
                o("WAWebDBEncryptMultipleMsgs").encryptMultipleDBMsgs(e, false)
            ]);
            const l = i[0];
            const s = i[1];
            const { capiCallingPermissionUpdates, chatUpdates } = l;
            const d = [
                "chat",
                "fts-indexing-queue",
                "message",
                "message-association"
            ];
            const m = a.length > 0 ? [].concat(d, [
                "quarantine-data"
            ]) : d;
            if (o("WAWebDBExperienceIdStore").shouldLockExperienceIdTable(e)) {
                m.push("experience-id");
            }
            yield o("WAWebModelStorageUtils").getStorage().lock(m, (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*([n, i, l, u, d]) {
                    o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                        "persistNewMessagesInBulk: bulkCreateOrMerge"
                    ]))).tags("missing-lid");
                    o("WAWebDBChatValidation").validateAccountLidInChatRows(chatUpdates, "persistNewMessagesInBulk");
                    yield n.bulkCreateOrMerge(chatUpdates);
                    yield o("WAWebDBStoreEncryptedMsgs").storeEncryptedDBMessages(s, t, false, r);
                    yield o("WAWebQuarantineDataStore").bulkCreateOrReplaceQuarantineData(a, d);
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })());
            if (capiCallingPermissionUpdates.length > 0) {
                o("WAWebBackendApi").frontendFireAndForget("bulkUpdateChatCapiCallingPermissionType", {
                    updates: capiCallingPermissionUpdates
                });
            }
            const p = [];
            for (const g of chatUpdates){
                const { chatViewMode, id } = g;
                if (chatViewMode != null) {
                    p.push({
                        id: o("WAWebWidFactory").createWid(id),
                        chatViewMode
                    });
                }
            }
            if (p.length > 0) {
                o("WAWebBackendApi").frontendFireAndForget("chatCollectionUpdate", {
                    updates: p
                });
            }
        });
        return I.apply(this, arguments);
    }
    function T(e) {
        return D.apply(this, arguments);
    }
    function D() {
        D = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield (v || (v = n("Promise"))).all([
                x(e),
                o("WAWebDBEncryptMultipleMsgs").encryptMultipleDBMsgs(e, false),
                o("WAWebNewsletterDBUtils").getGuestNewsletterJids(e.map((e)=>e.id.remote.toString())).catch((e)=>{
                    o("WALogger").WARN(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                        "persistNewNewsletterMessagesInBulk: newsletter membership lookup failed"
                    ])));
                    return new Set;
                })
            ]);
            const r = t[0];
            const a = t[1];
            const i = t[2];
            const { capiCallingPermissionUpdates, chatUpdates } = r;
            const u = [
                "chat",
                "message",
                "message-association"
            ];
            if (o("WAWebDBExperienceIdStore").shouldLockExperienceIdTable(e)) {
                u.push("experience-id");
            }
            yield o("WAWebModelStorageUtils").getStorage().lock(u, (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*([t]) {
                    o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                        "persistNewNewsletterMessagesInBulk: bulkCreateOrMerge"
                    ]))).tags("missing-lid");
                    o("WAWebDBChatValidation").validateAccountLidInChatRows(chatUpdates, "persistNewNewsletterMessagesInBulk");
                    yield t.bulkCreateOrMerge(chatUpdates);
                    yield o("WAWebDBStoreNewsletterEncryptedMsgs").storeEncryptedNewsletterMessages(a, i);
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })());
            if (capiCallingPermissionUpdates.length > 0) {
                o("WAWebBackendApi").frontendFireAndForget("bulkUpdateChatCapiCallingPermissionType", {
                    updates: capiCallingPermissionUpdates
                });
            }
        });
        return D.apply(this, arguments);
    }
    function x(e) {
        return $.apply(this, arguments);
    }
    function $() {
        $ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = new Map;
            const n = new Set;
            const a = new Map;
            let i = false;
            e.forEach((e)=>{
                const r = e.id;
                const l = r.remote.toString();
                if (r.remote.isRegularUser() && o("WAWebBizBroadcastProHiddenChatClassifier").isBizBroadcastProHiddenChatsEnabled()) {
                    i = true;
                    const s = a.get(l);
                    if (s == null) {
                        a.set(l, [
                            e
                        ]);
                    } else {
                        s.push(e);
                    }
                }
                const u = t.get(l) || {
                    unread: 0,
                    t: 0,
                    unreadMentionsOfMe: [],
                    broadcast: e.broadcast === true
                };
                const c = o("WAWebMsgGetters").getIsUnreadType(e);
                const d = c || N(e);
                if (!o("WAWebMsgGetters").getIsStatus(e) && d) {
                    if (c && !r.fromMe && e.read !== true && (u.unread += 1, o("WAWebMsgGetters").getIsImportantMessage(e))) {
                        const m = {
                            id: e.id.toString(),
                            timestamp: e.t
                        };
                        if (u.unreadMentionsOfMe) {
                            u.unreadMentionsOfMe.push(m);
                        } else {
                            u.unreadMentionsOfMe = [
                                m
                            ];
                        }
                    }
                    if (e.t != null && e.t > 0) {
                        n.add(e.id.toString());
                    }
                    if (e.t != null && e.t > u.t) {
                        u.t = Math.max(e.t, u.t);
                    }
                    t.set(l, u);
                }
                const p = o("WAWebDBMessageUtils").isCoexCallingPermissionsRequestMessage(e);
                const _ = !p && o("WAWebDBMessageUtils").isCoexCallingPermissionsResponseMessage(e);
                if ((p || _) && o("WAWebVoipGatingUtils").isCoexCallingPermissionsEnabled()) {
                    if (p) {
                        u.capiCallingPermissionType = o("WAWebDBCAPIPermissions").CloudAPICallingPermissionType.PENDING;
                    } else if (_) {
                        u.capiCallingPermissionType = o("WAWebDBMessageUtils").getSelectedCallingPermissions(e);
                    }
                    t.set(l, u);
                }
            });
            const l = Array.from(t.keys());
            const s = Array.from(a.keys()).filter((e)=>!t.has(e));
            const u = yield o("WAWebSchemaChat").getChatTable().bulkGet(l.concat(s));
            const c = u.slice(0, l.length);
            const d = r("justknobx")._("310");
            const capiCallingPermissionUpdates = [];
            const p = [];
            let _ = false;
            const f = c.map((e, n)=>{
                const s = l[n];
                const u = t.get(s);
                const c = u?.unread || 0;
                const f = Math.max(0, e ? e.unreadCount : 0);
                let g = u?.t || undefined;
                if (e && e.t != null && (g == null || e.t > g)) {
                    g = e.t;
                }
                let h = [];
                let archiveAtMentionViewedInDrawer = e?.archiveAtMentionViewedInDrawer ?? false;
                const C = u?.unreadMentionsOfMe ?? [];
                const b = e?.unreadMentionsOfMe ?? [];
                if (C.length > 0) {
                    archiveAtMentionViewedInDrawer = false;
                }
                h = C.concat(b);
                const v = {
                    id: s,
                    unreadCount: f + c,
                    t: g,
                    unreadMentionsOfMe: h,
                    archiveAtMentionViewedInDrawer
                };
                if (d && e == null && u?.broadcast === true) {
                    v.createdLocally = true;
                }
                const S = o("WAWebWidFactory").createWid(s);
                const capiCallingPermissionType = u?.capiCallingPermissionType;
                if (capiCallingPermissionType != null) {
                    v.capiCallingPermissionType = capiCallingPermissionType;
                    capiCallingPermissionUpdates.push({
                        chatId: S,
                        capiCallingPermissionType
                    });
                }
                if (o("WAWebLidMigrationUtils").shouldHaveAccountLid(S)) {
                    if (e == null) {
                        v.accountLid = o("WAWebLidMigrationUtils").toUserLidOrThrow(S).toString();
                        if (S.isLid()) {
                            if (o("WAWebApiContact").getPhoneNumber(S) != null || o("WAWebUserPrefsPhoneNumberHidingThreadPromotionMigration").hasPhoneNumberHidingThreadPromotionMigrationStarted()) {
                                v.lidOriginType = o("WAWebUsernameTypes").LidOriginType.GENERAL;
                            } else {
                                v.lidOriginType = o("WAWebUsernameTypes").LidOriginType.PNH_CTWA;
                            }
                        }
                    } else if (e.accountLid == null) {
                        if (!_) {
                            o("WAWebLidMigrationLogging").logLidMetadata();
                            _ = true;
                        }
                        if (p.length < 3) {
                            p.push(S.toLogString());
                        }
                    }
                }
                return v;
            });
            if (p.length > 0) {
                o("WALogger").ERROR(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                    "getUpdatedChatMetadata: ",
                    " chats from DB have no account_lid => ",
                    ""
                ])), p.length, p).sendLogs("chat-in-db-has-no-account-lid").tags("missing-lid");
            }
            o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                "[offline-resume][msg-cache]: storing chat updates for ",
                " chats"
            ])), f.length);
            const g = c.some((e)=>e == null);
            if (g) {
                const h = new Set(c.map((e)=>e?.id));
                const noCreated = r("countWhere")(l, function(e) {
                    return r("WAWebWid").isRegularUserNoImply(e) && !h.has(e);
                });
                if (noCreated > 0) {
                    new (o("WAWebWebcChatCreateWamEvent")).WebcChatCreateWamEvent({
                        creationMethod: o("WAWebWamEnumWebcChatCreateCreationMethod").WEBC_CHAT_CREATE_CREATION_METHOD.MISSING_WHEN_SAVING_MESSAGE,
                        noCreated
                    }).commit();
                    o("WALogger").ERROR(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                        "[offline-resume][msg-cache]: missing chats when saving message: ",
                        ""
                    ])), noCreated).sendLogs("missing-chats-when-saving-message", {
                        sampling: r("gkx")("26258") ? o("WALoggerUtils").dynamicLoggingSampling(0.0001) : 1
                    });
                }
            }
            if (!i) {
                return {
                    chatUpdates: f,
                    capiCallingPermissionUpdates
                };
            }
            const S = f.map((e, t)=>P(c[t], e, a, n));
            s.forEach((e, t)=>{
                const r = u[l.length + t];
                if (r?.chatViewMode === o("WAWebChatViewMode.flow").ChatViewModeType.ONLY_MARKETING_FROM_SELF) {
                    S.push(P(r, {
                        id: e
                    }, a, n));
                }
            });
            return {
                chatUpdates: S,
                capiCallingPermissionUpdates
            };
        });
        return $.apply(this, arguments);
    }
    function P(e, t, n, r) {
        const a = n.get(t.id);
        if (a == null) {
            return t;
        }
        return o("WAWebBizBroadcastProHiddenChatStorage").applyBizBroadcastProHiddenChatState(e, t, a, o("WAWebWidFactory").createWid(t.id), r);
    }
    function N(e) {
        return o("WAWebCommonMsgUtils").isFutureproofMsg(o("WAWebMsgGetters").getType(e)) && !e.id.remote.isBroadcast() && o("WAWebDBAddOnProviders").getAddOnProviderForFutureproofMsg(e) == null && o("WAWebViewModeUtils").isViewModeVisibleInSurface(o("WAWebViewMode.flow").ViewModeSurface.CHAT, e.viewMode);
    }
    l.persistNewMessagesInBulk = S;
    l.logMissingGroupParticipantLids = L;
    l.persistNewNewsletterMessagesInBulk = T;
}, 98);