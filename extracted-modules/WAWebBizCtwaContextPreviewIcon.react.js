__d("WAWebBizCtwaContextPreviewIcon.react", [
    "WAWebCTWAGatingUtils",
    "WAWebLogoFacebookIcon.react",
    "WAWebLogoFacebookRoundIcon.react",
    "WAWebLogoInstagramIcon.react",
    "WAWebPipConst",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    const e = [
        "hostname"
    ];
    let s;
    const u = s || (s = o("react"));
    const c = {
        iconColor: {
            color: "x17t9dm2",
            $$css: true
        }
    };
    function d(t) {
        const n = o("react-compiler-runtime").c(9);
        let r;
        let a;
        if (n[0] !== t) {
            r = t.hostname;
            a = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = r;
            n[2] = a;
        } else {
            r = n[1];
            a = n[2];
        }
        if (r === o("WAWebPipConst").HOSTNAME.INSTAGRAM) {
            let i;
            if (n[3] !== a) {
                i = u.jsx(o("WAWebLogoInstagramIcon.react").LogoInstagramIcon, babelHelpers.extends({}, a));
                n[3] = a;
                n[4] = i;
            } else {
                i = n[4];
            }
            return i;
        }
        if (o("WAWebCTWAGatingUtils").isAdsAttributionEnabled()) {
            let l;
            if (n[5] !== a) {
                l = u.jsx(o("WAWebLogoFacebookRoundIcon.react").LogoFacebookRoundIcon, babelHelpers.extends({
                    iconXstyle: c.iconColor
                }, a));
                n[5] = a;
                n[6] = l;
            } else {
                l = n[6];
            }
            return l;
        }
        let s;
        if (n[7] !== a) {
            s = u.jsx(o("WAWebLogoFacebookIcon.react").LogoFacebookIcon, babelHelpers.extends({}, a));
            n[7] = a;
            n[8] = s;
        } else {
            s = n[8];
        }
        return s;
    }
    l.default = d;
}, 98);