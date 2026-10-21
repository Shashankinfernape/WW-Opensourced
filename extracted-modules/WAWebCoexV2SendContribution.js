__d("WAWebCoexV2SendContribution", [
    "WALogger",
    "WAWap",
    "WAWebApiCoexV2RelayReceiptStore",
    "WAWebBackendJobs.flow",
    "WAWebBackendJobsCommon",
    "WAWebCoexV2BotWid",
    "WAWebCoexV2ProtoSanitize",
    "WAWebCoexV2RetryMarkerStore",
    "WAWebCommsWapMd",
    "WAWebE2EProtoUtils",
    "WAWebEncryptMsgProtobuf",
    "WAWebICDCMetaApi",
    "WAWebManageE2ESessionsJob",
    "WAWebMsgGetters",
    "WAWebSendMsgBotStanza",
    "WAWebSessionScope",
    "WAWebSignalSessionApi",
    "WAWebSimpleSignalPNToFBIDMigration",
    "WAWebThreadMsgUtils",
    "WAWebWasaHatchOutboundWrapper",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u({ agentCopies, agentEngagementType, botAttrs, isFeedback, msg, plan }) {
        if (plan == null) {
            return null;
        }
        const u = agentCopies[0];
        if (u == null) {
            return null;
        }
        const c = S(plan);
        const { peerLid, selfLid } = c;
        const p = R(selfLid, peerLid);
        const _ = o("WAWebSimpleSignalPNToFBIDMigration").getFbidBotPersonaType(u.agentWid);
        return {
            node: C({
                agentEngagementType,
                botAttrs,
                destinationWids: [
                    selfLid,
                    peerLid,
                    u.agentWid
                ],
                isFeedback,
                personaType: _ ?? null,
                sharedEnc: u.sharedEnc
            }),
            seedReceipts: (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    yield b(msg.id.id, p, msg.t);
                    yield o("WAWebCoexV2RetryMarkerStore").markCoexV2RepresentedTargets(msg.id, u.agentWid);
                });
                function t() {
                    return e.apply(this, arguments);
                }
                return t;
            })()
        };
    }
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ botAttrs, editType, msg, msgProtobuf, relayPlan }) {
            if (relayPlan == null) {
                return null;
            }
            const { peerLid, selfIsCoexV2, selfLid } = relayPlan;
            const u = [
                selfLid,
                peerLid
            ].filter(Boolean);
            const c = yield g(msg, msgProtobuf, editType, u, null, selfIsCoexV2, botAttrs);
            if (c == null) {
                return null;
            }
            return {
                node: c.node,
                seedReceipts: function() {
                    return b(msg.id.id, u, msg.t);
                },
                shouldHaveIdentity: c.shouldHaveIdentity
            };
        });
        return d.apply(this, arguments);
    }
    function m(e, t) {
        return y(e, o("WAWebMsgGetters").getMessageSecret(t));
    }
    function p({ ciphertext, mediaType, msgProtobuf, retryCount, type, useStatelessSession }) {
        return o("WAWap").wap("enc", {
            v: o("WAWap").CUSTOM_STRING(o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString()),
            type: o("WAWap").CUSTOM_STRING(type),
            session_type: o("WAWebEncryptMsgProtobuf").isPqxdhCiphertext(ciphertext) ? o("WAWap").CUSTOM_STRING("pq") : o("WAWap").DROP_ATTR,
            state: useStatelessSession && type === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg ? o("WAWap").CUSTOM_STRING("false") : o("WAWap").DROP_ATTR,
            mediatype: o("WAWebBackendJobsCommon").encodeMaybeMediaType(mediaType),
            "decrypt-fail": o("WAWebBackendJobsCommon").encodeMaybeDecryptFail(o("WAWebE2EProtoUtils").decryptFailAttributeFromProtobuf(msgProtobuf)),
            native_flow_name: o("WAWebBackendJobsCommon").encodeMaybeNativeFlowName(o("WAWebBackendJobsCommon").nativeFlowNameTypeFromProtobuf(msgProtobuf)),
            count: retryCount > 0 ? o("WAWap").INT(retryCount) : o("WAWap").DROP_ATTR
        }, ciphertext);
    }
    function _(e, t, n, r, o) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, { agentEngagementType, agentWid, isFeedback, representedLids, selfHosted, stanzaTo, useStatelessSession }, a) {
            const h = o("WAWebSendMsgBotStanza").getBotStanzaAttrs(e, o("WAWebSendMsgBotStanza").getIsBizBotFeedback(e, e.id.remote), o("WAWebThreadMsgUtils").getMsgAiThread(e)?.key.id ?? null);
            if (useStatelessSession) {
                yield o("WAWebSignalSessionApi").deleteRemoteSession(agentWid);
            }
            yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
                identityChanged: false,
                sessionScope: o("WAWebSessionScope").SessionScope.DEFAULT,
                wids: [
                    agentWid
                ]
            });
            yield o("WAWebICDCMetaApi").populateICDCMeta(o("WAWebWidFactory").asUserWidOrThrow(stanzaTo), t);
            let y = m(t, e);
            if (o("WAWebWasaHatchOutboundWrapper").shouldWrapHatchOutbound(stanzaTo, agentWid, e.subtype)) {
                try {
                    y = yield o("WAWebWasaHatchOutboundWrapper").wrapHatchOutboundMessage({
                        currentStanzaId: e.id.id,
                        innerMessage: y
                    });
                } catch (error) {
                    throw error instanceof o("WAWebWasaHatchOutboundWrapper").WAWebWasaHatchWrapError ? error : new (o("WAWebWasaHatchOutboundWrapper")).WAWebWasaHatchWrapError("WASA Hatch outbound wrap failed", error);
                }
            }
            const b = yield o("WAWebEncryptMsgProtobuf").encryptMsgProtobuf(agentWid, a, y, e, n, o("WAWebSessionScope").SessionScope.DEFAULT, useStatelessSession, selfHosted);
            const { ciphertext, type } = b;
            const R = p({
                ciphertext,
                mediaType: o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(t),
                msgProtobuf: t,
                retryCount: a,
                type,
                useStatelessSession
            });
            const L = o("WAWebSimpleSignalPNToFBIDMigration").getFbidBotPersonaType(agentWid);
            return {
                node: C({
                    agentEngagementType,
                    botAttrs: h,
                    destinationWids: [].concat(representedLids, [
                        agentWid
                    ]),
                    isFeedback,
                    personaType: L ?? null,
                    sharedEnc: R
                }),
                shouldHaveIdentity: type === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg,
                type
            };
        });
        return f.apply(this, arguments);
    }
    function g(e, t, n, r, o, a, i) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, a, destinationWids, l, s, u) {
            try {
                yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
                    identityChanged: false,
                    sessionScope: o("WAWebSessionScope").SessionScope.DEFAULT,
                    wids: [
                        o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID
                    ]
                });
                const c = o("WAWebCoexV2ProtoSanitize").sanitizeCoexV2RelayMessage(n);
                const d = yield o("WAWebEncryptMsgProtobuf").encryptMsgProtobuf(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID, l ?? 0, c, t, a, o("WAWebSessionScope").SessionScope.DEFAULT, true, s);
                const { ciphertext, type } = d;
                const _ = o("WAWap").wap("enc", {
                    v: o("WAWap").CUSTOM_STRING(o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString()),
                    type: o("WAWap").CUSTOM_STRING(type),
                    session_type: o("WAWebEncryptMsgProtobuf").isPqxdhCiphertext(ciphertext) ? o("WAWap").CUSTOM_STRING("pq") : o("WAWap").DROP_ATTR,
                    state: type === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg ? o("WAWap").CUSTOM_STRING("false") : o("WAWap").DROP_ATTR,
                    count: l != null && l > 0 ? o("WAWap").INT(l) : o("WAWap").DROP_ATTR
                }, ciphertext);
                return {
                    node: C({
                        agentEngagementType: null,
                        botAttrs: u,
                        destinationWids,
                        isFeedback: false,
                        personaType: null,
                        sharedEnc: _
                    }),
                    shouldHaveIdentity: type === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg,
                    type
                };
            } catch (error) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[coexv2] failed to build relay bot node"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("coexv2-relay-bot-node-build-failed");
                return null;
            }
        });
        return h.apply(this, arguments);
    }
    function y(e, t) {
        const r = o("WAWebCoexV2ProtoSanitize").sanitizeCoexV2RelayMessage(e);
        if (r.messageContextInfo?.botMessageSecret != null) {
            r.messageContextInfo = babelHelpers.extends({}, r.messageContextInfo, {
                botMessageSecret: null
            });
        }
        if (t != null) {
            r.messageContextInfo = babelHelpers.extends({}, r.messageContextInfo, {
                messageSecret: t
            });
        }
        return r;
    }
    function C({ agentEngagementType, botAttrs, destinationWids, isFeedback, personaType, sharedEnc }) {
        const s = new Set;
        const u = [];
        for (const c of destinationWids){
            if (c != null) {
                const d = L(c);
                if (!s.has(d)) {
                    s.add(d);
                    u.push(c);
                }
            }
        }
        const m = u.map((e)=>o("WAWap").wap("to", {
                jid: o("WAWebCommsWapMd").DEVICE_JID(e)
            }));
        return o("WAWap").wap("bot", {
            type: isFeedback ? "feedback" : o("WAWap").MAYBE_CUSTOM_STRING(botAttrs?.type),
            agent_engagement_type: agentEngagementType != null ? o("WAWap").CUSTOM_STRING(agentEngagementType) : o("WAWap").DROP_ATTR,
            persona_type: personaType != null ? o("WAWap").CUSTOM_STRING(personaType) : o("WAWap").DROP_ATTR,
            local_automated_type: o("WAWap").MAYBE_CUSTOM_STRING(botAttrs?.localAutomatedType),
            client_thread_id: o("WAWap").MAYBE_CUSTOM_STRING(botAttrs?.clientThreadId),
            mode_selection: o("WAWap").MAYBE_CUSTOM_STRING(botAttrs?.modeSelection),
            mode_selected: o("WAWap").MAYBE_CUSTOM_STRING(botAttrs?.modeSelected)
        }, [].concat(m, [
            sharedEnc
        ]));
    }
    function b(e, t, n) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            try {
                yield o("WAWebApiCoexV2RelayReceiptStore").createOrMergeCoexV2RelayReceipts(e, t, n);
            } catch (error) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[coexv2] failed to seed relay receipt rows"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("coexv2-relay-receipt-seed-failed");
                throw error;
            }
        });
        return v.apply(this, arguments);
    }
    function S(plan) {
        return ((plan_1)=>{
            if ((typeof plan_1 === "object" && plan_1 !== null || typeof plan_1 === "function") && plan_1.kind === "user_agent") {
                return {
                    peerLid: null,
                    selfLid: plan_1.selfLid
                };
            }
            if ((typeof plan_1 === "object" && plan_1 !== null || typeof plan_1 === "function") && plan_1.kind === "invoked_agent") {
                const n = plan_1;
                return {
                    peerLid: n.relayPlan.peerLid,
                    selfLid: n.relayPlan.selfLid
                };
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${plan_1}`);
        })(plan);
    }
    function R(selfLid, peerLid) {
        if (selfLid == null) {
            if (peerLid == null) {
                return [];
            }
            return [
                peerLid
            ];
        }
        if (peerLid == null || L(selfLid) === L(peerLid)) {
            return [
                selfLid
            ];
        }
        return [
            selfLid,
            peerLid
        ];
    }
    function L(e) {
        return o("WAWebCommsWapMd").DEVICE_JID(e).toString();
    }
    l.finalizeCoexV2AgentContribution = u;
    l.buildCoexV2RelayContribution = c;
    l.prepareCoexV2AgentPayload = m;
    l.genCoexV2AgentSharedEncNode = p;
    l.genCoexV2InvokedAgentRetryBotNode = _;
    l.genCoexV2RelayBotNodeForTargets = g;
}, 98);