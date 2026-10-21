__d("WAWebSuspendedGroupModal.react", [
    "fbt",
    "WAWebButton.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebModal.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(22);
        const { children, onDismissClicked, onSupportClicked, showSupportBtn, title } = e;
        let c;
        if (t[0] !== onSupportClicked) {
            c = function(t) {
                t.stopPropagation();
                t.preventDefault();
                onSupportClicked?.();
            };
            t[0] = onSupportClicked;
            t[1] = c;
        } else {
            c = t[1];
        }
        const d = c;
        let m;
        if (t[2] !== onDismissClicked) {
            m = function(t) {
                t.stopPropagation();
                t.preventDefault();
                onDismissClicked?.();
            };
            t[2] = onDismissClicked;
            t[3] = m;
        } else {
            m = t[3];
        }
        const p = m;
        let _;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            _ = s._("Support");
            t[4] = _;
        } else {
            _ = t[4];
        }
        let f;
        if (t[5] !== d) {
            const Component = o("WAWebButton.react").Button;
            f = <Component testid="popup-controls-support" type="secondary" onClick={d}>{_}</Component>;
            t[5] = d;
            t[6] = f;
        } else {
            f = t[6];
        }
        const g = f;
        let h;
        if (t[7] === Symbol.for("react.memo_cache_sentinel")) {
            h = s._("Dismiss");
            t[7] = h;
        } else {
            h = t[7];
        }
        let y;
        if (t[8] !== p) {
            const Component = o("WAWebButton.react").Button;
            y = <Component testid="popup-controls-dismiss" type="primary" onClick={p}>{h}</Component>;
            t[8] = p;
            t[9] = y;
        } else {
            y = t[9];
        }
        const C = y;
        let b;
        if (t[10] !== p) {
            b = {
                escape: p
            };
            t[10] = p;
            t[11] = b;
        } else {
            b = t[11];
        }
        const v = b;
        const S = showSupportBtn && g;
        let R;
        if (t[12] !== C || t[13] !== S) {
            R = <>{S}{C}</>;
            t[12] = C;
            t[13] = S;
            t[14] = R;
        } else {
            R = t[14];
        }
        const actions = R;
        let E;
        if (t[15] !== actions || t[16] !== children || t[17] !== title) {
            const Component = o("WAWebModal.react").Modal;
            E = <Component actions={actions} title={title}>{children}</Component>;
            t[15] = actions;
            t[16] = children;
            t[17] = title;
            t[18] = E;
        } else {
            E = t[18];
        }
        let k;
        if (t[19] !== v || t[20] !== E) {
            const Component = o("WAWebKeyboardHotKeys.react").HotKeys;
            k = <Component handlers={v}>{E}</Component>;
            t[19] = v;
            t[20] = E;
            t[21] = k;
        } else {
            k = t[21];
        }
        return k;
    }
    l.default = c;
}, 226);