__d("WAWebDBReportingTokenUtils", [
    "Promise",
    "WAJids",
    "WALogger",
    "WAStanzaUtils",
    "WATimeUtils",
    "WAWebGetMessageCache",
    "WAWebHandleMessageTypes",
    "WAWebMessagingGatingUtils",
    "WAWebMsgKey",
    "WAWebReportingTokenConstants",
    "WAWebReportingTokenUtils",
    "WAWebSchemaReportingInfo",
    "WAWebSchemaReportingToken",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "compactMap"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e) {
        const e_reportingTokenInfo = e.reportingTokenInfo;
        if (e_reportingTokenInfo == null) {
            return null;
        }
        const { reportingTag, stanzaTs, version } = e_reportingTokenInfo;
        const msgTs = stanzaTs ?? e.t;
        if (reportingTag == null || msgTs == null) {
            return null;
        }
        const c = e.protocolMessageKey?.toString() ?? e.id.toString();
        const d = {
            msgKey: c,
            stanzaId: r("WAWebMsgKey").from(c).id,
            msgTs,
            receivedTs: o("WATimeUtils").unixTimeMs(),
            reportingTag
        };
        if (version != null) {
            d.version = version;
        }
        return d;
    }
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (!(!o("WAWebMessagingGatingUtils").isReportingTagSyncingEnabled() || e.length === 0)) {
                const t = r("compactMap")(e, function(e) {
                    return u(e);
                });
                return o("WAWebSchemaReportingInfo").getReportingInfoTable().bulkCreate(t);
            }
        });
        return d.apply(this, arguments);
    }
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            return o("WAWebSchemaReportingInfo").getReportingInfoTable().anyOf([
                "msgKey"
            ], e);
        });
        return p.apply(this, arguments);
    }
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (!(e == null || e <= o("WAWebReportingTokenConstants").DEFAULT_RT_CLEANUP_OLDER_THAN_DAYS)) {
                if (e === 0) {
                    yield (s || (s = n("Promise"))).all([
                        o("WAWebSchemaReportingToken").getReportingTokenTable().clear(),
                        o("WAWebSchemaReportingInfo").getReportingInfoTable().clear()
                    ]);
                    return;
                }
                const t = o("WATimeUtils").unixTimeMs() - e * o("WATimeUtils").DAY_MILLISECONDS;
                const r = yield o("WAWebSchemaReportingToken").getReportingTokenTable().lessThan([
                    "ts"
                ], t);
                const a = yield o("WAWebSchemaReportingInfo").getReportingInfoTable().lessThan([
                    "receivedTs"
                ], t);
                yield (s || (s = n("Promise"))).all([
                    o("WAWebSchemaReportingToken").getReportingTokenTable().bulkRemove(r.map((e)=>e.id)),
                    o("WAWebSchemaReportingInfo").getReportingInfoTable().bulkRemove(a.map((e)=>e.id))
                ]);
            }
        });
        return f.apply(this, arguments);
    }
    function g(e) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (!(e <= o("WAWebReportingTokenConstants").DEFAULT_RT_CLEANUP_OLDER_THAN_DAYS)) {
                const t = o("WATimeUtils").unixTimeMs() - e * o("WATimeUtils").DAY_MILLISECONDS;
                const n = yield o("WAWebSchemaReportingInfo").getReportingInfoTable().lessThan([
                    "receivedTs"
                ], t);
                const r = n.map((e)=>babelHelpers.extends({}, e, {
                        reportingToken: null,
                        reportingTokenContentOpaqueData: null,
                        version: null
                    }));
                yield o("WAWebSchemaReportingInfo").getReportingInfoTable().bulkCreateOrReplace(r);
            }
        });
        return h.apply(this, arguments);
    }
    function y({ incomingMsgReportingTokenInfo, msgKey, msgTs, stanzaId }) {
        if (o("WAWebMessagingGatingUtils").isReportingTokenReceivingEnabled() && incomingMsgReportingTokenInfo != null) {
            const reportingTag = incomingMsgReportingTokenInfo.reportingTag;
            if (reportingTag != null) {
                o("WAWebGetMessageCache").getMessageCache().addAdditionalInfo({
                    type: o("WAWebHandleMessageTypes").MsgAdditionalInfoType.ReportingInfo,
                    data: {
                        msgKey: msgKey.toString(),
                        stanzaId,
                        reportingTag,
                        msgTs,
                        receivedTs: o("WATimeUtils").unixTimeMs()
                    }
                }, true);
            }
        }
    }
    function C(e) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield o("WAWebSchemaReportingInfo").getReportingInfoTable().bulkCreate(e);
        });
        return b.apply(this, arguments);
    }
    function v(e, t) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            try {
                if (t.length === 0) {
                    return;
                }
                if (n.removeWholeRow) {
                    return yield o("WAWebSchemaReportingInfo").getReportingInfoTable().bulkRemoveByIndex([
                        "msgKey"
                    ], t);
                }
                const r = yield o("WAWebSchemaReportingInfo").getReportingInfoTable().equals([
                    "msgKey"
                ], t);
                if (r.length === 0) {
                    return;
                }
                const a = r.map((e)=>babelHelpers.extends({}, e, {
                        reportingToken: null,
                        reportingTokenContentOpaqueData: null,
                        version: null
                    }));
                yield o("WAWebSchemaReportingInfo").getReportingInfoTable().bulkCreateOrReplace(a);
            } catch (t) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Error deleting reporting infos"
                ])));
            }
        });
        return S.apply(this, arguments);
    }
    function R(e) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ msgSecret, remoteJid, reportingInfo, senderWid }) {
            const reportingInfo_version = reportingInfo.version;
            const reportingTokenV = reportingInfo_version === undefined ? -1 : reportingInfo_version;
            const { reportingTokenContentOpaqueData, reportingToken, reportingTokenKey } = reportingInfo;
            const reportingContentArgs = reportingTokenContentOpaqueData != null ? {
                reportingContentElementValue: reportingTokenContentOpaqueData
            } : null;
            let m;
            if (reportingTokenKey != null) {
                m = reportingTokenKey;
            } else if (msgSecret != null && senderWid != null && remoteJid != null) {
                m = yield o("WAWebReportingTokenUtils").genReportingTokenKeyFromMessageSecret({
                    messageSecret: msgSecret,
                    stanzaId: reportingInfo.stanzaId,
                    senderJid: o("WAWebWidToJid").widToUserJid(senderWid),
                    remoteJid
                });
            }
            const reportingTokenKeyElementValue = m != null ? new Uint8Array(m) : new Uint8Array(o("WAWebReportingTokenUtils").REPORTING_TOKEN_KEY_SIZE);
            const contentValidationArgs = reportingTokenV != null && reportingToken != null ? {
                reportingTokenV,
                reportingTokenElementValue: reportingToken,
                reportingTokenKeyElementValue
            } : null;
            const reportingTagParticipant = reportingInfo.reportingTagParticipant != null ? o("WAJids").unsafeCoerceToUserJid(reportingInfo.reportingTagParticipant) : undefined;
            return {
                reportingTagElementValue: reportingInfo.reportingTag,
                reportingTagTsS: reportingInfo.msgTs,
                reportingTagId: o("WAStanzaUtils").toStanzaId(reportingInfo.stanzaId),
                reportingContentArgs,
                contentValidationArgs,
                reportingTagParticipant
            };
        });
        return L.apply(this, arguments);
    }
    function E(e) {
        return k.apply(this, arguments);
    }
    function k() {
        k = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e.length !== 0) {
                const t = new Map;
                for (const [r, a] of e){
                    t.set(r.toString(), a);
                }
                const i = Array.from(t.keys());
                const l = yield m(i);
                if (l.length !== 0) {
                    const s = [];
                    l.forEach((e)=>{
                        const n = t.get(e.msgKey);
                        if (e.stanzaId !== n) {
                            s.push(babelHelpers.extends({}, e, {
                                reportingToken: null,
                                reportingTokenContentOpaqueData: null,
                                version: null
                            }));
                        }
                    });
                    yield o("WAWebSchemaReportingInfo").getReportingInfoTable().bulkCreateOrReplace(s);
                }
            }
        });
        return k.apply(this, arguments);
    }
    l.msgToReportingInfoRow = u;
    l.handleHistorySyncedReportingInfo = c;
    l.getReportingInfosFromMsgKeys = m;
    l.cleanupReportingTable = _;
    l.cleanupReportingTokenAndContent = g;
    l.maybeStoreReportingTag = y;
    l.handleAddReportingInfos = C;
    l.handleDeleteReportingInfos = v;
    l.createReportingValidationArgs = R;
    l.handleReportingInfosUpdateOnMessageEdit = E;
}, 98);