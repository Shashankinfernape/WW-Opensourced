__d("WAWebDBProcessMessage", [
    "Promise",
    "WALogger",
    "WAWeb-dexie",
    "WAWebAssociationProcessor",
    "WAWebAssociationProcessorConstants",
    "WAWebCommonMsgUtils",
    "WAWebDBDeleteAssociatedMsgsByMsgKey",
    "WAWebDBMessageBulkHelper",
    "WAWebDBMessageSerialization",
    "WAWebDBStoreMessage",
    "WAWebDbEncryptionKey",
    "WAWebHandlePlaceholderWam",
    "WAWebLinkify",
    "WAWebModelStorageUtils",
    "WAWebMsgStoreExtensions",
    "WAWebNoop",
    "WAWebSchemaMessage",
    "WAWebSyncGatingUtils",
    "WAWebViewMode.flow",
    "asyncToGeneratorRuntime",
    "cr:375",
    "err"
], function(t, n, r, o, a, i, l) {
    let s;
    let u;
    let c;
    let d;
    let m;
    const p = n("cr:375") ?? {};
    const p_ftsLightClient = p.ftsLightClient;
    const f = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.name = "NoMessageToUpdateError";
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(babelHelpers.wrapNativeSuper(Error));
    const g = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.name = "DuplicateMessageError";
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(babelHelpers.wrapNativeSuper(Error));
    const h = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.name = "PreviousMsgNotUpdatableError";
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(babelHelpers.wrapNativeSuper(Error));
    function y(e) {
        if (!(e.length > 0 && e.every((e)=>o("WAWebCommonMsgUtils").isCallLogMsg(e.type)) || p_ftsLightClient == null)) {
            p_ftsLightClient.index().catch(r("WAWebNoop"));
        }
    }
    function C(e, t, n) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, a = false) {
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "storeMessages: store ",
                ", for chat ",
                ", isHistorySync: ",
                ""
            ])), e.length, t.toLogString(), a);
            o("WAWebDBMessageBulkHelper").logMissingGroupParticipantLids(e, a);
            o("WAWebCommonMsgUtils").logUndefinedMessage(e);
            yield o("WAWebDbEncryptionKey").DbEncKeyStore.waitForFinalDbMsgEncKey();
            const i = a ? e : yield o("WAWebMsgStoreExtensions").prepareNewMsgsForStore(e);
            return (m || (m = n("Promise"))).resolve(o("WAWebDBStoreMessage").storeMessageInTransaction(i, t, a)).then(()=>{
                y(i);
            }).catch((e)=>{
                throw e instanceof r("WAWeb-dexie").BulkError || e instanceof r("WAWeb-dexie").ConstraintError ? new g : (o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "Error storing messages"
                ]))), e);
            });
        });
        return b.apply(this, arguments);
    }
    function v(e, t) {
        const a = t ?? e[0]?.id.remote;
        if (a) {
            const i = e.map((e)=>{
                const t = o("WAWebDBMessageSerialization").dbRowFromMessage(e);
                return o("WAWebDBStoreMessage").addMsgMetadataToMsgRow({
                    msg: t,
                    chatId: a.toString(),
                    hasLink: o("WAWebLinkify").hasHttpLink(e),
                    pendingReadReceipt: false
                });
            });
            return (m || (m = n("Promise"))).resolve(o("WAWebSchemaMessage").getMessageTable().bulkCreateOrMerge(i)).then(()=>{
                y(e);
            }).catch((e)=>{
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Error storing messages"
                ])));
                throw e;
            });
        }
        return (m || (m = n("Promise"))).resolve();
    }
    function S(e) {
        if (o("WAWebCommonMsgUtils").isPlaceholderMsg(e.type)) {
            return (m || (m = n("Promise"))).resolve(e);
        }
        return o("WAWebModelStorageUtils").getStorage().lock([
            "message"
        ], (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*([n]) {
                const a = yield n.get(e.id.toString());
                if (!a) {
                    throw new f(`[messaging] updateMessage: msgId::${e.id.toString()}, Failed to find previous message row in message table`);
                }
                if (!o("WAWebCommonMsgUtils").isPlaceholderMsg(a.type) && !o("WAWebCommonMsgUtils").isFutureproofMsg(a.type) && !o("WAWebCommonMsgUtils").isCallLogMsg(a.type)) {
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "updateMessage: msgId::",
                        ", prev row not placeholder/futureproof"
                    ])), e.id.toString()).tags("messaging");
                    throw new h;
                }
                const e_from = e.from;
                const l = babelHelpers.extends({}, e);
                if (a.t != null) {
                    l.t = a.t;
                }
                if (a.ack > e.ack) {
                    l.ack = a.ack;
                }
                if (a.serverStoreTimeMicros != null) {
                    l.serverStoreTimeMicros = a.serverStoreTimeMicros;
                }
                const s = o("WAWebDBStoreMessage").addMsgMetadataToMsgRow({
                    msg: o("WAWebDBMessageSerialization").dbRowFromMessage(l),
                    chatId: e_from.toString(),
                    hasLink: o("WAWebLinkify").hasHttpLink(l),
                    rowId: undefined,
                    inChatMsgId: undefined,
                    pendingReadReceipt: a.pendingReadReceipt
                });
                s.rowId = a.rowId;
                s.internalId = a.internalId;
                if (s.rowId == null || s.internalId == null) {
                    throw r("err")(`[messaging] updateMessage: msgId::${e.id.toString()}, missing rowId or internalId`);
                }
                yield n.createOrReplace(s);
                if (o("WAWebCommonMsgUtils").isPlaceholderMsg(a.type)) {
                    o("WAWebHandlePlaceholderWam").postPlaceholderActivityPopulateEvent([
                        o("WAWebDBMessageSerialization").messageFromDbRow(a)
                    ]);
                }
                y([
                    e
                ]);
                return l;
            });
            return function(e) {
                return t.apply(this, arguments);
            };
        })());
    }
    function R(e) {
        return o("WAWebSchemaMessage").getMessageTable().bulkGet(e).then((()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = [];
                const r = e.filter(Boolean).map((e)=>{
                    let n = {
                        id: e.id,
                        isStarred: o("WAWebSyncGatingUtils").shouldPopulateStarMessageWithTimestamp() ? e.t : e.rowId
                    };
                    const e_associationType = e.associationType;
                    if (e_associationType != null) {
                        const a = o("WAWebAssociationProcessor").getAssociationProcessorByAssociationType(e_associationType);
                        if (a && a.processorType === o("WAWebAssociationProcessorConstants").AssociationProcessorType.WithDetachedMessages) {
                            t.push([
                                e.id,
                                e_associationType
                            ]);
                            n = babelHelpers.extends({}, n, {
                                associationType: null,
                                viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                                parentMsgKey: null
                            });
                        }
                    }
                    return n;
                });
                const a = [
                    o("WAWebSchemaMessage").getMessageTable().bulkCreateOrMerge(r)
                ];
                if (t.length) {
                    a.push(o("WAWebDBDeleteAssociatedMsgsByMsgKey").bulkDeleteMessagesByMsgKeyAndAssociationType(t));
                }
                yield (m || (m = n("Promise"))).all(a);
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        })());
    }
    function L(e) {
        return o("WAWebSchemaMessage").getMessageTable().bulkCreateOrMerge(e.map((e)=>({
                id: e,
                isStarred: undefined
            })));
    }
    l.NoMessageToUpdateError = f;
    l.DuplicateMessageError = g;
    l.PreviousMsgNotUpdatableError = h;
    l.storeMessages = C;
    l.updateExistingMessages = v;
    l.updateMessage = S;
    l.starMessages = R;
    l.unstarMessages = L;
}, 98);