__d("WAWebVoipDeferredBootStaleCalls", [
    "WABase64",
    "WACyrb53Hash",
    "WALogger",
    "WAWebABProps",
    "WAWebBackendApi",
    "WAWebCoreActionsODS",
    "WAWebDbEncryptionKey",
    "WAWebVoipBootInitDecision",
    "WAWebVoipDeferredBootLogging",
    "WAWebVoipGatingUtils",
    "WAWebVoipIncomingOfferRoute",
    "WAWebVoipInitEventEmitter",
    "WAWebVoipSignalingEnums",
    "WAWebVoipStaleOfferMissedCallFieldstats",
    "WAWebVoipWaCallEnums",
    "WAWebWidFactory",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = 100;
    const p = 1000;
    const _ = 1000;
    const SilenceReason = 0;
    const g = 90000;
    const h = new Set([
        "accept",
        "connect_stat",
        "flowcontrol",
        "interruption",
        "mute_v2",
        "preaccept",
        "ready",
        "reject",
        "relay_info_update",
        "relaylatency",
        "screen",
        "screen_share",
        "terminate",
        "transport",
        "video"
    ]);
    const y = new Set([
        "accepted_elsewhere",
        "screened_elsewhere"
    ]);
    const C = new Set;
    const b = new Set;
    const v = new Map;
    const S = new Set;
    function R(e, t, n) {
        const r = k(e, t);
        if (r === "follow_up") {
            N(e, t, n);
        }
        return r;
    }
    function L(e, t, n) {
        try {
            e: {
                if (e === "offer") {
                    if (!A(t.call_id, n)) {
                        F(t);
                        o("WAWebVoipStaleOfferMissedCallFieldstats").logStaleOfferMissedCallFieldstats(t, n, function() {
                            return v.get(t.call_id);
                        });
                    }
                    break e;
                }
                if (e === "follow_up") {
                    O(t);
                    break e;
                }
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
            }
        } catch (error) {
            W(error);
        }
    }
    function E() {
        C.clear();
        b.clear();
        v.clear();
        S.clear();
    }
    function k(t, n) {
        try {
            const a = t.type === o("WAWebVoipSignalingEnums").TYPE.OFFER ? I(t) : P(t, n);
            if (a != null) {
                U(a, t);
            }
            return a;
        } catch (error) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [deferred-boot] stale call claim failed"
            ]))).catching(r("getErrorSafe")(error));
            return null;
        }
    }
    function I(e) {
        const e_call_id = e.call_id;
        if (b.has(e_call_id) || !T(e)) {
            C.delete(e_call_id);
            M(b, e_call_id, m);
            return null;
        }
        M(C, e_call_id, m);
        return "offer";
    }
    function T(e) {
        if (o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInited()) {
            return D() && o("WAWebVoipIncomingOfferRoute").getIncomingOfferRoute(e, $) === "stale";
        }
        return o("WAWebVoipBootInitDecision").isDeferredVoipBootInitEnabled() && o("WAWebVoipIncomingOfferRoute").getIncomingOfferRoute(e, x) === "stale";
    }
    function D() {
        return o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getWasVoipInitedByHiddenPrewarm() && o("WAWebVoipBootInitDecision").isDeferredVoipBootHiddenPrewarmEnabled();
    }
    function x() {
        return o("WAWebABProps").getABPropConfigValue("web_voip_incoming_offer_init_freshness_ms");
    }
    function $() {
        const e = x();
        if (e > 0) {
            return Math.max(e, g);
        }
        return e;
    }
    function P(e, t) {
        if (C.has(e.call_id) && h.has(t) && e.peer_jid.isUser() && !o("WAWebVoipGatingUtils").isGroupCallMessage(e)) {
            return "follow_up";
        }
        return null;
    }
    function N(e, t, n) {
        try {
            const i = e.call_id;
            const l = v.get(i) ?? {};
            const u = o("WAWebVoipStaleOfferMissedCallFieldstats").applyFollowUpStanza(l, t, e, n);
            if (u !== l) {
                v.set(i, u);
                w(v, p);
            }
        } catch (error) {
            o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [deferred-boot] stale follow-up record failed"
            ]))).catching(r("getErrorSafe")(error));
        }
    }
    function M(e, t, n) {
        e.delete(t);
        e.add(t);
        w(e, n);
    }
    function w(e, t) {
        if (e.size > t) {
            const n = e.keys().next().value;
            if (n != null) {
                e.delete(n);
            }
        }
    }
    function A(call_id, t) {
        const n = t.maybeChild("enc");
        if (n == null || !n.hasContent()) {
            return false;
        }
        const a = n.contentBytes();
        if (a.length === 0) {
            return false;
        }
        const i = `${call_id}:${a.length}:${r("WACyrb53Hash")(o("WABase64").encodeB64(a))}`;
        const l = S.has(i);
        M(S, i, _);
        return l;
    }
    function F(e) {
        o("WAWebCoreActionsODS").logCallIncomingMissed();
        const t = Date.now();
        B(function() {
            o("WAWebBackendApi").frontendFireAndForget("generateCallLogFromEventCallMissed", {
                callMissedData: q(e, Date.now() - t)
            });
        });
    }
    function O(e) {
        if (!(e.type !== o("WAWebVoipSignalingEnums").TYPE.TERMINATE || !y.has(e.terminate_reason ?? ""))) {
            B(function() {
                o("WAWebBackendApi").frontendFireAndForget("generateCallLogFromEventUpdate1to1", {
                    call1to1LogData: {
                        CallId: e.call_id,
                        PeerJid: o("WAWebWidFactory").asUserWidOrThrow(e.peer_jid),
                        Result: o("WAWebVoipWaCallEnums").CallLogResult.AcceptedElsewhere
                    }
                });
            });
        }
    }
    function B(e) {
        o("WAWebDbEncryptionKey").DbEncKeyStore.waitForFinalDbMsgEncKey().then(e).catch(W);
    }
    function W(e) {
        o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [deferred-boot] stale call log write failed"
        ]))).catching(r("getErrorSafe")(e)).tags("non-sad").sendLogs("voip-deferred-boot-stale-call-log-failed", {
            sendLogsType: o("WALogger").SendLogsType.INVESTIGATION,
            sampling: 0.01
        });
    }
    function q(e, t) {
        return {
            CallId: e.call_id,
            PeerUserJid: o("WAWebWidFactory").asUserWidOrThrow(e.peer_jid),
            GroupJid: null,
            IsVideoCall: e.isVideoCall === true,
            GroupInfo: null,
            CallParticipantInfos: [],
            TimeElapsedSinceCallOffer: e.e + t,
            SilenceReason,
            CallTermReason: o("WAWebVoipStaleOfferMissedCallFieldstats").getStaleOfferCallTermReason(e, v.get(e.call_id))
        };
    }
    function U(e, t) {
        o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(function() {
            const n = String(t.is_call_ended === true);
            if (o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInited()) {
                V(e);
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [deferred-boot] stale call stanza with init stanza=",
                    " type=",
                    " call_ended=",
                    " queued_ms=",
                    ""
                ])), e, t.type, n, t.e);
                return;
            }
            e: {
                if (e === "offer") {
                    o("WAWebCoreActionsODS").logCallIncomingDeferredBootStaleOffer();
                    break e;
                }
                if (e === "follow_up") {
                    o("WAWebCoreActionsODS").logCallIncomingDeferredBootStaleFollowUp();
                    break e;
                }
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
            }
            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [deferred-boot] stale call stanza without init stanza=",
                " type=",
                " call_ended=",
                " queued_ms=",
                ""
            ])), e, t.type, n, t.e);
        });
    }
    function V(e) {
        e: {
            if (e === "offer") {
                o("WAWebCoreActionsODS").logCallIncomingDeferredBootStaleOfferAfterHiddenPrewarm();
                break e;
            }
            if (e === "follow_up") {
                o("WAWebCoreActionsODS").logCallIncomingDeferredBootStaleFollowUp();
                break e;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        }
    }
    l.claimStaleCallStanza = R;
    l.writeStaleCallLog = L;
    l.resetStaleCallsForTesting = E;
}, 98);