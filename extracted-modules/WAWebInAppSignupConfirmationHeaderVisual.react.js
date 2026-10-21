__d("WAWebInAppSignupConfirmationHeaderVisual.react", [
    "fbt",
    "WAWebDefaultProfilePicture.react",
    "WAWebSignupCTAExperiment",
    "WDSFlex.stylex",
    "WDSIconIcCheck.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = {
        wrapper: {
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            borderStartStartRadius: "xyi3aci",
            borderStartEndRadius: "xwf5gio",
            borderEndEndRadius: "x1p453bz",
            borderEndStartRadius: "x1suzm8a",
            paddingTop: "x16ovd2e",
            paddingInlineEnd: "x1nzty39",
            paddingBottom: "x12xbjc7",
            paddingInlineStart: "x12w63v0",
            backgroundColor: "x1bu39yj",
            $$css: true
        },
        badgeIcon: {
            color: "x1pse0pq",
            $$css: true
        },
        contentWrapper: {
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            $$css: true
        },
        fallbackPhotoBackground: {
            backgroundColor: "x16w0wmm",
            $$css: true
        }
    };
    function m(t) {
        const n = o("react-compiler-runtime").c(18);
        const { experiment, onProfilePicError, profilePicUrl } = t;
        let u;
        let m;
        let p;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            u = (e || (e = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.flexColumn, d.wrapper);
            m = e.props(o("WDSFlex.stylex").wdsFlex.flexRowCenter, o("WDSFlex.stylex").wdsFlex.columnGapSingle);
            p = {
                className: "x1n2onr6 x1useyqa xsdox4t x2lah0s"
            };
            n[0] = u;
            n[1] = m;
            n[2] = p;
        } else {
            u = n[0];
            m = n[1];
            p = n[2];
        }
        let _;
        if (n[3] !== onProfilePicError || n[4] !== profilePicUrl) {
            _ = profilePicUrl != null ? <img className="x1useyqa xsdox4t x1c9tyrk xeusxvb x1pahc9y x1ertn4p xl1xv1r" src={profilePicUrl} alt="" onError={onProfilePicError}/> : c.jsx(r("WAWebDefaultProfilePicture.react"), {
                type: "1-1",
                size: 48,
                backgroundStyles: d.fallbackPhotoBackground
            });
            n[3] = onProfilePicError;
            n[4] = profilePicUrl;
            n[5] = _;
        } else {
            _ = n[5];
        }
        let f;
        if (n[6] === Symbol.for("react.memo_cache_sentinel")) {
            f = <div className="x10l6tqk x1me21xl x1l195vm x1xvr5cs x1nqnulx x1c9tyrk xeusxvb x1pahc9y x1ertn4p xfn3atn x78zum5 x6s0dn4 xl56j7k x1ktv7sr x142x0oa xv7zg05 x12dgle5 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1y9zq84 xt9xd2u x3tsejo x1ahzpo1">{c.jsx(r("WDSIconIcCheck.react"), {
                width: 16,
                height: 16,
                iconXstyle: d.badgeIcon
            })}</div>;
            n[6] = f;
        } else {
            f = n[6];
        }
        let g;
        if (n[7] !== _) {
            g = <div {...babelHelpers.extends({}, p, {
                children: [
                    _,
                    f
                ]
            })}/>;
            n[7] = _;
            n[8] = g;
        } else {
            g = n[8];
        }
        let h;
        if (n[9] === Symbol.for("react.memo_cache_sentinel")) {
            h = (e || (e = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.flexColumn, o("WDSFlex.stylex").wdsFlex.flexGrow1, o("WDSFlex.stylex").wdsFlex.justifyCenter, d.contentWrapper);
            n[9] = h;
        } else {
            h = n[9];
        }
        let y;
        if (n[10] !== experiment) {
            const Component = r("WDSText.react");
            y = <Component type="Body2Emphasized" colorName="contentDefault" testid="inapp-signup-confirmation-header-title">{experiment === o("WAWebSignupCTAExperiment").SignupCTAExperiment.GetOffers ? s._("Request successful") : s._("Sign up successful")}</Component>;
            n[10] = experiment;
            n[11] = y;
        } else {
            y = n[11];
        }
        let C;
        if (n[12] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSText.react");
            C = <Component type="Body3" colorName="contentDeemphasized" testid="inapp-signup-confirmation-header-subtitle">{s._("View details")}</Component>;
            n[12] = C;
        } else {
            C = n[12];
        }
        let b;
        if (n[13] !== y) {
            b = <div {...babelHelpers.extends({}, h, {
                children: [
                    y,
                    C
                ]
            })}/>;
            n[13] = y;
            n[14] = b;
        } else {
            b = n[14];
        }
        let v;
        if (n[15] !== b || n[16] !== g) {
            v = <div {...babelHelpers.extends({
                "data-testid": "inapp-signup-confirmation-header"
            }, u, {
                children: <div {...babelHelpers.extends({}, m, {
                    children: [
                        g,
                        b
                    ]
                })}/>
            })}/>;
            n[15] = b;
            n[16] = g;
            n[17] = v;
        } else {
            v = n[17];
        }
        return v;
    }
    l.default = m;
}, 226);