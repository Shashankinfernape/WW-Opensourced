__d("WAWebArchivedChatlistHeaderDropdownItem.react", [
    "fbt",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebArchivedFlowLoadable",
    "WAWebChatFolderOpenWamEvent",
    "WAWebChatlistHeaderDropdownLogEvents",
    "WAWebDrawerManager",
    "WAWebWamEnumWebcMenuItemLabel",
    "WDSIconIcArchive.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c() {
        const e = o("react-compiler-runtime").c(1);
        const t = d;
        let n;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            const a = s._("Archived");
            const Component = r("WDSMenuItem.react");
            n = <Component title={a} testid="mi-archived menu-item" onPress={t} Icon={r("WDSIconIcArchive.react")}/>;
            e[0] = n;
        } else {
            n = e[0];
        }
        return n;
    }
    function d(e) {
        e?.stopPropagation();
        const Component = o("WAWebArchivedFlowLoadable").ArchivedFlowLoadable;
        o("WAWebDrawerManager").DrawerManager.openDrawerLeft(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
            descriptorType: "archived"
        } : <Component onEnd={o("WAWebDrawerManager").closeDrawerLeft}/>);
        new (o("WAWebChatFolderOpenWamEvent")).ChatFolderOpenWamEvent({
            folderType: "Archive"
        }).commit();
        o("WAWebChatlistHeaderDropdownLogEvents").logMenuEvent(o("WAWebWamEnumWebcMenuItemLabel").WEBC_MENU_ITEM_LABEL.ARCHIVED);
    }
    l.default = c;
}, 226);