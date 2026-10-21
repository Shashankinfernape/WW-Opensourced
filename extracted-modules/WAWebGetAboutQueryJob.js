__d("WAWebGetAboutQueryJob", [
    "Promise",
    "WALogger",
    "WAWebContactSyncErrorCodes",
    "WAWebContactSyncLogger",
    "WAWebMexFetchAboutStatusJob",
    "WAWebUsync",
    "WAWebUsyncUser",
    "WAWebWid",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const e_wid = e.wid;
            if (!e_wid.isLid()) {
                const n = yield o("WAWebMexFetchAboutStatusJob").mexGetAbout(e);
                return n;
            }
            return p(e);
        });
        return m.apply(this, arguments);
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ tcToken, wid }) {
            if (!r("WAWebWid").isWid(wid) || !wid.isUser()) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "getAbout: expected user wid, got: ",
                    ""
                ])), wid);
                return (c || (c = n("Promise"))).resolve({
                    id: wid
                });
            }
            const l = new (o("WAWebUsyncUser")).USyncUser().withId(wid);
            if (tcToken != null) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "getAbout: adding tcToken to usync query"
                ])));
                l.withTcToken(tcToken);
            }
            const d = new (o("WAWebUsync")).USyncQuery().withContext("interactive").withMode("query").withStatusProtocol().withUser(l);
            const m = o("WAWebContactSyncLogger").contactSyncLogger.createEventContext({
                syncType: o("WAWebContactSyncLogger").getSyncTypeString("interactive", "query"),
                requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.STATUS_FORCE_REFRESH,
                requestedCount: 1,
                protocols: d.protocols
            });
            const p = yield o("WAWebContactSyncLogger").contactSyncLogger.executeWithLogging(m, function() {
                return d.execute();
            }, o("WAWebContactSyncErrorCodes").GET_ABOUT_STATUS);
            if (p.error.all || p.error.status) {
                const _ = p.error.all || p.error.status;
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "getAbout: failed ",
                    " : ",
                    ""
                ])), _.errorCode, _.errorText);
                o("WAWebContactSyncLogger").contactSyncLogger.logFailure(m, _.errorCode, p, o("WAWebContactSyncErrorCodes").GET_ABOUT_STATUS);
                return {
                    id: wid,
                    error: _
                };
            }
            const p_list = p.list;
            if (p_list.length) {
                o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(m, p, o("WAWebContactSyncLogger").createUpdateCounterWith({
                    statusChange: 1
                }));
                return {
                    id: wid,
                    status: p_list[0].status
                };
            }
            o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(m, p);
            return {
                id: wid,
                status: ""
            };
        });
        return _.apply(this, arguments);
    }
    l.getAbout = d;
}, 98);