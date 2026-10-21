__d("WAWebVoipActionWriteCallLogImpl", [
    "Promise",
    "WALogger",
    "WAResolvable",
    "WAWebCallLogMsgData.flow",
    "WAWebChatGetExistingBridge",
    "WAWebCmd",
    "WAWebDBGetByParentMsgKey",
    "WAWebDBMsgUtils",
    "WAWebDBStoreMessageOrphans",
    "WAWebFindChatAction",
    "WAWebGetMessageCache",
    "WAWebHandleMsgTypes.flow",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebMessageQueue",
    "WAWebMessageQueueTimeout",
    "WAWebMsgCollection",
    "WAWebMsgType",
    "WAWebReleaseToEventLoop",
    "WAWebSendMsgChatAction",
    "WAWebUpdateMessageUIAction",
    "WAWebViewMode.flow",
    "WAWebVoipActionSurfaceCallLogChat",
    "WAWebVoipActivityTracker",
    "WAWebVoipCallLogPlaceholderTracker",
    "WAWebVoipCallsTabPanelManager",
    "WAWebVoipPendingCallLogOutcome",
    "WAWebVoipPhaseTracker",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
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
    let g;
    let h;
    let y;
    let C;
    let b;
    let v;
    let S;
    let R;
    const L = new Set;
    const E = 100;
    const k = new Map;
    function I(e) {
        if (!L.has(e)) {
            if (L.size >= E) {
                const t = L.values().next().value;
                if (t != null) {
                    L.delete(t);
                }
            }
            L.add(e);
        }
    }
    function T(e) {
        return L.has(e);
    }
    function D(e) {
        return x.apply(this, arguments);
    }
    function x() {
        x = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ callOutcome, chatId, expectedPendingOutcome, msgKey }) {
            const _ = o("WAWebVoipPhaseTracker").beginPostCallWork();
            const f = Date.now();
            o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.ICCE_WRITE_CALL_LOG);
            try {
                yield o("WAWebMessageQueue").onMessageQueue({
                    chatWid: chatId,
                    isOffline: false,
                    msgCategory: null,
                    skipOfflineWait: true,
                    action: (()=>{
                        const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                            const g = Date.now() - f;
                            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                "[voip] call log outcome update dequeued after ",
                                "ms"
                            ])), g);
                            o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.ICCE_WRITE_CALL_LOG_QUEUED);
                            const h = o("WAWebMsgCollection").MsgCollection.get(msgKey);
                            const y = h?.toJSON() ?? (yield o("WAWebDBMsgUtils").getMsgByMsgKey(msgKey));
                            if (y == null) {
                                if (expectedPendingOutcome != null) {
                                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                                        "[voip] deferred call log outcome skipped; row still missing for ",
                                        ""
                                    ])), msgKey.id);
                                    o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.ICCE_WRITE_CALL_LOG_COMPLETE);
                                    return;
                                }
                                if (o("WAWebVoipPendingCallLogOutcome").rememberPendingCallLogOutcome(msgKey, callOutcome)) {
                                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                                        "[voip] call log outcome deferred; no row for ",
                                        ""
                                    ])), msgKey.id);
                                } else {
                                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                                        "[voip] call log outcome update skipped; no row for ",
                                        ""
                                    ])), msgKey.id);
                                }
                                o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.ICCE_WRITE_CALL_LOG_COMPLETE);
                                return;
                            }
                            if (h == null ? y.kind !== "callLog" : h.type !== o("WAWebMsgType").MSG_TYPE.CALL_LOG) {
                                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                                    "[voip] call log outcome update skipped; row is not a call log for ",
                                    ""
                                ])), msgKey.id);
                                o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.ICCE_WRITE_CALL_LOG_COMPLETE);
                                return;
                            }
                            const C = o("WAWebVoipPendingCallLogOutcome").prepareCallLogOutcomeUpdate({
                                existingCallOutcome: h?.callOutcome ?? (y.kind === "callLog" ? y.callOutcome : null),
                                expectedPendingOutcome,
                                msgKey,
                                requestedCallOutcome: callOutcome
                            });
                            if (C.type === "skip") {
                                if (C.reason === "consumed") {
                                    o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                                        "[voip] deferred call log outcome skipped; token was consumed for ",
                                        ""
                                    ])), msgKey.id);
                                }
                                o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.ICCE_WRITE_CALL_LOG_COMPLETE);
                                return;
                            }
                            const b = babelHelpers.extends({}, y, {
                                kind: "callLog",
                                callOutcome: C.callOutcome
                            });
                            if (h != null) {
                                yield (R || (R = n("Promise"))).all([
                                    h.applyUpdate(b),
                                    o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                                        chatId,
                                        newMsg: b,
                                        handleSingleMsgOrigin: "voipNotification",
                                        messageOverwriteOption: o("WAWebHandleMsgTypes.flow").MessageOverwriteOption.VOIP_CALL_LOG
                                    })
                                ]);
                            } else {
                                yield o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                                    chatId,
                                    newMsg: b,
                                    handleSingleMsgOrigin: "voipNotification",
                                    messageOverwriteOption: o("WAWebHandleMsgTypes.flow").MessageOverwriteOption.VOIP_CALL_LOG
                                });
                            }
                            o("WAWebVoipPendingCallLogOutcome").clearPendingCallLogOutcome(msgKey, C.pendingOutcome);
                            r("WAWebVoipCallsTabPanelManager").trigger("onWriteCallLogMessage", h);
                            o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.ICCE_WRITE_CALL_LOG_COMPLETE);
                        });
                        function _() {
                            return t.apply(this, arguments);
                        }
                        return _;
                    })()
                }).catch((e)=>o("WAWebMessageQueueTimeout").handleMessageQueueTimeout(e, "voip_call_log_outcome"));
            } finally{
                o("WAWebVoipPhaseTracker").endPostCallWork(_);
            }
        });
        return x.apply(this, arguments);
    }
    function $(e, t, n, r, o) {
        return P.apply(this, arguments);
    }
    function P() {
        P = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, isOffline, i = false, skipIdbPersistForUpdate = false) {
            const s = F(t);
            const u = o("WAWebVoipPhaseTracker").beginPostCallWork();
            try {
                let c;
                const d = yield o("WAWebChatGetExistingBridge").getExisting(e);
                if (d && d.ephemeralDuration != null) {
                    c = babelHelpers.extends({}, t, {
                        ephemeralDuration: d.ephemeralDuration
                    });
                } else {
                    c = t;
                }
                o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.ICCE_WRITE_CALL_LOG);
                if (s != null) {
                    yield s.waitForPrevious;
                }
                if (yield W(c)) {
                    return null;
                }
                s?.release();
                if (i && !isOffline) {
                    const m = o("WAWebVoipPendingCallLogOutcome").mergePendingCallLogOutcome(c);
                    const { callLogMessage, pendingOutcome } = m;
                    const C = o("WAWebMsgCollection").MsgCollection.get(callLogMessage.id);
                    if (!C) {
                        const b = o("WAWebMsgCollection").MsgCollection.add(babelHelpers.extends({}, callLogMessage))[0];
                        if (b) {
                            o("WAWebVoipPendingCallLogOutcome").clearPendingCallLogOutcome(callLogMessage.id, pendingOutcome);
                            o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                                "[voip] call log in-mem, async IDB persist scheduled"
                            ])));
                            O({
                                callLogMessage,
                                chatId: e,
                                msg: b
                            });
                            return b;
                        }
                    }
                }
                const v = new (o("WAResolvable")).Resolvable;
                const S = Date.now();
                o("WAWebMessageQueue").onMessageQueue({
                    chatWid: e,
                    isOffline,
                    msgCategory: null,
                    skipOfflineWait: true,
                    action: (()=>{
                        const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                            const e = Date.now() - S;
                            o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                                "[voip] call log dequeued after ",
                                "ms queue wait"
                            ])), e);
                            o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.ICCE_WRITE_CALL_LOG_QUEUED);
                            const t = L(c).then((t)=>{
                                const n = Date.now() - S;
                                const r = n - e;
                                o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                                    "[voip] call log done: queue=",
                                    "ms write=",
                                    "ms total=",
                                    "ms"
                                ])), e, r, n);
                                o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.ICCE_WRITE_CALL_LOG_COMPLETE);
                                v.resolve(t);
                            }).catch((e)=>{
                                o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                                    "[voip] call log write failed"
                                ]))).catching(r("getErrorSafe")(e)).sendLogs("voip-callog-write-failed");
                                v.resolve(null);
                            });
                            if (isOffline) {
                                return (R || (R = n("Promise"))).resolve();
                            }
                            return t;
                        });
                        function t() {
                            return e.apply(this, arguments);
                        }
                        return t;
                    })()
                }).catch((e)=>o("WAWebMessageQueueTimeout").handleMessageQueueTimeout(e, "voip_call_log_write"));
                return yield v.promise;
            } finally{
                s?.release();
                o("WAWebVoipPhaseTracker").endPostCallWork(u);
            }
            function L(e) {
                return E.apply(this, arguments);
            }
            function E() {
                E = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                    if (!isOffline) {
                        yield o("WAWebReleaseToEventLoop").releaseToEventLoop();
                    }
                    const n = o("WAWebVoipPendingCallLogOutcome").mergePendingCallLogOutcome(t);
                    const { callLogMessage, pendingOutcome } = n;
                    if (isOffline) {
                        yield N({
                            callLogMessage,
                            chatId: e,
                            pendingOutcome
                        });
                        r("WAWebVoipCallsTabPanelManager").trigger("onWriteCallLogMessage", null);
                        return null;
                    }
                    const u = yield w({
                        callLogMessage,
                        chatId: e,
                        pendingOutcome,
                        skipIdbPersistForUpdate
                    });
                    const { msg, surface } = u;
                    if (surface === "promoted" || surface === "created" && !skipIdbPersistForUpdate) {
                        yield o("WAWebVoipActionSurfaceCallLogChat").maybeSurfaceCallLogChatInChatList(e, callLogMessage);
                    }
                    r("WAWebVoipCallsTabPanelManager").trigger("onWriteCallLogMessage", msg);
                    return msg;
                });
                return E.apply(this, arguments);
            }
        });
        return P.apply(this, arguments);
    }
    function N(e) {
        return M.apply(this, arguments);
    }
    function M() {
        M = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ callLogMessage, chatId, pendingOutcome }) {
            if (o("WAWebCmd").Cmd.isMainStreamReadyMd) {
                o("WAWebUpdateMessageUIAction").updateUI({
                    chatId,
                    msg: callLogMessage
                });
            }
            const a = o("WAWebGetMessageCache").getMessageCache();
            yield a.addMessages([
                {
                    msg: callLogMessage
                }
            ], false);
            o("WAWebVoipPendingCallLogOutcome").clearPendingCallLogOutcome(callLogMessage.id, pendingOutcome);
            const callLogMessage_id = callLogMessage.id;
            if (callLogMessage_id != null) {
                const l = o("WAWebVoipPendingCallLogOutcome").mergePendingCallLogOutcome(callLogMessage);
                const { callLogMessage: callLogMessage_1, pendingOutcome: pendingOutcome_1 } = l;
                if (pendingOutcome_1 != null) {
                    if (callLogMessage_1 !== callLogMessage) {
                        yield D({
                            callOutcome: pendingOutcome_1.callOutcome,
                            chatId,
                            expectedPendingOutcome: pendingOutcome_1,
                            msgKey: callLogMessage_id
                        });
                        return;
                    }
                    o("WAWebVoipPendingCallLogOutcome").clearPendingCallLogOutcome(callLogMessage_id, pendingOutcome_1);
                }
            }
        });
        return M.apply(this, arguments);
    }
    function w(e) {
        return A.apply(this, arguments);
    }
    function A() {
        A = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ callLogMessage, chatId, pendingOutcome, skipIdbPersistForUpdate }) {
            const l = o("WAWebMsgCollection").MsgCollection.get(callLogMessage.id);
            if (l == null) {
                const s = yield o("WAWebSendMsgChatAction").addVoipCallLogMsgToChat(chatId, callLogMessage);
                if (s != null) {
                    o("WAWebVoipPendingCallLogOutcome").clearPendingCallLogOutcome(callLogMessage.id, pendingOutcome);
                }
                return {
                    msg: s,
                    surface: s != null ? "created" : "none"
                };
            }
            const u = l.viewMode === o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OFFLINE_RESUME || l.viewMode === o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OFFLINE_RESUME_PROMOTED;
            const c = u && callLogMessage.viewMode === o("WAWebViewMode.flow").ViewModeType.VISIBLE;
            if (u && callLogMessage.viewMode !== o("WAWebViewMode.flow").ViewModeType.VISIBLE) {
                o("WALogger").WARN(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[writeVoipCallLogMessageImpl] placeholder ",
                    " -> non-VISIBLE ",
                    ""
                ])), l.viewMode, callLogMessage.viewMode).tags("non-sad").sendLogs("voip-callog-promote-non-visible");
            }
            const d = u && callLogMessage.viewMode === o("WAWebViewMode.flow").ViewModeType.VISIBLE ? babelHelpers.extends({}, callLogMessage, {
                viewMode: o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OFFLINE_RESUME_PROMOTED
            }) : callLogMessage;
            const m = U(l.t, V(l.callOutcome, d));
            if (skipIdbPersistForUpdate) {
                yield l.applyUpdate(m);
            } else {
                yield (R || (R = n("Promise"))).all([
                    l.applyUpdate(m),
                    (yield o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                        chatId,
                        newMsg: m,
                        handleSingleMsgOrigin: "voipNotification",
                        messageOverwriteOption: o("WAWebHandleMsgTypes.flow").MessageOverwriteOption.VOIP_CALL_LOG
                    }))
                ]);
            }
            o("WAWebVoipPendingCallLogOutcome").clearPendingCallLogOutcome(callLogMessage.id, pendingOutcome);
            return {
                msg: l,
                surface: c ? "promoted" : "none"
            };
        });
        return A.apply(this, arguments);
    }
    function F(e) {
        if (!o("WAWebVoipCallLogPlaceholderTracker").isOfflineCallLogOrderingEnabled()) {
            return null;
        }
        const a = e.id?.id;
        if (a == null) {
            return null;
        }
        const waitForPrevious = k.get(a) ?? (R || (R = n("Promise"))).resolve();
        const l = new (o("WAResolvable")).Resolvable;
        const s = waitForPrevious.then(()=>l.promise);
        k.set(a, s);
        let u = false;
        return {
            waitForPrevious,
            release: function() {
                if (!u) {
                    u = true;
                    l.resolve();
                    s.then(()=>{
                        if (k.get(a) === s) {
                            k.delete(a);
                        }
                    });
                }
            }
        };
    }
    function O(e) {
        return B.apply(this, arguments);
    }
    function B() {
        B = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ callLogMessage, chatId, msg }) {
            const l = Date.now();
            o("WAWebMessageQueue").onMessageQueue({
                chatWid: chatId,
                isOffline: false,
                msgCategory: null,
                action: (()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                        const e = Date.now() - l;
                        o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                            "[voip] call log IDB persist dequeued after ",
                            "ms"
                        ])), e);
                        o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.ICCE_WRITE_CALL_LOG_QUEUED);
                        yield o("WAWebReleaseToEventLoop").releaseToEventLoop();
                        try {
                            const n = yield o("WAWebFindChatAction").findOrCreateLatestChat(chatId, "voipCallLog");
                            const s = n.chat;
                            yield o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                                chatId: s.id,
                                newMsg: callLogMessage,
                                handleSingleMsgOrigin: "voipNotification"
                            });
                            s.msgs.add(msg);
                            o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                                "[voip] call log persisted to IDB successfully"
                            ])));
                        } catch (error) {
                            o("WALogger").ERROR(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                                "[voip] call log IDB persist failed"
                            ]))).catching(r("getErrorSafe")(error)).tags("voip").sendLogs("voip: persistCallLogAsync");
                            o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.ICCE_WRITE_CALL_LOG_FAILED);
                            return;
                        }
                        yield o("WAWebVoipActionSurfaceCallLogChat").maybeSurfaceCallLogChatInChatList(chatId, callLogMessage);
                        o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.ICCE_WRITE_CALL_LOG_COMPLETE);
                        r("WAWebVoipCallsTabPanelManager").trigger("onWriteCallLogMessage", msg);
                    });
                    function s() {
                        return e.apply(this, arguments);
                    }
                    return s;
                })()
            }).catch((e)=>o("WAWebMessageQueueTimeout").handleMessageQueueTimeout(e, "voip_call_log_persist"));
        });
        return B.apply(this, arguments);
    }
    function W(e) {
        return q.apply(this, arguments);
    }
    function q() {
        q = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (!o("WAWebVoipCallLogPlaceholderTracker").isOfflineCallLogOrderingEnabled()) {
                return false;
            }
            const n = e.id?.id;
            if (n == null || !o("WAWebVoipCallLogPlaceholderTracker").isPlaceholderPending(n)) {
                return false;
            }
            try {
                let a = null;
                if (e.kind === "callLog" && e.callOutcome === o("WAWebCallLogMsgData.flow").CallOutcome.Missed) {
                    const i = yield o("WAWebDBGetByParentMsgKey").getMessageOrphansByParentMsgKey(e.id);
                    for (const l of i){
                        if (l.parsedMsgPayload.kind === "callLog") {
                            a = l.parsedMsgPayload.callOutcome;
                            break;
                        }
                    }
                }
                const s = V(a, e);
                const u = o("WAWebVoipPendingCallLogOutcome").mergePendingCallLogOutcome(s);
                const { callLogMessage, pendingOutcome } = u;
                yield o("WAWebDBStoreMessageOrphans").storeMessageOrphans([
                    callLogMessage
                ], function(e) {
                    return e.id;
                });
                o("WAWebVoipPendingCallLogOutcome").clearPendingCallLogOutcome(callLogMessage.id, pendingOutcome);
                o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] orphaned for placeholder callId=",
                    ""
                ])), n);
            } catch (error) {
                o("WALogger").ERROR(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] storeMessageOrphans failed for callId=",
                    ""
                ])), n).catching(r("getErrorSafe")(error)).sendLogs("voip-orphan-store-fail");
            }
            return true;
        });
        return q.apply(this, arguments);
    }
    function U(e, t) {
        if (e != null && t.t !== e) {
            return babelHelpers.extends({}, t, {
                t: e
            });
        }
        return t;
    }
    function V(e, t) {
        if (e === o("WAWebCallLogMsgData.flow").CallOutcome.AcceptedElsewhere && t.kind === "callLog" && t.callOutcome === o("WAWebCallLogMsgData.flow").CallOutcome.Missed) {
            return babelHelpers.extends({}, t, {
                callOutcome: o("WAWebCallLogMsgData.flow").CallOutcome.AcceptedElsewhere
            });
        }
        return t;
    }
    l.markCallIdProcessed = I;
    l.isCallIdAlreadyProcessed = T;
    l.updateVoipCallLogOutcomeImpl = D;
    l.writeVoipCallLogMessageImpl = $;
}, 98);