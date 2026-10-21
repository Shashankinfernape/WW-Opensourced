__d("WAWebAbPropsSyncJob", [
    "Promise",
    "WAGetAbPropsProtocol",
    "WALogger",
    "WAPromiseDelays",
    "WATaskScheduler",
    "WAWebABProps",
    "WAWebABPropsGlobals",
    "WAWebABPropsLocalStorage",
    "WAWebABPropsUpdateFromStorage",
    "WAWebAbPropsParsingJob",
    "WAWebApiAbPropConfig",
    "WAWebApiAbPropEventSamplingConfig",
    "WAWebBackendEventBus",
    "WAWebEncryptedRid",
    "WAWebEventSamplingCache",
    "WAWebSyncOnABProps",
    "WAWebTasksTaskType",
    "WAWebWorkerSafeBackendApi",
    "asyncToGeneratorRuntime",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    o("WAWebBackendEventBus").BackendEventBus.onAbPropsUpdate((()=>{
        const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            let t;
            const { isInitialSync: n, partialPreviousABPropsValues: r } = e;
            const { ctwa_ad_account_token_storage_kill_switch_web: a, service_improvement_opt_out_flag: i, web_ui_refresh_m1: l } = r;
            yield (t = o("WAWebSyncOnABProps")).ensureNonCriticalDataSyncIsInitialized();
            t.handleServiceImprovementOptOutFlagABPropConfigValueChange(i);
            t.handleAdAccountTokenStorageKillSwitchABPropConfigValueChange(a);
            t.handleUIRefreshNuxOnABPropConfigValueChange(l);
            if (o("WAWebSyncOnABProps").consumeQpEmergencyForceFetchNonce()) {
                o("WATaskScheduler").rescheduleNow(o("WAWebTasksTaskType").TaskType.FETCH_QUICK_PROMOTIONS);
            }
            if (n) {
                yield o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive("checkOrphanFavoriteStickers");
            }
        });
        return function(t) {
            return e.apply(this, arguments);
        };
    })());
    const m = {
        shouldSendHash: true
    };
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ localRefreshId: a, shouldSendHash: i }) {
            const l = r("justknobx")._("3330") && a != null;
            const c = l ? {
                propsRefreshId: a
            } : {
                propsHash: i ? o("WAWebABPropsLocalStorage").getHash() : void 0
            };
            const m = yield o("WAGetAbPropsProtocol").getAbPropsProtocol(c);
            if (!m.success) {
                return false;
            }
            const p = m.value;
            const { abKey: _, erid: f, hash: g, isDeltaUpdate: h, props: y, refresh: C, refreshId: b, samplingConfigs: v } = p;
            const S = f == null ? (d || (d = n("Promise"))).resolve() : o("WAWebEncryptedRid").setEncryptedRid(f);
            if (h && !l) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "syncABProps: received delta update response without responding to emergency push request"
                ]))).sendLogs("abprops-requested-regular-received-delta");
            } else if (!h && l) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "syncABProps: received regular update response when responding to emergency push request"
                ])));
            }
            if (!h) {
                o("WAWebABPropsGlobals").updateGlobalABKey(_ ?? "");
                const R = Date.now();
                o("WAWebABPropsLocalStorage").updateAttributesLocalStorage({
                    abKey: _,
                    currentTime: R,
                    hash: g,
                    refresh: C
                });
            }
            if (b != null) {
                o("WAWebABPropsLocalStorage").setRefreshId(b);
            }
            if (g == null && !h) {
                return false;
            }
            try {
                yield (d || (d = n("Promise"))).all([
                    !h && o("WAWebApiAbPropEventSamplingConfig").updateEventSamplingConfigs(v),
                    o("WAWebApiAbPropConfig").updateABPropConfigs(o("WAWebAbPropsParsingJob").parseABProps(y, h), h),
                    S
                ]);
                return true;
            } catch (e) {
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "update ABProps config table failed"
                ]))).verbose().sendLogs("update ABProps config table failed when syncing ABProps");
            }
            return false;
        });
        return _.apply(this, arguments);
    }
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebABPropsLocalStorage").isABPropsAfterFirstSync();
            for(let r = 3; r-- > 0;){
                try {
                    let a;
                    const i = {
                        service_improvement_opt_out_flag: (a = o("WAWebABProps")).getABPropConfigValue("service_improvement_opt_out_flag"),
                        ctwa_ad_account_token_storage_kill_switch_web: a.getABPropConfigValue("ctwa_ad_account_token_storage_kill_switch_web"),
                        web_ui_refresh_m1: a.getABPropConfigValue("web_ui_refresh_m1"),
                        single_e2ee_session_migration_state_outgoing: a.getABPropConfigValue("single_e2ee_session_migration_state_outgoing"),
                        after_read_sending_enabled: a.getABPropConfigValue("after_read_sending_enabled")
                    };
                    const l = e ? babelHelpers.extends({}, e) : babelHelpers.extends({}, m);
                    if (l.localRefreshId == null) {
                        l.shouldSendHash = t && l.shouldSendHash !== false;
                    }
                    const s = yield p(l);
                    if (s) {
                        yield (d || (d = n("Promise"))).all([
                            o("WAWebABPropsUpdateFromStorage").updateABPropsFromStorage(),
                            o("WAWebEventSamplingCache").updateEventSamplingFromStorage()
                        ]);
                        o("WAWebBackendEventBus").BackendEventBus.triggerAbPropsUpdate({
                            partialPreviousABPropsValues: i,
                            isInitialSync: !t
                        });
                        return;
                    }
                } catch (e) {
                    if (r === 0) {
                        o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "failed to sync ABProps"
                        ]))).verbose().sendLogs("failed to sync ABProps");
                    }
                    yield o("WAPromiseDelays").delayMs(10 * 1000 * Math.random());
                }
            }
        });
        return g.apply(this, arguments);
    }
    l.syncABProps = p;
    l.syncABPropsTask = f;
}, 98);