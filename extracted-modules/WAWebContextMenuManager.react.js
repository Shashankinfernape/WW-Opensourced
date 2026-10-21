__d("WAWebContextMenuManager.react", [
    "WAWebABProps",
    "WAWebCmd",
    "WAWebDropdown.react",
    "WAWebFocusTracer",
    "WAWebL10N",
    "WAWebUimContext",
    "WAWebUimUieItem.react",
    "WAWebUimUtils",
    "WAWebVelocityTransitionGroup",
    "react",
    "react-compiler-runtime",
    "useMergeRefs",
    "useWAWebListener",
    "useWAWebWeakElementRef"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { cloneElement, useCallback, useImperativeHandle, useLayoutEffect, useRef, useState } = u;
    const g = {
        MENU: "MENU",
        TOOLTIP: "TOOLTIP"
    };
    function h(anchor, documentEl) {
        let n = null;
        if (anchor instanceof HTMLElement) {
            n = anchor.ownerDocument;
        } else {
            const r = anchor ?? null;
            if (o("WAWebUimUtils").isCrossWindowHTMLElement(r)) {
                n = r.ownerDocument;
            }
        }
        if (n == null) {
            return true;
        }
        const a = documentEl ?? document;
        return n === a;
    }
    function YComponent(e) {
        const t = o("react-compiler-runtime").c(46);
        const { documentEl, ref, type, windowEl } = e;
        const u = documentEl ?? document;
        const windowRef = windowEl ?? window;
        const yRef = useRef(null);
        const bRef = useRef(null);
        const S = r("useWAWebWeakElementRef")();
        const R = useState(null);
        const L = R[0];
        const E = R[1];
        const k = useState(null);
        const adjustedMenuPosition = k[0];
        const T = k[1];
        let D;
        if (t[0] !== documentEl || t[1] !== u || t[2] !== S || t[3] !== L?.uim) {
            D = function(t, a) {
                if (h(t.menuOptions.anchor, documentEl)) {
                    if (L != null) {
                        L.uim.pop();
                    }
                    bRef.current = a;
                    const p = u.activeElement;
                    if (p instanceof HTMLElement || o("WAWebUimUtils").isCrossWindowHTMLElement(p)) {
                        S.current = p;
                    }
                    const { menuOptions, uim } = t;
                    const g = menuOptions.event;
                    g?.stopPropagation();
                    const y = g == null ? 0 : 10;
                    T(null);
                    const originX = typeof g?.clientX === "number" ? g.clientX : menuOptions.offsetX ?? 0;
                    const originY = typeof g?.clientY === "number" ? g.clientY : menuOptions.offsetY ?? 0;
                    E(babelHelpers.extends({}, menuOptions, {
                        type: menuOptions.type ?? o("WAWebDropdown.react").MenuType.Dropdown,
                        originX,
                        originY,
                        offsetX: menuOptions.offsetX ?? y,
                        offsetY: menuOptions.offsetY ?? y,
                        dirX: menuOptions.dirX ?? (r("WAWebL10N").isRTL() ? o("WAWebDropdown.react").DirX.LEFT : o("WAWebDropdown.react").DirX.RIGHT),
                        dirY: menuOptions.dirY ?? o("WAWebDropdown.react").DirY.BOTTOM,
                        key: Math.random(),
                        uim
                    }));
                }
            };
            t[0] = documentEl;
            t[1] = u;
            t[2] = S;
            t[3] = L?.uim;
            t[4] = D;
        } else {
            D = t[4];
        }
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, type === g.MENU ? "open_context_menu" : "open_tooltip", D);
        let x;
        if (t[5] !== S || t[6] !== L?.uim) {
            x = function(t) {
                if (t == null || L?.uim === t) {
                    const e = t?.dismissEvent;
                    if (e != null && e instanceof KeyboardEvent) {
                        r("WAWebFocusTracer").focus(S.current);
                        S.current = null;
                    } else if (o("WAWebABProps").getABPropConfigValue("web_detached_dom_unmount_cleanup")) {
                        S.current = null;
                    }
                    E(null);
                    T(null);
                }
            };
            t[5] = S;
            t[6] = L?.uim;
            t[7] = x;
        } else {
            x = t[7];
        }
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, type === g.MENU ? "close_context_menu" : "close_tooltip", x);
        let $;
        let P;
        if (t[8] !== adjustedMenuPosition || t[9] !== windowRef || t[10] !== L) {
            $ = function() {
                const yRef_current = yRef.current;
                if (!(L == null || yRef_current == null)) {
                    const r = L.anchor;
                    if (r != null && (r instanceof HTMLElement || o("WAWebUimUtils").isCrossWindowHTMLElement(r ?? null)) && r.isConnected === false) {
                        L.uim.requestDismiss();
                        return;
                    }
                    if (adjustedMenuPosition == null) {
                        const menuWidth = yRef_current.clientWidth;
                        const menuHeight = yRef_current.clientHeight + 10;
                        T(v({
                            anchor: L.anchor ?? L.anchorRef?.current,
                            temporaryMenuPosition: L,
                            menuWidth,
                            menuHeight,
                            windowRef
                        }));
                    }
                }
            };
            P = [
                L,
                adjustedMenuPosition,
                windowRef
            ];
            t[8] = adjustedMenuPosition;
            t[9] = windowRef;
            t[10] = L;
            t[11] = $;
            t[12] = P;
        } else {
            $ = t[11];
            P = t[12];
        }
        useLayoutEffect($, P);
        let N;
        if (t[13] !== L) {
            N = function() {
                return {
                    isOpen: function() {
                        return L != null;
                    }
                };
            };
            t[13] = L;
            t[14] = N;
        } else {
            N = t[14];
        }
        useImperativeHandle(ref, N);
        let M;
        if (t[15] === Symbol.for("react.memo_cache_sentinel")) {
            M = function(t) {
                if (t != null) {
                    if (bRef.current != null) {
                        bRef.current(t.getElement());
                    }
                    bRef.current = null;
                }
            };
            t[15] = M;
        } else {
            M = t[15];
        }
        const w = M;
        let A;
        if (t[16] !== adjustedMenuPosition || t[17] !== L) {
            if (o("WAWebABProps").getABPropConfigValue("context_menu_content_fix")) {
                const Component = r("WAWebVelocityTransitionGroup");
                A = <Component transitionName={L?.type === o("WAWebDropdown.react").MenuType.Picker ? "dropdown-picker" : "dropdown"}>{L != null ? <C key={`key-${L.key}`} adjustedMenuPosition={adjustedMenuPosition} dropdownRef={yRef} handleRef={w} menu={L}/> : null}</Component>;
            } else if (L == null) {
                A = s.jsx(r("WAWebVelocityTransitionGroup"), {
                    transitionName: "dropdown"
                });
            } else {
                const { autoFocus, findFirstItem, horizontal, key, menu, raiseAboveMenu, testid, theme, tooltipColorScheme, type: type_1 } = L;
                const j = adjustedMenuPosition ?? L;
                const { dirX, dirY, offsetX, offsetY, originX, originY } = j;
                let ee;
                if (t[19] !== menu || t[20] !== theme) {
                    ee = Array.isArray(menu) ? menu.map((e)=>cloneElement(e, theme === undefined ? null : {
                            theme
                        })) : menu;
                    t[19] = menu;
                    t[20] = theme;
                    t[21] = ee;
                } else {
                    ee = t[21];
                }
                const te = ee;
                const ne = originX + offsetX;
                const re = originY + offsetY;
                let oe;
                if (t[22] !== ne || t[23] !== re) {
                    oe = {
                        x: ne,
                        y: re
                    };
                    t[22] = ne;
                    t[23] = re;
                    t[24] = oe;
                } else {
                    oe = t[24];
                }
                const ae = `key-${key}`;
                const ie = adjustedMenuPosition == null;
                let le;
                if (t[25] !== te) {
                    const Component = r("WAWebUimUieItem.react");
                    le = <Component ref={w}>{te}</Component>;
                    t[25] = te;
                    t[26] = le;
                } else {
                    le = t[26];
                }
                let se;
                if (t[27] !== autoFocus || t[28] !== dirX || t[29] !== dirY || t[30] !== findFirstItem || t[31] !== horizontal || t[32] !== L.darkMode || t[33] !== L.isMenuContent || t[34] !== type_1 || t[35] !== raiseAboveMenu || t[36] !== oe || t[37] !== ae || t[38] !== ie || t[39] !== le || t[40] !== testid || t[41] !== tooltipColorScheme) {
                    const Component = o("WAWebDropdown.react").Dropdown;
                    se = <Component key={ae} ref={yRef} origin={oe} type={type_1} dirX={dirX} dirY={dirY} horizontal={horizontal} autoFocus={autoFocus} findFirstItem={findFirstItem} isTemporaryRender={ie} tooltipColorScheme={tooltipColorScheme} testid={testid} raiseAboveMenu={raiseAboveMenu} isMenuContent={L.isMenuContent} darkMode={L.darkMode}>{le}</Component>;
                    t[27] = autoFocus;
                    t[28] = dirX;
                    t[29] = dirY;
                    t[30] = findFirstItem;
                    t[31] = horizontal;
                    t[32] = L.darkMode;
                    t[33] = L.isMenuContent;
                    t[34] = type_1;
                    t[35] = raiseAboveMenu;
                    t[36] = oe;
                    t[37] = ae;
                    t[38] = ie;
                    t[39] = le;
                    t[40] = testid;
                    t[41] = tooltipColorScheme;
                    t[42] = se;
                } else {
                    se = t[42];
                }
                const Component = r("WAWebVelocityTransitionGroup");
                A = <Component transitionName={type_1 === o("WAWebDropdown.react").MenuType.Picker ? "dropdown-picker" : "dropdown"}>{se}</Component>;
            }
            t[16] = adjustedMenuPosition;
            t[17] = L;
            t[18] = A;
        } else {
            A = t[18];
        }
        let ue;
        if (t[43] !== L?.uim || t[44] !== A) {
            const Component = r("WAWebUimContext").Consumer;
            ue = <Component>{function(t) {
                const Component = r("WAWebUimContext").Provider;
                return <Component value={L?.uim || t}>{A}</Component>;
            }}</Component>;
            t[43] = L?.uim;
            t[44] = A;
            t[45] = ue;
        } else {
            ue = t[45];
        }
        return ue;
    }
    function C(e) {
        const t = o("react-compiler-runtime").c(25);
        const { adjustedMenuPosition, dropdownRef, handleRef, menu, ref } = e;
        const d = r("useMergeRefs")(ref, dropdownRef);
        const { autoFocus, findFirstItem, horizontal, menu: menu_1, raiseAboveMenu, testid, theme, tooltipColorScheme, type } = menu;
        const v = adjustedMenuPosition ?? menu;
        const { dirX, dirY, offsetX, offsetY, originX, originY } = v;
        let T;
        if (t[0] !== menu_1 || t[1] !== theme) {
            T = Array.isArray(menu_1) ? menu_1.map((e)=>cloneElement(e, theme === undefined ? null : {
                    theme
                })) : menu_1;
            t[0] = menu_1;
            t[1] = theme;
            t[2] = T;
        } else {
            T = t[2];
        }
        const D = T;
        const x = originX + offsetX;
        const $ = originY + offsetY;
        let P;
        if (t[3] !== x || t[4] !== $) {
            P = {
                x,
                y: $
            };
            t[3] = x;
            t[4] = $;
            t[5] = P;
        } else {
            P = t[5];
        }
        const N = adjustedMenuPosition == null;
        let M;
        if (t[6] !== D || t[7] !== handleRef) {
            const Component = r("WAWebUimUieItem.react");
            M = <Component ref={handleRef}>{D}</Component>;
            t[6] = D;
            t[7] = handleRef;
            t[8] = M;
        } else {
            M = t[8];
        }
        let w;
        if (t[9] !== autoFocus || t[10] !== dirX || t[11] !== dirY || t[12] !== findFirstItem || t[13] !== horizontal || t[14] !== menu.darkMode || t[15] !== menu.isMenuContent || t[16] !== d || t[17] !== raiseAboveMenu || t[18] !== P || t[19] !== N || t[20] !== M || t[21] !== testid || t[22] !== tooltipColorScheme || t[23] !== type) {
            const Component = o("WAWebDropdown.react").Dropdown;
            w = <Component ref={d} origin={P} type={type} dirX={dirX} dirY={dirY} horizontal={horizontal} autoFocus={autoFocus} findFirstItem={findFirstItem} isTemporaryRender={N} tooltipColorScheme={tooltipColorScheme} testid={testid} raiseAboveMenu={raiseAboveMenu} isMenuContent={menu.isMenuContent} darkMode={menu.darkMode}>{M}</Component>;
            t[9] = autoFocus;
            t[10] = dirX;
            t[11] = dirY;
            t[12] = findFirstItem;
            t[13] = horizontal;
            t[14] = menu.darkMode;
            t[15] = menu.isMenuContent;
            t[16] = d;
            t[17] = raiseAboveMenu;
            t[18] = P;
            t[19] = N;
            t[20] = M;
            t[21] = testid;
            t[22] = tooltipColorScheme;
            t[23] = type;
            t[24] = w;
        } else {
            w = t[24];
        }
        return w;
    }
    const b = YComponent;
    function v({ anchor, menuHeight, menuWidth, temporaryMenuPosition, windowRef }) {
        const { innerWidth, innerHeight } = windowRef;
        const { dirX, dirY, offsetX, offsetY, originX, originY } = temporaryMenuPosition;
        let f = originX;
        let g = originX;
        let h = originY;
        let y = originY;
        let anchorWidth = 0;
        if (anchor != null && (anchor instanceof HTMLElement || o("WAWebUimUtils").isCrossWindowHTMLElement(anchor))) {
            const b = anchor.getBoundingClientRect();
            f = b.left;
            g = b.right;
            y = b.bottom;
            h = b.top;
            anchorWidth = anchor.offsetWidth;
        }
        let v = dirX;
        if (v === o("WAWebDropdown.react").DirX.RIGHT && f + menuWidth > innerWidth && g - menuWidth > 0) {
            v = o("WAWebDropdown.react").DirX.LEFT;
        } else if (v === o("WAWebDropdown.react").DirX.LEFT && g - menuWidth < 0 && f + menuWidth < innerWidth) {
            v = o("WAWebDropdown.react").DirX.RIGHT;
        } else {
            if (v === o("WAWebDropdown.react").DirX.CENTER) {
                if (g + menuWidth / 2 > innerWidth) {
                    v = o("WAWebDropdown.react").DirX.LEFT;
                } else if (f - menuWidth / 2 < 0) {
                    v = o("WAWebDropdown.react").DirX.RIGHT;
                }
            }
        }
        let dirY_1 = dirY;
        if (dirY_1 === o("WAWebDropdown.react").DirY.BOTTOM && y + menuHeight + offsetY > innerHeight && h - menuHeight > 0) {
            dirY_1 = o("WAWebDropdown.react").DirY.TOP;
        } else if (dirY_1 === o("WAWebDropdown.react").DirY.TOP && h - menuHeight < 0) {
            dirY_1 = o("WAWebDropdown.react").DirY.BOTTOM;
        }
        let originY_1;
        if (dirY_1 === o("WAWebDropdown.react").DirY.TOP) {
            originY_1 = h;
        } else {
            originY_1 = y;
        }
        let offsetX_1 = offsetX;
        let offsetY_1 = offsetY;
        if (!anchor) {
            if (v === o("WAWebDropdown.react").DirX.LEFT) {
                offsetX_1 = 0;
            }
            if (dirY_1 === o("WAWebDropdown.react").DirY.TOP) {
                offsetY_1 = 0;
            }
        }
        return {
            dirX: v,
            dirY: dirY_1,
            originX: S({
                anchorWidth,
                dx: v,
                left: f,
                right: g
            }),
            originY: originY_1,
            offsetX: offsetX_1,
            offsetY: offsetY_1
        };
    }
    function S({ anchorWidth, dx, left, right }) {
        switch(dx){
            case o("WAWebDropdown.react").DirX.RIGHT:
                return left;
            case o("WAWebDropdown.react").DirX.LEFT:
                return right;
            case o("WAWebDropdown.react").DirX.CENTER:
                return left + anchorWidth / 2;
        }
    }
    l.Type = g;
    l.ContextMenuManager = b;
    l.calculateAdjustedMenuPosition = v;
}, 98);