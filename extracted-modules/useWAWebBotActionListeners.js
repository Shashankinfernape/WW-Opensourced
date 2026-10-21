__d("useWAWebBotActionListeners", [
    "WAWebCmd",
    "WAWebDrawerManager",
    "WAWebKeyboardTabUtils",
    "WAWebMetaAiThreadDrawerLoadable",
    "WAWebNavBarTypes",
    "WAWebThreadJourneyLogger",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
    "useWAWebUIM"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const e_useEffect = e.useEffect;
    function c(e, t) {
        const n = o("react-compiler-runtime").c(7);
        const a = r("useWAWebUIM")();
        let i;
        let l;
        if (n[0] !== e) {
            i = function() {
                if (e !== o("WAWebNavBarTypes").NavBarItems.MetaAI) {
                    o("WAWebThreadJourneyLogger").ThreadJourneyLogger.clearAiThreadLoggingContext();
                }
            };
            l = [
                e
            ];
            n[0] = e;
            n[1] = i;
            n[2] = l;
        } else {
            i = n[1];
            l = n[2];
        }
        e_useEffect(i, l);
        let c;
        if (n[3] !== e || n[4] !== a || n[5] !== t) {
            c = function(r, threadEntryPoint) {
                if (e !== o("WAWebNavBarTypes").NavBarItems.MetaAI) {
                    t(o("WAWebNavBarTypes").NavBarItems.MetaAI);
                }
                o("WAWebThreadJourneyLogger").ThreadJourneyLogger.maybeGenAiSessionId();
                o("WAWebDrawerManager").DrawerManager.openDrawerLeft(s.jsx(o("WAWebMetaAiThreadDrawerLoadable").MetaAiThreadDrawerFlowLoadable, {
                    chat: r,
                    threadEntryPoint
                }), {
                    uim: a,
                    focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                    transition: "pop-drawer-fast",
                    focusOnUnMount: true,
                    disableRotateFocus: true
                });
            };
            n[3] = e;
            n[4] = a;
            n[5] = t;
            n[6] = c;
        } else {
            c = n[6];
        }
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "open_meta_ai_thread_drawer", c);
    }
    l.default = c;
}, 98);