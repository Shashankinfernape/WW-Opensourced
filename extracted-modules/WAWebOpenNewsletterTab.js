__d("WAWebOpenNewsletterTab", [
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebDrawerManager",
    "WAWebKeyboardTabUtils",
    "WAWebNewsletterTabFlowLoadable",
    "react",
    "requireDeferred"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = r("requireDeferred")("WAWebBootstrapNewsletter").__setRef("WAWebOpenNewsletterTab");
    function c() {
        u.load().then(({ bootstrapNewsletterBackend })=>bootstrapNewsletterBackend());
        o("WAWebDrawerManager").DrawerManager.openDrawerLeft(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
            descriptorType: "newsletter_tab"
        } : s.jsx(o("WAWebNewsletterTabFlowLoadable").NewsletterTabFlowLoadable, {}), {
            focusType: o("WAWebKeyboardTabUtils").FocusType.CUSTOM,
            transition: "pop-drawer-fast",
            focusOnUnMount: true,
            disableRotateFocus: true
        });
    }
    l.openNewsletterTab = c;
}, 98);