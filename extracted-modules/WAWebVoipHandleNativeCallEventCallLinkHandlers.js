__d("WAWebVoipHandleNativeCallEventCallLinkHandlers", [
    "Promise",
    "WALogger",
    "WAThrottle",
    "WAWebBackendApi",
    "WAWebCallUserJourneyLogger",
    "WAWebCoreActionsODS",
    "WAWebGroupQueryJob",
    "WAWebUserPrefsMeUser",
    "WAWebVoipP2PConnectionManager",
    "WAWebVoipSignalingEnums",
    "WAWebVoipStackInterface",
    "WAWebVoipWaCallEnums",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
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
    let g;
    let h;
    let y;
    let C;
    let b;
    let v;
    let S;
    const R = [];
    const L = 2000;
    const E = "busy";
    const k = 5000;
    let I = null;
    let T = null;
    const D = new Set;
    function x() {
        if (T != null) {
            window.clearTimeout(T);
            T = null;
        }
        if (I != null) {
            window.clearTimeout(I);
            I = null;
            o("WAWebBackendApi").frontendFireAndForget("stopBusyTone", {});
        }
        D.clear();
    }
    function $(e) {
        return P.apply(this, arguments);
    }
    function P() {
        P = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = r("nullthrows")((yield o("WAWebVoipStackInterface").getVoipStackInterface()));
            const n = t.parsers.parseGroupInfoChangedData(e);
            o("WAWebBackendApi").frontendFireAndForget("generateCallLogFromEventGroupInfoChanged", {
                groupInfoChangedData: n
            });
            if (t.type === "web") {
                o("WAWebBackendApi").frontendFireAndForget("handleGroupInfoChangedGroupCall", {
                    groupInfoChangedPayload: n
                });
                o("WAWebCallUserJourneyLogger").CallUserJourneyLogger.setGroupCall(true);
                const c = n.CallParticipants?.filter(function(e) {
                    return e.outcome === o("WAWebVoipWaCallEnums").CallParticipantState.Connected;
                }).length ?? 0;
                if (c > 0) {
                    o("WAWebCallUserJourneyLogger").CallUserJourneyLogger.setConnectedParticipants(c);
                }
                const d = n.CallParticipants?.filter(function(e) {
                    return e.outcome === o("WAWebVoipWaCallEnums").CallParticipantState.Connected;
                }).map(function(e) {
                    return e.participant.toString();
                }) ?? R;
                const m = d.some((e)=>!D.has(e));
                if (m) {
                    const p = yield t.getCallInfo();
                    if (p !== "") {
                        const _ = t.parsers.parseCallInfo(p);
                        const f = _.linkToken != null && _.linkToken !== "";
                        if (f && _.videoEnabled) {
                            d.forEach((e)=>D.add(e));
                            if (T != null) {
                                window.clearTimeout(T);
                            }
                            T = window.setTimeout(function() {
                                T = null;
                                t.broadcastVideoState().catch((e)=>{
                                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                                        "voip: [GroupInfoChanged] broadcastVideoState failed"
                                    ]))).catching(r("getErrorSafe")(e));
                                });
                            }, L);
                        }
                    }
                }
            }
        });
        return P.apply(this, arguments);
    }
    const N = 50;
    const M = o("WAThrottle").throttle(function() {
        F().catch((t)=>{
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: handleCallGridRankingChanged: dispatch failed"
            ]))).catching(r("getErrorSafe")(t)).sendLogs("voip-grid-ranking-dispatch-failed");
        });
    }, N, {
        leading: true,
        trailing: true
    });
    var w = 0;
    function A() {
        M();
    }
    function F() {
        return O.apply(this, arguments);
    }
    function O() {
        O = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = ++w;
            const t = r("nullthrows")((yield o("WAWebVoipStackInterface").getVoipStackInterface()));
            if (t.type === "web") {
                o("WAWebBackendApi").frontendFireAndForget("trackVoipActivity", {
                    activity: "get_call_info",
                    details: "grid_ranking"
                });
                const n = yield t.getCallInfo();
                if (n !== "" && e === w) {
                    const a = t.parsers.parseCallInfo(n);
                    o("WAWebBackendApi").frontendFireAndForget("handleCallGridRankingChanged", {
                        callInfo: a
                    });
                }
            }
        });
        return O.apply(this, arguments);
    }
    function B(e) {
        return W.apply(this, arguments);
    }
    function W() {
        W = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = r("nullthrows")((yield o("WAWebVoipStackInterface").getVoipStackInterface()));
            if (t.type === "web") {
                const n = t.parsers.parseRxTrafficStateForPeerChangedData(e);
                o("WAWebBackendApi").frontendFireAndForget("handleRxTrafficStateForPeerChanged", n);
            }
        });
        return W.apply(this, arguments);
    }
    function q(e) {
        return U.apply(this, arguments);
    }
    function U() {
        U = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = r("nullthrows")((yield o("WAWebVoipStackInterface").getVoipStackInterface()));
            if (t.type === "web") {
                const n = t.parsers.parseNetHealthStatusChangedData(e);
                o("WAWebBackendApi").frontendFireAndForget("handleNetHealthStatusChanged", n);
            }
        });
        return U.apply(this, arguments);
    }
    function V(e) {
        return H.apply(this, arguments);
    }
    function H() {
        H = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = r("nullthrows")((yield o("WAWebVoipStackInterface").getVoipStackInterface()));
            if (t.type === "web") {
                const n = t.parsers.parseCallLinkStateChangedData(e);
                o("WAWebBackendApi").frontendFireAndForget("handleCallLinkStateChanged", n);
                o("WAWebBackendApi").frontendFireAndForget("trackVoipActivity", {
                    activity: "get_call_info",
                    details: "call_link_state"
                });
                const a = yield t.getCallInfo();
                if (a === "") {
                    return;
                }
                const i = t.parsers.parseCallInfo(a);
                o("WAWebBackendApi").frontendFireAndForget("handleIsInWaitingRoomChanged", {
                    isInWaitingRoom: i.isInWaitingRoom,
                    isWaitingRoomEnabled: i.isWaitingRoomEnabled,
                    isWaitingRoomAdmin: i.isWaitingRoomAdmin,
                    waitingRoomFilter: i.waitingRoomFilter
                });
            }
        });
        return H.apply(this, arguments);
    }
    function G(e) {
        return z.apply(this, arguments);
    }
    function z() {
        z = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = r("nullthrows")((yield o("WAWebVoipStackInterface").getVoipStackInterface()));
            if (t.type === "web") {
                const n = t.parsers.parseCallLinkNackedData(e);
                o("WAWebBackendApi").frontendFireAndForget("handleCallLinkNacked", {
                    nackCode: n.nackCode
                });
                yield t.endCall(o("WAWebVoipSignalingEnums").EndCallReason.Unknown, false);
            }
        });
        return z.apply(this, arguments);
    }
    function j(e) {
        return K.apply(this, arguments);
    }
    function K() {
        K = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = r("nullthrows")((yield o("WAWebVoipStackInterface").getVoipStackInterface()));
            if (t.type === "web") {
                const callOfferNackedData = t.parsers.parseCallOfferNackedData(e);
                o("WAWebBackendApi").frontendFireAndForget("handleCallOfferNacked", {
                    callOfferNackedData
                });
            } else if (t.type === "windows") {
                try {
                    const i = JSON.parse(e);
                    const l = i?.GroupJid ?? null;
                    if (typeof l === "string" && l !== "") {
                        o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: handleCallOfferNacked: refreshing group info after membership mismatch (412)"
                        ])));
                        o("WAWebGroupQueryJob").queryAndUpdateGroupMetadataById({
                            id: o("WAWebWidFactory").createWid(l)
                        }).catch((e)=>{
                            o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: handleCallOfferNacked: group info refresh failed"
                            ]))).catching(r("getErrorSafe")(e)).sendLogs("voip-refresh-group-info-on-mismatch-windows");
                        });
                    }
                } catch (error) {
                    o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: handleCallOfferNacked: malformed payload or JID"
                    ]))).catching(r("getErrorSafe")(error)).sendLogs("voip-refresh-group-info-on-mismatch-windows");
                }
            }
        });
        return K.apply(this, arguments);
    }
    function Q() {
        o("WAWebCoreActionsODS").logCallGroupJoinError();
        o("WAWebBackendApi").frontendFireAndForget("handleLobbyNacked", {});
    }
    function X() {
        o("WAWebCoreActionsODS").logCallGroupJoinError();
        o("WAWebBackendApi").frontendFireAndForget("handleLobbyTimeout", {});
    }
    function Y() {
        return J.apply(this, arguments);
    }
    function J() {
        J = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            o("WAWebBackendApi").frontendFireAndForget("handleWaitingRoomDenied", {});
        });
        return J.apply(this, arguments);
    }
    function Z() {
        return ee.apply(this, arguments);
    }
    function ee() {
        ee = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = r("nullthrows")((yield o("WAWebVoipStackInterface").getVoipStackInterface()));
            if (e.type === "web") {
                o("WAWebBackendApi").frontendFireAndForget("trackVoipActivity", {
                    activity: "get_call_info",
                    details: "waiting_room_state"
                });
                const t = yield e.getCallInfo();
                if (t === "") {
                    return;
                }
                const n = e.parsers.parseCallInfo(t);
                o("WAWebBackendApi").frontendFireAndForget("handleWaitingRoomStateChanged", {
                    isWaitingRoomEnabled: n.isWaitingRoomEnabled,
                    isWaitingRoomAdmin: n.isWaitingRoomAdmin,
                    waitingRoomFilter: n.waitingRoomFilter,
                    isInWaitingRoom: n.isInWaitingRoom,
                    waitingRoomUsers: n.waitingRoomUsers,
                    waitingRoomUsersCount: n.waitingRoomUsersCount
                });
            }
        });
        return ee.apply(this, arguments);
    }
    function te(e) {
        return ne.apply(this, arguments);
    }
    function ne() {
        ne = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = r("nullthrows")((yield o("WAWebVoipStackInterface").getVoipStackInterface()));
            if (t.type === "web") {
                const a = t.parsers.parseCallRejectReceivedData(e);
                o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: handleCallRejectReceived: callId=",
                    ", reason=",
                    ""
                ])), a.callId, a.reason);
                const i = yield t.getCallInfo();
                if (i === "") {
                    o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: handleCallRejectReceived: no call info, ending"
                    ])));
                    yield t.endCall(o("WAWebVoipSignalingEnums").EndCallReason.Unknown, false);
                    return;
                }
                const l = t.parsers.parseCallInfo(i);
                const s = l.isGroupCall === true;
                if (s) {
                    o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: handleCallRejectReceived: skip endCall (group)"
                    ])));
                    return;
                }
                if (a.reason === E) {
                    o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: handleCallRejectReceived: peer busy, showing busy UI"
                    ])));
                    o("WAWebBackendApi").frontendFireAndForget("setPeerBusy", {});
                    o("WAWebBackendApi").frontendFireAndForget("playBusyTone", {});
                    if (I != null) {
                        window.clearTimeout(I);
                    }
                    const u = a.callId;
                    I = window.setTimeout(function() {
                        I = null;
                        o("WAWebBackendApi").frontendFireAndForget("stopBusyTone", {});
                        n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                            try {
                                const e = yield t.getCallInfo();
                                if (e === "") {
                                    o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                                        "voip: handleCallRejectReceived: no active call at busy timeout, skipping endCall for callId=",
                                        ""
                                    ])), u);
                                    return;
                                }
                                const n = t.parsers.parseCallInfo(e).callId;
                                if (n !== u) {
                                    o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                                        "voip: handleCallRejectReceived: active call changed, skipping endCall for callId=",
                                        ""
                                    ])), u);
                                    return;
                                }
                                o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                                    "voip: handleCallRejectReceived: busy tone timeout, ending callId=",
                                    ""
                                ])), u);
                                yield t.endCall(o("WAWebVoipSignalingEnums").EndCallReason.Unknown, false);
                            } catch (error) {
                                o("WALogger").ERROR(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                                    "voip: handleCallRejectReceived: busy timeout callback failed"
                                ]))).catching(r("getErrorSafe")(error)).sendLogs("voip-busy-timeout-failed");
                            }
                        })();
                    }, k);
                    return;
                }
                yield t.endCall(o("WAWebVoipSignalingEnums").EndCallReason.Unknown, false);
            }
        });
        return ne.apply(this, arguments);
    }
    function re(e) {
        return oe.apply(this, arguments);
    }
    function oe() {
        oe = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = r("nullthrows")((yield o("WAWebVoipStackInterface").getVoipStackInterface()));
            if (t.type === "web") {
                const n = t.parsers.parseCallFatalData(e);
                o("WAWebCoreActionsODS").logCallErrorTerminal();
                const a = n.reasonCode === o("WAWebVoipWaCallEnums").CallFatalReasonCode.TxTimeout || n.reasonCode === o("WAWebVoipWaCallEnums").CallFatalReasonCode.RxTimeout ? o("WAWebVoipSignalingEnums").EndCallReason.Timeout : o("WAWebVoipSignalingEnums").EndCallReason.Unknown;
                yield t.endCall(a, true);
            }
        });
        return oe.apply(this, arguments);
    }
    function ae(e) {
        return ie.apply(this, arguments);
    }
    function ie() {
        ie = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = r("nullthrows")((yield o("WAWebVoipStackInterface").getVoipStackInterface()));
            if (t.type === "web") {
                yield new (S || (S = n("Promise")))(function(e) {
                    return window.setTimeout(e, 2500);
                });
                yield t.endCall(o("WAWebVoipSignalingEnums").EndCallReason.Timeout, false);
            }
        });
        return ie.apply(this, arguments);
    }
    function le(e) {
        return se.apply(this, arguments);
    }
    function se() {
        se = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = r("nullthrows")((yield o("WAWebVoipStackInterface").getVoipStackInterface()));
            if (t.type === "web") {
                const n = t.parsers.parseRelayBindsFailedData(e);
                o("WAWebCoreActionsODS").logCallErrorTerminal();
                yield o("WAWebBackendApi").frontendSendAndReceive("handleRelayBindsFailed", {});
                yield t.endCall(o("WAWebVoipSignalingEnums").EndCallReason.Unknown, false);
            }
        });
        return se.apply(this, arguments);
    }
    function ue(e) {
        return ce.apply(this, arguments);
    }
    function ce() {
        ce = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = r("nullthrows")((yield o("WAWebVoipStackInterface").getVoipStackInterface()));
            if (t.type === "web") {
                const n = t.parsers.parseP2PTransportUpdateData(e);
                o("WAWebVoipP2PConnectionManager").handleRemoteCredentials({
                    ufrag: n.ice_ufrag,
                    pwd: n.ice_pwd,
                    algorithm: n.cert_algorithm,
                    fingerprint: n.cert_fingerprint
                });
                for (const a of n.candidates){
                    o("WAWebVoipP2PConnectionManager").handleRemoteCandidate(a);
                }
            }
        });
        return ce.apply(this, arguments);
    }
    function de(e) {
        return me.apply(this, arguments);
    }
    function me() {
        me = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = r("nullthrows")((yield o("WAWebVoipStackInterface").getVoipStackInterface()));
            if (t.type === "web") {
                const n = t.parsers.parseGroupCallReminderData(e);
                o("WAWebBackendApi").frontendFireAndForget("handleGroupCallReminder", n);
            }
        });
        return me.apply(this, arguments);
    }
    function pe(e) {
        return _e.apply(this, arguments);
    }
    function _e() {
        _e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = r("nullthrows")((yield o("WAWebVoipStackInterface").getVoipStackInterface()));
            if (t.type === "web") {
                const n = t.parsers.parseUserRemovedData(e);
                if (o("WAWebUserPrefsMeUser").isMeAccount(n.removeeJid)) {
                    const i = n.removerJid;
                    const removerJid = i?.toString() ?? null;
                    o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: User was removed from call by ",
                        ""
                    ])), removerJid ?? "unknown");
                    o("WAWebBackendApi").frontendFireAndForget("showUserRemovedDialog", {
                        removerJid
                    });
                    yield t.endCall(o("WAWebVoipSignalingEnums").EndCallReason.Unknown, true);
                } else {
                    const s = n.removeeJid;
                    o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: Participant ",
                        " was removed from call"
                    ])), s.toString());
                    o("WAWebBackendApi").frontendFireAndForget("showParticipantRemovedToast", {
                        removeeJid: s.toString()
                    });
                }
            }
        });
        return _e.apply(this, arguments);
    }
    l.resetCallLinkHandlerState = x;
    l.handleGroupInfoChanged = $;
    l.handleCallGridRankingChanged = A;
    l.handleRxTrafficStateForPeerChanged = B;
    l.handleNetHealthStatusChanged = q;
    l.handleCallLinkStateChanged = V;
    l.handleCallLinkNacked = G;
    l.handleCallOfferNacked = j;
    l.handleLobbyNacked = Q;
    l.handleLobbyTimeout = X;
    l.handleWaitingRoomDenied = Y;
    l.handleWaitingRoomStateChanged = Z;
    l.handleCallRejectReceived = te;
    l.handleCallFatal = re;
    l.handleRTCPByeReceived = ae;
    l.handleRelayBindsFailed = le;
    l.handleP2PTransportUpdate = ue;
    l.handleGroupCallReminder = de;
    l.handleUserRemoved = pe;
}, 98);