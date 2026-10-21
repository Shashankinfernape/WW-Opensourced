__d("WAWebExpressionsPanelPicker.react", [
    "fbt",
    "$InternalEnum",
    "ReactDOM",
    "WAWebCmd",
    "WAWebComposeBoxPanelTypes",
    "WAWebDrawerManagerContext",
    "WAWebDropdown.react",
    "WAWebEmojiPanel.react",
    "WAWebFlex.react",
    "WAWebGetExpressionsPanelOffset",
    "WAWebGifPanel.react",
    "WAWebIconTabs.react",
    "WAWebL10N",
    "WAWebModalManager",
    "WAWebPanelsDisplayLocation",
    "WAWebPortalThemeWrapper.react",
    "WAWebStickerPanel.react",
    "WAWebTabOrder",
    "WAWebUimUie.react",
    "WAWebUserPrefsGeneral",
    "WAWebVelocityTransitionGroup",
    "WDSGlobalContext",
    "WDSIconIcGif.react",
    "WDSIconIcMood.react",
    "WDSIconWdsIcSticker.react",
    "WDSIconWdsIcStickerSmiley.react",
    "WDSMenu.react",
    "WDSMenuBarItem.react",
    "asyncToGeneratorRuntime",
    "compactMap",
    "nullthrows",
    "react",
    "stylex",
    "useWAWebABPropConfigValue",
    "useWAWebListener"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useCallback, useContext, useImperativeHandle, useLayoutEffect, useRef, useState } = d;
    const y = {
        marginInlineEnd6: {
            marginInlineEnd: "xbelrpt",
            $$css: true
        }
    };
    const minHeight = 168;
    const b = 560;
    const v = {
        tabsContainer: {
            borderTopWidth: "x178xt8z",
            borderTopStyle: "x13fuv20",
            borderTopColor: "x5qw0y4",
            height: "xsdox4t",
            $$css: true
        },
        tab: {
            width: "x1ig0tib",
            height: "x1pwvq5b",
            $$css: true
        },
        expressionsPanelPickerWrapper: {
            display: "x78zum5",
            flex: "x98rzlu",
            alignItems: "xuk3077",
            alignSelf: "xpvyfi4",
            $$css: true
        },
        expressionsPanelPickerWrapperRefresh: {
            minWidth: "x1fns5xo",
            alignItems: "x6s0dn4",
            justifyContent: "xl56j7k",
            borderStartStartRadius: "x1c9tyrk",
            borderStartEndRadius: "xeusxvb",
            borderEndEndRadius: "x1pahc9y",
            borderEndStartRadius: "x1ertn4p",
            $$css: true
        }
    };
    const S = n("$InternalEnum").Mirrored([
        "SMALL",
        "LARGE"
    ]);
    function RComponent({ getComposeBoxEditorRef, iconWidth, isDisabled = false, onClose, onEmoji, onGif, onSticker, onStickerFromStore, onToggleActive, ref, size, wrapperRef }) {
        const D = useState(false);
        const x = D[0];
        const $ = D[1];
        const P = useState(o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.EMOJI);
        const N = P[0];
        const M = P[1];
        const w = useContext(o("WDSGlobalContext").WDSContext);
        const w_closeAllMenus = w.closeAllMenus;
        const F = [
            o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.EMOJI,
            onGif ? o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.GIF : null,
            onSticker ? o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.STICKER : null
        ].filter(Boolean);
        const O = (t)=>F.includes(t);
        const BRef = useRef(null);
        const WRef = useRef(null);
        const qRef = useRef(null);
        const U = useState("");
        const defaultSearchText = U[0];
        const H = U[1];
        const G = useState(null);
        const z = G[0];
        const j = G[1];
        const K = o("WAWebDrawerManagerContext").useMiddleDrawerManagerContext();
        const Q = K?.drawer != null;
        const X = r("WAWebL10N").isRTL();
        const Y = useCallback(function(e) {
            $(e);
            onToggleActive?.(e);
        }, [
            onToggleActive
        ]);
        const J = function(t) {
            H(t);
        };
        const Z = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                if (!(isDisabled || x || !O(e) || (yield o("WAWebModalManager").ModalManager.existsAsync()))) {
                    M(e);
                    Y(true);
                }
            });
            return function(n) {
                return e.apply(this, arguments);
            };
        })();
        const ee = useCallback(function() {
            H("");
            Y(false);
            onClose?.();
        }, [
            Y,
            onClose
        ]);
        useLayoutEffect(function() {
            if (isDisabled && x) {
                ee();
            }
        }, [
            ee,
            x,
            isDisabled
        ]);
        const te = function() {
            if (!isDisabled) {
                if (x) {
                    Y(false);
                } else {
                    const e = o("WAWebUserPrefsGeneral").getLastComposeBoxExpressionPanel();
                    M(e != null && O(e) ? e : o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.EMOJI);
                    Y(true);
                }
            }
        };
        const tabConfigs = r("compactMap")(F, function(e) {
            if (e === o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.EMOJI) {
                return {
                    Icon: r("WDSIconIcMood.react"),
                    iconStyle: v.tab,
                    testid: "expressions-btn-emoji",
                    ariaLabel: s._("Emojis selector")
                };
            }
            if (e === o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.GIF) {
                return {
                    Icon: r("WDSIconIcGif.react"),
                    iconStyle: v.tab,
                    testid: "expressions-btn-gif",
                    ariaLabel: s._("Gifs selector")
                };
            }
            if (e === o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.STICKER) {
                if (O(o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.STICKER)) {
                    return {
                        Icon: r("WDSIconWdsIcSticker.react"),
                        iconStyle: v.tab,
                        testid: "expressions-btn-sticker",
                        ariaLabel: s._("Stickers selector")
                    };
                }
                return null;
            }
        });
        const re = function() {
            return M(F[(F.indexOf(N) - 1 + F.length) % F.length]);
        };
        const oe = function() {
            return M(F[(F.indexOf(N) + 1) % F.length]);
        };
        let ae;
        const Component = r("WAWebEmojiPanel.react");
        const Component_1 = r("WAWebGifPanel.react");
        const Component_2 = r("WAWebStickerPanel.react");
        switch(N){
            case o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.EMOJI:
                ae = <Component defaultSearchText={defaultSearchText} displayCache={BRef.current} displayLocation={o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel} onChange={J} onEmoji={onEmoji} onFocusPrev={re} onFocusNext={oe} size={size}/>;
                break;
            case o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.GIF:
                ae = <Component_1 defaultSearchText={defaultSearchText} displayCache={WRef.current} displayLocation={o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel} onChange={J} onDisplayCache={function(t) {
                    WRef.current = t;
                }} onFocusPrev={re} onFocusNext={oe} onGif={function(t, n, r) {
                    onGif?.(t, n, r);
                    w_closeAllMenus();
                }} size={size}/>;
                break;
            case o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.STICKER:
                ae = <Component_2 defaultSearchText={defaultSearchText} displayCache={qRef.current} displayLocation={o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel} onChange={J} onDisplayCache={function(t) {
                    qRef.current = t;
                }} onFocusPrev={re} onFocusNext={oe} onSticker={function(t, n, r) {
                    onSticker?.(t, n, r);
                    w_closeAllMenus();
                }} onStickerFromStore={onStickerFromStore}/>;
                break;
        }
        useImperativeHandle(ref, function() {
            return {
                close: function() {
                    ee();
                }
            };
        });
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "open_compose_box_panel", Z);
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "close_expression_panels", ee);
        const ie = function(t, n) {
            const r = getComposeBoxEditorRef()?.editor?.getRootElement();
            const o = n?.srcElement;
            if (!(o instanceof Node && r != null && r.contains(o))) {
                ee();
            }
        };
        const le = ()=>{
            if (z) {
                const e = z.getBoundingClientRect();
                const t = o("WAWebGetExpressionsPanelOffset").getExpressionsPanelOffset(e, {
                    height: document.body.clientHeight,
                    width: document.body.clientWidth
                });
                const { horizontal, vertical } = t;
                const a = X ? {
                    right: `${horizontal}px`
                } : {
                    left: `${horizontal}px`
                };
                return babelHelpers.extends({}, a, {
                    bottom: `${vertical}px`
                });
            }
            return {};
        };
        let se = c.jsx(r("WAWebVelocityTransitionGroup"), {
            transitionName: "dropdown"
        });
        const Component_3 = r("WAWebIconTabs.react");
        const Component_4 = o("WAWebFlex.react").FlexRow;
        const Component_5 = r("WAWebPortalThemeWrapper.react");
        const ue = <Component_5>{ae}<Component_4 justify="center" align="center" xstyle={v.tabsContainer}><Component_3 selectedIndex={F.indexOf(N)} onSelect={function(t) {
            const e = F[t];
            if (e !== N) {
                M(e);
                o("WAWebUserPrefsGeneral").setLastComposeBoxExpressionPanel(e);
            }
        }} tabConfigs={tabConfigs} theme="expression-panels"/></Component_4></Component_5>;
        if (x && !Q && !isDisabled) {
            let ce;
            const Component = (ce = o("WAWebDropdown.react")).Dropdown;
            const Component_1 = o("WAWebUimUie.react").UIE;
            const Component_2 = r("WAWebVelocityTransitionGroup");
            se = <Component_2 transitionName="dropdown"><Component_1 displayName="MenuBarMenuItem" escapable popable dismissOnWindowResize requestDismiss={ie}><Component type={ce.MenuType.ExpressionsPanel} style={le()} flipOnRTL dirX={ce.DirX.CENTER} dirY={ce.DirY.TOP} testid="expressions-panel">{ue}</Component></Component_1></Component_2>;
        }
        const de = r("nullthrows")(document.querySelector("#expressions-panel-container"));
        se = o("ReactDOM").createPortal(se, de);
        const Component_6 = r("WDSMenu.react");
        const wdsMenuToRender = <Component_6 useMaxWidth={false} minWidth={o("WAWebDropdown.react").EMOJI_PICKER_WIDTH} minHeight={minHeight}><div className="xewp6mh x27kpxv x6ikm8r x10wlt62 x6nvzda x4i4b9w xhl9efl xj65ea0">{ue}</div></Component_6>;
        const pe = o("useWAWebABPropConfigValue").useABPropConfigValue("wds_web_expressions_panel");
        let _e;
        if (pe) {
            const Component = r("WDSMenuBarItem.react");
            _e = <Component icon={r("WDSIconWdsIcStickerSmiley.react")} testid="expressions" tabOrder={o("WAWebTabOrder").TAB_ORDER.COMPOSE_BOX_EXPRESSION_PICKER} title={s._("Emojis, GIFs, Stickers")} ref={j} disabled={isDisabled} wdsMenuToRender={wdsMenuToRender} menuAlign="middle" menuEnableUim menuIsContainer/>;
        } else {
            const Component = r("WDSMenuBarItem.react");
            _e = <Component disabled={isDisabled} icon={r("WDSIconWdsIcStickerSmiley.react")} testid="expressions" tabOrder={o("WAWebTabOrder").TAB_ORDER.COMPOSE_BOX_EXPRESSION_PICKER} ref={j} onClick={te} title={s._("Emojis, GIFs, Stickers")}/>;
        }
        const fe = [
            v.expressionsPanelPickerWrapper
        ];
        fe.push(v.expressionsPanelPickerWrapperRefresh, y.marginInlineEnd6);
        return <><div {...babelHelpers.extends({
            ref: wrapperRef
        }, (e || (e = r("stylex"))).props(fe), {
            children: _e
        })}/>{se}</>;
    }
    RComponent.displayName = `${RComponent.name} [from ${i.id}]`;
    l.ExpressionsPanelSize = S;
    l.ExpressionsPanelPicker = RComponent;
}, 226);