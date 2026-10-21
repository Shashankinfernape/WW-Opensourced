__d("WAWebCallDropdownMenuItems.react", [
    "WAWebMenuController.react",
    "WAWebMenuItem.react",
    "WAWebUnstyledButton.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const e_useRef = e.useRef;
    const c = {
        menuItemButton: {
            alignSelf: "xkh2ocl",
            display: "x78zum5",
            flexBasis: "xdl72j9",
            flexGrow: "x1iyjqo2",
            flexShrink: "x2lah0s",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            textAlign: "x1yc453h",
            width: "xh8yej3",
            $$css: true
        }
    };
    function d(e) {
        const t = o("react-compiler-runtime").c(21);
        const { children, onSelect, optionId } = e;
        const l = o("WAWebMenuController.react").useMenu();
        const d = e_useRef(null);
        let p;
        if (t[0] !== onSelect || t[1] !== optionId) {
            p = {
                id: optionId,
                type: "multi-select",
                label: null,
                onSelect,
                ref: d
            };
            t[0] = onSelect;
            t[1] = optionId;
            t[2] = p;
        } else {
            p = t[2];
        }
        o("WAWebMenuController.react").useRegisterItem(optionId, p);
        const _ = l?.activeItemId === optionId;
        let f;
        if (t[3] !== onSelect) {
            f = function(t) {
                t.stopPropagation();
                onSelect();
            };
            t[3] = onSelect;
            t[4] = f;
        } else {
            f = t[4];
        }
        const g = f;
        const h = m;
        let y;
        if (t[5] !== l || t[6] !== optionId) {
            y = function() {
                l.activateItem(optionId);
            };
            t[5] = l;
            t[6] = optionId;
            t[7] = y;
        } else {
            y = t[7];
        }
        const C = y;
        let b;
        if (t[8] !== l) {
            b = function() {
                l.activateItem(null);
            };
            t[8] = l;
            t[9] = b;
        } else {
            b = t[9];
        }
        const v = b;
        let S;
        if (t[10] === Symbol.for("react.memo_cache_sentinel")) {
            S = {
                className: "x78zum5 xeuugli xh8yej3"
            };
            t[10] = S;
        } else {
            S = t[10];
        }
        let R;
        if (t[11] !== _) {
            R = ({
                0: {
                    className: "xkh2ocl xyi3aci xwf5gio x1p453bz x1suzm8a x1ypdohk x78zum5 xeuugli x1y1aw1k xf159sx xwib8y2 xmzvs34 x1n2onr6 x111pd7f xh8yej3 x1ubxc9n"
                },
                1: {
                    className: "xkh2ocl xyi3aci xwf5gio x1p453bz x1suzm8a x1ypdohk x78zum5 xeuugli x1y1aw1k xf159sx xwib8y2 xmzvs34 x1n2onr6 x111pd7f xh8yej3 x1ubxc9n x4wrhlh"
                }
            })[!!_ << 0];
            t[11] = _;
            t[12] = R;
        } else {
            R = t[12];
        }
        let L;
        if (t[13] !== children || t[14] !== R) {
            L = <div {...babelHelpers.extends({}, R, {
                children
            })}/>;
            t[13] = children;
            t[14] = R;
            t[15] = L;
        } else {
            L = t[15];
        }
        let E;
        if (t[16] !== v || t[17] !== g || t[18] !== C || t[19] !== L) {
            const Component = r("WAWebUnstyledButton.react");
            E = <div {...babelHelpers.extends({
                onKeyDown: h,
                role: "none"
            }, S, {
                children: <Component ref={d} role="listitem" xstyle={c.menuItemButton} onClick={g} tabIndex={-1} onFocus={C} onBlur={v}>{L}</Component>
            })}/>;
            t[16] = v;
            t[17] = g;
            t[18] = C;
            t[19] = L;
            t[20] = E;
        } else {
            E = t[20];
        }
        return E;
    }
    function m(e) {
        if (e.key === " ") {
            e.preventDefault();
        }
    }
    function p(e) {
        const t = o("react-compiler-runtime").c(27);
        const { children, isSelected, onSelect, optionId } = e;
        const d = o("WAWebMenuController.react").useMenu();
        const m = e_useRef(null);
        let p;
        if (t[0] !== onSelect || t[1] !== optionId) {
            p = {
                id: optionId,
                type: "multi-select",
                label: null,
                onSelect,
                ref: m
            };
            t[0] = onSelect;
            t[1] = optionId;
            t[2] = p;
        } else {
            p = t[2];
        }
        o("WAWebMenuController.react").useRegisterItem(optionId, p);
        const _ = d?.activeItemId === optionId;
        let f;
        if (t[3] !== onSelect) {
            f = function(t) {
                t.stopPropagation();
                onSelect();
            };
            t[3] = onSelect;
            t[4] = f;
        } else {
            f = t[4];
        }
        const g = f;
        let h;
        if (t[5] !== onSelect) {
            h = function(t) {
                if (t.key === "Enter" || t.key === " ") {
                    t.stopPropagation();
                    t.preventDefault();
                    onSelect();
                }
            };
            t[5] = onSelect;
            t[6] = h;
        } else {
            h = t[6];
        }
        const y = h;
        let C;
        if (t[7] !== d || t[8] !== optionId) {
            C = function() {
                d.activateItem(optionId);
            };
            t[7] = d;
            t[8] = optionId;
            t[9] = C;
        } else {
            C = t[9];
        }
        const b = C;
        let v;
        if (t[10] !== d) {
            v = function() {
                d.activateItem(null);
            };
            t[10] = d;
            t[11] = v;
        } else {
            v = t[11];
        }
        const S = v;
        let R;
        if (t[12] === Symbol.for("react.memo_cache_sentinel")) {
            R = {
                className: "x78zum5 xeuugli xh8yej3"
            };
            t[12] = R;
        } else {
            R = t[12];
        }
        let L;
        if (t[13] !== _ || t[14] !== isSelected) {
            L = ({
                0: {
                    className: "xyi3aci xwf5gio x1p453bz x1suzm8a x1ypdohk x78zum5 x1n2onr6 x111pd7f xj6ak53 x1ubxc9n"
                },
                2: {
                    className: "xyi3aci xwf5gio x1p453bz x1suzm8a x1ypdohk x78zum5 x1n2onr6 x111pd7f xj6ak53 x1ubxc9n x4wrhlh"
                },
                1: {
                    className: "xyi3aci xwf5gio x1p453bz x1suzm8a x1ypdohk x78zum5 x1n2onr6 x111pd7f xj6ak53 x1abdmlv xm38lk9"
                },
                3: {
                    className: "xyi3aci xwf5gio x1p453bz x1suzm8a x1ypdohk x78zum5 x1n2onr6 x111pd7f xj6ak53 x1abdmlv xm38lk9"
                }
            })[!!(_ || isSelected) << 1 | !!isSelected << 0];
            t[13] = _;
            t[14] = isSelected;
            t[15] = L;
        } else {
            L = t[15];
        }
        let E;
        if (t[16] !== children || t[17] !== L) {
            E = <div {...babelHelpers.extends({}, L, {
                children
            })}/>;
            t[16] = children;
            t[17] = L;
            t[18] = E;
        } else {
            E = t[18];
        }
        let k;
        if (t[19] !== S || t[20] !== g || t[21] !== b || t[22] !== E) {
            const Component = r("WAWebUnstyledButton.react");
            k = <Component ref={m} role="listitem" xstyle={c.menuItemButton} onClick={g} tabIndex={-1} onFocus={b} onBlur={S}>{E}</Component>;
            t[19] = S;
            t[20] = g;
            t[21] = b;
            t[22] = E;
            t[23] = k;
        } else {
            k = t[23];
        }
        let I;
        if (t[24] !== y || t[25] !== k) {
            I = <div {...babelHelpers.extends({
                onKeyDown: y,
                role: "none"
            }, R, {
                children: k
            })}/>;
            t[24] = y;
            t[25] = k;
            t[26] = I;
        } else {
            I = t[26];
        }
        return I;
    }
    function Component(e) {
        const t = o("react-compiler-runtime").c(16);
        const { disabled, icon, label, onSelect, optionId, testid } = e;
        const d = o("WAWebMenuItem.react").useMenuItem(optionId);
        const d_isActive = d.isActive;
        let p;
        if (t[0] !== disabled || t[1] !== d_isActive) {
            p = ({
                0: {
                    className: "x6s0dn4 xyp3urf xt8t1vi x1xc408v x129tdwq x15urzxu x1pse0pq x78zum5 x1qvou4u x1s70e7g xl56j7k x18wx58x x16ovd2e x12xbjc7 xdx6fka xvtqlqk x1n2onr6 xh8yej3 xfijbtm xfenqrj xgy0gl7 x19igvu x1s928wv x1m1drc7 x1unh1gc x1xrz1ek x1iygr5g x1j6awrg x1yxkqql"
                },
                2: {
                    className: "x6s0dn4 xt8t1vi x1xc408v x129tdwq x15urzxu x78zum5 x1qvou4u x1s70e7g xl56j7k x18wx58x x16ovd2e x12xbjc7 xdx6fka xvtqlqk x1n2onr6 xh8yej3 xfijbtm xfenqrj xgy0gl7 x19igvu x1s928wv x1m1drc7 x1unh1gc x1xrz1ek x1iygr5g x1j6awrg x4wrhlh xhslqc4 x2ylx5l"
                },
                1: {
                    className: "x6s0dn4 xyp3urf xt8t1vi x1xc408v x129tdwq x15urzxu x1pse0pq x78zum5 x1qvou4u x1s70e7g xl56j7k x18wx58x x16ovd2e x12xbjc7 xdx6fka xvtqlqk x1n2onr6 xh8yej3 xfijbtm xfenqrj xgy0gl7 x19igvu x1s928wv x1m1drc7 x1unh1gc x1xrz1ek x1iygr5g x1j6awrg x1yxkqql xny8mc"
                },
                3: {
                    className: "x6s0dn4 xt8t1vi x1xc408v x129tdwq x15urzxu x78zum5 x1qvou4u x1s70e7g xl56j7k x18wx58x x16ovd2e x12xbjc7 xdx6fka xvtqlqk x1n2onr6 xh8yej3 xfijbtm xfenqrj xgy0gl7 x19igvu x1s928wv x1m1drc7 x1unh1gc x1xrz1ek x1iygr5g x1j6awrg x4wrhlh xhslqc4 x2ylx5l xny8mc"
                }
            })[!!disabled << 1 | !!(d_isActive && !disabled) << 0];
            t[0] = disabled;
            t[1] = d_isActive;
            t[2] = p;
        } else {
            p = t[2];
        }
        const colorName = disabled ? "contentDeemphasized" : "contentOnAccent";
        let f;
        if (t[3] !== label || t[4] !== colorName) {
            const Component = r("WDSText.react");
            f = <Component type="Body2Emphasized" textAlign="center" selectable={false} colorName={colorName}>{label}</Component>;
            t[3] = label;
            t[4] = colorName;
            t[5] = f;
        } else {
            f = t[5];
        }
        let g;
        if (t[6] !== icon || t[7] !== p || t[8] !== f) {
            g = <div {...babelHelpers.extends({}, p, {
                children: [
                    icon,
                    f
                ]
            })}/>;
            t[6] = icon;
            t[7] = p;
            t[8] = f;
            t[9] = g;
        } else {
            g = t[9];
        }
        let h;
        if (t[10] !== disabled || t[11] !== onSelect || t[12] !== optionId || t[13] !== g || t[14] !== testid) {
            const Component = o("WAWebMenuItem.react").WAWebMenuItem;
            h = <Component optionId={optionId} testid={testid} disabled={disabled} onSelect={onSelect}>{g}</Component>;
            t[10] = disabled;
            t[11] = onSelect;
            t[12] = optionId;
            t[13] = g;
            t[14] = testid;
            t[15] = h;
        } else {
            h = t[15];
        }
        return h;
    }
    l.ExpandableHeaderMenuItem = d;
    l.ParticipantMenuItem = p;
    l.CallButtonMenuItem = Component;
}, 98);