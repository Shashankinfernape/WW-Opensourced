__d("WAWebUnknownUserRecoveryManager", [
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebApiContact",
    "WAWebCooldownBatcher",
    "WAWebRecoverUnknownUsernamesBatchJob",
    "WAWebUnknownUserRecoveryStore",
    "WAWebUsernameGatingUtils",
    "WAWebWamEnumUnknownUserRecoveryPath",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    const windowMs = 250;
    const maxWindowMs = 2000;
    const cooldownMs = 250;
    const d = new Set;
    const m = o("WAWebCooldownBatcher").createCooldownBatcher({
        windowMs,
        maxWindowMs,
        cooldownMs
    }, o("WAWebRecoverUnknownUsernamesBatchJob").recoverUsernamesForLids);
    function p(e, t) {
        if (y(e, t) && o("WAWebUsernameGatingUtils").unknownUserRecoveryEnabled() && o("WAWebABProps").getABPropConfigValue("mex_usync_username_query")) {
            const n = e;
            if (!o("WAWebApiContact").isDeprecatedLid(n) && !d.has(n)) {
                const r = o("WATimeUtils").unixTime();
                if (o("WAWebUnknownUserRecoveryStore").tryReserveUsyncFetch(n, o("WAWebABProps").getABPropConfigValue("unknown_user_usync_request_cool_down"), r)) {
                    d.add(n);
                    C(n, r);
                }
            }
        }
    }
    function _(e) {
        return e.isLid() && d.has(e);
    }
    function f(e) {
        return e.hasPn === true || e.hasUn === true || e.hasPush === true;
    }
    function g(e) {
        return e.hasPn === false && e.hasUn === false && e.hasPush === false;
    }
    function h(e, t) {
        if (e.isLid()) {
            if (f(t)) {
                return o("WAWebWamEnumUnknownUserRecoveryPath").UNKNOWN_USER_RECOVERY_PATH.LOCAL_HEAL;
            }
            if (g(t) && o("WAWebUsernameGatingUtils").unknownUserRecoveryEnabled() && o("WAWebABProps").getABPropConfigValue("mex_usync_username_query")) {
                return o("WAWebWamEnumUnknownUserRecoveryPath").UNKNOWN_USER_RECOVERY_PATH.USYNC;
            }
            return o("WAWebWamEnumUnknownUserRecoveryPath").UNKNOWN_USER_RECOVERY_PATH.NONE;
        }
        return o("WAWebWamEnumUnknownUserRecoveryPath").UNKNOWN_USER_RECOVERY_PATH.NONE;
    }
    function y(e, t) {
        return e.isLid() && t.hasUn === false && t.hasPn === false;
    }
    function C(e, t) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            try {
                const a = yield m(t);
                if (a.errored) {
                    o("WAWebUnknownUserRecoveryStore").releaseUsyncReservation(n);
                } else {
                    o("WAWebUnknownUserRecoveryStore").commitUsyncFetched(t, n);
                }
            } catch (error) {
                o("WAWebUnknownUserRecoveryStore").releaseUsyncReservation(n);
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "WAWebUnknownUserRecoveryManager: recovery usync failed"
                ]))).sendLogs("unknown-user-recovery-usync-failed").catching(r("getErrorSafe")(error));
            } finally{
                d.delete(t);
            }
        });
        return b.apply(this, arguments);
    }
    l.maybeRecoverUnknownUser = p;
    l.isUsyncRecoveryInFlight = _;
    l.getUnknownUserRecoveryPath = h;
}, 98);