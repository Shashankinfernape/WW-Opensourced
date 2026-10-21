__d("WAWebMeTabNavBarItem.react", [
    "fbt",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebAppRootInteractionContext.react",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebDrawerManager",
    "WAWebInitialsFromNameUtils",
    "WAWebInteractionTracePolicy",
    "WAWebIntroPanelV2.react",
    "WAWebMeTabFlowLoadable",
    "WAWebNavBarLogEvents",
    "WAWebNavBarTypes",
    "WAWebProfilePicThumbCollection",
    "WAWebProfilePicThumbGetters",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumWebcNavbarItemLabel",
    "WDSMenuBarItem.react",
    "WDSProfilePhoto.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebContactValues",
    "useWAWebDefaultProfileColors",
    "useWAWebNavigateToRouterPage",
    "useWAWebProfilePicThumbValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(15);
        const { activeNavBarItem, updateActiveNavBarItem } = e;
        let l;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            l = {
                manualHold: false,
                shouldUseNavigationAsInteraction: true,
                tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_ME_TAB
            };
            t[0] = l;
        } else {
            l = t[0];
        }
        const c = o("WAWebAppRootInteractionContext.react").useInteractionWithAppRootContext(l);
        const c_startInteraction = c.startInteraction;
        let p;
        if (t[1] !== updateActiveNavBarItem) {
            p = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    const Component = o("WAWebMeTabFlowLoadable").MeTabFlowLoadable;
                    const e = yield o("WAWebDrawerManager").DrawerManager.openDrawerLeftAsync(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
                        descriptorType: "profile"
                    } : <Component onEnd={o("WAWebDrawerManager").closeDrawerLeft}/>, {
                        disableRotateFocus: true,
                        transition: "none",
                        focusOnUnMount: true
                    });
                    if (e) {
                        updateActiveNavBarItem(o("WAWebNavBarTypes").NavBarItems.MeTab);
                        o("WAWebDrawerManager").DrawerManager.openDrawerMid(u.jsx(r("WAWebIntroPanelV2.react"), {}), {
                            transition: "none",
                            disableRotateFocus: true
                        });
                        o("WAWebNavBarLogEvents").logNavBarEvent(o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL.PROFILE);
                    }
                });
                return function() {
                    return e.apply(this, arguments);
                };
            })();
            t[1] = updateActiveNavBarItem;
            t[2] = p;
        } else {
            p = t[2];
        }
        const _ = p;
        let f;
        if (t[3] !== _) {
            f = {
                onNavigationTransitioning: _
            };
            t[3] = _;
            t[4] = f;
        } else {
            f = t[4];
        }
        const g = r("useWAWebNavigateToRouterPage")(o("WAWebNavBarTypes").NavBarItems.Chats, f);
        let h;
        if (t[5] !== activeNavBarItem || t[6] !== _ || t[7] !== g || t[8] !== c_startInteraction) {
            h = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    if (activeNavBarItem !== o("WAWebNavBarTypes").NavBarItems.MeTab) {
                        c_startInteraction();
                        if (g != null) {
                            g();
                            return;
                        }
                        return _();
                    }
                });
                return function() {
                    return e.apply(this, arguments);
                };
            })();
            t[5] = activeNavBarItem;
            t[6] = _;
            t[7] = g;
            t[8] = c_startInteraction;
            t[9] = h;
        } else {
            h = t[9];
        }
        const y = h;
        const C = activeNavBarItem === o("WAWebNavBarTypes").NavBarItems.MeTab;
        let b;
        if (t[10] === Symbol.for("react.memo_cache_sentinel")) {
            const meUser = o("WAWebUserPrefsMeUser").getMeUserOrThrow();
            b = <D4 meUser={meUser}/>;
            t[10] = b;
        } else {
            b = t[10];
        }
        const S = b;
        let R;
        if (t[11] === Symbol.for("react.memo_cache_sentinel")) {
            R = s._("You");
            t[11] = R;
        } else {
            R = t[11];
        }
        let L;
        if (t[12] !== y || t[13] !== C) {
            const Component = r("WDSMenuBarItem.react");
            L = <Component customIcon={S} title={R} testid="navbar-item-me-tab" isActive={C} onClick={y} delayTooltipMs={0} tabOrder={-1} tooltipPosition="end"/>;
            t[12] = y;
            t[13] = C;
            t[14] = L;
        } else {
            L = t[14];
        }
        return L;
    }
    function D4(e) {
        const t = o("react-compiler-runtime").c(16);
        const e_meUser = e.meUser;
        let a;
        if (t[0] !== e_meUser) {
            a = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.gadd(e_meUser);
            t[0] = e_meUser;
            t[1] = a;
        } else {
            a = t[1];
        }
        const i = a;
        let l;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            l = [
                o("WAWebProfilePicThumbGetters").getImg
            ];
            t[2] = l;
        } else {
            l = t[2];
        }
        const c = o("useWAWebProfilePicThumbValues").useProfilePicThumbValues(i.id, l);
        const d = c[0];
        let m;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            let p;
            m = [
                (p = o("WAWebContactGetters")).getName,
                p.getShortName,
                p.getPushname,
                p.getVerifiedName
            ];
            t[3] = m;
        } else {
            m = t[3];
        }
        o("useWAWebContactValues").useOptionalContactValues(e_meUser, m);
        let _;
        if (t[4] !== e_meUser) {
            const f = o("WAWebContactCollection").ContactCollection.get(e_meUser);
            _ = f != null ? o("WAWebInitialsFromNameUtils").getInitialsFromContact(f) : {
                firstInitial: undefined,
                secondInitial: undefined
            };
            t[4] = e_meUser;
            t[5] = _;
        } else {
            _ = t[5];
        }
        const g = _;
        const { firstInitial, secondInitial } = g;
        let C;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
            C = s._("Me");
            t[6] = C;
        } else {
            C = t[6];
        }
        let color;
        if (t[7] !== e_meUser) {
            color = o("useWAWebDefaultProfileColors").getWDSProfilePhotoColor(e_meUser);
            t[7] = e_meUser;
            t[8] = color;
        } else {
            color = t[8];
        }
        let v;
        if (t[9] !== firstInitial || t[10] !== secondInitial) {
            v = [
                firstInitial,
                secondInitial
            ].filter(Boolean);
            t[9] = firstInitial;
            t[10] = secondInitial;
            t[11] = v;
        } else {
            v = t[11];
        }
        const initials = v.join("");
        let R;
        if (t[12] !== d || t[13] !== color || t[14] !== initials) {
            R = u.jsx(r("WDSProfilePhoto.react"), {
                type: "person",
                size: "xxSmall",
                name: C,
                src: d,
                color,
                initials,
                isDecorative: true,
                testid: "navbar-item-me-tab-photo"
            });
            t[12] = d;
            t[13] = color;
            t[14] = initials;
            t[15] = R;
        } else {
            R = t[15];
        }
        return R;
    }
    l.MeTabNavBarItem = c;
}, 226);