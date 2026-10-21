__d("WAWebVoipActionWriteCallLogSync", [
    "WALogger",
    "WALongInt",
    "WAPromiseEach",
    "WAResolvable",
    "WATimeUtils",
    "WAWebCallLogUtils",
    "WAWebCallsOnlyGating",
    "WAWebChatCollection",
    "WAWebCmd",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebUserPrefsHistorySync",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebVoipActionWriteCallLogImpl",
    "WAWebVoipWaCallEnums",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "compactMap",
    "getErrorSafe",
    "isStringNullOrEmpty",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g = [];
    let h = null;
    function y() {
        if (h != null) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "generateCallLogFromCallSyncRecord: listener already registered"
            ])));
            return h.promise;
        }
        o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
            "generateCallLogFromCallSyncRecord: setting up listener"
        ])));
        h = new (o("WAResolvable")).Resolvable;
        const t = h;
        o("WAWebCmd").Cmd.on("on_initial_chat_synced_from_bridge", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "generateCallLogFromCallSyncRecord: listener called, pending=",
                ""
            ])), g.length);
            yield o("WAPromiseEach").promiseEach(g, function(e, n) {
                return v(e).then(()=>{
                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "generateCallLogFromCallSyncRecord: done histSync=",
                        ""
                    ])), e.fromHistorySync);
                    t.resolve();
                    g = [];
                    h = null;
                });
            });
        }));
        return t.promise;
    }
    function C(e) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (o("WAWebUserPrefsHistorySync").getInitialHistorySyncComplete() || o("WAWebCallsOnlyGating").isCallsOnlyModeEnabled()) {
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "generateCallLogFromCallSyncRecord: start+ histSync=",
                    ""
                ])), e.fromHistorySync);
                yield v(e);
            } else {
                o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "generateCallLogFromCallSyncRecord: start- histSync=",
                    ""
                ])), e.fromHistorySync);
                g.push(e);
                return y();
            }
        });
        return b.apply(this, arguments);
    }
    function v(e) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ callLogRecord, fromHistorySync = false }) {
            let l = {
                message: "generateCallLogFromCallSyncdRecord: failed to find chat target details for call log syncd record",
                log: "generate-call-log-message-syncd-failed"
            };
            if (fromHistorySync) {
                l = {
                    message: "generateCallLogFromCallHistorySyncRecord: failed to find chat target details for call log history sync record",
                    log: "generate-call-log-message-history-sync-failed"
                };
            }
            const { callCreatorJid, callId, callLinkToken, callResult, groupJid, isCallLink } = callLogRecord;
            const h = isCallLink === undefined ? false : isCallLink;
            const { isVideo, silenceReason, startTime } = callLogRecord;
            if (!(callId != null && !fromHistorySync && o("WAWebVoipActionWriteCallLogImpl").isCallIdAlreadyProcessed(callId))) {
                const isCallLink_1 = h || !r("isStringNullOrEmpty")(callLinkToken);
                let S;
                const R = callCreatorJid != null && callCreatorJid !== "" ? o("WAWebWidFactory").createWid(callCreatorJid) : o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE();
                try {
                    S = yield o("WAWebCallLogUtils").getCallLogTargetDetails({
                        callCreatorWid: R,
                        callId,
                        groupJid: r("isStringNullOrEmpty")(groupJid) ? null : o("WAWebWidFactory").createWid(groupJid),
                        isCallLink: isCallLink_1,
                        participants: r("compactMap")(callLogRecord.participants, function(e) {
                            if (e.userJid != null && e.userJid !== "") {
                                return o("WAWebWidFactory").createWid(e.userJid);
                            }
                            return null;
                        })
                    });
                } catch (error) {
                    o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        ": ",
                        ""
                    ])), l.message, String(error));
                    return;
                }
                const L = S;
                const { callCreatorUserWid, chatId, fromMe, msgKeyId, participant, viewMode } = L;
                const $ = o("WATimeUtils").castToUnixTime(o("WALongInt").maybeNumber(startTime) ?? o("WATimeUtils").unixTime());
                let P = false;
                if (!fromHistorySync && !o("WATimeUtils").happenedWithin($, o("WATimeUtils").MINUTE_SECONDS)) {
                    const M = o("WAWebChatCollection").ChatCollection.get(chatId)?.t;
                    P = M != null && M >= $;
                }
                const w = viewMode === o("WAWebViewMode.flow").ViewModeType.HIDDEN || viewMode === o("WAWebViewMode.flow").ViewModeType.CALL_LOG_AD_HOC_GROUP_CALL;
                try {
                    const F = {
                        id: new (r("WAWebMsgKey"))({
                            remote: chatId,
                            participant,
                            fromMe,
                            id: msgKeyId
                        }),
                        type: o("WAWebMsgType").MSG_TYPE.CALL_LOG,
                        kind: o("WAWebMsgType").MsgKind.CallLog,
                        viewMode: !w && (P || fromHistorySync || isCallLink_1) ? o("WAWebViewMode.flow").ViewModeType.HISTORY_SYNCED_CALL_LOG : viewMode,
                        callOutcome: o("WAWebCallLogUtils").getCallOutcomeFromCallResultSyncProto(r("nullthrows")(callResult, "generateCallLogFromCallSyncRecord: callResult is null from call log record sync")),
                        callSilenceReason: silenceReason != null ? o("WAWebCallLogUtils").getCallSilenceReason(silenceReason) : undefined,
                        isVideoCall: isVideo ?? false,
                        callCreator: R,
                        callDuration: callLogRecord.duration == null ? undefined : o("WALongInt").maybeNumber(callLogRecord.duration) ?? undefined,
                        callParticipants: callLogRecord.participants.filter((e)=>e.userJid != null).map((e)=>({
                                participant: o("WAWebWidFactory").createWid(r("nullthrows")(e.userJid)),
                                outcome: e.callResult != null ? o("WAWebCallLogUtils").getCallParticipantStateFromCallResultSyncProto(e.callResult) : o("WAWebVoipWaCallEnums").CallParticipantState.Invalid
                            })),
                        from: callCreatorUserWid,
                        t: $,
                        to: chatId,
                        isCallLink: isCallLink_1,
                        callLinkToken: callLinkToken ?? undefined
                    };
                    yield o("WAWebVoipActionWriteCallLogImpl").writeVoipCallLogMessageImpl(chatId, F, false);
                } catch (error) {
                    if (fromHistorySync) {
                        o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                            "generateCallLogFromCallHistorySyncRecord: failed to generate call log message from history sync"
                        ]))).catching(r("getErrorSafe")(error)).tags("nexus-voip").sendLogs(l.log);
                    } else {
                        o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                            "generateCallLogFromCallSyncRecord: failed to generate call log message from syncd"
                        ]))).catching(r("getErrorSafe")(error)).tags("nexus-voip").sendLogs(l.log);
                    }
                }
            }
        });
        return S.apply(this, arguments);
    }
    l.generateCallLogFromCallSyncRecord = C;
}, 98);