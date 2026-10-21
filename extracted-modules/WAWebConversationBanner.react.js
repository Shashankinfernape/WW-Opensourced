__d("WAWebConversationBanner.react", [
    "fbt",
    "invariant",
    "WAWebConversationPanelStyleUtils",
    "WAWebDropdownItem.react",
    "WAWebFbtCommon",
    "WAWebKeyboardRotateFocusArrows.react",
    "WAWebNoop",
    "WAWebStopEvent",
    "WAWebTabOrder",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WAWebUnstyledButton.react",
    "WAWebVelocityTransitionGroup",
    "WDSButton.react",
    "WDSFocusStateStyles",
    "WDSIconIcClose.react",
    "WDSIconIcExpandMore.react",
    "WDSMenuBarItem.react",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useHoverState",
    "useMergeRefs",
    "useWAWebFocusState",
    "useWAWebIsKeyboardUser",
    "useWDSMenu"
], function(t, n, r, o, a, i, l, s, u) {
    const e = [
        "ref"
    ];
    let c;
    let d;
    const m = d || (d = o("react"));
    const p = d;
    const { useRef, useState } = p;
    const g = {
        subheaderContainer: {
            position: "x1n2onr6",
            boxSizing: "x9f619",
            paddingTop: "x889kno",
            paddingInlineEnd: "xv54qhq",
            paddingBottom: "x1a8lsjc",
            paddingInlineStart: "xwn43p0",
            backgroundColor: "x1h3rtpe",
            $$css: true
        },
        subheaderContainerButton: {
            width: "xh8yej3",
            $$css: true
        },
        defaultCursor: {
            cursor: "xt0e3qv",
            $$css: true
        }
    };
    function HComponent(t) {
        const t_ref = t.ref;
        const a = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const { children, "data-tab": data_tab, menuItems, onClick, onClose, onHoverChange, wdsMenuContent, xstyle } = a;
        if (!(onClose == null || menuItems == null && wdsMenuContent == null)) {
            u(0, 136182);
        }
        if (!(menuItems == null || wdsMenuContent == null)) {
            u(0, 136181);
        }
        const S = function(t) {
            t?.stopPropagation();
            onClose?.();
        };
        const R = useState(null);
        const L = R[0];
        const E = R[1];
        const kRef = useRef(null);
        const I = r("useWAWebFocusState")();
        const T = I[0];
        const D = I[1];
        const x = r("useMergeRefs")(t_ref, kRef, T);
        const $ = r("useHoverState")();
        const { isHovered, onMouseEnter, onMouseLeave } = $;
        const w = r("useWAWebIsKeyboardUser")();
        const w_isKeyboardUser = w.isKeyboardUser;
        const FRef = useRef(null);
        const O = r("useWAWebFocusState")();
        const B = O[0];
        const W = O[1];
        const q = r("useMergeRefs")(FRef, B);
        const U = r("useWDSMenu")({
            targetRef: FRef,
            menu: wdsMenuContent,
            align: "end",
            position: "below"
        });
        const { closeMenu, isMenuOpen, menuPortal, openMenu } = U;
        const j = menuItems != null && menuItems.length > 0;
        const K = wdsMenuContent != null;
        const Q = (j || K) && (isHovered || D || W || L != null || isMenuOpen);
        onHoverChange?.(isHovered);
        const X = (t)=>{
            const menu = menuItems?.map(function({ content, icon, onClick }, t) {
                const Component = o("WAWebDropdownItem.react").DropdownItem;
                return <Component key={`menu-item-${t}`} testid={`menu-item-${t}`} action={onClick} icon={icon}>{content}</Component>;
            }) ?? [];
            E(babelHelpers.extends({}, t, {
                autoFocus: w_isKeyboardUser,
                menu
            }));
        };
        const requestDismiss = function() {
            E(null);
        };
        const J = function(event) {
            event?.preventDefault();
            event?.stopPropagation();
            if (K) {
                if (isMenuOpen) {
                    closeMenu();
                } else {
                    openMenu();
                }
            } else {
                X(w_isKeyboardUser ? {
                    anchor: FRef.current
                } : {
                    event
                });
            }
        };
        const Z = function() {
            if (K) {
                if (isMenuOpen) {
                    closeMenu();
                } else {
                    openMenu();
                }
            } else {
                X({
                    anchor: FRef.current
                });
            }
        };
        const Component = r("WDSButton.react");
        const ee = <div {...babelHelpers.extends({}, {
            0: {
                className: "x10l6tqk x78zum5 x6s0dn4 xl56j7k x1useyqa xsdox4t x13vifvy xtijo5x xhslqc4 x9k9m9m xde1mab"
            },
            1: {
                className: "x10l6tqk x78zum5 x6s0dn4 xl56j7k x1useyqa xsdox4t x13vifvy xtijo5x xhslqc4 x1go6c3n xde1mab"
            }
        }[!!isHovered << 0], {
            children: <Y2Component><Component ref={q} variant="borderless" size="medium" Icon={r("WDSIconIcExpandMore.react")} aria-label={s._("Menu")} testid="conversation-banner-menu-icon" onPress={Z}/></Y2Component>
        })}/>;
        let te;
        if (L != null) {
            const Component = o("WAWebUimUie.react").UIE;
            te = <Component displayName="ConversationBannerContextMenu" escapable popable dismissOnWindowResize requestDismiss={requestDismiss}>{m.jsx(r("WAWebUimUieMenu.react"), {
                contextMenu: L
            })}</Component>;
        }
        let ne;
        if (onClick != null) {
            ne = o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON;
        }
        if (data_tab != null) {
            ne = data_tab;
        }
        const Component_1 = r("WDSMenuBarItem.react");
        const re = onClose ? <Y2Component><Component_1 icon={r("WDSIconIcClose.react")} title={r("WAWebFbtCommon")("Close")} onClick={S} testid="close-button" tabOrder={ne}/></Y2Component> : null;
        const Component_2 = r("WAWebVelocityTransitionGroup");
        const oe = <div className="x78zum5 x6s0dn4"><div className="x1iyjqo2 x6ikm8r x10wlt62 x1yc453h">{children}</div>{re}<Component_2 transitionName="pop-fast">{Q ? ee : null}</Component_2></div>;
        const Component_3 = r("WAWebUnstyledButton.react");
        const Component_4 = r("WAWebKeyboardRotateFocusArrows.react");
        return <Component_4>{onClick != null ? <Component_3 ref={x} xstyle={[
            r("WAWebConversationPanelStyleUtils").sharedShadow,
            g.subheaderContainer,
            g.subheaderContainerButton,
            D && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocusInner,
            xstyle
        ]} onClick={onClick} onContextMenu={Q ? J : r("WAWebNoop")} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} dataTab={ne} testid="conversation-subheader">{oe}{te}{menuPortal}</Component_3> : <div {...babelHelpers.extends({
            ref: x
        }, (c || (c = r("stylex"))).props(r("WAWebConversationPanelStyleUtils").sharedShadow, g.subheaderContainer, g.defaultCursor, D && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocusInner, xstyle), {
            onContextMenu: Q ? J : r("WAWebNoop"),
            onMouseEnter,
            onMouseLeave,
            "data-testid": "conversation-subheader",
            children: [
                oe,
                te,
                menuPortal
            ]
        })}/>}</Component_4>;
    }
    HComponent.displayName = `${HComponent.name} [from ${i.id}]`;
    function Y2Component(e) {
        const t = o("react-compiler-runtime").c(2);
        const e_children = e.children;
        let r;
        if (t[0] !== e_children) {
            r = <span role="none" onClick={o("WAWebStopEvent").stopPropagation} onKeyDown={C} onKeyUp={C} onKeyPress={onKeyPress}>{e_children}</span>;
            t[0] = e_children;
            t[1] = r;
        } else {
            r = t[1];
        }
        return r;
    }
    function C(e) {
        if (e.key === "Enter" || e.key === " ") {
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
        }
    }
    function onKeyPress(e) {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
    }
    l.default = HComponent;
}, 226);