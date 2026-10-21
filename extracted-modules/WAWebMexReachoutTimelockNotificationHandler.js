__d("WAWebMexReachoutTimelockNotificationHandler", [
    "WALogger",
    "WAWebBackendApi",
    "WAWebReachoutTimelockUtils",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsTypes",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e, t) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, { xwa2_notify_account_reachout_timelock: n }) {
            const { enforcement_type: r, is_active: o, time_enforcement_ends: a } = n;
            yield c(o, r, a);
        });
        return u.apply(this, arguments);
    }
    function c(e, t, n) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, r) {
            try {
                if (!t) {
                    const a = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(o("WAWebReachoutTimelockUtils").REACHOUT_TIMELOCK_IDB_KEY);
                    const i = o("WAWebReachoutTimelockUtils").isUserReachoutTimelockedAndVisible();
                    const l = a?.enforcement_type;
                    yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(o("WAWebReachoutTimelockUtils").REACHOUT_TIMELOCK_IDB_KEY);
                    o("WAWebBackendApi").frontendFireAndForget("reachoutTimelockEnforcementLifted", {
                        shouldPresentRestrictionsLiftedModal: i,
                        enforcementType: l
                    });
                    return;
                }
                const s = r != null ? new Date(parseInt(r, 10) * 1000).getTime() : Date.now() + 60 * 1000;
                const u = yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(o("WAWebReachoutTimelockUtils").REACHOUT_TIMELOCK_IDB_KEY);
                yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(o("WAWebReachoutTimelockUtils").REACHOUT_TIMELOCK_IDB_KEY, {
                    state: u != null ? u.state : o("WAWebUserPrefsTypes").ReachoutTimelockState.HIDDEN,
                    time_enforcement_ends: s,
                    enforcement_type: o("WAWebReachoutTimelockUtils").getReachoutTimelockEnforcementType(n)
                });
                o("WAWebBackendApi").frontendFireAndForget("reachoutTimelockEnforcementSet", {});
            } catch (t) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[mex][reachout-timelock] notif handler failed"
                ]))).sendLogs("mex-handle-reachout-timelock-notification-failed");
            }
        });
        return d.apply(this, arguments);
    }
    l.mexHandleReachoutTimelockNotification = s;
    l.handleReachoutTimelockUpdate = c;
}, 98);