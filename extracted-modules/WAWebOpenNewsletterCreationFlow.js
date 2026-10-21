__d("WAWebOpenNewsletterCreationFlow", [
    "WAWebBoolFunc",
    "WAWebModalManager",
    "WAWebNewsletterAdminFunnelLogging",
    "WAWebPDFNGatingUtils",
    "WAWebPDFNModal.react",
    "WAWebWamEnumAdminFlowType",
    "WAWebWamEnumChannelAdminAction",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u({ tosAcceptCallback }) {
        const n = new (o("WAWebNewsletterAdminFunnelLogging")).NewsletterAdminFunnelLogger(o("WAWebWamEnumAdminFlowType").ADMIN_FLOW_TYPE.CREATION);
        n.logEvent(o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION.CHANNEL_CREATION_TAP);
        const Component = r("WAWebPDFNModal.react");
        o("WAWebModalManager").ModalManager.open(<Component pdfnId={o("WAWebPDFNGatingUtils").getNewsletterProducerDisclosureId()} verifyTosAccepted={o("WAWebBoolFunc").returnFalse} runIfTosAccepted={function() {
            tosAcceptCallback(n);
        }} onLoadError={function() {
            n.logEvent(o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION.CHANNEL_CREATE_LAUNCH_ERROR);
        }}/>);
    }
    l.openNewsletterCreationFlow = u;
}, 98);