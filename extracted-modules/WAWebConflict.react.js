__d("WAWebConflict.react", [
    "WAWebConfirmPopup.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(6);
        const { cancelText: n, children: r, okText: a, onCancel: i, onOK: l } = e;
        let u;
        if (t[0] !== n || t[1] !== r || t[2] !== a || t[3] !== i || t[4] !== l) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            u = <Component cover cancelText={n} onCancel={i} okText={a} onOK={l}>{r}</Component>;
            t[0] = n;
            t[1] = r;
            t[2] = a;
            t[3] = i;
            t[4] = l;
            t[5] = u;
        } else {
            u = t[5];
        }
        return u;
    }
    l.default = u;
}, 98);