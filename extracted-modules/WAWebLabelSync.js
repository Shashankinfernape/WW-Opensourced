__d("WAWebLabelSync", [
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebDBLabelAssociationDatabaseApi",
    "WAWebDBLabelSublistDatabaseApi",
    "WAWebLabelCollection",
    "WAWebLabelConstants",
    "WAWebLeadListConstants",
    "WAWebListUtils",
    "WAWebMobilePlatforms",
    "WAWebModelStorageUtils",
    "WAWebProtobufSyncAction.pb",
    "WAWebProtobufsServerSync.pb",
    "WAWebSchemaLabel",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdIndexUtils",
    "WAWebWamLabelSyncTrackingReporter",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "justknobx"
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
    function g(labelId, chatJid, isLabeled, timestampMs, predefinedId, s) {
        o("WAWebWamLabelSyncTrackingReporter").generateLabelJidHash(labelId, chatJid).then((e)=>{
            o("WAWebWamLabelSyncTrackingReporter").logLabelSyncEvent(e, o("WAWebWamLabelSyncTrackingReporter").LABEL_SYNC_TYPE_ENUM.LABEL_JID, o("WAWebWamLabelSyncTrackingReporter").LABEL_SYNC_DIRECTION_TYPE.RETRY, s, isLabeled, timestampMs, undefined, predefinedId);
        }).catch((t)=>{
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "Failed to log deferred label association WAM event"
            ]))).catching(r("getErrorSafe")(t)).sendLogs("label-association-retry-wam-error");
        });
    }
    function h(e, type) {
        if (type === o("WAWebProtobufSyncAction.pb").SyncActionValue$LabelEditAction$ListType.SERVER_ASSIGNED) {
            o("WAWebLabelCollection").LabelCollection.addToServerAssignedLabelIdMap(e.id, e.predefinedId);
            return;
        }
        if (!o("WAWebLabelCollection").LabelCollection.hideIfLegacyLeadList(e)) {
            o("WAWebLabelCollection").LabelCollection.add(babelHelpers.extends({}, e), {
                merge: true
            });
        }
    }
    function y() {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            try {
                yield o("WAWebDBLabelSublistDatabaseApi").removeLabelSublistsByPredefinedId(o("WAWebLeadListConstants").LEGACY_LEAD_LIST_PREDEFINED_ID);
            } catch (error) {
                o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "label sync: clearing legacy Lead list stages failed"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("label-sync-clear-legacy-lead-sublists-failed");
            }
        });
        return C.apply(this, arguments);
    }
    const b = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.collectionName = o("WAWebSyncdConst").CollectionName.Regular;
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.getVersion = function() {
            return 3;
        };
        t_prototype.getAction = function() {
            return o("WAWebSyncdConst").Actions.LabelEdit;
        };
        t_prototype.applyMutations = function(t) {
            const e = this;
            let a = 0;
            let i = 0;
            let l = 0;
            let p = 0;
            const _ = [];
            let C = 0;
            const b = [];
            const v = (f || (f = n("Promise"))).all(t.map((()=>{
                const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, s) {
                    try {
                        if (t.operation === "set") {
                            const { indexParts, value } = t;
                            const m = indexParts[1];
                            if (!m) {
                                return e.malformedActionIndex();
                            }
                            const f = value.labelEditAction;
                            if (!f) {
                                let g;
                                a++;
                                const v = yield (g = o("WAWebWamLabelSyncTrackingReporter")).generateLabelEditHash(m);
                                g.logLabelSyncEvent(v, g.LABEL_SYNC_TYPE_ENUM.LABEL_EDIT, g.LABEL_SYNC_DIRECTION_TYPE.RECEIVER, g.LABEL_SYNC_RESULT_TYPE.FAILED_MISSING_ACTION, false, Date.now());
                                return o("WAWebSyncdIndexUtils").malformedActionValue(e.collectionName);
                            }
                            if (f.deleted === true) {
                                const S = yield o("WAWebSchemaLabel").getLabelTable().get(m);
                                yield o("WAWebSchemaLabel").getLabelTable().remove(m);
                                o("WAWebLabelCollection").LabelCollection.remove(m);
                                if (S?.predefinedId === o("WAWebLeadListConstants").LEGACY_LEAD_LIST_PREDEFINED_ID) {
                                    yield y();
                                }
                                const predefinedId_1 = f.predefinedId;
                                b[s] = {
                                    isDeleted: true,
                                    labelId: m,
                                    predefinedId: predefinedId_1
                                };
                                o("WAWebWamLabelSyncTrackingReporter").generateLabelEditHash(m).then((e)=>{
                                    let t;
                                    (t = o("WAWebWamLabelSyncTrackingReporter")).logLabelSyncEvent(e, t.LABEL_SYNC_TYPE_ENUM.LABEL_EDIT, t.LABEL_SYNC_DIRECTION_TYPE.RECEIVER, t.LABEL_SYNC_RESULT_TYPE.SUCCESS, false, Date.now(), undefined, predefinedId_1);
                                });
                                return {
                                    actionState: o("WAWebSyncdConst").SyncActionState.Success
                                };
                            }
                            const { color, isActive, isImmutable, predefinedId, type } = f;
                            const D = f.name ?? "";
                            if (D === "") {
                                i++;
                            }
                            if (o("WAWebMobilePlatforms").isSMB() && color == null) {
                                l++;
                            }
                            let x = D;
                            if (isImmutable === true && o("WAWebABProps").getABPropConfigValue("smb_do_label_localize_on_create_enabled_code")) {
                                const $ = o("WAWebLabelConstants").getLocalizedDoLabelNameByPredefinedId(predefinedId);
                                if ($ != null) {
                                    x = $;
                                }
                            }
                            const P = {
                                id: m,
                                name: x,
                                colorIndex: color,
                                predefinedId
                            };
                            if (f.orderIndex != null) {
                                P.orderIndex = f.orderIndex;
                            }
                            if (type != null) {
                                const N = o("WAWebSchemaLabel").ListType.cast(type);
                                if (N != null) {
                                    P.type = N;
                                } else {
                                    p++;
                                    if (_.length < 3) {
                                        _.push(type);
                                    }
                                    return {
                                        actionState: o("WAWebSyncdConst").SyncActionState.Skipped
                                    };
                                }
                            }
                            if (isActive != null) {
                                P.isActive = isActive;
                            }
                            if (isImmutable != null) {
                                P.isImmutable = isImmutable;
                            }
                            const M = type === o("WAWebProtobufSyncAction.pb").SyncActionValue$LabelEditAction$ListType.AI_HANDOFF || type === o("WAWebProtobufSyncAction.pb").SyncActionValue$LabelEditAction$ListType.AI_RESPONDING;
                            if (r("justknobx")._("1781") && M && f.deleted !== true) {
                                const w = yield o("WAWebModelStorageUtils").getStorage().lock([
                                    "label"
                                ], (()=>{
                                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*([t]) {
                                        const n = yield t.all();
                                        return n.find((e)=>e.id !== m && e.type === P.type);
                                    });
                                    return function(t) {
                                        return e.apply(this, arguments);
                                    };
                                })());
                                if (w != null) {
                                    return {
                                        actionState: o("WAWebSyncdConst").SyncActionState.Success
                                    };
                                }
                            }
                            if (r("justknobx")._("1781") && f.deleted !== true && type === o("WAWebProtobufSyncAction.pb").SyncActionValue$LabelEditAction$ListType.CUSTOM) {
                                const A = o("WAWebListUtils").getExpectedAiLabelName("AI_HANDOFF");
                                const F = o("WAWebListUtils").getExpectedAiLabelName("AI_RESPONDING");
                                const O = D === A || D === F;
                                if (O) {
                                    return {
                                        actionState: o("WAWebSyncdConst").SyncActionState.Success
                                    };
                                }
                            }
                            const B = yield o("WAWebModelStorageUtils").getStorage().lock([
                                "label",
                                "label-association",
                                "chat"
                            ], (()=>{
                                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*([t]) {
                                    if (P.orderIndex == null) {
                                        const n = yield t.get(m);
                                        if (n?.orderIndex != null) {
                                            P.orderIndex = n.orderIndex;
                                        }
                                    }
                                    yield t.createOrReplace(P);
                                    return o("WAWebDBLabelAssociationDatabaseApi").queryLabelAssociationsForLabelIds([
                                        m
                                    ]);
                                });
                                return function(t) {
                                    return e.apply(this, arguments);
                                };
                            })());
                            h(P, type);
                            const W = o("WAWebLabelCollection").LabelCollection.get(m);
                            if (W != null && B.length > 0) {
                                const q = W.labelItemCollection.reduce((acc, item)=>{
                                    acc.add(item.id);
                                    return acc;
                                }, new Set);
                                const U = B.filter((e)=>!q.has(e.associationId));
                                if (U.length > 0) {
                                    o("WAWebLabelCollection").LabelCollection.initializeAssociationsFromCache(U);
                                }
                            }
                            o("WAWebWamLabelSyncTrackingReporter").generateLabelEditHash(m).then((e)=>{
                                let t;
                                (t = o("WAWebWamLabelSyncTrackingReporter")).logLabelSyncEvent(e, t.LABEL_SYNC_TYPE_ENUM.LABEL_EDIT, t.LABEL_SYNC_DIRECTION_TYPE.RECEIVER, t.LABEL_SYNC_RESULT_TYPE.SUCCESS, true, Date.now(), undefined, predefinedId);
                            });
                            b[s] = {
                                isDeleted: false,
                                labelId: m,
                                predefinedId
                            };
                            return {
                                actionState: o("WAWebSyncdConst").SyncActionState.Success
                            };
                        }
                        C++;
                        return {
                            actionState: o("WAWebSyncdConst").SyncActionState.Unsupported
                        };
                    } catch (e) {
                        return {
                            actionState: o("WAWebSyncdConst").SyncActionState.Failed
                        };
                    }
                });
                return function(e, n) {
                    return t.apply(this, arguments);
                };
            })()));
            return v.then((e)=>{
                if (a > 0) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "label sync: ",
                        " malformed mutations"
                    ])), a);
                }
                if (i > 0) {
                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "labelEditAction.name is empty for ",
                        " mutations"
                    ])), i);
                }
                if (l > 0) {
                    o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "labelEditAction.color is empty for ",
                        " mutations"
                    ])), l);
                }
                if (p > 0) {
                    o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "labelEditAction.type has unexpected value for ",
                        " mutations => ",
                        ""
                    ])), p, _);
                }
                if (C > 0) {
                    o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "label sync: ",
                        " operations not supported"
                    ])), C);
                }
                const t = new Map;
                e.forEach((e, n)=>{
                    const r = b[n];
                    if (!(e.actionState !== o("WAWebSyncdConst").SyncActionState.Success || r == null)) {
                        const a = t.get(r.labelId);
                        if (!(a?.isDeleted === false && r.isDeleted)) {
                            t.set(r.labelId, r);
                        }
                    }
                });
                t.forEach((e)=>{
                    const t = o("WAWebWamLabelSyncTrackingReporter").takeDeferredLabelAssociations(e.labelId);
                    t.forEach((t)=>{
                        g(e.labelId, t.chatJid, t.isLabeled, t.timestampMs, e.predefinedId, e.isDeleted ? o("WAWebWamLabelSyncTrackingReporter").LABEL_SYNC_RESULT_TYPE.FAILED_LABEL_NOT_FOUND : o("WAWebWamLabelSyncTrackingReporter").LABEL_SYNC_RESULT_TYPE.SUCCESS);
                    });
                });
                return e;
            });
        };
        t_prototype.getLabelMutation = function({ color, deleted, id, isActive, name, predefinedId, timestamp, type }) {
            const labelEditAction = {
                name,
                deleted
            };
            if (color != null) {
                labelEditAction.color = color;
            }
            if (predefinedId != null) {
                labelEditAction.predefinedId = predefinedId;
            }
            if (isActive != null) {
                labelEditAction.isActive = isActive;
            }
            if (type != null) {
                const d = o("WAWebProtobufSyncAction.pb").SyncActionValue$LabelEditAction$ListType.cast(type);
                if (d != null) {
                    labelEditAction.type = d;
                } else {
                    o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "getLabelMutation: type has unexpected value: ",
                        ""
                    ])), type);
                }
            }
            o("WAWebWamLabelSyncTrackingReporter").generateLabelEditHash(id).then((e)=>{
                let t;
                (t = o("WAWebWamLabelSyncTrackingReporter")).logLabelSyncEvent(e, t.LABEL_SYNC_TYPE_ENUM.LABEL_EDIT, t.LABEL_SYNC_DIRECTION_TYPE.SENDER, t.LABEL_SYNC_RESULT_TYPE.SUCCESS, !deleted, timestamp, undefined, predefinedId);
            });
            return o("WAWebSyncdActionUtils").buildPendingMutation({
                collection: this.collectionName,
                indexArgs: [
                    id
                ],
                value: {
                    labelEditAction
                },
                version: this.getVersion(),
                operation: o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET,
                timestamp,
                action: this.getAction()
            });
        };
        return t;
    })(o("WAWebSyncdAction").AccountSyncdActionBase);
    const v = new b;
    l.default = v;
}, 98);