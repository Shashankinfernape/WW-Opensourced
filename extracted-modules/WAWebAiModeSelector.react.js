__d("WAWebAiModeSelector.react", [
    "fbt",
    "WAWebAiModeSelectorUtils",
    "WAWebBotBaseGating",
    "WAWebBotJourneyLogger",
    "WAWebDynamicAIModesCache",
    "WAWebGetAvailableBotSelectionModes",
    "WAWebMaybeGetBotModeSelection",
    "WAWebUpdateBotModeSelectionAction",
    "WAWebWamEnumTsSurface",
    "WDSChip.react",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "WDSTooltip.react",
    "react",
    "react-compiler-runtime",
    "useWAWebBotModeSelection",
    "useWAWebDynamicBotModeOverride",
    "useWAWebModeSelectionImpressionLogging",
    "useWAWebResolvedBotMode",
    "useWDSMenu"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    const c = e;
    const { useEffect, useRef, useState } = c;
    function _(e) {
        const t = o("react-compiler-runtime").c(9);
        const { chat, threadId } = e;
        const i = o("useWAWebResolvedBotMode").useWAWebResolvedBotMode(chat, threadId);
        const { icon, subtitle, title } = i;
        const d = o("useWAWebModeSelectionImpressionLogging").useWAWebModeSelectionImpressionLogging();
        let m;
        if (t[0] !== icon || t[1] !== title) {
            m = u.jsx(r("WDSChip.react"), {
                Icon: icon,
                label: title,
                isNeutral: true,
                testid: "chat_thread_ai_mode_selector_chip",
                isDisabled: true
            });
            t[0] = icon;
            t[1] = title;
            t[2] = m;
        } else {
            m = t[2];
        }
        const p = m;
        let _;
        if (t[3] !== p || t[4] !== subtitle) {
            const Component = r("WDSTooltip.react");
            _ = subtitle != null ? <Component label={subtitle}>{p}</Component> : p;
            t[3] = p;
            t[4] = subtitle;
            t[5] = _;
        } else {
            _ = t[5];
        }
        let f;
        if (t[6] !== _ || t[7] !== d) {
            f = <div ref={d}>{_}</div>;
            t[6] = _;
            t[7] = d;
            t[8] = f;
        } else {
            f = t[8];
        }
        return f;
    }
    function F1Component(e) {
        const t = o("react-compiler-runtime").c(19);
        const { chat, threadId } = e;
        const i = o("useWAWebBotModeSelection").useWAWebBotModeSelection(chat, threadId);
        const l = i[0];
        const s = useState(null);
        const c = s[0];
        const _ = s[1];
        const f = useState(l);
        const h = f[0];
        const y = f[1];
        const C = o("useWAWebModeSelectionImpressionLogging").useWAWebModeSelectionImpressionLogging();
        if (l !== h) {
            y(l);
            _(null);
        }
        const b = c ?? l;
        let v;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            v = [];
            t[0] = v;
        } else {
            v = t[0];
        }
        useEffect(g, v);
        let S;
        if (t[1] !== b) {
            S = o("WAWebAiModeSelectorUtils").getBotUserSelectModeIcon(b);
            t[1] = b;
            t[2] = S;
        } else {
            S = t[2];
        }
        const R = S;
        let L;
        if (t[3] !== b) {
            L = o("WAWebAiModeSelectorUtils").getBotUserSelectModeTitle(b);
            t[3] = b;
            t[4] = L;
        } else {
            L = t[4];
        }
        const E = L;
        const kRef = useRef(null);
        const I = (t)=>{
            _(t);
            o("WAWebBotJourneyLogger").BotJourneyLogger.logModeSelectionClick();
            o("WAWebUpdateBotModeSelectionAction").persistBotModeSelection({
                chat,
                threadId,
                botModeSelection: [
                    t
                ]
            });
            N();
        };
        const Component = r("WDSMenu.react");
        const T = r("useWDSMenu")({
            targetRef: kRef,
            menu: <Component>{o("WAWebGetAvailableBotSelectionModes").getAvailableBotSelectionModes().map((e)=>{
                const Component = r("WDSMenuItem.react");
                return <Component key={`ai-mode-${String(e)}`} testid={`ai-mode-${String(e)}`} Icon={o("WAWebAiModeSelectorUtils").getBotUserSelectModeIcon(e)} title={o("WAWebAiModeSelectorUtils").getBotUserSelectModeTitle(e)} subtitle={o("WAWebAiModeSelectorUtils").getBotUserSelectModeSubtitle(e)} isToggleable toggled={e === b} onPress={function() {
                    return I(e);
                }}/>;
            })}</Component>,
            position: "above",
            align: "end"
        });
        const { closeMenu, isMenuOpen, menuPortal, openMenu } = T;
        var N = closeMenu;
        const MRef = useRef(false);
        let w;
        let A;
        if (t[5] !== isMenuOpen) {
            w = function() {
                const MRef_current = MRef.current;
                MRef.current = isMenuOpen;
                if (isMenuOpen && !MRef_current) {
                    o("WAWebBotJourneyLogger").BotJourneyLogger.logModeSelectionImpression(o("WAWebWamEnumTsSurface").TS_SURFACE.META_AI_MODE_SELECTION_BOTTOM_SHEET);
                }
            };
            A = [
                isMenuOpen
            ];
            t[5] = isMenuOpen;
            t[6] = w;
            t[7] = A;
        } else {
            w = t[6];
            A = t[7];
        }
        useEffect(w, A);
        let F;
        if (t[8] !== openMenu) {
            F = function() {
                o("WAWebBotJourneyLogger").BotJourneyLogger.logModeSelectionClick();
                openMenu();
            };
            t[8] = openMenu;
            t[9] = F;
        } else {
            F = t[9];
        }
        const O = F;
        let B;
        if (t[10] !== R || t[11] !== O || t[12] !== isMenuOpen || t[13] !== E) {
            const Component = r("WDSChip.react");
            B = <Component ref={kRef} Icon={R} label={E} isNeutral onPress={O} aria-expanded={isMenuOpen} isSelected={isMenuOpen} testid="chat_thread_ai_mode_selector_chip"/>;
            t[10] = R;
            t[11] = O;
            t[12] = isMenuOpen;
            t[13] = E;
            t[14] = B;
        } else {
            B = t[14];
        }
        let W;
        if (t[15] !== menuPortal || t[16] !== B || t[17] !== C) {
            W = <div ref={C}>{B}{menuPortal}</div>;
            t[15] = menuPortal;
            t[16] = B;
            t[17] = C;
            t[18] = W;
        } else {
            W = t[18];
        }
        return W;
    }
    function g() {
        return h;
    }
    function h() {
        o("WAWebMaybeGetBotModeSelection").clearInMemoryBotMode();
    }
    function Y3Component(e) {
        const n = o("react-compiler-runtime").c(24);
        const { chat, threadId } = e;
        const l = o("useWAWebDynamicBotModeOverride").useWAWebDynamicBotModeOverride(chat, threadId);
        const c = useState(null);
        const _ = c[0];
        const f = c[1];
        const g = useState(l);
        const h = g[0];
        const y = g[1];
        if (l !== h) {
            y(l);
            f(null);
        }
        const b = o("WAWebDynamicAIModesCache").getStaleCachedDynamicAIModes() ?? [];
        let v;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            v = o("WAWebDynamicAIModesCache").getDefaultDynamicAIMode();
            n[0] = v;
        } else {
            v = n[0];
        }
        const S = v;
        const R = _ ?? l;
        const L = R != null && b.length > 0 && !b.some((e)=>e.modeId === R.modeId);
        const E = L ? S : R ?? S;
        const k = b.length <= 1;
        let I;
        let T;
        if (n[1] !== chat || n[2] !== L || n[3] !== k || n[4] !== threadId) {
            I = function() {
                if (L && !k) {
                    o("WAWebUpdateBotModeSelectionAction").persistDynamicBotModeOverride({
                        chat,
                        threadId,
                        botModeOverride: [
                            S.modeId
                        ]
                    });
                }
            };
            T = [
                L,
                k,
                chat,
                threadId,
                S.modeId
            ];
            n[1] = chat;
            n[2] = L;
            n[3] = k;
            n[4] = threadId;
            n[5] = I;
            n[6] = T;
        } else {
            I = n[5];
            T = n[6];
        }
        useEffect(I, T);
        let D;
        if (n[7] === Symbol.for("react.memo_cache_sentinel")) {
            D = [];
            n[7] = D;
        } else {
            D = n[7];
        }
        useEffect(C, D);
        const x = o("useWAWebModeSelectionImpressionLogging").useWAWebModeSelectionImpressionLogging();
        let $;
        if (n[8] !== E.type) {
            $ = o("WAWebAiModeSelectorUtils").getDynamicModeIcon(E.type);
            n[8] = E.type;
            n[9] = $;
        } else {
            $ = n[9];
        }
        const P = $;
        const NRef = useRef(null);
        const M = (t)=>{
            f(t);
            o("WAWebBotJourneyLogger").BotJourneyLogger.logModeSelectionClick();
            o("WAWebUpdateBotModeSelectionAction").persistDynamicBotModeOverride({
                chat,
                threadId,
                botModeOverride: [
                    t.modeId
                ]
            });
            W();
        };
        const Component = r("WDSMenu.react");
        const w = r("useWDSMenu")({
            targetRef: NRef,
            menu: <Component>{b.map((e)=>{
                const subtitle = e.isExperimental ? s._("{subtitle} · {internalTag}", [
                    s._param("subtitle", e.subtitle),
                    s._param("internalTag", s._("Internal only"))
                ]) : e.subtitle;
                const Component = r("WDSMenuItem.react");
                return <Component key={`ai-mode-${e.modeId}`} testid={`ai-mode-${e.modeId}`} Icon={o("WAWebAiModeSelectorUtils").getDynamicModeIcon(e.type)} title={e.title} subtitle={subtitle} isToggleable toggled={E.modeId === e.modeId} onPress={function() {
                    return M(e);
                }}/>;
            })}</Component>,
            position: "above",
            align: "end"
        });
        const { closeMenu, isMenuOpen, menuPortal, openMenu } = w;
        var W = closeMenu;
        const qRef = useRef(false);
        let U;
        let V;
        if (n[10] !== isMenuOpen) {
            U = function() {
                const qRef_current = qRef.current;
                qRef.current = isMenuOpen;
                if (isMenuOpen && !qRef_current) {
                    o("WAWebBotJourneyLogger").BotJourneyLogger.logModeSelectionImpression(o("WAWebWamEnumTsSurface").TS_SURFACE.META_AI_MODE_SELECTION_BOTTOM_SHEET);
                }
            };
            V = [
                isMenuOpen
            ];
            n[10] = isMenuOpen;
            n[11] = U;
            n[12] = V;
        } else {
            U = n[11];
            V = n[12];
        }
        useEffect(U, V);
        let H;
        if (n[13] !== openMenu) {
            H = function() {
                o("WAWebBotJourneyLogger").BotJourneyLogger.logModeSelectionClick();
                openMenu();
            };
            n[13] = openMenu;
            n[14] = H;
        } else {
            H = n[14];
        }
        const G = H;
        if (k) {
            return null;
        }
        let z;
        if (n[15] !== P || n[16] !== E.title || n[17] !== G || n[18] !== isMenuOpen) {
            const Component = r("WDSChip.react");
            z = <Component ref={NRef} Icon={P} label={E.title} isNeutral onPress={G} aria-expanded={isMenuOpen} isSelected={isMenuOpen} testid="chat_thread_ai_mode_selector_chip"/>;
            n[15] = P;
            n[16] = E.title;
            n[17] = G;
            n[18] = isMenuOpen;
            n[19] = z;
        } else {
            z = n[19];
        }
        let j;
        if (n[20] !== menuPortal || n[21] !== z || n[22] !== x) {
            j = <div ref={x}>{z}{menuPortal}</div>;
            n[20] = menuPortal;
            n[21] = z;
            n[22] = x;
            n[23] = j;
        } else {
            j = n[23];
        }
        return j;
    }
    function C() {
        return b;
    }
    function b() {
        o("WAWebMaybeGetBotModeSelection").clearInMemoryBotModeOverride();
    }
    function VComponent(e) {
        const t = o("react-compiler-runtime").c(9);
        const { chat, isInteractive, threadId } = e;
        const i = isInteractive === undefined ? false : isInteractive;
        if (o("WAWebBotBaseGating").isDynamicModeSelectorEnabled()) {
            if (!i) {
                return null;
            }
            let l;
            if (t[0] !== chat || t[1] !== threadId) {
                l = <Y3Component chat={chat} threadId={threadId}/>;
                t[0] = chat;
                t[1] = threadId;
                t[2] = l;
            } else {
                l = t[2];
            }
            return l;
        }
        if (i) {
            let s;
            if (t[3] !== chat || t[4] !== threadId) {
                s = <F1Component chat={chat} threadId={threadId}/>;
                t[3] = chat;
                t[4] = threadId;
                t[5] = s;
            } else {
                s = t[5];
            }
            return s;
        }
        let c;
        if (t[6] !== chat || t[7] !== threadId) {
            c = <_ chat={chat} threadId={threadId}/>;
            t[6] = chat;
            t[7] = threadId;
            t[8] = c;
        } else {
            c = t[8];
        }
        return c;
    }
    l.default = VComponent;
}, 226);