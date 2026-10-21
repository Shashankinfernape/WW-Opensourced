__d("WAWebSearchFilterChip.react", [
    "WAWebFlex.react",
    "WAWebKeyboardHotKeys.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useImperativeHandle, useRef, useState } = u;
    const p = {
        searchChip: {
            borderStartStartRadius: "xbrszos",
            borderStartEndRadius: "xea3l6g",
            borderEndEndRadius: "x18isctg",
            borderEndStartRadius: "x2q3nzr",
            backgroundColor: "xnbdvss",
            color: "x14ug900",
            borderTopStyle: "x13fuv20",
            borderInlineEndStyle: "x18b5jzi",
            borderBottomStyle: "x1q0q8m5",
            borderInlineStartStyle: "x1t7ytsu",
            borderTopWidth: "x5see2y",
            borderInlineEndWidth: "x16hg961",
            borderBottomWidth: "x1pzews7",
            borderInlineStartWidth: "x1x3agtl",
            borderTopColor: "xmqhhia",
            borderInlineEndColor: "xhxcbcp",
            borderBottomColor: "x1klr3x6",
            borderInlineStartColor: "x11lmomm",
            whiteSpace: "xuxw1ft",
            $$css: true
        },
        searchChipFocused: {
            borderTopColor: "x1t820il",
            borderInlineEndColor: "x1yrp5sm",
            borderBottomColor: "x15br8yv",
            borderInlineStartColor: "x198hnly",
            $$css: true
        },
        paddingHoriz4: {
            paddingInlineStart: "x181vq82",
            paddingInlineEnd: "x1uc92m",
            paddingLeft: null,
            paddingRight: null,
            $$css: true
        },
        paddingVert2: {
            paddingTop: "x1gxa6cn",
            paddingBottom: "xa0aww2",
            $$css: true
        }
    };
    function _(e) {
        const t = o("react-compiler-runtime").c(16);
        const { onClearFilter, ref, text, xstyle } = e;
        const lRef = useRef();
        const u = useState(false);
        const _ = u[0];
        const f = u[1];
        let g;
        if (t[0] !== _ || t[1] !== onClearFilter) {
            g = {
                backspace: function() {
                    if (_) {
                        onClearFilter();
                    }
                }
            };
            t[0] = _;
            t[1] = onClearFilter;
            t[2] = g;
        } else {
            g = t[2];
        }
        const h = g;
        let y;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            y = function() {
                lRef.current?.focus();
                f(true);
            };
            t[3] = y;
        } else {
            y = t[3];
        }
        const C = y;
        let b;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            b = function(t) {
                t.preventDefault();
                C();
            };
            t[4] = b;
        } else {
            b = t[4];
        }
        const v = b;
        let S;
        if (t[5] !== _) {
            S = function() {
                return {
                    focus: function() {
                        C();
                    },
                    blur: function() {
                        lRef.current?.blur();
                        f(false);
                    },
                    isFocused: function() {
                        return _;
                    }
                };
            };
            t[5] = _;
            t[6] = S;
        } else {
            S = t[6];
        }
        useImperativeHandle(ref, S);
        const R = _ && p.searchChipFocused;
        let L;
        if (t[7] !== R) {
            L = [
                p.paddingHoriz4,
                p.paddingVert2,
                p.searchChip,
                R
            ];
            t[7] = R;
            t[8] = L;
        } else {
            L = t[8];
        }
        let E;
        if (t[9] !== L || t[10] !== text) {
            const Component = o("WAWebFlex.react").FlexRow;
            E = <Component xstyle={L}>{text}</Component>;
            t[9] = L;
            t[10] = text;
            t[11] = E;
        } else {
            E = t[11];
        }
        let k;
        if (t[12] !== h || t[13] !== E || t[14] !== xstyle) {
            const Component = o("WAWebKeyboardHotKeys.react").HotKeys;
            k = <Component ref={lRef} handlers={h} xstyle={xstyle} onClick={v}>{E}</Component>;
            t[12] = h;
            t[13] = E;
            t[14] = xstyle;
            t[15] = k;
        } else {
            k = t[15];
        }
        return k;
    }
    l.default = _;
}, 98);