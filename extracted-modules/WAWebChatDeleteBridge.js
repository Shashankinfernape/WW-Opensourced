__d("WAWebChatDeleteBridge", [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebApiActiveMessageRanges",
    "WAWebApiAddActiveMessageRange",
    "WAWebApiChatCommon",
    "WAWebApiOrphanTcToken",
    "WAWebBackendApi",
    "WAWebDBLabelAssociationDatabaseApi",
    "WAWebDBQueryAndRemoveMessageHistory",
    "WAWebDBReportingTokenUtils",
    "WAWebDeleteChatSync",
    "WAWebEditLabelAssociationBridge",
    "WAWebFtsClient",
    "WAWebGroupHistoryParticipantJob",
    "WAWebLabelJidSync",
    "WAWebMessageRangeUtils",
    "WAWebMobilePlatforms",
    "WAWebModelStorageUtils",
    "WAWebMuteChatSync",
    "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
    "WAWebPinChatSync",
    "WAWebRequestDeleteAddOns",
    "WAWebScheduledMsgRevealKeyStore",
    "WAWebSchemaChat",
    "WAWebSchemaChatAssignment",
    "WAWebSchemaGroupMetadata",
    "WAWebSchemaLabel",
    "WAWebSchemaLabelAssociation",
    "WAWebSyncdConst",
    "WAWebSyncdDb",
    "WAWebThreadMetadataJob",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = 1000;
    function d(t) {
        return o("WAWebModelStorageUtils").getStorage().lock([
            "chat",
            "label",
            "label-association",
            "message-association",
            "message",
            "chat-assignment",
            "orphan-tc-token",
            "scheduled-msg-reveal-key",
            "sync-actions",
            "thread-metadata"
        ], n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const chatBoundaries = yield o("WAWebDBQueryAndRemoveMessageHistory").getBoundsForChat(t);
            const r = yield o("WAWebSchemaChat").getChatTable().get(t.toString());
            const a = yield (u || (u = n("Promise"))).all([
                o("WAWebSchemaChat").getChatTable().remove(t.toString()),
                o("WAWebDBQueryAndRemoveMessageHistory").queryAndRemoveMessageHistory(t),
                _(t),
                k(t),
                g({
                    chatId: t,
                    tcToken: r?.tcToken,
                    tcTokenTimestamp: r?.tcTokenTimestamp
                }),
                L(t, r?.accountLid != null ? o("WAWebWidFactory").createWid(r.accountLid) : null),
                t.isNewsletter() || t.isBroadcast() ? (u || (u = n("Promise"))).resolve([]) : o("WAWebScheduledMsgRevealKeyStore").deleteRevealKeysForChat(o("WAWebWidToJid").widToChatJid(t)),
                t.isNewsletter() ? (u || (u = n("Promise"))).resolve() : o("WAWebThreadMetadataJob").deleteAllThreadsForChat(t.isBroadcast() ? o("WAWebWidToJid").widToBroadcastJid(t) : o("WAWebWidToJid").widToChatJid(t))
            ]);
            const i = a[0];
            const deletedMsgIds = a[1];
            const s = a[2];
            return {
                chatBoundaries,
                deletedMsgIds
            };
        })).then((()=>{
            const r = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chatBoundaries, deletedMsgIds }) {
                o("WAWebDBReportingTokenUtils").handleDeleteReportingInfos(deletedMsgIds, {
                    removeWholeRow: true
                });
                if (chatBoundaries) {
                    m(babelHelpers.extends({
                        chatId: t.toString()
                    }, chatBoundaries));
                    yield o("WAWebBackendApi").frontendSendAndReceive("deleteModelsForLastAddOnPreview", {
                        messagesIds: deletedMsgIds
                    });
                    yield o("WAWebRequestDeleteAddOns").requestDeleteAddOns(t.toString(), deletedMsgIds);
                } else {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "sendConversationDelete: chat boundaries was null"
                    ])));
                }
            });
            return function(e) {
                return r.apply(this, arguments);
            };
        })());
    }
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                yield o("WAWebFtsClient").ftsClient.purgeRange(e);
                return;
            } catch (e) {
                yield new (u || (u = n("Promise")))(function(e) {
                    return self.setTimeout(e, c);
                });
            }
            try {
                yield o("WAWebFtsClient").ftsClient.purgeRange(e);
            } catch (error) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "sendConversationDelete: ftsClient.purgeRange failed"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("fts-purge-range-failed");
            }
        });
        return p.apply(this, arguments);
    }
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield y(e);
            const { labelsToUpdate, modelRecords } = t;
            yield o("WAWebEditLabelAssociationBridge").editLocalLabelAssociationMD(labelsToUpdate, modelRecords);
        });
        return f.apply(this, arguments);
    }
    function g(e) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chatId, tcToken, tcTokenTimestamp }) {
            if (o("WAWebABProps").getABPropConfigValue("enable_spam_report_iq_with_privacy_token") && tcToken != null && tcTokenTimestamp != null) {
                return o("WAWebApiOrphanTcToken").createOrUpdateOrphanTcToken(chatId, {
                    tcToken,
                    tcTokenTimestamp
                });
            }
            return (u || (u = n("Promise"))).resolve();
        });
        return h.apply(this, arguments);
    }
    function y(e) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebDBLabelAssociationDatabaseApi").queryLocalLabelAssociations([
                {
                    associationId: e.toString(),
                    type: o("WAWebSchemaLabelAssociation").LabelAssociationType.Jid
                }
            ]);
            const r = (yield (u || (u = n("Promise"))).all(t.map((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    const t = yield o("WAWebSchemaLabel").getLabelTable().get(e.labelId);
                    return {
                        association: e,
                        isFavorite: t?.type === o("WAWebSchemaLabel").ListType.FAVORITES
                    };
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })()))).filter(({ isFavorite })=>!isFavorite).map(({ association })=>association);
            return {
                labelsToUpdate: r.map(({ labelId })=>({
                        id: labelId,
                        type: "remove"
                    })),
                modelRecords: [
                    {
                        labelAssociationType: o("WAWebSchemaLabelAssociation").LabelAssociationType.Jid,
                        modelId: e.toString(),
                        mutationIndexSegments: [
                            e.toString({
                                legacy: true
                            })
                        ]
                    }
                ]
            };
        });
        return C.apply(this, arguments);
    }
    function b(e, t, n, r, o) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, a = false, i, tcTokenTimestamp) {
            const s = o("WATimeUtils").unixTimeMs();
            const c = yield (u || (u = n("Promise"))).all([
                r("WAWebDeleteChatSync").getDeleteChatMutation(s, e, !a),
                o("WAWebPinChatSync").PinChatSync.getPinMutation(s, false, e),
                S(e)
            ]);
            const d = c[0];
            const m = c[1];
            const p = c[2];
            const f = [].concat(p, [
                m
            ]);
            if (t) {
                f.push(d);
            }
            let h;
            yield o("WAWebMessageRangeUtils").lockForMessageRangeSync([
                "message",
                "chat",
                "group-history-participant",
                "label",
                "label-association",
                "message-association",
                "group-metadata",
                "orphan-tc-token",
                "scheduled-msg-reveal-key",
                "sync-actions",
                "thread-metadata"
            ], f, n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                yield o("WAWebApiAddActiveMessageRange").addActiveMessageRange(e.toString(), o("WAWebApiActiveMessageRanges").getActiveRangeAction("deleteChat", {
                    deleteMedia: !a
                }), d.binarySyncAction);
                h = yield o("WAWebDBQueryAndRemoveMessageHistory").queryAndRemoveMessageHistory(e);
                const t = yield o("WAWebApiChatCommon").getChatRecord(e);
                yield (u || (u = n("Promise"))).all([
                    o("WAWebSchemaChat").getChatTable().remove(e.toString()),
                    o("WAWebSchemaGroupMetadata").getGroupMetadataTable().remove(e.toString()),
                    e.isGroup() ? o("WAWebGroupHistoryParticipantJob").clearGroupHistoryParticipantStateForGroup(e) : (u || (u = n("Promise"))).resolve(),
                    _(e),
                    g({
                        chatId: e,
                        tcToken: i,
                        tcTokenTimestamp
                    }),
                    L(e, t?.accountLid != null ? o("WAWebWidFactory").createWid(t.accountLid) : null),
                    e.isBroadcast() ? (u || (u = n("Promise"))).resolve([]) : o("WAWebScheduledMsgRevealKeyStore").deleteRevealKeysForChat(o("WAWebWidToJid").widToChatJid(e)),
                    o("WAWebThreadMetadataJob").deleteAllThreadsForChat(e.isBroadcast() ? o("WAWebWidToJid").widToBroadcastJid(e) : o("WAWebWidToJid").widToChatJid(e))
                ]);
            }));
            return {
                status: 200,
                result: h
            };
        });
        return v.apply(this, arguments);
    }
    function S(e) {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield y(e);
            const { labelsToUpdate, modelRecords } = t;
            return r("WAWebLabelJidSync").createLabelAssociationMutations(labelsToUpdate, modelRecords);
        });
        return R.apply(this, arguments);
    }
    function L(e, t) {
        return E.apply(this, arguments);
    }
    function E() {
        E = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const a = [
                JSON.stringify([
                    r("WAWebMuteChatSync").getAction(),
                    e.toJid()
                ])
            ];
            if (t != null) {
                a.push(JSON.stringify([
                    r("WAWebMuteChatSync").getAction(),
                    t.toJid()
                ]));
            }
            const i = (yield (u || (u = n("Promise"))).all(a.map((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    const t = yield o("WAWebSyncdDb").getSyncAction(e);
                    if (!(t == null || t.actionState === o("WAWebSyncdConst").SyncActionState.Orphan)) {
                        return e;
                    }
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })()))).filter(Boolean);
            yield o("WAWebSyncdDb").updateSyncActionRows(i.map((t)=>({
                    index: t,
                    actionState: o("WAWebSyncdConst").SyncActionState.Orphan,
                    modelType: o("WAWebSyncdConst").SyncModelType.Chat,
                    modelId: e.toString()
                })));
        });
        return E.apply(this, arguments);
    }
    function k(e) {
        return I.apply(this, arguments);
    }
    function I() {
        I = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (o("WAWebMobilePlatforms").isSMB()) {
                const t = e.toString({
                    legacy: true
                });
                const n = yield o("WAWebSchemaChatAssignment").getChatAssignmentTable().all();
                const r = n.filter((e)=>e.chatId === t);
                const assignmentIds = r.map((e)=>String(e.id));
                if (assignmentIds.length > 0) {
                    yield o("WAWebSchemaChatAssignment").getChatAssignmentTable().bulkRemove(assignmentIds);
                }
                o("WAWebBackendApi").frontendFireAndForget("removeChatAssignmentsFromCollection", {
                    assignmentIds
                });
            }
        });
        return I.apply(this, arguments);
    }
    function T({ id, tcToken, tcTokenTimestamp }) {
        return b(id, true, false, tcToken, tcTokenTimestamp).then((()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                if (e.result != null && e.result.length > 0) {
                    const messagesIds = e.result;
                    o("WAWebDBReportingTokenUtils").handleDeleteReportingInfos(messagesIds, {
                        removeWholeRow: true
                    });
                    yield o("WAWebBackendApi").frontendSendAndReceive("deleteModelsForLastAddOnPreview", {
                        messagesIds
                    });
                    yield o("WAWebNonMessageDataRequestHistorySyncOnDemandUtils").deleteChatFromInitialSyncBoundary(id);
                    yield o("WAWebRequestDeleteAddOns").requestDeleteAddOns(id.toString(), messagesIds);
                    return e;
                }
                return e;
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        })());
    }
    l.deleteFromStorage = d;
    l.sendConversationDelete = T;
}, 98);