__d("WAWebSettingsPopup.react", [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebModalManager",
    "WAWebRadio.react",
    "WAWebText.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const e_useState = e.useState;
    const d = {
        explanation: {
            marginBottom: "x1c436fg",
            $$css: true
        }
    };
    function m(e) {
        const t = o("react-compiler-runtime").c(20);
        const { explanation, onSelect, options } = e;
        const i = e_useState(e.initialValue);
        const l = i[0];
        const m = i[1];
        let p;
        if (t[0] !== onSelect || t[1] !== l) {
            p = function() {
                if (l != null) {
                    onSelect(l);
                }
            };
            t[0] = onSelect;
            t[1] = l;
            t[2] = p;
        } else {
            p = t[2];
        }
        const _ = p;
        let f;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            f = function(t) {
                m(t);
            };
            t[3] = f;
        } else {
            f = t[3];
        }
        const g = f;
        let h;
        if (t[4] !== options || t[5] !== l) {
            let y;
            if (t[7] !== l) {
                y = function({ label, secondaryLabel, testid, value }) {
                    const Component = o("WAWebRadio.react").RadioWithLabel;
                    return <li key={`setting-${value}`} data-testid={`option-${value}`}><Component tabIndex={0} name="settings" value={value} label={label} checked={value === l} onChange={function() {
                        return g(value);
                    }} secondaryLabel={secondaryLabel} testid={testid}/></li>;
                };
                t[7] = l;
                t[8] = y;
            } else {
                y = t[8];
            }
            h = options.map(y);
            t[4] = options;
            t[5] = l;
            t[6] = h;
        } else {
            h = t[6];
        }
        const C = h;
        let b;
        if (t[9] === Symbol.for("react.memo_cache_sentinel")) {
            b = {
                surface: "unknown",
                viewName: "settings"
            };
            t[9] = b;
        } else {
            b = t[9];
        }
        const e_title = e.title;
        let S;
        if (t[10] === Symbol.for("react.memo_cache_sentinel")) {
            S = s._("Confirm");
            t[10] = S;
        } else {
            S = t[10];
        }
        let R;
        if (t[11] !== explanation) {
            const Component = o("WAWebText.react").WAWebTextMuted;
            R = explanation != null ? <Component xstyle={d.explanation}>{explanation}</Component> : null;
            t[11] = explanation;
            t[12] = R;
        } else {
            R = t[12];
        }
        let L;
        if (t[13] !== C) {
            L = <form><ol>{C}</ol></form>;
            t[13] = C;
            t[14] = L;
        } else {
            L = t[14];
        }
        let E;
        if (t[15] !== _ || t[16] !== e.title || t[17] !== R || t[18] !== L) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            E = <Component tsNavigationData={b} title={e_title} okText={S} onOK={_} onCancel={o("WAWebModalManager").closeModalManager} testid="settings-popup">{R}{L}</Component>;
            t[15] = _;
            t[16] = e.title;
            t[17] = R;
            t[18] = L;
            t[19] = E;
        } else {
            E = t[19];
        }
        return E;
    }
    l.default = m;
}, 226);