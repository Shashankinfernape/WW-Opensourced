__d("WAWebCheckBox.react", [
    "$InternalEnum",
    "WAWebKeyboardHotKeys.react",
    "WDSBaseCheckbox.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = n("$InternalEnum").Mirrored([
        "PARTIAL",
        "OUTLINE",
        "POLLS_RECEIVER",
        "POLLS_SENDER",
        "AUTO_LOGOUT",
        "OUTLINE_WHITE"
    ]);
    function CComponent(e) {
        const t = o("react-compiler-runtime").c(16);
        const { ariaLabel, checked, disabled, id, onArrowKeyLeftRight, onChange, tabIndex, testid, theme } = e;
        const f = disabled === undefined ? false : disabled;
        const g = checked && theme === u.PARTIAL;
        let h;
        if (t[0] !== onArrowKeyLeftRight || t[1] !== onChange) {
            h = function(t) {
                if (o("WAWebKeyboardHotKeys.react").SpecialKeyMap.space === t.keyCode || o("WAWebKeyboardHotKeys.react").SpecialKeyMap.enter === t.keyCode) {
                    t.preventDefault();
                    onChange();
                }
                if (o("WAWebKeyboardHotKeys.react").SpecialKeyMap.right === t.keyCode || o("WAWebKeyboardHotKeys.react").SpecialKeyMap.left === t.keyCode) {
                    if (onArrowKeyLeftRight != null) {
                        onArrowKeyLeftRight(t.keyCode);
                    }
                }
            };
            t[0] = onArrowKeyLeftRight;
            t[1] = onChange;
            t[2] = h;
        } else {
            h = t[2];
        }
        const y = h;
        const C = theme === u.POLLS_RECEIVER || theme === u.POLLS_SENDER;
        const b = tabIndex ?? undefined;
        const v = g ? "indeterminate" : checked;
        let S;
        if (t[3] !== onChange) {
            S = function(t) {
                if (t) {
                    onChange(t);
                }
            };
            t[3] = onChange;
            t[4] = S;
        } else {
            S = t[4];
        }
        const appearsOnMedia = theme === u.OUTLINE_WHITE;
        const shape = C ? "circle" : "square";
        let E;
        if (t[5] !== ariaLabel || t[6] !== f || t[7] !== y || t[8] !== id || t[9] !== b || t[10] !== v || t[11] !== S || t[12] !== appearsOnMedia || t[13] !== shape || t[14] !== testid) {
            const Component = r("WDSBaseCheckbox.react");
            E = <Component tabIndex={b} value={v} disabled={f} id={id} onChange={S} onKeyDown={y} testid={testid} aria-label={ariaLabel} appearsOnMedia={appearsOnMedia} shape={shape}/>;
            t[5] = ariaLabel;
            t[6] = f;
            t[7] = y;
            t[8] = id;
            t[9] = b;
            t[10] = v;
            t[11] = S;
            t[12] = appearsOnMedia;
            t[13] = shape;
            t[14] = testid;
            t[15] = E;
        } else {
            E = t[15];
        }
        return E;
    }
    l.CheckboxTheme = u;
    l.CheckBox = CComponent;
}, 98);