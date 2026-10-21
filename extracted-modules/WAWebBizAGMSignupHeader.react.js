__d("WAWebBizAGMSignupHeader.react", [
    "fbt",
    "WAWebBizAGMSignupPrivacyPolicyPopup.react",
    "WAWebKeyboardIsKeyActivation",
    "WAWebModalManager",
    "WAWebSignupCTAExperiment",
    "WAWebSignupFlowLoggerLazy",
    "WDSFlex.stylex",
    "WDSFocusStateStyles",
    "WDSIconWdsIcGift.react",
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
            paddingTop: "x16ovd2e",
            paddingInlineEnd: "x1nzty39",
            paddingBottom: "x12xbjc7",
            paddingInlineStart: "x12w63v0",
            backgroundColor: "x1bu39yj",
            borderStartStartRadius: "xyi3aci",
            borderStartEndRadius: "xwf5gio",
            borderEndEndRadius: "x1p453bz",
            borderEndStartRadius: "x1suzm8a",
            marginTop: "x4qlk2n",
            marginInlineStart: "x3c9gwt",
            marginInlineEnd: "x1pu7lq9",
            marginBottom: "xefnzgg",
            $$css: true
        },
        clickable: {
            cursor: "x1ypdohk",
            $$css: true
        },
        iconCircle: {
            width: "x100vrsf",
            height: "x1vqgdyp",
            borderStartStartRadius: "x1c9tyrk",
            borderStartEndRadius: "xeusxvb",
            borderEndEndRadius: "x1pahc9y",
            borderEndStartRadius: "x1ertn4p",
            backgroundColor: "x16w0wmm",
            color: "x14ug900",
            $$css: true
        },
        contentWrapper: {
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            $$css: true
        }
    };
    function m(t) {
        const n = o("react-compiler-runtime").c(31);
        const { businessWid, chatTimestamp, contact, experiment, privacyPolicyUrl, signupId } = t;
        let _;
        if (n[0] !== businessWid || n[1] !== chatTimestamp || n[2] !== contact || n[3] !== experiment || n[4] !== privacyPolicyUrl || n[5] !== signupId) {
            _ = function() {
                if (privacyPolicyUrl != null) {
                    if (signupId != null) {
                        o("WAWebSignupFlowLoggerLazy").logSignupOp({
                            operation: o("WAWebSignupFlowLoggerLazy").SIGNUP_USER_JOURNEY_OPERATION.AGM_VIEW_DETAILS_CLICKED,
                            signupId,
                            businessWid,
                            chatTimestamp
                        });
                    }
                    o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebBizAGMSignupPrivacyPolicyPopup.react"), {
                        businessWid,
                        chatTimestamp,
                        contact,
                        experiment,
                        privacyPolicyUrl,
                        signupId
                    }), {
                        transition: "modal-flow"
                    });
                }
            };
            n[0] = businessWid;
            n[1] = chatTimestamp;
            n[2] = contact;
            n[3] = experiment;
            n[4] = privacyPolicyUrl;
            n[5] = signupId;
            n[6] = _;
        } else {
            _ = n[6];
        }
        const f = _;
        let g;
        if (n[7] !== f) {
            g = function(t) {
                if (r("WAWebKeyboardIsKeyActivation")(t)) {
                    f();
                }
            };
            n[7] = f;
            n[8] = g;
        } else {
            g = n[8];
        }
        const h = g;
        let y;
        if (n[9] !== f || n[10] !== h || n[11] !== privacyPolicyUrl) {
            y = privacyPolicyUrl != null ? {
                onClick: f,
                onKeyDown: h,
                role: "button",
                tabIndex: 0
            } : undefined;
            n[9] = f;
            n[10] = h;
            n[11] = privacyPolicyUrl;
            n[12] = y;
        } else {
            y = n[12];
        }
        let C;
        if (n[13] !== privacyPolicyUrl) {
            C = (e || (e = r("stylex"))).props(o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus, o("WDSFlex.stylex").wdsFlex.flexColumn, d.wrapper, privacyPolicyUrl != null && d.clickable);
            n[13] = privacyPolicyUrl;
            n[14] = C;
        } else {
            C = n[14];
        }
        let b;
        let v;
        let S;
        if (n[15] === Symbol.for("react.memo_cache_sentinel")) {
            b = (e || (e = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.flexRowCenter, o("WDSFlex.stylex").wdsFlex.columnGapSingle);
            v = <div {...babelHelpers.extends({}, e.props(o("WDSFlex.stylex").wdsFlex.flexCenter, o("WDSFlex.stylex").wdsFlex.flexShrink0, d.iconCircle), {
                children: c.jsx(r("WDSIconWdsIcGift.react"), {
                    width: 20,
                    height: 20
                })
            })}/>;
            S = e.props(o("WDSFlex.stylex").wdsFlex.flexColumn, o("WDSFlex.stylex").wdsFlex.flexGrow1, o("WDSFlex.stylex").wdsFlex.justifyCenter, d.contentWrapper);
            n[15] = b;
            n[16] = v;
            n[17] = S;
        } else {
            b = n[15];
            v = n[16];
            S = n[17];
        }
        let R;
        if (n[18] === Symbol.for("react.memo_cache_sentinel")) {
            R = {
                className: "x6ikm8r x10wlt62 xlyipyv xuxw1ft"
            };
            n[18] = R;
        } else {
            R = n[18];
        }
        let L;
        if (n[19] !== experiment) {
            const Component = r("WDSText.react");
            L = <div {...babelHelpers.extends({
                "data-testid": "agm-signup-header-title"
            }, R, {
                children: <Component type="Body2Emphasized" colorName="contentDefault">{experiment === o("WAWebSignupCTAExperiment").SignupCTAExperiment.GetOffers ? s._("Get offers and announcements") : s._("Sign up for offers and announcements")}</Component>
            })}/>;
            n[19] = experiment;
            n[20] = L;
        } else {
            L = n[20];
        }
        let E;
        if (n[21] !== experiment || n[22] !== privacyPolicyUrl) {
            const Component = r("WDSText.react");
            E = privacyPolicyUrl != null && <div data-testid="agm-signup-header-subtitle" className="x6ikm8r x10wlt62 xlyipyv xuxw1ft"><Component type="Body3" colorName="contentDeemphasized">{experiment === o("WAWebSignupCTAExperiment").SignupCTAExperiment.GetOffers ? s._("View Privacy Policy") : s._("Privacy Policy")}</Component></div>;
            n[21] = experiment;
            n[22] = privacyPolicyUrl;
            n[23] = E;
        } else {
            E = n[23];
        }
        let k;
        if (n[24] !== E || n[25] !== L) {
            k = <div {...babelHelpers.extends({}, b, {
                children: [
                    v,
                    <div {...babelHelpers.extends({}, S, {
                        children: [
                            L,
                            E
                        ]
                    })}/>
                ]
            })}/>;
            n[24] = E;
            n[25] = L;
            n[26] = k;
        } else {
            k = n[26];
        }
        let I;
        if (n[27] !== k || n[28] !== y || n[29] !== C) {
            I = <div {...babelHelpers.extends({
                "data-testid": "agm-signup-header"
            }, y, C, {
                children: k
            })}/>;
            n[27] = k;
            n[28] = y;
            n[29] = C;
            n[30] = I;
        } else {
            I = n[30];
        }
        return I;
    }
    l.default = m;
}, 226);