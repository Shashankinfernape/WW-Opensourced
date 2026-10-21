__d("WAWebNavigatableList", [
    "WAWebKeyboardHotKeys.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    const e = [
        "children",
        "forceSelection",
        "handlers",
        "initialActiveItem",
        "items",
        "listControllerRef",
        "onHotKeysFocus",
        "onSelect",
        "rotate"
    ];
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useEffect, useImperativeHandle, useRef } = c;
    function useComponent(t) {
        const n = o("react-compiler-runtime").c(62);
        let r;
        let a;
        let i;
        let l;
        let s;
        let c;
        let _;
        let f;
        let g;
        let h;
        if (n[0] !== t) {
            r = t.children;
            g = t.forceSelection;
            a = t.handlers;
            i = t.initialActiveItem;
            l = t.items;
            s = t.listControllerRef;
            c = t.onHotKeysFocus;
            _ = t.onSelect;
            h = t.rotate;
            f = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = r;
            n[2] = a;
            n[3] = i;
            n[4] = l;
            n[5] = s;
            n[6] = c;
            n[7] = _;
            n[8] = f;
            n[9] = g;
            n[10] = h;
        } else {
            r = n[1];
            a = n[2];
            i = n[3];
            l = n[4];
            s = n[5];
            c = n[6];
            _ = n[7];
            f = n[8];
            g = n[9];
            h = n[10];
        }
        const y = g === undefined ? false : g;
        const C = h === undefined ? false : h;
        const bRef = useRef(null);
        let v;
        if (n[11] !== s || n[12] !== c) {
            v = function(e_1) {
                c?.({
                    e: e_1,
                    controller: s?.current
                });
            };
            n[11] = s;
            n[12] = c;
            n[13] = v;
        } else {
            v = n[13];
        }
        const S = v;
        let R;
        let L;
        if (n[14] !== y || n[15] !== i || n[16] !== l) {
            R = function() {
                if (i != null) {
                    l.setVal(i);
                }
                if (y === true && l.index < 0) {
                    l.setFirst(false);
                }
            };
            L = [
                l,
                y,
                i
            ];
            n[14] = y;
            n[15] = i;
            n[16] = l;
            n[17] = R;
            n[18] = L;
        } else {
            R = n[17];
            L = n[18];
        }
        useEffect(R, L);
        let E;
        if (n[19] !== a) {
            E = a || {};
            n[19] = a;
            n[20] = E;
        } else {
            E = n[20];
        }
        const k = E;
        const { down, enter, space, up } = k;
        let $;
        if (n[21] !== l || n[22] !== C) {
            $ = function() {
                if (C && l.index === l.list.length - 1) {
                    l.setFirst(false);
                } else {
                    l.setNext(false);
                }
            };
            n[21] = l;
            n[22] = C;
            n[23] = $;
        } else {
            $ = n[23];
        }
        const goDown = $;
        let N;
        if (n[24] !== y || n[25] !== l || n[26] !== C) {
            N = function() {
                if (l.index === 0) {
                    if (C) {
                        l.setLast(false);
                        return;
                    } else if (y) {
                        return;
                    }
                }
                l.setPrev(false);
            };
            n[24] = y;
            n[25] = l;
            n[26] = C;
            n[27] = N;
        } else {
            N = n[27];
        }
        const goUp = N;
        let w;
        if (n[28] !== l) {
            w = function(t) {
                l.setIndex(t);
            };
            n[28] = l;
            n[29] = w;
        } else {
            w = n[29];
        }
        const goIndex = w;
        let F;
        if (n[30] !== l || n[31] !== _) {
            F = function() {
                const e = l.getVal();
                if (e != null && _ != null && e?.disabled !== true) {
                    _(e);
                }
            };
            n[30] = l;
            n[31] = _;
            n[32] = F;
        } else {
            F = n[32];
        }
        const selectItem = F;
        let down_1;
        if (n[33] !== down || n[34] !== goDown) {
            down_1 = function(t) {
                if (down?.(t) !== false) {
                    goDown();
                }
            };
            n[33] = down;
            n[34] = goDown;
            n[35] = down_1;
        } else {
            down_1 = n[35];
        }
        let up_1;
        if (n[36] !== goUp || n[37] !== up) {
            up_1 = function(t) {
                if (up?.(t) !== false) {
                    goUp();
                    t.preventDefault();
                }
            };
            n[36] = goUp;
            n[37] = up;
            n[38] = up_1;
        } else {
            up_1 = n[38];
        }
        let enter_1;
        if (n[39] !== enter || n[40] !== selectItem) {
            enter_1 = function(t) {
                if (enter?.(t) !== false) {
                    selectItem();
                }
            };
            n[39] = enter;
            n[40] = selectItem;
            n[41] = enter_1;
        } else {
            enter_1 = n[41];
        }
        let space_1;
        if (n[42] !== selectItem || n[43] !== space) {
            space_1 = function(t) {
                if (space?.(t) !== false) {
                    selectItem();
                    t.preventDefault();
                }
            };
            n[42] = selectItem;
            n[43] = space;
            n[44] = space_1;
        } else {
            space_1 = n[44];
        }
        let V;
        if (n[45] !== a || n[46] !== down_1 || n[47] !== up_1 || n[48] !== enter_1 || n[49] !== space_1) {
            V = babelHelpers.extends({}, a, {
                down: down_1,
                up: up_1,
                enter: enter_1,
                space: space_1
            });
            n[45] = a;
            n[46] = down_1;
            n[47] = up_1;
            n[48] = enter_1;
            n[49] = space_1;
            n[50] = V;
        } else {
            V = n[50];
        }
        const handlers = V;
        let G;
        if (n[51] !== goDown || n[52] !== goIndex || n[53] !== goUp || n[54] !== l || n[55] !== selectItem) {
            G = function() {
                return {
                    goDown,
                    goUp,
                    selectItem,
                    getIndex: function() {
                        return l.index;
                    },
                    goIndex
                };
            };
            n[51] = goDown;
            n[52] = goIndex;
            n[53] = goUp;
            n[54] = l;
            n[55] = selectItem;
            n[56] = G;
        } else {
            G = n[56];
        }
        useImperativeHandle(s, G);
        let z;
        if (n[57] !== r || n[58] !== S || n[59] !== f || n[60] !== handlers) {
            z = u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, babelHelpers.extends({
                ref: bRef,
                handlers,
                onFocus: S
            }, f, {
                children: r
            }));
            n[57] = r;
            n[58] = S;
            n[59] = f;
            n[60] = handlers;
            n[61] = z;
        } else {
            z = n[61];
        }
        return z;
    }
    l.default = useComponent;
}, 98);