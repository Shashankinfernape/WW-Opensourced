__d("WAWebAddEditPixFeature", [
    "WAWebBusinessAddPixModalLoadable",
    "WAWebModalManager",
    "WAWebPaymentOnboardingFlowLoadable",
    "WAWebPixPaymentRequestFeature",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(previousScreen, t, prefill, prefillOutcome, onPixKeySaved) {
        if (o("WAWebPixPaymentRequestFeature").isPixPaymentRequestEnabled()) {
            const Component = o("WAWebPaymentOnboardingFlowLoadable").PaymentOnboardingFlowLoadable;
            o("WAWebModalManager").ModalManager.open(<Component onPixKeySaved={onPixKeySaved} prefill={prefill} prefillOutcome={prefillOutcome} referral={t} previousScreen={previousScreen}/>, {
                transition: "modal-flow"
            });
        } else {
            const Component = o("WAWebBusinessAddPixModalLoadable").WAWebBizPaymentsBrazilAddPixModalLoadable;
            o("WAWebModalManager").ModalManager.open(<Component onPixKeySaved={onPixKeySaved} prefill={prefill} prefillOutcome={prefillOutcome} referral={t} previousScreen={previousScreen}/>);
        }
    }
    l.openPixCredentialManagementModal = u;
}, 98);