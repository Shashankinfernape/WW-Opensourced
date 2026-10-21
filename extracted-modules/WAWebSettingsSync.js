__d("WAWebSettingsSync", [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebEnvironment",
    "WAWebPrimaryFeatures",
    "WAWebProtobufSyncAction.pb",
    "WAWebProtobufsServerSync.pb",
    "WAWebSettingsSyncConst",
    "WAWebSettingsSyncHelpers",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdCoreApi",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe"
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
    function h() {
        return o("WAWebPrimaryFeatures").primaryFeatureEnabled("settings_sync_enabled") === true;
    }
    const y = ((t)=>{
        function a(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.collectionName = o("WAWebSyncdConst").CollectionName.RegularLow;
            e.chatJidIndex = 3;
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.getVersion = function() {
            return 1;
        };
        a_prototype.getAction = function() {
            return o("WAWebSyncdConst").Actions.SettingsSync;
        };
        a_prototype.applyMutations = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = this;
                if (!h()) {
                    return e.map(()=>({
                            actionState: o("WAWebSyncdConst").SyncActionState.Unsupported
                        }));
                }
                const r = [];
                const a = new Map;
                for (const i of e){
                    const l = JSON.stringify(i.indexParts);
                    if (i.operation === "set") {
                        const u = a.get(l);
                        const c = u?.timestamp ?? 0;
                        if (u == null || i.timestamp > c) {
                            a.set(l, i);
                        }
                    }
                }
                const d = e.map((e)=>{
                    const n = a.get(JSON.stringify(e.indexParts));
                    if (n == null) {
                        return {
                            actionState: o("WAWebSyncdConst").SyncActionState.Malformed
                        };
                    }
                    if (n !== e) {
                        return {
                            actionState: o("WAWebSyncdConst").SyncActionState.Skipped
                        };
                    }
                    return t.$SettingsSync$p_1(e);
                });
                const m = yield (g || (g = n("Promise"))).all(d);
                r.push(...m);
                return r;
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.$SettingsSync$p_1 = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ indexParts, value }) {
                if (!indexParts || indexParts.length !== 4) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[settings-sync] Invalid index structure: ",
                        ""
                    ])), JSON.stringify(indexParts));
                    return {
                        actionState: o("WAWebSyncdConst").SyncActionState.Malformed
                    };
                }
                const i = indexParts[0];
                const l = indexParts[1];
                const p = indexParts[2];
                const _ = indexParts[3];
                const f = o("WAWebProtobufSyncAction.pb").SyncActionValue$SettingsSyncAction$SettingPlatform.cast(Number(l));
                const g = f === o("WAWebProtobufSyncAction.pb").SyncActionValue$SettingsSyncAction$SettingPlatform.WEB || r("WAWebEnvironment").isWindows && f === o("WAWebProtobufSyncAction.pb").SyncActionValue$SettingsSyncAction$SettingPlatform.HYBRID;
                if (!g) {
                    return {
                        actionState: o("WAWebSyncdConst").SyncActionState.Skipped
                    };
                }
                const h = o("WAWebProtobufSyncAction.pb").SyncActionValue$SettingsSyncAction$SettingKey.cast(Number(p));
                if (h == null) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[settings-sync] Invalid setting key: ",
                        ""
                    ])), p);
                    return {
                        actionState: o("WAWebSyncdConst").SyncActionState.Malformed
                    };
                }
                const y = o("WAWebSettingsSyncConst").SETTING_KEY_TO_FIELD[h];
                if (!y) {
                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[settings-sync] Unknown setting key: ",
                        ""
                    ])), h);
                    return {
                        actionState: o("WAWebSyncdConst").SyncActionState.Malformed
                    };
                }
                const C = value?.settingsSyncAction;
                if (!C) {
                    o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[settings-sync] Missing settingsSyncAction in value"
                    ])));
                    return {
                        actionState: o("WAWebSyncdConst").SyncActionState.Malformed
                    };
                }
                const b = C[y];
                if (b === undefined) {
                    o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[settings-sync] Field ",
                        " not found in settingsSyncAction"
                    ])), y);
                    return {
                        actionState: o("WAWebSyncdConst").SyncActionState.Malformed
                    };
                }
                try {
                    yield o("WAWebSettingsSyncHelpers").applySettingUpdate(y, b, _);
                } catch (error) {
                    o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[settings-sync] Failed to apply mutation"
                    ]))).catching(r("getErrorSafe")(error));
                    return {
                        actionState: o("WAWebSyncdConst").SyncActionState.Failed
                    };
                }
                return {
                    actionState: o("WAWebSyncdConst").SyncActionState.Success
                };
            });
            function a(e) {
                return t.apply(this, arguments);
            }
            return a;
        })();
        a_prototype.getMutation = function(t, n, a, i = "app") {
            const l = o("WAWebSettingsSyncConst").SETTING_NAME_TO_KEY[n];
            const s = o("WAWebSettingsSyncConst").SETTING_NAME_TO_FIELD[n];
            const u = this.$SettingsSync$p_2();
            if (!l || !s) {
                throw r("err")(`[settings-sync] Unknown setting: ${n}`);
            }
            return o("WAWebSyncdActionUtils").buildPendingMutation({
                collection: o("WAWebSyncdConst").CollectionName.RegularLow,
                indexArgs: [
                    String(u),
                    String(l),
                    i
                ],
                value: {
                    settingsSyncAction: {
                        [s]: a
                    }
                },
                version: this.getVersion(),
                operation: o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET,
                timestamp: t,
                action: this.getAction()
            });
        };
        a_prototype.sendMutation = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, a = "app") {
                if (h()) {
                    try {
                        o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                            "[settings-sync] Sending mutation for ",
                            ""
                        ])), e);
                        const i = this.getMutation(o("WATimeUtils").unixTimeMs(), e, t, a);
                        yield o("WAWebSyncdCoreApi").lockForSync([], [
                            i
                        ], function() {
                            return (g || (g = n("Promise"))).resolve();
                        });
                        o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                            "[settings-sync] Successfully sent mutation for ",
                            ""
                        ])), e);
                    } catch (error) {
                        o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                            "[settings-sync] Failed to send mutation"
                        ]))).catching(r("getErrorSafe")(error)).tags("settings-sync");
                        throw error;
                    }
                }
            });
            function t(t, n, r) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.$SettingsSync$p_2 = function() {
            if (r("WAWebEnvironment").isWindows) {
                return o("WAWebProtobufSyncAction.pb").SyncActionValue$SettingsSyncAction$SettingPlatform.HYBRID;
            }
            return o("WAWebProtobufSyncAction.pb").SyncActionValue$SettingsSyncAction$SettingPlatform.WEB;
        };
        return a;
    })(o("WAWebSyncdAction").AccountSyncdActionBase);
    const C = new y;
    l.default = C;
}, 98);