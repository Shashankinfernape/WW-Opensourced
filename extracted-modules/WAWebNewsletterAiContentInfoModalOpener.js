__d("WAWebNewsletterAiContentInfoModalOpener", [
    "invariant",
    "WAWebModalManager",
    "WAWebNewsletterAiContentInfoModalLoadable",
    "WAWebNewsletterAiContentInfoModalTypes",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e, t = {}) {
        const n = t;
        const { onClose, onConfirm } = n;
        if (e === o("WAWebNewsletterAiContentInfoModalTypes").AiContentModalVariant.ADMIN_CONFIRMATION) {
            if (onConfirm == null) {
                s(0, 162897);
            }
            const Component = o("WAWebNewsletterAiContentInfoModalLoadable").NewsletterAiContentInfoModalLoadable;
            o("WAWebModalManager").ModalManager.open(<Component variant={e} onConfirm={function() {
                onConfirm();
                onClose?.();
                o("WAWebModalManager").closeModalManager();
            }} onCancel={function() {
                onClose?.();
                o("WAWebModalManager").closeModalManager();
            }}/>);
            return;
        }
        const Component = o("WAWebNewsletterAiContentInfoModalLoadable").NewsletterAiContentInfoModalLoadable;
        o("WAWebModalManager").ModalManager.open(<Component variant={e} onClose={function() {
            onClose?.();
            o("WAWebModalManager").closeModalManager();
        }}/>);
    }
    l.openAiContentInfoModal = c;
}, 98);