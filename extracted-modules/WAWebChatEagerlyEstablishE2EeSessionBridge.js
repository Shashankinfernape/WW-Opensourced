__d("WAWebChatEagerlyEstablishE2EeSessionBridge", [
    "WALogger",
    "WAWebApiParticipantStore",
    "WAWebBackendErrors",
    "WAWebChatGetters",
    "WAWebLidMigrationUtils",
    "WAWebMaibaWASSMigration",
    "WAWebManageE2ESessionsJob",
    "WAWebPQGatingUtils",
    "WAWebPostPrekeysDepletionMetric",
    "WAWebSendMsgDatabaseJob",
    "WAWebSessionScope",
    "WAWebSimpleSignalPNToFBIDMigration",
    "WAWebStatusSessionGatingUtils",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsStatus",
    "WAWebWamEnumMessageType",
    "WAWebWamEnumPrekeysFetchContext",
    "WAWebWamNumberToSizeBucket",
    "asyncToGeneratorRuntime",
    "compactMap"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    const d = 406;
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            let n;
            let deviceSizeBucket = null;
            if (o("WAWebChatGetters").getIsGroup(t)) {
                const i = yield o("WAWebApiParticipantStore").getGroupSenderKeyList(t.id);
                n = i.skDistribList;
                deviceSizeBucket = r("WAWebWamNumberToSizeBucket")(i.skDistribList.length + i.skList.length);
            } else if (t.id.isStatus()) {
                const l = yield o("WAWebUserPrefsStatus").getStatusList();
                l.list = r("compactMap")(l.list, o("WAWebLidMigrationUtils").toUserLid);
                const m = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow();
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "eagerlyEstablishE2EESession: status eager session start, contacts=",
                    ""
                ])), l.list.length);
                const p = yield o("WAWebSendMsgDatabaseJob").getFanOutListJob([].concat(l.list, [
                    m
                ]), undefined, true);
                const f = yield o("WAWebUserPrefsStatus").getStatusSkDistribList(p, {
                    isFullAudience: false
                });
                const g = f.skDistribList;
                n = g;
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "eagerlyEstablishE2EESession: status skDistribList=",
                    " allDevices=",
                    ""
                ])), g.length, p.length);
            } else {
                const h = o("WAWebMaibaWASSMigration").maybeReplaceMaibaAiHubWidWithFbid(o("WAWebSimpleSignalPNToFBIDMigration").maybeReplaceDeprecatedBotPnWithFbid(t.id));
                n = yield o("WAWebSendMsgDatabaseJob").getFanOutListJob([
                    h,
                    o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow()
                ]);
            }
            try {
                const y = yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
                    identityChanged: false,
                    sessionScope: _(t),
                    wids: n
                });
                o("WAWebPostPrekeysDepletionMetric").maybePostPrekeysDepletionMetric({
                    count: y?.depletedPrekeyCount,
                    prekeysFetchReason: o("WAWebWamEnumPrekeysFetchContext").PREKEYS_FETCH_CONTEXT.USER_INTENT_PREFETCH,
                    messageType: o("WAWebChatGetters").getIsGroup(t) ? o("WAWebWamEnumMessageType").MESSAGE_TYPE.GROUP : o("WAWebWamEnumMessageType").MESSAGE_TYPE.INDIVIDUAL,
                    deviceSizeBucket
                });
            } catch (error) {
                if (error instanceof o("WAWebBackendErrors").ServerStatusCodeError && error.statusCode === d) {
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "eagerlyEstablishE2EESession: ignore prekey err, device unregistered ",
                        ""
                    ])), error);
                } else {
                    o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "error: ",
                        ""
                    ])), error).sendLogs("eagerlyEstablishE2EESession: failed");
                }
            }
        });
        return p.apply(this, arguments);
    }
    function _(e) {
        if (e.id.isStatus()) {
            return o("WAWebStatusSessionGatingUtils").getStatusSessionScope();
        }
        if (o("WAWebChatGetters").getIsUser(e) && o("WAWebPQGatingUtils").isPq1on1MessageEnabled()) {
            return o("WAWebSessionScope").SessionScope.PQ;
        }
        return o("WAWebSessionScope").SessionScope.DEFAULT;
    }
    l.eagerlyEstablishE2EESession = m;
}, 98);