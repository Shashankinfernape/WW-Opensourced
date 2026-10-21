__d("WAWebSwitchMenuItem.react", [
    "WAWebCellMenuItem.react",
    "WDSSwitch.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    const e = [
        "disabled",
        "initialState",
        "on",
        "onSelect"
    ];
    let s;
    const u = s || (s = o("react"));
    const s_useState = s.useState;
    function d(t) {
        const n = o("react-compiler-runtime").c(20);
        let a;
        let i;
        let l;
        let s;
        let d;
        if (n[0] !== t) {
            s = t.disabled;
            d = t.initialState;
            a = t.on;
            i = t.onSelect;
            l = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = a;
            n[2] = i;
            n[3] = l;
            n[4] = s;
            n[5] = d;
        } else {
            a = n[1];
            i = n[2];
            l = n[3];
            s = n[4];
            d = n[5];
        }
        const m = s === undefined ? false : s;
        const p = d === undefined ? false : d;
        const _ = s_useState(a ?? p);
        const f = _[0];
        const g = _[1];
        const h = a ?? f;
        let y;
        if (n[6] !== m || n[7] !== a || n[8] !== h || n[9] !== f || n[10] !== i) {
            y = function() {
                if (!m) {
                    if (a == null) {
                        g(!f);
                    }
                    if (i != null) {
                        i(!h);
                    }
                }
            };
            n[6] = m;
            n[7] = a;
            n[8] = h;
            n[9] = f;
            n[10] = i;
            n[11] = y;
        } else {
            y = n[11];
        }
        const C = y;
        let b;
        if (n[12] !== m || n[13] !== h) {
            b = u.jsx(r("WDSSwitch.react"), {
                disabled: m,
                value: h,
                tabIndex: -1
            });
            n[12] = m;
            n[13] = h;
            n[14] = b;
        } else {
            b = n[14];
        }
        let v;
        if (n[15] !== m || n[16] !== C || n[17] !== l || n[18] !== b) {
            v = u.jsx(o("WAWebCellMenuItem.react").CellV2MenuItem, babelHelpers.extends({}, l, {
                disabled: m,
                type: "switch",
                onSelect: C,
                primaryRight: b
            }));
            n[15] = m;
            n[16] = C;
            n[17] = l;
            n[18] = b;
            n[19] = v;
        } else {
            v = n[19];
        }
        return v;
    }
    l.SwitchMenuItem = d;
}, 98);