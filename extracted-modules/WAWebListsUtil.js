__d("WAWebListsUtil", [
    "fbt",
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebChatMessageSearch",
    "WAWebChatSearchFilters",
    "WAWebConfirmPopup.react",
    "WAWebFavoritesUtils",
    "WAWebFbtCommon",
    "WAWebGroupMetadataTypeUtils",
    "WAWebGroupType",
    "WAWebListItemParentType",
    "WAWebListUtils",
    "WAWebListsActions",
    "WAWebModalManager",
    "WAWebSchemaLabel",
    "WAWebWamEnumLabelOperations",
    "WAWebWamEnumLabelTargets",
    "WAWebWamLabelEventReporter",
    "WDSConfirmDialog.react",
    "WDSDialogBridge",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e, t) {
        o("WAWebWamLabelEventReporter").logLabelOperationEvent(o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.CLICK_POSITIVE, e, o("WAWebWamEnumLabelTargets").LABEL_TARGETS.LABEL_COMBINED_DIALOG, t ?? undefined);
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ length }) {
            c(length);
        });
        return m.apply(this, arguments);
    }
    function p(e) {
        e: return e.type === o("WAWebSchemaLabel").ListType.FAVORITES ? o("WAWebFavoritesUtils").getFavoriteChats() : e.type === o("WAWebSchemaLabel").ListType.UNREAD ? o("WAWebChatCollection").ChatCollection.filter((e)=>e.unreadCount !== 0 && !e.archive && !e.isLocked) : e.type === o("WAWebSchemaLabel").ListType.GROUPS ? o("WAWebChatCollection").ChatCollection.filter((e)=>{
            if (e.archive || e.isLocked) {
                return false;
            }
            const t = o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(e.groupMetadata);
            return o("WAWebChatGetters").getIsGroup(e) && t !== o("WAWebGroupType").GroupType.COMMUNITY && t !== o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP && t !== o("WAWebGroupType").GroupType.LINKED_SUBGROUP && t !== o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP;
        }) : e.type === o("WAWebSchemaLabel").ListType.COMMUNITY ? o("WAWebChatCollection").ChatCollection.filter((e)=>{
            if (e.archive || e.isLocked) {
                return false;
            }
            const t = o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(e.groupMetadata);
            return o("WAWebChatGetters").getIsGroup(e) && (t === o("WAWebGroupType").GroupType.COMMUNITY || t === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP || t === o("WAWebGroupType").GroupType.LINKED_SUBGROUP || t === o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP);
        }) : e.type === o("WAWebSchemaLabel").ListType.AI_HANDOFF ? o("WAWebChatCollection").ChatCollection.filter((e)=>!e.archive && !e.isLocked && o("WAWebChatMessageSearch").matchFilter(e, {
                kind: o("WAWebChatSearchFilters").SearchFilters.AI_HANDOFF
            })) : e.type === o("WAWebSchemaLabel").ListType.AI_RESPONDING ? o("WAWebChatCollection").ChatCollection.filter((e)=>!e.archive && !e.isLocked && o("WAWebChatMessageSearch").matchFilter(e, {
                kind: o("WAWebChatSearchFilters").SearchFilters.AI_RESPONDING
            })) : e.labelItemCollection.reduce((acc, item)=>{
            if (item == null || item.parentType !== o("WAWebListItemParentType").LabelItemParentType.Chat) {
                return acc;
            }
            const n = o("WAWebChatCollection").ChatCollection.get(item.parentId);
            if (n != null) {
                acc.push(n);
            }
            return acc;
        }, []);
    }
    function _(e, t) {
        const n = new Set(e);
        const r = new Set(t);
        const addedItems = [];
        for (const a of r){
            if (!n.has(a)) {
                addedItems.push(a);
            }
        }
        const removedItems = [];
        for (const l of n){
            if (!r.has(l)) {
                removedItems.push(l);
            }
        }
        return {
            removedItems,
            addedItems
        };
    }
    function FComponent(e, t, n) {
        const a = s._("Delete this list?");
        const Component = r("WDSConfirmDialog.react");
        o("WDSDialogBridge").openWDSDialog(<Component title={a} description={s._("Your chats with people and groups won't be deleted.")} confirmLabel={s._("Delete")} destructive onConfirm={function() {
            o("WAWebListsActions").deleteListAction(e, o("WDSDialogBridge").closeWDSDialog, t).then(()=>{
                n?.();
            });
        }} onDismiss={o("WDSDialogBridge").closeWDSDialog} open/>);
    }
    function GComponent(e, t) {
        const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
        o("WAWebModalManager").ModalManager.open(<Component testid="disable-list-confirm-popup" title={s._("Disable list?")} okButtonType="solid-warning" okText={s._("Disable")} onOK={function() {
            o("WAWebListsActions").deactivatePresetList(e).then(()=>{
                o("WAWebModalManager").closeModalManager();
                t?.();
            });
        }} onCancel={o("WAWebModalManager").closeModalManager}>{s._("You can re-enable it from your lists settings at any time.")}</Component>);
    }
    function HComponent() {
        const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
        o("WAWebModalManager").ModalManager.openAlert(<Component onOK={function() {
            return o("WAWebModalManager").ModalManager.closeAlert();
        }} okText={r("WAWebFbtCommon")("OK")}>{o("WAWebListUtils").getReachMaxLabelCountText()}</Component>);
    }
    function YComponent() {
        const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
        o("WAWebModalManager").ModalManager.openAlert(<Component testid="list-min-chats-alert" onOK={function() {
            return o("WAWebModalManager").ModalManager.closeAlert();
        }} okText={r("WAWebFbtCommon")("OK")}>{s._("Lists must include at least 1 chat.")}</Component>);
    }
    l.logLabelOperationEventsForModels = d;
    l.getAllChatsInList = p;
    l.getTwoArraysDifference = _;
    l.openListDeleteConfirmPopup = FComponent;
    l.openListDisableConfirmPopup = GComponent;
    l.showMaxListsModal = HComponent;
    l.showMinChatsModal = YComponent;
}, 226);