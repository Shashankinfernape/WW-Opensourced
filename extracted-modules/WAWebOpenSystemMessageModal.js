__d("WAWebOpenSystemMessageModal", [
    "fbt",
    "WAWebClickableLink.react",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFbtCommon",
    "WAWebModal.react",
    "WAWebModalManager",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e, href, n) {
        const a = function() {
            o("WAWebModalManager").ModalManager.close("none");
            self.setTimeout(function() {
                return o("WAWebExternalLink.react").openExternalLink(href);
            }, 10);
        };
        let extraButtonProps = null;
        let l = null;
        if (n != null) {
            const Component = r("WAWebClickableLink.react");
            l = <Component href={href} onClick={a}>{n}</Component>;
        } else {
            extraButtonProps = {
                text: s._("Learn more"),
                onClick: a
            };
        }
        const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
        const c = <Component tsNavigationData={{
            surface: "unknown",
            viewName: "system-message"
        }} testid="system-message-modal" onOK={o("WAWebModalManager").closeModalManager} okText={r("WAWebFbtCommon")("OK")} type={o("WAWebModal.react").ModalTheme.Multiline} buttonsDirection="horizontal" extraButtonProps={extraButtonProps}>{e}{l != null ? <> {l}</> : null}</Component>;
        o("WAWebModalManager").ModalManager.open(c);
    }
    l.openSystemMessageModal = c;
}, 226);