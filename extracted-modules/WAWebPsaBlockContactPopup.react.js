__d("WAWebPsaBlockContactPopup.react", [
    "fbt",
    "WAWebClickableLink.react",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebKeyboardHotKeys.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c({ onBlock, onCancel }) {
        const a = <>{s._("WhatsApp won't be able to send you messages about new features or tips from this account.")}<br/><br/>{s._("You may still receive messages with important information about your account or WhatsApp services.")}</>;
        const href = o("WAWebFaqUrl").getWAChatFaqUrl();
        const l = function(t) {
            t.preventDefault();
            o("WAWebModalManager").ModalManager.close("none");
            self.setTimeout(function() {
                return o("WAWebExternalLink.react").openExternalLink(href);
            }, 10);
        };
        const Component = r("WAWebClickableLink.react");
        const c = <Component href={href} onClick={l}>{s._("Learn more")}</Component>;
        const enter = function(n) {
            n.stopPropagation();
            n.preventDefault();
            onBlock();
        };
        const escape = function(t) {
            t.stopPropagation();
            t.preventDefault();
            onCancel();
        };
        const p = {
            enter,
            escape
        };
        const Component_1 = o("WAWebConfirmPopup.react").ConfirmPopup;
        const Component_2 = o("WAWebKeyboardHotKeys.react").HotKeys;
        return <Component_2 handlers={p}><Component_1 tsNavigationData={{
            surface: "unknown",
            viewName: "psa-block-contact"
        }} onOK={onBlock} okText={r("WAWebFbtCommon")("Block")} onCancel={onCancel} type={o("WAWebModal.react").ModalTheme.Multiline}>{a} {c}</Component_1></Component_2>;
    }
    c.displayName = `${c.name} [from ${i.id}]`;
    l.default = c;
}, 226);