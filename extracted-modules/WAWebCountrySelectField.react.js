__d("WAWebCountrySelectField.react", [
    "fbt",
    "WAIsoToCc",
    "WAWebClickable.react",
    "WAWebCountriesNativeCountryNames",
    "WAWebCountrySelect.react",
    "WAWebDropdownV2.react",
    "WAWebFlex.react",
    "WAWebLexicalWAWebMenu.react",
    "WAWebMenuItems.react",
    "WAWebSearchInput",
    "WAWebSimpleSearch",
    "WAWebStopEvent",
    "WDSIconIcArrowDropDown.react",
    "WDSIconIcCheck.react",
    "WDSPaddings.stylex",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = e;
    const { useMemo, useRef, useState } = c;
    const _ = {
        paddingBottom5: {
            paddingBottom: "xs9asl8",
            $$css: true
        }
    };
    const f = {
        tealColor: {
            color: "x1v5yvga",
            $$css: true
        },
        container: {
            borderBottomWidth: "xlxy82",
            borderBottomStyle: "x1q0q8m5",
            borderBottomColor: "x16pkwpw",
            cursor: "x1ypdohk",
            $$css: true
        },
        label: {
            width: "x1dmp6jm",
            fontSize: "x1lkfr7t",
            lineHeight: "x1fc57z9",
            $$css: true
        }
    };
    function g(e) {
        const t = o("react-compiler-runtime").c(32);
        const { countries, initialSelection, onChange, testid } = e;
        const c = useState();
        const d = c[0];
        const onSearch = c[1];
        const h = useState(initialSelection);
        const y = h[0];
        const C = h[1];
        const bRef = useRef(null);
        const vRef = useRef();
        let S;
        if (t[0] !== countries) {
            S = o("WAWebCountrySelect.react").getCountryDropdownItems({
                countries
            });
            t[0] = countries;
            t[1] = S;
        } else {
            S = t[1];
        }
        let L = S;
        if (d != null && d.length) {
            let E;
            if (t[2] !== L || t[3] !== d) {
                let k;
                if (t[5] !== d) {
                    k = function(t) {
                        return o("WAWebSimpleSearch").simpleSearch(d, [
                            t.menuItem.searchCriteria
                        ]);
                    };
                    t[5] = d;
                    t[6] = k;
                } else {
                    k = t[6];
                }
                E = L.filter(k);
                t[2] = L;
                t[3] = d;
                t[4] = E;
            } else {
                E = t[4];
            }
            L = E;
        }
        const I = L;
        let T;
        if (t[7] !== onChange) {
            T = function(t) {
                C(t);
                onChange?.(t);
                vRef.current?.hidePopover();
            };
            t[7] = onChange;
            t[8] = T;
        } else {
            T = t[8];
        }
        const D = T;
        let x;
        if (t[9] !== y) {
            x = function(t) {
                return u.jsx(o("WAWebMenuItems.react").ActionMenuItem, babelHelpers.extends({}, t.menuItem, {
                    detailRight: t.itemKey === y ? u.jsx(r("WDSIconIcCheck.react"), {
                        iconXstyle: f.tealColor
                    }) : t.menuItem.detailRight
                }));
            };
            t[9] = y;
            t[10] = x;
        } else {
            x = t[10];
        }
        const $ = x;
        let P;
        if (t[11] === Symbol.for("react.memo_cache_sentinel")) {
            P = [
                16,
                16,
                8,
                16
            ];
            t[11] = P;
        } else {
            P = t[11];
        }
        let N;
        if (t[12] !== I || t[13] !== $ || t[14] !== D || t[15] !== y) {
            const Component = o("WAWebLexicalWAWebMenu.react").LexicalWAWebPerformantMenu;
            const Component_1 = o("WAWebSearchInput").SearchInput;
            const Component_2 = o("WAWebDropdownV2.react").DropdownV2;
            N = <Component_2 alignment={o("WAWebDropdownV2.react").PopoverAlignment.Start} buffer={4} controllerRef={vRef} initHandling="click" position={o("WAWebDropdownV2.react").PopoverPosition.Bottom} target={bRef}><Component_1 colorScheme="darker" onSearch={onSearch} padding={P}><Component data={I} initialActiveOptionId={y} material maxHeight={400} minWidth={300} onSelect={D} renderItem={$} reorderAnimationsEnabled={false}/></Component_1></Component_2>;
            t[12] = I;
            t[13] = $;
            t[14] = D;
            t[15] = y;
            t[16] = N;
        } else {
            N = t[16];
        }
        const M = N;
        let w;
        if (t[17] !== y) {
            const AComponent = ()=>{
                const t = r("WAIsoToCc")[y];
                const n = `${y} +${t}`;
                const o = r("WAWebCountriesNativeCountryNames")[y] ?? y;
                const a = `${o} +${t}`;
                const i = s._("Country: {country label}", [
                    s._param("country label", a)
                ]);
                return <div aria-label={i}>{n}</div>;
            };
            w = AComponent();
            t[17] = y;
            t[18] = w;
        } else {
            w = t[18];
        }
        const F = w;
        let O;
        if (t[19] === Symbol.for("react.memo_cache_sentinel")) {
            O = <div className="x1pg5gke x1d3mw78 xm7witj">{s._("Country")}</div>;
            t[19] = O;
        } else {
            O = t[19];
        }
        let B;
        if (t[20] === Symbol.for("react.memo_cache_sentinel")) {
            B = [
                o("WDSPaddings.stylex").wdsPaddings.paddingTop8,
                _.paddingBottom5
            ];
            t[20] = B;
        } else {
            B = t[20];
        }
        let W;
        if (t[21] !== F) {
            const Component = o("WAWebFlex.react").FlexItem;
            W = <Component align="center" dir="ltr" justify="start" xstyle={f.label}>{F}</Component>;
            t[21] = F;
            t[22] = W;
        } else {
            W = t[22];
        }
        let q;
        if (t[23] === Symbol.for("react.memo_cache_sentinel")) {
            q = u.jsx(r("WDSIconIcArrowDropDown.react"), {
                height: 20,
                width: 20,
                xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingStart8
            });
            t[23] = q;
        } else {
            q = t[23];
        }
        let U;
        if (t[24] !== W) {
            const Component = o("WAWebFlex.react").FlexRow;
            U = <Component align="center" grow={1} justify="all">{W}{q}</Component>;
            t[24] = W;
            t[25] = U;
        } else {
            U = t[25];
        }
        let V;
        if (t[26] !== U || t[27] !== testid) {
            const Component = o("WAWebClickable.react").Clickable;
            V = <Component dataTestId={testid} onClick={o("WAWebStopEvent").stopPropagation} ref={bRef} xstyle={B}>{U}</Component>;
            t[26] = U;
            t[27] = testid;
            t[28] = V;
        } else {
            V = t[28];
        }
        let H;
        if (t[29] !== M || t[30] !== V) {
            const Component = o("WAWebFlex.react").FlexColumn;
            H = <Component align="start" xstyle={f.container} grow={0} shrink={0}>{O}{V}{M}</Component>;
            t[29] = M;
            t[30] = V;
            t[31] = H;
        } else {
            H = t[31];
        }
        return H;
    }
    l.default = g;
}, 226);