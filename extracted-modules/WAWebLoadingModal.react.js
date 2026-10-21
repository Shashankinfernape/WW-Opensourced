__d("WAWebLoadingModal.react", [
    "WAWebDrawerHeader.react",
    "WAWebLoadingDrawer.react",
    "WAWebModal.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    const e = [
        "theme",
        "headerType"
    ];
    let s;
    const u = s || (s = o("react"));
    function c(t) {
        const n = o("react-compiler-runtime").c(10);
        let a;
        let i;
        let l;
        if (n[0] !== t) {
            l = t.theme;
            i = t.headerType;
            a = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = a;
            n[2] = i;
            n[3] = l;
        } else {
            a = n[1];
            i = n[2];
            l = n[3];
        }
        const s = i === void 0 ? o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP : i;
        const c = l ?? o("WAWebModal.react").ModalTheme.Tower;
        let d;
        if (n[4] !== s || n[5] !== a) {
            d = u.jsx(r("WAWebLoadingDrawer.react"), babelHelpers.extends({
                headerType: s
            }, a));
            n[4] = s;
            n[5] = a;
            n[6] = d;
        } else {
            d = n[6];
        }
        let m;
        if (n[7] !== c || n[8] !== d) {
            const Component = o("WAWebModal.react").Modal;
            m = <Component type={c}>{d}</Component>;
            n[7] = c;
            n[8] = d;
            n[9] = m;
        } else {
            m = n[9];
        }
        return m;
    }
    l.default = c;
}, 98);