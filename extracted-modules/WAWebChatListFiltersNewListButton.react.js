__d("WAWebChatListFiltersNewListButton.react", [
    "fbt",
    "WAWebCreateOrEditListDrawer.react",
    "WAWebDrawerManager",
    "WAWebListsIntroPopupLoadable",
    "WAWebMobilePlatforms",
    "WAWebModalManager",
    "WAWebNux",
    "WAWebSMBListsIntroPopup.react",
    "WAWebTabOrder",
    "WAWebWamEnumUpdateEntryPoint",
    "WDSChip.react",
    "WDSIconIcAdd.react",
    "react",
    "react-compiler-runtime",
    "useMergeRefs",
    "useWAWebNux"
], function(t, n, r, o, a, i, l, s) {
    const e = [
        "ref"
    ];
    let u;
    const c = u || (u = o("react"));
    const u_useRef = u.useRef;
    function m(t) {
        const a = o("react-compiler-runtime").c(18);
        let i;
        let l;
        if (a[0] !== t) {
            l = t.ref;
            i = babelHelpers.objectWithoutPropertiesLoose(t, e);
            a[0] = t;
            a[1] = i;
            a[2] = l;
        } else {
            i = a[1];
            l = a[2];
        }
        const u = u_useRef(null);
        const m = r("useMergeRefs")(l, u);
        const _ = o("WAWebMobilePlatforms").isSMB() ? o("WAWebNux").NUX.SMB_LISTS_INTRO : o("WAWebNux").NUX.ADD_TO_LISTS;
        const f = r("useWAWebNux")(_);
        const g = f[0];
        const h = f[1];
        const y = p;
        let C;
        if (a[3] !== g || a[4] !== h) {
            C = function() {
                if (g) {
                    const E = o("WAWebMobilePlatforms").isSMB() ? o("WAWebSMBListsIntroPopup.react").SMBListsIntroPopup : o("WAWebListsIntroPopupLoadable").ListsIntroPopupLoadable;
                    o("WAWebModalManager").ModalManager.open(<E onContinue={function() {
                        h();
                        y();
                    }}/>);
                } else {
                    y();
                }
            };
            a[3] = g;
            a[4] = h;
            a[5] = C;
        } else {
            C = a[5];
        }
        const b = C;
        let v;
        if (a[6] === Symbol.for("react.memo_cache_sentinel")) {
            v = s._("New list");
            a[6] = v;
        } else {
            v = a[6];
        }
        const S = v;
        const R = i.onFocus ?? undefined;
        const { "aria-selected": aria_selected, "aria-controls": aria_controls } = i;
        let k;
        if (a[7] !== b || a[8] !== m || a[9] !== i.id || a[10] !== i.role || a[11] !== R || a[12] !== aria_selected || a[13] !== aria_controls) {
            const Component = r("WDSChip.react");
            k = <Component ref={m} id={i.id} label={S} onPress={b} onFocus={R} role={i.role} aria-selected={aria_selected} aria-controls={aria_controls} aria-label={S} Icon={r("WDSIconIcAdd.react")} iconOnly testid="chat_list_new_list_pill"/>;
            a[7] = b;
            a[8] = m;
            a[9] = i.id;
            a[10] = i.role;
            a[11] = R;
            a[12] = aria_selected;
            a[13] = aria_controls;
            a[14] = k;
        } else {
            k = a[14];
        }
        let I;
        if (a[15] !== i.tabIndex || a[16] !== k) {
            I = <div tabIndex={i.tabIndex} data-tab={o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_FILTER}>{k}</div>;
            a[15] = i.tabIndex;
            a[16] = k;
            a[17] = I;
        } else {
            I = a[17];
        }
        return I;
    }
    function p() {
        const Component = r("WAWebCreateOrEditListDrawer.react");
        o("WAWebDrawerManager").DrawerManager.openDrawerLeft(<Component onBack={o("WAWebDrawerManager").closeDrawerLeft} onClose={o("WAWebDrawerManager").closeDrawerLeft} entryPoint={o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.ADD_LIST_FILTER}/>, {
            focusOnUnMount: true
        });
    }
    l.default = m;
}, 226);