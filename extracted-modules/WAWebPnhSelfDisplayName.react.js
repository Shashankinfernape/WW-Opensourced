__d("WAWebPnhSelfDisplayName.react", [
    "WAWebDetailImage.react",
    "WAWebPnhDisplayNameDarkIcon.react",
    "WAWebPnhDisplayNameIcon.react",
    "WAWebThemeContext",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = {
        customImage: {
            minWidth: "xnei2rj",
            marginInlineEnd: "xbelrpt",
            $$css: true
        }
    };
    function c(e) {
        const t = o("react-compiler-runtime").c(17);
        const { displayName, pictureWid } = e;
        const a = o("WAWebThemeContext").useIsDarkTheme();
        const I = a ? o("WAWebPnhDisplayNameDarkIcon.react").PnhDisplayNameDarkIcon : o("WAWebPnhDisplayNameIcon.react").PnhDisplayNameIcon;
        let l;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            l = {
                className: "x1n2onr6"
            };
            t[0] = l;
        } else {
            l = t[0];
        }
        let c;
        if (t[1] !== pictureWid) {
            c = ({
                0: {
                    className: "x10l6tqk xk50ysn x1jchvi3 xjkpybl x89mvso x1vjfegm x6ikm8r x10wlt62 xuxw1ft xlyipyv x12s5l72 x1wgpmmf x1g96rbh"
                },
                1: {
                    className: "x10l6tqk xk50ysn x1jchvi3 xjkpybl x89mvso x1vjfegm x6ikm8r x10wlt62 xuxw1ft xlyipyv x1jtk2o2 x78zum5 x6s0dn4 x1q0g3np xfwv6vp x1f1nzxn x1gocmvm x12peec7"
                }
            })[(pictureWid != null) << 0];
            t[1] = pictureWid;
            t[2] = c;
        } else {
            c = t[2];
        }
        let d;
        if (t[3] !== pictureWid) {
            d = pictureWid != null && s.jsx(o("WAWebDetailImage.react").DetailImage, {
                id: pictureWid,
                size: 24,
                xstyle: u.customImage
            });
            t[3] = pictureWid;
            t[4] = d;
        } else {
            d = t[4];
        }
        let m;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            m = {
                className: "x6ikm8r x10wlt62 xuxw1ft xlyipyv"
            };
            t[5] = m;
        } else {
            m = t[5];
        }
        let p;
        if (t[6] !== displayName) {
            p = <div {...babelHelpers.extends({}, m, {
                dir: "ltr",
                children: displayName
            })}/>;
            t[6] = displayName;
            t[7] = p;
        } else {
            p = t[7];
        }
        let _;
        if (t[8] !== c || t[9] !== d || t[10] !== p) {
            _ = <div {...babelHelpers.extends({}, c, {
                children: [
                    d,
                    p
                ]
            })}/>;
            t[8] = c;
            t[9] = d;
            t[10] = p;
            t[11] = _;
        } else {
            _ = t[11];
        }
        let f;
        if (t[12] !== I) {
            f = <I directional/>;
            t[12] = I;
            t[13] = f;
        } else {
            f = t[13];
        }
        let g;
        if (t[14] !== _ || t[15] !== f) {
            g = <div {...babelHelpers.extends({}, l, {
                "data-testid": "self_display_name",
                children: [
                    _,
                    f
                ]
            })}/>;
            t[14] = _;
            t[15] = f;
            t[16] = g;
        } else {
            g = t[16];
        }
        return g;
    }
    l.default = c;
}, 98);