__d("WAWebStickerPanel.react", [
    "fbt",
    "WAWebCircledPlusCustomIcon",
    "WAWebCmd",
    "WAWebDrawerManager",
    "WAWebEmojiPickerConstants",
    "WAWebKeyboardTabUtils",
    "WAWebMiscGatingUtils",
    "WAWebPanelsDisplayLocation",
    "WAWebPanelsMenu.react",
    "WAWebPanelsMenuTab.react",
    "WAWebStickerPanelContent.react",
    "WAWebStickerPickerOpenedWamEvent",
    "WAWebStickerStoreFlowLoadable",
    "WAWebStickerStoreOpenedWamEvent",
    "WAWebStopEvent",
    "WAWebWaPlusBenefitJourneyLogger",
    "WAWebWamEnumWpbujBenefitType",
    "WAWebWamEnumWpbujSurface",
    "WDSIconIcCake.react",
    "WDSIconIcFavorite.react",
    "WDSIconIcGrade.react",
    "WDSIconIcSchedule.react",
    "WDSIconIcSentimentDissatisfied.react",
    "WDSIconIcSentimentExcited.react",
    "WDSIconIcSentimentExtremelyDissatisfied.react",
    "WDSIconIcWavingHand.react",
    "react",
    "useLazyRef",
    "useWAWebOnUnmount",
    "useWAWebUiIdle"
], function(t, n, r, o, a, i, l, s) {
    const e = [
        "ref"
    ];
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useEffect, useImperativeHandle, useMemo, useRef, useState } = d;
    function HComponent(t) {
        let a;
        const t_ref = t.ref;
        const l = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const l_displayLocation = l.displayLocation;
        const u = l_displayLocation === undefined ? o("WAWebPanelsDisplayLocation").DisplayLocation.Dropdown : l_displayLocation;
        const d = u === o("WAWebPanelsDisplayLocation").DisplayLocation.ComposeBox || u === o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel;
        const h = o("WAWebMiscGatingUtils").isFavoriteStickersEnabled();
        const S = useMemo(function() {
            const e = [];
            e.push(o("WAWebEmojiPickerConstants").StickerTabs.RECENTS);
            if (h) {
                e.push(o("WAWebEmojiPickerConstants").StickerTabs.FAVORITES);
            }
            e.push(o("WAWebEmojiPickerConstants").StickerTabs.LOVE, o("WAWebEmojiPickerConstants").StickerTabs.GREETINGS, o("WAWebEmojiPickerConstants").StickerTabs.HAPPY, o("WAWebEmojiPickerConstants").StickerTabs.SAD, o("WAWebEmojiPickerConstants").StickerTabs.ANGRY, o("WAWebEmojiPickerConstants").StickerTabs.CELEBRATE);
            if (d) {
                e.push(o("WAWebEmojiPickerConstants").StickerTabs.STORE);
            }
            return e;
        }, [
            d,
            h
        ]);
        const RRef = useRef();
        const LRef = useRef();
        const ERef = useRef();
        const k = r("useLazyRef")(function() {
            return new Map;
        });
        const I = useState(l.displayCache?.selectedTab || o("WAWebEmojiPickerConstants").StickerTabs.RECENTS);
        const T = I[0];
        const D = I[1];
        const x = useState(-1);
        const $ = x[0];
        const P = x[1];
        const N = r("useLazyRef")(function() {
            o("WAWebWaPlusBenefitJourneyLogger").clearSharedSessionId(o("WAWebWamEnumWpbujBenefitType").WPBUJ_BENEFIT_TYPE.STICKERS);
            return new (o("WAWebWaPlusBenefitJourneyLogger")).WaPlusBenefitJourneyLogger({
                benefitType: o("WAWebWamEnumWpbujBenefitType").WPBUJ_BENEFIT_TYPE.STICKERS,
                surface: o("WAWebWamEnumWpbujSurface").WPBUJ_SURFACE.STICKER_TRAY
            });
        });
        r("useWAWebOnUnmount")(function() {
            l.onDisplayCache?.({
                scrollTop: LRef.current,
                selectedTab: T
            });
        });
        const M = r("useWAWebUiIdle")();
        const w = function() {
            return M(function() {
                const ERef_current = ERef.current;
                if (ERef_current) {
                    ERef_current.focus();
                }
            });
        };
        useImperativeHandle(t_ref, function() {
            return {
                restoreFocus: w,
                getElement: function() {
                    return RRef.current;
                }
            };
        });
        const A = function(t) {
            o("WAWebStopEvent").stopEvent(t);
            k.current.get(T)?.focus();
            P(S.indexOf(T));
        };
        const F = function(t) {
            o("WAWebStopEvent").stopEvent(t);
            l.onFocusNext();
        };
        const O = function(t) {
            o("WAWebStopEvent").stopEvent(t);
            l.onFocusPrev();
        };
        const BComponent = ()=>{
            const l_onStickerFromStore = l.onStickerFromStore;
            if (l_onStickerFromStore != null) {
                new (o("WAWebStickerStoreOpenedWamEvent")).StickerStoreOpenedWamEvent().commit();
                o("WAWebCmd").Cmd.closeExpressionPanels();
                const Component = r("WAWebStickerStoreFlowLoadable").StickerStoreFlowLoadable;
                o("WAWebDrawerManager").DrawerManager.openDrawerRight(<Component onSticker={l_onStickerFromStore}/>, {
                    transition: "slide-left",
                    focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
                });
            }
        };
        const W = function(t, n) {
            n?.preventDefault();
            if (t === o("WAWebEmojiPickerConstants").StickerTabs.STORE) {
                BComponent();
                return;
            }
            D(t);
            ERef.current?.clearSearchText();
            l.onChange?.("");
            ERef.current?.focus();
        };
        const q = function(t) {
            P(-1);
            W(S[$]);
        };
        const U = function(t) {
            o("WAWebStopEvent").stopEvent(t);
            const n = (S.length + $ - 1) % S.length;
            const r = S[n];
            k.current.get(r)?.focus();
            P(n);
        };
        const V = function(t) {
            o("WAWebStopEvent").stopEvent(t);
            const n = ($ + 1) % S.length;
            const r = S[n];
            k.current.get(r)?.focus();
            P(n);
        };
        const H = function(t) {
            o("WAWebStopEvent").stopEvent(t);
            w();
            P(-1);
        };
        useEffect(function() {
            new (o("WAWebStickerPickerOpenedWamEvent")).StickerPickerOpenedWamEvent().commit();
            N.current.logView({
                success: true
            });
            w();
        }, []);
        const G = function({ scrollTop }) {
            LRef.current = scrollTop;
        };
        const z = {
            0: "xhjsbib xyi23a7 x6ikm8r x10wlt62 x17dzmu4 xm4efwp xh8yej3",
            8: "xhjsbib xyi23a7 x6ikm8r x10wlt62 x17dzmu4 xm4efwp xh8yej3",
            4: "xyi23a7 x6ikm8r x10wlt62 x17dzmu4 xm4efwp xh8yej3 x16w0wmm",
            12: "xyi23a7 x6ikm8r x10wlt62 x17dzmu4 xm4efwp xh8yej3 x16w0wmm",
            2: "xhjsbib x6ikm8r x10wlt62 x17dzmu4 xm4efwp xh8yej3 x1mf5yl2 x1cipttk",
            10: "xhjsbib x6ikm8r x10wlt62 x17dzmu4 xm4efwp xh8yej3 x1mf5yl2 x1cipttk",
            6: "x6ikm8r x10wlt62 x17dzmu4 xm4efwp xh8yej3 x16w0wmm x1mf5yl2 x1cipttk",
            14: "x6ikm8r x10wlt62 x17dzmu4 xm4efwp xh8yej3 x16w0wmm x1mf5yl2 x1cipttk",
            1: "xhjsbib x6ikm8r x10wlt62 x17dzmu4 xm4efwp xh8yej3 x1kaczmr",
            9: "xhjsbib x6ikm8r x10wlt62 x17dzmu4 xm4efwp xh8yej3 x1kaczmr",
            5: "x6ikm8r x10wlt62 x17dzmu4 xm4efwp xh8yej3 x16w0wmm x1kaczmr",
            13: "x6ikm8r x10wlt62 x17dzmu4 xm4efwp xh8yej3 x16w0wmm x1kaczmr",
            3: "xhjsbib x6ikm8r x10wlt62 x17dzmu4 xm4efwp xh8yej3 x1cipttk x1kaczmr",
            11: "xhjsbib x6ikm8r x10wlt62 x17dzmu4 xm4efwp xh8yej3 x1cipttk x1kaczmr",
            7: "x6ikm8r x10wlt62 x17dzmu4 xm4efwp xh8yej3 x16w0wmm x1cipttk x1kaczmr",
            15: "x6ikm8r x10wlt62 x17dzmu4 xm4efwp xh8yej3 x16w0wmm x1cipttk x1kaczmr"
        }[(u === o("WAWebPanelsDisplayLocation").DisplayLocation.Dropdown || u === o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel) << 3 | (u === o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel) << 2 | (u === o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel) << 1 | (u === o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel) << 0];
        const Component = r("WAWebPanelsMenu.react");
        const Component_1 = r("WAWebStickerPanelContent.react");
        return <div className={z} ref={RRef}><Component selectedSectionId={T} sectionIds={S} renderSectionTab={function(t, n) {
            const e = y(t);
            const r = u === o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel ? b(t) : C(t);
            const testid = v(t);
            const onRef = function(n) {
                k.current.set(t, n);
            };
            const Component = o("WAWebPanelsMenuTab.react").MenuTab;
            return <Component key={t} onClick={W} sectionId={t} selected={n} showFocusIndicator={$ !== -1} title={e} theme={o("WAWebPanelsMenuTab.react").THEMES.MENU} testid={testid} onRef={onRef}><span className="x1rg5ohu x193iq5w x6ikm8r x10wlt62 xlyipyv xuxw1ft">{r}</span></Component>;
        }} showTabHighlight={!((a = l.defaultSearchText) != null && a.trim())} onFocusPrev={U} onFocusNext={V} onEnter={q} onFocusLeave={H} displayLocation={u}/><Component_1 ref={ERef} onFocusUp={A} onFocusNext={F} onFocusPrev={O} onScroll={G} onChange={l.onChange} onSticker={l.onSticker} defaultSearchText={l.defaultSearchText} selectedTab={T} displayLocation={u} isAvatarStickers={false}/></div>;
    }
    HComponent.displayName = `${HComponent.name} [from ${i.id}]`;
    function y(e) {
        switch(e){
            case o("WAWebEmojiPickerConstants").StickerTabs.FAVORITES:
                return s._("Favourite");
            case o("WAWebEmojiPickerConstants").StickerTabs.RECENTS:
                return s._("Recent");
            case o("WAWebEmojiPickerConstants").StickerTabs.LOVE:
                return s._("Love");
            case o("WAWebEmojiPickerConstants").StickerTabs.GREETINGS:
                return s._("Greetings");
            case o("WAWebEmojiPickerConstants").StickerTabs.HAPPY:
                return s._("Happy");
            case o("WAWebEmojiPickerConstants").StickerTabs.SAD:
                return s._("Sad");
            case o("WAWebEmojiPickerConstants").StickerTabs.ANGRY:
                return s._("Angry");
            case o("WAWebEmojiPickerConstants").StickerTabs.CELEBRATE:
                return s._("Celebrate");
            case o("WAWebEmojiPickerConstants").StickerTabs.STORE:
                return s._("WhatsApp Sticker Store");
        }
    }
    function C(e) {
        switch(e){
            case o("WAWebEmojiPickerConstants").StickerTabs.FAVORITES:
                return c.jsx(r("WDSIconIcGrade.react"), {});
            case o("WAWebEmojiPickerConstants").StickerTabs.RECENTS:
                return c.jsx(r("WDSIconIcSchedule.react"), {});
            case o("WAWebEmojiPickerConstants").StickerTabs.STORE:
                return c.jsx(r("WAWebCircledPlusCustomIcon"), {
                    height: 18,
                    width: 18
                });
            default:
                return y(e);
        }
    }
    function b(e) {
        switch(e){
            case o("WAWebEmojiPickerConstants").StickerTabs.RECENTS:
                return c.jsx(r("WDSIconIcSchedule.react"), {});
            case o("WAWebEmojiPickerConstants").StickerTabs.FAVORITES:
                return c.jsx(r("WDSIconIcGrade.react"), {});
            case o("WAWebEmojiPickerConstants").StickerTabs.LOVE:
                return c.jsx(r("WDSIconIcFavorite.react"), {});
            case o("WAWebEmojiPickerConstants").StickerTabs.GREETINGS:
                return c.jsx(r("WDSIconIcWavingHand.react"), {});
            case o("WAWebEmojiPickerConstants").StickerTabs.HAPPY:
                return c.jsx(r("WDSIconIcSentimentExcited.react"), {});
            case o("WAWebEmojiPickerConstants").StickerTabs.SAD:
                return c.jsx(r("WDSIconIcSentimentDissatisfied.react"), {});
            case o("WAWebEmojiPickerConstants").StickerTabs.ANGRY:
                return c.jsx(r("WDSIconIcSentimentExtremelyDissatisfied.react"), {});
            case o("WAWebEmojiPickerConstants").StickerTabs.CELEBRATE:
                return c.jsx(r("WDSIconIcCake.react"), {});
            case o("WAWebEmojiPickerConstants").StickerTabs.STORE:
                return c.jsx(r("WAWebCircledPlusCustomIcon"), {
                    height: 18,
                    width: 18
                });
        }
    }
    function v(e) {
        switch(e){
            case o("WAWebEmojiPickerConstants").StickerTabs.FAVORITES:
                return "panel-starred";
            case o("WAWebEmojiPickerConstants").StickerTabs.RECENTS:
                return "panel-recent";
            case o("WAWebEmojiPickerConstants").StickerTabs.STORE:
                return "sticker-store";
            case o("WAWebEmojiPickerConstants").StickerTabs.LOVE:
                return "sticker-love";
            default:
                return null;
        }
    }
    l.default = HComponent;
}, 226);