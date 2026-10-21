__d("WAWebSendCoexV2RetryMsgJob", [
    "Promise",
    "WALogger",
    "WAWap",
    "WAWebAdvSignatureApi",
    "WAWebApiCoexV2RelayReceiptStore",
    "WAWebBotTypes",
    "WAWebCoexV2BotWid",
    "WAWebCoexV2GatingUtils",
    "WAWebCoexV2HostedContactUtils",
    "WAWebCoexV2RelayEligibility",
    "WAWebCoexV2SendContribution",
    "WAWebCommsWapMd",
    "WAWebE2EProtoUtils",
    "WAWebMsgGetters",
    "WAWebOutgoingMessage",
    "WAWebSendMsgBotStanza",
    "WAWebSendMsgCommonApi",
    "WAWebSendMsgMetaNode",
    "WAWebSignalProtocolStore",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe"
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
    function b({ msgRecord, recipient, retryContext, retryCount, to }) {
        if (to.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID)) {
            return {
                kind: "applicable",
                result: v(msgRecord, retryCount, recipient)
            };
        }
        if (to.isFbidBot()) {
            if (retryContext?.hasAdditionalRetryTargets !== true) {
                return {
                    kind: "not_applicable"
                };
            }
            if (o("WAWebCoexV2GatingUtils").isCoexV2SendEnabled()) {
                return {
                    kind: "fallback",
                    result: R(msgRecord, retryCount, to, recipient, true)
                };
            }
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[coexv2] invoked-agent retry: send flag off; using ordinary retry"
            ]))).sendLogs("coexv2-invoked-agent-retry-flag-off");
            return {
                kind: "fallback",
                result: (C || (C = n("Promise"))).resolve(null)
            };
        }
        return {
            kind: "not_applicable"
        };
    }
    function v(e, t, n) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            if (n == null) {
                o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[coexv2] retry: missing recipient; skipping"
                ]))).sendLogs("coexv2-retry-missing-recipient");
                return null;
            }
            const e_data = e.data;
            const i = e_data.id.id;
            if (!o("WAWebCoexV2GatingUtils").isCoexV2SendEnabled()) {
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[coexv2] retry: send flag off; dropping bot retry for ",
                    ""
                ])), i).sendLogs("coexv2-retry-flag-off");
                return null;
            }
            const l = yield o("WAWebApiCoexV2RelayReceiptStore").getUndeliveredCoexV2Lids(i);
            if (l.length === 0) {
                o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[coexv2] retry: no undelivered LIDs for ",
                    ""
                ])), i);
                return null;
            }
            const s = yield I(e, l);
            const { selfHosted, survivors } = s;
            if (survivors.length === 0) {
                o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[coexv2] retry: no surviving targets for ",
                    ""
                ])), i);
                return null;
            }
            const f = o("WAWebOutgoingMessage").createOutgoingMessageProtobuf(o("WAWebOutgoingMessage").OutgoingMessageOriginType.Retry, e);
            const g = o("WAWebSendMsgBotStanza").getIsBizBotFeedback(e_data, e_data.id.remote);
            const h = yield o("WAWebCoexV2SendContribution").genCoexV2RelayBotNodeForTargets(e_data, f, o("WAWebMsgGetters").getWamEditType(e_data), survivors, t, selfHosted, {
                clientThreadId: null,
                localAutomatedType: g ? null : o("WAWebBotTypes").getBotLocalAutomatedType(e_data.bizBotType),
                modeSelected: null,
                modeSelection: null,
                type: o("WAWebSendMsgBotStanza").getBotStanzaType(e_data)
            });
            if (h == null) {
                throw r("err")(`[coexv2] retry: failed to build relay bot node for ${survivors.length} undelivered target(s)`);
            }
            const y = o("WAWebSendMsgMetaNode").genMetaNode({
                chatId: e_data.id.remote,
                groupData: null,
                includeAttributes: {
                    appendHostedSenderIntent: true
                },
                msgProtobuf: f,
                msgRecord: e
            });
            return o("WAWap").wap("message", {
                id: o("WAWap").CUSTOM_STRING(i),
                to: o("WAWebCommsWapMd").CHAT_JID(n),
                type: o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(f),
                edit: o("WAWebSendMsgCommonApi").editAttribute(f, e_data.subtype)
            }, h.node, y);
        });
        return S.apply(this, arguments);
    }
    function R(e, t, n, r, o) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, agentWid, a, i) {
            if (!o("WAWebCoexV2GatingUtils").isCoexV2SendEnabled()) {
                return null;
            }
            const e_data = e.data;
            const s = e_data.id.id;
            const stanzaTo = a ?? agentWid;
            if (!i) {
                o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[coexv2] invoked-agent retry: no represented-target marker for ",
                    ""
                ])), s);
                return null;
            }
            const c = yield E(s);
            try {
                const d = yield I(e, c, true);
                const { selfHosted, survivors } = d;
                if (survivors.length === 0) {
                    o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                        "[coexv2] invoked-agent retry: no surviving represented targets for ",
                        ""
                    ])), s).sendLogs("coexv2-invoked-agent-retry-no-surviving-targets");
                    return null;
                }
                const representedLids = survivors.map(o("WAWebWidFactory").asUserLidOrThrow);
                const y = o("WAWebOutgoingMessage").createOutgoingMessageProtobuf(o("WAWebOutgoingMessage").OutgoingMessageOriginType.Retry, e);
                const C = yield o("WAWebCoexV2RelayEligibility").resolveCoexV2SimpleSignalPolicy({
                    chatId: e_data.id.remote,
                    stanzaTo
                });
                const b = yield o("WAWebCoexV2SendContribution").genCoexV2InvokedAgentRetryBotNode(e_data, y, o("WAWebMsgGetters").getWamEditType(e_data), {
                    agentEngagementType: o("WAWebSendMsgBotStanza").getBotAgentEngagementType(false, stanzaTo, e_data),
                    agentWid,
                    isFeedback: o("WAWebMsgGetters").getIsBotFeedbackMessage(e_data),
                    representedLids,
                    selfHosted,
                    stanzaTo,
                    useStatelessSession: o("WAWebCoexV2RelayEligibility").shouldUseCoexV2StatelessSession(C, agentWid)
                }, t);
                const v = b.shouldHaveIdentity ? o("WAWap").wap("device-identity", null, (yield o("WAWebAdvSignatureApi").getADVEncodedIdentity())) : null;
                const S = o("WAWebSendMsgMetaNode").genMetaNode({
                    chatId: e_data.id.remote,
                    groupData: null,
                    includeAttributes: {
                        appendHostedSenderIntent: representedLids.length > 0
                    },
                    msgProtobuf: y,
                    msgRecord: e
                });
                yield o("WAWebSignalProtocolStore").getSignalProtocolStore().flushBufferToDiskIfNotMemOnlyMode();
                return o("WAWap").wap("message", {
                    id: o("WAWap").CUSTOM_STRING(s),
                    to: o("WAWebCommsWapMd").CHAT_JID(stanzaTo),
                    type: o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(y),
                    edit: o("WAWebSendMsgCommonApi").editAttribute(y, e_data.subtype)
                }, b.node, v, S);
            } catch (error) {
                o("WALogger").WARN(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[coexv2] invoked-agent retry failed"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("coexv2-invoked-agent-retry-failed");
                throw error;
            }
        });
        return L.apply(this, arguments);
    }
    function E(e) {
        return k.apply(this, arguments);
    }
    function k() {
        k = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            let t;
            let n = true;
            try {
                t = yield o("WAWebApiCoexV2RelayReceiptStore").getUndeliveredCoexV2Lids(e);
                if (t.length === 0) {
                    n = yield o("WAWebApiCoexV2RelayReceiptStore").hasCoexV2RelayReceipt(e);
                }
            } catch (error) {
                o("WALogger").WARN(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[coexv2] invoked-agent retry receipt read failed"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("coexv2-invoked-agent-retry-receipt-read-failed");
                throw error;
            }
            if (!n) {
                o("WALogger").WARN(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[coexv2] invoked-agent retry: missing relay receipt rows for ",
                    ""
                ])), e).sendLogs("coexv2-invoked-agent-retry-receipt-state-missing");
                throw r("err")(`[coexv2] invoked-agent retry: missing relay receipt rows for ${e}`);
            }
            return t;
        });
        return k.apply(this, arguments);
    }
    function I(e, t, n) {
        return T.apply(this, arguments);
    }
    function T() {
        T = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, r = false) {
            const remote = e.data.id.remote;
            const i = yield (C || (C = n("Promise"))).all([
                o("WAWebCoexV2RelayEligibility").isSelfCoexV2Hosted(),
                o("WAWebCoexV2HostedContactUtils").isPeerCoexV2Hosted(remote),
                o("WAWebCoexV2HostedContactUtils").isPeerCoexV2Blocked(remote)
            ]);
            const selfHosted = i[0];
            const s = i[1];
            const u = i[2];
            const c = [];
            const d = [];
            for (const m of t){
                const p = D(m, r);
                if (p != null) {
                    if (o("WAWebUserPrefsMeUser").isMeAccount(p)) {
                        if (selfHosted) {
                            c.push(p);
                        }
                    } else if (s && !u) {
                        d.push(p);
                    }
                }
            }
            const _ = yield C.all(d.map((e)=>o("WAWebCoexV2HostedContactUtils").isPeerCoexV2Blocked(e)));
            const f = d.filter((e, t)=>!_[t]);
            const g = f.length > 0 ? yield o("WAWebSendMsgCommonApi").filterDeviceWithChangedIdentity(e, f) : f;
            return {
                selfHosted,
                survivors: [].concat(c, g)
            };
        });
        return T.apply(this, arguments);
    }
    function D(e, t) {
        let n;
        try {
            n = o("WAWebWidFactory").createUserWidOrThrow(e);
        } catch (error) {
            if (t) {
                throw error;
            }
            o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[coexv2] retry: skipping malformed undelivered LID"
            ]))).catching(r("getErrorSafe")(error)).sendLogs("coexv2-retry-malformed-lid");
            return null;
        }
        if (!n.isLid()) {
            if (t) {
                throw r("err")(`[coexv2] invoked-agent retry: non-LID represented target ${n.toLogString()}`);
            }
            o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[coexv2] retry: skipping non-LID undelivered target ",
                ""
            ])), n.toLogString()).sendLogs("coexv2-retry-non-lid-target");
            return null;
        }
        return n;
    }
    l.getCoexV2RetryDispatch = b;
    l.buildCoexV2RetryStanza = v;
    l.buildCoexV2InvokedAgentRetryStanza = R;
}, 98);