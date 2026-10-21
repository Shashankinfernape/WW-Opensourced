__d("WAWebGroupHistoryReportingTokenGenerator", [
    "Promise",
    "WACryptoHmac",
    "WALogger",
    "WAWebMessagingGatingUtils",
    "WAWebProtobufsGroupHistory.pb",
    "WAWebReportingTokenConstants",
    "WAWebReportingTokenContent",
    "WAWebReportingTokenUtils",
    "asyncToGeneratorRuntime",
    "compactMap",
    "decodeProtobuf"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e, t, n, r, o, a) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, bundleMessageSecret, senderJid, groupJid, u, c) {
            const h = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufsGroupHistory.pb").GroupHistoryWithMessageBytesSpec, t);
            const reportingTokenVersion = u ?? o("WAWebMessagingGatingUtils").getSenderReportingTokenVersion();
            const promoteEmptyContentToV3 = o("WAWebMessagingGatingUtils").isReportingTokenV3HybridSendingEnabled();
            const b = [].concat(h.messages ?? [], (h.uncountedAssociatedMessageLists ?? []).flatMap((e)=>e.messages ?? []), h.commentMessages ?? [], h.outOfWindowPinnedMessages ?? []);
            const v = yield (s || (s = n("Promise"))).all(b.map((msgInfo)=>m({
                    bundleMessageSecret,
                    groupJid,
                    msgInfo,
                    promoteEmptyContentToV3,
                    reportingTokenVersion,
                    senderJid,
                    stanzaId: d(msgInfo.key?.id, c)
                })));
            const S = r("compactMap")(v, function(e) {
                return e.info;
            });
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[group-history] Generated ",
                " reporting tokens"
            ])), S.length);
            return S;
        });
        return c.apply(this, arguments);
    }
    function d(e, t) {
        if (e == null) {
            return null;
        }
        return t?.get(e) ?? e;
    }
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ bundleMessageSecret, groupJid, msgInfo, promoteEmptyContentToV3 = false, reportingTokenVersion, senderJid, stanzaId }) {
            const isSupportedReceiveVersion = o("WAWebReportingTokenUtils").isSupportedReceiveVersion(reportingTokenVersion);
            if (stanzaId == null) {
                return {
                    info: null,
                    isSupportedReceiveVersion
                };
            }
            const d = _({
                messageBytes: msgInfo.messageBytes,
                promoteEmptyContentToV3,
                reportingTokenVersion
            });
            if (d == null) {
                return {
                    info: {
                        stanzaId,
                        reportingToken: null,
                        version: null
                    },
                    isSupportedReceiveVersion
                };
            }
            const m = yield o("WAWebReportingTokenUtils").genReportingTokenKeyFromMessageSecret({
                messageSecret: bundleMessageSecret,
                stanzaId,
                senderJid,
                remoteJid: groupJid
            });
            const { content, version } = d;
            const g = yield o("WACryptoHmac").hmacSha256(new Uint8Array(m), content, o("WAWebReportingTokenUtils").REPORTING_TOKEN_SIZE);
            return {
                info: {
                    stanzaId,
                    reportingToken: new Uint8Array(g),
                    version,
                    reportingTokenKey: new Uint8Array(m),
                    reportingTokenContent: content
                },
                isSupportedReceiveVersion
            };
        });
        return p.apply(this, arguments);
    }
    function _({ messageBytes, promoteEmptyContentToV3, reportingTokenVersion }) {
        if (messageBytes == null) {
            const a = f(reportingTokenVersion, promoteEmptyContentToV3) ? o("WAWebReportingTokenConstants").REPORTING_TOKEN_VERSION.V3 : reportingTokenVersion;
            if (a < o("WAWebReportingTokenConstants").REPORTING_TOKEN_VERSION.V3) {
                return null;
            }
            return {
                content: o("WAWebReportingTokenConstants").GHS_NULL_REPORTING_TOKEN_CONTENT.slice(),
                version: a
            };
        }
        const i = new Uint8Array(messageBytes);
        let l = reportingTokenVersion;
        let s = o("WAWebReportingTokenContent").calculateReportingTokenContent(i, l);
        if (s.length === 0 && f(l, promoteEmptyContentToV3)) {
            l = o("WAWebReportingTokenConstants").REPORTING_TOKEN_VERSION.V3;
            s = o("WAWebReportingTokenContent").calculateReportingTokenContent(i, l);
        }
        if (s == null || s.length === 0) {
            return null;
        }
        return {
            content: s,
            version: l
        };
    }
    function f(e, promoteEmptyContentToV3) {
        return promoteEmptyContentToV3 && e > 0 && e < o("WAWebReportingTokenConstants").REPORTING_TOKEN_VERSION.V3;
    }
    l.genGroupHistoryReportingTokens = u;
    l.computeReportingTokenForMessage = m;
    l.deriveReportingTokenContent = _;
}, 98);