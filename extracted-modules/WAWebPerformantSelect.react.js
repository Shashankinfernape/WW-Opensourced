__d("WAWebPerformantSelect.react", [
    "WAWebDropdownV2.react",
    "WAWebLexicalWAWebMenu.react",
    "WAWebMenuItems.react",
    "WAWebPerformantMenu.react",
    "WAWebSearchInput",
    "WAWebSelectButton.react",
    "WAWebSimpleSearch",
    "WDSIconIcCheck.react",
    "WDSThemes",
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
    const { useEffect, useRef, useState } = c;
    const _ = {
        tealColor: {
            color: "x1v5yvga",
            $$css: true
        }
    };
    function f(t) {
        const n = o("react-compiler-runtime").c(37);
        const t_ref = t.ref;
        const i = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const { ariaLabel, customLabel, defaultLabel, includeSearchInput, initialSelection, items, menuMaxHeight, menuMinWidth, onOpen, popoverControllerRef, testid, theme, width } = i;
        const E = menuMaxHeight === undefined ? 350 : menuMaxHeight;
        const k = useState();
        const I = k[0];
        const T = k[1];
        let D = items;
        if (I != null && I.length) {
            let x;
            if (n[0] !== I) {
                x = function(t) {
                    return o("WAWebSimpleSearch").simpleSearch(I, [
                        t.menuItem.searchCriteria
                    ]);
                };
                n[0] = I;
                n[1] = x;
            } else {
                x = n[1];
            }
            D = items.filter(x);
        }
        const $ = D;
        const P = function(t) {
            let n;
            if (customLabel != null) {
                n = customLabel(t);
            }
            if (n == null && t != null) {
                const r = $.find((e)=>e.itemKey === t);
                if (r != null) {
                    n = r.menuItem.primary;
                }
            }
            return n ?? defaultLabel ?? "";
        };
        const NRef = useRef(null);
        const M = r("useMergeRefs")(t_ref, NRef);
        const wRef = useRef();
        const A = popoverControllerRef ?? wRef;
        const F = useState(initialSelection);
        const O = F[0];
        const B = F[1];
        const W = useState(P(initialSelection));
        const q = W[0];
        const U = W[1];
        let V;
        if (n[2] !== A || n[3] !== P || n[4] !== i || n[5] !== B) {
            V = function(t) {
                const n = P(t);
                U(n);
                B(t);
                i.onChange?.(t);
                A.current?.hidePopover();
            };
            n[2] = A;
            n[3] = P;
            n[4] = i;
            n[5] = B;
            n[6] = V;
        } else {
            V = n[6];
        }
        const H = V;
        let G;
        if (n[7] !== O) {
            G = function(t) {
                return u.jsx(o("WAWebMenuItems.react").ActionMenuItem, babelHelpers.extends({}, t.menuItem, {
                    detailRight: t.itemKey === O ? u.jsx(r("WDSIconIcCheck.react"), {
                        iconXstyle: _.tealColor
                    }) : t.menuItem.detailRight
                }));
            };
            n[7] = O;
            n[8] = G;
        } else {
            G = n[8];
        }
        const z = G;
        const j = useState(menuMinWidth);
        const K = j[0];
        const Q = j[1];
        let X;
        let Y;
        if (n[9] !== menuMinWidth) {
            X = function() {
                if (menuMinWidth == null) {
                    Q(NRef.current?.clientWidth);
                }
            };
            Y = [
                menuMinWidth
            ];
            n[9] = menuMinWidth;
            n[10] = X;
            n[11] = Y;
        } else {
            X = n[10];
            Y = n[11];
        }
        useEffect(X, Y);
        const JRef = useRef(null);
        let Z;
        if (n[12] === Symbol.for("react.memo_cache_sentinel")) {
            Z = function() {
                JRef.current?.focus();
            };
            n[12] = Z;
        } else {
            Z = n[12];
        }
        const onArrowDown = Z;
        let te;
        if (n[13] !== $ || n[14] !== z || n[15] !== H || n[16] !== E || n[17] !== K || n[18] !== O) {
            te = {
                data: $,
                material: true,
                renderItem: z,
                initialActiveOptionId: O,
                onSelect: H,
                maxHeight: E,
                minWidth: K,
                reorderAnimationsEnabled: false,
                setFocusRef: JRef
            };
            n[13] = $;
            n[14] = z;
            n[15] = H;
            n[16] = E;
            n[17] = K;
            n[18] = O;
            n[19] = te;
        } else {
            te = n[19];
        }
        const ne = te;
        let re;
        if (n[20] !== includeSearchInput || n[21] !== ne || n[22] !== T) {
            const Component = o("WAWebSearchInput").SearchInput;
            re = includeSearchInput === true ? <Component colorScheme="darker" onArrowDown={onArrowDown} onSearch={T} padding={[
                16,
                16,
                8,
                16
            ]}>{u.jsx(o("WAWebLexicalWAWebMenu.react").LexicalWAWebPerformantMenu, babelHelpers.extends({}, ne))}</Component> : u.jsx(o("WAWebPerformantMenu.react").WDSPerformantMenu, babelHelpers.extends({}, ne));
            n[20] = includeSearchInput;
            n[21] = ne;
            n[22] = T;
            n[23] = re;
        } else {
            re = n[23];
        }
        const oe = re;
        const ae = width ?? "100%";
        const ie = theme === "link-devices-screen" ? o("WDSThemes").WDSLightTheme : undefined;
        let le;
        if (n[24] !== A || n[25] !== oe || n[26] !== onOpen || n[27] !== ie) {
            const Component = o("WAWebDropdownV2.react").DropdownV2;
            le = <Component alignment={o("WAWebDropdownV2.react").PopoverAlignment.Start} buffer={4} controllerRef={A} initHandling="click" onOpen={onOpen} position={o("WAWebDropdownV2.react").PopoverPosition.Bottom} target={NRef} xstyle={ie}>{oe}</Component>;
            n[24] = A;
            n[25] = oe;
            n[26] = onOpen;
            n[27] = ie;
            n[28] = le;
        } else {
            le = n[28];
        }
        let se;
        if (n[29] !== ariaLabel || n[30] !== q || n[31] !== M || n[32] !== le || n[33] !== ae || n[34] !== testid || n[35] !== theme) {
            const Component = o("WAWebSelectButton.react").SelectButton;
            se = <Component ariaLabel={ariaLabel} label={q} ref={M} testid={testid} theme={theme} width={ae}>{le}</Component>;
            n[29] = ariaLabel;
            n[30] = q;
            n[31] = M;
            n[32] = le;
            n[33] = ae;
            n[34] = testid;
            n[35] = theme;
            n[36] = se;
        } else {
            se = n[36];
        }
        return se;
    }
    l.Select = f;
}, 98);