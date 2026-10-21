__d("WAWebStaticMenuItem.react", [
    "WAWebFlex.react",
    "WAWebMenuController.react",
    "WAWebText.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = {
        separator: {
            height: "xjm9jq1",
            backgroundColor: "x4wrhlh",
            $$css: true
        }
    };
    function c(e) {
        const t = o("react-compiler-runtime").c(5);
        const e_children = e.children;
        const r = o("WAWebMenuController.react").useMenu();
        const r_size = r.size;
        const i = r_size === "small" ? 8 : 16;
        let l;
        if (t[0] !== e_children) {
            const Component = o("WAWebText.react").WAWebTextSectionTitle;
            l = <Component>{e_children}</Component>;
            t[0] = e_children;
            t[1] = l;
        } else {
            l = t[1];
        }
        let u;
        if (t[2] !== i || t[3] !== l) {
            const Component = o("WAWebFlex.react").FlexItem;
            u = <Component padding={i} shrink={0}>{l}</Component>;
            t[2] = i;
            t[3] = l;
            t[4] = u;
        } else {
            u = t[4];
        }
        return u;
    }
    function d() {
        return s.jsx(o("WAWebFlex.react").FlexItem, {
            xstyle: u.separator,
            margin: [
                8,
                16
            ]
        });
    }
    d.displayName = `${d.name} [from ${i.id}]`;
    l.MenuHeading = c;
    l.MenuSeparator = d;
}, 98);