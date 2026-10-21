__d("WAWebNewGroupChatlistHeaderDropdownItem.react", [
    "fbt",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebChatlistHeaderDropdownLogEvents",
    "WAWebDrawerManager",
    "WAWebModalManager",
    "WAWebNewGroupFlowLoadable",
    "WAWebReachoutTimelockRestrictedModalLoadable",
    "WAWebReachoutTimelockUtils",
    "WAWebWamEnumWebcMenuItemLabel",
    "WDSIconIcGroupAdd.react",
    "WDSMenuItem.react",
    "asyncToGeneratorRuntime",
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
            const a = s._("New group");
            const Component = r("WDSMenuItem.react");
            n = <Component Icon={r("WDSIconIcGroupAdd.react")} title={a} onPress={t} testid="mi-new-group menu-item"/>;
            e[0] = n;
        } else {
            n = e[0];
        }
        return n;
    }
    function d(e) {
        if (o("WAWebReachoutTimelockUtils").isUserReachoutTimelocked()) {
            o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebReachoutTimelockRestrictedModalLoadable").ReachoutTimelockRestrictedModalLoadable, {}));
            return;
        }
        e?.stopPropagation();
        const Component = o("WAWebNewGroupFlowLoadable").NewGroupFlowLoadable;
        o("WAWebDrawerManager").DrawerManager.openDrawerLeft(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
            descriptorType: "new_group",
            isSubFlow: false
        } : <Component onEnd={o("WAWebDrawerManager").closeDrawerLeft} onCreateGroup={m} isSubFlow={false}/>);
        o("WAWebChatlistHeaderDropdownLogEvents").logMenuEvent(o("WAWebWamEnumWebcMenuItemLabel").WEBC_MENU_ITEM_LABEL.NEW_GROUP);
    }
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                const t = yield e;
                if (t != null) {
                    o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
                }
            } catch (e) {}
        });
        return p.apply(this, arguments);
    }
    l.default = c;
}, 226);