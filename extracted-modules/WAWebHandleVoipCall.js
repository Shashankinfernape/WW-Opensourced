__d("WAWebHandleVoipCall", [
    "Promise",
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WALogger",
    "WATimeUtils",
    "WAWap",
    "WAWebBackendApi",
    "WAWebCommsWapMd",
    "WAWebCoreActionsODS",
    "WAWebEnvironment",
    "WAWebHandleVoipOfferNotice",
    "WAWebHandleVoipTransfer",
    "WAWebJidToWid",
    "WAWebPageVisibilityRecency",
    "WAWebVoipBackendLoadable",
    "WAWebVoipCallStateUtils",
    "WAWebVoipCalleeOfferToRingStore",
    "WAWebVoipChunkLoadFailFast",
    "WAWebVoipColdPathEarlyStart",
    "WAWebVoipDeferredBootLogging",
    "WAWebVoipDeferredBootStaleCalls",
    "WAWebVoipGatingUtils",
    "WAWebVoipHandleIncomingSignalingMessage",
    "WAWebVoipIncomingOfferReceivedWallClockStore",
    "WAWebVoipIncomingOfferRoute",
    "WAWebVoipInitEventEmitter",
    "WAWebVoipLidUtils",
    "WAWebVoipLocalCallStateStore",
    "WAWebVoipSendGroupCallRekeyRetryReceiptJob",
    "WAWebVoipSignalingEnums",
    "WAWebVoipWaCallEnums",
    "asyncToGeneratorRuntime",
    "cr:6324",
    "err",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
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
    const N = n("cr:6324") ?? {};
    const N_maybeOverrideJestE2ERelayEndpoints = N.maybeOverrideJestE2ERelayEndpoints;
    const w = "incoming";
    function A(voipNode) {
        const TYPE = o("WAWebVoipSignalingEnums").TYPE;
        return TYPE[voipNode.tag().toUpperCase()] || o("WAWebVoipSignalingEnums").TYPE.NONE;
    }
    const F = new (r("WADeprecatedWapParser"))("callParser", function(e) {
        e.assertTag("call");
        const c = o("WAWebJidToWid").jidWithTypeToWid(e.attrJidWithType("from"));
        const d = e.hasAttr("sender_lid") ? o("WAWebJidToWid").jidWithTypeToWid(e.attrJidWithType("sender_lid")) : null;
        const voipNode = e.mapFirstChild(function(e) {
            return e;
        });
        if (!voipNode) {
            throw r("err")("Unrecognized call stanza");
        }
        const call_id = voipNode.attrString("call-id");
        const _ = o("WAWebJidToWid").jidWithTypeToWid(voipNode.attrJidWithType("call-creator"));
        const group_jid = voipNode.hasAttr("group-jid") ? o("WAWebJidToWid").jidWithTypeToWid(voipNode.attrJidWithType("group-jid")) : null;
        const caller_pn = voipNode.hasAttr("caller_pn") ? o("WAWebJidToWid").jidWithTypeToWid(voipNode.attrJidWithType("caller_pn")) : null;
        const caller_username = voipNode.maybeAttrString("username");
        const caller_country_code = voipNode.maybeAttrString("caller_country_code");
        const caller_push_name = voipNode.maybeAttrString("notify");
        const group_info_updates = voipNode.maybeChild("group_info")?.mapChildren(function(e) {
            const r = e.maybeAttrString("push_name") ?? e.maybeAttrString("guest_name") ?? null;
            return {
                jid: o("WAWebJidToWid").jidWithTypeToWid(e.attrJidWithType("jid")),
                user_pn: e.hasAttr("user_pn") ? o("WAWebJidToWid").jidWithTypeToWid(e.attrJidWithType("user_pn")) : null,
                username: e.maybeAttrString("username"),
                push_name: r,
                account_kind: e.maybeAttrString("account_kind"),
                guest_name: r
            };
        });
        const v = babelHelpers.extends({
            call_id,
            call_creator: _,
            caller_pn,
            peer_jid: c,
            peer_platform: e.maybeAttrString("platform") ?? "",
            peer_app_version: e.maybeAttrString("version") ?? "0",
            is_offline: e.hasAttr("offline")
        }, O(voipNode), {
            type: A(voipNode),
            common: {
                call_id,
                peer_jid: c.toString(),
                type: String(A(voipNode))
            },
            group_jid,
            caller_username,
            caller_country_code,
            caller_push_name,
            isVideoCall: voipNode.hasChild("video"),
            silence_reason: voipNode.maybeChild("silence")?.maybeAttrString("reason") ?? undefined,
            t: e.maybeAttrTime("t") ?? o("WATimeUtils").castToUnixTime(0),
            e: o("WATimeUtils").castUnixTimeToMillisTime(e.maybeAttrTime("e") ?? o("WATimeUtils").castToUnixTime(0)),
            group_info_updates
        });
        return {
            from: c,
            senderLid: d,
            stanzaId: e.attrString("id"),
            payloadTag: voipNode.tag(),
            message: v,
            callCreator: _,
            voipNode
        };
    });
    function O(voipNode) {
        if (voipNode.tag() === "terminate") {
            return {
                has_terminate_transaction_id: false,
                is_call_ended: false,
                terminate_reason: voipNode.maybeAttrString("reason")
            };
        }
        return B(voipNode);
    }
    function B(voipNode) {
        if (voipNode.maybeAttrString("is_call_ended") !== "1") {
            return {
                has_terminate_transaction_id: false,
                is_call_ended: false,
                terminate_reason: null
            };
        }
        const t = voipNode.maybeChild("terminate_hint");
        if (t == null) {
            return {
                has_terminate_transaction_id: false,
                is_call_ended: true,
                terminate_reason: voipNode.maybeAttrString("terminate_reason")
            };
        }
        return {
            has_terminate_transaction_id: t.hasAttr("terminate_transaction_id"),
            is_call_ended: true,
            terminate_reason: t.maybeAttrString("terminate_reason")
        };
    }
    function W(e) {
        const t = F.parse(e);
        if (t.error) {
            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "Parsing Error: ",
                ""
            ])), t.error.toString());
            return null;
        }
        return t.success;
    }
    function q(e, t) {
        return U.apply(this, arguments);
    }
    function U() {
        U = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (!o("WAWebVoipGatingUtils").isCallingEnabled()) {
                return false;
            }
            if (o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInited()) {
                return true;
            }
            o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(function() {
                o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [deferred-boot] intent init_start trigger=",
                    ""
                ])), w);
            });
            const n = self.performance.now();
            const r = yield o("WAWebVoipBackendLoadable").requireVoipJsBackendForCall().catch((e)=>{
                if (!(e instanceof o("WAWebVoipChunkLoadFailFast").VoipChunkLoadError)) {
                    o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(function() {
                        o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [deferred-boot] intent backend_load_failed trigger=",
                            ""
                        ])), w).sendLogs("voip: backend-load-failed-on-stanza");
                    });
                }
                throw e;
            });
            const r_WAWebVoipInit = r.WAWebVoipInit;
            o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(function() {
                o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [deferred-boot] intent backend_ready trigger=",
                    ""
                ])), w);
            });
            let i = false;
            try {
                if (r_WAWebVoipInit.VoipInitEventEmitter.getIsVoipInited()) {
                    o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(function() {
                        o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [deferred-boot] intent init_ready trigger=",
                            " source=concurrent_init retry_requested=false"
                        ])), w);
                    });
                    return true;
                }
                yield r_WAWebVoipInit.initWAWebVoip(w, undefined, e, Math.round(self.performance.now() - n), t);
                if (!r_WAWebVoipInit.VoipInitEventEmitter.getIsVoipInited() && r_WAWebVoipInit.VoipInitEventEmitter.getDidVoipInitError()) {
                    i = true;
                    o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(function() {
                        o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [deferred-boot] intent retry_requested trigger=",
                            ""
                        ])), w);
                    });
                    yield r_WAWebVoipInit.retryWAWebVoipInitAfterFailure();
                }
                if (r_WAWebVoipInit.VoipInitEventEmitter.getIsVoipInited()) {
                    o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(function() {
                        o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [deferred-boot] intent init_ready trigger=",
                            " source=intent_init retry_requested=",
                            ""
                        ])), w, i);
                    });
                    return true;
                }
            } catch (e) {
                o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(function() {
                    o("WALogger").ERROR(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [deferred-boot] intent init_failed trigger=",
                        ""
                    ])), w).sendLogs("voip: init-failed-on-stanza");
                });
                return false;
            }
            if (o("WAWebVoipGatingUtils").isUnsupportedBrowserForWebCalling()) {
                o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(function() {
                    o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [deferred-boot] intent init_terminal trigger=",
                        " result=unsupported retry_requested=",
                        ""
                    ])), w, i);
                });
                o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: skip call stanza, unsupported browser: ",
                    ""
                ])), o("WAWebVoipGatingUtils").getUnsupportedBrowserReason() ?? "unknown").sendLogs("voip-call-stanza-unsupported-browser", {
                    sendLogsType: o("WALogger").SendLogsType.INVESTIGATION,
                    sampling: 0.01
                });
                return false;
            }
            o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(function() {
                o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [deferred-boot] intent init_terminal trigger=",
                    " result=not_inited retry_requested=",
                    ""
                ])), w, i);
            });
            o("WALogger").ERROR(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                "voip: Failed to initialize VoIP"
            ]))).sendLogs("voip: init-resolved-not-inited-on-stanza");
            return false;
        });
        return U.apply(this, arguments);
    }
    let V = null;
    function H() {
        V = null;
    }
    function G(e) {
        if (e) {
            return "available";
        }
        return "fallback";
    }
    function z(e) {
        if (e instanceof o("WAWebVoipChunkLoadFailFast").VoipChunkLoadError) {
            return "chunk_reload_required";
        }
        throw e;
    }
    function j(e, payloadTag) {
        return {
            isCallEnded: e.is_call_ended === true,
            isFreshOffer: e.type === o("WAWebVoipSignalingEnums").TYPE.OFFER && o("WAWebVoipIncomingOfferRoute").isFreshIncomingOffer(e),
            isGroup: K(e),
            isOffline: e.is_offline === true,
            msgType: e.type,
            payloadTag,
            queuedMs: e.e
        };
    }
    function K(e) {
        return o("WAWebVoipGatingUtils").isGroupCallMessage(e) || e.peer_jid.isGroupCall() || e.has_terminate_transaction_id === true;
    }
    function Q(e, t, n) {
        return X.apply(this, arguments);
    }
    function X() {
        X = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, r) {
            Y();
            if (V != null) {
                return "reload_required";
            }
            if (o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipStackUnresponsive()) {
                if (e.type === o("WAWebVoipSignalingEnums").TYPE.OFFER) {
                    o("WAWebCoreActionsODS").logCallIncomingHeldStackUnresponsive();
                }
                o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(function() {
                    o("WALogger").LOG(R || (R = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [deferred-boot] intent blocked trigger=",
                        " reason=stack_unresponsive"
                    ])), w);
                });
                return "reload_required";
            }
            const a = e.type === o("WAWebVoipSignalingEnums").TYPE.OFFER;
            if (e.type === o("WAWebVoipSignalingEnums").TYPE.TERMINATE) {
                o("WAWebBackendApi").frontendFireAndForget("finishVoipInitReloadRecovery", {
                    callId: e.call_id
                });
            }
            const i = q(j(e, t), r).then(G, z);
            if (!a) {
                return J((yield i));
            }
            const l = o("WAWebBackendApi").frontendSendAndReceive("startVoipInitReloadRecovery", {
                callId: e.call_id,
                canRing: o("WAWebVoipIncomingOfferRoute").isFreshIncomingOffer(e)
            }).then((e)=>{
                switch(e){
                    case "artifact_unavailable":
                        return "artifact_reload_required";
                    case "cancelled":
                        return i;
                    case "unavailable":
                        return "reload_required";
                    default:
                        return (()=>{
                            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
                        })();
                }
            }, ()=>i);
            try {
                const s = yield (P || (P = n("Promise"))).race([
                    i,
                    l
                ]);
                return J(s);
            } finally{
                o("WAWebBackendApi").frontendFireAndForget("finishVoipInitReloadRecovery", {
                    callId: e.call_id
                });
            }
        });
        return X.apply(this, arguments);
    }
    function Y() {
        if (V === "artifact" && o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInited()) {
            V = null;
        }
    }
    function J(e) {
        e: {
            if (e === "artifact_reload_required") {
                const t = o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInited();
                o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(function() {
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [deferred-boot] intent blocked trigger=",
                        " reason=artifact_reload_required inited=",
                        ""
                    ])), w, t);
                });
                if (!t) {
                    V = "artifact";
                }
                return "reload_required";
                break e;
            }
            if (e === "reload_required") {
                o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(function() {
                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [deferred-boot] intent blocked trigger=",
                        " reason=reload_required"
                    ])), w);
                });
                V = "stuck";
                return "reload_required";
                break e;
            }
            if (e === "chunk_reload_required") {
                o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(function() {
                    o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [deferred-boot] intent blocked trigger=",
                        " reason=chunk_load_failed"
                    ])), w);
                });
                V = "stuck";
                o("WAWebBackendApi").frontendFireAndForget("markVoipChunkUnavailable");
                return "reload_required";
                break e;
            }
            if (e === "available") {
                return "available";
            }
            if (e === "fallback") {
                return "fallback";
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        }
    }
    function Z(type) {
        return type === o("WAWebVoipSignalingEnums").TYPE.OFFER || type === o("WAWebVoipSignalingEnums").TYPE.ENC_REKEY || type === o("WAWebVoipSignalingEnums").TYPE.ACCEPT || type === o("WAWebVoipSignalingEnums").TYPE.REJECT;
    }
    function ee(e, t, n, r, o) {
        return te.apply(this, arguments);
    }
    function te() {
        te = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, a, i) {
            const { call_creator, call_id } = e;
            if (!i) {
                o("WALogger").LOG(L || (L = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: ENC_REKEY received while VoIP stack is unavailable, returning NO_ACK"
                ])));
                return "NO_ACK";
            }
            o("WALogger").LOG(E || (E = babelHelpers.taggedTemplateLiteralLoose([
                "voip: received ENC_REKEY stanza from ",
                ", call_id=",
                ", stanzaId=",
                ""
            ])), t.toString(), call_id ?? "unknown", n);
            try {
                const u = yield o("WAWebVoipHandleIncomingSignalingMessage").handleVoipIncomingEncRekey(e, a);
                const { retryCount, shouldRetry } = u;
                if (shouldRetry) {
                    o("WALogger").LOG(k || (k = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: ENC_REKEY requires retry, retryCount=",
                        ", sending retry receipt"
                    ])), String(retryCount ?? 0));
                    yield r("WAWebVoipSendGroupCallRekeyRetryReceiptJob")(n, e, retryCount);
                } else {
                    me({
                        callCreator: call_creator,
                        callId: call_id,
                        from: t,
                        stanzaId: n,
                        type: o("WAWebVoipSignalingEnums").TYPE.ENC_REKEY
                    });
                }
            } catch (error) {
                o("WALogger").ERROR(I || (I = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: ENC_REKEY handling failed: ",
                    ""
                ])), error);
            }
            return "NO_ACK";
        });
        return te.apply(this, arguments);
    }
    function ne(e, t, n, r, o) {
        return re.apply(this, arguments);
    }
    function re() {
        re = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, a, i) {
            const { call_creator, call_id } = e;
            switch(e.type){
                case o("WAWebVoipSignalingEnums").TYPE.OFFER:
                    me({
                        callCreator: call_creator,
                        callId: call_id,
                        from: t,
                        stanzaId: n,
                        type: e.type
                    });
                    if (i) {
                        const u = yield o("WAWebVoipBackendLoadable").requireVoipJsBackend();
                        yield u.WAWebHandleVoipCallOffer.handleVoipCallOffer(e, a);
                    } else {
                        yield o("WAWebVoipHandleIncomingSignalingMessage").handleVoipIncomingSignalingMessage(e, a, false);
                    }
                    return "NO_ACK";
                case o("WAWebVoipSignalingEnums").TYPE.ENC_REKEY:
                    return ee(e, t, n, a, i);
                case o("WAWebVoipSignalingEnums").TYPE.ACCEPT:
                case o("WAWebVoipSignalingEnums").TYPE.REJECT:
                    me({
                        callCreator: call_creator,
                        callId: call_id,
                        from: t,
                        stanzaId: n,
                        type: e.type
                    });
                    yield o("WAWebVoipHandleIncomingSignalingMessage").handleVoipIncomingSignalingMessage(e, a, i);
                    return "NO_ACK";
                default:
                    throw r("err")("Unexpected receipt-bearing call message");
            }
        });
        return re.apply(this, arguments);
    }
    function oe(e) {
        return ae.apply(this, arguments);
    }
    function ae() {
        ae = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ canUseVoipStack, from, message, node, payloadTag, stanzaId, voipNode }) {
            if (Z(message.type)) {
                return ne(message, from, stanzaId, voipNode, canUseVoipStack);
            }
            if (message.type === o("WAWebVoipSignalingEnums").TYPE.OFFER_NOTICE) {
                if (r("WAWebEnvironment").isWindows && !o("WAWebVoipGatingUtils").isWinHybridPlusEnabled()) {
                    o("WALogger").ERROR(T || (T = babelHelpers.taggedTemplateLiteralLoose([
                        "handleVoipIncomingSignalingMessage: offer notice unsupported on win"
                    ])));
                    return "NO_ACK";
                }
                return r("WAWebHandleVoipOfferNotice")(node);
            }
            if (payloadTag === "transfer" && canUseVoipStack) {
                yield o("WAWebHandleVoipTransfer").handleVoipTransfer(message, voipNode);
            } else {
                yield o("WAWebVoipHandleIncomingSignalingMessage").handleVoipIncomingSignalingMessage(message, voipNode, canUseVoipStack);
            }
            return pe({
                ackString: payloadTag,
                from,
                stanzaId
            });
        });
        return ae.apply(this, arguments);
    }
    function ie(e) {
        return le.apply(this, arguments);
    }
    function le() {
        le = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebPageVisibilityRecency").snapshotPageVisibility();
            N_maybeOverrideJestE2ERelayEndpoints?.(e);
            const a = W(e);
            if (a == null) {
                return (P || (P = n("Promise"))).resolve("NO_ACK");
            }
            const { from, message, payloadTag, senderLid, stanzaId, voipNode } = a;
            const m = o("WAWebVoipDeferredBootStaleCalls").claimStaleCallStanza(message, payloadTag, voipNode);
            if (message.type === o("WAWebVoipSignalingEnums").TYPE.OFFER && o("WAWebVoipCallStateUtils").isCallTerminal(o("WAWebVoipLocalCallStateStore").getLocalCallState())) {
                o("WAWebVoipCalleeOfferToRingStore").recordCalleeOfferReceived(message.call_id);
                o("WAWebVoipIncomingOfferReceivedWallClockStore").recordIncomingOfferReceivedWallClock(message.call_id);
            }
            se(message, m, t);
            try {
                if (senderLid != null) {
                    if (from.isLid()) {
                        o("WALogger").ERROR(D || (D = babelHelpers.taggedTemplateLiteralLoose([
                            "handleCall: sender_lid in a lid call"
                        ]))).sendLogs("lid-call-sender-lid");
                    }
                    if (senderLid.isUser()) {
                        yield o("WAWebVoipLidUtils").attemptPersistLidMappingAndUserAttributes({
                            jid: senderLid,
                            phoneNumber: from.isUser() ? from : null,
                            flushImmediately: true
                        });
                    }
                }
                yield o("WAWebVoipLidUtils").persistAttributesAndLidMappingsForCall(message);
            } catch (error) {
                o("WALogger").ERROR(x || (x = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: identity persistence failed, continuing to dispatch"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("voip-identity-persistence-failed", {
                    sendLogsType: o("WALogger").SendLogsType.INVESTIGATION,
                    sampling: 0.01
                });
            }
            if (o("WAWebVoipGatingUtils").isGuestViewer() && message.group_info_updates != null) {
                o("WAWebBackendApi").frontendFireAndForget("hydrateGuestParticipantContacts", {
                    participants: message.group_info_updates.map((e)=>({
                            jid: e.jid,
                            pushName: e.push_name,
                            username: e.username,
                            isGuestUser: o("WAWebVoipWaCallEnums").wireStringToAccountKind(e.account_kind) === o("WAWebVoipWaCallEnums").AccountKind.Guest
                        }))
                });
            }
            return ue({
                from,
                message,
                node: e,
                payloadTag,
                stanzaId,
                voipNode
            }, m, t);
        });
        return le.apply(this, arguments);
    }
    function se(message, t, n) {
        if (t == null && message.type === o("WAWebVoipSignalingEnums").TYPE.OFFER && o("WAWebVoipIncomingOfferRoute").isFreshIncomingOffer(message) && !K(message)) {
            o("WAWebVoipColdPathEarlyStart").startVoipColdPathEarly("incoming", n);
        }
    }
    function ue(e, t, n) {
        return ce.apply(this, arguments);
    }
    function ce() {
        ce = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            if (t != null) {
                return de(t, e);
            }
            const r = yield Q(e.message, e.payloadTag, n);
            if (r === "reload_required") {
                o("WALogger").LOG($ || ($ = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: retaining call stanza until user reloads, type=",
                    ""
                ])), e.payloadTag);
                return "NO_ACK";
            }
            return oe(babelHelpers.extends({}, e, {
                canUseVoipStack: r === "available"
            }));
        });
        return ce.apply(this, arguments);
    }
    function de(e, { from, message, payloadTag, stanzaId, voipNode }) {
        const s = Z(message.type);
        if (s) {
            me({
                callCreator: message.call_creator,
                callId: message.call_id,
                from,
                stanzaId,
                type: message.type
            });
        }
        o("WAWebVoipDeferredBootStaleCalls").writeStaleCallLog(e, message, voipNode);
        if (s) {
            return "NO_ACK";
        }
        return pe({
            ackString: payloadTag,
            from,
            stanzaId
        });
    }
    function me({ callCreator, callId, from, stanzaId, type }) {
        let l;
        switch(type){
            case o("WAWebVoipSignalingEnums").TYPE.OFFER:
                l = o("WAWap").wap("offer", {
                    "call-id": o("WAWap").CUSTOM_STRING(callId),
                    "call-creator": o("WAWebCommsWapMd").JID(callCreator)
                });
                break;
            case o("WAWebVoipSignalingEnums").TYPE.ENC_REKEY:
                l = o("WAWap").wap("enc_rekey", {
                    "call-id": o("WAWap").CUSTOM_STRING(callId),
                    "call-creator": o("WAWebCommsWapMd").JID(callCreator)
                });
                break;
            case o("WAWebVoipSignalingEnums").TYPE.ACCEPT:
                l = o("WAWap").wap("accept", {
                    "call-id": o("WAWap").CUSTOM_STRING(callId),
                    "call-creator": o("WAWebCommsWapMd").JID(callCreator)
                });
                break;
            case o("WAWebVoipSignalingEnums").TYPE.REJECT:
                l = o("WAWap").wap("reject", {
                    "call-id": o("WAWap").CUSTOM_STRING(callId),
                    "call-creator": o("WAWebCommsWapMd").JID(callCreator)
                });
                break;
        }
        o("WADeprecatedSendIq").deprecatedCastStanza(o("WAWap").wap("receipt", {
            to: o("WAWebCommsWapMd").JID(from),
            id: o("WAWap").CUSTOM_STRING(stanzaId)
        }, l));
    }
    function pe({ ackString, from, stanzaId }) {
        return o("WAWap").wap("ack", {
            to: o("WAWebCommsWapMd").JID(from),
            id: o("WAWap").CUSTOM_STRING(stanzaId),
            class: "call",
            type: o("WAWap").MAYBE_CUSTOM_STRING(ackString)
        });
    }
    l.parseCallNode = W;
    l.canUseVoipStackForCallMessage = q;
    l.resetVoipInitReloadRequiredForTest = H;
    l.handleCall = ie;
}, 98);