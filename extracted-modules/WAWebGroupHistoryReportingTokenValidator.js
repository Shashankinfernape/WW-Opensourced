__d("WAWebGroupHistoryReportingTokenValidator", [
    "WACryptoUtils",
    "WALogger",
    "WATimeUtils",
    "WAWebGroupHistoryGating",
    "WAWebGroupHistoryReportingTokenDBUtils",
    "WAWebGroupHistoryReportingTokenGenerator",
    "WAWebMessagingGatingUtils",
    "WAWebMsgType",
    "WAWebProtobufsGroupHistory.pb",
    "WAWebReportingTokenConstants",
    "WAWebReportingTokenContent",
    "WAWebReportingTokenUtils",
    "WAWebWamEnumReportingTokenValidationFailureReason",
    "WAWebWamReportingTokenMismatchReporter",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "decodeProtobuf"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    function p(e) {
        if (e.type === "revoked" && e.protocolMessageKey != null) {
            return e.protocolMessageKey.id;
        }
        return e.id.id;
    }
    function _(e) {
        if (e.type === "revoked" && e.protocolMessageKey != null) {
            return e.protocolMessageKey.toString();
        }
        return e.id.toString();
    }
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ bundleMessageSecret, bundleMsgId, bundleMsgTimestamp, bundleSenderWid, groupWid, inflatedBytes }) {
            const bundleMsgKey = bundleMsgId.toString();
            const bundleMsgId_id = bundleMsgId.id;
            if (!o("WAWebGroupHistoryGating").isGroupHistoryReceiverReportingTokenEnabled()) {
                return null;
            }
            if (bundleSenderWid == null) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history] Missing bundle sender for ",
                    ""
                ])), bundleMsgKey);
                return null;
            }
            const p = yield o("WAWebGroupHistoryReportingTokenDBUtils").getGroupHistoryReportingTokenInfosForBundle(bundleMsgKey);
            if (p == null || p.length === 0) {
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history] No stored reporting tokens found for bundle ",
                    ""
                ])), bundleMsgKey);
                return null;
            }
            const receivedTokenMap = new Map;
            for (const f of p){
                const h = receivedTokenMap.get(f.stanzaId) ?? [];
                h.push(f);
                receivedTokenMap.set(f.stanzaId, h);
            }
            const y = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufsGroupHistory.pb").GroupHistoryWithMessageBytesSpec, inflatedBytes);
            return {
                receivedTokenMap,
                messageBytesArray: [].concat(y.messages, y.outOfWindowPinnedMessages ?? []),
                bundleMessageSecret,
                senderJid: o("WAWebWidToJid").widToUserJid(bundleSenderWid),
                groupJid: o("WAWebWidToJid").widToGroupJid(groupWid),
                bundleMsgKey,
                bundleMsgStanzaId: bundleMsgId_id,
                bundleMsgTimestamp
            };
        });
        return g.apply(this, arguments);
    }
    function h(e, t, n) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const a = p(e);
            const i = n.receivedTokenMap.get(a);
            if (i == null || i.length === 0) {
                o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history] msg ",
                    " missing from public stanza"
                ])), a).tags("messaging");
                return b(e, n, o("WAWebWamEnumReportingTokenValidationFailureReason").REPORTING_TOKEN_VALIDATION_FAILURE_REASON.GROUP_HISTORY_MESSAGE_MISSING_FROM_PUBLIC_STANZA, null);
            }
            const l = i.reduce((acc, item)=>acc ?? item.version, null) ?? o("WAWebMessagingGatingUtils").getSenderReportingTokenVersion();
            const s = yield v(t, n, a, l, i);
            if (!C(s?.match)) {
                const u = L(e, t, i, n);
                if (u != null) {
                    return {
                        row: R(e, n, a, u),
                        failureReason: null
                    };
                }
            }
            if (s == null) {
                o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history] Missing message secret for message ",
                    ""
                ])), a).tags("messaging");
                return b(e, n, o("WAWebWamEnumReportingTokenValidationFailureReason").REPORTING_TOKEN_VALIDATION_FAILURE_REASON.MISSING_MESSAGE_SECRET, l);
            }
            const { computedInfo, match } = s;
            const { failureReason, isValid, receivedInfo } = match;
            if (receivedInfo == null) {
                return {
                    row: null,
                    failureReason
                };
            }
            if (failureReason != null) {
                o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history] token validation failed for msg ",
                    ""
                ])), a).tags("messaging");
                o("WAWebWamReportingTokenMismatchReporter").logReportingTokenValidationEvent({
                    msg: e,
                    reason: failureReason,
                    reportingTokenVersion: l,
                    isPartOfGroupHistory: true,
                    groupHistoryBundleMessageId: n.bundleMsgStanzaId
                });
            }
            return {
                row: R(e, n, a, receivedInfo, isValid, computedInfo),
                failureReason
            };
        });
        return y.apply(this, arguments);
    }
    function C(e) {
        return e?.isValid === true && e.receivedInfo?.reportingToken != null;
    }
    function b(e, t, n, r) {
        o("WAWebWamReportingTokenMismatchReporter").logReportingTokenValidationEvent({
            msg: e,
            reason: n,
            reportingTokenVersion: r,
            isPartOfGroupHistory: true,
            groupHistoryBundleMessageId: t.bundleMsgStanzaId
        });
        return {
            row: null,
            failureReason: n
        };
    }
    function v(e, t, n, r, o) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(msgInfo, t, n, r, a) {
            if (t.bundleMessageSecret == null) {
                return null;
            }
            const i = yield o("WAWebGroupHistoryReportingTokenGenerator").computeReportingTokenForMessage({
                bundleMessageSecret: t.bundleMessageSecret,
                groupJid: t.groupJid,
                msgInfo,
                reportingTokenVersion: r,
                senderJid: t.senderJid,
                stanzaId: n
            });
            const { info, isSupportedReceiveVersion } = i;
            const match = k(info, a);
            if (match.failureReason != null && !isSupportedReceiveVersion) {
                return {
                    computedInfo: info,
                    match: babelHelpers.extends({}, match, {
                        failureReason: o("WAWebWamEnumReportingTokenValidationFailureReason").REPORTING_TOKEN_VALIDATION_FAILURE_REASON.UNSUPPORTED_VERSION
                    })
                };
            }
            return {
                computedInfo: info,
                match
            };
        });
        return S.apply(this, arguments);
    }
    function R(e, t, n, r, a = true, i = null) {
        const r_reportingTag = r.reportingTag;
        if (r_reportingTag == null) {
            return null;
        }
        const s = {
            msgKey: _(e),
            stanzaId: n,
            reportingTag: r_reportingTag,
            msgTs: t.bundleMsgTimestamp,
            receivedTs: o("WATimeUtils").unixTimeMs(),
            reportingTagParticipant: t.senderJid
        };
        if (r.reportingToken != null) {
            s.reportingToken = r.reportingToken.slice(0, a ? o("WAWebReportingTokenUtils").REPORTING_TOKEN_STORAGE_SIZE : o("WAWebReportingTokenUtils").REPORTING_TOKEN_INVALID_STORAGE_SIZE);
            s.version = r.version;
            if (i?.reportingTokenContent != null) {
                s.reportingTokenContentOpaqueData = i.reportingTokenContent;
            }
            if (i?.reportingTokenKey != null) {
                s.reportingTokenKey = i.reportingTokenKey;
            }
        }
        return s;
    }
    function L(t, n, r, a) {
        const i = r.find((e)=>e.reportingToken == null && e.reportingTag != null && e.validationPolicy === o("WAWebReportingTokenConstants").ReportingTokenValidationPolicy.LogMissingReportingToken);
        if (i == null || t.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN || !o("WAWebMessagingGatingUtils").isMissingReportingTokenDetectionEnabled()) {
            return null;
        }
        const l = E(n);
        if (l == null) {
            return null;
        }
        o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "[group-history] msg ",
            " has no reporting token"
        ])), i.stanzaId).tags("messaging");
        o("WAWebWamReportingTokenMismatchReporter").logReportingTokenValidationEvent({
            msg: t,
            reason: a.bundleMessageSecret != null ? o("WAWebWamEnumReportingTokenValidationFailureReason").REPORTING_TOKEN_VALIDATION_FAILURE_REASON.MISSING_REPORTING_TOKEN : o("WAWebWamEnumReportingTokenValidationFailureReason").REPORTING_TOKEN_VALIDATION_FAILURE_REASON.MISSING_REPORTING_TOKEN_SECRET,
            reportingTokenVersion: l,
            isPartOfGroupHistory: true,
            groupHistoryBundleMessageId: a.bundleMsgStanzaId
        });
        return i;
    }
    function E(e) {
        return o("WAWebGroupHistoryReportingTokenGenerator").deriveReportingTokenContent({
            messageBytes: e.messageBytes,
            promoteEmptyContentToV3: false,
            reportingTokenVersion: o("WAWebReportingTokenContent").getLatestReportingTokenExclusionVersion()
        })?.version;
    }
    function k(info, t) {
        if (info?.reportingToken == null || t.every((e)=>e.reportingToken == null)) {
            const a = t.find((e)=>e.reportingToken == null);
            if (a != null) {
                return {
                    receivedInfo: a,
                    isValid: true,
                    failureReason: null
                };
            }
            return {
                receivedInfo: t[0] ?? null,
                isValid: false,
                failureReason: o("WAWebWamEnumReportingTokenValidationFailureReason").REPORTING_TOKEN_VALIDATION_FAILURE_REASON.EMPTY_REPORTING_TOKEN_CONTENT
            };
        }
        const e_reportingToken = info.reportingToken;
        const l = t.find((e)=>e.reportingToken != null && o("WACryptoUtils").uint8ArraysEqual(e.reportingToken, e_reportingToken));
        if (l != null) {
            return {
                receivedInfo: l,
                isValid: true,
                failureReason: null
            };
        }
        return {
            receivedInfo: t[0] ?? null,
            isValid: false,
            failureReason: o("WAWebWamEnumReportingTokenValidationFailureReason").REPORTING_TOKEN_VALIDATION_FAILURE_REASON.MISMATCH_REPORTING_TOKEN
        };
    }
    l.prepareValidationContext = f;
    l.validateAndBuildReportingInfoRow = h;
}, 98);