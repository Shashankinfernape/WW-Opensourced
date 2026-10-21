__d("WAWebMediaNotReadableModal.react", [
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
        return <Component tsNavigationData={{
            surface: "unknown",
            viewName: "media-not-readable"
        }} title={s._("Can't send changed file")} onOK={o("WAWebModalManager").closeModalManager} okText={r("WAWebFbtCommon")("OK")}>{s._("This document has changed since you tried to send it. Please try again.")}</Component>;
    }
    c.displayName = `${c.name} [from ${i.id}]`;
    l.default = c;
}, 226);