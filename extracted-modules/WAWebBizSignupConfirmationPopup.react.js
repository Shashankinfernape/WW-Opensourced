__d("WAWebBizSignupConfirmationPopup.react", [
    "fbt",
    "WAWeb-moment",
    "WAWebBizBrandingLine.react",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebFrontendMsgGetters",
    "WAWebInAppSignupConfirmation",
    "WAWebModalManager",
    "WAWebName.react",
    "WAWebSignupCTAExperiment",
    "WDSText.react",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        o("WAWebModalManager").ModalManager.open(<D2Component msg={e}/>, {
            transition: "modal-flow"
        });
    }
    function D2Component({ msg }) {
        const n = o("WAWebInAppSignupConfirmation").getInAppSignupConfirmationInfo(msg);
        const a = o("WAWebSignupCTAExperiment").getSignupCTAExperiment();
        const i = o("WAWebFrontendMsgGetters").getChat(msg.unsafe());
        const l = i?.contact;
        if (n == null || l == null) {
            return null;
        }
        const c = u.jsx(o("WAWebName.react").Name, {
            contact: l
        });
        const d = r("WAWeb-moment").unix(parseInt(n.subscriptionTimestamp, 10)).format("ll");
        const Component = r("WDSText.react");
        const Component_1 = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component_1 onOK={o("WAWebModalManager").closeModalManager} okText={r("WAWebFbtCommon")("OK")} title={a === o("WAWebSignupCTAExperiment").SignupCTAExperiment.GetOffers ? s._("Request successful") : s._("Sign up successful")}><Component type="Body2" colorName="contentDeemphasized">{a === o("WAWebSignupCTAExperiment").SignupCTAExperiment.GetOffers ? s._("You chose to get offers and announcements from {contactTitle} on {date}.", [
            s._param("contactTitle", <bdi>{c}</bdi>),
            s._param("date", <bdi>{d}</bdi>)
        ]) : s._("You signed up for offers and announcements from {contactTitle} on {date}.", [
            s._param("contactTitle", <bdi>{c}</bdi>),
            s._param("date", <bdi>{d}</bdi>)
        ])}</Component>{u.jsx(r("WAWebBizBrandingLine.react"), {
            contact: l
        })}</Component_1>;
    }
    D2Component.displayName = `${D2Component.name} [from ${i.id}]`;
    l.openSignupConfirmationPopup = c;
}, 226);