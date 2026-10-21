__d("WAWebBizAGMSignupPrivacyPolicyPopup.react", [
    "fbt",
    "WAWebBizBrandingLine.react",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebModalManager",
    "WAWebName.react",
    "WAWebSignupCTAExperiment",
    "WAWebSignupFlowLoggerLazy",
    "WDSIconIcOpenInNew.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(19);
        const { businessWid, chatTimestamp, contact, experiment, privacyPolicyUrl, signupId } = e;
        let m;
        if (t[0] !== contact) {
            m = u.jsx(o("WAWebName.react").Name, {
                contact
            });
            t[0] = contact;
            t[1] = m;
        } else {
            m = t[1];
        }
        const p = m;
        let _;
        if (t[2] !== businessWid || t[3] !== chatTimestamp || t[4] !== privacyPolicyUrl || t[5] !== signupId) {
            _ = function() {
                if (signupId != null) {
                    o("WAWebSignupFlowLoggerLazy").logSignupOp({
                        operation: o("WAWebSignupFlowLoggerLazy").SIGNUP_USER_JOURNEY_OPERATION.AGM_BOTTOMSHEET_EXTERNAL_NAVIGATION,
                        signupId,
                        businessWid,
                        chatTimestamp
                    });
                }
                o("WAWebExternalLink.react").openExternalLink(privacyPolicyUrl);
                o("WAWebModalManager").ModalManager.close();
            };
            t[2] = businessWid;
            t[3] = chatTimestamp;
            t[4] = privacyPolicyUrl;
            t[5] = signupId;
            t[6] = _;
        } else {
            _ = t[6];
        }
        const f = _;
        let g;
        if (t[7] === Symbol.for("react.memo_cache_sentinel")) {
            g = s._("View Privacy Policy");
            t[7] = g;
        } else {
            g = t[7];
        }
        let h;
        if (t[8] !== p) {
            h = s._("About {contactTitle} Privacy Policy", [
                s._param("contactTitle", p)
            ]);
            t[8] = p;
            t[9] = h;
        } else {
            h = t[9];
        }
        let y;
        if (t[10] !== experiment) {
            const Component = r("WDSText.react");
            y = <Component type="Body2" colorName="contentDeemphasized">{experiment === o("WAWebSignupCTAExperiment").SignupCTAExperiment.GetOffers ? s._("By choosing to get offers and announcements, you agree that this business will use your contact info as described in their Privacy Policy. You also agree to receive messages from them on WhatsApp.") : s._("By signing up, you agree that this business will use your contact info as described in their Privacy Policy. You also agree to get offers and announcements from them on WhatsApp.")}</Component>;
            t[10] = experiment;
            t[11] = y;
        } else {
            y = t[11];
        }
        let C;
        if (t[12] !== contact) {
            C = u.jsx(r("WAWebBizBrandingLine.react"), {
                contact
            });
            t[12] = contact;
            t[13] = C;
        } else {
            C = t[13];
        }
        let b;
        if (t[14] !== f || t[15] !== h || t[16] !== y || t[17] !== C) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            b = <Component onCancel={o("WAWebModalManager").closeModalManager} onOK={f} okIcon={r("WDSIconIcOpenInNew.react")} okText={g} title={h}>{y}{C}</Component>;
            t[14] = f;
            t[15] = h;
            t[16] = y;
            t[17] = C;
            t[18] = b;
        } else {
            b = t[18];
        }
        return b;
    }
    l.default = c;
}, 226);