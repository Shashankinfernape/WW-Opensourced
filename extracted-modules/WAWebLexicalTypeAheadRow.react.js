__d("WAWebLexicalTypeAheadRow.react", [
    "ReactDOM",
    "WAWebAccessibility.react",
    "WAWebPortalThemeWrapper.react",
    "WAWebUnstyledButton.react",
    "react",
    "react-compiler-runtime",
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
    const f = 7;
    const g = {
        itemsContainer: {
            display: "x78zum5",
            flexDirection: "x1q0g3np",
            backgroundColor: "x1311tq3",
            boxShadow: "xvh3i5d",
            borderStartStartRadius: "x6nvzda",
            borderStartEndRadius: "x4i4b9w",
            borderEndEndRadius: "xhl9efl",
            borderEndStartRadius: "xj65ea0",
            overflowX: "x14aock7",
            $$css: true
        }
    };
    function HComponent(e) {
        const t = o("react-compiler-runtime").c(33);
        const { itemHeight, items, itemWidth, leadOffset, onCancel } = e;
        const items_length = items.length;
        let h;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            h = [];
            t[0] = h;
        } else {
            h = t[0];
        }
        const CRef = useRef(h);
        let b;
        e: {
            if (items_length > f) {
                const v = itemWidth / 2 + _;
                b = itemWidth * f - v + _ * 2;
                break e;
            }
            b = itemWidth * items_length + _ * 2;
        }
        const R = items.length === 0 ? 0 : b;
        const L = itemHeight + _ * 2;
        const E = o("useWAWebLexicalTypeAheadContainer").useLexicalTypeAheadContainer(leadOffset, R, L);
        const { containerEle, hideContainer } = E;
        let T;
        if (t[1] !== hideContainer || t[2] !== onCancel) {
            T = {
                onSelect,
                onCancel: function() {
                    hideContainer();
                    onCancel();
                }
            };
            t[1] = hideContainer;
            t[2] = onCancel;
            t[3] = T;
        } else {
            T = t[3];
        }
        const D = o("useWAWebLexicalTypeAheadKeyboardNavigation").useLexicalTypeAheadKeyboardNavigation(items, 0, "row", T);
        const { activeIndex, setActiveIndex } = D;
        let P;
        let N;
        if (t[4] !== activeIndex) {
            P = function() {
                const e = CRef.current[activeIndex];
                if (e) {
                    e.scrollIntoView();
                }
            };
            N = [
                activeIndex
            ];
            t[4] = activeIndex;
            t[5] = P;
            t[6] = N;
        } else {
            P = t[5];
            N = t[6];
        }
        useEffect(P, N);
        let M;
        if (t[7] !== activeIndex || t[8] !== items || t[9] !== setActiveIndex) {
            M = items.map((e, t)=>{
                const Component = r("WAWebUnstyledButton.react");
                return <Component key={t} ref={function(n) {
                    CRef.current[t] = n;
                }} aria-label={e.ariaLabel} onClick={function(n) {
                    n.preventDefault();
                    n.stopPropagation();
                    e.onSelect();
                }} onMouseEnter={function() {
                    setActiveIndex(t);
                }}>{e.renderFn(t === activeIndex)}</Component>;
            });
            t[7] = activeIndex;
            t[8] = items;
            t[9] = setActiveIndex;
            t[10] = M;
        } else {
            M = t[10];
        }
        const w = M;
        if (w.length === 0) {
            return null;
        }
        let A;
        let F;
        let O;
        let B;
        let W;
        if (t[11] !== activeIndex || t[12] !== hideContainer || t[13] !== items) {
            const U = [
                g.itemsContainer,
                p.padding10
            ];
            const V = items[activeIndex];
            F = V?.ariaLabel ?? "";
            W = o("ReactDOM").createPortal;
            A = r("WAWebPortalThemeWrapper.react");
            O = hideContainer;
            B = {
                className: "x78zum5 x1q0g3np x1311tq3 xvh3i5d x6nvzda x4i4b9w xhl9efl xj65ea0 x14aock7 x889kno x2vl965 x1a8lsjc xe2zdcy"
            };
            t[11] = activeIndex;
            t[12] = hideContainer;
            t[13] = items;
            t[14] = A;
            t[15] = F;
            t[16] = O;
            t[17] = B;
            t[18] = W;
        } else {
            A = t[14];
            F = t[15];
            O = t[16];
            B = t[17];
            W = t[18];
        }
        let H;
        if (t[19] !== F) {
            H = s.jsx(o("WAWebAccessibility.react").InvisibleAnnouncement, {
                text: F,
                assertive: true
            });
            t[19] = F;
            t[20] = H;
        } else {
            H = t[20];
        }
        let G;
        if (t[21] !== w || t[22] !== H || t[23] !== O || t[24] !== B) {
            G = <div {...babelHelpers.extends({
                onClick: O
            }, B, {
                children: [
                    w,
                    H
                ]
            })}/>;
            t[21] = w;
            t[22] = H;
            t[23] = O;
            t[24] = B;
            t[25] = G;
        } else {
            G = t[25];
        }
        let z;
        if (t[26] !== A || t[27] !== G) {
            z = <A>{G}</A>;
            t[26] = A;
            t[27] = G;
            t[28] = z;
        } else {
            z = t[28];
        }
        let j;
        if (t[29] !== containerEle || t[30] !== z || t[31] !== W) {
            j = W(z, containerEle);
            t[29] = containerEle;
            t[30] = z;
            t[31] = W;
            t[32] = j;
        } else {
            j = t[32];
        }
        return j;
    }
    function onSelect(e) {
        e.onSelect();
    }
    l.default = HComponent;
}, 98);