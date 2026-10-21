__d("WAWebArchiveSettingSync", [
    "Promise",
    "WALogger",
    "WAWebAndroidUnsupportedActionsSync",
    "WAWebApiActiveMessageRanges",
    "WAWebBackendApi",
    "WAWebMessageRangeUtils",
    "WAWebModelStorageUtils",
    "WAWebProtobufSyncAction.pb",
    "WAWebSchemaActiveMessageRanges",
    "WAWebSchemaChat",
    "WAWebSyncdAction",
    "WAWebSyncdConst",
    "WAWebSyncdDb",
    "WAWebSyncdGetChat",
    "WAWebSyncdIndexUtils",
    "WAWebUserPrefsMultiDevice",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    const _ = [
        o("WAWebSyncdConst").SyncActionState.Success,
        o("WAWebSyncdConst").SyncActionState.Orphan
    ];
    const f = ((t)=>{
        function a(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.collectionName = o("WAWebSyncdConst").CollectionName.RegularLow;
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.getVersion = function() {
            return 4;
        };
        a_prototype.getAction = function() {
            return o("WAWebSyncdConst").Actions.UnarchiveChatsSetting;
        };
        a_prototype.decodeValue = function(n) {
            if (n.binarySyncData) {
                const t = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufSyncAction.pb").SyncActionDataSpec, n.binarySyncData);
                if (t.value) {
                    return t.value;
                }
            } else {
                if (!n.binarySyncAction) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "binarySyncAction should not be null"
                    ]))).tags("syncd").sendLogs("syncd binarySyncAction should not be null");
                    throw r("err")("binarySyncAction should not be null");
                }
                return o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufSyncAction.pb").SyncActionValueSpec, n.binarySyncAction);
            }
        };
        a_prototype.applyMutations = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                const a = this;
                r("WAWebAndroidUnsupportedActionsSync").updatePrimaryAllowsAllMutationsFlag("other mutation");
                const t_setMutationsPendingToPersist = t.setMutationsPendingToPersist;
                if (e.length > 0) {
                    const l = e[e.length - 1];
                    try {
                        let m = [];
                        if (l.operation === "set") {
                            const p = l.value;
                            const _ = p.unarchiveChatsSetting;
                            if (_?.unarchiveChats == null) {
                                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                                    "archive setting sync: malformed mutation"
                                ])));
                                return [
                                    o("WAWebSyncdIndexUtils").malformedActionValue(this.collectionName)
                                ];
                            }
                            const classic = _.unarchiveChats;
                            const g = yield o("WAWebUserPrefsMultiDevice").getArchiveV2EnabledSetting();
                            if (!g) {
                                yield o("WAWebUserPrefsMultiDevice").setArchiveV2EnabledSetting(true);
                                o("WAWebBackendApi").frontendFireAndForget("applyAppSetting", {
                                    field: "archive",
                                    value: {
                                        enabled: true
                                    }
                                });
                            }
                            yield o("WAWebUserPrefsMultiDevice").setUnarchiveChatsSetting(classic);
                            o("WAWebBackendApi").frontendFireAndForget("applyAppSetting", {
                                field: "archive",
                                value: {
                                    classic
                                }
                            });
                            yield o("WAWebModelStorageUtils").getStorage().lock([
                                "message",
                                "chat",
                                "sync-actions",
                                "active-message-ranges"
                            ], n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                                m = yield a.updateSideEffectOnChats(classic, t_setMutationsPendingToPersist);
                                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                                    "applyMutations: update chat table"
                                ])));
                                yield o("WAWebSchemaChat").getChatTable().bulkCreateOrMerge(m);
                            }));
                            m.forEach((e)=>{
                                if (e.id != null) {
                                    const t = o("WAWebWidFactory").createWid(e.id);
                                    o("WAWebBackendApi").frontendFireAndForget("chatCollectionUpdate", {
                                        updates: [
                                            {
                                                id: t,
                                                archive: e.archive === true
                                            }
                                        ]
                                    });
                                }
                            });
                            return [
                                {
                                    actionState: o("WAWebSyncdConst").SyncActionState.Success
                                }
                            ];
                        }
                        o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "archive setting sync: operation not supported"
                        ])));
                        return [
                            {
                                actionState: o("WAWebSyncdConst").SyncActionState.Unsupported
                            }
                        ];
                    } catch (e) {
                        return [
                            {
                                actionState: o("WAWebSyncdConst").SyncActionState.Failed
                            }
                        ];
                    }
                }
                o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "archive setting sync: no mutations"
                ])));
                return [
                    {
                        actionState: o("WAWebSyncdConst").SyncActionState.Failed
                    }
                ];
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.$ArchiveSettingSync$p_1 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = this;
                const r = [];
                const a = self.performance.now();
                const i = yield o("WAWebSchemaChat").getChatTable().all();
                const l = i.filter((e)=>e.archive).map((e)=>e.id);
                const s = yield (p || (p = n("Promise"))).all(l.map((e)=>o("WAWebApiActiveMessageRanges").getActiveMessageRanges(e)));
                const u = s.flat().filter((e)=>e.action === o("WAWebSchemaActiveMessageRanges").ActiveRangeAction.Archive).map((e)=>e.chatId);
                const c = l.filter((e)=>!u.includes(e));
                const d = yield p.all(c.map((t)=>{
                    const r = o("WAWebWidFactory").createWid(t);
                    const a = JSON.stringify([
                        o("WAWebSyncdConst").Actions.Archive,
                        r.toString({
                            legacy: true
                        })
                    ]);
                    const i = e.find((e)=>e.index === a);
                    if (i) {
                        return (p || (p = n("Promise"))).resolve(i);
                    }
                    return o("WAWebSyncdDb").getSyncAction(a);
                }));
                const f = d.filter((e)=>{
                    if (!e) {
                        return false;
                    }
                    const r = t.decodeValue(e)?.archiveChatAction;
                    return _.includes(e.actionState) && r?.archived === true && r.messageRange;
                }).map((e)=>{
                    const r = e && t.decodeValue(e)?.archiveChatAction;
                    const o = e ? JSON.parse(e.index)[1] : "";
                    return [
                        o,
                        r?.messageRange
                    ];
                });
                const g = new Map(f);
                const h = Array.from(g.keys());
                const y = yield p.all(h.map((e)=>o("WAWebMessageRangeUtils").constructMessageRange(o("WAWebWidFactory").createWid(e), {
                        forOutgoingMutation: false
                    })));
                h.forEach((e, t)=>{
                    const n = y[t];
                    const a = g.get(e);
                    if (a) {
                        const i = o("WAWebMessageRangeUtils").compareMessageRanges(n, a);
                        if (i === o("WAWebMessageRangeUtils").MessageRangeEncloseType.RangeAEnclosesRangeB || i === o("WAWebMessageRangeUtils").MessageRangeEncloseType.RangesNotEnclosing) {
                            const l = o("WAWebWidFactory").createWid(e);
                            r.push({
                                id: l.toString({
                                    legacy: false
                                }),
                                archive: false
                            });
                        } else {
                            o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                                "Archive_Setting_Sync: Unsupported rangeEnclosedType ",
                                ""
                            ])), i).sendLogs("ArchiveSettingSync setting true rangeEnclosedType unsupported");
                        }
                    }
                });
                const C = self.performance.now();
                r.length > 0;
                return r;
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.$ArchiveSettingSync$p_2 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = this;
                const r = [];
                const a = yield o("WAWebSyncdDb").getSyncActionsRows([
                    "action"
                ], [
                    o("WAWebSyncdConst").Actions.Archive
                ]);
                const i = e.filter((e)=>e.action === o("WAWebSyncdConst").Actions.Archive);
                const l = i.map((e)=>e.index);
                const s = a.filter((e)=>!l.includes(e.index));
                const u = [].concat(s, i);
                const c = u.filter((e)=>{
                    if (e.actionState === o("WAWebSyncdConst").SyncActionState.Success) {
                        const r = t.decodeValue(e);
                        return r?.archiveChatAction?.archived === true;
                    }
                    return false;
                });
                const d = c.map((e)=>{
                    const t = JSON.parse(e.index)[1];
                    return o("WAWebWidFactory").createWid(t);
                });
                const m = d.map((()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                        const t = yield o("WAWebSyncdGetChat").resolveChatForMutationIndex(e);
                        if (t.success) {
                            return o("WAWebWidFactory").createWid(t.chat.id);
                        }
                    });
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                })());
                const _ = yield (p || (p = n("Promise"))).all(m);
                _.filter(Boolean).forEach((e)=>{
                    r.push({
                        id: e.toString({
                            legacy: false
                        }),
                        archive: true
                    });
                });
                r.length > 0;
                return r;
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.updateSideEffectOnChats = function(t, n) {
            if (t) {
                return this.$ArchiveSettingSync$p_1(n);
            }
            return this.$ArchiveSettingSync$p_2(n);
        };
        return a;
    })(o("WAWebSyncdAction").AccountSyncdActionBase);
    const g = new f;
    l.default = g;
}, 98);