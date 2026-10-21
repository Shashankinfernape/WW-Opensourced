__d("WAWebNonMessageDataRequestHistorySyncOnDemandUtils", [
    "WALogger",
    "WAShiftTimer",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebApiChatCommon",
    "WAWebBackendApi",
    "WAWebDBMessageSerialization",
    "WAWebDBMessageUtils",
    "WAWebHistorySyncLidChatGating",
    "WAWebSchemaMessage",
    "WAWebUserPrefsHistorySync",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "isEmptyObject"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = new Map;
    const p = {
        disableRequestSending: false,
        failureCount: 0
    };
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebDBMessageUtils").beginningOfChat(e);
            const n = o("WAWebDBMessageUtils").endOfChat(e);
            const r = yield o("WAWebSchemaMessage").getMessageTable().between([
                "internalId"
            ], t, n, {
                limit: 1,
                reverse: false,
                shouldDecrypt: false
            });
            if (r.length === 0) {
                return null;
            }
            return r[0];
        });
        return f.apply(this, arguments);
    }
    function g(e) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield _(e);
            if (t != null) {
                return o("WAWebDBMessageSerialization").messageFromDbRow(t);
            }
            return null;
        });
        return h.apply(this, arguments);
    }
    function y(e) {
        o("WAWebBackendApi").frontendFireAndForget("successHistorySyncOd", {
            chatId: e
        });
        b();
    }
    function C(t) {
        o("WAWebBackendApi").frontendFireAndForget("errorHistorySyncOd", {
            chatId: t
        });
        const n = o("WATimeUtils").unixTime();
        const p_firstFailureRequestTimeStampSec = p.firstFailureRequestTimeStampSec;
        if (p_firstFailureRequestTimeStampSec == null) {
            p.firstFailureRequestTimeStampSec = n;
        }
        p.failureCount += 1;
        const a = o("WAWebABProps").getABPropConfigValue("history_sync_on_demand_failure_limit");
        const i = o("WAWebABProps").getABPropConfigValue("history_sync_on_demand_cooldown_sec");
        if (p.failureCount >= a && p_firstFailureRequestTimeStampSec != null && n - p_firstFailureRequestTimeStampSec < i) {
            p.disableRequestSending = true;
            const l = 1000 * i;
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[rdu] disable history sync on demand for ",
                "ms."
            ])), l);
            new (o("WAShiftTimer")).ShiftTimer(function() {
                if (p.disableRequestSending) {
                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[rdu] re-enable history sync on demand."
                    ])));
                    b();
                }
            }).onOrAfter(l);
        }
    }
    function b() {
        p.disableRequestSending = false;
        p.failureCount = 0;
        p.firstFailureRequestTimeStampSec = undefined;
    }
    function v(e) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebUserPrefsHistorySync").getHistoryInitialSyncBoundary();
            if (t == null || r("isEmptyObject")(t)) {
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[rdu] cannot delete chat ",
                    " from initial sync boundary."
                ])), e.toLogString());
                return;
            }
            let n = e.toJid();
            if (o("WAWebHistorySyncLidChatGating").isForcedHistoryLidChat()) {
                const a = yield o("WAWebApiChatCommon").getChatRecord(e);
                if (a?.historyChatId != null) {
                    n = o("WAWebWidFactory").createWid(a.historyChatId).toJid();
                }
            }
            if (t?.[n] == null) {
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[rdu] cannot delete chat ",
                    " from initial sync boundary."
                ])), e.toLogString());
                return;
            }
            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "[rdu] delete chat ",
                " from initial sync boundary"
            ])), e.toLogString());
            delete t[n];
            o("WAWebUserPrefsHistorySync").setHistoryInitialSyncBoundary(t);
        });
        return S.apply(this, arguments);
    }
    l.inFlightHistorySyncOnDemandRequests = m;
    l.historySyncOnDemandRequestsFailureRecord = p;
    l.getOldestMsgInChatFromDB = g;
    l.handleHistorySyncOnDemandSuccess = y;
    l.handleHistorySyncOnDemandFailure = C;
    l.deleteChatFromInitialSyncBoundary = v;
}, 98);