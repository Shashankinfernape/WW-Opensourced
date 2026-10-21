__d("WAWebLabelCollection", [
    "fbt",
    "$InternalEnum",
    "WALogger",
    "WAWebActionToast.react",
    "WAWebAddToFavoritesAction",
    "WAWebBizLabelUtils",
    "WAWebChatCollection",
    "WAWebContactModel",
    "WAWebEditLabelAssociationBridge",
    "WAWebLabelModel",
    "WAWebLabelPillColors",
    "WAWebLeadListConstants",
    "WAWebListItemParentType",
    "WAWebListUtils",
    "WAWebListsGatingUtils",
    "WAWebNoop",
    "WAWebRemoveFromFavoritesAction",
    "WAWebSchemaLabel",
    "WAWebStaleBaseCollection",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWid",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    let d;
    const m = [
        "id"
    ];
    let p;
    const _ = p || (p = o("react"));
    const f = n("$InternalEnum").Mirrored([
        "CREATE",
        "EDIT",
        "DELETE"
    ]);
    const g = n("$InternalEnum").Mirrored([
        "IN_PROGRESS",
        "SUCCESS",
        "ERROR"
    ]);
    function h(e, t, n) {
        if (n === f.CREATE) {
            if (e === g.IN_PROGRESS) {
                return s._("Creating list");
            }
            if (e === g.SUCCESS) {
                return s._("List created");
            }
            if (e === g.ERROR) {
                return s._("List could not be created");
            }
            return (()=>{
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
            })();
        }
        if (t) {
            switch(e){
                case g.IN_PROGRESS:
                    return s._("Adding to list");
                case g.SUCCESS:
                    return s._("Added to list");
                case g.ERROR:
                    return s._("Could not be added to list");
            }
        } else {
            switch(e){
                case g.IN_PROGRESS:
                    return s._("Updating list");
                case g.SUCCESS:
                    return s._("List updated");
                case g.ERROR:
                    return s._("List could not be updated");
            }
        }
    }
    const y = ((t)=>{
        function n() {
            let e;
            e = t.call(this) || this;
            e.$LabelCollectionImpl$p_1 = new Map;
            e.$LabelCollectionImpl$p_2 = new Set;
            e.listenTo(e, "remove", C);
            return e;
        }
        babelHelpers.inheritsLoose(n, t);
        const n_prototype = n.prototype;
        n_prototype.initializeFromCache = function(t) {
            const e = this;
            const n = t.filter((t)=>{
                const n = t.type === o("WAWebSchemaLabel").ListType.SERVER_ASSIGNED;
                if (n) {
                    e.addToServerAssignedLabelIdMap(t.id, t.predefinedId);
                }
                return !n && !e.hideIfLegacyLeadList(t);
            });
            const r = n.map((e)=>{
                const t = e.id;
                const n = babelHelpers.objectWithoutPropertiesLoose(e, m);
                return babelHelpers.extends({
                    id: t
                }, n);
            });
            this.add(r);
        };
        n_prototype.initializeAssociationsFromCache = function(t) {
            t.forEach(({ associationId, labelId })=>{
                o("WAWebBizLabelUtils").addToLabelCollection(associationId, [
                    labelId
                ], o("WAWebListItemParentType").LabelItemParentType.Chat);
            });
        };
        n_prototype.removeAllLabelsMD = function(t) {
            return this.addOrRemoveLabelsMD((t.labels || []).map((e)=>({
                    type: "remove",
                    id: e
                })), [
                t
            ]);
        };
        n_prototype.addOrRemoveLabelsMD = function(t, n) {
            t.forEach(({ id, listType, type })=>{
                n.forEach((e)=>{
                    const n = o("WAWebBizLabelUtils").getParentTypeFromModel(e);
                    const l = e.id.toString();
                    if (listType === o("WAWebSchemaLabel").ListType.FAVORITES) {
                        if (e.id instanceof r("WAWebWid")) {
                            if (type === "add") {
                                o("WAWebAddToFavoritesAction").addToFavoritesAction([
                                    e.id
                                ], {
                                    suppressToast: true
                                }).catch(r("WAWebNoop"));
                            } else {
                                o("WAWebRemoveFromFavoritesAction").removeFromFavoritesAction(e.id, {
                                    suppressToast: true
                                }).catch(r("WAWebNoop"));
                            }
                        }
                    } else if (type === "add") {
                        o("WAWebBizLabelUtils").addToLabelCollection(l, [
                            id
                        ], n);
                    } else {
                        o("WAWebBizLabelUtils").removeLabelFromCollection(l, id, n);
                    }
                });
            });
        };
        n_prototype.addOrRemoveLabels = function(n, a, i) {
            const t = this;
            if (!(n.length === 0 || a.length === 0)) {
                const l = i?.listUpdateMode;
                const s = i?.suppressSuccessToast === true;
                const d = n.every((e)=>e.type === "add");
                const m = a.some((e)=>e instanceof r("WAWebContactModel"));
                if (m) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "contact model is invalid for editLabelAssociation"
                    ]))).sendLogs("contact model is invalid for editLabelAssociation");
                }
                const p = h(g.ERROR, d, l);
                const f = o("WAWebEditLabelAssociationBridge").editLabelAssociation(this.$LabelCollectionImpl$p_3(n), a).then(()=>{
                    t.addOrRemoveLabelsMD(n, a);
                });
                if (s) {
                    f.catch((e)=>{
                        o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "addingNewLabel dropped"
                        ])));
                        o("WAWebToastManager").ToastManager.open(_.jsx(o("WAWebToast.react").Toast, {
                            msg: p
                        }));
                    });
                    return;
                }
                const y = o("WAWebActionToast.react").genId();
                const C = new (o("WAWebActionToast.react")).ActionType(h(g.IN_PROGRESS, d, l));
                const b = f.then(()=>new (o("WAWebActionToast.react")).ActionType(h(g.SUCCESS, d, l))).catch((e)=>{
                    o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "addingNewLabel dropped"
                    ])));
                    return new (o("WAWebActionToast.react")).ActionType(p);
                });
                o("WAWebToastManager").ToastManager.open(_.jsx(o("WAWebActionToast.react").ActionToast, {
                    id: y,
                    initialAction: C,
                    pendingAction: b
                }));
            }
        };
        n_prototype.$LabelCollectionImpl$p_3 = function(t) {
            return t.map((e)=>{
                if (e.type === "remove") {
                    const t = o("WAWebBizLabelUtils").mapManualLabelIdToDetectedOutcomeLabelId(e.id);
                    if (t != null) {
                        return [
                            babelHelpers.extends({}, e, {
                                listType: o("WAWebSchemaLabel").ListType.SERVER_ASSIGNED,
                                id: t
                            }),
                            e
                        ];
                    }
                }
                return e;
            }).flat(1);
        };
        n_prototype.getLabelsForModel = function(t, n) {
            return this.filter((e)=>e.labelItemCollection.get(o("WAWebBizLabelUtils").createLabelItemId(t, e.id, n))).map((e)=>e.id);
        };
        n_prototype.getNextAvailableColor = function() {
            if (o("WAWebListsGatingUtils").isListsChatListRowPillEnabled()) {
                const e = new Set;
                this.forEach((t)=>{
                    if (t.colorIndex != null) {
                        e.add(t.colorIndex);
                    }
                });
                const t = o("WAWebLabelPillColors").getCustomLabelColorIndices();
                const n = t.find((t)=>!e.has(t));
                return n ?? t[Math.floor(Math.random() * t.length)];
            }
            const r = o("WAWebListUtils").getAllLabelColors();
            const a = new Set;
            this.forEach((e)=>{
                if (e.colorIndex != null) {
                    a.add(e.colorIndex);
                }
            });
            const i = Array.from(a).sort((e, t)=>Number(e) - Number(t));
            if (i.length === 0) {
                return 0;
            }
            const l = i.findIndex((e, t)=>e !== t);
            if (l >= 0) {
                return l;
            }
            if (i.length < r.length) {
                return i.length;
            }
            return Math.floor(Math.random() * r.length);
        };
        n_prototype.getChatLabelsWithUnarchivedAssociations = function() {
            return this.filter((e)=>{
                if (e.count === 0) {
                    return false;
                }
                return e.labelItemCollection.some((e)=>{
                    switch(e.parentType){
                        case o("WAWebListItemParentType").LabelItemParentType.Chat:
                            const t = o("WAWebChatCollection").ChatCollection.get(e.parentId);
                            return !(t == null || t.archive === true || t.isLocked === true);
                        case o("WAWebListItemParentType").LabelItemParentType.Contact:
                            return false;
                    }
                });
            });
        };
        n_prototype.getActiveLists = function() {
            return this.filter((e)=>e.isActive !== false);
        };
        n_prototype.getNextOrderIndex = function() {
            let e = 0;
            this.forEach((t)=>{
                if (t.orderIndex > e) {
                    e = t.orderIndex;
                }
            });
            return e + 1;
        };
        n_prototype.getInactivePresetLists = function() {
            return this.filter((e)=>e.isActive === false && (o("WAWebListUtils").isBuiltInList(e.type) || o("WAWebListUtils").isAiList(e.type)));
        };
        n_prototype.getChatLists = function() {
            return this.filter((e)=>{
                if (e.labelItemCollection.length === 0) {
                    return true;
                }
                return e.labelItemCollection.some((e)=>{
                    switch(e.parentType){
                        case o("WAWebListItemParentType").LabelItemParentType.Chat:
                            {
                                const t = o("WAWebChatCollection").ChatCollection.get(e.parentId);
                                return !(t == null || t.isLocked === true);
                            }
                        case o("WAWebListItemParentType").LabelItemParentType.Contact:
                            return false;
                    }
                });
            });
        };
        n_prototype.getCustomLists = function() {
            return this.filter((e)=>e.type === o("WAWebSchemaLabel").ListType.CUSTOM);
        };
        n_prototype.hideIfLegacyLeadList = function(t) {
            if (t.predefinedId !== o("WAWebLeadListConstants").LEGACY_LEAD_LIST_PREDEFINED_ID) {
                return false;
            }
            this.$LabelCollectionImpl$p_2.add(t.id);
            this.remove(t.id);
            return true;
        };
        n_prototype.isLegacyLeadListId = function(t) {
            return this.$LabelCollectionImpl$p_2.has(t);
        };
        n_prototype.getServerAssignedLabelIdMap = function() {
            return this.$LabelCollectionImpl$p_1;
        };
        n_prototype.addToServerAssignedLabelIdMap = function(t, n) {
            if (n != null && !this.$LabelCollectionImpl$p_1.has(t)) {
                this.$LabelCollectionImpl$p_1.set(t, n);
            } else if (n == null) {
                o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "label sync: malformed mutation, unexpected null predefinedId"
                ])));
            }
        };
        return n;
    })(o("WAWebStaleBaseCollection").StaleBaseCollection);
    y.model = o("WAWebLabelModel").Label;
    function C({ labelItemCollection }) {
        labelItemCollection.toArray().forEach(({ labelId, parentId, parentType })=>{
            const a = o("WAWebBizLabelUtils").getParentCollection(parentType).get(parentId);
            if (a) {
                a.labels = (a.labels ?? []).filter((e)=>e !== labelId);
            }
        });
    }
    const b = new y;
    l.ListUpdateMode = f;
    l.LabelCollection = b;
}, 226);