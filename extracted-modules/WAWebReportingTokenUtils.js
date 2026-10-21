__d("WAWebReportingTokenUtils", [
    "WABase64",
    "WABinary",
    "WACryptoHkdf",
    "WACryptoHmac",
    "WACryptoUtils",
    "WAJids",
    "WALogger",
    "WATimeUtils",
    "WAUseCaseSecret",
    "WAWap",
    "WAWebABProps",
    "WAWebApiContact",
    "WAWebCreateNackFromStanza",
    "WAWebCriticalEventWamEvent",
    "WAWebDBMessageSerialization",
    "WAWebGroupHistoryGating",
    "WAWebGroupHistoryReportingTokenDBUtils",
    "WAWebGroupHistoryReportingTokenUtils",
    "WAWebHandleMsgTypes.flow",
    "WAWebLidMigrationUtils",
    "WAWebMessageInsertDebugPlaceholderWorkerCompatible",
    "WAWebMessagePluginGenerateReportingTokenContent",
    "WAWebMessageSecretErrorsWamEvent",
    "WAWebMessagingGatingUtils",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "WAWebReportingTokenConstants",
    "WAWebReportingTokenContent",
    "WAWebSchemaMessage",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumMessageSecretAllowedType",
    "WAWebWamEnumMessageSecretErrorType",
    "WAWebWamEnumReportingTokenValidationFailureReason",
    "WAWebWamMsgUtils",
    "WAWebWamReportingTokenMismatchReporter",
    "WAWebWid",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "encodeProtobuf",
    "isEmptyObject"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    const _ = 16;
    const f = 32;
    const g = 6;
    const h = 7;
    const y = {
        sampling: 0.01
    };
    const C = {
        sampling: 1
    };
    const b = new Set([
        (p = o("WAWebMsgType")).MSG_TYPE.COMMENT,
        p.MSG_TYPE.EVENT_EDIT_ENCRYPTED,
        p.MSG_TYPE.EVENT_RESPONSE,
        p.MSG_TYPE.MESSAGE_EDIT_ENCRYPTED,
        p.MSG_TYPE.POLL_ADD_OPTION_ENCRYPTED,
        p.MSG_TYPE.POLL_EDIT_ENCRYPTED,
        p.MSG_TYPE.POLL_UPDATE,
        p.MSG_TYPE.REACTION,
        p.MSG_TYPE.REACTION_ENC
    ]);
    function v(e) {
        if (o("WAWebMsgGetters").getIsGroupStatus(e)) {
            return o("WAWebMsgGetters").getAuthor(e);
        }
        return o("WAWebMsgGetters").getSender(e);
    }
    function S(msg) {
        const t = v(msg);
        if (t == null) {
            return null;
        }
        if (t.isLid()) {
            return o("WAWebLidMigrationUtils").toPn(t);
        }
        return t;
    }
    function R(msg) {
        const t = v(msg);
        if (t == null) {
            return null;
        }
        if (t.isLid()) {
            return t;
        }
        if (msg.preMatChat != null) {
            return msg.preMatChat;
        }
        const n = o("WAWebApiContact").getCurrentLid(o("WAWebWidFactory").asUserWidOrThrow(t));
        if (n != null) {
            return o("WAWebWidFactory").createWid(n.toString());
        }
        return null;
    }
    function L(msg) {
        const t = v(msg);
        if (t == null) {
            return [];
        }
        const n = msg.id.remote.isRegularUser();
        if (!n || o("WAWebMsgGetters").getBroadcastId(msg) != null) {
            const r = B(msg);
            const a = S(msg);
            const i = R(msg);
            return [
                {
                    senderWid: t,
                    receiverWid: r
                },
                {
                    senderWid: t.isLid() ? a : i,
                    receiverWid: r
                }
            ];
        }
        const l = S(msg);
        const s = R(msg);
        const u = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
        const c = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
        const d = t.isLid() ? [
            {
                senderWid: s,
                receiverWid: c
            },
            {
                senderWid: l,
                receiverWid: u
            }
        ] : [
            {
                senderWid: l,
                receiverWid: u
            },
            {
                senderWid: s,
                receiverWid: c
            }
        ];
        if (o("WAWebABProps").getABPropConfigValue("rt_swapped_fallback_validation")) {
            d.push({
                senderWid: s,
                receiverWid: u
            }, {
                senderWid: l,
                receiverWid: c
            });
        }
        return d;
    }
    function E(e) {
        return k.apply(this, arguments);
    }
    function k() {
        k = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ messageSecret, remoteJid, senderJid, stanzaId }) {
            const i = o("WABinary").Binary.build(stanzaId, senderJid, remoteJid, o("WAUseCaseSecret").UseCaseSecretModificationType.REPORT_TOKEN).readBuffer();
            return o("WACryptoHkdf").extractAndExpand(messageSecret instanceof ArrayBuffer ? new Uint8Array(messageSecret) : messageSecret, i, f);
        });
        return k.apply(this, arguments);
    }
    function I(e) {
        return o("WAJids").extractFromJid(o("WAWebWidToJid").widToJidWithType(B(e)));
    }
    function T(e) {
        let remote = e.id.remote;
        if (remote.isRegularUser() && !remote.isLid() && e.to.isLid()) {
            remote = e.to;
        }
        const n = o("WAWebWidToJid").widToJidWithType(remote);
        return {
            jidType: n.jidType,
            remoteJid: o("WAJids").extractFromJid(n)
        };
    }
    function D(e) {
        if (e.encFilehash == null && e.caption == null) {
            return null;
        }
        const r = new Uint8Array(o("WABase64").decodeB64(e.encFilehash ?? ""));
        const a = new TextEncoder().encode(e.caption ?? "");
        const i = new Uint8Array(r.length + a.length);
        i.set(r);
        i.set(a, r.length);
        return self.crypto.getRandomValues(new Uint8Array(i.length));
    }
    function x(e, t) {
        return $.apply(this, arguments);
    }
    function $() {
        $ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (!o("WAWebMessagePluginGenerateReportingTokenContent").isMsgTypeReportingTokenCompatible(e.type, e.subtype)) {
                return null;
            }
            const a = o("WAWebMessagingGatingUtils").getSenderReportingTokenVersion();
            if (a <= 0) {
                return null;
            }
            const i = v(e);
            const l = T(e);
            const { jidType, remoteJid } = l;
            if (jidType === "interopUser" || i == null || remoteJid == null) {
                return null;
            }
            let e_reportingTokenContentInfo = e.reportingTokenContentInfo;
            if (e_reportingTokenContentInfo == null) {
                if (b.has(e.type)) {
                    return null;
                }
                const d = o("encodeProtobuf").encodeProtobuf(o("WAWebProtobufsE2E.pb").MessageSpec, t);
                const m = d.readByteArrayView();
                e_reportingTokenContentInfo = P(m, a);
            }
            const p = e_reportingTokenContentInfo;
            const { content, version } = p;
            if (content.length === 0) {
                return null;
            }
            const h = e.messageSecret ?? t.messageContextInfo?.messageSecret;
            if (h == null) {
                new (o("WAWebMessageSecretErrorsWamEvent")).MessageSecretErrorsWamEvent({
                    messageSecretAllowedList: o("WAWebWamEnumMessageSecretAllowedType").MESSAGE_SECRET_ALLOWED_TYPE.MESSAGE_REPORTING_TOKEN,
                    messageMediaType: o("WAWebWamMsgUtils").getWamMediaType(e),
                    messageSecretError: o("WAWebWamEnumMessageSecretErrorType").MESSAGE_SECRET_ERROR_TYPE.MISSING_MESSAGE_SECRET
                }).commit();
                new (o("WAWebCriticalEventWamEvent")).CriticalEventWamEvent({
                    name: "reporting_token_missing_fk_at_send"
                }).commit();
                return null;
            }
            const y = yield E({
                messageSecret: h,
                stanzaId: e.id.id,
                senderJid: o("WAWebWidToJid").widToUserJid(o("WAWebWidFactory").asUserWidOrThrow(i)),
                remoteJid
            });
            const C = yield o("WACryptoHmac").hmacSha256(new Uint8Array(y), content ?? new Uint8Array(0), _);
            return {
                version,
                reportingToken: new Uint8Array(C)
            };
        });
        return $.apply(this, arguments);
    }
    function P(e, t) {
        const content = o("WAWebReportingTokenContent").calculateReportingTokenContent(e, t);
        if (t < o("WAWebReportingTokenConstants").REPORTING_TOKEN_VERSION.V3 && content.length === 0 && o("WAWebMessagingGatingUtils").isReportingTokenV3HybridSendingEnabled()) {
            return {
                content: o("WAWebReportingTokenContent").calculateReportingTokenContent(e, o("WAWebReportingTokenConstants").REPORTING_TOKEN_VERSION.V3),
                version: o("WAWebReportingTokenConstants").REPORTING_TOKEN_VERSION.V3
            };
        }
        return {
            content,
            version: t
        };
    }
    function N(e, t) {
        return M.apply(this, arguments);
    }
    function M() {
        M = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            try {
                const a = (yield x(t, n)) ?? {};
                const { reportingToken, version } = a;
                if (reportingToken == null || version == null) {
                    return null;
                }
                return o("WAWap").wap("reporting", null, o("WAWap").wap("reporting_token", {
                    v: o("WAWap").CUSTOM_STRING(String(version))
                }, reportingToken));
            } catch (error) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "unexpected exception in generating reporting token body: ",
                    ""
                ])), error).tags("messaging", "wa-ice", "report-token").sendLogs("report-token-unexpected-exception", y);
                return null;
            }
        });
        return M.apply(this, arguments);
    }
    function w(e, t, n) {
        return A.apply(this, arguments);
    }
    function A() {
        A = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            if (e.type === o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_BUNDLE) {
                if (o("WAWebGroupHistoryGating").isGroupHistorySenderReportingTokenEnabled(o("WAWebMsgGetters").getRemote(e))) {
                    const r = yield o("WAWebGroupHistoryReportingTokenDBUtils").getGroupHistoryReportingTokenInfosForBundle(n);
                    if (r != null) {
                        return o("WAWebGroupHistoryReportingTokenUtils").buildGroupHistoryReportingMessageStanza(r);
                    }
                }
                return null;
            }
            return N(e, t);
        });
        return A.apply(this, arguments);
    }
    function F(e, t) {
        return O.apply(this, arguments);
    }
    function O() {
        O = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            try {
                const r = (yield x(e, t)) ?? {};
                const { reportingToken, version } = r;
                if (reportingToken == null || version == null) {
                    return null;
                }
                return {
                    reportingTokenV: version,
                    reportingTokenElementValue: reportingToken
                };
            } catch (error) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "unexpected exception in generating reporting token mixin args: ",
                    ""
                ])), error).tags("messaging", "wa-ice", "report-token").sendLogs("report-token-unexpected-exception", y);
                return null;
            }
        });
        return O.apply(this, arguments);
    }
    function B(e) {
        const t = o("WAWebMsgGetters").getBroadcastId(e);
        if (t != null) {
            return t;
        }
        const remote = e.id.remote;
        if (remote.isRegularUser()) {
            if (remote.isLid()) {
                return o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
            }
            return o("WAWebUserPrefsMeUser").getMeUserOrThrow();
        }
        return remote;
    }
    function W(e, t) {
        return q.apply(this, arguments);
    }
    function q() {
        q = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            try {
                if (!o("WAWebMessagingGatingUtils").isReportingTokenReceivingEnabled()) {
                    return {
                        res: true,
                        reportingTokenContent: null,
                        reportingTokenKey: null
                    };
                }
                const n = e.reportingTokenInfo;
                if (n == null || r("isEmptyObject")(n)) {
                    return {
                        res: true,
                        reportingTokenContent: null,
                        reportingTokenKey: null
                    };
                }
                if (n.reportingTag == null) {
                    return {
                        res: true,
                        reportingTokenContent: null,
                        reportingTokenKey: null
                    };
                }
                const { reportingToken, version } = n;
                const l = {
                    msg: e,
                    reportingTokenVersion: version
                };
                if (reportingToken == null) {
                    yield V(e, t, n.validationPolicy);
                    return {
                        res: true,
                        reportingTokenContent: null,
                        reportingTokenKey: null
                    };
                }
                if (!o("WAWebMessagePluginGenerateReportingTokenContent").isMsgTypeReportingTokenCompatible(e.type, e.subtype)) {
                    return {
                        res: true,
                        reportingTokenContent: null,
                        reportingTokenKey: null
                    };
                }
                let s;
                if (o("WAWebMsgGetters").getIsEdited(e)) {
                    s = yield X(e.protocolMessageKey);
                }
                s = s ?? e.messageSecret;
                if (s == null) {
                    o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "message secret cannot be null for validating reporting token info: ",
                        "-",
                        ""
                    ])), e.type, e.subtype).tags("messaging", "wa-ice", "report-token").sendLogs("report-token-null-message-secret", C);
                    o("WAWebWamReportingTokenMismatchReporter").logReportingTokenValidationEvent(babelHelpers.extends({}, l, {
                        reason: o("WAWebWamEnumReportingTokenValidationFailureReason").REPORTING_TOKEN_VALIDATION_FAILURE_REASON.MISSING_MESSAGE_SECRET
                    }));
                    return {
                        res: false,
                        reportingTokenContent: null,
                        reportingTokenKey: null
                    };
                }
                const derivedReportingTokenContent = version == null ? new Uint8Array(0) : o("WAWebReportingTokenContent").calculateReportingTokenContent(t, version);
                if (derivedReportingTokenContent.length === 0) {
                    o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "reporting token content cannot be empty for validating reporting token info. Message: ",
                        "-",
                        ""
                    ])), e.type, e.subtype).tags("messaging", "wa-ice", "report-token").sendLogs("report-token-empty-reporting-token-content", C);
                    o("WAWebWamReportingTokenMismatchReporter").logReportingTokenValidationEvent(babelHelpers.extends({}, l, {
                        reason: K(version) ? o("WAWebWamEnumReportingTokenValidationFailureReason").REPORTING_TOKEN_VALIDATION_FAILURE_REASON.EMPTY_REPORTING_TOKEN_CONTENT : o("WAWebWamEnumReportingTokenValidationFailureReason").REPORTING_TOKEN_VALIDATION_FAILURE_REASON.UNSUPPORTED_VERSION
                    }));
                    return {
                        res: false,
                        reportingTokenContent: null,
                        reportingTokenKey: null
                    };
                }
                const _ = yield G({
                    messageSecret: s,
                    msg: e,
                    receivedReportingToken: reportingToken,
                    derivedReportingTokenContent
                });
                if (_.res === true) {
                    return _;
                }
                o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "Franking tag doesn't match for message ",
                    ": ",
                    "-",
                    ". Received version: ",
                    ""
                ])), e.id.toString(), e.type, e.subtype, version).tags("messaging", "wa-ice", "report-token").sendLogs("report-token-mismatch", C);
                o("WAWebWamReportingTokenMismatchReporter").logReportingTokenValidationEvent({
                    msg: e,
                    reason: K(version) ? o("WAWebWamEnumReportingTokenValidationFailureReason").REPORTING_TOKEN_VALIDATION_FAILURE_REASON.MISMATCH_REPORTING_TOKEN : o("WAWebWamEnumReportingTokenValidationFailureReason").REPORTING_TOKEN_VALIDATION_FAILURE_REASON.UNSUPPORTED_VERSION,
                    reportingTokenVersion: version
                });
                if (j(version)) {
                    const msgInfo = Q(e);
                    o("WAWebMessageInsertDebugPlaceholderWorkerCompatible").maybeInsertDebugPlaceholder({
                        externalId: msgInfo.externalId,
                        nackReason: o("WAWebCreateNackFromStanza").NackReason.ParsingError,
                        msgInfo,
                        offline: false,
                        additionalInfo: `reporting token validation failed for msg ${e.id.toString()}`
                    });
                }
                return _;
            } catch (error) {
                o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "unexpected exception in validating reporting token info: ",
                    ""
                ])), error).tags("messaging", "wa-ice", "report-token").sendLogs("report-token-unexpected-exception", y);
                return {
                    res: false,
                    reportingTokenContent: null,
                    reportingTokenKey: null
                };
            }
        });
        return q.apply(this, arguments);
    }
    function U(e, t) {
        if (t !== o("WAWebReportingTokenConstants").ReportingTokenValidationPolicy.LogMissingReportingToken || e.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN) {
            return false;
        }
        return o("WAWebMessagePluginGenerateReportingTokenContent").isMsgTypeReportingTokenCompatible(e.type, e.subtype);
    }
    function V(e, t, n) {
        return H.apply(this, arguments);
    }
    function H() {
        H = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            if (!(!U(e, n) || !o("WAWebMessagingGatingUtils").isMissingReportingTokenDetectionEnabled())) {
                const reportingTokenVersion = o("WAWebReportingTokenContent").getLatestReportingTokenExclusionVersion();
                const a = o("WAWebReportingTokenContent").calculateReportingTokenContent(t, reportingTokenVersion);
                if (a.length !== 0) {
                    let i = null;
                    if (o("WAWebMsgGetters").getIsEdited(e)) {
                        const l = yield J(e.protocolMessageKey);
                        if (l == null) {
                            return;
                        }
                        i = l.messageSecret;
                    }
                    const s = i ?? e.messageSecret;
                    o("WAWebWamReportingTokenMismatchReporter").logReportingTokenValidationEvent({
                        msg: e,
                        reason: s != null ? o("WAWebWamEnumReportingTokenValidationFailureReason").REPORTING_TOKEN_VALIDATION_FAILURE_REASON.MISSING_REPORTING_TOKEN : o("WAWebWamEnumReportingTokenValidationFailureReason").REPORTING_TOKEN_VALIDATION_FAILURE_REASON.MISSING_REPORTING_TOKEN_SECRET,
                        reportingTokenVersion
                    });
                }
            }
        });
        return H.apply(this, arguments);
    }
    function G(e) {
        return z.apply(this, arguments);
    }
    function z() {
        z = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ derivedReportingTokenContent, messageSecret, msg, receivedReportingToken }) {
            const i = L(msg);
            if (i.length === 0) {
                return {
                    res: false,
                    reportingTokenContent: null,
                    reportingTokenKey: null
                };
            }
            let l = null;
            for (const s of i){
                const { receiverWid, senderWid } = s;
                if (!(senderWid == null || receiverWid == null)) {
                    const remoteJid = o("WAJids").extractFromJid(o("WAWebWidToJid").widToJidWithType(receiverWid));
                    const senderJid = o("WAWebWidToJid").widToUserJid(senderWid);
                    const f = new Uint8Array((yield E({
                        messageSecret,
                        stanzaId: msg.id.id,
                        senderJid,
                        remoteJid
                    })));
                    l = f;
                    const g = new Uint8Array((yield o("WACryptoHmac").hmacSha256(f, derivedReportingTokenContent, _)));
                    const h = o("WACryptoUtils").uint8ArraysEqual(g, receivedReportingToken.subarray(0, 32) ?? new Uint8Array(0));
                    if (h) {
                        return {
                            res: true,
                            reportingTokenContent: derivedReportingTokenContent,
                            reportingTokenKey: f
                        };
                    }
                }
            }
            return {
                res: false,
                reportingTokenContent: derivedReportingTokenContent,
                reportingTokenKey: l
            };
        });
        return z.apply(this, arguments);
    }
    function j(e) {
        if (K(e)) {
            return o("WAWebMessagingGatingUtils").isReportingTokenValidationFailureDebugPlaceholderEnabled();
        }
        return false;
    }
    function K(e) {
        if (e == null) {
            return false;
        }
        if (e < o("WAWebReportingTokenConstants").REPORTING_TOKEN_VERSION.V3) {
            return e <= o("WAWebMessagingGatingUtils").getSenderReportingTokenVersion();
        }
        return e <= o("WAWebReportingTokenContent").getLatestReportingTokenExclusionVersion();
    }
    function Q(e) {
        const externalId = `${e.id.id}DEBUG`;
        const remote = e.id.remote;
        const l = {
            author: v(e) ?? e.from,
            chat: remote,
            count: null,
            edit: -1,
            isHsm: false,
            externalId,
            pushname: "Debug",
            ts: o("WATimeUtils").castToUnixTime((e.t ?? 0) + 1)
        };
        if (r("WAWebWid").isGroup(remote)) {
            return babelHelpers.extends({}, l, {
                type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.GROUP,
                isDirect: false
            });
        }
        return babelHelpers.extends({}, l, {
            type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT
        });
    }
    function X(e) {
        return Y.apply(this, arguments);
    }
    function Y() {
        Y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield J(e);
            return t?.messageSecret;
        });
        return Y.apply(this, arguments);
    }
    function J(e) {
        return Z.apply(this, arguments);
    }
    function Z() {
        Z = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e == null) {
                return null;
            }
            const t = yield o("WAWebSchemaMessage").getMessageTable().get(e.toString());
            if (t != null) {
                return o("WAWebDBMessageSerialization").messageFromDbRow(t);
            }
            return null;
        });
        return Z.apply(this, arguments);
    }
    l.REPORTING_TOKEN_SIZE = _;
    l.REPORTING_TOKEN_KEY_SIZE = f;
    l.REPORTING_TOKEN_STORAGE_SIZE = g;
    l.REPORTING_TOKEN_INVALID_STORAGE_SIZE = h;
    l.genReportingTokenKeyFromMessageSecret = E;
    l.getRemoteJidOnReceiverSide = I;
    l.getMediaReportingTokenContent = D;
    l.genReportingToken = x;
    l.calculateSenderReportingTokenContent = P;
    l.genReportingTokenBody = N;
    l.genReportingTokenBodyForStanza = w;
    l.genClientReportingTokenMixinArgs = F;
    l.validateReportingTokenInfo = W;
    l.showDebugPlaceholderForReportingTokenMismatch = j;
    l.isSupportedReceiveVersion = K;
    l.genDebugMsgInfo = Q;
}, 98);