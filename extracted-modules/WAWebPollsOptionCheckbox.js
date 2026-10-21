__d("WAWebPollsOptionCheckbox", [
    "fbt",
    "WAWebCheckBox.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = {
        xoeyzqq: "xmw7cw xoeyzqq",
        $$css: true
    };
    const d = {
        xoeyzqq: "x1emn1tm xoeyzqq",
        $$css: true
    };
    function m(e) {
        const t = o("react-compiler-runtime").c(19);
        const { checked, count, disabled, id, onOptionToggle, option, testid, theme } = e;
        const { localId, name } = option;
        let f;
        if (t[0] !== count || t[1] !== name) {
            f = s._("_j{\"*\":\"{option} {votes} votes\",\"_1\":\"{option} 1 vote\"}", [
                s._plural(count, "votes"),
                s._param("option", name)
            ]);
            t[0] = count;
            t[1] = name;
            t[2] = f;
        } else {
            f = t[2];
        }
        const g = f;
        let h;
        if (t[3] !== theme) {
            h = ({
                0: {
                    className: "x1emn1tm xoeyzqq"
                },
                1: {
                    className: "xmw7cw xoeyzqq"
                }
            })[(theme === o("WAWebCheckBox.react").CheckboxTheme.POLLS_SENDER) << 0];
            t[3] = theme;
            t[4] = h;
        } else {
            h = t[4];
        }
        let y;
        if (t[5] !== localId || t[6] !== onOptionToggle) {
            y = function() {
                onOptionToggle(localId);
            };
            t[5] = localId;
            t[6] = onOptionToggle;
            t[7] = y;
        } else {
            y = t[7];
        }
        let C;
        if (t[8] !== checked || t[9] !== disabled || t[10] !== id || t[11] !== g || t[12] !== y || t[13] !== testid || t[14] !== theme) {
            const Component = o("WAWebCheckBox.react").CheckBox;
            C = <Component checked={checked} id={id} disabled={disabled} ariaLabel={g} theme={theme} onChange={y} testid={testid}/>;
            t[8] = checked;
            t[9] = disabled;
            t[10] = id;
            t[11] = g;
            t[12] = y;
            t[13] = testid;
            t[14] = theme;
            t[15] = C;
        } else {
            C = t[15];
        }
        let b;
        if (t[16] !== h || t[17] !== C) {
            b = <div {...babelHelpers.extends({}, h, {
                children: C
            })}/>;
            t[16] = h;
            t[17] = C;
            t[18] = b;
        } else {
            b = t[18];
        }
        return b;
    }
    l.default = m;
}, 226);