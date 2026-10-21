__d("WAWebGroupHistoryPostJoinConfirmPopup.react", [
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const e_useState = e.useState;
    function c({ cancelText = r("WAWebFbtCommon")("Cancel"), children, okText, onCancel, onConfirm, title }) {
        const m = e_useState(false);
        const p = m[0];
        const _ = m[1];
        const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component tsNavigationData={{
            surface: "unknown",
            viewName: "group-history-post-join"
        }} title={title} onOK={function() {
            if (!p) {
                _(true);
                onConfirm();
            }
        }} okText={okText} okDisabled={p} okSpinner={p} onCancel={onCancel} cancelDisabled={p} cancelText={cancelText}>{children}</Component>;
    }
    c.displayName = `${c.name} [from ${i.id}]`;
    l.default = c;
}, 98);