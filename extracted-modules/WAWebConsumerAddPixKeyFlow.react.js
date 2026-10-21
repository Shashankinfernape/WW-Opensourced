__d("WAWebConsumerAddPixKeyFlow.react", [
    "WAWebModalManager",
    "WAWebPaymentOnboardingFlowLoadable",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u({ onSuccess, previousScreen, referral }) {
        const Component = o("WAWebPaymentOnboardingFlowLoadable").PaymentOnboardingFlowLoadable;
        o("WAWebModalManager").ModalManager.open(<Component onSuccess={onSuccess} previousScreen={previousScreen} referral={referral}/>, {
            transition: "modal-flow"
        });
    }
    l.openConsumerAddPixKeyModal = u;
}, 98);