__d("WAWebDefaultCommandPalettePlugin", [
    "Promise",
    "WAWebBotProfileCollection",
    "WAWebChatCollection",
    "WAWebChatListMenuItem.react",
    "WAWebChatSearchModel",
    "WAWebChatlistUtils",
    "WAWebCommandPaletteController",
    "WAWebContact.MenuItem",
    "WAWebContactSearchGatingUtils",
    "WAWebContactSearchModel",
    "WAWebDefaultUserIcon.react",
    "WAWebFlex.react",
    "WAWebFrontendChatGetters",
    "WAWebHeaderInfoPanelActions",
    "WAWebKeyboardShortcut.react",
    "WAWebLexicalWAWebMenu.react",
    "WAWebNonContactPushNameSearchModel",
    "WAWebNoop",
    "WAWebResolveBotProfile",
    "WAWebSearchCollection",
    "WAWebSettingSearchModel",
    "WAWebSettings.MenuItem",
    "WAWebStaticMenuItem.react",
    "WAWebWamEnumProfileEntryPoint",
    "WDSIconIcPerson.react",
    "WDSIconIcSchedule.react",
    "WDSIconIcSettingsFilled.react",
    "WDSIconWdsIcAi.react",
    "WDSIconWdsIcChat.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
    "useWAWebStableCallback"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useEffect, useMemo, useState } = c;
    const _ = {
        tealColor: {
            color: "x1v5yvga",
            $$css: true
        }
    };
    function F1Component(e) {
        const t = o("react-compiler-runtime").c(5);
        const { icon, title } = e;
        let a;
        if (t[0] !== icon) {
            const Component = o("WAWebFlex.react").FlexItem;
            a = <Component paddingEnd={8}>{icon}</Component>;
            t[0] = icon;
            t[1] = a;
        } else {
            a = t[1];
        }
        let i;
        if (t[2] !== a || t[3] !== title) {
            const Component = o("WAWebFlex.react").FlexRow;
            const Component_1 = o("WAWebStaticMenuItem.react").MenuHeading;
            i = <Component_1><Component align="center">{a}{title}</Component></Component_1>;
            t[2] = a;
            t[3] = title;
            t[4] = i;
        } else {
            i = t[4];
        }
        return i;
    }
    function g(e) {
        if (o("WAWebResolveBotProfile").shouldHideMuseBotFromCachedProfile(e.id)) {
            o("WAWebHeaderInfoPanelActions").openInfoPanel({
                chat: e,
                profileEntryPoint: o("WAWebWamEnumProfileEntryPoint").PROFILE_ENTRY_POINT.SEARCH,
                uim: null
            });
            return;
        }
        o("WAWebChatlistUtils").openExistingChat(e.id).catch(r("WAWebNoop"));
    }
    function H1Component() {
        const e = o("react-compiler-runtime").c(6);
        const t = o("WAWebCommandPaletteController").useCommandPalette();
        let n = 0;
        let a;
        if (e[0] !== t || e[1] !== n) {
            const i = [];
            for(let l = o("WAWebChatCollection").ChatCollection.getModelsArray(), s = 0; s < l.length; s++){
                const c = l[s];
                if (!c.active && o("WAWebFrontendChatGetters").getShouldAppearInList(c)) {
                    i.push(c);
                    if (c.pin == null) {
                        n++;
                    }
                }
                if (n === 3) {
                    break;
                }
            }
            const d = i.sort(y).slice(0, 3);
            let m;
            if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
                m = <F1Component icon={u.jsx(r("WDSIconIcSchedule.react"), {})} title="Recent Chats"/>;
                e[3] = m;
            } else {
                m = e[3];
            }
            let p;
            if (e[4] !== t) {
                p = function(n) {
                    const Component = o("WAWebChatListMenuItem.react").ChatMenuItem;
                    return <Component key={n.id.toString()} chat={n} onSelect={function() {
                        g(n);
                        t.closeModal();
                    }} optionId={`recent-chat-${n.id.toString()}`}/>;
                };
                e[4] = t;
                e[5] = p;
            } else {
                p = e[5];
            }
            const Component = o("WAWebLexicalWAWebMenu.react").LexicalWAWebMenu;
            a = <Component forceSelection>{m}{d.map(p)}</Component>;
            e[0] = t;
            e[1] = n;
            e[2] = a;
        } else {
            a = e[2];
        }
        return a;
    }
    function y(e, t) {
        return (t.t ?? 0) - (e.t ?? 0);
    }
    function CComponent(e) {
        const t = o("react-compiler-runtime").c(38);
        const e_section = e.section;
        const a = o("WAWebCommandPaletteController").useCommandPalette();
        switch(e_section.type){
            case "setting":
                {
                    let i;
                    if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
                        i = <F1Component icon={u.jsx(r("WDSIconIcSettingsFilled.react"), {
                            iconXstyle: _.tealColor,
                            height: 16,
                            width: 16
                        })} title="Settings"/>;
                        t[0] = i;
                    } else {
                        i = t[0];
                    }
                    let onSelect;
                    if (t[1] !== a) {
                        onSelect = function(t) {
                            o("WAWebSettings.MenuItem").openSettingDrawer(t.step);
                            a.closeModal();
                        };
                        t[1] = a;
                        t[2] = onSelect;
                    } else {
                        onSelect = t[2];
                    }
                    let settings;
                    if (t[3] !== e_section.results) {
                        settings = e_section.results.map(b);
                        t[3] = e_section.results;
                        t[4] = settings;
                    } else {
                        settings = t[4];
                    }
                    let c;
                    if (t[5] !== onSelect || t[6] !== settings) {
                        const Component = o("WAWebSettings.MenuItem").SettingsMenu;
                        c = <>{i}<Component onSelect={onSelect} settings={settings}/></>;
                        t[5] = onSelect;
                        t[6] = settings;
                        t[7] = c;
                    } else {
                        c = t[7];
                    }
                    return c;
                }
            case "chat":
                {
                    let d;
                    if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
                        d = <F1Component icon={u.jsx(r("WDSIconWdsIcChat.react"), {
                            iconXstyle: _.tealColor,
                            height: 24,
                            width: 24
                        })} title="Chats"/>;
                        t[8] = d;
                    } else {
                        d = t[8];
                    }
                    let m;
                    if (t[9] !== a || t[10] !== e_section.results || t[11] !== e_section.type) {
                        let p;
                        if (t[13] !== a || t[14] !== e_section.type) {
                            p = function(t) {
                                const Component = o("WAWebChatListMenuItem.react").ChatMenuItem;
                                return <Component key={`${e_section.type}-${t.id}`} chat={t.data} onSelect={function() {
                                    g(t.data);
                                    a.closeModal();
                                }} optionId={`context-menu-chat-${t.id}`}/>;
                            };
                            t[13] = a;
                            t[14] = e_section.type;
                            t[15] = p;
                        } else {
                            p = t[15];
                        }
                        m = e_section.results.map(p);
                        t[9] = a;
                        t[10] = e_section.results;
                        t[11] = e_section.type;
                        t[12] = m;
                    } else {
                        m = t[12];
                    }
                    let h;
                    if (t[16] !== m) {
                        h = <>{d}{m}</>;
                        t[16] = m;
                        t[17] = h;
                    } else {
                        h = t[17];
                    }
                    return h;
                }
            case "contact":
                {
                    let y;
                    if (t[18] === Symbol.for("react.memo_cache_sentinel")) {
                        y = <F1Component icon={u.jsx(r("WDSIconIcPerson.react"), {
                            iconXstyle: _.tealColor,
                            height: 24,
                            width: 24
                        })} title="Contacts"/>;
                        t[18] = y;
                    } else {
                        y = t[18];
                    }
                    let C;
                    if (t[19] !== a || t[20] !== e_section.results || t[21] !== e_section.type) {
                        let v;
                        if (t[23] !== a || t[24] !== e_section.type) {
                            v = function(t) {
                                const Component = r("WAWebContact.MenuItem");
                                return <Component key={`${e_section.type}-${t.id}`} contact={t.data} onSelect={function() {
                                    if (!o("WAWebResolveBotProfile").shouldHideMuseBotFromCachedProfile(t.data.id)) {
                                        o("WAWebChatlistUtils").openOrCreateLatestChat(t.data.id).catch(r("WAWebNoop"));
                                        a.closeModal();
                                    }
                                }}/>;
                            };
                            t[23] = a;
                            t[24] = e_section.type;
                            t[25] = v;
                        } else {
                            v = t[25];
                        }
                        C = e_section.results.map(v);
                        t[19] = a;
                        t[20] = e_section.results;
                        t[21] = e_section.type;
                        t[22] = C;
                    } else {
                        C = t[22];
                    }
                    let S;
                    if (t[26] !== C) {
                        S = <>{y}{C}</>;
                        t[26] = C;
                        t[27] = S;
                    } else {
                        S = t[27];
                    }
                    return S;
                }
            case "non-contact-pushname":
                {
                    let R;
                    if (t[28] === Symbol.for("react.memo_cache_sentinel")) {
                        R = <F1Component title={o("WAWebNonContactPushNameSearchModel").getNonContactPushNameHeader()} icon={u.jsx(o("WAWebDefaultUserIcon.react").DefaultUserIcon, {
                            width: 24,
                            height: 24
                        })}/>;
                        t[28] = R;
                    } else {
                        R = t[28];
                    }
                    let L;
                    if (t[29] !== a || t[30] !== e_section.results || t[31] !== e_section.type) {
                        let E;
                        if (t[33] !== a || t[34] !== e_section.type) {
                            E = function(t) {
                                const Component = r("WAWebContact.MenuItem");
                                return <Component key={`${e_section.type}-${t.id}`} contact={t.data} onSelect={function() {
                                    if (!o("WAWebResolveBotProfile").shouldHideMuseBotFromCachedProfile(t.data.id)) {
                                        o("WAWebChatlistUtils").openOrCreateLatestChat(t.data.id).catch(r("WAWebNoop"));
                                        a.closeModal();
                                    }
                                }}/>;
                            };
                            t[33] = a;
                            t[34] = e_section.type;
                            t[35] = E;
                        } else {
                            E = t[35];
                        }
                        L = e_section.results.map(E);
                        t[29] = a;
                        t[30] = e_section.results;
                        t[31] = e_section.type;
                        t[32] = L;
                    } else {
                        L = t[32];
                    }
                    let k;
                    if (t[36] !== L) {
                        k = <>{R}{L}</>;
                        t[36] = L;
                        t[37] = k;
                    } else {
                        k = t[37];
                    }
                    return k;
                }
            default:
                return;
        }
    }
    function b(e) {
        return e.data;
    }
    function V1Component() {
        const e = o("react-compiler-runtime").c(7);
        const t = o("WAWebCommandPaletteController").useCommandPalette();
        let n;
        if (e[0] !== t.pluginList) {
            n = t.pluginList?.some(S);
            e[0] = t.pluginList;
            e[1] = n;
        } else {
            n = e[1];
        }
        const a = n === true;
        let i;
        if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
            i = <H1Component/>;
            e[2] = i;
        } else {
            i = e[2];
        }
        let l;
        if (e[3] !== a) {
            l = a && <RComponent/>;
            e[3] = a;
            e[4] = l;
        } else {
            l = e[4];
        }
        let s;
        if (e[5] !== l) {
            s = <>{i}{l}</>;
            e[5] = l;
            e[6] = s;
        } else {
            s = e[6];
        }
        return s;
    }
    function S(e) {
        return e.plugin.id === "HelpCommandPalettePlugin";
    }
    function RComponent() {
        const e = o("react-compiler-runtime").c(4);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = u.jsx(o("WAWebStaticMenuItem.react").MenuSeparator, {});
            e[0] = t;
        } else {
            t = e[0];
        }
        let padding;
        let a;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            padding = [
                8,
                24,
                16,
                24
            ];
            a = u.jsx(r("WDSIconWdsIcAi.react"), {
                iconXstyle: _.tealColor,
                height: 32,
                width: 32
            });
            e[1] = padding;
            e[2] = a;
        } else {
            padding = e[1];
            a = e[2];
        }
        let i;
        if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSText.react");
            const Component_1 = o("WAWebFlex.react").FlexRow;
            i = <>{t}<Component_1 align="center" gap={16} padding={padding}>{a}<Component type="Body1" colorName="contentDeemphasized">Type {u.jsx(o("WAWebKeyboardShortcut.react").KeyboardKey, {
                value: "/?"
            })} to see available plugins</Component></Component_1></>;
            e[3] = i;
        } else {
            i = e[3];
        }
        return i;
    }
    function L(e) {
        const i = e.find((e)=>e.type === "non-contact-pushname");
        if (i == null || i.results.length === 0) {
            return e;
        }
        const l = e.find((e)=>e.type === "chat")?.results ?? [];
        const s = e.find((e)=>e.type === "contact")?.results ?? [];
        const u = new Set(o("WAWebNonContactPushNameSearchModel").dedupeNonContactPushnames(i.results.map((e)=>e.data), l.map((e)=>e.data), s.map((e)=>e.data)).map((e)=>e.id.toString()));
        return e.map((e)=>{
            if (e === i) {
                return babelHelpers.extends({}, e, {
                    results: e.results.filter((e)=>u.has(e.data.id.toString()))
                });
            }
            return e;
        });
    }
    function EComponent() {
        const t = o("react-compiler-runtime").c(13);
        const a = o("WAWebCommandPaletteController").useCommandPalette();
        let i;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = [];
            t[0] = i;
        } else {
            i = t[0];
        }
        const l = useState(i);
        const s = l[0];
        const c = l[1];
        let m;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            m = new (o("WAWebSearchCollection")).SearchCollection([
                new (o("WAWebSettingSearchModel")).SettingSearch({
                    maxPageLength: 3
                }),
                new (o("WAWebChatSearchModel")).ChatSearch({
                    maxPageLength: 4
                }),
                new (o("WAWebContactSearchModel")).ContactSearch({
                    maxPageLength: 4
                })
            ].concat(o("WAWebContactSearchGatingUtils").isNonContactPushNameSearchEnabled() ? [
                o("WAWebNonContactPushNameSearchModel").getNonContactPushNameSearch()
            ] : []));
            t[1] = m;
        } else {
            m = t[1];
        }
        const _ = m;
        let f;
        if (t[2] !== a.input) {
            f = function() {
                (e || (e = n("Promise"))).all(_.query(a.input)).then((e)=>c(e)).catch(r("WAWebNoop"));
            };
            t[2] = a.input;
            t[3] = f;
        } else {
            f = t[3];
        }
        const g = r("useWAWebStableCallback")(f);
        let h;
        let y;
        if (t[4] !== a.input) {
            h = function() {
                (e || (e = n("Promise"))).all(_.query(a.input)).then((e)=>c(e)).catch(r("WAWebNoop"));
            };
            y = [
                _,
                a.input
            ];
            t[4] = a.input;
            t[5] = h;
            t[6] = y;
        } else {
            h = t[5];
            y = t[6];
        }
        useEffect(h, y);
        let C;
        if (t[7] === Symbol.for("react.memo_cache_sentinel")) {
            C = [
                "add",
                "change:product"
            ];
            t[7] = C;
        } else {
            C = t[7];
        }
        o("useWAWebListener").useListener(o("WAWebBotProfileCollection").BotProfileCollection, C, g);
        if (a.input === "") {
            let b;
            if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
                b = <V1Component/>;
                t[8] = b;
            } else {
                b = t[8];
            }
            return b;
        }
        let S;
        if (t[9] !== s) {
            S = L(s).map(KComponent);
            t[9] = s;
            t[10] = S;
        } else {
            S = t[10];
        }
        let R;
        if (t[11] !== S) {
            const Component = o("WAWebLexicalWAWebMenu.react").LexicalWAWebMenu;
            R = <Component forceSelection>{S}</Component>;
            t[11] = S;
            t[12] = R;
        } else {
            R = t[12];
        }
        return R;
    }
    function KComponent(section) {
        return section.results.length > 0 && <CComponent key={section.type} section={section}/>;
    }
    const I = {
        id: "DefaultCommand",
        placeholder: "Search anything",
        shortName: null,
        Component: EComponent
    };
    l.DefaultCommandPalettePlugin = I;
}, 98);