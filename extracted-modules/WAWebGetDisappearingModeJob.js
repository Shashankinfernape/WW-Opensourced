__d("WAWebGetDisappearingModeJob", [
    "Promise",
    "WALogger",
    "WAWebContactSyncErrorCodes",
    "WAWebContactSyncLogger",
    "WAWebUserPrefsMeUser",
    "WAWebUsync",
    "WAWebUsyncUser",
    "WAWebWid",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    function d(e, t) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, a) {
            if (!r("WAWebWid").isWid(t) || !t.isUser()) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[getDisappearingMode] expected user wid, got: ",
                    ""
                ])), t);
                return (c || (c = n("Promise"))).resolve({
                    id: t
                });
            }
            const i = new (o("WAWebUsync")).USyncQuery().withContext("interactive").withMode("query").withDisappearingModeProtocol().withUser(new (o("WAWebUsyncUser")).USyncUser().withId(t));
            const l = o("WAWebContactSyncLogger").contactSyncLogger.createEventContext({
                syncType: o("WAWebContactSyncLogger").getSyncTypeString("interactive", "query"),
                requestOrigin: a ?? o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.UNKNOWN,
                requestedCount: 1,
                protocols: i.protocols
            });
            const d = yield o("WAWebContactSyncLogger").contactSyncLogger.executeWithLogging(l, function() {
                return i.execute();
            }, o("WAWebContactSyncErrorCodes").GET_DISAPPEARING_MODE);
            if (d.error.all || d.error.status) {
                const m = d.error.all || d.error.status;
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "getDisappearingMode: failed ",
                    " : ",
                    ""
                ])), m.errorCode, m.errorText);
                o("WAWebContactSyncLogger").contactSyncLogger.logFailure(l, m.errorCode, d, o("WAWebContactSyncErrorCodes").GET_DISAPPEARING_MODE);
                return {
                    id: t,
                    error: m
                };
            }
            const d_list = d.list;
            if (d_list.length === 0 || d_list[0].disappearing_mode == null) {
                o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(l, d);
                return (c || (c = n("Promise"))).reject(r("err")("no disappearing_mode data returned for user"));
            }
            const disappearing_mode = d_list[0].disappearing_mode;
            const { duration, ephemeralityDisabled, t: t_1 } = disappearing_mode;
            if (ephemeralityDisabled) {
                const y = o("WAWebUserPrefsMeUser").isMeAccount(t);
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[handleDisappearingMode] ephemeralityDisabled=true isMeWid=",
                    ""
                ])), y).sendLogs("handleDisappearingMode-ephemeralityDisabled-true");
            }
            o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(l, d, o("WAWebContactSyncLogger").createUpdateCounterWith({
                disappearingModeChange: 1
            }));
            return {
                id: t,
                disappearingModeDuration: duration,
                disappearingModeSettingTimestamp: t_1
            };
        });
        return m.apply(this, arguments);
    }
    l.getDisappearingMode = d;
}, 98);