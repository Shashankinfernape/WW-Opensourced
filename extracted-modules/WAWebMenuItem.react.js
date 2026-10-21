__d("WAWebMenuItem.react", [
    "WAWebMenuController.react",
    "WAWebNoop",
    "WAWebUnstyledButton.react",
    "err",
    "react",
    "react-compiler-runtime",
    "useMergeRefs"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useEffect, useRef } = c;
    function p(e) {
        const t = o("react-compiler-runtime").c(7);
        const menu = o("WAWebMenuController.react").useMenu();
        if (menu == null) {
            throw r("err")("[Menu] MenuItem must be a child of a MenuItemList");
        }
        const a = menu?.activeItemId === e;
        let isFiltered;
        if (t[0] !== menu.filteredItems || t[1] !== e) {
            isFiltered = menu.filteredItems != null && menu.filteredItems.has(e) === false;
            t[0] = menu.filteredItems;
            t[1] = e;
            t[2] = isFiltered;
        } else {
            isFiltered = t[2];
        }
        let l;
        if (t[3] !== menu || t[4] !== a || t[5] !== isFiltered) {
            l = {
                menu,
                colorScheme: menu.colorScheme,
                size: menu.size,
                isActive: a,
                isFiltered,
                material: menu.material,
                allowTabNavigation: menu.allowTabNavigation,
                border: menu.border,
                useLegacyDesign: menu.useLegacyDesign
            };
            t[3] = menu;
            t[4] = a;
            t[5] = isFiltered;
            t[6] = l;
        } else {
            l = t[6];
        }
        return l;
    }
    function _(optionId, t) {
        o("WAWebMenuController.react").useRegisterItem(optionId, t);
        return p(optionId);
    }
    const f = {
        container: {
            textAlign: "x1yc453h",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            display: "x78zum5",
            flexGrow: "x1iyjqo2",
            flexShrink: "x2lah0s",
            flexBasis: "xdl72j9",
            alignSelf: "xkh2ocl",
            width: "xh8yej3",
            $$css: true
        },
        disabled: {
            cursor: "x1h6gzvc",
            $$css: true
        }
    };
    function g(t) {
        const n = o("react-compiler-runtime").c(37);
        let a;
        let i;
        if (n[0] !== t) {
            i = t.ref;
            a = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = a;
            n[2] = i;
        } else {
            a = n[1];
            i = n[2];
        }
        const l = a;
        const { applyWrapperFocusStyles, ariaLabel, children, disabled, onActive, onInactive, onMouseDown, onSelect, optionId, primary, searchCriteria, testid, type } = l;
        const applyWrapperFocusStyles_1 = applyWrapperFocusStyles === undefined ? true : applyWrapperFocusStyles;
        const I = type === undefined ? "action" : type;
        const TRef = useRef(null);
        const D = r("useMergeRefs")(TRef, i);
        const x = disabled !== true ? onSelect : r("WAWebNoop");
        let $;
        if (n[3] !== optionId || n[4] !== primary || n[5] !== searchCriteria || n[6] !== x || n[7] !== I) {
            $ = {
                id: optionId,
                type: I,
                label: primary,
                searchCriteria,
                onSelect: x,
                ref: TRef
            };
            n[3] = optionId;
            n[4] = primary;
            n[5] = searchCriteria;
            n[6] = x;
            n[7] = I;
            n[8] = $;
        } else {
            $ = n[8];
        }
        const P = _(optionId, $);
        const { allowTabNavigation, isActive, isFiltered, menu } = P;
        const FRef = useRef(null);
        let O;
        let B;
        if (n[9] !== isActive || n[10] !== onActive || n[11] !== onInactive) {
            O = function() {
                const FRef_current = FRef.current;
                FRef.current = isActive;
                if (isActive === true && FRef_current !== true) {
                    if (onActive != null) {
                        onActive();
                    }
                } else if (isActive === false && FRef_current === true) {
                    if (onInactive != null) {
                        onInactive();
                    }
                }
            };
            B = [
                isActive,
                onActive,
                onInactive
            ];
            n[9] = isActive;
            n[10] = onActive;
            n[11] = onInactive;
            n[12] = O;
            n[13] = B;
        } else {
            O = n[12];
            B = n[13];
        }
        useEffect(O, B);
        if (isFiltered === true) {
            return null;
        }
        let W;
        if (n[14] !== menu || n[15] !== optionId) {
            W = function(t) {
                t.stopPropagation();
                menu.selectItem(optionId);
            };
            n[14] = menu;
            n[15] = optionId;
            n[16] = W;
        } else {
            W = n[16];
        }
        const q = W;
        let U;
        if (n[17] !== menu || n[18] !== optionId) {
            U = function() {
                menu.activateItem(optionId);
            };
            n[17] = menu;
            n[18] = optionId;
            n[19] = U;
        } else {
            U = n[19];
        }
        const V = U;
        let H;
        if (n[20] !== menu) {
            H = function() {
                menu.activateItem(null);
            };
            n[20] = menu;
            n[21] = H;
        } else {
            H = n[21];
        }
        const G = H;
        const z = disabled === true && f.disabled;
        let j;
        if (n[22] !== z) {
            j = [
                f.container,
                z
            ];
            n[22] = z;
            n[23] = j;
        } else {
            j = n[23];
        }
        const K = disabled !== true ? q : null;
        const Q = allowTabNavigation ? 0 : -1;
        const dataTab = allowTabNavigation ? 0 : -1;
        const Y = allowTabNavigation ? V : null;
        const J = allowTabNavigation ? G : null;
        const Z = onMouseDown ?? undefined;
        let ee;
        if (n[24] !== applyWrapperFocusStyles_1 || n[25] !== ariaLabel || n[26] !== children || n[27] !== D || n[28] !== j || n[29] !== K || n[30] !== Q || n[31] !== dataTab || n[32] !== Y || n[33] !== J || n[34] !== Z || n[35] !== testid) {
            const Component = r("WAWebUnstyledButton.react");
            ee = <Component ref={D} role="listitem" xstyle={j} onClick={K} tabIndex={Q} dataTab={dataTab} testid={testid} onFocus={Y} onBlur={J} onMouseDown={Z} applyWrapperFocusStyles={applyWrapperFocusStyles_1} aria-label={ariaLabel}>{children}</Component>;
            n[24] = applyWrapperFocusStyles_1;
            n[25] = ariaLabel;
            n[26] = children;
            n[27] = D;
            n[28] = j;
            n[29] = K;
            n[30] = Q;
            n[31] = dataTab;
            n[32] = Y;
            n[33] = J;
            n[34] = Z;
            n[35] = testid;
            n[36] = ee;
        } else {
            ee = n[36];
        }
        return ee;
    }
    l.useMenuItem = p;
    l.WAWebMenuItem = g;
}, 98);