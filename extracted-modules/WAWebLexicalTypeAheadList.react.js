__d("WAWebLexicalTypeAheadList.react", [
    "ReactDOM",
    "WAWebNoop",
    "WAWebPortalThemeWrapper.react",
    "WAWebUnstyledButton.react",
    "react",
    "react-compiler-runtime",
    "sumBy",
    "useWAWebLexicalTypeAheadContainer",
    "useWAWebLexicalTypeAheadKeyboardNavigation"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useEffect, useMemo, useRef } = u;
    const p = {
        padding10: {
            paddingTop: "x889kno",
            paddingInlineEnd: "x2vl965",
            paddingBottom: "x1a8lsjc",
            paddingInlineStart: "xe2zdcy",
            $$css: true
        }
    };
    const _ = 10;
    const f = {
        itemsContainer: {
            display: "x78zum5",
            height: "x5yr21d",
            width: "xh8yej3",
            overflowX: "x6ikm8r",
            overflowY: "x1odjw0f",
            flexDirection: "xdt5ytf",
            backgroundColor: "x1280gxy",
            boxShadow: "xvh3i5d",
            boxSizing: "x9f619",
            borderStartStartRadius: "x6nvzda",
            borderStartEndRadius: "x4i4b9w",
            borderEndEndRadius: "xhl9efl",
            borderEndStartRadius: "xj65ea0",
            $$css: true
        }
    };
    function g(e) {
        const t = o("react-compiler-runtime").c(29);
        const { anchorElRef, items, leadOffset, maxVisibleItems, onCancel, startingIndex } = e;
        const g = maxVisibleItems === undefined ? 7 : maxVisibleItems;
        const b = startingIndex === undefined ? 0 : startingIndex;
        let v;
        if (t[0] !== items || t[1] !== g) {
            v = r("sumBy")(items.slice(0, g), C);
            t[0] = items;
            t[1] = g;
            t[2] = v;
        } else {
            v = t[2];
        }
        const R = v + _ * 2;
        const L = items.reduce(y, 0);
        const E = items.length === 0 ? 0 : L + _ * 2;
        const k = o("useWAWebLexicalTypeAheadContainer").useLexicalTypeAheadContainer(leadOffset, E, R, anchorElRef);
        const { containerEle, hideContainer } = k;
        let D;
        if (t[3] !== hideContainer || t[4] !== onCancel) {
            D = {
                onSelect: h,
                onCancel: function() {
                    hideContainer();
                    onCancel();
                }
            };
            t[3] = hideContainer;
            t[4] = onCancel;
            t[5] = D;
        } else {
            D = t[5];
        }
        const x = o("useWAWebLexicalTypeAheadKeyboardNavigation").useLexicalTypeAheadKeyboardNavigation(items, b, "column", D);
        const { activeIndex, setActiveIndex } = x;
        const NRef = useRef(null);
        let M;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
            M = function() {
                NRef.current?.scrollIntoView({
                    block: "nearest"
                });
            };
            t[6] = M;
        } else {
            M = t[6];
        }
        let w;
        if (t[7] !== activeIndex) {
            w = [
                activeIndex
            ];
            t[7] = activeIndex;
            t[8] = w;
        } else {
            w = t[8];
        }
        useEffect(M, w);
        if (items.length !== 0) {
            let A;
            if (t[9] !== activeIndex || t[10] !== items || t[11] !== setActiveIndex) {
                A = items.map((e, t)=>{
                    const Component = r("WAWebUnstyledButton.react");
                    return <Component key={t} ref={function(n) {
                        if (t === activeIndex) {
                            NRef.current = n;
                        }
                    }} disabled={e.disabled} onDisabledClick={e.disabled === true ? r("WAWebNoop") : undefined} onClick={function() {
                        e.onSelect();
                    }} onMouseEnter={function() {
                        setActiveIndex(t);
                    }}>{e.renderFn(t === activeIndex)}</Component>;
                });
                t[9] = activeIndex;
                t[10] = items;
                t[11] = setActiveIndex;
                t[12] = A;
            } else {
                A = t[12];
            }
            const F = A;
            let O;
            let B;
            let W;
            let q;
            if (t[13] !== hideContainer) {
                const U = [
                    f.itemsContainer,
                    p.padding10
                ];
                B = o("ReactDOM").createPortal;
                O = r("WAWebPortalThemeWrapper.react");
                W = hideContainer;
                q = {
                    className: "x78zum5 x5yr21d xh8yej3 x6ikm8r x1odjw0f xdt5ytf x1280gxy xvh3i5d x9f619 x6nvzda x4i4b9w xhl9efl xj65ea0 x889kno x2vl965 x1a8lsjc xe2zdcy"
                };
                t[13] = hideContainer;
                t[14] = O;
                t[15] = B;
                t[16] = W;
                t[17] = q;
            } else {
                O = t[14];
                B = t[15];
                W = t[16];
                q = t[17];
            }
            let V;
            if (t[18] !== F || t[19] !== W || t[20] !== q) {
                V = <div {...babelHelpers.extends({
                    onClick: W
                }, q, {
                    children: F
                })}/>;
                t[18] = F;
                t[19] = W;
                t[20] = q;
                t[21] = V;
            } else {
                V = t[21];
            }
            let H;
            if (t[22] !== O || t[23] !== V) {
                H = <O>{V}</O>;
                t[22] = O;
                t[23] = V;
                t[24] = H;
            } else {
                H = t[24];
            }
            let G;
            if (t[25] !== containerEle || t[26] !== B || t[27] !== H) {
                G = B(H, containerEle);
                t[25] = containerEle;
                t[26] = B;
                t[27] = H;
                t[28] = G;
            } else {
                G = t[28];
            }
            return G;
        }
    }
    function h(e) {
        e.onSelect();
    }
    function y(e, t) {
        return Math.max(e, t.width);
    }
    function C(e) {
        return e.height;
    }
    l.default = g;
}, 98);