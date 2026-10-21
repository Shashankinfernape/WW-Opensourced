__d("WAWebProfileNavBarItem.react", [
    "fbt",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebBizProfileGatingUtils",
    "WAWebConnModel",
    "WAWebContactCollection",
    "WAWebDetailImage.react",
    "WAWebDrawerManager",
    "WAWebGetBizProfileDrawerContent",
    "WAWebKeyboardTabUtils",
    "WAWebMidDrawerEmptyState.react",
    "WAWebNavBarLogEvents",
    "WAWebNavBarTypes",
    "WAWebProfilePicThumbCollection",
    "WAWebTextStatusCollection",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumEntryPoint",
    "WAWebWamEnumWebcNavbarItemLabel",
    "WDSMenuBarItem.react",
    "asyncToGeneratorRuntime",
    "cr:1923",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const e_useMemo = e.useMemo;
    const d = {
        profilePictureWrapper: {
            borderStartStartRadius: "x1c9tyrk",
            borderStartEndRadius: "xeusxvb",
            borderEndEndRadius: "x1pahc9y",
            borderEndStartRadius: "x1ertn4p",
            $$css: true
        },
        profilePictureActive: {
            outline: "x139wjo3",
            $$css: true
        }
    };
    function m(e) {
        const t = o("react-compiler-runtime").c(12);
        const { activeNavBarItem, updateActiveNavBarItem } = e;
        let l;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            l = o("WAWebUserPrefsMeUser").getMeUserOrThrow();
            t[0] = l;
        } else {
            l = t[0];
        }
        const c = l;
        let m;
        if (t[1] !== activeNavBarItem || t[2] !== updateActiveNavBarItem) {
            m = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    if (activeNavBarItem !== o("WAWebNavBarTypes").NavBarItems.Profile) {
                        const status = o("WAWebTextStatusCollection").TextStatusCollection.assertGet(c);
                        const profilePicThumb = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.assertGet(c);
                        const contact = o("WAWebContactCollection").ContactCollection.assertGet(c);
                        const s = o("WAWebBizProfileGatingUtils").businessProfileRefreshEnabled();
                        if (s) {
                            const d = yield o("WAWebDrawerManager").DrawerManager.closeDrawerLeftAsync();
                            if (!d) {
                                return;
                            }
                            updateActiveNavBarItem(o("WAWebNavBarTypes").NavBarItems.Profile);
                            o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(r("WAWebGetBizProfileDrawerContent")(o("WAWebWamEnumEntryPoint").ENTRY_POINT.NAV_BAR, p));
                            o("WAWebNavBarLogEvents").logNavBarEvent(o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL.PROFILE);
                            return;
                        }
                        const Component = n("cr:1923");
                        const m = yield o("WAWebDrawerManager").DrawerManager.openDrawerLeftAsync(<Component status={status} profilePicThumb={profilePicThumb} contact={contact} conn={o("WAWebConnModel").Conn} entryPoint={o("WAWebWamEnumEntryPoint").ENTRY_POINT.NAV_BAR} onClose={o("WAWebDrawerManager").closeDrawerLeft} isInitialStep/>, {
                            focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                            transition: "pop-drawer-fast",
                            focusOnUnMount: true
                        });
                        if (m) {
                            updateActiveNavBarItem(o("WAWebNavBarTypes").NavBarItems.Profile);
                            o("WAWebNavBarLogEvents").logNavBarEvent(o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL.PROFILE);
                            o("WAWebDrawerManager").DrawerManager.openDrawerMid(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
                                descriptorType: "mid_drawer_empty_state",
                                navBarItem: o("WAWebNavBarTypes").NavBarItems.Profile
                            } : u.jsx(o("WAWebMidDrawerEmptyState.react").MidDrawerEmptyState, {
                                type: o("WAWebNavBarTypes").NavBarItems.Profile
                            }), {
                                transition: "none",
                                disableRotateFocus: true
                            });
                        }
                    }
                });
                return function() {
                    return e.apply(this, arguments);
                };
            })();
            t[1] = activeNavBarItem;
            t[2] = updateActiveNavBarItem;
            t[3] = m;
        } else {
            m = t[3];
        }
        const _ = m;
        const f = activeNavBarItem === o("WAWebNavBarTypes").NavBarItems.Profile;
        let g;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            g = s._("Profile picture");
            t[4] = g;
        } else {
            g = t[4];
        }
        const h = f && d.profilePictureActive;
        let y;
        if (t[5] !== h) {
            y = u.jsx(o("WAWebDetailImage.react").DetailImage, {
                ariaLabel: g,
                testId: "navbar-item-profile-photo",
                theme: "chatlist_header_profile_photo",
                tabIndex: -1,
                id: c,
                size: 28,
                xstyle: [
                    d.profilePictureWrapper,
                    h
                ]
            });
            t[5] = h;
            t[6] = y;
        } else {
            y = t[6];
        }
        const C = y;
        let b;
        if (t[7] === Symbol.for("react.memo_cache_sentinel")) {
            b = s._("Profile");
            t[7] = b;
        } else {
            b = t[7];
        }
        let v;
        if (t[8] !== _ || t[9] !== f || t[10] !== C) {
            const Component = r("WDSMenuBarItem.react");
            v = <Component testid="navbar-item-profile" customIcon={C} title={b} onClick={_} isActive={f} delayTooltipMs={0} tabOrder={-1} tooltipPosition="end"/>;
            t[8] = _;
            t[9] = f;
            t[10] = C;
            t[11] = v;
        } else {
            v = t[11];
        }
        return v;
    }
    function p() {
        return o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen();
    }
    l.ProfileNavBarItem = m;
}, 226);