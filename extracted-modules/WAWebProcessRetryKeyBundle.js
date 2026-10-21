__d("WAWebProcessRetryKeyBundle", [
    "WALogger",
    "WAWebAddonRetryRequestUtils",
    "WAWebApiContact",
    "WAWebApiMessageInfoStore",
    "WAWebCoexV2RetryAuthorization",
    "WAWebDBMessageSerialization",
    "WAWebE2eRetryRejectWamEvent",
    "WAWebLidMigrationUtils",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebPQGatingUtils",
    "WAWebSchemaMessage",
    "WAWebSendMsgTypes",
    "WAWebSessionScope",
    "WAWebSessionScopeWamUtils",
    "WAWebSignal",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumDeviceType",
    "WAWebWamEnumEncryptionTypeCode",
    "WAWebWamEnumRetryRejectReason",
    "WAWebWamMsgUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
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
    function h(e, t) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = new (r("WAWebMsgKey"))({
                id: t,
                remote: e,
                fromMe: true,
                participant: e.isUser() ? undefined : o("WAWebUserPrefsMeUser").getMeLidUserOrThrow()
            });
            const a = yield o("WAWebAddonRetryRequestUtils").getSentAddonMsgRecord(n);
            if (a != null) {
                return {
                    msgKey: n,
                    messageRowId: a.selfMsgRow.rowId,
                    msgRecord: {
                        type: o("WAWebSendMsgTypes").SendMessageRecordType.Addon,
                        data: a.msgData
                    }
                };
            }
            let i = yield o("WAWebSchemaMessage").getMessageTable().get(String(n));
            if (i == null) {
                const l = o("WAWebLidMigrationUtils").getAlternateMsgKey(n);
                if (l != null) {
                    i = yield o("WAWebSchemaMessage").getMessageTable().get(String(l));
                }
            }
            if (i == null) {
                return null;
            }
            return {
                msgKey: n,
                messageRowId: i.type === o("WAWebMsgType").MSG_TYPE.REVOKED ? i.protocolMessageRowId : i.rowId,
                msgRecord: {
                    type: o("WAWebSendMsgTypes").SendMessageRecordType.Message,
                    data: new (o("WAWebMsgModel")).Msg(o("WAWebDBMessageSerialization").messageFromDbRow(i))
                }
            };
        });
        return y.apply(this, arguments);
    }
    function C(e, t) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (e.isGroup()) {
                return h(e, t);
            }
            return null;
        });
        return b.apply(this, arguments);
    }
    function v(e) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chat, identity, loadedSentMessage, originalMsgId, requester, retryCount, sessionScope }) {
            const m = loadedSentMessage ?? (yield h(chat, originalMsgId));
            if (m == null) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "getMsgIfAuthorized: can not find msg ",
                    "."
                ])), originalMsgId);
                return null;
            }
            const { messageRowId, msgKey, msgRecord } = m;
            const identityRowId = msgRecord.type === o("WAWebSendMsgTypes").SendMessageRecordType.Addon ? identity?.sentAddonRowId : identity?.rowId;
            if (messageRowId == null) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "getMsgIfAuthorized: msg missing rowId ",
                    "."
                ])), msgKey.toString());
                return null;
            }
            const retryEligibility = yield o("WAWebCoexV2RetryAuthorization").getCoexV2RelayRetryEligibility(requester, originalMsgId);
            const C = retryEligibility != null ? {
                hasAdditionalRetryTargets: false,
                retryEligibility
            } : yield o("WAWebApiMessageInfoStore").getRetryEligibilityWithMetadata({
                identityRowId,
                messageRowId,
                msgKey,
                receiver: requester
            });
            let C_hasAdditionalRetryTargets = C.hasAdditionalRetryTargets;
            let C_retryEligibility = C.retryEligibility;
            const S = C_retryEligibility === o("WAWebApiMessageInfoStore").RetryEligibilityResult.INELIGIBLE_RECORD_MISSING;
            const receiver = S ? o("WAWebApiContact").getAlternateDeviceWid(o("WAWebWidFactory").createDeviceWidFromWidOrThrow(requester)) : null;
            if (receiver) {
                const L = yield o("WAWebApiMessageInfoStore").getRetryEligibilityWithMetadata({
                    identityRowId,
                    messageRowId,
                    msgKey,
                    receiver
                });
                C_hasAdditionalRetryTargets = L.hasAdditionalRetryTargets;
                C_retryEligibility = L.retryEligibility;
            }
            if (msgRecord.type === o("WAWebSendMsgTypes").SendMessageRecordType.Message) {
                yield msgRecord.data.waitForPrep();
            }
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "getMsgIfAuthorized: ",
                ", ",
                " retry eligibility ",
                ""
            ])), originalMsgId, String(requester), C_retryEligibility).tags("messaging");
            let OTHER = o("WAWebWamEnumRetryRejectReason").RETRY_REJECT_REASON.OTHER;
            let retryRevoke = false;
            if (msgRecord.data.type === o("WAWebMsgType").MSG_TYPE.REVOKED) {
                retryRevoke = true;
                msgRecord.data.type = "protocol";
                msgRecord.data.subtype = msgRecord.data.subtype === "admin" ? "admin_revoke" : "sender_revoke";
            }
            switch(C_retryEligibility){
                case o("WAWebApiMessageInfoStore").RetryEligibilityResult.ELIGIBLE:
                    return {
                        msgRecord,
                        retryContext: {
                            hasAdditionalRetryTargets: C_hasAdditionalRetryTargets
                        },
                        isIdentityChangedSinceSend: identityRowId == null || messageRowId < identityRowId
                    };
                case o("WAWebApiMessageInfoStore").RetryEligibilityResult.INELIGIBLE_ALREADY_DELIVERED:
                    OTHER = o("WAWebWamEnumRetryRejectReason").RETRY_REJECT_REASON.DOUBLE_CHECKMARK;
                    break;
                case o("WAWebApiMessageInfoStore").RetryEligibilityResult.INELIGIBLE_CHANGED_IDENTITY:
                    OTHER = o("WAWebWamEnumRetryRejectReason").RETRY_REJECT_REASON.IDENTITY_CHANGE;
                    break;
                default:
                    OTHER = o("WAWebWamEnumRetryRejectReason").RETRY_REJECT_REASON.OTHER;
                    break;
            }
            const I = new (o("WAWebE2eRetryRejectWamEvent")).E2eRetryRejectWamEvent({
                senderDeviceType: requester.isCompanion() ? o("WAWebWamEnumDeviceType").DEVICE_TYPE.COMPANION : o("WAWebWamEnumDeviceType").DEVICE_TYPE.PRIMARY,
                messageType: o("WAWebWamMsgUtils").getWamMessageType(msgRecord.data),
                msgRetryCount: retryCount,
                retryRevoke,
                retryRejectReason: OTHER,
                sessionScope: o("WAWebSessionScopeWamUtils").sessionScopeToWamType(sessionScope)
            });
            const T = o("WAWebWamMsgUtils").getWamE2eSenderType(requester);
            if (T != null) {
                I.e2eSenderType = T;
            }
            if (requester.isHosted()) {
                I.encryptionType = o("WAWebWamEnumEncryptionTypeCode").ENCRYPTION_TYPE_CODE.COEX;
            }
            I.commit();
            return null;
        });
        return S.apply(this, arguments);
    }
    function R(e) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ is1on1, keyBundle, offline, remoteRegId, requester, savedRegId, sessionScope }) {
            if (remoteRegId == null || !keyBundle || keyBundle.type === "regular_retry" && !keyBundle.key) {
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "processKeyBundle: skip due to missing key bundle"
                ])));
                return false;
            }
            if (offline) {
                if (savedRegId == null) {
                    o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "processKeyBundle: missing session for retry"
                    ])));
                    yield o("WAWebSignal").Session.deleteRemoteInfo(requester);
                    return false;
                }
                if (savedRegId !== remoteRegId) {
                    o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "processKeyBundle: del session, reg mismatch saved=",
                        " recv=",
                        ""
                    ])), savedRegId, remoteRegId);
                    yield o("WAWebSignal").Session.deleteRemoteInfo(requester);
                    return false;
                }
                o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "processKeyBundle: update session w/ retry bundle (offline)"
                ])));
            } else {
                o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "processKeyBundle: update session w/ retry bundle"
                ])));
            }
            yield o("WAWebSignal").Session.createSignalSession({
                wid: requester,
                regId: remoteRegId,
                identity: keyBundle.identity,
                deviceIdentity: keyBundle.deviceIdentity,
                key: keyBundle.key,
                skey: keyBundle.skey
            }, sessionScope);
            if (keyBundle.kyberKey != null && is1on1 === true && (sessionScope == null || sessionScope === o("WAWebSessionScope").SessionScope.DEFAULT) && !requester.isBot() && !requester.isFbidBot() && !requester.isHosted() && o("WAWebPQGatingUtils").isPq1on1MessageEnabled()) {
                try {
                    yield o("WAWebSignal").Session.createSignalSession({
                        wid: requester,
                        regId: remoteRegId,
                        identity: keyBundle.identity,
                        deviceIdentity: keyBundle.deviceIdentity,
                        key: keyBundle.key,
                        skey: keyBundle.skey,
                        kyberKey: keyBundle.kyberKey
                    }, o("WAWebSessionScope").SessionScope.PQ);
                    o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                        "processKeyBundle: established PQXDH session from retry bundle"
                    ])));
                } catch (error) {
                    o("WALogger").WARN(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                        "processKeyBundle: failed to build PQXDH session from retry bundle: ",
                        ""
                    ])), error).sendLogs("retry-pqxdh-session-fail");
                }
            }
            return true;
        });
        return L.apply(this, arguments);
    }
    l.loadGroupSentMessage = C;
    l.getMsgIfAuthorized = v;
    l.processKeyBundle = R;
}, 98);