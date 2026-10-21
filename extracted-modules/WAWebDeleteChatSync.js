__d("WAWebDeleteChatSync", [
    "Promise",
    "WALogger",
    "WAWebAndroidUnsupportedActionsSync",
    "WAWebApiActiveMessageRanges",
    "WAWebApiAddActiveMessageRange",
    "WAWebBackendApi",
    "WAWebBizCoexUtils",
    "WAWebChatDeleteBridge",
    "WAWebDBMessageRange",
    "WAWebDBQueryAndRemoveMessageHistory",
    "WAWebDBReportingTokenUtils",
    "WAWebMdSyncdDogfoodingFeatureUsageWamEvent",
    "WAWebMessageRangeUtils",
    "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
    "WAWebProtobufSyncAction.pb",
    "WAWebProtobufsServerSync.pb",
    "WAWebRequestDeleteAddOns",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdDb",
    "WAWebSyncdGetChat",
    "WAWebSyncdIndexUtils",
    "WAWebWamEnumMdFeatureCode",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
    "encodeProtobuf",
    "gkx",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    const _ = ((t)=>{
        function a(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.collectionName = o("WAWebSyncdConst").CollectionName.RegularHigh;
            e.chatJidIndex = 1;
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.getMessageRange = function(t) {
            return t.deleteChatAction?.messageRange;
        };
        a_prototype.getVersion = function() {
            return 6;
        };
        a_prototype.getAction = function() {
            return o("WAWebSyncdConst").Actions.DeleteChat;
        };
        a_prototype.applyMutations = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const a = this;
                r("WAWebAndroidUnsupportedActionsSync").updatePrimaryAllowsAllMutationsFlag("other mutation");
                let i = 0;
                let l = 0;
                const u = yield (p || (p = n("Promise"))).all(t.map((()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                        try {
                            if (e.operation === "set") {
                                const { indexParts, value } = e;
                                const s = indexParts[1];
                                const u = indexParts[2];
                                if (!s || !u || !r("WAWebWid").isWid(s)) {
                                    return a.malformedActionIndex();
                                }
                                const c = o("WAWebMessageRangeUtils").validateMessageRange(a.getMessageRange(value), a.collectionName, a.getAction());
                                if (c == null) {
                                    i++;
                                    return o("WAWebSyncdIndexUtils").malformedActionValue(a.collectionName);
                                }
                                const d = yield o("WAWebSyncdGetChat").resolveChatForMutationIndex(o("WAWebWidFactory").createWid(s));
                                if (!d.success) {
                                    return {
                                        actionState: o("WAWebSyncdConst").SyncActionState.Orphan,
                                        orphanModel: d.orphanModel
                                    };
                                }
                                const m = o("WAWebWidFactory").createWid(d.chat.id);
                                const incomingRange = o("WAWebMessageRangeUtils").replaceMessageRangeRemoteJid(m, c);
                                return a.$DeleteChatSync$p_1({
                                    chatWid: m,
                                    deleteMediaFiles: u === "0",
                                    incomingRange,
                                    syncActionValue: value
                                });
                            }
                            l++;
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
                if (i > 0) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[syncd][delete-chat]: ",
                        " malformed mutations"
                    ])), i);
                }
                if (l > 0) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[syncd][delete-chat]: ",
                        " REMOVE operations not supported"
                    ])), l);
                }
                return u;
            });
            function a(e) {
                return t.apply(this, arguments);
            }
            return a;
        })();
        a_prototype.deleteChat = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                o("WAWebBizCoexUtils").deleteChatFromFallbackHostedAdvSystemMsgOnPlaceholderCache(e);
                o("WAWebBizCoexUtils").clearDedupInitialHostedSystemMsgCache();
                if (t) {
                    const n = yield o("WAWebDBQueryAndRemoveMessageHistory").queryAndRemoveMessagesInMessageRange(e, t, {
                        forceDeleteAllMessagesExceptInitialEncryption: true
                    });
                    if (n.length > 0) {
                        o("WAWebDBReportingTokenUtils").handleDeleteReportingInfos(n, {
                            removeWholeRow: true
                        });
                        o("WAWebBackendApi").frontendFireAndForget("deleteModelsForLastAddOnPreview", {
                            messagesIds: n
                        });
                        yield o("WAWebRequestDeleteAddOns").requestDeleteAddOns(e.toString(), n);
                        yield o("WAWebBackendApi").frontendSendAndReceive("chatDeleteMessages", {
                            chatId: e.toString(),
                            messageIds: n
                        });
                    }
                } else {
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[syncd] before use case will update chat table ",
                        ""
                    ])), e.toLogString());
                    yield o("WAWebChatDeleteBridge").deleteFromStorage(e);
                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[syncd] after use case updated chat table ",
                        ""
                    ])), e.toLogString());
                    o("WAWebBackendApi").frontendFireAndForget("deleteAiThreadsForChat", {
                        chatId: e.toString()
                    });
                    yield o("WAWebBackendApi").frontendSendAndReceive("chatDelete", {
                        chatId: e.toString()
                    });
                }
                yield o("WAWebNonMessageDataRequestHistorySyncOnDemandUtils").deleteChatFromInitialSyncBoundary(e);
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.$DeleteChatSync$p_1 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chatWid, deleteMediaFiles, incomingRange, syncActionValue }) {
                const i = o("encodeProtobuf").encodeProtobuf(o("WAWebProtobufSyncAction.pb").SyncActionValueSpec, syncActionValue).readBuffer();
                yield o("WAWebApiAddActiveMessageRange").addActiveMessageRange(chatWid.toString(), o("WAWebApiActiveMessageRanges").getActiveRangeAction("deleteChat", {
                    deleteMedia: deleteMediaFiles
                }), i);
                const l = yield o("WAWebMessageRangeUtils").constructMessageRange(chatWid, {
                    forOutgoingMutation: false
                });
                const s = o("WAWebMessageRangeUtils").compareMessageRanges(l, incomingRange);
                e: {
                    if (s === o("WAWebMessageRangeUtils").MessageRangeEncloseType.RangeAEnclosesRangeB || s === o("WAWebMessageRangeUtils").MessageRangeEncloseType.RangesNotEnclosing) {
                        yield this.deleteChat(chatWid, incomingRange);
                        break e;
                    }
                    if (s === o("WAWebMessageRangeUtils").MessageRangeEncloseType.RangeBEnclosesRangeA || s === o("WAWebMessageRangeUtils").MessageRangeEncloseType.RangesAreEqual) {
                        yield this.deleteChat(chatWid);
                        break e;
                    }
                    throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${s}`);
                }
                return {
                    actionState: o("WAWebSyncdConst").SyncActionState.Success
                };
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.getDeleteChatMutation = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
                if (!r("gkx")("26258")) {
                    new (o("WAWebMdSyncdDogfoodingFeatureUsageWamEvent")).MdSyncdDogfoodingFeatureUsageWamEvent({
                        mdSyncdDogfoodingFeature: o("WAWebWamEnumMdFeatureCode").MD_FEATURE_CODE.DELETE_MUTATION
                    }).commit();
                }
                const a = yield o("WAWebSyncdGetChat").getChatJidMutationIndexForChat(t, o("WAWebSyncdConst").Actions.DeleteChat);
                const indexWid = o("WAWebWidFactory").createWid(a);
                let mergedRange = yield o("WAWebMessageRangeUtils").constructForwardMovingMessageRange(t, a);
                const s = o("WAWebSyncdActionUtils").buildIndex(this.getAction(), this.buildDeleteChatIndexArgs(o("WAWebWidFactory").createWid(a), n || false));
                const u = yield o("WAWebSyncdDb").getPendingMutationsRowsByIndex([
                    "index"
                ], s);
                if (u.length) {
                    const d = u.reduce((acc, item)=>{
                        if (acc.timestamp > item.timestamp) {
                            return acc;
                        }
                        return item;
                    });
                    const m = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufSyncAction.pb").SyncActionValueSpec, d.binarySyncAction);
                    const p = m.deleteChatAction?.messageRange;
                    if (p) {
                        mergedRange = o("WAWebMessageRangeUtils").mergeMessageRanges(mergedRange, p);
                        o("WAWebDBMessageRange").logMaybeMillisecondTimestamp(mergedRange.lastMessageTimestamp, "pendingMutationRange");
                    }
                }
                return this.buildDeleteChatMutation({
                    timestamp: e,
                    indexWid,
                    mergedRange,
                    deleteMediaFiles: n || false
                });
            });
            function t(t, n, r) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.resolveConflicts = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                const a = this;
                const i = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufSyncAction.pb").SyncActionValueSpec, e.binarySyncAction);
                const value = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufSyncAction.pb").SyncActionDataSpec, t.binarySyncData).value;
                const e_timestamp = e.timestamp;
                const t_timestamp = t.timestamp;
                const c = r("nullthrows")(i.deleteChatAction);
                const p = r("nullthrows")(value?.deleteChatAction);
                const _ = o("WAWebMessageRangeUtils").compareMessageRanges(r("nullthrows")(p.messageRange), r("nullthrows")(c.messageRange));
                switch(_){
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
                            const f = o("WAWebMessageRangeUtils").mergeMessageRanges(r("nullthrows")(p.messageRange), r("nullthrows")(c.messageRange));
                            const deleteChatAction = {
                                messageRange: f
                            };
                            const h = o("encodeProtobuf").encodeProtobuf(o("WAWebProtobufSyncAction.pb").SyncActionValueSpec, babelHelpers.extends({}, value, {
                                deleteChatAction
                            })).readBuffer();
                            const y = babelHelpers.extends({}, e, {
                                binarySyncAction: h
                            });
                            delete y.id;
                            yield o("WAWebMessageRangeUtils").lockForMessageRangeSync([
                                "message-association",
                                "chat",
                                "reporting-info"
                            ], [
                                y
                            ], n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                                const t = JSON.parse(e.index);
                                const n = o("WAWebWidFactory").createWid(t[1]);
                                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                                    "[syncd] before update chat table due to conflict"
                                ])));
                                yield o("WAWebApiAddActiveMessageRange").addActiveMessageRange(n.toString(), o("WAWebApiActiveMessageRanges").getActiveRangeAction("deleteChat", {
                                    deleteMedia: t[2] === "1"
                                }), h);
                                const r = yield a.deleteChat(n, f);
                                o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
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
        a_prototype.buildDeleteChatMutation = function({ deleteMediaFiles, indexWid, mergedRange, timestamp }) {
            const i = {
                deleteChatAction: {
                    messageRange: mergedRange
                }
            };
            return o("WAWebSyncdActionUtils").buildPendingMutation({
                collection: this.collectionName,
                indexArgs: this.buildDeleteChatIndexArgs(indexWid, deleteMediaFiles),
                value: i,
                version: this.getVersion(),
                operation: o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET,
                timestamp,
                action: this.getAction()
            });
        };
        a_prototype.buildDeleteChatIndexArgs = function(t, n) {
            return [
                t.toJid(),
                n ? "1" : "0"
            ];
        };
        return a;
    })(o("WAWebSyncdAction").ChatMessageRangeSyncdActionBase);
    const f = new _;
    l.default = f;
}, 98);