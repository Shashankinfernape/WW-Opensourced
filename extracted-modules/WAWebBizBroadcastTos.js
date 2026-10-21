__d("WAWebBizBroadcastTos", [
    "WAComms",
    "WAExponentialBackoff",
    "WALogger",
    "WAPromiseTimeout",
    "WASmaxUserNoticeGetDisclosureStageByIdsRPC",
    "WATimeUtils",
    "WAWebEventEmitter",
    "WAWebPDFNTypes",
    "WAWebSetUserDisclosureStageJob",
    "WAWebTos",
    "WAWebUserPrefsStore",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = "20250915";
    const u = "biz_broadcast_soft_opt_in";
    const c = {
        maxTimeout: 16000,
        minTimeout: 1000,
        retries: 3,
        signal: new AbortController().signal
    };
    let d = false;
    let syncResult = "pending";
    const p = new (r("WAWebEventEmitter"));
    function _() {
        if (!d) {
            d = true;
            if (f()) {
                syncResult = "success";
            } else {
                h().then(()=>{
                    syncResult = "success";
                }, ()=>{
                    syncResult = "error";
                });
            }
        }
        return s;
    }
    function f() {
        const e = r("WAWebUserPrefsStore").getUser(`TOS_STATE_${s}`);
        return e === "ACCEPTED" || r("WAWebUserPrefsStore").getUser(u) === true || e === "SOFT_OPT_IN";
    }
    function g() {
        r("WAWebUserPrefsStore").setUser(`TOS_STATE_${s}`, "SOFT_OPT_IN");
        r("WAWebUserPrefsStore").setUser(u, true);
        p.trigger("change");
    }
    function h() {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            yield o("WAExponentialBackoff").exponentialBackoff(c, (()=>{
                const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                    try {
                        const n = o("WATimeUtils").unixTime();
                        yield o("WAPromiseTimeout").promiseTimeout(o("WAComms").waitForConnection(), 30000, "waitForConnection timed out");
                        const a = yield o("WASmaxUserNoticeGetDisclosureStageByIdsRPC").sendGetDisclosureStageByIdsRPC({
                            getDisclosureStageByIdArgs: [
                                {
                                    getDisclosureStageByIdId: Number(s),
                                    getDisclosureStageByIdT: n
                                }
                            ]
                        });
                        if (a.name === "GetDisclosureStageByIdsResponseClientSuccess") {
                            const i = a.value.notice.find((e)=>e.id === Number(s));
                            if (i != null && (i.stage === o("WAWebPDFNTypes").DISCLOSURE_STAGE.SOFT_OPT_IN || i.stage === o("WAWebPDFNTypes").DISCLOSURE_STAGE.ACCEPTED)) {
                                g();
                            }
                        }
                    } catch (error) {
                        o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[biz-broadcast-tos] sync error"
                        ]))).catching(r("getErrorSafe")(error));
                        return t(error instanceof Error ? error : r("err")(String(error)));
                    }
                });
                return function(e) {
                    return t.apply(this, arguments);
                };
            })());
        });
        return y.apply(this, arguments);
    }
    function C() {
        const e = r("WAWebUserPrefsStore").getUser(`TOS_STATE_${s}`);
        return {
            isSoftOptInAccepted: r("WAWebUserPrefsStore").getUser(u) === true,
            persistedState: typeof e === "string" ? e : null,
            syncResult,
            tosManagerState: o("WAWebTos").TosManager.getState(_())
        };
    }
    function b() {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            g();
            yield o("WAWebSetUserDisclosureStageJob").setUserDisclosureStage(Number(s), o("WAWebPDFNTypes").DISCLOSURE_STAGE.SOFT_OPT_IN);
        });
        return v.apply(this, arguments);
    }
    l.bizBroadcastTosEmitter = p;
    l.getBizBroadcastTosId = _;
    l.isBizBroadcastTosAccepted = f;
    l.getBizBroadcastTosDebugInfo = C;
    l.acceptBizBroadcastTos = b;
}, 98);