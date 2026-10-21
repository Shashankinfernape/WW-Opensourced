__d("WAWebGroupQueryGroupJob", [
    "Promise",
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebApiChat",
    "WAWebApiParticipantStore",
    "WAWebBackendApi",
    "WAWebBackendErrors",
    "WAWebBotGroupBackendUtils",
    "WAWebBotGroupGatingUtils",
    "WAWebCreateOrReplaceDisplayNamesAndLidPnMappingsJob",
    "WAWebDBCommunity",
    "WAWebDBGroupParticipant",
    "WAWebDBGroupsGroupMetadata",
    "WAWebEnvironment",
    "WAWebGroupAgentDeletedChat",
    "WAWebGroupAgentPrivacyNotice",
    "WAWebGroupAgentRemovalSystemMsgs",
    "WAWebGroupsParticipantsApi",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebLidMigrationUtils",
    "WAWebLimitSharingModelUtils",
    "WAWebMexFetchGroupInfoIncludBotsJob",
    "WAWebMexFetchGroupInfoJob",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSchemaParticipant",
    "WAWebSetUsernameJob",
    "WAWebSyncGroupBotSupportFields",
    "WAWebUpdateDbForCommunityAction",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameTypes",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
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
    const h = 400;
    const y = 403;
    function C(e) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebBotGroupGatingUtils").isOpenGroupBotParticipantAddEnabled();
            if (!t && !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()) {
                return {
                    listsAgents: false,
                    response: yield o("WAWebMexFetchGroupInfoJob").mexGetGroupInfo(babelHelpers.extends({}, e))
                };
            }
            try {
                return {
                    listsAgents: true,
                    response: yield o("WAWebMexFetchGroupInfoIncludBotsJob").mexGetGroupInfoIncludBots(babelHelpers.extends({}, e))
                };
            } catch (n) {
                if (!t && n instanceof o("WAWebBackendErrors").ServerStatusCodeError && (n.statusCode === h || n.statusCode === y)) {
                    o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "groupQueryJob: bot-inclusive query unavailable (",
                        "), retrying standard query"
                    ])), n.statusCode).sendLogs("group-info-bot-query-fallback");
                    return {
                        listsAgents: false,
                        response: yield o("WAWebMexFetchGroupInfoJob").mexGetGroupInfo(babelHelpers.extends({}, e))
                    };
                }
                throw n;
            }
        });
        return b.apply(this, arguments);
    }
    function v(t, a, i = {}) {
        const l = i;
        const p = l.preserveLocalMembership;
        const _ = p === void 0 ? false : p;
        const f = l.updateGroupStateOnError;
        const h = f === void 0 ? true : f;
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("queryGroup", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const f = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(t);
            if (f?.terminated === true) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "groupQueryJob: group ",
                    " does not exist"
                ])), t);
                return {
                    status: "terminated_local"
                };
            }
            const y = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled();
            const b = {
                groupId: t.toString(),
                queryContext: a
            };
            if (f?.hasIncompleteParticipantInformation === true && y) {
                b.queryContext = "missing_participant_identification";
            } else if (a === "enter_group_info") {
                const v = yield o("WAWebDBGroupParticipant").computeGroupParticipantsHash(t);
                if (v != null) {
                    b.participantsPhash = v;
                }
            }
            const R = Date.now();
            let E = null;
            let k = false;
            try {
                const I = yield C(b);
                E = I.response;
                k = I.listsAgents;
            } catch (e) {
                if (e instanceof o("WAWebBackendErrors").ServerStatusCodeError) {
                    if (h) {
                        yield L(t, e);
                    }
                    if (e.statusCode === 404) {
                        return {
                            status: "terminated"
                        };
                    }
                    if (e.statusCode === 403) {
                        return {
                            status: "not_member"
                        };
                    }
                }
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "groupQueryJob: rethrowing error for ",
                    ""
                ])), t);
                throw e;
            }
            let T = E?.groupInfo;
            if (T == null) {
                throw r("err")(`groupQueryJob: group ${t.toString()} returned empty response`);
            }
            T = yield S(t, T, _);
            const D = E?.participantPhashMatch === true;
            const x = T;
            const { creatorPn: $, creatorUsername: P, descOwner: N, descOwnerUsername: M, owner: w, participants: A, subjectOwner: F, subjectOwnerPn: O, subjectOwnerUsername: B } = x;
            const W = A.map((e)=>({
                    id: o("WAWebWidFactory").asUserWidOrThrow(e.id),
                    lid: e.lid ? o("WAWebWidFactory").asUserWidOrThrow(e.lid) : null,
                    displayName: e.displayName,
                    phoneNumber: e.phoneNumber ? o("WAWebWidFactory").asUserWidOrThrow(e.phoneNumber) : null
                })) ?? [];
            if (w && $) {
                W.push({
                    id: o("WAWebWidFactory").asUserWidOrThrow(w),
                    lid: o("WAWebWidFactory").asUserWidOrThrow(w),
                    phoneNumber: o("WAWebWidFactory").asUserWidOrThrow($)
                });
            }
            if (F && O) {
                W.push({
                    id: o("WAWebWidFactory").asUserWidOrThrow(F),
                    lid: o("WAWebWidFactory").asUserWidOrThrow(F),
                    phoneNumber: o("WAWebWidFactory").asUserWidOrThrow(O)
                });
            }
            const q = [];
            if (w && P != null) {
                q.push({
                    userId: o("WAWebWidFactory").asUserWidOrThrow(w),
                    username: o("WAWebUsernameTypes").asUsername(P)
                });
            }
            if (F && B != null) {
                q.push({
                    userId: o("WAWebWidFactory").asUserWidOrThrow(F),
                    username: o("WAWebUsernameTypes").asUsername(B)
                });
            }
            if (N && M != null) {
                q.push({
                    userId: o("WAWebWidFactory").asUserWidOrThrow(N),
                    username: o("WAWebUsernameTypes").asUsername(M)
                });
            }
            A.forEach(({ id: t, username: n })=>{
                if (n != null) {
                    q.push({
                        userId: o("WAWebWidFactory").asUserWidOrThrow(t),
                        username: o("WAWebUsernameTypes").asUsername(n)
                    });
                }
            });
            let U = false;
            if (o("WAWebBotGroupGatingUtils").isOpenGroupBotParticipantAddEnabled() || o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled()) {
                const V = yield o("WAWebGroupAgentDeletedChat").isBotGroupStateChangeInDeletedGroupChat({
                    chatId: t,
                    currentIsOpenBotGroupState: T.isOpenBotGroup,
                    currentIsTeeBotGroupState: T.isTeeBotGroup,
                    prevIsOpenBotGroupState: f?.isOpenBotGroup,
                    prevIsTeeBotGroupState: f?.isTeeBotGroup
                });
                U = yield o("WAWebBotGroupBackendUtils").addGroupChangedToOpenBotGroupSystemMsgIfRequired({
                    currentIsOpenBotGroupState: T.isOpenBotGroup,
                    groupWid: t,
                    prevIsOpenBotGroupState: f?.isOpenBotGroup,
                    skipSystemMsg: V
                });
                U = (yield o("WAWebBotGroupBackendUtils").addGroupChangedToTeeBotGroupSystemMsgIfRequired({
                    currentIsTeeBotGroupState: T.isTeeBotGroup,
                    groupWid: t,
                    prevIsTeeBotGroupState: f?.isTeeBotGroup,
                    skipSystemMsg: V
                })) || U;
            }
            const H = k && D !== true ? yield o("WAWebSchemaParticipant").getParticipantTable().get(t.toString()) : null;
            const G = yield o("WAWebApiChat").injectAdditionalEphemeralInfoFromDB([
                T
            ]);
            const z = G[0];
            const j = yield (g || (g = n("Promise"))).all([
                D === true ? o("WAWebDBGroupParticipant").getGroupParticipant({
                    groupWid: t
                }) : null,
                o("WAWebDBGroupsGroupMetadata").updateGroupMetadataTable({
                    groupInfos: [
                        z
                    ]
                }),
                D !== true && o("WAWebGroupsParticipantsApi").updateParticipants({
                    group: T.id,
                    participants: A,
                    groupInfo: T
                }),
                o("WAWebCreateOrReplaceDisplayNamesAndLidPnMappingsJob").createOrReplaceDisplayNamesAndLidPnMappings(W, true),
                y && q.length > 0 && o("WAWebSetUsernameJob").setUsernamesJob(q)
            ]);
            const K = j[0];
            const Q = yield o("WAWebGroupAgentDeletedChat").getPrevParticipantIdsForMetadataAgentRows({
                chatId: t,
                currentParticipantIds: A.map(({ id: t })=>t),
                prevParticipantIds: H?.participants
            });
            try {
                const Y = yield o("WAWebGroupAgentRemovalSystemMsgs").genGroupAgentRemovalMsgsForMetadata({
                    currentParticipants: A,
                    groupWid: t,
                    isLidAddressingMode: f?.isLidAddressingMode ?? T.isLidAddressingMode,
                    previousParticipantIds: Q ?? []
                });
                yield (g || (g = n("Promise"))).all(Y.map((e)=>o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                        chatId: t,
                        newMsg: e,
                        handleSingleMsgOrigin: "botGroup"
                    })));
            } catch (e) {
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "groupQueryJob: failed to insert actorless agent removal rows"
                ]))).catching(r("getErrorSafe")(e)).sendLogs("group-query-agent-removal-rows-error");
            }
            if (o("WAWebBotGroupGatingUtils").isOpenGroupBotParticipantAddEnabled() || o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled()) {
                U = (yield o("WAWebBotGroupBackendUtils").addBotGroupChangedToE2EEFSystemMsgIfRequired({
                    currentIsOpenBotGroupState: T.isOpenBotGroup,
                    currentIsTeeBotGroupState: T.isTeeBotGroup,
                    groupWid: t,
                    prevIsOpenBotGroupState: f?.isOpenBotGroup,
                    prevIsTeeBotGroupState: f?.isTeeBotGroup
                })) || U;
                if (U && T.isOpenBotGroup != null) {
                    o("WAWebBackendApi").frontendFireAndForget("updateGroupMetadataModelForAiGroupState", {
                        group: T.id,
                        isOpenBotGroup: T.isOpenBotGroup
                    });
                }
            }
            yield o("WAWebGroupAgentPrivacyNotice").insertGroupAgentPrivacyNoticeForMetadataIfRequired({
                currentParticipantIds: A.map(({ id: t })=>t),
                groupWid: t,
                prevParticipantIds: Q
            }).catch((e)=>{
                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "groupQueryJob: failed to insert the group agent privacy notice"
                ]))).catching(r("getErrorSafe")(e)).sendLogs("group-query-group-agent-privacy-notice-error");
            });
            yield o("WAWebBotGroupBackendUtils").addE2EESystemMsgAfterLastAgentRemovedIfRequired({
                currentParticipants: A,
                groupWid: t,
                prevParticipantIds: Q,
                responseListsAgents: k
            }).catch((e)=>{
                o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "groupQueryJob: failed to insert the agent removal notice"
                ]))).catching(r("getErrorSafe")(e)).sendLogs("group-query-agent-removal-notice-error");
            });
            if (K != null) {
                T = babelHelpers.extends({}, T, {
                    participants: K.participants
                });
            }
            o("WAWebSyncGroupBotSupportFields").maybeLazySyncGroupBotSupportFields(T.participants.map(({ id: t })=>t), [], {
                sourceGroupWid: T.id
            }).catch((e)=>{
                o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "groupQueryJob: failed to refresh group agent profiles"
                ]))).catching(r("getErrorSafe")(e)).sendLogs("group-query-refresh-agent-profiles-error");
            });
            o("WAWebApiParticipantStore").clearAdminshipCache(T.id.toString());
            o("WAWebLimitSharingModelUtils").genLimitSharingSystemMessageOnPersistedChat({
                chatWID: t,
                sharingLimited: z.limitSharingEnabled,
                acp2Enabled: z.acp2Enabled
            });
            o("WAWebLimitSharingModelUtils").genAcp2SystemMessageOnPersistedChat({
                chatWID: t,
                enabled: z.acp2Enabled,
                snapshotRequestedAtMs: R
            });
            return {
                status: "success",
                groupInfo: T
            };
        }), r("WAWebEnvironment").isWindows ? {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.HIGH
        } : null).waitUntilCompleted();
    }
    function S(e, t, n) {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            if (!n || t.participants.some(({ id: t })=>o("WAWebUserPrefsMeUser").isMeAccount(t))) {
                return t;
            }
            const r = yield o("WAWebDBGroupParticipant").getGroupParticipant({
                groupWid: e
            });
            const a = r == null ? void 0 : r.participants.find(({ id: t })=>o("WAWebUserPrefsMeUser").isMeAccount(t));
            if (a == null) {
                return t;
            }
            return babelHelpers.extends({}, t, {
                participants: [].concat(t.participants, [
                    a
                ])
            });
        });
        return R.apply(this, arguments);
    }
    function L(e, t) {
        return E.apply(this, arguments);
    }
    function E() {
        E = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                "queryGroupJob: group ",
                " returned error ",
                ""
            ])), e, t.statusCode);
            const a = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(e);
            if (a == null) {
                o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "queryGroupJob: group ",
                    " does not exist locally"
                ])), e);
                return;
            }
            e: {
                if (t.statusCode === 403) {
                    const i = a != null && (yield o("WAWebDBCommunity").isLastJoinedSubgroup(a));
                    const l = yield o("WAWebSchemaParticipant").getParticipantTable().get(e.toString());
                    if (l?.participants != null) {
                        const s = l.participants.find((e)=>o("WAWebUserPrefsMeUser").isMeAccount(o("WAWebWidFactory").createWid(e)));
                        if (s != null) {
                            const u = o("WAWebWidFactory").createUserWidOrThrow(s);
                            const c = o("WAWebLidMigrationUtils").toLid(u);
                            const d = !!(a != null && a.defaultSubgroup);
                            const m = d ? o("WAWebDBGroupParticipant").removeParticipantInfoCAG(l, [
                                {
                                    id: u,
                                    lid: c,
                                    isAdmin: false,
                                    isSuperAdmin: false
                                }
                            ], Date.now(), null, null) : o("WAWebDBGroupParticipant").removeParticipantInfo(l, [
                                {
                                    id: u,
                                    isAdmin: false,
                                    isSuperAdmin: false
                                }
                            ], Date.now(), null, null);
                            yield o("WAWebSchemaParticipant").getParticipantTable().createOrReplace(m);
                        }
                    }
                    if (a != null && a.defaultSubgroup === true && !r("isStringNullOrEmpty")(a.parentGroup)) {
                        const p = o("WAWebWidFactory").createWid(a.parentGroup);
                        const h = yield o("WAWebSchemaParticipant").getParticipantTable().get(p.toString());
                        if (h?.participants != null) {
                            const y = h.participants.find((e)=>o("WAWebUserPrefsMeUser").isMeAccount(o("WAWebWidFactory").createWid(e)));
                            if (y != null) {
                                const C = o("WAWebWidFactory").createUserWidOrThrow(y);
                                const b = o("WAWebLidMigrationUtils").toLid(C);
                                const v = o("WAWebDBGroupParticipant").removeParticipantInfoCAG(h, [
                                    {
                                        id: C,
                                        lid: b,
                                        isAdmin: false,
                                        isSuperAdmin: false
                                    }
                                ], Date.now(), null, null);
                                yield o("WAWebSchemaParticipant").getParticipantTable().createOrReplace(v);
                            }
                        }
                    }
                    yield (g || (g = n("Promise"))).all((yield o("WAWebUpdateDbForCommunityAction").databaseUpdatesForSelfRemovedFromGroup(e, a?.parentGroup, i)));
                    break e;
                }
                if (t.statusCode === 404) {
                    yield o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(e, {
                        terminated: true
                    });
                    break e;
                }
                throw t;
            }
        });
        return E.apply(this, arguments);
    }
    l.fetchGroupInfoWithBotFallback = C;
    l.queryGroupJob = v;
    l.handleGroupInfoError = L;
}, 98);