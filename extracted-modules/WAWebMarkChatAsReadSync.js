__d("WAWebMarkChatAsReadSync", [
    "Promise",
    "WALogger",
    "WAWebApiActiveMessageRanges",
    "WAWebApiAddActiveMessageRange",
    "WAWebBackendApi",
    "WAWebChatUnreadConstants",
    "WAWebMessageRangeUtils",
    "WAWebProtobufSyncAction.pb",
    "WAWebProtobufsServerSync.pb",
    "WAWebSchemaChat",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdGetChat",
    "WAWebSyncdIndexUtils",
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
    function _(chatWid, t) {
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
        a_prototype.getMessageRange = function(t) {
            return t.markChatAsReadAction?.messageRange;
        };
        a_prototype.getVersion = function() {
            return 3;
        };
        a_prototype.getAction = function() {
            return o("WAWebSyncdConst").Actions.MarkChatAsRead;
        };
        a_prototype.$MarkChatAsReadSync$p_1 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                yield o("WAWebBackendApi").frontendSendAndReceive("updateChatReadStatus", {
                    id: e,
                    read: t
                });
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.$MarkChatAsReadSync$p_2 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = yield o("WAWebSchemaChat").getChatTable().get(e.toString(), false);
                return t?.unreadCount === o("WAWebChatUnreadConstants").MARKED_AS_UNREAD;
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.validateSyncActionValue = function({ markChatAsReadAction }) {
            const n = markChatAsReadAction?.read;
            const r = o("WAWebMessageRangeUtils").validateMessageRange(markChatAsReadAction?.messageRange, this.collectionName, this.getAction());
            if (n != null && r != null) {
                return {
                    read: n,
                    messageRange: r
                };
            }
            return null;
        };
        a_prototype.applyMutations = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const a = this;
                let i = 0;
                let l = 0;
                const u = yield (p || (p = n("Promise"))).all(t.map((()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                        try {
                            if (e.operation === "set") {
                                const { indexParts, value } = e;
                                const s = indexParts[1];
                                if (!s) {
                                    return a.malformedActionIndex();
                                }
                                const u = a.validateSyncActionValue(value);
                                if (u == null) {
                                    i++;
                                    return o("WAWebSyncdIndexUtils").malformedActionValue(a.collectionName);
                                }
                                const { messageRange, read } = u;
                                if (!r("WAWebWid").isWid(s)) {
                                    return a.malformedActionIndex();
                                }
                                const m = yield o("WAWebSyncdGetChat").resolveChatForMutationIndex(o("WAWebWidFactory").createWid(s));
                                if (m.success) {
                                    return a.$MarkChatAsReadSync$p_3({
                                        chatWid: o("WAWebWidFactory").createWid(m.chat.id),
                                        incomingRange: messageRange,
                                        read,
                                        syncActionValue: value
                                    });
                                }
                                return {
                                    actionState: o("WAWebSyncdConst").SyncActionState.Orphan,
                                    orphanModel: m.orphanModel
                                };
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
                        "[syncd][mark-chat-as-read]: ",
                        " malformed mutations"
                    ])), i);
                }
                if (l > 0) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[syncd][mark-chat-as-read]: ",
                        " operations not supported"
                    ])), l);
                }
                return u;
            });
            function a(e) {
                return t.apply(this, arguments);
            }
            return a;
        })();
        a_prototype.$MarkChatAsReadSync$p_3 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chatWid, incomingRange, read, syncActionValue }) {
                yield o("WAWebApiActiveMessageRanges").removeActiveMessageRange(chatWid.toString(), o("WAWebApiActiveMessageRanges").getActiveRangeAction("markChatAsRead"));
                const l = yield o("WAWebMessageRangeUtils").constructMessageRange(chatWid, {
                    forOutgoingMutation: false
                });
                const s = o("WAWebMessageRangeUtils").compareMessageRanges(l, incomingRange);
                const d = o("encodeProtobuf").encodeProtobuf(o("WAWebProtobufSyncAction.pb").SyncActionValueSpec, syncActionValue).readBuffer();
                const m = ()=>o("WAWebApiAddActiveMessageRange").addActiveMessageRange(chatWid.toString(), o("WAWebApiActiveMessageRanges").getActiveRangeAction("markChatAsRead"), d);
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[syncd] before use case will update chat table"
                ])));
                switch(s){
                    case o("WAWebMessageRangeUtils").MessageRangeEncloseType.RangesAreEqual:
                    case o("WAWebMessageRangeUtils").MessageRangeEncloseType.RangeBEnclosesRangeA:
                        yield m();
                        yield this.$MarkChatAsReadSync$p_1(chatWid, read);
                        return (p || (p = n("Promise"))).resolve(_(chatWid, s));
                    case o("WAWebMessageRangeUtils").MessageRangeEncloseType.RangesNotEnclosing:
                    case o("WAWebMessageRangeUtils").MessageRangeEncloseType.RangeAEnclosesRangeB:
                        if (read && (yield this.$MarkChatAsReadSync$p_2(chatWid))) {
                            yield this.$MarkChatAsReadSync$p_1(chatWid, read);
                        }
                        return (p || (p = n("Promise"))).resolve(_(chatWid, s));
                }
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[syncd] after use case updated chat table"
                ])));
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.getMarkChatAsReadMutation = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
                const r = yield o("WAWebSyncdGetChat").getChatJidMutationIndexForChat(n, o("WAWebSyncdConst").Actions.MarkChatAsRead);
                const a = {
                    markChatAsReadAction: {
                        read: t,
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
        a_prototype.resolveConflicts = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                const a = this;
                const i = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufSyncAction.pb").SyncActionValueSpec, e.binarySyncAction);
                const value = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufSyncAction.pb").SyncActionDataSpec, t.binarySyncData).value;
                const e_timestamp = e.timestamp;
                const t_timestamp = t.timestamp;
                const c = r("nullthrows")(i.markChatAsReadAction);
                const p = r("nullthrows")(value?.markChatAsReadAction);
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
                            const h = e_timestamp <= t_timestamp ? p.read ?? false : c.read ?? false;
                            const y = o("WAWebMessageRangeUtils").mergeMessageRanges(r("nullthrows")(p.messageRange), r("nullthrows")(c.messageRange));
                            const markChatAsReadAction = {
                                read: h,
                                messageRange: y
                            };
                            const b = o("encodeProtobuf").encodeProtobuf(o("WAWebProtobufSyncAction.pb").SyncActionValueSpec, babelHelpers.extends({}, value, {
                                markChatAsReadAction
                            })).readBuffer();
                            const v = babelHelpers.extends({}, e, {
                                binarySyncAction: b
                            });
                            delete v.id;
                            yield o("WAWebMessageRangeUtils").lockForMessageRangeSync([
                                "chat"
                            ], [
                                v
                            ], n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                                const t = JSON.parse(e.index);
                                const n = o("WAWebWidFactory").createWid(t[1]);
                                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                                    "[syncd] before update chat table due to conflict"
                                ])));
                                yield o("WAWebApiAddActiveMessageRange").addActiveMessageRange(n.toString(), o("WAWebApiActiveMessageRanges").getActiveRangeAction("markChatAsRead"), b);
                                const r = yield a.$MarkChatAsReadSync$p_1(n, h);
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
        return a;
    })(o("WAWebSyncdAction").ChatMessageRangeSyncdActionBase);
    const g = new f;
    l.default = g;
}, 98);