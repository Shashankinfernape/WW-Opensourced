__d("WAWebKeepInChatWarningKeepOfflineModal", [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebModalManager",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = function() {
        o("WAWebModalManager").ModalManager.closeSupportOrModal();
    };
    function d() {
        const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component tsNavigationData={{
            surface: "unknown",
            viewName: "kic-keep-offline"
        }} testid="kic_offline_modal" onOK={c}>{s._("You can't update a message while offline. Check your internet connection and try again.")}</Component>;
    }
    d.displayName = `${d.name} [from ${i.id}]`;
    l.WarningKeepOfflineModal = d;
}, 226);