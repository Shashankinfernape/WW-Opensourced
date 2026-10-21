__d("WAWebCoexSystemMessageModalContent.react", [
    "fbt",
    "WAWebClickableLink.react",
    "WAWebCmd",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFbtCommon",
    "WAWebModal.react",
    "WAWebModalManager",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c({ faqUrl, lid, onClose, onVerificationClick, shouldHideVerificationButton = false, text, textLast, wid }) {
        const _ = function() {
            o("WAWebModalManager").ModalManager.close("none");
            self.setTimeout(function() {
                return o("WAWebExternalLink.react").openExternalLink(faqUrl);
            }, 10);
        };
        const Component = r("WAWebClickableLink.react");
        const f = <Component onClick={function() {
            if (onVerificationClick != null) {
                onVerificationClick();
                return;
            }
            o("WAWebCmd").Cmd.verificationDrawer({
                wid,
                lid
            });
        }}>{s._("Verify encryption")}</Component>;
        const extraButtonProps = {
            text: s._("Learn more"),
            onClick: _
        };
        const Component_1 = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component_1 tsNavigationData={{
            surface: "unknown",
            viewName: "coex-system-message"
        }} testid="system-message-modal" onOK={onClose ?? o("WAWebModalManager").closeModalManager} buttonsDirection="horizontal" okText={r("WAWebFbtCommon")("OK")} type={o("WAWebModal.react").ModalTheme.Multiline} extraButtonProps={extraButtonProps}>{text} {shouldHideVerificationButton ? null : f}<br/><br/>{textLast != null && textLast} </Component_1>;
    }
    c.displayName = `${c.name} [from ${i.id}]`;
    l.default = c;
}, 226);