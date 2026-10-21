__d("WAWebClearChatSync", [
    "Promise",
    "WALogger",
    "WALongInt",
    "WAWebAndroidUnsupportedActionsSync",
    "WAWebApiActiveMessageRanges",
    "WAWebApiAddActiveMessageRange",
    "WAWebBackendApi",
    "WAWebChatCollection",
    "WAWebChatConstants",
    "WAWebDBMessageRange",
    "WAWebDBQueryAndRemoveMessageHistory",
    "WAWebDBReportingTokenUtils",
    "WAWebLimitSharingModelUtils",
    "WAWebMdSyncdDogfoodingFeatureUsageWamEvent",
    "WAWebMessageRangeUtils",
    "WAWebMsgKey",
    "WAWebProtobufSyncAction.pb",
    "WAWebProtobufsServerSync.pb",
    "WAWebRequestDeleteAddOns",
    "WAWebSchemaChat",
    "WAWebStatusCollection",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdDb",
    "WAWebSyncdGetChat",
    "WAWebSyncdIndexUtils",
    "WAWebSyncdMetricFatalError",
    "WAWebThreadMetadataJob",
    "WAWebWamEnumMdFeatureCode",
    "WAWebWid",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "countWhere",
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
            return t.clearChatAction?.messageRange;
        };
        a_prototype.getVersion = function() {
            return 6;
        };
        a_prototype.getAction = function() {
            return o("WAWebSyncdConst").Actions.ClearChat;
        };
        a_prototype.$ClearChatSync$p_1 = function(t, n, remote, i) {
            const e = new Set;
            t.forEach((t)=>{
                if (t.actionName === o("WAWebSyncdConst").Actions.Star && t.timestamp > n) {
                    const l = o("WAWebSyncdIndexUtils").getMsgKeyFromStarActionIndex(t.index);
                    e.add(l.toString());
                    if (i != null && l.remote.equals(i)) {
                        e.add(new (r("WAWebMsgKey"))({
                            fromMe: l.fromMe,
                            id: l.id,
                            remote
                        }).toString());
                    }
                }
            });
            return e;
        };
        a_prototype.applyMutations = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, a) {
                const i = this;
                r("WAWebAndroidUnsupportedActionsSync").updatePrimaryAllowsAllMutationsFlag("other mutation");
                const a_allSupportedSetMutations = a.allSupportedSetMutations;
                let d = 0;
                let m = 0;
                const _ = yield (p || (p = n("Promise"))).all(t.map((()=>{
                    const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                        try {
                            if (t.operation === "set") {
                                const { indexParts, value } = t;
                                const s = indexParts[1];
                                const u = indexParts[2];
                                const c = indexParts[3];
                                if (!s || !u || !c || !r("WAWebWid").isWid(s)) {
                                    return i.malformedActionIndex();
                                }
                                const p = o("WAWebMessageRangeUtils").validateMessageRange(i.getMessageRange(value), i.collectionName, i.getAction());
                                if (p == null) {
                                    d++;
                                    o("WAWebSyncdMetricFatalError").reportSyncdFatalError(o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.MALFORMED_MUTATION_CLEAR_CHAT, {
                                        collection: i.collectionName
                                    });
                                    return o("WAWebSyncdIndexUtils").malformedActionValue(i.collectionName);
                                }
                                const _ = yield o("WAWebSyncdGetChat").resolveChatForMutationIndex(o("WAWebWidFactory").createWid(s));
                                if (!_.success) {
                                    return {
                                        actionState: o("WAWebSyncdConst").SyncActionState.Orphan,
                                        orphanModel: _.orphanModel
                                    };
                                }
                                const f = o("WAWebWidFactory").createWid(_.chat.id);
                                const incomingRange = o("WAWebMessageRangeUtils").replaceMessageRangeRemoteJid(f, p);
                                const messagesToBeSkippedFromClear = i.$ClearChatSync$p_1(a_allSupportedSetMutations, t.timestamp, f, _.chat.accountLid == null ? null : o("WAWebWidFactory").createWid(_.chat.accountLid));
                                return i.$ClearChatSync$p_2({
                                    chatWid: o("WAWebWidFactory").createWid(_.chat.id),
                                    deleteMediaFiles: c === "0",
                                    deleteStarredMessages: u === "1",
                                    incomingRange,
                                    messagesToBeSkippedFromClear,
                                    syncActionValue: value
                                });
                            }
                            m++;
                            return {
                                actionState: o("WAWebSyncdConst").SyncActionState.Unsupported
                            };
                        } catch (error) {
                            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                "[syncd][clear-chat]: failed to apply mutation: ",
                                ""
                            ])), error);
                            o("WAWebSyncdMetricFatalError").reportSyncdFatalError(o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.FAILED_MUTATION_CLEAR_CHAT, {
                                collection: i.collectionName
                            });
                            return {
                                actionState: o("WAWebSyncdConst").SyncActionState.Failed
                            };
                        }
                    });
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                })()));
                const f = r("countWhere")(_, function(e) {
                    return e.actionState === o("WAWebSyncdConst").SyncActionState.Success;
                });
                if (f > 0) {
                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[syncd][clear-chat]: updated chat table for ",
                        " mutations"
                    ])), f);
                }
                if (d > 0) {
                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[syncd][clear-chat]: ",
                        " malformed mutations"
                    ])), d);
                }
                if (m > 0) {
                    o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[syncd][clear-chat]: ",
                        " REMOVE operations not supported"
                    ])), m);
                }
                return _;
            });
            function a(e, n) {
                return t.apply(this, arguments);
            }
            return a;
        })();
        a_prototype.clearChat = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, skipMessages) {
                const a = yield o("WAWebDBQueryAndRemoveMessageHistory").queryAndRemoveMessagesInMessageRange(e, t, {
                    skipStarred: !n,
                    skipMessages,
                    deleteAutomatedGreetingMessages: true,
                    skipScheduledMessages: true
                });
                yield o("WAWebThreadMetadataJob").deleteAllThreadsForChat(o("WAWebWidToJid").widToChatJid(e));
                yield o("WAWebSchemaChat").getChatTable().merge(e.toString(), {
                    createdLocally: false,
                    endOfHistoryTransferType: o("WAWebChatConstants").ConversationEndOfHistoryTransferModelPropType.COMPLETE_AND_NO_MORE_MESSAGE_REMAIN_ON_PRIMARY
                });
                if (a.length > 0) {
                    o("WAWebDBReportingTokenUtils").handleDeleteReportingInfos(a, {
                        removeWholeRow: true
                    });
                    o("WAWebBackendApi").frontendFireAndForget("deleteModelsForLastAddOnPreview", {
                        messagesIds: a
                    });
                    yield o("WAWebRequestDeleteAddOns").requestDeleteAddOns(e.toString(), a);
                }
                const i = o("WAWebChatCollection").ChatCollection.get(e);
                if (i) {
                    i.createdLocally = false;
                    i.endOfHistoryTransferType = o("WAWebChatConstants").ConversationEndOfHistoryTransferModelPropType.COMPLETE_AND_NO_MORE_MESSAGE_REMAIN_ON_PRIMARY;
                    i.deleteMessages(a);
                    o("WAWebLimitSharingModelUtils").createAcp2MsgOnChatClear(e);
                    o("WAWebBackendApi").frontendFireAndForget("deleteAiThreadsForChat", {
                        chatId: e.toString()
                    });
                }
                this.maybeClearGroupStatus(e, t);
            });
            function t(t, n, r, o) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.$ClearChatSync$p_2 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chatWid, deleteMediaFiles, deleteStarredMessages, incomingRange, messagesToBeSkippedFromClear, syncActionValue }) {
                const s = o("encodeProtobuf").encodeProtobuf(o("WAWebProtobufSyncAction.pb").SyncActionValueSpec, syncActionValue).readBuffer();
                yield o("WAWebApiAddActiveMessageRange").addActiveMessageRange(chatWid.toString(), o("WAWebApiActiveMessageRanges").getActiveRangeAction("clearChat", {
                    deleteMedia: deleteMediaFiles,
                    deleteStarred: deleteStarredMessages
                }), s);
                yield this.clearChat(chatWid, incomingRange, deleteStarredMessages, messagesToBeSkippedFromClear);
                return {
                    actionState: o("WAWebSyncdConst").SyncActionState.Success
                };
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.getClearChatMutation = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, a, i = false) {
                o("WAWebSyncdGetChat").warnIfPnMutationWithForcedLid(o("WAWebSyncdGetChat").PnMutationCaller.GetClearChatMutation, t);
                if (!r("gkx")("26258")) {
                    new (o("WAWebMdSyncdDogfoodingFeatureUsageWamEvent")).MdSyncdDogfoodingFeatureUsageWamEvent({
                        mdSyncdDogfoodingFeature: n ? o("WAWebWamEnumMdFeatureCode").MD_FEATURE_CODE.CLEAR_CHAT_REMOVE_STARRED_MUTATION : o("WAWebWamEnumMdFeatureCode").MD_FEATURE_CODE.CLEAR_CHAT_KEEP_STARRED_MUTATION
                    }).commit();
                }
                const l = i ? t.toString() : yield o("WAWebSyncdGetChat").getChatJidMutationIndexForChat(t, o("WAWebSyncdConst").Actions.ClearChat);
                let s = yield o("WAWebMessageRangeUtils").constructForwardMovingMessageRange(t, l);
                const indexArgs = this.$ClearChatSync$p_3(o("WAWebWidFactory").createWid(l), n, a || false);
                const c = yield o("WAWebSyncdDb").getPendingMutationsRowsByIndex([
                    "index"
                ], o("WAWebSyncdActionUtils").buildIndex(this.getAction(), indexArgs));
                if (c.length) {
                    const m = c.reduce((acc, item)=>{
                        if (acc.timestamp > item.timestamp) {
                            return acc;
                        }
                        return item;
                    });
                    const p = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufSyncAction.pb").SyncActionValueSpec, m.binarySyncAction);
                    const _ = p.clearChatAction?.messageRange;
                    if (_) {
                        s = o("WAWebMessageRangeUtils").mergeMessageRanges(s, _);
                        o("WAWebDBMessageRange").logMaybeMillisecondTimestamp(s.lastMessageTimestamp, "pendingMutationRange");
                    }
                }
                const f = {
                    clearChatAction: {
                        messageRange: s
                    }
                };
                return o("WAWebSyncdActionUtils").buildPendingMutation({
                    collection: this.collectionName,
                    indexArgs,
                    value: f,
                    version: this.getVersion(),
                    operation: o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET,
                    timestamp: e,
                    action: this.getAction()
                });
            });
            function t(t, n, r, o, a) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.$ClearChatSync$p_3 = function(t, n, r) {
            return [
                t.toJid(),
                n ? "1" : "0",
                r ? "1" : "0"
            ];
        };
        a_prototype.resolveConflicts = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                const a = this;
                const i = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufSyncAction.pb").SyncActionValueSpec, e.binarySyncAction);
                const value = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufSyncAction.pb").SyncActionDataSpec, t.binarySyncData).value;
                const e_timestamp = e.timestamp;
                const t_timestamp = t.timestamp;
                const c = r("nullthrows")(i.clearChatAction);
                const p = r("nullthrows")(value?.clearChatAction);
                const _ = o("WAWebMessageRangeUtils").compareMessageRanges(r("nullthrows")(p.messageRange), r("nullthrows")(c.messageRange));
                e: {
                    if (_ === o("WAWebMessageRangeUtils").MessageRangeEncloseType.RangeAEnclosesRangeB) {
                        return o("WAWebSyncdConst").ConflictResolutionState.ApplyRemoteAndDropLocal;
                    }
                    if (_ === o("WAWebMessageRangeUtils").MessageRangeEncloseType.RangeBEnclosesRangeA) {
                        return o("WAWebSyncdConst").ConflictResolutionState.SkipRemote;
                    }
                    if (_ === o("WAWebMessageRangeUtils").MessageRangeEncloseType.RangesAreEqual && e_timestamp <= t_timestamp) {
                        return o("WAWebSyncdConst").ConflictResolutionState.ApplyRemoteAndDropLocal;
                    }
                    if (_ === o("WAWebMessageRangeUtils").MessageRangeEncloseType.RangesAreEqual) {
                        return o("WAWebSyncdConst").ConflictResolutionState.SkipRemote;
                    }
                    if (_ === o("WAWebMessageRangeUtils").MessageRangeEncloseType.RangesNotEnclosing) {
                        const f = o("WAWebMessageRangeUtils").mergeMessageRanges(r("nullthrows")(p.messageRange), r("nullthrows")(c.messageRange));
                        const clearChatAction = {
                            messageRange: f
                        };
                        const binarySyncAction = o("encodeProtobuf").encodeProtobuf(o("WAWebProtobufSyncAction.pb").SyncActionValueSpec, babelHelpers.extends({}, value, {
                            clearChatAction
                        })).readBuffer();
                        const y = babelHelpers.extends({}, e, {
                            binarySyncAction
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
                            const deleteStarred = t[2] === "1";
                            const i = t[3] === "1";
                            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                                "[syncd] before update chat table due to conflict"
                            ])));
                            yield o("WAWebApiAddActiveMessageRange").addActiveMessageRange(n.toString(), o("WAWebApiActiveMessageRanges").getActiveRangeAction("clearChat", {
                                deleteStarred,
                                deleteMedia: i
                            }), binarySyncAction);
                            const l = a.clearChat(n, f, deleteStarred);
                            o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                                "[syncd] after update chat table due to conflict"
                            ])));
                            return l;
                        }));
                        return o("WAWebSyncdConst").ConflictResolutionState.SkipRemoteAndDropLocal;
                        break e;
                    }
                    throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${_}`);
                }
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.maybeClearGroupStatus = function(t, n) {
            if (t.isGroup()) {
                const r = o("WAWebStatusCollection").StatusCollection.get(t)?.getAllMsgs();
                const a = r?.filter(function(e) {
                    return n.lastMessageTimestamp == null || e.t < o("WALongInt").numberOrThrowIfTooLarge(n.lastMessageTimestamp);
                });
                if (a && a?.length > 0) {
                    if (a != null) {
                        a.forEach((e)=>e.delete());
                    }
                    if (a.length === r?.length) {
                        o("WAWebStatusCollection").StatusCollection.remove(t);
                    }
                }
            }
        };
        return a;
    })(o("WAWebSyncdAction").ChatMessageRangeSyncdActionBase);
    const f = new _;
    l.default = f;
}, 98);