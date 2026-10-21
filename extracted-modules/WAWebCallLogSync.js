__d("WAWebCallLogSync", [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebProtobufSyncAction.pb",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdIndexUtils",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsMultiDevice",
    "WAWebVoipActionWriteCallLogSync",
    "WAWebVoipWaCallEnums",
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    const _ = ((t)=>{
        function a(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.collectionName = o("WAWebSyncdConst").CollectionName.Regular;
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.getVersion = function() {
            return 1;
        };
        a_prototype.getAction = function() {
            return o("WAWebSyncdConst").Actions.CallLog;
        };
        a_prototype.applyMutations = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const r = this;
                let a = 0;
                let i = 0;
                let l = 0;
                const _ = yield (p || (p = n("Promise"))).all(t.map((()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                        try {
                            if (e.operation === "set") {
                                const n = e.value;
                                const s = n.callLogAction ?? {};
                                const callLogRecord = s.callLogRecord;
                                if (!callLogRecord) {
                                    a++;
                                    return o("WAWebSyncdIndexUtils").malformedActionValue(r.collectionName);
                                }
                                const c = o("WAWebUserPrefsMultiDevice").getPairingTimestamp();
                                if (c != null) {
                                    const d = o("WATimeUtils").castMilliSecondsToUnixTime(e.timestamp);
                                    if (d > o("WATimeUtils").castToUnixTime(c)) {
                                        yield o("WAWebVoipActionWriteCallLogSync").generateCallLogFromCallSyncRecord({
                                            callLogRecord
                                        });
                                        i++;
                                    }
                                }
                                return {
                                    actionState: o("WAWebSyncdConst").SyncActionState.Success
                                };
                            } else if (e.operation === "remove") {
                                return {
                                    actionState: o("WAWebSyncdConst").SyncActionState.Success
                                };
                            }
                            l++;
                            return {
                                actionState: o("WAWebSyncdConst").SyncActionState.Unsupported
                            };
                        } catch (e) {
                            return {
                                actionState: o("WAWebSyncdConst").SyncActionState.Failed
                            };
                        }
                    });
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                })()));
                if (a === 1) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "call log sync: malformed mutation"
                    ])));
                } else if (a > 1) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "call log sync: ",
                        " malformed mutations"
                    ])), a);
                }
                if (i === 1) {
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "call log sync: successfully applied"
                    ])));
                } else if (i > 1) {
                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "call log sync: ",
                        " successfully applied"
                    ])), i);
                }
                if (l === 1) {
                    o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "call log sync: operation not supported"
                    ])));
                } else if (l > 1) {
                    o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "call log sync: ",
                        " operations not supported"
                    ])), l);
                }
                return _;
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        a_prototype.getCallLogMutation = function(t, n) {
            const callCreatorJid = n.callCreatorJid?.toJid();
            let d = callCreatorJid;
            if (d == null) {
                d = n.fromMe ? o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE().toJid() : n.peerJid.toJid();
            }
            const m = n.fromMe ? "1" : "0";
            const n_callId = n.callId;
            const participants = n.participantEntries.map((e)=>({
                    userJid: e.jid?.toJid() ?? undefined,
                    callResult: o("WAWebVoipWaCallEnums").getSyncParticipantCallResultFromParticipantState(e.result)
                }));
            const callLogRecord = {
                callResult: o("WAWebVoipWaCallEnums").getSyncCallResultFromCallLogResult(n.result),
                duration: n.connectTime ?? undefined,
                startTime: n.startTime,
                isIncoming: n.fromMe,
                isVideo: n.videoCall ?? undefined,
                isCallLink: n.isCallLink ?? undefined,
                callLinkToken: n.callLinkToken ?? undefined,
                scheduledCallId: n.scheduledId ?? undefined,
                callId: n.callId,
                callCreatorJid,
                groupJid: n.groupJid?.toJid(),
                participants,
                callType: r("isStringNullOrEmpty")(n.scheduledId) ? o("WAWebProtobufSyncAction.pb").CallLogRecord$CallType.REGULAR : o("WAWebProtobufSyncAction.pb").CallLogRecord$CallType.SCHEDULED_CALL
            };
            const g = {
                callLogAction: {
                    callLogRecord
                }
            };
            return o("WAWebSyncdActionUtils").buildPendingMutation({
                collection: this.collectionName,
                indexArgs: [
                    d,
                    n_callId,
                    m
                ],
                value: g,
                version: this.getVersion(),
                operation: o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET,
                timestamp: t,
                action: this.getAction()
            });
        };
        return a;
    })(o("WAWebSyncdAction").AccountSyncdActionBase);
    const f = new _;
    l.default = f;
}, 98);