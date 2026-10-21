__d("WAWebCoexV2RelayEligibility", [
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebAeaRollout",
    "WAWebApiDeviceList",
    "WAWebApiVerifiedBusinessName",
    "WAWebCoexV2BotWid",
    "WAWebCoexV2GatingUtils",
    "WAWebCoexV2HostedContactUtils",
    "WAWebCoexV2SupportedMsgTypes",
    "WAWebHandleMsgTypes.flow",
    "WAWebLidMigrationUtils",
    "WAWebMessagingGatingUtils",
    "WAWebMsgFanoutTypes",
    "WAWebProtobufsE2E.pb",
    "WAWebSendMsgCommonApi",
    "WAWebSignalSessionApi",
    "WAWebSimpleSignalDowngradeStore",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "cr:17538",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chatId, stanzaTo }) {
            if (o("WAWebABProps").getABPropConfigValue("web_coex_simple_signal_enabled") !== 1 || !chatId.isUser() || !stanzaTo.isUser() || o("WAWebSimpleSignalDowngradeStore").isCoexUserDowngradedFromSimpleSignal(chatId)) {
                return null;
            }
            try {
                const i = (yield o("WAWebApiVerifiedBusinessName").getVerifiedBusinessNameRecordLidAware(chatId))?.privacyMode;
                if (i == null) {
                    return null;
                }
                const privacyMode = o("WAWebApiVerifiedBusinessName").convertPrivacyModeFromStorageType(i);
                if (privacyMode == null || privacyMode.hostStorage !== o("WAWebHandleMsgTypes.flow").HostStorageEnumType.Facebook) {
                    return null;
                }
                return {
                    privacyMode,
                    stanzaTo,
                    statelessSessionEnabled: o("WAWebMessagingGatingUtils").isSimpleSignalEnabled()
                };
            } catch (error) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[coexv2] simple signal: failed to read peer privacy mode"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("coexv2-simple-signal-privacy-mode-read-failed");
                return null;
            }
        });
        return _.apply(this, arguments);
    }
    function f(e, t) {
        return e?.statelessSessionEnabled === true && (t.isHosted() || t.user === e.stanzaTo.user && o("WAWebSendMsgCommonApi").isPrimaryDevice(t));
    }
    function g(e, t) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            yield (m || (m = n("Promise"))).all(t.filter((t)=>!t.isHosted() && f(e, t)).map((e)=>o("WAWebSignalSessionApi").deleteRemoteSession(e)));
        });
        return h.apply(this, arguments);
    }
    function y(e) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (!e.isUser() || e.isBot() || e.isFbidBot()) {
                return false;
            }
            const t = (yield o("WAWebCoexV2HostedContactUtils").isPeerCoexV2Hosted(e)) && !(yield o("WAWebCoexV2HostedContactUtils").isPeerCoexV2Blocked(e)) || (yield N());
            if (t) {
                return o("WAWebCoexV2GatingUtils").isCoexV2SendEnabled();
            }
            return false;
        });
        return C.apply(this, arguments);
    }
    function b(e, t) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (!x(e, t) || !(yield T())) {
                return null;
            }
            const n = o("WAWebUserPrefsMeUser").getMaybeMeLidUser();
            if (n == null) {
                return null;
            }
            return {
                agentCopyIsRequired: true,
                kind: "user_agent",
                selfLid: n
            };
        });
        return v.apply(this, arguments);
    }
    function S({ hasFbidBotDevice, isBotInvokeMessage, isResendingMsg, isRevokeForMsgFromOrDeliveredToBot, relayPlan }) {
        if (isResendingMsg || relayPlan == null || !isBotInvokeMessage && !isRevokeForMsgFromOrDeliveredToBot || !hasFbidBotDevice) {
            return null;
        }
        return {
            agentCopyIsRequired: false,
            kind: "invoked_agent",
            relayPlan
        };
    }
    function R(e, t) {
        return e?.agentCopyIsRequired === true && t === 0;
    }
    function L(e) {
        return E.apply(this, arguments);
    }
    function E() {
        E = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chat, chatId, msgProtobuf, option, stanzaTo }) {
            if (!$(msgProtobuf, stanzaTo, option)) {
                return null;
            }
            const s = yield (m || (m = n("Promise"))).all([
                T(),
                o("WAWebCoexV2HostedContactUtils").isPeerCoexV2Hosted(chatId),
                o("WAWebCoexV2HostedContactUtils").isPeerCoexV2Blocked(chatId),
                k(chatId, msgProtobuf)
            ]);
            const selfIsCoexV2 = s[0];
            const d = s[1];
            const p = s[2];
            const _ = s[3];
            const f = d && !_;
            if (!selfIsCoexV2 && !f) {
                return null;
            }
            const g = selfIsCoexV2 ? o("WAWebUserPrefsMeUser").getMaybeMeLidUser() : null;
            const h = f && !p ? P(chat?.accountLid, stanzaTo) : null;
            const y = h != null && (yield o("WAWebCoexV2HostedContactUtils").isPeerCoexV2Blocked(h));
            if (f && (p || y)) {
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[coexv2] relay: peer is blocked; dropping peer <to>"
                ]))).sendLogs("coexv2-relay-peer-blocked");
            }
            const peerLid = y ? null : h;
            if (g == null && peerLid == null) {
                return null;
            }
            return {
                peerLid,
                selfIsCoexV2,
                selfLid: g
            };
        });
        return E.apply(this, arguments);
    }
    function k(e, t) {
        return I.apply(this, arguments);
    }
    function I() {
        I = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const i = t.protocolMessage?.type;
            if (n("cr:17538") == null || i === o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.REVOKE || i === o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.MESSAGE_UNSCHEDULE) {
                return false;
            }
            try {
                return yield n("cr:17538").isAeaEnforcedE2eeChat(e);
            } catch (error) {
                o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[coexv2] relay: failed to read the AEA thread state"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("coexv2-relay-aea-thread-state-read-failed");
                return o("WAWebAeaRollout").isAeaEnforcementEnabled();
            }
        });
        return I.apply(this, arguments);
    }
    function T() {
        return D.apply(this, arguments);
    }
    function D() {
        D = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            try {
                const e = yield o("WAWebApiDeviceList").getMyDeviceList();
                return e.devices.some((e)=>e.isHosted === true);
            } catch (error) {
                o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[coexv2] gate: failed to read self device list"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("coexv2-self-device-list-read-failed");
                return false;
            }
        });
        return D.apply(this, arguments);
    }
    function x(e, t) {
        return o("WAWebCoexV2GatingUtils").isCoexV2SendEnabled() && e.isFbidBot() && !e.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID) && o("WAWebCoexV2SupportedMsgTypes").isCoexV2SupportedProtobuf(t);
    }
    function $(msgProtobuf, stanzaTo, option) {
        return o("WAWebCoexV2GatingUtils").isCoexV2SendEnabled() && option.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT && option.isResendingMsg !== true && stanzaTo.isUser() && !stanzaTo.isBot() && !stanzaTo.isFbidBot() && o("WAWebCoexV2SupportedMsgTypes").isCoexV2SupportedProtobuf(msgProtobuf);
    }
    function P(t, stanzaTo) {
        const r = t != null && t.isLid() ? t : o("WAWebLidMigrationUtils").toUserLid(stanzaTo);
        if (r == null) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[coexv2] relay: peer is CoExV2 but has no LID; dropping peer <to>"
            ]))).sendLogs("coexv2-relay-peer-lid-missing");
        }
        return r;
    }
    function N() {
        if (o("WAWebUserPrefsMeUser").getMaybeMeLidUser() == null) {
            return (m || (m = n("Promise"))).resolve(false);
        }
        return T();
    }
    l.resolveCoexV2SimpleSignalPolicy = p;
    l.shouldUseCoexV2StatelessSession = f;
    l.deleteCoexV2SimpleSignalPrimarySessions = g;
    l.genIsCoexV2RelayEligibleSend = y;
    l.getCoexV2AgentSendPlan = b;
    l.getCoexV2InvokedAgentSendPlan = S;
    l.shouldRejectCoexV2AgentSend = R;
    l.getCoexV2RelaySendPlan = L;
    l.isSelfCoexV2Hosted = T;
}, 98);