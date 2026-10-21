__d("WAWebModalSingleActionOpener", [
    "WAWebConfirmPopup.react",
    "WAWebModalManager",
    "WAWebNoop",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function UComponent(e) {
        const e_ModalComponentProvider = e.ModalComponentProvider;
        const N = e_ModalComponentProvider === undefined ? o("WAWebConfirmPopup.react").ConfirmPopup : e_ModalComponentProvider;
        const e_shouldDismissWithoutButtonInteraction = e.shouldDismissWithoutButtonInteraction;
        const i = e_shouldDismissWithoutButtonInteraction === undefined ? true : e_shouldDismissWithoutButtonInteraction;
        const l = function() {
            e.onDismiss?.();
            o("WAWebModalManager").ModalManager.off("close_modal", l);
            o("WAWebModalManager").ModalManager.close();
        };
        o("WAWebModalManager").ModalManager.open(<N tsNavigationData={{
            surface: "unknown",
            viewName: "single-action"
        }} title={e.title} cover={e.cover} onOK={l} onOverlayClick={i ? l : r("WAWebNoop")} okText={e.buttonText} okButtonTestid={e.okButtonTestid}>{e.body}</N>, {
            blockClose: !i
        });
        if (i) {
            o("WAWebModalManager").ModalManager.on("close_modal", l);
        }
    }
    l.openSingleActionModal = UComponent;
}, 98);