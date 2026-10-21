__d("WAWebBotTos", [
    "WAComms",
    "WAExponentialBackoff",
    "WALogger",
    "WAPromiseTimeout",
    "WASmaxUserNoticeGetDisclosureStageByIdsRPC",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebBotGating",
    "WAWebBotTosIds",
    "WAWebBotTypes",
    "WAWebPDFNTypes",
    "WAWebSetUserDisclosureStageAction",
    "WAWebSetUserNoticeStageJob",
    "WAWebTos",
    "WAWebUserPrefsStore",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = "BIZ_BOT_TOS_DISMISSED_AT";
    const u = {
        minTimeout: 1000,
        maxTimeout: 4000,
        retries: 3,
        signal: new AbortController().signal
    };
    const c = 30000;
    const d = 3000;
    const m = 30000;
    function p() {
        return o("WAWebBotGating").getNonBlockingBotNoticeIds()?.some(function(e) {
            return o("WAWebTos").TosManager.getState(String(e)) === "ACCEPTED";
        });
    }
    function _() {
        return f() || G() || z();
    }
    function f() {
        return o("WAWebTos").TosManager.getState(o("WAWebBotTosIds").getBotAgentTosId()) === "ACCEPTED";
    }
    function g(e) {
        o("WAWebTos").TosManager.registerDisclosureNoticeIds(ce(e));
    }
    function h(e) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = ce(e);
            o("WAWebTos").TosManager.registerDisclosureNoticeIds(t);
            if (t.some((e)=>o("WAWebTos").TosManager.getState(e) !== "ACCEPTED")) {
                yield o("WAWebTos").TosManager.run({
                    singleRun: true
                });
            }
        });
        return y.apply(this, arguments);
    }
    let C = null;
    function b() {
        if (C == null) {
            C = v().finally(()=>{
                C = null;
            });
        }
        return C;
    }
    function v() {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = o("WAWebBotTosIds").getMuseGroupTosNoticeIds();
            o("WAWebTos").TosManager.registerDisclosureNoticeIds(e);
            if (!(e.length === 0 || V(e))) {
                yield O(e);
            }
        });
        return S.apply(this, arguments);
    }
    let R = null;
    let L = null;
    function E() {
        if (R == null) {
            R = k().finally(()=>{
                R = null;
            });
        }
        return R;
    }
    function k() {
        return I.apply(this, arguments);
    }
    function I() {
        I = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = o("WAWebBotTosIds").getMetaAiOpenGroupNoticeId();
            if (!(e == null || D() || T())) {
                L = o("WATimeUtils").monotonicTime();
                yield O([
                    e
                ]);
            }
        });
        return I.apply(this, arguments);
    }
    function T() {
        return L != null && o("WATimeUtils").monotonicTimeSince(L) < m;
    }
    function D() {
        const e = o("WAWebBotTosIds").getMetaAiOpenGroupNoticeId();
        if (e == null) {
            return true;
        }
        o("WAWebTos").TosManager.registerDisclosureNoticeIds([
            e
        ]);
        return o("WAWebTos").TosManager.getState(e) === "ACCEPTED";
    }
    function x() {
        return o("WAWebBotTosIds").getMetaAiOpenGroupNoticeId() != null && D();
    }
    function $() {
        return N(o("WAWebBotTosIds").getMetaAiOpenGroupNoticeId());
    }
    function P() {
        return N(o("WAWebBotTosIds").getMetaAiTeeGroupNoticeId());
    }
    function N(e) {
        return M.apply(this, arguments);
    }
    function M() {
        M = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            if (t == null) {
                return false;
            }
            o("WAWebTos").TosManager.registerDisclosureNoticeIds([
                t
            ]);
            try {
                yield o("WAPromiseTimeout").promiseTimeout(w(t), d, "Group notice refresh timed out");
            } catch (error) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Group notice refresh before confirmation failed: ",
                    ""
                ])), String(error));
                return false;
            }
            return F(t);
        });
        return M.apply(this, arguments);
    }
    function w(e) {
        return A.apply(this, arguments);
    }
    function A() {
        A = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (!F(e)) {
                yield O([
                    e
                ]);
            }
        });
        return A.apply(this, arguments);
    }
    function F(e) {
        return o("WAWebTos").TosManager.getState(e) === "ACCEPTED";
    }
    function O(e) {
        return B.apply(this, arguments);
    }
    function B() {
        B = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WATimeUtils").unixTime();
            const n = yield W(e, t);
            n.forEach((e)=>{
                o("WAWebTos").TosManager.setState(e, "ACCEPTED", t);
            });
        });
        return B.apply(this, arguments);
    }
    function W(e, t) {
        return q.apply(this, arguments);
    }
    function q() {
        q = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t = o("WATimeUtils").unixTime()) {
            const a = yield o("WAExponentialBackoff").exponentialBackoff(u, (()=>{
                const a = n("asyncToGeneratorRuntime").asyncToGenerator(function*(n) {
                    try {
                        yield o("WAPromiseTimeout").promiseTimeout(o("WAComms").waitForConnection(), c, "waitForConnection timed out");
                        const a = yield o("WASmaxUserNoticeGetDisclosureStageByIdsRPC").sendGetDisclosureStageByIdsRPC({
                            getDisclosureStageByIdArgs: e.map((e)=>({
                                    getDisclosureStageByIdId: Number(e),
                                    getDisclosureStageByIdT: t
                                }))
                        });
                        if (a.name !== "GetDisclosureStageByIdsResponseClientSuccess") {
                            throw r("err")(`Group notice stage query failed: ${a.name}`);
                        }
                        return a;
                    } catch (error) {
                        return n(error instanceof Error ? error : r("err")(String(error)));
                    }
                });
                return function(e) {
                    return a.apply(this, arguments);
                };
            })());
            return a.value.notice.filter((t)=>e.includes(String(t.id)) && (t.stage === o("WAWebPDFNTypes").DISCLOSURE_STAGE.ACCEPTED || t.stage === o("WAWebPDFNTypes").DISCLOSURE_STAGE.OK)).map((e)=>String(e.id));
        });
        return q.apply(this, arguments);
    }
    function U() {
        const e = o("WAWebBotTosIds").getMuseGroupTosNoticeIds();
        o("WAWebTos").TosManager.registerDisclosureNoticeIds(e);
        return V(e);
    }
    function V(e) {
        return e.length > 0 && e.some((e)=>o("WAWebTos").TosManager.getState(e) === "ACCEPTED");
    }
    function H(e) {
        if (e == null) {
            return true;
        }
        return e.every((e)=>{
            if (e.blocking === false) {
                return true;
            }
            const t = de(e.id);
            return t != null && o("WAWebTos").TosManager.getState(t) === "ACCEPTED";
        });
    }
    function G() {
        return o("WAWebTos").TosManager.getState(o("WAWebBotTosIds").getBotInvokeTosId()) === "ACCEPTED" || o("WAWebTos").TosManager.getState(o("WAWebBotTosIds").getBotLegacyInvokeTosId()) === "ACCEPTED";
    }
    function z() {
        return o("WAWebTos").TosManager.getState(o("WAWebBotTosIds").getBotShortcutTosId()) === "ACCEPTED" || o("WAWebTos").TosManager.getState(o("WAWebBotTosIds").getBotLegacyShortcutTosId()) === "ACCEPTED";
    }
    function j() {
        const e = o("WAWebBotGating").getMasterBotNoticeId();
        if (e == null) {
            return false;
        }
        return o("WAWebTos").TosManager.getState(String(e)) === "ACCEPTED";
    }
    function K(e) {
        if (e === o("WAWebBotTypes").BizBotType.BIZ_1P && !o("WAWebABProps").getABPropConfigValue("wabai_consent_required") || Q()) {
            return true;
        }
        const t = r("WAWebUserPrefsStore").getUser(s);
        if (typeof t !== "number") {
            return false;
        }
        const n = o("WAWebABProps").getABPropConfigValue("wabai_consent_cooldown");
        if (n < 0) {
            return true;
        }
        if (n === 0) {
            return false;
        }
        return o("WATimeUtils").unixTime() - t < n;
    }
    function Q() {
        return o("WAWebTos").TosManager.getState(o("WAWebBotTosIds").getBizBotTosId()) === "ACCEPTED";
    }
    function X() {
        return Y.apply(this, arguments);
    }
    function Y() {
        Y = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            yield oe(Number(o("WAWebBotTosIds").getBotAgentTosId()));
        });
        return Y.apply(this, arguments);
    }
    function J() {
        return Z.apply(this, arguments);
    }
    function Z() {
        Z = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            yield oe(Number(o("WAWebBotTosIds").getBotInvokeTosId()));
        });
        return Z.apply(this, arguments);
    }
    function ee() {
        return te.apply(this, arguments);
    }
    function te() {
        te = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            yield oe(Number(o("WAWebBotTosIds").getBotShortcutTosId()));
        });
        return te.apply(this, arguments);
    }
    function ne() {
        return re.apply(this, arguments);
    }
    function re() {
        re = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            yield o("WAWebSetUserNoticeStageJob").setUserNoticeStage(Number(o("WAWebBotTosIds").getBizBotTosId()), o("WAWebPDFNTypes").DISCLOSURE_STAGE.ACCEPTED);
        });
        return re.apply(this, arguments);
    }
    function oe(e) {
        return ae.apply(this, arguments);
    }
    function ae() {
        ae = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield o("WAWebSetUserDisclosureStageAction").updateUserDisclosureStateAction(e, o("WAWebPDFNTypes").DISCLOSURE_STAGE.ACCEPTED);
        });
        return ae.apply(this, arguments);
    }
    function ie(e) {
        r("WAWebUserPrefsStore").setUser(s, e);
    }
    function le(e) {
        const t = o("WAWebBotGating").getNonBlockingBotNoticeIds();
        if (t.length === 0) {
            return false;
        }
        return t.includes(Number(e));
    }
    function se(e) {
        const t = o("WAWebBotGating").getMasterBotNoticeId();
        return t != null && e === t;
    }
    function ue(e) {
        if (le(Number(e))) {
            return true;
        }
        const t = o("WAWebBotGating").getMasterBotNoticeId();
        if (t != null) {
            return true;
        }
        return o("WAWebBotTosIds").supportedTosNoticeIds.has(e);
    }
    function ce(e) {
        const t = [];
        (e ?? []).forEach((e)=>{
            const n = de(e.id);
            if (n != null) {
                t.push(n);
            }
        });
        return t;
    }
    function de(e) {
        if (e != null && Number.isSafeInteger(e) && e > 0) {
            return String(e);
        }
        return null;
    }
    l.GROUP_NOTICE_CONFIRMATION_TIMEOUT_MS = d;
    l.META_AI_OPEN_GROUP_NOTICE_REFRESH_COOLDOWN_MS = m;
    l.hasAcceptedNonBlockingBotTos = p;
    l.hasSeenBotTos = _;
    l.hasSeenAgentTos = f;
    l.registerBotTosRequirements = g;
    l.refreshBotTosRequirements = h;
    l.refreshMuseGroupTosNotices = b;
    l.refreshMetaAiOpenGroupNotice = E;
    l.hasAcceptedMetaAiOpenGroupNotice = D;
    l.hasConfirmedMetaAiOpenGroupNoticeAcceptance = x;
    l.refreshAndConfirmMetaAiOpenGroupNoticeAcceptance = $;
    l.refreshAndConfirmMetaAiTeeGroupNoticeAcceptance = P;
    l.queryServerAcceptedNoticeIds = W;
    l.hasAcceptedMuseGroupTos = U;
    l.hasAcceptedBlockingBotTos = H;
    l.hasSeenInvokeTos = G;
    l.hasSeenShortcutTos = z;
    l.hasSeenMasterBotTos = j;
    l.hasSeenBizBotTos = K;
    l.hasAcceptedBizBotTos = Q;
    l.markSeenAgentTos = X;
    l.markSeenInvokeTos = J;
    l.markSeenShortcutTos = ee;
    l.acceptBizBotTos = ne;
    l.setBizBotTosDismissalTime = ie;
    l.isNonBlockingBotNotice = le;
    l.isMasterBotTosNotice = se;
    l.canShowBotTos = ue;
}, 98);