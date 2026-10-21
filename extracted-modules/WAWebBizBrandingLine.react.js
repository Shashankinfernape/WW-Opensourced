__d("WAWebBizBrandingLine.react", [
    "fbt",
    "WAWebDetailImage.react",
    "WAWebName.react",
    "WDSFlex.stylex",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = {
        container: {
            justifyContent: "x1nhvcw1",
            marginTop: "x1ci5j9l",
            $$css: true
        }
    };
    function MComponent(t) {
        const n = o("react-compiler-runtime").c(10);
        const t_contact = t.contact;
        let i;
        if (n[0] !== t_contact) {
            i = c.jsx(o("WAWebName.react").Name, {
                contact: t_contact
            });
            n[0] = t_contact;
            n[1] = i;
        } else {
            i = n[1];
        }
        const l = i;
        let u;
        if (n[2] === Symbol.for("react.memo_cache_sentinel")) {
            u = (e || (e = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.flexRowCenter, o("WDSFlex.stylex").wdsFlex.columnGapSingle, d.container);
            n[2] = u;
        } else {
            u = n[2];
        }
        let m;
        if (n[3] !== t_contact.id) {
            m = c.jsx(o("WAWebDetailImage.react").DetailImage, {
                id: t_contact.id,
                size: 16,
                loadAnimation: false
            });
            n[3] = t_contact.id;
            n[4] = m;
        } else {
            m = n[4];
        }
        let p;
        if (n[5] !== l) {
            const Component = r("WDSText.react");
            p = <Component type="Body3" colorName="contentDeemphasized">{s._("Managed by {contactTitle}", [
                s._param("contactTitle", l)
            ])}</Component>;
            n[5] = l;
            n[6] = p;
        } else {
            p = n[6];
        }
        let _;
        if (n[7] !== m || n[8] !== p) {
            _ = <div {...babelHelpers.extends({}, u, {
                children: [
                    m,
                    p
                ]
            })}/>;
            n[7] = m;
            n[8] = p;
            n[9] = _;
        } else {
            _ = n[9];
        }
        return _;
    }
    l.default = MComponent;
}, 226);