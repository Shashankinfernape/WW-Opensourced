__d("WAWebFailedMessageModal.react", [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebModalManager",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c({ onDelete, resend, text, title }) {
        if (resend == null && onDelete == null) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            return <Component onOK={o("WAWebModalManager").closeModalManager} tsNavigationData={{
                surface: "unknown",
                viewName: "failed-message"
            }}>{text}</Component>;
        }
        if (onDelete != null) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            return <Component title={title} onOK={function() {
                onDelete();
                o("WAWebModalManager").ModalManager.close();
            }} okText={s._("Delete")} cancelText={r("WAWebFbtCommon")("Cancel")} onCancel={o("WAWebModalManager").closeModalManager} tsNavigationData={{
                surface: "unknown",
                viewName: "failed-message"
            }}>{text}</Component>;
        }
        const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component onOK={function() {
            resend?.();
            o("WAWebModalManager").ModalManager.close();
        }} okText={r("WAWebFbtCommon")("Try again")} cancelText={r("WAWebFbtCommon")("Cancel")} onCancel={o("WAWebModalManager").closeModalManager} tsNavigationData={{
            surface: "unknown",
            viewName: "failed-message"
        }}>{text}</Component>;
    }
    c.displayName = `${c.name} [from ${i.id}]`;
    l.default = c;
}, 226);