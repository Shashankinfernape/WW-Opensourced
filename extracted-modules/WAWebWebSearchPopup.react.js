__d("WAWebWebSearchPopup.react", [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFbtCommon",
    "WAWebHfmTextSearchCompleteWamEvent",
    "WAWebModalManager",
    "WAWebNetworkStatus",
    "WAWebSTWText",
    "WAWebSearchTheWebModal.react",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c({ entryPoint, message, stwFormat }) {
        if (entryPoint != null && stwFormat != null) {
            return u.jsx(r("WAWebSearchTheWebModal.react"), {
                message,
                entryPoint,
                stwFormat
            });
        }
        const i = function() {
            const t = message.body ?? "";
            o("WAWebExternalLink.react").openExternalLink(o("WAWebSTWText").createTextSearchLink(t));
            new (o("WAWebHfmTextSearchCompleteWamEvent")).HfmTextSearchCompleteWamEvent().commit();
            o("WAWebModalManager").ModalManager.close();
        };
        const cancelText = r("WAWebFbtCommon")("Cancel");
        if (r("WAWebNetworkStatus").online) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            return <Component cancelText={cancelText} onCancel={o("WAWebModalManager").closeModalManager} okText={s._("Search web")} onOK={i} tsNavigationData={{
                surface: "unknown",
                viewName: "web-search"
            }}>{s._("Would you like to search this on the web? This will upload the message to Google.")}</Component>;
        }
        const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component okText={r("WAWebFbtCommon")("OK")} onOK={o("WAWebModalManager").closeModalManager} tsNavigationData={{
            surface: "unknown",
            viewName: "web-search-offline"
        }}>{s._("Couldn't search the web. Check your computer's internet connection and try again.")}</Component>;
    }
    c.displayName = `${c.name} [from ${i.id}]`;
    l.default = c;
}, 226);