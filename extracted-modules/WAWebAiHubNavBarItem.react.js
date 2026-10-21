__d("WAWebAiHubNavBarItem.react", [
    "WAWebBizAILargeScreensLogEvents",
    "WAWebBizAiAgentGating",
    "WAWebBizAiStrings",
    "WAWebBotUtils",
    "WAWebBusinessProfileGetters",
    "WAWebChatEntryPoint",
    "WAWebDrawerManager",
    "WAWebMobilePlatforms",
    "WAWebNavBarTypes",
    "WAWebOpenChatWithContactAction",
    "WAWebUseBusinessProfile.react",
    "WAWebUserPrefsMeUser",
    "WDSIconWdsIcWeave.react",
    "WDSMenuBarItem.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebBusinessProfileValues"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const e_useEffect = e.useEffect;
    function CComponent(e) {
        const a = o("react-compiler-runtime").c(12);
        const e_updateActiveNavBarItem = e.updateActiveNavBarItem;
        let l;
        if (a[0] === Symbol.for("react.memo_cache_sentinel")) {
            l = o("WAWebMobilePlatforms").isSMB();
            a[0] = l;
        } else {
            l = a[0];
        }
        const c = l;
        let d;
        if (a[1] === Symbol.for("react.memo_cache_sentinel")) {
            d = c ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow() : null;
            a[1] = d;
        } else {
            d = a[1];
        }
        const m = d;
        o("WAWebUseBusinessProfile.react").useBusinessProfile(m);
        const p = o("useWAWebBusinessProfileValues").useOptionalBusinessProfileValues(m, [
            o("WAWebBusinessProfileGetters").getIsBizBot1p
        ])?.[0] === true;
        let _;
        if (a[2] !== p) {
            _ = c && p === true && !o("WAWebBizAiAgentGating").isBizAiWebAgentChatDisabled() && o("WAWebBizAiAgentGating").isBizAIHubChatNavItemEnabled();
            a[2] = p;
            a[3] = _;
        } else {
            _ = a[3];
        }
        const f = _;
        let g;
        let h;
        if (a[4] !== f) {
            g = function() {
                if (f) {
                    o("WAWebBizAILargeScreensLogEvents").logViewAiHubNavEntryPoint();
                }
            };
            h = [
                f
            ];
            a[4] = f;
            a[5] = g;
            a[6] = h;
        } else {
            g = a[5];
            h = a[6];
        }
        e_useEffect(g, h);
        if (!f) {
            return null;
        }
        let y;
        if (a[7] !== e_updateActiveNavBarItem) {
            y = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    o("WAWebBizAILargeScreensLogEvents").logClickAiHubNavEntryPoint();
                    const e = yield o("WAWebDrawerManager").DrawerManager.closeDrawerLeftAsync();
                    if (e) {
                        o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen();
                        e_updateActiveNavBarItem(o("WAWebNavBarTypes").NavBarItems.Chats);
                        o("WAWebOpenChatWithContactAction").openChatWithContact({
                            chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.MetaAINavigationBar,
                            findChatOrigin: "chatlist",
                            opts: {
                                skipComposeBoxFocus: true
                            },
                            targetId: o("WAWebBotUtils").MAIBA_AI_HUB_LID_WID
                        });
                    }
                });
                return function() {
                    return e.apply(this, arguments);
                };
            })();
            a[7] = e_updateActiveNavBarItem;
            a[8] = y;
        } else {
            y = a[8];
        }
        const C = y;
        let b;
        if (a[9] === Symbol.for("react.memo_cache_sentinel")) {
            b = o("WAWebBizAiStrings").getBizAiHubTitle();
            a[9] = b;
        } else {
            b = a[9];
        }
        let v;
        if (a[10] !== C) {
            const Component = r("WDSMenuBarItem.react");
            v = <Component icon={r("WDSIconWdsIcWeave.react")} title={b} testid="navbar-item-ai-hub" isActive={false} onClick={C} delayTooltipMs={0} tabOrder={-1} tooltipPosition="end"/>;
            a[10] = C;
            a[11] = v;
        } else {
            v = a[11];
        }
        return v;
    }
    l.default = CComponent;
}, 98);