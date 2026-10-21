__d("WDSMenuItem.react", [
    "BaseContextualLayer.react",
    "BaseMenuFocusGroup",
    "BaseMenuItemRoleContext",
    "WAWebKeyboardShortcuts",
    "WDSGlobalContext",
    "WDSIconIcArrowRight.react",
    "WDSIconIcCheck.react",
    "WDSMenuContext",
    "WDSMenuItemConfig",
    "WDSShortcut.react",
    "WDSText.react",
    "react",
    "react-strict-dom",
    "stylex",
    "useResizeObserver"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useCallback, useContext, useEffect, useId, useMemo, useRef, useState } = c;
    const y = {
        button: {
            backgroundColor: "xjbqb8w",
            borderTopWidth: "x972fbf",
            borderInlineEndWidth: "x10w94by",
            borderBottomWidth: "x1qhh985",
            borderInlineStartWidth: "x14e42zd",
            color: "x1heor9g",
            cursor: "x1ypdohk",
            outline: "x1a2a7pz",
            paddingTop: "xexx8yu",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            textAlign: "x1yc453h",
            width: "xh8yej3",
            $$css: true
        },
        disabled: {
            cursor: "xt0e3qv",
            $$css: true
        },
        focusRing: {
            ":focus-visible_outlineColor": "xtnn1bt",
            ":focus-visible_outlineOffset": "x1bqaal",
            ":focus-visible_outlineStyle": "x9v5kkp",
            ":focus-visible_outlineWidth": "x784prv",
            $$css: true
        }
    };
    const C = {
        layer: {
            zIndex: "xhiupe2",
            $$css: true
        }
    };
    function BComponent({ Icon, closeMenuOnPress = true, destructive = false, disabled = false, hasIndent = false, hasNumber = false, hasSubmenu = false, iconDirectional, iconXstyle, isToggleable = false, number, onHoverIn, onHoverOut, onPress, profilePhoto, shortcut, submenuContent, subtitle, testid, title, toggled = false, truncateText = false, type }) {
        const K = useState(false);
        const Q = K[0];
        const X = K[1];
        const Y = useState(false);
        const J = Y[0];
        const Z = Y[1];
        const ee = useState(false);
        const te = ee[0];
        const ne = ee[1];
        const re = useState(false);
        const isClosing = re[0];
        const ae = re[1];
        const ie = useId();
        const leRef = useRef(null);
        const seRef = useRef(null);
        const ueRef = useRef(null);
        const ceRef = useRef(null);
        const de = useContext(o("WDSGlobalContext").WDSContext);
        const de_closeAllMenus = de.closeAllMenus;
        const pe = useContext(o("WDSMenuContext").WDSMenuSubmenuNavigationContext);
        const pe_exitSubmenu = pe.exitSubmenu;
        const fe = useContext(r("BaseMenuItemRoleContext")) ?? "menuitem";
        const role = isToggleable ? "menuitemcheckbox" : fe;
        const exitSubmenu = useCallback(function() {
            ae(true);
            ceRef.current = self.setTimeout(function() {
                ae(false);
                ne(false);
                leRef.current?.focus();
            }, o("WDSGlobalContext").MENU_EXIT_ANIMATION_DURATION);
        }, []);
        const ye = useMemo(function() {
            return {
                exitSubmenu
            };
        }, [
            exitSubmenu
        ]);
        useEffect(function() {
            return function() {
                if (ceRef.current != null) {
                    self.clearTimeout(ceRef.current);
                }
                if (ueRef.current != null) {
                    self.clearTimeout(ueRef.current);
                }
            };
        }, []);
        const onClick = useCallback(function() {
            onPress?.();
            if (!hasSubmenu && closeMenuOnPress) {
                de_closeAllMenus();
            }
        }, [
            onPress,
            de_closeAllMenus,
            hasSubmenu,
            closeMenuOnPress
        ]);
        useEffect(function() {
            const leRef_current = leRef.current;
            if (leRef_current != null) {
                const t = function(t) {
                    const e = t.key.toLowerCase();
                    if ((e === "enter" || e === " ") && !disabled) {
                        t.preventDefault();
                        onClick();
                        return;
                    }
                    if (e === "arrowright" && hasSubmenu && !te) {
                        t.preventDefault();
                        t.stopPropagation();
                        ne(true);
                        return;
                    }
                    if (e === "arrowleft") {
                        t.preventDefault();
                        t.stopPropagation();
                        pe_exitSubmenu();
                    }
                };
                leRef_current.addEventListener("keydown", t);
                return function() {
                    return leRef_current.removeEventListener("keydown", t);
                };
            }
        }, [
            hasSubmenu,
            te,
            pe_exitSubmenu,
            disabled,
            onClick
        ]);
        const repositionSubmenu = useCallback(function() {
            seRef.current?.reposition({
                autoflip: true
            });
        }, []);
        const ve = useMemo(function() {
            return {
                repositionSubmenu
            };
        }, [
            repositionSubmenu
        ]);
        const ref = r("useResizeObserver")(function() {
            if (te) {
                repositionSubmenu();
            }
        });
        const Re = useMemo(function() {
            return {
                isClosing
            };
        }, [
            isClosing
        ]);
        const onMouseEnter = function(t) {
            if (ueRef.current != null) {
                self.clearTimeout(ueRef.current);
                ueRef.current = null;
            }
            X(true);
            if (hasSubmenu) {
                ueRef.current = self.setTimeout(function() {
                    ne(true);
                }, 200);
            }
            onHoverIn?.(t);
        };
        const onMouseLeave = function(t) {
            if (ueRef.current != null) {
                self.clearTimeout(ueRef.current);
                ueRef.current = null;
            }
            X(false);
            if (hasSubmenu && te) {
                ueRef.current = self.setTimeout(function() {
                    exitSubmenu();
                }, o("WDSGlobalContext").MENU_EXIT_ANIMATION_DURATION);
            }
            onHoverOut?.(t);
        };
        const onFocusIn = useCallback(function() {
            let e;
            if ((e = leRef.current) != null && e.matches(":focus-visible")) {
                Z(true);
            }
        }, []);
        const onFocusOut = useCallback(function() {
            Z(false);
        }, []);
        const Te = o("WDSMenuItemConfig").getMenuItemLayoutStyles();
        let De;
        if (shortcut != null) {
            if (typeof shortcut === "object") {
                De = shortcut;
            } else {
                De = o("WAWebKeyboardShortcuts").getWDSShortcuts(shortcut);
            }
        }
        if (type === "separator") {
            return <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(Te.separator))}/>;
        }
        if (type === "groupHeader") {
            const Component = r("WDSText.react");
            return <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(Te.groupHeader), {
                children: <Component type="Body3Emphasized" colorName="contentDeemphasized" selectable={false}>{title}</Component>
            })}/>;
        }
        const hasIcon = Icon != null;
        const hasSubtitle = subtitle != null;
        const hasEndSection = De != null || hasSubmenu || hasNumber;
        const hasProfilePhoto = profilePhoto != null;
        const Me = typeof title === "string" ? title.trim() !== "" : title != null;
        const we = Me && hasSubtitle ? `${ie}-subtitle` : undefined;
        const Ae = Me && hasNumber && number != null ? `${ie}-number` : undefined;
        const Fe = [
            we,
            Ae
        ].filter((e)=>e != null);
        const Oe = Fe.length > 0 ? Fe.join(" ") : undefined;
        const Be = o("WDSMenuItemConfig").getMenuItemLayoutStyles({
            hasIcon,
            hasSubtitle,
            hasEndSection,
            isToggleable,
            hasIndent,
            hasProfilePhoto,
            number
        });
        const Component = r("WDSText.react");
        const Component_1 = r("WDSText.react");
        const Component_2 = r("WDSText.react");
        const We = <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(Be.listItemBase, hasSubtitle && Be.listItemWithSubtitle), {
            children: [
                hasIndent && <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(Be.indentContainer))}/>,
                profilePhoto != null && !isToggleable && <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(Be.profilePhotoContainer, Be.startEndContainer), {
                    children: profilePhoto
                })}/>,
                isToggleable && <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(Be.toggledContainer), {
                    children: [
                        <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(Be.iconContainer), {
                            children: toggled && u.jsx(r("WDSIconIcCheck.react"), {
                                height: o("WDSMenuItemConfig").WDSMenuItemIconSize,
                                width: o("WDSMenuItemConfig").WDSMenuItemIconSize
                            })
                        })}/>,
                        profilePhoto != null ? <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(Be.profilePhotoContainer), {
                            children: profilePhoto
                        })}/> : Icon != null && <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(Be.iconContainer, iconXstyle), {
                            children: <Icon directional={iconDirectional} height={o("WDSMenuItemConfig").WDSMenuItemIconSize} width={o("WDSMenuItemConfig").WDSMenuItemIconSize} xstyle={iconXstyle}/>
                        })}/>
                    ]
                })}/>,
                !isToggleable && profilePhoto == null && Icon != null && <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(Be.iconContainer, Be.startEndContainer, iconXstyle), {
                    children: <Icon directional={iconDirectional} aria-hidden height={o("WDSMenuItemConfig").WDSMenuItemIconSize} width={o("WDSMenuItemConfig").WDSMenuItemIconSize} xstyle={iconXstyle}/>
                })}/>,
                <div {...babelHelpers.extends({
                    title: truncateText && title != null ? title.toString() : undefined
                }, e.props(Be.textContainer, !hasEndSection && Be.listItemEndPadding, !Icon && !isToggleable && !hasIndent && !profilePhoto && Be.listItemDefault), {
                    children: [
                        title != null && <Component maxLines={truncateText ? 1 : undefined} colorName={o("WDSMenuItemConfig").getMenuItemTextColorStyles(disabled, destructive, false, Q, J)} type="Body2" selectable={false}>{title}</Component>,
                        hasSubtitle && <Component_1 colorName={o("WDSMenuItemConfig").getMenuItemTextColorStyles(disabled, destructive, true, Q, J)} id={we} type="Body3" selectable={false}>{subtitle}</Component_1>
                    ]
                })}/>,
                hasEndSection && <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(Be.endSectionContainer), {
                    children: [
                        De != null && <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(Be.shortcutContainer), {
                            children: u.jsx(r("WDSShortcut.react"), babelHelpers.extends({}, De, {
                                inverse: false
                            }))
                        })}/>,
                        hasSubmenu && <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(Be.iconContainer, Be.submenuContainer), {
                            children: u.jsx(r("WDSIconIcArrowRight.react"), {
                                "aria-hidden": true,
                                directional: true,
                                height: o("WDSMenuItemConfig").WDSMenuItemIconSize,
                                width: o("WDSMenuItemConfig").WDSMenuItemIconSize
                            })
                        })}/>,
                        hasNumber && <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(Be.numberContainer), {
                            children: <Component_2 colorName={o("WDSMenuItemConfig").getMenuItemTextColorStyles(disabled, destructive, false, Q, J)} id={Ae} type="Body3" selectable={false}>{number}</Component_2>
                        })}/>
                    ]
                })}/>
            ]
        })}/>;
        const qe = o("WDSMenuItemConfig").getMenuItemColorStyles(destructive, disabled);
        const Component_3 = o("WDSMenuContext").WDSMenuAnimationContext.Provider;
        const Component_4 = o("WDSMenuContext").WDSMenuSubmenuNavigationContext.Provider;
        const Component_5 = o("WDSMenuContext").WDSMenuSubmenuRepositionContext.Provider;
        const Component_6 = o("react-strict-dom").html.div;
        const Component_7 = r("BaseContextualLayer.react");
        const Ue = te && submenuContent ? <Component_7 imperativeRef={seRef} contextRef={leRef} position="end" align="start" xstyle={C.layer} containFocus><Component_6 ref={ref} data-menu-content onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}><Component_5 value={ve}><Component_4 value={ye}><Component_3 value={Re}>{submenuContent}</Component_3></Component_4></Component_5></Component_6></Component_7> : null;
        const Component_8 = o("react-strict-dom").html.button;
        const Component_9 = r("BaseMenuFocusGroup").FocusItem;
        return <><Component_9 disabled={disabled}><Component_8 ref={leRef} aria-label={title ?? ""} aria-describedby={Oe} aria-checked={isToggleable ? toggled : undefined} data-testid={undefined} disabled={disabled} onClick={onClick} onFocusIn={onFocusIn} onFocusOut={onFocusOut} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} role={role} style={[
            y.button,
            y.focusRing,
            disabled && y.disabled,
            qe?.xstyleConfig?.item
        ]}>{We}</Component_8></Component_9>{Ue}</>;
    }
    BComponent.displayName = `${BComponent.name} [from ${i.id}]`;
    l.default = BComponent;
}, 98);