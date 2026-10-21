__d("WAWebArchiveChatSync", [
    "Promise",
    "WALogger",
    "WAWebApiActiveMessageRanges",
    "WAWebApiAddActiveMessageRange",
    "WAWebChatDbUpdatesApi",
    "WAWebMessageRangeUtils",
    "WAWebNewsletterArchiveUtils",
    "WAWebPinChatSync",
    "WAWebProtobufSyncAction.pb",
    "WAWebProtobufsServerSync.pb",
    "WAWebSchemaChat",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdGetChat",
    "WAWebSyncdIndexUtils",
    "WAWebUserPrefsMultiDevice",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
    "encodeProtobuf",
    "nullthrows"
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
    function h(chatWid, t) {
        if (t === o("WAWebMessageRangeUtils").MessageRangeEncloseType.RangesAreEqual || t === o("WAWebMessageRangeUtils").MessageRangeEncloseType.RangeAEnclosesRangeB) {
            return {
                actionState: o("WAWebSyncdConst").SyncActionState.Success
            };
        }
        if (t === o("WAWebMessageRangeUtils").MessageRangeEncloseType.RangeBEnclosesRangeA || t === o("WAWebMessageRangeUtils").MessageRangeEncloseType.RangesNotEnclosing) {
            return {
                actionState: o("WAWebSyncdConst").SyncActionState.Orphan,
                orphanModel: {
                    modelType: o("WAWebSyncdConst").SyncModelType.Chat,
                    modelId: chatWid.toString()
                }
            };
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${t}`);
        })();
    }
    const y = ((t)=>{
        function a(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.chatJidIndex = 1;
            e.collectionName = o("WAWebSyncdConst").CollectionName.RegularLow;
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.getMessageRange = function(t) {
            return t.archiveChatAction?.messageRange;
        };
        a_prototype.getVersion = function() {
            return 3;
        };
        a_prototype.getAction = function() {
            return o("WAWebSyncdConst").Actions.Archive;
        };
        a_prototype.validateSyncActionValue = function(t) {
            const t_archiveChatAction = t.archiveChatAction;
            const archived = t_archiveChatAction?.archived;
            const r = this.getMessageRange(t);
            if (!o("WAWebMessageRangeUtils").validateMessageRange(r, this.collectionName, this.getAction()) || archived == null || r == null) {
                return null;
            }
            return {
                archived,
                messageRange: r
            };
        };
        a_prototype.applyMutations = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const a = this;
                const i = [];
                let l = 0;
                let d = 0;
                const m = yield (g || (g = n("Promise"))).all(t.map((()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                        try {
                            if (e.operation === "set") {
                                const { indexParts, value } = e;
                                const s = indexParts[1];
                                if (!s || !r("WAWebWid").isWid(s)) {
                                    return a.malformedActionIndex();
                                }
                                const u = yield o("WAWebSyncdGetChat").resolveChatForMutationIndex(o("WAWebWidFactory").createWid(s));
                                if (!u.success) {
                                    return {
                                        actionState: o("WAWebSyncdConst").SyncActionState.Orphan,
                                        orphanModel: u.orphanModel
                                    };
                                }
                                const c = u.chat.id;
                                const m = a.validateSyncActionValue(value);
                                if (m == null) {
                                    l++;
                                    return o("WAWebSyncdIndexUtils").malformedActionValue(a.collectionName);
                                }
                                const { archived, messageRange } = m;
                                const f = o("WAWebWidFactory").createWid(c);
                                yield a.$ArchiveChatSync$p_1(f, "before apply");
                                const g = yield a.$ArchiveChatSync$p_2({
                                    archived,
                                    chatWid: f,
                                    incomingRange: messageRange,
                                    syncActionValue: value
                                });
                                if (g.updates) {
                                    i.push(g.updates);
                                    yield a.$ArchiveChatSync$p_1(f, "after push");
                                }
                                return g.syncApplyActionResult;
                            }
                            d++;
                            return {
                                actionState: o("WAWebSyncdConst").SyncActionState.Unsupported
                            };
                        } catch (e) {
                            return {
                                actionState: o("WAWebSyncdConst").SyncActionState.Failed
                            };
                        }
                    });
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                })()));
                if (l > 0) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[syncd][archive-chat]: ",
                        " malformed mutations"
                    ])), l);
                }
                if (d > 0) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[syncd][archive-chat]: ",
                        " REMOVE operations not supported"
                    ])), d);
                }
                if (i.length > 0) {
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[syncd] before archive use case will update chat table"
                    ])));
                    yield o("WAWebChatDbUpdatesApi").setArchive(i);
                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[syncd] after archive use case updated chat table"
                    ])));
                }
                return m;
            });
            function a(e) {
                return t.apply(this, arguments);
            }
            return a;
        })();
        a_prototype.$ArchiveChatSync$p_1 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                try {
                    if (!e.isRegularUser()) {
                        return;
                    }
                    const n = yield o("WAWebSchemaChat").getChatTable().get(e.toString());
                    if (n == null) {
                        o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                            "[syncd][archive-chat]: chat expected to exist ",
                            ". context: ",
                            ""
                        ])), e.toLogString(), t);
                    }
                    if (n?.accountLid == null) {
                        o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                            "[syncd][archive-chat]: chat expected to have accountLid ",
                            ". ",
                            ""
                        ])), e.toLogString(), t);
                    }
                } catch (error) {
                    o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "[syncd][archive-chat]: error validating chat exists ",
                        ""
                    ])), error);
                }
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.$ArchiveChatSync$p_2 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ archived, chatWid, incomingRange, syncActionValue }) {
                yield o("WAWebApiActiveMessageRanges").removeActiveMessageRange(chatWid.toString(), o("WAWebApiActiveMessageRanges").getActiveRangeAction("archive"));
                if (!archived) {
                    return {
                        updates: {
                            id: chatWid.toString(),
                            archive: archived
                        },
                        syncApplyActionResult: {
                            actionState: o("WAWebSyncdConst").SyncActionState.Success
                        }
                    };
                }
                const i = yield o("WAWebMessageRangeUtils").constructMessageRange(chatWid, {
                    forOutgoingMutation: false
                });
                const l = o("WAWebMessageRangeUtils").compareMessageRanges(i, incomingRange);
                const s = o("encodeProtobuf").encodeProtobuf(o("WAWebProtobufSyncAction.pb").SyncActionValueSpec, syncActionValue).readBuffer();
                const u = ()=>o("WAWebApiAddActiveMessageRange").addActiveMessageRange(chatWid.toString(), o("WAWebApiActiveMessageRanges").getActiveRangeAction("archive"), s);
                const c = o("WAWebUserPrefsMultiDevice").getArchiveV2EnabledSetting();
                const d = o("WAWebUserPrefsMultiDevice").getUnarchiveChatsSetting();
                const m = c && !d;
                const p = o("WAWebNewsletterArchiveUtils").shouldKeepChannelArchivedUntilMigration(chatWid) || m;
                switch(l){
                    case o("WAWebMessageRangeUtils").MessageRangeEncloseType.RangesAreEqual:
                    case o("WAWebMessageRangeUtils").MessageRangeEncloseType.RangeBEnclosesRangeA:
                        yield u();
                        return {
                            updates: {
                                id: chatWid.toString(),
                                archive: archived
                            },
                            syncApplyActionResult: h(chatWid, l)
                        };
                    case o("WAWebMessageRangeUtils").MessageRangeEncloseType.RangeAEnclosesRangeB:
                    case o("WAWebMessageRangeUtils").MessageRangeEncloseType.RangesNotEnclosing:
                        if (p) {
                            if (!m) {
                                yield u();
                            }
                            return {
                                updates: {
                                    id: chatWid.toString(),
                                    archive: archived
                                },
                                syncApplyActionResult: h(chatWid, l)
                            };
                        }
                        yield u();
                        return {
                            updates: undefined,
                            syncApplyActionResult: h(chatWid, l)
                        };
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.getArchiveChatMutation = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, archived, n) {
                o("WAWebSyncdGetChat").warnIfPnMutationWithForcedLid(o("WAWebSyncdGetChat").PnMutationCaller.GetArchiveChatMutation, n);
                const r = yield o("WAWebSyncdGetChat").getChatJidMutationIndexForChat(n, o("WAWebSyncdConst").Actions.Archive);
                const a = {
                    archiveChatAction: {
                        archived,
                        messageRange: yield o("WAWebMessageRangeUtils").constructMessageRange(n, {
                            forOutgoingMutation: true,
                            mutationIndexJid: r
                        })
                    }
                };
                return o("WAWebSyncdActionUtils").buildPendingMutation({
                    collection: this.collectionName,
                    indexArgs: [
                        r
                    ],
                    value: a,
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
        a_prototype.getMutationsForArchive = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, r) {
                const a = [
                    this.getArchiveChatMutation(e, t, r)
                ];
                if (t) {
                    a.push(o("WAWebPinChatSync").PinChatSync.getPinMutation(e, false, r));
                }
                return (g || (g = n("Promise"))).all(a);
            });
            function t(t, n, r) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.resolveConflicts = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                const a = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufSyncAction.pb").SyncActionValueSpec, e.binarySyncAction);
                const value = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufSyncAction.pb").SyncActionDataSpec, t.binarySyncData).value;
                const e_timestamp = e.timestamp;
                const t_timestamp = t.timestamp;
                const u = r("nullthrows")(a.archiveChatAction);
                const c = r("nullthrows")(value?.archiveChatAction);
                const d = o("WAWebMessageRangeUtils").compareMessageRanges(r("nullthrows")(c.messageRange), r("nullthrows")(u.messageRange));
                switch(d){
                    case o("WAWebMessageRangeUtils").MessageRangeEncloseType.RangeAEnclosesRangeB:
                        return o("WAWebSyncdConst").ConflictResolutionState.ApplyRemoteAndDropLocal;
                    case o("WAWebMessageRangeUtils").MessageRangeEncloseType.RangeBEnclosesRangeA:
                        return o("WAWebSyncdConst").ConflictResolutionState.SkipRemote;
                    case o("WAWebMessageRangeUtils").MessageRangeEncloseType.RangesAreEqual:
                        if (e_timestamp <= t_timestamp) {
                            return o("WAWebSyncdConst").ConflictResolutionState.ApplyRemoteAndDropLocal;
                        }
                        return o("WAWebSyncdConst").ConflictResolutionState.SkipRemote;
                    case o("WAWebMessageRangeUtils").MessageRangeEncloseType.RangesNotEnclosing:
                        {
                            const g = e_timestamp <= t_timestamp ? c.archived ?? false : u.archived ?? false;
                            const h = o("WAWebMessageRangeUtils").mergeMessageRanges(r("nullthrows")(c.messageRange), r("nullthrows")(u.messageRange));
                            const archiveChatAction = {
                                archived: g,
                                messageRange: h
                            };
                            const C = o("encodeProtobuf").encodeProtobuf(o("WAWebProtobufSyncAction.pb").SyncActionValueSpec, babelHelpers.extends({}, value, {
                                archiveChatAction
                            })).readBuffer();
                            const b = babelHelpers.extends({}, e, {
                                binarySyncAction: C
                            });
                            delete b.id;
                            yield o("WAWebMessageRangeUtils").lockForMessageRangeSync([
                                "chat"
                            ], [
                                b
                            ], n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                                const t = JSON.parse(e.index);
                                const n = o("WAWebWidFactory").createWid(t[1]);
                                o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                                    "[syncd] before update chat table due to conflict"
                                ])));
                                yield o("WAWebApiAddActiveMessageRange").addActiveMessageRange(n.toString(), o("WAWebApiActiveMessageRanges").getActiveRangeAction("archive"), C);
                                const r = yield o("WAWebChatDbUpdatesApi").setArchive([
                                    {
                                        id: n.toString(),
                                        archive: g
                                    }
                                ]);
                                o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                                    "[syncd] after update chat table due to conflict"
                                ])));
                                return r;
                            }));
                            return o("WAWebSyncdConst").ConflictResolutionState.SkipRemoteAndDropLocal;
                        }
                }
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return a;
    })(o("WAWebSyncdAction").ChatMessageRangeSyncdActionBase);
    const C = new y;
    l.default = C;
}, 98);