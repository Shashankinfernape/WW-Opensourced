__d("WAWebPushNameSync", [
    "Promise",
    "WALogger",
    "WASendPresenceStatusProtocol",
    "WAWebProtobufsServerSync.pb",
    "WAWebSetPushnameLocallyAction",
    "WAWebSyncBootstrap",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdCriticalBootstrapProcessingApi",
    "WAWebWamEnumBootstrapAppStateDataStageCode",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    let h;
    let y;
    let C;
    const b = ((t)=>{
        function a(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.collectionName = o("WAWebSyncdConst").CollectionName.CriticalBlock;
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.getVersion = function() {
            return 1;
        };
        a_prototype.getAction = function() {
            return o("WAWebSyncdConst").Actions.SettingPushName;
        };
        a_prototype.applyMutations = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "push name sync: start"
                ])));
                let a = 0;
                let i = 0;
                const l = yield (C || (C = n("Promise"))).all(t.map((()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                        o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "push name sync: handle mutation"
                        ])));
                        try {
                            if (e.operation === "set") {
                                const l = e.value;
                                let g = l.pushNameSetting?.name;
                                if (g == null || g === "") {
                                    a++;
                                    yield o("WAWebSyncdCriticalBootstrapProcessingApi").logCriticalBootstrapStageIfNecessary(o("WAWebWamEnumBootstrapAppStateDataStageCode").BOOTSTRAP_APP_STATE_DATA_STAGE_CODE.PUSHNAME_INVALID);
                                    g = "";
                                }
                                o("WASendPresenceStatusProtocol").sendPresenceStatusProtocol({
                                    name: g
                                });
                                o("WAWebSetPushnameLocallyAction").setPushnameLocally(g);
                                yield o("WAWebSyncdCriticalBootstrapProcessingApi").logCriticalBootstrapStageIfNecessary(o("WAWebWamEnumBootstrapAppStateDataStageCode").BOOTSTRAP_APP_STATE_DATA_STAGE_CODE.PUSHNAME_APPLIED);
                                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                                    "push name sync: before check critical sync"
                                ])));
                                if (r("WAWebSyncBootstrap").isSyncDCriticalDataSyncInProcess()) {
                                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                                        "push name sync: set critical sync done"
                                    ])));
                                    yield r("WAWebSyncBootstrap").setSyncDCriticalSynced();
                                    o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                                        "push name sync: after set critical sync done"
                                    ])));
                                    r("WAWebSyncBootstrap").setSyncDCriticalDataSyncCompleted();
                                }
                                o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                                    "push name sync: after check critical sync"
                                ])));
                                return (C || (C = n("Promise"))).resolve({
                                    actionState: o("WAWebSyncdConst").SyncActionState.Success
                                });
                            }
                            o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                                "push name sync: unsupported"
                            ])));
                            i++;
                            return (C || (C = n("Promise"))).resolve({
                                actionState: o("WAWebSyncdConst").SyncActionState.Unsupported
                            });
                        } catch (e) {
                            o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                                "push name sync: error"
                            ])));
                            o("WAWebSyncdCriticalBootstrapProcessingApi").logCriticalBootstrapStageIfNecessary(o("WAWebWamEnumBootstrapAppStateDataStageCode").BOOTSTRAP_APP_STATE_DATA_STAGE_CODE.PUSHNAME_INVALID).catch(()=>{
                                o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                                    "push name sync: bootstrap stage log failed"
                                ]))).sendLogs("push-name-sync-bootstrap-stage-log-failed");
                            });
                            return {
                                actionState: o("WAWebSyncdConst").SyncActionState.Failed
                            };
                        }
                    });
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                })()));
                if (a > 0) {
                    o("WALogger").WARN(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                        "push name sync: ",
                        " empty pushnames"
                    ])), a);
                }
                if (i > 0) {
                    o("WALogger").WARN(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                        "push name sync: ",
                        " operations not supported"
                    ])), i);
                }
                const length = l.filter((e)=>e.actionState === o("WAWebSyncdConst").SyncActionState.Success).length;
                const length_1 = l.filter((e)=>e.actionState === o("WAWebSyncdConst").SyncActionState.Failed).length;
                o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                    "push name sync: handler completed: mutations=",
                    ", success=",
                    ", failed=",
                    ", unsupported=",
                    ", emptyPushnames=",
                    ""
                ])), t.length, length, length_1, i, a);
                return l;
            });
            function a(e) {
                return t.apply(this, arguments);
            }
            return a;
        })();
        a_prototype.getPushnameMutation = function(t, n) {
            const e = {
                pushNameSetting: {
                    name: n
                }
            };
            return o("WAWebSyncdActionUtils").buildPendingMutation({
                collection: this.collectionName,
                indexArgs: [],
                value: e,
                version: this.getVersion(),
                operation: o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET,
                timestamp: t,
                action: this.getAction()
            });
        };
        return a;
    })(o("WAWebSyncdAction").AccountSyncdActionBase);
    const v = new b;
    l.default = v;
}, 98);