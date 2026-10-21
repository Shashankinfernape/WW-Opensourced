__d("WAWebGroupHistoryReportingTokenDBUtils", [
    "WALogger",
    "WATimeUtils",
    "WAWebSchemaGroupHistoryReportingTokenInfo",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c(e, t, n) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(bundleMsgKey, n, isSend) {
            if (!o("WAWebSchemaGroupHistoryReportingTokenInfo").canUseGroupHistoryReportingTokenInfoTable()) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history] token info table unavailable, skip store"
                ])));
                return;
            }
            if (n.length !== 0) {
                const a = n.map((e)=>({
                        bundleMsgKey,
                        stanzaId: e.stanzaId,
                        reportingToken: e.reportingToken,
                        reportingTokenVersion: e.version,
                        reportingTag: e.reportingTag,
                        sendTs: e.sendTs,
                        validationPolicy: e.validationPolicy,
                        addedTs: o("WATimeUtils").unixTimeMs(),
                        isSend
                    }));
                yield o("WAWebSchemaGroupHistoryReportingTokenInfo").getGroupHistoryReportingTokenInfoTable().bulkCreate(a);
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history] Stored ",
                    " reporting tokens in DB"
                ])), n.length);
            }
        });
        return d.apply(this, arguments);
    }
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (!o("WAWebSchemaGroupHistoryReportingTokenInfo").canUseGroupHistoryReportingTokenInfoTable()) {
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history] token info table unavailable, skip get"
                ])));
                return;
            }
            const t = yield o("WAWebSchemaGroupHistoryReportingTokenInfo").getGroupHistoryReportingTokenInfoTable().equals([
                "bundleMsgKey"
            ], e);
            return t.map((e)=>{
                const t = {
                    stanzaId: e.stanzaId,
                    reportingTag: e.reportingTag,
                    sendTs: e.sendTs,
                    validationPolicy: e.validationPolicy
                };
                if (e.reportingToken != null && e.reportingTokenVersion != null) {
                    return babelHelpers.extends({}, t, {
                        reportingToken: e.reportingToken,
                        version: e.reportingTokenVersion
                    });
                }
                return babelHelpers.extends({}, t, {
                    reportingToken: null,
                    version: null
                });
            });
        });
        return p.apply(this, arguments);
    }
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebSchemaGroupHistoryReportingTokenInfo").getGroupHistoryReportingTokenInfoTable().equals([
                "bundleMsgKey"
            ], e);
            if (t.length !== 0) {
                yield o("WAWebSchemaGroupHistoryReportingTokenInfo").getGroupHistoryReportingTokenInfoTable().bulkRemove(t.map((e)=>e.id));
            }
        });
        return f.apply(this, arguments);
    }
    function g(e, t) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (!(e < 0)) {
                const n = o("WATimeUtils").unixTimeMs() - e * o("WATimeUtils").DAY_MILLISECONDS;
                const r = yield o("WAWebSchemaGroupHistoryReportingTokenInfo").getGroupHistoryReportingTokenInfoTable().lessThan([
                    "addedTs"
                ], n);
                const a = r.filter((e)=>e.isSend === t);
                if (a.length !== 0) {
                    yield o("WAWebSchemaGroupHistoryReportingTokenInfo").getGroupHistoryReportingTokenInfoTable().bulkRemove(a.map((e)=>e.id));
                }
            }
        });
        return h.apply(this, arguments);
    }
    l.storeGroupHistoryReportingTokenInfos = c;
    l.getGroupHistoryReportingTokenInfosForBundle = m;
    l.deleteGroupHistoryReportingTokenInfosForBundle = _;
    l.cleanupGroupHistoryReportingTokenTable = g;
}, 98);