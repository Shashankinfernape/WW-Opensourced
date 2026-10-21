__d("WAWebPinChatSync", [
    "$InternalEnum",
    "Promise",
    "WALogger",
    "WALongInt",
    "WATimeUtils",
    "WAWebAndroidUnsupportedActionsSync",
    "WAWebArchiveChatSync",
    "WAWebChatGetExistingBridge",
    "WAWebChatPinBridge",
    "WAWebLid1X1MigrationGating",
    "WAWebLidMigrationUtils",
    "WAWebMdSyncdDogfoodingFeatureUsageWamEvent",
    "WAWebProtobufSyncAction.pb",
    "WAWebProtobufsServerSync.pb",
    "WAWebSchemaChat",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdCoreApi",
    "WAWebSyncdDb",
    "WAWebSyncdGetChat",
    "WAWebSyncdIndexUtils",
    "WAWebWamEnumMdFeatureCode",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "compactMap",
    "decodeProtobuf",
    "gkx",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    function m(e) {
        if (e === p.Chat) {
            return function(e) {
                return !r("WAWebWid").isNewsletter(e);
            };
        }
        if (e === p.Newsletter) {
            return function(e) {
                return r("WAWebWid").isNewsletter(e);
            };
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })();
    }
    var p = n("$InternalEnum").Mirrored([
        "Chat",
        "Newsletter"
    ]);
    function _(e) {
        const t = o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated();
        const n = new Map;
        const r = [];
        for (const a of e){
            const { chatId, timestamp } = a;
            const u = t && chatId.isRegularUserPn() ? (o("WAWebLidMigrationUtils").toLid(chatId) ?? chatId).toString() : chatId.toString();
            const c = n.get(u);
            if (c == null) {
                const d = {
                    chatId,
                    timestamp
                };
                n.set(u, d);
                r.push(d);
            } else {
                if (timestamp > c.timestamp) {
                    c.timestamp = timestamp;
                }
            }
        }
        return r;
    }
    const f = ((t)=>{
        function a(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.chatJidIndex = 1;
            e.collectionName = o("WAWebSyncdConst").CollectionName.RegularLow;
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.getVersion = function() {
            return 5;
        };
        a_prototype.getAction = function() {
            return o("WAWebSyncdConst").Actions.Pin;
        };
        a_prototype.applyMutations = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                r("WAWebAndroidUnsupportedActionsSync").updatePrimaryAllowsAllMutationsFlag("other mutation");
                const t = [];
                for(let n = 0; n < e.length; n++){
                    t.push((yield this.applyMutation(e[n])));
                }
                return t;
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.applyMutation = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                if (t.operation === "remove") {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd: pin_chat_sync: REMOVE not supported"
                    ])));
                    return (d || (d = n("Promise"))).resolve({
                        actionState: o("WAWebSyncdConst").SyncActionState.Unsupported
                    });
                }
                const { indexParts, timestamp, value } = t;
                const m = indexParts[1];
                try {
                    if (!m) {
                        o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "syncd: pin_chat_sync: missing chatJid in index"
                        ])));
                        return this.malformedActionIndex();
                    }
                    if (!r("WAWebWid").isWid(m)) {
                        return this.malformedActionIndex();
                    }
                    const p = value.pinAction;
                    if (p == null) {
                        o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "syncd: pin_chat_sync: missing pinAction"
                        ])));
                        return o("WAWebSyncdIndexUtils").malformedActionValue(this.collectionName);
                    }
                    const pinned = p.pinned;
                    if (pinned == null) {
                        o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "syncd: pin_chat_sync: missing pinned field"
                        ])));
                        return o("WAWebSyncdIndexUtils").malformedActionValue(this.collectionName);
                    }
                    const f = yield o("WAWebSyncdGetChat").resolveChatForMutationIndex(o("WAWebWidFactory").createWid(m));
                    if (!f.success) {
                        return {
                            actionState: o("WAWebSyncdConst").SyncActionState.Orphan,
                            orphanModel: f.orphanModel
                        };
                    }
                    const g = f.chat.id;
                    const h = f.chat.id;
                    const y = o("WAWebWidFactory").createWid(h);
                    if (!pinned) {
                        yield this.applyUpdates([
                            {
                                wid: y,
                                pinned: false,
                                timestamp
                            }
                        ]);
                        return {
                            actionState: o("WAWebSyncdConst").SyncActionState.Success
                        };
                    }
                    const C = y.isNewsletter() ? yield this.getLocalNewsletterPins() : yield this.getLocalChatPins();
                    if (C.some((e)=>e.chatId.toString() === y.toString())) {
                        yield this.applyUpdates([
                            {
                                wid: y,
                                pinned,
                                timestamp
                            }
                        ]);
                        return {
                            actionState: o("WAWebSyncdConst").SyncActionState.Success
                        };
                    }
                    if (C.length < o("WAWebChatPinBridge").getPinLimit(y)) {
                        yield this.applyUpdates([
                            {
                                wid: y,
                                pinned,
                                timestamp
                            }
                        ]);
                        return {
                            actionState: o("WAWebSyncdConst").SyncActionState.Success
                        };
                    }
                    if (!r("gkx")("26258")) {
                        new (o("WAWebMdSyncdDogfoodingFeatureUsageWamEvent")).MdSyncdDogfoodingFeatureUsageWamEvent({
                            mdSyncdDogfoodingFeature: o("WAWebWamEnumMdFeatureCode").MD_FEATURE_CODE.UNPIN_4TH_CHAT_MUTATION
                        }).commit();
                    }
                    const b = C.reduce((acc, item)=>{
                        if (item.timestamp < acc.timestamp) {
                            return item;
                        }
                        return acc;
                    });
                    const v = [];
                    const S = b.timestamp < timestamp ? b.chatId : y;
                    if (S === b.chatId) {
                        v.push({
                            wid: b.chatId,
                            pinned: false,
                            timestamp
                        }, {
                            wid: y,
                            pinned: true,
                            timestamp
                        });
                    }
                    yield (d || (d = n("Promise"))).all([
                        this.applyUpdates(v),
                        this.createPendingUnpin(S, timestamp)
                    ]);
                    return d.resolve({
                        actionState: o("WAWebSyncdConst").SyncActionState.Success
                    });
                } catch (e) {
                    return {
                        actionState: o("WAWebSyncdConst").SyncActionState.Failed
                    };
                }
            });
            function a(e) {
                return t.apply(this, arguments);
            }
            return a;
        })();
        a_prototype.applyUpdates = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                if (e.length !== 0) {
                    const t = e.map(({ pinned, timestamp, wid })=>{
                        const o = {
                            id: wid.toString(),
                            pin: pinned ? timestamp : 0
                        };
                        if (pinned) {
                            o.archive = false;
                        }
                        return o;
                    });
                    yield (d || (d = n("Promise"))).all(t.map((e)=>o("WAWebSchemaChat").getChatTable().merge(e.id, e)));
                    yield d.all(e.map((()=>{
                        const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                            const t = yield o("WAWebChatGetExistingBridge").getExisting(e.wid);
                            if (t != null) {
                                t.pin = e.pinned ? e.timestamp : 0;
                                if (e.pinned) {
                                    t.archive = false;
                                }
                            }
                        });
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    })()));
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.createPendingUnpin = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                yield o("WAWebSyncdDb").appendPendingMutationsRows([
                    (yield this.getPinMutation(t, false, e))
                ]);
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.getLocalChatPins = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                return _((yield this.$PinChatSyncImpl$p_1(p.Chat)));
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.getLocalNewsletterPins = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                return _((yield this.$PinChatSyncImpl$p_1(p.Newsletter)));
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.$PinChatSyncImpl$p_1 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = o("WAWebSchemaChat").getChatTable().all().then((e)=>e.filter((e)=>e.pin != null && e.pin > 0).map((e)=>[
                            e.id,
                            r("nullthrows")(e.pin)
                        ]));
                const a = o("WAWebSyncdDb").getPendingMutationsRows([
                    "action"
                ], o("WAWebSyncdConst").Actions.Pin).then((e)=>new Set(r("compactMap")(e, function(e) {
                        if (e.operation === o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.REMOVE) {
                            return e.index;
                        }
                        return null;
                    })));
                const i = o("WAWebSyncdDb").getSyncActionsRows([
                    "action"
                ], [
                    o("WAWebSyncdConst").Actions.Pin
                ]).then((e)=>{
                    const t = e.filter((e)=>e.actionState === o("WAWebSyncdConst").SyncActionState.Orphan);
                    return r("compactMap")(t, function(e) {
                        const n = JSON.parse(e.index);
                        if (n.length < 2) {
                            return null;
                        }
                        const r = n[1];
                        const value = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufSyncAction.pb").SyncActionDataSpec, e.binarySyncData).value;
                        if (value?.pinAction == null || value?.pinAction.pinned !== true) {
                            return null;
                        }
                        return {
                            index: e.index,
                            pin: [
                                r,
                                o("WALongInt").numberOrThrowIfTooLarge(value.timestamp ?? 0)
                            ]
                        };
                    });
                });
                const l = yield (d || (d = n("Promise"))).all([
                    t,
                    i,
                    a
                ]);
                const s = l[0];
                const u = l[1];
                const c = l[2];
                const p = r("compactMap")(u, function(e) {
                    if (c.has(e.index)) {
                        return null;
                    }
                    return e.pin;
                });
                const _ = m(e);
                return [].concat(s, p).filter(([t])=>_(t)).map(([t, n])=>({
                        chatId: o("WAWebWidFactory").createWid(t),
                        timestamp: n
                    }));
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.unpinAllChats = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                return this.$PinChatSyncImpl$p_2((yield this.$PinChatSyncImpl$p_1(p.Chat)));
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.unpinAllNewsletters = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                return this.$PinChatSyncImpl$p_2((yield this.$PinChatSyncImpl$p_1(p.Newsletter)));
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.$PinChatSyncImpl$p_2 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = this;
                const r = o("WATimeUtils").unixTimeMs();
                const a = yield (d || (d = n("Promise"))).all(e.map(({ chatId })=>t.getPinMutation(r, false, chatId)));
                return o("WAWebSyncdCoreApi").lockForSync([
                    "chat"
                ], a, function() {
                    return (d || (d = n("Promise"))).resolve();
                }).then(()=>t.applyUpdates(e.map(({ chatId })=>({
                            wid: chatId,
                            pinned: false,
                            timestamp: r
                        }))));
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.getMutationsForPin = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
                if (!r("gkx")("26258")) {
                    new (o("WAWebMdSyncdDogfoodingFeatureUsageWamEvent")).MdSyncdDogfoodingFeatureUsageWamEvent({
                        mdSyncdDogfoodingFeature: o("WAWebWamEnumMdFeatureCode").MD_FEATURE_CODE.PIN_MUTATION
                    }).commit();
                }
                const a = [
                    (yield this.getPinMutation(e, t, n))
                ];
                if (t) {
                    a.push((yield r("WAWebArchiveChatSync").getArchiveChatMutation(e, false, n)));
                }
                return a;
            });
            function t(t, n, r) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.getPinMutation = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, pinned, n) {
                o("WAWebSyncdGetChat").warnIfPnMutationWithForcedLid(o("WAWebSyncdGetChat").PnMutationCaller.GetPinMutation, n);
                const r = {
                    pinAction: {
                        pinned
                    }
                };
                return o("WAWebSyncdActionUtils").buildPendingMutation({
                    collection: this.collectionName,
                    indexArgs: [
                        (yield o("WAWebSyncdGetChat").getChatJidMutationIndexForChat(n, o("WAWebSyncdConst").Actions.Pin))
                    ],
                    value: r,
                    version: this.getVersion(),
                    operation: o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET,
                    timestamp: e,
                    action: this.getAction()
                });
            });
            function t(t, n, r) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return a;
    })(o("WAWebSyncdAction").ChatSyncdActionBase);
    const g = new f;
    l.PinChatSync = g;
}, 98);