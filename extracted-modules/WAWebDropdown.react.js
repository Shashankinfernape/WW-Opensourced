__d("WAWebDropdown.react", [
    "$InternalEnum",
    "WAWebCmd",
    "WAWebDropdown.stylex",
    "WAWebFocusTracer",
    "WAWebKeyboardHotKeys.react",
    "WAWebL10N",
    "WAWebMiscGatingUtils",
    "WAWebNoop",
    "WDSPaddings.stylex",
    "WDSVars.stylex",
    "nullthrows",
    "react",
    "stylex",
    "useMergeRefs",
    "useWAWebUIM"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    let s;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useEffect: m, useLayoutEffect: p, useMemo: _, useRef: f, useState: g } = d;
    const h = {
        paddingInline10: {
            paddingInlineStart: "xe2zdcy",
            paddingInlineEnd: "x2vl965",
            paddingLeft: null,
            paddingRight: null,
            $$css: true
        },
        paddingBottom7: {
            paddingBottom: "x1ykpatu",
            $$css: true
        }
    };
    const y = 388;
    const C = 573;
    const b = C;
    const v = y;
    const S = 32;
    const R = 32;
    const L = 10;
    const E = n("$InternalEnum").Mirrored([
        "Dropdown",
        "DropdownMenu",
        "DropdownText",
        "AttachMenu",
        "Picker",
        "EmojiPicker",
        "StickerPicker",
        "ColorPicker",
        "LabelColorPicker",
        "Tooltip",
        "ReactionDetailsPane",
        "ReactionSendTray",
        "ReactionPicker",
        "DatePicker",
        "Suggestions",
        "AttachMenuPopup",
        "ExpressionsPanel",
        "EventsRSVPPopup",
        "NewsletterWamoSubMessageTypePopup",
        "DropdownMenuPopup",
        "BusinessProfileDropdown"
    ]);
    const k = n("$InternalEnum").Mirrored([
        "Default",
        "Highlight"
    ]);
    const I = n("$InternalEnum").Mirrored([
        "LEFT",
        "CENTER",
        "RIGHT"
    ]);
    const T = n("$InternalEnum").Mirrored([
        "TOP",
        "BOTTOM"
    ]);
    const D = {
        eventsRSVPPopup: {
            boxSizing: "x9f619",
            borderStartStartRadius: "x1rsuxf0",
            borderStartEndRadius: "xcgujcq",
            borderEndEndRadius: "x1igtfuo",
            borderEndStartRadius: "x13up0n2",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            $$css: true
        },
        attachMenu: {
            position: "x10l6tqk",
            bottom: "x1ey2m1c",
            zIndex: "xfo81ep",
            boxSizing: "x1afcbsf",
            width: "x19ueb17",
            pointerEvents: "x71s49j",
            cursor: "xt0e3qv",
            $$css: true
        },
        attachMenuPopup: {
            bottom: "xacj9c0",
            borderStartStartRadius: "x6nvzda",
            borderStartEndRadius: "x4i4b9w",
            borderEndEndRadius: "xhl9efl",
            borderEndStartRadius: "xj65ea0",
            $$css: true
        },
        newsletterWamoSubMessageTypePopup: {
            bottom: "xacj9c0",
            borderStartStartRadius: "x6nvzda",
            borderStartEndRadius: "x4i4b9w",
            borderEndEndRadius: "xhl9efl",
            borderEndStartRadius: "xj65ea0",
            $$css: true
        },
        dropdownMenuPopup: {
            width: "x17q7fqb",
            maxWidth: "xwcfh7u",
            $$css: true
        },
        businessProfileDropdown: {
            width: "x1czfd9k",
            maxWidth: "x1x1rfll",
            $$css: true
        }
    };
    function x(e) {
        switch(e){
            case E.AttachMenu:
                return [
                    D.attachMenu,
                    o("WDSPaddings.stylex").wdsPaddings.paddingTop0,
                    h.paddingInline10,
                    h.paddingBottom7
                ];
            case E.EventsRSVPPopup:
                return [
                    D.eventsRSVPPopup,
                    o("WDSPaddings.stylex").wdsPaddings.paddingVer0
                ];
            case E.AttachMenuPopup:
                return [
                    D.attachMenuPopup
                ];
            case E.NewsletterWamoSubMessageTypePopup:
                return [
                    D.newsletterWamoSubMessageTypePopup
                ];
            case E.DropdownMenuPopup:
                return [
                    D.dropdownMenuPopup
                ];
            case E.BusinessProfileDropdown:
                return [
                    D.businessProfileDropdown
                ];
            default:
                return [];
        }
    }
    function $(e) {
        switch(e){
            case I.RIGHT:
                return I.LEFT;
            case I.LEFT:
                return I.RIGHT;
            case I.CENTER:
                return I.CENTER;
        }
    }
    function P(e, t, n) {
        const o = n && r("WAWebL10N").isRTL() ? $(e) : e;
        return [
            o,
            t
        ];
    }
    function N(e, t) {
        const n = $(e);
        const r = t === T.TOP ? T.BOTTOM : T.TOP;
        return `${r} ${n}`;
    }
    function M({ dropdownHeight: t, originY: n, windowHeight: r }) {
        const o = r - t - S;
        let a = Math.min(o, n);
        let i = false;
        if (a < 0) {
            a = 0;
            i = true;
        }
        return {
            isDetached: a !== n,
            needsScroll: i,
            top: a
        };
    }
    function w(e, t, n, r) {
        const s = {};
        const u = r?.ownerDocument?.defaultView ?? window;
        let c = false;
        switch(e){
            case I.RIGHT:
                s.left = Math.min(u.innerWidth - (r?.offsetWidth ?? 0) - R, n.x);
                break;
            case I.LEFT:
                s.right = u.innerWidth - n.x;
                break;
            case I.CENTER:
                s.left = n.x - (r?.offsetWidth ?? 0) / 2;
                s.marginLeft = 0;
                s.marginRight = 0;
                break;
        }
        switch(t){
            case T.BOTTOM:
                {
                    s.top = n.y;
                    const d = r?.offsetHeight;
                    if (d != null) {
                        const m = M({
                            dropdownHeight: d,
                            originY: n.y,
                            windowHeight: u.innerHeight
                        });
                        s.top = m.top;
                        if (m.needsScroll) {
                            s.height = u.innerHeight - S;
                            s.overflowY = "auto";
                        }
                        c = m.isDetached;
                    }
                    break;
                }
            case T.TOP:
                {
                    s.bottom = u.innerHeight - n.y;
                    break;
                }
        }
        return {
            isDetached: c,
            style: s
        };
    }
    function A(e, t, n) {
        if (e !== I.CENTER || t == null || n == null) {
            return null;
        }
        return {
            left: t.offsetWidth / 2 - n.offsetWidth / 2
        };
    }
    function F(e, t, n, r, a) {
        const i = e === E.Dropdown || e === E.DropdownMenu || e === E.DropdownMenuPopup || e === E.EmojiPicker || e === E.StickerPicker || e === E.ColorPicker || e === E.LabelColorPicker || e === E.ReactionDetailsPane || e === E.ReactionSendTray || e === E.ReactionPicker || e === E.DatePicker || e === E.Suggestions || e === E.DropdownText || e === E.AttachMenuPopup || e === E.ExpressionsPanel || e === E.EventsRSVPPopup || e === E.NewsletterWamoSubMessageTypePopup || e === E.BusinessProfileDropdown;
        const l = (e === E.Picker || e === E.EmojiPicker || e === E.StickerPicker || e === E.ColorPicker || e === E.LabelColorPicker || e === E.ReactionDetailsPane || e === E.ReactionSendTray || e === E.ReactionPicker || e === E.DatePicker || e === E.DropdownText || e === E.Tooltip) && t === I.LEFT;
        const s = (e === E.EmojiPicker || e === E.StickerPicker || e === E.ColorPicker || e === E.LabelColorPicker || e === E.ReactionDetailsPane || e === E.ReactionSendTray || e === E.ReactionPicker || e === E.DatePicker || e === E.DropdownText) && n === T.TOP;
        const u = e === E.EmojiPicker || e === E.StickerPicker || e === E.ColorPicker || e === E.LabelColorPicker || e === E.ReactionDetailsPane;
        return [
            i && o("WAWebDropdown.stylex").styles.container,
            o("WAWebDropdown.stylex").styles.containerMaterial,
            (e === E.Dropdown || e === E.DropdownMenu || e === E.DropdownMenuPopup || e === E.BusinessProfileDropdown) && o("WAWebDropdown.stylex").styles.containerMaterialPadding,
            e === E.Suggestions && o("WAWebDropdown.stylex").styles.containerSuggestions,
            e === E.ReactionDetailsPane && o("WAWebDropdown.stylex").styles.containerReactionDetails,
            e === E.ReactionSendTray && o("WAWebDropdown.stylex").styles.containerReactionSendTray,
            e === E.DatePicker && o("WAWebDropdown.stylex").styles.containerDatePicker,
            (e === E.DropdownMenu || e === E.DropdownMenuPopup || e === E.BusinessProfileDropdown) && o("WAWebDropdown.stylex").styles.right,
            e === E.Picker && o("WAWebDropdown.stylex").styles.pickerTooltipBase,
            e === E.Picker && o("WAWebDropdown.stylex").styles.picker,
            e === E.Tooltip && o("WAWebDropdown.stylex").styles.pickerTooltipBase,
            e === E.Tooltip && o("WAWebDropdown.stylex").styles.tooltip,
            r === k.Highlight && o("WAWebDropdown.stylex").styles.tooltipHighlight,
            e === E.Picker && l && o("WAWebDropdown.stylex").styles.pickerInverse,
            e === E.Tooltip && l && o("WAWebDropdown.stylex").styles.tooltipInverse,
            u && o("WAWebDropdown.stylex").styles.panelBase,
            e === E.EmojiPicker && o("WAWebDropdown.stylex").styles.emoji,
            e === E.EmojiPicker && o("WAWebDropdown.stylex").styles.emojiXl,
            e === E.StickerPicker && o("WAWebDropdown.stylex").styles.sticker,
            e === E.ColorPicker && o("WAWebDropdown.stylex").styles.colorPicker,
            e === E.LabelColorPicker && o("WAWebDropdown.stylex").styles.labelColorPicker,
            e === E.ReactionDetailsPane && o("WAWebDropdown.stylex").styles.reactionDetails,
            e === E.ReactionPicker && o("WAWebDropdown.stylex").styles.reactionPicker,
            (e === E.EmojiPicker || e === E.StickerPicker || e === E.ReactionPicker) && l && o("WAWebDropdown.stylex").styles.panelInverse,
            (e === E.EmojiPicker || e === E.StickerPicker || e === E.ReactionPicker || e === E.ColorPicker || e === E.LabelColorPicker || e === E.ReactionDetailsPane) && s && o("WAWebDropdown.stylex").styles.panelInverseVertical,
            e === E.DropdownText && o("WAWebDropdown.stylex").styles.text,
            e === E.DropdownText && l && o("WAWebDropdown.stylex").styles.textInverse,
            e === E.DropdownText && s && o("WAWebDropdown.stylex").styles.textInverseVertical,
            e === E.ExpressionsPanel && o("WAWebDropdown.stylex").styles.expressionsPanel,
            e === E.ExpressionsPanel && o("WAWebDropdown.stylex").styles.expressionsPanelXl,
            e === E.ExpressionsPanel && o("WAWebDropdown.stylex").styles.expressionsPanelInsideInput,
            a && o("WAWebDropdown.stylex").styles.pickerAboveMenu
        ];
    }
    function O(e, t, n, r) {
        const a = (e === E.Picker || e === E.Tooltip || e === E.EmojiPicker || e === E.StickerPicker || e === E.LabelColorPicker || e === E.DropdownText) && t === I.LEFT;
        const i = (e === E.EmojiPicker || e === E.StickerPicker || e === E.LabelColorPicker || e === E.DropdownText) && n === T.TOP;
        if (e === E.Picker || e === E.Tooltip) {
            return [
                o("WAWebDropdown.stylex").styles.nibPickerTooltip,
                r === k.Highlight && o("WAWebDropdown.stylex").styles.nibPickerTooltipHighlight,
                a && o("WAWebDropdown.stylex").styles.nibPickerTooltipInverse
            ];
        }
        if (e === E.EmojiPicker || e === E.StickerPicker || e === E.LabelColorPicker) {
            return [
                o("WAWebDropdown.stylex").styles.nibPanel,
                e === E.LabelColorPicker && o("WAWebDropdown.stylex").styles.nibPanelLabelColorPicker,
                a && o("WAWebDropdown.stylex").styles.nibPanelInverse,
                i && o("WAWebDropdown.stylex").styles.nibPanelInverseVertical,
                i && e === E.LabelColorPicker && o("WAWebDropdown.stylex").styles.nibPanelInverseVerticalLabelColorPicker
            ];
        }
        if (e === E.DropdownText) {
            return [
                o("WAWebDropdown.stylex").styles.nibText,
                a && o("WAWebDropdown.stylex").styles.nibTextInverse,
                i && o("WAWebDropdown.stylex").styles.nibTextInverseVertical
            ];
        }
        return [];
    }
    function B(t) {
        const n = t.ref;
        const a = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const i = a.type;
        const l = i === void 0 ? E.Dropdown : i;
        const u = a.dirX;
        const d = u === void 0 ? I.RIGHT : u;
        const h = a.dirY;
        const y = h === void 0 ? T.BOTTOM : h;
        const { children: C, flipOnRTL: b, origin: v, style: S, horizontal: R, isTemporaryRender: k, autoFocus: D, findFirstItem: $, onDefault: M, testid: B, tooltipColorScheme: q, raiseAboveMenu: U } = a;
        const V = U === void 0 ? false : U;
        const H = a.isMenuContent;
        const G = H === void 0 ? false : H;
        const z = a.darkMode;
        const j = z === void 0 ? false : z;
        const K = g(false);
        const Q = K[0];
        const X = K[1];
        const Y = g(null);
        const J = Y[0];
        const Z = Y[1];
        const ee = g(false);
        const te = ee[0];
        const ne = ee[1];
        const re = f(null);
        const oe = f();
        const ae = f();
        const ie = r("useMergeRefs")(n, re);
        const le = r("useWAWebUIM")();
        p(function() {
            if (re.current != null && !te) {
                ne(true);
            }
        }, [
            te
        ]);
        const se = _(function() {
            return l !== E.EmojiPicker && l !== E.Suggestions && l !== E.ReactionDetailsPane && l !== E.ReactionSendTray && l !== E.StickerPicker && l !== E.DatePicker && l !== E.ColorPicker && l !== E.LabelColorPicker && l !== E.ReactionPicker && l !== E.DropdownText;
        }, [
            l
        ]);
        m(function() {
            if (se) {
                if (D === true) {
                    const t = ae.current?.querySelector("[tabindex]");
                    let n;
                    if ($ === true && t || ae.current && ae.current.firstChild instanceof HTMLDivElement && t) {
                        n = t;
                    } else if (ae.current && ae.current.children.length > 0) {
                        n = ae.current.children[0];
                    }
                    r("WAWebFocusTracer").focus(n);
                    X(true);
                    Z(n);
                } else {
                    r("WAWebFocusTracer").focus(re.current);
                }
            }
        }, []);
        m(function() {
            if (!(!ae.current || !re.current || k === true || V)) {
                o("WAWebCmd").Cmd.floaterEscapeOverlap(re.current, L);
            }
        }, [
            k,
            V
        ]);
        const ue = _(function() {
            const e = P(d, y, b);
            const t = e[0];
            const n = e[1];
            const r = {
                borderRadius: o("WDSVars.stylex").WDSVars.borderRadiusDouble,
                transformOrigin: N(t, n)
            };
            const a = S ?? {};
            if (!v) {
                return {
                    containerStyle: babelHelpers.extends({}, a, r),
                    isNibDetached: false
                };
            }
            const i = re.current;
            const l = w(t, n, v, i);
            const { isDetached: s, style: u } = l;
            return {
                containerStyle: babelHelpers.extends({}, a, r, u),
                isNibDetached: s
            };
        }, [
            d,
            y,
            b,
            te,
            v,
            S
        ]);
        const { containerStyle: ce, isNibDetached: de } = ue;
        const me = function(t) {
            r("WAWebFocusTracer").focus(re.current);
            X(false);
        };
        const pe = function(t, n) {
            const e = (n < 0 ? t.length - 1 : n) % t.length;
            r("WAWebFocusTracer").focus(t[e]);
            X(true);
            Z(t[e]);
        };
        const _e = function() {
            const e = Array.from(r("nullthrows")(ae.current).querySelectorAll("li:not(.dropdown-item-disabled)"));
            return {
                activeChildren: e,
                currentlyFocusedIndex: J == null ? -1 : e.indexOf(J)
            };
        };
        const fe = function(t) {
            W(t);
            const e = _e();
            const { activeChildren: n, currentlyFocusedIndex: r } = e;
            if (n.length !== 0) {
                pe(n, r - 1);
            }
        };
        const ge = function(t) {
            W(t);
            const e = _e();
            const { activeChildren: n, currentlyFocusedIndex: r } = e;
            if (n.length !== 0) {
                pe(n, r + 1);
            }
        };
        const he = function(t) {
            W(t);
            const e = _e();
            const { activeChildren: n, currentlyFocusedIndex: r } = e;
            if (n.length !== 0) {
                if (n.length > 12 || n.length === 6) {
                    ge(t);
                    return;
                }
                let o;
                const a = (n.length - 2) / 2;
                const i = 0;
                const l = a - 1;
                const s = a;
                const u = n.length - 3;
                if (r === -1) {
                    o = i;
                } else if (r >= s && r <= u) {
                    o = r - a;
                } else if (r >= i && r <= l) {
                    o = r;
                } else {
                    o = s;
                }
                pe(n, o);
            }
        };
        const ye = function(t) {
            W(t);
            const e = _e();
            const { activeChildren: n, currentlyFocusedIndex: r } = e;
            if (n.length !== 0) {
                if (n.length > 12 || n.length === 6) {
                    fe(t);
                    return;
                }
                let o;
                const a = (n.length - 2) / 2;
                const i = 0;
                const l = a - 1;
                const s = a;
                const u = n.length - 3;
                if (r >= s && r <= u) {
                    o = u + 1;
                } else if (r >= i && r <= l) {
                    o = r + a;
                } else {
                    o = r;
                }
                pe(n, o);
            }
        };
        const Ce = function(t) {
            t.preventDefault();
            le?.requestDismiss();
        };
        const be = function(t) {
            if (M) {
                if (le != null) {
                    le.requestDismiss();
                }
                M(t);
            }
        };
        const ve = function(t) {
            t.stopPropagation();
            r("WAWebFocusTracer").focus(re.current);
            Z(void 0);
        };
        const Se = (s || (s = r("stylex"))).apply(void 0, F(l, d, y, q, V).concat(x(l)));
        const Re = j ? babelHelpers.extends({}, ce, {
            "--picker-background": "#233138"
        }) : ce;
        const Le = O(l, d, y, q);
        const Ee = l === E.Picker || l === E.EmojiPicker || l === E.StickerPicker || l === E.LabelColorPicker || l === E.DropdownText || l === E.Tooltip;
        const ke = Ee && !de ? <div data-testid="tooltip-nib" ref={oe} className={(s || (s = r("stylex"))).apply(void 0, Le)} data-animate-dropdown-nib style={A(d, re.current, oe.current)}/> : null;
        if (se) {
            const Ie = {
                enter: be,
                tab: W,
                "shift+tab": W,
                up: r("WAWebNoop"),
                down: r("WAWebNoop")
            };
            let Te;
            let De;
            if (o("WAWebMiscGatingUtils").multiSkinToneEmojiPickerEnabled() && l === E.Picker) {
                if (r("WAWebL10N").isRTL()) {
                    Te = ye;
                    De = he;
                } else {
                    Te = he;
                    De = ye;
                }
            } else {
                Te = fe;
                De = ge;
            }
            if (R) {
                let xe;
                Ie[(xe = r("WAWebL10N")).LR("left", "right")] = fe;
                Ie[xe.LR("right", "left")] = ge;
                Ie[xe.LR("up", "down")] = Te;
                Ie[xe.LR("down", "up")] = De;
            } else {
                if (l === E.AttachMenu) {
                    Ie.up = ge;
                    Ie.down = fe;
                } else {
                    Ie.up = fe;
                    Ie.down = ge;
                }
                if (l !== E.ExpressionsPanel) {
                    Ie[r("WAWebL10N").LR("left", "right")] = Ce;
                    Ie[r("WAWebL10N").LR("right", "left")] = be;
                }
            }
            const Component = o("WAWebKeyboardHotKeys.react").HotKeys;
            return <Component ref={ie} handlers={Ie} role="application" className={Se} style={Re} data-menu-content={G ? true : void 0} onMouseMove={Q ? me : null} onMouseUp={ve}><ul {...babelHelpers.extends({
                "data-testid": B,
                ref: ae
            }, {
                0: {},
                1: {
                    className: "x78zum5 x3ieub6"
                }
            }[(l === E.AttachMenu) << 0], {
                children: C
            })}/>{ke}</Component>;
        }
        return <div ref={ie} className={Se} style={Re} data-menu-content={G ? true : void 0} data-testid={B}>{C}{ke}</div>;
    }
    B.displayName = `${B.name} [from ${i.id}]`;
    function W(e) {
        e.stopPropagation();
        e.preventDefault();
    }
    l.EMOJI_PICKER_WIDTH = b;
    l.REACTIONS_PANEL_WIDTH = v;
    l.MenuType = E;
    l.TooltipColorScheme = k;
    l.DirX = I;
    l.DirY = T;
    l.getBottomMenuPlacement = M;
    l.Dropdown = B;
}, 98);