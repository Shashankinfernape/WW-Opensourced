__d("WAWebHistorySyncNotificationUtils", [
    "$InternalEnum",
    "Promise",
    "WALogger",
    "WALongInt",
    "WATimeUtils",
    "WAWebApiHistorySyncNotification",
    "WAWebChatCollection",
    "WAWebChatThreadLogging",
    "WAWebDBGroupParticipant",
    "WAWebDBGroupsGroupMetadata",
    "WAWebEphemeralityUtils",
    "WAWebGroupMetadataCollection",
    "WAWebGroupParticipantModel",
    "WAWebGroupParticipantsJob",
    "WAWebHistorySyncLogUtils",
    "WAWebLeaveReasonType",
    "WAWebProtobufsHistorySync.pb",
    "WAWebSchemaHistorySyncNotification",
    "WAWebSignalProtocolStore",
    "WAWebWamEnumMdBootstrapStepResult",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    const p = n("$InternalEnum").Mirrored([
        "NewRecentSyncNotification",
        "NewOnDemandSyncNotification",
        "LastProcessedNotification",
        "InitialSyncComplete",
        "BackendStart",
        "HistorySyncStatusCheck",
        "ManualRestart"
    ]);
    function _(e, t) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = e.pastParticipants.map((e)=>({
                    groupId: r("nullthrows")(e.groupJid),
                    pastParticipants: e.pastParticipants.map((e)=>({
                            id: o("WAWebWidFactory").createWid(r("nullthrows")(e.userJid)),
                            leaveReason: e.leaveReason === o("WAWebProtobufsHistorySync.pb").PastParticipant$LeaveReason.LEFT ? o("WAWebLeaveReasonType").LeaveReason.Left : o("WAWebLeaveReasonType").LeaveReason.Removed,
                            leaveTs: o("WALongInt").numberOrThrowIfTooLarge(r("nullthrows")(e.leaveTs))
                        }))
                }));
            yield o("WAWebDBGroupParticipant").addPastParticipants(n);
            n.forEach((e)=>{
                const t = o("WAWebChatCollection").ChatCollection.gadd(o("WAWebWidFactory").createWid(e.groupId));
                const t_groupMetadata = t.groupMetadata;
                if (t_groupMetadata != null) {
                    t_groupMetadata.pastParticipants.add(e.pastParticipants, {
                        merge: true
                    });
                }
            });
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] Past Participants completed, ",
                ""
            ])), o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(t));
        });
        return f.apply(this, arguments);
    }
    function g(e, t) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = yield o("WAWebSignalProtocolStore").getPersistSignalProtocolStore().loadIdentityKey(e);
            if (n != null && n !== t) {
                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] get changed self identity key from history sync,\n     existing length: ",
                    ", new length: ",
                    ""
                ])), n.length, t.length).tags("history-sync").sendLogs("self-identity-change-from-history-sync");
            }
        });
        return h.apply(this, arguments);
    }
    function y(e, t) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (t.isGroup()) {
                const a = e.disappearingMode?.trigger;
                let i;
                if (a != null) {
                    const l = o("WAWebEphemeralityUtils").getDisappearingModeTriggerFromProtobuf(a);
                    if (l != null) {
                        i = l;
                    }
                }
                if (e.suspended != null || e.terminated != null || e.createdBy != null || e.createdAt != null || e.description != null || e.support != null || e.isParentGroup != null || e.isDefaultSubgroup != null || e.parentGroupId != null || e.disappearingMode != null || e.appealStatus != null || e.appealUpdateTime != null) {
                    const c = {
                        id: t,
                        subject: e.name,
                        suspended: e.suspended,
                        terminated: e.terminated,
                        owner: e.createdBy != null ? o("WAWebWidFactory").createWid(e.createdBy) : undefined,
                        creation: e.createdAt,
                        desc: e.description,
                        support: e.support,
                        isParentGroup: e.isParentGroup,
                        defaultSubgroup: e.isDefaultSubgroup,
                        parentGroup: e.parentGroupId != null ? o("WAWebWidFactory").createWid(e.parentGroupId) : undefined,
                        disappearingModeInitiatedByMe: e.disappearingMode?.initiatedByMe,
                        disappearingModeTrigger: i,
                        suspendAppealStatus: e.appealStatus != null ? e.appealStatus === o("WAWebProtobufsHistorySync.pb").Conversation$GroupAppealStatus.APPEAL_IN_REVIEW ? "IN_REVIEW" : e.appealStatus === o("WAWebProtobufsHistorySync.pb").Conversation$GroupAppealStatus.APPEAL_APPROVED ? "APPROVED" : e.appealStatus === o("WAWebProtobufsHistorySync.pb").Conversation$GroupAppealStatus.APPEAL_REJECTED ? "REJECTED" : e.appealStatus === o("WAWebProtobufsHistorySync.pb").Conversation$GroupAppealStatus.NO_APPEAL ? null : (()=>{
                            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e.appealStatus}`);
                        })() : undefined,
                        suspendAppealUpdateTime: e.appealUpdateTime != null ? Number(e.appealUpdateTime) : undefined
                    };
                    yield o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(t, babelHelpers.extends({}, c, {
                        id: c.id.toString(),
                        owner: c.owner !== undefined ? c.owner.toString() : undefined,
                        creation: c.creation !== undefined ? Number(c.creation) : undefined,
                        parentGroup: c.parentGroup !== undefined ? String(c.parentGroup) : undefined
                    }));
                    const m = r("WAWebGroupMetadataCollection").add(babelHelpers.extends({}, c), {
                        merge: true
                    })[0];
                    const p = e.participant?.map(function(e) {
                        const isSuperAdmin = e.rank === o("WAWebProtobufsHistorySync.pb").GroupParticipant$Rank.SUPERADMIN;
                        const n = e.rank === o("WAWebProtobufsHistorySync.pb").GroupParticipant$Rank.ADMIN;
                        return new (r("WAWebGroupParticipantModel"))({
                            id: o("WAWebWidFactory").createWid(e.userJid),
                            isAdmin: n || isSuperAdmin,
                            isSuperAdmin
                        });
                    });
                    if (m != null) {
                        m.participants.add(p, {
                            merge: true
                        });
                    }
                    if (e.readOnly === true || p.length > 0) {
                        o("WAWebGroupParticipantsJob").updateParticipantsJob({
                            group: t,
                            participants: p.map((e)=>({
                                    id: e.id,
                                    isAdmin: e.isAdmin,
                                    isSuperAdmin: e.isSuperAdmin
                                })),
                            skipDeviceSync: e.readOnly
                        }).catch((e)=>{
                            o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                                "updateParticipantsJob: failed: ",
                                ""
                            ])), e);
                        });
                    }
                }
            }
        });
        return C.apply(this, arguments);
    }
    function b(t) {
        let r = (m || (m = n("Promise"))).resolve();
        let a = m.resolve();
        if (t.threadIdUserSecret != null) {
            r = o("WAWebChatThreadLogging").setThreadIdUserSecret(t.threadIdUserSecret);
        } else {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] handleChatThreadLoggingMetadata: missing threadIdUserSecret"
            ]))).sendLogs("ctl-missing-secret-history-sync");
        }
        if (t.threadDsTimeframeOffset != null) {
            a = o("WAWebChatThreadLogging").setThreadDsTimeframeOffset(t.threadDsTimeframeOffset);
        } else {
            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] handleChatThreadLoggingMetadata: missing threadDsTimeframeOffset"
            ]))).sendLogs("ctl-missing-offset-history-sync");
        }
        return m.all([
            r,
            a
        ]);
    }
    function v(e, t, n) {
        e.mdTimestamp = n;
        e.mdBootstrapStepDuration = n - t;
        e.commit();
    }
    function S({ chunkDownloadFinishTimestamp, failureReason, historySyncDownloadMetric, isSuccess, startTs }) {
        historySyncDownloadMetric.mdTimestamp = chunkDownloadFinishTimestamp;
        historySyncDownloadMetric.mdBootstrapStepDuration = chunkDownloadFinishTimestamp - startTs;
        historySyncDownloadMetric.mdBootstrapStepResult = isSuccess ? o("WAWebWamEnumMdBootstrapStepResult").MD_BOOTSTRAP_STEP_RESULT.SUCCESS : o("WAWebWamEnumMdBootstrapStepResult").MD_BOOTSTRAP_STEP_RESULT.FAILURE;
        if (failureReason != null) {
            historySyncDownloadMetric.mdSyncFailureReason = failureReason;
        }
        historySyncDownloadMetric.commit();
    }
    function R(e) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ failureReason, forceFlushWamBuffer, historySyncDataAppliedMetric, isSuccess, startTs }) {
            const l = o("WATimeUtils").unixTimeMs();
            historySyncDataAppliedMetric.mdTimestamp = l;
            historySyncDataAppliedMetric.mdBootstrapStepDuration = l - startTs;
            historySyncDataAppliedMetric.mdBootstrapStepResult = isSuccess ? o("WAWebWamEnumMdBootstrapStepResult").MD_BOOTSTRAP_STEP_RESULT.SUCCESS : o("WAWebWamEnumMdBootstrapStepResult").MD_BOOTSTRAP_STEP_RESULT.FAILURE;
            if (failureReason != null) {
                historySyncDataAppliedMetric.mdSyncFailureReason = failureReason;
            }
            return historySyncDataAppliedMetric.commitAndWaitForFlush(forceFlushWamBuffer);
        });
        return L.apply(this, arguments);
    }
    function E(e) {
        if ([
            o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.INITIAL_BOOTSTRAP,
            o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.INITIAL_STATUS_V3,
            o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.PUSH_NAME,
            o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.ON_DEMAND
        ].includes(e.syncType) && e.initialHistBootstrapInlinePayload != null && e?.initialHistBootstrapInlinePayload.byteLength > 0) {
            return e.initialHistBootstrapInlinePayload;
        }
        return null;
    }
    function k() {
        return I.apply(this, arguments);
    }
    function I() {
        I = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            return o("WAWebSchemaHistorySyncNotification").getHistorySyncNotificationTable().equals([
                "processed",
                "syncType"
            ], [
                0,
                o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.RECENT
            ], {
                shouldDecrypt: false
            }).then((e)=>e.filter((e)=>!o("WAWebApiHistorySyncNotification").inFlightChunk.has(e.msgKey) && !e.reuploadPending).sort((e, t)=>(e.chunkOrder ?? 0) - (t.chunkOrder ?? 0)));
        });
        return I.apply(this, arguments);
    }
    l.HistorySyncScheduleSource = p;
    l.processPastParticipants = _;
    l.getHistorySyncBasicChunkInfoString = o("WAWebHistorySyncLogUtils").getHistorySyncBasicChunkInfoString;
    l.getHistorySyncLogDetailsString = o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString;
    l.checkSelfHistorySyncIdentity = g;
    l.saveGroupMetadataForLeftGroup = y;
    l.handleChatThreadLoggingMetadata = b;
    l.commitHistoryStartDownloadingMetric = v;
    l.commitHistoryDownloadedMetric = S;
    l.commitHistoryDataAppliedMetric = R;
    l.maybeGetInlinePayload = E;
    l.getUnprocessedRecentSyncNotifications = k;
}, 98);