__d("WAWebMetaBotNavBarItem.react", [
    "fbt",
    "WALogger",
    "WAWebAppRootInteractionContext.react",
    "WAWebBotBaseGating",
    "WAWebBotFrontendUtils",
    "WAWebBotGating",
    "WAWebBotJourneyLogger",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebDrawerManager",
    "WAWebHatchNavBarItemLoadable",
    "WAWebInteractionTracePolicy",
    "WAWebMetaAIIcon.react",
    "WAWebNavBarLogEvents",
    "WAWebNavBarTypes",
    "WAWebOpenMetaAIHomeAction",
    "WAWebThreadJourneyLogger",
    "WAWebWamEnumMetaAiActionEntryPoint",
    "WAWebWamEnumWebcNavbarItemLabel",
    "WDSMenuBarItem.react",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebEventTargetValue"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    const f = _ || (_ = o("react"));
    const g = _;
    const { useEffect, useRef } = g;
    function C({ activeNavBarItem, isMuseEntryPoint, updateActiveNavBarItem }) {
        const _ = b();
        const g = o("WAWebAppRootInteractionContext.react").useInteractionWithAppRootContext({
            manualHold: false,
            shouldUseNavigationAsInteraction: true,
            tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_METABOT
        });
        const g_startInteraction = g.startInteraction;
        const vRef = useRef(activeNavBarItem);
        useEffect(function() {
            vRef.current = activeNavBarItem;
        }, [
            activeNavBarItem
        ]);
        if (isMuseEntryPoint) {
            return f.jsx(r("WAWebHatchNavBarItemLoadable"), {
                updateActiveNavBarItem
            });
        }
        const S = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (o("WAWebBotBaseGating").isMetaAIHomeEnabled()) {
                    if (activeNavBarItem === o("WAWebNavBarTypes").NavBarItems.MetaAI) {
                        return;
                    }
                    g_startInteraction();
                    const t = yield o("WAWebDrawerManager").DrawerManager.closeDrawerLeftAsync();
                    if (!t) {
                        return;
                    }
                    o("WAWebBotJourneyLogger").BotJourneyLogger.logFabClick({
                        isMetaAiAssistant: true
                    });
                    updateActiveNavBarItem(o("WAWebNavBarTypes").NavBarItems.MetaAI);
                    if (o("WAWebBotGating").isAiChatThreadsEnabled()) {
                        o("WAWebBotFrontendUtils").getMetaAiChat().then((e)=>o("WAWebBotFrontendUtils").runMetaAiThreadsFlow(e, {
                                type: "MetaAiNavigationBar"
                            })).catch((t)=>{
                            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                "[MetaBotNavBarItem] getMetaAiChat failed"
                            ])));
                        });
                    } else {
                        o("WAWebOpenMetaAIHomeAction").openMetaAIHome();
                    }
                    return;
                }
                const n = o("WAWebBotGating").isAiChatThreadsEnabled();
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[MetaBotNavBarItem] handleMetaBotClick threadsEnabled=",
                    ""
                ])), String(n));
                if (n) {
                    o("WAWebBotJourneyLogger").BotJourneyLogger.logFabClick({
                        isMetaAiAssistant: true
                    });
                    g_startInteraction();
                    o("WAWebBotFrontendUtils").getMetaAiChat().then((e)=>{
                        const vRef_current = vRef.current;
                        if (vRef_current !== o("WAWebNavBarTypes").NavBarItems.MetaAI && vRef_current !== activeNavBarItem) {
                            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                                "[MetaBotNavBarItem] flow aborted: user navigated to ",
                                ""
                            ])), vRef_current);
                            return;
                        }
                        o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                            "[MetaBotNavBarItem] getMetaAiChat -> runMetaAiThreadsFlow"
                        ])));
                        o("WAWebBotFrontendUtils").runMetaAiThreadsFlow(e, {
                            type: "MetaAiNavigationBar"
                        });
                    }).catch((e)=>{
                        o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                            "[MetaBotNavBarItem] getMetaAiChat failed"
                        ])));
                    });
                    o("WAWebThreadJourneyLogger").ThreadJourneyLogger.logNewChatClick(o("WAWebWamEnumMetaAiActionEntryPoint").META_AI_ACTION_ENTRY_POINT.NAVIGATION_BAR_BUTTON);
                } else {
                    o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "[MetaBotNavBarItem] using legacy openMetaBotChat flow"
                    ])));
                    o("WAWebBotJourneyLogger").BotJourneyLogger.logFabClick({
                        isMetaAiAssistant: true
                    });
                    g_startInteraction();
                    o("WAWebBotFrontendUtils").openMetaBotChat(o("WAWebChatEntryPoint").ChatEntryPoint.BotChatListShortcut);
                    const r = yield o("WAWebDrawerManager").DrawerManager.closeDrawerLeftAsync();
                    if (r) {
                        updateActiveNavBarItem(o("WAWebNavBarTypes").NavBarItems.Chats);
                        o("WAWebNavBarLogEvents").logNavBarEvent(o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL.CHATS);
                    }
                }
            });
            return function() {
                return t.apply(this, arguments);
            };
        })();
        const isActive = activeNavBarItem === o("WAWebNavBarTypes").NavBarItems.MetaAI;
        const L = f.jsx(r("WAWebMetaAIIcon.react"), {});
        const E = s._("Meta AI");
        const Component = r("WDSMenuBarItem.react");
        return _ && <Component customIcon={L} title={E} testid="navbar-item-metabot" isActive={isActive} onClick={S} delayTooltipMs={0} tabOrder={-1} tooltipPosition="end"/>;
    }
    C.displayName = `${C.name} [from ${i.id}]`;
    function b() {
        return r("useWAWebEventTargetValue")(o("WAWebCmd").Cmd, "on_ab_props_update_from_bridge", v);
    }
    function v() {
        return o("WAWebBotGating").isBotShortcutEntryPointEnabled();
    }
    l.MetaBotNavBarItem = C;
}, 226);