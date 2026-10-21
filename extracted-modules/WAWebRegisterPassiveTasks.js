__d("WAWebRegisterPassiveTasks", [
    "Promise",
    "WALogger",
    "WAWebABPropsLocalStorage",
    "WAWebABPropsWamGlobals",
    "WAWebAbPropsSyncJob",
    "WAWebNoop",
    "WAWebPQGatingUtils",
    "WAWebPassiveModeManager",
    "WAWebSignalStoreApi",
    "WAWebUploadPrekeysForRegTask",
    "WAWebUserPrefsGeneral",
    "WAWebWamDeviceLinkReporter",
    "WAWebWamEnumMdLinkDeviceCompanionStage",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "gkx",
    "requireDeferred"
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
    let b;
    const v = r("requireDeferred")("WAPQRollbackProtocol").__setRef("WAWebRegisterPassiveTasks");
    const S = r("requireDeferred")("WAWebKyberPreKeyStore").__setRef("WAWebRegisterPassiveTasks");
    const R = r("requireDeferred")("WAWebUploadPQPrekeysJob").__setRef("WAWebRegisterPassiveTasks");
    function L() {
        return E.apply(this, arguments);
    }
    function E() {
        E = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const t = yield o("WAWebSignalStoreApi").waSignalStore.getServerHasPreKeys();
            let a = null;
            if (!t) {
                yield o("WAWebWamDeviceLinkReporter").setDeviceLinkPairStage(o("WAWebWamEnumMdLinkDeviceCompanionStage").MD_LINK_DEVICE_COMPANION_STAGE.UPLOAD_PREKEYS);
                const i = r("WAWebUploadPrekeysForRegTask")();
                i.startKeyGenerationStage();
                let l = null;
                const L = (()=>{
                    const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[passive] start key upload"
                        ])));
                        try {
                            const t = yield i.startKeyUploadStage();
                            if (t?.success === true) {
                                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                                    "[passive] key upload complete"
                                ])));
                                yield o("WAWebWamDeviceLinkReporter").setDeviceLinkPairStage(o("WAWebWamEnumMdLinkDeviceCompanionStage").MD_LINK_DEVICE_COMPANION_STAGE.COMPLETE);
                                yield o("WAWebWamDeviceLinkReporter").commitDeviceLinkEvent();
                                return true;
                            }
                            o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                                "[passive] key upload did not complete successfully"
                            ])));
                            yield o("WAWebWamDeviceLinkReporter").commitDeviceLinkEvent(-1);
                            return false;
                        } catch (e) {
                            o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                                "error while uploading prekeys, ",
                                ""
                            ])), e).verbose().sendLogs("error while uploading prekeys");
                            yield o("WAWebWamDeviceLinkReporter").commitDeviceLinkEvent(-1);
                            return false;
                        }
                    });
                    return function() {
                        return t.apply(this, arguments);
                    };
                })();
                a = function() {
                    if (l == null) {
                        l = L();
                    }
                    return l;
                };
                o("WAWebPassiveModeManager").PassiveTaskManager.registerPassiveTask("KeyUpload", function(e) {
                    return (a == null ? void 0 : a().then(r("WAWebNoop"))) ?? (b || (b = n("Promise"))).resolve();
                });
            }
            const E = o("WAWebPQGatingUtils").isPqKeysUploadEnabled();
            if (E) {
                o("WAWebPassiveModeManager").PassiveTaskManager.registerPassiveTask("PQKeyUpload", (()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                        if (a != null) {
                            const t = yield a();
                            if (!t) {
                                o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                                    "[passive] skip PQ key upload because legacy key upload failed"
                                ])));
                                return;
                            }
                        }
                        o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                            "[passive] start PQ key upload"
                        ])));
                        return R.load().then(({ generateAndUploadPQPreKeys: t })=>t()).then(()=>{
                            o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                                "[passive] PQ key upload complete"
                            ])));
                        }).catch((e)=>{
                            o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                                "[passive] PQ key upload failed: ",
                                ""
                            ])), e);
                        });
                    });
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                })());
            } else if (o("WAWebPQGatingUtils").isPqKeyRollbackEnabled()) {
                o("WAWebPassiveModeManager").PassiveTaskManager.registerPassiveTask("PQKeyRollback", (()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                        const t = yield S.load();
                        const { clearKyberPreKeysAndMigrationState: n, isPQMigrated: a } = t;
                        if (yield a()) {
                            o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                                "[passive] start PQ key rollback"
                            ])));
                            try {
                                const i = yield v.load();
                                const l = i.deletePQPreKeysProtocol;
                                const s = yield l();
                                if (s.success) {
                                    yield n();
                                    o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                                        "[passive] PQ key rollback complete"
                                    ])));
                                } else {
                                    o("WALogger").WARN(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                                        "[passive] PQ key rollback failed"
                                    ]))).sendLogs("pq-rollback-failed");
                                }
                            } catch (e) {
                                o("WALogger").WARN(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                                    "[passive] PQ key rollback failed"
                                ]))).catching(r("getErrorSafe")(e)).sendLogs("pq-rollback-error");
                            }
                        }
                    });
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                })());
            }
            let k = true;
            k = r("gkx")("26259") || !o("WAWebABPropsLocalStorage").isABPropsAfterFirstSync() || (yield o("WAWebUserPrefsGeneral").getWhatsAppWebExternalBetaDirtyBitIdb());
            if (k) {
                yield o("WAWebPassiveModeManager").PassiveTaskManager.registerPassiveTask("SyncABProps", function(e) {
                    return o("WAWebAbPropsSyncJob").syncABPropsTask().catch((e)=>{
                        o("WALogger").WARN(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                            "error while sync ab props prekeys, ",
                            ""
                        ])), e).verbose();
                    });
                });
                o("WAWebUserPrefsGeneral").setWhatsAppWebExternalBetaDirtyBitIdb(false);
                o("WAWebABPropsWamGlobals").setAbPropDependingGlobalWamAttributes();
            }
        });
        return E.apply(this, arguments);
    }
    l.registerPassiveTaskForStartUp = L;
}, 98);