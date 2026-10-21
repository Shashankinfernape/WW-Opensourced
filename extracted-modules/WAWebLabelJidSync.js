__d("WAWebLabelJidSync", [
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebApiContact",
    "WAWebBackendApi",
    "WAWebCTWAAeDetectionGating",
    "WAWebContactSystemMsg",
    "WAWebDBLabelAssociationDatabaseApi",
    "WAWebDetectedOutcomeLabelConstants",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebLid1X1MigrationGating",
    "WAWebListItemParentType",
    "WAWebMsgType",
    "WAWebProtobufsServerSync.pb",
    "WAWebSchemaChat",
    "WAWebSchemaLabel",
    "WAWebSchemaLabelAssociation",
    "WAWebSyncBootstrap",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdGetChat",
    "WAWebSyncdIndexUtils",
    "WAWebUserPrefsGeneral",
    "WAWebWamLabelSyncTrackingReporter",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = r("JSResourceForInteraction")("WAWebLabelAssociationModelMetadata").__setRef("WAWebLabelJidSync");
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ associationId, chatExists, isDetectedOutcome, labelCollectionAddition, labelId, modelMetaData, predefinedId, queuedEmissions, wid }) {
            if (!(!chatExists || predefinedId == null || !isDetectedOutcome || r("WAWebSyncBootstrap").isSyncDBootstrapInProcess() || !o("WAWebABProps").getABPropConfigValue("ctwa_3pd_conversion_on_ae_detection"))) {
                const p = JSON.stringify([
                    labelId,
                    wid
                ]);
                if (!queuedEmissions.has(p) && (queuedEmissions.add(p), (yield o("WAWebSchemaLabelAssociation").getLabelAssociationTable().get([
                    labelId,
                    associationId,
                    o("WAWebSchemaLabelAssociation").LabelAssociationType.Jid
                ])) == null)) {
                    const lead = predefinedId === o("WAWebDetectedOutcomeLabelConstants").DO_LEAD_PREDEFINED_ID;
                    if (modelMetaData == null || !o("WAWebCTWAAeDetectionGating").isCtwaAeModelMetadataIngestionEnabled()) {
                        labelCollectionAddition.detectedOutcomeSignalEmission = {
                            lead
                        };
                        return;
                    }
                    const f = yield m.load();
                    const g = f.parseLabelAssociationModelMetadata;
                    const ae_model_data = g(modelMetaData);
                    labelCollectionAddition.detectedOutcomeSignalEmission = ae_model_data.length === 0 ? {
                        lead
                    } : {
                        lead,
                        metadata: JSON.stringify(lead ? {
                            ae_model_data
                        } : {
                            paid: false,
                            ae_model_data
                        })
                    };
                }
            }
        });
        return _.apply(this, arguments);
    }
    function f({ direction, isLabeled, jid, labelId, predefinedId, result, timestampMs }) {
        o("WAWebWamLabelSyncTrackingReporter").generateLabelJidHash(labelId, jid).then((e)=>{
            o("WAWebWamLabelSyncTrackingReporter").logLabelSyncEvent(e, o("WAWebWamLabelSyncTrackingReporter").LABEL_SYNC_TYPE_ENUM.LABEL_JID, direction, result, isLabeled, timestampMs, undefined, predefinedId);
        }).catch((t)=>{
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "Failed to log label JID sync WAM event"
            ]))).catching(r("getErrorSafe")(t)).sendLogs("label-jid-sync-wam-error");
        });
    }
    function g(e, t) {
        if (t === o("WAWebWamLabelSyncTrackingReporter").LABEL_SYNC_RESULT_TYPE.FAILED_ORPHANED && e.labeled) {
            o("WAWebWamLabelSyncTrackingReporter").recordDeferredLabelAssociation(e.labelId, {
                chatJid: e.jid,
                isLabeled: e.labeled,
                timestampMs: e.timestampMs
            });
        }
        f({
            direction: o("WAWebWamLabelSyncTrackingReporter").LABEL_SYNC_DIRECTION_TYPE.RECEIVER,
            isLabeled: e.labeled,
            jid: e.jid,
            labelId: e.labelId,
            predefinedId: e.predefinedId,
            result: t,
            timestampMs: e.timestampMs
        });
    }
    function h(e) {
        if (!e.labeled) {
            o("WAWebWamLabelSyncTrackingReporter").removeDeferredLabelAssociation(e.labelId, e.jid);
        }
        g(e, e.isOrphaned ? o("WAWebWamLabelSyncTrackingReporter").LABEL_SYNC_RESULT_TYPE.FAILED_ORPHANED : o("WAWebWamLabelSyncTrackingReporter").LABEL_SYNC_RESULT_TYPE.SUCCESS);
    }
    const y = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.chatJidIndex = 2;
            t.collectionName = o("WAWebSyncdConst").CollectionName.Regular;
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.getVersion = function() {
            return o("WAWebSyncdConst").LABEL_ASSOCIATION_SYNC_VERSION;
        };
        t_prototype.getAction = function() {
            return o("WAWebSyncdConst").Actions.LabelJid;
        };
        t_prototype.applyMutations = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = this;
                const a = new Map;
                const i = [];
                const l = [];
                const additions = [];
                const removals = [];
                const y = [];
                const queuedEmissions = new Set;
                let b = 0;
                let v = 0;
                const S = yield (d || (d = n("Promise"))).all(e.map((()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                        try {
                            if (e.operation === "set") {
                                const { indexParts, value } = e;
                                const g = indexParts[1];
                                const h = indexParts[2];
                                if (!g || !h) {
                                    return t.malformedActionIndex();
                                }
                                const S = value.labelAssociationAction?.labeled;
                                if (S == null) {
                                    b++;
                                    f({
                                        direction: o("WAWebWamLabelSyncTrackingReporter").LABEL_SYNC_DIRECTION_TYPE.RECEIVER,
                                        isLabeled: false,
                                        jid: h,
                                        labelId: g,
                                        result: o("WAWebWamLabelSyncTrackingReporter").LABEL_SYNC_RESULT_TYPE.FAILED_MISSING_ACTION,
                                        timestampMs: Date.now()
                                    });
                                    return o("WAWebSyncdIndexUtils").malformedActionValue(t.collectionName);
                                }
                                const modelMetaData = value.labelAssociationAction?.modelMetaData;
                                if (!r("WAWebWid").isWid(h)) {
                                    f({
                                        direction: o("WAWebWamLabelSyncTrackingReporter").LABEL_SYNC_DIRECTION_TYPE.RECEIVER,
                                        isLabeled: S,
                                        jid: h,
                                        labelId: g,
                                        result: o("WAWebWamLabelSyncTrackingReporter").LABEL_SYNC_RESULT_TYPE.FAILED_INVALID_JID,
                                        timestampMs: Date.now()
                                    });
                                    return t.malformedActionIndex();
                                }
                                let L = o("WAWebWidFactory").createWid(h);
                                const E = yield o("WAWebSyncdGetChat").resolveChatForMutationIndex(L);
                                if (E.success === true) {
                                    L = o("WAWebWidFactory").createWid(E.chat.id);
                                } else {
                                    E.success;
                                    if (o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated() && L.isLid()) {
                                        const k = o("WAWebApiContact").getPhoneNumber(L);
                                        if (k != null) {
                                            L = k;
                                        }
                                    }
                                }
                                const I = L.toString();
                                const T = {
                                    labelId: g,
                                    associationId: I,
                                    type: o("WAWebSchemaLabelAssociation").LabelAssociationType.Jid
                                };
                                let D = null;
                                let isOrphaned = false;
                                if (S) {
                                    const P = yield o("WAWebSchemaLabel").getLabelTable().get(g);
                                    D = P?.predefinedId;
                                    isOrphaned = P == null;
                                    const isDetectedOutcome = D === o("WAWebDetectedOutcomeLabelConstants").DO_NEW_ORDER_PREDEFINED_ID || D === o("WAWebDetectedOutcomeLabelConstants").DO_LEAD_PREDEFINED_ID;
                                    let chatExists = a.has(I);
                                    if (!chatExists) {
                                        const w = yield o("WAWebSchemaChat").getChatTable().get(I, false);
                                        if (w) {
                                            a.set(I, o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated() && w.accountLid != null ? w.accountLid : I);
                                            chatExists = true;
                                        }
                                    }
                                    i.push(T);
                                    const labelCollectionAddition = {
                                        parentId: I,
                                        labels: [
                                            g
                                        ],
                                        parentType: chatExists || !L.isUser() ? o("WAWebListItemParentType").LabelItemParentType.Chat : o("WAWebListItemParentType").LabelItemParentType.Contact
                                    };
                                    additions.push(labelCollectionAddition);
                                    if (D != null && o("WAWebUserPrefsGeneral").getDetectedOutcomeOnboardingStatus() && isDetectedOutcome) {
                                        const F = o("WAWebContactSystemMsg").genNotificationMsg(L, {
                                            type: "notification_template",
                                            kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
                                            subtype: "biz_automatically_labeled_chat_system_message",
                                            templateParams: [
                                                D.toString()
                                            ]
                                        });
                                        yield o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                                            chatId: L,
                                            newMsg: F,
                                            handleSingleMsgOrigin: "detectedOutcomeNotification",
                                            preserveOrder: false
                                        });
                                    }
                                    yield p({
                                        associationId: a.get(I) ?? I,
                                        chatExists,
                                        isDetectedOutcome,
                                        labelCollectionAddition,
                                        labelId: g,
                                        modelMetaData,
                                        predefinedId: D,
                                        queuedEmissions,
                                        wid: I
                                    });
                                } else {
                                    l.push(o("WAWebSchemaLabelAssociation").createLabelAssociationPrimaryKey(T));
                                    removals.push({
                                        parentId: I,
                                        labelId: g,
                                        parentType: o("WAWebListItemParentType").LabelItemParentType.Chat
                                    });
                                }
                                y.push({
                                    labelId: g,
                                    jid: h,
                                    labeled: S,
                                    isOrphaned,
                                    predefinedId: D,
                                    timestampMs: Date.now()
                                });
                                return {
                                    actionState: o("WAWebSyncdConst").SyncActionState.Success
                                };
                            }
                            v++;
                            return {
                                actionState: o("WAWebSyncdConst").SyncActionState.Unsupported
                            };
                        } catch (error) {
                            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                                "Failed to apply label JID sync mutation"
                            ]))).catching(r("getErrorSafe")(error)).sendLogs("label-jid-sync-apply-error");
                            return {
                                actionState: o("WAWebSyncdConst").SyncActionState.Failed
                            };
                        }
                    });
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                })()));
                if (b > 0) {
                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "label jid sync: ",
                        " malformed mutations"
                    ])), b);
                }
                if (v > 0) {
                    o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "label jid sync: ",
                        " unsupported operations"
                    ])), v);
                }
                const R = y.filter((e)=>!e.labeled);
                const L = y.filter((e)=>e.labeled);
                try {
                    yield o("WAWebDBLabelAssociationDatabaseApi").removeLabelAssociations(l);
                } catch (error) {
                    R.forEach((e)=>{
                        g(e, o("WAWebWamLabelSyncTrackingReporter").LABEL_SYNC_RESULT_TYPE.FAILED_DB_UPDATE);
                    });
                    throw error;
                }
                try {
                    yield o("WAWebDBLabelAssociationDatabaseApi").mergeReceivedLabelAssociations(i);
                } catch (error) {
                    R.forEach(h);
                    L.forEach((e)=>{
                        g(e, o("WAWebWamLabelSyncTrackingReporter").LABEL_SYNC_RESULT_TYPE.FAILED_DB_UPDATE);
                    });
                    throw error;
                }
                y.forEach(h);
                if (removals.length > 0 || additions.length > 0) {
                    o("WAWebBackendApi").frontendFireAndForget("applyLabelAssociationChanges", {
                        removals,
                        additions
                    });
                }
                return S;
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.createLabelAssociationMutations = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                const r = this;
                const a = o("WATimeUtils").unixTimeMs();
                const i = [];
                e.forEach(({ id, type })=>{
                    t.forEach(({ mutationIndexSegments })=>{
                        const s = {
                            labelAssociationAction: {
                                labeled: type === "add"
                            }
                        };
                        i.push({
                            timestamp: a,
                            collection: r.collectionName,
                            operation: o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET,
                            indexArgs: [
                                id
                            ].concat(mutationIndexSegments),
                            version: o("WAWebSyncdConst").LABEL_ASSOCIATION_SYNC_VERSION,
                            value: s,
                            action: o("WAWebSyncdConst").Actions.LabelJid
                        });
                    });
                });
                const l = yield (d || (d = n("Promise"))).all(i.map((()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                        const e_indexArgs = e.indexArgs;
                        const r = e_indexArgs[0];
                        const a = babelHelpers.arrayLikeToArray(e_indexArgs).slice(1);
                        const i = yield (d || (d = n("Promise"))).all(a.map((()=>{
                            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                                const t = o("WAWebWidFactory").createWid(e);
                                return o("WAWebSyncdGetChat").getWidMutationIndexForWid(t);
                            });
                            return function(t) {
                                return e.apply(this, arguments);
                            };
                        })()));
                        return babelHelpers.extends({}, e, {
                            indexArgs: [
                                r
                            ].concat(i)
                        });
                    });
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                })()));
                for (const s of l){
                    if (s.action === o("WAWebSyncdConst").Actions.LabelJid) {
                        const u = s.indexArgs;
                        const c = u[0];
                        const m = babelHelpers.arrayLikeToArray(u).slice(1);
                        const p = m[0];
                        if (c != null && p != null) {
                            f({
                                direction: o("WAWebWamLabelSyncTrackingReporter").LABEL_SYNC_DIRECTION_TYPE.SENDER,
                                isLabeled: s.value.labelAssociationAction?.labeled === true,
                                jid: p,
                                labelId: c,
                                result: o("WAWebWamLabelSyncTrackingReporter").LABEL_SYNC_RESULT_TYPE.SUCCESS,
                                timestampMs: a
                            });
                        }
                    }
                }
                return l.map(o("WAWebSyncdActionUtils").buildPendingMutation);
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return t;
    })(o("WAWebSyncdAction").ChatOrContactSyncdActionBase);
    const C = new y;
    l.default = C;
}, 98);