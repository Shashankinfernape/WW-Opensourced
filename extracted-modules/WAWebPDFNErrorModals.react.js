__d("WAWebPDFNErrorModals.react", [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebModalManager",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c() {
        const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component onOK={o("WAWebModalManager").closeModalManager} title={s._("Couldn't load this page")} okText={r("WAWebFbtCommon")("Try again")} cancelText={s._("Dismiss")} onCancel={o("WAWebModalManager").closeModalManager}>{s._("Check your internet connection and try again.")}</Component>;
    }
    c.displayName = `${c.name} [from ${i.id}]`;
    function d() {
        const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component onOK={o("WAWebModalManager").closeModalManager} title={s._("Couldn't load this page")} okText={r("WAWebFbtCommon")("Try again")} cancelText={s._("Dismiss")} onCancel={o("WAWebModalManager").closeModalManager}>{s._("Please try again later.")}</Component>;
    }
    d.displayName = `${d.name} [from ${i.id}]`;
    l.InternetErrorModal = c;
    l.ServerErrorModal = d;
}, 226);