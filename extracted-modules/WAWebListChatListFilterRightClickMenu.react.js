__d("WAWebListChatListFilterRightClickMenu.react", [
    "fbt",
    "WAWebCreateOrEditListDrawer.react",
    "WAWebDrawerManager",
    "WAWebLabelCollection",
    "WAWebLabelFlowLoadable",
    "WAWebListUtils",
    "WAWebListsActions",
    "WAWebListsGatingUtils",
    "WAWebListsUtil",
    "WAWebNonEmptyString",
    "WAWebSchemaLabel",
    "WAWebWamEnumUpdateEntryPoint",
    "WDSIconIcDelete.react",
    "WDSIconIcDragHandle.react",
    "WDSIconIcEdit.react",
    "WDSIconIcSwitchAccount.react",
    "WDSIconIcVisibilityOff.react",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        if (!o("WAWebListsGatingUtils").isListsM2Enabled()) {
            return false;
        }
        if (e == null) {
            return true;
        }
        switch(e){
            case o("WAWebSchemaLabel").ListType.CUSTOM:
            case o("WAWebSchemaLabel").ListType.PREDEFINED:
            case o("WAWebSchemaLabel").ListType.FAVORITES:
            case o("WAWebSchemaLabel").ListType.UNREAD:
            case o("WAWebSchemaLabel").ListType.GROUPS:
            case o("WAWebSchemaLabel").ListType.COMMUNITY:
            case o("WAWebSchemaLabel").ListType.MENTIONS_AND_REPLIES:
                return true;
            case o("WAWebSchemaLabel").ListType.NONE:
            case o("WAWebSchemaLabel").ListType.SERVER_ASSIGNED:
            case o("WAWebSchemaLabel").ListType.DRAFTED:
            case o("WAWebSchemaLabel").ListType.AI_HANDOFF:
            case o("WAWebSchemaLabel").ListType.CHANNELS:
            case o("WAWebSchemaLabel").ListType.AI_RESPONDING:
            case o("WAWebSchemaLabel").ListType.LEAD:
                return false;
        }
    }
    function d(e, t) {
        if (!c(e)) {
            return null;
        }
        const n = o("WAWebNonEmptyString").asMaybeNonEmptyString(t);
        if (e == null) {
            const a = function() {
                o("WAWebDrawerManager").DrawerManager.openDrawerLeft(u.jsx(o("WAWebLabelFlowLoadable").LabelFlowLoadable, {
                    isInitialStep: true,
                    entryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.FILTER_CONTEXT_MENU
                }));
            };
            const i = function() {
                o("WAWebDrawerManager").DrawerManager.openDrawerLeft(u.jsx(o("WAWebLabelFlowLoadable").LabelFlowLoadable, {
                    isInitialStep: true,
                    startInReorderMode: true,
                    entryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.LIST_SETTINGS
                }));
            };
            const Component = r("WDSMenuItem.react");
            const Component_1 = r("WDSMenuItem.react");
            const Component_2 = r("WDSMenu.react");
            return <Component_2><Component Icon={r("WDSIconIcSwitchAccount.react")} title={s._("Manage lists")} onPress={a} testid="mi-manage-lists"/>{u.jsx(r("WDSMenuItem.react"), {
                type: "separator"
            })}<Component_1 Icon={r("WDSIconIcDragHandle.react")} title={s._("Reorder")} onPress={i} testid="mi-reorder"/></Component_2>;
        }
        if (n != null && e === o("WAWebSchemaLabel").ListType.FAVORITES) {
            const LComponent = function() {
                const Component = r("WAWebCreateOrEditListDrawer.react");
                o("WAWebDrawerManager").DrawerManager.openDrawerLeft(<Component listId={n} onBack={o("WAWebDrawerManager").closeDrawerLeft} onClose={o("WAWebDrawerManager").closeDrawerLeft} entryPoint={o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.FILTER_CONTEXT_MENU}/>);
            };
            const Component = r("WDSMenuItem.react");
            const Component_1 = r("WDSMenu.react");
            return <Component_1><Component Icon={r("WDSIconIcEdit.react")} title={s._("Change")} onPress={LComponent} testid="mi-change"/></Component_1>;
        }
        if (n != null && o("WAWebListUtils").isDisableablePresetList(e)) {
            const d = function() {
                const e = o("WAWebLabelCollection").LabelCollection.get(n);
                if (e != null) {
                    o("WAWebListsActions").deactivatePresetList(e);
                }
            };
            const Component = r("WDSMenuItem.react");
            const Component_1 = r("WDSMenu.react");
            return <Component_1><Component Icon={r("WDSIconIcVisibilityOff.react")} title={s._("Disable")} destructive onPress={d} testid="mi-disable"/></Component_1>;
        }
        if (n != null && (e === o("WAWebSchemaLabel").ListType.CUSTOM || e === o("WAWebSchemaLabel").ListType.PREDEFINED)) {
            const m = o("WAWebLabelCollection").LabelCollection.get(n);
            const p = m?.isImmutable !== true;
            const _ = function() {
                const Component = r("WAWebCreateOrEditListDrawer.react");
                o("WAWebDrawerManager").DrawerManager.openDrawerLeft(<Component listId={n} onBack={o("WAWebDrawerManager").closeDrawerLeft} onClose={o("WAWebDrawerManager").closeDrawerLeft} entryPoint={o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.FILTER_CONTEXT_MENU}/>);
            };
            const Component = r("WDSMenuItem.react");
            const Component_1 = r("WDSMenuItem.react");
            const Component_2 = r("WDSMenu.react");
            return <Component_2><Component Icon={r("WDSIconIcEdit.react")} title={s._("Edit")} onPress={_} testid="mi-edit"/>{p && <>{u.jsx(r("WDSMenuItem.react"), {
                type: "separator"
            })}<Component_1 Icon={r("WDSIconIcDelete.react")} title={s._("Delete list")} onPress={function() {
                return o("WAWebListsUtil").openListDeleteConfirmPopup(n, o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.FILTER_CONTEXT_MENU);
            }} destructive testid="mi-delete"/></>}</Component_2>;
        }
        return null;
    }
    l.allowToDisplayListFilterPillContextMenu = c;
    l.buildFilterPillContextMenu = d;
}, 226);