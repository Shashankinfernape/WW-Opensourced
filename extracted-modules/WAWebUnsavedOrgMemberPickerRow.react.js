__d("WAWebUnsavedOrgMemberPickerRow.react", [
    "WAWebCheckBox.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebNoop",
    "WAWebOrgMemberPickerCell.react",
    "WAWebOrgTimelock",
    "WAWebReachoutTimelockUtils",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = {
        wrapper: {
            position: "x1n2onr6",
            width: "xh8yej3",
            $$css: true
        }
    };
    function c(e) {
        const t = o("react-compiler-runtime").c(21);
        const { disabled, lid, member, onSelect } = e;
        let c;
        if (t[0] !== lid) {
            c = o("WAWebReachoutTimelockUtils").isUserReachoutTimelockedAndVisible() && !o("WAWebOrgTimelock").canMessageOrgMemberWhileTimelocked(lid);
            t[0] = lid;
            t[1] = c;
        } else {
            c = t[1];
        }
        const d = c;
        let m;
        if (t[2] !== disabled || t[3] !== onSelect || t[4] !== d) {
            m = function(t) {
                t.preventDefault();
                if (!disabled && !d) {
                    onSelect();
                }
            };
            t[2] = disabled;
            t[3] = onSelect;
            t[4] = d;
            t[5] = m;
        } else {
            m = t[5];
        }
        const p = m;
        let _;
        if (t[6] !== p) {
            _ = {
                enter: p,
                space: p
            };
            t[6] = p;
            t[7] = _;
        } else {
            _ = t[7];
        }
        const f = disabled || d;
        let g;
        if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
            g = {
                className: "x10l6tqk x1pe450p x11uqc5h x78zum5 x6s0dn4 x5yr21d x47corl"
            };
            t[8] = g;
        } else {
            g = t[8];
        }
        const h = disabled || d;
        let y;
        if (t[9] !== h) {
            const Component = o("WAWebCheckBox.react").CheckBox;
            y = <div {...babelHelpers.extends({}, g, {
                children: <Component checked={false} disabled={h} onChange={r("WAWebNoop")} tabIndex={-1} theme={o("WAWebCheckBox.react").CheckboxTheme.OUTLINE}/>
            })}/>;
            t[9] = h;
            t[10] = y;
        } else {
            y = t[10];
        }
        let C;
        if (t[11] !== disabled || t[12] !== lid || t[13] !== member) {
            C = s.jsx(r("WAWebOrgMemberPickerCell.react"), {
                active: false,
                disabled,
                lid,
                member
            });
            t[11] = disabled;
            t[12] = lid;
            t[13] = member;
            t[14] = C;
        } else {
            C = t[14];
        }
        let b;
        if (t[15] !== p || t[16] !== _ || t[17] !== f || t[18] !== y || t[19] !== C) {
            const Component = o("WAWebKeyboardHotKeys.react").HotKeys;
            b = <Component component="div" handlers={_} xstyle={u.wrapper} aria-checked={false} aria-disabled={f} data-testid="org-member-picker-unsaved-row" onClick={p} role="checkbox" tabIndex={-1}>{y}{C}</Component>;
            t[15] = p;
            t[16] = _;
            t[17] = f;
            t[18] = y;
            t[19] = C;
            t[20] = b;
        } else {
            b = t[20];
        }
        return b;
    }
    l.default = c;
}, 98);