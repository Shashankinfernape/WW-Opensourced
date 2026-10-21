__d("WAWebListsActions", [
    "fbt",
    "Promise",
    "WALogger",
    "WASmaxInBizSettingsEnums",
    "WATimeUtils",
    "WAWebBIzLabelReorderAction",
    "WAWebBizLabelEditingAction",
    "WAWebCTWADataSharingModel",
    "WAWebChatGetters",
    "WAWebChatThreadLogging",
    "WAWebCommonCTWADataSharing",
    "WAWebCtwaConversationDepthUtils",
    "WAWebCustomLabels3pdSignalUtils",
    "WAWebDBLabelsReorder",
    "WAWebLabelCollection",
    "WAWebLabelConstants",
    "WAWebLabelReorderingSync",
    "WAWebListUtils",
    "WAWebListsGatingUtils",
    "WAWebListsLogging",
    "WAWebListsUtil",
    "WAWebProtobufsServerSync.pb",
    "WAWebSmb3pdConversionSignalAction",
    "WAWebSmbMarkAsXLabelAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdCoreApi",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWamEnumLabelOperations",
    "WAWebWamEnumLabelTargets",
    "WAWebWamEnumLastMessageDirection",
    "WAWebWamEnumListAction",
    "WAWebWamEnumSmbListFeatureNameType",
    "WAWebWamEnumSmbListSurfaceType",
    "WAWebWamEnumUpdateEntryPoint",
    "WAWebWamLabelEventReporter",
    "WAWebWamSmbListEventReporter",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    let h;
    let y;
    let C;
    let b;
    let v;
    let S;
    let R;
    let L;
    const E = L || (L = o("react"));
    function k(e, t) {
        if (e.length !== 0) {
            const n = o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue() === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true;
            const labelIds = [
                String(t)
            ];
            o("WAWebSmbMarkAsXLabelAction").logLabelSignalForModels(e, labelIds, n);
            o("WAWebSmb3pdConversionSignalAction").log3pdConversionSignalForChats({
                isDataSharingEnabled: n,
                labelIds,
                models: e
            });
            o("WAWebCustomLabels3pdSignalUtils").processCustomLabels3pdSignals(labelIds, e, n);
        }
    }
    function I(t, { customListTitle, entryPoint, listId, listsApplied, listsRemoved }) {
        const u = (n)=>{
            const t = o("WAWebChatGetters").getIsGroup(n);
            if (t) {
                o("WAWebWamSmbListEventReporter").logSmbListEvent({
                    labelOperation: o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.UPDATE_MEMBERS,
                    updateEntryPoint: entryPoint,
                    listId,
                    customListTitle,
                    labelTarget: o("WAWebWamEnumLabelTargets").LABEL_TARGETS.GROUP,
                    listsApplied,
                    listsRemoved
                });
            } else {
                const c = o("WAWebCommonCTWADataSharing").getCTWAEligibilityFromChat(n);
                const d = n.msgs?.getModelsArray().at(-1);
                let lastMessageDirection;
                if (d != null) {
                    lastMessageDirection = d.id.fromMe ? o("WAWebWamEnumLastMessageDirection").LAST_MESSAGE_DIRECTION.SELF_INITIATED : o("WAWebWamEnumLastMessageDirection").LAST_MESSAGE_DIRECTION.OPPOSITE_PARTY_INITIATED;
                }
                o("WAWebChatThreadLogging").getChatThreadIDHMAC(n.id.toString()).then((e)=>{
                    o("WAWebWamSmbListEventReporter").logSmbListEvent({
                        labelOperation: o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.UPDATE_MEMBERS,
                        updateEntryPoint: entryPoint,
                        listId,
                        customListTitle,
                        labelTarget: o("WAWebWamEnumLabelTargets").LABEL_TARGETS.CONTACT,
                        listsApplied,
                        listsRemoved,
                        threadIdHmac: e ?? undefined,
                        entryPointConversionSource: c != null ? "ctwa_ad" : undefined,
                        messageDepth: o("WAWebCtwaConversationDepthUtils").getCtwaConversationDepth(n),
                        lastMessageDirection
                    });
                }).catch(()=>{
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[Lists] failed to get threadIdHmac for SmbListEvent logging"
                    ])));
                });
            }
        };
        for (const c of t){
            u(c);
        }
    }
    function T(e) {
        return D.apply(this, arguments);
    }
    function D() {
        D = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chats, color, entryPoint, name }) {
            let i;
            try {
                i = yield o("WAWebBizLabelEditingAction").labelAddAction(name, color);
            } catch (e) {
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[Lists] createNewList: failed to add new empty list"
                ]))).tags("lists").sendLogs("create-new-list-failed");
                return;
            }
            if (chats.length > 0) {
                const l = {
                    id: String(i),
                    type: "add"
                };
                try {
                    o("WAWebLabelCollection").LabelCollection.addOrRemoveLabels([
                        l
                    ], chats, {
                        listUpdateMode: o("WAWebLabelCollection").ListUpdateMode.CREATE
                    });
                } catch (e) {
                    o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[Lists] createNewList: failed to assign label to chats"
                    ]))).tags("lists").sendLogs("create-new-list-failed");
                    return;
                }
            }
            if (i != null) {
                o("WAWebListsLogging").logListUpdate({
                    listId: i,
                    listAction: o("WAWebWamEnumListAction").LIST_ACTION.CREATE,
                    entryPoint,
                    chatsBeforeUpdate: [],
                    addedChats: chats,
                    removedChats: []
                });
                o("WAWebWamSmbListEventReporter").logSmbListEvent({
                    labelOperation: o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.ADD,
                    updateEntryPoint: entryPoint,
                    listId: i,
                    customListTitle: name
                });
                o("WAWebWamSmbListEventReporter").logSmbListEvent({
                    labelOperation: o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.VIEW,
                    updateEntryPoint: entryPoint,
                    listId: i,
                    smbListSurface: o("WAWebWamEnumSmbListSurfaceType").SMB_LIST_SURFACE_TYPE.NEW_LIST,
                    smbListFeatureName: o("WAWebWamEnumSmbListFeatureNameType").SMB_LIST_FEATURE_NAME_TYPE.LISTS_CREATION,
                    extraAttributes: JSON.stringify({
                        new_list_is_visible: true
                    })
                });
                o("WAWebWamLabelEventReporter").logLabelOperationEvent(o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.ADD, undefined, o("WAWebWamEnumLabelTargets").LABEL_TARGETS.LABEL);
                I(chats, {
                    entryPoint,
                    listId: i,
                    customListTitle: name,
                    listsApplied: String(i)
                });
                k(chats, i);
            }
            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "[Lists] created list id=",
                " color=",
                " chats=",
                ""
            ])), i, color, chats.length);
            return i;
        });
        return D.apply(this, arguments);
    }
    function x(e) {
        return $.apply(this, arguments);
    }
    function $() {
        $ = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ entryPoint, labelModel, newColor, newName, updatedAssociatedChats }) {
            const l = labelModel.name !== newName;
            const s = labelModel.colorIndex !== newColor;
            try {
                if (l || s) {
                    yield o("WAWebBizLabelEditingAction").labelEditAction(labelModel.id, newName, o("WAWebLabelConstants").mapLabelNameToPredefinedId(newName), newColor, labelModel.isActive, labelModel.type);
                }
            } catch (e) {
                o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[Lists] editListAction: failed to edit list properties"
                ]))).tags("lists").sendLogs("edit-list-failed");
                return;
            }
            const chatsBeforeUpdate = o("WAWebListsUtil").getAllChatsInList(labelModel);
            const c = o("WAWebListsUtil").getTwoArraysDifference(chatsBeforeUpdate, updatedAssociatedChats);
            const { addedItems, removedItems } = c;
            const suppressSuccessToast = l || s;
            const h = addedItems.length > 0;
            const y = removedItems.length > 0;
            try {
                if (h) {
                    const C = {
                        id: String(labelModel.id),
                        type: "add"
                    };
                    o("WAWebLabelCollection").LabelCollection.addOrRemoveLabels([
                        C
                    ], addedItems, {
                        suppressSuccessToast: suppressSuccessToast || y
                    });
                }
                if (y) {
                    const b = {
                        id: String(labelModel.id),
                        type: "remove"
                    };
                    o("WAWebLabelCollection").LabelCollection.addOrRemoveLabels([
                        b
                    ], removedItems, {
                        suppressSuccessToast
                    });
                }
            } catch (e) {
                o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[Lists] editListAction: failed to edit list chats"
                ]))).tags("lists").sendLogs("edit-list-failed");
                return;
            }
            if (l) {
                o("WAWebListsLogging").logListUpdate({
                    listId: Number(labelModel.id),
                    listAction: o("WAWebWamEnumListAction").LIST_ACTION.RENAME,
                    entryPoint
                });
                o("WAWebWamSmbListEventReporter").logSmbListEvent({
                    labelOperation: o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.RENAME,
                    updateEntryPoint: entryPoint,
                    listId: Number(labelModel.id),
                    customListTitle: newName
                });
            }
            if (s) {
                o("WAWebWamSmbListEventReporter").logSmbListEvent({
                    labelOperation: o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.UPDATED_COLOR,
                    updateEntryPoint: entryPoint,
                    listId: Number(labelModel.id)
                });
            }
            if (addedItems.length !== 0 || removedItems.length !== 0) {
                o("WAWebListsLogging").logListUpdate({
                    listId: Number(labelModel.id),
                    listAction: o("WAWebWamEnumListAction").LIST_ACTION.UPDATE_MEMBERS,
                    entryPoint,
                    chatsBeforeUpdate,
                    addedChats: addedItems,
                    removedChats: removedItems
                });
                const v = Number(labelModel.id);
                const S = String(v);
                I(addedItems, {
                    entryPoint,
                    listId: v,
                    customListTitle: labelModel.name,
                    listsApplied: S
                });
                I(removedItems, {
                    entryPoint,
                    listId: v,
                    customListTitle: labelModel.name,
                    listsRemoved: S
                });
                k(addedItems, v);
            }
            if (l || s) {
                o("WAWebWamLabelEventReporter").logLabelOperationEvent(o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.EDIT, undefined, o("WAWebWamEnumLabelTargets").LABEL_TARGETS.EDIT_LABEL_DIALOG);
            }
            o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                "[Lists] saved list id=",
                " color=",
                " chats=",
                ""
            ])), labelModel.id, newColor, updatedAssociatedChats.length);
        });
        return $.apply(this, arguments);
    }
    function P(e, t, n) {
        return N.apply(this, arguments);
    }
    function N() {
        N = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, r) {
            try {
                const i = o("WAWebLabelCollection").LabelCollection.get(e);
                if (i == null) {
                    o("WALogger").WARN(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                        "[Lists] deleteListAction: label not found id=",
                        ""
                    ])), e);
                    return (R || (R = n("Promise"))).resolve();
                }
                if (o("WAWebListUtils").hasFixedIdentity(i)) {
                    o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                        "[Lists] deleteListAction: refusing to delete app-owned list id=",
                        " type=",
                        ""
                    ])), e, String(i.type)).tags("lists").sendLogs("delete-app-owned-list-blocked");
                    return (R || (R = n("Promise"))).resolve();
                }
                yield o("WAWebBizLabelEditingAction").labelDeleteAction({
                    color: i.colorIndex,
                    labelId: i.id,
                    name: i.name
                });
                o("WAWebListsLogging").logListUpdate({
                    listId: Number(e),
                    listAction: o("WAWebWamEnumListAction").LIST_ACTION.DELETE,
                    entryPoint: r
                });
                o("WAWebWamSmbListEventReporter").logSmbListEvent({
                    labelOperation: o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.DELETE,
                    updateEntryPoint: r,
                    listId: Number(e),
                    customListTitle: i.name,
                    predefinedId: i.predefinedId ?? undefined
                });
                o("WAWebToastManager").ToastManager.open(E.jsx(o("WAWebToast.react").Toast, {
                    msg: s._("List deleted")
                }));
                o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                    '[Lists] Successfully deleted list: id: "',
                    '"'
                ])), e);
            } catch (t) {
                o("WALogger").ERROR(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                    '[Lists] deleteListAction: Failed deleting list with id:"',
                    '"'
                ])), e).tags("lists").sendLogs("delete-list-failed");
                o("WAWebToastManager").ToastManager.open(E.jsx(o("WAWebToast.react").Toast, {
                    msg: s._("Couldn't delete list")
                }));
            } finally{
                t();
            }
        });
        return N.apply(this, arguments);
    }
    function M(e) {
        return w.apply(this, arguments);
    }
    function w() {
        w = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                const t = o("WAWebLabelCollection").LabelCollection.getNextOrderIndex();
                yield o("WAWebBizLabelEditingAction").labelEditAction(e.id, e.name, e.predefinedId, e.colorIndex, true, e.type);
                e.orderIndex = t;
                o("WAWebToastManager").ToastManager.open(E.jsx(o("WAWebToast.react").Toast, {
                    msg: s._("List enabled")
                }));
            } catch (e) {
                o("WALogger").ERROR(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                    "[Lists] activatePresetList: failed to activate preset list"
                ]))).tags("lists").sendLogs("activate-preset-list-failed");
                o("WAWebToastManager").ToastManager.open(E.jsx(o("WAWebToast.react").Toast, {
                    msg: s._("Couldn't enable list")
                }));
            }
        });
        return w.apply(this, arguments);
    }
    function A(e) {
        return F.apply(this, arguments);
    }
    function F() {
        F = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (!o("WAWebListUtils").isDisableablePresetList(e.type)) {
                o("WALogger").ERROR(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                    "[Lists] deactivatePresetList: not a disableable preset list"
                ])));
                return;
            }
            try {
                yield o("WAWebBizLabelEditingAction").labelEditAction(e.id, e.name ?? "", e.predefinedId, e.colorIndex, false, e.type);
                o("WAWebToastManager").ToastManager.open(E.jsx(o("WAWebToast.react").Toast, {
                    msg: s._("List disabled")
                }));
            } catch (e) {
                o("WALogger").ERROR(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                    "[Lists] deactivatePresetList: deactivate failed"
                ]))).tags("lists").sendLogs("deactivate-preset-list-failed");
                o("WAWebToastManager").ToastManager.open(E.jsx(o("WAWebToast.react").Toast, {
                    msg: s._("Couldn't disable list")
                }));
            }
        });
        return F.apply(this, arguments);
    }
    function O(e) {
        return B.apply(this, arguments);
    }
    function B() {
        B = n("asyncToGeneratorRuntime").asyncToGenerator(function*(sortedLabelIds) {
            if (o("WAWebListsGatingUtils").isLabelReorderEnabled() && sortedLabelIds.length !== 0) {
                const t = sortedLabelIds.map((e)=>{
                    const n = o("WAWebLabelCollection").LabelCollection.get(String(e));
                    return {
                        id: String(e),
                        orderIndex: n?.orderIndex ?? 0
                    };
                });
                o("WAWebBIzLabelReorderAction").reorderLabelsAction(sortedLabelIds);
                o("WAWebWamSmbListEventReporter").logSmbListEvent({
                    labelOperation: o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.REORDER,
                    updateEntryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.LIST_SETTINGS,
                    currentListState: sortedLabelIds.join("+")
                });
                try {
                    const n = o("WAWebSyncdActionUtils").buildPendingMutation({
                        collection: o("WAWebSyncdConst").CollectionName.Regular,
                        indexArgs: [],
                        value: {
                            labelReorderingAction: {
                                sortedLabelIds
                            }
                        },
                        version: r("WAWebLabelReorderingSync").getVersion(),
                        operation: o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET,
                        timestamp: o("WATimeUtils").unixTimeMs(),
                        action: r("WAWebLabelReorderingSync").getAction()
                    });
                    yield o("WAWebSyncdCoreApi").lockForSync([
                        "label"
                    ], [
                        n
                    ], function() {
                        return o("WAWebDBLabelsReorder").writeLabelsSortOrder(sortedLabelIds);
                    });
                } catch (e) {
                    t.forEach(({ id, orderIndex })=>{
                        const r = o("WAWebLabelCollection").LabelCollection.get(id);
                        if (r) {
                            r.orderIndex = orderIndex;
                        }
                    });
                    o("WAWebLabelCollection").LabelCollection.trigger("reorder");
                    o("WAWebToastManager").ToastManager.open(E.jsx(o("WAWebToast.react").Toast, {
                        msg: s._("Could not reorder lists")
                    }));
                    o("WALogger").ERROR(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                        "[Lists] persistLabelReorder: failed to persist order"
                    ]))).sendLogs("lists-reorder-persist-failed");
                }
            }
        });
        return B.apply(this, arguments);
    }
    l.logCtwaSignalsForChats = k;
    l.logUpdateMembersPerChat = I;
    l.createNewListAction = T;
    l.editListAction = x;
    l.deleteListAction = P;
    l.activatePresetList = M;
    l.deactivatePresetList = A;
    l.persistLabelReorder = O;
}, 226);